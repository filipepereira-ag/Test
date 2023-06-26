cordova.define("@outsystems/cordova-outsystems-core.utils", function(require, exports, module) {
const allowed = [ "instant", "message", "source", "stack", "attributes", "name", "traceId", "spanId" ];

/**
 * Creates a Log Record to be used in the native implementation
 * Filters extraneous properties beyond API specification
 * 
 * @param {object} record the Log Record currently used in the JavaScript API
 * @returns a Log Record for the native implementation
 */
const createLogRecord = function (record) {
    const result = {};

    for (const property in record) {
        if (allowed.includes(property)) {
            result[property] = record[property];
        }
    }

    return result;
};

module.exports.createLogRecord = createLogRecord;

});
