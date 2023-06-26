#if DEBUG

#import <Foundation/Foundation.h>
#import <UserNotifications/UserNotifications.h>

@interface OSInspectorNotificationHelper : NSObject <UNUserNotificationCenterDelegate>

- (void)handleInstructionsNotification;
- (void)doNotShowNotificationAgain;

@end

#endif
