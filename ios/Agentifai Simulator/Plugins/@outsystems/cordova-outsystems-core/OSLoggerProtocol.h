#import <Foundation/Foundation.h>

@protocol OSLoggerProtocol
@required

#pragma mark - Trace
-(void) logTrace:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withInstant:(NSString*)instant;
-(void) logTrace:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra;
-(void) logTrace:(NSString*)message withModule:(NSString*)moduleName;

#pragma mark - Versbose
-(void) logVerbose:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withInstant:(NSString*)instant;
-(void) logVerbose:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra;
-(void) logVerbose:(NSString*)message withModule:(NSString*)moduleName;

#pragma mark - Debug
-(void) logDebug:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withInstant:(NSString*)instant;
-(void) logDebug:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra;
-(void) logDebug:(NSString*)message withModule:(NSString*)moduleName;

#pragma mark - Info
-(void) logInfo:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withInstant:(NSString*)instant;
-(void) logInfo:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra;
-(void) logInfo:(NSString*)message withModule:(NSString*)moduleName;

#pragma mark - Warning
-(void) logWarning:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withInstant:(NSString*)instant;
-(void) logWarning:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra;
-(void) logWarning:(NSString*)message withModule:(NSString*)moduleName;

#pragma mark - Error
-(void) logError:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withStack:(NSString*) stack withInstant:(NSString*)instant;
-(void) logError:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withStack:(NSString*) stack;
-(void) logError:(NSString*)message withModule:(NSString*)moduleName withStack:(NSString*) stack;

-(void) logError:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withException:(NSException*) exception withInstant:(NSString*)instant;
-(void) logError:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withException:(NSException*) exception;
-(void) logError:(NSString*)message withModule:(NSString*)moduleName withException:(NSException*) exception;

-(void) logError:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra;
-(void) logError:(NSString*)message withModule:(NSString*)moduleName;

#pragma mark - Fatal
-(void) logFatal:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withStack:(NSString*) stack withInstant:(NSString*)instant;
-(void) logFatal:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withStack:(NSString*) stack;
-(void) logFatal:(NSString*)message withModule:(NSString*)moduleName withStack:(NSString*) stack;

-(void) logFatal:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withException:(NSException*) exception withInstant:(NSString*)instant;
-(void) logFatal:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra withException:(NSException*) exception;
-(void) logFatal:(NSString*)message withModule:(NSString*)moduleName withException:(NSException*) exception;

-(void) logFatal:(NSString*)message withModule:(NSString*)moduleName withExtra:(NSDictionary*)extra;
-(void) logFatal:(NSString*)message withModule:(NSString*)moduleName;

@end
