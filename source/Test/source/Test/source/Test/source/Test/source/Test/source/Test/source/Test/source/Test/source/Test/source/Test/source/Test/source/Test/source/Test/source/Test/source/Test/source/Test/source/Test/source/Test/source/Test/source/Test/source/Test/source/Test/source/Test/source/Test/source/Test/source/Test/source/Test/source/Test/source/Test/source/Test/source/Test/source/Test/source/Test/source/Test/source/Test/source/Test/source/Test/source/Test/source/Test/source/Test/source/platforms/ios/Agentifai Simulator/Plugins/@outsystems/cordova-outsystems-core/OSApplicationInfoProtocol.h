#import <Foundation/Foundation.h>

@protocol OSApplicationInfoProtocol
@required

/**
 * Returns the Platform Version that triggered the native build
 *
 * @deprecated Not available for newer OutSystems platforms. Will be deleted in the next major version.
 */
-(NSString *) getPlatformVersion DEPRECATED_MSG_ATTRIBUTE("Not available for newer OutSystems platforms. Will be deleted in the next major version.");

/**
 * Returns the NativeShell Version
 */
-(NSString *) getNativeShellVersion;

/**
 * Returns the App Version
 */
-(NSString *) getAppVersion;

/**
 * Returns the App Version Number
 */
-(NSString *) getAppVersionNumber;

/**
 * Returns the App Package Identifier
 */
-(NSString *) getAppPackageIdentifier;

@end
