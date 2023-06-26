#import "OSCacheResources.h"
#import "OSNativeCache.h"
#import "OSMimeTypesHelper.h"
#import "OSLogger.h"
#import "OSFileChecksum.h"
#import "OSDownloadOperation.h"

NSString * const kOSCacheResourcesHostname = @"hostname";
NSString * const kOSCacheResourcesApplication = @"application";
NSString * const kOSCacheResourcesVersionToken = @"versionToken";
NSString * const kOSCacheResourcesStatus = @"status";
NSString * const kOSCacheResourcesPreBundle = @"preBundle";
NSString * const kOSCacheResourcesFrameToDelete = @"frameToDelete";

NSString * const kOSCacheResourcesResourcesObject = @"resources";
NSString * const kOSCacheResourcesUrlMappingsObject = @"urlMappings";
NSString * const kOSCacheResourcesUrlMappingsNoCacheObject = @"urlMappingsNoCache";

NSString * const kOSCacheResourcesDefaultEncoding = @"UTF-8";

NSString * const kOSCacheResourcesVersionTokenBeforeCreation = @"versionTokenBeforeCreation";
NSString * const kOSCacheResourcesVersionTokenBeforeDownloading = @"versionTokenBeforeDownloading";
static NSString * const kOSCacheResourcesInvalidResourceException = @"InvalidResourceException";

typedef void (^DownloadResourceBlock)(NSURL * _Nullable location, NSURLResponse * _Nullable response, NSError * _Nullable error);

@interface OSCacheResources()

// Maximum number of retries when an error occurs downloading a resource
@property (nonatomic,strong) NSNumber *numberOfRetries;
@property (nonatomic,strong) NSNumber *initialResourcesCount;
@property (nonatomic,strong) NSNumber *processedResourcesCount;
@property (nonatomic,strong) NSNumber *totalResourcesCount;

@property (nonatomic,strong) DownloadProgressBlock progressBlock;
@property (nonatomic,strong) DownloadErrorBlock errorBlock;
@property (nonatomic,strong) DownloadFinishBlock finishBlock;
@property (nonatomic, readonly, strong) NSURLSession *downloadSession;
@property (nonatomic, readonly, strong) id <OSLoggerProtocol> logger;
@property (nonatomic,copy) DownloadSession downloadSessionGetter;
@property BOOL allResourcesDownloaded;

@property (nonatomic, strong) NSOperationQueue *downloadQueue;

@end

@implementation OSCacheResources

@synthesize status = _status;
@synthesize cacheEntries = _cacheEntries;

static NSCharacterSet *nonWhitespaceCharacterSet;

/**
 NSURLSession getter that delegates to
 the downloadSessionGetter function that attempts
 to retrieve an instance os NSURLSession defined
 on the DownloadSession block implementation provided
 by OSNativeCache upon initializing OSCacheResources instance
 */
-(NSURLSession*) downloadSession {
    if(_downloadSessionGetter) {
        return self.downloadSessionGetter();
    }
    return nil;
}

+(void)initialize {
    if (self == [OSCacheResources self]) {
        nonWhitespaceCharacterSet = [[NSCharacterSet whitespaceCharacterSet] invertedSet];
    }
}

-(id)init{
    if(self = [super init]){
        _logger = [OSLogger sharedInstance];
        _cacheEntries = [[NSMutableDictionary alloc] init];
        _numberOfRetries = [NSNumber numberWithInt:0];
        _initialResourcesCount = [NSNumber numberWithInt:0];
        _processedResourcesCount = [NSNumber numberWithInt:0];
        _totalResourcesCount = [NSNumber numberWithInt:0];
        _status = OSCacheResourcesStatusEmpty;
        _allResourcesDownloaded = NO;
        _downloadQueue = [[NSOperationQueue alloc] init];
        _downloadQueue.maxConcurrentOperationCount = 1;
        _versionTokenBeforeDownloading = @"n/a";
        _versionTokenBeforeCreation = @"n/a";
    }
    
    return self;
}

-(id)initForHostname:(NSString*) hostname
         application:(NSString*) application
         withVersion:(NSString*) version
        forPrebundle:(BOOL) preBundle
    urlSessionGetter:(_Nonnull DownloadSession) session
   onProgressHandler:(DownloadProgressBlock) onProgressBlock
      onErrorHandler:(DownloadErrorBlock) onErrorBlock
     onFinishHandler:(DownloadFinishBlock) onFinishBlock {
    
    if(self = [self init]){
        _hostname = hostname;
        _application = application;
        _versionToken = version;
        _preBundle = preBundle;
        _progressBlock = onProgressBlock;
        _errorBlock = onErrorBlock;
        _finishBlock = onFinishBlock;
        _downloadSessionGetter = session;
        _versionTokenBeforeDownloading = @"n/a";
        _versionTokenBeforeCreation = @"n/a";
        
        [self initDownloadQueueForVersion:version];
    }
    
    return self;
}

-(id)initForHostname:(NSString*) hostname
         application:(NSString*) application
         withVersion:(NSString*) version
        forPrebundle:(BOOL) preBundle
              status:(NSNumber*) status
    urlSessionGetter:(_Nonnull DownloadSession) session {
    
    if(self = [self init]){
        _hostname = hostname;
        _application = application;
        _versionToken = version;
        _preBundle = preBundle;
        _status = [status integerValue];
        _downloadSessionGetter = session;
        
        [self initDownloadQueueForVersion:version];
    }
    
    return self;
}

-(id)initWithDictionary:(NSDictionary*)dictionary
       urlSessionGetter:(_Nonnull DownloadSession)session {
    if(self = [self init]){
        
        NSString *hostname = [dictionary objectForKey:kOSCacheResourcesHostname];
        
        if(hostname)
            _hostname = hostname;
        
        NSString *application = [dictionary objectForKey:kOSCacheResourcesApplication];
        
        if(application)
            _application = application;
        
        
        NSString *versionToken = [dictionary objectForKey:kOSCacheResourcesVersionToken];
        
        if(versionToken)
            _versionToken = versionToken;
        
        
        NSNumber *preBundle = [dictionary objectForKey:kOSCacheResourcesPreBundle];
        
        if(preBundle)
            _preBundle = [preBundle boolValue];
        
        
        NSNumber *status = [dictionary objectForKey:kOSCacheResourcesStatus];
        
        if(status)
            _status = [status integerValue];
        
        NSNumber *frameToDelete = [dictionary objectForKey:kOSCacheResourcesFrameToDelete];
        
        if(frameToDelete)
            _frameToDelete = [frameToDelete boolValue];
        
        NSString *versionTokenBeforeDownloading = [dictionary objectForKey:kOSCacheResourcesVersionTokenBeforeDownloading];
        _versionTokenBeforeDownloading = @"n/a";
        
        if(versionTokenBeforeDownloading)
            _versionTokenBeforeDownloading = versionTokenBeforeDownloading;
        
        NSString *versionTokenBeforeCreation = [dictionary objectForKey:kOSCacheResourcesVersionTokenBeforeCreation];
        _versionTokenBeforeCreation = @"n/a";
        
        if(versionTokenBeforeCreation)
            _versionTokenBeforeCreation = versionTokenBeforeCreation;
        
        _downloadSessionGetter = session;
        [self initDownloadQueueForVersion:_versionToken];
    }
    
    return self;
}

-(void) initDownloadQueueForVersion:( NSString* _Nonnull ) version {
    [_downloadQueue setName:[NSString stringWithFormat:@"%@-%@",[[NSUUID UUID] UUIDString],version]];
    if([self downloadSession]){
        if( [self downloadSession].configuration.HTTPMaximumConnectionsPerHost > 1){
            _downloadQueue.maxConcurrentOperationCount = [self downloadSession].configuration.HTTPMaximumConnectionsPerHost;
        }
    }
}

-(void) populateCacheEntriesForResourcePool:(NSMutableDictionary*) resourcePool
                           prebundleEntries:(NSMutableDictionary*) preBundleEntries
                               resourceList:(NSMutableArray*) resources
                                    urlMaps:(NSMutableDictionary*) urls
                             urlMapsNoCache:(NSMutableDictionary*) noCache{
    
    if(resources){
        _totalResourcesCount = [NSNumber numberWithLong:resources.count];
        
        for(NSString *url in resources){
            
            //Validation to prevent duplicate resources
            if([_cacheEntries objectForKey:url]){
                continue;
            }
            
            OSCacheEntry *previousResourceEntry = [resourcePool objectForKey:url];
            
            if(previousResourceEntry){
                [self addResource:previousResourceEntry withUrl:url];
                _initialResourcesCount = [NSNumber numberWithLong:[_initialResourcesCount intValue] + 1];
            }
            else{
                
                NSString *fileName = [self getFileNameForURL:url forPrebundle:_preBundle];
                
                NSURL *nsURL = [NSURL URLWithString:url];
                NSString *mimeType = [[OSMimeTypesHelper sharedInstance] getMimeTypeForExtension:[nsURL pathExtension]];
                
                OSCacheEntry *resourceEntry = [[OSCacheEntry alloc] initForUrl:url withFileName:fileName asPreBundled:_preBundle];
                
                [resourceEntry setMimeType:mimeType];
                [resourceEntry setEncoding:kOSCacheResourcesDefaultEncoding];
                
                OSCacheEntry *preBundleResourceEntry = [preBundleEntries objectForKey:url];
                if(preBundleResourceEntry){
                    [resourceEntry setPreBundled:YES];
                    [resourceEntry setMimeType:preBundleResourceEntry.mimeType];
                    [resourceEntry setEncoding:preBundleResourceEntry.encoding];
                    [resourceEntry setFileName:preBundleResourceEntry.fileName];
                }
                
                [self addResource:resourceEntry withUrl:url];
            }
        }
    }
    
    if(urls){
        for(NSString *key in urls){
            NSString *value = [urls objectForKey:key];
            
            NSString *fileName = [self getFileNameForURL:value forPrebundle:_preBundle];
            OSCacheEntry *resourceMapping = [[OSCacheEntry alloc] initForUrl:value withFileName:fileName asPreBundled:_preBundle];
            [resourceMapping setResourceMapping:YES];
            [resourceMapping setNoCache:NO];
            
            OSCacheEntry *previousMappedResourceEntry = [resourcePool objectForKey:value];
            
            if(previousMappedResourceEntry){
                resourceMapping.fileName = previousMappedResourceEntry.fileName;
                resourceMapping.preBundled = previousMappedResourceEntry.preBundled;
                resourceMapping.mimeType = previousMappedResourceEntry.mimeType;
                resourceMapping.encoding = previousMappedResourceEntry.encoding;
                resourceMapping.status = previousMappedResourceEntry.status;
                resourceMapping.cacheVersions = previousMappedResourceEntry.cacheVersions;
            }
            else{
                OSCacheEntry *currentVersionMappingEntry = [self getResourceForUrl:value];
                if(currentVersionMappingEntry){
                    resourceMapping.fileName = currentVersionMappingEntry.fileName;
                    resourceMapping.preBundled = currentVersionMappingEntry.preBundled;
                    resourceMapping.mimeType = currentVersionMappingEntry.mimeType;
                    resourceMapping.encoding = currentVersionMappingEntry.encoding;
                    resourceMapping.status = currentVersionMappingEntry.status;
                    resourceMapping.cacheVersions = currentVersionMappingEntry.cacheVersions;
                }
                else{
                    [_logger logDebug:@"Manifest inconsistency: URL for mapping was not found" withModule:@"OSCache"];
                }
            }
            
            [self addResource:resourceMapping withUrl:key];
        }
    }
    
    if(noCache){
        for(NSString *key in noCache){
            NSString *value = [noCache objectForKey:key];
            
            NSString *fileName = [self getFileNameForURL:value forPrebundle:_preBundle];
            OSCacheEntry *noCacheResource = [[OSCacheEntry alloc] initForUrl:value withFileName:fileName asPreBundled:_preBundle];
            [noCacheResource setResourceMapping:YES];
            [noCacheResource setNoCache:YES];
            
            OSCacheEntry *previousVersion = [resourcePool objectForKey:value];
            
            if(previousVersion){
                noCacheResource.fileName = previousVersion.fileName;
                noCacheResource.preBundled = previousVersion.preBundled;
                noCacheResource.mimeType = previousVersion.mimeType;
                noCacheResource.encoding = previousVersion.encoding;
                noCacheResource.status = previousVersion.status;
                noCacheResource.cacheVersions = previousVersion.cacheVersions;
            }
            else{
                OSCacheEntry *currentVersion = [self getResourceForUrl:value];
                if(currentVersion){
                    noCacheResource.fileName = currentVersion.fileName;
                    noCacheResource.preBundled = currentVersion.preBundled;
                    noCacheResource.mimeType = currentVersion.mimeType;
                    noCacheResource.encoding = currentVersion.encoding;
                    noCacheResource.status = currentVersion.status;
                    noCacheResource.cacheVersions = currentVersion.cacheVersions;
                }
                else{
                    [_logger logDebug:@"Manifest inconsistency: URL for mapping no cache was not found" withModule:@"OSCache"];
                }
            }
            
            [self addResource:noCacheResource withUrl:key];
        }
    }
}

-(NSMutableDictionary*) jsonDictionary{
    NSMutableDictionary *result = [[NSMutableDictionary alloc] init];
    
    if(_application)
        [result setValue:_application forKey:kOSCacheResourcesApplication];
    
    if(_hostname)
        [result setValue:_hostname forKey:kOSCacheResourcesHostname];
    
    if(_versionToken)
        [result setValue:_versionToken forKey:kOSCacheResourcesVersionToken];
    
    if(_status)
        [result setValue:[NSNumber numberWithInteger:_status] forKey:kOSCacheResourcesStatus];
    
    if(_preBundle)
        [result setValue:[NSNumber numberWithBool:_preBundle ] forKey:kOSCacheResourcesPreBundle];
    
    if(_frameToDelete)
        [result setValue:[NSNumber numberWithBool:_frameToDelete] forKey:kOSCacheResourcesFrameToDelete];
    
    NSMutableDictionary *frameEntries = _cacheEntries;
    
    NSMutableDictionary *urlMappings = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *urlMappingsNoCache = [[NSMutableDictionary alloc] init];
    NSMutableArray *resources = [[NSMutableArray alloc] init];
    
    for(NSString *key in frameEntries){
        OSCacheEntry *cacheEntry = [frameEntries objectForKey:key];
        NSString *url = [cacheEntry url];
        
        if([cacheEntry resourceMapping]) {
            if([cacheEntry noCache]) {
                [urlMappingsNoCache setObject:url forKey:key];
            } else {
                [urlMappings setObject:url forKey:key];
            }
        } else if(url) {
            [resources addObject:url];
        }
    }
    
    [result setValue:urlMappings forKey:kOSCacheResourcesUrlMappingsObject];
    [result setValue:urlMappingsNoCache forKey:kOSCacheResourcesUrlMappingsNoCacheObject];
    [result setValue:resources forKey:kOSCacheResourcesResourcesObject];
    
    return result;
}


-(void) setOnProgressHandler:(DownloadProgressBlock) onProgressBlock
               onErrorHandler:(DownloadErrorBlock) onErrorBlock
              onFinishHandler:(DownloadFinishBlock) onFinishBlock {
    _progressBlock = onProgressBlock;
    _errorBlock = onErrorBlock;
    _finishBlock = onFinishBlock;
}

# pragma mark - Download Progress

-(void) updateProgress:(OSCacheEntryStatus) status {
    
    if(status == OSCacheEntryStatusDownloading) {
        // Exit early if resource is still downloading
        return;
    }
    
    @synchronized (_processedResourcesCount) {
        
        if(status == OSCacheEntryStatusFetched || status == OSCacheEntryStatusFailed){
            _processedResourcesCount =  [NSNumber numberWithInt:[_processedResourcesCount intValue] + 1];
        }
        
        if(_progressBlock){
            _progressBlock(_initialResourcesCount, _processedResourcesCount, _totalResourcesCount);
        }
        
        _allResourcesDownloaded = _allResourcesDownloaded && status == OSCacheEntryStatusFetched;
        
        if([_totalResourcesCount intValue] == [_processedResourcesCount intValue]){
            _status =  _allResourcesDownloaded ? OSCacheResourcesStatusFetched : OSCacheResourcesStatusFailed;
            
            if(_finishBlock){
                _finishBlock(_allResourcesDownloaded);
            }
        }
    }
}

# pragma mark - Resource Management

-(void)addResource:(OSCacheEntry*) cacheEntry withUrl:(NSString*)url{
    @synchronized (_cacheEntries) {
        if(url && [url length] > 0) {
            [_cacheEntries setObject:cacheEntry forKey:url];
        } else {
            [_logger logDebug:[NSString stringWithFormat:@"Failed to add entry %@ to cache entries dictionary in the frame", [cacheEntry url]] withModule:@"OSCache"];
        }
    }
}

-(OSCacheEntry*) getResourceForUrl:(NSString*) url{
    return [_cacheEntries objectForKey:url];
}

-(void) updateResource:(OSCacheEntry*) resource withStatus:(OSCacheEntryStatus)status {
    
    [resource addCacheVersion:_versionToken];
    [resource setStatus:status];
    
    //Check if the file is on disk
    if(status == OSCacheEntryStatusFetched) {
        
        if(![self checkResourceExitsAtCache:resource])
            status = OSCacheEntryStatusFailed;
    }
    
    [self updateProgress:status];
}

-(BOOL) checkResourceExitsAtCache:(OSCacheEntry*) resource {
    OSNativeCache *nativeCache = [OSNativeCache sharedInstance];
    NSString *cacheFilePath = [nativeCache getLocalFilePath:resource];
    
    NSFileManager *fileManager = [NSFileManager defaultManager];
    
    return [fileManager fileExistsAtPath:cacheFilePath];
}

# pragma mark - Download Resources

-(void) startDownload {
    [_logger logDebug:[NSString stringWithFormat:@"Downloading resources for the cache version: %@", _versionToken] withModule:@"OSCache"];
    
    _status = OSCacheResourcesStatusDownloading;
    
    // Reset number of retries, number of processed resources and global download status
    _numberOfRetries = [NSNumber numberWithInt:0];
    
    _processedResourcesCount = [NSNumber numberWithInt:0];
    _allResourcesDownloaded = YES;
    
    NSArray *entriesKeys = [_cacheEntries allKeys];
    for(NSString *key in entriesKeys) {
        OSCacheEntry *cacheEntry = [_cacheEntries objectForKey:key];
        
        //If mapping, skip the download or the copy. Only resources will be downloaded.
        if(cacheEntry.resourceMapping){
            continue;
        }
        
        switch (cacheEntry.status) {
            case OSCacheEntryStatusDownloading:
                [self updateResource:cacheEntry withStatus:cacheEntry.status];
                break;
                
            case OSCacheEntryStatusFetched:
                [self updateResource:cacheEntry withStatus:cacheEntry.status];
                [_logger logDebug:[NSString stringWithFormat:@"Resource already fetched: %@", [cacheEntry url]] withModule:@"OSCache"];
                break;
                
            default:
                if(cacheEntry.preBundled){
                    [self copyPreBundleResource:cacheEntry];
                }
                else{
                    [self downloadResourceAsync:cacheEntry];
                }
                break;
        }
        
    }
    
}

-(NSString*)getFileNameForURL:(NSString*)url forPrebundle:(BOOL)preBundle{
    NSString *fileName = nil;
    if(preBundle){
        
        NSString *urlPath = [url containsString:@"?"] ?
            [url componentsSeparatedByString:@"?"][0] :
            url;
        
        // Replace OutSystems module name in resource URL by the native folder www/
        // * The URL section with the module name must start and end with a slash  { (^\/ ... \/) }
        // * An OutSystems module name is a sequence of 1 or more characters  { [ ... ]+ }
        // * With digits, letters from "a" to "z" and special characters { [\da-zA-Z\-_] }
        // Example: /MyAppModule/fonts/myFont.ttf -> www/fonts/myFont.ttf
        NSError *error = nil;
        NSRegularExpression *regex = [NSRegularExpression regularExpressionWithPattern:@"(^\\/([\\da-zA-Z\\-_]+)\\/)"
                                                                               options:NSRegularExpressionCaseInsensitive
                                                                                 error:&error];
        
        if(error) {
            [_logger logError:[NSString stringWithFormat:@"Failed to create a regular expression instance: %@", [error localizedDescription]] withModule:@"OSCache"];
            return fileName;
        }
        
        fileName = [regex stringByReplacingMatchesInString:urlPath options:0 range:NSMakeRange(0, [urlPath length]) withTemplate:@"/www/"];
        
    }
    else{
        NSString *appKey = [OSNativeCache keyForHostname:self.hostname andApplication:self.application];
        fileName = [appKey stringByAppendingPathComponent:[NSString stringWithFormat:@"%lu", (unsigned long)[url hash]]];
    }
    
    return fileName;
}

-(void) copyPreBundleResource:(OSCacheEntry*)resource{
    @try{
        [self updateResource:resource withStatus:OSCacheEntryStatusDownloading];
        
        OSNativeCache *nativeCache = [OSNativeCache sharedInstance];

        NSString *originalFilename = resource.fileName;
        BOOL originalPreBundled = resource.preBundled;
        
        // (jog) We're assuming that resource is marked with preBundle = YES, what happens
        // if isn't? Should we still try to copy a resource from the cache directory?
        // If so, it will remove the file first and then attempt to copy a non-existent file...
        
        // Make a copy of object to avoid that SO release the object inside of getLocalFilePath and invalid the preBundleFilePath
        NSString *preBundleFilePath = [[nativeCache getLocalFilePath:resource] copy];
        
        NSString *cacheFileName = [self getFileNameForURL:resource.url forPrebundle:NO];
        [resource setFileName:cacheFileName];
        [resource setPreBundled:NO];
        
        NSString *cacheFilePath = [[nativeCache getLocalFilePath:resource] copy];
        
        NSFileManager *fileManager = [NSFileManager defaultManager];
        NSError *fileManagerError;
        
        [fileManager removeItemAtPath:cacheFilePath error:&fileManagerError];
        
        if(fileManagerError){
            
            [_logger logDebug:[NSString stringWithFormat:@"Failed to remove existing resource %@: %@", [resource url], [fileManagerError description]] withModule:@"OSCache"];
            fileManagerError = nil;
        }
        
        // Attempt to copy. If it fails, it's either because
        // we don't have permissions or because the file already exists
        // because it was concurrently created and in that case, we have bigger problems
        [fileManager copyItemAtPath:preBundleFilePath toPath:cacheFilePath error:&fileManagerError];
        
        if(fileManagerError){
            [_logger logError:[NSString stringWithFormat:@"Could not copy resource %@ from prebundle with error: %@",[resource url], [fileManagerError description]] withModule:@"OSCache"];
            
            // If it failed to copy the file, restore it to the original values
            [resource setFileName: originalFilename];
            [resource setPreBundled: originalPreBundled];
            
            [self updateResource:resource withStatus:OSCacheEntryStatusUncached];
        }
        else{
            [_logger logDebug:[NSString stringWithFormat:@"Copied prebundled resource %@ to %@", [resource url], cacheFilePath] withModule:@"OSCache"];
            [self updateResource:resource withStatus:OSCacheEntryStatusFetched];
        }
        
    }
    @catch (NSException *exception) {
        [_logger logError:[NSString stringWithFormat:@"Could not copy resource %@ from prebundle with error: %@",[resource url], [exception reason]] withModule:@"OSCache" withException:exception];
        [self abortDownload: [NSString stringWithFormat:@"Could not copy resource %@ from prebundle with error: %@",[resource url], [exception reason]]];
    }
}

-(BOOL) fileExistsAtPreBundled:(OSCacheEntry *) resource{
    
    OSNativeCache *nativeCache = [OSNativeCache sharedInstance];
    
    NSString *preBundleFilePath = [nativeCache getLocalFilePath:resource];
    
    NSFileManager *fileManager = [NSFileManager defaultManager];
    
    return [fileManager fileExistsAtPath:preBundleFilePath];
}

-(BOOL) fileExistsAtCacheDirectory:(OSCacheEntry *)resource{
    BOOL result = NO;
    
    if(!resource.preBundled){
        OSNativeCache *nativeCache = [OSNativeCache sharedInstance];
        
        NSString *filePath = [nativeCache getLocalFilePath:resource];
        
        NSFileManager *fileManager = [NSFileManager defaultManager];
        
        if([fileManager fileExistsAtPath:filePath]){
            NSError *error;
            NSDictionary *fileAttributes = [fileManager attributesOfItemAtPath:filePath error:&error];
            
            result = !error && [fileAttributes fileSize] > 0;
        } else {
            [_logger logDebug:[NSString stringWithFormat:@"Failed to locate file %@", [resource url]] withModule:@"OSCache"];
        }
    }
    
    return result;
}

-(void) incrementNumberOfRetries{
    @synchronized (_numberOfRetries) {
        _numberOfRetries =  [NSNumber numberWithInt:[_numberOfRetries intValue] + 1];
    }
}

-(NSNumber*) numberOfRetries{
    @synchronized (self) {
        return _numberOfRetries;
    }
}

+(void) processContentType:(NSString*)contentType forResource:(OSCacheEntry*)resource {
    if(contentType) {
        NSArray* contentTypeList = [[contentType lowercaseString] componentsSeparatedByString:@";"];
        
        if([contentTypeList count] > 0) {
            resource.mimeType = contentTypeList[0];
            
            for(int i=1; i < contentTypeList.count; i++) {
                if([contentTypeList[i] rangeOfString:@"charset="].location != NSNotFound) {
                    NSString* encodingTrim = [contentTypeList[i] stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceCharacterSet]];
                    resource.encoding = [encodingTrim componentsSeparatedByString:@"="][1];
                    break;
                }
            }
        }
    } else {
        [[OSLogger sharedInstance] logDebug:[NSString stringWithFormat:@"Unable to process content type: %@", contentType] withModule:@"OSCache"];
    }
}

-(void) downloadResourceAsync:(OSCacheEntry*)resource{
    @try{
        
        [self updateResource:resource withStatus:OSCacheEntryStatusDownloading];
        
        NSString *encodedUrl = [resource.url stringByAddingPercentEncodingWithAllowedCharacters:nonWhitespaceCharacterSet];
        NSString *resourceUrl = [NSString stringWithFormat:@"https://%@%@", _hostname, encodedUrl];
        NSURL *url = [NSURL URLWithString:resourceUrl];
        
        NSFileManager *fileManager = [NSFileManager defaultManager];
        
        DownloadResourceBlock downloadBlock = ^(NSURL *location, NSURLResponse *response, NSError *error) {
            NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;
            if (error || httpResponse.statusCode != 200){
                
                if(error.code != NSURLErrorCancelled){
                    [self resourceDownloadFailed:resource withError:[error localizedDescription]];
                }
                else{
                    [self.logger logDebug:[NSString stringWithFormat:@"Canceled download for resource %@", [resource url]] withModule:@"OSCache"];
                    [resource setStatus:OSCacheEntryStatusUncached];
                }
                
            }
            else{
                NSDictionary *headers = [(NSHTTPURLResponse *)response allHeaderFields];
                [OSCacheResources processContentType:[headers objectForKey:@"Content-Type"] forResource:resource];
                
                OSNativeCache *cacheEngine = [OSNativeCache sharedInstance];
                
                NSString *filePath = [cacheEngine getLocalFilePath:resource];
                
                NSError *fileManagerError;
                if ([fileManager fileExistsAtPath:filePath]) {
                    [fileManager removeItemAtPath:filePath error:&fileManagerError];
                }
                
                if(fileManagerError){
                    // In iOS the downloadTask, unless the connection fails, it always download the resource to a temporary destination. We just need to move it to the right place.
                    // However, if a file with the same name already exists at the destination, the move operation will stop with an error.
                    [self.logger logError:[NSString stringWithFormat:@"Failed to remove resource %@: %@", [resource url], [fileManagerError description]] withModule:@"OSCache"];
                    [self resourceDownloadFailed:resource withError:[fileManagerError description]];
                }
                else{
                    [fileManager moveItemAtURL:location toURL:[NSURL fileURLWithPath:filePath] error:&fileManagerError];
                    
                    if(fileManagerError){
                        [self.logger logError:[NSString stringWithFormat:@"Failed to store downloaded resource %@: %@", [resource url], [fileManagerError description]] withModule:@"OSCache"];
                        [self resourceDownloadFailed:resource withError:[fileManagerError description]];
                    }
                    else{
                        @try {
                            [OSCacheResources validateDownloadedResource:resource withFilePath:filePath];
                            [self.logger logDebug:[NSString stringWithFormat:@"Downloaded resource %@",[resource url]] withModule:@"OSCache"];
                            [self updateResource:resource withStatus:OSCacheEntryStatusFetched];
                        }
                        @catch (NSException *exception) {
                            [self.logger logError:[NSString stringWithFormat:@"Failed to store downloaded resource %@: %@", [resource url], [exception reason]] withModule:@"OSCache"];
                            [self resourceDownloadFailed:resource withError:[exception reason]];
                        }
                        
                    }
                }
                
            }
        };
        NSMutableDictionary *headers = [NSMutableDictionary new];

        [headers setValue:[self getVersionTokensAsString] forKey:@"x-version-tokens"];
        
        OSDownloadOperation *downloadOperation = [[OSDownloadOperation alloc] initWithSession:self.downloadSession url:url headers:headers completionHandler:downloadBlock];
        [self.downloadQueue addOperation:downloadOperation];
    }
    @catch (NSException *exception) {
        [_logger logError:[NSString stringWithFormat:@"Failed to download resource %@: %@", [resource url], [exception reason]] withModule:@"OSCache" withException:exception];
        [self updateResource:resource withStatus:OSCacheEntryStatusFailed];
        [self abortDownload: [NSString stringWithFormat:@"Failed to download resource %@: %@", [resource url], [exception reason]]];
    }
}

-(void) resourceDownloadFailed:(OSCacheEntry*)resource withError:(NSString*)errorMessage{
    NSString *prettyErrorMessage = [NSString stringWithFormat:@"Failed to download resource %@ with error: %@", [resource url], errorMessage];
    [_logger logDebug:prettyErrorMessage withModule:@"OSCache"];
    
    // Retry download when an error occurs downloading a resource
    if ([self.numberOfRetries intValue] > [_maxNumberOfRetries intValue]) {
        [self abortDownload:prettyErrorMessage];
        
        [self updateResource:resource withStatus:OSCacheEntryStatusFailed];
    } else {
        [_logger logDebug:[NSString stringWithFormat:@"Retrying resource %@",[resource url]] withModule:@"OSCache"];
        
        [self incrementNumberOfRetries];
        [self downloadResourceAsync:resource];
    }
}

-(void) abortDownload:(NSString*)errorMessage{
    @synchronized (self) {
        if(_status != OSCacheResourcesStatusFailed && _status != OSCacheResourcesStatusFetched){
            NSString *prettyErrorMessage = [NSString stringWithFormat:@"Aborting resources download. %@", errorMessage];
            [_logger logWarning:prettyErrorMessage withModule:@"OSCache"];
            
            _status = OSCacheResourcesStatusFailed;

            [self cancelDownload];

            if(_errorBlock)
                _errorBlock(prettyErrorMessage);
            
            if(_finishBlock)
                _finishBlock(NO);
        }
    }
}

-(void) cancelDownload{
    [self.downloadQueue cancelAllOperations];
}

+(void)downloadResourceSync:(OSCacheEntry*)resource forRequest:(NSURLRequest*)request andURLSession:(NSURLSession*)downloadSession completionHandler:(DownloadFinishBlock) completionHandler {
    [resource setStatus:OSCacheEntryStatusDownloading];

    NSURLSessionTask *downloadTask = [downloadSession downloadTaskWithRequest:request
                                                            completionHandler:^(NSURL *location, NSURLResponse *response, NSError *error) {
        BOOL success = NO;
        NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;
        if (error || httpResponse.statusCode != 200){
            [[OSLogger sharedInstance] logError:[NSString stringWithFormat:@"Failed to download resource %@: %@",[resource url], [error description]] withModule:@"OSCache"];
            [resource setStatus:OSCacheEntryStatusFailed];
        } else {
            NSDictionary *headers = [(NSHTTPURLResponse *)response allHeaderFields];
            [OSCacheResources processContentType:[headers objectForKey:@"Content-Type"] forResource:resource];
            
            OSNativeCache *cacheEngine = [OSNativeCache sharedInstance];
            
            NSString *filePath = [cacheEngine getLocalFilePath:resource];
            
            NSError *fileManagerError;
            NSFileManager *fileManager   = [NSFileManager defaultManager];
            if ([fileManager fileExistsAtPath:filePath]) {
                [fileManager removeItemAtPath:filePath error:&fileManagerError];
            }
            
            if (fileManagerError) {
                [[OSLogger sharedInstance] logError:[NSString stringWithFormat:@"Failed to remove resource %@: %@", [resource url], [fileManagerError description]] withModule:@"OSCache"];
                [resource setStatus:OSCacheEntryStatusUncached];
            }
            
            [fileManager moveItemAtURL:location toURL:[NSURL fileURLWithPath:filePath] error:&fileManagerError];
            
            if (fileManagerError) {
                [[OSLogger sharedInstance] logError:[NSString stringWithFormat:@"Failed to store downloaded resource %@: %@", [resource url], [fileManagerError description]] withModule:@"OSCache"];
                [resource setStatus:OSCacheEntryStatusUncached];
            } else {
                @try {
                    [OSCacheResources validateDownloadedResource:resource withFilePath:filePath];
                    [[OSLogger sharedInstance] logDebug:[NSString stringWithFormat:@"Downloaded resource %@", [resource url]] withModule:@"OSCache"];
                    [resource setStatus:OSCacheEntryStatusFetched];
                    success = YES;
                }
                @catch (NSException *exception) {
                    [[OSLogger sharedInstance] logError:[NSString stringWithFormat:@"Failed to store downloaded resource %@: %@", [resource url], [exception reason]] withModule:@"OSCache"];
                    [resource setStatus:OSCacheEntryStatusUncached];
                }
            }
        }
        return completionHandler(success);
    }];
    [downloadTask resume];
}

# pragma mark - Validations

+(void) validateDownloadedResource:(OSCacheEntry *) resource withFilePath:(NSString *)filePath {
    
    // Verify if resource file exists and is not empty
    NSFileManager *fileManager = [NSFileManager defaultManager];
    
    if([fileManager fileExistsAtPath:filePath]){
        NSError *error;
        NSDictionary *fileAttributes = [fileManager attributesOfItemAtPath:filePath error:&error];
        
        BOOL validResource = !error && [fileAttributes fileSize] > 0;
        if(!validResource){
            @throw ([NSException exceptionWithName:kOSCacheResourcesInvalidResourceException reason:@"File not found or is empty" userInfo:nil]);
        }
    } else {
        @throw ([NSException exceptionWithName:kOSCacheResourcesInvalidResourceException reason:@"Unable to validate downloaded file" userInfo:nil]);
    }
    
    // Verify the integrity of the resource file
    if ([self isResourceFileCorrupted:resource filePath:filePath]){
        @throw ([NSException exceptionWithName:kOSCacheResourcesInvalidResourceException reason:@"File is corrupt or invalid" userInfo:nil]);
    }
    
}

/**
 * Informs if a cache entry is suitable to perform the
 * validation based on a versionToken.
 *
 * versionToken is a value inside the following files:
 * moduleinfo, index.html and manifest.json
 * It is used as an alternative validation to checksum (if checksum fails)
 *
 * @param url CacheEntry url
 * @return true if CacheEntry url matches any of the possible files with version token
 */
+(BOOL)canFileBeVerifiedByVersionToken:(NSString*)url {
    /**
    * App names may contain unpredictable characters and for that reason the patterns used
    * are not strict
    */
    long urlLength = [url length];
    if( url == nil || urlLength == 0) {
        return NO;
    }

    // check if cache item is moduleservices/moduleinfo
    // Expected item url: /<app-name>/moduleservices/moduleinfo?<hash>
    NSRange moduleInfoRange = [url rangeOfString:@"^/.+/moduleservices/moduleinfo\\?.+" options:NSRegularExpressionSearch];
    if (moduleInfoRange.location != NSNotFound){
        return YES;
    }

    // check if cache item is index.html
    // Expected item url: /<app-name>/index.html?<hash>
    NSRange indexRange = [url rangeOfString:@"^/.+/index\\.html\\?.+" options:NSRegularExpressionSearch];
    if (indexRange.location != NSNotFound){
        return YES;
    }

    // check if cache item is manifest.json
    // Expected item url: /<app-name>/manifest.json?<hash>
    NSRange manifestRange = [url rangeOfString:@"^/.+/manifest\\.json\\?.+" options:NSRegularExpressionSearch];
    if (manifestRange.location != NSNotFound){
        return YES;
    }

    return NO;
}

+(BOOL)isResourceFileCorrupted:(OSCacheEntry*)resource filePath:(NSString*)filePath{
    
    // Get checksum hash from the resource URL
    NSRange hashRange = [[resource url] rangeOfString:@"?"];
    
    if(hashRange.location != NSNotFound){
        NSString *checksum = [[resource url] substringFromIndex:hashRange.location+1];
        
        // Get file content hash
        NSString *fileContentHash = [OSFileChecksum contentHashOfFile:filePath];
        
        // Validate hashes
        if ([checksum length] > 0 && [fileContentHash length] > 0 && ![checksum isEqualToString:fileContentHash]) {
            
            // As a fallback for all platform html and json files we must validate their content too, since they have the version token inside
            if (![[self class] canFileBeVerifiedByVersionToken:[resource url]] || ![self resourceContent:filePath containsVersionToken:checksum]) {
                [[OSLogger sharedInstance] logError:[NSString stringWithFormat:@"Checksum failed for file %@. Received hash: %@ | Calculated hash: %@", [resource url], checksum, fileContentHash] withModule:@"OSCache"];
                return YES;
            }
        }
    }
    
    return NO;
}

/**
* Returns history version tokens from CacheResources in a single string
*/
-(NSString*) getVersionTokensAsString {
    NSString* beforeDownloadingVersionToken = ([self versionTokenBeforeDownloading] != nil ? [self versionTokenBeforeDownloading] : @"n/a");
    NSString* beforeCreationVersionToken = ([self versionTokenBeforeCreation] != nil ? [self versionTokenBeforeCreation] : @"n/a");
    NSString* targetVersionToken = ([self versionToken] != nil ? [self versionToken] : @"n/a");

    return [NSString stringWithFormat:@"b-download: %@ ,b-creation: %@ ,t-version: %@", beforeDownloadingVersionToken, beforeCreationVersionToken, targetVersionToken];
}

+(BOOL)resourceContent:(NSString*)filePath containsVersionToken:(NSString*)version{
    BOOL result = NO;
    NSFileManager *fileManager = [NSFileManager defaultManager];
    
    if( [fileManager fileExistsAtPath:filePath isDirectory:nil] )
    {
        NSError *error;
        NSString *fileContent = [NSString stringWithContentsOfFile:filePath encoding:NSUTF8StringEncoding error:&error];
        
        if(!error){
            // Check if the resource contains the following content:
            // index.html : OSManifestLoader.indexVersionToken = "BJNvwHL3eEflaQm_mD9w4g"
            // manifest.json : "versionToken":"WUQpFTCvKKrD1hM7ECZe4g"
            NSString *versionToken = [NSString stringWithFormat:@"(OSManifestLoader\\.indexVersionToken.*=.*|\"versionToken\":)\"%@\"", [NSRegularExpression escapedPatternForString:version]];
            NSRegularExpression *regex = nil;
            regex = [NSRegularExpression regularExpressionWithPattern:versionToken
                                                              options:NSRegularExpressionCaseInsensitive error:&error];
            
            if(error) {
                [[OSLogger sharedInstance] logError:@"Unable to validate the content of the resource" withModule:@"OSCache"];
            }
            
            NSArray *matchesInString = [regex matchesInString:fileContent options:0 range:NSMakeRange(0, [fileContent length])];
            result = [matchesInString count] > 0;
        }
        else{
            [[OSLogger sharedInstance] logError:@"Unable to validate the content of the resource" withModule:@"OSCache"];
        }
    }
    
    return result;
}

@end
