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
define("AgentifaiAssistantPlugin.model$Mobile_OperatingSystemRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "AgentifaiAssistantPlugin.model", "CommonPlugin.model$Mobile_OperatingSystemRec", "AgentifaiAssistantPlugin.referencesHealth", "AgentifaiAssistantPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, AgentifaiAssistantPluginModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemRecord = (function (_super) {
__extends(Mobile_OperatingSystemRecord, _super);
function Mobile_OperatingSystemRecord(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemRecord.attributesToDeclare = function () {
return [
this.attr("Mobile_OperatingSystem", "mobile_OperatingSystemAttr", "Mobile_OperatingSystem", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.Mobile_OperatingSystemRec());
}, true, CommonPluginModel.Mobile_OperatingSystemRec)
].concat(_super.attributesToDeclare.call(this));
};
Mobile_OperatingSystemRecord.fromStructure = function (str) {
return new Mobile_OperatingSystemRecord(new Mobile_OperatingSystemRecord.RecordClass({
mobile_OperatingSystemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Mobile_OperatingSystemRecord._isAnonymousRecord = true;
Mobile_OperatingSystemRecord.UniqueId = "f56bdc75-0614-38d3-e901-3cdbe4073c38";
Mobile_OperatingSystemRecord.init();
return Mobile_OperatingSystemRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiAssistantPluginModel.Mobile_OperatingSystemRecord = Mobile_OperatingSystemRecord;

});
define("AgentifaiAssistantPlugin.model$Mobile_OperatingSystemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiAssistantPlugin.model", "AgentifaiAssistantPlugin.model$Mobile_OperatingSystemRecord"], function (exports, OutSystems, AgentifaiAssistantPluginModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemRecordList = (function (_super) {
__extends(Mobile_OperatingSystemRecordList, _super);
function Mobile_OperatingSystemRecordList(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemRecordList.itemType = AgentifaiAssistantPluginModel.Mobile_OperatingSystemRecord;
return Mobile_OperatingSystemRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiAssistantPluginModel.Mobile_OperatingSystemRecordList = Mobile_OperatingSystemRecordList;

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
define("AgentifaiAssistantPlugin.model$Mobile_OperatingSystemList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "AgentifaiAssistantPlugin.model", "CommonPlugin.model$Mobile_OperatingSystemRec", "AgentifaiAssistantPlugin.referencesHealth", "AgentifaiAssistantPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, AgentifaiAssistantPluginModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemList = (function (_super) {
__extends(Mobile_OperatingSystemList, _super);
function Mobile_OperatingSystemList(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemList.itemType = CommonPluginModel.Mobile_OperatingSystemRec;
return Mobile_OperatingSystemList;
})(OS.DataTypes.GenericRecordList);
AgentifaiAssistantPluginModel.Mobile_OperatingSystemList = Mobile_OperatingSystemList;

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
AgentifaiAssistantPluginModel.staticEntities.mobile_OperatingSystem = {};
var getMobile_OperatingSystemRecord = function (record) {
return OS.ApplicationInfo.getModules()["5b6515d9-f417-41d9-9c45-5dfc1a7b019f"].staticEntities["c1eb5dfb-b8c1-47fc-bc7d-1cd017f67311"][record];
};
Object.defineProperty(AgentifaiAssistantPluginModel.staticEntities.mobile_OperatingSystem, "android", {
get: function () {
return getMobile_OperatingSystemRecord("01edb2f7-0e57-4dc0-9509-92d0d28ebfe3");
}
});

Object.defineProperty(AgentifaiAssistantPluginModel.staticEntities.mobile_OperatingSystem, "windows", {
get: function () {
return getMobile_OperatingSystemRecord("164b2bee-9204-44fd-99b7-4d8e15ea9c63");
}
});

Object.defineProperty(AgentifaiAssistantPluginModel.staticEntities.mobile_OperatingSystem, "iOS", {
get: function () {
return getMobile_OperatingSystemRecord("91c837e3-89f4-4179-9b8c-c79a99090027");
}
});

Object.defineProperty(AgentifaiAssistantPluginModel.staticEntities.mobile_OperatingSystem, "other", {
get: function () {
return getMobile_OperatingSystemRecord("e0264a53-735d-4dea-8647-b8bfe757d34b");
}
});

});
