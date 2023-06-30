#import <Foundation/Foundation.h>
#import "OSCacheEngineProtocol.h"
#import "OSCacheListenerDelegate.h"

extern int const NativeCacheWindowSize;

typedef NS_ENUM(NSInteger, OSCacheStatus) {
    OSCacheStatusUncached = 0,
    OSCacheStatusIdle = 1,
    OSCacheStatusChecking = 2,
    OSCacheStatusDownloading = 3,
    OSCacheStatusUpdateReady = 4,
    OSCacheStatusObsolete = 5
};

@interface OSNativeCache : NSObject<OSCacheEngineProtocol, NSURLSessionDelegate>

@property (nonatomic,strong) id <OSCacheListenerDelegate> delegate;
@property (nonatomic, assign) BOOL cacheUpgrade;

+(id) sharedInstanceWithFirstRun:(BOOL)firstRun
       andResourceConnectTimeout:(float) resourceConnect
          andResourceReadTimeout:(float) resourceRead;
+(id) sharedInstance;


@end
