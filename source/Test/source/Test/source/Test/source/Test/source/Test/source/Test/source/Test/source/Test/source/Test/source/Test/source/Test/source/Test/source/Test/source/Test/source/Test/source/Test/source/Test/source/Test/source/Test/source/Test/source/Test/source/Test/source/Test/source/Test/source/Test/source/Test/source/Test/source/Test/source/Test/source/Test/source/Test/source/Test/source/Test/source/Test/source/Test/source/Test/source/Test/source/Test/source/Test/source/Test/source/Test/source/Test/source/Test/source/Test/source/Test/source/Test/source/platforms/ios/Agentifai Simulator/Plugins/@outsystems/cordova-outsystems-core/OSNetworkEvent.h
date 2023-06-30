
#import <Foundation/Foundation.h>
#import "OSEventProtocol.h"

@interface OSNetworkEvent : NSObject<OSEventProtocol>

@property (nonatomic, retain) NSMutableDictionary *data;

-(id) initWithNetworkData:(NSDictionary *) networkData;

@end
