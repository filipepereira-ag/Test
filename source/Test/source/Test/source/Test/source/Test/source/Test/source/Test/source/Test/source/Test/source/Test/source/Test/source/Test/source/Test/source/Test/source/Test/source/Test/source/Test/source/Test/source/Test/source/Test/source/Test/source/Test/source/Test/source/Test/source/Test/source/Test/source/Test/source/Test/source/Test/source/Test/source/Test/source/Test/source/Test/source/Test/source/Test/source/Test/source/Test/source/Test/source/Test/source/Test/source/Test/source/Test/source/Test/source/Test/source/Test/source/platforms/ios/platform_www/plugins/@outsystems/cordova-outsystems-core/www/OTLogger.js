cordova.define("@outsystems/cordova-outsystems-core.OTLogger", function(require, exports, module) {
var exec = require("cordova/exec");
var channel = require("cordova/channel");

var pluginId = module.id.slice(0, module.id.lastIndexOf("."));
var logger_v2 = require(pluginId + ".logger-v2");
var utils = require(pluginId + ".utils");

var PluginService = "OSLogger";

// Export Logger API
module.exports = logger_v2(exec, PluginService, utils);

// Called after 'deviceready' event
// This is required to handle cases where logs were being sent to the server before
// SSL Pinning being applied.
channel.deviceready.subscribe(function () {
    exec(null, null, PluginService, "deviceReady", []);
});

});
