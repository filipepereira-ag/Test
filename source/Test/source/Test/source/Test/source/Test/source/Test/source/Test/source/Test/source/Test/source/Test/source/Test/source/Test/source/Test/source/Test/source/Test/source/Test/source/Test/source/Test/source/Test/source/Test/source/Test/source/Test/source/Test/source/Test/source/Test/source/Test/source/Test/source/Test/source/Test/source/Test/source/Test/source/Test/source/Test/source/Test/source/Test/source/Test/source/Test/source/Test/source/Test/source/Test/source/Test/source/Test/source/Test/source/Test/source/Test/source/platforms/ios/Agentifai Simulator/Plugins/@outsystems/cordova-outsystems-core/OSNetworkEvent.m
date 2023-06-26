
#import "OSNetworkEvent.h"

/*
 * Class to represent a network event
 *
 */

@implementation OSNetworkEvent

@synthesize data;

-(id) initWithNetworkData:(NSDictionary *) networkData{
    if(self = [super init]){
        data = [[NSMutableDictionary alloc] init];
        [data addEntriesFromDictionary:networkData];
    }
    
    return self;
}

- (NSMutableDictionary *)getData {
    return data;
}

@end
