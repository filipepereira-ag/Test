
#import <PureeOS/Puree.h>

extern NSString * const PURBufferedOutputSettingsHostname;
extern NSString * const PURBufferedOutputSettingsApplicationUrl;
extern NSString * const kOSPureeServerOutputDeviceInfoKey;

@interface OSPureeServerOutput : PURBufferedOutput

@property (nonatomic,strong) NSString *hostname;
@property (nonatomic,strong) NSString *applicationUrl;
@property (nonatomic, strong) NSString *deviceUUID;
@property (nonatomic, strong) NSURLSession *urlSession;

@end
