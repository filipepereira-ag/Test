cordova.define("@outsystems/cordova-outsystems-core.public-interface", function(require, exports, module) {
/**
 * Helper function that creates the public interface for the plugin
 * with the provided dependencies.
 *
 * @param {Function} cordovaExec The cordova.exec function
 * @param {Function} httpRequestInit The init function for the HttpRequest module
 * @param {Function} requestManagerInit The init function for the RequestManager module
 * @param {Object} util The utils/contants module
 */
function init(cordovaExec, httpRequestInit, requestManagerInit, util, uuid) {
    var httpRequest = httpRequestInit(util, uuid);
    var requestManager = requestManagerInit(util, httpRequest, cordovaExec);

    return {
        createRequest: requestManager.createRequest.bind(requestManager),
        getCookies: function() {
            if (!util.isNullOrUndefined(window.webkit)) {
                if (
                    !util.isNullOrUndefined(OutSystemsNative) &&
                    !util.isNullOrUndefined(OutSystemsNative.HttpCookieManager)
                ) {
                    return OutSystemsNative.HttpCookieManager.getCookie();
                } else {
                    return "";
                }
            } else {
                return document.cookie;
            }
        }
    };
}
module.exports = init;

});
