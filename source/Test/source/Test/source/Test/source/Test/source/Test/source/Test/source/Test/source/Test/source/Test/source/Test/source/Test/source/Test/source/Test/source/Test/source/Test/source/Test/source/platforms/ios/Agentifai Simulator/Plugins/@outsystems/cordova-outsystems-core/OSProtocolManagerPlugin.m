#import "OSProtocolManagerPlugin.h"
#import "OSCordovaLoader.h"
#import "RSSwizzle.h"
#import "OSHTTPFactory.h"
#import <WebKit/WebKit.h>

@interface OSProtocolManagerPlugin()

@end

@implementation OSProtocolManagerPlugin

static NSMutableArray* sRegisteredClasses;

+(NSArray*) protocolClasses {
    @synchronized (self) {
        return [sRegisteredClasses copy];
    }
}

+(void)load {
    SEL registerSelector = @selector(registerClass:);
    [RSSwizzle swizzleClassMethod:registerSelector inClass:[NSURLProtocol class] newImpFactory:^id(RSSwizzleInfo *swizzleInfo) {
        return ^BOOL(__unsafe_unretained id self, Class protocolClass) {
            
            if ([protocolClass isSubclassOfClass: [NSURLProtocol class]] != YES) {
                return NO;
            }
            
            BOOL (*originalIMP)(__unsafe_unretained id, SEL, Class);
            originalIMP = (__typeof(originalIMP))[swizzleInfo getOriginalImplementation];
            
            @synchronized (self) {
                if(!sRegisteredClasses) {
                    sRegisteredClasses = [[NSMutableArray alloc] init];
                }
                
                // Based on my experience, the observed behaviour with the original registerClass is that
                // when called twice for the same class, both instances of the class are registered. Example:
                
                // [NSURLProtocol registerClass: [FirstProtocol class]];
                // [NSURLProtocol registerClass: [SecondProtocol class]];
                // [NSURLProtocol registerClass: [FirstProtocol class]];
                //
                // The resulting stack is:
                
                // - FirstProtocol
                // - SecondProtocol
                // - FirstProtocol
                
                // So, based on this behaviour, we would want to have the same approach but always force
                // OSCordovaLoaderURLProtocol entries on the top of the stack
                
                NSArray* currentlyRegistered = [[NSArray alloc] initWithArray:sRegisteredClasses copyItems:YES];
                
                if([currentlyRegistered count] > 0) {
                    for(Class klass in currentlyRegistered) {
                        // Calling unregister will remove from sRegisteredClasses
                        // because unregisterClass has been swizzled as well!
                        [NSURLProtocol unregisterClass:klass];
                    }
                }
                
                [sRegisteredClasses addObjectsFromArray:currentlyRegistered];
                
                if([OSCordovaLoaderURLProtocol class] == protocolClass) {
                    int insertAtIndex = 0;
                    if([sRegisteredClasses containsObject:protocolClass]) {
                        
                        for(int i = 0; i < [sRegisteredClasses count]; i++) {
                            if([sRegisteredClasses[i] class] == protocolClass) {
                                insertAtIndex++;
                            } else {
                                break;
                            }
                        }
                    }
                    
                    [sRegisteredClasses insertObject:protocolClass atIndex:insertAtIndex];
                } else {
                    [sRegisteredClasses addObject:protocolClass];
                }
            }
            
            BOOL res = YES;
            
            for (Class klass in [sRegisteredClasses reverseObjectEnumerator]) {
                res = res && originalIMP(self, registerSelector, klass);
            }
            return res;
        };
    }];
    
    SEL unregisterSelector = @selector(unregisterClass:);
    [RSSwizzle swizzleClassMethod:unregisterSelector inClass:[NSURLProtocol class] newImpFactory:^id(RSSwizzleInfo *swizzleInfo) {
        return ^void(__unsafe_unretained id self, Class protocolClass) {
            
            if ([protocolClass isSubclassOfClass: [NSURLProtocol class]] != YES) {
                return;
            }
            
            void (*originalIMP)(__unsafe_unretained id, SEL, Class);
            originalIMP = (__typeof(originalIMP))[swizzleInfo getOriginalImplementation];
            
            @synchronized (self) {
                if(!sRegisteredClasses) {
                    return;
                }
                
                [sRegisteredClasses removeObject:protocolClass];
                
                originalIMP(self, registerSelector, protocolClass);
                return;
            }
            
        };
    }];
}

- (NSString*)uniqueAppInstanceIdentifier:(UIDevice*)device
{
    NSUserDefaults* userDefaults = [NSUserDefaults standardUserDefaults];
    static NSString* UUID_KEY = @"CDVUUID";
    
    // Check user defaults first to maintain backwards compatibility with previous versions
    // which didn't use identifierForVendor
    NSString* app_uuid = [userDefaults stringForKey:UUID_KEY];
    if (app_uuid == nil) {
        if ([device respondsToSelector:@selector(identifierForVendor)]) {
            app_uuid = [[device identifierForVendor] UUIDString];
        } else {
            CFUUIDRef uuid = CFUUIDCreate(NULL);
            app_uuid = (__bridge_transfer NSString *)CFUUIDCreateString(NULL, uuid);
            CFRelease(uuid);
        }
        
        [userDefaults setObject:app_uuid forKey:UUID_KEY];
        [userDefaults synchronize];
    }
    
    return app_uuid;
}

-(void)pluginInitialize{    
    WKWebView *webView = (WKWebView *)self.webView;
    [OSHTTPFactory setUserAgent: webView.configuration.applicationNameForUserAgent];
    NSString *uniqueIdentifier = [[[UIDevice currentDevice] identifierForVendor] UUIDString];
    if(uniqueIdentifier != nil) {
        [OSHTTPFactory setDeviceUUID: uniqueIdentifier];
    }
}

@end
