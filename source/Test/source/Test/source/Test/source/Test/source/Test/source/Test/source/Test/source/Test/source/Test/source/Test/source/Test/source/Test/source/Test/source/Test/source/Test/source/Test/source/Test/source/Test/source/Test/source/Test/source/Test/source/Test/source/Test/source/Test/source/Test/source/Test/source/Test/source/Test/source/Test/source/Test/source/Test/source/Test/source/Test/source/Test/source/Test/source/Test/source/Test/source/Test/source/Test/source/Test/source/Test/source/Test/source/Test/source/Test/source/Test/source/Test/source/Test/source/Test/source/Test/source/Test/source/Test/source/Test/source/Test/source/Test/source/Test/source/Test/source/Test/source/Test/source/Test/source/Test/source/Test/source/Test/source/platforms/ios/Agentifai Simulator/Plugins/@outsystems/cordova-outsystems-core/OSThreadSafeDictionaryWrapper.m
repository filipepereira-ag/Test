#import "OSThreadSafeDictionaryWrapper.h"

@implementation OSThreadSafeDictionaryWrapper {
    NSMutableDictionary *dictionary;
}

- (instancetype)init {
    if (self = [super init]) {
        dictionary = [NSMutableDictionary dictionary];
    }
    return self;
}

- (NSArray * _Nonnull)allKeys {
    @synchronized (self) {
        return [dictionary allKeys];
    }
}

- (id _Nullable)objectForKey:(id)key {
    if (!key) {
        return nil;
    }
    
    @synchronized (self) {
        return [dictionary objectForKey:key];
    }
}

- (void)setObject:(nonnull id)object forKey:(id<NSCopying>)key {
    if (!key) {
        return;
    }
    
    @synchronized (self) {
        [dictionary setObject:object forKey:key];
    }
}

- (id)valueForKey:(NSString *)key {
    if (!key) {
        return nil;
    }
    
    @synchronized (self) {
        return [dictionary valueForKey:key];
    }
}

- (void)setValue:(id)value forKey:(NSString *)key {
    if (!key) {
        return;
    }
    
    @synchronized (self) {
        [dictionary setValue:value forKey:key];
    }
}

@end
