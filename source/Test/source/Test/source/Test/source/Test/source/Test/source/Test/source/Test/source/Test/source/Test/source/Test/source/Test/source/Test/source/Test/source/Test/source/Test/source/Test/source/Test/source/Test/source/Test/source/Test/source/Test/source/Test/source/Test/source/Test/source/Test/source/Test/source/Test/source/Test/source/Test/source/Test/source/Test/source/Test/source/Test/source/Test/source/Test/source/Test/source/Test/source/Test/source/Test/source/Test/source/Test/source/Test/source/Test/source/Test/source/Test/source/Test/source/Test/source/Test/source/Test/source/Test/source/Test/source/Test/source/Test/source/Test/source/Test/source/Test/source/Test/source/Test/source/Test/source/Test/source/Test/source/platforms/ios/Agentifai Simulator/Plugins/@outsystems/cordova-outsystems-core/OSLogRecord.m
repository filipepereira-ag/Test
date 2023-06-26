#import "OSLogRecord.h"

@implementation OSLogRecord

-(id) initWithDictionary:(NSDictionary*) dictionary {
    
    if(self = [super init]) {
        if(dictionary) {
            NSString *instant = [dictionary objectForKey:@"instant"];
            _instant = instant;
            
            NSString *message = [dictionary objectForKey:@"message"];
            _message = message;
            
            NSString *source = [dictionary objectForKey:@"source"];
            _source = source;
            
            NSString *stack = [dictionary objectForKey:@"stack"];
            _stack = stack;
            
            NSDictionary *attributes = [dictionary objectForKey:@"attributes"];
            _attributes = attributes;

            NSString *name = [dictionary objectForKey:@"name"];
            _name = name;
            
            NSString *traceId = [dictionary objectForKey:@"traceId"];
            _traceId = traceId;
            
            NSString *spanId = [dictionary objectForKey:@"spanId"];
            _spanId = spanId;
        }
    }
    
    return self;
}

@end
