define("AgentifaiSimulator.clientVariables", ["OutSystems/ClientRuntime/Main"], function (OutSystems) {
var OS = OutSystems.Internal;
var ClientVariables = (function (_super) {
var clientVarsService;
function ClientVariables() {
clientVarsService = OS.Injector.resolve(OS.ServiceNames.ClientVariablesService);
}
ClientVariables.prototype.getUsername = function () {
return clientVarsService.getVariable("Username", "AgentifaiSimulator", OS.Types.Text);
};
ClientVariables.prototype.setUsername = function (value) {
return clientVarsService.setVariable("Username", "AgentifaiSimulator", OS.Types.Text, value);
};
ClientVariables.prototype.serialize = function () {
return {
Username: OS.DataConversion.ServerDataConverter.to(this.getUsername(), OS.Types.Text)
};
};
return ClientVariables;
})();
return new ClientVariables();
});
