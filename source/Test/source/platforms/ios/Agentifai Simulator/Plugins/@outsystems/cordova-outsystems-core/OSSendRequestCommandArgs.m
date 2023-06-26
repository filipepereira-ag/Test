#import "OSSendRequestCommandArgs.h"

@implementation OSSendRequestCommandArgs

static NSString* ErrorTemplate = @"Missing/invalid value for parameter %@";

+ (OSSendRequestCommandArgs*) tryGetWithRequestId:(nullable NSString*) requestId
                                              url:(nullable NSString*) url
                                           method:(nullable NSString*) method
                                          timeout:(nullable NSNumber*) timeout
                                          headers:(nullable NSDictionary*) headers
                                             body:(nullable NSString*) body
                                          baseUrl:(nullable NSURL*) baseUrl {
    
    // Prepare required string args to trim spaces and newlines
    NSString* trimmedRequestId = [requestId stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
    url = [url stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
    method = [method stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
    
    OSSendRequestCommandArgs* args = [[OSSendRequestCommandArgs alloc] init];
    
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
    
    if(!url || [url length] == 0) {
        args.isValid = NO;
        args.errorMessage = [NSString stringWithFormat:ErrorTemplate, @"url"];
        return args;
    }
    
    if(!method || [method length] == 0) {
        args.isValid = NO;
        args.errorMessage = [NSString stringWithFormat:ErrorTemplate, @"method"];
        return args;
    }
    
    if(![[method lowercaseString] isEqualToString:@"get"] && ![[method lowercaseString] isEqualToString:@"post"]) {
        args.isValid = NO;
        args.errorMessage = @"HTTP method must be GET or POST";
        return args;
    }
    
    if(!timeout || [timeout doubleValue] < 0) {
        args.isValid = NO;
        args.errorMessage = [NSString stringWithFormat:ErrorTemplate, @"timeout"];
        return args;
    }
    
    for (NSString* headerKey in [headers allKeys]) {
        NSString* key = [headerKey stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
        if([[key lowercaseString] length] == 0) {
            args.isValid = NO;
            args.errorMessage = @"Invalid value for header name";
            return args;
        }
    }
    
    // Process final URL
    NSURL* resolvedUrl = nil;
    if(baseUrl) {
        resolvedUrl = [NSURL URLWithString:url relativeToURL:baseUrl];
    } else {
        resolvedUrl = [NSURL URLWithString:url];
        if( ![resolvedUrl scheme] && ![resolvedUrl host]) {
            args.isValid = NO;
            args.errorMessage = @"Resolved URL is invalid";
            return args;
        }
    }
    
    // Process HTTP Method
    OSHttpMethod processedHttpMethod = OSHttpMethod_INVALID;
    if([[method lowercaseString] isEqualToString:@"get"]) {
        processedHttpMethod = OSHttpMethod_GET;
    }
    
    if([[method lowercaseString] isEqualToString:@"post"]) {
        processedHttpMethod = OSHttpMethod_POST;
    }
    
    // Process body
    NSData* processedBody = nil;
    if(processedHttpMethod == OSHttpMethod_POST) {
        processedBody = [body dataUsingEncoding:NSUTF8StringEncoding];
    }
    
    args.isValid = YES;
    args.errorMessage = nil;
    args.method = processedHttpMethod;
    args.url = resolvedUrl;
    args.timeout = timeout;
    args.headers = headers;
    args.body = processedBody;
    return args;
}

@end
