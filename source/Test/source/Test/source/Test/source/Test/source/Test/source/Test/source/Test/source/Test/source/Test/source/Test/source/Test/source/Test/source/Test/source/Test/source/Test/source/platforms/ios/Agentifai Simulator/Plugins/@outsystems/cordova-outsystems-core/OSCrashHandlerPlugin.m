
#import "OSCrashHandlerPlugin.h"
#import "OSCrashHandler.h"
#import "OSLogger.h"

static NSString * const kCordovaServiceName = @"OSCrashHandler";

@interface OSCrashHandlerPlugin()

@property (nonatomic, readonly, strong) id <OSLoggerProtocol> logger;

@end

@implementation OSCrashHandlerPlugin

-(void) pluginInitialize {
    _logger = [OSLogger sharedInstance];
    [_logger logVerbose:@"pluginInitialize: started" withModule:kCordovaServiceName];
    
    id <OSCrashHandlerEngine> crashHandler = [[OSCrashHandler alloc] init];
    [crashHandler deploy];
    
    [_logger logVerbose:@"pluginInitialize: finished" withModule:kCordovaServiceName];
}

@end
