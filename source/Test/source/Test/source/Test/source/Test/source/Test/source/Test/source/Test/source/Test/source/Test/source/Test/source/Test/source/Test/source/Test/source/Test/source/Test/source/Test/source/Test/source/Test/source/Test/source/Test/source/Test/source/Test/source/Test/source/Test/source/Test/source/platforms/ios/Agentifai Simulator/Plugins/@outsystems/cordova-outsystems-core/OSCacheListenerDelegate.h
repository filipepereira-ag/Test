#ifndef OSCacheListenerDelegate_h
#define OSCacheListenerDelegate_h

#import <Foundation/Foundation.h>

@protocol OSCacheListenerDelegate <NSObject>
@required

- (void) fireOnProgressEvent:(NSNumber*)loaded total:(NSNumber*)total;

- (void) fireOnErrorEvent:(NSString*) errorMessage;

- (void) fireOnFinishEvent;

- (void) updateStatus:(NSInteger)status;

- (void) throwException:(NSString*) errorMessage;

@end

#endif /* OSCacheListenerDelegate_h */
