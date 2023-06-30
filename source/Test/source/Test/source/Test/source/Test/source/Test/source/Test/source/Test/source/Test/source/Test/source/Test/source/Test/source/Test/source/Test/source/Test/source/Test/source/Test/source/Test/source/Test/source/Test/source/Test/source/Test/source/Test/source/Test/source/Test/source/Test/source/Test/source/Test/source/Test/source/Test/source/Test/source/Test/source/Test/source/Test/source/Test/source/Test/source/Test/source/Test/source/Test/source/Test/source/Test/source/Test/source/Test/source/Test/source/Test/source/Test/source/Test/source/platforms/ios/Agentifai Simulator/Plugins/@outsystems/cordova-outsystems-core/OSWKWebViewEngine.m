#import "OSWKWebViewEngine.h"

#import <objc/message.h>

#import "OSCustomSchemeHandler.h"
#import "OSLoggerProtocol.h"
#import <Cordova/NSDictionary+CordovaPreferences.h>

@interface WKWebView(SynchronousEvaluateJavaScript)
- (NSString *)stringByEvaluatingJavaScriptFromString:(NSString *)script;
@end

@implementation WKWebView(SynchronousEvaluateJavaScript)

- (NSString *)stringByEvaluatingJavaScriptFromString:(NSString *)script
{
    __block NSString *resultString = nil;
    __block BOOL finished = NO;

    [self evaluateJavaScript:script completionHandler:^(id result, NSError *error) {
        if (error == nil) {
            if (result != nil) {
                resultString = [NSString stringWithFormat:@"%@", result];
            }
        } else {
            NSLog(@"evaluateJavaScript error : %@", error.localizedDescription);
        }
        finished = YES;
    }];

    while (!finished) {
        [[NSRunLoop currentRunLoop] runMode:NSDefaultRunLoopMode beforeDate:[NSDate dateWithTimeIntervalSinceNow:0.1]];
    }

    return resultString;
}
@end

NSString *const OS_URL_SCHEME = @"outsystems";

@interface OSWKWebViewEngine()

@property (nonatomic, strong) NSString* defaultHostname;
@property (nonatomic, strong) NSString* defaultURL;
@property (nonatomic, strong) NSString* userAgent;
@property (nonatomic, strong) OSCustomSchemeHandler * handler;

@end

@implementation OSWKWebViewEngine

- (void)pluginInitialize {
    self.handler = [[OSCustomSchemeHandler alloc] init];

    /*
     * [super] is called after handler initialization because it calls createConfigurationFromSettings method.
     * This method depends on handler instance, and therefore can only be called after the initialization of self.handler.
     */
    [super pluginInitialize];
    self.defaultHostname = [self.commandDelegate.settings objectForKey:[@"DefaultHostname" lowercaseString]];
    self.defaultURL = [self.commandDelegate.settings objectForKey:[@"DefaultApplicationURL" lowercaseString]];

    [self setReferrerRelatedProperties];
    
    if(@available(iOS 13.4, *)) {
        // Nothing to do here
    } else {
        if (@available(iOS 12.0, *)) {
            [[NSNotificationCenter defaultCenter]
                addObserver:self
                selector:@selector(keyboardWillHide)
                    name:UIKeyboardWillHideNotification object:nil];
        }
    }
    
    WKWebView* wkWebView = (WKWebView*) self.webView;
    
    /**
     * RNMT-3187 - Custom SplashScreen animation is broken
     * The WKWebView is initialized with a given frame size that is not the full size of the screen.
     * However, it will automatically adjust to the real screen size between the viewWillAppear and
     * the viewDidAppear events which causes an UI glitch when a background color for the app is defined.
     * Setting the WebView transparent will fix the UI glitch and it will hide the famous white screen
     * while it is loading the content.
     **/    
    [self.webView setOpaque:NO];
    
    /**
     * There are two properties where the user-agent can be configured for a given WKWebView instance:
     * a) the applicationNameForUserAgent property of the WKWebViewConfiguration instance
     * b) the customUserAgent property of the WKWebView instance
     **/
    wkWebView.customUserAgent = [self userAgent];
    
    /**
     * RNMT-4524 - Incorrect webview insets
     * The WKWebView occasionally has incorrect insets when opening an app built with MABS 7.
     * This following line of code was present in the version of the WKWebView engine plugin
     * that we used in MABS 6, which is 1.2.0. In the next version, this code was removed
     * because it did not allow developer control over the handling of safe areas.
     * More context: https://github.com/apache/cordova-plugin-wkwebview-engine/pull/107
     * The engine is now inside cordova-ios, and uses the version where the code was already
     * removed, which causes this issue. Adding this code again restores the behaviour that we
     * had in MABS 6, and removes the issues regarding insets.
     **/
    [wkWebView.scrollView setContentInsetAdjustmentBehavior:UIScrollViewContentInsetAdjustmentNever];
}

/**
 * Sets the flag that will control whether the Referer header must be added to the requests and the referrer value to be set in the header.
 * The flag is passed to the app via extensibility configurations.
 * More context: https://outsystemsrd.atlassian.net/browse/RNMT-4762
 */
- (void) setReferrerRelatedProperties {
    NSString *enableRefererHeaderCustomScheme = [self.commandDelegate.settings objectForKey:[@"EnableRefererHeaderCustomScheme" lowercaseString]];
    [self.handler setReferrerHeaderEnabled: [enableRefererHeaderCustomScheme isEqualToString:@"true"]];
    [self.handler setReferrer:self.defaultHostname];
}

- (WKWebViewConfiguration*) createConfigurationFromSettings:(NSDictionary*)settings{
    WKWebViewConfiguration *configuration = [super createConfigurationFromSettings:settings];
    
    if (@available(iOS 11.0, *)) {
        [configuration setURLSchemeHandler:self.handler forURLScheme:OS_URL_SCHEME];
    } else {
        @throw ([NSException exceptionWithName:@"InvalidTarget" reason:@"The target iOS version is not supported" userInfo:nil]);
    }
    
    /**
     * There are two properties where the user-agent can be configured for a given WKWebView instance:
     * a) the applicationNameForUserAgent property of the WKWebViewConfiguration instance
     * b) the customUserAgent property of the WKWebView instance
     **/
    configuration.applicationNameForUserAgent = [self userAgent];
    
    return configuration;
}

- (void)webView:(WKWebView *)webView didReceiveAuthenticationChallenge:(NSURLAuthenticationChallenge *)challenge completionHandler:(void (^)(NSURLSessionAuthChallengeDisposition, NSURLCredential * _Nullable))completionHandler {
    
    CDVViewController* viewController = (CDVViewController*)self.viewController;
    BOOL anyPluginsResponded = NO;
    
    SEL selector = NSSelectorFromString(@"webView:didReceiveAuthenticationChallenge:completionHandler:");
    for (NSString* pluginName in viewController.pluginObjects) {
        CDVPlugin* plugin = [viewController.pluginObjects objectForKey:pluginName];
        
        if (plugin != self && [plugin respondsToSelector:selector]) {
            anyPluginsResponded = YES;
            (((void (*)(id, SEL, id, id, void (^)(NSURLSessionAuthChallengeDisposition disposition, NSURLCredential * _Nullable credential)))objc_msgSend)(plugin, selector, webView, challenge, completionHandler));
            break;
        }
    }
    
    if(!anyPluginsResponded){
        completionHandler(NSURLSessionAuthChallengePerformDefaultHandling, nil);
    }
}

- (void)keyboardWillHide {
    WKWebView *webview = (WKWebView*)self.webView;
    for (UIView* view in webview.subviews) {
        if ([view isKindOfClass:[UIScrollView class]]) {
            UIScrollView *scrollView = (UIScrollView*)view;
            [scrollView setContentOffset:CGPointMake(0, 0)];
        }
    }
}

- (NSString*)userAgent
{
    if (_userAgent != nil) {
        return _userAgent;
    }

    WKWebView* sampleWebView = [[WKWebView alloc] initWithFrame:CGRectZero];
    NSString* originalUserAgent = [sampleWebView stringByEvaluatingJavaScriptFromString:@"navigator.userAgent"];
    NSString* localBaseUserAgent = originalUserAgent;
        
    if ([self.commandDelegate.settings cordovaSettingForKey:@"OverrideUserAgent"] != nil) {
        localBaseUserAgent = [self.commandDelegate.settings cordovaSettingForKey:@"OverrideUserAgent"];
    } else {
        NSString* appendUserAgent = [self.commandDelegate.settings cordovaSettingForKey:@"AppendUserAgent"];
        if (appendUserAgent) {
            _userAgent = [NSString stringWithFormat:@"%@ %@", localBaseUserAgent, appendUserAgent];
        } else {
            _userAgent = localBaseUserAgent;
        }
    }
        
    return _userAgent;
}

@end
