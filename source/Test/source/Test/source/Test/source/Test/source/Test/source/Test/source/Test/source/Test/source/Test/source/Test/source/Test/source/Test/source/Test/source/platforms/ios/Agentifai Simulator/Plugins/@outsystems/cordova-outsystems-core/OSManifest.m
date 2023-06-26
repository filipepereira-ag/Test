#import "OSManifest.h"

@implementation OSManifest


-(id)init{
    if(self = [super init]){
        _urlVersions = [[NSArray alloc] init];
        _urlMappings = [[NSMutableDictionary alloc] init];
        _urlMappingsNoCache = [[NSMutableDictionary alloc] init];
    }
    return self;
}

-(id)initWithVersion:(NSString*) version urlVersions:(NSArray*)resources urlMappings:(NSDictionary*)urlMaps urlMappingsNoCache:(NSDictionary*)noCache{
    if(self = [self init]){
        _versionToken = version;
        _urlVersions = [_urlVersions arrayByAddingObjectsFromArray:resources];
        [_urlMappings addEntriesFromDictionary:urlMaps];
        [_urlMappingsNoCache addEntriesFromDictionary:noCache];
    }
    return self;
}

@end
