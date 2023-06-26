#import <Foundation/Foundation.h>

@interface OSLogRecord : NSObject

@property (readonly) NSString* _Nullable instant;
@property (readonly) NSString* _Nullable message;
@property (readonly) NSString* _Nullable source;
@property (readonly) NSString* _Nullable stack;

@property (readonly) NSDictionary* _Nullable attributes;

@property (readonly) NSString* _Nullable name;
@property (readonly) NSString* _Nullable traceId;
@property (readonly) NSString* _Nullable spanId;

-(id _Nonnull) initWithDictionary:(NSDictionary* _Nullable) dictionary;

@end
