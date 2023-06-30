#import <Cordova/CDV.h>
#import <OSMobileCore/OSMobileCore.h>

extern NSString *const OSAuthErrorMissingPluginParameter;

@interface OSAuth : CDVPlugin <AuthControllerDelegate>

- (void)startFlow:(CDVInvokedUrlCommand *)command;

@end
