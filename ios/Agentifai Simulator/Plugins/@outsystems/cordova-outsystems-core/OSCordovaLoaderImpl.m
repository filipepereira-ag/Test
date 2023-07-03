#import "OSCordovaLoaderImpl.h"
#import "OSCordovaLoaderProtocol.h"
#import "OSMimeTypesHelper.h"
#import "OSNativeCache.h"
#import "OSLogger.h"

#pragma mark - OSCordovaLoader

@interface OSCordovaLoaderImpl()

@property (nonatomic, readonly, strong) id <OSLoggerProtocol> logger;

@end

@implementation OSCordovaLoaderImpl

- (void)deploy {
    [NSURLProtocol registerClass:[OSCordovaLoaderURLProtocol class]];
}

- (BOOL)shouldOverrideLoadWithRequest:(NSURLRequest*)request navigationType:(UIWebViewNavigationType)navigationType {
    
    NSString *external = @"external:";
    BOOL shouldOverride = YES;
    
    if ([request.URL.absoluteString hasPrefix:external])
    {
        NSURL *url = [NSURL URLWithString:[request.URL.absoluteString substringFromIndex:external.length]];
        UIApplication *application = [UIApplication sharedApplication];
        
#ifdef __IPHONE_10_0
            [application openURL:url options:@{} completionHandler:nil];
#else
            // Deprecated in iOS 10
            [application openURL:url];
#endif
        
        shouldOverride = NO;
    }
    
    return shouldOverride;
}

@end
