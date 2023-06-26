#import "OSPreBundle.h"

static NSString* const OSPreBundleManifest = @"www/manifest.json";

@interface OSPreBundle()

@property (nonatomic, readonly, strong) id <OSManifestParserEngineProtocol> manifestParser;
@property (nonatomic, readonly, strong) id <OSCacheEngineProtocol> cacheEngine;
@property (nonatomic, readonly, strong) id <OSLoggerProtocol> logger;
@property (nonatomic, readonly, strong) dispatch_queue_t serialQueue;

@end

@implementation OSPreBundle

-(id)initWithCache:(id<OSCacheEngineProtocol>) cacheEngine manifestParser:(id<OSManifestParserEngineProtocol>) manifestParser logger:(id<OSLoggerProtocol>) logger hostname:(NSString*) hostname url:(NSString*) url{
    if(self = [self init]){
        _hostname = hostname;
        _url = url;
        _cacheEngine = cacheEngine;
        _manifestParser = manifestParser;
        _logger = logger;
        _serialQueue = dispatch_queue_create("com.outsystems.plugins.prebundle", DISPATCH_QUEUE_SERIAL);
    }
    return self;
}

-(void)bootstrapCacheWithPreBundle{
    [_logger logDebug:@"Loading PreBundle manifest" withModule:@"OSPreBundle"];
    
    //Bootstrap Cache
    OSManifest* manifest = [_manifestParser getManifestInfo:[self getManifest]];
    [self loadPreBundleManifest:manifest];
    
    [_logger logDebug:@"Upgrading cache model if needed" withModule:@"OSPreBundle"];
    [_cacheEngine upgradeCacheIfNeeded];
}

-(NSDictionary*) getManifest {
    // From http://www.lukeparham.com/blog/2018/6/3/comparing-synchronization-strategies
    // also https://stackoverflow.com/a/19822753 and https://stackoverflow.com/a/10985701
    __block NSDictionary* manifest;
    
    dispatch_sync(_serialQueue, ^{
        NSData* manifestData = [self readFromBundle:OSPreBundleManifest];
        
        if(manifestData) {
            manifest = [self serializeJSONDataIntoDictionary:manifestData];
        }
    });
    
    return manifest;
}

-(NSData*) readFromBundle:(NSString*) fileName {
    NSData* data = nil;
    NSString* filePath = [[[NSBundle bundleForClass:[self class]] bundlePath] stringByAppendingPathComponent:fileName];
    NSError* error;
    
    data = [NSData dataWithContentsOfFile:filePath options:kNilOptions error:&error];
    
    if(error) {
        [_logger logError:[NSString stringWithFormat:@"Failed to read file %@ from bundle: %@", fileName, [error localizedDescription]] withModule:@"OSPreBundle"];
    }

    return data;
}

-(NSDictionary*) serializeJSONDataIntoDictionary:(NSData*) data {
    NSError* error;
    NSDictionary* dictionary = [NSJSONSerialization JSONObjectWithData:data options:kNilOptions error:&error];
    
    if(error) {
        [_logger logError:[NSString stringWithFormat:@"Failed to serialize JSON data into dictionary: %@", [error localizedDescription]] withModule:@"OSPreBundle"];
    }
    
    return dictionary;
}

-(void)loadPreBundleManifest:(OSManifest*) manifest{
    if(manifest){
        NSMutableArray *resources = [NSMutableArray arrayWithArray:[manifest urlVersions]];
        NSMutableDictionary *urlMaps = [manifest urlMappings];
        NSMutableDictionary *urlMapsNoCache = [manifest urlMappingsNoCache];
            
        NSString *manifestVersion = [manifest versionToken];
            
        if(manifestVersion){
                
            NSString *manifestUrl = [_manifestParser getManifestUrl:manifestVersion];
        
            if(!_url || !_hostname){
                [_logger logError:@"Could not load pre-bundle resources: hostname or url is null" withModule:@"OSPreBundle"];
                return;
            }
                
            [_cacheEngine setCurrentApplication:_hostname application:_url];
                
            // This was added to aid the platform when it could not generate a manifest version -- only affects GA version
            if(manifestUrl){
                [resources addObject:manifestUrl];
            }
                
            [_cacheEngine bootstrapCache:manifestVersion resourceList:resources urlMaps:urlMaps urlMapsNoCache:urlMapsNoCache];
        }
        else{
            [_logger logError:@"Could not load pre-bundle resources: manifest version is null" withModule:@"OSPreBundle"];
        }
    }
}

@end
