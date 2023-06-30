
#import <Foundation/Foundation.h>
#import "OSEventEmitterProtocol.h"
#import "OSNetworkEvent.h"

typedef NS_ENUM(NSInteger, OSNetworkStatus) {
    OSStatusOffline = 0,
    OSStatusOnline = 1
};

extern NSString* const kOSBroadcasterNetworkChangedNotification;
extern NSString* const kOSBroadcasterNetworkStatus;
extern NSString* const kOSBroadcasterNetworkOnline;
extern NSString* const kOSBroadcasterNetworkOffline;
extern NSString* const kOSBroadcasterNetworkType;

@protocol NetworkEventDelegate <NSObject>
- (void) networkStateDidChange:(OSNetworkEvent *) networkStatus;
@end


@interface OSNetworkEventEmitter : NSObject<OSEventEmitterProtocol>

@property (nonatomic, weak) id <NetworkEventDelegate> delegate;

@end
