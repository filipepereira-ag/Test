#if DEBUG

#import "OSInspectorNotificationHelper.h"
#import "OSInspectorPreferences.h"

#define kNotificationRequestIdentifier @"com.outsystems.plugins.osinspector.OSInspectorPlugin"
#define kNotificationBody @"Heads up! Enable OutSystems Developer Tools to inspect app network requests. Just tap and hold 3 fingers on the screen."
#define kNotificationDelayInSeconds 7

#define kNotificationShownCountLimit 10

@interface OSInspectorNotificationHelper ()

@property (strong, nonatomic) OSInspectorPreferences *preferences;

@property (strong, nonatomic) NSTimer *timer;
@property (weak, nonatomic) id<UNUserNotificationCenterDelegate> originalDelegate;

@end

@implementation OSInspectorNotificationHelper

- (instancetype)init {
    if (self = [super init]) {
        _preferences = [[OSInspectorPreferences alloc] init];
    }
    return self;
}

- (void)handleInstructionsNotification {
    NSInteger count = [self.preferences notificationShownCount];
    
    if (count < kNotificationShownCountLimit) {
        self.timer = [NSTimer timerWithTimeInterval:kNotificationDelayInSeconds
                                             target:self
                                           selector:@selector(requestPermissionAndSendNotification)
                                           userInfo:nil
                                            repeats:YES];
        
        [[NSRunLoop mainRunLoop] addTimer:self.timer forMode:NSDefaultRunLoopMode];
    }
}

- (void)requestPermissionAndSendNotification {
    [self.timer invalidate];
    self.timer = nil;
    
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    
    UNAuthorizationOptions options = UNAuthorizationOptionAlert | UNAuthorizationOptionBadge | UNAuthorizationOptionSound;
    
    [center requestAuthorizationWithOptions:options completionHandler:^(BOOL granted, NSError * _Nullable error) {
        if (granted) {
            [self sendNotification];
        }
    }];
}

- (void)sendNotification {
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    
    UNMutableNotificationContent *content = [[UNMutableNotificationContent alloc] init];
    content.body = kNotificationBody;
    
    UNTimeIntervalNotificationTrigger *trigger = [UNTimeIntervalNotificationTrigger triggerWithTimeInterval:0.01
                                                                                                    repeats:NO];
    
    UNNotificationRequest *request = [UNNotificationRequest requestWithIdentifier:kNotificationRequestIdentifier
                                                                          content:content
                                                                          trigger:trigger];
    
    [center addNotificationRequest:request withCompletionHandler:^(NSError * _Nullable error) {
        if (!error) {
            [self notificationSentWithSuccess];
        }
    }];
}

- (void)notificationSentWithSuccess {
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    self.originalDelegate = center.delegate;
    center.delegate = self;
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center
       willPresentNotification:(UNNotification *)notification
         withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler {
    
    if (![kNotificationRequestIdentifier isEqualToString:notification.request.identifier]) {
        [_originalDelegate userNotificationCenter:center willPresentNotification:notification withCompletionHandler:completionHandler];
        return;
    }
    
    if (center.delegate == self) {
        center.delegate = self.originalDelegate;
        self.originalDelegate = nil;
    }
    
    NSInteger count = [self.preferences notificationShownCount];
    [self.preferences setNotificationShownCount:count + 1];
    
    if (@available(iOS 14.0, *)) {
        completionHandler(UNNotificationPresentationOptionList | UNNotificationPresentationOptionBanner);
    } else {
        completionHandler(UNNotificationPresentationOptionAlert);
    }
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center
didReceiveNotificationResponse:(UNNotificationResponse *)response
         withCompletionHandler:(void (^)(void))completionHandler {
    
    if (![kNotificationRequestIdentifier isEqualToString:response.notification.request.identifier]) {
        [_originalDelegate userNotificationCenter:center didReceiveNotificationResponse:response withCompletionHandler:completionHandler];
        return;
    }
    
    completionHandler();
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center
   openSettingsForNotification:(UNNotification *)notification {
    
    if (@available(iOS 12.0, *)) {
        if (![kNotificationRequestIdentifier isEqualToString:notification.request.identifier]) {
            [_originalDelegate userNotificationCenter:center openSettingsForNotification:notification];
        }
    }
}

- (void)doNotShowNotificationAgain {
    [self cancelInstructionsNotification];
    [self.preferences setNotificationShownCount:kNotificationShownCountLimit];
}

- (void)cancelInstructionsNotification {
    NSArray *identifiers = @[ kNotificationRequestIdentifier ];
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    
    [center removePendingNotificationRequestsWithIdentifiers:identifiers];
    [center removeDeliveredNotificationsWithIdentifiers:identifiers];
}

@end

#endif
