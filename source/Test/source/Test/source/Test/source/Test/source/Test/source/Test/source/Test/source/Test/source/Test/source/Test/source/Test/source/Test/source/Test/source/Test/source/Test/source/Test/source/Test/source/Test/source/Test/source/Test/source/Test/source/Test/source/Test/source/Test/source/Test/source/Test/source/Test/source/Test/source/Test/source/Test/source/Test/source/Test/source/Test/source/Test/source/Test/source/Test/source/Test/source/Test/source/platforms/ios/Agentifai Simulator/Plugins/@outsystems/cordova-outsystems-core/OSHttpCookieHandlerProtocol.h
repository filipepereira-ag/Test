/**
 Callback typedef to retrieve persisted cookies from cookie handler.
 If cookies are available, `headerCookie` will contain an item in the Cookie 
 header format. Example:
 {
     "Cookie": "cookie=string; foo=bar"
 }
 */
typedef void (^OSHttpCookiesGetCompletionHandler)(NSDictionary* headerCookie);
typedef void (^OSHttpCookiesPersistEnded)(void);

/**
 
 Interface required to deal with cookie storage. `OSHttpRequester` delegates
 retrieval and storage of cookies to implementations of this protocol.
 
 */
@protocol OSHttpCookieHandler <NSObject>

/**
 
 Retrieve all persisted cookies associated with the provided URL.
 
 @param url The URL from which the cookies are to be retrieved
 @param callback an `OSHttpCookieHandlerCompletion` block that is called when retrieval finishes and delivers the persisted cookies.
 
 @note
 Can be async depending on the implementation.
 */
- (void) getPersistedCookiesForUrl:(NSURL*) url completionHandler:(OSHttpCookiesGetCompletionHandler) callback;

/**
 
 Call this method to persist any "Set-Cookie" headers present on the provided NSDictionary
 for the `url` obtained from an HTTP response.
 
 @param headers NSURLHttpResponse headers
 @param url URL to which the cookies are to be persisted
 @param callback completion handler called when the cookies are persisted
 @note
 Can be async depending on the implementation.
 */
- (void) persistCookiesFromResponseHeaders:(NSDictionary*) headers forUrl: (NSURL*) url completionHandler:(OSHttpCookiesPersistEnded) callback;
@end
