define("AgentifaiSimulator.MainFlow.controller", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.controller", "AgentifaiSimulator.Common.controller", "AgentifaiSimulator.clientVariables", "AgentifaiSimulator.MainFlow.controller$debugger"], function (exports, OutSystems, AgentifaiSimulatorModel, AgentifaiSimulatorController, AgentifaiSimulator_CommonController, AgentifaiSimulatorClientVariables, AgentifaiSimulator_MainFlow_Controller_debugger) {
var OS = OutSystems.Internal;
var AgentifaiSimulator_MainFlowController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.getDefaultTimeout = function () {
return AgentifaiSimulatorController.default.defaultTimeout;
};
Controller.prototype.handleError = function (ex, callContext) {
var varBag = {};
var controller = this.controller;
OS.Logger.trace("MainFlow", OS.Exceptions.getMessage(ex), ex.name);
return AgentifaiSimulator_CommonController.default.handleError(ex, callContext);


};
return Controller;
})(OS.Controller.BaseController);
AgentifaiSimulator_MainFlowController.default = new Controller();
});

define("AgentifaiSimulator.MainFlow.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
});
