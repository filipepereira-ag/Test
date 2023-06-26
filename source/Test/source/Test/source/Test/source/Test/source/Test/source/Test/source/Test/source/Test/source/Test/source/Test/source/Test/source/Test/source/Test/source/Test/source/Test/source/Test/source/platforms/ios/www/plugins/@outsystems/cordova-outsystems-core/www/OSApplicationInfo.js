cordova.define("@outsystems/cordova-outsystems-core.OSApplicationInfo", function(require, exports, module) {
var exec = require('cordova/exec');

/**
* API definition
**/

/**
 * Returns the Platform Version that triggered the native build
 *
 * @deprecated Not available for Phoenix platforms. Will be deleted in the next major version.
 * @param {*} success The success callback
 * @param {*} fail  The failure callback
 */
exports.getPlatformVersion = function(success, fail) {
    exec(success, fail, "OSApplicationInfo", "getPlatformVersion");
}

/**
 * Returns the NativeShell Version
 *
 * @param {*} success The success callback
 * @param {*} fail  The failure callback
 */
exports.getNativeShellVersion = function(success, fail) {
    exec(success, fail, "OSApplicationInfo", "getNativeShellVersion");
}

/**
 * Returns the App Version
 *
 * @param {*} success The success callback
 * @param {*} fail  The failure callback
 */
exports.getAppVersion = function(success, fail) {
    exec(success, fail, "OSApplicationInfo", "getAppVersion");
}

/**
 * Returns the App Version Number
 *
 * @param {*} success The success callback
 * @param {*} fail  The failure callback
 */
exports.getAppVersionNumber = function(success, fail) {
    exec(success, fail, "OSApplicationInfo", "getAppVersionNumber");
}

/**
 * Returns the App Package Identifier
 *
 * @param {*} success The success callback
 * @param {*} fail  The failure callback
 */
 exports.getAppPackageIdentifier = function(success, fail) {
    exec(success, fail, "OSApplicationInfo", "getAppPackageIdentifier");
}

});
