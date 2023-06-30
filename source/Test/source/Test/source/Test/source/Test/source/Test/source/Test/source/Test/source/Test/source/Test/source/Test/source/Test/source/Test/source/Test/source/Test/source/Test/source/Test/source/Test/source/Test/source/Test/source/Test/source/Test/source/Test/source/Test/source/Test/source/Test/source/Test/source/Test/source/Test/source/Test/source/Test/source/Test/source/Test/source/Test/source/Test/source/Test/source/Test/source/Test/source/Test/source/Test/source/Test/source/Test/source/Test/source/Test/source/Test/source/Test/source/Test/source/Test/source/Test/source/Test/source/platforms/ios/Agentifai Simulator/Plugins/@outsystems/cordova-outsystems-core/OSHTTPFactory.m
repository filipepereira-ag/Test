#import "OSHTTPFactory.h"
#import "OSProtocolManagerPlugin.h"

@implementation OSHTTPFactory

static NSString* sUserAgent = nil;
static NSString* sDeviceUUID = @"n/a";

static void setProtocols(NSURLSessionConfiguration *tmp) {
    NSArray* registeredProtocols = [OSProtocolManagerPlugin protocolClasses];
    [tmp setProtocolClasses:registeredProtocols];
}

+(NSURLSessionConfiguration*) defaultConfiguration {
    NSURLSessionConfiguration* tmp = [NSURLSessionConfiguration defaultSessionConfiguration];
    [tmp setHTTPAdditionalHeaders: [self defaultHttpHeaders]];
    setProtocols(tmp);
    return tmp;
}

+(NSURLSessionConfiguration*) ephemeralConfiguration{
    NSURLSessionConfiguration* tmp = [NSURLSessionConfiguration ephemeralSessionConfiguration];
    [tmp setHTTPAdditionalHeaders: [self defaultHttpHeaders]];
    setProtocols(tmp);
    return tmp;
}

+(NSDictionary*) defaultHttpHeaders {
    NSDictionary *defaultHeaders = @{@"User-Agent": sUserAgent, @"outsystems-device-uuid": sDeviceUUID};
    return defaultHeaders;
}

+ (void)setUserAgent:(NSString *)newUserAgent{
    @synchronized (self) {
        if (sUserAgent != newUserAgent) {
            sUserAgent = [newUserAgent copy];
        }
    }
}

+ (void)setDeviceUUID:(NSString *)newDeviceUUID{
    @synchronized (self) {
        if (sDeviceUUID != newDeviceUUID) {
            sDeviceUUID = [newDeviceUUID copy];
        }
    }
}

@end
