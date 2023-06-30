#import "CDVWebViewEngine+OutSystems.h"

@interface OSWKWebViewEngine : CDVWebViewEngine

- (WKWebViewConfiguration*) createConfigurationFromSettings:(NSDictionary*)settings;

@end
