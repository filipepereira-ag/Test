#import <Foundation/Foundation.h>
#import "OSCacheResources.h"

@interface OSApplicationCache : NSObject

@property (nonatomic, strong) NSString * _Nonnull hostname;
@property (nonatomic, strong) NSString * _Nonnull application;
@property (nonatomic, strong) NSString * _Nullable cacheApplicationKey;

-(id _Nonnull) initForHostname:(NSString*_Nonnull)hostname
                andApplication:(NSString*_Nonnull)application
              andSessionGetter:(_Nonnull DownloadSession) sessionGetter
                     forAppKey:(NSString*_Nonnull)applicationKey;

//-(id) initWithDictionary:(NSDictionary*)dictionary;
-(id _Nonnull) initWithDictionary:(NSDictionary *_Nullable)dictionary
                          upgrade:(BOOL) upgrade
                 andSessionGetter:(_Nonnull DownloadSession) sessionGetter;

-(NSString*_Nullable) getCurrentCacheVersion;

-(NSMutableDictionary*_Nonnull) createCacheManifest;

-(void) addPreBundleFrame:(OSCacheResources*_Nullable)cacheResources;
-(void) addCacheFrame:(OSCacheResources*_Nullable)cacheResources;

-(OSCacheResources*_Nullable) getCacheFrameForVersion:(NSString*_Nonnull)version;
-(OSCacheResources*_Nullable) getCurrentRunningFrame;
-(OSCacheResources*_Nullable) getPreBundleFrame;

-(void) upgradeIfNeeded;

-(void) addCacheEntry:(OSCacheEntry*_Nonnull)cacheEntry forURL:(NSString*_Nonnull)url;

-(OSCacheEntry*_Nullable) getCacheEntryForURL:(NSString*_Nonnull)url;
-(void) healingCacheEntry:(NSString*_Nonnull)url;

-(BOOL) swapCache:(OSCacheResources*_Nonnull)cacheResources;
-(void) markForDeletion;
-(NSMutableArray*_Nonnull) gatherResourcesToDelete;

-(NSMutableDictionary*_Nonnull) getCacheEntries;

-(void) rollbackToPreviousVersion;
-(void) clearPreviousVersion;

@end
