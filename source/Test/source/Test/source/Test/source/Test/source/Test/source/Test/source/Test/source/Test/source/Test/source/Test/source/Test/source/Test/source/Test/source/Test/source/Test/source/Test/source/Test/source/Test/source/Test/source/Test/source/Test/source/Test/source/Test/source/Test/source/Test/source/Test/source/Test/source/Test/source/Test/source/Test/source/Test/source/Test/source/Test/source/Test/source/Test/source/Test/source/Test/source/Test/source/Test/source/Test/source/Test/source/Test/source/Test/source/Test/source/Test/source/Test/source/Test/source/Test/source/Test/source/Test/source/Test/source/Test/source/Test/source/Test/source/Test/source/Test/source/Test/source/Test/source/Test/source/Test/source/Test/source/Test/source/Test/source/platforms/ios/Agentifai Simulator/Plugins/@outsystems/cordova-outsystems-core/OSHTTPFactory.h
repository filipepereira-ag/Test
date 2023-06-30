#import <Foundation/Foundation.h>

@interface OSHTTPFactory : NSObject

+(NSURLSessionConfiguration*) defaultConfiguration;

+(NSURLSessionConfiguration*) ephemeralConfiguration;

+(void)setUserAgent:(NSString*)newUserAgent;

+(void)setDeviceUUID:(NSString*)newDeviceUUID;

@end
