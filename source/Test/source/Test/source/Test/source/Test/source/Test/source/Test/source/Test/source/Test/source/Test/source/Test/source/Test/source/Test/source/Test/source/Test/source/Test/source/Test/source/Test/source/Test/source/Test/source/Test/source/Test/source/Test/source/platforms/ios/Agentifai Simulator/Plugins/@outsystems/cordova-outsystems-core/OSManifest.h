#import <Foundation/Foundation.h>

@interface OSManifest : NSObject

@property (nonatomic,strong) NSString *versionToken;
@property (nonatomic,strong) NSArray *urlVersions;
@property (nonatomic,strong) NSMutableDictionary *urlMappings;
@property (nonatomic,strong) NSMutableDictionary *urlMappingsNoCache;

-(id)initWithVersion:(NSString*) version urlVersions:(NSArray*)resources urlMappings:(NSDictionary*)urlMaps urlMappingsNoCache:(NSDictionary*)noCache;

@end
