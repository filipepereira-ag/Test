#import <Foundation/Foundation.h>
#include <CommonCrypto/CommonDigest.h>

@interface OSFileChecksum : NSObject

+(NSString *) contentHashOfFile:(NSString *) filePath;
+(NSString *) contentHashOfFileData:(NSData *) fileData;

@end
