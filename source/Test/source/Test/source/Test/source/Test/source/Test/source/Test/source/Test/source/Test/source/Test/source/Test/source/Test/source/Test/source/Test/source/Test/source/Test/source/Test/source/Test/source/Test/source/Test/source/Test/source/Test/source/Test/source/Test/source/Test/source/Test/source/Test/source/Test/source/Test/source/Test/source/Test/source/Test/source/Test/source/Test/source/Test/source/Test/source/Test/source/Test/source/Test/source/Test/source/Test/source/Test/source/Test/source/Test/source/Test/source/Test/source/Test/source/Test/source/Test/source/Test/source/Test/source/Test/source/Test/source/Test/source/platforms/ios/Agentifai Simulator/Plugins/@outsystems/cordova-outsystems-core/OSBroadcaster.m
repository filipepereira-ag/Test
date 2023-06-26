
#import "OSBroadcaster.h"

@interface OSBroadcaster()

@property (nonatomic, readonly, strong) OSNetworkEventEmitter* networkEventEmitter;

@end

/**
 * Component responsible for broadcasting new events to other components which have registered as receivers.
 * The events are sent intra-application through the use of a {@link NSNotificationCenter}.
 * It is also responsible for creating and managing {@link EventEmitter}s.
 */

@implementation OSBroadcaster

/*
 * Method to initialize all events
 */
- (void)initializeBroadcaster {
    //Initialize Network Event
    _networkEventEmitter = [[OSNetworkEventEmitter alloc] init];
    _networkEventEmitter.delegate = self;
    [_networkEventEmitter start];
}

- (void)destroyBroadcaster {
    if(_networkEventEmitter){
        [_networkEventEmitter stop];
    }
}

/**
 * Delegate method to Post a notification with network change
 * All Components that are observing this notification will receive this event
 */
- (void)networkStateDidChange:(OSNetworkEvent *) networkStatus {
    //Emit notification with network status
    [[NSNotificationCenter defaultCenter] postNotificationName:kOSBroadcasterNetworkChangedNotification object:[networkStatus getData]];
}

@end
