#import <Foundation/Foundation.h>
#import <AuthenticationServices/AuthenticationServices.h>
#import <OSMobileCore/AuthResult.h>

NS_ASSUME_NONNULL_BEGIN

@protocol AuthControllerDelegate <NSObject>

- (void)authFinishedWithResult:(AuthResult *)result;

@end

@interface AuthController : NSObject <ASWebAuthenticationPresentationContextProviding>

- (instancetype)initWithDelegate:(NSObject<AuthControllerDelegate> *)delegate;
- (void)startFlowWithEndpointUrl:(NSString *)endpointUrl callbackUrl:(NSString *)callbackUrl atWindow:(UIWindow *)window;

@end

NS_ASSUME_NONNULL_END
