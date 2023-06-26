
#import "OSCrashHandler.h"
#import "OSLogger.h"

typedef void (*sighandler_t)(int);

static NSUncaughtExceptionHandler *_previousUncaughtExceptionHandler;
static sighandler_t _previousSIGABRTHandler;
static sighandler_t _previousSIGILLHandler;
static sighandler_t _previousSIGSEGVHandler;
static sighandler_t _previousSIGFPEHandler;
static sighandler_t _previousSIGBUSHandler;
static sighandler_t _previousSIGPIPEHandler;

static id <OSLoggerProtocol> logger;

@implementation OSCrashHandler

-(void) deploy {
    logger = [OSLogger sharedInstance];
    setupUncaughtExceptionHandler();
}

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wstrict-prototypes"
void setupUncaughtExceptionHandler() {
    _previousUncaughtExceptionHandler = NSGetUncaughtExceptionHandler();
    if(!NSGetUncaughtExceptionHandler()){
        NSSetUncaughtExceptionHandler(&exceptionHandler);
    } else {
        [logger logDebug:@"OSCrashHandler is already deployed, doing nothing" withModule:@"OSCrashHandler"];
    }

    // SIGABRT signal
    _previousSIGABRTHandler = signal(SIGABRT, SIG_IGN);
    signal(SIGABRT, &handleSIGABRTSignal);
    
    // SIGILL signal
    _previousSIGILLHandler = signal(SIGILL, SIG_IGN);
    signal(SIGILL, &handleSIGILLSignal);
    
    // SIGSEGV signal
    _previousSIGSEGVHandler = signal(SIGSEGV, SIG_IGN);
    signal(SIGSEGV, &handleSIGSEGVSignal);
    
    // SIGFPE signal
    _previousSIGFPEHandler = signal(SIGFPE, SIG_IGN);
    signal(SIGFPE, &handleSIGFPESignal);
    
    // SIGBUS signal
    _previousSIGBUSHandler = signal(SIGBUS, SIG_IGN);
    signal(SIGBUS, &handleSIGBUSSignal);
    
    // SIGPIPE signal
    _previousSIGPIPEHandler = signal(SIGPIPE, SIG_IGN);
    signal(SIGPIPE, &handleSIGPIPESignal);
}

void stopCrashReporting() {
    NSSetUncaughtExceptionHandler(_previousUncaughtExceptionHandler);
    signal(SIGABRT, _previousSIGABRTHandler);
    signal(SIGILL, _previousSIGILLHandler);
    signal(SIGSEGV, _previousSIGSEGVHandler);
    signal(SIGFPE, _previousSIGFPEHandler);
    signal(SIGBUS, _previousSIGBUSHandler);
    signal(SIGPIPE, _previousSIGPIPEHandler);
}

void handleSignal(NSString* signal, NSArray* stack){
    NSString *stack_message = [stack componentsJoinedByString:@"\n"];
    
    //Sending stack as string. For Signals it's not possible to get the Exception.
    [logger logFatal:[NSString stringWithFormat:@"A fatal error has occurred. Please contact OutSystems support: %@", signal] withModule:@"OSCrashHandler" withStack:stack_message];
}

void exceptionHandler(NSException *exception) {
    [logger logFatal:[NSString stringWithFormat:@"A fatal error has occurred. Please contact OutSystems support: %@", [exception reason]] withModule:@"OSCrashHandler" withException:exception];
    
    //(not the best approach but...) Sleep before kill the process to ensure that crash exception will be stored in database
    [NSThread sleepForTimeInterval:2.0f];
    
    stopCrashReporting();
    [exception raise];
}

void handleSIGABRTSignal(int signal) {
    handleSignal(@"SIGABRT signal", [NSThread callStackSymbols]);
    
    //(not the best approach but...) Sleep before kill the process to ensure that crash exception will be stored in database
    [NSThread sleepForTimeInterval:2.0f];
    
    stopCrashReporting();
}

void handleSIGILLSignal(int signal) {
    handleSignal(@"SIGILL signal", [NSThread callStackSymbols]);

    //(not the best approach but...) Sleep before kill the process to ensure that crash exception will be stored in database
    [NSThread sleepForTimeInterval:2.0f];
    
    stopCrashReporting();
}

void handleSIGSEGVSignal(int signal) {
    handleSignal(@"SIGSEGV signal", [NSThread callStackSymbols]);
    
    //(not the best approach but...) Sleep before kill the process to ensure that crash exception will be stored in database
    [NSThread sleepForTimeInterval:2.0f];
    
    stopCrashReporting();
}

void handleSIGFPESignal(int signal) {
    handleSignal(@"SIGFPE signal", [NSThread callStackSymbols]);
    
    //(not the best approach but...) Sleep before kill the process to ensure that crash exception will be stored in database
    [NSThread sleepForTimeInterval:2.0f];
    
    stopCrashReporting();
}

void handleSIGBUSSignal(int signal) {
    handleSignal(@"SIGBUS signal", [NSThread callStackSymbols]);
    
    //(not the best approach but...) Sleep before kill the process to ensure that crash exception will be stored in database
    [NSThread sleepForTimeInterval:2.0f];
    
    stopCrashReporting();
}

void handleSIGPIPESignal(int signal) {
    handleSignal(@"SIGPIPE signal", [NSThread callStackSymbols]);
    
    //(not the best approach but...) Sleep before kill the process to ensure that crash exception will be stored in database
    [NSThread sleepForTimeInterval:2.0f];
    
    stopCrashReporting();
}
#pragma clang diagnostic pop

@end
