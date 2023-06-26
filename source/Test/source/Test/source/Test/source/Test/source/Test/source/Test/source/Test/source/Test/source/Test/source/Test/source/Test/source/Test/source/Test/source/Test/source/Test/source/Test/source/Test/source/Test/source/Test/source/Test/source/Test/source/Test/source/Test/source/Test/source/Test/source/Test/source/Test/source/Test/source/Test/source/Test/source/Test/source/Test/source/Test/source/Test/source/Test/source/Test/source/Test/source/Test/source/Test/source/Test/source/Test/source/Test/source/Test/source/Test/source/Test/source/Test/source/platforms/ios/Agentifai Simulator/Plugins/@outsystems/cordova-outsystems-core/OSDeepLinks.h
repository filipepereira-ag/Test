#import <Cordova/CDVPlugin.h>

@interface OSDeepLinks : CDVPlugin
- (void) deviceready:(CDVInvokedUrlCommand*)command;
- (void) trigger:(CDVInvokedUrlCommand*)command;
@end
