cordova.define("@outsystems/cordova-outsystems-core.logger-v1", function(require, exports, module) {
/**
 * Internal log levels that map to plugin actions
 */
const LogLevel = {
    Verbose: "logVerbose",
    Debug: "logDebug",
    Info: "logInfo",
    Warning: "logWarning",
    Error: "logError",
};

/**
 * API definition
 **/
const init = function (cordovaExec, pluginService) {
    /**
     * Calls the native action for a given log record
     * @param {string} pluginAction the plugin action to be invoked
     * @param {string} message the message to be logged
     * @param {string} moduleName the module name
     * @param {object} extra additional error information
     * @param {string} stack the stack trace
     * @param {function} successCallback Cordova success callback
     * @param {function} errorCallback Cordova error callback
     */
    function logMessage(pluginAction, message, moduleName, extra, stack, successCallback, errorCallback) {
        var args = [message || "", moduleName || "", extra, stack];
        cordovaExec(successCallback, errorCallback, pluginService, pluginAction, args);
    }

    return {
        /**
         * Logs Verbose messages
         * @param {string} message the message to be logged
         * @param {string} moduleName the module name
         * @param {function} success Cordova success callback
         * @param {function} fail Cordova error callback
         */
        logVerbose: function (message, moduleName, success, fail) {
            logMessage(LogLevel.Verbose, message, moduleName, undefined, undefined, success, fail);
        },

        /**
         * Logs Debug messages
         * @param {string} message the message to be logged
         * @param {string} moduleName the module name
         * @param {function} success Cordova success callback
         * @param {function} fail Cordova error callback
         */
        logDebug: function (message, moduleName, success, fail) {
            logMessage(LogLevel.Debug, message, moduleName, undefined, undefined, success, fail);
        },

        /**
         * Logs Info messages
         * @param {string} message the message to be logged
         * @param {string} moduleName the module name
         * @param {function} success Cordova success callback
         * @param {function} fail Cordova error callback
         */
        logInfo: function (message, moduleName, success, fail) {
            logMessage(LogLevel.Info, message, moduleName, undefined, undefined, success, fail);
        },

        /**
         * Logs Warning messages
         * @param {string} message the message to be logged
         * @param {string} moduleName the module name
         * @param {function} success Cordova success callback
         * @param {function} fail Cordova error callback
         */
        logWarning: function (message, moduleName, success, fail) {
            logMessage(LogLevel.Warning, message, moduleName, undefined, undefined, success, fail);
        },

        /**
         * Logs Error messages
         * @param {string} message the message to be logged
         * @param {string} moduleName the module name
         * @param {object} extra additional error information
         * @param {string} stack the stack trace
         * @param {function} success Cordova success callback
         * @param {function} fail Cordova error callback
         */
        logError: function (message, moduleName, extra, stack, success, fail) {
            logMessage(LogLevel.Error, message, moduleName, extra, stack, success, fail);
        },
    };
};

module.exports = init;

});
