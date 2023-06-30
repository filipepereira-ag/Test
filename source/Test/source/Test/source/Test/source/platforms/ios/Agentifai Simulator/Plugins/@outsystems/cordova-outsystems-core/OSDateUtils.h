//
//  OSDateUtils.h
//  OSLoggerTest
//
//  Created by João Gonçalves on 31/08/2021.
//

#ifndef OSDateUtils_h
#define OSDateUtils_h

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN
@interface NSDate (OSDateUtils)

/**
 Converts a string of a date in simplified extended ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ)
 to NSDate
 */
+(NSDate *) dateFromISO8061String: (NSString*) dateString;

@end

@interface NSString (OSDateUtils)

/**
 Converts an NSDate to a string in simplified extended ISO 8061 format. Example: 2021-08-31T14:53:54.326Z
 */
+(NSString *)ISO8061StringFromDate:(NSDate *)timestamp;
@end


NS_ASSUME_NONNULL_END
#endif /* OSDateUtils_h */
