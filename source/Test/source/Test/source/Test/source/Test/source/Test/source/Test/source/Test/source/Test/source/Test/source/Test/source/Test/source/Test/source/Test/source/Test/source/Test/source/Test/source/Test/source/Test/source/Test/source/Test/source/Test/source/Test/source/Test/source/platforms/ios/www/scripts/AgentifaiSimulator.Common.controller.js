define("AgentifaiSimulator.Common.controller", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.controller", "AgentifaiSimulator.clientVariables", "AgentifaiSimulator.Common.controller$debugger"], function (exports, OutSystems, AgentifaiSimulatorModel, AgentifaiSimulatorController, AgentifaiSimulatorClientVariables, AgentifaiSimulator_Common_Controller_debugger) {
var OS = OutSystems.Internal;
var AgentifaiSimulator_CommonController = exports;
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
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var securityExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.allExceptionsVar = allExceptionsVar;
varBag.communicationExceptionVar = communicationExceptionVar;
varBag.securityExceptionVar = securityExceptionVar;
OS.Logger.trace("Common.OnException", OS.Exceptions.getMessage(ex), ex.name);
if(OS.ErrorHandling.ignoreError(ex, callContext)) {
return OS.ErrorHandling.IGNORED_ERROR_RESULT;
}

try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:0eZ+W3SSVk+CJcw1X48PQA.#FlowExceptionHandler:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/FlowExceptionHandler:uIEzr7XC4WJV1nr9b4G6ug", "AgentifaiSimulator", "OnException", "NRFlows.FlowExceptionHandlingFlow", callContext.id, varBag);
OS.Logger.trace("Common.OnException", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:DK3LlrvSEUWZyl7AA5e8Sw", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:KsUf5c+Xf0iU+KoOZfRKuQ", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(communicationExceptionVar.value.exceptionMessageAttr, /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:bCgcB6o6x0iCwomfyv1kvQ", callContext.id);
return ;

}

// Handle Error: SecurityException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.SecurityException)) {
securityExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:Jvzr2I3xGki_TxPEUyU3gw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:LYwo+iwL6EGQCSbhalO9GQ", callContext.id) && ((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:VlH5r5kXNUSKtR_vby7rbA", callContext.id);
// Destination: /AgentifaiSimulator/InvalidPermissions
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/AgentifaiSimulator/InvalidPermissions", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:7YVKHJBp+0+StJdBPzZy0A", callContext.id);
// Destination: /AgentifaiSimulator/Login
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/AgentifaiSimulator/Login", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

}

// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:JQXMLU7l8EOUtInh5UKA2w", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:udS7ULvmekaJ6jj8XEK6xQ", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(allExceptionsVar.value.exceptionMessageAttr, /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:fXSWSf1Tr0GIlmZrafZseQ", callContext.id);
return ;

}

throw ex;
} catch (unhandledEx) {
OS.Logger.trace("Common.OnException", OS.Exceptions.getMessage(ex), ex.name);
if(!(OS.ErrorHandling.ignoreError(unhandledEx, callContext))) {
OS.ErrorHandling.handleError(unhandledEx, callContext);
OutSystemsDebugger.handleException(unhandledEx, callContext.id);
return OS.ErrorHandling.UNHANDLED_ERROR_RESULT;

}

OutSystemsDebugger.handleException(unhandledEx, callContext.id);
return OS.ErrorHandling.IGNORED_ERROR_RESULT;

} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:0eZ+W3SSVk+CJcw1X48PQA.#FlowExceptionHandler", callContext.id);
}



};
return Controller;
})(OS.Controller.BaseController);
AgentifaiSimulator_CommonController.default = new Controller();
});

define("AgentifaiSimulator.Common.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"JQXMLU7l8EOUtInh5UKA2w": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"DK3LlrvSEUWZyl7AA5e8Sw": {
getter: function (varBag, idService) {
return varBag.communicationExceptionVar.value;
}
},
"Jvzr2I3xGki_TxPEUyU3gw": {
getter: function (varBag, idService) {
return varBag.securityExceptionVar.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
