cordova.define("@outsystems/cordova-outsystems-core.util", function(require, exports, module) {
/**
 * Exhaustive list of error codes
 * exposed by the plugin
 */
var ERROR_CODES = {
    VALIDATION_ERROR: 1,
    TIMEOUT_ERROR: 2,
    UNKNOWN_ERROR: 3
};

/**
 * Possible ready states for a request.
 * **Important**
 * Changing the value of any of the *states*
 * constitutes a breaking change!
 * Thread lightly and be safe my little Padawan!
 */
var READYSTATE = {
    CREATED: 0,
    SENT: 1,
    RECEIVING: 2,
    ABORTING: 3,
    FINISHED: 4
};

var REQUEST_CALLBACK_NAMES = {
    ON_ABORT: "onAbort",
    ON_ERROR: "onError",
    ON_FINISH: "onFinish",
    ON_SUCCESS: "onSuccess",
    ON_TIMEOUT: "onTimeout"
};

function isValidRequestCallbackName(name) {
    var values = Object.getOwnPropertyNames(REQUEST_CALLBACK_NAMES).map(
        function(key) {
            return REQUEST_CALLBACK_NAMES[key];
        }
    );
    return values.indexOf(name) >= 0;
}

/**
 * Returns true if the provided `obj` is of type Number
 * @param {any} obj
 */
function isNumber(obj) {
    return Object.prototype.toString.call(obj) === "[object Number]";
}

/**
 * Returns true if the provided `obj` is of type String
 * @param {any} obj
 */
function isString(obj) {
    return Object.prototype.toString.call(obj) === "[object String]";
}

/**
 * Returns true if the provided `obj` is of type Boolean
 * @param {any} obj
 */
function isBoolean(obj) {
    return Object.prototype.toString.call(obj) === "[object Boolean]";
}

/**
 * Returns true if the provided `obj` is of type Function
 * @param {any} obj
 */
function isFunction(obj) {
    return Object.prototype.toString.call(obj) === "[object Function]";
}

/**
 * Returns true if the provided `obj` is null or undefined
 * @param {any} obj
 */
function isNullOrUndefined(obj) {
    return obj === null || obj === undefined;
}

module.exports = {
    READYSTATE: READYSTATE,
    ERROR_CODES: ERROR_CODES,
    REQUEST_CALLBACK_NAMES: REQUEST_CALLBACK_NAMES,
    isNumber: isNumber,
    isString: isString,
    isBoolean: isBoolean,
    isFunction: isFunction,
    isValidRequestCallbackName: isValidRequestCallbackName,
    isNullOrUndefined: isNullOrUndefined
};

});
