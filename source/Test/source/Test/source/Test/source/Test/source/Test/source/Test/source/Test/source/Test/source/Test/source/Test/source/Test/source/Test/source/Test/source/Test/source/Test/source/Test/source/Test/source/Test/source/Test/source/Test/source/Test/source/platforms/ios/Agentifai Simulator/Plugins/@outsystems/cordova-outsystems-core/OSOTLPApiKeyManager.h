
#import "OSApiKeyManager.h"

extern NSErrorDomain __nonnull const OSOTLPApiKeyManagerErrorDomain;

NS_ERROR_ENUM(OSOTLPApiKeyManagerErrorDomain)
{
    OSOTLPApiKeyManagerErrorUnsuccessfulRequest = -1,
    OSOTLPApiKeyManagerErrorUnexpected = -999,
};

@interface OSOTLPApiKeyManager : NSObject <OSApiKeyManager>

- (nonnull instancetype)initWithHostname:(nonnull NSString *)hostname andApplicationUrl:(nonnull NSString *)applicationUrl;

+ (nonnull instancetype)managerWithHostname:(nonnull NSString *)hostname andApplicationUrl:(nonnull NSString *)applicationUrl;

@end
