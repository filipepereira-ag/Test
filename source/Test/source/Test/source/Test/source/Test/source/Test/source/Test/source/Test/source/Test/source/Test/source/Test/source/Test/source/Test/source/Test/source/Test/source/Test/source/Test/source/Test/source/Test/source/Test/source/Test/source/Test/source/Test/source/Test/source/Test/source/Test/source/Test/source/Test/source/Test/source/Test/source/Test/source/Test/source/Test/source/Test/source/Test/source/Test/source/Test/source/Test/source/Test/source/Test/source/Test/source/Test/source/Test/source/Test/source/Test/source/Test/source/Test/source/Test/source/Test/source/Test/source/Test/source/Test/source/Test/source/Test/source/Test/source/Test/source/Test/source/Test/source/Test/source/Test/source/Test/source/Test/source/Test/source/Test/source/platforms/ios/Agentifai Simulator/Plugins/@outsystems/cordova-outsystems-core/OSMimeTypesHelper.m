//
//  OSMimeTypesHelper.m
//  OutSystems
//
//

#import "OSMimeTypesHelper.h"
#import "OSLogger.h"

static NSString* const OSLoaderMimeTypesManifest = @"www/mimetypes.manifest";
static NSString* const OSLoaderMimeTYpeJsonObject = @"mimeTypes";
static NSString* const OSLoaderDefaultMimeType = @"*/*";

@interface OSMimeTypesHelper()
@property (nonatomic,strong) NSMutableDictionary *supportedMimeTypes;
@property (nonatomic, readonly, strong) id <OSLoggerProtocol> logger;
@end

@implementation OSMimeTypesHelper

static OSMimeTypesHelper *sharedInstance = nil;

+ (id)sharedInstance {
    @synchronized (self) {
        if(sharedInstance == nil) {
            sharedInstance = [[self alloc] init];
        }
        return sharedInstance;
    }
}

- (id)init {
    _logger = [OSLogger sharedInstance];
    
    if (self = [super init]) {
        _supportedMimeTypes = [[NSMutableDictionary alloc] init];
        
        NSString *filePath = [[[NSBundle mainBundle] bundlePath] stringByAppendingPathComponent:OSLoaderMimeTypesManifest];
        if(![self loadMimeTypesFromFilePath:filePath]){
            [self loadDefaultMimeTypes];
        }
    }
    return self;
}

# pragma mark - Internal API

-(BOOL)loadMimeTypesFromFilePath:(NSString*) filePath{
    @try {
        NSError *error = nil;
        
        NSData *jsonData = [[NSFileManager defaultManager] contentsAtPath:filePath];
        
        NSDictionary *manifest = [NSJSONSerialization JSONObjectWithData:jsonData options:0 error:&error];
        
        if(error) {
            [_logger logError:[NSString stringWithFormat:@"Failed to serialize JSON data: %@", [error localizedDescription]] withModule:@"OSCache"];
            @throw error;
        }
        
        NSDictionary *mimeTypes = [manifest objectForKey:OSLoaderMimeTYpeJsonObject];
        
        [_supportedMimeTypes addEntriesFromDictionary:mimeTypes];
        
        if([_supportedMimeTypes count] > 0){
            return true;
        }
    } @catch (NSException *exception) {
        [_logger logError:[NSString stringWithFormat:@"Failed to load mime types from manifest: %@", [exception reason]] withModule:@"OSCache" withException:exception];
    }
    
    return false;
}

-(void) loadDefaultMimeTypes{
    [_logger logDebug:@"Loading default mime types" withModule:@"OSCache"];
    
    [_supportedMimeTypes setValue:@"text/javascript" forKey:@"js"];
    [_supportedMimeTypes setValue:@"text/css" forKey:@"css"];
    [_supportedMimeTypes setValue:@"image/png" forKey:@"png"];
    [_supportedMimeTypes setValue:@"image/gif" forKey:@"gif"];
    [_supportedMimeTypes setValue:@"audio/wav" forKey:@"wav"];
    [_supportedMimeTypes setValue:@"img/svg" forKey:@"svg"];
    [_supportedMimeTypes setValue:@"text/html" forKey:@"html"];
    [_supportedMimeTypes setValue:@"application/font-woff" forKey:@"woff"];
    [_supportedMimeTypes setValue:@"application/font-woff2" forKey:@"woff2"];
    [_supportedMimeTypes setValue:@"application/octet-stream" forKey:@"ttf"];
    [_supportedMimeTypes setValue:@"application/json" forKey:@"json"];
    
}

# pragma mark - Public API

-(NSString*) getMimeTypeForExtension:(NSString*)extension{
    NSString *result = nil;
    
    result = [_supportedMimeTypes objectForKey:extension];
    
    if(!result){
        result = OSLoaderDefaultMimeType;
    }
    
    return result;
}

#pragma mark - Tests

+ (void)resetSharedInstance {
    @synchronized(self) {
        sharedInstance = nil;
    }
}

@end
