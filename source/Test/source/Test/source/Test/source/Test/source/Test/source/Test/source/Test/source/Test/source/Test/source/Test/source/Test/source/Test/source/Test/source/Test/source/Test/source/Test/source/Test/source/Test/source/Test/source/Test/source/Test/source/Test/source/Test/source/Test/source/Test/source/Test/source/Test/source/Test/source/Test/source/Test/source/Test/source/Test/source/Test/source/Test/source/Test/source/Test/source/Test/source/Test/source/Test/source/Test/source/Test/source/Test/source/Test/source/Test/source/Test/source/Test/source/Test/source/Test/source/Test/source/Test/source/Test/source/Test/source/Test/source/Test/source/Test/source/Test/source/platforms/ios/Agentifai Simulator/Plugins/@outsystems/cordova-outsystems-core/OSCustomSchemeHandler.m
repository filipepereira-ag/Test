//
//  OSCustomSchemeHandler.m
//  WKWebViewTest
//
//  Created by Pedro Maroco on 22/07/2019.
//

#import "OSCustomSchemeHandler.h"

#import <objc/runtime.h>

#import "OSLogger.h"
#import "OSHTTPFactory.h"

NSString *const OS_DEFAULT_SCHEME = @"https";
NSString *const OS_CUSTOM_SCHEME = @"outsystems";

@interface OSCustomSchemeHandler()
@property (nonatomic, strong) id <OSLoggerProtocol> logger;
@property (nonatomic, strong) NSURLSession *downloadSession;

@end

@implementation OSCustomSchemeHandler

static NSString* const kUrlSchemeAssociatedDataTaskKey = @"com.outsystems.urlschemetask.associateddatataskkey";
static NSString* const kUrlSchemeAssociatedStateKey = @"com.outsystems.urlschemetask.associatedstatekey";

/**
 * Lazy getter for downloadSession.
 * This should be used every time downloadSession is needed and *not* the instance variable (_downloadSession)
 */
-(NSURLSession*) downloadSession {
    if(!_downloadSession) {
        NSURLSessionConfiguration *sessionConfig = [OSHTTPFactory defaultConfiguration];
        _downloadSession = [NSURLSession sessionWithConfiguration:sessionConfig];
    }
    
    return _downloadSession;
}

/**
 * Injects the Referer header to the given request in case this addition is enabled
 * Context: https://outsystemsrd.atlassian.net/browse/RNMT-4762
 */
- (void) setRefererHeaderIfEnabled:(NSMutableURLRequest *)request {
    if([self isReferrerHeaderEnabled]){
        NSString *referrer = [NSString stringWithFormat:@"%@://%@", OS_DEFAULT_SCHEME, self.referrer];
        [request setValue:referrer forHTTPHeaderField:@"Referer"];
    }
}

/* 
 * Receives a NSURLRequest request and changes every occurence of "outsystems://"
 * to "https://" scheme, including all headers set in the request.
 */
- (NSURLRequest *)convertToHTTPProtocol:(NSURLRequest *)request {
    
    NSURLComponents *components = [NSURLComponents componentsWithURL:request.URL resolvingAgainstBaseURL:YES];
    components.scheme = OS_DEFAULT_SCHEME;
    
    NSMutableURLRequest *newRequest = [NSMutableURLRequest requestWithURL:components.URL];
    [newRequest setHTTPMethod:request.HTTPMethod];
    
    NSDictionary *headers = [request allHTTPHeaderFields];
    for(NSString *key in [headers allKeys]){
        NSString *value= [headers objectForKey:key];
        
        if([value containsString:[OS_CUSTOM_SCHEME stringByAppendingString:@"://"]]){
            value = [value stringByReplacingOccurrencesOfString:[OS_CUSTOM_SCHEME stringByAppendingString:@"://"] withString:[OS_DEFAULT_SCHEME stringByAppendingString:@"://"]];
        }
        
        [newRequest setValue:value forHTTPHeaderField:key];
    }
    
    [self setRefererHeaderIfEnabled:newRequest];

    return newRequest;
}

- (void)webView:(nonnull WKWebView *)webView startURLSchemeTask:(nonnull id<WKURLSchemeTask>)urlSchemeTask {
    if(!self.logger){
        _logger = [OSLogger sharedInstance];
    }
    
    NSURLRequest *request = [urlSchemeTask request];
    
    if(![[request HTTPMethod] isEqualToString:@"GET"]){
        NSURLResponse *newResponse = [[NSHTTPURLResponse alloc] initWithURL:[request URL] statusCode:404 HTTPVersion:@"HTTP/1.1" headerFields:nil];
        [urlSchemeTask didReceiveResponse:newResponse];
        [urlSchemeTask didFinish];
        return;
    }
    
    NSURLRequest * newRequest = [self convertToHTTPProtocol:request];
    
    [self.logger logDebug:[NSString stringWithFormat:@"Original request: %@", [request URL]] withModule:@"OSWKWebView"];
    [self.logger logDebug:[NSString stringWithFormat:@"Converted request: %@", [newRequest URL]] withModule:@"OSWKWebView"];
    
    NSURLSessionDataTask *dataTask = [self.downloadSession dataTaskWithRequest:newRequest completionHandler:^(NSData* _Nullable data, NSURLResponse* _Nullable response, NSError* _Nullable error) {
        dispatch_async(dispatch_get_main_queue(), ^{
            if(error){
                if(![self isUrlSchemeTaskFlagged: urlSchemeTask]) {
                    [urlSchemeTask didFailWithError:error];
                }
                return;
            }
            
            if([self isUrlSchemeTaskFlagged: urlSchemeTask]) {
                return; // do nothing more.
            }
            
            /* The following lines are only required to show the request with "outsystems://" scheme in Safari inspector */
            NSURLComponents *components = [NSURLComponents componentsWithURL:[response URL] resolvingAgainstBaseURL:YES];
            components.scheme = OS_CUSTOM_SCHEME;
            
            NSHTTPURLResponse* httpResponse = (NSHTTPURLResponse*)response;
            NSURLResponse *newResponse = [[NSHTTPURLResponse alloc] initWithURL:components.URL statusCode:httpResponse.statusCode HTTPVersion:@"HTTP/1.1" headerFields:[httpResponse allHeaderFields]];
            
            [urlSchemeTask didReceiveResponse:newResponse];
            [urlSchemeTask didReceiveData:data];
            [urlSchemeTask didFinish];
        });
    }];
    
    [self saveDataTaskIntoUrlSchemeTask:urlSchemeTask dataTask:dataTask];
    
    [dataTask resume];
}

- (void)webView:(nonnull WKWebView *)webView stopURLSchemeTask:(nonnull id<WKURLSchemeTask>)urlSchemeTask {
    [self.logger logInfo:[NSString stringWithFormat:@"Stopped loading URL: %@",[[[urlSchemeTask request] URL] absoluteString]] withModule:@"OSWKWebView"];
    [self flagUrlSchemeTaskAsStopped:urlSchemeTask];
    NSURLSessionDataTask* task = [self getDataTaskFromSchemeTask:urlSchemeTask];
    [task cancel];
}

-(void) saveDataTaskIntoUrlSchemeTask:(id<WKURLSchemeTask>) schemeTask dataTask:(NSURLSessionDataTask*) task API_AVAILABLE(ios(11.0)){
    objc_setAssociatedObject(schemeTask, &kUrlSchemeAssociatedDataTaskKey, task, OBJC_ASSOCIATION_RETAIN);
}

-(NSURLSessionDataTask*) getDataTaskFromSchemeTask: (id<WKURLSchemeTask>) schemeTask API_AVAILABLE(ios(11.0)){
    return objc_getAssociatedObject(schemeTask, &kUrlSchemeAssociatedDataTaskKey);
}

-(void) flagUrlSchemeTaskAsStopped:(id<WKURLSchemeTask>) schemeTask API_AVAILABLE(ios(11.0)){
    objc_setAssociatedObject(schemeTask, &kUrlSchemeAssociatedStateKey, @(1), OBJC_ASSOCIATION_RETAIN);
}

-(BOOL) isUrlSchemeTaskFlagged:(id<WKURLSchemeTask>) schemeTask API_AVAILABLE(ios(11.0)){
    NSNumber* flagVal = objc_getAssociatedObject(schemeTask, &kUrlSchemeAssociatedStateKey);
    return [flagVal boolValue];
}

@end
