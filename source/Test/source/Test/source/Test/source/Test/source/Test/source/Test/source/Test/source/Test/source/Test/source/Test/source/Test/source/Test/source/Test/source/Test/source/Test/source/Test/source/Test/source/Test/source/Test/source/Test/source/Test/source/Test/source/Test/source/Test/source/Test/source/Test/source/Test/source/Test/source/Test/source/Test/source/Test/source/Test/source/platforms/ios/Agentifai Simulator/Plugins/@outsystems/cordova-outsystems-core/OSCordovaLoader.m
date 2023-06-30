#import "OSCordovaLoader.h"
#import "OSCordovaLoaderImpl.h"
#import "OSLogger.h"
#import "OSCordovaLoaderEngine.h"
#import "OSCordovaLoaderProtocol.h"

static NSString * const kCordovaServiceName = @"OSCordovaLoader";

@interface OSCordovaLoader()

@property (nonatomic, readonly, strong) id <OSLoggerProtocol> logger;
@property (nonatomic, readonly, strong) id <OSCordovaLoaderEngine> cordovaLoader;

@end

@implementation OSCordovaLoader

-(void) pluginInitialize {
    _logger = [OSLogger sharedInstance];
    [_logger logVerbose:@"pluginInitialize: started" withModule:kCordovaServiceName];
    
    _cordovaLoader = [[OSCordovaLoaderImpl alloc] init];
    [_cordovaLoader deploy];
    
    [_logger logVerbose:@"pluginInitialize: finished" withModule:kCordovaServiceName];
}

-(BOOL)shouldOverrideLoadWithRequest:(NSURLRequest*)request navigationType:(UIWebViewNavigationType)navigationType {
    return [_cordovaLoader shouldOverrideLoadWithRequest:request navigationType:navigationType];
}


@end
