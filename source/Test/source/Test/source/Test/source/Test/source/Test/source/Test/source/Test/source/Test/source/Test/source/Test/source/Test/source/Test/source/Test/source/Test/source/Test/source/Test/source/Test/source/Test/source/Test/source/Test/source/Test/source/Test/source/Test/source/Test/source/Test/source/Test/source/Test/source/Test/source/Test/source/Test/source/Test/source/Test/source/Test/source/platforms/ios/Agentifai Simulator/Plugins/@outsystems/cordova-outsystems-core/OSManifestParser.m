#import "OSManifestParser.h"
#import "OSLogger.h"

NSString* const OSManifestFile = @"manifest.json";
static NSString* const OSManifestJsonObject = @"manifest";
static NSString* const OSManifestVersionJsonObject = @"versionToken";
static NSString* const OSManifestResourcesJsonObject = @"urlVersions";
static NSString* const OSManifestUrlMappingsJsonObject = @"urlMappings";
static NSString* const OSManifestUrlMappingsNoCacheJsonObject = @"urlMappingsNoCache";

@interface OSManifestParser()

@property (nonatomic, readonly, strong) id <OSLoggerProtocol> logger;

@end

@implementation OSManifestParser

+ (id)sharedInstance {
    static OSManifestParser *sharedInstance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedInstance = [[self alloc] init];
    });
    return sharedInstance;
}

- (id)init {
    self = [super init];
    
    _logger = [OSLogger sharedInstance];
    return self;
}

#pragma mark - Internals

-(NSMutableArray*)getURLVersionsFromJSON:(NSMutableDictionary*)manifestJson{
    NSMutableArray *resources = [[NSMutableArray alloc] init];
    NSMutableDictionary *urlVersions = [manifestJson objectForKey:OSManifestResourcesJsonObject];
    
    for(NSString *key in urlVersions){
        NSString *value = [urlVersions objectForKey:key];
        NSString *resource = [NSString stringWithFormat:@"%@%@",key,value];
        
        [resources addObject:resource];
    }
    
    return resources;
}

-(NSMutableDictionary*)getURLMappingsFromJSON:(NSMutableDictionary*)manifestJson withCache:(BOOL)cache{
    NSMutableDictionary *urlMappings = (NSMutableDictionary *)[manifestJson objectForKey: cache ? OSManifestUrlMappingsJsonObject : OSManifestUrlMappingsNoCacheJsonObject];
    NSMutableDictionary *urlVersions = (NSMutableDictionary *)[manifestJson objectForKey:OSManifestResourcesJsonObject];
    
    NSMutableDictionary *mappings = [[NSMutableDictionary alloc] init];
    
    for(NSString *key in urlMappings){
        
        if(!urlVersions)
            break;
        
        NSString *resourceUrl = [urlMappings objectForKey:key];
        
        if([resourceUrl rangeOfString:@"?"].location != NSNotFound){
            [mappings setValue:resourceUrl forKey:key];
        }
        else{
            NSString *resourceVersion = [urlVersions objectForKey:resourceUrl];
            
            if(resourceVersion){
                NSString *resourceMap = [NSString stringWithFormat:@"%@%@",resourceUrl,resourceVersion];
                [mappings setValue:resourceMap forKey:key];
            }
        }
        
    }
    
    return mappings;
}


#pragma mark - Public API

-(OSManifest*) getManifestInfo:(NSDictionary*) jsonDictionary{

    if(!jsonDictionary){
        [_logger logError:@"Failed to get manifest info with error: invalid or missing dictionary" withModule:@"OSManifest"];
        return nil;
    }

    NSDictionary *manifestJson = [jsonDictionary objectForKey:OSManifestJsonObject];
    
    NSString *version = [manifestJson objectForKey:OSManifestVersionJsonObject];

    NSMutableArray *resources = [self getURLVersionsFromJSON:(NSMutableDictionary *)manifestJson];

    NSMutableDictionary *mappings = [self getURLMappingsFromJSON:(NSMutableDictionary *)manifestJson withCache:YES];
    
    NSMutableDictionary *noCache =  [self getURLMappingsFromJSON:(NSMutableDictionary *)manifestJson withCache:NO];

    OSManifest *manifest = [[OSManifest alloc] initWithVersion:version
                                                   urlVersions:resources
                                                   urlMappings:mappings
                                            urlMappingsNoCache:noCache];

    return manifest;
}

-(NSString*) getManifestVersion:(NSDictionary*) jsonDictionary{

    if(!jsonDictionary){
        [_logger logError:@"Failed to get manifest version with error: invalid or missing dictionary" withModule:@"OSManifest"];
        return nil;
    }

    NSDictionary *manifestJson = [jsonDictionary objectForKey:OSManifestJsonObject];

    NSString *version = [manifestJson objectForKey:OSManifestVersionJsonObject];

    return version;
}

-(NSString*) getManifestUrl:(NSString*) version{
    NSString *url = OSManifestFile;

    if(version)
        url = [NSString stringWithFormat:@"%@?%@",url,version];

    return url;
}


@end
