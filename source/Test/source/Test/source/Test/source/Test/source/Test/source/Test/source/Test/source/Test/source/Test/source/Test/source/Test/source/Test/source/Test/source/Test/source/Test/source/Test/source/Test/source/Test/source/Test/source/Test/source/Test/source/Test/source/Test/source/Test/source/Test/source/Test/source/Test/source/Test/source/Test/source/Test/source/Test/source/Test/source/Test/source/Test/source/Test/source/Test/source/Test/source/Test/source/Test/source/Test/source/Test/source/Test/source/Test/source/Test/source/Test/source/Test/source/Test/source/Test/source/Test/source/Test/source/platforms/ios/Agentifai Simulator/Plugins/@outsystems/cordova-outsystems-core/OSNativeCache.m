#import "OSNativeCache.h"
#import "OSCacheEntry.h"
#import "OSCacheResources.h"
#import "OSMimeTypesHelper.h"
#import "CDVReachability.h"
#import "OSApplicationCache.h"
#import "OSLogger.h"
#import "OSFileChecksum.h"
#import "OSThreadSafeDictionaryWrapper.h"
#import "OSHTTPFactory.h"

#define kUnsetMaxNumberOfRetries -1
#define kDefaultRetriesThreshold 10
#define kDefaultRetriesPercentage 0.20

static NSString* const OSNativeCacheDirectory = @"OSNativeCache";
static NSString* const OSNativeCacheManifest = @"OSCacheManifest.plist";
static NSString* const OSNativeCacheApplicationObject = @"cachedApplication";
static NSString* const OSNativeCacheEntriesObject = @"cachedEntries";
static NSString* const OSNativeCacheVersionObject = @"nativeCacheVersion";
static NSString* const DefaultEncoding = @"UTF-8";
static NSString* const OSNativeCacheVersion = @"2.0.0";

static NSString* const OSNativeCacheWindowSizeOption = @"windowSize";
static NSString* const OSNativeCacheResourceConnectTimeoutOption = @"resourceConnectTimeout";
static NSString* const OSNativeCacheResourceReadTimeoutOption = @"resourceReadTimeout";
static NSString* const OSNativeCacheMaxNumberOfRetriesOption = @"maxNumberOfRetries";

static NSString* const OSCacheManifestPreferenceFileHash = @"OSCacheManifestFileHash";
static NSString* const OSCacheManifestPreferenceFileCreated = @"OSCacheManifestFileCreated";

int const NativeCacheWindowSize = 5;
static int const HTTPStatusCodeOk = 200;
static int const HTTPStatusCodeNotFound = 404;
static double const OSNativeCacheCheckpointRate = 0.5;


@interface OSNativeCache()

@property OSCacheStatus currentStatus;

@property (nonatomic,strong) NSString *currentApplication;

@property (nonatomic,strong) OSThreadSafeDictionaryWrapper *applicationEntries;

@property (nonatomic,strong) OSCacheResources *ongoingCacheResources;

@property (nonatomic,strong) NSURLSession* downloadSession;

@property (nonatomic,strong) NSNumber* maxNumberOfRetries;

@property (nonatomic, readonly, strong) id <OSLoggerProtocol> logger;

@property (nonatomic, readonly) BOOL firstRun;

/**
 Holds the timeout interval time for requests.
 This is used only when NSURLSession is lazily created.
 */
@property NSTimeInterval timeoutIntervalForRequest;

/**
 Holds the timeout interval time for requests.
 This is used only when NSURLSession is lazily created.
 */
@property NSTimeInterval timeoutIntervalForResource;

@end


@implementation OSNativeCache

@synthesize webViewEngine = _webViewEngine;
static OSNativeCache *sharedInstance = nil;

+(id) sharedInstanceWithFirstRun:(BOOL)firstRun
       andResourceConnectTimeout:(float)resourceConnect
          andResourceReadTimeout:(float)resourceRead {
    
    @synchronized (self) {
        if(sharedInstance == nil) {
            sharedInstance = [[self alloc] initWithFirstRun:firstRun
                                  andResourceConnectTimeout:resourceConnect
                                     andResourceReadTimeout:resourceRead];
        }
        return sharedInstance;
    }
}

+(id) sharedInstance{
    @synchronized (self) {
        if(sharedInstance == nil) {
            NSString* reason = [NSString stringWithFormat:@"OSNativeCache hasn't been initialized yet. Make sure to call %@ first:", NSStringFromSelector(@selector(sharedInstanceWithFirstRun:andResourceConnectTimeout:andResourceReadTimeout:))];
            @throw [NSException exceptionWithName:@"OSInvalidNativeCacheState" reason:reason userInfo:nil];
        }
        return sharedInstance;
    }
}

/**
 Lazy getter for downloadSession.
 This should be used every time doanloadSession is needed and *not* the instance variable (_downloadSession)
 */
-(NSURLSession*) downloadSession {
    if(!_downloadSession) {
        NSURLSessionConfiguration *sessionConfig = [self createSessionConfigurationWithOptions:nil andCurrentSession: nil];
        _downloadSession = [NSURLSession sessionWithConfiguration:sessionConfig delegate:self delegateQueue:nil];
    }
    
    return _downloadSession;
}

-(id)initWithFirstRun:(BOOL)firstRun
andResourceConnectTimeout:(float)resourceConnect
andResourceReadTimeout:(float)resourceRead {

    if(self = [super init]){
        _firstRun = firstRun;
        _logger = [OSLogger sharedInstance];
        _ongoingCacheResources = nil;
        _applicationEntries = [[OSThreadSafeDictionaryWrapper alloc] init];
        _currentStatus = OSCacheStatusUncached;
        _timeoutIntervalForRequest = resourceConnect;
        _timeoutIntervalForResource = resourceRead;
        [self createCacheDirectory];

        NSUserDefaults* userDefaults = [NSUserDefaults standardUserDefaults];
        BOOL cacheManifestCreatedPreferenceDoesNotExist = [userDefaults stringForKey:OSCacheManifestPreferenceFileCreated] == nil;
        if (cacheManifestCreatedPreferenceDoesNotExist) {
            [userDefaults setValue:[self manifestFileExists] ? @"true" : @"false" forKey:OSCacheManifestPreferenceFileCreated];
        }
        
        BOOL cacheManifestLoaded = [self readCacheManifest];
        if(cacheManifestLoaded){
            [_logger logDebug:@"Native cache successfully loaded" withModule:@"OSCache"];
            
            [self clearUnusedContent];
        }
    }
    
    return self;
}

- (BOOL)manifestFileExists {
    NSString *filePath = [self manifestFilePath];
    if ([filePath length] > 0) {
        NSFileManager *fileManager = [NSFileManager defaultManager];
        if ([fileManager fileExistsAtPath:filePath]) {
            return YES;
        }
    } else {
        [_logger logWarning:[NSString stringWithFormat:@"Manifest file not found: %@", filePath] withModule:@"OSCache"];
    }
    return NO;
}

-(void)createCacheDirectory{
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSApplicationSupportDirectory, NSUserDomainMask, YES);
    NSString *cacheDirectory = [paths count] > 0 ? [paths objectAtIndex:0] : @"";
    cacheDirectory = [cacheDirectory stringByAppendingPathComponent:OSNativeCacheDirectory];
    
    NSFileManager *fileManager = [NSFileManager defaultManager];
    NSError *error;
    
    if(![fileManager fileExistsAtPath:cacheDirectory])
        [fileManager createDirectoryAtPath:cacheDirectory withIntermediateDirectories:YES attributes:nil error:&error];
    
    if(error){
        [_logger logError:[NSString stringWithFormat:@"Failed to create cache directory: %@", cacheDirectory] withModule:@"OSCache"];
    }
}

-(void)createCacheDirectoryForApplication:(NSString*)applicationKey{
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSApplicationSupportDirectory, NSUserDomainMask, YES);
    NSString *cacheDirectory = [paths count] > 0 ? [paths objectAtIndex:0] : @"";
    cacheDirectory = [cacheDirectory stringByAppendingPathComponent:OSNativeCacheDirectory];
    cacheDirectory = [cacheDirectory stringByAppendingPathComponent:applicationKey];
    
    NSFileManager *fileManager = [NSFileManager defaultManager];
    NSError *error;

    [fileManager createDirectoryAtPath:cacheDirectory withIntermediateDirectories:YES attributes:nil error:&error];
    
    if(error){
        [_logger logError:[NSString stringWithFormat:@"Failed to create cache directory: %@", cacheDirectory] withModule:@"OSCache"];
        @throw error;
    }
}

/**
 
 Creates a session configuration.
 
 When providing a non-nil options dictionary, those options will
 override the default values from the associated properties.
 
 Possible options are:
 
 - windowSize: The maximum number of simultaneous open HTTP connections made to one host
 
 - resourceConnectTimeout: The maximum timeout value for all HTTP requests made by OSNativeCache or OSCacheResources
 
 - resourceReadTimeout: The maximum timeout value for all HTTP requests made by OSNativeCache or OSCacheResources
 
 */
-(NSURLSessionConfiguration*) createSessionConfigurationWithOptions: (NSDictionary*) options
                                                  andCurrentSession: (NSURLSession* _Nullable) urlSession {
    
    NSURLSessionConfiguration *sessionConfig = [OSHTTPFactory ephemeralConfiguration];
    
    // If there's valid _downloadSession already instantiated
    // and the new configurations are the same to the current one,
    // we should not create a new sessionConfiguration.
    if(urlSession) {
        NSURLSessionConfiguration* currentConf = [urlSession configuration];
        
        if(!options) {
            return nil;
        }
        
        BOOL shouldCreateNew = YES;
        if(options) {
            NSNumber *windowSize = [options objectForKey:OSNativeCacheWindowSizeOption];
            NSNumber *resourceConnectTimeout = [options objectForKey:OSNativeCacheResourceConnectTimeoutOption];
            NSNumber *resourceReadTimeout = [options objectForKey:OSNativeCacheResourceReadTimeoutOption];
            
            if([windowSize integerValue] == currentConf.HTTPMaximumConnectionsPerHost &&
               [resourceConnectTimeout integerValue] == currentConf.timeoutIntervalForRequest &&
               [resourceReadTimeout integerValue] == currentConf.timeoutIntervalForResource) {
                shouldCreateNew = NO;
            }
        }
        if(!shouldCreateNew) {
            return nil;
        }
    }
    
    // Apply default values
    if(self.timeoutIntervalForRequest > 0) {
        sessionConfig.timeoutIntervalForRequest = self.timeoutIntervalForRequest;
    }
    
    if(self.timeoutIntervalForResource > 0) {
        sessionConfig.timeoutIntervalForResource = self.timeoutIntervalForResource;
    }
    
    sessionConfig.HTTPMaximumConnectionsPerHost = NativeCacheWindowSize;
    
    // Override values based on options
    if(options){
        NSNumber *windowSize = [options objectForKey:OSNativeCacheWindowSizeOption];
        if(windowSize){
            sessionConfig.HTTPMaximumConnectionsPerHost = [windowSize integerValue];
        }
        
        NSNumber *resourceConnectTimeout = [options objectForKey:OSNativeCacheResourceConnectTimeoutOption];
        if(resourceConnectTimeout){
            sessionConfig.timeoutIntervalForRequest = [resourceConnectTimeout integerValue];
        }
        
        NSNumber *resourceReadTimeout = [options objectForKey:OSNativeCacheResourceReadTimeoutOption];
        if(resourceReadTimeout){
            sessionConfig.timeoutIntervalForResource = [resourceReadTimeout integerValue];
        }
    }
    
    return sessionConfig;
}

/**
 
 Allows to change various properties that affect how OSNativeCache behaves.

 Possible options are:
 
 - windowSize: The maximum number of simultaneous open HTTP connections made to one host
 
 - resourceConnectTimeout: The maximum timeout value for all HTTP requests made by OSNativeCache or OSCacheResources
 
 - resourceReadTimeout
 
 - maxNumberOfRetries: The maximum number of retries made when attempting to download a cache resource
 
 @warning
 Calling this method with a non-nil options dictionary will cause
 `downloadSession` to be recreated.
 
 */
-(void)applyOptions:(NSDictionary*) options{
    // Reset the max number of retries before checking for platform values
    _maxNumberOfRetries = [NSNumber numberWithInt:kUnsetMaxNumberOfRetries];
    if(options){
        NSURLSessionConfiguration *sessionConfig = [self createSessionConfigurationWithOptions: options andCurrentSession:_downloadSession];
        if(sessionConfig) {
            self.downloadSession = [NSURLSession sessionWithConfiguration:sessionConfig delegate:self delegateQueue:nil];
        }
        NSNumber *newMaxNumberOfRetries = [options objectForKey:OSNativeCacheMaxNumberOfRetriesOption];
        if(newMaxNumberOfRetries && [newMaxNumberOfRetries integerValue] > kUnsetMaxNumberOfRetries){
            _maxNumberOfRetries = newMaxNumberOfRetries;
        }
    }
}

# pragma mark - Cache serialization

- (NSMutableDictionary*) createCacheManifest{
    
    NSMutableDictionary *result = [[NSMutableDictionary alloc] init];
    
    @try{
        [result setValue:OSNativeCacheVersion forKey:OSNativeCacheVersionObject];
        [result setValue:_currentApplication forKey:OSNativeCacheApplicationObject];
        
        NSMutableDictionary *cachedContentObject = [[NSMutableDictionary alloc] init];
        
        NSArray *entriesKeys = [_applicationEntries allKeys];
        for(NSString *key in entriesKeys){
            if(!key) continue;
            
            OSApplicationCache *applicationCache = [_applicationEntries objectForKey:key];
            NSMutableDictionary *applicationContent = [applicationCache createCacheManifest];
            
            [cachedContentObject setValue:applicationContent forKey:key];
        }
        
        [result setValue:cachedContentObject forKey:OSNativeCacheEntriesObject];
    }
    @catch(NSException *exception){
        [_logger logError:[NSString stringWithFormat:@"Failed to create cache manifest object: %@", [exception reason]] withModule:@"OSCache" withException:exception];
    }
    
    return result;
    
}

- (NSString*) manifestFilePath{
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSApplicationSupportDirectory, NSUserDomainMask, YES);
    NSString *cacheDirectory = [paths count] > 0 ? [paths objectAtIndex:0] : @"";
    cacheDirectory = [cacheDirectory stringByAppendingPathComponent:OSNativeCacheDirectory];
    
    NSString *manifestFile = [cacheDirectory stringByAppendingPathComponent:OSNativeCacheManifest];
    
    return manifestFile;
}

- (void) writeCacheManifest{
    NSMutableDictionary *manifest = [self createCacheManifest];
    
    NSString *filePath = [self manifestFilePath];
    
    BOOL write = [manifest writeToFile:filePath atomically:YES];
    if(!write){
        NSUserDefaults* userDefaults = [NSUserDefaults standardUserDefaults];
        [userDefaults setObject:@"false" forKey:OSCacheManifestPreferenceFileCreated];
        
        NSException* fileWriteException = [NSException
                                           exceptionWithName:@"FileNotWriteException"
                                           reason:@"Unable to serialize cache"
                                           userInfo:nil];
        //No need to log a error message here, because this method invocation is already isolated with try-catch conditions
        @throw fileWriteException;
    }else{
        [self writeCacheManifestHash:filePath];

        NSUserDefaults* userDefaults = [NSUserDefaults standardUserDefaults];
        [userDefaults setObject:@"true" forKey:OSCacheManifestPreferenceFileCreated];
    }
    
    [_logger logWarning:@"Cache was successfully serialized" withModule:@"OSCache"];
}

- (BOOL) readCacheManifest{
    NSString *filePath = [self manifestFilePath];
    
    NSFileManager *fileManager = [NSFileManager defaultManager];
    if([filePath length] > 0 && [fileManager fileExistsAtPath:filePath]){
        
        if([self isCacheManifestFileCorrupted:filePath]){
            [_logger logError:@"Cache manifest file is corrupt or invalid" withModule:@"OSCache"];
            return NO;
        }
        
        @try {
            NSMutableDictionary *manifest = [NSMutableDictionary dictionaryWithContentsOfFile:filePath];
            
            if(!manifest){
                [_logger logError:[NSString stringWithFormat:@"Failed to read cache manifest file: file %@ is invalid or corrupted", filePath] withModule:@"OSCache"];
                return NO;
            }
            
            NSString *nativeCacheVersion = [manifest objectForKey:OSNativeCacheVersionObject];
            if(!nativeCacheVersion || ![nativeCacheVersion isEqualToString:OSNativeCacheVersion]){
                _cacheUpgrade = YES;
            }
            
            NSString *cacheApplication = [manifest objectForKey:OSNativeCacheApplicationObject];
            _currentApplication = cacheApplication;
            
            NSMutableDictionary *manifestContent = [manifest objectForKey:OSNativeCacheEntriesObject];
            for(NSString *key in manifestContent){
                if(!key) continue;
                
                NSDictionary *dictionary = [manifestContent objectForKey:key];
                OSApplicationCache *applicationCache = [[OSApplicationCache alloc] initWithDictionary:dictionary
                                                                                                upgrade:_cacheUpgrade
                                                                                        andSessionGetter: [self getDownloadSessionBlock]];
                
                [_applicationEntries setValue:applicationCache forKey:key];
            }
            
            return YES;
        }
        @catch (NSException *exception) {
            [_logger logError:[NSString stringWithFormat:@"Failed to parse cache manifest file %@: %@", filePath, [exception reason]] withModule:@"OSCache" withException:exception];
        }
    }
    else{
        if(!_firstRun){
            NSUserDefaults* userDefaults = [NSUserDefaults standardUserDefaults];
            NSString *manifestCreated = [userDefaults objectForKey:OSCacheManifestPreferenceFileCreated];
            if (manifestCreated != nil && [manifestCreated isEqualToString:@"true"]) {
                [_logger logError:[NSString stringWithFormat:@"Failed to load cache manifest: File %@ not found. The file had been created previously.", filePath] withModule:@"OSCache"];
            } else {
                [_logger logError:[NSString stringWithFormat:@"Failed to load cache manifest: File %@ not found. The file was never created.", filePath] withModule:@"OSCache"];
            }
        } else {
                [_logger logWarning:[NSString stringWithFormat:@"Failed to load cache manifest: File %@ not found. This is the first run so it's expected.", filePath] withModule:@"OSCache"];
        }
    }
    
    return NO;
}

/**
 * Method to Serialize cache when occurs a heal process. Only serialize if the there is a change on manifest cache
 */
-(void) serializeCacheHealed{
    NSMutableDictionary *manifest = [self createCacheManifest];
    
    // Convert Dictionary to Plist to validate checksum
    NSError *err = nil;
    NSData *manifestPlist = [NSPropertyListSerialization dataWithPropertyList:manifest format:NSPropertyListXMLFormat_v1_0 options:0 error:&err];
    
    if(!err){
        NSString *fileDataContentHash = [OSFileChecksum contentHashOfFileData:manifestPlist];
        
        // Read Manifest check sum from user defaults
        NSUserDefaults* userDefaults = [NSUserDefaults standardUserDefaults];
        NSString *checksum = [userDefaults stringForKey:OSCacheManifestPreferenceFileHash];
        
        // Validate hashes
        if([checksum length] > 0 && [fileDataContentHash length] > 0 && ![checksum isEqualToString:fileDataContentHash]){
            [self writeCacheManifest];
        }
    }
}

# pragma mark - Cache manipulation

- (void) changeCacheStatus:(OSCacheStatus) newStatus {
    _currentStatus = newStatus;
    if(_delegate){
        [_delegate updateStatus:newStatus];
    }
}


-(BOOL) swapCache{
    if(_currentApplication && _currentStatus != OSCacheStatusUpdateReady){
        [_logger logError:@"Unable to swap cache: missing application or wrong cache status" withModule:@"OSCache"];
        return NO;
    }
    
    BOOL resultSwapCache = YES;
    // jag: if _ongoingCacheResources is nil, this creates
    // an applicationKey that doesn't match any existing
    // OSApplicationCache and ends up instantiating an invalid one
    NSString *applicationKey = [OSNativeCache keyForHostname:[_ongoingCacheResources hostname] andApplication:[_ongoingCacheResources application]];
    
    _currentApplication = applicationKey;
    
    OSApplicationCache *applicationCache = [_applicationEntries objectForKey:applicationKey];
    
    //Validate if applicationKey is valid, because when inserting values inside a NSMutableDictionary the keys must not be nil
    if(!applicationCache && applicationKey){
        applicationCache = [[OSApplicationCache alloc] initForHostname:[_ongoingCacheResources hostname]
                                                        andApplication:[_ongoingCacheResources application]
                                                      andSessionGetter:[self getDownloadSessionBlock]
                                                             forAppKey:applicationKey];
        
        [_applicationEntries setValue:applicationCache forKey:applicationKey];
    }
    
    resultSwapCache = [applicationCache swapCache:_ongoingCacheResources];
    OSCacheResourcesStatus ongoingCacheResourcesStatus = _ongoingCacheResources.status;
    NSString* newVersionToken = [_ongoingCacheResources.versionToken copy];
    _ongoingCacheResources = nil;
    
    [self changeCacheStatus:OSCacheStatusIdle];
    
    @try {
        [self writeCacheManifest];
        if(resultSwapCache) {
            [_logger logWarning:@"Cache was swapped with success" withModule:@"OSCache"];
            [applicationCache clearPreviousVersion];
        } else {
            [_logger logError: [NSString stringWithFormat:@"Failed to swap cache. (New cache frame version %@ with status: %ld).", newVersionToken, (long)ongoingCacheResourcesStatus] withModule:@"OSCache"];
        }
    } @catch (NSException *exception) {
        [_logger logError:[NSString stringWithFormat:@"Failed to serialize cache while swapping cache: %@", [exception reason]] withModule:@"OSCache" withException:exception];
        resultSwapCache = NO;
        [applicationCache rollbackToPreviousVersion];
    }
    
    return resultSwapCache;
}

-(void) createCheckPointForApplicationCache:(OSApplicationCache*) applicationCache{
    [_logger logDebug:[NSString stringWithFormat:@"Create checkpoint for application cache: %@", [applicationCache cacheApplicationKey]] withModule:@"OSCache"];
    
    [applicationCache swapCache:_ongoingCacheResources];
    
    @try {
        [self writeCacheManifest];
        [_logger logDebug:@"Checkpoint was created with success" withModule:@"OSCache"];
    } @catch (NSException *exception) {
        [_logger logError:[NSString stringWithFormat:@"Failed to serialize application cache while creating a checkpoint: %@", [exception reason]] withModule:@"OSCache" withException:exception];
    }
}


-(void) markForDeletion{
    
    OSApplicationCache *applicationCache = [_applicationEntries objectForKey:_currentApplication];
    @try {
        [applicationCache markForDeletion];
        [self writeCacheManifest];
    } @catch (NSException *exception) {
        [_logger logError:[NSString stringWithFormat:@"Failed to clean unused content from cache filesystem: %@", [exception reason]] withModule:@"OSCache" withException:exception];
    }
    
}

-(void) clearUnusedContent{
    OSApplicationCache *applicationCache = [_applicationEntries objectForKey:_currentApplication];
    NSMutableArray *resourcesToDelete = nil;
    @try {
        resourcesToDelete = [applicationCache gatherResourcesToDelete];
        [self writeCacheManifest];
        
        dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
            [self deleteFilesFromLocalStorage:resourcesToDelete];
        });
    } @catch (NSException *exception) {
        [_logger logError:[NSString stringWithFormat:@"Failed to clean unused content from cache filesystem: %@", [exception reason]] withModule:@"OSCache" withException:exception];
    }
}

-(void) deleteFilesFromLocalStorage:(NSArray*)resources{
    
    for(OSCacheEntry *resource in resources){
        @try {
            NSFileManager *fileManager = [NSFileManager defaultManager];
            NSString *filePath = [self getLocalFilePath:resource];
            NSError *error;
            
            [_logger logDebug:[NSString stringWithFormat:@"Deleting cache file for URL: %@", [resource url]] withModule:@"OSCache"];
            [fileManager removeItemAtPath:filePath error:&error];
            
            if (error) {
                [_logger logDebug:[NSString stringWithFormat:@"Failed to delete deprecated cache file: %@", [resource url]] withModule:@"OSCache"];
            }
        } @catch (NSException *exception) {
            [_logger logDebug:[NSString stringWithFormat:@"Failed to delete deprecated cache file %@: %@", [resource url], [exception reason]] withModule:@"OSCache"];
        }
    }
    
}

# pragma mark - Public API

-(void)startCaching:(NSString*)hostname application:(NSString*)application version:(NSString*)version resourceList:(NSMutableArray*)resources urlMaps:(NSMutableDictionary*)urls urlMapsNoCache:(NSMutableDictionary*)noCache withOptions:(NSMutableDictionary*)options{
    
    // Create a starthCachingUUID to track different startCaching executions. Should be included in logs.
    NSString *startCachingUUId = [[NSUUID UUID] UUIDString];

    // try to obtain the running cache version token
    NSString *currentVersionToken = [self getRunningVersionToken];
    
    [_logger logWarning:[NSString stringWithFormat:@"startCachingId: %@ - startCaching started for version: %@, from: %@", startCachingUUId, version, currentVersionToken] withModule:@"OSCache"];
    
    NSString *appKey = [OSNativeCache keyForHostname:hostname andApplication:application];
    
    if (_currentApplication && [_currentApplication isEqualToString:appKey]) {
        OSApplicationCache *applicationCache = [_applicationEntries objectForKey:_currentApplication];
        
        if([[applicationCache getCurrentCacheVersion] isEqualToString:version]) {
            _ongoingCacheResources = nil;
            
            [self changeCacheStatus:OSCacheStatusIdle];
            
            // Version already available in cache
            if(_delegate)
                [_delegate fireOnFinishEvent];
            
            [_logger logWarning:[NSString stringWithFormat:@"startCachingId: %@ - Caching operation was skipped: version %@ is already available in cache", startCachingUUId, version] withModule:@"OSCache"];
            return;
        }
    }
    
    if (_ongoingCacheResources) {
        if (![[_ongoingCacheResources versionToken] isEqualToString:version]) {
            // Stop ongoing version and start a new one
            [_ongoingCacheResources cancelDownload];            
            _ongoingCacheResources = nil;
            
        } else {
            if ([_ongoingCacheResources status] != OSCacheResourcesStatusFailed){
                // If currentStatus is IDLE it means that the cache engine was reinitialized
                // probably due to a reload or a page navigation triggered by a deeplink.
                if(_currentStatus == OSCacheStatusIdle) {
                    // Change cache status to DOWNLOADING since the ongoing cache frame
                    // is still in progress.
                    [self changeCacheStatus:OSCacheStatusDownloading];
                }
                
                [_logger logWarning:[NSString stringWithFormat:@"Resuming caching operation for version: %@",version] withModule:@"OSCache"];
                // Return only if the status is not Failed
                return;
            }
            else{
                [_logger logWarning:[NSString stringWithFormat:@"startCachingId: %@ - Recovering cache frame for version: %@", startCachingUUId, version] withModule:@"OSCache"];
            }
        }
    }
    
    //Validate if the resource list, url mappings, no cache dictionaries are valid
    if ([resources count] <= 0 || [urls count] <= 0){
        // Reject
        [_logger logError:[NSString stringWithFormat:@"startCachingId: %@ - Caching operation was rejected: resource list and url mappings dictionary are not valid", startCachingUUId] withModule:@"OSCache"];
        
        [_delegate fireOnErrorEvent:@"Caching operation was rejected: resource list and url mappings dictionary are not valid"];
        [_delegate fireOnFinishEvent];
        return;
    }
    
    @try {
        
        OSApplicationCache *applicationCache = [_applicationEntries objectForKey:appKey];
        if(!applicationCache && appKey){
            applicationCache = [[OSApplicationCache alloc] initForHostname:hostname
                                                            andApplication:application
                                                          andSessionGetter:[self getDownloadSessionBlock]
                                                                 forAppKey:appKey];
            
            [_applicationEntries setValue:applicationCache forKey:appKey];
        }
        
        [self createCacheDirectoryForApplication:appKey];
        
        // Only applyOptions when we're really requiring them to
        // applied. applyOptions: can potentially create new
        // downloadSessions which means that the old downloadSession
        // instance gets replaced and this has impacts on tasks cancellation
        // for any ongoing OSCacheResources download. For this reason,
        // let's applyOptions only we know that previous ongoing cache frame
        // has finished being cancelled.
        [self applyOptions:options];
        
        DownloadProgressBlock downloadProgressBlock = ^(NSNumber *initial, NSNumber *loaded, NSNumber *total) {
            if(self.currentStatus == OSCacheStatusDownloading){
                if(self.delegate){
                    [self.delegate fireOnProgressEvent:loaded total:total];
                }
                
                if(initial < loaded && loaded < total){
                    int checkpointRate = ([total intValue] - [initial intValue]) * OSNativeCacheCheckpointRate;
                    int progress = ([loaded intValue] - [initial intValue]);
                    
                    if(progress % checkpointRate == 0)
                        [self createCheckPointForApplicationCache:applicationCache];
                }
            }
        };
        
        DownloadErrorBlock downloadErrorBlock = ^(NSString *errorMessage){
            if(self.currentStatus == OSCacheStatusDownloading){
                if(self.delegate){
                    [self.delegate fireOnErrorEvent:errorMessage];
                    [self.delegate fireOnFinishEvent];
                }
                
                if(self.currentApplication != nil){
                    [self changeCacheStatus:OSCacheStatusIdle];
                }
                else{
                    [self changeCacheStatus:OSCacheStatusUncached];
                }
                
                // Save failed cache frame to be reused in other retry
                [self.ongoingCacheResources setStatus:OSCacheResourcesStatusFailed];
                
                [self createCheckPointForApplicationCache:applicationCache];
                
                self.ongoingCacheResources = nil;
            }
        };
        
        DownloadFinishBlock downloadFinishBlock = ^(BOOL success) {
            if(self.currentStatus == OSCacheStatusDownloading){
                if(self.delegate){
                    if (success) {
                        [self changeCacheStatus:OSCacheStatusUpdateReady];
                        
                        if(![self swapCache]){
                            [self.delegate fireOnErrorEvent:@"Inconsistency on cache version"];
                        }
                    }
                    [self.logger logWarning:[NSString stringWithFormat:@"startCachingId: %@ - startCaching finished for version: %@", startCachingUUId, [version length] > 0 ? version : @"n/a"] withModule:@"OSCache"];
                    [self.delegate fireOnFinishEvent];
                }
            }
        };
        
        _ongoingCacheResources = [applicationCache getCacheFrameForVersion:version];
        if(_ongoingCacheResources && !_ongoingCacheResources.preBundle){
            
            [_ongoingCacheResources setOnProgressHandler:downloadProgressBlock
                                          onErrorHandler:downloadErrorBlock
                                         onFinishHandler:downloadFinishBlock];
        } else {
            
            _ongoingCacheResources = [[OSCacheResources alloc] initForHostname:hostname
                                                                   application:application
                                                                   withVersion:version
                                                                  forPrebundle:NO
                                                              urlSessionGetter:[self getDownloadSessionBlock]
                                                             onProgressHandler:downloadProgressBlock
                                                                onErrorHandler:downloadErrorBlock
                                                               onFinishHandler:downloadFinishBlock];
            /**
            * After creating the cache resources we want to register the version token which was running
            * We want to do getRunningVersionToken again because it can be different from the previous running version
            * due to concurrency issues
            */ 
            currentVersionToken = [self getRunningVersionToken];
            _ongoingCacheResources.versionTokenBeforeCreation = currentVersionToken;
            [self.logger logWarning:[NSString stringWithFormat:@"startCachingId: %@ - Version token before creation: %@", startCachingUUId, currentVersionToken] withModule:@"OSCache"];
            
            [_ongoingCacheResources populateCacheEntriesForResourcePool:[applicationCache getCacheEntries]
                                                       prebundleEntries:[applicationCache getPreBundleFrame].cacheEntries
                                                           resourceList:resources
                                                                urlMaps:urls
                                                         urlMapsNoCache:noCache];
            
            [applicationCache addCacheFrame:_ongoingCacheResources];
            
        }
        
        [self changeCacheStatus:OSCacheStatusDownloading];
        
        [self calculateMaxNumberOfRetries:[resources count]];
        [_ongoingCacheResources setMaxNumberOfRetries:_maxNumberOfRetries];
        /**
        * Before downloading the cache resources we want to register the version token which was running
        * We want to do getRunningVersionToken again because it can be different from the previous running version
        * due to concurrency issues
        */ 
        currentVersionToken = [self getRunningVersionToken];
        _ongoingCacheResources.versionTokenBeforeDownloading = currentVersionToken;
        [self.logger logWarning:[NSString stringWithFormat:@"startCachingId: %@ - Version token before downloading: %@", startCachingUUId, currentVersionToken] withModule:@"OSCache"];
        [_ongoingCacheResources startDownload];
        
    } @catch (NSException *exception) {
        [_logger logError:[NSString stringWithFormat:@"startCachingId: %@ - Failed to download resources for application version %@: %@", startCachingUUId, version, [exception reason]] withModule:@"OSCache" withException:exception];
    }
    
}

-(void) switchToVersion:(NSString*)hostname application:(NSString*)application version:(NSString*)version{
    [_logger logWarning:[NSString stringWithFormat:@"switchToVersion version: %@",version] withModule:@"OSCache"];
    
    NSString *appKey = [OSNativeCache keyForHostname:hostname andApplication:application];
    
    if (_currentApplication && [_currentApplication isEqualToString:appKey]) {
        OSApplicationCache *applicationCache = [_applicationEntries objectForKey:_currentApplication];
        
        if([[applicationCache getCurrentCacheVersion] isEqualToString:version]) {
            [self markForDeletion];
        }
        else{
            if(_delegate){
                [_delegate throwException:[NSString stringWithFormat:@"Failed to switch to cache version %@",version]];
            }
            else{
                [_logger logError:[NSString stringWithFormat:@"Failed to switch to cache version %@",version] withModule:@"OSCache"];
            }
        }
    } else {
        [_logger logError:[NSString stringWithFormat:@"Unable to switch version: app https://%@/%@ not found", hostname, application] withModule:@"OSCache"];
    }
    
}

-(NSMutableURLRequest*) cloneRequestWithDefaultHeaders:(NSURLRequest*)request {
    NSMutableURLRequest *urlRequest = [request mutableCopy];

    OSApplicationCache *currentApplication = [[self applicationEntries] valueForKey:[self currentApplication]];
    OSCacheResources *cacheResources = [currentApplication getCurrentRunningFrame];
    
    [urlRequest addValue:(cacheResources != nil ? [cacheResources getVersionTokensAsString] : @"n/a") forHTTPHeaderField:@"x-version-tokens"];

    return urlRequest;
}


-(void) getResourceFromCache:(NSURLRequest*)request andCompletionHandler:(DownloadWebResponseFinished) completionHandler {
    NSURL *nsURL  = [request URL];
    
    NSString *urlString = [nsURL path];
    
    NSRegularExpression *regex = nil;
    NSError *error = nil;
    
    /*
        * Matches any URL containing parameters (eg. /Test?param1=val1)
        *
        * If the URL contains parameters, the cache query string should only contain
        * the element without the parameters (eg. getCacheEntryForUrl("/Test")
        * and not getCacheEntryForUrl("/Test?param1=val1") since the entries in cache do
        * not contain the parameters and url /Test?param1=val1 or /Test?param2=val2
        * should retrieve the same entry.
    */
    regex = [NSRegularExpression regularExpressionWithPattern:@".*\?((.+=.*)(&?))+"
                                                      options:NSRegularExpressionCaseInsensitive error:&error];
    
    if(error) {
        [_logger logError:[NSString stringWithFormat:@"Failed to create a regular expression instance: %@", [error localizedDescription]] withModule:@"OSCache"];
        @throw error;
    }
    
    if([[nsURL query] length] > 0){
        
        NSArray *matchesInString = [regex matchesInString:[nsURL query] options:0 range:NSMakeRange(0, [[nsURL query] length])];
        BOOL containsParameters = [matchesInString count] > 0;
        
        if (containsParameters){
            urlString = [NSString stringWithFormat:@"%@", [nsURL path]];
        } else {
            urlString = [NSString stringWithFormat:@"%@?%@", [nsURL path], [nsURL query]];
        }
    }
    
    OSCacheEntry *resource = [self getCacheEntry:urlString];
    
    // intercept request to inject headers
    NSMutableURLRequest *urlRequest = [self cloneRequestWithDefaultHeaders:request];

    if(resource){
        
        // Heal the resource MimeType if null, however this should never happen
        if(!resource.mimeType || [resource.mimeType length] == 0){
            [_logger logWarning:[NSString stringWithFormat:@"Healing resource mime type: %@", [resource url]] withModule:@"OSCache"];
            [resource healMimeType];
            
            [self serializeCacheHealed];
        }
        
        if ([resource noCache]) {
            if ([self isNetworkAvailable]) {
                // If we're online it's imperative that we exit this function body
                // and allow the download to deal with the completion handler from now on.
                return [[self.downloadSession dataTaskWithRequest:urlRequest completionHandler:^(NSData *taskData, NSURLResponse *taskResponse, NSError *taskError) {
                    NSData *resourceData = taskData;
                    NSError *error = taskError;
                    
                    if (error != nil) {
                        NSString *filePath = [self getLocalFilePath:resource];
                        resourceData = [NSData dataWithContentsOfFile:filePath];
                    }
                    
                    NSURLResponse *urlResponse = [[NSHTTPURLResponse alloc] initWithURL:nsURL statusCode:HTTPStatusCodeOk HTTPVersion:@"HTTP/1.1"headerFields:@{@"Content-Type": [resource mimeType]}];
                    OSWebResponse* webResponse = nil;
                    if(resourceData) {
                        webResponse = [[OSWebResponse alloc] initWithResponse:urlResponse andContent:resourceData];
                    }
                    return completionHandler(webResponse);
                }] resume];
            }
            
            NSString *filePath = [self getLocalFilePath:resource];
            NSData* resourceData = [NSData dataWithContentsOfFile:filePath];
            NSURLResponse *urlResponse = [[NSHTTPURLResponse alloc] initWithURL:nsURL statusCode:HTTPStatusCodeOk HTTPVersion:@"HTTP/1.1"headerFields:@{@"Content-Type": [resource mimeType]}];
            OSWebResponse* webResponse = nil;
            if(resourceData) {
                webResponse = [[OSWebResponse alloc] initWithResponse:urlResponse andContent:resourceData];
            }
            return completionHandler(webResponse);
        } else {
            NSString *filePath = [self getLocalFilePath:resource];
            NSData* resourceData = [NSData dataWithContentsOfFile:filePath];
            if(resourceData){
                NSURLResponse *urlResponse = [[NSHTTPURLResponse alloc] initWithURL:nsURL statusCode:HTTPStatusCodeOk HTTPVersion:@"HTTP/1.1"headerFields:@{@"Content-Type": [resource mimeType]}];
                OSWebResponse *webResponse = [[OSWebResponse alloc] initWithResponse:urlResponse andContent:resourceData];
                [_logger logDebug:[NSString stringWithFormat:@"Resource loaded from cache %@",[resource url]] withModule:@"OSCache"];
                return completionHandler(webResponse);
            }

            // If the resource is not prebundled and doesn't exist in the cache, try to find it first in the prebundle
            if (!resource.preBundled) {
                OSApplicationCache *appCache = [_applicationEntries objectForKey:self.currentApplication];
                [resource setStatus:OSCacheEntryStatusUncached];

                // Copy resource from PreBundle
                if ([self preBundleResource:resource forApplicationCache:appCache]) {
                    [self copyResourceFromPreBundle:resource onApplicationCache:appCache];
                    resourceData = [NSData dataWithContentsOfFile:filePath];

                    if (resourceData) {
                        [self healingEntry:urlString];
                        [_logger logWarning:[NSString stringWithFormat:@"Healing resource %@ from prebundle: SUCCEDED", [resource url]] withModule:@"OSCache"];
                        NSURLResponse *urlResponse = [[NSHTTPURLResponse alloc] initWithURL:nsURL statusCode:HTTPStatusCodeOk HTTPVersion:@"HTTP/1.1"headerFields:@{@"Content-Type": [resource mimeType]}];
                        OSWebResponse *webResponse = [[OSWebResponse alloc] initWithResponse:urlResponse andContent:resourceData];
                        return completionHandler(webResponse);
                    } else {
                        [_logger logError:[NSString stringWithFormat:@"Healing resource %@ from prebundle: FAILED", [resource url]] withModule:@"OSCache"];
                    }
                }

                if (!resourceData) {
                    // Create new session to download the missing resource
                    // instead of sharing the main download session from the cache.
                    // This allows us to continue downloading the missing resource even
                    // if, within a startCaching flow, downloads are canceled.
                    NSURLSessionConfiguration *sessionConfig = [self createSessionConfigurationWithOptions:nil andCurrentSession: nil];
                    NSURLSession* healDownloadSession = [NSURLSession sessionWithConfiguration:sessionConfig delegate:self delegateQueue:nil];

                    return [OSCacheResources downloadResourceSync:resource forRequest:urlRequest andURLSession: healDownloadSession completionHandler:^(BOOL success) {
 
                        if(success) {
                            [self healingEntry:urlString];
                            [self.logger logWarning:[NSString stringWithFormat:@"Healing resource %@ from web: SUCCEEDED", [resource url]] withModule:@"OSCache"];
                            
                        } else {
                            [self.logger logError:[NSString stringWithFormat:@"Healing resource %@ from web: FAILED", [resource url]] withModule:@"OSCache"];
                            [self.logger logWarning:[NSString stringWithFormat:@"Trying to retrieve the latest version of the resource %@ from the server", [resource url]] withModule:@"OSCache"];
                        }

                        NSData* resourceData = [NSData dataWithContentsOfFile:filePath];
                        int statusCode = resourceData ? HTTPStatusCodeOk : HTTPStatusCodeNotFound;
                        
                        NSURLResponse *urlResponse = [[NSHTTPURLResponse alloc] initWithURL:nsURL statusCode:statusCode HTTPVersion:@"HTTP/1.1"headerFields:@{@"Content-Type": [resource mimeType]}];
                        OSWebResponse *webResponse = webResponse = [[OSWebResponse alloc] initWithResponse:urlResponse andContent:resourceData];
                        
                        return completionHandler(webResponse);
                    }];
                }
            } else {
                NSURLSessionConfiguration *sessionConfig = [self createSessionConfigurationWithOptions:nil andCurrentSession: nil];
                NSURLSession* healDownloadSession = [NSURLSession sessionWithConfiguration:sessionConfig delegate:self delegateQueue:nil];
                
                return [OSCacheResources downloadResourceSync:resource forRequest:urlRequest andURLSession:healDownloadSession completionHandler:^(BOOL success) {
                    NSData* resourceData = [NSData dataWithContentsOfFile:filePath];
                    if (resourceData) {
                        [self healingEntry:urlString];
                        NSURLResponse *urlResponse = [[NSHTTPURLResponse alloc] initWithURL:nsURL statusCode:HTTPStatusCodeOk HTTPVersion:@"HTTP/1.1"headerFields:@{@"Content-Type": [resource mimeType]}];
                        OSWebResponse *webResponse = [[OSWebResponse alloc] initWithResponse:urlResponse andContent:resourceData];
                        return completionHandler(webResponse);
                    }
                }];
            }
        }
    } else {
        [_logger logDebug:[NSString stringWithFormat:@"Unable to find resource: %@", urlString] withModule:@"OSCache"];
    }
    return completionHandler(nil);
}

-(OSCacheEntry *) preBundleResource:(OSCacheEntry*) resource forApplicationCache:(OSApplicationCache *) applicationCache {
    
    OSCacheEntry *preBundledResource = nil;
    OSCacheResources *preBundleFrame = [applicationCache getPreBundleFrame];
    
    if(preBundleFrame){
        preBundledResource = [preBundleFrame.cacheEntries objectForKey:[resource url]];
    }
    
    return preBundledResource;
}

-(void) copyResourceFromPreBundle:(OSCacheEntry*) resource onApplicationCache:(OSApplicationCache *) applicationCache {
    
    NSString *originalFileName = resource.fileName;
    
    OSCacheResources *runningVersion = [applicationCache getCurrentRunningFrame];
    
    OSCacheEntry *preBundledResource = [self preBundleResource:resource forApplicationCache:applicationCache];
    
    if(preBundledResource){
        resource.fileName = [runningVersion getFileNameForURL:resource.url forPrebundle:YES];
        resource.preBundled = YES;
        
        [runningVersion copyPreBundleResource:resource];
        
        resource.fileName = originalFileName;
        resource.preBundled = NO;
    }
}



-(BOOL)isNetworkAvailable{
    if ([[CDVReachability reachabilityForInternetConnection] currentReachabilityStatus] == NotReachable) {
        return NO;
    }
    else{
        return YES;
    }
}

# pragma mark - Internal API

- (NSURLSession *(^)(void))getDownloadSessionBlock {
    return ^NSURLSession *{
        return self.downloadSession;
    };
}

-(void) setCurrentApplication:(NSString*)hostname application:(NSString*)application{
    _currentApplication = [OSNativeCache keyForHostname:hostname andApplication:application];
    OSApplicationCache *applicationCache = [_applicationEntries objectForKey:_currentApplication];
    
    //Validate if _currentApplication is valid, because when inserting values inside a NSMutableDictionary the keys must not be nil
    if(!applicationCache && _currentApplication){
        applicationCache = [[OSApplicationCache alloc] initForHostname:hostname
                                                        andApplication:application
                                                      andSessionGetter:[self getDownloadSessionBlock]
                                                             forAppKey:_currentApplication];
        
        [_applicationEntries setValue:applicationCache forKey:_currentApplication];
    }
}


+(NSString*) keyForHostname:(NSString*)hostname andApplication:(NSString*)application{
    
    NSString *appKey = [NSString stringWithFormat:@"%@/%@",hostname,application];
    
    return [NSString stringWithFormat:@"%lu", (unsigned long)[appKey hash]];
}

-(BOOL) interceptRequest:(NSURL*)url{
    
    NSString *urlString = [url path];
    NSRegularExpression *regex = nil;
    NSError *error = nil;
    
    /*
        * Matches any URL containing parameters (eg. /Test?param1=val1)
        *
        * If the URL contains parameters, the cache query string should only contain
        * the element without the parameters (eg. getCacheEntryForUrl("/Test")
        * and not getCacheEntryForUrl("/Test?param1=val1") since the entries in cache do
        * not contain the parameters and url /Test?param1=val1 or /Test?param2=val2
        * should retrieve the same entry.
    */
    regex = [NSRegularExpression regularExpressionWithPattern:@".*\?((.+=.*)(&?))+"
                                                      options:NSRegularExpressionCaseInsensitive error:&error];
    
    if(error) {
        [_logger logError:[NSString stringWithFormat:@"Failed to create a regular expression instance: %@", [error localizedDescription]] withModule:@"OSCache"];
        @throw error;
    }
    
    if([[url query] length] > 0){
        
        NSArray *matchesInString = [regex matchesInString:[url query] options:0 range:NSMakeRange(0, [[url query] length])];
        BOOL containsParameters = [matchesInString count] > 0;
        
        if (containsParameters){
            urlString = [NSString stringWithFormat:@"%@", [url path]];
        } else {
            urlString = [NSString stringWithFormat:@"%@?%@", [url path], [url query]];
        }
    }
    
    if([[url absoluteString] hasSuffix:@"/"]){
        urlString = [NSString stringWithFormat:@"%@/", urlString];
    }
    
    OSCacheEntry *resource = [self getCacheEntry:urlString];
    
    if(resource){
        return YES;
    }
    
    return NO;
    
}

-(void) bootstrapCache:(NSString*)version resourceList:(NSMutableArray*)resources urlMaps:(NSMutableDictionary*)urls urlMapsNoCache:(NSMutableDictionary*)noCache{
    
    if(!_currentApplication){
        [_logger logError:@"Invalid application key" withModule:@"OSCache"];
        return;
    }
    
    OSApplicationCache *applicationCache = [_applicationEntries objectForKey:_currentApplication];
    
    if(!applicationCache){
        [_logger logError:[NSString stringWithFormat:@"Failed to bootstrap application cache: No application cache available for key %@", _currentApplication] withModule:@"OSCache"];
        return;
    }
    
    //Validate if the resource list, url mappings, no cache dictionaries are valid
    if ([resources count] <= 0 || [urls count] <= 0){
        [_logger logError:[NSString stringWithFormat:@"Failed to bootstrap application cache: resource list and url mappings dictionary are not valid"] withModule:@"OSCache"];
        return;
    }
    
    OSCacheResources *prebundleResources = [[OSCacheResources alloc] initForHostname:applicationCache.hostname
                                                                         application:applicationCache.application
                                                                         withVersion:version
                                                                        forPrebundle:YES
                                                                    urlSessionGetter:^NSURLSession *{
                                                                        // Prebundle cache frames do not make any HTTP Requests
                                                                        // so they don't required a valid download session.
                                                                        return nil;
                                                                    }
                                                                   onProgressHandler:nil
                                                                      onErrorHandler:nil
                                                                     onFinishHandler:nil];
    prebundleResources.versionTokenBeforeCreation = [self getRunningVersionToken];
    
    [prebundleResources populateCacheEntriesForResourcePool:[applicationCache getCacheEntries]
                                           prebundleEntries:nil
                                               resourceList:resources
                                                    urlMaps:urls
                                             urlMapsNoCache:noCache];
    
    
    [applicationCache addPreBundleFrame:prebundleResources];
    
    [self changeCacheStatus: OSCacheStatusIdle];
    
}

-(NSString*) getLocalFilePath:(OSCacheEntry*)resource{
    NSString *filePath = nil;
    if([resource preBundled]){
        filePath = [[[NSBundle mainBundle] bundlePath] stringByAppendingPathComponent:[resource fileName]];
    }
    else{
        NSArray *paths = NSSearchPathForDirectoriesInDomains(NSApplicationSupportDirectory, NSUserDomainMask, YES);
        NSString *cacheDirectory = [paths count] > 0 ? [paths objectAtIndex:0] : @"";
        cacheDirectory = [cacheDirectory stringByAppendingPathComponent:OSNativeCacheDirectory];
        
        filePath = [cacheDirectory stringByAppendingPathComponent:[resource fileName]];
    }
    
    return filePath;
}

-(OSCacheEntry*) getCacheEntry:(NSString*)url{
    
    OSApplicationCache *applicationCache = [_applicationEntries objectForKey:_currentApplication];
    
    if(!applicationCache)
        return nil;
    
    return [applicationCache getCacheEntryForURL:url];
}

/**
 * Healing entry resource data model
 * @param url
 *      resource url requested from WebView that is invalid
 */
-(void) healingEntry:(NSString*) url{
    OSApplicationCache *applicationCache = [_applicationEntries objectForKey:_currentApplication];
    
    if(!applicationCache){
        return;
    }
    
    [applicationCache healingCacheEntry:url];
    
    [self serializeCacheHealed];
}

-(void) upgradeCacheIfNeeded{
    if(_cacheUpgrade){
        [_logger logDebug:@"Upgrading cache" withModule:@"OSCache"];
        
        for(NSString *key in [_applicationEntries allKeys]){
            [self createCacheDirectoryForApplication:key];
            
            OSApplicationCache *applicationCache = [_applicationEntries objectForKey:key];
            [applicationCache upgradeIfNeeded];
        }
        
        _cacheUpgrade = NO;
        
        @try {
            [self changeCacheStatus: OSCacheStatusIdle];
            [self writeCacheManifest];
            [_logger logDebug:@"Cache upgraded with success" withModule:@"OSCache"];
        } @catch (NSException *exception) {
            [_logger logError:[NSString stringWithFormat:@"Failed to serialize cache while upgrading cache: %@", [exception reason]] withModule:@"OSCache" withException:exception];
        }
    }
}

-(void) calculateMaxNumberOfRetries:(long)resourceCount {
    if([_maxNumberOfRetries intValue] == kUnsetMaxNumberOfRetries) {
        // Dynamically define the max number of retries that all resources are allowed to perform
        NSNumber * retries = [NSNumber numberWithInt:resourceCount * kDefaultRetriesPercentage];
        _maxNumberOfRetries = [retries intValue] > kDefaultRetriesThreshold ? retries : [NSNumber numberWithInt:kDefaultRetriesThreshold];
    }
}

#pragma mark - Manifest Checksum

-(void) writeCacheManifestHash:(NSString *) filePath {
    // Get file content hash
    NSString *fileContentHash = [OSFileChecksum contentHashOfFile:filePath];
    
    if([fileContentHash length] > 0){
        [_logger logDebug:[NSString stringWithFormat:@"Cache manifest hash : %@", fileContentHash] withModule:@"OSCache"];
        
        NSUserDefaults* userDefaults = [NSUserDefaults standardUserDefaults];
        [userDefaults setObject:fileContentHash forKey:OSCacheManifestPreferenceFileHash];
    }
}

-(NSString*) getRunningVersionToken {
    NSString *runningVersionToken = @"n/a";
    @try{
        OSApplicationCache *a = [_applicationEntries objectForKey:[self currentApplication]];
        NSString *versionToken = [[a getCurrentRunningFrame] versionToken];
        if( versionToken != nil ){
            runningVersionToken = versionToken;
        }
    }
    @catch(NSException *exception){
        [_logger logWarning:@"Unable to retrieve deviceUUID" withModule:@"OSCache"];
    }
    return runningVersionToken;
}

-(BOOL)isCacheManifestFileCorrupted:(NSString*)filePath{
    
    // Get file content hash
    NSString *fileContentHash = [OSFileChecksum contentHashOfFile:filePath];
    
    if (fileContentHash == nil) {
        [_logger logWarning:@"Cache manifest hash is nil, file might be missing" withModule:@"OSCache"];
    }
    
    if ([fileContentHash length] <= 0) {
        [_logger logWarning:@"Hash of file content is empty" withModule:@"OSCache"];
    }
    
    // Read Manifest check sum from user defaults
    NSUserDefaults* userDefaults = [NSUserDefaults standardUserDefaults];
    NSString *checksum = [userDefaults stringForKey:OSCacheManifestPreferenceFileHash];

    if ([checksum length] <= 0) {
        [_logger logWarning:@"Cache manifest file hash in preferences is empty" withModule:@"OSCache"];
    }
    
    // Validate hashes
    if([checksum length] > 0 && [fileContentHash length] > 0 && ![checksum isEqualToString:fileContentHash]){
        return YES;
    }
    
    return NO;
}

#pragma mark - Tests

+ (void)resetSharedInstance {
    @synchronized(self) {
        sharedInstance = nil;
    }
}

@end

