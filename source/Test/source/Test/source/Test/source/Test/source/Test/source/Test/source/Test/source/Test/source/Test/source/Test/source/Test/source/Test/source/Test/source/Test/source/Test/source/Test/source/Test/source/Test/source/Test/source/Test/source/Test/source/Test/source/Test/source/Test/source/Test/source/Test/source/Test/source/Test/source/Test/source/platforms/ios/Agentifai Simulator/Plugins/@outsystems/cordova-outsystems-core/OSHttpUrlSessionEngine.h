#import <Foundation/Foundation.h>
#import "OSHttpRequesterProtocol.h"

@interface OSHttpUrlSessionEngine : NSObject <OSHttpRequesterProtocol>

+ (instancetype _Nullable )createWithCookieHandler:(id<OSHttpCookieHandler>_Nonnull) cookieHandler;

@end
