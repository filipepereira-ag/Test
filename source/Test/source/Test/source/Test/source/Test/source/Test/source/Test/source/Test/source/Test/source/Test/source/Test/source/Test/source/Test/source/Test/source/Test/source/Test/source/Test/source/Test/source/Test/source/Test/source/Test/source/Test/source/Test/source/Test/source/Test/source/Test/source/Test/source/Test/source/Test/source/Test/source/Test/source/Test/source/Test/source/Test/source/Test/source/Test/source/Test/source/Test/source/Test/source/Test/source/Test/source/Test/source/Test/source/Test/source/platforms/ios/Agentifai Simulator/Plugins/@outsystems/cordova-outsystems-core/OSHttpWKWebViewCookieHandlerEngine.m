#import "OSHttpWKWebViewCookieHandlerEngine.h"
#import "OSHttpSharedCookieHandlerEngine.h"

@interface OSHttpWKWebViewCookieHandlerEngine ()

@property(strong, nonatomic) WKWebView* webView;
@property(strong, nonatomic) id<OSHttpCookieHandler> uiWebViewHandler;

@end

@implementation OSHttpWKWebViewCookieHandlerEngine

- (instancetype)initWithWkWebView:(WKWebView*) webView andCookieHandler: (id<OSHttpCookieHandler>) handler{
    self = [super init];
    if (self) {
        _webView = webView;
        _uiWebViewHandler = handler;
    }
    return self;
}

/**
 
 */
+ (NSString*) generateSetCookieJsScript:(NSString*) cookieString {
    // Reasoning behind autorelease can be seen on https://github.com/apache/cordova-ios/pull/351
    // as this was adapted from cordova-ios
    @autoreleasepool {
        NSString* value = nil;
        if([cookieString length] == 0) {
            value = @"[\"\"]";
        } else {
            NSArray* cookieStringWrappedInArray = [NSArray arrayWithObject:cookieString];
            NSError* error = nil;
            NSData* jsonData = [NSJSONSerialization dataWithJSONObject:cookieStringWrappedInArray
                                                               options:0
                                                                 error:&error];
            
            if (error != nil) {
                // jog: what should really happen if we fail to construct the array?
                NSLog(@"NSArray JSONString error: %@", [error localizedDescription]);
                value = @"[\"\"]";
            } else {
                value =  [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
            }
            
        }
        return [NSString stringWithFormat:@"OutSystemsNative.HttpCookieManager.setCookie(%@);", value];
    }
}

- (void)getPersistedCookiesForUrl:(NSURL *)url completionHandler:(OSHttpCookiesGetCompletionHandler)callback {
    [self.uiWebViewHandler getPersistedCookiesForUrl:url completionHandler:^(NSDictionary *headerCookie) {
        callback(headerCookie);
    }];
}

- (void)syncCookiesToJs:(NSDictionary *) headerCookie forUrl:(NSURL *) url completionHandler:(OSHttpCookiesPersistEnded) callback {
    if([[[self.webView URL] host] isEqualToString:[url host]]) {
        NSString* documentCookieJS = [OSHttpWKWebViewCookieHandlerEngine generateSetCookieJsScript: [headerCookie objectForKey:@"Cookie"]];
        [self.webView evaluateJavaScript:documentCookieJS completionHandler:^(id _Nullable res, NSError * _Nullable error) {
            callback();
        }];
    } else {
        callback();
    }
}

- (void)persistCookiesFromResponseHeaders:(NSDictionary *)headers forUrl:(NSURL *)url completionHandler:(OSHttpCookiesPersistEnded)callback {
    [self.uiWebViewHandler persistCookiesFromResponseHeaders:headers forUrl:url completionHandler:^{
        [self.uiWebViewHandler getPersistedCookiesForUrl:url completionHandler:^(NSDictionary *headerCookie) {
            if ([NSThread isMainThread]) {
                [self syncCookiesToJs:headerCookie forUrl:url completionHandler:callback];
            } else {
                dispatch_sync(dispatch_get_main_queue(), ^{
                    [self syncCookiesToJs:headerCookie forUrl:url completionHandler:callback];
                });
            }
        }];
    }];
}

@end
