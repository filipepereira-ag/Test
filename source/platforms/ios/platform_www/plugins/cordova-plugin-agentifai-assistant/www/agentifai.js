cordova.define("cordova-plugin-agentifai-assistant.agentifai", function(require, exports, module) {

var PLUGIN_NAME = "Agentifai";
var agentifai = {
    
    initialize: function (apiUrl, apiKey, settings, success, error) {
        cordova.exec(success, error, PLUGIN_NAME, 'initialize', [apiUrl, apiKey, settings]);
    },

    setConfigurations: function(configurations, success, error) {
        cordova.exec(success, error, PLUGIN_NAME, 'setConfigurations', [configurations]);
    },
    
    setWidgetVisibility: function (visible, success, error) {
        cordova.exec(success, error, PLUGIN_NAME, 'setWidgetVisibility', [visible]);
    },

    openApplication: function (intent, success, error) {
        cordova.exec(success, error, PLUGIN_NAME, 'openApplication', [intent]);
    },
    
    closeApplication: function (success, error) {
        cordova.exec(success, error, PLUGIN_NAME, 'closeApplication', []);
    },
                   
    stop: function (success, error) {
        cordova.exec(success, error, PLUGIN_NAME, 'stop', []);
    },
    
    requestResult: function (id, successResponse, data, success, error) {
        cordova.exec(success, error, PLUGIN_NAME, 'requestResult', [id, successResponse, data]);
    },

    registerUser: function (user, authHeaders, success, error) {
        cordova.exec(success, error, PLUGIN_NAME, 'registerUser', [user, authHeaders]);
    },

    unregisterUser: function (success, error) {
        cordova.exec(success, error, PLUGIN_NAME, 'unregisterUser', []);
    },
    
    addClientCallback: function (success, error) {
        cordova.exec(success, error, PLUGIN_NAME, 'addClientCallback', []);
    },

    setWidgetDimensions: function(dimensions, success, error) {
        cordova.exec(success, error, PLUGIN_NAME, 'setWidgetDimensions', [dimensions]);
    },

    setTheme: function(theme, success, error) {
        cordova.exec(success, error, PLUGIN_NAME, 'setTheme', [theme]);
    }

}

module.exports = agentifai;

    
});
