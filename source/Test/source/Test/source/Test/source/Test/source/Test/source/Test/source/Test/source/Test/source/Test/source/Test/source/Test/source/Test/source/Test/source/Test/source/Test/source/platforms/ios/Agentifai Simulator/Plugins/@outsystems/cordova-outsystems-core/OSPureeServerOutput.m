
#import "OSPureeServerOutput.h"
#import "OSDeviceInfo.h"
#import "OSLoggerPlugin.h"
#import "OSBroadcaster.h"
#import "OSHTTPFactory.h"

NSString * const PURBufferedOutputSettingsHostname = @"Hostname";
NSString * const PURBufferedOutputSettingsApplicationUrl = @"ApplicationUrl";
NSString * const kOSPureeServerOutputDeviceInfoKey = @"kDeviceInfo";

static NSString * const kContentType = @"application/json";
static NSString * const kHeaderFieldContentType = @"Content-Type";
static NSString * const kHeaderFieldAccept = @"Accept";
static NSString * const kHTTPMethodType = @"POST";
static NSString * const kHTTPHeaderDeviceUUID = @"outsystems-device-uuid";

static int const kMaxLogCapacity = 1000;
static int const kMaxRetryExponent = 20;
static double const kRetryBaseFactor = 1.5;
static int const kNumberOfRetriesBeforeRequestPing = 5;

@interface OSPureeServerOutput ()

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wobjc-property-synthesis"
@property (nonatomic) NSTimer *timer;
#pragma clang diagnostic pop
@property (nonatomic) NSInteger retryCount;
@property (nonatomic) NSInteger pingRequestRetryCount;
@property (nonatomic, assign) OSDeviceInfo* deviceInfo;

- (void)setUpTimerIfNeeded;

@end

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wincomplete-implementation"
@implementation OSPureeServerOutput
#pragma clang diagnostic pop

-(NSURLSession *)urlSession {
    if(!_urlSession) {
        // Create the URLSession on the default configuration
        NSURLSessionConfiguration *defaultSessionConfiguration = [OSHTTPFactory defaultConfiguration];
        defaultSessionConfiguration.HTTPMaximumConnectionsPerHost = 1;
        _urlSession = [NSURLSession sessionWithConfiguration:defaultSessionConfiguration];
    }
    
    return _urlSession;
}


-(void)configure:(NSDictionary<NSString *,id> *)settings {
    [super configure:settings];
    
    // configure buffered output plugin
    
    //Read properties to get the endpoint of API
    _hostname = [settings objectForKey:PURBufferedOutputSettingsHostname];
    _applicationUrl = [settings objectForKey:PURBufferedOutputSettingsApplicationUrl];
    
    //Get device uuid
    _deviceUUID = [[OSLoggerPlugin getDeviceInfoInstance] getDeviceUUID];

    id obj = [settings objectForKey:kOSPureeServerOutputDeviceInfoKey];
    NSAssert(obj || [obj isKindOfClass: [OSDeviceInfo class]], @"Missing OSDeviceInfo.");
    self.deviceInfo = obj;
    
    
    _retryCount = 0;
    _pingRequestRetryCount = 0;

    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(networkDidChanged:) name:kOSBroadcasterNetworkChangedNotification object:nil];
}

-(void)writeChunk:(PURBufferedOutputChunk *)chunk completion:(void (^)(BOOL))completion {
    
    OSDeviceInfo *deviceInfo = [OSLoggerPlugin getDeviceInfoInstance];
    if(![deviceInfo isConnected]){
        completion(NO);
        return;
    }
    
    NSArray *logs = [self getBufferLogsFromOutputChunk:chunk];
    
    NSError *error;
    NSData *postLogData = [NSJSONSerialization dataWithJSONObject:logs options:0 error:&error];
    
    // Setup url request
    long long milliseconds = (long long)([[NSDate date] timeIntervalSince1970] * 1000.0);
    NSURL *url = [self getRestAPIUrlWithHostname:_hostname applicationUrl:_applicationUrl andClientTimestamp:milliseconds];
    
    NSMutableURLRequest *urlRequest = [NSMutableURLRequest requestWithURL:url];
    [urlRequest setHTTPBody:postLogData];
    [urlRequest addValue:kContentType forHTTPHeaderField:kHeaderFieldContentType];
    [urlRequest addValue:kContentType forHTTPHeaderField:kHeaderFieldAccept];
    [urlRequest setHTTPMethod:kHTTPMethodType];
    //TODO Needs to be confirmed if we need to use that
    [urlRequest setAllHTTPHeaderFields:[NSHTTPCookie requestHeaderFieldsWithCookies:[NSHTTPCookieStorage sharedHTTPCookieStorage].cookies]];
    [urlRequest addValue:_deviceUUID forHTTPHeaderField:kHTTPHeaderDeviceUUID];
    
    NSURLSessionDataTask *taskData = [self.urlSession dataTaskWithRequest:urlRequest completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
        NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *)response;
        if (error || httpResponse.statusCode != 200) {
            NSLog(@"Failed sending logs to Service Center API with Status Code: %ld | Error: %@", (long)httpResponse.statusCode, error.description);
            completion(NO);
            return;
        }
        completion(YES);
        NSLog(@"Logs sent with success");
    }];
    
    [taskData resume];
}

- (void)callWriteChunk:(PURBufferedOutputChunk *)chunk
{
    if ([self reachedRetryLimit]) {
        [self.buffer addObjectsFromArray:chunk.logs];
        return;
    }
    
    [self writeChunk:chunk completion:^(BOOL success) {
        [[NSNotificationCenter defaultCenter] postNotificationName:PURBufferedOutputDidTryWriteChunkNotification object:self];

        if (success) {
            [self.logStore removeLogs:chunk.logs forOutput:self completion:^{
                [[NSNotificationCenter defaultCenter] postNotificationName:PURBufferedOutputDidSuccessWriteChunkNotification object:self];
                //Ensure that we setUp the timer on the main thread
                dispatch_async(dispatch_get_main_queue(), ^{
                    self.retryCount = 0;
                    if ([self.buffer count] > 0) {
                        [self setUpTimerIfNeeded];
                    }
                });
            }];
            return;
        }
        [self.buffer addObjectsFromArray:chunk.logs];
        
        self.retryCount++;
        
        if ([self reachedRetryLimit]) {
            NSLog(@"Failed sending logs more than %d times. A ping request will be sent", kNumberOfRetriesBeforeRequestPing);
            dispatch_async(dispatch_get_main_queue(), ^{
                [self setUpPingTimer];
            });
            return;
        }
            
        dispatch_async(dispatch_get_main_queue(), ^{
            if ([self.buffer count] > 0) {
                [self setUpTimerIfNeeded];
            }
        });
    }];
}

- (BOOL)reachedRetryLimit {
    return self.retryCount >= kNumberOfRetriesBeforeRequestPing;
}

- (void)setUpTimer
{
    @synchronized (self) {
        double secondsToNextFlush = [self calculateRetryTime: _retryCount];
        if (_retryCount > 0) {
            NSLog(@"Retrying send logs in %f seconds", secondsToNextFlush);
        }
        self.timer = [NSTimer timerWithTimeInterval:secondsToNextFlush
                                             target:self
                                           selector:@selector(tick)
                                           userInfo:nil
                                            repeats:NO];
        
        [self.timer setTolerance:1.0];
        [[NSRunLoop currentRunLoop] addTimer:self.timer forMode:NSRunLoopCommonModes];
    }
}

- (double)calculateRetryTime:(NSUInteger)numberOfRetries {
    NSUInteger exponent = MIN(numberOfRetries, kMaxRetryExponent);
    return pow(kRetryBaseFactor, exponent) + self.flushInterval;
}

- (void)setUpPingTimer {
    double secondsToNextPingRequest = [self calculateRetryTime: _pingRequestRetryCount];
    if (_pingRequestRetryCount > 0) {
        NSLog(@"Retrying send logs in %f seconds", secondsToNextPingRequest);
    }
    self.timer = [NSTimer timerWithTimeInterval:secondsToNextPingRequest
                                         target:self
                                       selector:@selector(requestPing)
                                       userInfo:nil
                                        repeats:NO];
    [self.timer setTolerance:1.0];
    [[NSRunLoop currentRunLoop] addTimer:self.timer forMode:NSRunLoopCommonModes];
}

- (void)requestPing {
    NSString *urlStr = [NSString stringWithFormat:@"https://%@/%@/moduleservices/ping", _hostname, _applicationUrl];

    NSMutableURLRequest *request = [[NSMutableURLRequest alloc] init];
    [request setHTTPMethod:@"GET"];
    [request setURL:[NSURL URLWithString:urlStr]];

    NSURLSessionDataTask *taskData = [self.urlSession dataTaskWithRequest:request completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
        NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *)response;
        if (error || httpResponse.statusCode != 200) {
            NSLog(@"Failed requesting ping with Status Code: %ld | Error: %@", (long)httpResponse.statusCode, error.description);
            self.pingRequestRetryCount++;
            dispatch_async(dispatch_get_main_queue(), ^{
                [self setUpPingTimer];
            });
            return;
        }
        NSLog(@"Ping sent with success");
        self.retryCount = 0;
        self.pingRequestRetryCount = 0;
        dispatch_async(dispatch_get_main_queue(), ^{
            [self setUpTimerIfNeeded];
        });
    }];
    
    [taskData resume];
}

#pragma mark Helper

-(NSArray*) getBufferLogsFromOutputChunk:(PURBufferedOutputChunk *) chunk{
    // Creating List with Logs to send to server
    NSMutableArray *logs = [NSMutableArray new];
    for (PURLog *log in chunk.logs) {
        NSMutableDictionary *logDict = [log.userInfo mutableCopy];
        
        [logs addObject:logDict];
    }
    
    return logs;
}

-(NSURL*) getRestAPIUrlWithHostname:(NSString *) hostname applicationUrl:(NSString *) applicationUrl andClientTimestamp:(long long) timestamp {
    NSString *urlStr = [NSString stringWithFormat:@"https://%@/%@/moduleservices/log?clientTimeInMillis=%lld",hostname, applicationUrl, timestamp];
    return [NSURL URLWithString:urlStr];
}

- (void) truncateBufferedLogs {
    NSUInteger logCount = [self.buffer count];
    if(logCount > kMaxLogCapacity) {
        @try{
            NSUInteger lengthIndexSet = logCount - kMaxLogCapacity;
            NSIndexSet *indexSet = [NSIndexSet indexSetWithIndexesInRange:NSMakeRange(kMaxLogCapacity, lengthIndexSet)];
            NSArray<PURLog *> *flushLogs = [self.buffer objectsAtIndexes:indexSet];
            [self.buffer removeObjectsAtIndexes:indexSet];
            [self.logStore removeLogs:flushLogs forOutput:self completion:nil];
        }
        @catch(NSException *exception){
            NSLog(@"Error on handling with log buffer: %@", exception.reason);
        }
    }
}

-(void) networkDidChanged:(NSNotification *)notification
{
    NSDictionary *data = [notification object];
    
    if([[data objectForKey:kOSBroadcasterNetworkStatus] isEqualToString:kOSBroadcasterNetworkOnline]){
        // Method start already loads the logs from database and apply the truncate
        [self start];
    }else if([[data objectForKey:kOSBroadcasterNetworkStatus] isEqualToString:kOSBroadcasterNetworkOffline]){
        [self.buffer removeAllObjects];
    }
}

-(void) dealloc {
    [[NSNotificationCenter defaultCenter] removeObserver:self name:kOSBroadcasterNetworkChangedNotification object:nil];
}

@end
