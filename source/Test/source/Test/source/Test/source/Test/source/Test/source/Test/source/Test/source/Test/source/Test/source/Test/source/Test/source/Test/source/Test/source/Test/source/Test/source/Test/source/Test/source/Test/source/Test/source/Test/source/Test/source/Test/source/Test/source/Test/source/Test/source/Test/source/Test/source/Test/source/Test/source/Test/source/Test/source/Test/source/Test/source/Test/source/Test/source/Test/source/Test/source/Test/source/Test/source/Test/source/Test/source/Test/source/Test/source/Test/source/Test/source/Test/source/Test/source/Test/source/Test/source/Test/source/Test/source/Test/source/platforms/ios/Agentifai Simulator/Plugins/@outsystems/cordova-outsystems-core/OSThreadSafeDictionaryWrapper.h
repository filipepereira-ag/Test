#import <Foundation/Foundation.h>

@interface OSThreadSafeDictionaryWrapper : NSObject

- (NSArray * _Nonnull)allKeys;
- (id _Nullable)objectForKey:(id _Nonnull)key;
- (void)setObject:(id _Nonnull)object forKey:(id<NSCopying>_Nonnull)key;

@end
