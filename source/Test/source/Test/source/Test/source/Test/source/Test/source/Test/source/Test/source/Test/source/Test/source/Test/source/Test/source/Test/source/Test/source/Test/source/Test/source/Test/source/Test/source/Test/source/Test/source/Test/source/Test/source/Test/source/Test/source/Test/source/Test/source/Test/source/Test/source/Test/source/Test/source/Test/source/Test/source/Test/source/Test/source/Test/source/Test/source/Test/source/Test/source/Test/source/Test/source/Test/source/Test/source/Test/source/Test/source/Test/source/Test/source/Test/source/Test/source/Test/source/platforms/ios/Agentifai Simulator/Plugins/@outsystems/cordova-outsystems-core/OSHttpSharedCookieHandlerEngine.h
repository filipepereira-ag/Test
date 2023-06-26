#import <Foundation/Foundation.h>
#import "OSHttpUrlSessionEngine.h"
/**
 Provides a way to persist and retrieve cookies from a shared cookie storage
 that works with the UIWebView.
 
 @notes
 Retrieved cookies should only be for matching URLs and not the entire shared cookie storage content.
 */
@interface OSHttpSharedCookieHandlerEngine : NSObject <OSHttpCookieHandler>

@end
