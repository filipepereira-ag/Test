define("AgentifaiSimulator.Common.Login.mvc$model", ["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.controller", "AgentifaiSimulator.controller$OfflineDataSyncConfiguration", "AgentifaiSimulator.controller$OfflineDataSync"], function (OutSystems, AgentifaiSimulatorModel, AgentifaiSimulatorController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("UsernameVal", "usernameValVar", "UsernameVal", true, false, OS.Types.Text, function () {
return "";
}, false), 
this.attr("PasswordVal", "passwordValVar", "PasswordVal", true, false, OS.Types.Text, function () {
return "";
}, false), 
this.attr("IsExecuting", "isExecutingVar", "IsExecuting", true, false, OS.Types.Boolean, function () {
return false;
}, false), 
this.attr("Remember", "rememberVar", "Remember", true, false, OS.Types.Boolean, function () {
return false;
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
return {
LoginForm: OS.Model.ValidationWidgetRecord,
Input_UsernameVal: OS.Model.ValidationWidgetRecord,
Input_PasswordVal: OS.Model.ValidationWidgetRecord,
Checkbox1: OS.Model.ValidationWidgetRecord
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
define("AgentifaiSimulator.Common.Login.mvc$view", ["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.controller", "react", "OutSystems/ReactView/Main", "AgentifaiSimulator.Common.Login.mvc$model", "AgentifaiSimulator.Common.Login.mvc$controller", "AgentifaiSimulator.clientVariables", "AgentifaiSimulator.Common.LayoutBlank.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUI.Interaction.AnimatedLabel.mvc$view", "OutSystemsUI.Adaptive.Columns2.mvc$view", "OutSystemsUI.Utilities.AlignCenter.mvc$view", "OutSystemsUI.Utilities.DEPRECATED_ButtonLoading.mvc$view", "AgentifaiSimulator.controller$OfflineDataSyncConfiguration", "AgentifaiSimulator.controller$OfflineDataSync"], function (OutSystems, AgentifaiSimulatorModel, AgentifaiSimulatorController, React, OSView, AgentifaiSimulator_Common_Login_mvc_model, AgentifaiSimulator_Common_Login_mvc_controller, AgentifaiSimulatorClientVariables, AgentifaiSimulator_Common_LayoutBlank_mvc_view, OSWidgets, OutSystemsUI_Interaction_AnimatedLabel_mvc_view, OutSystemsUI_Adaptive_Columns2_mvc_view, OutSystemsUI_Utilities_AlignCenter_mvc_view, OutSystemsUI_Utilities_DEPRECATED_ButtonLoading_mvc_view) {
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
        View.displayName = "Common.Login";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/AgentifaiSimulator.AgentifaiSimulator.css", "css/OutSystemsUI.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [AgentifaiSimulator_Common_LayoutBlank_mvc_view, OutSystemsUI_Interaction_AnimatedLabel_mvc_view, OutSystemsUI_Adaptive_Columns2_mvc_view, OutSystemsUI_Utilities_AlignCenter_mvc_view, OutSystemsUI_Utilities_DEPRECATED_ButtonLoading_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return AgentifaiSimulator_Common_Login_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return AgentifaiSimulator_Common_Login_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "Login";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(AgentifaiSimulator_Common_LayoutBlank_mvc_view, {
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
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "login-screen",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Form, {
_validationProps: {
validationService: validationService
},
style: "login-form",
_idProps: {
service: idService,
name: "LoginForm"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
style: "login-logo",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
alt: "",
style: "height: 100px;"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/AgentifaiSimulator.Logo.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "margin-top-base"
},
tag: "h1",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "heading5 text-neutral-8",
value: model.getCachedValue(idService.getId("gmkrkWorSkudZwfcwnO0Yw.Value"), function () {
return OS.BuiltinFunctions.getEntryEspaceName();
}),
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "login-inputs margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Interaction_AnimatedLabel_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("LoginForm")
},
_idProps: {
service: idService,
uuid: "10",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Input_UsernameVal",
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Username")];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("LoginForm")
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: true,
maxLength: 250,
style: "form-control",
variable: model.createVariable(OS.Types.Text, model.variables.usernameValVar, function (value) {
model.variables.usernameValVar = value;
}),
_idProps: {
service: idService,
name: "Input_UsernameVal"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.usernameValVar)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-base",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Interaction_AnimatedLabel_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("LoginForm")
},
_idProps: {
service: idService,
uuid: "14",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Input_PasswordVal",
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Password")];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("LoginForm")
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Password*/ 1,
mandatory: true,
maxLength: 0,
style: "form-control login-password",
variable: model.createVariable(OS.Types.Text, model.variables.passwordValVar, function (value) {
model.variables.passwordValVar = value;
}),
_idProps: {
service: idService,
name: "Input_PasswordVal"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.passwordValVar)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-l",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Adaptive_Columns2_mvc_view, {
inputs: {
ExtendedClass: "align-items-center"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("LoginForm")
},
_idProps: {
service: idService,
uuid: "18",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
column1: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_Utilities_AlignCenter_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("LoginForm")
},
_idProps: {
service: idService,
uuid: "19",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Checkbox, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("LoginForm")
},
enabled: true,
extendedProperties: {
"aria-label": "Remember me the password"
},
style: "checkbox",
variable: model.createVariable(OS.Types.Boolean, model.variables.rememberVar, function (value) {
model.variables.rememberVar = value;
}),
_idProps: {
service: idService,
name: "Checkbox1"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
style: "font-size-s margin-left-s",
targetWidget: "Checkbox1",
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Remember me")];
})
},
_dependencies: [asPrimitiveValue(model.variables.rememberVar)]
})];
}),
column2: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
"aria-label": "Forgot password? Click here to recover it"
},
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Login/Link OnClick");
controller.forgotPassword$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Forgot password?"))];
})
},
_dependencies: [asPrimitiveValue(model.variables.rememberVar)]
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "login-button margin-top-l",
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Utilities_DEPRECATED_ButtonLoading_mvc_view, {
inputs: {
IsLoading: model.variables.isExecutingVar,
ExtendedClass: "full-width"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("LoginForm")
},
_idProps: {
service: idService,
uuid: "25",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
isDefault: true,
onClick: function () {
_this.validateWidget(idService.getId("LoginForm"));
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Login/Button OnClick");
return controller.login$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});

;
},
style: "btn btn-primary btn-large",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "btn-loading margin-right-s",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"aria-hidden": "true"
},
style: "loading-spinner",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "btn-label",
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Login"))];
})
},
_dependencies: []
}))))];
})
},
_dependencies: [asPrimitiveValue(model.variables.isExecutingVar), asPrimitiveValue(model.variables.rememberVar), asPrimitiveValue(model.variables.passwordValVar), asPrimitiveValue(model.variables.usernameValVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("AgentifaiSimulator.Common.Login.mvc$controller", ["OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.controller", "AgentifaiSimulator.languageResources", "AgentifaiSimulator.clientVariables", "AgentifaiSimulator.Common.Login.mvc$debugger", "AgentifaiSimulator.Common.controller", "AgentifaiSimulator.Common.Login.mvc$controller.Login.RemoveFeedbackMessageJS", "AgentifaiSimulator.controller$OfflineDataSyncConfiguration", "AgentifaiSimulator.controller$OfflineDataSync"], function (OutSystems, AgentifaiSimulatorModel, AgentifaiSimulatorController, AgentifaiSimulatorLanguageResources, AgentifaiSimulatorClientVariables, AgentifaiSimulator_Common_Login_mvc_Debugger, AgentifaiSimulator_CommonController, AgentifaiSimulator_Common_Login_mvc_controller_Login_RemoveFeedbackMessageJS) {
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
Controller.prototype.doLogin$ServerAction = function (usernameIn, passwordIn, callContext) {
var controller = this.controller;
var inputs = {
Username: OS.DataConversion.ServerDataConverter.to(usernameIn, OS.Types.Text),
Password: OS.DataConversion.ServerDataConverter.to(passwordIn, OS.Types.Text)
};
return controller.callServerAction("DoLogin", "screenservices/AgentifaiSimulator/Common/Login/ActionDoLogin", "OW6SzyxPDcdFr8DWQcIgNA", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
};
Controller.prototype.doLogout$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("DoLogout", "screenservices/AgentifaiSimulator/Common/Login/ActionDoLogout", "2ZoR_fSc0ebl1Q+9myuSrg", {}, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
};

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._login$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Login");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var offlineDataSyncConfigurationVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.offlineDataSyncConfigurationVar = offlineDataSyncConfigurationVar;
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:jVPyCcqNMEeGhR3vhKwCjw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.8KRsWc3h_kCFDh+BMVsR_Q/ClientActions.jVPyCcqNMEeGhR3vhKwCjw:Bp7+E0gobWhMEGupGvgkTw", "AgentifaiSimulator", "Login", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:o4sQ4qRZzkWCooSe3E+SzQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:WW0DVyBoSEWVVmbC+uRIXQ", callContext.id);
// IsExecuting = True
model.variables.isExecutingVar = true;
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:h7wBVmY2_EyEsqRYXzn2vg", callContext.id);
// Execute Action: DoLogin
model.flush();
return controller.doLogin$ServerAction(model.variables.usernameValVar, model.variables.passwordValVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:hntM9ysm0UacSCIZZQlEcA", callContext.id);
controller.safeExecuteJSNode(AgentifaiSimulator_Common_Login_mvc_controller_Login_RemoveFeedbackMessageJS, "RemoveFeedbackMessage", "Login", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:EAHb7JC_w0+7pJmLL4leJg", callContext.id);
// Execute Action: OfflineDataSyncConfiguration
offlineDataSyncConfigurationVar.value = AgentifaiSimulatorController.default.offlineDataSyncConfiguration$Action(callContext);

}).then(function () {
// Configuration.SyncOnLogin?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:OlMnkZ+MqUWnaNoleAMF0g", callContext.id) && offlineDataSyncConfigurationVar.value.syncOnLoginOut)) {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:7KXuybGX_0OUQO9j6wuoew", callContext.id);
// Execute Action: SyncOnLogin
return controller._syncOnLogin$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:q3xvJjfiwE2R0jAA6apBTQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:E5AGLI6LWkKcYrsALZpSbg", callContext.id);
// Destination: /AgentifaiSimulator/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL((("/" + OS.BuiltinFunctions.getEntryEspaceName()) + "/"), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), callContext, true));
}

});
});
}).catch(function (ex) {
OS.Logger.trace("Login.Login", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:RQ962UucpU2oxPokC_qC2g", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:EBRdRrOAEEqjHk0bSI8uCg", callContext.id);
// IsExecuting = False
model.variables.isExecutingVar = false;
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:TGpPgJE4+E6NoYvTqzJBQw", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(allExceptionsVar.value.exceptionMessageAttr, /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:t_UQ+MhdQ0WmACDr_wxOMw", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:jVPyCcqNMEeGhR3vhKwCjw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:jVPyCcqNMEeGhR3vhKwCjw", callContext.id);
throw ex;

});
};
Controller.prototype._forgotPassword$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ForgotPassword");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:i8BuPu57oEiWpyDSYuMlwA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.8KRsWc3h_kCFDh+BMVsR_Q/ClientActions.i8BuPu57oEiWpyDSYuMlwA:aSFX+rs4AmEeGAxyWesMyQ", "AgentifaiSimulator", "ForgotPassword", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:DAEq_IjgGkiDZPPX14o7pQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:9qgPDRtAwke6fuI2jErmlg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:i8BuPu57oEiWpyDSYuMlwA", callContext.id);
}

};
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
try {OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:0UEvuUiJvkGXbIIRuM6VPA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.8KRsWc3h_kCFDh+BMVsR_Q/ClientActions.0UEvuUiJvkGXbIIRuM6VPA:SNavC4riymWaq6LgMUvXdQ", "AgentifaiSimulator", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:0H6f9wwUVUei19bUgRL5GA", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:1VjxrKegHU6wW7hh90b4LA", callContext.id);
// IsExecuting = False
model.variables.isExecutingVar = false;
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:8GPT2NX6GkaeTvYeLac+AQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:0UEvuUiJvkGXbIIRuM6VPA", callContext.id);
}

};
Controller.prototype._syncOnLogin$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SyncOnLogin");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:PvQ++3SKkk6vAxp2a9yE5A:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.8KRsWc3h_kCFDh+BMVsR_Q/ClientActions.PvQ++3SKkk6vAxp2a9yE5A:e+iAq3pqKAtGLPNDOj5+Nw", "AgentifaiSimulator", "SyncOnLogin", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:JA6RrPgS40iwG7ekmYHOwA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:TNNr6Duh20OH5iucIm9htA", callContext.id);
// Execute Action: OfflineDataSync
model.flush();
return AgentifaiSimulatorController.default.offlineDataSync$Action("", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:+1SPngdrXkGNnR4vz3aWbg", callContext.id);
// Destination: /AgentifaiSimulator/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL((("/" + OS.BuiltinFunctions.getEntryEspaceName()) + "/"), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("Login.SyncOnLogin", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:Uyymi5F7lEGmxjqgjrwSmA", callContext.id);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:wSR8YgFEOEuo5iS8JBIyxw", callContext.id);
// Execute Action: DoLogout
model.flush();
return controller.doLogout$ServerAction(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:ayDb4fpg3k6AMICQLlhUdA", callContext.id);
// IsExecuting = False
model.variables.isExecutingVar = false;
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:_dQEz30OxUSpXaruVG4tdw", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(allExceptionsVar.value.exceptionMessageAttr, /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("OMivivUb40uhXdy2a9HVYw:uf1YIwSDwk2dn1y5OEIYRQ", callContext.id);
return OS.Flow.returnAsync();

});
});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:PvQ++3SKkk6vAxp2a9yE5A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:PvQ++3SKkk6vAxp2a9yE5A", callContext.id);
throw ex;

});
};

Controller.prototype.login$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._login$Action, callContext);

};
Controller.prototype.forgotPassword$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._forgotPassword$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.syncOnLogin$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._syncOnLogin$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:v2PEyf62LHVkKM1ctja0Kg", "AgentifaiSimulator", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("OMivivUb40uhXdy2a9HVYw:8KRsWc3h_kCFDh+BMVsR_Q:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.8KRsWc3h_kCFDh+BMVsR_Q:XnFyUFA_64_8DkUBy+TnwA", "AgentifaiSimulator", "Login", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:8KRsWc3h_kCFDh+BMVsR_Q", callContext.id);
OutSystemsDebugger.pop("OMivivUb40uhXdy2a9HVYw:0eZ+W3SSVk+CJcw1X48PQA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Login On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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
define("AgentifaiSimulator.Common.Login.mvc$controller.Login.RemoveFeedbackMessageJS", [], function () {
return function ($actions, $roles, $public) {
// Removes any existing Feedback Messages from previous failed login attempts

$public.FeedbackMessage.closeFeedbackMessage();
};
});

define("AgentifaiSimulator.Common.Login.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"RQ962UucpU2oxPokC_qC2g": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"EAHb7JC_w0+7pJmLL4leJg": {
getter: function (varBag, idService) {
return varBag.offlineDataSyncConfigurationVar.value;
}
},
"hntM9ysm0UacSCIZZQlEcA": {
getter: function (varBag, idService) {
return varBag.removeFeedbackMessageJSResult.value;
}
},
"Uyymi5F7lEGmxjqgjrwSmA": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"JXY9+Lm84EO6drPBDV92sQ": {
getter: function (varBag, idService) {
return varBag.model.variables.usernameValVar;
},
dataType: OS.Types.Text
},
"ClYzPrD9uU223mU5xMhMXQ": {
getter: function (varBag, idService) {
return varBag.model.variables.passwordValVar;
},
dataType: OS.Types.Text
},
"6Vtt+VckVEOBjyURb3NYFg": {
getter: function (varBag, idService) {
return varBag.model.variables.isExecutingVar;
},
dataType: OS.Types.Boolean
},
"pmaox4phYE6FL7m2e_w0tw": {
getter: function (varBag, idService) {
return varBag.model.variables.rememberVar;
},
dataType: OS.Types.Boolean
},
"5BlTY4p4qkWpxwslgPgMhg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"nOz9mzBx0U6HkCVIZSq2AA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LoginForm"));
})(varBag.model, idService);
}
},
"SsVKU6l60kqjGabyHM4xrg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"4lRR07qXLU2AT62BNGqvOw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"H0aYPMsQ00uyUj4Hiw4E0A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_UsernameVal"));
})(varBag.model, idService);
}
},
"x9UqtNqvH0Wl8sdgfkpMeA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"TyI_qOWFpEWYF12qtPDXkQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"9muNra0U4UyZcMLzflM1IA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_PasswordVal"));
})(varBag.model, idService);
}
},
"gGZZ3D3v+EWSQy63afgNIg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Column1"));
})(varBag.model, idService);
}
},
"VYniISBMD0CKwkAJrTtaGw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"zkImm_hCjk6YvcZDioLfAg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Checkbox1"));
})(varBag.model, idService);
}
},
"LmPuF4m95kyMyr_Q27_thA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Column2"));
})(varBag.model, idService);
}
},
"lfCey1s2TEC+m7ZKVOQZ1g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Button"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
