cordova.define("@outsystems/cordova-outsystems-core.cordova-outsystems-http", function(require, exports, module) {
var pluginId = module.id.slice(0, module.id.lastIndexOf("."));

var exec = require("cordova/exec");
var uuid_v1 = require(pluginId + ".uuid-v1");
var util = require(pluginId + ".util");
var httpRequestInit = require(pluginId + ".request");
var requestManagerInit = require(pluginId + ".request-manager");
var publicInterface = require(pluginId + ".public-interface");

module.exports = publicInterface(
    exec,
    httpRequestInit,
    requestManagerInit,
    util,
    uuid_v1
);

});
