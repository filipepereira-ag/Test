#import <Foundation/Foundation.h>
#import "OSHttpErrorCodeEnum.h"

@interface OSHttpResultUtil : NSObject

+ (NSDictionary*) errorDetailWithErrorCode:(OSHttpErrorCode) errorCode
                           andErrorMessage:(NSString*) message;

+ (NSDictionary*) errorPayloadForRequestId:(NSString*) requestId
                                 errorCode:(OSHttpErrorCode) errorCode
                               erroMessage:(NSString*) errorMessage;

+ (NSDictionary*) successPayloadForRequestId:(NSString*) requestId data:(NSDictionary*) data;

@end
