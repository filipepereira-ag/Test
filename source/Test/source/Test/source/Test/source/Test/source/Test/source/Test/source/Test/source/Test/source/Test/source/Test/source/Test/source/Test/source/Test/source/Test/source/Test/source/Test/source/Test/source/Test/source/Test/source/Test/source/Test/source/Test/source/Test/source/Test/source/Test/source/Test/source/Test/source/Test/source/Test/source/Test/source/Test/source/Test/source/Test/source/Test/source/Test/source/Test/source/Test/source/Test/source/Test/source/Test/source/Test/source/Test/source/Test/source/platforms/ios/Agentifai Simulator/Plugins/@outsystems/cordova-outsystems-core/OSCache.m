#import "OSCache.h"
#import "OSNativeCache.h"
#import "OSLogger.h"

#define kDefaultResourceConnectTimeout 4
#define kDefaultResourceReadTimeout 30

static NSString* const OSCacheStaticChannel = @"OSCacheStaticChannel";
NSString* const OSCacheServiceName = @"OSCache";
static NSString* const DefaultResourceConnectTimeout = @"DefaultResourceConnectTimeout";
static NSString* const DefaultResourceReadTimeout = @"DefaultResourceReadTimeout";
static NSString* const PreferenceFirstRun = @"FirstRun";

@interface OSCache()

@property (readwrite, assign) BOOL deviceReady;

@property (readonly, nonatomic, retain) NSMutableArray* eventQueue;

@property (nonatomic, readonly, strong) id <OSCacheEngineProtocol> cacheEngine;

@property (nonatomic, readonly, strong) id <OSLoggerProtocol> logger;

@end

@implementation OSCache

@synthesize deviceReady, eventQueue;

#pragma mark - Life Cycle

-(void)pluginInitialize{
    _logger = [OSLogger sharedInstance];
    
    [_logger logVerbose:@"pluginInitialize: started" withModule:@"OSCache"];
    
    NSUserDefaults* userDefaults = [NSUserDefaults standardUserDefaults];
    BOOL firstRun = [userDefaults stringForKey:PreferenceFirstRun] == nil;
    if(firstRun) {
        [userDefaults setValue:@"false" forKey:PreferenceFirstRun];
        [userDefaults synchronize];
    }
    
    deviceReady = NO;

    eventQueue = [[NSMutableArray alloc] init];
    
    //Read Default Resource Connect Timeout from Config Preferences
    id defaultResourceConnectTimeoutString = [self.commandDelegate.settings objectForKey: [DefaultResourceConnectTimeout lowercaseString]];
    
    float timeoutResourceConnect = defaultResourceConnectTimeoutString == nil ? kDefaultResourceConnectTimeout : [defaultResourceConnectTimeoutString floatValue];
    
    //Read Default Resource Read Timeout from Config Preferences
    id defaultResourceReadTimeoutString = [self.commandDelegate.settings objectForKey: [DefaultResourceReadTimeout lowercaseString]];
    
    float timeoutResourceRead = defaultResourceReadTimeoutString == nil ? kDefaultResourceReadTimeout : [defaultResourceReadTimeoutString floatValue];
    
    _cacheEngine = [OSNativeCache sharedInstanceWithFirstRun:firstRun
                                   andResourceConnectTimeout:timeoutResourceConnect
                                      andResourceReadTimeout:timeoutResourceRead];

    _cacheEngine.delegate = self;

    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(onPause) name:UIApplicationDidEnterBackgroundNotification object:nil];

    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(onResume) name:UIApplicationWillEnterForegroundNotification object:nil];
    
    [_logger logVerbose:@"pluginInitialize: finished" withModule:@"OSCache"];
}

- (void) onResume {
    [self handleDeviceReady:nil application:nil];
}

- (void) onPause {
    deviceReady = NO;
}

# pragma mark - Interface

- (void) deviceready:(CDVInvokedUrlCommand*)command{
    
    NSString *hostname = nil;
    NSString *application = nil;
    
    if([[command arguments] count] >= 2){
        hostname = [[command arguments] objectAtIndex:0];
        application = [[command arguments] objectAtIndex:1];
    }
    
    [self handleDeviceReady:hostname application:application];
}

- (void) startCaching:(CDVInvokedUrlCommand*)command{

    if([[command arguments] count] < 5){
        [_logger logError:@"Unable to start caching: Missing command arguments" withModule:@"OSCache"];
        return;
    }

    NSString *hostname = [[command arguments] objectAtIndex:0];
    NSString *application = [[command arguments] objectAtIndex:1];
    NSString *version = [[command arguments] objectAtIndex:2];

    NSMutableArray *resources = [[command arguments] objectAtIndex:3];
    NSMutableDictionary *urlMaps = [[command arguments] objectAtIndex:4];

    NSMutableDictionary *noCache = nil;
    
    if([[command arguments] count] > 5){
        noCache = [[command arguments] objectAtIndex:5];
        
        if([noCache isKindOfClass:[NSNull class]]){
            noCache = nil;
        }
    }
    
    NSMutableDictionary *options = nil;

    if([[command arguments] count] > 6){
        options = [[command arguments] objectAtIndex:6];

        if([options isKindOfClass:[NSNull class]]){
            options = nil;
        }
    }

    [self handleStartCaching:hostname application:application version:version resourceList:resources urlMaps:urlMaps urlMapsNoCache:noCache withOptions:options];

}

- (void) switchToVersion:(CDVInvokedUrlCommand*)command{

    if([[command arguments] count] < 3){
        [_logger logError:@"Unable to switch version: Missing command arguments" withModule:@"OSCache"];
        return;
    }

    NSString *hostname = [[command arguments] objectAtIndex:0];
    NSString *application = [[command arguments] objectAtIndex:1];
    NSString *version = [[command arguments] objectAtIndex:2];

    [self handleSwitchVersion:hostname application:application version:version];
}

# pragma mark - Handlers

-(void) handleDeviceReady:(NSString*)hostname application:(NSString*)application {
    [_logger logVerbose:@"handleDeviceReady: started" withModule:@"OSCache"];
    
    if(hostname && application){
        [self.commandDelegate runInBackground:^{
            [self.cacheEngine setCurrentApplication:hostname application:application];
        }];
    }
    
    deviceReady = YES;

    for (NSDictionary* payload in eventQueue) {
        [self sendUpdateToJSApi:payload];
    }

    /*Only removes the objects from eventQueue if there is something to be removed. 
    Issue found when the app goes to background, the objects are released and when it tries remove the objects the app crash, this is to prevent the crash.
    */
    if([eventQueue count] > 0){
        [eventQueue removeAllObjects];
    }
}


-(void) handleStartCaching:(NSString*)hostname application:(NSString*)application version:(NSString*)version resourceList:(NSMutableArray*)resources urlMaps:(NSMutableDictionary*)urls urlMapsNoCache:(NSMutableDictionary*)noCache withOptions:(NSMutableDictionary*)options{

    [self.commandDelegate runInBackground:^{
        [self.logger logVerbose:@"handleStartCaching: started" withModule:@"OSCache"];
        [self.cacheEngine startCaching:hostname application:application version:version resourceList:resources urlMaps:urls urlMapsNoCache:noCache withOptions:options];
    }];

}

-(void) handleSwitchVersion:(NSString*)hostname application:(NSString*)application version:(NSString*)version{

    [self.commandDelegate runInBackground:^{
        [self.logger logVerbose:@"handleSwitchVersion: started" withModule:@"OSCache"];
        [self.cacheEngine switchToVersion:hostname application:application version:version];
    }];
}

# pragma mark - Helpers

-(void) sendUpdateToJSApi:(NSDictionary*)payload{

    if(deviceReady){
        CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK
                                                      messageAsDictionary:payload];
        [pluginResult setKeepCallbackAsBool:YES];

        [self.commandDelegate sendPluginResult:pluginResult callbackId:OSCacheStaticChannel];
    }
    else if(payload){
        [eventQueue addObject:payload];
    }
}

- (NSDictionary*) createUpdateObjectForTask:(NSString*)task withContent:(NSDictionary*)content {

    NSMutableDictionary *jsonObject = [[NSMutableDictionary alloc] init];

    if(task)
        [jsonObject setValue:task forKey:@"Task"];

    if(content)
        [jsonObject setValue:content forKey:@"Content"];

    return jsonObject;
}

# pragma mark - Cache Listener

-(void) fireOnProgressEvent:(NSNumber*)loaded total:(NSNumber*)total{
    NSMutableDictionary *contentObject = [[NSMutableDictionary alloc] init];
    [contentObject setValue:@"onprogress" forKey:@"Event"];

    NSMutableDictionary *progressObject = [[NSMutableDictionary alloc] init];
    [progressObject setValue:loaded forKey:@"Loaded"];
    [progressObject setValue:total forKey:@"Total"];

    [contentObject setValue:progressObject forKey:@"Progress"];

    NSDictionary *jsonObject = [self createUpdateObjectForTask:@"FireEvent" withContent:contentObject];
    [self sendUpdateToJSApi:jsonObject];
}


-(void) fireOnErrorEvent:(NSString*)error{
    NSMutableDictionary *contentObject = [[NSMutableDictionary alloc] init];
    [contentObject setValue:@"onerror" forKey:@"Event"];

    NSMutableDictionary *errorObject = [[NSMutableDictionary alloc] init];
    [errorObject setValue:error forKey:@"Message"];

    [contentObject setValue:errorObject forKey:@"Error"];

    NSDictionary *jsonObject = [self createUpdateObjectForTask:@"FireEvent" withContent:contentObject];
    [self sendUpdateToJSApi:jsonObject];
}

-(void) fireOnFinishEvent{
    NSMutableDictionary *contentObject = [[NSMutableDictionary alloc] init];
    [contentObject setValue:@"onfinish" forKey:@"Event"];

    NSDictionary *jsonObject = [self createUpdateObjectForTask:@"FireEvent" withContent:contentObject];
    [self sendUpdateToJSApi:jsonObject];
}


-(void) updateStatus:(NSInteger)status{
    NSMutableDictionary *contentObject = [[NSMutableDictionary alloc] init];
    [contentObject setValue:[NSNumber numberWithInteger:status] forKey:@"Status"];

    NSDictionary *jsonObject = [self createUpdateObjectForTask:@"UpdateStatus" withContent:contentObject];
    [self sendUpdateToJSApi:jsonObject];
}


-(void) throwException:(NSString*)errorMessage{
    NSMutableDictionary *contentObject = [[NSMutableDictionary alloc] init];
    [contentObject setValue:errorMessage forKey:@"Error"];

    NSDictionary *jsonObject = [self createUpdateObjectForTask:@"Exception" withContent:contentObject];
    [self sendUpdateToJSApi:jsonObject];
}


@end
