#import "OSLoggerPlugin.h"
#import "OSLogger.h"
#import "OSLogRecord.h"
#import "OSPureeLogger.h"
#import "OSApplicationInfo.h"
#import <WebKit/WebKit.h>

static NSString * const kOSDefaultHostname = @"DefaultHostname";
static NSString * const kOSDefaultApplicationUrl = @"DefaultApplicationURL";
static NSString * const kOSApplicationKey = @"outsystems.app.key";
static NSString * const kOSEnvironmentKey = @"outsystems.env.key";
static NSString * const kOSTenantKey = @"outsystems.tenant.key";

@interface OSLoggerPlugin ()

@property (nonatomic, readonly, strong) id <OSLoggerProtocol> logger;

@end

static OSDeviceInfo* deviceInfo;

@implementation OSLoggerPlugin

#pragma mark - Life Cycle

-(void)pluginInitialize {
    // Get references from other plugins
    OSApplicationInfo* applicationInfo = [OSApplicationInfo sharedInstance];

    // Initialize Device Info module
    deviceInfo = [OSDeviceInfo sharedInstanceWithCommandDelegate:self.commandDelegate applicationInfo: applicationInfo];
    
    // Get from Config.xml Hostname and Application Url
    NSString* defaultHostname = [self.commandDelegate.settings objectForKey:[kOSDefaultHostname lowercaseString]];
    NSString* defaultApplicationURL = [self.commandDelegate.settings objectForKey:[kOSDefaultApplicationUrl lowercaseString]];
    NSString* applicationKey = [self.commandDelegate.settings objectForKey:[kOSApplicationKey lowercaseString]];
    NSString* environmentKey = [self.commandDelegate.settings objectForKey:[kOSEnvironmentKey lowercaseString]];
    NSString* tenantKey = [self.commandDelegate.settings objectForKey:[kOSTenantKey lowercaseString]];
    
    // Get the User-Agent from the WKWebView
    WKWebView* webView = (WKWebView *)self.webView;
    NSString* userAgent = webView.configuration.applicationNameForUserAgent;
    
    // TODO(jag): Does it make sense to ensure that only one instance of OSPureeLogger is created even though
    // OSLogger is a singleton and it doesn't matter how many times [OSLogger initializeWithEngine:] is called?
    OSPureeLogger* logEngine = [[OSPureeLogger alloc] initWithHostname:(NSString *)defaultHostname
                                                        applicationUrl:(NSString *)defaultApplicationURL
                                                        applicationKey:(NSString *)applicationKey
                                                        environmentKey:(NSString *)environmentKey
                                                             tenantKey:(NSString *)tenantKey
                                                             userAgent:(NSString *)userAgent
                                                       applicationInfo:(OSApplicationInfo *)applicationInfo
                                                            deviceInfo:(OSDeviceInfo *)deviceInfo];
    
    [OSLogger initializeWithEngine:logEngine];
    _logger = [OSLogger sharedInstance];
}

# pragma mark - API V1

-(void)logVerbose:(CDVInvokedUrlCommand *)command{
    if([[command arguments] count] < 2){
        return;
    }

    NSString *message = [[command arguments] objectAtIndex:0];
    NSString *moduleName = [[command arguments] objectAtIndex:1];

    // Log message by OS
    [_logger logVerbose:message withModule:moduleName];
    
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId: command.callbackId];
}

-(void)logDebug:(CDVInvokedUrlCommand *)command{
    if([[command arguments] count] < 2){
        return;
    }

    NSString *message = [[command arguments] objectAtIndex:0];
    NSString *moduleName = [[command arguments] objectAtIndex:1];

    // Log message by OS
    [_logger logDebug:message withModule:moduleName];
    
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId: command.callbackId];
}

-(void)logInfo:(CDVInvokedUrlCommand *)command{
    if([[command arguments] count] < 2){
        return;
    }

    NSString *message = [[command arguments] objectAtIndex:0];
    NSString *moduleName = [[command arguments] objectAtIndex:1];

    // Log message by OS
    [_logger logInfo:message withModule:moduleName];
    
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId: command.callbackId];
}

-(void)logWarning:(CDVInvokedUrlCommand *)command{
    if([[command arguments] count] < 2){
        return;
    }

    NSString *message = [[command arguments] objectAtIndex:0];
    NSString *moduleName = [[command arguments] objectAtIndex:1];

    // Log message by OS
    [_logger logWarning:message withModule:moduleName];
    
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId: command.callbackId];
}

-(void)logError:(CDVInvokedUrlCommand *)command{
    if([[command arguments] count] < 2){
        return;
    }

    NSString *message = [[command arguments] objectAtIndex:0];
    NSString *moduleName = [[command arguments] objectAtIndex:1];
    NSDictionary *extra = [[command arguments] objectAtIndex:2];
    NSString *stackString = [[command arguments] objectAtIndex:3];

    //Add validation of optional parameters
    if([extra isKindOfClass:[NSNull class]]){
        extra = nil;
    }
    
    if([stackString isKindOfClass:[NSNull class]]){
        stackString = nil;
    }

    // Log message by OS
    [_logger logError:message withModule:moduleName withExtra:extra withStack:stackString];
    
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId: command.callbackId];
}

#pragma mark - API V2
- (void)v2LogTrace:(CDVInvokedUrlCommand *)command{
    NSDictionary *args = [[command arguments] objectAtIndex:0];
    OSLogRecord *logRecord = [[OSLogRecord alloc] initWithDictionary:args];
    
    [_logger logTrace:logRecord.message withModule:logRecord.source withExtra:logRecord.attributes withInstant:logRecord.instant];
    
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId: command.callbackId];
}

- (void)v2LogDebug:(CDVInvokedUrlCommand *)command{
    NSDictionary *args = [[command arguments] objectAtIndex:0];
    OSLogRecord *logRecord = [[OSLogRecord alloc] initWithDictionary:args];
    
    [_logger logDebug:logRecord.message withModule:logRecord.source withExtra:logRecord.attributes withInstant:logRecord.instant];
    
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId: command.callbackId];
}

- (void)v2LogInfo:(CDVInvokedUrlCommand *)command{
    NSDictionary *args = [[command arguments] objectAtIndex:0];
    OSLogRecord *logRecord = [[OSLogRecord alloc] initWithDictionary:args];
    
    [_logger logInfo:logRecord.message withModule:logRecord.source withExtra:logRecord.attributes withInstant:logRecord.instant];
    
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId: command.callbackId];
}

- (void)v2LogWarning:(CDVInvokedUrlCommand *)command{
    NSDictionary *args = [[command arguments] objectAtIndex:0];
    OSLogRecord *logRecord = [[OSLogRecord alloc] initWithDictionary:args];
    
    [_logger logWarning:logRecord.message withModule:logRecord.source withExtra:logRecord.attributes withInstant:logRecord.instant];
    
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId: command.callbackId];
}

- (void)v2LogError:(CDVInvokedUrlCommand *)command{
    NSDictionary *args = [[command arguments] objectAtIndex:0];
    OSLogRecord *logRecord = [[OSLogRecord alloc] initWithDictionary:args];
    
    [_logger logError:logRecord.message withModule:logRecord.source withExtra:logRecord.attributes withStack:logRecord.stack withInstant:logRecord.instant];
    
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId: command.callbackId];
}

#pragma mark - Device Ready
-(void)deviceReady:(CDVInvokedUrlCommand *)command{
    // Do nothing
    // This operation only affects Android, so no-op here!
    // Context: https://outsystemsrd.atlassian.net/browse/RNMT-4499
}

#pragma mark - Getters

+(OSDeviceInfo *) getDeviceInfoInstance {
    if(!deviceInfo){
        deviceInfo = [OSDeviceInfo sharedInstance];
    }
    
    return deviceInfo;
}

@end
