#import <Foundation/Foundation.h>

@interface OSAbortRequestCommandArgs : NSObject

@property (strong, nonatomic) NSString* _Nullable requestId;

@property BOOL isValid;
@property (strong, nonatomic) NSString* _Nullable errorMessage;

+ (OSAbortRequestCommandArgs*_Nonnull) tryGetWithRequestId:(NSString*_Nullable) requestId;

@end
