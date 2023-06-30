//
//  OSOtelUtils.m
//  OSLoggerLib
//
//  Created by João Gonçalves on 01/09/2021.
//

#import "OSOtelUtils.h"
#import <objc/runtime.h>


static Class __NSCFBoolean = NULL;

@implementation OSOtelUtils

+ (void)load {
    static dispatch_once_t once;

    dispatch_once(&once, ^{
        // Relying on internal type to differentiate a BOOL from a non BOOL numeric value
        // is far from ideal yet, here we are.
        __NSCFBoolean = objc_getClass("__NSCFBoolean");
    });

}

+ (OSOTELSeverity) severityFromLogLevel: (OSLogLevel) level {
    switch (level) {
        case OSLogLevelTrace:
            return OSOTELSeverityTrace;
        case OSLogLevelVerbose:
            return OSOTELSeverityTrace2;
        case OSLogLevelDebug:
            return OSOTELSeverityDebug;
        case OSLogLevelInfo:
            return OSOTELSeverityInfo;
        case OSLogLevelWarning:
            return OSOTELSeverityWarn;
        case OSLogLevelError:
            return OSOTELSeverityError;
        case OSLogLevelFatal:
            return OSOTELSeverityFatal;
        default:
            break;
    }
}

+ (NSString *) severityTextFromLogLevel: (OSLogLevel) level {
    switch (level) {
        case OSLogLevelTrace:
        case OSLogLevelVerbose:
            return @"Trace";
        case OSLogLevelDebug:
            return @"Debug";
        case OSLogLevelInfo:
            return @"Information";
        case OSLogLevelWarning:
            return @"Warning";
        case OSLogLevelError:
            return @"Error";
        case OSLogLevelFatal:
            return @"Critical";
        default:
            break;
    }
}

+ (NSArray*) otlpAttributesFromDictionary: (NSDictionary*) attrs {
    NSMutableArray* attributes = [[NSMutableArray alloc] init];

    for (NSString* key in attrs) {
        id value = attrs[key];

        // String values
        if([value isKindOfClass:[NSString class]]) {
            [attributes addObject: @{
                @"key": key,
                @"value": @{@"stringValue": value}
            }];
        }
        // Boolean values
        // We need to first check if it's __NSCFBoolean before checking if it's NSNumber!
        else if([value class] == __NSCFBoolean) {
            [attributes addObject: @{
                @"key": key,
                @"value": @{@"boolValue": value}
            }];
        }
        // Numeric values
        else if([value isKindOfClass: [NSNumber class]]) {
            double remainder = fmod([value doubleValue], 1.0);

            // We're effectively turning values such as 1.0 into intValue
            // which may pose as a problem if the consumer of the date
            // differentiates 1 (integer) from 1.0 (decimal)
            if(remainder == 0) {
                [attributes addObject: @{
                    @"key": key,
                    @"value": @{@"intValue": @([value intValue])}
                }];
            } else {
                [attributes addObject: @{
                    @"key": key,
                    @"value": @{@"doubleValue": @([value doubleValue])}
                }];
            }
        }
    }

    return attributes;
}
@end
