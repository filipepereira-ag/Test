
#import "OSOTLPApiKeyManager.h"

#import "OSHTTPFactory.h"


NSErrorDomain const OSOTLPApiKeyManagerErrorDomain = @"OSOTLPApiKeyManagerErrorDomain";


static NSString * const kUserDefaultsApiKey = @"com.OutSystems.OSLogger.ApiKey";

static NSString * const kHTTPMethodType = @"GET";
static NSString * const kHTTPAcceptHeaderName = @"Accept";
static NSString * const kHTTPAcceptHeaderValue = @"application/json";


@interface OSOTLPApiKeyManager ()

@property (nonatomic, nonnull, strong) NSString * hostname;
@property (nonatomic, nonnull, strong) NSString * applicationUrl;

@property (nonatomic) BOOL requesting;
@property (nonatomic, nonnull, strong) NSMutableArray * successHandlers;
@property (nonatomic, nonnull, strong) NSMutableArray * failureHandlers;

@property (nonatomic) dispatch_queue_t queue;
@property (nonatomic, nonnull, strong) NSUserDefaults * defaults;

@property (nonatomic, nonnull, strong) NSURLSession * urlSession;

@end


@implementation OSOTLPApiKeyManager

- (nonnull instancetype)initWithHostname:(nonnull NSString *)hostname andApplicationUrl:(nonnull NSString *)applicationUrl {
    if (self = [super init]) {
        _hostname = hostname;
        _applicationUrl = applicationUrl;
        
        _requesting = NO;
        _successHandlers = [NSMutableArray array];
        _failureHandlers = [NSMutableArray array];
        
        // Used to guarantee mutual exclusion in some portions of logic in this class
        _queue = dispatch_queue_create("com.OutSystems.OSLogger.ApiKey.queue", DISPATCH_QUEUE_SERIAL);
        
        _defaults = [NSUserDefaults standardUserDefaults];
    }
    
    return self;
}

+ (nonnull instancetype)managerWithHostname:(nonnull NSString *)hostname andApplicationUrl:(nonnull NSString *)applicationUrl {
    return [[self alloc] initWithHostname:hostname andApplicationUrl:applicationUrl];
}

// NSUserDefaults

// Gets the stored API key
- (nullable NSString *)getApiKeyFromUserDefaults {
    return [self.defaults stringForKey:kUserDefaultsApiKey];
}

// Stores a new API key (nullable)
- (void)storeApiKeyInUserDefaults:(nullable NSString *)newApiKey {
    [self.defaults setValue:newApiKey forKey:kUserDefaultsApiKey];
}

// Request new token

typedef void (^RequestApiKeySuccessHandler) (NSString * __nonnull newApiKey);
typedef void (^RequestApiKeyFailureHandler) (NSError * __nonnull error);

// Fetches an API key from the Client Settings endpoint (does not store anything)
- (void)requestApiKeyWithSuccessHandler:(nonnull RequestApiKeySuccessHandler)success
                      andFailureHandler:(nonnull RequestApiKeyFailureHandler)failure {
    
    NSMutableURLRequest *urlRequest = [NSMutableURLRequest requestWithURL:[self getRestApiUrl]];
    [urlRequest addValue:kHTTPAcceptHeaderValue forHTTPHeaderField:kHTTPAcceptHeaderName];
    [urlRequest setHTTPMethod:kHTTPMethodType];
    
    NSURLSessionDataTask *taskData = [self.urlSession dataTaskWithRequest:urlRequest completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
        NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *)response;
        
        if (error) {
            failure(error);
            
        } else if (httpResponse.statusCode != 200) {
            NSString *description = [NSString stringWithFormat:@"Request failed with error code %ld", httpResponse.statusCode];
            
            failure([NSError errorWithDomain:OSOTLPApiKeyManagerErrorDomain
                                        code:OSOTLPApiKeyManagerErrorUnsuccessfulRequest
                                    userInfo:@{ NSLocalizedDescriptionKey: NSLocalizedString(description, nil) }]);
            
        } else {
            NSError *serializationError = nil;
            id body = [NSJSONSerialization JSONObjectWithData:data options:0 error:&serializationError];
            
            if (serializationError) {
                failure(serializationError);
                
            } else {
                id settings = [body respondsToSelector:@selector(objectForKey:)] ? [body objectForKey:@"clientSettings"] : nil;
                id apiKey = [settings respondsToSelector:@selector(objectForKey:)] ? [settings objectForKey:@"LoggerApiKey"] : nil;
                
                if ([apiKey isKindOfClass:[NSString class]] && [apiKey length]) {
                    success(apiKey);
                    
                } else {
                    NSString *description = @"An unexpected error has occurred";
                    
                    failure([NSError errorWithDomain:OSOTLPApiKeyManagerErrorDomain
                                                code:OSOTLPApiKeyManagerErrorUnexpected
                                            userInfo:@{ NSLocalizedDescriptionKey: NSLocalizedString(description, nil) }]);
                }
            }
        }
    }];
    
    [taskData resume];
}

// Client Settings endpoint for the environment
- (nonnull NSURL *)getRestApiUrl {
    NSString *string = [NSString stringWithFormat:@"https://%@/%@/moduleservices/clientsettingsinfo",
                        self.hostname,
                        self.applicationUrl];
    
    return [NSURL URLWithString:string];
}

// Public methods

- (void)invalidateApiKeyWithCompletionHandler:(nonnull InvalidateApiKeyCompletionHandler)completion {
    dispatch_async(self.queue, ^{
        // Delete the current API key
        // This forces a new one to be fetched when getApiKey is called
        [self storeApiKeyInUserDefaults:nil];
        completion();
    });
}

- (void)getApiKeyWithSuccessHandler:(nonnull GetApiKeySuccessHandler)success
                  andFailureHandler:(nonnull GetApiKeyFailureHandler)failure {
    dispatch_async(self.queue, ^{
        
        // Provides current API key if one is available
        NSString *currentApiKey = [self getApiKeyFromUserDefaults];
        if (currentApiKey) {
            success(currentApiKey, NO);
            return;
        }
        
        // A valid API key is not available, so a new one is required
        // Register handlers to notify when a new key is available (or the operation fails)
        [self.successHandlers addObject:success];
        [self.failureHandlers addObject:failure];
        
        // If a new key is already being requested, stop here
        // The callback will be called when the new key is available
        if (self.requesting) {
            return;
        }
        
        // A new key will be requested
        self.requesting = YES;
        
        [self requestApiKeyWithSuccessHandler:^(NSString * _Nonnull newApiKey) {
            dispatch_async(self.queue, ^{
                
                // Store the new key
                [self storeApiKeyInUserDefaults:newApiKey];
                
                // Notify via all success handlers
                for (GetApiKeySuccessHandler handler in self.successHandlers) {
                    handler(newApiKey, YES);
                }
                
                // Clear requesting/handlers
                [self.successHandlers removeAllObjects];
                [self.failureHandlers removeAllObjects];
                self.requesting = NO;
            });
            
        } andFailureHandler:^(NSError * _Nonnull error) {
            dispatch_async(self.queue, ^{
                
                // Notify via all failure handlers
                for (GetApiKeyFailureHandler handler in self.failureHandlers) {
                    handler(error);
                }
                
                // Clear requesting/handlers
                [self.successHandlers removeAllObjects];
                [self.failureHandlers removeAllObjects];
                self.requesting = NO;
            });
        }];
    });
}

// Lazy load an NSURLSession (since in most runs it won't be required)
- (NSURLSession *)urlSession {
    if (!_urlSession) {
        // Create the URLSession on the default configuration
        NSURLSessionConfiguration *defaultSessionConfiguration = [OSHTTPFactory defaultConfiguration];
        defaultSessionConfiguration.HTTPMaximumConnectionsPerHost = 1;
        _urlSession = [NSURLSession sessionWithConfiguration:defaultSessionConfiguration];
    }
    
    return _urlSession;
}

@end
