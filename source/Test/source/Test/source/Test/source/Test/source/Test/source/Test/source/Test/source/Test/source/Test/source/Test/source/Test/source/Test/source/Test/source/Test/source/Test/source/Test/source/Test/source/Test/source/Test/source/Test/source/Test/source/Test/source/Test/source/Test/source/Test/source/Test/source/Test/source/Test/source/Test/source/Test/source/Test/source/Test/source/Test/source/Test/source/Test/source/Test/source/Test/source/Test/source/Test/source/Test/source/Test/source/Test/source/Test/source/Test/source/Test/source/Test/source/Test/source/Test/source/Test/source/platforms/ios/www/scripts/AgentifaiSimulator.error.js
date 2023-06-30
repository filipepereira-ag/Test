try {require(["es6-promise", "tslib"], function (es6promise, tslib) {
require(["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.appDefinition"], function (OutSystems, AgentifaiSimulatorAppDefinition) {
var OS = OutSystems.Internal;
OS.Settings.setPlatformSettings({
IndexedDBOffline: true,
UseNewWebSQLImpl: false,
SendEnvParamOnManifestRequest: true
});
OS.ErrorScreen.initializeErrorPage(AgentifaiSimulatorAppDefinition, OS.Application);
});
});
} catch (ex) {
console.error(e);
}

