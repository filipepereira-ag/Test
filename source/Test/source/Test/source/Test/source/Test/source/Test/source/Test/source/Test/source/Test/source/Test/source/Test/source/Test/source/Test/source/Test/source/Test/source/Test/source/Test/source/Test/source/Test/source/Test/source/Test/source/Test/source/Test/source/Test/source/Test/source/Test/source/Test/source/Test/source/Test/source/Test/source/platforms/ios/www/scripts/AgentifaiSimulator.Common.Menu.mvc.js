define("AgentifaiSimulator.Common.Menu.mvc$model", ["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "OutSystemsUI.model", "OutSystemsUI.controller", "AgentifaiSimulator.Common.ApplicationTitle.mvc$model", "AgentifaiSimulator.Common.UserInfo.mvc$model", "OutSystemsUI.Private.MenuDrag.mvc$model", "OutSystemsUI.model$ErrorMessageRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$IsMenuDraggable", "OutSystemsUI.controller$DEPRECATED_SetActiveMenuItems", "OutSystemsUI.controller$DEPRECATED_SetMenuListeners", "OutSystemsUI.controller$ToggleSideMenu"], function (OutSystems, AgentifaiSimulatorModel, OutSystemsUIModel, OutSystemsUIController, AgentifaiSimulator_Common_ApplicationTitle_mvcModel, AgentifaiSimulator_Common_UserInfo_mvcModel, OutSystemsUI_Private_MenuDrag_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("NeedsDrag", "needsDragVar", "NeedsDrag", true, false, OS.Types.Boolean, function () {
return false;
}, false), 
this.attr("ActiveItem", "activeItemIn", "ActiveItem", true, false, OS.Types.Integer, function () {
return -1;
}, false), 
this.attr("_activeItemInDataFetchStatus", "_activeItemInDataFetchStatus", "_activeItemInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ActiveSubItem", "activeSubItemIn", "ActiveSubItem", true, false, OS.Types.Integer, function () {
return -1;
}, false), 
this.attr("_activeSubItemInDataFetchStatus", "_activeSubItemInDataFetchStatus", "_activeSubItemInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = ((AgentifaiSimulator_Common_ApplicationTitle_mvcModel.hasValidationWidgets || AgentifaiSimulator_Common_UserInfo_mvcModel.hasValidationWidgets) || OutSystemsUI_Private_MenuDrag_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("ActiveItem" in inputs) {
this.variables.activeItemIn = inputs.ActiveItem;
if("_activeItemInDataFetchStatus" in inputs) {
this.variables._activeItemInDataFetchStatus = inputs._activeItemInDataFetchStatus;
}

}

if("ActiveSubItem" in inputs) {
this.variables.activeSubItemIn = inputs.ActiveSubItem;
if("_activeSubItemInDataFetchStatus" in inputs) {
this.variables._activeSubItemInDataFetchStatus = inputs._activeSubItemInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("AgentifaiSimulator.Common.Menu.mvc$view", ["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "AgentifaiSimulator.Common.Menu.mvc$model", "AgentifaiSimulator.Common.Menu.mvc$controller", "AgentifaiSimulator.clientVariables", "OutSystems/ReactWidgets/Main", "AgentifaiSimulator.Common.ApplicationTitle.mvc$view", "AgentifaiSimulator.Common.UserInfo.mvc$view", "OutSystemsUI.Private.MenuDrag.mvc$view", "OutSystemsUI.model$ErrorMessageRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$IsMenuDraggable", "OutSystemsUI.controller$DEPRECATED_SetActiveMenuItems", "OutSystemsUI.controller$DEPRECATED_SetMenuListeners", "OutSystemsUI.controller$ToggleSideMenu"], function (OutSystems, AgentifaiSimulatorModel, AgentifaiSimulatorController, OutSystemsUIModel, OutSystemsUIController, React, OSView, AgentifaiSimulator_Common_Menu_mvc_model, AgentifaiSimulator_Common_Menu_mvc_controller, AgentifaiSimulatorClientVariables, OSWidgets, AgentifaiSimulator_Common_ApplicationTitle_mvc_view, AgentifaiSimulator_Common_UserInfo_mvc_view, OutSystemsUI_Private_MenuDrag_mvc_view) {
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
        View.displayName = "Common.Menu";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [AgentifaiSimulator_Common_ApplicationTitle_mvc_view, AgentifaiSimulator_Common_UserInfo_mvc_view, OutSystemsUI_Private_MenuDrag_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return AgentifaiSimulator_Common_Menu_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return AgentifaiSimulator_Common_Menu_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "app-menu-content display-flex",
role: "navigation"
},
tag: "nav",
_idProps: {
service: idService,
name: "ApplicationContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "header-logo ph",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(AgentifaiSimulator_Common_ApplicationTitle_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "2",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
role: "menubar"
},
style: "app-menu-links",
visible: true,
_idProps: {
service: idService,
name: "PageLinks"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "app-login-info ph",
visible: true,
_idProps: {
service: idService,
name: "LoginInfo"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(AgentifaiSimulator_Common_UserInfo_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "5",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Menu/Container onclick");
controller.hideMenu$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
role: "button"
},
style: "app-menu-overlay",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(model.variables.needsDragVar, false, this, function () {
return [React.createElement(OutSystemsUI_Private_MenuDrag_mvc_view, {
inputs: {
MenuId: idService.getId("ApplicationContainer")
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "7",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("AgentifaiSimulator.Common.Menu.mvc$controller", ["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "AgentifaiSimulator.languageResources", "AgentifaiSimulator.clientVariables", "AgentifaiSimulator.Common.Menu.mvc$debugger", "OutSystemsUI.model$ErrorMessageRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$IsMenuDraggable", "OutSystemsUI.controller$DEPRECATED_SetActiveMenuItems", "OutSystemsUI.controller$DEPRECATED_SetMenuListeners", "OutSystemsUI.controller$ToggleSideMenu"], function (OutSystems, AgentifaiSimulatorModel, AgentifaiSimulatorController, OutSystemsUIModel, OutSystemsUIController, AgentifaiSimulatorLanguageResources, AgentifaiSimulatorClientVariables, AgentifaiSimulator_Common_Menu_mvc_Debugger) {
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
var isMenuDraggableVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.isMenuDraggableVar = isMenuDraggableVar;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:BCzIEbKAHUexmBvpPCszZA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.hWXOnKLXfkqeQs0QpY8haQ/ClientActions.BCzIEbKAHUexmBvpPCszZA:jWBWOlswoMLB1smszDGsMA", "AgentifaiSimulator", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:3I9kKD0aaEW6gF1nEPLeSw", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:q8xVXINefU+rljp+f25FgQ", callContext.id);
// Execute Action: IsMenuDraggable
isMenuDraggableVar.value = OutSystemsUIController.default.isMenuDraggable$Action(callContext);

OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:ItdeaMWceEag9e+4cPCbug", callContext.id);
// NeedsDrag = IsMenuDraggable.AddDrag
model.variables.needsDragVar = isMenuDraggableVar.value.addDragOut;
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:QOKqqU6R+Ue+js0I6sXsVw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:BCzIEbKAHUexmBvpPCszZA", callContext.id);
}

};
Controller.prototype._onRender$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnRender");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:uB7HLEHfDEK9QRrb0RWRWw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.hWXOnKLXfkqeQs0QpY8haQ/ClientActions.uB7HLEHfDEK9QRrb0RWRWw:OYlxhocOjKrJLpjrmANGPg", "AgentifaiSimulator", "OnRender", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:gmhoauAZpUqotjkfKggWig", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:f0kI5tppAEW8LhZDG7qgKQ", callContext.id);
// Execute Action: DEPRECATED_SetMenuListeners
OutSystemsUIController.default.dEPRECATED_SetMenuListeners$Action(callContext);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:PwWpMeChx0ubkgSnn4qjcA", callContext.id);
// Execute Action: DEPRECATED_SetActiveMenuItems
OutSystemsUIController.default.dEPRECATED_SetActiveMenuItems$Action(model.variables.activeItemIn, model.variables.activeSubItemIn, callContext);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:y+fd3WjZ0UicwzTl195ZVQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:uB7HLEHfDEK9QRrb0RWRWw", callContext.id);
}

};
Controller.prototype._hideMenu$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("HideMenu");
callContext = controller.callContext(callContext);
var toggleSideMenuVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.toggleSideMenuVar = toggleSideMenuVar;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:iXEyT2gxq0qWZ4A4XkjNNA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.hWXOnKLXfkqeQs0QpY8haQ/ClientActions.iXEyT2gxq0qWZ4A4XkjNNA:G3onQoHZgzDIjRnuMApUZw", "AgentifaiSimulator", "HideMenu", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:zgr5KyvPkE+VJW8HHmzE_g", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:LVlzM+uU9kOWciFcNNyf1w", callContext.id);
// Execute Action: ToggleSideMenu
toggleSideMenuVar.value = OutSystemsUIController.default.toggleSideMenu$Action(callContext);

OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:arh4VfG0lUCqs_PJPbU4+Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:iXEyT2gxq0qWZ4A4XkjNNA", callContext.id);
}

};
Controller.prototype._onParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:ga_vzccjUEu9sH8zYvMutA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.hWXOnKLXfkqeQs0QpY8haQ/ClientActions.ga_vzccjUEu9sH8zYvMutA:owiCKWcGM2_o9Sm04Nx8Jw", "AgentifaiSimulator", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:OzNlm0fSYkOqV2Csg7h1eg", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:WFb9urgYWES_Sq257tB7ng", callContext.id);
// Execute Action: DEPRECATED_SetActiveMenuItems
OutSystemsUIController.default.dEPRECATED_SetActiveMenuItems$Action(model.variables.activeItemIn, model.variables.activeSubItemIn, callContext);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:okWHzoyb5USqI8Aaw+lQrg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:ga_vzccjUEu9sH8zYvMutA", callContext.id);
}

};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onRender$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onRender$Action, callContext);

};
Controller.prototype.hideMenu$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._hideMenu$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:v2PEyf62LHVkKM1ctja0Kg", "AgentifaiSimulator", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:hWXOnKLXfkqeQs0QpY8haQ:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.hWXOnKLXfkqeQs0QpY8haQ:i6CCK21mPa8vLSoLq8WR7w", "AgentifaiSimulator", "Menu", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:hWXOnKLXfkqeQs0QpY8haQ", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Menu On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Menu On Render");
return controller.onRender$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Menu On Parameters Changed");
return controller.onParametersChanged$Action(callContext);

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

define("AgentifaiSimulator.Common.Menu.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"q8xVXINefU+rljp+f25FgQ": {
getter: function (varBag, idService) {
return varBag.isMenuDraggableVar.value;
}
},
"LVlzM+uU9kOWciFcNNyf1w": {
getter: function (varBag, idService) {
return varBag.toggleSideMenuVar.value;
}
},
"J+2hMxU0JEuTciMiNi5DPg": {
getter: function (varBag, idService) {
return varBag.model.variables.needsDragVar;
},
dataType: OS.Types.Boolean
},
"z_g+PArOXEyEU7HdgvXQ_w": {
getter: function (varBag, idService) {
return varBag.model.variables.activeItemIn;
},
dataType: OS.Types.Integer
},
"75_p0MkYXESIUxBEUkwJzw": {
getter: function (varBag, idService) {
return varBag.model.variables.activeSubItemIn;
},
dataType: OS.Types.Integer
},
"Vn4eUyiam0y+hf7ix8YH1w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ApplicationContainer"));
})(varBag.model, idService);
}
},
"OTEsBGbIvUC774QavQrMmg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PageLinks"));
})(varBag.model, idService);
}
},
"fbrl94BgrUO7+zNK3n087w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LoginInfo"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
