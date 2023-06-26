define("AgentifaiSimulator.Common.Layout.mvc$model", ["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.Private.PullToRefresh.mvc$model", "AgentifaiSimulator.Common.OfflineDataSyncEvents.mvc$model", "OutSystemsUI.model$ErrorMessageRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$AddFavicon", "OutSystemsUI.controller$LayoutReady", "OutSystemsUI.controller$SetLang", "OutSystemsUI.controller$SkipToContent"], function (OutSystems, AgentifaiSimulatorModel, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_Private_PullToRefresh_mvcModel, AgentifaiSimulator_Common_OfflineDataSyncEvents_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("UsePullToRefresh", "usePullToRefreshIn", "UsePullToRefresh", true, false, OS.Types.Boolean, function () {
return false;
}, false), 
this.attr("_usePullToRefreshInDataFetchStatus", "_usePullToRefreshInDataFetchStatus", "_usePullToRefreshInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("HideHeaderOnScroll", "hideHeaderOnScrollIn", "HideHeaderOnScroll", true, false, OS.Types.Boolean, function () {
return false;
}, false), 
this.attr("_hideHeaderOnScrollInDataFetchStatus", "_hideHeaderOnScrollInDataFetchStatus", "_hideHeaderOnScrollInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("MenuBehavior", "menuBehaviorIn", "MenuBehavior", true, false, OS.Types.Text, function () {
return "";
}, false), 
this.attr("_menuBehaviorInDataFetchStatus", "_menuBehaviorInDataFetchStatus", "_menuBehaviorInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}, false), 
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
Model._hasValidationWidgetsValue = (OutSystemsUI_Private_PullToRefresh_mvcModel.hasValidationWidgets || AgentifaiSimulator_Common_OfflineDataSyncEvents_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("UsePullToRefresh" in inputs) {
this.variables.usePullToRefreshIn = inputs.UsePullToRefresh;
if("_usePullToRefreshInDataFetchStatus" in inputs) {
this.variables._usePullToRefreshInDataFetchStatus = inputs._usePullToRefreshInDataFetchStatus;
}

}

if("HideHeaderOnScroll" in inputs) {
this.variables.hideHeaderOnScrollIn = inputs.HideHeaderOnScroll;
if("_hideHeaderOnScrollInDataFetchStatus" in inputs) {
this.variables._hideHeaderOnScrollInDataFetchStatus = inputs._hideHeaderOnScrollInDataFetchStatus;
}

}

if("MenuBehavior" in inputs) {
this.variables.menuBehaviorIn = inputs.MenuBehavior;
if("_menuBehaviorInDataFetchStatus" in inputs) {
this.variables._menuBehaviorInDataFetchStatus = inputs._menuBehaviorInDataFetchStatus;
}

}

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
define("AgentifaiSimulator.Common.Layout.mvc$view", ["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "AgentifaiSimulator.Common.Layout.mvc$model", "AgentifaiSimulator.Common.Layout.mvc$controller", "AgentifaiSimulator.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI.Private.PullToRefresh.mvc$view", "AgentifaiSimulator.Common.OfflineDataSyncEvents.mvc$view", "OutSystemsUI.model$ErrorMessageRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$AddFavicon", "OutSystemsUI.controller$LayoutReady", "OutSystemsUI.controller$SetLang", "OutSystemsUI.controller$SkipToContent"], function (OutSystems, AgentifaiSimulatorModel, AgentifaiSimulatorController, OutSystemsUIModel, OutSystemsUIController, React, OSView, AgentifaiSimulator_Common_Layout_mvc_model, AgentifaiSimulator_Common_Layout_mvc_controller, AgentifaiSimulatorClientVariables, OSWidgets, OutSystemsUI_Private_PullToRefresh_mvc_view, AgentifaiSimulator_Common_OfflineDataSyncEvents_mvc_view) {
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
        View.displayName = "Common.Layout";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI.OutSystemsUI.js"];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_Private_PullToRefresh_mvc_view, AgentifaiSimulator_Common_OfflineDataSyncEvents_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return AgentifaiSimulator_Common_Layout_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return AgentifaiSimulator_Common_Layout_mvc_controller;
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
style: model.getCachedValue(idService.getId("LayoutWrapper.Style"), function () {
return (((("layout layout-side layout-native " + ((!(model.variables.hideHeaderOnScrollIn)) ? ("") : ("hide-header-on-scroll "))) + model.variables.menuBehaviorIn) + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn)))) + ((!(model.variables.enableAccessibilityFeaturesIn)) ? ("") : (" has-accessible-features")));
}, function () {
return model.variables.hideHeaderOnScrollIn;
}, function () {
return model.variables.menuBehaviorIn;
}, function () {
return model.variables.extendedClassIn;
}, function () {
return model.variables.enableAccessibilityFeaturesIn;
}),
visible: true,
_idProps: {
service: idService,
name: "LayoutWrapper"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hideHeaderOnScrollInDataFetchStatus, model.variables._menuBehaviorInDataFetchStatus, model.variables._extendedClassInDataFetchStatus, model.variables._enableAccessibilityFeaturesInDataFetchStatus)
}, React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
"aria-label": "Skip to Content (Press Enter)",
"data-showskipcontent": model.getCachedValue(idService.getId("yRvtB25X+UKrx0JRPzwU1A.data-showskipcontent"), function () {
return ((model.variables.enableAccessibilityFeaturesIn) ? ("true") : ("false"));
}, function () {
return model.variables.enableAccessibilityFeaturesIn;
})
},
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Layout/Link OnClick");
controller.skipToContentOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "skip-nav",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Skip to Content (Press Enter)"), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
role: "complementary",
className: "aside-navigation"
},
tag: "aside",
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.navigation,
_idProps: {
service: idService,
name: "Navigation"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "main",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.hideHeaderOnScrollIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"aria-hidden": "true"
},
style: "sticky-observer",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
role: "banner",
className: "header"
},
tag: "header",
_idProps: {
service: idService,
name: "Header"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "header-top",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "header-content display-flex",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex align-items-center full-width",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.headerLeft,
style: "header-left",
_idProps: {
service: idService,
name: "HeaderLeft"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "header-title"
},
tag: "h1",
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.title,
gridProperties: {
classes: "OSInline"
},
_idProps: {
service: idService,
name: "Title"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.headerRight,
style: "header-right",
_idProps: {
service: idService,
name: "HeaderRight"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.headerContent,
style: "header-top-content ph",
_idProps: {
service: idService,
name: "HeaderContent"
},
_widgetRecordProvider: widgetsRecordProvider
})), $if(model.variables.usePullToRefreshIn, false, this, function () {
return [React.createElement(OutSystemsUI_Private_PullToRefresh_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onContentPull$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/PullToRefresh OnContentPull");
return controller.actionHandler_OnPullToRefreshTrigger$Action(controller.callContext(eventHandlerContext));
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
uuid: "15",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "content",
visible: true,
_idProps: {
service: idService,
name: "ContentWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
role: "main"
},
style: "main-content ThemeGrid_Container",
visible: true,
_idProps: {
service: idService,
name: "MainContentWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
style: "content-middle",
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
role: "contentinfo",
className: "content-bottom"
},
tag: "footer",
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.bottom,
style: "footer ph",
_idProps: {
service: idService,
name: "Bottom"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "offline-data-sync",
visible: true,
_idProps: {
service: idService,
uuid: "21"
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
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "22",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("AgentifaiSimulator.Common.Layout.mvc$controller", ["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "AgentifaiSimulator.languageResources", "AgentifaiSimulator.clientVariables", "AgentifaiSimulator.Common.Layout.mvc$debugger", "OutSystemsUI.model$ErrorMessageRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$AddFavicon", "OutSystemsUI.controller$LayoutReady", "OutSystemsUI.controller$SetLang", "OutSystemsUI.controller$SkipToContent"], function (OutSystems, AgentifaiSimulatorModel, AgentifaiSimulatorController, OutSystemsUIModel, OutSystemsUIController, AgentifaiSimulatorLanguageResources, AgentifaiSimulatorClientVariables, AgentifaiSimulator_Common_Layout_mvc_Debugger) {
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
Controller.prototype._actionHandler_OnSyncCompleteTrigger$Action = function (syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ActionHandler_OnSyncCompleteTrigger");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("AgentifaiSimulator.Common.Layout.ActionHandler_OnSyncCompleteTrigger$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:Th0iAdyqYke0exSEI7WZUg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg/ClientActions.Th0iAdyqYke0exSEI7WZUg:eunz49Zr4oxMgskuTTHrFw", "AgentifaiSimulator", "ActionHandler_OnSyncCompleteTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:zdEEGoFyh0O0X8sSFFssZg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:9+eATscBcUGq9JDrZ017eQ", callContext.id);
// Trigger Event: OnSyncComplete
return controller.onSyncComplete$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:jyVw_v_sgU6hJbgHkIPKnA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:Th0iAdyqYke0exSEI7WZUg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:Th0iAdyqYke0exSEI7WZUg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("AgentifaiSimulator.Common.Layout.ActionHandler_OnSyncCompleteTrigger$vars", [{
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
var addFaviconVar = new OS.DataTypes.VariableHolder();
var setLangVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.addFaviconVar = addFaviconVar;
varBag.setLangVar = setLangVar;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:qitSK2Rm80mwxxjX7d_a6A:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg/ClientActions.qitSK2Rm80mwxxjX7d_a6A:XAkkfnZ1uRqNr0P1RCHazg", "AgentifaiSimulator", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:tTNoJzHZMUyM8i60bD0qAw", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:1atQWSYmeU60xXiAq6mv6Q", callContext.id);
// Execute Action: LayoutReady
OutSystemsUIController.default.layoutReady$Action(callContext);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:wDcmb05rYkuaOoOIn71Qmg", callContext.id);
// Execute Action: SetLang
setLangVar.value = OutSystemsUIController.default.setLang$Action("", callContext);

OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:mzLAB3gQz0WxRS4rcv7eXA", callContext.id);
// Execute Action: AddFavicon
addFaviconVar.value = OutSystemsUIController.default.addFavicon$Action("favicon.png", callContext);

OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:8Vk2KE_oUUmyiqZsqOuOlg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:qitSK2Rm80mwxxjX7d_a6A", callContext.id);
}

};
Controller.prototype._actionHandler_OnPullToRefreshTrigger$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ActionHandler_OnPullToRefreshTrigger");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:d37UXb2sj06bxYMMMWprOg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg/ClientActions.d37UXb2sj06bxYMMMWprOg:ZXVij4oqSupuSyAmH_KChA", "AgentifaiSimulator", "ActionHandler_OnPullToRefreshTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:kERdD8LDgE+J23uvzpqMVg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:3MkhZPZSUUKMdCUHdSKEZw", callContext.id);
// Trigger Event: OnPullToRefresh
return controller.onPullToRefresh$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:Qs_5c_iidE+Fy49opuoRcA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:d37UXb2sj06bxYMMMWprOg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:d37UXb2sj06bxYMMMWprOg", callContext.id);
throw ex;

});
};
Controller.prototype._actionHandler_OnSyncErrorTrigger$Action = function (syncUnitIn, errorMessageIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ActionHandler_OnSyncErrorTrigger");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("AgentifaiSimulator.Common.Layout.ActionHandler_OnSyncErrorTrigger$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
vars.value.errorMessageInLocal = errorMessageIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:Z9dOYJFBuEeB+1DSu2B5dA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg/ClientActions.Z9dOYJFBuEeB+1DSu2B5dA:O9AlNDbr+7ebcFopwEHtbA", "AgentifaiSimulator", "ActionHandler_OnSyncErrorTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:bpdSPKfwc06uAGEZDNYGeQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:8A1YH1U13E+ZfPzwwlPUag", callContext.id);
// Trigger Event: OnSyncError
return controller.onSyncError$Action(vars.value.syncUnitInLocal, vars.value.errorMessageInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:WMtEHNdfBECdT6zsjwRFqA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:Z9dOYJFBuEeB+1DSu2B5dA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:Z9dOYJFBuEeB+1DSu2B5dA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("AgentifaiSimulator.Common.Layout.ActionHandler_OnSyncErrorTrigger$vars", [{
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("AgentifaiSimulator.Common.Layout.ActionHandler_OnSyncStartTrigger$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:xkFabWL1UUyT8fm7uKmgOQ:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg/ClientActions.xkFabWL1UUyT8fm7uKmgOQ:GS0A_K_ODlU6vba9Vbituw", "AgentifaiSimulator", "ActionHandler_OnSyncStartTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:kmWxeX59vkSpWn5AZqMLwQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:cvW+l1AVnUSssp+DnbaqdQ", callContext.id);
// Trigger Event: OnSyncStart
return controller.onSyncStart$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:Wmo6YvJsGk+YHJkCLYY8gw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:xkFabWL1UUyT8fm7uKmgOQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:xkFabWL1UUyT8fm7uKmgOQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("AgentifaiSimulator.Common.Layout.ActionHandler_OnSyncStartTrigger$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._skipToContentOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SkipToContentOnClick");
callContext = controller.callContext(callContext);
var skipToContentVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.skipToContentVar = skipToContentVar;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:HqtXliUJCU2hV0e9Z4CEgw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg/ClientActions.HqtXliUJCU2hV0e9Z4CEgw:2IJqvFTvG4KY0wJYjSElmA", "AgentifaiSimulator", "SkipToContentOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:k6mkyv5TE0m24MLBDtmf7A", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:BGOYVEyzeEul1cG8uoW7XA", callContext.id);
// Execute Action: SkipToContent
skipToContentVar.value = OutSystemsUIController.default.skipToContent$Action(idService.getId("MainContentWrapper"), callContext);

OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:ZWG2kjwUSUCx8XuyRCDYLQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:HqtXliUJCU2hV0e9Z4CEgw", callContext.id);
}

};

Controller.prototype.actionHandler_OnSyncCompleteTrigger$Action = function (syncUnitIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._actionHandler_OnSyncCompleteTrigger$Action, callContext, syncUnitIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.actionHandler_OnPullToRefreshTrigger$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._actionHandler_OnPullToRefreshTrigger$Action, callContext);

};
Controller.prototype.actionHandler_OnSyncErrorTrigger$Action = function (syncUnitIn, errorMessageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._actionHandler_OnSyncErrorTrigger$Action, callContext, syncUnitIn, errorMessageIn);

};
Controller.prototype.actionHandler_OnSyncStartTrigger$Action = function (syncUnitIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._actionHandler_OnSyncStartTrigger$Action, callContext, syncUnitIn);

};
Controller.prototype.skipToContentOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._skipToContentOnClick$Action, callContext);

};
Controller.prototype.onPullToRefresh$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSyncComplete$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSyncError$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSyncStart$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:v2PEyf62LHVkKM1ctja0Kg", "AgentifaiSimulator", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:A3CPaT75a0KxzHXTIsSbxg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg:aE1BQ49aifd7MhoLN4bwVg", "AgentifaiSimulator", "Layout", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:A3CPaT75a0KxzHXTIsSbxg", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Layout On Ready");
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

define("AgentifaiSimulator.Common.Layout.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"6U1yhr2j0U2w8ng_SFxDoA": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"mzLAB3gQz0WxRS4rcv7eXA": {
getter: function (varBag, idService) {
return varBag.addFaviconVar.value;
}
},
"wDcmb05rYkuaOoOIn71Qmg": {
getter: function (varBag, idService) {
return varBag.setLangVar.value;
}
},
"BJST1JvzxU2jhqze0URhdQ": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"fOTuEctLG0+pt9Ow99wVWw": {
getter: function (varBag, idService) {
return varBag.vars.value.errorMessageInLocal;
},
dataType: OS.Types.Text
},
"VRQDHNiYHUisBgO_ngeYVg": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.Types.Text
},
"BGOYVEyzeEul1cG8uoW7XA": {
getter: function (varBag, idService) {
return varBag.skipToContentVar.value;
}
},
"Kxz2dJRhBki6BBp0xkKFqA": {
getter: function (varBag, idService) {
return varBag.model.variables.usePullToRefreshIn;
},
dataType: OS.Types.Boolean
},
"ZOqgk97lx0uZhfBUAy1KoQ": {
getter: function (varBag, idService) {
return varBag.model.variables.hideHeaderOnScrollIn;
},
dataType: OS.Types.Boolean
},
"QO21XPxfVUi8vJ3W5LNJow": {
getter: function (varBag, idService) {
return varBag.model.variables.menuBehaviorIn;
},
dataType: OS.Types.Text
},
"sW+LuYpNqU24PvPdLwoxeg": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.Types.Text
},
"t4WcP87NeU2omTCJHi88rg": {
getter: function (varBag, idService) {
return varBag.model.variables.enableAccessibilityFeaturesIn;
},
dataType: OS.Types.Boolean
},
"BC7au_eWnEiKn8y5xt8TzQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LayoutWrapper"));
})(varBag.model, idService);
}
},
"as5JQcIufUKZv_PtqXJgYw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Navigation"));
})(varBag.model, idService);
}
},
"JnwU6UZneUe2sWedGD3d0w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Header"));
})(varBag.model, idService);
}
},
"jNymkgJVaU6dCOgTk7ar6A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"ji+CbMqLAE+fpFT1Dpmfhw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"EWjBtq0YjEK9uGPUfqIm7g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"ognXnBhykkK9K9WlNZ_90Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"fcwHr6W7FU2mn3EbbmkcRg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PullToRefresh"));
})(varBag.model, idService);
}
},
"XhsFXJEIQkeADDaTVOiSyw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ContentWrapper"));
})(varBag.model, idService);
}
},
"+EwZgPtEY0i+Cfs+_SvF+A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MainContentWrapper"));
})(varBag.model, idService);
}
},
"JZ1VMVXA2EupwwQKlTjsuQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"kuTy7XWhtEOOSkRNTFearg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
