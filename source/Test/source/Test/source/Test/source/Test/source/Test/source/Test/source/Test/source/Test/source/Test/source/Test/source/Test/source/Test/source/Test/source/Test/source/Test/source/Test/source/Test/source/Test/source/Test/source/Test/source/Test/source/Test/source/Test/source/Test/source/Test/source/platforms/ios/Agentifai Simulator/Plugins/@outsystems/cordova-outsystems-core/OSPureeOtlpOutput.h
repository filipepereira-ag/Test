//
//  OSPureeOtlpOutput.h
//  OSLoggerTest
//
//  Created by João Gonçalves on 18/08/2021.
//

#import <PureeOS/Puree.h>

extern NSString * const kOSPureeOtlpOutputApplicationUrlKey;
extern NSString * const kOSPureeOtlpOutputHostnameKey;
extern NSString * const kOSPureeOtlpOutputApplicationKey;
extern NSString * const kOSPureeOtlpOutputEnvironmentKey;
extern NSString * const kOSPureeOtlpOutputTenantKey;
extern NSString * const kOSPureeOtlpOutputUserAgentKey;
extern NSString * const kOSPureeOtlpOutputApplicationInfoKey;
extern NSString * const kOSPureeOtlpOutputDeviceInfoKey;
extern NSString * const kOSPureeOtlpOutputApiKeyManagerKey;

@interface OSPureeOtlpOutput : PURBufferedOutput

@end
