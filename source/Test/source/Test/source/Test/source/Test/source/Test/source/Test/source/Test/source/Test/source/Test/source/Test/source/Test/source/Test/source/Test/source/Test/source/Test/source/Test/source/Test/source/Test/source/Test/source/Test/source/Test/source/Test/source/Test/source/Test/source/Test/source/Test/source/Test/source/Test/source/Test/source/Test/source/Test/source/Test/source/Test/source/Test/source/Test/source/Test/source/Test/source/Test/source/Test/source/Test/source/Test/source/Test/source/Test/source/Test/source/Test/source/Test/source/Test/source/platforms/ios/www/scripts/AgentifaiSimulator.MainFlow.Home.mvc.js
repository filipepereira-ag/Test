define("AgentifaiSimulator.MainFlow.Home.mvc$model", ["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "CommonPlugin.model", "AgentifaiAssistantPlugin.controller", "CommonPlugin.model$ErrorRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$CommonPlugin", "AgentifaiAssistantPlugin.controller$Open", "AgentifaiSimulator.referencesHealth$AgentifaiAssistantPlugin", "AgentifaiAssistantPlugin.controller$CheckAgentifaiPlugin", "AgentifaiAssistantPlugin.controller$SetTheme", "AgentifaiAssistantPlugin.controller$RegisterUser", "AgentifaiAssistantPlugin.controller$Initialize", "AgentifaiAssistantPlugin.controller$SetWidgetDimensions", "AgentifaiAssistantPlugin.controller$Show", "AgentifaiAssistantPlugin.controller$UnregisterUser", "AgentifaiAssistantPlugin.controller$Hide", "AgentifaiSimulator.model$ThemesRecordList"], function (OutSystems, AgentifaiSimulatorModel, CommonPluginModel, AgentifaiAssistantPluginController) {
var OS = OutSystems.Internal;
var GetThemesAggrRec = (function (_super) {
__extends(GetThemesAggrRec, _super);
function GetThemesAggrRec(defaults) {
_super.apply(this, arguments);
}
GetThemesAggrRec.RecordListType = AgentifaiSimulatorModel.ThemesRecordList;
GetThemesAggrRec.init();
return GetThemesAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsAvailable", "isAvailableVar", "IsAvailable", true, false, OS.Types.Boolean, function () {
return false;
}, false), 
this.attr("pluginError", "pluginErrorVar", "pluginError", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.ErrorRec());
}, false, CommonPluginModel.ErrorRec), 
this.attr("ThemesIdentifier", "themesIdentifierVar", "ThemesIdentifier", true, false, OS.Types.Text, function () {
return "";
}, false), 
this.attr("GetThemes", "getThemesAggr", "getThemesAggr", true, true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetThemesAggrRec());
}, true, GetThemesAggrRec)
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
return {
Dropdown1: OS.Model.ValidationWidgetRecord
};
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
return true;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("AgentifaiSimulator.MainFlow.Home.mvc$view", ["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.controller", "CommonPlugin.model", "AgentifaiAssistantPlugin.controller", "react", "OutSystems/ReactView/Main", "AgentifaiSimulator.MainFlow.Home.mvc$model", "AgentifaiSimulator.MainFlow.Home.mvc$controller", "AgentifaiSimulator.clientVariables", "AgentifaiSimulator.Common.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "AgentifaiSimulator.Common.Menu.mvc$view", "AgentifaiSimulator.Common.MenuIcon.mvc$view", "CommonPlugin.model$ErrorRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$CommonPlugin", "AgentifaiAssistantPlugin.controller$Open", "AgentifaiSimulator.referencesHealth$AgentifaiAssistantPlugin", "AgentifaiAssistantPlugin.controller$CheckAgentifaiPlugin", "AgentifaiAssistantPlugin.controller$SetTheme", "AgentifaiAssistantPlugin.controller$RegisterUser", "AgentifaiAssistantPlugin.controller$Initialize", "AgentifaiAssistantPlugin.controller$SetWidgetDimensions", "AgentifaiAssistantPlugin.controller$Show", "AgentifaiAssistantPlugin.controller$UnregisterUser", "AgentifaiAssistantPlugin.controller$Hide", "AgentifaiSimulator.model$ThemesRecordList"], function (OutSystems, AgentifaiSimulatorModel, AgentifaiSimulatorController, CommonPluginModel, AgentifaiAssistantPluginController, React, OSView, AgentifaiSimulator_MainFlow_Home_mvc_model, AgentifaiSimulator_MainFlow_Home_mvc_controller, AgentifaiSimulatorClientVariables, AgentifaiSimulator_Common_Layout_mvc_view, OSWidgets, AgentifaiSimulator_Common_Menu_mvc_view, AgentifaiSimulator_Common_MenuIcon_mvc_view) {
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
        View.displayName = "MainFlow.Home";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/AgentifaiSimulator.AgentifaiSimulator.css", "css/OutSystemsUI.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [AgentifaiSimulator_Common_Layout_mvc_view, AgentifaiSimulator_Common_Menu_mvc_view, AgentifaiSimulator_Common_MenuIcon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return AgentifaiSimulator_MainFlow_Home_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return AgentifaiSimulator_MainFlow_Home_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "Home";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(AgentifaiSimulator_Common_Layout_mvc_view, {
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
navigation: new PlaceholderContent(function () {
return [React.createElement(AgentifaiSimulator_Common_Menu_mvc_view, {
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
headerLeft: new PlaceholderContent(function () {
return [React.createElement(AgentifaiSimulator_Common_MenuIcon_mvc_view, {
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
title: new PlaceholderContent(function () {
return ["Agentifai Simulator"];
}),
headerRight: new PlaceholderContent(function () {
return [$if(model.variables.isAvailableVar, false, this, function () {
return [React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "color: #20ac2b;"
},
icon: "check-circle",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "color: #ac2020;"
},
icon: "times-circle",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})];
}),
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 10px; margin-right: 10px; margin-top: 10px;"
},
gridProperties: {
marginLeft: "10px"
},
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/Home/Button OnClick");
controller.initOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Initialize")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 10px; margin-right: 10px;"
},
gridProperties: {
marginLeft: "10px"
},
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
gridProperties: {
classes: "ThemeGrid_Width6"
},
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/Home/Button OnClick");
controller.registerUserOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Register user"), React.createElement(OSWidgets.Button, {
enabled: true,
gridProperties: {
classes: "ThemeGrid_Width6",
marginLeft: "6px"
},
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/Home/Button OnClick");
controller.unregisterUserOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Unregister user")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 10px; margin-right: 10px;"
},
gridProperties: {
marginLeft: "10px"
},
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "padding: 0px 16px 0px 16px;"
},
gridProperties: {
classes: "ThemeGrid_Width6"
},
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/Home/Button OnClick");
controller.showOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Show"), React.createElement(OSWidgets.Button, {
enabled: true,
gridProperties: {
classes: "ThemeGrid_Width6",
marginLeft: "6px"
},
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/Home/Button OnClick");
controller.hideWidgetOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Hide")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 10px; margin-right: 10px; margin-top: 10px;"
},
gridProperties: {
marginLeft: "10px"
},
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/Home/Button OnClick");
controller.setDimensionsOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Set dimensions")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-right: 10px;"
},
gridProperties: {
marginLeft: "10px"
},
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/Home/Button OnClick");
controller.openOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Open")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-right: 10px; margin-top: 10px;"
},
gridProperties: {
marginLeft: "10px"
},
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Dropdown, {
_validationProps: {
validationService: validationService
},
dropdownMode: /*Text*/ 0,
enabled: true,
labels: function (elem) {
return elem.themesAttr.idAttr;
},
list: model.variables.getThemesAggr.listOut,
mandatory: false,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/Home/Dropdown1 OnChange");
controller.setThemeOnClick$Action(model.variables.themesIdentifierVar, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "dropdown",
values: function (elem) {
return elem.themesAttr.idAttr;
},
variable: model.createVariable(OS.Types.Text, model.variables.themesIdentifierVar, function (value) {
model.variables.themesIdentifierVar = value;
}),
_idProps: {
service: idService,
name: "Dropdown1"
},
_widgetRecordProvider: widgetsRecordProvider,
list_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getThemesAggr.dataFetchStatusAttr),
placeholders: {
content: PlaceholderContent.Empty
},
_dependencies: []
}))];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.getThemesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getThemesAggr.listOut), asPrimitiveValue(model.variables.themesIdentifierVar), asPrimitiveValue(model.variables.isAvailableVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("AgentifaiSimulator.MainFlow.Home.mvc$controller", ["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.controller", "CommonPlugin.model", "AgentifaiAssistantPlugin.controller", "AgentifaiSimulator.languageResources", "AgentifaiSimulator.clientVariables", "AgentifaiSimulator.MainFlow.Home.mvc$debugger", "AgentifaiSimulator.MainFlow.controller", "AgentifaiSimulator.MainFlow.Home.mvc$controller.InitOnClick.SettingsJS", "CommonPlugin.model$ErrorRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$CommonPlugin", "AgentifaiAssistantPlugin.controller$Open", "AgentifaiSimulator.referencesHealth$AgentifaiAssistantPlugin", "AgentifaiAssistantPlugin.controller$CheckAgentifaiPlugin", "AgentifaiAssistantPlugin.controller$SetTheme", "AgentifaiAssistantPlugin.controller$RegisterUser", "AgentifaiAssistantPlugin.controller$Initialize", "AgentifaiAssistantPlugin.controller$SetWidgetDimensions", "AgentifaiAssistantPlugin.controller$Show", "AgentifaiAssistantPlugin.controller$UnregisterUser", "AgentifaiAssistantPlugin.controller$Hide", "AgentifaiSimulator.model$ThemesRecordList"], function (OutSystems, AgentifaiSimulatorModel, AgentifaiSimulatorController, CommonPluginModel, AgentifaiAssistantPluginController, AgentifaiSimulatorLanguageResources, AgentifaiSimulatorClientVariables, AgentifaiSimulator_MainFlow_Home_mvc_Debugger, AgentifaiSimulator_MainFlowController, AgentifaiSimulator_MainFlow_Home_mvc_controller_InitOnClick_SettingsJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getThemes$AggrRefresh: 0
};
this.dataFetchDependentsGraph = {
getThemes$AggrRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getThemes$AggrRefresh = function (maxRecords, startIndex, callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:j50guct_akewk4d4bwtG5A:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.3Hwgi8tCOkGNeZCoVz1iPw/ScreenDataSets.j50guct_akewk4d4bwtG5A:U9YFZKRPo3W8px5Zh8AXFA", "AgentifaiSimulator", "GetThemes", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "MainFlow/Home/GetThemes");
return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetThemes", "screenservices/AgentifaiSimulator/MainFlow/Home/ScreenDataSetGetThemes", "ssLhe+EcdhR72sDn8so5Pg", maxRecords, startIndex, function (b) {
model.variables.getThemesAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getThemesAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getThemesAggr.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false);

}, function () {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:j50guct_akewk4d4bwtG5A", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getThemes$AggrRefresh"];
// Client Actions
Controller.prototype._openOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OpenOnClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:nX2+Gi_BakWbXtXFcg_vIg:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.3Hwgi8tCOkGNeZCoVz1iPw/ClientActions.nX2+Gi_BakWbXtXFcg_vIg:vCcCmU0tPEAkHuHdzWzBNg", "AgentifaiSimulator", "OpenOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:k1HDNODWrkqLGIHAIaSn6A", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:UBmgDWnu_kWMtfmEU5hGgQ", callContext.id);
// Execute Action: Open
AgentifaiAssistantPluginController.default.open$Action(callContext);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:yiEI1RVQlk6n8fSXFIStrQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:nX2+Gi_BakWbXtXFcg_vIg", callContext.id);
}

};
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var checkAgentifaiPluginVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.checkAgentifaiPluginVar = checkAgentifaiPluginVar;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:Ks_0HdQlI0+TwL2peaWn3Q:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.3Hwgi8tCOkGNeZCoVz1iPw/ClientActions.Ks_0HdQlI0+TwL2peaWn3Q:CxoyrDOHYA1ca7hYmo7bTg", "AgentifaiSimulator", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:fHILIjZJO0CayY3+YmXQxQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:6PkC4njywUqFcPAocWoqTQ", callContext.id);
// Execute Action: CheckAgentifaiPlugin
checkAgentifaiPluginVar.value = AgentifaiAssistantPluginController.default.checkAgentifaiPlugin$Action(callContext);

// Set IsAvailable
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:C_wc+cAvZkOKu_FYBfIcgA", callContext.id);
// IsAvailable = CheckAgentifaiPlugin.IsAvailable
model.variables.isAvailableVar = checkAgentifaiPluginVar.value.isAvailableOut;
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:XE5P7+L2gEGZcuiUvo6nOA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:Ks_0HdQlI0+TwL2peaWn3Q", callContext.id);
}

};
Controller.prototype._setThemeOnClick$Action = function (keyIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SetThemeOnClick");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("AgentifaiSimulator.MainFlow.Home.SetThemeOnClick$vars"))());
vars.value.keyInLocal = keyIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:WCgJHh4fd0yAjWU+q9A5gw:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.3Hwgi8tCOkGNeZCoVz1iPw/ClientActions.WCgJHh4fd0yAjWU+q9A5gw:B7XR2Eo0lPbdoMJcWsRMzg", "AgentifaiSimulator", "SetThemeOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:pmrlWP6QIUuP17gqYxHV5w", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:BcE33Izet0iR+Wbj6SWXVw", callContext.id);
// Execute Action: SetTheme
AgentifaiAssistantPluginController.default.setTheme$Action(vars.value.keyInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:PqIlAd7Imk6I46weLqxvtw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:WCgJHh4fd0yAjWU+q9A5gw", callContext.id);
}

};
Controller.registerVariableGroupType("AgentifaiSimulator.MainFlow.Home.SetThemeOnClick$vars", [{
name: "Key",
attrName: "keyInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._registerUserOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RegisterUserOnClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:eVZIKNPJ00G6968FSHdF6w:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.3Hwgi8tCOkGNeZCoVz1iPw/ClientActions.eVZIKNPJ00G6968FSHdF6w:+vq04XiaKyix092V4dQ+Gw", "AgentifaiSimulator", "RegisterUserOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:tblwDZLRWUqSi_lYZtpUGA", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:L5J1tJe0IEKvHQReJkxELw", callContext.id);
// Execute Action: RegisterUser
AgentifaiAssistantPluginController.default.registerUser$Action("123456789", "Agentifai", "", null, callContext);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:0w5Uu0bZDkOfm9TLH0F+FA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:eVZIKNPJ00G6968FSHdF6w", callContext.id);
}

};
Controller.prototype._initOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("InitOnClick");
callContext = controller.callContext(callContext);
var settingsJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.settingsJSResult = settingsJSResult;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:heBCL96ELkihKwmuTHzDTQ:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.3Hwgi8tCOkGNeZCoVz1iPw/ClientActions.heBCL96ELkihKwmuTHzDTQ:YggXYj5r_IafBTzrgIL4Nw", "AgentifaiSimulator", "InitOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:qGFicmGdD0e8GXoLCWMnIg", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:naX6fGcSeUKgJmsh24N_qg", callContext.id);
settingsJSResult.value = controller.safeExecuteJSNode(AgentifaiSimulator_MainFlow_Home_mvc_controller_InitOnClick_SettingsJS, "Settings", "InitOnClick", {
SettingsObject: OS.DataConversion.JSNodeParamConverter.to(null, OS.Types.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("AgentifaiSimulator.MainFlow.Home.InitOnClick$settingsJSResult"))();
jsNodeResult.settingsObjectOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SettingsObject, OS.Types.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:4+xmmcmzs0G3+5syVyjr+A", callContext.id);
// Execute Action: Initialize
AgentifaiAssistantPluginController.default.initialize$Action("https://development.agentifai.com/widget-setup-data", "eyJ0ZW5hbnRJZCI6ICJjZ2QiLCAiY2hhbm5lbElkIjogIkNnZFdpZGdldCJ9", OS.BuiltinFunctions.toObject(settingsJSResult.value.settingsObjectOut), callContext);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:EycbT1ETz0+Vxf+RJrZcNg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:heBCL96ELkihKwmuTHzDTQ", callContext.id);
}

};
Controller.registerVariableGroupType("AgentifaiSimulator.MainFlow.Home.InitOnClick$settingsJSResult", [{
name: "SettingsObject",
attrName: "settingsObjectOut",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._checkPluginOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("CheckPluginOnClick");
callContext = controller.callContext(callContext);
var checkAgentifaiPluginVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.checkAgentifaiPluginVar = checkAgentifaiPluginVar;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:H5F5MllA40yvoCpTVe7kNQ:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.3Hwgi8tCOkGNeZCoVz1iPw/ClientActions.H5F5MllA40yvoCpTVe7kNQ:lQ2v8tTyXa4QPw2d38lnlg", "AgentifaiSimulator", "CheckPluginOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:C6q7wQZXT0GGj8XBSGKZow", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:jsBYKu7waE+JiybufvrTtQ", callContext.id);
// Execute Action: CheckAgentifaiPlugin
checkAgentifaiPluginVar.value = AgentifaiAssistantPluginController.default.checkAgentifaiPlugin$Action(callContext);

OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:DSpNPal0mk6OdEsxYMT1zg", callContext.id);
// pluginError = CheckAgentifaiPlugin.Error
model.variables.pluginErrorVar = checkAgentifaiPluginVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:DSpNPal0mk6OdEsxYMT1zg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsAvailable = CheckAgentifaiPlugin.IsAvailable
model.variables.isAvailableVar = checkAgentifaiPluginVar.value.isAvailableOut;
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:KQwH1eNx6kS5LtgGm8t0wA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:H5F5MllA40yvoCpTVe7kNQ", callContext.id);
}

};
Controller.prototype._setDimensionsOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SetDimensionsOnClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:cFe1alF92kqrl6rCwtjS_Q:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.3Hwgi8tCOkGNeZCoVz1iPw/ClientActions.cFe1alF92kqrl6rCwtjS_Q:e0QiPaCW4PqXcIrKdW6hBg", "AgentifaiSimulator", "SetDimensionsOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:dDhLskc0lEiLzTUgHXDLHw", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:kEs2DRWDtUSztcFxPECAwA", callContext.id);
// Execute Action: SetWidgetDimensions
AgentifaiAssistantPluginController.default.setWidgetDimensions$Action("CENTER", "BOTTOM", OS.BuiltinFunctions.integerToDecimal(0), OS.BuiltinFunctions.integerToDecimal(50), OS.BuiltinFunctions.integerToDecimal(50), callContext);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:sZLYKzYpokeM8oFjIMGoZg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:cFe1alF92kqrl6rCwtjS_Q", callContext.id);
}

};
Controller.prototype._showOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ShowOnClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:zFxDbRJ6ck6EsAmTjLqI4A:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.3Hwgi8tCOkGNeZCoVz1iPw/ClientActions.zFxDbRJ6ck6EsAmTjLqI4A:R92nozObIQFVJbFsUJkLPg", "AgentifaiSimulator", "ShowOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:e2r+EeEG_E+tTVzUAyJm0g", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:R9tdtyzlR0uZvO8nDt5r+g", callContext.id);
// Execute Action: Show
AgentifaiAssistantPluginController.default.show$Action(callContext);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:L0_vLHfN_kO1Q1DkS3HAWA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:zFxDbRJ6ck6EsAmTjLqI4A", callContext.id);
}

};
Controller.prototype._unregisterUserOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("UnregisterUserOnClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:Cee+yH+Kx0Kth5QS25OzdA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.3Hwgi8tCOkGNeZCoVz1iPw/ClientActions.Cee+yH+Kx0Kth5QS25OzdA:xEglQOCAhPkf2n8qB1Gzbg", "AgentifaiSimulator", "UnregisterUserOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:BFDRwWujK061gHxytebmvQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:fOqZ3Xa9gUS5mAiUYsjDfA", callContext.id);
// Execute Action: UnregisterUser
AgentifaiAssistantPluginController.default.unregisterUser$Action(callContext);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:HxOPw3P6aEGcKFvJLgFGAw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:Cee+yH+Kx0Kth5QS25OzdA", callContext.id);
}

};
Controller.prototype._hideWidgetOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("HideWidgetOnClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:NwYp_Q8zEkKOhGLc+WCz3g:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.3Hwgi8tCOkGNeZCoVz1iPw/ClientActions.NwYp_Q8zEkKOhGLc+WCz3g:5Es+BYlGZEzNcdtiQYLEPA", "AgentifaiSimulator", "HideWidgetOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:CX7bvDyVmUmGGg0oe8XymQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:d3F0JY3ZUk2AcRLYwL6PIw", callContext.id);
// Execute Action: Hide
AgentifaiAssistantPluginController.default.hide$Action(callContext);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:_se+MtdWiUGp_vo1NgC6Eg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:NwYp_Q8zEkKOhGLc+WCz3g", callContext.id);
}

};

Controller.prototype.openOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._openOnClick$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.setThemeOnClick$Action = function (keyIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._setThemeOnClick$Action, callContext, keyIn);

};
Controller.prototype.registerUserOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._registerUserOnClick$Action, callContext);

};
Controller.prototype.initOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._initOnClick$Action, callContext);

};
Controller.prototype.checkPluginOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._checkPluginOnClick$Action, callContext);

};
Controller.prototype.setDimensionsOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._setDimensionsOnClick$Action, callContext);

};
Controller.prototype.showOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._showOnClick$Action, callContext);

};
Controller.prototype.unregisterUserOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._unregisterUserOnClick$Action, callContext);

};
Controller.prototype.hideWidgetOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._hideWidgetOnClick$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:fWtJs57lI0qCTlwkcDoxDA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA:dXNgpRIvyrThN2VjZzi_cA", "AgentifaiSimulator", "MainFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:3Hwgi8tCOkGNeZCoVz1iPw:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.3Hwgi8tCOkGNeZCoVz1iPw:Ets2148cNR+9Oz6K4NziRA", "AgentifaiSimulator", "Home", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:3Hwgi8tCOkGNeZCoVz1iPw", callContext.id);
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:fWtJs57lI0qCTlwkcDoxDA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "MainFlow/Home On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return AgentifaiSimulator_MainFlowController.default.handleError(ex, this.callContext());
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
define("AgentifaiSimulator.MainFlow.Home.mvc$controller.InitOnClick.SettingsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var settings = {
    defaultTheme: "light",
        themes: {
            light: "AssistantConfiguration.json",
            dark: "AssistantConfigurationDark.json"
        }
}

$parameters.SettingsObject = settings;
};
});

define("AgentifaiSimulator.MainFlow.Home.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"6PkC4njywUqFcPAocWoqTQ": {
getter: function (varBag, idService) {
return varBag.checkAgentifaiPluginVar.value;
}
},
"OsP12IpSYESSmM1TDGrXtA": {
getter: function (varBag, idService) {
return varBag.vars.value.keyInLocal;
},
dataType: OS.Types.Text
},
"naX6fGcSeUKgJmsh24N_qg": {
getter: function (varBag, idService) {
return varBag.settingsJSResult.value;
}
},
"jsBYKu7waE+JiybufvrTtQ": {
getter: function (varBag, idService) {
return varBag.checkAgentifaiPluginVar.value;
}
},
"GWHN8fnDk02T1q65yMZXag": {
getter: function (varBag, idService) {
return varBag.model.variables.isAvailableVar;
},
dataType: OS.Types.Boolean
},
"o75oN_d57EaANwdhUPvn3w": {
getter: function (varBag, idService) {
return varBag.model.variables.pluginErrorVar;
}
},
"LJVsWeNXakGdHg8VsQPWqw": {
getter: function (varBag, idService) {
return varBag.model.variables.themesIdentifierVar;
},
dataType: OS.Types.Text
},
"j50guct_akewk4d4bwtG5A": {
getter: function (varBag, idService) {
return varBag.model.variables.getThemesAggr;
}
},
"lk2rZEnILEmzF+aaM5ZSOw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Navigation"));
})(varBag.model, idService);
}
},
"mGtlVkl_HU+SOWJmvDm3Vw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"Y30sbg3UjUGK9Qzi3wS4Cg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"MRvlQOg5QUG1w4WAr2zVdQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"HPO4rYarwkKrEPRzDPh7DA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"x2Q+yBjJnECuzLhyI4mKbg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"VRAGUxoVw0y4ELJ049HIoQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Dropdown1"));
})(varBag.model, idService);
}
},
"SplAiPfr_kiVYslleRdcyQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
