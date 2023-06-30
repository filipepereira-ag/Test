#import "OSHttpPlugin.h"
#import "OSHttp.h"
#import "OSHttpPluginArgHelper.h"
#import "OSHttpUrlSessionEngine.h"
#import "OSLogger.h"
#if __has_include("OSWKWebViewEngine.h")
#import "OSHttpWKWebViewCookieHandlerEngine.h"
#endif
#import "OSHttpSharedCookieHandlerEngine.h"


@interface OSHttpPlugin()

@property (strong, nonatomic) NSURL* baseURL;
@property (strong, nonatomic) OSHttp* osHttp;
@property (strong, nonatomic) id<OSHttpCookieHandler> cookieHandler;
@end

@implementation OSHttpPlugin

static NSString* const kOSDefaultHostname = @"DefaultHostname";
static NSString* const kOSDefaultApplicationUrl = @"DefaultApplicationURL";
static NSString* const kOSHttpSyncNowMessageHandlerName = @"OSHttpSyncNow";

/**
 Creates a "singleton" instance of OSHttp, even for multiple
 executions of this method.
 */
- (OSHttp*) createOSHttp {
    static dispatch_once_t once;
    static id osHttp;
    dispatch_once(&once, ^{
#if __has_include("OSWKWebViewEngine.h")
        WKWebView* wkWebView = (WKWebView*) self.webView;
        
        [[[wkWebView configuration] userContentController] addScriptMessageHandler:self name:kOSHttpSyncNowMessageHandlerName];
        
        NSString* httpCookieManagerScript = [NSString stringWithFormat:kOSCookieManagerScript, [self getAppOrigin]];
        WKUserScript* scriptManager = [[WKUserScript alloc] initWithSource:httpCookieManagerScript
                                                             injectionTime:WKUserScriptInjectionTimeAtDocumentStart
                                                          forMainFrameOnly:YES];
        
        [[wkWebView.configuration userContentController] addUserScript:scriptManager];
        
        WKUserScript* scriptSync = [[WKUserScript alloc] initWithSource:@"window.webkit.messageHandlers.OSHttpSyncNow.postMessage(undefined)"
                                                          injectionTime:WKUserScriptInjectionTimeAtDocumentStart
                                                       forMainFrameOnly:YES];
        
        [[wkWebView.configuration userContentController] addUserScript:scriptSync];
        
        
        _cookieHandler = [[OSHttpWKWebViewCookieHandlerEngine alloc] initWithWkWebView: wkWebView
                                                                      andCookieHandler: [OSHttpSharedCookieHandlerEngine new]];
#else
        _cookieHandler = [OSHttpSharedCookieHandlerEngine new];
#endif
        
        id<OSHttpRequesterProtocol> requester = [OSHttpUrlSessionEngine createWithCookieHandler:self.cookieHandler];

        osHttp = [[OSHttp alloc] initWithRequester:requester andLogger:[OSLogger sharedInstance]];
    });
    return osHttp;
}

- (NSString*) getAppOrigin {
    if([self.viewController isKindOfClass:[CDVViewController class]]) {
        CDVViewController* viewController = (CDVViewController*)self.viewController;
        NSURL* contentSrc = [NSURL URLWithString: [viewController startPage]];
        if([contentSrc scheme] && [contentSrc host]) {
            NSString* appOrigin = [NSString stringWithFormat:@"%@://%@", [contentSrc scheme], [contentSrc host]];
            if([contentSrc port]) {
                appOrigin = [NSString stringWithFormat:@"%@:%@", appOrigin, [contentSrc port]];
            }
            return appOrigin;
        }
    }
    return nil;
}

- (NSString*) getHostnameFromPreferences: (NSDictionary*) settings {
    return [settings objectForKey:[kOSDefaultHostname lowercaseString]];
}

- (NSString*) getApplicationUrlFromPreferences: (NSDictionary*) settings {
    return [settings objectForKey:[kOSDefaultApplicationUrl lowercaseString]];
}

- (NSURL*) getBaseUrl:(NSString *)application hostname:(NSString *)hostname {
    hostname = [hostname stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
    application = [application stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
    
    if([hostname length] > 0 && [application length] > 0) {
        return [NSURL URLWithString:[NSString stringWithFormat:@"https://%@/%@/", hostname, application]];
    }
    
    return nil;
}

- (void)pluginInitialize {
    NSString* hostname = [self getHostnameFromPreferences: self.commandDelegate.settings];
    NSString* application = [self getApplicationUrlFromPreferences: self.commandDelegate.settings];
    
    self.baseURL = [self getBaseUrl:application hostname:hostname];
    
    self.osHttp = [self createOSHttp];
}

- (void)onReset {
    // Explicitely abort all ongoing requests on page reloads
    [self.osHttp onReset];
}

- (void)sendRequest:(CDVInvokedUrlCommand*) command {
    
    NSString* requestId = [command argumentAtIndex:0 withDefault:nil andClass:[NSString class]];
    NSString* url = [command argumentAtIndex:1 withDefault:nil andClass:[NSString class]];
    NSString* method = [command argumentAtIndex:2 withDefault:nil andClass:[NSString class]];
    NSDictionary* headers = [command argumentAtIndex:3 withDefault:nil andClass:[NSDictionary class]];
    NSNumber* timeout = [command argumentAtIndex:4 withDefault:nil andClass:[NSNumber class]];
    NSString* body = [OSHttpPluginArgHelper getBodyFromCommand: command atIndex:5];
    BOOL responseBodyIsText = [[command argumentAtIndex:6 withDefault:nil andClass:[NSNumber class]] boolValue];
    
    // Capture only a weak reference to command delegate and callbackId
    // so that the block only gets a hand of what really needs from cordova and nothing more.
    __weak id <CDVCommandDelegate> weakCommandDelegate = self.commandDelegate;
    NSString* callbackId = command.callbackId;
    
    [self.osHttp sendRequestWithRequestId:requestId
                                      url:url
                                   method:method
                                  headers:headers
                                  timeout:timeout
                                     body:body
                                  baseUrl:self.baseURL
                       responseBodyIsText:responseBodyIsText
                           successHandler:^(NSDictionary *payload) {
                               [self sendResult:callbackId payload:payload weakCommandDelegate:weakCommandDelegate];
                           } errorHandler:^(NSDictionary *payload) {
                               [self sendResult:callbackId payload:payload weakCommandDelegate:weakCommandDelegate];
                           }];
}

- (void)abortRequest:(CDVInvokedUrlCommand*) command {
    NSString* requestId = [command argumentAtIndex:0];
    
    __weak id <CDVCommandDelegate> weakCommandDelegate = self.commandDelegate;
    NSString* callbackId = command.callbackId;
    
    
    [self.osHttp abortRequestWithRequestId:requestId successHandler:^(NSDictionary *payload) {
        [self sendResult:callbackId payload:payload weakCommandDelegate:weakCommandDelegate];
    } errorHandler:^(NSDictionary *payload) {
        [self sendResult:callbackId payload:payload weakCommandDelegate:weakCommandDelegate];
    }];
    
}

- (void)sendResult:(NSString *)callbackId payload:(NSDictionary *)payload weakCommandDelegate:(__weak id<CDVCommandDelegate>)weakCommandDelegate {
    // Exit early if the weakCommandDelegate has already been released
    // which means that the plugin instance has already been re-created or released.
    if(!weakCommandDelegate) {
        return;
    }
    
    CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:payload];
    [weakCommandDelegate sendPluginResult:result callbackId:callbackId];
}

#if __has_include("OSWKWebViewEngine.h")
- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message {
    if([[message name] isEqualToString:kOSHttpSyncNowMessageHandlerName]) {
        if([[[[message frameInfo] securityOrigin] host] isEqualToString:[self.baseURL host]]) {
            [self.cookieHandler getPersistedCookiesForUrl:self.baseURL completionHandler:^(NSDictionary *headerCookie) {
                NSString* documentCookieJS = [OSHttpWKWebViewCookieHandlerEngine generateSetCookieJsScript: [headerCookie objectForKey:@"Cookie"]];
                [message.webView evaluateJavaScript:documentCookieJS completionHandler:^(id _Nullable obj, NSError * _Nullable error) {
                    // noop
                }];
            }];
        }
    }
}
#endif
@end
