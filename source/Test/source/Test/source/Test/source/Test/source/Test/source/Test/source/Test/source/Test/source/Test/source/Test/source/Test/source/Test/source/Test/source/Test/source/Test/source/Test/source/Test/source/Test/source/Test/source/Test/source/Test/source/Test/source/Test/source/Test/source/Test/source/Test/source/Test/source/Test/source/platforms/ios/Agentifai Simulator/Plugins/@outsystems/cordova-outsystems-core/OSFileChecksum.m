#import "OSFileChecksum.h"

@implementation OSFileChecksum

# pragma mark - Internal

+(NSData*) md5HashOfData:(NSData *)data{
    unsigned char md5Buffer[CC_MD5_DIGEST_LENGTH];
    
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
    CC_MD5(data.bytes, (unsigned int)data.length, md5Buffer);
#pragma clang diagnostic pop
    
    return [NSData dataWithBytes:md5Buffer length:CC_MD5_DIGEST_LENGTH];
}

+(NSData*) uuidOfData:(NSData*)data{
    NSUUID *uuid = [[NSUUID alloc] initWithUUIDBytes:data.bytes];
    
    uuid_t uuidByteArray;
    [uuid getUUIDBytes:uuidByteArray];
    
    return [NSData dataWithBytes:uuidByteArray length:CC_MD5_DIGEST_LENGTH];
}

+(NSString *) serializeToString:(NSData *) data {
    NSString *output = [data base64EncodedStringWithOptions:kNilOptions];
    
    output = [output stringByReplacingOccurrencesOfString:@"/" withString:@"_"];
    
    output = [output stringByReplacingOccurrencesOfString:@"=" withString:@""];
    
    return output;
}

+(NSString *) contentHashOfData:(NSData *) fileData {
    // Get the MD5 hash
    NSData *md5Hash = [self md5HashOfData:fileData];
    
    // Create an UUID for the MD5 hash
    NSData *uuidHash = [self uuidOfData:md5Hash];
    
    NSString *contentHash = [self serializeToString:uuidHash];
    
    return contentHash;
}

# pragma mark - Public

+(NSString *) contentHashOfFile:(NSString *) filePath {
    NSFileManager *fileManager = [NSFileManager defaultManager];
    
    if( [fileManager fileExistsAtPath:filePath isDirectory:nil] )
    {
        NSData *fileData = [NSData dataWithContentsOfFile:filePath];
        
        // Serialize to String
        NSString *contentHash = [self contentHashOfData:fileData];
        
        return contentHash;
    }
    else {
        return nil;
    }
}

+(NSString *) contentHashOfFileData:(NSData *) fileData {
    if(fileData){
        // Serialize to String
        NSString *contentHash = [self contentHashOfData:fileData];
        
        return contentHash;
    } else {
        return nil;
    }
}

@end
