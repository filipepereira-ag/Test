#import <Foundation/Foundation.h>
#import "OSHttpRequesterProtocol.h"
#import "OSLoggerProtocol.h"

typedef void (^OSHttpSuccessHandler)(NSDictionary* payload);
typedef void (^OSHttpErrorHandler)(NSDictionary* payload);
@interface OSHttp : NSObject

- (instancetype)init NS_UNAVAILABLE;

- (instancetype)initWithRequester:(id<OSHttpRequesterProtocol>) requester andLogger:(id<OSLoggerProtocol>) logger;

- (void)onReset;

- (void)sendRequestWithRequestId:(NSString*) requestId
                             url:(NSString*) url
                          method:(NSString*) method
                         headers:(NSDictionary*) headers
                         timeout:(NSNumber*) timeout
                            body:(NSString*) body
                         baseUrl:(NSURL*) baseURL
              responseBodyIsText:(BOOL) responseBodyIsText
                  successHandler:(OSHttpSuccessHandler) successHandler
                    errorHandler:(OSHttpErrorHandler) errorHandler;
;

- (void)abortRequestWithRequestId:(NSString*) requestId
                   successHandler:(OSHttpSuccessHandler) successHandler
                     errorHandler:(OSHttpErrorHandler) errorHandler;
@end
