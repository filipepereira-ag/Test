#import "OSCordovaLoaderProtocol.h"
#import "OSMimeTypesHelper.h"
#import "OSNativeCache.h"
#import "OSLogger.h"

static NSString* const OSCordovaLoaderRegex = @"(/([\\da-zA-Z\\-_]+))?(/(cdvload|scripts)/)";
static NSString* const OSCordovaLoaderFolder = @"/www/";
static NSString* const OSCordovaLoaderHandledKey = @"OSCordovaLoaderURLProtocolHandledKey";
static NSString* const OSTimestampQueryParameter = @"_ts";

@implementation OSCordovaLoaderURLProtocol

static NSMutableDictionary *localResources;

+ (BOOL)canInitWithRequest:(NSURLRequest*)request
{
    NSURL* url = [request URL];

    if ([NSURLProtocol propertyForKey:OSCordovaLoaderHandledKey inRequest:request]) {
        return NO;
    }

    if ([[url scheme] rangeOfString:@"http"].location != NSNotFound) {

        NSURL* url = [request URL];
        
        BOOL intercept =[self shouldInterceptRequest:url];
        return intercept;
    }
    return NO;
}

+ (NSURLRequest*)canonicalRequestForRequest:(NSURLRequest*)request
{
    return request;
}

+ (BOOL)requestIsCacheEquivalent:(NSURLRequest*)requestA toRequest:(NSURLRequest*)requestB
{
    return [[[requestA URL] resourceSpecifier] isEqualToString:[[requestB URL] resourceSpecifier]];
}

+ (BOOL)shouldInterceptRequest:(NSURL *)url{
    
    //Intercept for favicon.ico
    if([[[url absoluteString] lowercaseString] containsString:@"/favicon.ico"]) {
        return YES;
    }
    
    // Do not intercept requests with the query parameter _ts
    // It is used by the Client Runtime to invalidate the cache of a resource and to
    // retrieve the latest version available on server.
    if([[url absoluteString] containsString:OSTimestampQueryParameter]) {
        NSURLComponents *urlComponents = [NSURLComponents componentsWithString:[url absoluteString]];
        NSArray *queryItems = [urlComponents queryItems];
        for(NSURLQueryItem *item in queryItems){
            if([item.name isEqualToString:OSTimestampQueryParameter]){
                return NO;
            }
        }
    }

    OSNativeCache * cacheEngine = [OSNativeCache sharedInstance];
    
    if ([cacheEngine interceptRequest:url]) {
        return YES;
    }
    
    return [self interceptCordovaRequest:url];
}

+(BOOL) interceptCordovaRequest:(NSURL *)url{
    
    NSString *urlString = [url path];
    
    NSError *error = nil;
    NSRegularExpression *regex = nil;
    regex = [NSRegularExpression regularExpressionWithPattern:OSCordovaLoaderRegex
                                                      options:NSRegularExpressionCaseInsensitive error:&error];
    
    if(error || !urlString) {
        [[OSLogger sharedInstance] logError:[NSString stringWithFormat:@"Failed to create a regular expression instance: %@", [error localizedDescription]] withModule:@"OSCordovaLoader"];
        return NO;
    }
    
    if([[regex matchesInString:urlString options:0 range:NSMakeRange(0, [urlString length])] count] == 0)
        return NO;
    
    urlString = [regex stringByReplacingMatchesInString:urlString options:0 range:NSMakeRange(0, [urlString length]) withTemplate:OSCordovaLoaderFolder];
    
    NSString *filePath = [[[NSBundle mainBundle] bundlePath] stringByAppendingPathComponent:urlString];
    
    NSFileManager *fileManager = [NSFileManager defaultManager];
    
    return [fileManager fileExistsAtPath:filePath];
    
}

-(OSWebResponse*) getCordovaResource:(NSURL*)url{

    OSWebResponse *webResponse = nil;

    NSString *urlString = [url path];

    NSError *error = nil;
    NSRegularExpression *regex = nil;
    regex = [NSRegularExpression regularExpressionWithPattern:OSCordovaLoaderRegex
                                                      options:NSRegularExpressionCaseInsensitive error:&error];
    
    if(error || !urlString) {
        [[OSLogger sharedInstance] logError:[NSString stringWithFormat:@"Failed to create a regular expression instance: %@", [error localizedDescription]] withModule:@"OSCordovaLoader"];
        return webResponse;
    }

    urlString = [regex stringByReplacingMatchesInString:urlString options:0 range:NSMakeRange(0, [urlString length]) withTemplate:OSCordovaLoaderFolder];

    NSString *filePath = [[[NSBundle mainBundle] bundlePath] stringByAppendingPathComponent:urlString];

    NSFileHandle* resourceFh = [NSFileHandle fileHandleForReadingAtPath:filePath];

    if(!resourceFh) {
        [[OSLogger sharedInstance] logDebug:[NSString stringWithFormat:@"Unable to find %@. Is it a cordova resource?", url] withModule:@"OSCordovaLoaderURLProtocol"];
        return nil;
    }

    NSData* readData = [resourceFh readDataToEndOfFile];

    if(readData){
        NSString *mimeType = [[OSMimeTypesHelper sharedInstance] getMimeTypeForExtension:[url pathExtension]];
        
        NSURLResponse *urlResponse = [[NSHTTPURLResponse alloc] initWithURL:url statusCode:200 HTTPVersion:@"HTTP/1.1"headerFields:@{@"Content-Type": mimeType}];
        
        webResponse = [[OSWebResponse alloc] initWithResponse:urlResponse andContent:readData];
    }
    [resourceFh closeFile];
    resourceFh = nil;
    return webResponse;
}

- (void) getResourceResponse:(NSURLRequest*)request completionHandler:(DownloadWebResponseFinished) completionHandler {
    NSURL *url = [request URL];

    if([[[url absoluteString] lowercaseString] containsString:@"/favicon.ico"]) {
        NSURLResponse *urlResponse = [[NSHTTPURLResponse alloc] initWithURL:url statusCode:404 HTTPVersion:@"HTTP/1.1"headerFields:@{}];
        OSWebResponse* webResponse = [[OSWebResponse alloc] initWithResponse:urlResponse andContent:nil];
        return completionHandler(webResponse);
    }

    OSNativeCache* cacheEngine = [OSNativeCache sharedInstance];

    return [cacheEngine getResourceFromCache:request andCompletionHandler:^(OSWebResponse *response) {
        return completionHandler(response);
    }];
}

- (void)startLoading
{
    // From https://developer.apple.com/library/archive/samplecode/CustomHTTPProtocol/Introduction/Intro.html
    // Calculate our effective run loop modes.  In some circumstances (yes I'm looking at
    // you UIWebView!) we can be called from a non-standard thread which then runs a
    // non-standard run loop mode waiting for the request to finish.  We detect this
    // non-standard mode and add it to the list of run loop modes we use when scheduling
    // our callbacks.  Exciting huh?
    NSMutableArray * calculatedModes;
    NSString * currentMode;
    calculatedModes = [NSMutableArray array];
    [calculatedModes addObject:NSDefaultRunLoopMode];
    currentMode = [[NSRunLoop currentRunLoop] currentMode];
    if ( (currentMode != nil) && ! [currentMode isEqual:NSDefaultRunLoopMode] ) {
        [calculatedModes addObject:currentMode];
    }
    
    // Do not attempt to copy the request as it will make
    // the request to bounce indefinetely within the protocol
    // and never terminate thus causing the app to become broken.
    NSMutableURLRequest *newRequest = (NSMutableURLRequest*)[self request];
    
    NSURL* url = [newRequest URL];

    // Execute the necessary work on the currentThread but with the appropriate 
    // current modes
    [self performOnThread: [NSThread currentThread] modes:calculatedModes block:^{
        [NSURLProtocol setProperty:@YES forKey:OSCordovaLoaderHandledKey inRequest:newRequest];
        
        BOOL intercept = [OSCordovaLoaderURLProtocol shouldInterceptRequest:url];
        
        if(intercept){
            [self getResourceResponse:[self request] completionHandler:^(OSWebResponse *response) {
                if(response){
                    [[self client] URLProtocol:self didReceiveResponse:[response response] cacheStoragePolicy:NSURLCacheStorageNotAllowed];
                    [[self client] URLProtocol:self didLoadData:[response data]];
                    [[self client] URLProtocolDidFinishLoading:self];
                }
                else {
                    // Attempt to load the resource as a cordova resource, even if isn't
                    // just to make sure that cordova resources are served immediately.
                    OSWebResponse* cordovaResource = [self getCordovaResource:url];
                    if(cordovaResource) {
                        [[OSLogger sharedInstance] logDebug:[NSString stringWithFormat:@"Loaded cordova resource: %@", [url absoluteString]] withModule:@"OSCache"];
                        [[self client] URLProtocol:self didReceiveResponse:[cordovaResource response] cacheStoragePolicy:NSURLCacheStorageNotAllowed];
                        [[self client] URLProtocol:self didLoadData:[cordovaResource data]];
                        [[self client] URLProtocolDidFinishLoading:self];
                    }
                    else {
                        NSURLResponse *errorResponse = [[NSHTTPURLResponse alloc] initWithURL:url statusCode:404 HTTPVersion:@"HTTP/1.1"headerFields:@{}];
                        [[self client] URLProtocol:self didReceiveResponse:errorResponse cacheStoragePolicy:NSURLCacheStorageNotAllowed];
                        [[self client] URLProtocolDidFinishLoading:self];
                    }
                }
            }];
        } else {
            NSURLResponse *errorResponse = [[NSHTTPURLResponse alloc] initWithURL:url statusCode:404 HTTPVersion:@"HTTP/1.1"headerFields:@{}];
            [[self client] URLProtocol:self didReceiveResponse:errorResponse cacheStoragePolicy:NSURLCacheStorageNotAllowed];
            [[self client] URLProtocolDidFinishLoading:self];
        }
    }];
}

- (void)stopLoading
{
    // do any cleanup here
}

/*! Performs the block on the specified thread in one of specified modes.
 *  \param thread The thread to target; nil implies the main thread.
 *  \param modes The modes to target; nil or an empty array gets you the default run loop mode.
 *  \param block The block to run.
 */

- (void)performOnThread:(NSThread *)thread modes:(NSArray *)modes block:(dispatch_block_t)block
{
    if (thread == nil) {
        thread = [NSThread mainThread];
    }
    if ([modes count] == 0) {
        modes = @[ NSDefaultRunLoopMode ];
    }
    [self performSelector:@selector(onThreadPerformBlock:) onThread:thread withObject:[block copy] waitUntilDone:NO modes:modes];
}

/*! A helper method used by -performOnThread:modes:block:. Runs in the specified context
 *  and simply calls the block.
 *  \param block The block to run.
 */

- (void)onThreadPerformBlock:(dispatch_block_t)block
{
    assert(block != nil);
    block();
}

@end
