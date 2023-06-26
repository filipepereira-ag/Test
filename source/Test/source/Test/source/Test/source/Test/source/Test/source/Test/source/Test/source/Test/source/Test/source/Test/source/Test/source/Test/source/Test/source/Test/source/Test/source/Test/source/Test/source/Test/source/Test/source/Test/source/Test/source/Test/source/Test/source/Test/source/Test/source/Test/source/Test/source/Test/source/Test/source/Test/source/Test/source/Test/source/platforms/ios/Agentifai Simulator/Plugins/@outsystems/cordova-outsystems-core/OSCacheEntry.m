#import "OSCacheEntry.h"
#import "OSMimeTypesHelper.h"
#import "OSLogger.h"

static NSString* const OSCacheEntryPropertyURL = @"url";
static NSString* const OSCacheEntryPropertyFileName = @"fileName";
static NSString* const OSCacheEntryPropertyMimeType = @"mimeType";
static NSString* const OSCacheEntryPropertyEncoding = @"encoding";
static NSString* const OSCacheEntryPropertyPreBundle = @"preBundled";
static NSString* const OSCacheEntryPropertyStatus = @"status";
static NSString* const OSCacheEntryPropertyCacheVersions = @"cacheVersions";
static NSString* const OSCacheEntryPropertyNoCache = @"noCache";
static NSString* const OSCacheEntryPropertyResourceMapping = @"resourceMapping";
static NSString* const OSCacheEntryPropertyResourceToDelete = @"resourceToDelete";

@interface OSCacheEntry()

@property (nonatomic, readonly, strong) id <OSLoggerProtocol> logger;

@end

@implementation OSCacheEntry

@synthesize status;

-(id)init{
    _logger = [OSLogger sharedInstance];
    
    if(self = [super init]){
        _cacheVersions = [[NSMutableDictionary alloc] init];
        status = OSCacheEntryStatusUncached;
    }
    return self;
}

-(id)initForUrl:(NSString *)url withFileName:(NSString *)fileName asPreBundled:(BOOL)preBundled{
    if(self = [self init]){
        _url = url;
        _fileName = fileName;
        _preBundled = preBundled;
    }

    return self;
}

-(id)initWithDictionary:(NSDictionary*)dictionary{
    self = [self init];

    NSString *url = [dictionary objectForKey:OSCacheEntryPropertyURL];

    if(url)
        _url = url;

    NSString *fileName = [dictionary objectForKey:OSCacheEntryPropertyFileName];

    if(fileName)
        _fileName = fileName;


    NSString *mimeType = [dictionary objectForKey:OSCacheEntryPropertyMimeType];

    if(mimeType)
        _mimeType = mimeType;


    NSString *encoding = [dictionary objectForKey:OSCacheEntryPropertyEncoding];

    if(encoding)
        _encoding = encoding;


    NSNumber *preBundled = [dictionary objectForKey:OSCacheEntryPropertyPreBundle];

    if(preBundled)
        _preBundled = [preBundled boolValue];


    NSNumber *cacheStatus = [dictionary objectForKey:OSCacheEntryPropertyStatus];

    if(cacheStatus)
        status = [cacheStatus integerValue];

    NSNumber *noCache = [dictionary objectForKey:OSCacheEntryPropertyNoCache];

    if(noCache)
        _noCache = [noCache boolValue];
    
    NSNumber *resourceMapping = [dictionary objectForKey:OSCacheEntryPropertyResourceMapping];
    
    if(resourceMapping)
        _resourceMapping = [resourceMapping boolValue];

    NSDictionary *cacheVersions = [dictionary objectForKey:OSCacheEntryPropertyCacheVersions];

    if(cacheVersions){
        [_cacheVersions addEntriesFromDictionary:cacheVersions];
    }
    
    NSNumber *resourceToDelete = [dictionary objectForKey:OSCacheEntryPropertyResourceToDelete];
    
    if(resourceToDelete)
        _resourceToDelete = [resourceToDelete boolValue];

    return self;
}

-(NSMutableDictionary*) jsonDictionary{
    NSMutableDictionary *result = [[NSMutableDictionary alloc] init];

    if(_url)
       [result setValue:_url forKey:OSCacheEntryPropertyURL];


    if(_fileName)
        [result setValue:_fileName forKey:OSCacheEntryPropertyFileName];

    if(_mimeType)
        [result setValue:_mimeType forKey:OSCacheEntryPropertyMimeType];

    if(_encoding)
        [result setValue:_encoding forKey:OSCacheEntryPropertyEncoding];

    if(_preBundled)
        [result setValue:[NSNumber numberWithBool:_preBundled ] forKey:OSCacheEntryPropertyPreBundle];

    if(status)
        [result setValue:[NSNumber numberWithInteger:status] forKey:OSCacheEntryPropertyStatus];

    if(_noCache)
        [result setValue:[NSNumber numberWithBool:_noCache ] forKey:OSCacheEntryPropertyNoCache];
    
    if(_resourceMapping)
        [result setValue:[NSNumber numberWithBool:_resourceMapping] forKey:OSCacheEntryPropertyResourceMapping];
    
    if(_resourceToDelete)
        [result setValue:[NSNumber numberWithBool:_resourceToDelete] forKey:OSCacheEntryPropertyResourceToDelete];

    [result setValue:_cacheVersions forKey:OSCacheEntryPropertyCacheVersions];


    return result;
}

-(void) healMimeType{
    NSURL *nsURL = [NSURL URLWithString:_url];
    NSString *mimeType = [[OSMimeTypesHelper sharedInstance] getMimeTypeForExtension:[nsURL pathExtension]];
    
    _mimeType = mimeType;
}

-(void) addCacheVersion:(NSString*) version{
    if(version && [version length] > 0) {
        [_cacheVersions setValue:version forKey:version];
    } else {
        [_logger logDebug:@"Failed to add version to cache versions dictionary" withModule:@"OSCache"];
    }
}

@end
