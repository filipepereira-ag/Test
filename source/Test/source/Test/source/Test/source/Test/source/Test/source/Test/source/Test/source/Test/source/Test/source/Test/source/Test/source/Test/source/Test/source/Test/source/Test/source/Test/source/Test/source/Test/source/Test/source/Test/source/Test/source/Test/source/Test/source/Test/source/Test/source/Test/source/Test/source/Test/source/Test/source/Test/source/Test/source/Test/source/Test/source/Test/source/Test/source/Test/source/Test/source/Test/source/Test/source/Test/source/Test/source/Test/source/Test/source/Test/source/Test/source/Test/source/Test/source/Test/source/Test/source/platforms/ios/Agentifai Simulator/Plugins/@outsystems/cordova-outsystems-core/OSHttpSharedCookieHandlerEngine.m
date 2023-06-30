#import "OSHttpSharedCookieHandlerEngine.h"

@implementation OSHttpSharedCookieHandlerEngine

- (void) getPersistedCookiesForUrl:(NSURL*) url completionHandler:(OSHttpCookiesGetCompletionHandler) callback {
    if(url) {
        NSArray<NSHTTPCookie*>* cookies = [[NSHTTPCookieStorage sharedHTTPCookieStorage] cookiesForURL:url];
        NSDictionary* headers = [NSHTTPCookie requestHeaderFieldsWithCookies: cookies];
        callback(headers);
    } else {
        callback([NSDictionary dictionary]);
    }
}

- (void) persistCookiesFromResponseHeaders:(NSDictionary*) headers forUrl: (NSURL*) url completionHandler:(OSHttpCookiesPersistEnded) callback {
    NSArray* httpCookies = [NSHTTPCookie cookiesWithResponseHeaderFields:headers forURL:url];
    if([httpCookies count]) {
        [[NSHTTPCookieStorage sharedHTTPCookieStorage] setCookies:httpCookies forURL:url mainDocumentURL:nil];
    }
    callback();
}

@end
