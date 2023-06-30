#if DEBUG

#import <Foundation/Foundation.h>

@interface OSInspectorPreferences : NSObject

- (NSInteger)notificationShownCount;
- (void)setNotificationShownCount:(NSInteger)count;

@end

#endif
