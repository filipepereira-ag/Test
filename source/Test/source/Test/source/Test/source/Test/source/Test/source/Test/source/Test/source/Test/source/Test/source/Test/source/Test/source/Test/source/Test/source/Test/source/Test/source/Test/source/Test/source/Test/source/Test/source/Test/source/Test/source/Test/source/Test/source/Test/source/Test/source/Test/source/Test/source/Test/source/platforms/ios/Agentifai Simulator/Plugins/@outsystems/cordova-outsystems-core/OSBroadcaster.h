
#import <Foundation/Foundation.h>
#import "OSBroadcasterProtocol.h"
#import "OSNetworkEventEmitter.h"

@interface OSBroadcaster : NSObject<OSBroadcasterProtocol, NetworkEventDelegate>

@end

