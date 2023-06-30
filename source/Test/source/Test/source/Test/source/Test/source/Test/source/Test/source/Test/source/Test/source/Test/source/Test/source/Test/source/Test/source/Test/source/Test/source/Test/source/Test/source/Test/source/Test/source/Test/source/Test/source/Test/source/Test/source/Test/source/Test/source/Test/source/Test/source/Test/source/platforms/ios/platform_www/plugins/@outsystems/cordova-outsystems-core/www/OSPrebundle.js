cordova.define("@outsystems/cordova-outsystems-core.OSPrebundle", function(require, exports, module) {
var exec = require('cordova/exec');

/**
 * API definition
 **/

module.exports.getManifest = function(success, fail) {
    exec(success, fail, "OSPreBundle", "getManifest");
}
});
