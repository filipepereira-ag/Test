#import <UIKit/UIKit.h>
#import "OSManifest.h"

@protocol OSManifestParserEngineProtocol <NSObject>
@required

-(OSManifest*) getManifestInfo:(NSDictionary*) jsonDictionary;

-(NSString*) getManifestVersion:(NSDictionary*) jsonDictionary;

-(NSString*) getManifestUrl:(NSString*) version;

@end
