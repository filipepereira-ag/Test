
#import "OSLog.h"
#import "OSDateUtils.h"

@implementation OSLog

+ (NSString *)legacyLogTypeFromLogLevel:(OSLogLevel)level {
    NSString *logType;
    switch (level) {
        case OSLogLevelFatal:
        case OSLogLevelError:
            logType = @"error";
            break;
        default:
            logType = @"general";
            break;
    }
    return logType;
}


-(instancetype)initLogWithMessage:(NSString *)message
                       withSource:(NSString *)source
                        withLevel:(OSLogLevel)level
                   withAttributes:(NSDictionary *)attributes
                        withStack:(NSString *)stack
                         withName:(NSString *)name
                      withTraceId:(NSString *)traceId
                       withSpanId:(NSString *)spanId
                       andInstant:(NSString *)instant
{
    if(self = [super init]){
        _level = level;
        _message = message;
        _source = source;
        _attributes = attributes ? attributes : @{};
        _stack = stack;
        _name = name;
        _traceId = traceId;
        _spanId = spanId;
        _instant = instant ? instant : [NSString ISO8061StringFromDate:[NSDate date]];
        NSDate* dateTime = [NSDate dateFromISO8061String:_instant];
        // Convert from seconds to nanoseconds. We can't make the calculations
        // in "double land" otherwise float arithmetics kicks in and precision is lost.
        // So we move into "long land" by casting it and then convert to nanoseconds in long.
        //
        // NSTimeInterval is a type alias for double and timeIntervalSince1970 gives us the
        // time interval since 1970 in decimal number.
        // Ex: 1630427401.3369999
        //     _________  _______
        //         |           |
        //      seconds    remaining fractional time
        //
        // By multiplying with 1000, we get 1630427401337 in double, so we cast it to long (interval)
        // and from there we can safely convert to nanoseconds (* 1000 * 1000) which gives us the
        // ellapsed time since epoch in nanoseconds in long, avoiding scientific notation
        // from double (1.6304274013369999E+18)
        long interval = [dateTime timeIntervalSince1970] * 1000;
        long nano = interval * 1000 * 1000;
        _timeUnixNano = [NSNumber numberWithLong: nano];
    }
    
    return self;
}
@end
