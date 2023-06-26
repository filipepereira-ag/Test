
#import <Foundation/Foundation.h>

@interface OSLog : NSObject

typedef NS_ENUM(NSInteger, OSLogLevel) {
    OSLogLevelTrace = 0,
    OSLogLevelVerbose = 1,
    OSLogLevelDebug = 2,
    OSLogLevelInfo = 3,
    OSLogLevelWarning = 4,
    OSLogLevelError = 5,
    OSLogLevelFatal = 6
};

/**
 Obtain the associated log type from legacy for a given OSLogLevel.
 
 TODO(jag): perhaps move this into an independent category?
 */
+ (nonnull NSString *)legacyLogTypeFromLogLevel:(OSLogLevel)level;

@property (nonnull) NSString* instant;
@property OSLogLevel level;
@property (nonnull) NSString * message;
@property (nonnull) NSString * source;
@property (nullable) NSString * stack;
@property (nullable) NSString * name;
@property (nullable) NSString * traceId;
@property (nullable) NSString * spanId;
@property (nonnull) NSDictionary * attributes;
@property (nonnull) NSNumber * timeUnixNano;

-(nonnull instancetype)initLogWithMessage:(nonnull NSString*)message
                               withSource:(nonnull NSString*)source
                                withLevel:(OSLogLevel)level
                           withAttributes:(nullable NSDictionary*)attributes
                                withStack:(nullable NSString*)stack
                                 withName:(nullable NSString*)name
                              withTraceId:(nullable NSString*)traceId
                               withSpanId:(nullable NSString*)spanId
                               andInstant:(nullable NSString*)instant;
@end
