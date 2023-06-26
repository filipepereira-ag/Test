#import <Foundation/Foundation.h>

@interface OSDownloadOperation : NSOperation

- (id _Nonnull) initWithSession:(NSURLSession*_Nonnull)session
                            url:(NSURL*_Nonnull)url
                        headers:(NSMutableDictionary<NSString *, NSString *>* _Nullable)headers
              completionHandler:(void (^_Nullable)(NSURL * _Nullable location, NSURLResponse * _Nullable response, NSError * _Nullable error))completionHandler;

@end
