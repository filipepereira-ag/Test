﻿define("OutSystemsUI.Utilities.DEPRECATED_ButtonLoading.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsLoading", "isLoadingIn", "IsLoading", true, false, OS.Types.Boolean, function () {
return false;
}, false), 
this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ShowLoadingAndLabel", "showLoadingAndLabelIn", "ShowLoadingAndLabel", true, false, OS.Types.Boolean, function () {
return false;
}, false), 
this.attr("_showLoadingAndLabelInDataFetchStatus", "_showLoadingAndLabelInDataFetchStatus", "_showLoadingAndLabelInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.Types.Text, function () {
return "";
}, false), 
this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
if("IsLoading" in inputs) {
this.variables.isLoadingIn = inputs.IsLoading;
if("_isLoadingInDataFetchStatus" in inputs) {
this.variables._isLoadingInDataFetchStatus = inputs._isLoadingInDataFetchStatus;
}

}

if("ShowLoadingAndLabel" in inputs) {
this.variables.showLoadingAndLabelIn = inputs.ShowLoadingAndLabel;
if("_showLoadingAndLabelInDataFetchStatus" in inputs) {
this.variables._showLoadingAndLabelInDataFetchStatus = inputs._showLoadingAndLabelInDataFetchStatus;
}

}

if("ExtendedClass" in inputs) {
this.variables.extendedClassIn = inputs.ExtendedClass;
if("_extendedClassInDataFetchStatus" in inputs) {
this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("OutSystemsUI.Utilities.DEPRECATED_ButtonLoading.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Utilities.DEPRECATED_ButtonLoading.mvc$model", "OutSystemsUI.Utilities.DEPRECATED_ButtonLoading.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Utilities_DEPRECATED_ButtonLoading_mvc_model, OutSystemsUI_Utilities_DEPRECATED_ButtonLoading_mvc_controller, OSWidgets) {
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
        View.displayName = "Utilities.DEPRECATED_ButtonLoading";
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
                return OutSystemsUI_Utilities_DEPRECATED_ButtonLoading_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_Utilities_DEPRECATED_ButtonLoading_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.button,
extendedProperties: {
"aria-label": model.getCachedValue(idService.getId("Button.aria-label"), function () {
return ((model.variables.isLoadingIn) ? (OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("56KsdoiGHUSxdwyRc1Cq8Q#Value.2001303836.1", "Loading")) : (""));
}, function () {
return model.variables.isLoadingIn;
}),
role: model.getCachedValue(idService.getId("Button.role"), function () {
return ((model.variables.isLoadingIn) ? ("status") : (""));
}, function () {
return model.variables.isLoadingIn;
}),
"aria-live": "polite",
"aria-atomic": "true"
},
gridProperties: {
classes: "OSInline"
},
style: model.getCachedValue(idService.getId("Button.Style"), function () {
return ((("osui-deprecated " + ((model.variables.isLoadingIn) ? (" is--loading") : (""))) + ((model.variables.showLoadingAndLabelIn) ? (" btn-show-label") : (""))) + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn))));
}, function () {
return model.variables.isLoadingIn;
}, function () {
return model.variables.showLoadingAndLabelIn;
}, function () {
return model.variables.extendedClassIn;
}),
_idProps: {
service: idService,
name: "Button"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isLoadingInDataFetchStatus, model.variables._showLoadingAndLabelInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUI.Utilities.DEPRECATED_ButtonLoading.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Utilities.DEPRECATED_ButtonLoading.mvc$translationsResources", "OutSystemsUI.Utilities.DEPRECATED_ButtonLoading.mvc$debugger", "OutSystemsUI.Utilities.DEPRECATED_ButtonLoading.mvc$controller.OnReady.DisableKeypressOnLoadingJS"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Utilities_DEPRECATED_ButtonLoading_mvc_TranslationsResources, OutSystemsUI_Utilities_DEPRECATED_ButtonLoading_mvc_Debugger, OutSystemsUI_Utilities_DEPRECATED_ButtonLoading_mvc_controller_OnReady_DisableKeypressOnLoadingJS) {
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
Controller.prototype.translationResources = OutSystemsUI_Utilities_DEPRECATED_ButtonLoading_mvc_TranslationsResources;
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:DPuMdj7pbU+E3SYJXAmgtg:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.zDhBZ+UuHUy0oroSD1R_2A/ClientActions.DPuMdj7pbU+E3SYJXAmgtg:j_4c4pEICxm550zQH7UeMg", "OutSystemsUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:GhvH4TD_8US5ztH6kMItWA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:G2i9ArYaLUywioYgQ+CgWg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_Utilities_DEPRECATED_ButtonLoading_mvc_controller_OnReady_DisableKeypressOnLoadingJS, "DisableKeypressOnLoading", "OnReady", {
IsLoading: OS.DataConversion.JSNodeParamConverter.to(model.variables.isLoadingIn, OS.Types.Boolean),
WidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Button"), OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:97Lr6Lf8IUqi5GL9tOGZkQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:DPuMdj7pbU+E3SYJXAmgtg", callContext.id);
}

};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:_j+WNB+Er0ymD9g1Fl+Pmw:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw:_sU6Z6zEdfa0yPg51D1SZg", "OutSystemsUI", "Utilities", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:zDhBZ+UuHUy0oroSD1R_2A:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.zDhBZ+UuHUy0oroSD1R_2A:WCrC9NBlFwTu+YioUR7n6w", "OutSystemsUI", "DEPRECATED_ButtonLoading", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:zDhBZ+UuHUy0oroSD1R_2A", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:_j+WNB+Er0ymD9g1Fl+Pmw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/DEPRECATED_ButtonLoading On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/DEPRECATED_ButtonLoading On Parameters Changed");
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
return OutSystemsUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});
define("OutSystemsUI.Utilities.DEPRECATED_ButtonLoading.mvc$controller.OnReady.DisableKeypressOnLoadingJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var buttonWrapper = document.getElementById($parameters.WidgetId);
var button = buttonWrapper.querySelector('button');

var onButtonKeypress = function(e){
    
    if((e.keyCode == "13" || e.keyCode == "32") && $parameters.IsLoading) {
      e.preventDefault();
    } else {
        button.removeEventListener('keydown', onButtonKeypress); 
        return true;
    }

};

button.addEventListener('keydown', onButtonKeypress); 


};
});

define("OutSystemsUI.Utilities.DEPRECATED_ButtonLoading.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"G2i9ArYaLUywioYgQ+CgWg": {
getter: function (varBag, idService) {
return varBag.disableKeypressOnLoadingJSResult.value;
}
},
"lIzDdq2pskG5Pe3pW7MB_g": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadingIn;
},
dataType: OS.Types.Boolean
},
"YWad0sHfs0iQwfAzKe_CAg": {
getter: function (varBag, idService) {
return varBag.model.variables.showLoadingAndLabelIn;
},
dataType: OS.Types.Boolean
},
"JGnBSCYZ0kuGK+Qg0s_XSQ": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.Types.Text
},
"EAoHoP7r2E2AcGnfsBpyKA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Button"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI.Utilities.DEPRECATED_ButtonLoading.mvc$translationsResources", ["exports", "OutSystemsUI.Utilities.DEPRECATED_ButtonLoading.mvc$translationsResources.fr-CA", "OutSystemsUI.Utilities.DEPRECATED_ButtonLoading.mvc$translationsResources.pt"], function (exports, OutSystemsUI_Utilities_DEPRECATED_ButtonLoading_mvc_translationsResources_frCA, OutSystemsUI_Utilities_DEPRECATED_ButtonLoading_mvc_translationsResources_pt) {
return {
"fr-CA": {
"translations": OutSystemsUI_Utilities_DEPRECATED_ButtonLoading_mvc_translationsResources_frCA,
"isRTL": false
},
"pt": {
"translations": OutSystemsUI_Utilities_DEPRECATED_ButtonLoading_mvc_translationsResources_pt,
"isRTL": false
}
};
});
define("OutSystemsUI.Utilities.DEPRECATED_ButtonLoading.mvc$translationsResources.fr-CA", [], function () {
return {
"56KsdoiGHUSxdwyRc1Cq8Q#Value.2001303836.1": "Chargement"
};
});
define("OutSystemsUI.Utilities.DEPRECATED_ButtonLoading.mvc$translationsResources.pt", [], function () {
return {
"56KsdoiGHUSxdwyRc1Cq8Q#Value.2001303836.1": "A carregar"
};
});
