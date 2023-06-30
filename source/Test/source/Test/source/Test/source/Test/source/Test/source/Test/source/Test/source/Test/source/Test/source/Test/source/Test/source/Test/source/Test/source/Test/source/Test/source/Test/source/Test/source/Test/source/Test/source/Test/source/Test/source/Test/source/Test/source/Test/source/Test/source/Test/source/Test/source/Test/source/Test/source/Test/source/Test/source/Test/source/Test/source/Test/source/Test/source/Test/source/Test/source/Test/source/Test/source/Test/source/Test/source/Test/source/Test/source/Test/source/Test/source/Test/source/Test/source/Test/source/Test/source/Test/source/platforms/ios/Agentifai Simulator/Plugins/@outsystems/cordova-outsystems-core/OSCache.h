#import <Cordova/CDVPlugin.h>
#import "OSCacheListenerDelegate.h"

@interface OSCache : CDVPlugin<OSCacheListenerDelegate>

extern NSString* const OSCacheServiceName;


- (void)deviceready:(CDVInvokedUrlCommand*)command;

- (void)startCaching:(CDVInvokedUrlCommand*)command;

- (void)switchToVersion:(CDVInvokedUrlCommand*)command;


@end
