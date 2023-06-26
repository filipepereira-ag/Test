#import "OSApplicationInfo.h"

@interface OSApplicationInfo()

@property (nonatomic, retain) NSString* platformVersion;
@property (nonatomic, retain) NSString* nativeShellVersion;
@property (nonatomic, retain) NSString* appVersion;
@property (nonatomic, retain) NSString* appVersionNumber;
@property (nonatomic, retain) NSString* appPackageIdentifier;

@end

NSString *const kDefaultPlatformVersionTag = @"DefaultPlatformVersion";
NSString *const kNativeShellVersionTag = @"NativeShellVersion";
NSString *const kAppVersionTag = @"CFBundleShortVersionString";
NSString *const kAppVersionNumberTag = @"CFBundleVersion";

@implementation OSApplicationInfo

static OSApplicationInfo *sharedInstance = nil;

-(id) initWithSettings:(NSDictionary*) settings{
    if(self = [super init]){
        [self setPlatformVersion: [settings objectForKey:[kDefaultPlatformVersionTag lowercaseString]]];
        [self setNativeShellVersion: [settings objectForKey:[kNativeShellVersionTag lowercaseString]]];
        [self setAppVersion: [[NSBundle mainBundle] objectForInfoDictionaryKey:kAppVersionTag]];
        [self setAppVersionNumber:[[NSBundle mainBundle] objectForInfoDictionaryKey:kAppVersionNumberTag]];
        [self setAppPackageIdentifier: [[NSBundle mainBundle] bundleIdentifier]];
    }

    return self;
}

+(id) initializeWithSettings:(NSDictionary*) settings{
    @synchronized (self) {
        sharedInstance = [[self alloc] initWithSettings:settings];
    }

    return self;
}

+(id) sharedInstance{
    return sharedInstance;
}

-(NSString *) getPlatformVersion{
    return [self platformVersion];
}

-(NSString *) getNativeShellVersion{
    return [self nativeShellVersion];
}

-(NSString *) getAppVersion{
    return [self appVersion];
}

-(NSString *) getAppVersionNumber{
    return [self appVersionNumber];
}

-(NSString *) getAppPackageIdentifier {
    return [self appPackageIdentifier];
}

-(void) setPlatformVersion:(NSString *) version{
    _platformVersion = version;
}

-(void) setNativeShellVersion:(NSString *) version{
    _nativeShellVersion = version;
}

-(void) setAppVersion:(NSString *) version{
    _appVersion = version;
}

-(void) setAppVersionNumber:(NSString *) version{
    _appVersionNumber = version;
}

-(void) setAppPackageIdentifier:(NSString *)packageIdentifier{
    _appPackageIdentifier = packageIdentifier;
}

@end
