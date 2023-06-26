#import "OSHttpHeadersUtils.h"

@implementation OSHttpHeadersUtils

static NSString const* LOWERCASE_HEADER_SET_COOKIE = @"set-cookie";
static NSString const* LOWERCASE_HEADER_SET_COOKIE2 = @"set-cookie2";

static NSArray* FORBIDDEN_HEADERS;

+(void)load {
    FORBIDDEN_HEADERS = @[
                          @"accept-charset",
                          @"accept-encoding",
                          @"access-control-request-headers",
                          @"access-control-request-method",
                          @"connection",
                          @"content-length",
                          @"cookie",
                          @"cookie2",
                          @"date",
                          @"dnt",
                          @"expect",
                          @"host",
                          @"keep-alive",
                          @"origin",
                          @"proxy-",
                          @"sec-",
                          @"referer",
                          @"te",
                          @"trailer",
                          @"transfer-encoding",
                          @"upgrade",
                          @"user-agent",
                          @"via"
                          ];
}

+ (NSDictionary*) processResponseHeaders:(NSDictionary*) headers {
    
    NSMutableDictionary* processedHeaders = [NSMutableDictionary dictionaryWithCapacity:[headers count]];
    
    for (NSString* key in headers) {
        NSString* name = [key lowercaseStringWithLocale:[NSLocale systemLocale]];
        NSString* value = headers[key];
        
        if(![LOWERCASE_HEADER_SET_COOKIE isEqualToString:name] && ![LOWERCASE_HEADER_SET_COOKIE2 isEqualToString:name] ) {
            [processedHeaders setObject:value forKey:name];
        }
    }
    
    return processedHeaders;
}

static NSPredicate * _Nonnull getForbiddenHeadersFilterPredicate() {
    static NSPredicate* filterPredicate;
    
    if(!filterPredicate) {
        filterPredicate = [NSPredicate predicateWithBlock:^BOOL(id  _Nullable evaluatedObject, NSDictionary<NSString *,id> * _Nullable bindings) {
            if( [evaluatedObject isKindOfClass:[NSString class]]) {
                NSString* key = [(NSString*)evaluatedObject lowercaseStringWithLocale:[NSLocale systemLocale]];
                for (NSString* forbiddenKey in FORBIDDEN_HEADERS) {
                    if([key isEqualToString:forbiddenKey] || ([forbiddenKey hasSuffix:@"-"] && [key hasPrefix:forbiddenKey])) {
                        return NO;
                    }
                }
                return YES;
            }
            return NO;
        }];
    }
    
    return filterPredicate;
}

+ (NSDictionary*) processRequestHeaders:(NSDictionary*) headers {
    NSPredicate* filterPredicate = getForbiddenHeadersFilterPredicate();
    NSArray* filteredHeaderKeys = [[headers allKeys] filteredArrayUsingPredicate:filterPredicate];
    NSMutableDictionary* requestHeaders = [NSMutableDictionary dictionaryWithCapacity:[filteredHeaderKeys count]];
    for (NSString* key in filteredHeaderKeys) {
        [requestHeaders setObject:headers[key] forKey:key];
    }
    return requestHeaders;
}


@end
