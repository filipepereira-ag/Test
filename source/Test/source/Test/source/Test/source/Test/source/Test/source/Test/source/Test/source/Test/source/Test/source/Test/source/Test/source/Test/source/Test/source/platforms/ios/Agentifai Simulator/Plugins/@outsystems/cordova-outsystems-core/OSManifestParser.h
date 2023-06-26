#import <Foundation/Foundation.h>
#import "OSManifestParserEngineProtocol.h"

extern NSString* const OSManifestFile;

@interface OSManifestParser : NSObject<OSManifestParserEngineProtocol>

+ (id)sharedInstance;

-(OSManifest*) getManifestInfo:(NSDictionary*) jsonDictionary;

-(NSString*) getManifestVersion:(NSDictionary*) jsonDictionary;

-(NSString*) getManifestUrl:(NSString*) version;

@end
