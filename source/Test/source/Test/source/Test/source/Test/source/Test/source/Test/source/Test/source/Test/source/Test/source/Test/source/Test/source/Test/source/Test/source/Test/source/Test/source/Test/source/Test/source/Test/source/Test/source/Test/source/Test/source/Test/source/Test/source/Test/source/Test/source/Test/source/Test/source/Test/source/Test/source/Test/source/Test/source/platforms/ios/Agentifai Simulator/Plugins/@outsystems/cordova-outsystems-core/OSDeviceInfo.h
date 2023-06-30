
#import <Foundation/Foundation.h>
#import <Cordova/CDV.h>
#import "OSApplicationInfoProtocol.h"
@interface OSDeviceInfo : NSObject

- (instancetype)init NS_UNAVAILABLE;

+(id) sharedInstance;
+(id) sharedInstanceWithCommandDelegate:(id <CDVCommandDelegate>) cmdDelegate
                        applicationInfo:(id<OSApplicationInfoProtocol>) applicationInfo;
+(NSString*) getCordovaVersion;

-(NSMutableDictionary *) getDeviceInfo;
-(NSMutableDictionary *) getDeviceAndAppInfo;
-(NSString *) getDeviceModel;
-(NSString *) getDevicePlatform;
-(NSString *) getDeviceOSVersion;
-(NSString *) getDeviceUUID;
-(BOOL) getIsVirtual;
-(NSString *) getPlatformVersion;
-(NSString *) getNativeShellVersion;
-(NSString *) getAppVersionCode;
-(NSString *) getAppVersionName;
-(NSString *) getNetworkType;
-(NSString *) getNetworkStatus;
-(BOOL) isConnected;

@end
