#import <Foundation/Foundation.h>
#import <UIKit/UIWebView.h>

@protocol OSCordovaLoaderEngine
@required

-(void) deploy;
- (BOOL)shouldOverrideLoadWithRequest:(NSURLRequest*)request navigationType:(UIWebViewNavigationType)navigationType;

@end
