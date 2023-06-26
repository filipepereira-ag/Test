define("AgentifaiSimulator.Common.LayoutBlank.mvc$model", ["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "OutSystemsUI.model", "OutSystemsUI.controller", "AgentifaiSimulator.Common.OfflineDataSyncEvents.mvc$model", "OutSystemsUI.model$ErrorMessageRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetLang", "OutSystemsUI.controller$LayoutReady", "OutSystemsUI.controller$AddFavicon"], function (OutSystems, AgentifaiSimulatorModel, OutSystemsUIModel, OutSystemsUIController, AgentifaiSimulator_Common_OfflineDataSyncEvents_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.Types.Text, function () {
return "";
}, false), 
this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("EnableAccessibilityFeatures", "enableAccessibilityFeaturesIn", "EnableAccessibilityFeatures", true, false, OS.Types.Boolean, function () {
return false;
}, false), 
this.attr("_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}, false)
].concat(_super.attributesToDeclare.call(this));
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
Model._hasValidationWidgetsValue = AgentifaiSimulator_Common_OfflineDataSyncEvents_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("ExtendedClass" in inputs) {
this.variables.extendedClassIn = inputs.ExtendedClass;
if("_extendedClassInDataFetchStatus" in inputs) {
this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
}

}

if("EnableAccessibilityFeatures" in inputs) {
this.variables.enableAccessibilityFeaturesIn = inputs.EnableAccessibilityFeatures;
if("_enableAccessibilityFeaturesInDataFetchStatus" in inputs) {
this.variables._enableAccessibilityFeaturesInDataFetchStatus = inputs._enableAccessibilityFeaturesInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("AgentifaiSimulator.Common.LayoutBlank.mvc$view", ["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "AgentifaiSimulator.Common.LayoutBlank.mvc$model", "AgentifaiSimulator.Common.LayoutBlank.mvc$controller", "AgentifaiSimulator.clientVariables", "OutSystems/ReactWidgets/Main", "AgentifaiSimulator.Common.OfflineDataSyncEvents.mvc$view", "OutSystemsUI.model$ErrorMessageRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetLang", "OutSystemsUI.controller$LayoutReady", "OutSystemsUI.controller$AddFavicon"], function (OutSystems, AgentifaiSimulatorModel, AgentifaiSimulatorController, OutSystemsUIModel, OutSystemsUIController, React, OSView, AgentifaiSimulator_Common_LayoutBlank_mvc_model, AgentifaiSimulator_Common_LayoutBlank_mvc_controller, AgentifaiSimulatorClientVariables, OSWidgets, AgentifaiSimulator_Common_OfflineDataSyncEvents_mvc_view) {
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
        View.displayName = "Common.LayoutBlank";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI.OutSystemsUI.js"];
        };
        View.getBlocks = function() {
            return [AgentifaiSimulator_Common_OfflineDataSyncEvents_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return AgentifaiSimulator_Common_LayoutBlank_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return AgentifaiSimulator_Common_LayoutBlank_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("V8_7+0lnHkmHXX9Wv_5eCg.Style"), function () {
return (("layout layout-native blank" + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn)))) + ((!(model.variables.enableAccessibilityFeaturesIn)) ? ("") : (" has-accessible-features")));
}, function () {
return model.variables.extendedClassIn;
}, function () {
return model.variables.enableAccessibilityFeaturesIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus, model.variables._enableAccessibilityFeaturesInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "content",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
style: "main-content",
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "offline-data-sync",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(AgentifaiSimulator_Common_OfflineDataSyncEvents_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onSyncComplete$Action: function (syncUnitIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/OfflineDataSyncEvents OnSyncComplete");
return controller.actionHandler_OnSyncCompleteTrigger$Action(syncUnitIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
onSyncStart$Action: function (syncUnitIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/OfflineDataSyncEvents OnSyncStart");
return controller.actionHandler_OnSyncStartTrigger$Action(syncUnitIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
onSyncError$Action: function (syncUnitIn, errorMessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/OfflineDataSyncEvents OnSyncError");
return controller.actionHandler_OnSyncErrorTrigger$Action(syncUnitIn, errorMessageIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "4",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("AgentifaiSimulator.Common.LayoutBlank.mvc$controller", ["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "AgentifaiSimulator.languageResources", "AgentifaiSimulator.clientVariables", "AgentifaiSimulator.Common.LayoutBlank.mvc$debugger", "OutSystemsUI.model$ErrorMessageRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetLang", "OutSystemsUI.controller$LayoutReady", "OutSystemsUI.controller$AddFavicon"], function (OutSystems, AgentifaiSimulatorModel, AgentifaiSimulatorController, OutSystemsUIModel, OutSystemsUIController, AgentifaiSimulatorLanguageResources, AgentifaiSimulatorClientVariables, AgentifaiSimulator_Common_LayoutBlank_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._actionHandler_OnSyncErrorTrigger$Action = function (syncUnitIn, errorMessageIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ActionHandler_OnSyncErrorTrigger");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("AgentifaiSimulator.Common.LayoutBlank.ActionHandler_OnSyncErrorTrigger$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
vars.value.errorMessageInLocal = errorMessageIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:Fc0nHBHSgEisTCRSMaA8xg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ml00FEbnoUqw+GJ+smczMQ/ClientActions.Fc0nHBHSgEisTCRSMaA8xg:tgkJzpcdpvTHO7d1mXR_xw", "AgentifaiSimulator", "ActionHandler_OnSyncErrorTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:kDkf11FkcUO5xAam7cQmow", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:4P7+hV0tN0mVjQmXMO5qKw", callContext.id);
// Trigger Event: OnSyncError
return controller.onSyncError$Action(vars.value.syncUnitInLocal, vars.value.errorMessageInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:2pXmOqU5d06a82ASIVENPw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:Fc0nHBHSgEisTCRSMaA8xg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:Fc0nHBHSgEisTCRSMaA8xg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("AgentifaiSimulator.Common.LayoutBlank.ActionHandler_OnSyncErrorTrigger$vars", [{
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
Controller.prototype._actionHandler_OnSyncStartTrigger$Action = function (syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ActionHandler_OnSyncStartTrigger");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("AgentifaiSimulator.Common.LayoutBlank.ActionHandler_OnSyncStartTrigger$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:993TQxgwqEOVqy7eIeyZxA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ml00FEbnoUqw+GJ+smczMQ/ClientActions.993TQxgwqEOVqy7eIeyZxA:l+k9XLSJzDBxM0feDdHh4Q", "AgentifaiSimulator", "ActionHandler_OnSyncStartTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:_N9DX9htNEemZ4lfXkJ5rw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:3hAtyso6zkuMl6NneaHqmg", callContext.id);
// Trigger Event: OnSyncStart
return controller.onSyncStart$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:N7YGYmoF6k6u06kGANVEjw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:993TQxgwqEOVqy7eIeyZxA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:993TQxgwqEOVqy7eIeyZxA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("AgentifaiSimulator.Common.LayoutBlank.ActionHandler_OnSyncStartTrigger$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var setLangVar = new OS.DataTypes.VariableHolder();
var addFaviconVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.setLangVar = setLangVar;
varBag.addFaviconVar = addFaviconVar;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:sB9yiR+Jo0+hUGIsVaOtag:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ml00FEbnoUqw+GJ+smczMQ/ClientActions.sB9yiR+Jo0+hUGIsVaOtag:+8KsJ9mZtooCSfLCHTSK5A", "AgentifaiSimulator", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:C0TsNS+C80yZRYMfc7Ueqw", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:he94D5Aj1EuSWWqRGMLaiQ", callContext.id);
// Execute Action: LayoutReady
OutSystemsUIController.default.layoutReady$Action(callContext);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:NnwyDUIkck6DY9sNyo0TDg", callContext.id);
// Execute Action: SetLang
setLangVar.value = OutSystemsUIController.default.setLang$Action("", callContext);

OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:ReAGJR65IEKaxgozJw7VHQ", callContext.id);
// Execute Action: AddFavicon
addFaviconVar.value = OutSystemsUIController.default.addFavicon$Action("favicon.png", callContext);

OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:xNGXSF8f1kWQ4Qg14N838Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:sB9yiR+Jo0+hUGIsVaOtag", callContext.id);
}

};
Controller.prototype._actionHandler_OnSyncCompleteTrigger$Action = function (syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ActionHandler_OnSyncCompleteTrigger");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("AgentifaiSimulator.Common.LayoutBlank.ActionHandler_OnSyncCompleteTrigger$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:8BjKlj9lt061aXfRwp0Ckw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ml00FEbnoUqw+GJ+smczMQ/ClientActions.8BjKlj9lt061aXfRwp0Ckw:1BbrfOYy89mI3x+vFoJ9JA", "AgentifaiSimulator", "ActionHandler_OnSyncCompleteTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:Yt7LAk4BrUK0TH5rAd6Kmg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:AmkedVZ2B0aLEXP7S8EImw", callContext.id);
// Trigger Event: OnSyncComplete
return controller.onSyncComplete$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:HNRAgD19cEyVaoXmH3IvYQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:8BjKlj9lt061aXfRwp0Ckw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:8BjKlj9lt061aXfRwp0Ckw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("AgentifaiSimulator.Common.LayoutBlank.ActionHandler_OnSyncCompleteTrigger$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.actionHandler_OnSyncErrorTrigger$Action = function (syncUnitIn, errorMessageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._actionHandler_OnSyncErrorTrigger$Action, callContext, syncUnitIn, errorMessageIn);

};
Controller.prototype.actionHandler_OnSyncStartTrigger$Action = function (syncUnitIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._actionHandler_OnSyncStartTrigger$Action, callContext, syncUnitIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.actionHandler_OnSyncCompleteTrigger$Action = function (syncUnitIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._actionHandler_OnSyncCompleteTrigger$Action, callContext, syncUnitIn);

};
Controller.prototype.onSyncStart$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSyncError$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSyncComplete$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:v2PEyf62LHVkKM1ctja0Kg", "AgentifaiSimulator", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:ml00FEbnoUqw+GJ+smczMQ:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ml00FEbnoUqw+GJ+smczMQ:NZdcnVU1Jkc3GygJhett1g", "AgentifaiSimulator", "LayoutBlank", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:ml00FEbnoUqw+GJ+smczMQ", callContext.id);
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:0eZ+W3SSVk+CJcw1X48PQA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/LayoutBlank On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return AgentifaiSimulatorController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, AgentifaiSimulatorLanguageResources);
});

define("AgentifaiSimulator.Common.LayoutBlank.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"AK+wONh4c0CWTDhwF+C7yw": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"52zP3OCezk2Qi4cHwHez2w": {
getter: function (varBag, idService) {
return varBag.vars.value.errorMessageInLocal;
},
dataType: OS.Types.Text
},
"w7ss_6ihwUazbkpRIZ_UlQ": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"NnwyDUIkck6DY9sNyo0TDg": {
getter: function (varBag, idService) {
return varBag.setLangVar.value;
}
},
"ReAGJR65IEKaxgozJw7VHQ": {
getter: function (varBag, idService) {
return varBag.addFaviconVar.value;
}
},
"T+zsDskn1kyUPqwnopQjSw": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"O5pFrzIA+Euvzz7koqumrw": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.Types.Text
},
"YT3p7xV1tkOkomzRYlGXjQ": {
getter: function (varBag, idService) {
return varBag.model.variables.enableAccessibilityFeaturesIn;
},
dataType: OS.Types.Boolean
},
"wWotLHj8pkSaIB8w4KPdqg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
