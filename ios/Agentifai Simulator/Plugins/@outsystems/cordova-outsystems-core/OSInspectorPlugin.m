#import "OSInspectorPlugin.h"

#if DEBUG
#import <FLEX/FLEXManager.h>
#import "OSInspectorNotificationHelper.h"
#endif

@interface OSInspectorPlugin ()
#if DEBUG

@property (strong, nonatomic) OSInspectorNotificationHelper *helper;

#endif
@end

@implementation OSInspectorPlugin

#if DEBUG
NSString * const DISABLE_NOTIFICATION_PREFERENCE = @"disableinspectornotification"; // lowercase value
#endif

- (void)pluginInitialize {
    #if DEBUG
    UILongPressGestureRecognizer* longPressRecognizer = [[UILongPressGestureRecognizer alloc] initWithTarget:self action:@selector(handleLongPress:)];
    [longPressRecognizer setMinimumPressDuration:0.6];
    [longPressRecognizer setNumberOfTouchesRequired:3];
    [self.webView addGestureRecognizer:longPressRecognizer];
    
    NSString* disableNotification = [self.commandDelegate.settings objectForKey:DISABLE_NOTIFICATION_PREFERENCE];
    if (![@"true" isEqualToString:[disableNotification lowercaseString]]) {
        self.helper = [[OSInspectorNotificationHelper alloc] init];
        [self.helper handleInstructionsNotification];
    }
    #endif
}

#if DEBUG
- (void)handleLongPress:(UILongPressGestureRecognizer*)gestureRecognizer {
    dispatch_async(dispatch_get_main_queue(), ^{
        [[FLEXManager sharedManager] showExplorer];
        [self.helper doNotShowNotificationAgain];
    });
}
#endif

@end
