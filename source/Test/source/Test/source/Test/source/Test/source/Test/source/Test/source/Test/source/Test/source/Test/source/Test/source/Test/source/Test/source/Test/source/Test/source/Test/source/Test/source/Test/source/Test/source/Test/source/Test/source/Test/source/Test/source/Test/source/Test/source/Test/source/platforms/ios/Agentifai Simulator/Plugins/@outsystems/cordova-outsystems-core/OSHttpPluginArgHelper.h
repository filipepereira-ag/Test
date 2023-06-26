#import <Cordova/CDV.h>

@interface OSHttpPluginArgHelper : NSObject

/**
 Helper method that attempts to retrieve the body from its original type
 as provided on the JS (string, number or object) and attempts to
 convert it to NSString to be sent on the request.
 */
+ (NSString*) getBodyFromCommand: (CDVInvokedUrlCommand*) command atIndex: (NSUInteger) index;

@end
