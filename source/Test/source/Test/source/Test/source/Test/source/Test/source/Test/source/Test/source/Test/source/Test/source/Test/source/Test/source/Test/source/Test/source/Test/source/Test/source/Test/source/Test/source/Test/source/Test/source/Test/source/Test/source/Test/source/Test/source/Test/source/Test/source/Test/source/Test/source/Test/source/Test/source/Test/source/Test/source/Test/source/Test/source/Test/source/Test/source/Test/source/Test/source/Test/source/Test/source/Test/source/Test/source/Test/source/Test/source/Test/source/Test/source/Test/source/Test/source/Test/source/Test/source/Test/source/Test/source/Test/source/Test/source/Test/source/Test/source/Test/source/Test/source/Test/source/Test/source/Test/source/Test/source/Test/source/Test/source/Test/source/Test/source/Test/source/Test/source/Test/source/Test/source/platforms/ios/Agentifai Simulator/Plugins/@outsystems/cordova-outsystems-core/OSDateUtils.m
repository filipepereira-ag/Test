//
//  OSDateUtils.m
//  OSLoggerLib
//
//  Created by João Gonçalves on 31/08/2021.
//

#import "OSDateUtils.h"

#import <Foundation/Foundation.h>


@implementation NSDate (OSDateUtils)

/**
 Converts a string of a date in simplified extended ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ)
 to NSDate
 */
+(NSDate *) dateFromISO8061String: (NSString*) dateString {
    static dispatch_once_t onceToken;
    static NSDateFormatter* formatter;
    dispatch_once(&onceToken, ^{
        formatter = [[NSDateFormatter alloc] init];
        [formatter setDateFormat:@"yyyy-MM-dd'T'HH:mm:ss.SSS'Z"];
        [formatter setLocale:[[NSLocale alloc] initWithLocaleIdentifier:@"en_US_POSIX"]];
        [formatter setTimeZone:[NSTimeZone timeZoneWithAbbreviation:@"UTC"]];
    });
    return [formatter dateFromString:dateString];
}

@end

@implementation NSString (OSDateUtils)
+(NSString *) ISO8061StringFromDate:(NSDate *)timestamp {
    // There's a noticeable performance hit for multiple executions of this function
    // if each one instantiates a new NSDateFormatter.
    // Running the following "test" code:
    //
    // NSDate* someDate = [NSDate dateWithTimeIntervalSince1970: 1630427401.337];
    // for (int i = 0; i < 100000; i++) {
    //
    //     NSString* isoString = [NSString ISO8061StringFromDate:someDate];
    // }
    //
    // On a MacBook Pro (16-inch, 2019) 2,6 GHz 6-Core Intel Core i7 with 32 GB 2667 MHz DDR4
    // It takes an average of 0.290 seconds to complete.
    // However, without the dispatch_once (single instance) it takes ~3450% more: 10.076 seconds
    static dispatch_once_t onceToken;
    static NSDateFormatter* formatter;
    
    NSString *textTimestamp = nil;
    
    if(timestamp){
        dispatch_once(&onceToken, ^{
            formatter = [[NSDateFormatter alloc] init];
            [formatter setDateFormat:@"yyyy-MM-dd'T'HH:mm:ss.SSS'Z"];
            [formatter setLocale:[[NSLocale alloc] initWithLocaleIdentifier:@"en_US_POSIX"]];
            [formatter setTimeZone:[NSTimeZone timeZoneWithAbbreviation:@"UTC"]];
        });
        textTimestamp = [formatter stringFromDate:timestamp];
    }
    
    return textTimestamp;
}
@end
