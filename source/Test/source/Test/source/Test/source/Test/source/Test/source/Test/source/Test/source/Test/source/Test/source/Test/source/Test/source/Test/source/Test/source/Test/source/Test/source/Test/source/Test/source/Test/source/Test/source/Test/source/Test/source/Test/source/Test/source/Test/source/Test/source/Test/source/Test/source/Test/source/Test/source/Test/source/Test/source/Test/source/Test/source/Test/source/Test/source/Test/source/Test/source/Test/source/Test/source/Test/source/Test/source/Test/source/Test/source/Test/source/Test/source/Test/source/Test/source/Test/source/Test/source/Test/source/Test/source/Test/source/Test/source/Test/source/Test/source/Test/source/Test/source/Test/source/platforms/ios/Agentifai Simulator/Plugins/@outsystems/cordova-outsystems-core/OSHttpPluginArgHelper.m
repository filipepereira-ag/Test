#import "OSHttpPluginArgHelper.h"

@implementation OSHttpPluginArgHelper

+ (NSString*) getBodyFromCommand: (CDVInvokedUrlCommand*) command atIndex: (NSUInteger) index{
    NSString* result = nil;
    result = [command argumentAtIndex:index withDefault:nil andClass:[NSString class]];
    
    if(!result) {
        NSNumber* numericValue = [command argumentAtIndex:index withDefault:nil andClass:[NSNumber class]];
        result = [numericValue stringValue];
    }
    
    if(!result) {
        NSDictionary* dictionaryValue = [command argumentAtIndex:index withDefault:nil andClass:[NSDictionary class]];
        if(dictionaryValue) {
            NSError* error;
            NSData* data = [NSJSONSerialization dataWithJSONObject:dictionaryValue options:0 error:&error];
            if(data) {
                result = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
            }
        }
    }
    
    return result;
}
    
@end
