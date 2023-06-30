#import "OSWebResponse.h"

@implementation OSWebResponse

-(id)init{
    self = [super init];
    return self;
}


-(id)initWithResponse:(NSURLResponse*)urlResponse andContent:(NSData*)content{

    if(self = [self init]){
        _response = urlResponse;
        _data = content;
    }
    return self;
}

@end
