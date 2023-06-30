#import "OSLogger.h"
#import "OSPureeLogger.h"

#import "NSDictionary+Merge.h"

@interface OSLogger ()

@property (strong) id <OSLoggerEngine> loggerEngine;

@end

@implementation OSLogger

static OSLogger *sharedInstance = nil;

+(instancetype) initializeWithEngine:(id<OSLoggerEngine>) engine {
    static dispatch_once_t onceToken;

    dispatch_once(&onceToken, ^{
        sharedInstance = [[self alloc] init];
        sharedInstance.loggerEngine = engine;
    });
    
    return sharedInstance;
}

+(instancetype) sharedInstance {
    return sharedInstance;
}

#pragma mark - Trace

-(void) logTrace:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withInstant:(NSString*)instant {
    [self.loggerEngine processLog:message withModule:moduleName withStack:nil withLevel:OSLogLevelTrace withExtra:extra withInstant:instant];
}

-(void) logTrace:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra{
    [self logTrace:message withModule:moduleName withExtra:extra withInstant:nil];
}

-(void) logTrace:(NSString*)message withModule:(NSString*)moduleName{
    [self logTrace:message withModule:moduleName withExtra:nil withInstant:nil];
}

#pragma mark - Verbose
-(void) logVerbose:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withInstant:(NSString*)instant {
    [self.loggerEngine processLog:message withModule:moduleName withStack:nil withLevel:OSLogLevelVerbose withExtra:extra withInstant:instant];
}

-(void) logVerbose:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra {
    [self logVerbose:message withModule:moduleName withExtra:extra withInstant:nil];
}

-(void) logVerbose:(NSString*)message withModule:(NSString*)moduleName{
    [self logVerbose:message withModule:moduleName withExtra:nil withInstant:nil];
}

#pragma mark - Debug
-(void) logDebug:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withInstant:(NSString*)instant {
    [self.loggerEngine processLog:message withModule:moduleName withStack:nil withLevel:OSLogLevelDebug withExtra:extra withInstant:instant];
}

-(void) logDebug:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra {
    [self logDebug:message withModule:moduleName withExtra:extra withInstant:nil];
}

-(void) logDebug:(NSString*)message withModule:(NSString*)moduleName{
    [self logDebug:message withModule:moduleName withExtra:nil withInstant:nil];
}

#pragma mark - Info
-(void) logInfo:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withInstant:(NSString*)instant {
    [self.loggerEngine processLog:message withModule:moduleName withStack:nil withLevel:OSLogLevelInfo withExtra:extra withInstant:instant];
}

-(void) logInfo:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra {
    [self logInfo:message withModule:moduleName withExtra:extra withInstant:nil];
}

-(void) logInfo:(NSString*)message withModule:(NSString*)moduleName{
    [self logInfo:message withModule:moduleName withExtra:nil withInstant:nil];
}

#pragma mark - Warning
-(void) logWarning:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withInstant:(NSString*)instant {
    [self.loggerEngine processLog:message withModule:moduleName withStack:nil withLevel:OSLogLevelWarning withExtra:extra withInstant:instant];
}

-(void) logWarning:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra {
    [self logWarning:message withModule:moduleName withExtra:extra withInstant:nil];
}

-(void) logWarning:(NSString*)message withModule:(NSString*)moduleName{
    [self logWarning:message withModule:moduleName withExtra:nil withInstant:nil];
}

#pragma mark - Error
-(void) logError:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withStack:(NSString*) stack
     withInstant:(NSString*)instant {
    [self.loggerEngine processLog:message withModule:moduleName withStack:stack withLevel:OSLogLevelError withExtra:extra withInstant:instant];
}

-(void) logError:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withStack:(NSString*) stack{
    [self logError:message withModule:moduleName withExtra:extra withStack:stack withInstant:nil];
}


-(void) logError:(NSString*)message withModule:(NSString*)moduleName withStack:(NSString*) stack{
    [self logError:message withModule:moduleName withExtra:nil withStack:stack withInstant:nil];
}

-(void) logError:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withException:(NSException*) exception
     withInstant:(NSString*)instant {
    NSString *stackString = nil;
    
    if(exception) {
        NSArray *stackArray = [exception callStackSymbols];
        stackString = [stackArray componentsJoinedByString:@"\n"];
    }
    
    [self logError:message withModule:moduleName withExtra:extra withStack:stackString withInstant:instant];
}

-(void) logError:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withException:(NSException*) exception{
    
    [self logError:message withModule:moduleName withExtra:extra withException:exception withInstant:nil];
}

-(void) logError:(NSString*)message withModule:(NSString*)moduleName withException:(NSException*) exception{
    [self logError:message withModule:moduleName withExtra:nil withException:exception withInstant:nil];
}

-(void) logError:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra{
    [self logError:message withModule:moduleName withExtra:extra withStack:nil withInstant:nil];
}

-(void) logError:(NSString*)message withModule:(NSString*)moduleName{
    [self logError:message withModule:moduleName withExtra:nil withStack:nil withInstant:nil];
}


#pragma mark - Fatal
-(void) logFatal:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withStack:(NSString*) stack
     withInstant:(NSString*)instant {
    [self.loggerEngine processLog:message withModule:moduleName withStack:stack withLevel:OSLogLevelFatal withExtra:extra withInstant:instant];
}

-(void) logFatal:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withStack:(NSString*) stack{
    [self logFatal:message withModule:moduleName withExtra:extra withStack:stack withInstant:nil];
}

-(void) logFatal:(NSString*)message withModule:(NSString*)moduleName withStack:(NSString*) stack{
    [self logFatal:message withModule:moduleName withExtra:nil withStack:stack];
}

-(void) logFatal:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withException:(NSException*) exception
     withInstant:(NSString*)instant {
    NSString *stackString = nil;
    
    if(exception) {
        NSArray *stackArray = [exception callStackSymbols];
        stackString = [stackArray componentsJoinedByString:@"\n"];
    }
    
    [self logFatal:message withModule:moduleName withExtra:extra withStack:stackString withInstant:instant];
}

-(void) logFatal:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withException:(NSException*) exception{
    [self logFatal:message withModule:moduleName withExtra:extra withException:exception withInstant:nil];
}

-(void) logFatal:(NSString*)message withModule:(NSString*)moduleName withException:(NSException*) exception{
    [self logFatal:message withModule:moduleName withExtra:nil withException:exception withInstant:nil];
}

-(void) logFatal:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra{
    [self logFatal:message withModule:moduleName withExtra:extra withStack:nil withInstant:nil];
}

-(void) logFatal:(NSString*)message withModule:(NSString*)moduleName{
    [self logFatal:message withModule:moduleName withExtra:nil withStack:nil withInstant:nil];
}

@end
