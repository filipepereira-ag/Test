
#include <sys/types.h>
#include <sys/sysctl.h>

#import "OSDeviceInfo.h"
#import <Cordova/CDV.h>
#import "CDVConnection.h"
#import "OSApplicationInfo.h"

@implementation UIDevice (ModelVersion)

- (NSString*)modelVersion
{
#if TARGET_IPHONE_SIMULATOR
    NSString* platform = NSProcessInfo.processInfo.environment[@"SIMULATOR_MODEL_IDENTIFIER"];
#else
    size_t size;

    sysctlbyname("hw.machine", NULL, &size, NULL, 0);
    char* machine = malloc(size);
    sysctlbyname("hw.machine", machine, &size, NULL, 0);
    NSString* platform = [NSString stringWithUTF8String:machine];
    free(machine);
#endif
    return platform;
}

@end

static NSString * const kDeviceModel = @"DeviceModel";
static NSString * const kDeviceUUID = @"DeviceUUID";
static NSString * const kOperatingSystem = @"OperatingSystem";
static NSString * const kCordova = @"Cordova";
static NSString * const kNetworkType = @"NetworkType";
static NSString * const kNetworkStatus = @"NetworkStatus";
static NSString * const kNativeShell = @"NativeShell";
static NSString * const kAppVersionCode = @"AppVersionCode";
static NSString * const kAppVersionName = @"AppVersionName";

@interface OSDeviceInfo()

@property UIDevice* device;
@property (nonatomic, weak) id <CDVCommandDelegate> commandDelegate;
@property (nonatomic, weak) id <OSApplicationInfoProtocol> applicationInfo;

@end

@implementation OSDeviceInfo

+(id) sharedInstance{
    static OSDeviceInfo *sharedInstance = nil;
    static dispatch_once_t onceToken;
    
    dispatch_once(&onceToken, ^{
        sharedInstance = [[self alloc] init];
    });
    
    return sharedInstance;
}

+(id) sharedInstanceWithCommandDelegate:(id <CDVCommandDelegate>) cmdDelegate
                        applicationInfo:(id<OSApplicationInfoProtocol>) applicationInfo {
    static OSDeviceInfo *sharedInstance = nil;
    static dispatch_once_t onceToken;
    
    dispatch_once(&onceToken, ^{
        sharedInstance = [[self alloc] initWithCommandDelegate:cmdDelegate applicationInfo: applicationInfo];
    });
    
    return sharedInstance;
}

-(id) initWithCommandDelegate:(id <CDVCommandDelegate>) cmdDelegate
              applicationInfo:(id<OSApplicationInfoProtocol>) applicationInfo {
    if(self = [super init]){
        _device = [UIDevice currentDevice];
        _commandDelegate = cmdDelegate;
        _applicationInfo = applicationInfo;
    }
    return self;
}


#pragma mark - helpers
- (NSString*)uniqueAppInstanceIdentifier:(UIDevice*)device
{
    NSUserDefaults* userDefaults = [NSUserDefaults standardUserDefaults];
    static NSString* UUID_KEY = @"CDVUUID";
    
    // Check user defaults first to maintain backwards compaitibility with previous versions
    // which didn't user identifierForVendor
    NSString* app_uuid = [userDefaults stringForKey:UUID_KEY];
    if (app_uuid == nil) {
        if ([device respondsToSelector:@selector(identifierForVendor)]) {
            app_uuid = [[device identifierForVendor] UUIDString];
        } else {
            CFUUIDRef uuid = CFUUIDCreate(NULL);
            app_uuid = (__bridge_transfer NSString *)CFUUIDCreateString(NULL, uuid);
            CFRelease(uuid);
        }
        
        [userDefaults setObject:app_uuid forKey:UUID_KEY];
        [userDefaults synchronize];
    }
    
    return app_uuid;
}

- (BOOL)isVirtual
{
#if TARGET_OS_SIMULATOR
    return true;
#elif TARGET_IPHONE_SIMULATOR
    return true;
#else
    return false;
#endif
}

#pragma mark - API

-(NSMutableDictionary*) getDeviceInfo {
    NSMutableDictionary *deviceInfo = [[NSMutableDictionary alloc] init];
    [deviceInfo setValue:[self getDeviceModel] forKey:kDeviceModel];
    [deviceInfo setValue:[self getDeviceUUID] forKey:kDeviceUUID];
    [deviceInfo setValue:[NSString stringWithFormat:@"%@ %@", [self getDevicePlatform], [self getDeviceOSVersion]] forKey:kOperatingSystem];
    [deviceInfo setValue:CDV_VERSION forKey:kCordova];
    [deviceInfo setValue:[self getNativeShellVersion] forKey:kNativeShell];
    [deviceInfo setValue:[self getNetworkType] forKey:kNetworkType];
    [deviceInfo setValue:[self getNetworkStatus] forKey:kNetworkStatus];
    
    return deviceInfo;
}

// Appends app version info to getDeviceInfo (used for error and fatal log levels)
-(NSMutableDictionary*) getDeviceAndAppInfo {
    NSMutableDictionary *info = [self getDeviceInfo];
    [info setValue:[self getAppVersionCode] forKey:kAppVersionCode];
    [info setValue:[self getAppVersionName] forKey:kAppVersionName];
    
    return info;
}

-(NSString *) getDeviceModel {
    return [_device modelVersion];
}

-(NSString *) getDevicePlatform {
    return @"iOS";
}

-(NSString *) getDeviceOSVersion {
    return [_device systemVersion];
}

-(NSString *) getDeviceUUID {
    return [self uniqueAppInstanceIdentifier:_device];
}

-(BOOL) getIsVirtual {
    return [self isVirtual];
}

+(NSString*) getCordovaVersion {
    return CDV_VERSION;
}

-(NSString *) getNativeShellVersion{
    return [_applicationInfo getNativeShellVersion];
}

-(NSString *) getAppVersionCode {
    return [_applicationInfo getAppVersionNumber];
}

-(NSString *) getAppVersionName {
    return [_applicationInfo getAppVersion];
}

-(NSString *) getPlatformVersion {
    return [_applicationInfo getPlatformVersion];
}


-(NSString*) getNetworkType {
    CDVConnection *networkStatusPlugin = [self.commandDelegate getCommandInstance:@"NetworkStatus"];
    NSString *connectionType = [networkStatusPlugin connectionType];
    return connectionType;
}

-(NSString*) getNetworkStatus {
    NSString *connectionType = [self getNetworkType];
    
    if([connectionType isEqualToString:@"none"])
        return @"Offline";
    else
        return @"Online";
}

-(BOOL) isConnected {
    if([[self getNetworkType] isEqualToString:@"none"]){
        return false;
    }
    return true;
}

@end
