#import "OSHttp.h"
#import "OSSendRequestCommandArgs.h"
#import "OSAbortRequestCommandArgs.h"
#import "OSHttpResultUtil.h"
#import "OSHttpHeadersUtils.h"
#import "OSLoggerProtocol.h"

@interface OSHttp()

@property (strong, nonatomic) id<OSHttpRequesterProtocol> requester;
@property (nonatomic, strong) id <OSLoggerProtocol> logger;

@end

@implementation OSHttp

- (instancetype)initWithRequester:(id<OSHttpRequesterProtocol>) requester andLogger:(id<OSLoggerProtocol>) logger
{
    self = [super init];
    if (self) {
        _requester = requester;
        _logger = logger;
    }
    return self;
}

- (void)onReset {
    // Explicitely abort all ongoing requests on page reloads
    [self.requester abortAllRequestsWithCompletionHandler:^{
        // noop
    }];
}

- (void)sendRequestWithRequestId:(NSString*) requestId
                             url:(NSString*) url
                          method:(NSString*) method
                         headers:(NSDictionary*) headers
                         timeout:(NSNumber*) timeout
                            body:(NSString*) body
                         baseUrl:(NSURL*) baseURL
              responseBodyIsText:(BOOL) responseBodyIsText
                  successHandler:(OSHttpSuccessHandler) successHandler
                    errorHandler:(OSHttpErrorHandler) errorHandler {
    
    OSSendRequestCommandArgs* args = [OSSendRequestCommandArgs tryGetWithRequestId:requestId
                                                                               url:url
                                                                            method:method
                                                                           timeout:timeout
                                                                           headers:headers
                                                                              body:body
                                                                           baseUrl:baseURL];
    
    if(!args.isValid) {
        NSDictionary* errorPayload = [OSHttpResultUtil errorPayloadForRequestId:args.requestId
                                                                      errorCode:OSHttpErrorCode_ValidationError
                                                                    erroMessage:args.errorMessage];
        
        return errorHandler(errorPayload);
    }
    
    [self.requester sendRequest:args.requestId
                            url:args.url
                         method:args.method
                    withHeaders:args.headers
                    withTimeout:args.timeout
                       withBody:args.body
                    andCallback:^(NSString* requestId, NSURL* requestUrl, NSData* _Nullable data, NSHTTPURLResponse* _Nullable response, NSError* _Nullable error) {
                        if(error) {
                            
                            if([error code] == NSURLErrorCancelled) {
                                // If the request has been aborted it was either because
                                // it was explicitely aborted by calling abortRequest
                                // or because there was a page reload which caused the plugin to
                                // reset and consequently, aborting all ongoing requests.
                                return;
                            }
                            
                            OSHttpErrorCode errorCode = [error code] == NSURLErrorTimedOut ? OSHttpErrorCode_TimeoutError : OSHttpErrorCode_UnknownError;
                            
                            // Only logs error to SC if errorCode is OSHttpErrorCode_UnknownError to avoid flooding the console.
                            if(errorCode == OSHttpErrorCode_UnknownError){
                                [self.logger logError:[NSString stringWithFormat:@"Failed to send request due to unexpected error: %@", [error localizedDescription]] withModule:@"OSHttp"];
                            }
                                
                            NSDictionary* errorPayload = [OSHttpResultUtil errorPayloadForRequestId:args.requestId
                                                                                          errorCode:errorCode
                                                                                        erroMessage:[error localizedDescription]];
                            return errorHandler(errorPayload);
                        }
                        
                        NSString* responseBody = data ? (
                            responseBodyIsText ?
                                [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding] :
                                [data base64EncodedStringWithOptions:0]
                            ) :
                            nil;
                        
                        NSDictionary* metadata = @{@"responseHeaders": [OSHttpHeadersUtils processResponseHeaders:[response allHeaderFields]],
                                                   @"responseUrl": [[response URL] absoluteString],
                                                   @"status": [NSNumber numberWithLong:[response statusCode]],
                                                   @"statusText": [NSHTTPURLResponse localizedStringForStatusCode:[response statusCode]]
                                                   };
                        
                        NSDictionary* dataResult = @{@"metadata": metadata,
                                                     @"chunkData": responseBody ? responseBody : [NSNull null],
                                                     @"order": [NSNumber numberWithInt:0],
                                                     @"last": [NSNumber numberWithBool:YES]
                                                     };
                        
                        NSDictionary* payload = [OSHttpResultUtil successPayloadForRequestId:requestId data:dataResult];
                        return successHandler(payload);
                    }];
}

- (void)abortRequestWithRequestId:(NSString*) requestId
                   successHandler:(OSHttpSuccessHandler) successHandler
                     errorHandler:(OSHttpErrorHandler) errorHandler {
    
    OSAbortRequestCommandArgs* args = [OSAbortRequestCommandArgs tryGetWithRequestId:requestId];
    
    if(!args.isValid) {
        NSDictionary* errorPayload = [OSHttpResultUtil errorPayloadForRequestId:args.requestId
                                                                      errorCode:OSHttpErrorCode_ValidationError
                                                                    erroMessage:args.errorMessage];
        return errorHandler(errorPayload);
    }
    
    [self.requester abortRequest:args.requestId completionHandler:^{
        NSDictionary* payload = [OSHttpResultUtil successPayloadForRequestId:requestId data:nil];
        return successHandler(payload);
    }];
}

@end
