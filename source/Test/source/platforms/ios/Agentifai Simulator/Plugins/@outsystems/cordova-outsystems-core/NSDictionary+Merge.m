#import "NSDictionary+Merge.h"

@implementation NSDictionary(Merge)

/**
 Merges the values of the first NSDictionary with the values of the second but
 does not override values if value for the same key already exists on second NSDictionary.
 */
+ (NSDictionary*) mergeDictionary: (NSDictionary*) extra withDeviceInfo: (NSDictionary*) baseDictionary {
    NSMutableDictionary* newDict = [NSMutableDictionary dictionaryWithDictionary:baseDictionary];
    if(extra){
        for(NSString* extraKey in [extra allKeys]) {
            if(![newDict objectForKey:extraKey]){
                NSString* deviceExtraValue = [extra objectForKey:extraKey];
                [newDict setValue:deviceExtraValue forKey:extraKey];
            }
        }
    }
    return newDict;
}

@end
