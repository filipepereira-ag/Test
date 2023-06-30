#import <Cordova/CDVPlugin.h>
#import "OSApplicationInfo.h"

@interface OSApplicationInfoPlugin : CDVPlugin

-(void) getPlatformVersion:(CDVInvokedUrlCommand *)command;
-(void) getNativeShellVersion:(CDVInvokedUrlCommand *)command;
-(void) getAppVersion:(CDVInvokedUrlCommand *)command;
-(void) getAppVersionNumber:(CDVInvokedUrlCommand *)command;
-(void) getAppPackageIdentifier:(CDVInvokedUrlCommand *)command;

@end
