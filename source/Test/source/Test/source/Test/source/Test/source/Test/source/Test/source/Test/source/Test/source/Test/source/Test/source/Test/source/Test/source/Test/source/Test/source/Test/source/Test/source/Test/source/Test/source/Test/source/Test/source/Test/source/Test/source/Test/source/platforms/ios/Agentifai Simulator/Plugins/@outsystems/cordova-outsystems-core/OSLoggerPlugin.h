#import <Cordova/CDVPlugin.h>
#import "OSDeviceInfo.h"

@interface OSLoggerPlugin : CDVPlugin

+(OSDeviceInfo *) getDeviceInfoInstance;

#pragma mark - Logger API V1
- (void)logVerbose:(CDVInvokedUrlCommand *)command;
- (void)logDebug:(CDVInvokedUrlCommand *)command;
- (void)logInfo:(CDVInvokedUrlCommand *)command;
- (void)logWarning:(CDVInvokedUrlCommand *)command;
- (void)logError:(CDVInvokedUrlCommand *)command;

#pragma mark - Logger API V2
- (void)v2LogTrace:(CDVInvokedUrlCommand *)command;
- (void)v2LogDebug:(CDVInvokedUrlCommand *)command;
- (void)v2LogInfo:(CDVInvokedUrlCommand *)command;
- (void)v2LogWarning:(CDVInvokedUrlCommand *)command;
- (void)v2LogError:(CDVInvokedUrlCommand *)command;

#pragma mark - Device Ready
- (void)deviceReady:(CDVInvokedUrlCommand *)command;

@end

