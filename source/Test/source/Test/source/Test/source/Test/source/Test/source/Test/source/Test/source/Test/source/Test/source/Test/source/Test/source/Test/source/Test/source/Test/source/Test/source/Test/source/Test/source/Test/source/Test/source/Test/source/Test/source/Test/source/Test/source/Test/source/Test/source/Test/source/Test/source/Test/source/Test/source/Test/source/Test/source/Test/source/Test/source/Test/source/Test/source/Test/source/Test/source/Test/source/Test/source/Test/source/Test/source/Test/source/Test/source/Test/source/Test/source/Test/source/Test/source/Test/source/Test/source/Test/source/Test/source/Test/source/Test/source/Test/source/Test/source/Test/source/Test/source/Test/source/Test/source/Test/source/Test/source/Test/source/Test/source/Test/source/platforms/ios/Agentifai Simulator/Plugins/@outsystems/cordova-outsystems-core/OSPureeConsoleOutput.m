
#import "OSPureeConsoleOutput.h"

@implementation OSPureeConsoleOutput

- (void)configure:(NSDictionary<NSString *,id> *)settings {
    [super configure:settings];
}

- (void)emitLog:(PURLog *)log {
    NSDictionary *userInfo = log.userInfo;
    
    NSString* message = [self getMessageFromUserInfo:userInfo];
    NSString* stack = [self getStackFromUserInfo:userInfo];
    
    if(stack && [stack length] > 0) {
        NSLog(@"%@ : %@", message, stack);
    } else {
        NSLog(@"%@", message);
    }
}

- (NSString *)getMessageFromUserInfo:(NSDictionary *)userInfo {
    @try {
        // OTLP format
        NSDictionary *body = [userInfo objectForKey:@"body"];
        NSString *stringValue = body ? [body objectForKey:@"stringValue"] : nil;
        if (stringValue) {
            return stringValue;
        }
    } @catch (id e) {
        // Unexpected format (incorrect cast)
        NSLog(@"Could not process log to console: unexpected format");
    }
    
    @try {
        // O11 format
        NSString *message = [userInfo objectForKey:@"message"];
        if (message) {
            return message;
        }
    } @catch (id e) {
        // Unexpected format (incorrect cast)
        NSLog(@"Could not process log to console: unexpected format");
    }
    
    return nil;
}

- (NSString *)getStackFromUserInfo:(NSDictionary *)userInfo {
    @try {
        // OTLP format
        NSArray *attributes = [userInfo objectForKey:@"attributes"];
        
        NSPredicate *predicate = [NSPredicate predicateWithFormat:@"key==%@", @"exception.stacktrace"];
        NSArray *filteredAttributes = attributes ? [attributes filteredArrayUsingPredicate:predicate] : nil;
        
        NSDictionary *foundAttribute = [filteredAttributes count] > 0 ? filteredAttributes[0] : nil;
        NSDictionary *value = foundAttribute ? [foundAttribute objectForKey:@"value"] : nil;
        NSString *stringValue = value ? [value objectForKey:@"stringValue"] : nil;
        if (stringValue) {
            return stringValue;
        }
    } @catch (id e) {
        // Unexpected format (incorrect cast)
        NSLog(@"Could not process log to console: unexpected format");
    }
    
    @try {
        // O11 format
        NSString *stack = [userInfo objectForKey:@"stack"];
        if (stack) {
            return stack;
        }
    } @catch (id e) {
        // Unexpected format (incorrect cast)
        NSLog(@"Could not process log to console: unexpected format");
    }
    
    return nil;
}

@end
