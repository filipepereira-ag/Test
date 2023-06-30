
#import <Foundation/Foundation.h>
#import "OSPreBundleProtocol.h"
#import "OSNativeCache.h"
#import "OSManifestParser.h"
#import "OSLogger.h"

@interface OSPreBundle : NSObject<OSPreBundleProtocol>

@property (nonatomic, strong) NSString* hostname;
@property (nonatomic, strong) NSString* url;

-(id)initWithCache:(id<OSCacheEngineProtocol>) cacheEngine manifestParser:(id<OSManifestParserEngineProtocol>) manifestParser logger:(id<OSLoggerProtocol>) logger hostname:(NSString*) hostname url:(NSString*) url;

@end
