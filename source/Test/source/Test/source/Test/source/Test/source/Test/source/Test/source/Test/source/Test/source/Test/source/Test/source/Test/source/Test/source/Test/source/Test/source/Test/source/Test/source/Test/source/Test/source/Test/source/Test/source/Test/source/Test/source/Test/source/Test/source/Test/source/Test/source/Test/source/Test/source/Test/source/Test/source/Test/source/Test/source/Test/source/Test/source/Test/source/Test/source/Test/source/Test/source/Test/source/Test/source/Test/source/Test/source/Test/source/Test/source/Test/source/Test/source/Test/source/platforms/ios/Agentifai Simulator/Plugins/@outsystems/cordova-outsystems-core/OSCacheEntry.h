#import <Foundation/Foundation.h>

typedef NS_ENUM(NSInteger,OSCacheEntryStatus)  {
    OSCacheEntryStatusUncached = 0,
    OSCacheEntryStatusDownloading = 1,
    OSCacheEntryStatusFetched = 2,
    OSCacheEntryStatusFailed = 3
};

@interface OSCacheEntry : NSObject

@property NSString *url;
@property NSString *fileName;
@property NSString *mimeType;
@property NSString *encoding;
    
@property BOOL preBundled;
@property BOOL noCache;
@property BOOL resourceMapping;
@property BOOL resourceToDelete;
    
@property OSCacheEntryStatus status;

@property NSMutableDictionary *cacheVersions;

-(id)initForUrl:(NSString*)url withFileName:(NSString*)fileName asPreBundled:(BOOL)preBundled;
-(id)initWithDictionary:(NSDictionary*)dictionary;
-(NSMutableDictionary*) jsonDictionary;

-(void) healMimeType;

-(void) addCacheVersion:(NSString*) version;

@end
