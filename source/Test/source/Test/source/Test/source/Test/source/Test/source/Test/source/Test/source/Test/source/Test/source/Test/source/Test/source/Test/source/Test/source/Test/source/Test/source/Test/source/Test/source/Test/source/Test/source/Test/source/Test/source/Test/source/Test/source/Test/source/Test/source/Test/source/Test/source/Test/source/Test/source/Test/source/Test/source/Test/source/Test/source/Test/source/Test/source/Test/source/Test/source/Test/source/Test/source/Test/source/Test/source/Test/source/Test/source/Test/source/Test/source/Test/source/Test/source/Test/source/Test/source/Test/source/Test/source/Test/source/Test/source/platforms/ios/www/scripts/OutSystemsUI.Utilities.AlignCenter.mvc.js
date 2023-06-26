﻿define("OutSystemsUI.Utilities.AlignCenter.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsHorizontal", "isHorizontalIn", "IsHorizontal", true, false, OS.Types.Boolean, function () {
return true;
}, false), 
this.attr("_isHorizontalInDataFetchStatus", "_isHorizontalInDataFetchStatus", "_isHorizontalInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
if("IsHorizontal" in inputs) {
this.variables.isHorizontalIn = inputs.IsHorizontal;
if("_isHorizontalInDataFetchStatus" in inputs) {
this.variables._isHorizontalInDataFetchStatus = inputs._isHorizontalInDataFetchStatus;
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
define("OutSystemsUI.Utilities.AlignCenter.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Utilities.AlignCenter.mvc$model", "OutSystemsUI.Utilities.AlignCenter.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Utilities_AlignCenter_mvc_model, OutSystemsUI_Utilities_AlignCenter_mvc_controller, OSWidgets) {
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
        View.displayName = "Utilities.AlignCenter";
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
                return OutSystemsUI_Utilities_AlignCenter_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_Utilities_AlignCenter_mvc_controller;
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
content: _this.props.placeholders.content,
style: model.getCachedValue(idService.getId("Content.Style"), function () {
return ((("vertical-align" + " ") + ((model.variables.isHorizontalIn) ? ("flex-direction-row") : ("flex-direction-column"))) + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn))));
}, function () {
return model.variables.isHorizontalIn;
}, function () {
return model.variables.extendedClassIn;
}),
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isHorizontalInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUI.Utilities.AlignCenter.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Utilities.AlignCenter.mvc$translationsResources", "OutSystemsUI.Utilities.AlignCenter.mvc$debugger"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Utilities_AlignCenter_mvc_TranslationsResources, OutSystemsUI_Utilities_AlignCenter_mvc_Debugger) {
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
Controller.prototype.translationResources = OutSystemsUI_Utilities_AlignCenter_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:_j+WNB+Er0ymD9g1Fl+Pmw:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw:_sU6Z6zEdfa0yPg51D1SZg", "OutSystemsUI", "Utilities", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:d0JLQ_3dcE6gXGmirWk1Ag:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.d0JLQ_3dcE6gXGmirWk1Ag:cYl_8qyh6jNktf9C2V+0yg", "OutSystemsUI", "AlignCenter", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:d0JLQ_3dcE6gXGmirWk1Ag", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:_j+WNB+Er0ymD9g1Fl+Pmw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
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

define("OutSystemsUI.Utilities.AlignCenter.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"LXovv1yGL0GswmWpLiBJXQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isHorizontalIn;
},
dataType: OS.Types.Boolean
},
"1L2UvVC940mIAkLos25D_g": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.Types.Text
},
"+aYVapg6OEKa7DH6fO8UEg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI.Utilities.AlignCenter.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
