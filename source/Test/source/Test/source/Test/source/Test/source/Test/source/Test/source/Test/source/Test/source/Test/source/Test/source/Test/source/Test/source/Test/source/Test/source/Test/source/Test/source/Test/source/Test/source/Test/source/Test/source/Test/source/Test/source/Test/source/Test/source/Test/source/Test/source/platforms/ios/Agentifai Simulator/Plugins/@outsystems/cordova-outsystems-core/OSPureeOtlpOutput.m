//
//  OSPureeOtlpOutput.m
//  OSLoggerTest
//
//  Created by João Gonçalves on 18/08/2021.
//

#import "OSPureeOtlpOutput.h"

#import "OSOtelUtils.h"
#import "OSApiKeyManager.h"

#import "OSApplicationInfo.h"
#import "OSDeviceInfo.h"
#import "OSHTTPFactory.h"

#import <Foundation/Foundation.h>
#import <PureeOS/Puree.h>


NSErrorDomain const OSPureeOtlpOutputErrorDomain = @"OSPureeOtlpOutputErrorDomain";

NS_ERROR_ENUM(OSPureeOtlpOutputErrorDomain)
{
    OSPureeOtlpOutputErrorUnsuccessfulRequest = -1
};


NSString * const kOSPureeOtlpOutputApplicationUrlKey = @"kApplicationUrl";
NSString * const kOSPureeOtlpOutputHostnameKey = @"kHostname";
NSString * const kOSPureeOtlpOutputApplicationKey = @"outsystems.app.key";
NSString * const kOSPureeOtlpOutputEnvironmentKey = @"outsystems.env.key";
NSString * const kOSPureeOtlpOutputTenantKey = @"outsystems.tenant.key";
NSString * const kOSPureeOtlpOutputUserAgentKey = @"kUserAgent";
NSString * const kOSPureeOtlpOutputApplicationInfoKey = @"kApplicationInfo";
NSString * const kOSPureeOtlpOutputDeviceInfoKey = @"kDeviceInfo";
NSString * const kOSPureeOtlpOutputApiKeyManagerKey = @"kApiKeyManager";

static NSString * const kHTTPMethodType = @"POST";
static NSString * const kHeaderFieldContentType = @"Content-Type";
static NSString * const kContentType = @"application/json";
static NSString * const kApiKey = @"api-key";


@interface OSPureeOtlpOutput ()

@property (nonatomic, assign) NSString* applicationUrl;
@property (nonatomic, assign) NSString* hostname;
@property (nonatomic, assign) NSString* applicationKey;
@property (nonatomic, assign) NSString* environmentKey;
@property (nonatomic, assign) NSString* tenantKey;
@property (nonatomic, assign) NSString* userAgent;
@property (nonatomic, assign) OSApplicationInfo* applicationInfo;
@property (nonatomic, assign) OSDeviceInfo* deviceInfo;
@property (nonatomic, assign) id<OSApiKeyManager> apiKeyManager;

@property (nonatomic, strong) NSURLSession *urlSession;

@end


@implementation OSPureeOtlpOutput

- (void)configure:(NSDictionary<NSString *,id> *)settings {
    // Default settings
    NSDictionary* defaultSettings = @{
        // Flush interval of 15 seconds
        PURBufferedOutputSettingsFlushIntervalKey: @(15),
        // 100 log records per emission
        PURBufferedOutputSettingsLogLimitKey: @(100),
        // Maximum of 2 retries
        PURBufferedOutputSettingsMaxRetryCountKey: @(2),
    };

    [super configure:defaultSettings];


    // Input settings
    _applicationUrl = [settings objectForKey:kOSPureeOtlpOutputApplicationUrlKey];
    _hostname = [settings objectForKey:kOSPureeOtlpOutputHostnameKey];
    _userAgent = [settings objectForKey:kOSPureeOtlpOutputUserAgentKey];
    _applicationInfo = [settings objectForKey:kOSPureeOtlpOutputApplicationInfoKey];
    _deviceInfo = [settings objectForKey:kOSPureeOtlpOutputDeviceInfoKey];
    _applicationKey = [settings objectForKey:kOSPureeOtlpOutputApplicationKey];
    _environmentKey = [settings objectForKey:kOSPureeOtlpOutputEnvironmentKey];
    _tenantKey = [settings objectForKey:kOSPureeOtlpOutputTenantKey];
    _apiKeyManager = [settings objectForKey:kOSPureeOtlpOutputApiKeyManagerKey];
}

// TODO: Add retries and other ServerOutput logic
- (void)writeChunk:(PURBufferedOutputChunk *)chunk completion:(void (^)(BOOL))completion {
    NSDictionary* payload = [self otlpPayloadFromChunk:chunk];

    // Try to send logs to the UOP (and handle authentication)
    // - If no API key is available, a new one will be fetched (this is handled inside apiKeyManager)
    // - Tries to send the logs, using the API key
    // - If sending the logs fails with an authentication error, go back to the top and retry
    // - Only 1 retry is available, and only if an authentication error occurred AND the API key was not renewed
    [self writeLogs:payload attemptLimit:2 completion:completion];
}

- (void)writeLogs:(nonnull NSDictionary *)payload attemptLimit:(NSUInteger)attemptLimit completion:(void (^)(BOOL))completion {

    // Gets a valid API key (will fetch one if required)
    [self.apiKeyManager getApiKeyWithSuccessHandler:^(NSString * _Nonnull apiKey, BOOL renewed) {

        // We have an API key (hopefully still valid), we can send the logs
        [self postLogs:payload
                apiKey:apiKey
        successHandler:^{
            NSLog(@"Logs sent with success");

            // Logs sent!
            completion(YES);

        } failureHandler:^(BOOL authenticationRelated, NSError * _Nonnull error) {
            NSLog(@"Failed to send logs: %@", error);

            if (authenticationRelated) {
                // If the error is authentication related, invalidate the current key
                // This will require a new one to be fetched in the next run of getApiKey
                [self.apiKeyManager invalidateApiKeyWithCompletionHandler:^{

                    // Retry logic
                    // Only 1 retry is available, and only if an authentication error occurred AND the API key was not renewed
                    if (!renewed && attemptLimit > 1) {
                        [self writeLogs:payload attemptLimit:attemptLimit-1 completion:completion];

                    } else {
                        // If a retry will not occur, fail!
                        completion(NO);
                    }
                }];

            } else {
                // If it's not authentication related there are no retries, fail!
                completion(NO);
            }
        }];

    } andFailureHandler:^(NSError * _Nonnull error) {
        // TODO: Should this be sent to UOP?
        NSLog(@"Failed to get an API key: %@", error);

        // Error getting the API key, fail!
        completion(NO);
    }];
}

typedef void (^PostLogsSuccessHandler) (void);
typedef void (^PostLogsFailureHandler) (BOOL authenticationRelated, NSError * __nonnull error);

// Perform the HTTP request that sends the logs
- (void)postLogs:(nonnull NSDictionary *)payload
          apiKey:(nonnull NSString *)apiKey
  successHandler:(nonnull PostLogsSuccessHandler)success
  failureHandler:(nonnull PostLogsFailureHandler)failure {

    NSURL *url = [self buildUrl];

    NSError *serializationError;
    NSData *data = [NSJSONSerialization dataWithJSONObject:payload options:0 error:&serializationError];
    if (serializationError) {
        failure(NO, serializationError);
    }

    NSMutableURLRequest *urlRequest = [NSMutableURLRequest requestWithURL:url];
    [urlRequest setHTTPBody:data];
    [urlRequest addValue:kContentType forHTTPHeaderField:kHeaderFieldContentType];
    [urlRequest addValue:apiKey forHTTPHeaderField:kApiKey];
    [urlRequest setHTTPMethod:kHTTPMethodType];

    NSURLSessionDataTask *taskData = [self.urlSession dataTaskWithRequest:urlRequest completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
        NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *)response;

        if (error) {
            failure(NO, error);

        } else if (httpResponse.statusCode != 200) {
            // Error is authentication related when response code is 401 or 403
            BOOL authenticationRelated = httpResponse.statusCode == 401 || httpResponse.statusCode == 403;

            NSString *description = [NSString stringWithFormat:@"Request failed with error code %ld", httpResponse.statusCode];

            NSError *httpError = [NSError errorWithDomain:OSPureeOtlpOutputErrorDomain
                                                     code:OSPureeOtlpOutputErrorUnsuccessfulRequest
                                                 userInfo:@{ NSLocalizedDescriptionKey: NSLocalizedString(description, nil) }];

            failure(authenticationRelated, httpError);

        } else {
            success();
        }
    }];

    [taskData resume];
}

- (NSDictionary *)otlpPayloadFromChunk:(PURBufferedOutputChunk *)chunk {
    NSArray* logs = [[chunk logs] valueForKey:@"userInfo"];

    NSArray* attributes = [OSOtelUtils otlpAttributesFromDictionary:@{
        @"service.name": @"NativeShell",
        @"service.version": [NSString stringWithFormat:@"%@ (%@)", [_applicationInfo getAppVersion], [_applicationInfo getAppVersionNumber]],
        @"http.user_agent": _userAgent,
        @"device.id": [_deviceInfo getDeviceUUID],
        @"device.model.identifier": [_deviceInfo getDeviceModel],
        @"outsystems.otel.access.type": @(3),
        @"os.name": [_deviceInfo getDevicePlatform],
        @"os.version": [_deviceInfo getDeviceOSVersion],
        kOSPureeOtlpOutputApplicationKey: _applicationKey,
        kOSPureeOtlpOutputEnvironmentKey: _environmentKey,
        kOSPureeOtlpOutputTenantKey: _tenantKey
    }];

    // TODO: Don't use hammered values, if possible
    NSDictionary* instrumentationLibrary = @{
        @"name": @"cordova-outsystems-logger",
        @"version": @"12.7.4"
    };

    return
    @{
        @"resourceLogs": @[
            @{
                @"instrumentationLibraryLogs": @[
                    @{
                        @"instrumentationLibrary": instrumentationLibrary,
                        @"logs": logs
                    }
                ],
                @"resource": @{
                    @"attributes": attributes,
                    @"droppedAttributesCount": @(0)
                }
            }
        ]
    };
}

- (NSURL *)buildUrl {
    NSString *urlStr = [NSString stringWithFormat:@"https://%@/%@/v1/logs", [self hostname], [self applicationUrl]]; // applicationUrl is the app name
    NSURL *url = [NSURL URLWithString:urlStr];
    return url;
}

- (NSURLSession *)urlSession {
    if (!_urlSession) {
        // Create the URLSession on the default configuration
        NSURLSessionConfiguration *defaultSessionConfiguration = [OSHTTPFactory defaultConfiguration];
        defaultSessionConfiguration.HTTPMaximumConnectionsPerHost = 1;
        _urlSession = [NSURLSession sessionWithConfiguration:defaultSessionConfiguration];
    }

    return _urlSession;
}

@end
