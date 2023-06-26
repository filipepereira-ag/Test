
#import <Foundation/Foundation.h>

@protocol OSApiKeyManager

typedef void (^InvalidateApiKeyCompletionHandler) (void);
typedef void (^GetApiKeySuccessHandler) (NSString * __nonnull apiKey, BOOL renewed);
typedef void (^GetApiKeyFailureHandler) (NSError * __nonnull error);

@required

- (void)invalidateApiKeyWithCompletionHandler:(nonnull InvalidateApiKeyCompletionHandler)completion;

- (void)getApiKeyWithSuccessHandler:(nonnull GetApiKeySuccessHandler)success
                  andFailureHandler:(nonnull GetApiKeyFailureHandler)failure;

@end
