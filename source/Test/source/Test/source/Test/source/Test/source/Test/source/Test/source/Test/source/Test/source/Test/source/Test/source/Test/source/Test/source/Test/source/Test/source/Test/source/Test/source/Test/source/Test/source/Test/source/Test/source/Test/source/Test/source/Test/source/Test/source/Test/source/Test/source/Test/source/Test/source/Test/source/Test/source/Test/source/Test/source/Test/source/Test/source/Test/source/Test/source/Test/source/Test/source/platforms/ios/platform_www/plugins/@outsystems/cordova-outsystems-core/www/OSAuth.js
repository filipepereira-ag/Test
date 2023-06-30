cordova.define("@outsystems/cordova-outsystems-core.OSAuth", function(require, exports, module) {
var exec = require("cordova/exec");
var PLUGIN_NAME = "OSAuth";

exports.startFlow = function (endpointUrl, callbackUrl) {
    return new Promise(function (resolve, reject) {
        exec(resolve, reject, PLUGIN_NAME, "startFlow", [endpointUrl, callbackUrl]);
    });
};

});
