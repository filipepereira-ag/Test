define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.Private.NetworkStatusChanged.mvc$model", "OutSystemsUI.controller$StartOfflineDataSync", "OutSystemsUI.controller$EndOfflineDataSync", "OutSystemsUI.controller$GetNetworkStatus"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_Private_NetworkStatusChanged_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("InstanceToken", "instanceTokenVar", "InstanceToken", true, false, OS.Types.Text, function () {
return "";
}, false)
].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.fromStructure = function (str) {
return new VariablesRecord(new VariablesRecord.RecordClass({
instanceTokenVar: OS.DataTypes.ImmutableBase.getData(str)
}));
};
VariablesRecord.init();
return VariablesRecord;
})(OS.DataTypes.GenericRecord);
var WidgetsRecord = (function (_super) {
__extends(WidgetsRecord, _super);
function WidgetsRecord() {
_super.apply(this, arguments);
}
WidgetsRecord.getWidgetsType = function () {
return {};
};

return WidgetsRecord;
})(OS.Model.BaseWidgetRecordMap);
var Model = (function (_super) {
__extends(Model, _super);
function Model() {
_super.apply(this, arguments);
}
Model.getVariablesRecordConstructor = function () {
return VariablesRecord;
};
Model.getWidgetsRecordConstructor = function () {
return WidgetsRecord;
};
Model._hasValidationWidgetsValue = undefined;
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = OutSystemsUI_Private_NetworkStatusChanged_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$model", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller", "OutSystemsUI.Private.NetworkStatusChanged.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUI.controller$StartOfflineDataSync", "OutSystemsUI.controller$EndOfflineDataSync", "OutSystemsUI.controller$GetNetworkStatus"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Private_OfflineDataSyncCore_mvc_model, OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller, OutSystemsUI_Private_NetworkStatusChanged_mvc_view, OSWidgets) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;


    var View = (function (_super) {
        __extends(View,_super);
        function View() {
            try {
                this.initialize.apply(this, arguments);
            } catch (error) {
                View.handleError(error);
                throw error;
            }
        }
        View.prototype.initialize = function() {
            _super.apply(this, arguments);
        };
        View.displayName = "Private.OfflineDataSyncCore";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI.OfflineDataSync.js"];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_Private_NetworkStatusChanged_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUI_Private_OfflineDataSyncCore_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "";
            },
            enumerable: true,
            configurable: true
        });
        View.prototype.internalRender = function() {
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var widgetsRecordProvider = this.widgetsRecordProvider;
            var callContext = controller.callContext();
            var $if = View.ifWidget;
            var $text = View.textWidget;
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;

            return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(OutSystemsUI_Private_NetworkStatusChanged_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
networkStatusChanged$Action: function (isOnlineIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/NetworkStatusChanged NetworkStatusChanged");
controller.onNetworkStatusChanged$Action(isOnlineIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$translationsResources", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$debugger", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.OnResume.GetSyncOnResumeJS", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.OnDestroy.UnregisterAPIJS", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.Init.RegisterAPIJS", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.TriggerSyncStartEventJS", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.TriggerSyncErrorEventOfflineJS", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.SuspendSyncJS", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.OnNetworkStatusChanged.GetSyncOnOnlineJS", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.OnInitialize.InitJS", "OutSystemsUI.controller$StartOfflineDataSync", "OutSystemsUI.controller$EndOfflineDataSync", "OutSystemsUI.controller$GetNetworkStatus"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Private_OfflineDataSyncCore_mvc_TranslationsResources, OutSystemsUI_Private_OfflineDataSyncCore_mvc_Debugger, OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_OnResume_GetSyncOnResumeJS, OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_OnDestroy_UnregisterAPIJS, OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_Init_RegisterAPIJS, OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_SyncWrapper_TriggerSyncStartEventJS, OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_SyncWrapper_TriggerSyncErrorEventOfflineJS, OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_SyncWrapper_SuspendSyncJS, OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_OnNetworkStatusChanged_GetSyncOnOnlineJS, OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_OnInitialize_InitJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
syncWrapper$Action: function (syncUnitIn) {
syncUnitIn = (syncUnitIn === undefined) ? "" : syncUnitIn;
return controller.executeActionInsideJSNode(controller._syncWrapper$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncUnitIn, OS.Types.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "SyncWrapper");
},
onResume$Action: function () {
return controller.executeActionInsideJSNode(controller._onResume$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnResume");
},
triggerOnSyncStart$Action: function (syncUnitIn) {
syncUnitIn = (syncUnitIn === undefined) ? "" : syncUnitIn;
return controller.executeActionInsideJSNode(controller._triggerOnSyncStart$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncUnitIn, OS.Types.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "TriggerOnSyncStart");
},
triggerOnSyncComplete$Action: function (syncUnitIn) {
syncUnitIn = (syncUnitIn === undefined) ? "" : syncUnitIn;
return controller.executeActionInsideJSNode(controller._triggerOnSyncComplete$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncUnitIn, OS.Types.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "TriggerOnSyncComplete");
},
triggerOnSyncError$Action: function (syncUnitIn, errorMessageIn) {
syncUnitIn = (syncUnitIn === undefined) ? "" : syncUnitIn;
errorMessageIn = (errorMessageIn === undefined) ? "" : errorMessageIn;
return controller.executeActionInsideJSNode(controller._triggerOnSyncError$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncUnitIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(errorMessageIn, OS.Types.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "TriggerOnSyncError");
},
init$Action: function () {
return controller.executeActionInsideJSNode(controller._init$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Init");
}
};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
Controller.prototype.translationResources = OutSystemsUI_Private_OfflineDataSyncCore_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._onResume$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnResume");
callContext = controller.callContext(callContext);
var getSyncOnResumeJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getSyncOnResumeJSResult = getSyncOnResumeJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:ljgpFByHWECqPa9R9yql0w:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.ljgpFByHWECqPa9R9yql0w:77fliDt7OlRHriTcREGFAg", "OutSystemsUI", "OnResume", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qbvmMcNyB0WqI551Qzj+yg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pNqidDqDcUOD1FKsjDtBzA", callContext.id);
getSyncOnResumeJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_OnResume_GetSyncOnResumeJS, "GetSyncOnResume", "OnResume", {
SyncOnResume: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.OnResume$getSyncOnResumeJSResult"))();
jsNodeResult.syncOnResumeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SyncOnResume, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
// SyncOnResume?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:z+7gvvh69EaZV3wCcM4FAg", callContext.id) && getSyncOnResumeJSResult.value.syncOnResumeOut)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:iUPPGk7dgUqwZLFuobIXdg", callContext.id);
// Execute Action: StartOfflineDataSync
OutSystemsUIController.default.startOfflineDataSync$Action("", false, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:L8XSZCR4UEaYUXgjmOcpOw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:L8XSZCR4UEaYUXgjmOcpOw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:ljgpFByHWECqPa9R9yql0w", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.OnResume$getSyncOnResumeJSResult", [{
name: "SyncOnResume",
attrName: "syncOnResumeOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._triggerOnSyncComplete$Action = function (syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("TriggerOnSyncComplete");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.TriggerOnSyncComplete$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:yRN8KzK4XEqBnkM+5MLnwg:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.yRN8KzK4XEqBnkM+5MLnwg:3ugJcdYsIiyGvXTTT06k0Q", "OutSystemsUI", "TriggerOnSyncComplete", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0J2kh2tYf0KhazdRWlvFJQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:fgGs9UHBPk+BhtJ2QNvKHQ", callContext.id);
// Trigger Event: OnSyncComplete
return controller.onSyncComplete$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ghkHnVF1KUmi62pA4zx76w", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:yRN8KzK4XEqBnkM+5MLnwg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:yRN8KzK4XEqBnkM+5MLnwg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.TriggerOnSyncComplete$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onDestroy$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:LldIZ7q7OE2fcJhXA0cHEA:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.LldIZ7q7OE2fcJhXA0cHEA:_Zs8eg0E6UptfL1XQUDt5w", "OutSystemsUI", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WdXaUSZmeEmt4V1qVRSXtA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:iqwLbSzl40aQOxA4jncutw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_OnDestroy_UnregisterAPIJS, "UnregisterAPI", "OnDestroy", {
Token: OS.DataConversion.JSNodeParamConverter.to(model.variables.instanceTokenVar, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:v+OAzsz38kyYfMUH9yKtyQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:LldIZ7q7OE2fcJhXA0cHEA", callContext.id);
}

};
Controller.prototype._init$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Init");
callContext = controller.callContext(callContext);
var registerAPIJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.registerAPIJSResult = registerAPIJSResult;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:YQeNisDMZkCYXmveaPDjNw:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.YQeNisDMZkCYXmveaPDjNw:q5JmWi9G_GI_5aoG37zIqg", "OutSystemsUI", "Init", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:I7EhrR9vYk+lhuhC8Xk5Og", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NnpaUkoy60OK58LSxM+fvA", callContext.id);
registerAPIJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_Init_RegisterAPIJS, "RegisterAPI", "Init", {
Token: OS.DataConversion.JSNodeParamConverter.to("", OS.Types.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.Init$registerAPIJSResult"))();
jsNodeResult.tokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Token, OS.Types.Text);
return jsNodeResult;
}, {
SyncWrapper: controller.clientActionProxies.syncWrapper$Action,
OnResume: controller.clientActionProxies.onResume$Action,
TriggerOnSyncStart: controller.clientActionProxies.triggerOnSyncStart$Action,
TriggerOnSyncComplete: controller.clientActionProxies.triggerOnSyncComplete$Action,
TriggerOnSyncError: controller.clientActionProxies.triggerOnSyncError$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:si3bn5IIjUOyjpjLABqtQg", callContext.id);
// InstanceToken = RegisterAPI.Token
model.variables.instanceTokenVar = registerAPIJSResult.value.tokenOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:zLGZWa5qI0yXj1Y3OmiOMg", callContext.id);
// Trigger Event: OnConfigure
return controller.onConfigure$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:aAdzLFmad0ykuG_eSF9kSQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:YQeNisDMZkCYXmveaPDjNw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:YQeNisDMZkCYXmveaPDjNw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.Init$registerAPIJSResult", [{
name: "Token",
attrName: "tokenOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._syncWrapper$Action = function (syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SyncWrapper");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.SyncWrapper$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
var securityExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getNetworkStatusVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.securityExceptionVar = securityExceptionVar;
varBag.allExceptionsVar = allExceptionsVar;
varBag.getNetworkStatusVar = getNetworkStatusVar;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:61JtyqdE4kyQ3ouMgX1hkA:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.61JtyqdE4kyQ3ouMgX1hkA:AvT9lFaTPchSHMEjPpGkoA", "OutSystemsUI", "SyncWrapper", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:t9gFCoSUGE+kI82pQA3a1w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:2H7JMqJDYky09Bv7b+e+pg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_SyncWrapper_TriggerSyncStartEventJS, "TriggerSyncStartEvent", "SyncWrapper", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:_rNVoy5gskirfHpTddoezQ", callContext.id);
// Execute Action: GetNetworkStatus
getNetworkStatusVar.value = OutSystemsUIController.default.getNetworkStatus$Action(callContext);

// IsOnline?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:nfaFmKlDNUOiez88ImzkUQ", callContext.id) && getNetworkStatusVar.value.isOnlineOut)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:SqlfaOn5fEqwSDNw0ZoocA", callContext.id);
// Trigger Event: OnSync
return controller.onSync$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:in5nlSJO8kic5NE1kxH2ig", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9_Iu1tkm8kOEr1KilaACFA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_SyncWrapper_SuspendSyncJS, "SuspendSync", "SyncWrapper", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ovxxnK25wkediVRyRJvj3w", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_SyncWrapper_TriggerSyncErrorEventOfflineJS, "TriggerSyncErrorEventOffline", "SyncWrapper", {
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1", "Unable to synchronize data. Device has no network connectivity."), OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8fTvrtG1Qkiw2cukaFn55w", callContext.id);
}

});
}).catch(function (ex) {
OS.Logger.trace("OfflineDataSyncCore.SyncWrapper", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: SecurityException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.SecurityException)) {
OS.Logger.error(null, ex);
securityExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(securityExceptionVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gi4+NVQjv0ea3taNkarbzQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:3Pg96F62hUWzkzd_qrSukA", callContext.id);
// Execute Action: EndWithSecurityError
OutSystemsUIController.default.endOfflineDataSync$Action(true, securityExceptionVar.value.exceptionMessageAttr, false, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qn7NXJ1M2UO36Qd1pnFv1w", callContext.id);
return OS.Flow.returnAsync();

});
}

// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WvYZNuhra0+E8QcHd7mSgg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:vqdjnHVFc0OqxgTooRemBQ", callContext.id);
// Execute Action: EndWithError
OutSystemsUIController.default.endOfflineDataSync$Action(true, allExceptionsVar.value.exceptionMessageAttr, true, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:nByB_hpE20u22c4ZnnEYBA", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:61JtyqdE4kyQ3ouMgX1hkA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:61JtyqdE4kyQ3ouMgX1hkA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.SyncWrapper$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._triggerOnSyncStart$Action = function (syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("TriggerOnSyncStart");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.TriggerOnSyncStart$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:FlCNyxoo3kOfKJMpvkOKJA:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.FlCNyxoo3kOfKJMpvkOKJA:eGm5xHKweOh6XrRtNRbzSA", "OutSystemsUI", "TriggerOnSyncStart", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FbpO1AzUzE66zg9L23vrvg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:S6IxnFTX4k6_xSaB1SWLYA", callContext.id);
// Trigger Event: OnSyncStart
return controller.onSyncStart$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NVr+d_l7L0Ku37FS4mw_bw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:FlCNyxoo3kOfKJMpvkOKJA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:FlCNyxoo3kOfKJMpvkOKJA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.TriggerOnSyncStart$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._triggerOnSyncError$Action = function (syncUnitIn, errorMessageIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("TriggerOnSyncError");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.TriggerOnSyncError$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
vars.value.errorMessageInLocal = errorMessageIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:7ttB2m5dm0WJJXYKe4r3wQ:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.7ttB2m5dm0WJJXYKe4r3wQ:2fOfZ3Ade+yizJ2k3PXDfg", "OutSystemsUI", "TriggerOnSyncError", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:cYfVxQKmekO5KtHq4bCdbg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:zc4widPCeESJmW_hUhOjtw", callContext.id);
// Trigger Event: OnSyncError
return controller.onSyncError$Action(vars.value.syncUnitInLocal, vars.value.errorMessageInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bU08AO+g6k6Q3TKAYDt9wA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:7ttB2m5dm0WJJXYKe4r3wQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:7ttB2m5dm0WJJXYKe4r3wQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.TriggerOnSyncError$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorMessage",
attrName: "errorMessageInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onNetworkStatusChanged$Action = function (isOnlineIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnNetworkStatusChanged");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.OnNetworkStatusChanged$vars"))());
vars.value.isOnlineInLocal = isOnlineIn;
var getSyncOnOnlineJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getSyncOnOnlineJSResult = getSyncOnOnlineJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:p0vI44c1Ek24KkSPAsM_gg:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.p0vI44c1Ek24KkSPAsM_gg:rV9+Bm0grWmdIaqLtKAj7A", "OutSystemsUI", "OnNetworkStatusChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:76JVsJw_ME+cWCl_ZQRUEg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:awv5UMOrb0yskStkJUM9jg", callContext.id);
getSyncOnOnlineJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_OnNetworkStatusChanged_GetSyncOnOnlineJS, "GetSyncOnOnline", "OnNetworkStatusChanged", {
SyncOnOnline: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.OnNetworkStatusChanged$getSyncOnOnlineJSResult"))();
jsNodeResult.syncOnOnlineOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SyncOnOnline, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:G8IwyMOhgEOJ6Qnf6+yN6A", callContext.id) && (vars.value.isOnlineInLocal && getSyncOnOnlineJSResult.value.syncOnOnlineOut))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lPVnhBGiWU+eTil6P3jOTw", callContext.id);
// Execute Action: StartOfflineDataSync
OutSystemsUIController.default.startOfflineDataSync$Action("", false, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:F6nymmbXyEWpcAWFS4wEnw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:F6nymmbXyEWpcAWFS4wEnw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:p0vI44c1Ek24KkSPAsM_gg", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.OnNetworkStatusChanged$vars", [{
name: "IsOnline",
attrName: "isOnlineInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.registerVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.OnNetworkStatusChanged$getSyncOnOnlineJSResult", [{
name: "SyncOnOnline",
attrName: "syncOnOnlineOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:2Bv35GDB1U2_P_QdWhVryA:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.2Bv35GDB1U2_P_QdWhVryA:3lPEqYg+VeRvaYqPewZucg", "OutSystemsUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Eii40DOziEe_8dritvMK+w", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0aDDvP4lLUyNDZvZBMisrw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_OnInitialize_InitJS, "Init", "OnInitialize", null, function ($parameters) {
}, {
Init: controller.clientActionProxies.init$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:GjSRPETX60ayqASlB2qVJw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:2Bv35GDB1U2_P_QdWhVryA", callContext.id);
}

};

Controller.prototype.onResume$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onResume$Action, callContext);

};
Controller.prototype.triggerOnSyncComplete$Action = function (syncUnitIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._triggerOnSyncComplete$Action, callContext, syncUnitIn);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.init$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._init$Action, callContext);

};
Controller.prototype.syncWrapper$Action = function (syncUnitIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._syncWrapper$Action, callContext, syncUnitIn);

};
Controller.prototype.triggerOnSyncStart$Action = function (syncUnitIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._triggerOnSyncStart$Action, callContext, syncUnitIn);

};
Controller.prototype.triggerOnSyncError$Action = function (syncUnitIn, errorMessageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._triggerOnSyncError$Action, callContext, syncUnitIn, errorMessageIn);

};
Controller.prototype.onNetworkStatusChanged$Action = function (isOnlineIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onNetworkStatusChanged$Action, callContext, isOnlineIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onSyncError$Action = function () {
return Promise.resolve();
};
Controller.prototype.onConfigure$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSyncComplete$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSync$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSyncStart$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:IUOdI7QmkEyzLmZAA68__Q:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q:a5KAUBz0oD+nYy3jX8gKmw", "OutSystemsUI", "Private", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:7LQm+WCaHEi7DaA92pfz3w:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w:hIr0s5HU2q0M_sdN+kCDHg", "OutSystemsUI", "OfflineDataSyncCore", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:7LQm+WCaHEi7DaA92pfz3w", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:IUOdI7QmkEyzLmZAA68__Q", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Private/OfflineDataSyncCore On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Private/OfflineDataSyncCore On Destroy");
return controller.onDestroy$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return OutSystemsUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});
define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.OnResume.GetSyncOnResumeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.SyncOnResume = window.offlineDataSync.getSyncOnResume();
};
});
define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.OnDestroy.UnregisterAPIJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.offlineDataSync.unregisterAPI($parameters.Token);
};
});
define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.Init.RegisterAPIJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Token = window.offlineDataSync.registerAPI($actions.SyncWrapper, $actions.OnResume, $actions.TriggerOnSyncStart, $actions.TriggerOnSyncComplete, $actions.TriggerOnSyncError);
};
});
define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.TriggerSyncStartEventJS", [], function () {
return function ($actions, $roles, $public) {
window.offlineDataSync.triggerSyncStartEvent();
};
});
define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.TriggerSyncErrorEventOfflineJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.offlineDataSync.triggerSyncErrorEvent($parameters.ErrorMessage);
};
});
define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.SuspendSyncJS", [], function () {
return function ($actions, $roles, $public) {
window.offlineDataSync.suspendSync();
};
});
define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.OnNetworkStatusChanged.GetSyncOnOnlineJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.SyncOnOnline = window.offlineDataSync.getSyncOnOnline();
};
});
define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.OnInitialize.InitJS", [], function () {
return function ($actions, $roles, $public) {
$actions.Init();
};
});

define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"pNqidDqDcUOD1FKsjDtBzA": {
getter: function (varBag, idService) {
return varBag.getSyncOnResumeJSResult.value;
}
},
"idJdKRvsQk6pvXB+ubw_oA": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"iqwLbSzl40aQOxA4jncutw": {
getter: function (varBag, idService) {
return varBag.unregisterAPIJSResult.value;
}
},
"NnpaUkoy60OK58LSxM+fvA": {
getter: function (varBag, idService) {
return varBag.registerAPIJSResult.value;
}
},
"nxyJm5jw90aBg8itfNfXvQ": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"gi4+NVQjv0ea3taNkarbzQ": {
getter: function (varBag, idService) {
return varBag.securityExceptionVar.value;
}
},
"WvYZNuhra0+E8QcHd7mSgg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"_rNVoy5gskirfHpTddoezQ": {
getter: function (varBag, idService) {
return varBag.getNetworkStatusVar.value;
}
},
"2H7JMqJDYky09Bv7b+e+pg": {
getter: function (varBag, idService) {
return varBag.triggerSyncStartEventJSResult.value;
}
},
"ovxxnK25wkediVRyRJvj3w": {
getter: function (varBag, idService) {
return varBag.triggerSyncErrorEventOfflineJSResult.value;
}
},
"9_Iu1tkm8kOEr1KilaACFA": {
getter: function (varBag, idService) {
return varBag.suspendSyncJSResult.value;
}
},
"zUPlcLxU4Umwm46cWFnhPw": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"wo9aZpbvgUuaG_Lff5Rxcw": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"gC0MuawEY0qHJMEUZEd2iA": {
getter: function (varBag, idService) {
return varBag.vars.value.errorMessageInLocal;
},
dataType: OS.Types.Text
},
"mD3miAXxckKq1xqDdgLx1w": {
getter: function (varBag, idService) {
return varBag.vars.value.isOnlineInLocal;
},
dataType: OS.Types.Boolean
},
"awv5UMOrb0yskStkJUM9jg": {
getter: function (varBag, idService) {
return varBag.getSyncOnOnlineJSResult.value;
}
},
"0aDDvP4lLUyNDZvZBMisrw": {
getter: function (varBag, idService) {
return varBag.initJSResult.value;
}
},
"ytHCSkv2FESDz5DyIaUDMg": {
getter: function (varBag, idService) {
return varBag.model.variables.instanceTokenVar;
},
dataType: OS.Types.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$translationsResources", ["exports", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$translationsResources.fr-CA", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$translationsResources.pt"], function (exports, OutSystemsUI_Private_OfflineDataSyncCore_mvc_translationsResources_frCA, OutSystemsUI_Private_OfflineDataSyncCore_mvc_translationsResources_pt) {
return {
"fr-CA": {
"translations": OutSystemsUI_Private_OfflineDataSyncCore_mvc_translationsResources_frCA,
"isRTL": false
},
"pt": {
"translations": OutSystemsUI_Private_OfflineDataSyncCore_mvc_translationsResources_pt,
"isRTL": false
}
};
});
define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$translationsResources.fr-CA", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "Impossible de synchroniser les données. L\'appareil n\'a pas de connectivité réseau."
};
});
define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$translationsResources.pt", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "Não é possivel a sincronização de dados pois o dispositivo não está conectado a nenhuma rede móvel ou Wi Fi."
};
});
