#import "OSApplicationInfoPlugin.h"

@interface OSApplicationInfoPlugin()

@end

static OSApplicationInfo* applicationInfo;

@implementation OSApplicationInfoPlugin

-(void)pluginInitialize {
    NSLog(@"Plugin Itilialize: started");

    [OSApplicationInfo initializeWithSettings:self.commandDelegate.settings];
    applicationInfo = [OSApplicationInfo sharedInstance];

    NSLog(@"Plugin Itilialize: finished");
}

-(void)getPlatformVersion:(CDVInvokedUrlCommand *)command {
    NSString* platformVersion = [applicationInfo getPlatformVersion];
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:platformVersion];
    [self.commandDelegate sendPluginResult:pluginResult callbackId: command.callbackId];
}

-(void)getNativeShellVersion:(CDVInvokedUrlCommand *)command {
    NSString* nativeShellVersion = [applicationInfo getNativeShellVersion];
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:nativeShellVersion];
    [self.commandDelegate sendPluginResult:pluginResult callbackId: command.callbackId];
}

-(void)getAppVersion:(CDVInvokedUrlCommand *)command {
    NSString* appVersion = [applicationInfo getAppVersion];
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:appVersion];
    [self.commandDelegate sendPluginResult:pluginResult callbackId: command.callbackId];
}

-(void)getAppVersionNumber:(CDVInvokedUrlCommand *)command {
    NSString* appVersionNumber = [applicationInfo getAppVersionNumber];
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:appVersionNumber];
    [self.commandDelegate sendPluginResult:pluginResult callbackId: command.callbackId];
}

-(void) getAppPackageIdentifier:(CDVInvokedUrlCommand *)command {
    NSString* appPackageIdentifier = [applicationInfo getAppPackageIdentifier];
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:appPackageIdentifier];
    [self.commandDelegate sendPluginResult:pluginResult callbackId: command.callbackId];
}

@end
