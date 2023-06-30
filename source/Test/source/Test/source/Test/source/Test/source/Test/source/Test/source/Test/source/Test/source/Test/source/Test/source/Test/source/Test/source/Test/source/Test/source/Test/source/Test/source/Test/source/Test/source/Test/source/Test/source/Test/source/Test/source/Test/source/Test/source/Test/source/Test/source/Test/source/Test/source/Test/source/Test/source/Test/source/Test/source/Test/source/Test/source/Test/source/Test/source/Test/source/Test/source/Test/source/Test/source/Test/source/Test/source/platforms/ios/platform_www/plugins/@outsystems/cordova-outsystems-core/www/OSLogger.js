cordova.define("@outsystems/cordova-outsystems-core.OSLogger", function(require, exports, module) {
var exec = require("cordova/exec");

var pluginId = module.id.slice(0, module.id.lastIndexOf("."));
var logger_v1 = require(pluginId + ".logger-v1");

var PluginService = "OSLogger";

// Export Logger API
module.exports = logger_v1(exec, PluginService);

});
