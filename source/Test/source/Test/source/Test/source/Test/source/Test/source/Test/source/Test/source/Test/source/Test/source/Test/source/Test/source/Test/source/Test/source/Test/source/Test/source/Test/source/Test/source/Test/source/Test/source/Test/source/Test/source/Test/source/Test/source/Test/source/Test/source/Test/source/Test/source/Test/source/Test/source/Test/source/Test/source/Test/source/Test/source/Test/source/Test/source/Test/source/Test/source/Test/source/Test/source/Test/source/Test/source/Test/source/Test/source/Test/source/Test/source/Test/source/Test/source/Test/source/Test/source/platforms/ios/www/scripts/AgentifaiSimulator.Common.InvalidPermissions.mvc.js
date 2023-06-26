define("AgentifaiSimulator.Common.InvalidPermissions.mvc$model", ["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.Common.Layout.mvc$model", "AgentifaiSimulator.Common.Menu.mvc$model", "AgentifaiSimulator.Common.MenuIcon.mvc$model", "OutSystemsUI.Content.BlankSlate.mvc$model", "AgentifaiSimulator.Common.BottomBar.mvc$model"], function (OutSystems, AgentifaiSimulatorModel, AgentifaiSimulator_Common_Layout_mvcModel, AgentifaiSimulator_Common_Menu_mvcModel, AgentifaiSimulator_Common_MenuIcon_mvcModel, OutSystemsUI_Content_BlankSlate_mvcModel, AgentifaiSimulator_Common_BottomBar_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [].concat(_super.attributesToDeclare.call(this));
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
Model._hasValidationWidgetsValue = ((((AgentifaiSimulator_Common_Layout_mvcModel.hasValidationWidgets || AgentifaiSimulator_Common_Menu_mvcModel.hasValidationWidgets) || AgentifaiSimulator_Common_MenuIcon_mvcModel.hasValidationWidgets) || OutSystemsUI_Content_BlankSlate_mvcModel.hasValidationWidgets) || AgentifaiSimulator_Common_BottomBar_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.VariablelessViewModel);
return new OS.Model.ModelFactory(Model);
});
define("AgentifaiSimulator.Common.InvalidPermissions.mvc$view", ["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.controller", "react", "OutSystems/ReactView/Main", "AgentifaiSimulator.Common.InvalidPermissions.mvc$model", "AgentifaiSimulator.Common.InvalidPermissions.mvc$controller", "AgentifaiSimulator.clientVariables", "AgentifaiSimulator.Common.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "AgentifaiSimulator.Common.Menu.mvc$view", "AgentifaiSimulator.Common.MenuIcon.mvc$view", "OutSystemsUI.Content.BlankSlate.mvc$view", "AgentifaiSimulator.Common.BottomBar.mvc$view"], function (OutSystems, AgentifaiSimulatorModel, AgentifaiSimulatorController, React, OSView, AgentifaiSimulator_Common_InvalidPermissions_mvc_model, AgentifaiSimulator_Common_InvalidPermissions_mvc_controller, AgentifaiSimulatorClientVariables, AgentifaiSimulator_Common_Layout_mvc_view, OSWidgets, AgentifaiSimulator_Common_Menu_mvc_view, AgentifaiSimulator_Common_MenuIcon_mvc_view, OutSystemsUI_Content_BlankSlate_mvc_view, AgentifaiSimulator_Common_BottomBar_mvc_view) {
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
        View.displayName = "Common.InvalidPermissions";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/AgentifaiSimulator.AgentifaiSimulator.css", "css/OutSystemsUI.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [AgentifaiSimulator_Common_Layout_mvc_view, AgentifaiSimulator_Common_Menu_mvc_view, AgentifaiSimulator_Common_MenuIcon_mvc_view, OutSystemsUI_Content_BlankSlate_mvc_view, AgentifaiSimulator_Common_BottomBar_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return AgentifaiSimulator_Common_InvalidPermissions_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return AgentifaiSimulator_Common_InvalidPermissions_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "InvalidPermissions";
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
return ["Invalid Permissions"];
}),
headerRight: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_Content_BlankSlate_mvc_view, {
inputs: {
FullHeight: true
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
uuid: "3",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "warning",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
name: "Icon1"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
content: new PlaceholderContent(function () {
return ["You don\'t have permissions to view the required screen."];
}),
actions: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
gridProperties: {
classes: "ThemeGrid_Width6"
},
isDefault: false,
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/AgentifaiSimulator/Login", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Login")];
})
},
_dependencies: []
})];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(AgentifaiSimulator_Common_BottomBar_mvc_view, {
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
uuid: "6",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("AgentifaiSimulator.Common.InvalidPermissions.mvc$controller", ["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.controller", "AgentifaiSimulator.languageResources", "AgentifaiSimulator.clientVariables", "AgentifaiSimulator.Common.InvalidPermissions.mvc$debugger", "AgentifaiSimulator.Common.controller"], function (OutSystems, AgentifaiSimulatorModel, AgentifaiSimulatorController, AgentifaiSimulatorLanguageResources, AgentifaiSimulatorClientVariables, AgentifaiSimulator_Common_InvalidPermissions_mvc_Debugger, AgentifaiSimulator_CommonController) {
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


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:v2PEyf62LHVkKM1ctja0Kg", "AgentifaiSimulator", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:8wvpqVs6lUyB01hSTI+W2A:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.8wvpqVs6lUyB01hSTI+W2A:i4PzaenQb6+SgCLa0aJ8nQ", "AgentifaiSimulator", "InvalidPermissions", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:8wvpqVs6lUyB01hSTI+W2A", callContext.id);
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:0eZ+W3SSVk+CJcw1X48PQA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return AgentifaiSimulator_CommonController.default.handleError(ex, this.callContext());
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

define("AgentifaiSimulator.Common.InvalidPermissions.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"fTFwwlVeG0isw7oPyjhnEA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Navigation"));
})(varBag.model, idService);
}
},
"G6lRFPS0LU+vbPIH2bPB0A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"Ii3QQX8b2E2FIxMEJuOxxA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"9_UveeekP0SEFAPgBoNYew": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"u5PQrQfaB0W+TTd7dOxAhQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"mH919u5pzUmHQLXJMHYutw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"78yioZ9q+EWlzj9tGMC7ZA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"H9y7XKtzfU+SB6u2ktbw2Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon1"));
})(varBag.model, idService);
}
},
"FN258jrqp06wNGRh8plyqw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"xb4I1OCxa0SBc1LAvsaSJw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Actions"));
})(varBag.model, idService);
}
},
"hLcc6O_ES062+y8sDwdvZQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
