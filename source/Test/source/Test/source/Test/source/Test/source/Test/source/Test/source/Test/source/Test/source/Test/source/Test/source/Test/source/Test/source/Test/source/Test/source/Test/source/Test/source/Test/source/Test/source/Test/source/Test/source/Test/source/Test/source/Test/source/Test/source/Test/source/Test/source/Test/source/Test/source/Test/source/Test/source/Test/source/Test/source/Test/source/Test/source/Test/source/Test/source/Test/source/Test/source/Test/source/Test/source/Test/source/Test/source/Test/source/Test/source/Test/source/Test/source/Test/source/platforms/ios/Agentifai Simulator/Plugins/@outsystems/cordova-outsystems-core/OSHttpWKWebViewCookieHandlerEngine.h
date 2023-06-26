#import <Foundation/Foundation.h>
#import <WebKit/WebKit.h>
#import "OSHttpUrlSessionEngine.h"

static NSString* const kOSCookieManagerScript =
@"window.OutSystemsNative = window.OutSystemsNative || {};"
@"window.OutSystemsNative.HttpCookieManager = (function() {"
@"    var appOrigin = '%@';"
@"    var oscookie = '';"
@"    return {"
@"        getCookie: function() {"
@"            if (window.origin === appOrigin) {"
@"                return oscookie;"
@"            }"
@"            return '';"
@"        },"
@"        setCookie: function(cookieStringList) {"
@"            if (window.origin === appOrigin) {"
@"                oscookie = cookieStringList[0] || '';"
@"            }"
@"        }"
@"    };"
@"})();"
@"Object.defineProperty(window.OutSystemsNative, 'HttpCookieManager', {"
@"    writable: false,"
@"    enumerable: false,"
@"    configurable: false"
@"});";

@interface OSHttpWKWebViewCookieHandlerEngine : NSObject<OSHttpCookieHandler>

/**
 @abstract Generates a JS snippet that can be used to pass cookies
 from native side to webview
 
 @note The returned JS snippet is intrinsically related with the
 kOSCookieManagerScript script.
 
 @param cookieString a string in the typical format of a valid cookie string as
 obtained when calling "document.cookie" on a webview/browser.
 */
+ (NSString*) generateSetCookieJsScript:(NSString*) cookieString;

- (instancetype)init NS_UNAVAILABLE;

- (instancetype)initWithWkWebView: (WKWebView*) webView
                 andCookieHandler: (id<OSHttpCookieHandler>) handler;



@end
