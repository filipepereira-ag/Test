define("AgentifaiSimulator.Common.MenuIcon.mvc$model", ["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$ErrorMessageRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetMenuIcon", "OutSystemsUI.controller$SetMenuIconListeners", "OutSystemsUI.controller$ToggleSideMenu"], function (OutSystems, AgentifaiSimulatorModel, OutSystemsUIModel, OutSystemsUIController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("MenuAction", "menuActionIn", "MenuAction", true, false, OS.Types.Text, function () {
return "";
}, false), 
this.attr("_menuActionInDataFetchStatus", "_menuActionInDataFetchStatus", "_menuActionInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return false;
}
});

Model.prototype.setInputs = function (inputs) {
if("MenuAction" in inputs) {
this.variables.menuActionIn = inputs.MenuAction;
if("_menuActionInDataFetchStatus" in inputs) {
this.variables._menuActionInDataFetchStatus = inputs._menuActionInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("AgentifaiSimulator.Common.MenuIcon.mvc$view", ["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "AgentifaiSimulator.Common.MenuIcon.mvc$model", "AgentifaiSimulator.Common.MenuIcon.mvc$controller", "AgentifaiSimulator.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI.model$ErrorMessageRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetMenuIcon", "OutSystemsUI.controller$SetMenuIconListeners", "OutSystemsUI.controller$ToggleSideMenu"], function (OutSystems, AgentifaiSimulatorModel, AgentifaiSimulatorController, OutSystemsUIModel, OutSystemsUIController, React, OSView, AgentifaiSimulator_Common_MenuIcon_mvc_model, AgentifaiSimulator_Common_MenuIcon_mvc_controller, AgentifaiSimulatorClientVariables, OSWidgets) {
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
        View.displayName = "Common.MenuIcon";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return AgentifaiSimulator_Common_MenuIcon_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return AgentifaiSimulator_Common_MenuIcon_mvc_controller;
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
extendedProperties: {
style: "margin-top: 0px;"
},
style: model.getCachedValue(idService.getId("MenuIcon.Style"), function () {
return ("app-menu-icon" + ((((model.variables.menuActionIn) !== (AgentifaiSimulatorModel.staticEntities.menuAction.back))) ? ("") : (" back")));
}, function () {
return model.variables.menuActionIn;
}),
visible: ((model.variables.menuActionIn) !== (AgentifaiSimulatorModel.staticEntities.menuAction.hidden)),
_idProps: {
service: idService,
name: "MenuIcon"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._menuActionInDataFetchStatus),
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._menuActionInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/MenuIcon/Container onclick");
controller.onToggleMenu$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
"aria-label": "Toggle the Menu",
role: "button",
tabIndex: "0",
"aria-haspopup": "true"
},
style: "menu-icon",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"aria-hidden": "true"
},
style: "menu-icon-line",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"aria-hidden": "true"
},
style: "menu-icon-line",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"aria-hidden": "true"
},
style: "menu-icon-line",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/MenuIcon/Container onclick");
controller.onBack$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
"aria-label": "Back to previous screen",
role: "button",
tabIndex: "0"
},
style: "menu-back",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "angle-left",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
name: "ArrowBack"
},
_widgetRecordProvider: widgetsRecordProvider
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("AgentifaiSimulator.Common.MenuIcon.mvc$controller", ["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "AgentifaiSimulator.languageResources", "AgentifaiSimulator.clientVariables", "AgentifaiSimulator.Common.MenuIcon.mvc$debugger", "OutSystemsUI.model$ErrorMessageRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetMenuIcon", "OutSystemsUI.controller$SetMenuIconListeners", "OutSystemsUI.controller$ToggleSideMenu"], function (OutSystems, AgentifaiSimulatorModel, AgentifaiSimulatorController, OutSystemsUIModel, OutSystemsUIController, AgentifaiSimulatorLanguageResources, AgentifaiSimulatorClientVariables, AgentifaiSimulator_Common_MenuIcon_mvc_Debugger) {
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
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var setMenuIconVar = new OS.DataTypes.VariableHolder();
var setMenuIconListenersVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.setMenuIconVar = setMenuIconVar;
varBag.setMenuIconListenersVar = setMenuIconListenersVar;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:25L8HeGO10mE54lBuRq53A:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.KDMvm7RSlEK8KPNGGaJdnw/ClientActions.25L8HeGO10mE54lBuRq53A:D9fcpxXivl5NtyH+DKWjnQ", "AgentifaiSimulator", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:930pRHbQmkqkgjMnxbsxZA", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:6_iQJnlasUCx2E0MtgvL_A", callContext.id);
// Execute Action: SetMenuIcon
setMenuIconVar.value = OutSystemsUIController.default.setMenuIcon$Action(model.variables.menuActionIn, callContext);

OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:d5Q0kmrRc0KT8ebzN0agYQ", callContext.id);
// Execute Action: SetMenuIconListeners
setMenuIconListenersVar.value = OutSystemsUIController.default.setMenuIconListeners$Action(callContext);

OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:s4_TzujSYEyWfKfpquVC8A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:25L8HeGO10mE54lBuRq53A", callContext.id);
}

};
Controller.prototype._onToggleMenu$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnToggleMenu");
callContext = controller.callContext(callContext);
var toggleSideMenuVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.toggleSideMenuVar = toggleSideMenuVar;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:NbtEjNDM3Uugzv14Z0ozBQ:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.KDMvm7RSlEK8KPNGGaJdnw/ClientActions.NbtEjNDM3Uugzv14Z0ozBQ:FT5aM4woFoJJDuf3YCA4pg", "AgentifaiSimulator", "OnToggleMenu", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:AwzWQMFjqU+vRHQnax8+Kw", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:a0Gb5jostE+WwxEkX50FFA", callContext.id);
// Execute Action: ToggleSideMenu
toggleSideMenuVar.value = OutSystemsUIController.default.toggleSideMenu$Action(callContext);

OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:IawdC6m1lkCGenBYVz7KSg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:NbtEjNDM3Uugzv14Z0ozBQ", callContext.id);
}

};
Controller.prototype._onBack$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnBack");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:6t_q5oS2GUqAe+scPrg8Pg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.KDMvm7RSlEK8KPNGGaJdnw/ClientActions.6t_q5oS2GUqAe+scPrg8Pg:XspcHOi9b6PxAB8QkwUA9g", "AgentifaiSimulator", "OnBack", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:j2TNZaqk1kSqRgowGeHooA", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:pIRKUz2qxE6HwsXpsbgicA", callContext.id);
// Destination: (PreviousScreen)
return OS.Navigation.navigateBack(null, callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:6t_q5oS2GUqAe+scPrg8Pg", callContext.id);
}

};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onToggleMenu$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onToggleMenu$Action, callContext);

};
Controller.prototype.onBack$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onBack$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:v2PEyf62LHVkKM1ctja0Kg", "AgentifaiSimulator", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:KDMvm7RSlEK8KPNGGaJdnw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.KDMvm7RSlEK8KPNGGaJdnw:rDWmKX7Q+XRau851cJLaXA", "AgentifaiSimulator", "MenuIcon", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:KDMvm7RSlEK8KPNGGaJdnw", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/MenuIcon On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/MenuIcon On Parameters Changed");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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

define("AgentifaiSimulator.Common.MenuIcon.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"6_iQJnlasUCx2E0MtgvL_A": {
getter: function (varBag, idService) {
return varBag.setMenuIconVar.value;
}
},
"d5Q0kmrRc0KT8ebzN0agYQ": {
getter: function (varBag, idService) {
return varBag.setMenuIconListenersVar.value;
}
},
"a0Gb5jostE+WwxEkX50FFA": {
getter: function (varBag, idService) {
return varBag.toggleSideMenuVar.value;
}
},
"DBVN2SdEqUK9vOajJKCjVA": {
getter: function (varBag, idService) {
return varBag.model.variables.menuActionIn;
},
dataType: OS.Types.Text
},
"pegExOLfS0WF48CX5qEo5A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MenuIcon"));
})(varBag.model, idService);
}
},
"WIuyMkip6UCj1DRDHBFDTQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ArrowBack"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
