#import "OSAuth.h"

NSString *const OSAuthErrorMissingPluginParameter = @"ERROR_MISSING_PLUGIN_PARAMETERS";

@interface OSAuth ()

@property (nonatomic, retain) CDVInvokedUrlCommand *command;
@property (nonatomic, retain) AuthController *authController;

@end

@implementation OSAuth

- (void)pluginInitialize {
    self.authController = [[AuthController alloc] initWithDelegate:self];
}

- (void)startFlow:(CDVInvokedUrlCommand *)command {
    if (command.arguments == nil || command.arguments.count != 2 || ![[command.arguments objectAtIndex:0] isKindOfClass:[NSString class]] || ![[command.arguments objectAtIndex:1] isKindOfClass:[NSString class]]) {
        CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:OSAuthErrorMissingPluginParameter];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        return;
    }
    self.command = command;
    NSString *endpointUrl = [command.arguments objectAtIndex:0];
    NSString *callbackUrl = [command.arguments objectAtIndex:1];
    [self.authController startFlowWithEndpointUrl:endpointUrl callbackUrl:callbackUrl atWindow:self.viewController.view.window];
}

#pragma mark AuthControllerDelegate protocol

- (void)authFinishedWithResult:(nonnull AuthResult *)result {
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:(result.status == AuthResultStatusError ? CDVCommandStatus_ERROR : CDVCommandStatus_OK) messageAsString:result.message];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:self.command.callbackId];
}

@end
