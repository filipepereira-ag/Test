#import "OSHttpCookieHandlerProtocol.h"
#import "OSHttpMethodEnum.h"

typedef void (^OSHttpRequestCallback)(NSString* _Nonnull requestId, NSURL* _Nonnull requestUrl, NSData* _Nullable data, NSHTTPURLResponse* _Nullable response, NSError* _Nullable error);

@protocol OSHttpRequesterProtocol <NSObject>

- (void)sendRequest:(NSString*_Nullable) requestId
                url:(NSURL*_Nullable) url
             method:(OSHttpMethod) method
        withHeaders:(NSDictionary*_Nullable) headers
        withTimeout:(NSNumber*_Nullable) timeout
           withBody:(nullable NSData*) body
        andCallback:(OSHttpRequestCallback _Nullable) callback;

- (void)abortRequest:(NSString*_Nullable) requestId completionHandler:(void(^_Nullable)(void)) completionHandler;


- (void)abortAllRequestsWithCompletionHandler:(void(^_Nullable)(void)) completionHandler;

@end
