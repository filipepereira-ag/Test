#import "OSHttpResultUtil.h"

@implementation OSHttpResultUtil

+ (NSDictionary*) errorDetailWithErrorCode:(OSHttpErrorCode) errorCode
                           andErrorMessage:(NSString*) message {
    return @{@"errorCode": [NSNumber numberWithInteger:errorCode], @"errorMessage": message};
}

+ (NSDictionary*) errorPayloadForRequestId:(NSString*) requestId
                                 errorCode:(OSHttpErrorCode) errorCode
                               erroMessage:(NSString*) errorMessage {
    
    return @{@"requestId": requestId ? requestId : [NSNull null],
             @"data": [NSNull null],
             @"error": [self errorDetailWithErrorCode:errorCode andErrorMessage:errorMessage]};
}

+ (NSDictionary*) successPayloadForRequestId:(NSString*) requestId data:(NSDictionary*) data {
    return @{@"requestId": requestId ? requestId : [NSNull null],
             @"data": data ? data : [NSNull null],
             @"error": [NSNull null]};
}

@end
