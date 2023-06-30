define("AgentifaiSimulator.controller$OfflineDataSync", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.controller", "AgentifaiSimulator.clientVariables", "AgentifaiSimulator.controller$ServerAction.ServerDataSync"], function (exports, OutSystems, AgentifaiSimulatorModel, AgentifaiSimulatorController, AgentifaiSimulatorClientVariables) {
var OS = OutSystems.Internal;
AgentifaiSimulatorController.default.offlineDataSync$Action = function (syncUnitIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("AgentifaiSimulator.OfflineDataSync$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:LpmGhy9cE0mCR0BZzhJoJA:/ClientActionFlows.LpmGhy9cE0mCR0BZzhJoJA:9fW7JZ_EcTcjt12Bg_nsGA", "AgentifaiSimulator", "OfflineDataSync", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:r3w04DYy+UO88Hnbcauheg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:NSg3uwX2z0KDzIngfCcKnw", callContext.id);
// Execute Action: ServerDataSync
return controller.serverDataSync$ServerAction(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:CutXTLFsZE632Xm9fh21Kg", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:LpmGhy9cE0mCR0BZzhJoJA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:LpmGhy9cE0mCR0BZzhJoJA", callContext.id);
throw ex;

});
};
var controller = AgentifaiSimulatorController.default;
AgentifaiSimulatorController.default.constructor.registerVariableGroupType("AgentifaiSimulator.OfflineDataSync$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
AgentifaiSimulatorController.default.clientActionProxies.offlineDataSync$Action = function (syncUnitIn) {
syncUnitIn = (syncUnitIn === undefined) ? "" : syncUnitIn;
return controller.executeActionInsideJSNode(AgentifaiSimulatorController.default.offlineDataSync$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncUnitIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("AgentifaiSimulator.controller$OfflineDataSyncConfiguration", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.controller", "AgentifaiSimulator.clientVariables"], function (exports, OutSystems, AgentifaiSimulatorModel, AgentifaiSimulatorController, AgentifaiSimulatorClientVariables) {
var OS = OutSystems.Internal;
AgentifaiSimulatorController.default.offlineDataSyncConfiguration$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("AgentifaiSimulator.OfflineDataSyncConfiguration$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:X7IJk9rbwEG8Cc2qzpBYAA:/ClientActionFlows.X7IJk9rbwEG8Cc2qzpBYAA:caWfCxDC_+ez9PImlgRZBg", "AgentifaiSimulator", "OfflineDataSyncConfiguration", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:4uf+P18taEuIWJBnuSJ1Gw", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:i_wEoadk3kWP4Wc1gPBpjA", callContext.id);
// SyncOnOnline = False
outVars.value.syncOnOnlineOut = false;
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:8FTfXO_sYEiA3QGV5j9Caw", callContext.id);
// SyncOnLogin = False
outVars.value.syncOnLoginOut = false;
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:Et6hhpxEZEq61+V1aOfXNg", callContext.id);
// SyncOnResume = False
outVars.value.syncOnResumeOut = false;
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:XUGCZiBFuEmTNw_FElJlcw", callContext.id);
// RetryOnError = False
outVars.value.retryOnErrorOut = false;
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:QziPTs5cUUOu7YJ52192jA", callContext.id);
// RetryIntervalInSeconds = 30
outVars.value.retryIntervalInSecondsOut = 30;
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:9P4z+cemjUqImNOz1PrWig", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:X7IJk9rbwEG8Cc2qzpBYAA", callContext.id);
}

};
var controller = AgentifaiSimulatorController.default;
AgentifaiSimulatorController.default.constructor.registerVariableGroupType("AgentifaiSimulator.OfflineDataSyncConfiguration$outVars", [{
name: "SyncOnOnline",
attrName: "syncOnOnlineOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "SyncOnLogin",
attrName: "syncOnLoginOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "SyncOnResume",
attrName: "syncOnResumeOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "RetryOnError",
attrName: "retryOnErrorOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "RetryIntervalInSeconds",
attrName: "retryIntervalInSecondsOut",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
AgentifaiSimulatorController.default.clientActionProxies.offlineDataSyncConfiguration$Action = function () {
return controller.executeActionInsideJSNode(AgentifaiSimulatorController.default.offlineDataSyncConfiguration$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
SyncOnOnline: OS.DataConversion.JSNodeParamConverter.to(actionResults.syncOnOnlineOut, OS.Types.Boolean),
SyncOnLogin: OS.DataConversion.JSNodeParamConverter.to(actionResults.syncOnLoginOut, OS.Types.Boolean),
SyncOnResume: OS.DataConversion.JSNodeParamConverter.to(actionResults.syncOnResumeOut, OS.Types.Boolean),
RetryOnError: OS.DataConversion.JSNodeParamConverter.to(actionResults.retryOnErrorOut, OS.Types.Boolean),
RetryIntervalInSeconds: OS.DataConversion.JSNodeParamConverter.to(actionResults.retryIntervalInSecondsOut, OS.Types.Integer)
};
});
};
});

define("AgentifaiSimulator.controller$TriggerOfflineDataSync", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.controller", "OutSystemsUI.controller", "AgentifaiSimulator.clientVariables", "OutSystemsUI.controller$StartOfflineDataSync", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, AgentifaiSimulatorModel, AgentifaiSimulatorController, OutSystemsUIController, AgentifaiSimulatorClientVariables) {
var OS = OutSystems.Internal;
AgentifaiSimulatorController.default.triggerOfflineDataSync$Action = function (syncUnitIn, discardPendingSyncUnitsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("AgentifaiSimulator.TriggerOfflineDataSync$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
vars.value.discardPendingSyncUnitsInLocal = discardPendingSyncUnitsIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:ewY24h0Rok2TVMPjaBRz4g:/ClientActionFlows.ewY24h0Rok2TVMPjaBRz4g:yVL8Ui4NEag39G++wvv5gQ", "AgentifaiSimulator", "TriggerOfflineDataSync", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:nwD+mAhpF0C5lbeoGhWn7A", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:9zjg8WmArkmExeOIJ+8uyQ", callContext.id);
// Execute Action: StartOfflineDataSync
OutSystemsUIController.default.startOfflineDataSync$Action(vars.value.syncUnitInLocal, vars.value.discardPendingSyncUnitsInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:f3NRrVvFPkO4qaGalBP3Vw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:ewY24h0Rok2TVMPjaBRz4g", callContext.id);
}

};
var controller = AgentifaiSimulatorController.default;
AgentifaiSimulatorController.default.constructor.registerVariableGroupType("AgentifaiSimulator.TriggerOfflineDataSync$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "DiscardPendingSyncUnits",
attrName: "discardPendingSyncUnitsInLocal",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
AgentifaiSimulatorController.default.clientActionProxies.triggerOfflineDataSync$Action = function (syncUnitIn, discardPendingSyncUnitsIn) {
syncUnitIn = (syncUnitIn === undefined) ? "" : syncUnitIn;
discardPendingSyncUnitsIn = (discardPendingSyncUnitsIn === undefined) ? false : discardPendingSyncUnitsIn;
return controller.executeActionInsideJSNode(AgentifaiSimulatorController.default.triggerOfflineDataSync$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncUnitIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(discardPendingSyncUnitsIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("AgentifaiSimulator.controller$ServerAction.ServerDataSync", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.controller"], function (exports, OutSystems, AgentifaiSimulatorModel, AgentifaiSimulatorController) {
var OS = OutSystems.Internal;
AgentifaiSimulatorController.default.serverDataSync$ServerAction = function (syncUnitIn, callContext) {
var controller = this.controller;
var inputs = {
SyncUnit: OS.DataConversion.ServerDataConverter.to(syncUnitIn, OS.Types.Text)
};
return controller.callServerAction("ServerDataSync", "screenservices/AgentifaiSimulator/ActionServerDataSync", "SnHEsMVTuTHmpdlTypWAow", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
};
});
define("AgentifaiSimulator.controller", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.controller$debugger"], function (exports, OutSystems, AgentifaiSimulatorModel, AgentifaiSimulator_Controller_debugger) {
var OS = OutSystems.Internal;
var AgentifaiSimulatorController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {
UserManager: {
roleKey: "WWAQZTkE5UuwES8B+6Svpg*h1kQN+1FjkKg+m7EQDo4ZA",
roleException: new OS.Exceptions.Exceptions.NotRegisteredException("Users.NotUserManager", "UserManager role required")
}
};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return AgentifaiSimulatorController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseModuleController);
AgentifaiSimulatorController.default = new Controller();
});
define("AgentifaiSimulator.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.clientVariables"], function (exports, Debugger, OutSystems, AgentifaiSimulatorClientVariables) {
var OS = OutSystems.Internal;
var metaInfo = {
"ohKLgVfudEO9WIjbR4IDJg": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"ISb8Rf1h5kui7U4VaeJ4Qg": {
getter: function (varBag, idService) {
return varBag.outVars.value.syncOnOnlineOut;
},
dataType: OS.Types.Boolean
},
"xCO9GsKcHEShU+X2TOlOFg": {
getter: function (varBag, idService) {
return varBag.outVars.value.syncOnLoginOut;
},
dataType: OS.Types.Boolean
},
"5Qpcg_GuwE6Ynei0vKslOg": {
getter: function (varBag, idService) {
return varBag.outVars.value.syncOnResumeOut;
},
dataType: OS.Types.Boolean
},
"5IHHC5Ck6EWlngzbULlcXg": {
getter: function (varBag, idService) {
return varBag.outVars.value.retryOnErrorOut;
},
dataType: OS.Types.Boolean
},
"n6dhnmBl802fr13DcvtUlw": {
getter: function (varBag, idService) {
return varBag.outVars.value.retryIntervalInSecondsOut;
},
dataType: OS.Types.Integer
},
"a90n2WJUTU6syYn3y31SVA": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"Aqrrh8UMfUa806dMfGJNCQ": {
getter: function (varBag, idService) {
return varBag.vars.value.discardPendingSyncUnitsInLocal;
},
dataType: OS.Types.Boolean
},
"tq9MyyBHA0yISC1r4+0W0g": {
getter: function (varBag, idService) {
return AgentifaiSimulatorClientVariables.getUsername();
},
dataType: OS.Types.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
