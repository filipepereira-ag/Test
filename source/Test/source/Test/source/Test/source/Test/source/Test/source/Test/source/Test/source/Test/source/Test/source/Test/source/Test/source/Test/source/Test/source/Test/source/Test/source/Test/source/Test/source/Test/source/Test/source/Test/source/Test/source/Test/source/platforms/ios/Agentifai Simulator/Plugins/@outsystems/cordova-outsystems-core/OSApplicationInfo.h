#import <Cordova/CDV.h>
#import <Foundation/Foundation.h>
#import "OSApplicationInfoProtocol.h"

@interface OSApplicationInfo : NSObject<OSApplicationInfoProtocol>

+(id) sharedInstance;
+(id) initializeWithSettings:(NSDictionary*) settings;

-(NSString *) getPlatformVersion DEPRECATED_MSG_ATTRIBUTE("Not available for newer OutSystems platforms. Will be deleted in the next major version.");
-(NSString *) getNativeShellVersion;
-(NSString *) getAppVersion;
-(NSString *) getAppVersionNumber;
-(NSString *) getAppPackageIdentifier;

@end
