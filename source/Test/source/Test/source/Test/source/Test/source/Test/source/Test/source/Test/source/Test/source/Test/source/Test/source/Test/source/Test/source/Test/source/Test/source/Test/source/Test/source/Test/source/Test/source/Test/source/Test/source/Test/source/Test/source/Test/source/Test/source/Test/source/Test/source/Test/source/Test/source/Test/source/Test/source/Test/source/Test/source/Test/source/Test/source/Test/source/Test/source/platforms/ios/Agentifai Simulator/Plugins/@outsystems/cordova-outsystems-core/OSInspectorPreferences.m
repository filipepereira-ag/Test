#if DEBUG

#import "OSInspectorPreferences.h"

#define kNotificationShownCountKey @"com.outsystems.plugins.osinspector.NotificationShownCount"

@interface OSInspectorPreferences ()

@property (strong, nonatomic) NSUserDefaults *defaults;

@end

@implementation OSInspectorPreferences

- (instancetype)init {
    if (self = [super init]) {
        _defaults = [NSUserDefaults standardUserDefaults];
    }
    return self;
}

- (NSInteger)notificationShownCount {
    return [self integerForKey:kNotificationShownCountKey];
}

- (void)setNotificationShownCount:(NSInteger)count {
    [self setInteger:count forKey:kNotificationShownCountKey];
}

- (NSInteger)integerForKey:(NSString*)key {
    return [self.defaults integerForKey:key];
}

- (void)setInteger:(NSInteger)value forKey:(NSString*)key {
    [self.defaults setInteger:value forKey:key];
    [self.defaults synchronize];
}

@end

#endif
