#import "OSLoggerEngine.h"
#import <PureeOS/PURLogger.h>
#import "OSApplicationInfoProtocol.h"
#import "OSDeviceInfo.h"

@interface OSPureeLogger : NSObject<OSLoggerEngine>

- (instancetype)initWithHostname:(NSString *)hostname
                  applicationUrl:(NSString *)applicationUrl
                  applicationKey:(NSString *)applicationKey
                  environmentKey:(NSString *)environmentKey
                       tenantKey:(NSString *)tenantKey
                       userAgent:(NSString *)userAgent
                 applicationInfo:(id <OSApplicationInfoProtocol>) applicationInfo
                      deviceInfo:(OSDeviceInfo *)deviceInfo;

- (instancetype)initWithHostname:(NSString *)hostname
                  applicationUrl:(NSString *)applicationUrl
                  applicationKey:(NSString *)applicationKey
                  environmentKey:(NSString *)environmentKey
                       tenantKey:(NSString *)tenantKey
                       userAgent:(NSString *)userAgent
                 applicationInfo:(id <OSApplicationInfoProtocol>)applicationInfo
                      deviceInfo:(OSDeviceInfo *)deviceInfo
                       purLogger:(PURLogger *)purLogger;

@end
