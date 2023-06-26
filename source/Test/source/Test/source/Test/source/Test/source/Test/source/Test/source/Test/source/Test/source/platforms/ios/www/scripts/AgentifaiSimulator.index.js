require(["es6-promise", "tslib"], function (es6promise, tslib) {
require(["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.appDefinition", "OutSystems/ClientRuntime/Debugger"], function (OutSystems, AgentifaiSimulatorAppDefinition, Debugger) {
var OS = OutSystems.Internal;
OS.Settings.setPlatformSettings({
IndexedDBOffline: true,
UseNewWebSQLImpl: false,
SendEnvParamOnManifestRequest: true
});
if(OS.Navigation.ensureRequestSecurity()) {
return;
}

OutSystemsDebugger.initialize().then(function () {
return OS.Application.initialize(AgentifaiSimulatorAppDefinition, OS.Interfaces.Application.InitializationType.Full, new OS.Format.DateTimeFormatInfo("yyyy-MM-dd", "HH:mm:ss"), new OS.Format.NumberFormatInfo(".", "")).then(function (success) {
function initViewPromise() {
return OS.Flow.promise(function (resolve, reject) {
require(["OutSystems/ReactView/Main"], function (OSView) {
try {OSView.Router.load(OS.Application);
resolve();
} catch (error) {
reject(error);
}

});
});
};
if(success) {
return initViewPromise();
}


});
}).catch(function (error) {
OS.ErrorHandling.handleError(error);
});
});
});

