
#import "OSNetworkEventEmitter.h"
#import "CDVReachability.h"

NSString* const kOSBroadcasterNetworkChangedNotification = @"OSNetworkChangedNotification";
NSString* const kOSBroadcasterNetworkStatus = @"netWorkStatus";
NSString* const kOSBroadcasterNetworkOnline = @"netWorkOnline";
NSString* const kOSBroadcasterNetworkOffline = @"netWorkOffline";
NSString* const kOSBroadcasterNetworkType = @"netWorkType";

@interface OSNetworkEventEmitter()

@property (readwrite, assign) BOOL observerReachabilityRegistred;

@end

/**
 * Listens to connectivity-related events sent from the Reachability framework and delegate to OSBroadcaster.
 */

@implementation OSNetworkEventEmitter

@synthesize delegate, observerReachabilityRegistred;

- (void)start {
    /*
     Observe the kNetworkReachabilityChangedNotification. When that notification is posted, the method reachabilityChanged will be called.
     */
    if(!observerReachabilityRegistred){
        [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(reachabilityChanged:) name:kReachabilityChangedNotification object:nil];
        observerReachabilityRegistred = YES;
    }
}

- (void)stop {
    [[NSNotificationCenter defaultCenter] removeObserver:self name:kReachabilityChangedNotification object:nil];
    observerReachabilityRegistred = NO;
}

-(void) reachabilityChanged:(NSNotification *)notification {
    CDVReachability* curReach = [notification object];
    if ([curReach isKindOfClass:[CDVReachability class]]){
        NetworkStatus netStatus = [curReach currentReachabilityStatus];
        
        NSMutableDictionary *networkData = [[NSMutableDictionary alloc] init];
        switch (netStatus)
        {
            case NotReachable:        {
                [networkData setValue:kOSBroadcasterNetworkOffline forKey:kOSBroadcasterNetworkStatus];
                [networkData setValue:@"NotReachable" forKey:kOSBroadcasterNetworkType];
                break;
            }
                
            case ReachableViaWWAN:        {
                [networkData setValue:kOSBroadcasterNetworkOnline forKey:kOSBroadcasterNetworkStatus];
                [networkData setValue:@"WWAN" forKey:kOSBroadcasterNetworkType];
                break;
            }
            case ReachableViaWiFi:        {
                [networkData setValue:kOSBroadcasterNetworkOnline forKey:kOSBroadcasterNetworkStatus];
                [networkData setValue:@"WiFi" forKey:kOSBroadcasterNetworkType];
                break;
            }
        }
        
        OSNetworkEvent *event = [[OSNetworkEvent alloc] initWithNetworkData:networkData];
        [self.delegate networkStateDidChange:event];
    }
}

@end
