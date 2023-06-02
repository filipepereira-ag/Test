define("AgentifaiAssistantPlugin.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "AgentifaiAssistantPlugin.model", "CommonPlugin.model$ErrorRec", "AgentifaiAssistantPlugin.referencesHealth", "AgentifaiAssistantPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, AgentifaiAssistantPluginModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
AgentifaiAssistantPluginModel.ErrorList = ErrorList;

});
define("AgentifaiAssistantPlugin.model$PluginLicenseRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "AgentifaiAssistantPlugin.model", "CommonPlugin.model$PluginLicenseRec", "AgentifaiAssistantPlugin.referencesHealth", "AgentifaiAssistantPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, AgentifaiAssistantPluginModel) {
var OS = OutSystems.Internal;
var PluginLicenseRecord = (function (_super) {
__extends(PluginLicenseRecord, _super);
function PluginLicenseRecord(defaults) {
_super.apply(this, arguments);
}
PluginLicenseRecord.attributesToDeclare = function () {
return [
this.attr("PluginLicense", "pluginLicenseAttr", "PluginLicense", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.PluginLicenseRec());
}, true, CommonPluginModel.PluginLicenseRec)
].concat(_super.attributesToDeclare.call(this));
};
PluginLicenseRecord.fromStructure = function (str) {
return new PluginLicenseRecord(new PluginLicenseRecord.RecordClass({
pluginLicenseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PluginLicenseRecord._isAnonymousRecord = true;
PluginLicenseRecord.UniqueId = "4f3ba093-4c73-508e-cfa6-9aca510d9587";
PluginLicenseRecord.init();
return PluginLicenseRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiAssistantPluginModel.PluginLicenseRecord = PluginLicenseRecord;

});
define("AgentifaiAssistantPlugin.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "AgentifaiAssistantPlugin.model", "CommonPlugin.model$ErrorRec", "AgentifaiAssistantPlugin.referencesHealth", "AgentifaiAssistantPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, AgentifaiAssistantPluginModel) {
var OS = OutSystems.Internal;
var ErrorRecord = (function (_super) {
__extends(ErrorRecord, _super);
function ErrorRecord(defaults) {
_super.apply(this, arguments);
}
ErrorRecord.attributesToDeclare = function () {
return [
this.attr("Error", "errorAttr", "Error", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.ErrorRec());
}, true, CommonPluginModel.ErrorRec)
].concat(_super.attributesToDeclare.call(this));
};
ErrorRecord.fromStructure = function (str) {
return new ErrorRecord(new ErrorRecord.RecordClass({
errorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ErrorRecord._isAnonymousRecord = true;
ErrorRecord.UniqueId = "cbbd7d57-66e1-86ff-28ab-3b75adf75b93";
ErrorRecord.init();
return ErrorRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiAssistantPluginModel.ErrorRecord = ErrorRecord;

});
define("AgentifaiAssistantPlugin.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiAssistantPlugin.model", "AgentifaiAssistantPlugin.model$ErrorRecord"], function (exports, OutSystems, AgentifaiAssistantPluginModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = AgentifaiAssistantPluginModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiAssistantPluginModel.ErrorRecordList = ErrorRecordList;

});
define("AgentifaiAssistantPlugin.model$PluginLicenseList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "AgentifaiAssistantPlugin.model", "CommonPlugin.model$PluginLicenseRec", "AgentifaiAssistantPlugin.referencesHealth", "AgentifaiAssistantPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, AgentifaiAssistantPluginModel) {
var OS = OutSystems.Internal;
var PluginLicenseList = (function (_super) {
__extends(PluginLicenseList, _super);
function PluginLicenseList(defaults) {
_super.apply(this, arguments);
}
PluginLicenseList.itemType = CommonPluginModel.PluginLicenseRec;
return PluginLicenseList;
})(OS.DataTypes.GenericRecordList);
AgentifaiAssistantPluginModel.PluginLicenseList = PluginLicenseList;

});
define("AgentifaiAssistantPlugin.model$PluginLicenseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiAssistantPlugin.model", "AgentifaiAssistantPlugin.model$PluginLicenseRecord"], function (exports, OutSystems, AgentifaiAssistantPluginModel) {
var OS = OutSystems.Internal;
var PluginLicenseRecordList = (function (_super) {
__extends(PluginLicenseRecordList, _super);
function PluginLicenseRecordList(defaults) {
_super.apply(this, arguments);
}
PluginLicenseRecordList.itemType = AgentifaiAssistantPluginModel.PluginLicenseRecord;
return PluginLicenseRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiAssistantPluginModel.PluginLicenseRecordList = PluginLicenseRecordList;

});
define("AgentifaiAssistantPlugin.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var AgentifaiAssistantPluginModel = exports;
Object.defineProperty(AgentifaiAssistantPluginModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["735e1c77-1f9e-41bc-baf4-d293324d3846"];
}
});

AgentifaiAssistantPluginModel.staticEntities = {};
});
