//
//  OSCustomSchemeHandler.h
//  WKWebViewTest
//
//  Created by Pedro Maroco on 22/07/2019.
//
#import <Foundation/Foundation.h>
#import <WebKit/WebKit.h>
#import "OSLogger.h"

@interface OSCustomSchemeHandler : NSObject <WKURLSchemeHandler>

@property (nonatomic, strong) NSString *referrer;
@property (nonatomic, assign, getter=isReferrerHeaderEnabled) BOOL referrerHeaderEnabled;

@end
