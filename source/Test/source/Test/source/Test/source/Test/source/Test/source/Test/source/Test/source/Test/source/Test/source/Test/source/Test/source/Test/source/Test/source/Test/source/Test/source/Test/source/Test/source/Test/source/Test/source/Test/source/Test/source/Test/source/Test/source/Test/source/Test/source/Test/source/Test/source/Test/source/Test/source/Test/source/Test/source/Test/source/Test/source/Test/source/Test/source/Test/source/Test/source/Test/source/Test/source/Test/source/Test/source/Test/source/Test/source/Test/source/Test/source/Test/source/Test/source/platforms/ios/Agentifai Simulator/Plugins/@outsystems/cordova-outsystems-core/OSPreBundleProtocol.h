#import <Foundation/Foundation.h>
#import <Cordova/CDV.h>

@protocol OSPreBundleProtocol
@required

-(void) bootstrapCacheWithPreBundle;
-(NSDictionary*) getManifest;

@end
