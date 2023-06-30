
#import "OSPureeFilter.h"
#import "OSLog.h"
#import "NSDictionary+Merge.h"
#import "OSLoggerPlugin.h"
#import "OSDeviceInfo.h"
#import "OSOtelUtils.h"
#import "NSDictionary+Merge.h"

NSString* const kOSPureeFilterUseOTLPKey = @"kPlatformVersion";
NSString* const kOSPureeFilterDeviceInfoKey = @"kDeviceInfo";

static NSString* const OSPureeFilterInstant = @"instant";
static NSString* const OSPureeFilterLogType = @"logType";
static NSString* const OSPureeFilterMessage = @"message";
static NSString* const OSPureeFilterModuleName = @"moduleName";
static NSString* const OSPureeStack = @"stack";
static NSString* const OSPureeFilterExtra = @"extra";

@interface OSPureeFilter()

@property (nonatomic, assign) OSDeviceInfo* deviceInfo;
@property (nonatomic, assign) BOOL useOtlp;

@end

/**
 This filter is called by Puree whenever a log is "posted" ([PURLogger postLog:tag]) with
 a tag that has been associated with this filter while setting up PURLogger.
 
 Filters have the ability to prevent log records from being stored (on PURBufferedOutputs) or
 to modify/transform the shape of the log record that is to emitted.
 
 See OSPureeLogger.m for an example on how to register this filter.
 */
@implementation OSPureeFilter

-(void)configure:(NSDictionary<NSString *,id> *)settings {
    [super configure:settings];
    id value = [settings objectForKey:kOSPureeFilterDeviceInfoKey];
    NSAssert(value || [value isKindOfClass: [OSDeviceInfo class]], @"Missing OSDeviceInfo.");
    self.deviceInfo = value;
    
    value = [settings objectForKey:kOSPureeFilterUseOTLPKey];
    NSAssert(value && [value isKindOfClass: [NSNumber class]], @"Invalid \"useOtlp type format.\"");
    self.useOtlp = value ? [value boolValue] : NO;
    
}

- (NSArray<PURLog *>*) logsWithObject:(id)object tag:(NSString *)tag captured:(NSString *)captured {
    NSDate *currentDate = [self.logger currentDate];
    if([object isKindOfClass:[OSLog class]]){
        OSLog *log = object;
        
        NSDictionary* userInfo;
        
        if(self.useOtlp) {
            userInfo = [self getUserInfoForOtlpFormat:log];
        } else {
            userInfo = [self getUserInfoForO11Format:log];
        }
        
        return @[[[PURLog alloc] initWithTag:tag date:currentDate userInfo:userInfo]];
    }
    return @[];
}

/**
 Creates an NSDictionary composed of attributes expected by the O11 legacy log format as ingested by Service Center.
 
 Note: Changes on this structure require caution and a revisit of the output for O11 legacy.
 Additionally, this is the format that is currently persisted on device that contain logs that weren't
 yet sent to the server. This means that a change on this structure and associated output, require
 additional consideration to properly handle those logs persisted on devices.
 */
-(NSDictionary *) getUserInfoForO11Format:(OSLog*) log {
    
    NSString * logType = [OSLog legacyLogTypeFromLogLevel:log.level];
    NSDictionary* extras = log.attributes ? log.attributes : @{};
    switch (log.level) {
        case OSLogLevelFatal:
        case OSLogLevelError:
            extras = [NSDictionary mergeDictionary: extras withDeviceInfo: [self.deviceInfo getDeviceAndAppInfo]];
            break;
        default:
            break;
    }
    
    return @{
        OSPureeFilterInstant: log.instant,
        OSPureeFilterLogType: logType,
        OSPureeFilterMessage: log.message,
        OSPureeFilterModuleName: log.source ? log.source : @"",
        OSPureeStack: log.stack ? log.stack : @"",
        OSPureeFilterExtra: extras
    };
}

-(NSDictionary *) getUserInfoForOtlpFormat:(OSLog*) log {
    NSMutableDictionary* record = [NSMutableDictionary dictionary];
    
    // TODO: What to do with log.source? Will it be available on O12?
    record[@"timeUnixNano"] = log.timeUnixNano;
    record[@"severityNumber"] = @([OSOtelUtils severityFromLogLevel:log.level]);
    record[@"severityText"] = [OSOtelUtils severityTextFromLogLevel:log.level];
    record[@"body"] = @{@"stringValue": log.message};
    // see https://www.w3.org/TR/trace-context/#trace-flags
    record[@"flags"] = @(1);
    record[@"droppedAttributesCount"] = @(0);
    
    if(log.name) {
        record[@"name"] = log.name;
    }
    
    if(log.traceId) {
        record[@"traceId"] = log.traceId;
    }

    if(log.spanId) {
        record[@"spanId"] = log.spanId;
    }
    
    NSMutableDictionary* nativeLogAtributes = [NSMutableDictionary dictionary];
    
    // Default log attributes
    nativeLogAtributes[@"outsystems.otel.access.visibility"] = @(2) ;
    
    // Assumes that runtime is providing error information through
    BOOL isErrorFromNativeSide = log.stack && (log.level == OSLogLevelFatal || log.level == OSLogLevelError);
    if(isErrorFromNativeSide) {
        NSDictionary* exceptionAttributes = @{
            // TODO(jag): Duplicate the information? It's just weird but spec mandates that either message or type is present
            @"exception.message": log.message,
            @"exception.stacktrace": log.stack
        };
        
        [nativeLogAtributes addEntriesFromDictionary:exceptionAttributes];
    }

    NSDictionary* mergedAttributes = [NSDictionary mergeDictionary:nativeLogAtributes withDeviceInfo:log.attributes];
    
    record[@"attributes"] = [OSOtelUtils otlpAttributesFromDictionary:mergedAttributes];
    
    return record;
}

@end
