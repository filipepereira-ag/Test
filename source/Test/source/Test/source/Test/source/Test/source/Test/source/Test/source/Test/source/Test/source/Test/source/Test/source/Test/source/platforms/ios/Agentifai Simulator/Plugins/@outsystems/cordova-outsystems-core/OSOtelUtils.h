//
//  OSOtelUtils.h
//  OSLoggerLib
//
//  Created by João Gonçalves on 01/09/2021.
//

#import <Foundation/Foundation.h>

#import "OSLog.h"

NS_ASSUME_NONNULL_BEGIN

@interface OSOtelUtils : NSObject

typedef NS_ENUM(NSInteger, OSOTELSeverity) {
    OSOTELSeverityUnspecified = 0,
    OSOTELSeverityTrace  = 1,
    OSOTELSeverityTrace2 = 2,
    OSOTELSeverityTrace3 = 3,
    OSOTELSeverityTrace4 = 4,
    OSOTELSeverityDebug  = 5,
    OSOTELSeverityDebug2 = 6,
    OSOTELSeverityDebug3 = 7,
    OSOTELSeverityDebug4 = 8,
    OSOTELSeverityInfo   = 9,
    OSOTELSeverityInfo2  = 10,
    OSOTELSeverityInfo3  = 11,
    OSOTELSeverityInfo4  = 12,
    OSOTELSeverityWarn   = 13,
    OSOTELSeverityWarn2  = 14,
    OSOTELSeverityWarn3  = 15,
    OSOTELSeverityWarn4  = 16,
    OSOTELSeverityError  = 17,
    OSOTELSeverityError2 = 18,
    OSOTELSeverityError3 = 19,
    OSOTELSeverityError4 = 20,
    OSOTELSeverityFatal  = 21,
    OSOTELSeverityFatal2 = 22,
    OSOTELSeverityFatal3 = 23,
    OSOTELSeverityFatal4 = 24,
};

+ (OSOTELSeverity) severityFromLogLevel: (OSLogLevel) level;

+ (NSString *) severityTextFromLogLevel: (OSLogLevel) level;

/**
 Given a NSDictionary of key/value attributes, returns
 an array containing OTEL like attribute items.
 
 
 Ex:
 
     [{
        "key": "some-attr-key",
        "value": { "stringValue": "string value here"}
     }]

 */
+ (NSArray*) otlpAttributesFromDictionary: (NSDictionary*) attrs;

@end

NS_ASSUME_NONNULL_END
