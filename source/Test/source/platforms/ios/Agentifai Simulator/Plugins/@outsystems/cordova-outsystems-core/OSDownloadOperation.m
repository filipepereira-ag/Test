#import "OSDownloadOperation.h"

typedef NS_ENUM(NSInteger,OSDownloadOperationState)  {
    OSDownloadOperationStateReady = 0,
    OSDownloadOperationStateExecuting = 1,
    OSDownloadOperationStateFinished = 2
};

typedef void (^DownloadResourceBlock)(NSURL * _Nullable location, NSURLResponse * _Nullable response, NSError * _Nullable error);

@interface OSDownloadOperation()

@property (nonatomic) NSURLSession *session;
@property (nonatomic) NSURL *url;
@property DownloadResourceBlock completionHandler;

@property (nonatomic, strong) NSURLSessionDownloadTask *downloadTask;
@property (nonatomic) OSDownloadOperationState state;
@property (nonatomic) NSMutableDictionary<NSString *, NSString *> *headersDictionary;

@end

@implementation OSDownloadOperation

-(id)init{
    if(self = [super init]){
        _state = OSDownloadOperationStateReady;
    }
    
    return self;
}

-(id) initWithSession:(NSURLSession*)session
                  url:(NSURL*)url
              headers:(NSMutableDictionary<NSString *, NSString *>*)headers
    completionHandler:(void (^)(NSURL * _Nullable location, NSURLResponse * _Nullable response, NSError * _Nullable error))completionHandler {
    if(self = [self init]){
        self.url = url;
        self.session = session;
        self.completionHandler = completionHandler;
        self.headersDictionary = headers;
    }
    
    return self;
}

-(void)setState:(OSDownloadOperationState)state{
    [self willChangeValueForKey:@"isExecuting"];
    [self willChangeValueForKey:@"isFinished"];
    
    _state = state;

    [self didChangeValueForKey:@"isExecuting"];
    [self didChangeValueForKey:@"isFinished"];
}

-(BOOL)isReady {
    return self.state == OSDownloadOperationStateReady;
}

-(BOOL)isExecuting {
    return self.state == OSDownloadOperationStateExecuting;
}

-(BOOL)isFinished {
    return self.state == OSDownloadOperationStateFinished;
}

-(void)start {
    if([self isCancelled]){
        self.state = OSDownloadOperationStateFinished;
        return;
    }
    
    self.state = OSDownloadOperationStateExecuting;
    
    NSMutableURLRequest *urlRequest = [NSMutableURLRequest requestWithURL:self.url];
    
    if(self.headersDictionary != nil) {
        for(id key in self.headersDictionary) {
            [urlRequest addValue:[self.headersDictionary objectForKey:key] forHTTPHeaderField:key];
        }
    }
        
    _downloadTask = [self.session downloadTaskWithRequest:urlRequest completionHandler:^(NSURL * _Nullable location, NSURLResponse * _Nullable response, NSError * _Nullable error) {
        
        if(self.completionHandler){
            self.completionHandler(location,response,error);
        }
        
        // we do want to call the setter here
        self.state = OSDownloadOperationStateFinished;
    }];
    
    [_downloadTask resume];
}

-(void) cancel {
    [super cancel];
    
    if (_downloadTask) {
        [_downloadTask cancel];
    }
}


@end
