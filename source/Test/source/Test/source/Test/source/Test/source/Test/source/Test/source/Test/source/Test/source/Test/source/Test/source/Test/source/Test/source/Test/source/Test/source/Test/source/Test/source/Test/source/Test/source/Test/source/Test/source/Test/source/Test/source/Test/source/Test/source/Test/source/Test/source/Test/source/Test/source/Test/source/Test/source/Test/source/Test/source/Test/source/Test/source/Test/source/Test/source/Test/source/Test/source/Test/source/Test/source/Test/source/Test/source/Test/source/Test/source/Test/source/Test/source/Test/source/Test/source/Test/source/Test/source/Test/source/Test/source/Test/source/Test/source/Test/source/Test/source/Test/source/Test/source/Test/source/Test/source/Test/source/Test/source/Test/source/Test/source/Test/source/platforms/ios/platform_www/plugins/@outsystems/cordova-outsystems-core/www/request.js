cordova.define("@outsystems/cordova-outsystems-core.request", function(require, exports, module) {
module.exports = function init(util, uuid) {
    function setObjectDescriptors(request) {
        Object.defineProperty(request, "url", {
            writable: false,
            enumerable: true,
            configurable: false
        });

        Object.defineProperty(request, "method", {
            writable: false,
            enumerable: true,
            configurable: false
        });

        Object.defineProperty(request, "id", {
            writable: false,
            enumerable: true,
            configurable: false
        });

        Object.defineProperty(request, "readyState", {
            enumerable: true,
            configurable: false,
            get: function() {
                return request._readyState;
            }
        });

        Object.defineProperty(request, "_readyState", {
            writable: true,
            enumerable: false,
            configurable: false
        });

        Object.defineProperty(request, "requestManager", {
            writable: false,
            enumerable: false,
            configurable: false
        });
    }

    /**
     * Provides a "centralized" point to manage a request life cycle.
     *
     * This constructor isn't expected to be called directly, instead,
     * use `RequestManager.createRequest` to create instances of `HttpRequest`.
     *
     * Usage:
     *
     * ```javascript
     * var request = requestManager.createRequest("get", "https://domain.com");
     *
     * request.onFinish = function(req) {
     *     // ...
     * }
     * request.onSuccess = function(req) {
     *     // ...
     * }
     * request.onTimeout = function(req) {
     *     // ...
     * }
     * request.onError = function(req) {
     *     // ...
     * }
     * request.onAbort = function(req) {
     *     // ...
     * }
     * request.send();
     * ```
     * @param {string} url
     * @param {('get'|'post')} method
     */
    function HttpRequest(url, method, requestManager) {
        // Immutable properties
        this.url = url;
        this.method = method || "get";
        this.requestManager = requestManager;
        this.id = uuid();

        // Initial state
        this.body = undefined;
        this.responseType = undefined;
        this.followRedirects = true;
        this.headers = {};
        this.timeout = 0;

        this._readyState = util.READYSTATE.CREATED;

        setObjectDescriptors(this);
    }

    HttpRequest.prototype.setBody = function(body) {
        this.body = body;
        return this;
    };

    HttpRequest.prototype.setResponseType = function(responseType) {
        this.responseType = responseType;
        return this;
    };

    /**
     * Set follow redirects option for the request.
     * @param {boolean} follow
     */
    HttpRequest.prototype.setFollowRedirects = function(follow) {
        if (!util.isBoolean(follow)) {
            throw new Error("Invalid `follow` value type was provided.");
        }
        this.followRedirects = follow;
        return this;
    };

    /**
     * Sets the provided header for the request.
     * Note: Header key is transformed to lower case
     * @param {string | number} name
     * @param {string | number} value
     * @throws {TypeError} if `name` or `value` values aren't string or number
     */
    HttpRequest.prototype.setHeader = function setHeader(name, value) {
        if (!util.isString(name) && !util.isNumber(name)) {
            throw new TypeError("Invalid value for `name` was provided.");
        }
        if (!util.isString(value) && !util.isNumber(value)) {
            throw new TypeError("Invalid value for `value` was provided.");
        }
        this.headers[name.toLowerCase()] = value;
        return this;
    };

    /**
     * Sets the timeout value, in milliseconds, for the request.
     * @param {number} timeout Amount, in milliseconds, for the timeout
     * @throws {TypeError} if the provided timeout value is negative or non-numeric
     */
    HttpRequest.prototype.setTimeout = function(timeout) {
        if (!util.isNumber(timeout)) {
            throw new TypeError("Invalid `timeout` value type was provided.");
        }

        if (timeout < 0) {
            throw new Error(
                "Invalid `timeout` value was provided. Timeout must be a positive value."
            );
        }

        this.timeout = timeout;
        return this;
    };

    /**
     * Attempts to send the request. This is an asynchronous operation.
     * In order to be notified when the request finishes, register
     * `onSuccess`, `onError` or `onFinish` callbacks, depending on the needs.
     *
     * - `onSuccess` is executed when the request finishes with success
     * - `onError` is executed when the request finishes with an error
     * - `onFinish` is always executed when the request finished, be it successfuly
     * or otherwise
     *
     * @throws {Error} if the request is missing RequestManager
     */
    HttpRequest.prototype.send = function() {
        if (this.requestManager === undefined) {
            throw new Error(
                "HttpRequest has been incorrectly initialized. Missing RequestManager."
            );
        }
        this.requestManager.sendRequest(this);
    };

    /**
     * Attempts to abor the request. This is an asynchronous operation.
     * In order to be notified when the request is aborted, register `onAbort` callback.
     * Usage example:
     *
     * ```
     * request.onAbort = function(request){
     *     // ...
     * }
     *
     * request.abort();
     * ```
     */
    HttpRequest.prototype.abort = function() {
        if (this.requestManager === undefined) {
            throw new Error(
                "HttpRequest has been incorrectly initialized. Missing RequestManager."
            );
        }
        this.requestManager.abortRequest(this);
    };

    return HttpRequest;
};

});
