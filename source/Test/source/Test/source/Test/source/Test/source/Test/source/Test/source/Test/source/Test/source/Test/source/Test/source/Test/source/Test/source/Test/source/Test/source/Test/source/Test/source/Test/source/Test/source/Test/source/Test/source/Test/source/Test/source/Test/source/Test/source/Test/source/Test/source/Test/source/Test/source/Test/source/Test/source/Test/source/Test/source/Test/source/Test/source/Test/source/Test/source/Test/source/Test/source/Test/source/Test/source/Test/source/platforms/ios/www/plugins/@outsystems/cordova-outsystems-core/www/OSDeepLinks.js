cordova.define("@outsystems/cordova-outsystems-core.OSDeepLinks", function(require, exports, module) {
var exec = cordova.require("cordova/exec");
var channel = cordova.require("cordova/channel");

var deepLinksHandlerChannel = channel.create("OSDeepLinksHandlerChannel");

/**
 * Static channel for the communication between the webview and
 * native part of the plugin only.
 */
cordova.callbacks["OSDeepLinksStaticChannel"] = {
    success: function (data) {
        if (data === "undefined") {
            return;
        }

        if (data.URL !== "undefined") {
            document.addEventListener("deviceready", function () {
                switch (data.Type) {
                    case "function":
                        handleOpenURL(data.URL);
                        break;
                    case "event":
                        deepLinksHandlerChannel.fire(data.URL);
                        break;
                    default:
                        var osModule = requirejs.specified("OutSystems/ClientRuntime/Main")
                            ? "OutSystems/ClientRuntime/Main"
                            : "OutSystems";
                        var OutSystems = requirejs(osModule);

                        if (!!OutSystems.Public) {
                            var navigation = new OutSystems.Public.Navigation({ isOutOfContext: false });
                            navigation.navigateTo(data.URL, 1, false);
                        }
                }
            });
        }
    },
    fail: function () {
        OutSystemsNative.Logger.logError("Failed to register OSDeepLinks static channel", "OSDeepLinks");
        throw new Error("Failed to register OSDeepLinks static channel");
    },
};

/**
 * Try to register a callback for the runtime onLoadComplete event
 * so we can properly trigger any deeplink event.
 * 
 * The ApplicationLifecycle API provides information about the status 
 * of the application's lifecycle. It is used to protect the app during
 * upgrades, when local model access shouldn't be allowed, 
 * and to customize the application loading process.
 * 
 * The onLoadComplete event is triggered when the application is fully 
 * loaded and ready to use.
 **/
function registerRuntimeCallback() {
    var osModule = requirejs.specified("OutSystems/ClientRuntime/Main")
        ? "OutSystems/ClientRuntime/Main"
        : "OutSystems";

    // In some cases, such as the cold start of an iOS app with a long OTA, the ClientRuntime
    // module was not yet available at this moment. Therefore we are forcing the load of the
    // module at this point.
    requirejs([osModule], (OutSystems) => {
        if (!!OutSystems.Public && !!OutSystems.Public.ApplicationLifecycle) {
            OutSystems.Public.ApplicationLifecycle.listen({
                onLoadComplete: () => {
                    OutSystemsNative.Logger.logDebug("Triggering DeepLink after onLoadComplete event", "OSDeepLinks");
                    setTimeout(() => {
                        exec(null, null, "OSDeepLinks", "trigger");
                    }, 1000);
                },
            });
        } else {
            OutSystemsNative.Logger.logError("Failed to register the runtime callback with error: " + error, "OSDeepLinks");
            // Will trigger the deeplink as soon as possible
            exec(null, null, "OSDeepLinks", "trigger");
        }
    });
}

/**
 * Called after 'deviceready' event
 **/ 
channel.deviceready.subscribe(function () {
    // Device is ready now, the listeners are registered and all queued events can be executed.
    exec(
        () => {
            registerRuntimeCallback();
        },
        (error) => {
            OutSystemsNative.Logger.logError(
                `Failed to register OSDeepLinks handler with error: ${error}`,
                "OSDeepLinks"
            );
            throw new Error(`Failed to register OSDeepLinks handler with error: ${error}`);
        },
        "OSDeepLinks",
        "deviceready",
        []
    );
});

});
