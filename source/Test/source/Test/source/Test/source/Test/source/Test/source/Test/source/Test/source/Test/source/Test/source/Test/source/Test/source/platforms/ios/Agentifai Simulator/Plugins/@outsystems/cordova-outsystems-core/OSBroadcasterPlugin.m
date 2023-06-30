#import "OSBroadcasterPlugin.h"
#import "OSBroadcaster.h"

@interface OSBroadcasterPlugin()

@property (nonatomic, readonly, strong) id <OSBroadcasterProtocol> broadcaster;

@end

@implementation OSBroadcasterPlugin

-(void) pluginInitialize {
    _broadcaster = [[OSBroadcaster alloc] init];
    [_broadcaster initializeBroadcaster];
}

-(void) dealloc {
    [_broadcaster destroyBroadcaster];
}

@end
