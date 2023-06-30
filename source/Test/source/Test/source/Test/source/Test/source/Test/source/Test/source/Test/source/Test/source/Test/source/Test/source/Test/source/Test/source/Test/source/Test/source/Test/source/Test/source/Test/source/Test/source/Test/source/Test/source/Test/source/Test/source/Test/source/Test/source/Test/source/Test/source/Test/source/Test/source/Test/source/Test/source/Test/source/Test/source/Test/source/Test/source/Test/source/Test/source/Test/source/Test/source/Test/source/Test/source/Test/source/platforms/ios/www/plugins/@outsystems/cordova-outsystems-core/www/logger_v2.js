cordova.define("@outsystems/cordova-outsystems-core.logger-v2", function(require, exports, module) {
/**
 * Internal log levels that map to plugin actions
 */
const LogLevel = {
    Trace: "v2LogTrace",
    Debug: "v2LogDebug",
    Info: "v2LogInfo",
    Warning: "v2LogWarning",
    Error: "v2LogError",
};

/**
 * API definition
 **/
const init = function (cordovaExec, pluginService, utils) {
    /**
     * Calls the native action for a given log record
     *
     * @param {string} pluginAction the plugin action to be invoked
     * @param {object} record the message to be logged
     * @returns a promise for the plugin execution. The promise will be rejected
     * if the log record does not contain mandatory properties or if the native
     * side fails to parse the log record.
     */
    function logMessage(pluginAction, record) {
        return new Promise(function (resolve, reject) {

            // Reject immediately if a mandatory property is missing, no need to incur the overhead of a native call
            // Defaulting to empty string would cause ambiguity with an actual empty message
            if(!Object.prototype.hasOwnProperty.call(record, 'message')) {
                reject('Property "message" required');
            }

            let args = [utils.createLogRecord(record)];

            cordovaExec(resolve, reject, pluginService, pluginAction, args);
        });
    }

    return {
        /**
         * Logs Trace messages.
         *
         * @param {object} record the log record to be logged
         * @returns a promise for the plugin execution
         */
        logTrace: function (record) {
            return logMessage(LogLevel.Trace, record);
        },

        /**
         * Logs Debug messages.
         *
         * @param {object} record the log record to be logged
         * @returns a promise for the plugin execution
         */
        logDebug: function (record) {
            return logMessage(LogLevel.Debug, record);
        },

        /**
         * Logs Info messages.
         *
         * @param {object} record the log record to be logged
         * @returns a promise for the plugin execution
         */
        logInfo: function (record) {
            return logMessage(LogLevel.Info, record);
        },

        /**
         * Logs Warning messages.
         *
         * @param {object} record the log record to be logged
         * @returns a promise for the plugin execution
         */
        logWarning: function (record) {
            return logMessage(LogLevel.Warning, record);
        },

        /**
         * Logs Error messages.
         *
         * @param {object} record the log record to be logged
         * @returns a promise for the plugin execution
         */
        logError: function (record) {
            return logMessage(LogLevel.Error, record);
        },
    };
};

module.exports = init;

});
