#import <Foundation/Foundation.h>

@interface OSWebResponse : NSObject

@property (strong, nonatomic) NSURLResponse *response;
@property (strong, nonatomic) NSData *data;

-(id)initWithResponse:(NSURLResponse*)urlResponse andContent:(NSData*)content;

@end
