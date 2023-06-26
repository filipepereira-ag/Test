#import <Foundation/Foundation.h>
#import "OSCacheEntry.h"

typedef NS_ENUM(NSInteger,OSCacheResourcesStatus)  {
    OSCacheResourcesStatusEmpty = 0,
    OSCacheResourcesStatusDownloading = 1,
    OSCacheResourcesStatusFetched = 2,
    OSCacheResourcesStatusFailed = 3,
    OSCacheResourcesStatusUpgrade = 4
};

extern NSString* _Nonnull const kOSCacheResourcesHostname;
extern NSString* _Nonnull const kOSCacheResourcesApplication;
extern NSString* _Nonnull const kOSCacheResourcesVersionToken;
extern NSString* _Nonnull const kOSCacheResourcesStatus;
extern NSString* _Nonnull const kOSCacheResourcesPreBundle;
extern NSString* _Nonnull const kOSCacheResourcesCacheEntries;
extern NSString* _Nonnull const kOSCacheResourcesFrameToDelete;

extern NSString * _Nonnull const kOSCacheResourcesResourcesObject;
extern NSString * _Nonnull const kOSCacheResourcesUrlMappingsObject;
extern NSString * _Nonnull const kOSCacheResourcesUrlMappingsNoCacheObject;

extern NSString * _Nonnull const kOSCacheResourcesDefaultEncoding;

extern NSString* _Nonnull const kOSCacheResourcesVersionTokenBeforeCreation;
extern NSString* _Nonnull const kOSCacheResourcesVersionTokenBeforeDownloading;
typedef void (^DownloadProgressBlock)(NSNumber * _Nullable initial, NSNumber * _Nullable loaded, NSNumber * _Nullable total);
typedef void (^DownloadErrorBlock)(NSString * _Nullable errorMessage);
typedef void (^DownloadFinishBlock)(BOOL success);
typedef NSURLSession* _Nullable (^DownloadSession)(void);

@interface OSCacheResources : NSObject

@property (nonatomic,strong) NSString * _Nonnull versionToken;
@property (nonatomic,strong) NSString * _Nonnull hostname;
@property (nonatomic,strong) NSString * _Nonnull application;
@property (nonatomic,strong) NSMutableDictionary * _Nullable cacheEntries;
@property OSCacheResourcesStatus status;
@property BOOL preBundle;
@property (nonatomic,strong) NSNumber* _Nullable maxNumberOfRetries;
@property BOOL frameToDelete;

@property (nonatomic,strong) NSString * _Nonnull  versionTokenBeforeCreation;
@property (nonatomic,strong) NSString * _Nonnull  versionTokenBeforeDownloading;

-(id _Nonnull)initForHostname:(NSString*_Nonnull)hostname
                  application:(NSString*_Nonnull)application
                  withVersion:(NSString*_Nonnull)version
                 forPrebundle:(BOOL)preBundle
             urlSessionGetter:(_Nonnull DownloadSession)session
            onProgressHandler:(DownloadProgressBlock _Nullable ) onProgressBlock
               onErrorHandler:(DownloadErrorBlock _Nullable ) onErrorBlock
              onFinishHandler:(DownloadFinishBlock _Nullable ) onFinishBlock;

-(id _Nonnull)initForHostname:(NSString*_Nonnull)hostname
                  application:(NSString*_Nonnull)application
                  withVersion:(NSString*_Nonnull)version
                 forPrebundle:(BOOL)preBundle
                       status:(NSNumber*_Nullable)status
             urlSessionGetter:(_Nonnull DownloadSession)session;

-(id _Nonnull)initWithDictionary:(NSDictionary*_Nonnull)dictionary
                urlSessionGetter:(_Nonnull DownloadSession)session;

-(void) populateCacheEntriesForResourcePool:(NSMutableDictionary*_Nonnull) resourcePool
                           prebundleEntries:(NSMutableDictionary*_Nullable) preBundleEntries
                               resourceList:(NSMutableArray*_Nonnull) resources
                                    urlMaps:(NSMutableDictionary*_Nonnull) urls
                             urlMapsNoCache:(NSMutableDictionary*_Nonnull) noCache;

-(void) setOnProgressHandler:(DownloadProgressBlock _Nullable) onProgressBlock
              onErrorHandler:(DownloadErrorBlock _Nullable) onErrorBlock
             onFinishHandler:(DownloadFinishBlock _Nullable) onFinishBlock;

-(NSMutableDictionary*_Nonnull) jsonDictionary;

-(void) addResource:(OSCacheEntry*_Nonnull) cacheEntry withUrl:(NSString*_Nonnull)url;

-(OSCacheEntry*_Nullable) getResourceForUrl:(NSString*_Nonnull) url;

-(void) updateResource:(OSCacheEntry*_Nonnull) resource withStatus:(OSCacheEntryStatus)status;

-(void) startDownload;

-(void) cancelDownload;

-(NSString*_Nonnull) getVersionTokensAsString;

-(NSString*_Nullable) getFileNameForURL:(NSString*_Nonnull)url forPrebundle:(BOOL)preBundle;

/**
 Attempts to copy the given resource into the cache folder if the
 cache entry exists on the prebundle. Otherwise, throws an exception.
 
 If the provided OSCacheEntry is marked as prebundled (preBundled = YES)
 and the file exists within the prebundle directory, copies the file to
 the target cache location. Additionally, mutates the provided OSCacheEntry
 instance by changing preBundle to NO and updating the status to
 OSCacheEntryStatusDownloading upon method execution, OSCacheEntryStatusUncached
 if it fails to copy the OSCacheEntry and OSCacheEntryStatusFetched if it succeeds
 to copy the resource.
 
 If an exception occurs, any downloads from current ongoing cache frame (aka
 OSCacheResources) will be canceled.
*/
-(void) copyPreBundleResource:(OSCacheEntry*_Nonnull)resource;

-(BOOL) fileExistsAtPreBundled:(OSCacheEntry *_Nonnull) resource;

+(void)downloadResourceSync:(OSCacheEntry*_Nonnull)resource forRequest:(NSURLRequest*_Nonnull)request andURLSession:(NSURLSession*_Nonnull)downloadSession completionHandler:(DownloadFinishBlock _Nullable) completionHandler;

@end
