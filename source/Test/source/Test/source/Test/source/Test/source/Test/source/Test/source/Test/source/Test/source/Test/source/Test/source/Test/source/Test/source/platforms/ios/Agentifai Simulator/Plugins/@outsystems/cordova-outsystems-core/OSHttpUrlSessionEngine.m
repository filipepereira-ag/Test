#import "OSHttpUrlSessionEngine.h"
#import "OSHttpHeadersUtils.h"
#import "OSHTTPFactory.h"

@interface OSHttpUrlSessionEngine() <NSURLSessionTaskDelegate>

@property (nonatomic, strong) NSURLSession* urlSession;
@property (nonatomic, strong) id<OSHttpCookieHandler> cookieHandler;

@end

@implementation OSHttpUrlSessionEngine

typedef void (^TaskCompletionHandler)(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error);

+ (instancetype)createWithCookieHandler:(id<OSHttpCookieHandler>_Nonnull) cookieHandler {
    return [[self alloc] initWithCookieHandler:cookieHandler];
}

- (instancetype)initWithCookieHandler:(id<OSHttpCookieHandler>) handler {
    
    self = [super init];
    if (self) {
        _cookieHandler = handler;
    }
    return self;
}

/**
 Lazy getter for urlSession.
 This should be used every time urlSession is needed and *not* the instance variable (_urlSession)
 */
- (NSURLSession*) urlSession {
    if(!_urlSession) {
        NSURLSessionConfiguration *sessionConfig = [OSHTTPFactory defaultConfiguration];
        _urlSession = [NSURLSession sessionWithConfiguration:sessionConfig delegate:self delegateQueue:nil];
    }
    
    return _urlSession;
}

- (void)sendRequest:(NSString*) requestId
                url:(NSURL*) url
             method:(OSHttpMethod) method
        withHeaders:(NSDictionary*) headers
        withTimeout:(NSNumber*) timeout
           withBody:(NSData*) body
        andCallback:(OSHttpRequestCallback) callback {
    
    NSMutableURLRequest* request = [NSMutableURLRequest requestWithURL:url cachePolicy:NSURLRequestUseProtocolCachePolicy timeoutInterval:[timeout doubleValue] / 1000.0];
    
    // Retrieve persisted headers/cookies from sharedCookieStorage for UIWebView or some other
    // cookie storage for WKWebView
    [self.cookieHandler getPersistedCookiesForUrl:url completionHandler:^(NSDictionary* headerCookie) {
        // Process "dynamic"/provided headers
        NSDictionary* processedHeaders = [OSHttpHeadersUtils processRequestHeaders:headers];
        
        // Set persisted headerCookie on the request
        NSMutableDictionary* mergedHeaders = [NSMutableDictionary dictionaryWithDictionary:headerCookie];
        
        // Merge both processed and persisted cookies
        [mergedHeaders addEntriesFromDictionary:processedHeaders];
        
        [request setAllHTTPHeaderFields:mergedHeaders];
        
        // set request method
        if(method == OSHttpMethod_POST) {
            [request setHTTPMethod:@"POST"];
            
            // set request body (can be null)
            [request setHTTPBody:body];
        }
        
        if(method == OSHttpMethod_GET) {
            [request setHTTPMethod:@"GET"];
        }
        
        TaskCompletionHandler completionHandler = ^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
            if(response) {
                NSHTTPURLResponse* httpResponse = (NSHTTPURLResponse*)response;
                // Save/persist response headers/cookies
                [self.cookieHandler persistCookiesFromResponseHeaders:[httpResponse allHeaderFields] forUrl:response.URL completionHandler:^{
                    callback(requestId, url, data, httpResponse, error);
                }];
            } else {
                callback(requestId, url, data, nil, error);
            }
        };
        
        NSURLSessionDataTask* task = [self.urlSession dataTaskWithRequest:request completionHandler: completionHandler];
        task.taskDescription = requestId;
        [task resume];
    }];
}

- (void)abortRequest:(NSString*) requestId completionHandler:(void(^)(void)) completionHandler {
    [self.urlSession getAllTasksWithCompletionHandler:^(NSArray<__kindof NSURLSessionTask *> * _Nonnull tasks) {
        NSPredicate* filterPredicate = [NSPredicate predicateWithBlock:^BOOL(id  _Nullable evaluatedObject, NSDictionary<NSString *,id> * _Nullable bindings) {
            NSURLSessionTask* task = (NSURLSessionTask*) evaluatedObject;
            return [task.taskDescription isEqualToString:requestId];
        }];
        
        NSArray<NSURLSessionTask*>* filteredTasks = [tasks filteredArrayUsingPredicate:filterPredicate];
        if(filteredTasks.count <= 0) {
            return completionHandler();
        }
        
        NSURLSessionTask* task = filteredTasks[0];
        [task cancel];
        return completionHandler();
    }];
}

- (void) abortAllRequestsWithCompletionHandler:(void(^)(void)) completionHandler {
    [self.urlSession getAllTasksWithCompletionHandler:^(NSArray<__kindof NSURLSessionTask *> * _Nonnull tasks) {
        for (NSURLSessionDataTask* task in tasks) {
            [task cancel];
        }
        
        completionHandler();
    }];
}

#pragma mark - NSURLSessionTaskDelegate methods

- (void)URLSession:(NSURLSession *)session
              task:(NSURLSessionTask *)task
willPerformHTTPRedirection:(NSHTTPURLResponse *)response
        newRequest:(NSURLRequest *)request
 completionHandler:(void (^)(NSURLRequest *))completionHandler {
        
    if(response) {
        NSHTTPURLResponse* httpResponse = (NSHTTPURLResponse*)response;
        // Save/persist response headers/cookies
        [self.cookieHandler persistCookiesFromResponseHeaders:[httpResponse allHeaderFields] forUrl:response.URL completionHandler:^{
              
            [self.cookieHandler getPersistedCookiesForUrl:[request URL]  completionHandler:^(NSDictionary* headerCookie) {
            
                NSDictionary* processedHeaders = [OSHttpHeadersUtils processRequestHeaders:[request allHTTPHeaderFields]];
                                
                NSMutableDictionary* mergedHeaders = [NSMutableDictionary dictionaryWithDictionary:headerCookie];
                
                [mergedHeaders addEntriesFromDictionary:processedHeaders];
                                
                NSMutableURLRequest* newRequest = [request mutableCopy];
                
                [newRequest setAllHTTPHeaderFields:mergedHeaders];
                            
                completionHandler(newRequest);
                
            }];
            
        }];
    } else {
        completionHandler(request);
    }
    
}

@end
