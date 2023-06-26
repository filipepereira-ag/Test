#import <Foundation/Foundation.h>
#import "OSLog.h"
@protocol OSLoggerEngine
@required

- (void)processLog:(NSString*)message withModule:(NSString*)moduleName withStack:(NSString*)stack withLevel:(OSLogLevel)level withExtra:(NSDictionary*)extra withInstant:(NSString*)instant;
- (void)processLog:(NSString*)instant withMessage:(NSString*)message withSource:(NSString*)source withLevel:(OSLogLevel)level withAttributes:(NSDictionary*)attributes withStack:(NSString*)stack withName:(NSString*)name withTraceId:(NSString*)traceId withSpanId:(NSString*)spanId;

@end
