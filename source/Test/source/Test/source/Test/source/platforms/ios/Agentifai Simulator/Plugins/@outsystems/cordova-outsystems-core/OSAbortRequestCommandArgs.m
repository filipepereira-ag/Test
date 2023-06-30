#import "OSAbortRequestCommandArgs.h"
@implementation OSAbortRequestCommandArgs

static NSString* ErrorTemplate = @"Missing/invalid value for parameter %@";

+ (OSAbortRequestCommandArgs*) tryGetWithRequestId:(nullable NSString*) requestId {
    
    OSAbortRequestCommandArgs* args = [OSAbortRequestCommandArgs new];
    
    // Prepare requestId to trim spaces and newlines
    NSString* trimmedRequestId = [requestId stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
    
    // eagerly set the out requestId, even if it isn't available
    // or the validation of any of the arguments fails so that
    // the validation can be associated with a request id.
    args.requestId = requestId;
    
    // Validate mandatory parameters
    if(!trimmedRequestId || [trimmedRequestId length] == 0) {
        args.isValid = NO;
        args.errorMessage = [NSString stringWithFormat:ErrorTemplate, @"requestId"];
        return args;
    }
    
    args.isValid = YES;
    args.errorMessage = nil;
    return args;
    
}


@end
