#import "OSDeepLinks.h"
#import "OSLogger.h"

static NSString* const OSDeepLinksStaticChannel = @"OSDeepLinksStaticChannel";

static NSString * const OSDeeplinksDefaultScheme = @"https";
static NSString * const OSDeeplinksCustomScheme = @"outsystems";

static NSString * const OSPreferenceDisableOSDeepLinks = @"DisableOSDeepLinks";
static NSString * const OSPreferenceDeepLinksHandlerType = @"DeepLinksHandlerType";
static NSString * const OSPreferenceDefaultHostname = @"DefaultHostname";
static NSString * const OSPreferenceDefaultApplicationURL = @"DefaultApplicationURL";

static NSString * const OSPreferenceCordovaWebviewEngine = @"CordovaWebviewEngine";
static NSString * const OSWKWebviewEngineValue = @"OSWKWebViewEngine";

typedef NS_ENUM(NSUInteger, OSDeepLinkHandlerType) {
    OSDeepLinkHandlerTypeFunction   = 0,
    OSDeepLinkHandlerTypeEvent      = 1,
    OSDeepLinkHandlerTypeDefault    = 2,
    OSDeepLinkHandlerTypeLegacy     = 3
};


@interface OSDeepLinks()

@property (readwrite, assign) BOOL deviceReady;

@property (strong, nonatomic) NSURL * url;
@property (nonatomic) OSDeepLinkHandlerType handlerType;

@property (strong, nonatomic) NSString * defaultHostname;
@property (strong, nonatomic) NSString * defaultApplication;
@property (strong, nonatomic) NSString * cordovaWebviewEngine;

@property (nonatomic, readonly, strong) id <OSLoggerProtocol> logger;

@end

@implementation OSDeepLinks

@synthesize deviceReady;

#pragma mark - Plugin Lifecycle

- (void) pluginInitialize {
    _logger = [OSLogger sharedInstance];
    
    _defaultHostname = [self.commandDelegate.settings objectForKey:[OSPreferenceDefaultHostname lowercaseString]];
    _defaultApplication = [self.commandDelegate.settings objectForKey:[OSPreferenceDefaultApplicationURL lowercaseString]];
    _cordovaWebviewEngine = [self.commandDelegate.settings objectForKey:[OSPreferenceCordovaWebviewEngine lowercaseString]];
    
    NSString* handler = [self.commandDelegate.settings objectForKey:[OSPreferenceDeepLinksHandlerType lowercaseString]];
    BOOL disableOSDeepLinks = [[self.commandDelegate.settings objectForKey:[OSPreferenceDisableOSDeepLinks lowercaseString]] boolValue];
    self.handlerType = [self handlerTypeFromString:handler disableOSDeepLinks:disableOSDeepLinks];
    
    CDVPlugin *handleOpenUrlPlugin = [self.commandDelegate getCommandInstance:@"HandleOpenUrl"];
    [[NSNotificationCenter defaultCenter] removeObserver:handleOpenUrlPlugin];
    
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(onPause) name:UIApplicationDidEnterBackgroundNotification object:nil];
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(onResume) name:UIApplicationWillEnterForegroundNotification object:nil];
}

- (void) onPause {
    @synchronized (self) {
        deviceReady = NO;
    }
}

- (void) onResume {
    @synchronized (self) {
        deviceReady = YES;
    }
}


#pragma mark - Handler Type Conversions

+ (NSDictionary *) handlerTypeDisplayNames
{
    return @{@(OSDeepLinkHandlerTypeFunction) : @"function",
             @(OSDeepLinkHandlerTypeEvent) : @"event",
             @(OSDeepLinkHandlerTypeDefault) : @"default",
             @(OSDeepLinkHandlerTypeLegacy) : @"legacy"};
}

- (NSString *) handlerTypeToString
{
    return [[self class] handlerTypeDisplayNames][@(self.handlerType)];
}

- (OSDeepLinkHandlerType) handlerTypeFromString:(NSString*)value disableOSDeepLinks:(BOOL)disableOSDeepLinks {
    OSDeepLinkHandlerType result = disableOSDeepLinks ? OSDeepLinkHandlerTypeFunction : OSDeepLinkHandlerTypeDefault;
    
    if (value) {
        NSDictionary *dictionary = [[self class] handlerTypeDisplayNames];
        
        for (NSNumber *key in [dictionary allKeys]) {
            if ([[dictionary objectForKey:key] isEqualToString:value]) {
                result = (OSDeepLinkHandlerType)[key unsignedLongValue];
                break;
            }
        }
    }
    
    return result;
}


#pragma mark - Helpers

- (void) sendUpdateToJSApi:(NSDictionary*)payload {
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK
                                                  messageAsDictionary:payload];
    
    [pluginResult setKeepCallbackAsBool:YES];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:OSDeepLinksStaticChannel];
}

- (void) sendURLToWebview:(NSURL*)url {
    NSMutableDictionary *jsonObject = [[NSMutableDictionary alloc] init];
    [jsonObject setValue:[url absoluteString] forKey:@"URL"];
    [jsonObject setValue:[self handlerTypeToString] forKey:@"Type"];
    [self sendUpdateToJSApi:jsonObject];
}

- (void) loadUrlIntoWebview:(NSURL*)url {
    __weak __typeof(self) weakSelf = self;
    
    dispatch_async(dispatch_get_main_queue(), ^{
        NSURLRequest *request = [NSURLRequest requestWithURL:url];
        [weakSelf.webViewEngine loadRequest:request];
    });
}

- (void) applyUrlToWebview:(NSURL*)url {
    @synchronized (self) {
        if (deviceReady) {
            if (_handlerType != OSDeepLinkHandlerTypeLegacy) {
                [self sendURLToWebview:url];
            } else {
                [self loadUrlIntoWebview:url];
            }
            self.url = nil;
        } else {
            self.url = url;
        }
    }
}

# pragma mark - Interface

- (void) deviceready:(CDVInvokedUrlCommand*)command {
    [self handleDeviceReady];
    
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId: command.callbackId];
}

- (void) trigger:(CDVInvokedUrlCommand*)command {
    [self handleTrigger];
}

# pragma mark - Handlers

- (void) handleDeviceReady {
    @synchronized (self) {
        deviceReady = YES;
    }
}

- (void) handleTrigger {
    @synchronized (self) {
        if (_url) {
            [self applyUrlToWebview:_url];
        }
    }
}

- (void) handleOpenURL:(NSNotification*)notification {
    NSURL* url = [notification object];
    
    if ([url scheme]) {
        
        NSString *app = [url host];
        if ([[app lowercaseString] isEqualToString:[_defaultApplication lowercaseString]]) {
            
            NSString *urlString = [url absoluteString];
            
            NSString *deeplinkPrefix = [NSString stringWithFormat:@"%@://%@", [url scheme], [url host]];
            
            NSString *scheme = [[_cordovaWebviewEngine lowercaseString] isEqualToString:[OSWKWebviewEngineValue lowercaseString]] ?
                OSDeeplinksCustomScheme :
                OSDeeplinksDefaultScheme;
            
            NSString *applicationPrefix = [NSString stringWithFormat:@"%@://%@/%@", scheme, _defaultHostname, _defaultApplication];
            
            urlString = [urlString stringByReplacingOccurrencesOfString:deeplinkPrefix withString:applicationPrefix];
            
            [_logger logDebug:[NSString stringWithFormat:@"URL string deeplink: %@", urlString] withModule:@"OSDeepLink"];
            
            if ([[url path] length] > 0 && [urlString hasPrefix:applicationPrefix]) {
                NSURL *nsURL = [NSURL URLWithString:urlString];
                [self applyUrlToWebview:nsURL];
            }
        }
        
    } else {
        [_logger logDebug:[NSString stringWithFormat:@"Unable to launch application with URL: %@", [url absoluteString]] withModule:@"OSDeepLink"];
    }
}

@end
