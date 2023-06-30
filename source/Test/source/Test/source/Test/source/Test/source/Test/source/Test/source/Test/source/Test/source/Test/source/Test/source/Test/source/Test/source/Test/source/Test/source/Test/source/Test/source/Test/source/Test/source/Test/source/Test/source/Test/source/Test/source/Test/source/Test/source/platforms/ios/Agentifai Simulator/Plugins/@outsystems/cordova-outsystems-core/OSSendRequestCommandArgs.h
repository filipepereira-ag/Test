#import <Foundation/Foundation.h>
#import "OSHttpUrlSessionEngine.h"

@interface OSSendRequestCommandArgs : NSObject
@property (strong, nonatomic) NSString* _Nullable requestId;
@property (strong, nonatomic) NSURL* _Nullable url;
@property OSHttpMethod method;
@property (strong, nonatomic) NSNumber* _Nullable timeout;
@property (strong, nonatomic) NSDictionary* _Nullable headers;
@property (strong, nonatomic) NSData* _Nullable body;

@property BOOL isValid;
@property (strong, nonatomic) NSString* _Nullable errorMessage;

/**
 Returns an instance of `OSSendRequestCommandArgs` containing the processed arguments if
 all validations are successful. If one validation isn't succesful, the returning instance
 has `isValid` as NO and `errorMessage` contains more details about the validation error.
 
 @param requestId the requestId that uniquely identifies a request.
 Must be non-null, non-empty and all spaces will be trimmed.
 
 @param url a string containing the URL for the request.
 Can be absolute or relative to baseUrl. Must be non-null and non-empty.
 
 @param method a string specifying the HTTP request method to be used by the request.
 Either `POST` or `GET` (case-insensitive). Must be non-null, non-empty and spaces will be trimmed.
 
 @param timeout a non negative number for the timeout in milliseconds to be applied on the request.
 
 @param headers a dictionary containing the headers for the request.
 Header names must be non-empty and all spaces will be trimmed.
 
 @param body a string representation of the request's body.
 
 @param baseUrl the base URL.
 If provided, the processed `url` is constructed relatively to `baseUrl` if it's a relative URL.
 */
+ (OSSendRequestCommandArgs*_Nonnull) tryGetWithRequestId:(NSString*_Nullable) requestId
                                                      url:(NSString*_Nullable) url
                                                   method:(NSString*_Nullable) method
                                                  timeout:(NSNumber*_Nullable) timeout
                                                  headers:(NSDictionary*_Nullable) headers
                                                     body:(NSString*_Nullable) body
                                                  baseUrl:(NSURL*_Nullable) baseUrl;
@end
