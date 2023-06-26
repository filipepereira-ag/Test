define("OutSystemsUI.Adaptive.Columns2.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("GutterSize", "gutterSizeIn", "GutterSize", true, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.gutterSize.base;
}, false), 
this.attr("_gutterSizeInDataFetchStatus", "_gutterSizeInDataFetchStatus", "_gutterSizeInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("TabletBehavior", "tabletBehaviorIn", "TabletBehavior", true, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.breakColumns.none;
}, false), 
this.attr("_tabletBehaviorInDataFetchStatus", "_tabletBehaviorInDataFetchStatus", "_tabletBehaviorInDataFetchStatus", true, false, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("PhoneBehavior", "phoneBehaviorIn", "PhoneBehavior", true, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.breakColumns.none;
}, false), 
this.attr("_phoneBehaviorInDataFetchStatus", "_phoneBehaviorInDataFetchStatus", "_phoneBehaviorInDataFetchStatus", true, false, OS.Types.Integer, function () {
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
if("GutterSize" in inputs) {
this.variables.gutterSizeIn = inputs.GutterSize;
if("_gutterSizeInDataFetchStatus" in inputs) {
this.variables._gutterSizeInDataFetchStatus = inputs._gutterSizeInDataFetchStatus;
}

}

if("TabletBehavior" in inputs) {
this.variables.tabletBehaviorIn = inputs.TabletBehavior;
if("_tabletBehaviorInDataFetchStatus" in inputs) {
this.variables._tabletBehaviorInDataFetchStatus = inputs._tabletBehaviorInDataFetchStatus;
}

}

if("PhoneBehavior" in inputs) {
this.variables.phoneBehaviorIn = inputs.PhoneBehavior;
if("_phoneBehaviorInDataFetchStatus" in inputs) {
this.variables._phoneBehaviorInDataFetchStatus = inputs._phoneBehaviorInDataFetchStatus;
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
define("OutSystemsUI.Adaptive.Columns2.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Adaptive.Columns2.mvc$model", "OutSystemsUI.Adaptive.Columns2.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Adaptive_Columns2_mvc_model, OutSystemsUI_Adaptive_Columns2_mvc_controller, OSWidgets) {
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
        View.displayName = "Adaptive.Columns2";
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
                return OutSystemsUI_Adaptive_Columns2_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_Adaptive_Columns2_mvc_controller;
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
style: ((((((("columns columns2 " + model.variables.gutterSizeIn) + " tablet-") + model.variables.tabletBehaviorIn) + " phone-") + model.variables.phoneBehaviorIn) + " ") + model.variables.extendedClassIn),
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._gutterSizeInDataFetchStatus, model.variables._tabletBehaviorInDataFetchStatus, model.variables._phoneBehaviorInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.column1,
style: "columns-item",
_idProps: {
service: idService,
name: "Column1"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.column2,
style: "columns-item",
_idProps: {
service: idService,
name: "Column2"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUI.Adaptive.Columns2.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Adaptive.Columns2.mvc$translationsResources", "OutSystemsUI.Adaptive.Columns2.mvc$debugger"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Adaptive_Columns2_mvc_TranslationsResources, OutSystemsUI_Adaptive_Columns2_mvc_Debugger) {
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
Controller.prototype.translationResources = OutSystemsUI_Adaptive_Columns2_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:9GgB6wiQjkOC68Dd0FW6zQ:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ:c+cE6xHUcAGaZjT3hFmIag", "OutSystemsUI", "Adaptive", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:3p8jhCBcuUGzL7zJxz6F+Q:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ/NodesShownInESpaceTree.3p8jhCBcuUGzL7zJxz6F+Q:uqiyWE5hrm28+3QSqCLdPg", "OutSystemsUI", "Columns2", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:3p8jhCBcuUGzL7zJxz6F+Q", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:9GgB6wiQjkOC68Dd0FW6zQ", callContext.id);
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

define("OutSystemsUI.Adaptive.Columns2.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"LTvIF6JKXka02_URVtnjcA": {
getter: function (varBag, idService) {
return varBag.model.variables.gutterSizeIn;
},
dataType: OS.Types.Text
},
"WoraJMBhWUGModG2VpteHw": {
getter: function (varBag, idService) {
return varBag.model.variables.tabletBehaviorIn;
},
dataType: OS.Types.Text
},
"ZAF3i+Rj+UKeuHVnlAaBtA": {
getter: function (varBag, idService) {
return varBag.model.variables.phoneBehaviorIn;
},
dataType: OS.Types.Text
},
"XlmfnBXSTkemoMuxhJBoOA": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.Types.Text
},
"lgl9I+qz3EiOpxciLaTi4g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Column1"));
})(varBag.model, idService);
}
},
"A2uW8UFFwUaf4fZztibdnQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Column2"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI.Adaptive.Columns2.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
