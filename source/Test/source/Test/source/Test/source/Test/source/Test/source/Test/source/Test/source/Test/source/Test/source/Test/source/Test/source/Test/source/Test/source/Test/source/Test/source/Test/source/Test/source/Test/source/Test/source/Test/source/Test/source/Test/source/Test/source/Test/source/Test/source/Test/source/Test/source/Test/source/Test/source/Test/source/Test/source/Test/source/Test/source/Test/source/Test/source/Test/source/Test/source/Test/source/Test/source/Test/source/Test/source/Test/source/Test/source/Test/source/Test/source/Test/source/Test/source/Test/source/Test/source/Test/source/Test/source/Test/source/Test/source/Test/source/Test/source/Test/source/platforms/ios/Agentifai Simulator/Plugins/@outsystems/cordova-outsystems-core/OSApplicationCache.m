#import "OSApplicationCache.h"
#import "OSCacheEntry.h"
#import "OSMimeTypesHelper.h"
#import "OSLogger.h"

static NSString* const OSApplicationHostnameObject = @"applicationHostname";
static NSString* const OSApplicationPathObject = @"applicationPath";
static NSString* const OSApplicationCacheObject = @"cachedApplication";
static NSString* const OSApplicationCacheVersionObject = @"cachedVersion";
static NSString* const OSApplicationPreBundleVersionObject = @"preBundleVersion";
static NSString* const OSApplicationCacheEntriesObject = @"cachedEntries";
static NSString* const OSApplicationCacheFramesArray = @"cachedFrames";

@interface OSApplicationCache()

@property (nonatomic,strong) OSCacheResources *runningVersion;
@property (nonatomic,strong) OSCacheResources *previousVersion;
@property (nonatomic,strong) OSCacheResources *prebundleVersion;

@property (nonatomic,strong) NSMutableDictionary *cacheEntries;
@property (nonatomic,strong) NSMutableArray *cacheFrames;
@property (nonatomic, readonly, strong) id <OSLoggerProtocol> logger;

@property (weak) DownloadSession downloadSessionGetter;
@end

@implementation OSApplicationCache

-(id)init{
    
    if(self = [super init]){
        _logger = [OSLogger sharedInstance];
        _cacheEntries = [[NSMutableDictionary alloc] init];
        _cacheFrames = [[NSMutableArray alloc] init];
        _cacheApplicationKey = nil;
        _runningVersion = nil;
        _prebundleVersion = nil;
    }
    
    return self;
}

-(id) initForHostname:(NSString*)hostname
       andApplication:(NSString*)application
     andSessionGetter:(_Nonnull DownloadSession) sessionGetter
            forAppKey:(NSString*)applicationKey {
    
    if(self = [self init]){
        _hostname = hostname;
        _application = application;
        _cacheApplicationKey = applicationKey;
        _downloadSessionGetter = sessionGetter;
    }
    return self;
}

-(id) initWithDictionary:(NSDictionary *)dictionary
                 upgrade:(BOOL) upgrade
        andSessionGetter:(_Nonnull DownloadSession) sessionGetter {
    
    if(self = [self init]){
        _downloadSessionGetter = sessionGetter;
        
        if(dictionary){
            NSString *appHostname = [dictionary objectForKey:OSApplicationHostnameObject];
            _hostname = appHostname;
            
            NSString *appPath = [dictionary objectForKey:OSApplicationPathObject];
            _application = appPath;
            
            NSString *applicationKey = [dictionary objectForKey:OSApplicationCacheObject];
            _cacheApplicationKey = applicationKey;
            
            NSString *cacheVersion = [dictionary objectForKey:OSApplicationCacheVersionObject];
            
            NSMutableDictionary *content = [dictionary objectForKey:OSApplicationCacheEntriesObject];
            NSMutableDictionary *tempCacheEntries = [[NSMutableDictionary alloc] init];
            
            for(NSString *key in content){                
                NSDictionary *dictionary = [content objectForKey:key];
                OSCacheEntry *cacheEntry = [[OSCacheEntry alloc] initWithDictionary:dictionary];
                
                if(upgrade)
                    [tempCacheEntries setValue:cacheEntry forKey:key];
                else
                    [_cacheEntries setValue:cacheEntry forKey:key];
            }
            
            if(upgrade){
                OSCacheResources *osCacheResources = [self upgradeCacheEntriesForVersion:cacheVersion fromDictionary:tempCacheEntries];
                osCacheResources.status = OSCacheResourcesStatusUpgrade;
                _runningVersion = osCacheResources;
                
                [self addCacheFrame:osCacheResources];
            }
            
            // Get frames from manifest
            NSMutableArray *cachedFrames = [dictionary objectForKey:OSApplicationCacheFramesArray];
            for(NSMutableDictionary *cacheResources in cachedFrames){
                NSString* versionToken = [cacheResources objectForKey:kOSCacheResourcesVersionToken];
                NSMutableArray* resources = [cacheResources objectForKey:kOSCacheResourcesResourcesObject];
                NSMutableDictionary* urls = [cacheResources objectForKey:kOSCacheResourcesUrlMappingsObject];
                NSMutableDictionary* noCache = [cacheResources objectForKey:kOSCacheResourcesUrlMappingsNoCacheObject];
                BOOL frameToDelete = [[cacheResources objectForKey:kOSCacheResourcesFrameToDelete] boolValue];
                
                OSCacheResources* osCacheResources = [[OSCacheResources alloc] initForHostname:appHostname
                                                                                   application:appPath
                                                                                   withVersion:versionToken
                                                                                  forPrebundle:NO
                                                                              urlSessionGetter:[self downloadSessionGetter]
                                                                             onProgressHandler:nil
                                                                                onErrorHandler:nil
                                                                               onFinishHandler:nil];
                
                [osCacheResources populateCacheEntriesForResourcePool:_cacheEntries
                                                     prebundleEntries:nil
                                                         resourceList:resources
                                                              urlMaps:urls
                                                       urlMapsNoCache:noCache];
                // After creating the cache resources we want to register the version token which was running
                NSString *currentCacheVersion = [self getCurrentCacheVersion];
                osCacheResources.versionTokenBeforeCreation = currentCacheVersion == nil ? @"n/a" : currentCacheVersion;

                [osCacheResources setStatus:[[cacheResources objectForKey:kOSCacheResourcesStatus] integerValue]];
                [osCacheResources setFrameToDelete:frameToDelete];
                
                if([cacheVersion isEqualToString:[osCacheResources versionToken]]){
                    _runningVersion = osCacheResources;
                }
                
                [self addCacheFrame:osCacheResources];
            }
        }
        
    }
    return self;
}


-(NSString*)getCurrentCacheVersion{
    if(_runningVersion){
        return [_runningVersion versionToken];
    }
    return nil;
}

#pragma mark - Serialization

- (NSMutableDictionary*) createCacheManifest{
    
    NSMutableDictionary *result = [[NSMutableDictionary alloc] init];
    
    @try{
        
        [result setValue:_hostname forKey:OSApplicationHostnameObject];
        [result setValue:_application forKey:OSApplicationPathObject];
        
        [result setValue:_cacheApplicationKey forKey:OSApplicationCacheObject];
        [result setValue:_runningVersion.versionToken forKey:OSApplicationCacheVersionObject];
        [result setValue:_prebundleVersion.versionToken forKey:OSApplicationPreBundleVersionObject];
        
        NSMutableDictionary * cachedContentObject = [[NSMutableDictionary alloc] init];
        
        NSArray *entriesKeys = [_cacheEntries allKeys];
        for(NSString *key in entriesKeys){
            OSCacheEntry *cacheEntry = [_cacheEntries objectForKey:key];
            NSMutableDictionary *entryObject = [cacheEntry jsonDictionary];
            
            [cachedContentObject setValue:entryObject forKey:key];
        }
        
        [result setValue:cachedContentObject forKey:OSApplicationCacheEntriesObject];
        
        // Add Cache Frames
        NSMutableArray *cachedFrames = [[NSMutableArray alloc] init];
        for(OSCacheResources *frameResources in _cacheFrames){
            if(!frameResources.preBundle){
                NSMutableDictionary *frame = [frameResources jsonDictionary];
                //addObject raises an NSInvalidArgumentException if anObject is nil, but is already handled by the TRY-CATCH condition
                [cachedFrames addObject:frame];
            }
        }
        
        [result setValue:cachedFrames forKey:OSApplicationCacheFramesArray];
        
    }
    @catch(NSException *exception){
        [_logger logError:[NSString stringWithFormat:@"Failed to create manifest object: %@", [exception reason]] withModule:@"OSCache" withException:exception];
        
    }
    
    return result;
    
}

#pragma mark - Cache Frame

-(OSCacheResources *) upgradeCacheEntriesForVersion:(NSString*)version fromDictionary:(NSMutableDictionary*) dictionary {
    
    OSCacheResources *cacheFrame = [[OSCacheResources alloc] initForHostname:_hostname
                                                                 application:_application
                                                                 withVersion:version
                                                                forPrebundle:NO
                                                            urlSessionGetter:[self downloadSessionGetter]
                                                           onProgressHandler:nil
                                                              onErrorHandler:nil
                                                             onFinishHandler:nil];
    // After creating the cache resources we want to register the version token which was running
    NSString *currentCacheVersion = [self getCurrentCacheVersion];
    cacheFrame.versionTokenBeforeCreation = currentCacheVersion == nil ? @"n/a" : currentCacheVersion;
    
    for(NSString *key in dictionary){
        OSCacheEntry *cacheEntry = [dictionary objectForKey:key];
        
        if(cacheEntry.preBundled){
            cacheEntry.status = OSCacheEntryStatusUncached;
        }
        
        if(![key isEqualToString:cacheEntry.url]){
            cacheEntry.resourceMapping = YES;
        }
        else{
            // Ensure data integrity
            cacheEntry.noCache = NO;
            cacheEntry.resourceMapping = NO;
        }
        
        [cacheFrame addResource:cacheEntry withUrl:key];
    }
    
    
    return cacheFrame;
}

-(void)addPreBundleFrame:(OSCacheResources*)cacheResources{
    [self addCacheFrame:cacheResources];
    self.prebundleVersion = cacheResources;
}

-(void)upgradeIfNeeded{

    if(_runningVersion && _runningVersion.status == OSCacheResourcesStatusUpgrade){
 
        [_logger logDebug:[NSString stringWithFormat:@"Upgrading cache for application: https://%@/%@",_hostname,_application] withModule:@"OSCache"];
    
        for(NSString* key in _runningVersion.cacheEntries) {
            OSCacheEntry *cacheEntry = [_runningVersion.cacheEntries objectForKey:key];
            if(cacheEntry.preBundled){
                OSCacheEntry *preBundleCacheEntry = [self.prebundleVersion.cacheEntries objectForKey:key];
                if(!preBundleCacheEntry){
                    preBundleCacheEntry = [self.prebundleVersion.cacheEntries objectForKey:[cacheEntry url]];
                }
                
                if((preBundleCacheEntry && [preBundleCacheEntry.url isEqualToString:cacheEntry.url]) && [_runningVersion fileExistsAtPreBundled:cacheEntry]){
                    [_runningVersion copyPreBundleResource:cacheEntry];
                    [_runningVersion updateResource:cacheEntry withStatus:OSCacheEntryStatusFetched];
                }else{
                    cacheEntry.fileName = [_runningVersion getFileNameForURL:cacheEntry.url forPrebundle:NO];
                    [_runningVersion updateResource:cacheEntry withStatus:OSCacheEntryStatusFailed];
                }
                cacheEntry.preBundled = NO;
                
            }
        }
        
        _runningVersion.status = OSCacheResourcesStatusFetched;
        _runningVersion.preBundle = NO;
  
        [self swapCache:_runningVersion];
        [self clearPreviousVersion];
    }
}

-(OSCacheEntry*)resourceExistsAtPrebundle:(NSString*)url{
    
    OSCacheEntry *preBundledResource = nil;
    if(_prebundleVersion){
        OSCacheEntry *resource = [_prebundleVersion.cacheEntries objectForKey:url];
        
        if(resource){
            preBundledResource = resource;
        }
    }
    
    return preBundledResource;
    
}

-(void)addCacheFrame:(OSCacheResources*)cacheResources{
    if(cacheResources) {
        [_cacheFrames addObject:cacheResources];
    } else {
        [_logger logDebug:@"Unable to add an empty cache frame to cache frames array" withModule:@"OSCache"];
    }
}

-(OSCacheResources*)getCacheFrameForVersion:(NSString*)version{
    
    OSCacheResources *frame = nil;
    
    for(OSCacheResources *cacheFrame in _cacheFrames){
        if([cacheFrame.versionToken isEqualToString:version]){
            frame = cacheFrame;
            break;
        }
    }
    
    return frame;
}

-(OSCacheResources *) getCurrentRunningFrame{
    return _runningVersion;
}

-(OSCacheResources*) getPreBundleFrame {
    return _prebundleVersion;
}

#pragma mark - Cache Manipulation

-(OSCacheEntry*)getCacheEntryForURL:(NSString*)url{
    OSCacheEntry *cacheEntry = nil;
    if(_runningVersion){
        cacheEntry = [[_runningVersion cacheEntries] objectForKey:url];
    }
    
    if(!cacheEntry){
        cacheEntry = [_cacheEntries objectForKey:url];
    }
    
    if(!cacheEntry && _prebundleVersion){
        cacheEntry = [[_prebundleVersion cacheEntries] objectForKey:url];
    }
    
    return cacheEntry;
}

-(void) healingCacheEntry:(NSString*)url{
    OSCacheEntry *cacheEntry = nil;
    if(_runningVersion){
        cacheEntry = [[_runningVersion cacheEntries] objectForKey:url];

        if(cacheEntry){
            // Mark resource as fetched. It was copied or downloaded on heal mechanism
            [cacheEntry setStatus:OSCacheEntryStatusFetched];
        }
    }
}

-(void)addCacheEntry:(OSCacheEntry*)cacheEntry forURL:(NSString*)url{
    if(url) {
        [_cacheEntries setValue:cacheEntry forKey:url];
    } else {
        [_logger logDebug:[NSString stringWithFormat:@"Failed to add entry '%@' to cache entries dictionary", url] withModule:@"OSCache"];
    }
}

-(BOOL)swapCache:(OSCacheResources*)cacheResources{
    BOOL resultSwapCache = YES;
    if(!cacheResources.preBundle){
        
        NSMutableDictionary *newCacheEntries = [cacheResources cacheEntries];
        
        for(NSString *key in [newCacheEntries allKeys]){
            OSCacheEntry *cacheEntry = [newCacheEntries objectForKey:key];
            if(!cacheEntry.resourceMapping){
                if(key && cacheEntry.status == OSCacheEntryStatusFetched && !cacheEntry.preBundled && [cacheEntry.cacheVersions count] > 0 && cacheEntry.mimeType && [cacheEntry.mimeType length] > 0){
                    [_cacheEntries setValue:cacheEntry forKey:key];
                }else {
                    resultSwapCache = NO;
                }
            }
        }
        
        if(resultSwapCache && (cacheResources.status == OSCacheResourcesStatusFetched || cacheResources.status == OSCacheResourcesStatusUpgrade)){
            //On the first start there is no running version
            if(_runningVersion){
                _previousVersion = _runningVersion;
            }
            
            _runningVersion = cacheResources;
        } else {
            resultSwapCache = false;
        }
        
    } else {
        [_logger logDebug:@"Unable to execute swap cache with a prebundle frame" withModule:@"OSCache"];
    }
    
    return resultSwapCache;
}


-(void)markForDeletion{

    for(OSCacheResources *frame in _cacheFrames){
        
        if(frame && frame != _runningVersion && !frame.preBundle){
            [_logger logDebug:[NSString stringWithFormat:@"Defining files from cache frame with version %@ to be deleted",[frame versionToken]] withModule:@"OSCache"];
            
            //Set frame to be deleted when application starts
            [frame setFrameToDelete:YES];
            
            NSMutableDictionary *frameEntries = [frame cacheEntries];
            NSArray *entriesKeys = [frameEntries allKeys];
            
            for(NSString *key in entriesKeys){
                OSCacheEntry *entry = [frameEntries objectForKey:key];
                
                // Processing actual resources and not mappings (no-cache or not)
                if(!entry.resourceMapping){
                    [_logger logDebug:[NSString stringWithFormat:@"Removing frame version from resource with key: %@", [entry url]] withModule:@"OSCache"];
                    
                    [entry.cacheVersions removeObjectForKey:frame.versionToken];
                    
                    [_logger logDebug:[NSString stringWithFormat:@"Resource with key %@ is used by another %ld frame versions",[entry url],(unsigned long)[[entry cacheVersions] count]] withModule:@"OSCache"];
                    
                    if([entry.cacheVersions count] == 0){
                        [entry setResourceToDelete:YES];
                        [[_cacheEntries objectForKey:key] setResourceToDelete:YES];
                        [_logger logDebug:[NSString stringWithFormat:@"Defining resource from cache: %@ to be deleted",[entry url]] withModule:@"OSCache"];
                    }
                }
            }
        }
    }
}

-(NSMutableArray*)gatherResourcesToDelete{
    
    NSMutableArray *framesToDelete = [[NSMutableArray alloc] init];
    NSMutableArray *resourcesToDelete = [[NSMutableArray alloc] init];
    
    for(OSCacheResources *frame in _cacheFrames){
        
        if(frame && frame != _runningVersion && !frame.preBundle && frame.frameToDelete){
            [_logger logDebug:[NSString stringWithFormat:@"Removing files from cache frame with version %@",[frame versionToken]] withModule:@"OSCache"];
            
            [framesToDelete addObject:frame];
            
            NSMutableDictionary *frameEntries = [frame cacheEntries];
            NSArray *entriesKeys = [frameEntries allKeys];
            
            for(NSString *key in entriesKeys){
                OSCacheEntry *entry = [frameEntries objectForKey:key];

                if(entry.resourceToDelete){
                    [_cacheEntries removeObjectForKey:key];
                    [resourcesToDelete addObject:entry];
                    [_logger logDebug:[NSString stringWithFormat:@"Removing resource from cache: %@",[entry url]] withModule:@"OSCache"];
                }
            }
        }
    }
    
    for(OSCacheResources *frame in framesToDelete){
        [_cacheFrames removeObject:frame];
        [_logger logDebug:[NSString stringWithFormat:@"Removed cache frame with version %@", [frame versionToken]] withModule:@"OSCache"];
    }
    
    return resourcesToDelete;
}

-(BOOL)isEmpty{
    return [_cacheEntries count] == 0;
}

-(NSMutableDictionary *) getCacheEntries {
    return _cacheEntries;
}

-(void) rollbackToPreviousVersion{
    if(_previousVersion){
        _runningVersion = _previousVersion;
        [self clearPreviousVersion];
    }
}

-(void) clearPreviousVersion {
    _previousVersion = nil;
}

@end
