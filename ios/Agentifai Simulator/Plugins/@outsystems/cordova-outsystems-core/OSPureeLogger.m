#import "OSPureeLogger.h"

#import <PureeOS/PURLoggerConfiguration.h>
#import <PureeOS/PURFilterSetting.h>
#import "OSPureeConsoleOutput.h"
#import "OSPureeServerOutput.h"
#import "OSPureeFilter.h"
#import "OSLog.h"
#import "OSPureeOtlpOutput.h"
#import "OSApiKeyManager.h"
#import "OSOTLPApiKeyManager.h"


static NSString* const kLoggerPureeTag = @"oslogger.**";
static NSString* const kServerLoggerPureeTagPrefix = @"oslogger.server.";

static int const kBufferedFlushInterval = 5;
static int const kBufferedLogLimit = 10;
static int const kBufferedMaxRetryCount = 0;

@interface OSPureeLogger ()

@property (nonatomic, retain) PURLogger *pureeLogger;
@property (nonatomic, retain) NSString *serverTag;

@end

@implementation OSPureeLogger

- (instancetype)initWithHostname:(NSString *)hostname
                  applicationUrl:(NSString *)applicationUrl
                  applicationKey:(NSString *)applicationKey
                  environmentKey:(NSString *)environmentKey
                       tenantKey:(NSString *)tenantKey
                       userAgent:(NSString *)userAgent
                 applicationInfo:(id <OSApplicationInfoProtocol>)applicationInfo
                      deviceInfo:(OSDeviceInfo *)deviceInfo
{
    return [self initWithHostname:hostname
                   applicationUrl:applicationUrl
                   applicationKey:applicationKey
                   environmentKey:environmentKey
                        tenantKey:tenantKey
                        userAgent:userAgent
                  applicationInfo:applicationInfo
                       deviceInfo:deviceInfo
                        purLogger:nil];
}

- (instancetype)initWithHostname:(NSString *)hostname
                  applicationUrl:(NSString *)applicationUrl
                  applicationKey:(NSString *)applicationKey
                  environmentKey:(NSString *)environmentKey
                       tenantKey:(NSString *)tenantKey
                       userAgent:(NSString *)userAgent
                 applicationInfo:(id <OSApplicationInfoProtocol>)applicationInfo
                      deviceInfo:(OSDeviceInfo *)deviceInfo
                       purLogger:(PURLogger *)purLogger {
    if (self = [super init]) {
        
        if (!hostname || !applicationUrl || !applicationInfo || !deviceInfo) {
            return self;
        }
        
        self.serverTag = [OSPureeLogger calculateServerTag:hostname andApplicationUrl:applicationUrl];
        self.pureeLogger = purLogger;
        
        if (!purLogger) {
            PURLoggerConfiguration *configuration = [self defaultConfigurationWithHostname:hostname
                                                                             applicationUrl:applicationUrl
                                                                             applicationKey:applicationKey
                                                                             environmentKey:environmentKey
                                                                                  tenantKey:tenantKey
                                                                                  userAgent:userAgent
                                                                            applicationInfo:applicationInfo
                                                                                 deviceInfo:deviceInfo];
            
            self.pureeLogger = [[PURLogger alloc] initWithConfiguration:configuration];
        }
    }
    
    return self;
}

- (PURLoggerConfiguration *)defaultConfigurationWithHostname:(NSString *)hostname
                                              applicationUrl:(NSString *)applicationUrl
                                              applicationKey:(NSString *)applicationKey
                                              environmentKey:(NSString *)environmentKey
                                                   tenantKey:(NSString *)tenantKey
                                                   userAgent:(NSString *)userAgent
                                             applicationInfo:(id <OSApplicationInfoProtocol>)applicationInfo
                                                  deviceInfo:(OSDeviceInfo *)deviceInfo
{
    
    BOOL useOtlpOutput = applicationKey != nil && environmentKey != nil && tenantKey != nil;
    PURLoggerConfiguration *configuration = [PURLoggerConfiguration defaultConfiguration];
    configuration.filterSettings = @[
        [[PURFilterSetting alloc] initWithFilter:[OSPureeFilter class]
                                      tagPattern:kLoggerPureeTag
                                        settings:@{
                                            kOSPureeFilterUseOTLPKey: @(useOtlpOutput),
                                            kOSPureeFilterDeviceInfoKey: deviceInfo
                                        }]];
    
    NSMutableArray* outputSettings = [NSMutableArray arrayWithObjects:
                                    [[PUROutputSetting alloc] initWithOutput: [OSPureeConsoleOutput class]
                                                                  tagPattern: kLoggerPureeTag]
                                    , nil];
    
    // If not using OTLP, configure with legacy output
    if(!useOtlpOutput) {
        [outputSettings addObject:
         [[PUROutputSetting alloc] initWithOutput: [OSPureeServerOutput class]
                                       tagPattern: self.serverTag
                                         settings: @{
                                             PURBufferedOutputSettingsFlushIntervalKey: [NSNumber numberWithInt:kBufferedFlushInterval],
                                             PURBufferedOutputSettingsLogLimitKey: [NSNumber numberWithInt:kBufferedLogLimit],
                                             PURBufferedOutputSettingsMaxRetryCountKey: [NSNumber numberWithInt:kBufferedMaxRetryCount],
                                             PURBufferedOutputSettingsHostname:hostname,
                                             PURBufferedOutputSettingsApplicationUrl:applicationUrl,
                                             kOSPureeServerOutputDeviceInfoKey:deviceInfo
                                         }]];
    } else {
        id<OSApiKeyManager> apiKeyManager = [OSOTLPApiKeyManager managerWithHostname:hostname
                                                                   andApplicationUrl:applicationUrl];
        
        [outputSettings addObject:
         [[PUROutputSetting alloc] initWithOutput: [OSPureeOtlpOutput class]
                                       tagPattern: self.serverTag
                                         settings: @{
                                             kOSPureeOtlpOutputApplicationUrlKey: applicationUrl,
                                             kOSPureeOtlpOutputHostnameKey: hostname,
                                             kOSPureeOtlpOutputApplicationKey: applicationKey,
                                             kOSPureeOtlpOutputEnvironmentKey: environmentKey,
                                             kOSPureeOtlpOutputTenantKey: tenantKey,
                                             kOSPureeOtlpOutputUserAgentKey: userAgent,
                                             kOSPureeOtlpOutputApplicationInfoKey: applicationInfo,
                                             kOSPureeOtlpOutputDeviceInfoKey: deviceInfo,
                                             kOSPureeOtlpOutputApiKeyManagerKey: apiKeyManager
                                         }]];
    }
    
    configuration.outputSettings = outputSettings;
    
    return configuration;
}

- (void)processLog:(NSString*)message
        withModule:(NSString*)moduleName
         withStack:(NSString*)stack
         withLevel:(OSLogLevel)level
         withExtra:(NSDictionary*)extra
       withInstant:(NSString *)instant
{
    [self processLog:instant
         withMessage:message
          withSource:moduleName
           withLevel:level
      withAttributes:extra
           withStack:stack
            withName:nil
         withTraceId:nil
          withSpanId:nil];
}

- (void)processLog:(NSString*)instant
       withMessage:(NSString*)message
        withSource:(NSString*)source
         withLevel:(OSLogLevel)level
    withAttributes:(NSDictionary*) attributes
         withStack:(NSString*)stack
          withName:(NSString*)name
       withTraceId:(NSString*)traceId
        withSpanId:(NSString*)spanId
{
    
    NSString *tag;
    switch (level) {
        case OSLogLevelFatal:
        case OSLogLevelError:
        case OSLogLevelWarning:
        case OSLogLevelInfo:
            tag = self.serverTag;
            break;
        case OSLogLevelDebug:
        case OSLogLevelVerbose:
        case OSLogLevelTrace:
        default:
            tag = kLoggerPureeTag;
            break;
    }
    
    
    OSLog *log = [[OSLog alloc] initLogWithMessage:message withSource:source withLevel:level withAttributes:attributes withStack:stack withName:name withTraceId:traceId
                                        withSpanId:spanId andInstant:instant];
    
    [_pureeLogger postLog:log tag:tag];
}


+ (NSString *)calculateServerTag:(NSString*) hostname andApplicationUrl:(NSString*) applicationUrl {
    return [kServerLoggerPureeTagPrefix stringByAppendingString:[OSPureeLogger keyForHostname:hostname andApplication:applicationUrl]];
}

+ (NSString*)keyForHostname: (NSString*)hostname andApplication: (NSString*)application {
    NSString *appKey = [NSString stringWithFormat:@"%@/%@", hostname, application];
    return [NSString stringWithFormat:@"%lu", (unsigned long)[appKey hash]];
}

@end
