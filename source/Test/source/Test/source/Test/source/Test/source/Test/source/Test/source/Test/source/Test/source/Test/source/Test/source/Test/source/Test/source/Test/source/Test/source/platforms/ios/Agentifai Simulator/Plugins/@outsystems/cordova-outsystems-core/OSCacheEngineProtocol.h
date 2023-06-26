#import <UIKit/UIKit.h>
#import <Cordova/CDVWebViewEngineProtocol.h>
#import "OSWebResponse.h"
#import "OSCacheEntry.h"

typedef void (^DownloadWebResponseFinished)(OSWebResponse* response);

@protocol OSCacheEngineProtocol <NSObject>
@required

@property (nonatomic,strong) id delegate;

@property (nonatomic, readonly, weak) id <CDVWebViewEngineProtocol> webViewEngine;

/* Public API */
-(void) startCaching:(NSString*)hostname application:(NSString*)application version:(NSString*)version resourceList:(NSMutableArray*)resources urlMaps:(NSMutableDictionary*)urls urlMapsNoCache:(NSMutableDictionary*)noCache withOptions:(NSMutableDictionary*)options;

-(void) switchToVersion:(NSString*)hostname application:(NSString*)application version:(NSString*)version;

-(void) getResourceFromCache:(NSURLRequest*)request andCompletionHandler:(DownloadWebResponseFinished) completionHandler;

/* Internal API */
-(void) setCurrentApplication:(NSString*)hostname application:(NSString*)application;

-(BOOL) interceptRequest:(NSURL*)url;

-(void) bootstrapCache:(NSString*)version resourceList:(NSMutableArray*)resources urlMaps:(NSMutableDictionary*)urls urlMapsNoCache:(NSMutableDictionary*)noCache;

-(NSString*) getLocalFilePath:(OSCacheEntry*)resource;

+(NSString*) keyForHostname:(NSString*)hostname andApplication:(NSString*)application;

-(void) upgradeCacheIfNeeded;

@end
