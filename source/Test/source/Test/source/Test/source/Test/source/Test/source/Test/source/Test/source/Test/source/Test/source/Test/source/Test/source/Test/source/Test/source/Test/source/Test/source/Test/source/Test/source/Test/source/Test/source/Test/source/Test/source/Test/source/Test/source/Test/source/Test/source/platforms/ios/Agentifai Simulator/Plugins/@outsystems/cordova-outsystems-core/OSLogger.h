#import <Foundation/Foundation.h>

#import "OSLoggerEngine.h"
#import "OSDeviceInfo.h"
#import "OSLoggerProtocol.h"

@interface OSLogger : NSObject<OSLoggerProtocol>

+(instancetype) initializeWithEngine:(id <OSLoggerEngine>) engine;
+(instancetype) sharedInstance;

@end
