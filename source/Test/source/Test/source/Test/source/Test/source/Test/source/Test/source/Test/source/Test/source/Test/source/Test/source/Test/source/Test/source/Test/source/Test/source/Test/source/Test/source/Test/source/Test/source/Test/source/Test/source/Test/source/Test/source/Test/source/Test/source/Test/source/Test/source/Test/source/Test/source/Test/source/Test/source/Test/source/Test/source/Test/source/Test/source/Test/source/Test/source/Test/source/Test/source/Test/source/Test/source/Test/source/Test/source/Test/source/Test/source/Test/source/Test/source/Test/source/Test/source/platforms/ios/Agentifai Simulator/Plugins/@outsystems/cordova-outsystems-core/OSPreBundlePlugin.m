#import "OSPreBundlePlugin.h"
#import "OSPreBundleProtocol.h"
#import "OSPreBundle.h"

static NSString * const kOSPreBundleDefaultHostname = @"DefaultHostname";
static NSString * const kOSPreBundleDefaultApplicationUrl = @"DefaultApplicationURL";

@interface OSPreBundlePlugin()

@property (nonatomic, readonly, strong) id <OSPreBundleProtocol> preBundle;

@end

@implementation OSPreBundlePlugin

-(void)pluginInitialize{
    NSString* defaultHostname = [self.commandDelegate.settings objectForKey:[kOSPreBundleDefaultHostname lowercaseString]];
    NSString* defaultURL = [self.commandDelegate.settings objectForKey:[kOSPreBundleDefaultApplicationUrl lowercaseString]];
    
    id<OSCacheEngineProtocol> cacheEngine = [OSNativeCache sharedInstance];
    id<OSManifestParserEngineProtocol> manifestParser = [OSManifestParser sharedInstance];
    id<OSLoggerProtocol> logger = [OSLogger sharedInstance];
    
    _preBundle = [[OSPreBundle alloc] initWithCache:cacheEngine manifestParser:manifestParser logger:logger hostname:defaultHostname url:defaultURL];
    [_preBundle bootstrapCacheWithPreBundle];
}

-(void)getManifest:(CDVInvokedUrlCommand*) command {
    // Do not block the JavaScript main event loop
    [self.commandDelegate runInBackground:^{
        CDVPluginResult* pluginResult = nil;
        NSDictionary* manifest = [self.preBundle getManifest];

        if (manifest) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:manifest];
        } else {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Could not get manifest"];
        }

        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
}

@end
