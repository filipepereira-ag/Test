#import <Foundation/Foundation.h>

@interface OSHttpHeadersUtils : NSObject

/**
 Processes the given response headers and ensures that
 all keys are lowercase, as is expected by the platform and
 additionally, ensures that no set-cookie or set-cookie2 headers
 are present.
 */
+ (NSDictionary*) processResponseHeaders:(NSDictionary*) headers;

/**
 Processes the provided dictionary of header to filter out forbidden headers for a request.
 
 Following the Fetch/XHR spec, forbidden headers should not be provided to the request.
 Additionally, and contrary to the most recent udpate on the spec, the "User-Agent" header
 must not be allowed as it would break consistency with all OutSystems Mobile applications.
 All OutSystems mobile applications have "OutSystemsApp v.X" appended on the User-Agent, even
 if the developer decides to override them through Extensibility Configurations.
 
 @notes
 https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name
 */
+ (NSDictionary*) processRequestHeaders:(NSDictionary*) headers;
@end
