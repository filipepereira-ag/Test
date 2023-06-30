#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

typedef NS_ENUM(NSUInteger, AuthResultStatus) {
    AuthResultStatusOK = 0,
    AuthResultStatusError
};

extern NSString *const OSAuthErrorInvalidEndpointUrl;
extern NSString *const OSAuthErrorInvalidCallbackUrl;
extern NSString *const OSAuthErrorUserCanceled;

@interface AuthResult : NSObject

@property(nonatomic, readonly) AuthResultStatus status;
@property(nonatomic, readonly) NSString *message;

+ (instancetype)resultWithStatus:(AuthResultStatus)status message:(NSString *)message;

@end

NS_ASSUME_NONNULL_END
