cordova.define("com.outsystems.usesCleartextTraffic.UsesCleartextTraffic", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'UsesCleartextTraffic', 'coolMethod', [arg0]);
};

});
