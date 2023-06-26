//
//  OSMimeTypesHelper.h
//  OutSystems
//
//

#import <Foundation/Foundation.h>

@interface OSMimeTypesHelper : NSObject

+ (id)sharedInstance;

-(NSString*) getMimeTypeForExtension:(NSString*)extension;

@end
