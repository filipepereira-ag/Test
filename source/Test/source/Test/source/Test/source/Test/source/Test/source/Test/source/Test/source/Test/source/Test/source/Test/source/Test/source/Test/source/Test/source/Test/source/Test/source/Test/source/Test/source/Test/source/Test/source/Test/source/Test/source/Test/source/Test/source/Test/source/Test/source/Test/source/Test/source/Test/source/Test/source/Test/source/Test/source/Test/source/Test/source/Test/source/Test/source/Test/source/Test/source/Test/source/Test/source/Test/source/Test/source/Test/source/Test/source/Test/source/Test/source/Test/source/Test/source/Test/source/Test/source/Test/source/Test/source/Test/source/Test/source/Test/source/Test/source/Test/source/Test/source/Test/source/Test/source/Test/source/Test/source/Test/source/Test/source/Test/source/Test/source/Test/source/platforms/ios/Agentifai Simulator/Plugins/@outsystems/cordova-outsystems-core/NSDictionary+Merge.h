//
//  OSDeviceInfoTests.m
//  OSLoggerLibTests
//
//  Created by João Gonçalves on 18/08/2021.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN
@interface NSDictionary (Merge)

+ (NSDictionary*) mergeDictionary: (NSDictionary*) extra withDeviceInfo: (NSDictionary*) baseDictionary;

@end
NS_ASSUME_NONNULL_END
