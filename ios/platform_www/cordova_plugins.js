cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "@outsystems/cordova-outsystems-core.OSApplicationInfo",
      "file": "plugins/@outsystems/cordova-outsystems-core/www/OSApplicationInfo.js",
      "pluginId": "@outsystems/cordova-outsystems-core",
      "clobbers": [
        "OutSystemsNative.ApplicationInfo"
      ]
    },
    {
      "id": "@outsystems/cordova-outsystems-core.utils",
      "file": "plugins/@outsystems/cordova-outsystems-core/www/utils.js",
      "pluginId": "@outsystems/cordova-outsystems-core"
    },
    {
      "id": "@outsystems/cordova-outsystems-core.logger-v1",
      "file": "plugins/@outsystems/cordova-outsystems-core/www/logger_v1.js",
      "pluginId": "@outsystems/cordova-outsystems-core"
    },
    {
      "id": "@outsystems/cordova-outsystems-core.logger-v2",
      "file": "plugins/@outsystems/cordova-outsystems-core/www/logger_v2.js",
      "pluginId": "@outsystems/cordova-outsystems-core"
    },
    {
      "id": "@outsystems/cordova-outsystems-core.OSLogger",
      "file": "plugins/@outsystems/cordova-outsystems-core/www/OSLogger.js",
      "pluginId": "@outsystems/cordova-outsystems-core",
      "clobbers": [
        "OutSystemsNative.Logger"
      ]
    },
    {
      "id": "@outsystems/cordova-outsystems-core.OTLogger",
      "file": "plugins/@outsystems/cordova-outsystems-core/www/OTLogger.js",
      "pluginId": "@outsystems/cordova-outsystems-core",
      "clobbers": [
        "OutSystemsNative.OTLogger"
      ]
    },
    {
      "id": "@outsystems/cordova-outsystems-core.OSDeepLinks",
      "file": "plugins/@outsystems/cordova-outsystems-core/www/OSDeepLinks.js",
      "pluginId": "@outsystems/cordova-outsystems-core",
      "clobbers": [
        "OSDeepLinks"
      ]
    },
    {
      "id": "@outsystems/cordova-outsystems-core.OSCache",
      "file": "plugins/@outsystems/cordova-outsystems-core/www/OSCache.js",
      "pluginId": "@outsystems/cordova-outsystems-core",
      "clobbers": [
        "OSCache"
      ]
    },
    {
      "id": "@outsystems/cordova-outsystems-core.OSPrebundle",
      "file": "plugins/@outsystems/cordova-outsystems-core/www/OSPrebundle.js",
      "pluginId": "@outsystems/cordova-outsystems-core",
      "clobbers": [
        "OutSystemsNative.Prebundle"
      ]
    },
    {
      "id": "@outsystems/cordova-outsystems-core.OSAuth",
      "file": "plugins/@outsystems/cordova-outsystems-core/www/OSAuth.js",
      "pluginId": "@outsystems/cordova-outsystems-core",
      "clobbers": [
        "OutSystemsNative.Auth"
      ]
    },
    {
      "id": "@outsystems/cordova-outsystems-core.uuid-v1",
      "file": "plugins/@outsystems/cordova-outsystems-core/www/uuid_v1@3.3.2.js",
      "pluginId": "@outsystems/cordova-outsystems-core"
    },
    {
      "id": "@outsystems/cordova-outsystems-core.util",
      "file": "plugins/@outsystems/cordova-outsystems-core/www/util.js",
      "pluginId": "@outsystems/cordova-outsystems-core"
    },
    {
      "id": "@outsystems/cordova-outsystems-core.public-interface",
      "file": "plugins/@outsystems/cordova-outsystems-core/www/public-interface.js",
      "pluginId": "@outsystems/cordova-outsystems-core"
    },
    {
      "id": "@outsystems/cordova-outsystems-core.request-manager",
      "file": "plugins/@outsystems/cordova-outsystems-core/www/request-manager.js",
      "pluginId": "@outsystems/cordova-outsystems-core"
    },
    {
      "id": "@outsystems/cordova-outsystems-core.request",
      "file": "plugins/@outsystems/cordova-outsystems-core/www/request.js",
      "pluginId": "@outsystems/cordova-outsystems-core"
    },
    {
      "id": "@outsystems/cordova-outsystems-core.cordova-outsystems-http",
      "file": "plugins/@outsystems/cordova-outsystems-core/www/cordova-outsystems-http.js",
      "pluginId": "@outsystems/cordova-outsystems-core",
      "clobbers": [
        "OutSystemsNative.Http"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-sqlite-storage.SQLitePlugin",
      "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
      "pluginId": "cordova-sqlite-storage",
      "clobbers": [
        "SQLitePlugin"
      ]
    },
    {
      "id": "cordova-plugin-agentifai-assistant.agentifai",
      "file": "plugins/cordova-plugin-agentifai-assistant/www/agentifai.js",
      "pluginId": "cordova-plugin-agentifai-assistant",
      "clobbers": [
        "agentifai",
        "cordova.plugins.agentifai",
        "plugin.agentifai",
        "window.plugins.agentifai"
      ]
    },
    {
      "id": "com.outsystems.usesCleartextTraffic.UsesCleartextTraffic",
      "file": "plugins/com.outsystems.usesCleartextTraffic/www/UsesCleartextTraffic.js",
      "pluginId": "com.outsystems.usesCleartextTraffic",
      "clobbers": [
        "cordova.plugins.UsesCleartextTraffic"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-network-information": "3.0.0",
    "@outsystems/cordova-outsystems-core": "12.7.4",
    "cordova-plugin-device": "2.1.0",
    "cordova-plugin-statusbar": "3.0.0+0.1.3",
    "cordova-sqlite-storage": "6.0.0+1.0.0",
    "cordova-plugin-add-swift-support": "2.0.2",
    "cordova-plugin-androidx-adapter": "1.1.0",
    "cordova-plugin-agentifai-assistant": "9.0.0",
    "com.outsystems.usesCleartextTraffic": "0.0.1",
    "cordova-plugin-agentifai-assistant-permissions": "1.0.0"
  };
});