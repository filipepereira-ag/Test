cordova.define("@outsystems/cordova-outsystems-core.request-manager", function(require, exports, module) {
module.exports = function init(util, HttpRequest, cordovaExec) {
    function RequestManager() {
        this._requests = {};
    }

    /**
     *
     * @param {("get" | "post")} method HTTP Request method
     * @param {string} url a string representing the URL to send the request to
     * @returns An instance of HttpRequest
     */
    RequestManager.prototype.createRequest = function(method, url) {
        var request = new HttpRequest(url, method, this);
        return request;
    };

    RequestManager.prototype.sendRequest = function(request) {
        if (util.isNullOrUndefined(request)) {
            throw new TypeError(
                "Unable to send because an `undefined` request was provided."
            );
        }

        if (request.readyState !== util.READYSTATE.CREATED) {
            throw new Error("The request's state must be CREATED.");
        }

        request._readyState = util.READYSTATE.SENT;

        this._requests[request.id] = request;
        cordovaExec(
            this._handleSend.bind(this),
            this._handleCordovaFailure.bind(this),
            "OSHttp",
            "sendRequest",
            [
                request.id,
                request.url,
                request.method,
                request.headers,
                request.timeout,
                request.body,
                responseBodyIsText(request)
            ]
        );
    };

    RequestManager.prototype.abortRequest = function(request) {
        if (util.isNullOrUndefined(request)) {
            throw new TypeError(
                "Unable to abort because an `undefined` request was provided."
            );
        }

        if (isFinishedOrAborting(request)) {
            return;
        }

        if (util.isNullOrUndefined(this._requests[request.id])) {
            // temporarily save the request to be able to abort it
            this._requests[request.id] = request;
        }

        request._readyState = util.READYSTATE.ABORTING;
        cordovaExec(
            this._handleAbort.bind(this),
            undefined,
            "OSHttp",
            "abortRequest",
            [request.id]
        );
    };

    RequestManager.prototype._handleSend = function(result) {
        if (result.error) {
            return this._handleFailure(result);
        }

        this._handleSuccess(result);
    };

    RequestManager.prototype._handleCordovaFailure = function(result) {
        // TODO: What to do when something really bad happened on the native side?
    };

    RequestManager.prototype._handleSuccess = function(result) {
        if (!!result && !!result.requestId) {

            var request = this._requests[result.requestId];
            if (!request) {
                return;
            }

            if (isFinishedOrAborting(request)) {
                return;
            }

            // Results must be handled in the correct order!
            if (request.unorderedRequests === undefined) {
                request.currentOrder = 0;
                request.unorderedRequests = {};
            }

            request.unorderedRequests[result.data.order] = result.data;

            var data;
            while (data = request.unorderedRequests[request.currentOrder]) {
                this._handleSuccessResult(request, data);
                delete request.unorderedRequests[request.currentOrder];
                request.currentOrder++;
            }
        }
    };

    RequestManager.prototype._handleSuccessResult = function(request, data) {
        // There are 2 types of requests: chunked and complete
        // Complete requests have all the information in a single result
        // Chunked requests have the information spread across multiple results:
        // - metadata result: contains properties other than the response body
        // - chunk result: contains the response body spread across multiple results

        // Handle properties other than the response body
        if (data.metadata) {
            Object.defineProperties(request, {
                responseHeaders: {
                    writable: false,
                    configurable: false,
                    enumerable: true,
                    value: data.metadata.responseHeaders
                },
                responseUrl: {
                    writable: false,
                    configurable: false,
                    enumerable: true,
                    value: data.metadata.responseUrl
                },
                status: {
                    writable: false,
                    configurable: false,
                    enumerable: true,
                    value: data.metadata.status
                },
                statusText: {
                    writable: false,
                    configurable: false,
                    enumerable: true,
                    value: data.metadata.statusText
                }
            });
        }

        // Handle the response body
        if (data.chunkData != null) {
            if (responseBodyIsText(request)) {
                // If the response body is handled as text, chunks contain plaintext data
                // In this case, strings just need to be concatenated
                // Data will be stored and provided to the callee via responseText
                if (!request.responseText) {
                    request.responseText = data.chunkData; // prevent memory usage in single chunk responses
                } else {
                    request.responseText += data.chunkData;
                }
            } else {
                // If the response body is not handled as text, chunks contain data encoded in base64
                // Chunks need to be decoded into Javascript strings, which are able to contain binary data
                // Data will be stored as Uint8Array in the response property, allowing for easy concatenation
                // The response property will be further processed before being provided to the callee
                const newChunk = decodeBase64Chunk(data.chunkData);
                if (!request.response) {
                    request.response = newChunk; // prevent memory usage in single chunk responses
                } else {
                    const currentChunks = request.response;
                    const concatenation = new Uint8Array(currentChunks.length + newChunk.length);
                    concatenation.set(currentChunks, 0);
                    concatenation.set(newChunk, currentChunks.length);
                    request.response = concatenation;
                }
            }
        }

        // Handle the last result
        if (data.last) {
            if (request.response) {
                // If the response body is not handled as text, the returned type depends on the responseType
                if (request.responseType === 'blob') {
                    // If responseType is blob, the value is converted to a blob
                    // The content-type response header is used for the type
                    const contentType = request.responseHeaders['content-type'];
                    request.response = new Blob([request.response], { 'type': contentType });
                } else {
                    // Otherwise, the ArrayBuffer associated with the Uint8Array is returned
                    // This is the result that's expected when responseType is arraybuffer
                    request.response = request.response.buffer;
                }
            }

            Object.defineProperties(request, {
                response: {
                    writable: false,
                    configurable: false,
                    enumerable: true
                },
                responseText: {
                    writable: false,
                    configurable: false,
                    enumerable: true
                }
            });

            request._readyState = util.READYSTATE.FINISHED;

            delete this._requests[request.id];
            this.invokeCallbacks(request, [
                util.REQUEST_CALLBACK_NAMES.ON_SUCCESS,
                util.REQUEST_CALLBACK_NAMES.ON_FINISH
            ]);
        }
    };

    RequestManager.prototype._handleFailure = function(result) {
        if (!!result && !!result.requestId && !util.isNullOrUndefined(result.error)) {
            var error = result.error;
            var request = this._requests[result.requestId];

            if (!request) {
                return;
            }

            if (isFinishedOrAborting(request)) {
                return;
            }

            request._readyState = util.READYSTATE.FINISHED;
            delete this._requests[request.id];

            var callbacks = [];
            if (error.errorCode === util.ERROR_CODES.TIMEOUT_ERROR) {
                callbacks.push(util.REQUEST_CALLBACK_NAMES.ON_TIMEOUT);
            } else {
                callbacks.push(util.REQUEST_CALLBACK_NAMES.ON_ERROR);
            }
            callbacks.push("onFinish");
            this.invokeCallbacks(request, callbacks);
        }
    };

    RequestManager.prototype._handleAbort = function(result) {
        if (!!result && !!result.requestId && util.isNullOrUndefined(result.error)) {
            var request = this._requests[result.requestId];

            if (!request) {
                return;
            }

            if (request.readyState === util.READYSTATE.FINISHED) {
                return;
            }

            request._readyState = util.READYSTATE.FINISHED;
            delete this._requests[request.id];
            this.invokeCallbacks(request, [
                util.REQUEST_CALLBACK_NAMES.ON_ABORT,
                util.REQUEST_CALLBACK_NAMES.ON_FINISH
            ]);
        }
    };

    RequestManager.prototype.invokeCallbacks = function(
        request,
        callbackNames
    ) {
        if (!callbackNames) {
            throw new TypeError(
                "The provided callbacks array can't be undefined/null."
            );
        }

        callbackNames.forEach(function(name) {
            var callback = request[name];
            if (!util.isValidRequestCallbackName(name)) {
                return;
            }

            if (!util.isFunction(callback)) {
                return;
            }

            callback.call(request, request);
        });
    };

    function isFinishedOrAborting(request) {
        return !!request && request.readyState >= util.READYSTATE.ABORTING;
    }

    function responseBodyIsText(request) {
        const responseType = request.responseType;
        return !responseType || responseType === 'text';
    }

    function decodeBase64Chunk(chunk) {
        const decodedString = atob(chunk);
        const bytes = new Uint8Array(decodedString.length);
        for (let i = 0; i < decodedString.length; i++) {
            bytes[i] = decodedString.charCodeAt(i);
        }
        return bytes;
    }

    return new RequestManager();
};

});
