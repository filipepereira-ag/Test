#import <Cordova/CDVPlugin.h>

@interface OSProtocolManagerPlugin : CDVPlugin

/**
 
 Get an array os protocol subclasses registered globally that
 handle requests in sessions.
 
 */
+(NSArray*) protocolClasses;

@end
