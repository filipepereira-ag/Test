#import <Cordova/CDV.h>
#if __has_include("OSWKWebViewEngine.h")
#import <WebKit/WebKit.h>
@interface OSHttpPlugin : CDVPlugin <WKScriptMessageHandler>
#else
@interface OSHttpPlugin : CDVPlugin
#endif
- (void)sendRequest:(CDVInvokedUrlCommand*) command;
- (void)abortRequest:(CDVInvokedUrlCommand*) command;
@end
