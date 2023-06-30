define("OutSystemsUI.model$SpaceRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SpaceRec = (function (_super) {
__extends(SpaceRec, _super);
function SpaceRec(defaults) {
_super.apply(this, arguments);
}
SpaceRec.attributesToDeclare = function () {
return [
this.attr("Space", "spaceAttr", "Space", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SpaceRec.init();
return SpaceRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.SpaceRec = SpaceRec;

});
define("OutSystemsUI.model$SpaceRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SpaceRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SpaceRecord = (function (_super) {
__extends(SpaceRecord, _super);
function SpaceRecord(defaults) {
_super.apply(this, arguments);
}
SpaceRecord.attributesToDeclare = function () {
return [
this.attr("Space", "spaceAttr", "Space", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SpaceRec());
}, true, OutSystemsUIModel.SpaceRec)
].concat(_super.attributesToDeclare.call(this));
};
SpaceRecord.fromStructure = function (str) {
return new SpaceRecord(new SpaceRecord.RecordClass({
spaceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpaceRecord._isAnonymousRecord = true;
SpaceRecord.UniqueId = "9589ecc0-6297-88c2-aca6-b47bcbae782c";
SpaceRecord.init();
return SpaceRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.SpaceRecord = SpaceRecord;

});
define("OutSystemsUI.model$SpaceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SpaceRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SpaceRecordList = (function (_super) {
__extends(SpaceRecordList, _super);
function SpaceRecordList(defaults) {
_super.apply(this, arguments);
}
SpaceRecordList.itemType = OutSystemsUIModel.SpaceRecord;
return SpaceRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.SpaceRecordList = SpaceRecordList;

});
define("OutSystemsUI.model$BooleanTypesRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var BooleanTypesRec = (function (_super) {
__extends(BooleanTypesRec, _super);
function BooleanTypesRec(defaults) {
_super.apply(this, arguments);
}
BooleanTypesRec.attributesToDeclare = function () {
return [
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BooleanTypesRec.init();
return BooleanTypesRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.BooleanTypesRec = BooleanTypesRec;

});
define("OutSystemsUI.model$BooleanTypesList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$BooleanTypesRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var BooleanTypesList = (function (_super) {
__extends(BooleanTypesList, _super);
function BooleanTypesList(defaults) {
_super.apply(this, arguments);
}
BooleanTypesList.itemType = OutSystemsUIModel.BooleanTypesRec;
return BooleanTypesList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.BooleanTypesList = BooleanTypesList;

});
define("OutSystemsUI.model$DeviceConfigurationRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DeviceConfigurationRec = (function (_super) {
__extends(DeviceConfigurationRec, _super);
function DeviceConfigurationRec(defaults) {
_super.apply(this, arguments);
}
DeviceConfigurationRec.attributesToDeclare = function () {
return [
this.attr("PhoneWidth", "phoneWidthAttr", "PhoneWidth", false, false, OS.Types.Integer, function () {
return 700;
}, true), 
this.attr("TabletWidth", "tabletWidthAttr", "TabletWidth", false, false, OS.Types.Integer, function () {
return 1024;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DeviceConfigurationRec.init();
return DeviceConfigurationRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DeviceConfigurationRec = DeviceConfigurationRec;

});
define("OutSystemsUI.model$DropdownServerSideItem_InternalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownServerSideItem_InternalConfigsRec = (function (_super) {
__extends(DropdownServerSideItem_InternalConfigsRec, _super);
function DropdownServerSideItem_InternalConfigsRec(defaults) {
_super.apply(this, arguments);
}
DropdownServerSideItem_InternalConfigsRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ItemId", "itemIdAttr", "ItemId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "1";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DropdownServerSideItem_InternalConfigsRec.init();
return DropdownServerSideItem_InternalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DropdownServerSideItem_InternalConfigsRec = DropdownServerSideItem_InternalConfigsRec;

});
define("OutSystemsUI.model$DropdownServerSideItem_InternalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownServerSideItem_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownServerSideItem_InternalConfigsRecord = (function (_super) {
__extends(DropdownServerSideItem_InternalConfigsRecord, _super);
function DropdownServerSideItem_InternalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DropdownServerSideItem_InternalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DropdownServerSideItem_InternalConfigs", "dropdownServerSideItem_InternalConfigsAttr", "DropdownServerSideItem_InternalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownServerSideItem_InternalConfigsRec());
}, true, OutSystemsUIModel.DropdownServerSideItem_InternalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownServerSideItem_InternalConfigsRecord.fromStructure = function (str) {
return new DropdownServerSideItem_InternalConfigsRecord(new DropdownServerSideItem_InternalConfigsRecord.RecordClass({
dropdownServerSideItem_InternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownServerSideItem_InternalConfigsRecord._isAnonymousRecord = true;
DropdownServerSideItem_InternalConfigsRecord.UniqueId = "30bb0fd6-be76-9d5d-6630-c4c9fbd19c43";
DropdownServerSideItem_InternalConfigsRecord.init();
return DropdownServerSideItem_InternalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DropdownServerSideItem_InternalConfigsRecord = DropdownServerSideItem_InternalConfigsRecord;

});
define("OutSystemsUI.model$DropdownServerSideItem_InternalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownServerSideItem_InternalConfigsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownServerSideItem_InternalConfigsRecordList = (function (_super) {
__extends(DropdownServerSideItem_InternalConfigsRecordList, _super);
function DropdownServerSideItem_InternalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownServerSideItem_InternalConfigsRecordList.itemType = OutSystemsUIModel.DropdownServerSideItem_InternalConfigsRecord;
return DropdownServerSideItem_InternalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DropdownServerSideItem_InternalConfigsRecordList = DropdownServerSideItem_InternalConfigsRecordList;

});
define("OutSystemsUI.model$OrientationRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var OrientationRec = (function (_super) {
__extends(OrientationRec, _super);
function OrientationRec(defaults) {
_super.apply(this, arguments);
}
OrientationRec.attributesToDeclare = function () {
return [
this.attr("Orientation", "orientationAttr", "Orientation", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
OrientationRec.fromStructure = function (str) {
return new OrientationRec(new OrientationRec.RecordClass({
orientationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OrientationRec.init();
return OrientationRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.OrientationRec = OrientationRec;

});
define("OutSystemsUI.model$OrientationList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$OrientationRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var OrientationList = (function (_super) {
__extends(OrientationList, _super);
function OrientationList(defaults) {
_super.apply(this, arguments);
}
OrientationList.itemType = OutSystemsUIModel.OrientationRec;
return OrientationList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.OrientationList = OrientationList;

});
define("OutSystemsUI.model$CarouselDirectionRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var CarouselDirectionRec = (function (_super) {
__extends(CarouselDirectionRec, _super);
function CarouselDirectionRec(defaults) {
_super.apply(this, arguments);
}
CarouselDirectionRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CarouselDirectionRec.fromStructure = function (str) {
return new CarouselDirectionRec(new CarouselDirectionRec.RecordClass({
typeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselDirectionRec.init();
return CarouselDirectionRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.CarouselDirectionRec = CarouselDirectionRec;

});
define("OutSystemsUI.model$CarouselDirectionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$CarouselDirectionRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var CarouselDirectionRecord = (function (_super) {
__extends(CarouselDirectionRecord, _super);
function CarouselDirectionRecord(defaults) {
_super.apply(this, arguments);
}
CarouselDirectionRecord.attributesToDeclare = function () {
return [
this.attr("CarouselDirection", "carouselDirectionAttr", "CarouselDirection", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.CarouselDirectionRec());
}, true, OutSystemsUIModel.CarouselDirectionRec)
].concat(_super.attributesToDeclare.call(this));
};
CarouselDirectionRecord.fromStructure = function (str) {
return new CarouselDirectionRecord(new CarouselDirectionRecord.RecordClass({
carouselDirectionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselDirectionRecord._isAnonymousRecord = true;
CarouselDirectionRecord.UniqueId = "fb5d22b1-003c-ff23-4a58-8ab54b5367f0";
CarouselDirectionRecord.init();
return CarouselDirectionRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.CarouselDirectionRecord = CarouselDirectionRecord;

});
define("OutSystemsUI.model$CarouselDirectionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$CarouselDirectionRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var CarouselDirectionRecordList = (function (_super) {
__extends(CarouselDirectionRecordList, _super);
function CarouselDirectionRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselDirectionRecordList.itemType = OutSystemsUIModel.CarouselDirectionRecord;
return CarouselDirectionRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.CarouselDirectionRecordList = CarouselDirectionRecordList;

});
define("OutSystemsUI.model$DirectionRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DirectionRec = (function (_super) {
__extends(DirectionRec, _super);
function DirectionRec(defaults) {
_super.apply(this, arguments);
}
DirectionRec.attributesToDeclare = function () {
return [
this.attr("Direction", "directionAttr", "Direction", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DirectionRec.init();
return DirectionRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DirectionRec = DirectionRec;

});
define("OutSystemsUI.model$DirectionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DirectionRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DirectionRecord = (function (_super) {
__extends(DirectionRecord, _super);
function DirectionRecord(defaults) {
_super.apply(this, arguments);
}
DirectionRecord.attributesToDeclare = function () {
return [
this.attr("Direction", "directionAttr", "Direction", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DirectionRec());
}, true, OutSystemsUIModel.DirectionRec)
].concat(_super.attributesToDeclare.call(this));
};
DirectionRecord.fromStructure = function (str) {
return new DirectionRecord(new DirectionRecord.RecordClass({
directionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DirectionRecord._isAnonymousRecord = true;
DirectionRecord.UniqueId = "070998dc-6b3d-c951-b52d-8108550fe380";
DirectionRecord.init();
return DirectionRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DirectionRecord = DirectionRecord;

});
define("OutSystemsUI.model$DatePickerWeekDayRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerWeekDayRec = (function (_super) {
__extends(DatePickerWeekDayRec, _super);
function DatePickerWeekDayRec(defaults) {
_super.apply(this, arguments);
}
DatePickerWeekDayRec.attributesToDeclare = function () {
return [
this.attr("WeekDay", "weekDayAttr", "WeekDay", true, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerWeekDayRec.fromStructure = function (str) {
return new DatePickerWeekDayRec(new DatePickerWeekDayRec.RecordClass({
weekDayAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerWeekDayRec.init();
return DatePickerWeekDayRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DatePickerWeekDayRec = DatePickerWeekDayRec;

});
define("OutSystemsUI.model$DatePickerWeekDayRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerWeekDayRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerWeekDayRecord = (function (_super) {
__extends(DatePickerWeekDayRecord, _super);
function DatePickerWeekDayRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerWeekDayRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerWeekDay", "datePickerWeekDayAttr", "DatePickerWeekDay", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DatePickerWeekDayRec());
}, true, OutSystemsUIModel.DatePickerWeekDayRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerWeekDayRecord.fromStructure = function (str) {
return new DatePickerWeekDayRecord(new DatePickerWeekDayRecord.RecordClass({
datePickerWeekDayAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerWeekDayRecord._isAnonymousRecord = true;
DatePickerWeekDayRecord.UniqueId = "210f541f-43ec-6384-ba59-bfd8fe4b8837";
DatePickerWeekDayRecord.init();
return DatePickerWeekDayRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DatePickerWeekDayRecord = DatePickerWeekDayRecord;

});
define("OutSystemsUI.model$DatePickerWeekDayRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerWeekDayRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerWeekDayRecordList = (function (_super) {
__extends(DatePickerWeekDayRecordList, _super);
function DatePickerWeekDayRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerWeekDayRecordList.itemType = OutSystemsUIModel.DatePickerWeekDayRecord;
return DatePickerWeekDayRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DatePickerWeekDayRecordList = DatePickerWeekDayRecordList;

});
define("OutSystemsUI.model$Submenu_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Submenu_InternalConfigRec = (function (_super) {
__extends(Submenu_InternalConfigRec, _super);
function Submenu_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
Submenu_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Submenu_InternalConfigRec.init();
return Submenu_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.Submenu_InternalConfigRec = Submenu_InternalConfigRec;

});
define("OutSystemsUI.model$Submenu_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Submenu_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Submenu_InternalConfigRecord = (function (_super) {
__extends(Submenu_InternalConfigRecord, _super);
function Submenu_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
Submenu_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("Submenu_InternalConfig", "submenu_InternalConfigAttr", "Submenu_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.Submenu_InternalConfigRec());
}, true, OutSystemsUIModel.Submenu_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
Submenu_InternalConfigRecord.fromStructure = function (str) {
return new Submenu_InternalConfigRecord(new Submenu_InternalConfigRecord.RecordClass({
submenu_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Submenu_InternalConfigRecord._isAnonymousRecord = true;
Submenu_InternalConfigRecord.UniqueId = "6806bcab-ed8c-9a62-7c64-e2f22fd43e7d";
Submenu_InternalConfigRecord.init();
return Submenu_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.Submenu_InternalConfigRecord = Submenu_InternalConfigRecord;

});
define("OutSystemsUI.model$Submenu_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Submenu_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Submenu_InternalConfigRecordList = (function (_super) {
__extends(Submenu_InternalConfigRecordList, _super);
function Submenu_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
Submenu_InternalConfigRecordList.itemType = OutSystemsUIModel.Submenu_InternalConfigRecord;
return Submenu_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.Submenu_InternalConfigRecordList = Submenu_InternalConfigRecordList;

});
define("OutSystemsUI.model$ProgressTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProgressTypeRec = (function (_super) {
__extends(ProgressTypeRec, _super);
function ProgressTypeRec(defaults) {
_super.apply(this, arguments);
}
ProgressTypeRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ProgressTypeRec.fromStructure = function (str) {
return new ProgressTypeRec(new ProgressTypeRec.RecordClass({
typeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProgressTypeRec.init();
return ProgressTypeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ProgressTypeRec = ProgressTypeRec;

});
define("OutSystemsUI.model$ProgressTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ProgressTypeRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProgressTypeRecord = (function (_super) {
__extends(ProgressTypeRecord, _super);
function ProgressTypeRecord(defaults) {
_super.apply(this, arguments);
}
ProgressTypeRecord.attributesToDeclare = function () {
return [
this.attr("ProgressType", "progressTypeAttr", "ProgressType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ProgressTypeRec());
}, true, OutSystemsUIModel.ProgressTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
ProgressTypeRecord.fromStructure = function (str) {
return new ProgressTypeRecord(new ProgressTypeRecord.RecordClass({
progressTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProgressTypeRecord._isAnonymousRecord = true;
ProgressTypeRecord.UniqueId = "0832b315-fa43-5e0f-f97a-ca2a0ca6bd44";
ProgressTypeRecord.init();
return ProgressTypeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ProgressTypeRecord = ProgressTypeRecord;

});
define("OutSystemsUI.model$NotificationOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var NotificationOptionalConfigsRec = (function (_super) {
__extends(NotificationOptionalConfigsRec, _super);
function NotificationOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
NotificationOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("InteractToClose", "interactToCloseAttr", "InteractToClose", false, false, OS.Types.Boolean, function () {
return true;
}, true), 
this.attr("CloseAfterTime", "closeAfterTimeAttr", "CloseAfterTime", false, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NotificationOptionalConfigsRec.init();
return NotificationOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.NotificationOptionalConfigsRec = NotificationOptionalConfigsRec;

});
define("OutSystemsUI.model$Accordion_InternalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Accordion_InternalConfigsRec = (function (_super) {
__extends(Accordion_InternalConfigsRec, _super);
function Accordion_InternalConfigsRec(defaults) {
_super.apply(this, arguments);
}
Accordion_InternalConfigsRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("MultipleItems", "multipleItemsAttr", "MultipleItems", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Accordion_InternalConfigsRec.init();
return Accordion_InternalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.Accordion_InternalConfigsRec = Accordion_InternalConfigsRec;

});
define("OutSystemsUI.model$Accordion_InternalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Accordion_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Accordion_InternalConfigsRecord = (function (_super) {
__extends(Accordion_InternalConfigsRecord, _super);
function Accordion_InternalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
Accordion_InternalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("Accordion_InternalConfigs", "accordion_InternalConfigsAttr", "Accordion_InternalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.Accordion_InternalConfigsRec());
}, true, OutSystemsUIModel.Accordion_InternalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
Accordion_InternalConfigsRecord.fromStructure = function (str) {
return new Accordion_InternalConfigsRecord(new Accordion_InternalConfigsRecord.RecordClass({
accordion_InternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Accordion_InternalConfigsRecord._isAnonymousRecord = true;
Accordion_InternalConfigsRecord.UniqueId = "34326cf8-cbe6-cf38-d907-603fa07c4c09";
Accordion_InternalConfigsRecord.init();
return Accordion_InternalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.Accordion_InternalConfigsRecord = Accordion_InternalConfigsRecord;

});
define("OutSystemsUI.model$Accordion_InternalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Accordion_InternalConfigsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Accordion_InternalConfigsRecordList = (function (_super) {
__extends(Accordion_InternalConfigsRecordList, _super);
function Accordion_InternalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
Accordion_InternalConfigsRecordList.itemType = OutSystemsUIModel.Accordion_InternalConfigsRecord;
return Accordion_InternalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.Accordion_InternalConfigsRecordList = Accordion_InternalConfigsRecordList;

});
define("OutSystemsUI.model$Carousel_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Carousel_InternalConfigRec = (function (_super) {
__extends(Carousel_InternalConfigRec, _super);
function Carousel_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
Carousel_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Navigation", "navigationAttr", "Navigation", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Height", "heightAttr", "Height", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ItemsDesktop", "itemsDesktopAttr", "ItemsDesktop", false, false, OS.Types.Integer, function () {
return 1;
}, true), 
this.attr("ItemsTablet", "itemsTabletAttr", "ItemsTablet", false, false, OS.Types.Integer, function () {
return 1;
}, true), 
this.attr("ItemsPhone", "itemsPhoneAttr", "ItemsPhone", false, false, OS.Types.Integer, function () {
return 1;
}, true), 
this.attr("AutoPlay", "autoPlayAttr", "AutoPlay", false, false, OS.Types.Boolean, function () {
return true;
}, true), 
this.attr("Loop", "loopAttr", "Loop", false, false, OS.Types.Boolean, function () {
return true;
}, true), 
this.attr("Padding", "paddingAttr", "Padding", false, false, OS.Types.Text, function () {
return "0";
}, true), 
this.attr("StartingPosition", "startingPositionAttr", "StartingPosition", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("ItemsGap", "itemsGapAttr", "ItemsGap", false, false, OS.Types.Text, function () {
return "0";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Carousel_InternalConfigRec.init();
return Carousel_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.Carousel_InternalConfigRec = Carousel_InternalConfigRec;

});
define("OutSystemsUI.model$Carousel_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Carousel_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Carousel_InternalConfigRecord = (function (_super) {
__extends(Carousel_InternalConfigRecord, _super);
function Carousel_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
Carousel_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("Carousel_InternalConfig", "carousel_InternalConfigAttr", "Carousel_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.Carousel_InternalConfigRec());
}, true, OutSystemsUIModel.Carousel_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
Carousel_InternalConfigRecord.fromStructure = function (str) {
return new Carousel_InternalConfigRecord(new Carousel_InternalConfigRecord.RecordClass({
carousel_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Carousel_InternalConfigRecord._isAnonymousRecord = true;
Carousel_InternalConfigRecord.UniqueId = "098ae17f-5202-3316-5dd0-526529ff8852";
Carousel_InternalConfigRecord.init();
return Carousel_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.Carousel_InternalConfigRecord = Carousel_InternalConfigRecord;

});
define("OutSystemsUI.model$ProviderEventReturnMessageRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProviderEventReturnMessageRec = (function (_super) {
__extends(ProviderEventReturnMessageRec, _super);
function ProviderEventReturnMessageRec(defaults) {
_super.apply(this, arguments);
}
ProviderEventReturnMessageRec.attributesToDeclare = function () {
return [
this.attr("ProviderEventId", "providerEventIdAttr", "value", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("IsSuccess", "isSuccessAttr", "isSuccess", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("Code", "codeAttr", "code", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "message", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ProviderEventReturnMessageRec.init();
return ProviderEventReturnMessageRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ProviderEventReturnMessageRec = ProviderEventReturnMessageRec;

});
define("OutSystemsUI.model$SectionIndexItem_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SectionIndexItem_InternalConfigRec = (function (_super) {
__extends(SectionIndexItem_InternalConfigRec, _super);
function SectionIndexItem_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
SectionIndexItem_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ScrollToWidgetId", "scrollToWidgetIdAttr", "ScrollToWidgetId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SectionIndexItem_InternalConfigRec.init();
return SectionIndexItem_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.SectionIndexItem_InternalConfigRec = SectionIndexItem_InternalConfigRec;

});
define("OutSystemsUI.model$SectionIndexItem_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SectionIndexItem_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SectionIndexItem_InternalConfigRecord = (function (_super) {
__extends(SectionIndexItem_InternalConfigRecord, _super);
function SectionIndexItem_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
SectionIndexItem_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("SectionIndexItem_InternalConfig", "sectionIndexItem_InternalConfigAttr", "SectionIndexItem_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SectionIndexItem_InternalConfigRec());
}, true, OutSystemsUIModel.SectionIndexItem_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
SectionIndexItem_InternalConfigRecord.fromStructure = function (str) {
return new SectionIndexItem_InternalConfigRecord(new SectionIndexItem_InternalConfigRecord.RecordClass({
sectionIndexItem_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SectionIndexItem_InternalConfigRecord._isAnonymousRecord = true;
SectionIndexItem_InternalConfigRecord.UniqueId = "5eb5daa2-af51-2be5-1806-b390378b7c9a";
SectionIndexItem_InternalConfigRecord.init();
return SectionIndexItem_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.SectionIndexItem_InternalConfigRecord = SectionIndexItem_InternalConfigRecord;

});
define("OutSystemsUI.model$SectionIndexItem_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SectionIndexItem_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SectionIndexItem_InternalConfigRecordList = (function (_super) {
__extends(SectionIndexItem_InternalConfigRecordList, _super);
function SectionIndexItem_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
SectionIndexItem_InternalConfigRecordList.itemType = OutSystemsUIModel.SectionIndexItem_InternalConfigRecord;
return SectionIndexItem_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.SectionIndexItem_InternalConfigRecordList = SectionIndexItem_InternalConfigRecordList;

});
define("OutSystemsUI.model$SectionIndex_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SectionIndex_InternalConfigRec = (function (_super) {
__extends(SectionIndex_InternalConfigRec, _super);
function SectionIndex_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
SectionIndex_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("SmoothScrolling", "smoothScrollingAttr", "SmoothScrolling", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("IsFixed", "isFixedAttr", "IsFixed", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SectionIndex_InternalConfigRec.init();
return SectionIndex_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.SectionIndex_InternalConfigRec = SectionIndex_InternalConfigRec;

});
define("OutSystemsUI.model$SectionIndex_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SectionIndex_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SectionIndex_InternalConfigRecord = (function (_super) {
__extends(SectionIndex_InternalConfigRecord, _super);
function SectionIndex_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
SectionIndex_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("SectionIndex_InternalConfig", "sectionIndex_InternalConfigAttr", "SectionIndex_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SectionIndex_InternalConfigRec());
}, true, OutSystemsUIModel.SectionIndex_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
SectionIndex_InternalConfigRecord.fromStructure = function (str) {
return new SectionIndex_InternalConfigRecord(new SectionIndex_InternalConfigRecord.RecordClass({
sectionIndex_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SectionIndex_InternalConfigRecord._isAnonymousRecord = true;
SectionIndex_InternalConfigRecord.UniqueId = "0a10b180-e320-34e4-8747-aceb3ee25eef";
SectionIndex_InternalConfigRecord.init();
return SectionIndex_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.SectionIndex_InternalConfigRecord = SectionIndex_InternalConfigRecord;

});
define("OutSystemsUI.model$Rating_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Rating_InternalConfigRec = (function (_super) {
__extends(Rating_InternalConfigRec, _super);
function Rating_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
Rating_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("RatingValue", "ratingValueAttr", "RatingValue", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RatingScale", "ratingScaleAttr", "RatingScale", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("IsEdit", "isEditAttr", "IsEdit", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("Size", "sizeAttr", "Size", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Rating_InternalConfigRec.init();
return Rating_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.Rating_InternalConfigRec = Rating_InternalConfigRec;

});
define("OutSystemsUI.model$Rating_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Rating_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Rating_InternalConfigList = (function (_super) {
__extends(Rating_InternalConfigList, _super);
function Rating_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
Rating_InternalConfigList.itemType = OutSystemsUIModel.Rating_InternalConfigRec;
return Rating_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.Rating_InternalConfigList = Rating_InternalConfigList;

});
define("OutSystemsUI.model$ShapeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ShapeRec = (function (_super) {
__extends(ShapeRec, _super);
function ShapeRec(defaults) {
_super.apply(this, arguments);
}
ShapeRec.attributesToDeclare = function () {
return [
this.attr("Shape", "shapeAttr", "Shape", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", false, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ShapeRec.init();
return ShapeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ShapeRec = ShapeRec;

});
define("OutSystemsUI.model$ShapeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ShapeRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ShapeRecord = (function (_super) {
__extends(ShapeRecord, _super);
function ShapeRecord(defaults) {
_super.apply(this, arguments);
}
ShapeRecord.attributesToDeclare = function () {
return [
this.attr("Shape", "shapeAttr", "Shape", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ShapeRec());
}, true, OutSystemsUIModel.ShapeRec)
].concat(_super.attributesToDeclare.call(this));
};
ShapeRecord.fromStructure = function (str) {
return new ShapeRecord(new ShapeRecord.RecordClass({
shapeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ShapeRecord._isAnonymousRecord = true;
ShapeRecord.UniqueId = "0a89eeb6-0fa1-f44b-6316-ca69b462007b";
ShapeRecord.init();
return ShapeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ShapeRecord = ShapeRecord;

});
define("OutSystemsUI.model$BulkActionsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var BulkActionsRec = (function (_super) {
__extends(BulkActionsRec, _super);
function BulkActionsRec(defaults) {
_super.apply(this, arguments);
}
BulkActionsRec.attributesToDeclare = function () {
return [
this.attr("Value", "valueAttr", "Value", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BulkActionsRec.fromStructure = function (str) {
return new BulkActionsRec(new BulkActionsRec.RecordClass({
valueAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BulkActionsRec.init();
return BulkActionsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.BulkActionsRec = BulkActionsRec;

});
define("OutSystemsUI.model$BulkActionsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$BulkActionsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var BulkActionsList = (function (_super) {
__extends(BulkActionsList, _super);
function BulkActionsList(defaults) {
_super.apply(this, arguments);
}
BulkActionsList.itemType = OutSystemsUIModel.BulkActionsRec;
return BulkActionsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.BulkActionsList = BulkActionsList;

});
define("OutSystemsUI.model$DropdownServerSide_InternalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownServerSide_InternalConfigsRec = (function (_super) {
__extends(DropdownServerSide_InternalConfigsRec, _super);
function DropdownServerSide_InternalConfigsRec(defaults) {
_super.apply(this, arguments);
}
DropdownServerSide_InternalConfigsRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("AllowMultipleSelection", "allowMultipleSelectionAttr", "AllowMultipleSelection", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "1";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DropdownServerSide_InternalConfigsRec.init();
return DropdownServerSide_InternalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DropdownServerSide_InternalConfigsRec = DropdownServerSide_InternalConfigsRec;

});
define("OutSystemsUI.model$StepsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var StepsRec = (function (_super) {
__extends(StepsRec, _super);
function StepsRec(defaults) {
_super.apply(this, arguments);
}
StepsRec.attributesToDeclare = function () {
return [
this.attr("Steps", "stepsAttr", "Steps", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
StepsRec.fromStructure = function (str) {
return new StepsRec(new StepsRec.RecordClass({
stepsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StepsRec.init();
return StepsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.StepsRec = StepsRec;

});
define("OutSystemsUI.model$StepsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$StepsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var StepsRecord = (function (_super) {
__extends(StepsRecord, _super);
function StepsRecord(defaults) {
_super.apply(this, arguments);
}
StepsRecord.attributesToDeclare = function () {
return [
this.attr("Steps", "stepsAttr", "Steps", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.StepsRec());
}, true, OutSystemsUIModel.StepsRec)
].concat(_super.attributesToDeclare.call(this));
};
StepsRecord.fromStructure = function (str) {
return new StepsRecord(new StepsRecord.RecordClass({
stepsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StepsRecord._isAnonymousRecord = true;
StepsRecord.UniqueId = "0d776a4e-191f-af32-1030-d5ce57aa4167";
StepsRecord.init();
return StepsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.StepsRecord = StepsRecord;

});
define("OutSystemsUI.model$BottomSheet_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var BottomSheet_InternalConfigRec = (function (_super) {
__extends(BottomSheet_InternalConfigRec, _super);
function BottomSheet_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
BottomSheet_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Shape", "shapeAttr", "Shape", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.shape.softRounded;
}, true), 
this.attr("ShowHandler", "showHandlerAttr", "ShowHandler", false, false, OS.Types.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BottomSheet_InternalConfigRec.init();
return BottomSheet_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.BottomSheet_InternalConfigRec = BottomSheet_InternalConfigRec;

});
define("OutSystemsUI.model$ProviderEventReturnMessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ProviderEventReturnMessageRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProviderEventReturnMessageRecord = (function (_super) {
__extends(ProviderEventReturnMessageRecord, _super);
function ProviderEventReturnMessageRecord(defaults) {
_super.apply(this, arguments);
}
ProviderEventReturnMessageRecord.attributesToDeclare = function () {
return [
this.attr("ProviderEventReturnMessage", "providerEventReturnMessageAttr", "ProviderEventReturnMessage", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ProviderEventReturnMessageRec());
}, true, OutSystemsUIModel.ProviderEventReturnMessageRec)
].concat(_super.attributesToDeclare.call(this));
};
ProviderEventReturnMessageRecord.fromStructure = function (str) {
return new ProviderEventReturnMessageRecord(new ProviderEventReturnMessageRecord.RecordClass({
providerEventReturnMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProviderEventReturnMessageRecord._isAnonymousRecord = true;
ProviderEventReturnMessageRecord.UniqueId = "dae4b4e9-efc9-38bf-677d-8f92dec29722";
ProviderEventReturnMessageRecord.init();
return ProviderEventReturnMessageRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ProviderEventReturnMessageRecord = ProviderEventReturnMessageRecord;

});
define("OutSystemsUI.model$ProviderEventReturnMessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ProviderEventReturnMessageRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProviderEventReturnMessageRecordList = (function (_super) {
__extends(ProviderEventReturnMessageRecordList, _super);
function ProviderEventReturnMessageRecordList(defaults) {
_super.apply(this, arguments);
}
ProviderEventReturnMessageRecordList.itemType = OutSystemsUIModel.ProviderEventReturnMessageRecord;
return ProviderEventReturnMessageRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ProviderEventReturnMessageRecordList = ProviderEventReturnMessageRecordList;

});
define("OutSystemsUI.model$Sidebar_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Sidebar_InternalConfigRec = (function (_super) {
__extends(Sidebar_InternalConfigRec, _super);
function Sidebar_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
Sidebar_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("StartsOpen", "startsOpenAttr", "StartsOpen", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("Direction", "directionAttr", "Direction", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Width", "widthAttr", "Width", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("HasOverlay", "hasOverlayAttr", "HasOverlay", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Sidebar_InternalConfigRec.init();
return Sidebar_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.Sidebar_InternalConfigRec = Sidebar_InternalConfigRec;

});
define("OutSystemsUI.model$Sidebar_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Sidebar_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Sidebar_InternalConfigRecord = (function (_super) {
__extends(Sidebar_InternalConfigRecord, _super);
function Sidebar_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
Sidebar_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("Sidebar_InternalConfig", "sidebar_InternalConfigAttr", "Sidebar_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.Sidebar_InternalConfigRec());
}, true, OutSystemsUIModel.Sidebar_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
Sidebar_InternalConfigRecord.fromStructure = function (str) {
return new Sidebar_InternalConfigRecord(new Sidebar_InternalConfigRecord.RecordClass({
sidebar_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Sidebar_InternalConfigRecord._isAnonymousRecord = true;
Sidebar_InternalConfigRecord.UniqueId = "11d8167e-3fa1-5e30-43cb-2afdd0778cf2";
Sidebar_InternalConfigRecord.init();
return Sidebar_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.Sidebar_InternalConfigRecord = Sidebar_InternalConfigRecord;

});
define("OutSystemsUI.model$ProgressBar_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProgressBar_InternalConfigRec = (function (_super) {
__extends(ProgressBar_InternalConfigRec, _super);
function ProgressBar_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
ProgressBar_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Progress", "progressAttr", "Progress", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("ProgressColor", "progressColorAttr", "ProgressColor", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("TrailColor", "trailColorAttr", "TrailColor", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Thickness", "thicknessAttr", "Thickness", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Shape", "shapeAttr", "Shape", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.shape.rounded;
}, true), 
this.attr("AnimateInitialProgress", "animateInitialProgressAttr", "AnimateInitialProgress", false, false, OS.Types.Boolean, function () {
return true;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("InitialProgress", "initialProgressAttr", "InitialProgress", false, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ProgressBar_InternalConfigRec.init();
return ProgressBar_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ProgressBar_InternalConfigRec = ProgressBar_InternalConfigRec;

});
define("OutSystemsUI.model$ProgressBar_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ProgressBar_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProgressBar_InternalConfigRecord = (function (_super) {
__extends(ProgressBar_InternalConfigRecord, _super);
function ProgressBar_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
ProgressBar_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("ProgressBar_InternalConfig", "progressBar_InternalConfigAttr", "ProgressBar_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ProgressBar_InternalConfigRec());
}, true, OutSystemsUIModel.ProgressBar_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
ProgressBar_InternalConfigRecord.fromStructure = function (str) {
return new ProgressBar_InternalConfigRecord(new ProgressBar_InternalConfigRecord.RecordClass({
progressBar_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProgressBar_InternalConfigRecord._isAnonymousRecord = true;
ProgressBar_InternalConfigRecord.UniqueId = "12cb0160-c5b9-08b2-86f2-418f6f00a5eb";
ProgressBar_InternalConfigRecord.init();
return ProgressBar_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ProgressBar_InternalConfigRecord = ProgressBar_InternalConfigRecord;

});
define("OutSystemsUI.model$ProgressCircle_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProgressCircle_InternalConfigRec = (function (_super) {
__extends(ProgressCircle_InternalConfigRec, _super);
function ProgressCircle_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
ProgressCircle_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Progress", "progressAttr", "Progress", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("ProgressColor", "progressColorAttr", "ProgressColor", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ProgressCircleSize", "progressCircleSizeAttr", "ProgressCircleSize", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("TrailColor", "trailColorAttr", "TrailColor", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Thickness", "thicknessAttr", "Thickness", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Shape", "shapeAttr", "Shape", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.shape.rounded;
}, true), 
this.attr("AnimateInitialProgress", "animateInitialProgressAttr", "AnimateInitialProgress", false, false, OS.Types.Boolean, function () {
return true;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("InitialProgress", "initialProgressAttr", "InitialProgress", false, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ProgressCircle_InternalConfigRec.init();
return ProgressCircle_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ProgressCircle_InternalConfigRec = ProgressCircle_InternalConfigRec;

});
define("OutSystemsUI.model$ProgressCircle_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ProgressCircle_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProgressCircle_InternalConfigRecord = (function (_super) {
__extends(ProgressCircle_InternalConfigRecord, _super);
function ProgressCircle_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
ProgressCircle_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("ProgressCircle_InternalConfig", "progressCircle_InternalConfigAttr", "ProgressCircle_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ProgressCircle_InternalConfigRec());
}, true, OutSystemsUIModel.ProgressCircle_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
ProgressCircle_InternalConfigRecord.fromStructure = function (str) {
return new ProgressCircle_InternalConfigRecord(new ProgressCircle_InternalConfigRecord.RecordClass({
progressCircle_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProgressCircle_InternalConfigRecord._isAnonymousRecord = true;
ProgressCircle_InternalConfigRecord.UniqueId = "b6f4f6f5-8cf9-d7e9-3da0-322d7951765a";
ProgressCircle_InternalConfigRecord.init();
return ProgressCircle_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ProgressCircle_InternalConfigRecord = ProgressCircle_InternalConfigRecord;

});
define("OutSystemsUI.model$ProgressCircle_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ProgressCircle_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProgressCircle_InternalConfigRecordList = (function (_super) {
__extends(ProgressCircle_InternalConfigRecordList, _super);
function ProgressCircle_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
ProgressCircle_InternalConfigRecordList.itemType = OutSystemsUIModel.ProgressCircle_InternalConfigRecord;
return ProgressCircle_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ProgressCircle_InternalConfigRecordList = ProgressCircle_InternalConfigRecordList;

});
define("OutSystemsUI.model$NoUiSliderConfigs_RangeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var NoUiSliderConfigs_RangeRec = (function (_super) {
__extends(NoUiSliderConfigs_RangeRec, _super);
function NoUiSliderConfigs_RangeRec(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigs_RangeRec.attributesToDeclare = function () {
return [
this.attr("key", "keyAttr", "key", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("value", "valueAttr", "value", false, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NoUiSliderConfigs_RangeRec.init();
return NoUiSliderConfigs_RangeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.NoUiSliderConfigs_RangeRec = NoUiSliderConfigs_RangeRec;

});
define("OutSystemsUI.model$NoUiSliderConfigs_RangeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$NoUiSliderConfigs_RangeRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var NoUiSliderConfigs_RangeList = (function (_super) {
__extends(NoUiSliderConfigs_RangeList, _super);
function NoUiSliderConfigs_RangeList(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigs_RangeList.itemType = OutSystemsUIModel.NoUiSliderConfigs_RangeRec;
return NoUiSliderConfigs_RangeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.NoUiSliderConfigs_RangeList = NoUiSliderConfigs_RangeList;

});
define("OutSystemsUI.model$NoUiSliderConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$NoUiSliderConfigs_RangeList"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var NoUiSliderConfigsRec = (function (_super) {
__extends(NoUiSliderConfigsRec, _super);
function NoUiSliderConfigsRec(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigsRec.attributesToDeclare = function () {
return [
this.attr("animate", "animateAttr", "animate", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("animationDuration", "animationDurationAttr", "animationDuration", false, false, OS.Types.Integer, function () {
return 300;
}, true), 
this.attr("behaviour", "behaviourAttr", "behaviour", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("cssPrefix", "cssPrefixAttr", "cssPrefix", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("keyboardMultiplier", "keyboardMultiplierAttr", "keyboardMultiplier", false, false, OS.Types.Integer, function () {
return 1;
}, true), 
this.attr("keyboardPageMultiplier", "keyboardPageMultiplierAttr", "keyboardPageMultiplier", false, false, OS.Types.Integer, function () {
return 5;
}, true), 
this.attr("keyboardSupport", "keyboardSupportAttr", "keyboardSupport", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("limit", "limitAttr", "limit", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("margin", "marginAttr", "margin", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("padding", "paddingAttr", "padding", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("range", "rangeAttr", "range", false, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.NoUiSliderConfigs_RangeList());
}, true, OutSystemsUIModel.NoUiSliderConfigs_RangeList), 
this.attr("snap", "snapAttr", "snap", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NoUiSliderConfigsRec.init();
return NoUiSliderConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.NoUiSliderConfigsRec = NoUiSliderConfigsRec;

});
define("OutSystemsUI.model$NoUiSliderConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$NoUiSliderConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var NoUiSliderConfigsRecord = (function (_super) {
__extends(NoUiSliderConfigsRecord, _super);
function NoUiSliderConfigsRecord(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigsRecord.attributesToDeclare = function () {
return [
this.attr("NoUiSliderConfigs", "noUiSliderConfigsAttr", "NoUiSliderConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.NoUiSliderConfigsRec());
}, true, OutSystemsUIModel.NoUiSliderConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
NoUiSliderConfigsRecord.fromStructure = function (str) {
return new NoUiSliderConfigsRecord(new NoUiSliderConfigsRecord.RecordClass({
noUiSliderConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NoUiSliderConfigsRecord._isAnonymousRecord = true;
NoUiSliderConfigsRecord.UniqueId = "1310596a-4ac4-ae2b-0319-b38dd9472639";
NoUiSliderConfigsRecord.init();
return NoUiSliderConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.NoUiSliderConfigsRecord = NoUiSliderConfigsRecord;

});
define("OutSystemsUI.model$ReturnMessageRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ReturnMessageRec = (function (_super) {
__extends(ReturnMessageRec, _super);
function ReturnMessageRec(defaults) {
_super.apply(this, arguments);
}
ReturnMessageRec.attributesToDeclare = function () {
return [
this.attr("IsSuccess", "isSuccessAttr", "isSuccess", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("Code", "codeAttr", "code", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "message", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "value", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ReturnMessageRec.init();
return ReturnMessageRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ReturnMessageRec = ReturnMessageRec;

});
define("OutSystemsUI.model$AnimationTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AnimationTypeRec = (function (_super) {
__extends(AnimationTypeRec, _super);
function AnimationTypeRec(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRec.attributesToDeclare = function () {
return [
this.attr("AnimationType", "animationTypeAttr", "AnimationType", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AnimationTypeRec.fromStructure = function (str) {
return new AnimationTypeRec(new AnimationTypeRec.RecordClass({
animationTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AnimationTypeRec.init();
return AnimationTypeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.AnimationTypeRec = AnimationTypeRec;

});
define("OutSystemsUI.model$AnimationTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$AnimationTypeRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AnimationTypeRecord = (function (_super) {
__extends(AnimationTypeRecord, _super);
function AnimationTypeRecord(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRecord.attributesToDeclare = function () {
return [
this.attr("AnimationType", "animationTypeAttr", "AnimationType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.AnimationTypeRec());
}, true, OutSystemsUIModel.AnimationTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
AnimationTypeRecord.fromStructure = function (str) {
return new AnimationTypeRecord(new AnimationTypeRecord.RecordClass({
animationTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AnimationTypeRecord._isAnonymousRecord = true;
AnimationTypeRecord.UniqueId = "78b6d6ed-7d52-800a-8a68-e7d796ec6850";
AnimationTypeRecord.init();
return AnimationTypeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.AnimationTypeRecord = AnimationTypeRecord;

});
define("OutSystemsUI.model$AnimationTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$AnimationTypeRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AnimationTypeRecordList = (function (_super) {
__extends(AnimationTypeRecordList, _super);
function AnimationTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRecordList.itemType = OutSystemsUIModel.AnimationTypeRecord;
return AnimationTypeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.AnimationTypeRecordList = AnimationTypeRecordList;

});
define("OutSystemsUI.model$FlatpickrConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var FlatpickrConfigsRec = (function (_super) {
__extends(FlatpickrConfigsRec, _super);
function FlatpickrConfigsRec(defaults) {
_super.apply(this, arguments);
}
FlatpickrConfigsRec.attributesToDeclare = function () {
return [
this.attr("altInputClass", "altInputClassAttr", "altInputClass", false, false, OS.Types.Text, function () {
return "undefined";
}, true), 
this.attr("allowInvalidPreload", "allowInvalidPreloadAttr", "allowInvalidPreload", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("ariaDateFormat", "ariaDateFormatAttr", "ariaDateFormat", false, false, OS.Types.Text, function () {
return "undefined";
}, true), 
this.attr("clickOpens", "clickOpensAttr", "clickOpens", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("inline", "inlineAttr", "inline", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("nextArrow", "nextArrowAttr", "nextArrow", false, false, OS.Types.Text, function () {
return "undefined";
}, true), 
this.attr("position", "positionAttr", "position", false, false, OS.Types.Text, function () {
return "undefined";
}, true), 
this.attr("positionElement", "positionElementAttr", "positionElement", false, false, OS.Types.Text, function () {
return "undefined";
}, true), 
this.attr("prevArrow", "prevArrowAttr", "prevArrow", false, false, OS.Types.Text, function () {
return "undefined";
}, true), 
this.attr("shorthandCurrentMonth", "shorthandCurrentMonthAttr", "shorthandCurrentMonth", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("static", "staticAttr", "static", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("showMonths", "showMonthsAttr", "showMonths", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("wrap", "wrapAttr", "wrap", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("monthSelectorType", "monthSelectorTypeAttr", "monthSelectorType", false, false, OS.Types.Text, function () {
return "undefined";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FlatpickrConfigsRec.init();
return FlatpickrConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.FlatpickrConfigsRec = FlatpickrConfigsRec;

});
define("OutSystemsUI.model$SpaceList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SpaceRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SpaceList = (function (_super) {
__extends(SpaceList, _super);
function SpaceList(defaults) {
_super.apply(this, arguments);
}
SpaceList.itemType = OutSystemsUIModel.SpaceRec;
return SpaceList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.SpaceList = SpaceList;

});
define("OutSystemsUI.model$DeviceResponsiveRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DeviceResponsiveRec = (function (_super) {
__extends(DeviceResponsiveRec, _super);
function DeviceResponsiveRec(defaults) {
_super.apply(this, arguments);
}
DeviceResponsiveRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DeviceResponsiveRec.init();
return DeviceResponsiveRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DeviceResponsiveRec = DeviceResponsiveRec;

});
define("OutSystemsUI.model$DeviceResponsiveRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DeviceResponsiveRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DeviceResponsiveRecord = (function (_super) {
__extends(DeviceResponsiveRecord, _super);
function DeviceResponsiveRecord(defaults) {
_super.apply(this, arguments);
}
DeviceResponsiveRecord.attributesToDeclare = function () {
return [
this.attr("DeviceResponsive", "deviceResponsiveAttr", "DeviceResponsive", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DeviceResponsiveRec());
}, true, OutSystemsUIModel.DeviceResponsiveRec)
].concat(_super.attributesToDeclare.call(this));
};
DeviceResponsiveRecord.fromStructure = function (str) {
return new DeviceResponsiveRecord(new DeviceResponsiveRecord.RecordClass({
deviceResponsiveAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DeviceResponsiveRecord._isAnonymousRecord = true;
DeviceResponsiveRecord.UniqueId = "1583be5d-90a9-4b6a-7317-0ffa868eecc5";
DeviceResponsiveRecord.init();
return DeviceResponsiveRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DeviceResponsiveRecord = DeviceResponsiveRecord;

});
define("OutSystemsUI.model$OrientationRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$OrientationRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var OrientationRecord = (function (_super) {
__extends(OrientationRecord, _super);
function OrientationRecord(defaults) {
_super.apply(this, arguments);
}
OrientationRecord.attributesToDeclare = function () {
return [
this.attr("Orientation", "orientationAttr", "Orientation", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.OrientationRec());
}, true, OutSystemsUIModel.OrientationRec)
].concat(_super.attributesToDeclare.call(this));
};
OrientationRecord.fromStructure = function (str) {
return new OrientationRecord(new OrientationRecord.RecordClass({
orientationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OrientationRecord._isAnonymousRecord = true;
OrientationRecord.UniqueId = "3ba1d238-c8e0-f0c3-e875-fb37f0381cc6";
OrientationRecord.init();
return OrientationRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.OrientationRecord = OrientationRecord;

});
define("OutSystemsUI.model$OrientationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$OrientationRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var OrientationRecordList = (function (_super) {
__extends(OrientationRecordList, _super);
function OrientationRecordList(defaults) {
_super.apply(this, arguments);
}
OrientationRecordList.itemType = OutSystemsUIModel.OrientationRecord;
return OrientationRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.OrientationRecordList = OrientationRecordList;

});
define("OutSystemsUI.model$Accordion_InternalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Accordion_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Accordion_InternalConfigsList = (function (_super) {
__extends(Accordion_InternalConfigsList, _super);
function Accordion_InternalConfigsList(defaults) {
_super.apply(this, arguments);
}
Accordion_InternalConfigsList.itemType = OutSystemsUIModel.Accordion_InternalConfigsRec;
return Accordion_InternalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.Accordion_InternalConfigsList = Accordion_InternalConfigsList;

});
define("OutSystemsUI.model$TextTextTextTextTextTextText1Record", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TextTextTextTextTextTextText1Record = (function (_super) {
__extends(TextTextTextTextTextTextText1Record, _super);
function TextTextTextTextTextTextText1Record(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextTextText1Record.attributesToDeclare = function () {
return [
this.attr("Weekday1", "weekday1Attr", "Weekday1", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Weekday2", "weekday2Attr", "Weekday2", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Weekday3", "weekday3Attr", "Weekday3", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Weekday4", "weekday4Attr", "Weekday4", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Weekday5", "weekday5Attr", "Weekday5", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Weekday6", "weekday6Attr", "Weekday6", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Weekday7", "weekday7Attr", "Weekday7", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextTextTextTextTextTextText1Record._isAnonymousRecord = true;
TextTextTextTextTextTextText1Record.UniqueId = "d3d7d244-571e-d038-dbfe-e008e77e8c11";
TextTextTextTextTextTextText1Record.init();
return TextTextTextTextTextTextText1Record;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.TextTextTextTextTextTextText1Record = TextTextTextTextTextTextText1Record;

});
define("OutSystemsUI.model$TextTextTextTextTextTextTextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TextTextTextTextTextTextText1Record"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TextTextTextTextTextTextTextRecordList = (function (_super) {
__extends(TextTextTextTextTextTextTextRecordList, _super);
function TextTextTextTextTextTextTextRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextTextTextRecordList.itemType = OutSystemsUIModel.TextTextTextTextTextTextText1Record;
return TextTextTextTextTextTextTextRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.TextTextTextTextTextTextTextRecordList = TextTextTextTextTextTextTextRecordList;

});
define("OutSystemsUI.model$BreakColumnsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var BreakColumnsRec = (function (_super) {
__extends(BreakColumnsRec, _super);
function BreakColumnsRec(defaults) {
_super.apply(this, arguments);
}
BreakColumnsRec.attributesToDeclare = function () {
return [
this.attr("BreakColumns", "breakColumnsAttr", "BreakColumns", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BreakColumnsRec.fromStructure = function (str) {
return new BreakColumnsRec(new BreakColumnsRec.RecordClass({
breakColumnsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BreakColumnsRec.init();
return BreakColumnsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.BreakColumnsRec = BreakColumnsRec;

});
define("OutSystemsUI.model$MessageStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MessageStatusRec = (function (_super) {
__extends(MessageStatusRec, _super);
function MessageStatusRec(defaults) {
_super.apply(this, arguments);
}
MessageStatusRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessageStatusRec.init();
return MessageStatusRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.MessageStatusRec = MessageStatusRec;

});
define("OutSystemsUI.model$ScrollbarStyleRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ScrollbarStyleRec = (function (_super) {
__extends(ScrollbarStyleRec, _super);
function ScrollbarStyleRec(defaults) {
_super.apply(this, arguments);
}
ScrollbarStyleRec.attributesToDeclare = function () {
return [
this.attr("Style", "styleAttr", "Style", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ScrollbarStyleRec.fromStructure = function (str) {
return new ScrollbarStyleRec(new ScrollbarStyleRec.RecordClass({
styleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ScrollbarStyleRec.init();
return ScrollbarStyleRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ScrollbarStyleRec = ScrollbarStyleRec;

});
define("OutSystemsUI.model$TriggerRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TriggerRec = (function (_super) {
__extends(TriggerRec, _super);
function TriggerRec(defaults) {
_super.apply(this, arguments);
}
TriggerRec.attributesToDeclare = function () {
return [
this.attr("Trigger", "triggerAttr", "Trigger", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TriggerRec.fromStructure = function (str) {
return new TriggerRec(new TriggerRec.RecordClass({
triggerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TriggerRec.init();
return TriggerRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.TriggerRec = TriggerRec;

});
define("OutSystemsUI.model$TriggerList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TriggerRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TriggerList = (function (_super) {
__extends(TriggerList, _super);
function TriggerList(defaults) {
_super.apply(this, arguments);
}
TriggerList.itemType = OutSystemsUIModel.TriggerRec;
return TriggerList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.TriggerList = TriggerList;

});
define("OutSystemsUI.model$AutoplayRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AutoplayRec = (function (_super) {
__extends(AutoplayRec, _super);
function AutoplayRec(defaults) {
_super.apply(this, arguments);
}
AutoplayRec.attributesToDeclare = function () {
return [
this.attr("Autoplay", "autoplayAttr", "Autoplay", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AutoplayRec.fromStructure = function (str) {
return new AutoplayRec(new AutoplayRec.RecordClass({
autoplayAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AutoplayRec.init();
return AutoplayRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.AutoplayRec = AutoplayRec;

});
define("OutSystemsUI.model$AutoplayRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$AutoplayRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AutoplayRecord = (function (_super) {
__extends(AutoplayRecord, _super);
function AutoplayRecord(defaults) {
_super.apply(this, arguments);
}
AutoplayRecord.attributesToDeclare = function () {
return [
this.attr("Autoplay", "autoplayAttr", "Autoplay", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.AutoplayRec());
}, true, OutSystemsUIModel.AutoplayRec)
].concat(_super.attributesToDeclare.call(this));
};
AutoplayRecord.fromStructure = function (str) {
return new AutoplayRecord(new AutoplayRecord.RecordClass({
autoplayAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AutoplayRecord._isAnonymousRecord = true;
AutoplayRecord.UniqueId = "c6831d06-e579-de4e-dbcf-59e128b60b13";
AutoplayRecord.init();
return AutoplayRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.AutoplayRecord = AutoplayRecord;

});
define("OutSystemsUI.model$AutoplayRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$AutoplayRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AutoplayRecordList = (function (_super) {
__extends(AutoplayRecordList, _super);
function AutoplayRecordList(defaults) {
_super.apply(this, arguments);
}
AutoplayRecordList.itemType = OutSystemsUIModel.AutoplayRecord;
return AutoplayRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.AutoplayRecordList = AutoplayRecordList;

});
define("OutSystemsUI.model$DropdownProviderRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownProviderRec = (function (_super) {
__extends(DropdownProviderRec, _super);
function DropdownProviderRec(defaults) {
_super.apply(this, arguments);
}
DropdownProviderRec.attributesToDeclare = function () {
return [
this.attr("Provider", "providerAttr", "Provider", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DropdownProviderRec.fromStructure = function (str) {
return new DropdownProviderRec(new DropdownProviderRec.RecordClass({
providerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownProviderRec.init();
return DropdownProviderRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DropdownProviderRec = DropdownProviderRec;

});
define("OutSystemsUI.model$DropdownProviderList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownProviderRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownProviderList = (function (_super) {
__extends(DropdownProviderList, _super);
function DropdownProviderList(defaults) {
_super.apply(this, arguments);
}
DropdownProviderList.itemType = OutSystemsUIModel.DropdownProviderRec;
return DropdownProviderList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DropdownProviderList = DropdownProviderList;

});
define("OutSystemsUI.model$DatePickerRange_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerRange_InternalConfigRec = (function (_super) {
__extends(DatePickerRange_InternalConfigRec, _super);
function DatePickerRange_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
DatePickerRange_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("DateFormat", "dateFormatAttr", "DateFormat", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("InitialStartDate", "initialStartDateAttr", "InitialStartDate", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("InitialEndDate", "initialEndDateAttr", "InitialEndDate", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ShowTodayButton", "showTodayButtonAttr", "ShowTodayButton", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("FirstWeekDay", "firstWeekDayAttr", "FirstWeekDay", false, false, OS.Types.Integer, function () {
return OutSystemsUIModel.staticEntities.datePickerWeekDay.sunday;
}, true), 
this.attr("MinDate", "minDateAttr", "MinDate", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MaxDate", "maxDateAttr", "MaxDate", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ShowWeekNumbers", "showWeekNumbersAttr", "ShowWeekNumbers", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerRange_InternalConfigRec.init();
return DatePickerRange_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DatePickerRange_InternalConfigRec = DatePickerRange_InternalConfigRec;

});
define("OutSystemsUI.model$DatePickerRange_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerRange_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerRange_InternalConfigRecord = (function (_super) {
__extends(DatePickerRange_InternalConfigRecord, _super);
function DatePickerRange_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerRange_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerRange_InternalConfig", "datePickerRange_InternalConfigAttr", "DatePickerRange_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DatePickerRange_InternalConfigRec());
}, true, OutSystemsUIModel.DatePickerRange_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerRange_InternalConfigRecord.fromStructure = function (str) {
return new DatePickerRange_InternalConfigRecord(new DatePickerRange_InternalConfigRecord.RecordClass({
datePickerRange_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerRange_InternalConfigRecord._isAnonymousRecord = true;
DatePickerRange_InternalConfigRecord.UniqueId = "1d16add6-c65a-9959-67ac-402e66fde3ff";
DatePickerRange_InternalConfigRecord.init();
return DatePickerRange_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DatePickerRange_InternalConfigRecord = DatePickerRange_InternalConfigRecord;

});
define("OutSystemsUI.model$BooleanTypesRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$BooleanTypesRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var BooleanTypesRecord = (function (_super) {
__extends(BooleanTypesRecord, _super);
function BooleanTypesRecord(defaults) {
_super.apply(this, arguments);
}
BooleanTypesRecord.attributesToDeclare = function () {
return [
this.attr("BooleanTypes", "booleanTypesAttr", "BooleanTypes", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.BooleanTypesRec());
}, true, OutSystemsUIModel.BooleanTypesRec)
].concat(_super.attributesToDeclare.call(this));
};
BooleanTypesRecord.fromStructure = function (str) {
return new BooleanTypesRecord(new BooleanTypesRecord.RecordClass({
booleanTypesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BooleanTypesRecord._isAnonymousRecord = true;
BooleanTypesRecord.UniqueId = "1ea63146-d7f1-d969-afc2-06832e751192";
BooleanTypesRecord.init();
return BooleanTypesRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.BooleanTypesRecord = BooleanTypesRecord;

});
define("OutSystemsUI.model$ListNavigationRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ListNavigationRec = (function (_super) {
__extends(ListNavigationRec, _super);
function ListNavigationRec(defaults) {
_super.apply(this, arguments);
}
ListNavigationRec.attributesToDeclare = function () {
return [
this.attr("Page", "pageAttr", "Page", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("StartIndex", "startIndexAttr", "StartIndex", false, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ListNavigationRec.init();
return ListNavigationRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ListNavigationRec = ListNavigationRec;

});
define("OutSystemsUI.model$ListNavigationRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ListNavigationRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ListNavigationRecord = (function (_super) {
__extends(ListNavigationRecord, _super);
function ListNavigationRecord(defaults) {
_super.apply(this, arguments);
}
ListNavigationRecord.attributesToDeclare = function () {
return [
this.attr("ListNavigation", "listNavigationAttr", "ListNavigation", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ListNavigationRec());
}, true, OutSystemsUIModel.ListNavigationRec)
].concat(_super.attributesToDeclare.call(this));
};
ListNavigationRecord.fromStructure = function (str) {
return new ListNavigationRecord(new ListNavigationRecord.RecordClass({
listNavigationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ListNavigationRecord._isAnonymousRecord = true;
ListNavigationRecord.UniqueId = "5b37cd2b-c5a2-79c3-cc9b-8640efcc6427";
ListNavigationRecord.init();
return ListNavigationRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ListNavigationRecord = ListNavigationRecord;

});
define("OutSystemsUI.model$ListNavigationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ListNavigationRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ListNavigationRecordList = (function (_super) {
__extends(ListNavigationRecordList, _super);
function ListNavigationRecordList(defaults) {
_super.apply(this, arguments);
}
ListNavigationRecordList.itemType = OutSystemsUIModel.ListNavigationRecord;
return ListNavigationRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ListNavigationRecordList = ListNavigationRecordList;

});
define("OutSystemsUI.model$AccordionIconPositionRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AccordionIconPositionRec = (function (_super) {
__extends(AccordionIconPositionRec, _super);
function AccordionIconPositionRec(defaults) {
_super.apply(this, arguments);
}
AccordionIconPositionRec.attributesToDeclare = function () {
return [
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AccordionIconPositionRec.fromStructure = function (str) {
return new AccordionIconPositionRec(new AccordionIconPositionRec.RecordClass({
labelAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccordionIconPositionRec.init();
return AccordionIconPositionRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.AccordionIconPositionRec = AccordionIconPositionRec;

});
define("OutSystemsUI.model$AccordionIconPositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$AccordionIconPositionRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AccordionIconPositionList = (function (_super) {
__extends(AccordionIconPositionList, _super);
function AccordionIconPositionList(defaults) {
_super.apply(this, arguments);
}
AccordionIconPositionList.itemType = OutSystemsUIModel.AccordionIconPositionRec;
return AccordionIconPositionList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.AccordionIconPositionList = AccordionIconPositionList;

});
define("OutSystemsUI.model$Tabs_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Tabs_InternalConfigRec = (function (_super) {
__extends(Tabs_InternalConfigRec, _super);
function Tabs_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
Tabs_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("StartingTab", "startingTabAttr", "StartingTab", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("TabsOrientation", "tabsOrientationAttr", "TabsOrientation", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.orientation.horizontal;
}, true), 
this.attr("TabsVerticalPosition", "tabsVerticalPositionAttr", "TabsVerticalPosition", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.direction.left;
}, true), 
this.attr("Height", "heightAttr", "Height", false, false, OS.Types.Text, function () {
return "auto";
}, true), 
this.attr("JustifyHeaders", "justifyHeadersAttr", "JustifyHeaders", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("ContentAutoHeight", "contentAutoHeightAttr", "ContentAutoHeight", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Tabs_InternalConfigRec.init();
return Tabs_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.Tabs_InternalConfigRec = Tabs_InternalConfigRec;

});
define("OutSystemsUI.model$NoUiSliderConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$NoUiSliderConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var NoUiSliderConfigsList = (function (_super) {
__extends(NoUiSliderConfigsList, _super);
function NoUiSliderConfigsList(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigsList.itemType = OutSystemsUIModel.NoUiSliderConfigsRec;
return NoUiSliderConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.NoUiSliderConfigsList = NoUiSliderConfigsList;

});
define("OutSystemsUI.model$TabsContentItem_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TabsContentItem_InternalConfigRec = (function (_super) {
__extends(TabsContentItem_InternalConfigRec, _super);
function TabsContentItem_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
TabsContentItem_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TabsContentItem_InternalConfigRec.init();
return TabsContentItem_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.TabsContentItem_InternalConfigRec = TabsContentItem_InternalConfigRec;

});
define("OutSystemsUI.model$TabsContentItem_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TabsContentItem_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TabsContentItem_InternalConfigList = (function (_super) {
__extends(TabsContentItem_InternalConfigList, _super);
function TabsContentItem_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
TabsContentItem_InternalConfigList.itemType = OutSystemsUIModel.TabsContentItem_InternalConfigRec;
return TabsContentItem_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.TabsContentItem_InternalConfigList = TabsContentItem_InternalConfigList;

});
define("OutSystemsUI.model$BulkActionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$BulkActionsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var BulkActionsRecord = (function (_super) {
__extends(BulkActionsRecord, _super);
function BulkActionsRecord(defaults) {
_super.apply(this, arguments);
}
BulkActionsRecord.attributesToDeclare = function () {
return [
this.attr("BulkActions", "bulkActionsAttr", "BulkActions", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.BulkActionsRec());
}, true, OutSystemsUIModel.BulkActionsRec)
].concat(_super.attributesToDeclare.call(this));
};
BulkActionsRecord.fromStructure = function (str) {
return new BulkActionsRecord(new BulkActionsRecord.RecordClass({
bulkActionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BulkActionsRecord._isAnonymousRecord = true;
BulkActionsRecord.UniqueId = "dedbf5dd-d64a-7345-04bf-3fd84b1363ec";
BulkActionsRecord.init();
return BulkActionsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.BulkActionsRecord = BulkActionsRecord;

});
define("OutSystemsUI.model$BulkActionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$BulkActionsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var BulkActionsRecordList = (function (_super) {
__extends(BulkActionsRecordList, _super);
function BulkActionsRecordList(defaults) {
_super.apply(this, arguments);
}
BulkActionsRecordList.itemType = OutSystemsUIModel.BulkActionsRecord;
return BulkActionsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.BulkActionsRecordList = BulkActionsRecordList;

});
define("OutSystemsUI.model$BreakColumnsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$BreakColumnsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var BreakColumnsRecord = (function (_super) {
__extends(BreakColumnsRecord, _super);
function BreakColumnsRecord(defaults) {
_super.apply(this, arguments);
}
BreakColumnsRecord.attributesToDeclare = function () {
return [
this.attr("BreakColumns", "breakColumnsAttr", "BreakColumns", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.BreakColumnsRec());
}, true, OutSystemsUIModel.BreakColumnsRec)
].concat(_super.attributesToDeclare.call(this));
};
BreakColumnsRecord.fromStructure = function (str) {
return new BreakColumnsRecord(new BreakColumnsRecord.RecordClass({
breakColumnsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BreakColumnsRecord._isAnonymousRecord = true;
BreakColumnsRecord.UniqueId = "261685da-2c79-9bcc-3b48-73485e008694";
BreakColumnsRecord.init();
return BreakColumnsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.BreakColumnsRecord = BreakColumnsRecord;

});
define("OutSystemsUI.model$MonthYearRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MonthYearRec = (function (_super) {
__extends(MonthYearRec, _super);
function MonthYearRec(defaults) {
_super.apply(this, arguments);
}
MonthYearRec.attributesToDeclare = function () {
return [
this.attr("Month", "monthAttr", "Month", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Year", "yearAttr", "Year", false, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MonthYearRec.init();
return MonthYearRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.MonthYearRec = MonthYearRec;

});
define("OutSystemsUI.model$MonthPicker_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$MonthYearRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MonthPicker_InternalConfigRec = (function (_super) {
__extends(MonthPicker_InternalConfigRec, _super);
function MonthPicker_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
MonthPicker_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("DateFormat", "dateFormatAttr", "DateFormat", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("MinMonth", "minMonthAttr", "MinMonth", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.MonthYearRec());
}, true, OutSystemsUIModel.MonthYearRec), 
this.attr("InitialMonth", "initialMonthAttr", "InitialMonth", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.MonthYearRec());
}, true, OutSystemsUIModel.MonthYearRec), 
this.attr("MaxMonth", "maxMonthAttr", "MaxMonth", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.MonthYearRec());
}, true, OutSystemsUIModel.MonthYearRec), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MonthPicker_InternalConfigRec.init();
return MonthPicker_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.MonthPicker_InternalConfigRec = MonthPicker_InternalConfigRec;

});
define("OutSystemsUI.model$MonthPicker_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$MonthPicker_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MonthPicker_InternalConfigList = (function (_super) {
__extends(MonthPicker_InternalConfigList, _super);
function MonthPicker_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
MonthPicker_InternalConfigList.itemType = OutSystemsUIModel.MonthPicker_InternalConfigRec;
return MonthPicker_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.MonthPicker_InternalConfigList = MonthPicker_InternalConfigList;

});
define("OutSystemsUI.model$BottomSheet_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$BottomSheet_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var BottomSheet_InternalConfigRecord = (function (_super) {
__extends(BottomSheet_InternalConfigRecord, _super);
function BottomSheet_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
BottomSheet_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("BottomSheet_InternalConfig", "bottomSheet_InternalConfigAttr", "BottomSheet_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.BottomSheet_InternalConfigRec());
}, true, OutSystemsUIModel.BottomSheet_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
BottomSheet_InternalConfigRecord.fromStructure = function (str) {
return new BottomSheet_InternalConfigRecord(new BottomSheet_InternalConfigRecord.RecordClass({
bottomSheet_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BottomSheet_InternalConfigRecord._isAnonymousRecord = true;
BottomSheet_InternalConfigRecord.UniqueId = "a2f63a3e-2700-0ea7-c800-cf727f8ecfba";
BottomSheet_InternalConfigRecord.init();
return BottomSheet_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.BottomSheet_InternalConfigRecord = BottomSheet_InternalConfigRecord;

});
define("OutSystemsUI.model$BottomSheet_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$BottomSheet_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var BottomSheet_InternalConfigRecordList = (function (_super) {
__extends(BottomSheet_InternalConfigRecordList, _super);
function BottomSheet_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
BottomSheet_InternalConfigRecordList.itemType = OutSystemsUIModel.BottomSheet_InternalConfigRecord;
return BottomSheet_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.BottomSheet_InternalConfigRecordList = BottomSheet_InternalConfigRecordList;

});
define("OutSystemsUI.model$AccordionItem_InternalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AccordionItem_InternalConfigsRec = (function (_super) {
__extends(AccordionItem_InternalConfigsRec, _super);
function AccordionItem_InternalConfigsRec(defaults) {
_super.apply(this, arguments);
}
AccordionItem_InternalConfigsRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("StartsExpanded", "startsExpandedAttr", "StartsExpanded", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("Icon", "iconAttr", "Icon", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("IconPosition", "iconPositionAttr", "IconPosition", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AccordionItem_InternalConfigsRec.init();
return AccordionItem_InternalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.AccordionItem_InternalConfigsRec = AccordionItem_InternalConfigsRec;

});
define("OutSystemsUI.model$AccordionItem_InternalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$AccordionItem_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AccordionItem_InternalConfigsRecord = (function (_super) {
__extends(AccordionItem_InternalConfigsRecord, _super);
function AccordionItem_InternalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
AccordionItem_InternalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("AccordionItem_InternalConfigs", "accordionItem_InternalConfigsAttr", "AccordionItem_InternalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.AccordionItem_InternalConfigsRec());
}, true, OutSystemsUIModel.AccordionItem_InternalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
AccordionItem_InternalConfigsRecord.fromStructure = function (str) {
return new AccordionItem_InternalConfigsRecord(new AccordionItem_InternalConfigsRecord.RecordClass({
accordionItem_InternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccordionItem_InternalConfigsRecord._isAnonymousRecord = true;
AccordionItem_InternalConfigsRecord.UniqueId = "28eb7999-f57c-a2ad-fa80-5d40364c85b5";
AccordionItem_InternalConfigsRecord.init();
return AccordionItem_InternalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.AccordionItem_InternalConfigsRecord = AccordionItem_InternalConfigsRecord;

});
define("OutSystemsUI.model$AccordionItem_InternalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$AccordionItem_InternalConfigsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AccordionItem_InternalConfigsRecordList = (function (_super) {
__extends(AccordionItem_InternalConfigsRecordList, _super);
function AccordionItem_InternalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
AccordionItem_InternalConfigsRecordList.itemType = OutSystemsUIModel.AccordionItem_InternalConfigsRecord;
return AccordionItem_InternalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.AccordionItem_InternalConfigsRecordList = AccordionItem_InternalConfigsRecordList;

});
define("OutSystemsUI.model$SizeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SizeRec = (function (_super) {
__extends(SizeRec, _super);
function SizeRec(defaults) {
_super.apply(this, arguments);
}
SizeRec.attributesToDeclare = function () {
return [
this.attr("Size", "sizeAttr", "Size", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SizeRec.fromStructure = function (str) {
return new SizeRec(new SizeRec.RecordClass({
sizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SizeRec.init();
return SizeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.SizeRec = SizeRec;

});
define("OutSystemsUI.model$SizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SizeRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SizeRecord = (function (_super) {
__extends(SizeRecord, _super);
function SizeRecord(defaults) {
_super.apply(this, arguments);
}
SizeRecord.attributesToDeclare = function () {
return [
this.attr("Size", "sizeAttr", "Size", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SizeRec());
}, true, OutSystemsUIModel.SizeRec)
].concat(_super.attributesToDeclare.call(this));
};
SizeRecord.fromStructure = function (str) {
return new SizeRecord(new SizeRecord.RecordClass({
sizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SizeRecord._isAnonymousRecord = true;
SizeRecord.UniqueId = "ca426fec-0751-e5b6-dcf0-15e9fdc2120e";
SizeRecord.init();
return SizeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.SizeRecord = SizeRecord;

});
define("OutSystemsUI.model$SizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SizeRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SizeRecordList = (function (_super) {
__extends(SizeRecordList, _super);
function SizeRecordList(defaults) {
_super.apply(this, arguments);
}
SizeRecordList.itemType = OutSystemsUIModel.SizeRecord;
return SizeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.SizeRecordList = SizeRecordList;

});
define("OutSystemsUI.model$GradientColorRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var GradientColorRec = (function (_super) {
__extends(GradientColorRec, _super);
function GradientColorRec(defaults) {
_super.apply(this, arguments);
}
GradientColorRec.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "Color", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Percentage", "percentageAttr", "Percentage", false, false, OS.Types.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(-1);
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GradientColorRec.init();
return GradientColorRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.GradientColorRec = GradientColorRec;

});
define("OutSystemsUI.model$ErrorMessageRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ErrorMessageRec = (function (_super) {
__extends(ErrorMessageRec, _super);
function ErrorMessageRec(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "code", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "message", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ErrorMessageRec.init();
return ErrorMessageRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ErrorMessageRec = ErrorMessageRec;

});
define("OutSystemsUI.model$ErrorMessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ErrorMessageRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ErrorMessageRecord = (function (_super) {
__extends(ErrorMessageRecord, _super);
function ErrorMessageRecord(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRecord.attributesToDeclare = function () {
return [
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ErrorMessageRec());
}, true, OutSystemsUIModel.ErrorMessageRec)
].concat(_super.attributesToDeclare.call(this));
};
ErrorMessageRecord.fromStructure = function (str) {
return new ErrorMessageRecord(new ErrorMessageRecord.RecordClass({
errorMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ErrorMessageRecord._isAnonymousRecord = true;
ErrorMessageRecord.UniqueId = "27b5a164-e828-de9b-9068-6831c7908b4a";
ErrorMessageRecord.init();
return ErrorMessageRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ErrorMessageRecord = ErrorMessageRecord;

});
define("OutSystemsUI.model$Carousel_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Carousel_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Carousel_InternalConfigList = (function (_super) {
__extends(Carousel_InternalConfigList, _super);
function Carousel_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
Carousel_InternalConfigList.itemType = OutSystemsUIModel.Carousel_InternalConfigRec;
return Carousel_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.Carousel_InternalConfigList = Carousel_InternalConfigList;

});
define("OutSystemsUI.model$AnimatedLabel_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AnimatedLabel_InternalConfigRec = (function (_super) {
__extends(AnimatedLabel_InternalConfigRec, _super);
function AnimatedLabel_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
AnimatedLabel_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AnimatedLabel_InternalConfigRec.init();
return AnimatedLabel_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.AnimatedLabel_InternalConfigRec = AnimatedLabel_InternalConfigRec;

});
define("OutSystemsUI.model$AnimatedLabel_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$AnimatedLabel_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AnimatedLabel_InternalConfigList = (function (_super) {
__extends(AnimatedLabel_InternalConfigList, _super);
function AnimatedLabel_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
AnimatedLabel_InternalConfigList.itemType = OutSystemsUIModel.AnimatedLabel_InternalConfigRec;
return AnimatedLabel_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.AnimatedLabel_InternalConfigList = AnimatedLabel_InternalConfigList;

});
define("OutSystemsUI.model$Tabs_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Tabs_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Tabs_InternalConfigList = (function (_super) {
__extends(Tabs_InternalConfigList, _super);
function Tabs_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
Tabs_InternalConfigList.itemType = OutSystemsUIModel.Tabs_InternalConfigRec;
return Tabs_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.Tabs_InternalConfigList = Tabs_InternalConfigList;

});
define("OutSystemsUI.model$DropdownOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownOptionalConfigsRec = (function (_super) {
__extends(DropdownOptionalConfigsRec, _super);
function DropdownOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
DropdownOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("AllowMultipleSelection", "allowMultipleSelectionAttr", "AllowMultipleSelection", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("NoResultsText", "noResultsTextAttr", "NoResultsText", false, false, OS.Types.Text, function () {
return "There are no options to show.";
}, true), 
this.attr("SearchPrompt", "searchPromptAttr", "SearchPrompt", false, false, OS.Types.Text, function () {
return "Search...";
}, true), 
this.attr("NoOptionsText", "noOptionsTextAttr", "NoOptionsText", false, false, OS.Types.Text, function () {
return "There are no options to show.";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DropdownOptionalConfigsRec.init();
return DropdownOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DropdownOptionalConfigsRec = DropdownOptionalConfigsRec;

});
define("OutSystemsUI.model$DropdownOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownOptionalConfigsRecord = (function (_super) {
__extends(DropdownOptionalConfigsRecord, _super);
function DropdownOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DropdownOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DropdownOptionalConfigs", "dropdownOptionalConfigsAttr", "DropdownOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownOptionalConfigsRec());
}, true, OutSystemsUIModel.DropdownOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownOptionalConfigsRecord.fromStructure = function (str) {
return new DropdownOptionalConfigsRecord(new DropdownOptionalConfigsRecord.RecordClass({
dropdownOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownOptionalConfigsRecord._isAnonymousRecord = true;
DropdownOptionalConfigsRecord.UniqueId = "2ac88c51-f2d9-ed90-8454-e6a06ffe188e";
DropdownOptionalConfigsRecord.init();
return DropdownOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DropdownOptionalConfigsRecord = DropdownOptionalConfigsRecord;

});
define("OutSystemsUI.model$ButtonLoading_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ButtonLoading_InternalConfigRec = (function (_super) {
__extends(ButtonLoading_InternalConfigRec, _super);
function ButtonLoading_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
ButtonLoading_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("IsLoading", "isLoadingAttr", "IsLoading", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("ShowLoadingAndLabel", "showLoadingAndLabelAttr", "ShowLoadingAndLabel", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ButtonLoading_InternalConfigRec.init();
return ButtonLoading_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ButtonLoading_InternalConfigRec = ButtonLoading_InternalConfigRec;

});
define("OutSystemsUI.model$SpeedRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SpeedRec = (function (_super) {
__extends(SpeedRec, _super);
function SpeedRec(defaults) {
_super.apply(this, arguments);
}
SpeedRec.attributesToDeclare = function () {
return [
this.attr("Speed", "speedAttr", "Speed", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SpeedRec.fromStructure = function (str) {
return new SpeedRec(new SpeedRec.RecordClass({
speedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpeedRec.init();
return SpeedRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.SpeedRec = SpeedRec;

});
define("OutSystemsUI.model$MessageStatusRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$MessageStatusRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MessageStatusRecord = (function (_super) {
__extends(MessageStatusRecord, _super);
function MessageStatusRecord(defaults) {
_super.apply(this, arguments);
}
MessageStatusRecord.attributesToDeclare = function () {
return [
this.attr("MessageStatus", "messageStatusAttr", "MessageStatus", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.MessageStatusRec());
}, true, OutSystemsUIModel.MessageStatusRec)
].concat(_super.attributesToDeclare.call(this));
};
MessageStatusRecord.fromStructure = function (str) {
return new MessageStatusRecord(new MessageStatusRecord.RecordClass({
messageStatusAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MessageStatusRecord._isAnonymousRecord = true;
MessageStatusRecord.UniqueId = "63c659b6-dc55-4b0b-4f81-d60382bf5fd6";
MessageStatusRecord.init();
return MessageStatusRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.MessageStatusRecord = MessageStatusRecord;

});
define("OutSystemsUI.model$MessageStatusRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$MessageStatusRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MessageStatusRecordList = (function (_super) {
__extends(MessageStatusRecordList, _super);
function MessageStatusRecordList(defaults) {
_super.apply(this, arguments);
}
MessageStatusRecordList.itemType = OutSystemsUIModel.MessageStatusRecord;
return MessageStatusRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.MessageStatusRecordList = MessageStatusRecordList;

});
define("OutSystemsUI.model$MenuActionRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MenuActionRec = (function (_super) {
__extends(MenuActionRec, _super);
function MenuActionRec(defaults) {
_super.apply(this, arguments);
}
MenuActionRec.attributesToDeclare = function () {
return [
this.attr("MenuAction", "menuActionAttr", "MenuAction", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MenuActionRec.fromStructure = function (str) {
return new MenuActionRec(new MenuActionRec.RecordClass({
menuActionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MenuActionRec.init();
return MenuActionRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.MenuActionRec = MenuActionRec;

});
define("OutSystemsUI.model$MenuActionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$MenuActionRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MenuActionRecord = (function (_super) {
__extends(MenuActionRecord, _super);
function MenuActionRecord(defaults) {
_super.apply(this, arguments);
}
MenuActionRecord.attributesToDeclare = function () {
return [
this.attr("MenuAction", "menuActionAttr", "MenuAction", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.MenuActionRec());
}, true, OutSystemsUIModel.MenuActionRec)
].concat(_super.attributesToDeclare.call(this));
};
MenuActionRecord.fromStructure = function (str) {
return new MenuActionRecord(new MenuActionRecord.RecordClass({
menuActionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MenuActionRecord._isAnonymousRecord = true;
MenuActionRecord.UniqueId = "954cd123-1210-e70f-33f1-84017bf580ac";
MenuActionRecord.init();
return MenuActionRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.MenuActionRecord = MenuActionRecord;

});
define("OutSystemsUI.model$MenuActionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$MenuActionRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MenuActionRecordList = (function (_super) {
__extends(MenuActionRecordList, _super);
function MenuActionRecordList(defaults) {
_super.apply(this, arguments);
}
MenuActionRecordList.itemType = OutSystemsUIModel.MenuActionRecord;
return MenuActionRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.MenuActionRecordList = MenuActionRecordList;

});
define("OutSystemsUI.model$RangeSliderProviderRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var RangeSliderProviderRec = (function (_super) {
__extends(RangeSliderProviderRec, _super);
function RangeSliderProviderRec(defaults) {
_super.apply(this, arguments);
}
RangeSliderProviderRec.attributesToDeclare = function () {
return [
this.attr("Provider", "providerAttr", "Provider", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RangeSliderProviderRec.fromStructure = function (str) {
return new RangeSliderProviderRec(new RangeSliderProviderRec.RecordClass({
providerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RangeSliderProviderRec.init();
return RangeSliderProviderRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.RangeSliderProviderRec = RangeSliderProviderRec;

});
define("OutSystemsUI.model$RangeSliderProviderList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$RangeSliderProviderRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var RangeSliderProviderList = (function (_super) {
__extends(RangeSliderProviderList, _super);
function RangeSliderProviderList(defaults) {
_super.apply(this, arguments);
}
RangeSliderProviderList.itemType = OutSystemsUIModel.RangeSliderProviderRec;
return RangeSliderProviderList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.RangeSliderProviderList = RangeSliderProviderList;

});
define("OutSystemsUI.model$DatePickerRangeOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerRangeOptionalConfigsRec = (function (_super) {
__extends(DatePickerRangeOptionalConfigsRec, _super);
function DatePickerRangeOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
DatePickerRangeOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("InitialStartDate", "initialStartDateAttr", "InitialStartDate", false, false, OS.Types.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("InitialEndDate", "initialEndDateAttr", "InitialEndDate", false, false, OS.Types.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MinDate", "minDateAttr", "MinDate", false, false, OS.Types.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MaxDate", "maxDateAttr", "MaxDate", false, false, OS.Types.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("FirstWeekDay", "firstWeekDayAttr", "FirstWeekDay", false, false, OS.Types.Integer, function () {
return OutSystemsUIModel.staticEntities.datePickerWeekDay.sunday;
}, true), 
this.attr("ShowWeekNumbers", "showWeekNumbersAttr", "ShowWeekNumbers", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerRangeOptionalConfigsRec.init();
return DatePickerRangeOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DatePickerRangeOptionalConfigsRec = DatePickerRangeOptionalConfigsRec;

});
define("OutSystemsUI.model$DatePickerRangeOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerRangeOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerRangeOptionalConfigsRecord = (function (_super) {
__extends(DatePickerRangeOptionalConfigsRecord, _super);
function DatePickerRangeOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerRangeOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerRangeOptionalConfigs", "datePickerRangeOptionalConfigsAttr", "DatePickerRangeOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DatePickerRangeOptionalConfigsRec());
}, true, OutSystemsUIModel.DatePickerRangeOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerRangeOptionalConfigsRecord.fromStructure = function (str) {
return new DatePickerRangeOptionalConfigsRecord(new DatePickerRangeOptionalConfigsRecord.RecordClass({
datePickerRangeOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerRangeOptionalConfigsRecord._isAnonymousRecord = true;
DatePickerRangeOptionalConfigsRecord.UniqueId = "310dae2b-4d3a-1f1d-ed75-70a6ee74f16e";
DatePickerRangeOptionalConfigsRecord.init();
return DatePickerRangeOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DatePickerRangeOptionalConfigsRecord = DatePickerRangeOptionalConfigsRecord;

});
define("OutSystemsUI.model$DropdownTagsOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownTagsOptionalConfigsRec = (function (_super) {
__extends(DropdownTagsOptionalConfigsRec, _super);
function DropdownTagsOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
DropdownTagsOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("NoResultsText", "noResultsTextAttr", "NoResultsText", false, false, OS.Types.Text, function () {
return "There are no options to show.";
}, true), 
this.attr("SearchPrompt", "searchPromptAttr", "SearchPrompt", false, false, OS.Types.Text, function () {
return "Search...";
}, true), 
this.attr("NoOptionsText", "noOptionsTextAttr", "NoOptionsText", false, false, OS.Types.Text, function () {
return "There are no options to show.";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DropdownTagsOptionalConfigsRec.init();
return DropdownTagsOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DropdownTagsOptionalConfigsRec = DropdownTagsOptionalConfigsRec;

});
define("OutSystemsUI.model$DropdownTagsOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownTagsOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownTagsOptionalConfigsRecord = (function (_super) {
__extends(DropdownTagsOptionalConfigsRecord, _super);
function DropdownTagsOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DropdownTagsOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DropdownTagsOptionalConfigs", "dropdownTagsOptionalConfigsAttr", "DropdownTagsOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownTagsOptionalConfigsRec());
}, true, OutSystemsUIModel.DropdownTagsOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownTagsOptionalConfigsRecord.fromStructure = function (str) {
return new DropdownTagsOptionalConfigsRecord(new DropdownTagsOptionalConfigsRecord.RecordClass({
dropdownTagsOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownTagsOptionalConfigsRecord._isAnonymousRecord = true;
DropdownTagsOptionalConfigsRecord.UniqueId = "4d01ba74-7615-bc6d-c01c-586f0b43450a";
DropdownTagsOptionalConfigsRecord.init();
return DropdownTagsOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DropdownTagsOptionalConfigsRecord = DropdownTagsOptionalConfigsRecord;

});
define("OutSystemsUI.model$DropdownTagsOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownTagsOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownTagsOptionalConfigsRecordList = (function (_super) {
__extends(DropdownTagsOptionalConfigsRecordList, _super);
function DropdownTagsOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownTagsOptionalConfigsRecordList.itemType = OutSystemsUIModel.DropdownTagsOptionalConfigsRecord;
return DropdownTagsOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DropdownTagsOptionalConfigsRecordList = DropdownTagsOptionalConfigsRecordList;

});
define("OutSystemsUI.model$SplideProvideri18nRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SplideProvideri18nRec = (function (_super) {
__extends(SplideProvideri18nRec, _super);
function SplideProvideri18nRec(defaults) {
_super.apply(this, arguments);
}
SplideProvideri18nRec.attributesToDeclare = function () {
return [
this.attr("Key", "keyAttr", "Key", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Text", "textAttr", "Text", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SplideProvideri18nRec.init();
return SplideProvideri18nRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.SplideProvideri18nRec = SplideProvideri18nRec;

});
define("OutSystemsUI.model$DatePickerOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerOptionalConfigsRec = (function (_super) {
__extends(DatePickerOptionalConfigsRec, _super);
function DatePickerOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
DatePickerOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("InitialDate", "initialDateAttr", "InitialDate", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MinDate", "minDateAttr", "MinDate", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MaxDate", "maxDateAttr", "MaxDate", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("FirstWeekDay", "firstWeekDayAttr", "FirstWeekDay", false, false, OS.Types.Integer, function () {
return OutSystemsUIModel.staticEntities.datePickerWeekDay.sunday;
}, true), 
this.attr("ShowWeekNumbers", "showWeekNumbersAttr", "ShowWeekNumbers", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerOptionalConfigsRec.init();
return DatePickerOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DatePickerOptionalConfigsRec = DatePickerOptionalConfigsRec;

});
define("OutSystemsUI.model$DatePickerOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerOptionalConfigsRecord = (function (_super) {
__extends(DatePickerOptionalConfigsRecord, _super);
function DatePickerOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerOptionalConfigs", "datePickerOptionalConfigsAttr", "DatePickerOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DatePickerOptionalConfigsRec());
}, true, OutSystemsUIModel.DatePickerOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerOptionalConfigsRecord.fromStructure = function (str) {
return new DatePickerOptionalConfigsRecord(new DatePickerOptionalConfigsRecord.RecordClass({
datePickerOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerOptionalConfigsRecord._isAnonymousRecord = true;
DatePickerOptionalConfigsRecord.UniqueId = "327e36bc-408e-dd04-6ca4-0df8a4e734bb";
DatePickerOptionalConfigsRecord.init();
return DatePickerOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DatePickerOptionalConfigsRecord = DatePickerOptionalConfigsRecord;

});
define("OutSystemsUI.model$ProgressCircle_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ProgressCircle_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProgressCircle_InternalConfigList = (function (_super) {
__extends(ProgressCircle_InternalConfigList, _super);
function ProgressCircle_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
ProgressCircle_InternalConfigList.itemType = OutSystemsUIModel.ProgressCircle_InternalConfigRec;
return ProgressCircle_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ProgressCircle_InternalConfigList = ProgressCircle_InternalConfigList;

});
define("OutSystemsUI.model$StackedCardsPositionRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var StackedCardsPositionRec = (function (_super) {
__extends(StackedCardsPositionRec, _super);
function StackedCardsPositionRec(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionRec.attributesToDeclare = function () {
return [
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
StackedCardsPositionRec.fromStructure = function (str) {
return new StackedCardsPositionRec(new StackedCardsPositionRec.RecordClass({
labelAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StackedCardsPositionRec.init();
return StackedCardsPositionRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.StackedCardsPositionRec = StackedCardsPositionRec;

});
define("OutSystemsUI.model$StackedCardsPositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$StackedCardsPositionRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var StackedCardsPositionList = (function (_super) {
__extends(StackedCardsPositionList, _super);
function StackedCardsPositionList(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionList.itemType = OutSystemsUIModel.StackedCardsPositionRec;
return StackedCardsPositionList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.StackedCardsPositionList = StackedCardsPositionList;

});
define("OutSystemsUI.model$SplideProviderClassesRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SplideProviderClassesRec = (function (_super) {
__extends(SplideProviderClassesRec, _super);
function SplideProviderClassesRec(defaults) {
_super.apply(this, arguments);
}
SplideProviderClassesRec.attributesToDeclare = function () {
return [
this.attr("Element", "elementAttr", "Element", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Class", "classAttr", "Class", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SplideProviderClassesRec.init();
return SplideProviderClassesRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.SplideProviderClassesRec = SplideProviderClassesRec;

});
define("OutSystemsUI.model$SplideProviderClassesList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SplideProviderClassesRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SplideProviderClassesList = (function (_super) {
__extends(SplideProviderClassesList, _super);
function SplideProviderClassesList(defaults) {
_super.apply(this, arguments);
}
SplideProviderClassesList.itemType = OutSystemsUIModel.SplideProviderClassesRec;
return SplideProviderClassesList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.SplideProviderClassesList = SplideProviderClassesList;

});
define("OutSystemsUI.model$ProgressBarOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProgressBarOptionalConfigsRec = (function (_super) {
__extends(ProgressBarOptionalConfigsRec, _super);
function ProgressBarOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
ProgressBarOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("Shape", "shapeAttr", "Shape", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.shape.rounded;
}, true), 
this.attr("AnimateInitialProgress", "animateInitialProgressAttr", "AnimateInitialProgress", false, false, OS.Types.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ProgressBarOptionalConfigsRec.init();
return ProgressBarOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ProgressBarOptionalConfigsRec = ProgressBarOptionalConfigsRec;

});
define("OutSystemsUI.model$ProgressBarOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ProgressBarOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProgressBarOptionalConfigsRecord = (function (_super) {
__extends(ProgressBarOptionalConfigsRecord, _super);
function ProgressBarOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
ProgressBarOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("ProgressBarOptionalConfigs", "progressBarOptionalConfigsAttr", "ProgressBarOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ProgressBarOptionalConfigsRec());
}, true, OutSystemsUIModel.ProgressBarOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
ProgressBarOptionalConfigsRecord.fromStructure = function (str) {
return new ProgressBarOptionalConfigsRecord(new ProgressBarOptionalConfigsRecord.RecordClass({
progressBarOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProgressBarOptionalConfigsRecord._isAnonymousRecord = true;
ProgressBarOptionalConfigsRecord.UniqueId = "3554b1e2-806a-5b82-7c45-7cdecc492d4a";
ProgressBarOptionalConfigsRecord.init();
return ProgressBarOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ProgressBarOptionalConfigsRecord = ProgressBarOptionalConfigsRecord;

});
define("OutSystemsUI.model$TextTextTextTextTextTextTextTextTextTextTextTextRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TextTextTextTextTextTextTextTextTextTextTextTextRecord = (function (_super) {
__extends(TextTextTextTextTextTextTextTextTextTextTextTextRecord, _super);
function TextTextTextTextTextTextTextTextTextTextTextTextRecord(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextTextTextTextTextTextTextTextRecord.attributesToDeclare = function () {
return [
this.attr("Month1", "month1Attr", "Month1", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Month10", "month10Attr", "Month10", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Month11", "month11Attr", "Month11", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Month12", "month12Attr", "Month12", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Month2", "month2Attr", "Month2", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Month3", "month3Attr", "Month3", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Month4", "month4Attr", "Month4", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Month5", "month5Attr", "Month5", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Month6", "month6Attr", "Month6", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Month7", "month7Attr", "Month7", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Month8", "month8Attr", "Month8", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Month9", "month9Attr", "Month9", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextTextTextTextTextTextTextTextTextTextTextTextRecord._isAnonymousRecord = true;
TextTextTextTextTextTextTextTextTextTextTextTextRecord.UniqueId = "35ce9df1-ad7a-8953-3b2e-8a49a8413520";
TextTextTextTextTextTextTextTextTextTextTextTextRecord.init();
return TextTextTextTextTextTextTextTextTextTextTextTextRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.TextTextTextTextTextTextTextTextTextTextTextTextRecord = TextTextTextTextTextTextTextTextTextTextTextTextRecord;

});
define("OutSystemsUI.model$ColumnBreakRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ColumnBreakRec = (function (_super) {
__extends(ColumnBreakRec, _super);
function ColumnBreakRec(defaults) {
_super.apply(this, arguments);
}
ColumnBreakRec.attributesToDeclare = function () {
return [
this.attr("ColumnBreak", "columnBreakAttr", "ColumnBreak", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ColumnBreakRec.fromStructure = function (str) {
return new ColumnBreakRec(new ColumnBreakRec.RecordClass({
columnBreakAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColumnBreakRec.init();
return ColumnBreakRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ColumnBreakRec = ColumnBreakRec;

});
define("OutSystemsUI.model$ColumnBreakList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ColumnBreakRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ColumnBreakList = (function (_super) {
__extends(ColumnBreakList, _super);
function ColumnBreakList(defaults) {
_super.apply(this, arguments);
}
ColumnBreakList.itemType = OutSystemsUIModel.ColumnBreakRec;
return ColumnBreakList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ColumnBreakList = ColumnBreakList;

});
define("OutSystemsUI.model$CarouselProviderRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var CarouselProviderRec = (function (_super) {
__extends(CarouselProviderRec, _super);
function CarouselProviderRec(defaults) {
_super.apply(this, arguments);
}
CarouselProviderRec.attributesToDeclare = function () {
return [
this.attr("Provider", "providerAttr", "Provider", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CarouselProviderRec.fromStructure = function (str) {
return new CarouselProviderRec(new CarouselProviderRec.RecordClass({
providerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselProviderRec.init();
return CarouselProviderRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.CarouselProviderRec = CarouselProviderRec;

});
define("OutSystemsUI.model$CarouselNavigationRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var CarouselNavigationRec = (function (_super) {
__extends(CarouselNavigationRec, _super);
function CarouselNavigationRec(defaults) {
_super.apply(this, arguments);
}
CarouselNavigationRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CarouselNavigationRec.fromStructure = function (str) {
return new CarouselNavigationRec(new CarouselNavigationRec.RecordClass({
typeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselNavigationRec.init();
return CarouselNavigationRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.CarouselNavigationRec = CarouselNavigationRec;

});
define("OutSystemsUI.model$CarouselNavigationRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$CarouselNavigationRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var CarouselNavigationRecord = (function (_super) {
__extends(CarouselNavigationRecord, _super);
function CarouselNavigationRecord(defaults) {
_super.apply(this, arguments);
}
CarouselNavigationRecord.attributesToDeclare = function () {
return [
this.attr("CarouselNavigation", "carouselNavigationAttr", "CarouselNavigation", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.CarouselNavigationRec());
}, true, OutSystemsUIModel.CarouselNavigationRec)
].concat(_super.attributesToDeclare.call(this));
};
CarouselNavigationRecord.fromStructure = function (str) {
return new CarouselNavigationRecord(new CarouselNavigationRecord.RecordClass({
carouselNavigationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselNavigationRecord._isAnonymousRecord = true;
CarouselNavigationRecord.UniqueId = "373fec8a-2329-a8b1-ecd5-5cf717893131";
CarouselNavigationRecord.init();
return CarouselNavigationRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.CarouselNavigationRecord = CarouselNavigationRecord;

});
define("OutSystemsUI.model$DatePickerProviderRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerProviderRec = (function (_super) {
__extends(DatePickerProviderRec, _super);
function DatePickerProviderRec(defaults) {
_super.apply(this, arguments);
}
DatePickerProviderRec.attributesToDeclare = function () {
return [
this.attr("Provider", "providerAttr", "Provider", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerProviderRec.fromStructure = function (str) {
return new DatePickerProviderRec(new DatePickerProviderRec.RecordClass({
providerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerProviderRec.init();
return DatePickerProviderRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DatePickerProviderRec = DatePickerProviderRec;

});
define("OutSystemsUI.model$DatePicker_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePicker_InternalConfigRec = (function (_super) {
__extends(DatePicker_InternalConfigRec, _super);
function DatePicker_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
DatePicker_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("DateFormat", "dateFormatAttr", "DateFormat", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("InitialDate", "initialDateAttr", "InitialDate", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("TimeFormat", "timeFormatAttr", "TimeFormat", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.datePickerTimeFormat.disabled;
}, true), 
this.attr("ShowTodayButton", "showTodayButtonAttr", "ShowTodayButton", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("FirstWeekDay", "firstWeekDayAttr", "FirstWeekDay", false, false, OS.Types.Integer, function () {
return OutSystemsUIModel.staticEntities.datePickerWeekDay.sunday;
}, true), 
this.attr("MinDate", "minDateAttr", "MinDate", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MaxDate", "maxDateAttr", "MaxDate", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ShowWeekNumbers", "showWeekNumbersAttr", "ShowWeekNumbers", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DatePicker_InternalConfigRec.init();
return DatePicker_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DatePicker_InternalConfigRec = DatePicker_InternalConfigRec;

});
define("OutSystemsUI.model$DatePicker_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePicker_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePicker_InternalConfigRecord = (function (_super) {
__extends(DatePicker_InternalConfigRecord, _super);
function DatePicker_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
DatePicker_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("DatePicker_InternalConfig", "datePicker_InternalConfigAttr", "DatePicker_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DatePicker_InternalConfigRec());
}, true, OutSystemsUIModel.DatePicker_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePicker_InternalConfigRecord.fromStructure = function (str) {
return new DatePicker_InternalConfigRecord(new DatePicker_InternalConfigRecord.RecordClass({
datePicker_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePicker_InternalConfigRecord._isAnonymousRecord = true;
DatePicker_InternalConfigRecord.UniqueId = "3af5daa8-009f-6f7f-8a09-f38255a62078";
DatePicker_InternalConfigRecord.init();
return DatePicker_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DatePicker_InternalConfigRecord = DatePicker_InternalConfigRecord;

});
define("OutSystemsUI.model$DEPRECATED_ColorRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DEPRECATED_ColorRec = (function (_super) {
__extends(DEPRECATED_ColorRec, _super);
function DEPRECATED_ColorRec(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_ColorRec.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "Color", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DEPRECATED_ColorRec.fromStructure = function (str) {
return new DEPRECATED_ColorRec(new DEPRECATED_ColorRec.RecordClass({
colorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DEPRECATED_ColorRec.init();
return DEPRECATED_ColorRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DEPRECATED_ColorRec = DEPRECATED_ColorRec;

});
define("OutSystemsUI.model$DEPRECATED_ColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DEPRECATED_ColorRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DEPRECATED_ColorList = (function (_super) {
__extends(DEPRECATED_ColorList, _super);
function DEPRECATED_ColorList(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_ColorList.itemType = OutSystemsUIModel.DEPRECATED_ColorRec;
return DEPRECATED_ColorList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DEPRECATED_ColorList = DEPRECATED_ColorList;

});
define("OutSystemsUI.model$DropdownItemRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownItemRec = (function (_super) {
__extends(DropdownItemRec, _super);
function DropdownItemRec(defaults) {
_super.apply(this, arguments);
}
DropdownItemRec.attributesToDeclare = function () {
return [
this.attr("Value", "valueAttr", "Value", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Text", "textAttr", "Text", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DropdownItemRec.init();
return DropdownItemRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DropdownItemRec = DropdownItemRec;

});
define("OutSystemsUI.model$ProgressBarOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ProgressBarOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProgressBarOptionalConfigsList = (function (_super) {
__extends(ProgressBarOptionalConfigsList, _super);
function ProgressBarOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
ProgressBarOptionalConfigsList.itemType = OutSystemsUIModel.ProgressBarOptionalConfigsRec;
return ProgressBarOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ProgressBarOptionalConfigsList = ProgressBarOptionalConfigsList;

});
define("OutSystemsUI.model$ScrollbarStyleRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ScrollbarStyleRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ScrollbarStyleRecord = (function (_super) {
__extends(ScrollbarStyleRecord, _super);
function ScrollbarStyleRecord(defaults) {
_super.apply(this, arguments);
}
ScrollbarStyleRecord.attributesToDeclare = function () {
return [
this.attr("ScrollbarStyle", "scrollbarStyleAttr", "ScrollbarStyle", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ScrollbarStyleRec());
}, true, OutSystemsUIModel.ScrollbarStyleRec)
].concat(_super.attributesToDeclare.call(this));
};
ScrollbarStyleRecord.fromStructure = function (str) {
return new ScrollbarStyleRecord(new ScrollbarStyleRecord.RecordClass({
scrollbarStyleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ScrollbarStyleRecord._isAnonymousRecord = true;
ScrollbarStyleRecord.UniqueId = "3d7c5be4-055c-8fe2-c227-afc40d8dee2f";
ScrollbarStyleRecord.init();
return ScrollbarStyleRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ScrollbarStyleRecord = ScrollbarStyleRecord;

});
define("OutSystemsUI.model$Tabs_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Tabs_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Tabs_InternalConfigRecord = (function (_super) {
__extends(Tabs_InternalConfigRecord, _super);
function Tabs_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
Tabs_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("Tabs_InternalConfig", "tabs_InternalConfigAttr", "Tabs_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.Tabs_InternalConfigRec());
}, true, OutSystemsUIModel.Tabs_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
Tabs_InternalConfigRecord.fromStructure = function (str) {
return new Tabs_InternalConfigRecord(new Tabs_InternalConfigRecord.RecordClass({
tabs_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Tabs_InternalConfigRecord._isAnonymousRecord = true;
Tabs_InternalConfigRecord.UniqueId = "3e7155b3-2546-681d-96ea-af8aa39a4f6e";
Tabs_InternalConfigRecord.init();
return Tabs_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.Tabs_InternalConfigRecord = Tabs_InternalConfigRecord;

});
define("OutSystemsUI.model$GradientRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var GradientRec = (function (_super) {
__extends(GradientRec, _super);
function GradientRec(defaults) {
_super.apply(this, arguments);
}
GradientRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GradientRec.fromStructure = function (str) {
return new GradientRec(new GradientRec.RecordClass({
typeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GradientRec.init();
return GradientRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.GradientRec = GradientRec;

});
define("OutSystemsUI.model$GradientRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$GradientRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var GradientRecord = (function (_super) {
__extends(GradientRecord, _super);
function GradientRecord(defaults) {
_super.apply(this, arguments);
}
GradientRecord.attributesToDeclare = function () {
return [
this.attr("Gradient", "gradientAttr", "Gradient", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.GradientRec());
}, true, OutSystemsUIModel.GradientRec)
].concat(_super.attributesToDeclare.call(this));
};
GradientRecord.fromStructure = function (str) {
return new GradientRecord(new GradientRecord.RecordClass({
gradientAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GradientRecord._isAnonymousRecord = true;
GradientRecord.UniqueId = "3f6426ae-ecbf-a4af-19e2-79847df746cc";
GradientRecord.init();
return GradientRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.GradientRecord = GradientRecord;

});
define("OutSystemsUI.model$NoUiSliderConfigs_RangeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$NoUiSliderConfigs_RangeRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var NoUiSliderConfigs_RangeRecord = (function (_super) {
__extends(NoUiSliderConfigs_RangeRecord, _super);
function NoUiSliderConfigs_RangeRecord(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigs_RangeRecord.attributesToDeclare = function () {
return [
this.attr("NoUiSliderConfigs_Range", "noUiSliderConfigs_RangeAttr", "NoUiSliderConfigs_Range", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.NoUiSliderConfigs_RangeRec());
}, true, OutSystemsUIModel.NoUiSliderConfigs_RangeRec)
].concat(_super.attributesToDeclare.call(this));
};
NoUiSliderConfigs_RangeRecord.fromStructure = function (str) {
return new NoUiSliderConfigs_RangeRecord(new NoUiSliderConfigs_RangeRecord.RecordClass({
noUiSliderConfigs_RangeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NoUiSliderConfigs_RangeRecord._isAnonymousRecord = true;
NoUiSliderConfigs_RangeRecord.UniqueId = "3fbb4bab-d0ba-4885-2fec-c04be37d3c0e";
NoUiSliderConfigs_RangeRecord.init();
return NoUiSliderConfigs_RangeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.NoUiSliderConfigs_RangeRecord = NoUiSliderConfigs_RangeRecord;

});
define("OutSystemsUI.model$SplideConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SplideConfigsRec = (function (_super) {
__extends(SplideConfigsRec, _super);
function SplideConfigsRec(defaults) {
_super.apply(this, arguments);
}
SplideConfigsRec.attributesToDeclare = function () {
return [
this.attr("role", "roleAttr", "role", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("label", "labelAttr", "label", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("labelledby", "labelledbyAttr", "labelledby", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("rewind", "rewindAttr", "rewind", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("speed", "speedAttr", "speed", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("rewindSpeed", "rewindSpeedAttr", "rewindSpeed", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("rewindByDrag", "rewindByDragAttr", "rewindByDrag", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("width", "widthAttr", "width", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("fixedWidth", "fixedWidthAttr", "fixedWidth", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("fixedHeight", "fixedHeightAttr", "fixedHeight", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("autoWidth", "autoWidthAttr", "autoWidth", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("perMove", "perMoveAttr", "perMove", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("clones", "clonesAttr", "clones", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("cloneStatus", "cloneStatusAttr", "cloneStatus", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("paginationDirection", "paginationDirectionAttr", "paginationDirection", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("easing", "easingAttr", "easing", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("noDrag", "noDragAttr", "noDrag", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("flickPower", "flickPowerAttr", "flickPower", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("flickMaxPages", "flickMaxPagesAttr", "flickMaxPages", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("waitForTransition", "waitForTransitionAttr", "waitForTransition", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("arrowPath", "arrowPathAttr", "arrowPath", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("interval", "intervalAttr", "interval", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("pauseOnHover", "pauseOnHoverAttr", "pauseOnHover", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("pauseOnFocus", "pauseOnFocusAttr", "pauseOnFocus", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("resetProgress", "resetProgressAttr", "resetProgress", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("lazyLoad", "lazyLoadAttr", "lazyLoad", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("preloadPages", "preloadPagesAttr", "preloadPages", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("wheel", "wheelAttr", "wheel", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("wheelMinThreshold", "wheelMinThresholdAttr", "wheelMinThreshold", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("wheelSleep", "wheelSleepAttr", "wheelSleep", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("releaseWheel", "releaseWheelAttr", "releaseWheel", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("slideFocus", "slideFocusAttr", "slideFocus", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("focusableNodes", "focusableNodesAttr", "focusableNodes", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("isNavigation", "isNavigationAttr", "isNavigation", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("trimSpace", "trimSpaceAttr", "trimSpace", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("updateOnMove", "updateOnMoveAttr", "updateOnMove", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("mediaQuery", "mediaQueryAttr", "mediaQuery", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("live", "liveAttr", "live", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("destroy", "destroyAttr", "destroy", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("omitEnd", "omitEndAttr", "omitEnd", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SplideConfigsRec.init();
return SplideConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.SplideConfigsRec = SplideConfigsRec;

});
define("OutSystemsUI.model$CarouselOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var CarouselOptionalConfigsRec = (function (_super) {
__extends(CarouselOptionalConfigsRec, _super);
function CarouselOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
CarouselOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("AutoPlay", "autoPlayAttr", "AutoPlay", false, false, OS.Types.Boolean, function () {
return true;
}, true), 
this.attr("Loop", "loopAttr", "Loop", false, false, OS.Types.Boolean, function () {
return true;
}, true), 
this.attr("Padding", "paddingAttr", "Padding", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ItemsGap", "itemsGapAttr", "ItemsGap", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("StartingPosition", "startingPositionAttr", "StartingPosition", false, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CarouselOptionalConfigsRec.init();
return CarouselOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.CarouselOptionalConfigsRec = CarouselOptionalConfigsRec;

});
define("OutSystemsUI.model$CarouselOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$CarouselOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var CarouselOptionalConfigsRecord = (function (_super) {
__extends(CarouselOptionalConfigsRecord, _super);
function CarouselOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
CarouselOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("CarouselOptionalConfigs", "carouselOptionalConfigsAttr", "CarouselOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.CarouselOptionalConfigsRec());
}, true, OutSystemsUIModel.CarouselOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
CarouselOptionalConfigsRecord.fromStructure = function (str) {
return new CarouselOptionalConfigsRecord(new CarouselOptionalConfigsRecord.RecordClass({
carouselOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselOptionalConfigsRecord._isAnonymousRecord = true;
CarouselOptionalConfigsRecord.UniqueId = "4028c834-35ff-8f3f-a19c-27e5a3252dd5";
CarouselOptionalConfigsRecord.init();
return CarouselOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.CarouselOptionalConfigsRecord = CarouselOptionalConfigsRecord;

});
define("OutSystemsUI.model$AnimatedLabel_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$AnimatedLabel_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AnimatedLabel_InternalConfigRecord = (function (_super) {
__extends(AnimatedLabel_InternalConfigRecord, _super);
function AnimatedLabel_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
AnimatedLabel_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("AnimatedLabel_InternalConfig", "animatedLabel_InternalConfigAttr", "AnimatedLabel_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.AnimatedLabel_InternalConfigRec());
}, true, OutSystemsUIModel.AnimatedLabel_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
AnimatedLabel_InternalConfigRecord.fromStructure = function (str) {
return new AnimatedLabel_InternalConfigRecord(new AnimatedLabel_InternalConfigRecord.RecordClass({
animatedLabel_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AnimatedLabel_InternalConfigRecord._isAnonymousRecord = true;
AnimatedLabel_InternalConfigRecord.UniqueId = "40ff37b8-719f-a708-a2bb-67c839d296b2";
AnimatedLabel_InternalConfigRecord.init();
return AnimatedLabel_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.AnimatedLabel_InternalConfigRecord = AnimatedLabel_InternalConfigRecord;

});
define("OutSystemsUI.model$TextTextTextTextTextTextTextRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TextTextTextTextTextTextTextRecord = (function (_super) {
__extends(TextTextTextTextTextTextTextRecord, _super);
function TextTextTextTextTextTextTextRecord(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextTextTextRecord.attributesToDeclare = function () {
return [
this.attr("WeekdayShort1", "weekdayShort1Attr", "WeekdayShort1", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("WeekdayShort2", "weekdayShort2Attr", "WeekdayShort2", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("WeekdayShort3", "weekdayShort3Attr", "WeekdayShort3", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("WeekdayShort4", "weekdayShort4Attr", "WeekdayShort4", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("WeekdayShort5", "weekdayShort5Attr", "WeekdayShort5", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("WeekdayShort6", "weekdayShort6Attr", "WeekdayShort6", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("WeekdayShort7", "weekdayShort7Attr", "WeekdayShort7", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextTextTextTextTextTextTextRecord._isAnonymousRecord = true;
TextTextTextTextTextTextTextRecord.UniqueId = "bbab5f70-da1d-7251-909f-44ce9efe20fa";
TextTextTextTextTextTextTextRecord.init();
return TextTextTextTextTextTextTextRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.TextTextTextTextTextTextTextRecord = TextTextTextTextTextTextTextRecord;

});
define("OutSystemsUI.model$TextTextTextTextTextTextText1RecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TextTextTextTextTextTextTextRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TextTextTextTextTextTextText1RecordList = (function (_super) {
__extends(TextTextTextTextTextTextText1RecordList, _super);
function TextTextTextTextTextTextText1RecordList(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextTextText1RecordList.itemType = OutSystemsUIModel.TextTextTextTextTextTextTextRecord;
return TextTextTextTextTextTextText1RecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.TextTextTextTextTextTextText1RecordList = TextTextTextTextTextTextText1RecordList;

});
define("OutSystemsUI.model$ProgressTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ProgressTypeRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProgressTypeRecordList = (function (_super) {
__extends(ProgressTypeRecordList, _super);
function ProgressTypeRecordList(defaults) {
_super.apply(this, arguments);
}
ProgressTypeRecordList.itemType = OutSystemsUIModel.ProgressTypeRecord;
return ProgressTypeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ProgressTypeRecordList = ProgressTypeRecordList;

});
define("OutSystemsUI.model$AccordionIconTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AccordionIconTypeRec = (function (_super) {
__extends(AccordionIconTypeRec, _super);
function AccordionIconTypeRec(defaults) {
_super.apply(this, arguments);
}
AccordionIconTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AccordionIconTypeRec.fromStructure = function (str) {
return new AccordionIconTypeRec(new AccordionIconTypeRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccordionIconTypeRec.init();
return AccordionIconTypeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.AccordionIconTypeRec = AccordionIconTypeRec;

});
define("OutSystemsUI.model$AccordionIconTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$AccordionIconTypeRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AccordionIconTypeRecord = (function (_super) {
__extends(AccordionIconTypeRecord, _super);
function AccordionIconTypeRecord(defaults) {
_super.apply(this, arguments);
}
AccordionIconTypeRecord.attributesToDeclare = function () {
return [
this.attr("AccordionIconType", "accordionIconTypeAttr", "AccordionIconType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.AccordionIconTypeRec());
}, true, OutSystemsUIModel.AccordionIconTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
AccordionIconTypeRecord.fromStructure = function (str) {
return new AccordionIconTypeRecord(new AccordionIconTypeRecord.RecordClass({
accordionIconTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccordionIconTypeRecord._isAnonymousRecord = true;
AccordionIconTypeRecord.UniqueId = "73fae692-0f82-1133-20dc-cc89ef073c01";
AccordionIconTypeRecord.init();
return AccordionIconTypeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.AccordionIconTypeRecord = AccordionIconTypeRecord;

});
define("OutSystemsUI.model$AccordionIconTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$AccordionIconTypeRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AccordionIconTypeRecordList = (function (_super) {
__extends(AccordionIconTypeRecordList, _super);
function AccordionIconTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AccordionIconTypeRecordList.itemType = OutSystemsUIModel.AccordionIconTypeRecord;
return AccordionIconTypeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.AccordionIconTypeRecordList = AccordionIconTypeRecordList;

});
define("OutSystemsUI.model$RangeSliderProviderRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$RangeSliderProviderRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var RangeSliderProviderRecord = (function (_super) {
__extends(RangeSliderProviderRecord, _super);
function RangeSliderProviderRecord(defaults) {
_super.apply(this, arguments);
}
RangeSliderProviderRecord.attributesToDeclare = function () {
return [
this.attr("RangeSliderProvider", "rangeSliderProviderAttr", "RangeSliderProvider", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.RangeSliderProviderRec());
}, true, OutSystemsUIModel.RangeSliderProviderRec)
].concat(_super.attributesToDeclare.call(this));
};
RangeSliderProviderRecord.fromStructure = function (str) {
return new RangeSliderProviderRecord(new RangeSliderProviderRecord.RecordClass({
rangeSliderProviderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RangeSliderProviderRecord._isAnonymousRecord = true;
RangeSliderProviderRecord.UniqueId = "45a33caf-5ebb-3ded-d109-c21fe6ae3d86";
RangeSliderProviderRecord.init();
return RangeSliderProviderRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.RangeSliderProviderRecord = RangeSliderProviderRecord;

});
define("OutSystemsUI.model$DropdownOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownOptionalConfigsRecordList = (function (_super) {
__extends(DropdownOptionalConfigsRecordList, _super);
function DropdownOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionalConfigsRecordList.itemType = OutSystemsUIModel.DropdownOptionalConfigsRecord;
return DropdownOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DropdownOptionalConfigsRecordList = DropdownOptionalConfigsRecordList;

});
define("OutSystemsUI.model$Notification_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Notification_InternalConfigRec = (function (_super) {
__extends(Notification_InternalConfigRec, _super);
function Notification_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
Notification_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("StartsOpen", "startsOpenAttr", "StartsOpen", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("Position", "positionAttr", "Position", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Width", "widthAttr", "Width", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("CloseAfterTime", "closeAfterTimeAttr", "CloseAfterTime", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("InteractToClose", "interactToCloseAttr", "InteractToClose", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Notification_InternalConfigRec.init();
return Notification_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.Notification_InternalConfigRec = Notification_InternalConfigRec;

});
define("OutSystemsUI.model$ErrorMessageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ErrorMessageRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ErrorMessageList = (function (_super) {
__extends(ErrorMessageList, _super);
function ErrorMessageList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageList.itemType = OutSystemsUIModel.ErrorMessageRec;
return ErrorMessageList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ErrorMessageList = ErrorMessageList;

});
define("OutSystemsUI.model$FlatpickrConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$FlatpickrConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var FlatpickrConfigsRecord = (function (_super) {
__extends(FlatpickrConfigsRecord, _super);
function FlatpickrConfigsRecord(defaults) {
_super.apply(this, arguments);
}
FlatpickrConfigsRecord.attributesToDeclare = function () {
return [
this.attr("FlatpickrConfigs", "flatpickrConfigsAttr", "FlatpickrConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.FlatpickrConfigsRec());
}, true, OutSystemsUIModel.FlatpickrConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
FlatpickrConfigsRecord.fromStructure = function (str) {
return new FlatpickrConfigsRecord(new FlatpickrConfigsRecord.RecordClass({
flatpickrConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FlatpickrConfigsRecord._isAnonymousRecord = true;
FlatpickrConfigsRecord.UniqueId = "f3c2b7b3-f72a-bb11-5f72-c934f4368624";
FlatpickrConfigsRecord.init();
return FlatpickrConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.FlatpickrConfigsRecord = FlatpickrConfigsRecord;

});
define("OutSystemsUI.model$FlatpickrConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$FlatpickrConfigsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var FlatpickrConfigsRecordList = (function (_super) {
__extends(FlatpickrConfigsRecordList, _super);
function FlatpickrConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
FlatpickrConfigsRecordList.itemType = OutSystemsUIModel.FlatpickrConfigsRecord;
return FlatpickrConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.FlatpickrConfigsRecordList = FlatpickrConfigsRecordList;

});
define("OutSystemsUI.model$MonthYearRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$MonthYearRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MonthYearRecord = (function (_super) {
__extends(MonthYearRecord, _super);
function MonthYearRecord(defaults) {
_super.apply(this, arguments);
}
MonthYearRecord.attributesToDeclare = function () {
return [
this.attr("MonthYear", "monthYearAttr", "MonthYear", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.MonthYearRec());
}, true, OutSystemsUIModel.MonthYearRec)
].concat(_super.attributesToDeclare.call(this));
};
MonthYearRecord.fromStructure = function (str) {
return new MonthYearRecord(new MonthYearRecord.RecordClass({
monthYearAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MonthYearRecord._isAnonymousRecord = true;
MonthYearRecord.UniqueId = "4835a3b0-a2d4-ab28-e154-f8a8831a00ef";
MonthYearRecord.init();
return MonthYearRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.MonthYearRecord = MonthYearRecord;

});
define("OutSystemsUI.model$GradientColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$GradientColorRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var GradientColorRecord = (function (_super) {
__extends(GradientColorRecord, _super);
function GradientColorRecord(defaults) {
_super.apply(this, arguments);
}
GradientColorRecord.attributesToDeclare = function () {
return [
this.attr("GradientColor", "gradientColorAttr", "GradientColor", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.GradientColorRec());
}, true, OutSystemsUIModel.GradientColorRec)
].concat(_super.attributesToDeclare.call(this));
};
GradientColorRecord.fromStructure = function (str) {
return new GradientColorRecord(new GradientColorRecord.RecordClass({
gradientColorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GradientColorRecord._isAnonymousRecord = true;
GradientColorRecord.UniqueId = "486a3515-9c95-7506-61e0-12cbe99a555f";
GradientColorRecord.init();
return GradientColorRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.GradientColorRecord = GradientColorRecord;

});
define("OutSystemsUI.model$GutterSizeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var GutterSizeRec = (function (_super) {
__extends(GutterSizeRec, _super);
function GutterSizeRec(defaults) {
_super.apply(this, arguments);
}
GutterSizeRec.attributesToDeclare = function () {
return [
this.attr("GutterSize", "gutterSizeAttr", "GutterSize", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GutterSizeRec.init();
return GutterSizeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.GutterSizeRec = GutterSizeRec;

});
define("OutSystemsUI.model$MenuActionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$MenuActionRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MenuActionList = (function (_super) {
__extends(MenuActionList, _super);
function MenuActionList(defaults) {
_super.apply(this, arguments);
}
MenuActionList.itemType = OutSystemsUIModel.MenuActionRec;
return MenuActionList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.MenuActionList = MenuActionList;

});
define("OutSystemsUI.model$DatePickerTimeFormatRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerTimeFormatRec = (function (_super) {
__extends(DatePickerTimeFormatRec, _super);
function DatePickerTimeFormatRec(defaults) {
_super.apply(this, arguments);
}
DatePickerTimeFormatRec.attributesToDeclare = function () {
return [
this.attr("Timeformat", "timeformatAttr", "Timeformat", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerTimeFormatRec.fromStructure = function (str) {
return new DatePickerTimeFormatRec(new DatePickerTimeFormatRec.RecordClass({
timeformatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerTimeFormatRec.init();
return DatePickerTimeFormatRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DatePickerTimeFormatRec = DatePickerTimeFormatRec;

});
define("OutSystemsUI.model$DatePickerTimeFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerTimeFormatRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerTimeFormatList = (function (_super) {
__extends(DatePickerTimeFormatList, _super);
function DatePickerTimeFormatList(defaults) {
_super.apply(this, arguments);
}
DatePickerTimeFormatList.itemType = OutSystemsUIModel.DatePickerTimeFormatRec;
return DatePickerTimeFormatList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DatePickerTimeFormatList = DatePickerTimeFormatList;

});
define("OutSystemsUI.model$TextTextTextTextTextTextTextTextRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TextTextTextTextTextTextTextTextRecord = (function (_super) {
__extends(TextTextTextTextTextTextTextTextRecord, _super);
function TextTextTextTextTextTextTextTextRecord(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextTextTextTextRecord.attributesToDeclare = function () {
return [
this.attr("ShortcutsDialog1", "shortcutsDialog1Attr", "ShortcutsDialog1", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ShortcutsDialog2", "shortcutsDialog2Attr", "ShortcutsDialog2", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ShortcutsDialog3", "shortcutsDialog3Attr", "ShortcutsDialog3", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ShortcutsDialog4", "shortcutsDialog4Attr", "ShortcutsDialog4", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ShortcutsDialog5", "shortcutsDialog5Attr", "ShortcutsDialog5", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ShortcutsDialog6", "shortcutsDialog6Attr", "ShortcutsDialog6", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ShortcutsDialog7", "shortcutsDialog7Attr", "ShortcutsDialog7", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ShortcutsDialog8", "shortcutsDialog8Attr", "ShortcutsDialog8", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextTextTextTextTextTextTextTextRecord._isAnonymousRecord = true;
TextTextTextTextTextTextTextTextRecord.UniqueId = "4c3ee0d0-ad51-4546-e234-95b0186f9086";
TextTextTextTextTextTextTextTextRecord.init();
return TextTextTextTextTextTextTextTextRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.TextTextTextTextTextTextTextTextRecord = TextTextTextTextTextTextTextTextRecord;

});
define("OutSystemsUI.model$DatePickerRangeOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerRangeOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerRangeOptionalConfigsList = (function (_super) {
__extends(DatePickerRangeOptionalConfigsList, _super);
function DatePickerRangeOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DatePickerRangeOptionalConfigsList.itemType = OutSystemsUIModel.DatePickerRangeOptionalConfigsRec;
return DatePickerRangeOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DatePickerRangeOptionalConfigsList = DatePickerRangeOptionalConfigsList;

});
define("OutSystemsUI.model$GradientColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$GradientColorRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var GradientColorRecordList = (function (_super) {
__extends(GradientColorRecordList, _super);
function GradientColorRecordList(defaults) {
_super.apply(this, arguments);
}
GradientColorRecordList.itemType = OutSystemsUIModel.GradientColorRecord;
return GradientColorRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.GradientColorRecordList = GradientColorRecordList;

});
define("OutSystemsUI.model$DatePickerWeekDayList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerWeekDayRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerWeekDayList = (function (_super) {
__extends(DatePickerWeekDayList, _super);
function DatePickerWeekDayList(defaults) {
_super.apply(this, arguments);
}
DatePickerWeekDayList.itemType = OutSystemsUIModel.DatePickerWeekDayRec;
return DatePickerWeekDayList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DatePickerWeekDayList = DatePickerWeekDayList;

});
define("OutSystemsUI.model$BreakColumnsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$BreakColumnsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var BreakColumnsRecordList = (function (_super) {
__extends(BreakColumnsRecordList, _super);
function BreakColumnsRecordList(defaults) {
_super.apply(this, arguments);
}
BreakColumnsRecordList.itemType = OutSystemsUIModel.BreakColumnsRecord;
return BreakColumnsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.BreakColumnsRecordList = BreakColumnsRecordList;

});
define("OutSystemsUI.model$TabsHeaderItem_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TabsHeaderItem_InternalConfigRec = (function (_super) {
__extends(TabsHeaderItem_InternalConfigRec, _super);
function TabsHeaderItem_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
TabsHeaderItem_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TabsHeaderItem_InternalConfigRec.init();
return TabsHeaderItem_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.TabsHeaderItem_InternalConfigRec = TabsHeaderItem_InternalConfigRec;

});
define("OutSystemsUI.model$RangeSliderOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var RangeSliderOptionalConfigsRec = (function (_super) {
__extends(RangeSliderOptionalConfigsRec, _super);
function RangeSliderOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
RangeSliderOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("ShowFloatingLabel", "showFloatingLabelAttr", "ShowFloatingLabel", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("Step", "stepAttr", "Step", false, false, OS.Types.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(1);
}, true), 
this.attr("ShowTickMarks", "showTickMarksAttr", "ShowTickMarks", false, false, OS.Types.Boolean, function () {
return true;
}, true), 
this.attr("TickMarksInterval", "tickMarksIntervalAttr", "TickMarksInterval", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RangeSliderOptionalConfigsRec.init();
return RangeSliderOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.RangeSliderOptionalConfigsRec = RangeSliderOptionalConfigsRec;

});
define("OutSystemsUI.model$RangeSliderOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$RangeSliderOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var RangeSliderOptionalConfigsRecord = (function (_super) {
__extends(RangeSliderOptionalConfigsRecord, _super);
function RangeSliderOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
RangeSliderOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("RangeSliderOptionalConfigs", "rangeSliderOptionalConfigsAttr", "RangeSliderOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.RangeSliderOptionalConfigsRec());
}, true, OutSystemsUIModel.RangeSliderOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
RangeSliderOptionalConfigsRecord.fromStructure = function (str) {
return new RangeSliderOptionalConfigsRecord(new RangeSliderOptionalConfigsRecord.RecordClass({
rangeSliderOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RangeSliderOptionalConfigsRecord._isAnonymousRecord = true;
RangeSliderOptionalConfigsRecord.UniqueId = "4fc16da6-9510-8ad1-b034-b7256ffa868d";
RangeSliderOptionalConfigsRecord.init();
return RangeSliderOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.RangeSliderOptionalConfigsRecord = RangeSliderOptionalConfigsRecord;

});
define("OutSystemsUI.model$CarouselNavigationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$CarouselNavigationRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var CarouselNavigationRecordList = (function (_super) {
__extends(CarouselNavigationRecordList, _super);
function CarouselNavigationRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselNavigationRecordList.itemType = OutSystemsUIModel.CarouselNavigationRecord;
return CarouselNavigationRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.CarouselNavigationRecordList = CarouselNavigationRecordList;

});
define("OutSystemsUI.model$NoUiSliderConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$NoUiSliderConfigsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var NoUiSliderConfigsRecordList = (function (_super) {
__extends(NoUiSliderConfigsRecordList, _super);
function NoUiSliderConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigsRecordList.itemType = OutSystemsUIModel.NoUiSliderConfigsRecord;
return NoUiSliderConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.NoUiSliderConfigsRecordList = NoUiSliderConfigsRecordList;

});
define("OutSystemsUI.model$DEPRECATED_MasterDetailItemRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DEPRECATED_MasterDetailItemRec = (function (_super) {
__extends(DEPRECATED_MasterDetailItemRec, _super);
function DEPRECATED_MasterDetailItemRec(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_MasterDetailItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ImageUrl", "imageUrlAttr", "ImageUrl", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DEPRECATED_MasterDetailItemRec.init();
return DEPRECATED_MasterDetailItemRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DEPRECATED_MasterDetailItemRec = DEPRECATED_MasterDetailItemRec;

});
define("OutSystemsUI.model$CarouselOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$CarouselOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var CarouselOptionalConfigsList = (function (_super) {
__extends(CarouselOptionalConfigsList, _super);
function CarouselOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
CarouselOptionalConfigsList.itemType = OutSystemsUIModel.CarouselOptionalConfigsRec;
return CarouselOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.CarouselOptionalConfigsList = CarouselOptionalConfigsList;

});
define("OutSystemsUI.model$Tooltip_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Tooltip_InternalConfigRec = (function (_super) {
__extends(Tooltip_InternalConfigRec, _super);
function Tooltip_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
Tooltip_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Position", "positionAttr", "Position", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("StartVisible", "startVisibleAttr", "StartVisible", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("IsHover", "isHoverAttr", "IsHover", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Tooltip_InternalConfigRec.init();
return Tooltip_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.Tooltip_InternalConfigRec = Tooltip_InternalConfigRec;

});
define("OutSystemsUI.model$Tooltip_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Tooltip_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Tooltip_InternalConfigList = (function (_super) {
__extends(Tooltip_InternalConfigList, _super);
function Tooltip_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
Tooltip_InternalConfigList.itemType = OutSystemsUIModel.Tooltip_InternalConfigRec;
return Tooltip_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.Tooltip_InternalConfigList = Tooltip_InternalConfigList;

});
define("OutSystemsUI.model$DatePickerTimeFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerTimeFormatRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerTimeFormatRecord = (function (_super) {
__extends(DatePickerTimeFormatRecord, _super);
function DatePickerTimeFormatRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerTimeFormatRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerTimeFormat", "datePickerTimeFormatAttr", "DatePickerTimeFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DatePickerTimeFormatRec());
}, true, OutSystemsUIModel.DatePickerTimeFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerTimeFormatRecord.fromStructure = function (str) {
return new DatePickerTimeFormatRecord(new DatePickerTimeFormatRecord.RecordClass({
datePickerTimeFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerTimeFormatRecord._isAnonymousRecord = true;
DatePickerTimeFormatRecord.UniqueId = "51b1c159-4930-8af5-f9b2-dba7043d5ae6";
DatePickerTimeFormatRecord.init();
return DatePickerTimeFormatRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DatePickerTimeFormatRecord = DatePickerTimeFormatRecord;

});
define("OutSystemsUI.model$FlipContent_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var FlipContent_InternalConfigRec = (function (_super) {
__extends(FlipContent_InternalConfigRec, _super);
function FlipContent_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
FlipContent_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("IsFlipped", "isFlippedAttr", "IsFlipped", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("FlipSelf", "flipSelfAttr", "FlipSelf", false, false, OS.Types.Boolean, function () {
return true;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FlipContent_InternalConfigRec.init();
return FlipContent_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.FlipContent_InternalConfigRec = FlipContent_InternalConfigRec;

});
define("OutSystemsUI.model$FlipContent_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$FlipContent_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var FlipContent_InternalConfigList = (function (_super) {
__extends(FlipContent_InternalConfigList, _super);
function FlipContent_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
FlipContent_InternalConfigList.itemType = OutSystemsUIModel.FlipContent_InternalConfigRec;
return FlipContent_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.FlipContent_InternalConfigList = FlipContent_InternalConfigList;

});
define("OutSystemsUI.model$TextTextTextTextTextTextTextTextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TextTextTextTextTextTextTextTextRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TextTextTextTextTextTextTextTextRecordList = (function (_super) {
__extends(TextTextTextTextTextTextTextTextRecordList, _super);
function TextTextTextTextTextTextTextTextRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextTextTextTextRecordList.itemType = OutSystemsUIModel.TextTextTextTextTextTextTextTextRecord;
return TextTextTextTextTextTextTextTextRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.TextTextTextTextTextTextTextTextRecordList = TextTextTextTextTextTextTextTextRecordList;

});
define("OutSystemsUI.model$Gallery_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Gallery_InternalConfigRec = (function (_super) {
__extends(Gallery_InternalConfigRec, _super);
function Gallery_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
Gallery_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("RowItemsPhone", "rowItemsPhoneAttr", "RowItemsPhone", false, false, OS.Types.PhoneNumber, function () {
return "";
}, true), 
this.attr("RowItemsTablet", "rowItemsTabletAttr", "RowItemsTablet", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("RowItemsDesktop", "rowItemsDesktopAttr", "RowItemsDesktop", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ItemsGap", "itemsGapAttr", "ItemsGap", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Gallery_InternalConfigRec.init();
return Gallery_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.Gallery_InternalConfigRec = Gallery_InternalConfigRec;

});
define("OutSystemsUI.model$ShapeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ShapeRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ShapeList = (function (_super) {
__extends(ShapeList, _super);
function ShapeList(defaults) {
_super.apply(this, arguments);
}
ShapeList.itemType = OutSystemsUIModel.ShapeRec;
return ShapeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ShapeList = ShapeList;

});
define("OutSystemsUI.model$DropdownItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownItemRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownItemRecord = (function (_super) {
__extends(DropdownItemRecord, _super);
function DropdownItemRecord(defaults) {
_super.apply(this, arguments);
}
DropdownItemRecord.attributesToDeclare = function () {
return [
this.attr("DropdownItem", "dropdownItemAttr", "DropdownItem", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownItemRec());
}, true, OutSystemsUIModel.DropdownItemRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownItemRecord.fromStructure = function (str) {
return new DropdownItemRecord(new DropdownItemRecord.RecordClass({
dropdownItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownItemRecord._isAnonymousRecord = true;
DropdownItemRecord.UniqueId = "56805fde-f633-2e01-f13c-0f9217357dbc";
DropdownItemRecord.init();
return DropdownItemRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DropdownItemRecord = DropdownItemRecord;

});
define("OutSystemsUI.model$ListNavigationList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ListNavigationRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ListNavigationList = (function (_super) {
__extends(ListNavigationList, _super);
function ListNavigationList(defaults) {
_super.apply(this, arguments);
}
ListNavigationList.itemType = OutSystemsUIModel.ListNavigationRec;
return ListNavigationList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ListNavigationList = ListNavigationList;

});
define("OutSystemsUI.model$SplideProvideri18nRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SplideProvideri18nRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SplideProvideri18nRecord = (function (_super) {
__extends(SplideProvideri18nRecord, _super);
function SplideProvideri18nRecord(defaults) {
_super.apply(this, arguments);
}
SplideProvideri18nRecord.attributesToDeclare = function () {
return [
this.attr("SplideProvideri18n", "splideProvideri18nAttr", "SplideProvideri18n", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SplideProvideri18nRec());
}, true, OutSystemsUIModel.SplideProvideri18nRec)
].concat(_super.attributesToDeclare.call(this));
};
SplideProvideri18nRecord.fromStructure = function (str) {
return new SplideProvideri18nRecord(new SplideProvideri18nRecord.RecordClass({
splideProvideri18nAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SplideProvideri18nRecord._isAnonymousRecord = true;
SplideProvideri18nRecord.UniqueId = "8f521ae5-ef17-d239-3da4-331384c022c2";
SplideProvideri18nRecord.init();
return SplideProvideri18nRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.SplideProvideri18nRecord = SplideProvideri18nRecord;

});
define("OutSystemsUI.model$SplideProvideri18nRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SplideProvideri18nRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SplideProvideri18nRecordList = (function (_super) {
__extends(SplideProvideri18nRecordList, _super);
function SplideProvideri18nRecordList(defaults) {
_super.apply(this, arguments);
}
SplideProvideri18nRecordList.itemType = OutSystemsUIModel.SplideProvideri18nRecord;
return SplideProvideri18nRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.SplideProvideri18nRecordList = SplideProvideri18nRecordList;

});
define("OutSystemsUI.model$AnimatedLabel_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$AnimatedLabel_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AnimatedLabel_InternalConfigRecordList = (function (_super) {
__extends(AnimatedLabel_InternalConfigRecordList, _super);
function AnimatedLabel_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
AnimatedLabel_InternalConfigRecordList.itemType = OutSystemsUIModel.AnimatedLabel_InternalConfigRecord;
return AnimatedLabel_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.AnimatedLabel_InternalConfigRecordList = AnimatedLabel_InternalConfigRecordList;

});
define("OutSystemsUI.model$DatePicker_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePicker_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePicker_InternalConfigList = (function (_super) {
__extends(DatePicker_InternalConfigList, _super);
function DatePicker_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
DatePicker_InternalConfigList.itemType = OutSystemsUIModel.DatePicker_InternalConfigRec;
return DatePicker_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DatePicker_InternalConfigList = DatePicker_InternalConfigList;

});
define("OutSystemsUI.model$RangeSlider_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var RangeSlider_InternalConfigRec = (function (_super) {
__extends(RangeSlider_InternalConfigRec, _super);
function RangeSlider_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
RangeSlider_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("StartingValueFrom", "startingValueFromAttr", "StartingValueFrom", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("StartingValueTo", "startingValueToAttr", "StartingValueTo", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Step", "stepAttr", "Step", false, false, OS.Types.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(1);
}, true), 
this.attr("ShowTickMarks", "showTickMarksAttr", "ShowTickMarks", false, false, OS.Types.Boolean, function () {
return true;
}, true), 
this.attr("TickMarksInterval", "tickMarksIntervalAttr", "TickMarksInterval", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("Orientation", "orientationAttr", "Orientation", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.orientation.horizontal;
}, true), 
this.attr("Size", "sizeAttr", "Size", false, false, OS.Types.Text, function () {
return "100%";
}, true), 
this.attr("ShowFloatingLabel", "showFloatingLabelAttr", "ShowFloatingLabel", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("InitialValueFrom", "initialValueFromAttr", "InitialValueFrom", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InitialValueTo", "initialValueToAttr", "InitialValueTo", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RangeSlider_InternalConfigRec.init();
return RangeSlider_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.RangeSlider_InternalConfigRec = RangeSlider_InternalConfigRec;

});
define("OutSystemsUI.model$PositionRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var PositionRec = (function (_super) {
__extends(PositionRec, _super);
function PositionRec(defaults) {
_super.apply(this, arguments);
}
PositionRec.attributesToDeclare = function () {
return [
this.attr("Position", "positionAttr", "Position", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PositionRec.fromStructure = function (str) {
return new PositionRec(new PositionRec.RecordClass({
positionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PositionRec.init();
return PositionRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.PositionRec = PositionRec;

});
define("OutSystemsUI.model$PositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$PositionRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var PositionRecord = (function (_super) {
__extends(PositionRecord, _super);
function PositionRecord(defaults) {
_super.apply(this, arguments);
}
PositionRecord.attributesToDeclare = function () {
return [
this.attr("Position", "positionAttr", "Position", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.PositionRec());
}, true, OutSystemsUIModel.PositionRec)
].concat(_super.attributesToDeclare.call(this));
};
PositionRecord.fromStructure = function (str) {
return new PositionRecord(new PositionRecord.RecordClass({
positionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PositionRecord._isAnonymousRecord = true;
PositionRecord.UniqueId = "5f28219a-5e30-fb90-023f-cbc295513e7c";
PositionRecord.init();
return PositionRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.PositionRecord = PositionRecord;

});
define("OutSystemsUI.model$PositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$PositionRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var PositionRecordList = (function (_super) {
__extends(PositionRecordList, _super);
function PositionRecordList(defaults) {
_super.apply(this, arguments);
}
PositionRecordList.itemType = OutSystemsUIModel.PositionRecord;
return PositionRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.PositionRecordList = PositionRecordList;

});
define("OutSystemsUI.model$MonthRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MonthRec = (function (_super) {
__extends(MonthRec, _super);
function MonthRec(defaults) {
_super.apply(this, arguments);
}
MonthRec.attributesToDeclare = function () {
return [
this.attr("Month", "monthAttr", "Month", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MonthRec.init();
return MonthRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.MonthRec = MonthRec;

});
define("OutSystemsUI.model$TimePickerOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TimePickerOptionalConfigsRec = (function (_super) {
__extends(TimePickerOptionalConfigsRec, _super);
function TimePickerOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
TimePickerOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("MinTime", "minTimeAttr", "MinTime", false, false, OS.Types.Time, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MaxTime", "maxTimeAttr", "MaxTime", false, false, OS.Types.Time, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TimePickerOptionalConfigsRec.init();
return TimePickerOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.TimePickerOptionalConfigsRec = TimePickerOptionalConfigsRec;

});
define("OutSystemsUI.model$TimePickerOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TimePickerOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TimePickerOptionalConfigsList = (function (_super) {
__extends(TimePickerOptionalConfigsList, _super);
function TimePickerOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
TimePickerOptionalConfigsList.itemType = OutSystemsUIModel.TimePickerOptionalConfigsRec;
return TimePickerOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.TimePickerOptionalConfigsList = TimePickerOptionalConfigsList;

});
define("OutSystemsUI.model$CarouselProviderRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$CarouselProviderRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var CarouselProviderRecord = (function (_super) {
__extends(CarouselProviderRecord, _super);
function CarouselProviderRecord(defaults) {
_super.apply(this, arguments);
}
CarouselProviderRecord.attributesToDeclare = function () {
return [
this.attr("CarouselProvider", "carouselProviderAttr", "CarouselProvider", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.CarouselProviderRec());
}, true, OutSystemsUIModel.CarouselProviderRec)
].concat(_super.attributesToDeclare.call(this));
};
CarouselProviderRecord.fromStructure = function (str) {
return new CarouselProviderRecord(new CarouselProviderRecord.RecordClass({
carouselProviderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselProviderRecord._isAnonymousRecord = true;
CarouselProviderRecord.UniqueId = "60ed22b1-487b-1e18-edb2-fceb277aa5d1";
CarouselProviderRecord.init();
return CarouselProviderRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.CarouselProviderRecord = CarouselProviderRecord;

});
define("OutSystemsUI.model$DropdownOptionRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownOptionRec = (function (_super) {
__extends(DropdownOptionRec, _super);
function DropdownOptionRec(defaults) {
_super.apply(this, arguments);
}
DropdownOptionRec.attributesToDeclare = function () {
return [
this.attr("Value", "valueAttr", "value", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "label", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ImageUrlOrIconClass", "imageUrlOrIconClassAttr", "image_url_or_class", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("GroupName", "groupNameAttr", "group_name", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "description", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DropdownOptionRec.init();
return DropdownOptionRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DropdownOptionRec = DropdownOptionRec;

});
define("OutSystemsUI.model$MonthPicker_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$MonthPicker_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MonthPicker_InternalConfigRecord = (function (_super) {
__extends(MonthPicker_InternalConfigRecord, _super);
function MonthPicker_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
MonthPicker_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("MonthPicker_InternalConfig", "monthPicker_InternalConfigAttr", "MonthPicker_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.MonthPicker_InternalConfigRec());
}, true, OutSystemsUIModel.MonthPicker_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
MonthPicker_InternalConfigRecord.fromStructure = function (str) {
return new MonthPicker_InternalConfigRecord(new MonthPicker_InternalConfigRecord.RecordClass({
monthPicker_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MonthPicker_InternalConfigRecord._isAnonymousRecord = true;
MonthPicker_InternalConfigRecord.UniqueId = "60f7027c-05b2-69e6-4f9c-4c41640d4643";
MonthPicker_InternalConfigRecord.init();
return MonthPicker_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.MonthPicker_InternalConfigRecord = MonthPicker_InternalConfigRecord;

});
define("OutSystemsUI.model$TimePicker_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TimePicker_InternalConfigRec = (function (_super) {
__extends(TimePicker_InternalConfigRec, _super);
function TimePicker_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
TimePicker_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("TimeFormat", "timeFormatAttr", "TimeFormat", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Is24Hours", "is24HoursAttr", "Is24Hours", false, false, OS.Types.Boolean, function () {
return true;
}, true), 
this.attr("InitialTime", "initialTimeAttr", "InitialTime", false, false, OS.Types.Time, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MinTime", "minTimeAttr", "MinTime", false, false, OS.Types.Time, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MaxTime", "maxTimeAttr", "MaxTime", false, false, OS.Types.Time, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TimePicker_InternalConfigRec.init();
return TimePicker_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.TimePicker_InternalConfigRec = TimePicker_InternalConfigRec;

});
define("OutSystemsUI.model$DEPRECATED_MasterDetailItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DEPRECATED_MasterDetailItemRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DEPRECATED_MasterDetailItemRecord = (function (_super) {
__extends(DEPRECATED_MasterDetailItemRecord, _super);
function DEPRECATED_MasterDetailItemRecord(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_MasterDetailItemRecord.attributesToDeclare = function () {
return [
this.attr("DEPRECATED_MasterDetailItem", "dEPRECATED_MasterDetailItemAttr", "DEPRECATED_MasterDetailItem", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DEPRECATED_MasterDetailItemRec());
}, true, OutSystemsUIModel.DEPRECATED_MasterDetailItemRec)
].concat(_super.attributesToDeclare.call(this));
};
DEPRECATED_MasterDetailItemRecord.fromStructure = function (str) {
return new DEPRECATED_MasterDetailItemRecord(new DEPRECATED_MasterDetailItemRecord.RecordClass({
dEPRECATED_MasterDetailItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DEPRECATED_MasterDetailItemRecord._isAnonymousRecord = true;
DEPRECATED_MasterDetailItemRecord.UniqueId = "c7e749f2-1266-5bf8-3f6d-7b6126e9e92e";
DEPRECATED_MasterDetailItemRecord.init();
return DEPRECATED_MasterDetailItemRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DEPRECATED_MasterDetailItemRecord = DEPRECATED_MasterDetailItemRecord;

});
define("OutSystemsUI.model$DEPRECATED_MasterDetailItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DEPRECATED_MasterDetailItemRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DEPRECATED_MasterDetailItemRecordList = (function (_super) {
__extends(DEPRECATED_MasterDetailItemRecordList, _super);
function DEPRECATED_MasterDetailItemRecordList(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_MasterDetailItemRecordList.itemType = OutSystemsUIModel.DEPRECATED_MasterDetailItemRecord;
return DEPRECATED_MasterDetailItemRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DEPRECATED_MasterDetailItemRecordList = DEPRECATED_MasterDetailItemRecordList;

});
define("OutSystemsUI.model$Notification_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Notification_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Notification_InternalConfigList = (function (_super) {
__extends(Notification_InternalConfigList, _super);
function Notification_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
Notification_InternalConfigList.itemType = OutSystemsUIModel.Notification_InternalConfigRec;
return Notification_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.Notification_InternalConfigList = Notification_InternalConfigList;

});
define("OutSystemsUI.model$ProgressCircleOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProgressCircleOptionalConfigsRec = (function (_super) {
__extends(ProgressCircleOptionalConfigsRec, _super);
function ProgressCircleOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
ProgressCircleOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("Shape", "shapeAttr", "Shape", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.shape.rounded;
}, true), 
this.attr("AnimateInitialProgress", "animateInitialProgressAttr", "AnimateInitialProgress", false, false, OS.Types.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ProgressCircleOptionalConfigsRec.init();
return ProgressCircleOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ProgressCircleOptionalConfigsRec = ProgressCircleOptionalConfigsRec;

});
define("OutSystemsUI.model$ProgressCircleOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ProgressCircleOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProgressCircleOptionalConfigsRecord = (function (_super) {
__extends(ProgressCircleOptionalConfigsRecord, _super);
function ProgressCircleOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
ProgressCircleOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("ProgressCircleOptionalConfigs", "progressCircleOptionalConfigsAttr", "ProgressCircleOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ProgressCircleOptionalConfigsRec());
}, true, OutSystemsUIModel.ProgressCircleOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
ProgressCircleOptionalConfigsRecord.fromStructure = function (str) {
return new ProgressCircleOptionalConfigsRecord(new ProgressCircleOptionalConfigsRecord.RecordClass({
progressCircleOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProgressCircleOptionalConfigsRecord._isAnonymousRecord = true;
ProgressCircleOptionalConfigsRecord.UniqueId = "646e6c02-297b-69c2-ac89-36bd87cff545";
ProgressCircleOptionalConfigsRecord.init();
return ProgressCircleOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ProgressCircleOptionalConfigsRecord = ProgressCircleOptionalConfigsRecord;

});
define("OutSystemsUI.model$TriggerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TriggerRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TriggerRecord = (function (_super) {
__extends(TriggerRecord, _super);
function TriggerRecord(defaults) {
_super.apply(this, arguments);
}
TriggerRecord.attributesToDeclare = function () {
return [
this.attr("Trigger", "triggerAttr", "Trigger", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.TriggerRec());
}, true, OutSystemsUIModel.TriggerRec)
].concat(_super.attributesToDeclare.call(this));
};
TriggerRecord.fromStructure = function (str) {
return new TriggerRecord(new TriggerRecord.RecordClass({
triggerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TriggerRecord._isAnonymousRecord = true;
TriggerRecord.UniqueId = "ab84a98a-3ac9-de80-e927-8e5b21681a23";
TriggerRecord.init();
return TriggerRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.TriggerRecord = TriggerRecord;

});
define("OutSystemsUI.model$TriggerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TriggerRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TriggerRecordList = (function (_super) {
__extends(TriggerRecordList, _super);
function TriggerRecordList(defaults) {
_super.apply(this, arguments);
}
TriggerRecordList.itemType = OutSystemsUIModel.TriggerRecord;
return TriggerRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.TriggerRecordList = TriggerRecordList;

});
define("OutSystemsUI.model$AccordionIconTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$AccordionIconTypeRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AccordionIconTypeList = (function (_super) {
__extends(AccordionIconTypeList, _super);
function AccordionIconTypeList(defaults) {
_super.apply(this, arguments);
}
AccordionIconTypeList.itemType = OutSystemsUIModel.AccordionIconTypeRec;
return AccordionIconTypeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.AccordionIconTypeList = AccordionIconTypeList;

});
define("OutSystemsUI.model$ProgressTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ProgressTypeRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProgressTypeList = (function (_super) {
__extends(ProgressTypeList, _super);
function ProgressTypeList(defaults) {
_super.apply(this, arguments);
}
ProgressTypeList.itemType = OutSystemsUIModel.ProgressTypeRec;
return ProgressTypeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ProgressTypeList = ProgressTypeList;

});
define("OutSystemsUI.model$CarouselItemsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var CarouselItemsRec = (function (_super) {
__extends(CarouselItemsRec, _super);
function CarouselItemsRec(defaults) {
_super.apply(this, arguments);
}
CarouselItemsRec.attributesToDeclare = function () {
return [
this.attr("Desktop", "desktopAttr", "Desktop", false, false, OS.Types.Integer, function () {
return 1;
}, true), 
this.attr("Tablet", "tabletAttr", "Tablet", false, false, OS.Types.Integer, function () {
return 1;
}, true), 
this.attr("Phone", "phoneAttr", "Phone", false, false, OS.Types.Integer, function () {
return 1;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CarouselItemsRec.init();
return CarouselItemsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.CarouselItemsRec = CarouselItemsRec;

});
define("OutSystemsUI.model$DatePickerRangeOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerRangeOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerRangeOptionalConfigsRecordList = (function (_super) {
__extends(DatePickerRangeOptionalConfigsRecordList, _super);
function DatePickerRangeOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerRangeOptionalConfigsRecordList.itemType = OutSystemsUIModel.DatePickerRangeOptionalConfigsRecord;
return DatePickerRangeOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DatePickerRangeOptionalConfigsRecordList = DatePickerRangeOptionalConfigsRecordList;

});
define("OutSystemsUI.model$BreakColumnsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$BreakColumnsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var BreakColumnsList = (function (_super) {
__extends(BreakColumnsList, _super);
function BreakColumnsList(defaults) {
_super.apply(this, arguments);
}
BreakColumnsList.itemType = OutSystemsUIModel.BreakColumnsRec;
return BreakColumnsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.BreakColumnsList = BreakColumnsList;

});
define("OutSystemsUI.model$DatePickerLanguageRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerLanguageRec = (function (_super) {
__extends(DatePickerLanguageRec, _super);
function DatePickerLanguageRec(defaults) {
_super.apply(this, arguments);
}
DatePickerLanguageRec.attributesToDeclare = function () {
return [
this.attr("Alpha2Code", "alpha2CodeAttr", "Alpha2Code", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("LanguageName", "languageNameAttr", "LanguageName", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerLanguageRec.init();
return DatePickerLanguageRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DatePickerLanguageRec = DatePickerLanguageRec;

});
define("OutSystemsUI.model$DatePickerLanguageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerLanguageRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerLanguageRecord = (function (_super) {
__extends(DatePickerLanguageRecord, _super);
function DatePickerLanguageRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerLanguageRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerLanguage", "datePickerLanguageAttr", "DatePickerLanguage", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DatePickerLanguageRec());
}, true, OutSystemsUIModel.DatePickerLanguageRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerLanguageRecord.fromStructure = function (str) {
return new DatePickerLanguageRecord(new DatePickerLanguageRecord.RecordClass({
datePickerLanguageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerLanguageRecord._isAnonymousRecord = true;
DatePickerLanguageRecord.UniqueId = "673cc0a6-3dbc-3f58-36f7-732ba0712544";
DatePickerLanguageRecord.init();
return DatePickerLanguageRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DatePickerLanguageRecord = DatePickerLanguageRecord;

});
define("OutSystemsUI.model$ShapeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ShapeRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ShapeRecordList = (function (_super) {
__extends(ShapeRecordList, _super);
function ShapeRecordList(defaults) {
_super.apply(this, arguments);
}
ShapeRecordList.itemType = OutSystemsUIModel.ShapeRecord;
return ShapeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ShapeRecordList = ShapeRecordList;

});
define("OutSystemsUI.model$TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord = (function (_super) {
__extends(TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord, _super);
function TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord(defaults) {
_super.apply(this, arguments);
}
TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord.attributesToDeclare = function () {
return [
this.attr("Direction", "directionAttr", "Direction", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("InitialIntervalEnd", "initialIntervalEndAttr", "InitialIntervalEnd", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InitialIntervalStart", "initialIntervalStartAttr", "InitialIntervalStart", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Step", "stepAttr", "Step", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ChangeEventDuringSlide", "changeEventDuringSlideAttr", "ChangeEventDuringSlide", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("IsVertical", "isVerticalAttr", "IsVertical", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("ShowPips", "showPipsAttr", "ShowPips", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("PipsStep", "pipsStepAttr", "PipsStep", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("VerticalHeight", "verticalHeightAttr", "VerticalHeight", false, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord._isAnonymousRecord = true;
TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord.UniqueId = "f01d650d-b89c-bacd-8f4a-32786da5428e";
TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord.init();
return TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord = TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord;

});
define("OutSystemsUI.model$TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList = (function (_super) {
__extends(TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList, _super);
function TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList.itemType = OutSystemsUIModel.TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord;
return TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList = TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList;

});
define("OutSystemsUI.model$ButtonLoading_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ButtonLoading_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ButtonLoading_InternalConfigRecord = (function (_super) {
__extends(ButtonLoading_InternalConfigRecord, _super);
function ButtonLoading_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
ButtonLoading_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("ButtonLoading_InternalConfig", "buttonLoading_InternalConfigAttr", "ButtonLoading_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ButtonLoading_InternalConfigRec());
}, true, OutSystemsUIModel.ButtonLoading_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
ButtonLoading_InternalConfigRecord.fromStructure = function (str) {
return new ButtonLoading_InternalConfigRecord(new ButtonLoading_InternalConfigRecord.RecordClass({
buttonLoading_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ButtonLoading_InternalConfigRecord._isAnonymousRecord = true;
ButtonLoading_InternalConfigRecord.UniqueId = "f4b8704c-ebd5-3b0a-2ed3-61a846fc1b0e";
ButtonLoading_InternalConfigRecord.init();
return ButtonLoading_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ButtonLoading_InternalConfigRecord = ButtonLoading_InternalConfigRecord;

});
define("OutSystemsUI.model$ButtonLoading_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ButtonLoading_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ButtonLoading_InternalConfigRecordList = (function (_super) {
__extends(ButtonLoading_InternalConfigRecordList, _super);
function ButtonLoading_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
ButtonLoading_InternalConfigRecordList.itemType = OutSystemsUIModel.ButtonLoading_InternalConfigRecord;
return ButtonLoading_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ButtonLoading_InternalConfigRecordList = ButtonLoading_InternalConfigRecordList;

});
define("OutSystemsUI.model$SectionIndex_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SectionIndex_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SectionIndex_InternalConfigList = (function (_super) {
__extends(SectionIndex_InternalConfigList, _super);
function SectionIndex_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
SectionIndex_InternalConfigList.itemType = OutSystemsUIModel.SectionIndex_InternalConfigRec;
return SectionIndex_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.SectionIndex_InternalConfigList = SectionIndex_InternalConfigList;

});
define("OutSystemsUI.model$DeviceConfigurationRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DeviceConfigurationRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DeviceConfigurationRecord = (function (_super) {
__extends(DeviceConfigurationRecord, _super);
function DeviceConfigurationRecord(defaults) {
_super.apply(this, arguments);
}
DeviceConfigurationRecord.attributesToDeclare = function () {
return [
this.attr("DeviceConfiguration", "deviceConfigurationAttr", "DeviceConfiguration", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DeviceConfigurationRec());
}, true, OutSystemsUIModel.DeviceConfigurationRec)
].concat(_super.attributesToDeclare.call(this));
};
DeviceConfigurationRecord.fromStructure = function (str) {
return new DeviceConfigurationRecord(new DeviceConfigurationRecord.RecordClass({
deviceConfigurationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DeviceConfigurationRecord._isAnonymousRecord = true;
DeviceConfigurationRecord.UniqueId = "abb6a3eb-a858-3e4a-b062-5de8f38fb719";
DeviceConfigurationRecord.init();
return DeviceConfigurationRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DeviceConfigurationRecord = DeviceConfigurationRecord;

});
define("OutSystemsUI.model$DeviceConfigurationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DeviceConfigurationRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DeviceConfigurationRecordList = (function (_super) {
__extends(DeviceConfigurationRecordList, _super);
function DeviceConfigurationRecordList(defaults) {
_super.apply(this, arguments);
}
DeviceConfigurationRecordList.itemType = OutSystemsUIModel.DeviceConfigurationRecord;
return DeviceConfigurationRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DeviceConfigurationRecordList = DeviceConfigurationRecordList;

});
define("OutSystemsUI.model$MessageStatusList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$MessageStatusRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MessageStatusList = (function (_super) {
__extends(MessageStatusList, _super);
function MessageStatusList(defaults) {
_super.apply(this, arguments);
}
MessageStatusList.itemType = OutSystemsUIModel.MessageStatusRec;
return MessageStatusList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.MessageStatusList = MessageStatusList;

});
define("OutSystemsUI.model$MonthOrderYearRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MonthOrderYearRec = (function (_super) {
__extends(MonthOrderYearRec, _super);
function MonthOrderYearRec(defaults) {
_super.apply(this, arguments);
}
MonthOrderYearRec.attributesToDeclare = function () {
return [
this.attr("Month", "monthAttr", "Month", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("MonthOrder", "monthOrderAttr", "MonthOrder", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Year", "yearAttr", "Year", false, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MonthOrderYearRec.init();
return MonthOrderYearRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.MonthOrderYearRec = MonthOrderYearRec;

});
define("OutSystemsUI.model$StackedCardsPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$StackedCardsPositionRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var StackedCardsPositionRecord = (function (_super) {
__extends(StackedCardsPositionRecord, _super);
function StackedCardsPositionRecord(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionRecord.attributesToDeclare = function () {
return [
this.attr("StackedCardsPosition", "stackedCardsPositionAttr", "StackedCardsPosition", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.StackedCardsPositionRec());
}, true, OutSystemsUIModel.StackedCardsPositionRec)
].concat(_super.attributesToDeclare.call(this));
};
StackedCardsPositionRecord.fromStructure = function (str) {
return new StackedCardsPositionRecord(new StackedCardsPositionRecord.RecordClass({
stackedCardsPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StackedCardsPositionRecord._isAnonymousRecord = true;
StackedCardsPositionRecord.UniqueId = "967cb657-10fd-1a34-6ebf-0b0d8dbea56b";
StackedCardsPositionRecord.init();
return StackedCardsPositionRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.StackedCardsPositionRecord = StackedCardsPositionRecord;

});
define("OutSystemsUI.model$StackedCardsPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$StackedCardsPositionRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var StackedCardsPositionRecordList = (function (_super) {
__extends(StackedCardsPositionRecordList, _super);
function StackedCardsPositionRecordList(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionRecordList.itemType = OutSystemsUIModel.StackedCardsPositionRecord;
return StackedCardsPositionRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.StackedCardsPositionRecordList = StackedCardsPositionRecordList;

});
define("OutSystemsUI.model$MonthOrderYearRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$MonthOrderYearRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MonthOrderYearRecord = (function (_super) {
__extends(MonthOrderYearRecord, _super);
function MonthOrderYearRecord(defaults) {
_super.apply(this, arguments);
}
MonthOrderYearRecord.attributesToDeclare = function () {
return [
this.attr("MonthOrderYear", "monthOrderYearAttr", "MonthOrderYear", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.MonthOrderYearRec());
}, true, OutSystemsUIModel.MonthOrderYearRec)
].concat(_super.attributesToDeclare.call(this));
};
MonthOrderYearRecord.fromStructure = function (str) {
return new MonthOrderYearRecord(new MonthOrderYearRecord.RecordClass({
monthOrderYearAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MonthOrderYearRecord._isAnonymousRecord = true;
MonthOrderYearRecord.UniqueId = "e14f3c77-ad4f-7c2d-7fca-d14fc0ab9bf1";
MonthOrderYearRecord.init();
return MonthOrderYearRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.MonthOrderYearRecord = MonthOrderYearRecord;

});
define("OutSystemsUI.model$MonthOrderYearRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$MonthOrderYearRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MonthOrderYearRecordList = (function (_super) {
__extends(MonthOrderYearRecordList, _super);
function MonthOrderYearRecordList(defaults) {
_super.apply(this, arguments);
}
MonthOrderYearRecordList.itemType = OutSystemsUIModel.MonthOrderYearRecord;
return MonthOrderYearRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.MonthOrderYearRecordList = MonthOrderYearRecordList;

});
define("OutSystemsUI.model$BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord = (function (_super) {
__extends(BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord, _super);
function BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord(defaults) {
_super.apply(this, arguments);
}
BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord.attributesToDeclare = function () {
return [
this.attr("ChangeEventDuringSlide", "changeEventDuringSlideAttr", "ChangeEventDuringSlide", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("ShowPips", "showPipsAttr", "ShowPips", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("InitialIntervalEnd", "initialIntervalEndAttr", "InitialIntervalEnd", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("InitialIntervalStart", "initialIntervalStartAttr", "InitialIntervalStart", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("PipsStep", "pipsStepAttr", "PipsStep", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Step", "stepAttr", "Step", false, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord._isAnonymousRecord = true;
BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord.UniqueId = "845b5f28-a6e4-8277-561b-d4b51c5e965a";
BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord.init();
return BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord = BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord;

});
define("OutSystemsUI.model$BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList = (function (_super) {
__extends(BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList, _super);
function BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList.itemType = OutSystemsUIModel.BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord;
return BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList = BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList;

});
define("OutSystemsUI.model$DirectionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DirectionRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DirectionList = (function (_super) {
__extends(DirectionList, _super);
function DirectionList(defaults) {
_super.apply(this, arguments);
}
DirectionList.itemType = OutSystemsUIModel.DirectionRec;
return DirectionList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DirectionList = DirectionList;

});
define("OutSystemsUI.model$DropdownOptionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownOptionRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownOptionList = (function (_super) {
__extends(DropdownOptionList, _super);
function DropdownOptionList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionList.itemType = OutSystemsUIModel.DropdownOptionRec;
return DropdownOptionList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DropdownOptionList = DropdownOptionList;

});
define("OutSystemsUI.model$DropdownSearch_InternalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownOptionList"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownSearch_InternalConfigsRec = (function (_super) {
__extends(DropdownSearch_InternalConfigsRec, _super);
function DropdownSearch_InternalConfigsRec(defaults) {
_super.apply(this, arguments);
}
DropdownSearch_InternalConfigsRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("OptionsList", "optionsListAttr", "OptionsList", true, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownOptionList());
}, true, OutSystemsUIModel.DropdownOptionList), 
this.attr("StartingSelection", "startingSelectionAttr", "StartingSelection", false, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownOptionList());
}, true, OutSystemsUIModel.DropdownOptionList), 
this.attr("Prompt", "promptAttr", "Prompt", false, false, OS.Types.Text, function () {
return "Select an item";
}, true), 
this.attr("AllowMultipleSelection", "allowMultipleSelectionAttr", "AllowMultipleSelection", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("NoOptionsText", "noOptionsTextAttr", "NoOptionsText", false, false, OS.Types.Text, function () {
return "0";
}, true), 
this.attr("NoResultsText", "noResultsTextAttr", "NoResultsText", false, false, OS.Types.Text, function () {
return "0";
}, true), 
this.attr("SearchPrompt", "searchPromptAttr", "SearchPrompt", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "1";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DropdownSearch_InternalConfigsRec.init();
return DropdownSearch_InternalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DropdownSearch_InternalConfigsRec = DropdownSearch_InternalConfigsRec;

});
define("OutSystemsUI.model$DropdownSearch_InternalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownSearch_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownSearch_InternalConfigsRecord = (function (_super) {
__extends(DropdownSearch_InternalConfigsRecord, _super);
function DropdownSearch_InternalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DropdownSearch_InternalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DropdownSearch_InternalConfigs", "dropdownSearch_InternalConfigsAttr", "DropdownSearch_InternalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownSearch_InternalConfigsRec());
}, true, OutSystemsUIModel.DropdownSearch_InternalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownSearch_InternalConfigsRecord.fromStructure = function (str) {
return new DropdownSearch_InternalConfigsRecord(new DropdownSearch_InternalConfigsRecord.RecordClass({
dropdownSearch_InternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownSearch_InternalConfigsRecord._isAnonymousRecord = true;
DropdownSearch_InternalConfigsRecord.UniqueId = "7925a19e-6fd0-a09e-9058-a96c7f19b104";
DropdownSearch_InternalConfigsRecord.init();
return DropdownSearch_InternalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DropdownSearch_InternalConfigsRecord = DropdownSearch_InternalConfigsRecord;

});
define("OutSystemsUI.model$LogTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var LogTypeRec = (function (_super) {
__extends(LogTypeRec, _super);
function LogTypeRec(defaults) {
_super.apply(this, arguments);
}
LogTypeRec.attributesToDeclare = function () {
return [
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LogTypeRec.init();
return LogTypeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.LogTypeRec = LogTypeRec;

});
define("OutSystemsUI.model$DropdownTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownTypeRec = (function (_super) {
__extends(DropdownTypeRec, _super);
function DropdownTypeRec(defaults) {
_super.apply(this, arguments);
}
DropdownTypeRec.attributesToDeclare = function () {
return [
this.attr("Mode", "modeAttr", "Mode", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DropdownTypeRec.fromStructure = function (str) {
return new DropdownTypeRec(new DropdownTypeRec.RecordClass({
modeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownTypeRec.init();
return DropdownTypeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DropdownTypeRec = DropdownTypeRec;

});
define("OutSystemsUI.model$ProviderEventReturnMessageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ProviderEventReturnMessageRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProviderEventReturnMessageList = (function (_super) {
__extends(ProviderEventReturnMessageList, _super);
function ProviderEventReturnMessageList(defaults) {
_super.apply(this, arguments);
}
ProviderEventReturnMessageList.itemType = OutSystemsUIModel.ProviderEventReturnMessageRec;
return ProviderEventReturnMessageList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ProviderEventReturnMessageList = ProviderEventReturnMessageList;

});
define("OutSystemsUI.model$DeviceResponsiveRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DeviceResponsiveRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DeviceResponsiveRecordList = (function (_super) {
__extends(DeviceResponsiveRecordList, _super);
function DeviceResponsiveRecordList(defaults) {
_super.apply(this, arguments);
}
DeviceResponsiveRecordList.itemType = OutSystemsUIModel.DeviceResponsiveRecord;
return DeviceResponsiveRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DeviceResponsiveRecordList = DeviceResponsiveRecordList;

});
define("OutSystemsUI.model$ReturnMessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ReturnMessageRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ReturnMessageRecord = (function (_super) {
__extends(ReturnMessageRecord, _super);
function ReturnMessageRecord(defaults) {
_super.apply(this, arguments);
}
ReturnMessageRecord.attributesToDeclare = function () {
return [
this.attr("ReturnMessage", "returnMessageAttr", "ReturnMessage", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ReturnMessageRec());
}, true, OutSystemsUIModel.ReturnMessageRec)
].concat(_super.attributesToDeclare.call(this));
};
ReturnMessageRecord.fromStructure = function (str) {
return new ReturnMessageRecord(new ReturnMessageRecord.RecordClass({
returnMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ReturnMessageRecord._isAnonymousRecord = true;
ReturnMessageRecord.UniqueId = "de4b3bac-d4ec-5ee2-3880-b64e848f90da";
ReturnMessageRecord.init();
return ReturnMessageRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ReturnMessageRecord = ReturnMessageRecord;

});
define("OutSystemsUI.model$ReturnMessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ReturnMessageRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ReturnMessageRecordList = (function (_super) {
__extends(ReturnMessageRecordList, _super);
function ReturnMessageRecordList(defaults) {
_super.apply(this, arguments);
}
ReturnMessageRecordList.itemType = OutSystemsUIModel.ReturnMessageRecord;
return ReturnMessageRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ReturnMessageRecordList = ReturnMessageRecordList;

});
define("OutSystemsUI.model$DatePickerCalendarTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerCalendarTypeRec = (function (_super) {
__extends(DatePickerCalendarTypeRec, _super);
function DatePickerCalendarTypeRec(defaults) {
_super.apply(this, arguments);
}
DatePickerCalendarTypeRec.attributesToDeclare = function () {
return [
this.attr("Mode", "modeAttr", "Mode", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerCalendarTypeRec.fromStructure = function (str) {
return new DatePickerCalendarTypeRec(new DatePickerCalendarTypeRec.RecordClass({
modeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerCalendarTypeRec.init();
return DatePickerCalendarTypeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DatePickerCalendarTypeRec = DatePickerCalendarTypeRec;

});
define("OutSystemsUI.model$DatePickerCalendarTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerCalendarTypeRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerCalendarTypeList = (function (_super) {
__extends(DatePickerCalendarTypeList, _super);
function DatePickerCalendarTypeList(defaults) {
_super.apply(this, arguments);
}
DatePickerCalendarTypeList.itemType = OutSystemsUIModel.DatePickerCalendarTypeRec;
return DatePickerCalendarTypeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DatePickerCalendarTypeList = DatePickerCalendarTypeList;

});
define("OutSystemsUI.model$CarouselNavigationList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$CarouselNavigationRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var CarouselNavigationList = (function (_super) {
__extends(CarouselNavigationList, _super);
function CarouselNavigationList(defaults) {
_super.apply(this, arguments);
}
CarouselNavigationList.itemType = OutSystemsUIModel.CarouselNavigationRec;
return CarouselNavigationList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.CarouselNavigationList = CarouselNavigationList;

});
define("OutSystemsUI.model$NotificationOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$NotificationOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var NotificationOptionalConfigsRecord = (function (_super) {
__extends(NotificationOptionalConfigsRecord, _super);
function NotificationOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
NotificationOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("NotificationOptionalConfigs", "notificationOptionalConfigsAttr", "NotificationOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.NotificationOptionalConfigsRec());
}, true, OutSystemsUIModel.NotificationOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
NotificationOptionalConfigsRecord.fromStructure = function (str) {
return new NotificationOptionalConfigsRecord(new NotificationOptionalConfigsRecord.RecordClass({
notificationOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NotificationOptionalConfigsRecord._isAnonymousRecord = true;
NotificationOptionalConfigsRecord.UniqueId = "e5ad8f04-c380-4744-1643-c6868992c277";
NotificationOptionalConfigsRecord.init();
return NotificationOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.NotificationOptionalConfigsRecord = NotificationOptionalConfigsRecord;

});
define("OutSystemsUI.model$NotificationOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$NotificationOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var NotificationOptionalConfigsRecordList = (function (_super) {
__extends(NotificationOptionalConfigsRecordList, _super);
function NotificationOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
NotificationOptionalConfigsRecordList.itemType = OutSystemsUIModel.NotificationOptionalConfigsRecord;
return NotificationOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.NotificationOptionalConfigsRecordList = NotificationOptionalConfigsRecordList;

});
define("OutSystemsUI.model$DropdownServerSide_InternalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownServerSide_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownServerSide_InternalConfigsRecord = (function (_super) {
__extends(DropdownServerSide_InternalConfigsRecord, _super);
function DropdownServerSide_InternalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DropdownServerSide_InternalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DropdownServerSide_InternalConfigs", "dropdownServerSide_InternalConfigsAttr", "DropdownServerSide_InternalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownServerSide_InternalConfigsRec());
}, true, OutSystemsUIModel.DropdownServerSide_InternalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownServerSide_InternalConfigsRecord.fromStructure = function (str) {
return new DropdownServerSide_InternalConfigsRecord(new DropdownServerSide_InternalConfigsRecord.RecordClass({
dropdownServerSide_InternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownServerSide_InternalConfigsRecord._isAnonymousRecord = true;
DropdownServerSide_InternalConfigsRecord.UniqueId = "7d9f2e2b-c8ad-2119-3b3b-806a3a092d80";
DropdownServerSide_InternalConfigsRecord.init();
return DropdownServerSide_InternalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DropdownServerSide_InternalConfigsRecord = DropdownServerSide_InternalConfigsRecord;

});
define("OutSystemsUI.model$RangeSliderTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var RangeSliderTypeRec = (function (_super) {
__extends(RangeSliderTypeRec, _super);
function RangeSliderTypeRec(defaults) {
_super.apply(this, arguments);
}
RangeSliderTypeRec.attributesToDeclare = function () {
return [
this.attr("Mode", "modeAttr", "Mode", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RangeSliderTypeRec.fromStructure = function (str) {
return new RangeSliderTypeRec(new RangeSliderTypeRec.RecordClass({
modeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RangeSliderTypeRec.init();
return RangeSliderTypeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.RangeSliderTypeRec = RangeSliderTypeRec;

});
define("OutSystemsUI.model$TabsContentItem_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TabsContentItem_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TabsContentItem_InternalConfigRecord = (function (_super) {
__extends(TabsContentItem_InternalConfigRecord, _super);
function TabsContentItem_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
TabsContentItem_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("TabsContentItem_InternalConfig", "tabsContentItem_InternalConfigAttr", "TabsContentItem_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.TabsContentItem_InternalConfigRec());
}, true, OutSystemsUIModel.TabsContentItem_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
TabsContentItem_InternalConfigRecord.fromStructure = function (str) {
return new TabsContentItem_InternalConfigRecord(new TabsContentItem_InternalConfigRecord.RecordClass({
tabsContentItem_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TabsContentItem_InternalConfigRecord._isAnonymousRecord = true;
TabsContentItem_InternalConfigRecord.UniqueId = "b5f68720-e8ed-79c9-aa70-970bcdd12b24";
TabsContentItem_InternalConfigRecord.init();
return TabsContentItem_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.TabsContentItem_InternalConfigRecord = TabsContentItem_InternalConfigRecord;

});
define("OutSystemsUI.model$TabsContentItem_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TabsContentItem_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TabsContentItem_InternalConfigRecordList = (function (_super) {
__extends(TabsContentItem_InternalConfigRecordList, _super);
function TabsContentItem_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
TabsContentItem_InternalConfigRecordList.itemType = OutSystemsUIModel.TabsContentItem_InternalConfigRecord;
return TabsContentItem_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.TabsContentItem_InternalConfigRecordList = TabsContentItem_InternalConfigRecordList;

});
define("OutSystemsUI.model$DropdownTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownTypeRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownTypeRecord = (function (_super) {
__extends(DropdownTypeRecord, _super);
function DropdownTypeRecord(defaults) {
_super.apply(this, arguments);
}
DropdownTypeRecord.attributesToDeclare = function () {
return [
this.attr("DropdownType", "dropdownTypeAttr", "DropdownType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownTypeRec());
}, true, OutSystemsUIModel.DropdownTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownTypeRecord.fromStructure = function (str) {
return new DropdownTypeRecord(new DropdownTypeRecord.RecordClass({
dropdownTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownTypeRecord._isAnonymousRecord = true;
DropdownTypeRecord.UniqueId = "7f56ea63-0614-3284-3ab4-dd16f4578b32";
DropdownTypeRecord.init();
return DropdownTypeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DropdownTypeRecord = DropdownTypeRecord;

});
define("OutSystemsUI.model$DatePickerOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerOptionalConfigsList = (function (_super) {
__extends(DatePickerOptionalConfigsList, _super);
function DatePickerOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DatePickerOptionalConfigsList.itemType = OutSystemsUIModel.DatePickerOptionalConfigsRec;
return DatePickerOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DatePickerOptionalConfigsList = DatePickerOptionalConfigsList;

});
define("OutSystemsUI.model$RangeSliderOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$RangeSliderOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var RangeSliderOptionalConfigsRecordList = (function (_super) {
__extends(RangeSliderOptionalConfigsRecordList, _super);
function RangeSliderOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
RangeSliderOptionalConfigsRecordList.itemType = OutSystemsUIModel.RangeSliderOptionalConfigsRecord;
return RangeSliderOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.RangeSliderOptionalConfigsRecordList = RangeSliderOptionalConfigsRecordList;

});
define("OutSystemsUI.model$ProgressBar_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ProgressBar_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProgressBar_InternalConfigRecordList = (function (_super) {
__extends(ProgressBar_InternalConfigRecordList, _super);
function ProgressBar_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
ProgressBar_InternalConfigRecordList.itemType = OutSystemsUIModel.ProgressBar_InternalConfigRecord;
return ProgressBar_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ProgressBar_InternalConfigRecordList = ProgressBar_InternalConfigRecordList;

});
define("OutSystemsUI.model$TabsHeaderItem_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TabsHeaderItem_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TabsHeaderItem_InternalConfigRecord = (function (_super) {
__extends(TabsHeaderItem_InternalConfigRecord, _super);
function TabsHeaderItem_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
TabsHeaderItem_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("TabsHeaderItem_InternalConfig", "tabsHeaderItem_InternalConfigAttr", "TabsHeaderItem_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.TabsHeaderItem_InternalConfigRec());
}, true, OutSystemsUIModel.TabsHeaderItem_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
TabsHeaderItem_InternalConfigRecord.fromStructure = function (str) {
return new TabsHeaderItem_InternalConfigRecord(new TabsHeaderItem_InternalConfigRecord.RecordClass({
tabsHeaderItem_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TabsHeaderItem_InternalConfigRecord._isAnonymousRecord = true;
TabsHeaderItem_InternalConfigRecord.UniqueId = "81cffcb4-7412-4022-b5e4-e9bef9a608da";
TabsHeaderItem_InternalConfigRecord.init();
return TabsHeaderItem_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.TabsHeaderItem_InternalConfigRecord = TabsHeaderItem_InternalConfigRecord;

});
define("OutSystemsUI.model$DatePickerRange_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerRange_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerRange_InternalConfigList = (function (_super) {
__extends(DatePickerRange_InternalConfigList, _super);
function DatePickerRange_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
DatePickerRange_InternalConfigList.itemType = OutSystemsUIModel.DatePickerRange_InternalConfigRec;
return DatePickerRange_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DatePickerRange_InternalConfigList = DatePickerRange_InternalConfigList;

});
define("OutSystemsUI.model$DropdownTagsOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownTagsOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownTagsOptionalConfigsList = (function (_super) {
__extends(DropdownTagsOptionalConfigsList, _super);
function DropdownTagsOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DropdownTagsOptionalConfigsList.itemType = OutSystemsUIModel.DropdownTagsOptionalConfigsRec;
return DropdownTagsOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DropdownTagsOptionalConfigsList = DropdownTagsOptionalConfigsList;

});
define("OutSystemsUI.model$ColorRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ColorRec = (function (_super) {
__extends(ColorRec, _super);
function ColorRec(defaults) {
_super.apply(this, arguments);
}
ColorRec.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "Color", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ColorRec.init();
return ColorRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ColorRec = ColorRec;

});
define("OutSystemsUI.model$RangeSlider_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$RangeSlider_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var RangeSlider_InternalConfigList = (function (_super) {
__extends(RangeSlider_InternalConfigList, _super);
function RangeSlider_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
RangeSlider_InternalConfigList.itemType = OutSystemsUIModel.RangeSlider_InternalConfigRec;
return RangeSlider_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.RangeSlider_InternalConfigList = RangeSlider_InternalConfigList;

});
define("OutSystemsUI.model$RangeSliderTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$RangeSliderTypeRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var RangeSliderTypeList = (function (_super) {
__extends(RangeSliderTypeList, _super);
function RangeSliderTypeList(defaults) {
_super.apply(this, arguments);
}
RangeSliderTypeList.itemType = OutSystemsUIModel.RangeSliderTypeRec;
return RangeSliderTypeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.RangeSliderTypeList = RangeSliderTypeList;

});
define("OutSystemsUI.model$DatePicker_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePicker_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePicker_InternalConfigRecordList = (function (_super) {
__extends(DatePicker_InternalConfigRecordList, _super);
function DatePicker_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
DatePicker_InternalConfigRecordList.itemType = OutSystemsUIModel.DatePicker_InternalConfigRecord;
return DatePicker_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DatePicker_InternalConfigRecordList = DatePicker_InternalConfigRecordList;

});
define("OutSystemsUI.model$ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ColorRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ColorRecord = (function (_super) {
__extends(ColorRecord, _super);
function ColorRecord(defaults) {
_super.apply(this, arguments);
}
ColorRecord.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "Color", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ColorRec());
}, true, OutSystemsUIModel.ColorRec)
].concat(_super.attributesToDeclare.call(this));
};
ColorRecord.fromStructure = function (str) {
return new ColorRecord(new ColorRecord.RecordClass({
colorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColorRecord._isAnonymousRecord = true;
ColorRecord.UniqueId = "87351e3b-0fa2-ca59-cf6c-6749c6405006";
ColorRecord.init();
return ColorRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ColorRecord = ColorRecord;

});
define("OutSystemsUI.model$Sidebar_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Sidebar_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Sidebar_InternalConfigList = (function (_super) {
__extends(Sidebar_InternalConfigList, _super);
function Sidebar_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
Sidebar_InternalConfigList.itemType = OutSystemsUIModel.Sidebar_InternalConfigRec;
return Sidebar_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.Sidebar_InternalConfigList = Sidebar_InternalConfigList;

});
define("OutSystemsUI.model$BooleanBooleanRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var BooleanBooleanRecord = (function (_super) {
__extends(BooleanBooleanRecord, _super);
function BooleanBooleanRecord(defaults) {
_super.apply(this, arguments);
}
BooleanBooleanRecord.attributesToDeclare = function () {
return [
this.attr("IsDisable", "isDisableAttr", "IsDisable", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("IsRemoveItems", "isRemoveItemsAttr", "IsRemoveItems", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BooleanBooleanRecord._isAnonymousRecord = true;
BooleanBooleanRecord.UniqueId = "98ce383a-bd92-f0f4-c51d-49a4fcc3bfcc";
BooleanBooleanRecord.init();
return BooleanBooleanRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.BooleanBooleanRecord = BooleanBooleanRecord;

});
define("OutSystemsUI.model$BooleanBooleanRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$BooleanBooleanRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var BooleanBooleanRecordList = (function (_super) {
__extends(BooleanBooleanRecordList, _super);
function BooleanBooleanRecordList(defaults) {
_super.apply(this, arguments);
}
BooleanBooleanRecordList.itemType = OutSystemsUIModel.BooleanBooleanRecord;
return BooleanBooleanRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.BooleanBooleanRecordList = BooleanBooleanRecordList;

});
define("OutSystemsUI.model$SizeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SizeRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SizeList = (function (_super) {
__extends(SizeList, _super);
function SizeList(defaults) {
_super.apply(this, arguments);
}
SizeList.itemType = OutSystemsUIModel.SizeRec;
return SizeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.SizeList = SizeList;

});
define("OutSystemsUI.model$Notification_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Notification_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Notification_InternalConfigRecord = (function (_super) {
__extends(Notification_InternalConfigRecord, _super);
function Notification_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
Notification_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("Notification_InternalConfig", "notification_InternalConfigAttr", "Notification_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.Notification_InternalConfigRec());
}, true, OutSystemsUIModel.Notification_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
Notification_InternalConfigRecord.fromStructure = function (str) {
return new Notification_InternalConfigRecord(new Notification_InternalConfigRecord.RecordClass({
notification_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Notification_InternalConfigRecord._isAnonymousRecord = true;
Notification_InternalConfigRecord.UniqueId = "f52343ea-94aa-b4a4-4927-e9cbc0e79a19";
Notification_InternalConfigRecord.init();
return Notification_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.Notification_InternalConfigRecord = Notification_InternalConfigRecord;

});
define("OutSystemsUI.model$Notification_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Notification_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Notification_InternalConfigRecordList = (function (_super) {
__extends(Notification_InternalConfigRecordList, _super);
function Notification_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
Notification_InternalConfigRecordList.itemType = OutSystemsUIModel.Notification_InternalConfigRecord;
return Notification_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.Notification_InternalConfigRecordList = Notification_InternalConfigRecordList;

});
define("OutSystemsUI.model$DatePickerProviderRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerProviderRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerProviderRecord = (function (_super) {
__extends(DatePickerProviderRecord, _super);
function DatePickerProviderRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerProviderRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerProvider", "datePickerProviderAttr", "DatePickerProvider", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DatePickerProviderRec());
}, true, OutSystemsUIModel.DatePickerProviderRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerProviderRecord.fromStructure = function (str) {
return new DatePickerProviderRecord(new DatePickerProviderRecord.RecordClass({
datePickerProviderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerProviderRecord._isAnonymousRecord = true;
DatePickerProviderRecord.UniqueId = "8d602185-11e7-c5a6-826e-7f1bde0eda29";
DatePickerProviderRecord.init();
return DatePickerProviderRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DatePickerProviderRecord = DatePickerProviderRecord;

});
define("OutSystemsUI.model$BooleanTypesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$BooleanTypesRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var BooleanTypesRecordList = (function (_super) {
__extends(BooleanTypesRecordList, _super);
function BooleanTypesRecordList(defaults) {
_super.apply(this, arguments);
}
BooleanTypesRecordList.itemType = OutSystemsUIModel.BooleanTypesRecord;
return BooleanTypesRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.BooleanTypesRecordList = BooleanTypesRecordList;

});
define("OutSystemsUI.model$TimePicker_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TimePicker_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TimePicker_InternalConfigRecord = (function (_super) {
__extends(TimePicker_InternalConfigRecord, _super);
function TimePicker_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
TimePicker_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("TimePicker_InternalConfig", "timePicker_InternalConfigAttr", "TimePicker_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.TimePicker_InternalConfigRec());
}, true, OutSystemsUIModel.TimePicker_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
TimePicker_InternalConfigRecord.fromStructure = function (str) {
return new TimePicker_InternalConfigRecord(new TimePicker_InternalConfigRecord.RecordClass({
timePicker_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TimePicker_InternalConfigRecord._isAnonymousRecord = true;
TimePicker_InternalConfigRecord.UniqueId = "8f317280-44d1-3218-6421-3488837bc67a";
TimePicker_InternalConfigRecord.init();
return TimePicker_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.TimePicker_InternalConfigRecord = TimePicker_InternalConfigRecord;

});
define("OutSystemsUI.model$MonthYearList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$MonthYearRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MonthYearList = (function (_super) {
__extends(MonthYearList, _super);
function MonthYearList(defaults) {
_super.apply(this, arguments);
}
MonthYearList.itemType = OutSystemsUIModel.MonthYearRec;
return MonthYearList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.MonthYearList = MonthYearList;

});
define("OutSystemsUI.model$RangeSliderProviderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$RangeSliderProviderRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var RangeSliderProviderRecordList = (function (_super) {
__extends(RangeSliderProviderRecordList, _super);
function RangeSliderProviderRecordList(defaults) {
_super.apply(this, arguments);
}
RangeSliderProviderRecordList.itemType = OutSystemsUIModel.RangeSliderProviderRecord;
return RangeSliderProviderRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.RangeSliderProviderRecordList = RangeSliderProviderRecordList;

});
define("OutSystemsUI.model$TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord = (function (_super) {
__extends(TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord, _super);
function TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord(defaults) {
_super.apply(this, arguments);
}
TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord.attributesToDeclare = function () {
return [
this.attr("Direction", "directionAttr", "Direction", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("InitialValue", "initialValueAttr", "InitialValue", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Step", "stepAttr", "Step", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ChangeEventDuringSlide", "changeEventDuringSlideAttr", "ChangeEventDuringSlide", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("IsVertical", "isVerticalAttr", "IsVertical", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("ShowPips", "showPipsAttr", "ShowPips", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("PipsStep", "pipsStepAttr", "PipsStep", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("VerticalHeight", "verticalHeightAttr", "VerticalHeight", false, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord._isAnonymousRecord = true;
TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord.UniqueId = "c3613394-da5e-a68f-3021-77112ad784ed";
TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord.init();
return TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord = TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord;

});
define("OutSystemsUI.model$TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList = (function (_super) {
__extends(TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList, _super);
function TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList.itemType = OutSystemsUIModel.TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord;
return TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList = TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList;

});
define("OutSystemsUI.model$CarouselOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$CarouselOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var CarouselOptionalConfigsRecordList = (function (_super) {
__extends(CarouselOptionalConfigsRecordList, _super);
function CarouselOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselOptionalConfigsRecordList.itemType = OutSystemsUIModel.CarouselOptionalConfigsRecord;
return CarouselOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.CarouselOptionalConfigsRecordList = CarouselOptionalConfigsRecordList;

});
define("OutSystemsUI.model$Carousel_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Carousel_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Carousel_InternalConfigRecordList = (function (_super) {
__extends(Carousel_InternalConfigRecordList, _super);
function Carousel_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
Carousel_InternalConfigRecordList.itemType = OutSystemsUIModel.Carousel_InternalConfigRecord;
return Carousel_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.Carousel_InternalConfigRecordList = Carousel_InternalConfigRecordList;

});
define("OutSystemsUI.model$DropdownTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownTypeRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownTypeList = (function (_super) {
__extends(DropdownTypeList, _super);
function DropdownTypeList(defaults) {
_super.apply(this, arguments);
}
DropdownTypeList.itemType = OutSystemsUIModel.DropdownTypeRec;
return DropdownTypeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DropdownTypeList = DropdownTypeList;

});
define("OutSystemsUI.model$DropdownSearch_InternalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownSearch_InternalConfigsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownSearch_InternalConfigsRecordList = (function (_super) {
__extends(DropdownSearch_InternalConfigsRecordList, _super);
function DropdownSearch_InternalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownSearch_InternalConfigsRecordList.itemType = OutSystemsUIModel.DropdownSearch_InternalConfigsRecord;
return DropdownSearch_InternalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DropdownSearch_InternalConfigsRecordList = DropdownSearch_InternalConfigsRecordList;

});
define("OutSystemsUI.model$ProgressCircleOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ProgressCircleOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProgressCircleOptionalConfigsRecordList = (function (_super) {
__extends(ProgressCircleOptionalConfigsRecordList, _super);
function ProgressCircleOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
ProgressCircleOptionalConfigsRecordList.itemType = OutSystemsUIModel.ProgressCircleOptionalConfigsRecord;
return ProgressCircleOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ProgressCircleOptionalConfigsRecordList = ProgressCircleOptionalConfigsRecordList;

});
define("OutSystemsUI.model$DatePickerProviderList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerProviderRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerProviderList = (function (_super) {
__extends(DatePickerProviderList, _super);
function DatePickerProviderList(defaults) {
_super.apply(this, arguments);
}
DatePickerProviderList.itemType = OutSystemsUIModel.DatePickerProviderRec;
return DatePickerProviderList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DatePickerProviderList = DatePickerProviderList;

});
define("OutSystemsUI.model$AccordionIconPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$AccordionIconPositionRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AccordionIconPositionRecord = (function (_super) {
__extends(AccordionIconPositionRecord, _super);
function AccordionIconPositionRecord(defaults) {
_super.apply(this, arguments);
}
AccordionIconPositionRecord.attributesToDeclare = function () {
return [
this.attr("AccordionIconPosition", "accordionIconPositionAttr", "AccordionIconPosition", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.AccordionIconPositionRec());
}, true, OutSystemsUIModel.AccordionIconPositionRec)
].concat(_super.attributesToDeclare.call(this));
};
AccordionIconPositionRecord.fromStructure = function (str) {
return new AccordionIconPositionRecord(new AccordionIconPositionRecord.RecordClass({
accordionIconPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccordionIconPositionRecord._isAnonymousRecord = true;
AccordionIconPositionRecord.UniqueId = "ab72f035-aa34-ddb5-ec31-3dc02adb1f18";
AccordionIconPositionRecord.init();
return AccordionIconPositionRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.AccordionIconPositionRecord = AccordionIconPositionRecord;

});
define("OutSystemsUI.model$AccordionIconPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$AccordionIconPositionRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AccordionIconPositionRecordList = (function (_super) {
__extends(AccordionIconPositionRecordList, _super);
function AccordionIconPositionRecordList(defaults) {
_super.apply(this, arguments);
}
AccordionIconPositionRecordList.itemType = OutSystemsUIModel.AccordionIconPositionRecord;
return AccordionIconPositionRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.AccordionIconPositionRecordList = AccordionIconPositionRecordList;

});
define("OutSystemsUI.model$FlatpickrConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$FlatpickrConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var FlatpickrConfigsList = (function (_super) {
__extends(FlatpickrConfigsList, _super);
function FlatpickrConfigsList(defaults) {
_super.apply(this, arguments);
}
FlatpickrConfigsList.itemType = OutSystemsUIModel.FlatpickrConfigsRec;
return FlatpickrConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.FlatpickrConfigsList = FlatpickrConfigsList;

});
define("OutSystemsUI.model$Tooltip_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Tooltip_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Tooltip_InternalConfigRecord = (function (_super) {
__extends(Tooltip_InternalConfigRecord, _super);
function Tooltip_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
Tooltip_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("Tooltip_InternalConfig", "tooltip_InternalConfigAttr", "Tooltip_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.Tooltip_InternalConfigRec());
}, true, OutSystemsUIModel.Tooltip_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
Tooltip_InternalConfigRecord.fromStructure = function (str) {
return new Tooltip_InternalConfigRecord(new Tooltip_InternalConfigRecord.RecordClass({
tooltip_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Tooltip_InternalConfigRecord._isAnonymousRecord = true;
Tooltip_InternalConfigRecord.UniqueId = "c506c74c-a8aa-a04b-11f3-b2041bb6669f";
Tooltip_InternalConfigRecord.init();
return Tooltip_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.Tooltip_InternalConfigRecord = Tooltip_InternalConfigRecord;

});
define("OutSystemsUI.model$Tooltip_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Tooltip_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Tooltip_InternalConfigRecordList = (function (_super) {
__extends(Tooltip_InternalConfigRecordList, _super);
function Tooltip_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
Tooltip_InternalConfigRecordList.itemType = OutSystemsUIModel.Tooltip_InternalConfigRecord;
return Tooltip_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.Tooltip_InternalConfigRecordList = Tooltip_InternalConfigRecordList;

});
define("OutSystemsUI.model$ProgressBarOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ProgressBarOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProgressBarOptionalConfigsRecordList = (function (_super) {
__extends(ProgressBarOptionalConfigsRecordList, _super);
function ProgressBarOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
ProgressBarOptionalConfigsRecordList.itemType = OutSystemsUIModel.ProgressBarOptionalConfigsRecord;
return ProgressBarOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ProgressBarOptionalConfigsRecordList = ProgressBarOptionalConfigsRecordList;

});
define("OutSystemsUI.model$AlertRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AlertRec = (function (_super) {
__extends(AlertRec, _super);
function AlertRec(defaults) {
_super.apply(this, arguments);
}
AlertRec.attributesToDeclare = function () {
return [
this.attr("Alert", "alertAttr", "Alert", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AlertRec.fromStructure = function (str) {
return new AlertRec(new AlertRec.RecordClass({
alertAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AlertRec.init();
return AlertRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.AlertRec = AlertRec;

});
define("OutSystemsUI.model$AlertRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$AlertRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AlertRecord = (function (_super) {
__extends(AlertRecord, _super);
function AlertRecord(defaults) {
_super.apply(this, arguments);
}
AlertRecord.attributesToDeclare = function () {
return [
this.attr("Alert", "alertAttr", "Alert", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.AlertRec());
}, true, OutSystemsUIModel.AlertRec)
].concat(_super.attributesToDeclare.call(this));
};
AlertRecord.fromStructure = function (str) {
return new AlertRecord(new AlertRecord.RecordClass({
alertAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AlertRecord._isAnonymousRecord = true;
AlertRecord.UniqueId = "9ca6a18c-c49c-a724-6c44-c0f7c2cef62a";
AlertRecord.init();
return AlertRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.AlertRecord = AlertRecord;

});
define("OutSystemsUI.model$TabsOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TabsOptionalConfigsRec = (function (_super) {
__extends(TabsOptionalConfigsRec, _super);
function TabsOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
TabsOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("ContentAutoHeight", "contentAutoHeightAttr", "ContentAutoHeight", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("JustifyHeaders", "justifyHeadersAttr", "JustifyHeaders", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TabsOptionalConfigsRec.init();
return TabsOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.TabsOptionalConfigsRec = TabsOptionalConfigsRec;

});
define("OutSystemsUI.model$TabsOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TabsOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TabsOptionalConfigsRecord = (function (_super) {
__extends(TabsOptionalConfigsRecord, _super);
function TabsOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
TabsOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("TabsOptionalConfigs", "tabsOptionalConfigsAttr", "TabsOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.TabsOptionalConfigsRec());
}, true, OutSystemsUIModel.TabsOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
TabsOptionalConfigsRecord.fromStructure = function (str) {
return new TabsOptionalConfigsRecord(new TabsOptionalConfigsRecord.RecordClass({
tabsOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TabsOptionalConfigsRecord._isAnonymousRecord = true;
TabsOptionalConfigsRecord.UniqueId = "b7283e2c-6e9c-6bcb-5286-d1ae04959554";
TabsOptionalConfigsRecord.init();
return TabsOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.TabsOptionalConfigsRecord = TabsOptionalConfigsRecord;

});
define("OutSystemsUI.model$TabsOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TabsOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TabsOptionalConfigsRecordList = (function (_super) {
__extends(TabsOptionalConfigsRecordList, _super);
function TabsOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
TabsOptionalConfigsRecordList.itemType = OutSystemsUIModel.TabsOptionalConfigsRecord;
return TabsOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.TabsOptionalConfigsRecordList = TabsOptionalConfigsRecordList;

});
define("OutSystemsUI.model$GradientColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$GradientColorRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var GradientColorList = (function (_super) {
__extends(GradientColorList, _super);
function GradientColorList(defaults) {
_super.apply(this, arguments);
}
GradientColorList.itemType = OutSystemsUIModel.GradientColorRec;
return GradientColorList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.GradientColorList = GradientColorList;

});
define("OutSystemsUI.model$ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ColorRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ColorRecordList = (function (_super) {
__extends(ColorRecordList, _super);
function ColorRecordList(defaults) {
_super.apply(this, arguments);
}
ColorRecordList.itemType = OutSystemsUIModel.ColorRecord;
return ColorRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ColorRecordList = ColorRecordList;

});
define("OutSystemsUI.model$CarouselProviderList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$CarouselProviderRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var CarouselProviderList = (function (_super) {
__extends(CarouselProviderList, _super);
function CarouselProviderList(defaults) {
_super.apply(this, arguments);
}
CarouselProviderList.itemType = OutSystemsUIModel.CarouselProviderRec;
return CarouselProviderList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.CarouselProviderList = CarouselProviderList;

});
define("OutSystemsUI.model$", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.Types.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.TextList = TextList;

});
define("OutSystemsUI.model$VirtualSelectConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var VirtualSelectConfigsRec = (function (_super) {
__extends(VirtualSelectConfigsRec, _super);
function VirtualSelectConfigsRec(defaults) {
_super.apply(this, arguments);
}
VirtualSelectConfigsRec.attributesToDeclare = function () {
return [
this.attr("valueKey", "valueKeyAttr", "valueKey", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("labelKey", "labelKeyAttr", "labelKey", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("descriptionKey", "descriptionKeyAttr", "descriptionKey", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("aliasKey", "aliasKeyAttr", "aliasKey", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("searchByStartsWith", "searchByStartsWithAttr", "searchByStartsWith", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("required", "requiredAttr", "required", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("autofocus", "autofocusAttr", "autofocus", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("autoSelectFirstOption", "autoSelectFirstOptionAttr", "autoSelectFirstOption", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("disableSelectAll", "disableSelectAllAttr", "disableSelectAll", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("optionsCount", "optionsCountAttr", "optionsCount", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("optionHeight", "optionHeightAttr", "optionHeight", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("position", "positionAttr", "position", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("dropboxWidth", "dropboxWidthAttr", "dropboxWidth", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("zIndex", "zIndexAttr", "zIndex", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("noOfDisplayValues", "noOfDisplayValuesAttr", "noOfDisplayValues", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("showSelectedOptionsFirst", "showSelectedOptionsFirstAttr", "showSelectedOptionsFirst", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("markSearchResults", "markSearchResultsAttr", "markSearchResults", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("keepAlwaysOpen", "keepAlwaysOpenAttr", "keepAlwaysOpen", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("maxValues", "maxValuesAttr", "maxValues", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("additionalClasses", "additionalClassesAttr", "additionalClasses", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("popupDropboxBreakpoint", "popupDropboxBreakpointAttr", "popupDropboxBreakpoint", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("popupPosition", "popupPositionAttr", "popupPosition", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ariaLabelledby", "ariaLabelledbyAttr", "ariaLabelledby", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("showOptionsOnlyOnSearch", "showOptionsOnlyOnSearchAttr", "showOptionsOnlyOnSearch", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("alwaysShowSelectedOptionsCount", "alwaysShowSelectedOptionsCountAttr", "alwaysShowSelectedOptionsCount", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("alwaysShowSelectedOptionsLabel", "alwaysShowSelectedOptionsLabelAttr", "alwaysShowSelectedOptionsLabel", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.false;
}, true), 
this.attr("disableAllOptionsSelectedText", "disableAllOptionsSelectedTextAttr", "disableAllOptionsSelectedText", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("disableOptionGroupCheckbox", "disableOptionGroupCheckboxAttr", "disableOptionGroupCheckbox", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("enableSecureText", "enableSecureTextAttr", "enableSecureText", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("disableValidation", "disableValidationAttr", "disableValidation", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("maxWidth", "maxWidthAttr", "maxWidth", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("selectAllText", "selectAllTextAttr", "selectAllText", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("optionsSelectedText", "optionsSelectedTextAttr", "optionsSelectedText", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("optionSelectedText", "optionSelectedTextAttr", "optionSelectedText", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("allOptionsSelectedText", "allOptionsSelectedTextAttr", "allOptionsSelectedText", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("moreText", "moreTextAttr", "moreText", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("focusSelectedOptionOnOpen", "focusSelectedOptionOnOpenAttr", "focusSelectedOptionOnOpen", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("allowNewOption", "allowNewOptionAttr", "allowNewOption", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("hideClearButton", "hideClearButtonAttr", "hideClearButton", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("selectAllOnlyVisible", "selectAllOnlyVisibleAttr", "selectAllOnlyVisible", false, false, OS.Types.Text, function () {
return OutSystemsUIModel.staticEntities.booleanTypes.unset;
}, true), 
this.attr("disabledOptions", "disabledOptionsAttr", "disabledOptions", false, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("minValues", "minValuesAttr", "minValues", false, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
VirtualSelectConfigsRec.init();
return VirtualSelectConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.VirtualSelectConfigsRec = VirtualSelectConfigsRec;

});
define("OutSystemsUI.model$VirtualSelectConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$VirtualSelectConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var VirtualSelectConfigsRecord = (function (_super) {
__extends(VirtualSelectConfigsRecord, _super);
function VirtualSelectConfigsRecord(defaults) {
_super.apply(this, arguments);
}
VirtualSelectConfigsRecord.attributesToDeclare = function () {
return [
this.attr("VirtualSelectConfigs", "virtualSelectConfigsAttr", "VirtualSelectConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.VirtualSelectConfigsRec());
}, true, OutSystemsUIModel.VirtualSelectConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
VirtualSelectConfigsRecord.fromStructure = function (str) {
return new VirtualSelectConfigsRecord(new VirtualSelectConfigsRecord.RecordClass({
virtualSelectConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
VirtualSelectConfigsRecord._isAnonymousRecord = true;
VirtualSelectConfigsRecord.UniqueId = "a34c0295-79f8-72c2-fbb9-0741544ea7c6";
VirtualSelectConfigsRecord.init();
return VirtualSelectConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.VirtualSelectConfigsRecord = VirtualSelectConfigsRecord;

});
define("OutSystemsUI.model$AnimationTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$AnimationTypeRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AnimationTypeList = (function (_super) {
__extends(AnimationTypeList, _super);
function AnimationTypeList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeList.itemType = OutSystemsUIModel.AnimationTypeRec;
return AnimationTypeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.AnimationTypeList = AnimationTypeList;

});
define("OutSystemsUI.model$MonthRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$MonthRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MonthRecord = (function (_super) {
__extends(MonthRecord, _super);
function MonthRecord(defaults) {
_super.apply(this, arguments);
}
MonthRecord.attributesToDeclare = function () {
return [
this.attr("Month", "monthAttr", "Month", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.MonthRec());
}, true, OutSystemsUIModel.MonthRec)
].concat(_super.attributesToDeclare.call(this));
};
MonthRecord.fromStructure = function (str) {
return new MonthRecord(new MonthRecord.RecordClass({
monthAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MonthRecord._isAnonymousRecord = true;
MonthRecord.UniqueId = "e092deac-f9bc-8885-dd34-714ac00f33e4";
MonthRecord.init();
return MonthRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.MonthRecord = MonthRecord;

});
define("OutSystemsUI.model$MonthRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$MonthRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MonthRecordList = (function (_super) {
__extends(MonthRecordList, _super);
function MonthRecordList(defaults) {
_super.apply(this, arguments);
}
MonthRecordList.itemType = OutSystemsUIModel.MonthRecord;
return MonthRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.MonthRecordList = MonthRecordList;

});
define("OutSystemsUI.model$DropdownProviderRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownProviderRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownProviderRecord = (function (_super) {
__extends(DropdownProviderRecord, _super);
function DropdownProviderRecord(defaults) {
_super.apply(this, arguments);
}
DropdownProviderRecord.attributesToDeclare = function () {
return [
this.attr("DropdownProvider", "dropdownProviderAttr", "DropdownProvider", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownProviderRec());
}, true, OutSystemsUIModel.DropdownProviderRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownProviderRecord.fromStructure = function (str) {
return new DropdownProviderRecord(new DropdownProviderRecord.RecordClass({
dropdownProviderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownProviderRecord._isAnonymousRecord = true;
DropdownProviderRecord.UniqueId = "b31d17ba-3ccc-14ea-add4-d2faf9371f2d";
DropdownProviderRecord.init();
return DropdownProviderRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DropdownProviderRecord = DropdownProviderRecord;

});
define("OutSystemsUI.model$DropdownProviderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownProviderRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownProviderRecordList = (function (_super) {
__extends(DropdownProviderRecordList, _super);
function DropdownProviderRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownProviderRecordList.itemType = OutSystemsUIModel.DropdownProviderRecord;
return DropdownProviderRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DropdownProviderRecordList = DropdownProviderRecordList;

});
define("OutSystemsUI.model$RangeSlider_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$RangeSlider_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var RangeSlider_InternalConfigRecord = (function (_super) {
__extends(RangeSlider_InternalConfigRecord, _super);
function RangeSlider_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
RangeSlider_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("RangeSlider_InternalConfig", "rangeSlider_InternalConfigAttr", "RangeSlider_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.RangeSlider_InternalConfigRec());
}, true, OutSystemsUIModel.RangeSlider_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
RangeSlider_InternalConfigRecord.fromStructure = function (str) {
return new RangeSlider_InternalConfigRecord(new RangeSlider_InternalConfigRecord.RecordClass({
rangeSlider_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RangeSlider_InternalConfigRecord._isAnonymousRecord = true;
RangeSlider_InternalConfigRecord.UniqueId = "a52e1739-b8f4-600a-f035-87813c6346bb";
RangeSlider_InternalConfigRecord.init();
return RangeSlider_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.RangeSlider_InternalConfigRecord = RangeSlider_InternalConfigRecord;

});
define("OutSystemsUI.model$RangeSlider_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$RangeSlider_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var RangeSlider_InternalConfigRecordList = (function (_super) {
__extends(RangeSlider_InternalConfigRecordList, _super);
function RangeSlider_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
RangeSlider_InternalConfigRecordList.itemType = OutSystemsUIModel.RangeSlider_InternalConfigRecord;
return RangeSlider_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.RangeSlider_InternalConfigRecordList = RangeSlider_InternalConfigRecordList;

});
define("OutSystemsUI.model$GutterSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$GutterSizeRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var GutterSizeRecord = (function (_super) {
__extends(GutterSizeRecord, _super);
function GutterSizeRecord(defaults) {
_super.apply(this, arguments);
}
GutterSizeRecord.attributesToDeclare = function () {
return [
this.attr("GutterSize", "gutterSizeAttr", "GutterSize", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.GutterSizeRec());
}, true, OutSystemsUIModel.GutterSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
GutterSizeRecord.fromStructure = function (str) {
return new GutterSizeRecord(new GutterSizeRecord.RecordClass({
gutterSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GutterSizeRecord._isAnonymousRecord = true;
GutterSizeRecord.UniqueId = "a5018402-fa6c-90c5-e826-e54b2748cedc";
GutterSizeRecord.init();
return GutterSizeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.GutterSizeRecord = GutterSizeRecord;

});
define("OutSystemsUI.model$SplideProvideri18nList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SplideProvideri18nRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SplideProvideri18nList = (function (_super) {
__extends(SplideProvideri18nList, _super);
function SplideProvideri18nList(defaults) {
_super.apply(this, arguments);
}
SplideProvideri18nList.itemType = OutSystemsUIModel.SplideProvideri18nRec;
return SplideProvideri18nList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.SplideProvideri18nList = SplideProvideri18nList;

});
define("OutSystemsUI.model$DropdownTags_InternalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownOptionList"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownTags_InternalConfigsRec = (function (_super) {
__extends(DropdownTags_InternalConfigsRec, _super);
function DropdownTags_InternalConfigsRec(defaults) {
_super.apply(this, arguments);
}
DropdownTags_InternalConfigsRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("OptionsList", "optionsListAttr", "OptionsList", true, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownOptionList());
}, true, OutSystemsUIModel.DropdownOptionList), 
this.attr("StartingSelection", "startingSelectionAttr", "StartingSelection", false, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownOptionList());
}, true, OutSystemsUIModel.DropdownOptionList), 
this.attr("Prompt", "promptAttr", "Prompt", false, false, OS.Types.Text, function () {
return "Select an item";
}, true), 
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("NoOptionsText", "noOptionsTextAttr", "NoOptionsText", false, false, OS.Types.Text, function () {
return "0";
}, true), 
this.attr("NoResultsText", "noResultsTextAttr", "NoResultsText", false, false, OS.Types.Text, function () {
return "0";
}, true), 
this.attr("SearchPrompt", "searchPromptAttr", "SearchPrompt", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "1";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DropdownTags_InternalConfigsRec.init();
return DropdownTags_InternalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DropdownTags_InternalConfigsRec = DropdownTags_InternalConfigsRec;

});
define("OutSystemsUI.model$DropdownTags_InternalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownTags_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownTags_InternalConfigsRecord = (function (_super) {
__extends(DropdownTags_InternalConfigsRecord, _super);
function DropdownTags_InternalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DropdownTags_InternalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DropdownTags_InternalConfigs", "dropdownTags_InternalConfigsAttr", "DropdownTags_InternalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownTags_InternalConfigsRec());
}, true, OutSystemsUIModel.DropdownTags_InternalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownTags_InternalConfigsRecord.fromStructure = function (str) {
return new DropdownTags_InternalConfigsRecord(new DropdownTags_InternalConfigsRecord.RecordClass({
dropdownTags_InternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownTags_InternalConfigsRecord._isAnonymousRecord = true;
DropdownTags_InternalConfigsRecord.UniqueId = "e3b67119-e4a2-ce2c-9524-4e08a29b21aa";
DropdownTags_InternalConfigsRecord.init();
return DropdownTags_InternalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DropdownTags_InternalConfigsRecord = DropdownTags_InternalConfigsRecord;

});
define("OutSystemsUI.model$DropdownTags_InternalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownTags_InternalConfigsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownTags_InternalConfigsRecordList = (function (_super) {
__extends(DropdownTags_InternalConfigsRecordList, _super);
function DropdownTags_InternalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownTags_InternalConfigsRecordList.itemType = OutSystemsUIModel.DropdownTags_InternalConfigsRecord;
return DropdownTags_InternalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DropdownTags_InternalConfigsRecordList = DropdownTags_InternalConfigsRecordList;

});
define("OutSystemsUI.model$SplideConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SplideConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SplideConfigsRecord = (function (_super) {
__extends(SplideConfigsRecord, _super);
function SplideConfigsRecord(defaults) {
_super.apply(this, arguments);
}
SplideConfigsRecord.attributesToDeclare = function () {
return [
this.attr("SplideConfigs", "splideConfigsAttr", "SplideConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SplideConfigsRec());
}, true, OutSystemsUIModel.SplideConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
SplideConfigsRecord.fromStructure = function (str) {
return new SplideConfigsRecord(new SplideConfigsRecord.RecordClass({
splideConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SplideConfigsRecord._isAnonymousRecord = true;
SplideConfigsRecord.UniqueId = "a784fb81-6324-58d6-6903-27bfa77675d9";
SplideConfigsRecord.init();
return SplideConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.SplideConfigsRecord = SplideConfigsRecord;

});
define("OutSystemsUI.model$DEPRECATED_ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DEPRECATED_ColorRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DEPRECATED_ColorRecord = (function (_super) {
__extends(DEPRECATED_ColorRecord, _super);
function DEPRECATED_ColorRecord(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_ColorRecord.attributesToDeclare = function () {
return [
this.attr("DEPRECATED_Color", "dEPRECATED_ColorAttr", "DEPRECATED_Color", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DEPRECATED_ColorRec());
}, true, OutSystemsUIModel.DEPRECATED_ColorRec)
].concat(_super.attributesToDeclare.call(this));
};
DEPRECATED_ColorRecord.fromStructure = function (str) {
return new DEPRECATED_ColorRecord(new DEPRECATED_ColorRecord.RecordClass({
dEPRECATED_ColorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DEPRECATED_ColorRecord._isAnonymousRecord = true;
DEPRECATED_ColorRecord.UniqueId = "c47826b7-e423-2fbf-8907-84243715f5a8";
DEPRECATED_ColorRecord.init();
return DEPRECATED_ColorRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DEPRECATED_ColorRecord = DEPRECATED_ColorRecord;

});
define("OutSystemsUI.model$DEPRECATED_ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DEPRECATED_ColorRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DEPRECATED_ColorRecordList = (function (_super) {
__extends(DEPRECATED_ColorRecordList, _super);
function DEPRECATED_ColorRecordList(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_ColorRecordList.itemType = OutSystemsUIModel.DEPRECATED_ColorRecord;
return DEPRECATED_ColorRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DEPRECATED_ColorRecordList = DEPRECATED_ColorRecordList;

});
define("OutSystemsUI.model$ReturnMessageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ReturnMessageRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ReturnMessageList = (function (_super) {
__extends(ReturnMessageList, _super);
function ReturnMessageList(defaults) {
_super.apply(this, arguments);
}
ReturnMessageList.itemType = OutSystemsUIModel.ReturnMessageRec;
return ReturnMessageList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ReturnMessageList = ReturnMessageList;

});
define("OutSystemsUI.model$TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TextTextTextTextTextTextTextTextRecordList"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord = (function (_super) {
__extends(TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord, _super);
function TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord.attributesToDeclare = function () {
return [
this.attr("Calendar", "calendarAttr", "Calendar", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("CalendarDates", "calendarDatesAttr", "CalendarDates", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("CloseCalendar", "closeCalendarAttr", "CloseCalendar", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("DateSelected", "dateSelectedAttr", "DateSelected", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("DaySelected", "daySelectedAttr", "DaySelected", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("DaysInRange", "daysInRangeAttr", "DaysInRange", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("DialogButton", "dialogButtonAttr", "DialogButton", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("EndRange", "endRangeAttr", "EndRange", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("EnterCalendar", "enterCalendarAttr", "EnterCalendar", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("GoToToday", "goToTodayAttr", "GoToToday", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("HasEvent", "hasEventAttr", "HasEvent", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("IsToday", "isTodayAttr", "IsToday", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("KeyboardShortcuts", "keyboardShortcutsAttr", "KeyboardShortcuts", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Month", "monthAttr", "Month", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("MonthNext", "monthNextAttr", "MonthNext", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("MonthPrevious", "monthPreviousAttr", "MonthPrevious", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Navigation", "navigationAttr", "Navigation", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("OpenCalendar", "openCalendarAttr", "OpenCalendar", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("StartRange", "startRangeAttr", "StartRange", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Year", "yearAttr", "Year", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ShortcutsDialog", "shortcutsDialogAttr", "ShortcutsDialog", false, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.TextTextTextTextTextTextTextTextRecordList());
}, true, OutSystemsUIModel.TextTextTextTextTextTextTextTextRecordList)
].concat(_super.attributesToDeclare.call(this));
};
TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord._isAnonymousRecord = true;
TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord.UniqueId = "aa6f2a46-9018-f204-49b5-2bedd4074e46";
TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord.init();
return TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord = TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord;

});
define("OutSystemsUI.model$NoUiSliderConfigs_RangeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$NoUiSliderConfigs_RangeRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var NoUiSliderConfigs_RangeRecordList = (function (_super) {
__extends(NoUiSliderConfigs_RangeRecordList, _super);
function NoUiSliderConfigs_RangeRecordList(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigs_RangeRecordList.itemType = OutSystemsUIModel.NoUiSliderConfigs_RangeRecord;
return NoUiSliderConfigs_RangeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.NoUiSliderConfigs_RangeRecordList = NoUiSliderConfigs_RangeRecordList;

});
define("OutSystemsUI.model$CarouselDirectionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$CarouselDirectionRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var CarouselDirectionList = (function (_super) {
__extends(CarouselDirectionList, _super);
function CarouselDirectionList(defaults) {
_super.apply(this, arguments);
}
CarouselDirectionList.itemType = OutSystemsUIModel.CarouselDirectionRec;
return CarouselDirectionList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.CarouselDirectionList = CarouselDirectionList;

});
define("OutSystemsUI.model$TextTextTextTextTextTextTextTextTextTextTextTextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TextTextTextTextTextTextTextTextTextTextTextTextRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TextTextTextTextTextTextTextTextTextTextTextTextRecordList = (function (_super) {
__extends(TextTextTextTextTextTextTextTextTextTextTextTextRecordList, _super);
function TextTextTextTextTextTextTextTextTextTextTextTextRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextTextTextTextTextTextTextTextRecordList.itemType = OutSystemsUIModel.TextTextTextTextTextTextTextTextTextTextTextTextRecord;
return TextTextTextTextTextTextTextTextTextTextTextTextRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.TextTextTextTextTextTextTextTextTextTextTextTextRecordList = TextTextTextTextTextTextTextTextTextTextTextTextRecordList;

});
define("OutSystemsUI.model$AlertList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$AlertRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AlertList = (function (_super) {
__extends(AlertList, _super);
function AlertList(defaults) {
_super.apply(this, arguments);
}
AlertList.itemType = OutSystemsUIModel.AlertRec;
return AlertList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.AlertList = AlertList;

});
define("OutSystemsUI.model$Sidebar_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Sidebar_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Sidebar_InternalConfigRecordList = (function (_super) {
__extends(Sidebar_InternalConfigRecordList, _super);
function Sidebar_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
Sidebar_InternalConfigRecordList.itemType = OutSystemsUIModel.Sidebar_InternalConfigRecord;
return Sidebar_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.Sidebar_InternalConfigRecordList = Sidebar_InternalConfigRecordList;

});
define("OutSystemsUI.model$DeviceConfigurationList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DeviceConfigurationRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DeviceConfigurationList = (function (_super) {
__extends(DeviceConfigurationList, _super);
function DeviceConfigurationList(defaults) {
_super.apply(this, arguments);
}
DeviceConfigurationList.itemType = OutSystemsUIModel.DeviceConfigurationRec;
return DeviceConfigurationList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DeviceConfigurationList = DeviceConfigurationList;

});
define("OutSystemsUI.model$LogTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$LogTypeRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var LogTypeRecord = (function (_super) {
__extends(LogTypeRecord, _super);
function LogTypeRecord(defaults) {
_super.apply(this, arguments);
}
LogTypeRecord.attributesToDeclare = function () {
return [
this.attr("LogType", "logTypeAttr", "LogType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.LogTypeRec());
}, true, OutSystemsUIModel.LogTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
LogTypeRecord.fromStructure = function (str) {
return new LogTypeRecord(new LogTypeRecord.RecordClass({
logTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LogTypeRecord._isAnonymousRecord = true;
LogTypeRecord.UniqueId = "cc831884-02b0-c289-7ce6-94332899ab49";
LogTypeRecord.init();
return LogTypeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.LogTypeRecord = LogTypeRecord;

});
define("OutSystemsUI.model$LogTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$LogTypeRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var LogTypeRecordList = (function (_super) {
__extends(LogTypeRecordList, _super);
function LogTypeRecordList(defaults) {
_super.apply(this, arguments);
}
LogTypeRecordList.itemType = OutSystemsUIModel.LogTypeRecord;
return LogTypeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.LogTypeRecordList = LogTypeRecordList;

});
define("OutSystemsUI.model$DropdownOptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownOptionRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownOptionRecord = (function (_super) {
__extends(DropdownOptionRecord, _super);
function DropdownOptionRecord(defaults) {
_super.apply(this, arguments);
}
DropdownOptionRecord.attributesToDeclare = function () {
return [
this.attr("DropdownOption", "dropdownOptionAttr", "DropdownOption", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownOptionRec());
}, true, OutSystemsUIModel.DropdownOptionRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownOptionRecord.fromStructure = function (str) {
return new DropdownOptionRecord(new DropdownOptionRecord.RecordClass({
dropdownOptionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownOptionRecord._isAnonymousRecord = true;
DropdownOptionRecord.UniqueId = "e03a4930-8bfa-ca02-257d-451178bbf041";
DropdownOptionRecord.init();
return DropdownOptionRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DropdownOptionRecord = DropdownOptionRecord;

});
define("OutSystemsUI.model$DropdownOptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownOptionRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownOptionRecordList = (function (_super) {
__extends(DropdownOptionRecordList, _super);
function DropdownOptionRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionRecordList.itemType = OutSystemsUIModel.DropdownOptionRecord;
return DropdownOptionRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DropdownOptionRecordList = DropdownOptionRecordList;

});
define("OutSystemsUI.model$TabsHeaderItem_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TabsHeaderItem_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TabsHeaderItem_InternalConfigList = (function (_super) {
__extends(TabsHeaderItem_InternalConfigList, _super);
function TabsHeaderItem_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
TabsHeaderItem_InternalConfigList.itemType = OutSystemsUIModel.TabsHeaderItem_InternalConfigRec;
return TabsHeaderItem_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.TabsHeaderItem_InternalConfigList = TabsHeaderItem_InternalConfigList;

});
define("OutSystemsUI.model$FlipContent_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$FlipContent_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var FlipContent_InternalConfigRecord = (function (_super) {
__extends(FlipContent_InternalConfigRecord, _super);
function FlipContent_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
FlipContent_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("FlipContent_InternalConfig", "flipContent_InternalConfigAttr", "FlipContent_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.FlipContent_InternalConfigRec());
}, true, OutSystemsUIModel.FlipContent_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
FlipContent_InternalConfigRecord.fromStructure = function (str) {
return new FlipContent_InternalConfigRecord(new FlipContent_InternalConfigRecord.RecordClass({
flipContent_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FlipContent_InternalConfigRecord._isAnonymousRecord = true;
FlipContent_InternalConfigRecord.UniqueId = "b1f70cd6-a745-b587-9d66-249a8c483fef";
FlipContent_InternalConfigRecord.init();
return FlipContent_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.FlipContent_InternalConfigRecord = FlipContent_InternalConfigRecord;

});
define("OutSystemsUI.model$ColumnBreakRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ColumnBreakRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ColumnBreakRecord = (function (_super) {
__extends(ColumnBreakRecord, _super);
function ColumnBreakRecord(defaults) {
_super.apply(this, arguments);
}
ColumnBreakRecord.attributesToDeclare = function () {
return [
this.attr("ColumnBreak", "columnBreakAttr", "ColumnBreak", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ColumnBreakRec());
}, true, OutSystemsUIModel.ColumnBreakRec)
].concat(_super.attributesToDeclare.call(this));
};
ColumnBreakRecord.fromStructure = function (str) {
return new ColumnBreakRecord(new ColumnBreakRecord.RecordClass({
columnBreakAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColumnBreakRecord._isAnonymousRecord = true;
ColumnBreakRecord.UniqueId = "b6adbbf4-e08b-ad29-75a6-f8f796279b71";
ColumnBreakRecord.init();
return ColumnBreakRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.ColumnBreakRecord = ColumnBreakRecord;

});
define("OutSystemsUI.model$ColumnBreakRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ColumnBreakRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ColumnBreakRecordList = (function (_super) {
__extends(ColumnBreakRecordList, _super);
function ColumnBreakRecordList(defaults) {
_super.apply(this, arguments);
}
ColumnBreakRecordList.itemType = OutSystemsUIModel.ColumnBreakRecord;
return ColumnBreakRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ColumnBreakRecordList = ColumnBreakRecordList;

});
define("OutSystemsUI.model$TabsOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TabsOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TabsOptionalConfigsList = (function (_super) {
__extends(TabsOptionalConfigsList, _super);
function TabsOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
TabsOptionalConfigsList.itemType = OutSystemsUIModel.TabsOptionalConfigsRec;
return TabsOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.TabsOptionalConfigsList = TabsOptionalConfigsList;

});
define("OutSystemsUI.model$DropdownServerSide_InternalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownServerSide_InternalConfigsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownServerSide_InternalConfigsRecordList = (function (_super) {
__extends(DropdownServerSide_InternalConfigsRecordList, _super);
function DropdownServerSide_InternalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownServerSide_InternalConfigsRecordList.itemType = OutSystemsUIModel.DropdownServerSide_InternalConfigsRecord;
return DropdownServerSide_InternalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DropdownServerSide_InternalConfigsRecordList = DropdownServerSide_InternalConfigsRecordList;

});
define("OutSystemsUI.model$SplideConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SplideConfigsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SplideConfigsRecordList = (function (_super) {
__extends(SplideConfigsRecordList, _super);
function SplideConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
SplideConfigsRecordList.itemType = OutSystemsUIModel.SplideConfigsRecord;
return SplideConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.SplideConfigsRecordList = SplideConfigsRecordList;

});
define("OutSystemsUI.model$ButtonLoading_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ButtonLoading_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ButtonLoading_InternalConfigList = (function (_super) {
__extends(ButtonLoading_InternalConfigList, _super);
function ButtonLoading_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
ButtonLoading_InternalConfigList.itemType = OutSystemsUIModel.ButtonLoading_InternalConfigRec;
return ButtonLoading_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ButtonLoading_InternalConfigList = ButtonLoading_InternalConfigList;

});
define("OutSystemsUI.model$DropdownItemList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownItemRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownItemList = (function (_super) {
__extends(DropdownItemList, _super);
function DropdownItemList(defaults) {
_super.apply(this, arguments);
}
DropdownItemList.itemType = OutSystemsUIModel.DropdownItemRec;
return DropdownItemList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DropdownItemList = DropdownItemList;

});
define("OutSystemsUI.model$TimePickerOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TimePickerOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TimePickerOptionalConfigsRecord = (function (_super) {
__extends(TimePickerOptionalConfigsRecord, _super);
function TimePickerOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
TimePickerOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("TimePickerOptionalConfigs", "timePickerOptionalConfigsAttr", "TimePickerOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.TimePickerOptionalConfigsRec());
}, true, OutSystemsUIModel.TimePickerOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
TimePickerOptionalConfigsRecord.fromStructure = function (str) {
return new TimePickerOptionalConfigsRecord(new TimePickerOptionalConfigsRecord.RecordClass({
timePickerOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TimePickerOptionalConfigsRecord._isAnonymousRecord = true;
TimePickerOptionalConfigsRecord.UniqueId = "bb80a04f-7ea6-a5bb-3d33-db9b2bca4c88";
TimePickerOptionalConfigsRecord.init();
return TimePickerOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.TimePickerOptionalConfigsRecord = TimePickerOptionalConfigsRecord;

});
define("OutSystemsUI.model$DatePickerOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerOptionalConfigsRecordList = (function (_super) {
__extends(DatePickerOptionalConfigsRecordList, _super);
function DatePickerOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerOptionalConfigsRecordList.itemType = OutSystemsUIModel.DatePickerOptionalConfigsRecord;
return DatePickerOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DatePickerOptionalConfigsRecordList = DatePickerOptionalConfigsRecordList;

});
define("OutSystemsUI.model$DatePickerProviderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerProviderRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerProviderRecordList = (function (_super) {
__extends(DatePickerProviderRecordList, _super);
function DatePickerProviderRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerProviderRecordList.itemType = OutSystemsUIModel.DatePickerProviderRecord;
return DatePickerProviderRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DatePickerProviderRecordList = DatePickerProviderRecordList;

});
define("OutSystemsUI.model$ErrorMessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ErrorMessageRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ErrorMessageRecordList = (function (_super) {
__extends(ErrorMessageRecordList, _super);
function ErrorMessageRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRecordList.itemType = OutSystemsUIModel.ErrorMessageRecord;
return ErrorMessageRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ErrorMessageRecordList = ErrorMessageRecordList;

});
define("OutSystemsUI.model$SideMenuBehaviorRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SideMenuBehaviorRec = (function (_super) {
__extends(SideMenuBehaviorRec, _super);
function SideMenuBehaviorRec(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorRec.attributesToDeclare = function () {
return [
this.attr("SideMenuBehavior", "sideMenuBehaviorAttr", "SideMenuBehavior", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SideMenuBehaviorRec.fromStructure = function (str) {
return new SideMenuBehaviorRec(new SideMenuBehaviorRec.RecordClass({
sideMenuBehaviorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SideMenuBehaviorRec.init();
return SideMenuBehaviorRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.SideMenuBehaviorRec = SideMenuBehaviorRec;

});
define("OutSystemsUI.model$MonthPicker_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$MonthPicker_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MonthPicker_InternalConfigRecordList = (function (_super) {
__extends(MonthPicker_InternalConfigRecordList, _super);
function MonthPicker_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
MonthPicker_InternalConfigRecordList.itemType = OutSystemsUIModel.MonthPicker_InternalConfigRecord;
return MonthPicker_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.MonthPicker_InternalConfigRecordList = MonthPicker_InternalConfigRecordList;

});
define("OutSystemsUI.model$VirtualSelectConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$VirtualSelectConfigsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var VirtualSelectConfigsRecordList = (function (_super) {
__extends(VirtualSelectConfigsRecordList, _super);
function VirtualSelectConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
VirtualSelectConfigsRecordList.itemType = OutSystemsUIModel.VirtualSelectConfigsRecord;
return VirtualSelectConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.VirtualSelectConfigsRecordList = VirtualSelectConfigsRecordList;

});
define("OutSystemsUI.model$MonthOrderYearList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$MonthOrderYearRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MonthOrderYearList = (function (_super) {
__extends(MonthOrderYearList, _super);
function MonthOrderYearList(defaults) {
_super.apply(this, arguments);
}
MonthOrderYearList.itemType = OutSystemsUIModel.MonthOrderYearRec;
return MonthOrderYearList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.MonthOrderYearList = MonthOrderYearList;

});
define("OutSystemsUI.model$DatePickerTimeFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerTimeFormatRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerTimeFormatRecordList = (function (_super) {
__extends(DatePickerTimeFormatRecordList, _super);
function DatePickerTimeFormatRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerTimeFormatRecordList.itemType = OutSystemsUIModel.DatePickerTimeFormatRecord;
return DatePickerTimeFormatRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DatePickerTimeFormatRecordList = DatePickerTimeFormatRecordList;

});
define("OutSystemsUI.model$ProgressCircleOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ProgressCircleOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProgressCircleOptionalConfigsList = (function (_super) {
__extends(ProgressCircleOptionalConfigsList, _super);
function ProgressCircleOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
ProgressCircleOptionalConfigsList.itemType = OutSystemsUIModel.ProgressCircleOptionalConfigsRec;
return ProgressCircleOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ProgressCircleOptionalConfigsList = ProgressCircleOptionalConfigsList;

});
define("OutSystemsUI.model$RangeSliderOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$RangeSliderOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var RangeSliderOptionalConfigsList = (function (_super) {
__extends(RangeSliderOptionalConfigsList, _super);
function RangeSliderOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
RangeSliderOptionalConfigsList.itemType = OutSystemsUIModel.RangeSliderOptionalConfigsRec;
return RangeSliderOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.RangeSliderOptionalConfigsList = RangeSliderOptionalConfigsList;

});
define("OutSystemsUI.model$BottomSheet_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$BottomSheet_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var BottomSheet_InternalConfigList = (function (_super) {
__extends(BottomSheet_InternalConfigList, _super);
function BottomSheet_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
BottomSheet_InternalConfigList.itemType = OutSystemsUIModel.BottomSheet_InternalConfigRec;
return BottomSheet_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.BottomSheet_InternalConfigList = BottomSheet_InternalConfigList;

});
define("OutSystemsUI.model$AccordionItem_InternalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$AccordionItem_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AccordionItem_InternalConfigsList = (function (_super) {
__extends(AccordionItem_InternalConfigsList, _super);
function AccordionItem_InternalConfigsList(defaults) {
_super.apply(this, arguments);
}
AccordionItem_InternalConfigsList.itemType = OutSystemsUIModel.AccordionItem_InternalConfigsRec;
return AccordionItem_InternalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.AccordionItem_InternalConfigsList = AccordionItem_InternalConfigsList;

});
define("OutSystemsUI.model$TimePicker_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TimePicker_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TimePicker_InternalConfigList = (function (_super) {
__extends(TimePicker_InternalConfigList, _super);
function TimePicker_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
TimePicker_InternalConfigList.itemType = OutSystemsUIModel.TimePicker_InternalConfigRec;
return TimePicker_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.TimePicker_InternalConfigList = TimePicker_InternalConfigList;

});
define("OutSystemsUI.model$Submenu_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Submenu_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Submenu_InternalConfigList = (function (_super) {
__extends(Submenu_InternalConfigList, _super);
function Submenu_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
Submenu_InternalConfigList.itemType = OutSystemsUIModel.Submenu_InternalConfigRec;
return Submenu_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.Submenu_InternalConfigList = Submenu_InternalConfigList;

});
define("OutSystemsUI.model$LogTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$LogTypeRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var LogTypeList = (function (_super) {
__extends(LogTypeList, _super);
function LogTypeList(defaults) {
_super.apply(this, arguments);
}
LogTypeList.itemType = OutSystemsUIModel.LogTypeRec;
return LogTypeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.LogTypeList = LogTypeList;

});
define("OutSystemsUI.model$StepsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$StepsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var StepsList = (function (_super) {
__extends(StepsList, _super);
function StepsList(defaults) {
_super.apply(this, arguments);
}
StepsList.itemType = OutSystemsUIModel.StepsRec;
return StepsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.StepsList = StepsList;

});
define("OutSystemsUI.model$DropdownServerSide_InternalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownServerSide_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownServerSide_InternalConfigsList = (function (_super) {
__extends(DropdownServerSide_InternalConfigsList, _super);
function DropdownServerSide_InternalConfigsList(defaults) {
_super.apply(this, arguments);
}
DropdownServerSide_InternalConfigsList.itemType = OutSystemsUIModel.DropdownServerSide_InternalConfigsRec;
return DropdownServerSide_InternalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DropdownServerSide_InternalConfigsList = DropdownServerSide_InternalConfigsList;

});
define("OutSystemsUI.model$SplideConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SplideConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SplideConfigsList = (function (_super) {
__extends(SplideConfigsList, _super);
function SplideConfigsList(defaults) {
_super.apply(this, arguments);
}
SplideConfigsList.itemType = OutSystemsUIModel.SplideConfigsRec;
return SplideConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.SplideConfigsList = SplideConfigsList;

});
define("OutSystemsUI.model$VirtualSelectConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$VirtualSelectConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var VirtualSelectConfigsList = (function (_super) {
__extends(VirtualSelectConfigsList, _super);
function VirtualSelectConfigsList(defaults) {
_super.apply(this, arguments);
}
VirtualSelectConfigsList.itemType = OutSystemsUIModel.VirtualSelectConfigsRec;
return VirtualSelectConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.VirtualSelectConfigsList = VirtualSelectConfigsList;

});
define("OutSystemsUI.model$SpeedRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SpeedRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SpeedRecord = (function (_super) {
__extends(SpeedRecord, _super);
function SpeedRecord(defaults) {
_super.apply(this, arguments);
}
SpeedRecord.attributesToDeclare = function () {
return [
this.attr("Speed", "speedAttr", "Speed", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SpeedRec());
}, true, OutSystemsUIModel.SpeedRec)
].concat(_super.attributesToDeclare.call(this));
};
SpeedRecord.fromStructure = function (str) {
return new SpeedRecord(new SpeedRecord.RecordClass({
speedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpeedRecord._isAnonymousRecord = true;
SpeedRecord.UniqueId = "d15ba8cc-56cc-5ee5-8bd8-acaffd974239";
SpeedRecord.init();
return SpeedRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.SpeedRecord = SpeedRecord;

});
define("OutSystemsUI.model$DeviceResponsiveList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DeviceResponsiveRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DeviceResponsiveList = (function (_super) {
__extends(DeviceResponsiveList, _super);
function DeviceResponsiveList(defaults) {
_super.apply(this, arguments);
}
DeviceResponsiveList.itemType = OutSystemsUIModel.DeviceResponsiveRec;
return DeviceResponsiveList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DeviceResponsiveList = DeviceResponsiveList;

});
define("OutSystemsUI.model$SideMenuBehaviorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SideMenuBehaviorRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SideMenuBehaviorList = (function (_super) {
__extends(SideMenuBehaviorList, _super);
function SideMenuBehaviorList(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorList.itemType = OutSystemsUIModel.SideMenuBehaviorRec;
return SideMenuBehaviorList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.SideMenuBehaviorList = SideMenuBehaviorList;

});
define("OutSystemsUI.model$ColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ColorRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ColorList = (function (_super) {
__extends(ColorList, _super);
function ColorList(defaults) {
_super.apply(this, arguments);
}
ColorList.itemType = OutSystemsUIModel.ColorRec;
return ColorList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ColorList = ColorList;

});
define("OutSystemsUI.model$GutterSizeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$GutterSizeRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var GutterSizeList = (function (_super) {
__extends(GutterSizeList, _super);
function GutterSizeList(defaults) {
_super.apply(this, arguments);
}
GutterSizeList.itemType = OutSystemsUIModel.GutterSizeRec;
return GutterSizeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.GutterSizeList = GutterSizeList;

});
define("OutSystemsUI.model$ScrollbarStyleList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ScrollbarStyleRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ScrollbarStyleList = (function (_super) {
__extends(ScrollbarStyleList, _super);
function ScrollbarStyleList(defaults) {
_super.apply(this, arguments);
}
ScrollbarStyleList.itemType = OutSystemsUIModel.ScrollbarStyleRec;
return ScrollbarStyleList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ScrollbarStyleList = ScrollbarStyleList;

});
define("OutSystemsUI.model$Rating_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Rating_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Rating_InternalConfigRecord = (function (_super) {
__extends(Rating_InternalConfigRecord, _super);
function Rating_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
Rating_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("Rating_InternalConfig", "rating_InternalConfigAttr", "Rating_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.Rating_InternalConfigRec());
}, true, OutSystemsUIModel.Rating_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
Rating_InternalConfigRecord.fromStructure = function (str) {
return new Rating_InternalConfigRecord(new Rating_InternalConfigRecord.RecordClass({
rating_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Rating_InternalConfigRecord._isAnonymousRecord = true;
Rating_InternalConfigRecord.UniqueId = "d5f1a811-9489-aabc-e0fb-d0fa422c2185";
Rating_InternalConfigRecord.init();
return Rating_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.Rating_InternalConfigRecord = Rating_InternalConfigRecord;

});
define("OutSystemsUI.model$DatePickerLanguageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerLanguageRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerLanguageList = (function (_super) {
__extends(DatePickerLanguageList, _super);
function DatePickerLanguageList(defaults) {
_super.apply(this, arguments);
}
DatePickerLanguageList.itemType = OutSystemsUIModel.DatePickerLanguageRec;
return DatePickerLanguageList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DatePickerLanguageList = DatePickerLanguageList;

});
define("OutSystemsUI.model$NotificationOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$NotificationOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var NotificationOptionalConfigsList = (function (_super) {
__extends(NotificationOptionalConfigsList, _super);
function NotificationOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
NotificationOptionalConfigsList.itemType = OutSystemsUIModel.NotificationOptionalConfigsRec;
return NotificationOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.NotificationOptionalConfigsList = NotificationOptionalConfigsList;

});
define("OutSystemsUI.model$DatePickerRange_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerRange_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerRange_InternalConfigRecordList = (function (_super) {
__extends(DatePickerRange_InternalConfigRecordList, _super);
function DatePickerRange_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerRange_InternalConfigRecordList.itemType = OutSystemsUIModel.DatePickerRange_InternalConfigRecord;
return DatePickerRange_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DatePickerRange_InternalConfigRecordList = DatePickerRange_InternalConfigRecordList;

});
define("OutSystemsUI.model$SplideProviderClassesRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SplideProviderClassesRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SplideProviderClassesRecord = (function (_super) {
__extends(SplideProviderClassesRecord, _super);
function SplideProviderClassesRecord(defaults) {
_super.apply(this, arguments);
}
SplideProviderClassesRecord.attributesToDeclare = function () {
return [
this.attr("SplideProviderClasses", "splideProviderClassesAttr", "SplideProviderClasses", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SplideProviderClassesRec());
}, true, OutSystemsUIModel.SplideProviderClassesRec)
].concat(_super.attributesToDeclare.call(this));
};
SplideProviderClassesRecord.fromStructure = function (str) {
return new SplideProviderClassesRecord(new SplideProviderClassesRecord.RecordClass({
splideProviderClassesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SplideProviderClassesRecord._isAnonymousRecord = true;
SplideProviderClassesRecord.UniqueId = "dc356367-93ab-1ffb-95f0-eb8bb907f022";
SplideProviderClassesRecord.init();
return SplideProviderClassesRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.SplideProviderClassesRecord = SplideProviderClassesRecord;

});
define("OutSystemsUI.model$SplideProviderClassesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SplideProviderClassesRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SplideProviderClassesRecordList = (function (_super) {
__extends(SplideProviderClassesRecordList, _super);
function SplideProviderClassesRecordList(defaults) {
_super.apply(this, arguments);
}
SplideProviderClassesRecordList.itemType = OutSystemsUIModel.SplideProviderClassesRecord;
return SplideProviderClassesRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.SplideProviderClassesRecordList = SplideProviderClassesRecordList;

});
define("OutSystemsUI.model$RangeSliderTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$RangeSliderTypeRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var RangeSliderTypeRecord = (function (_super) {
__extends(RangeSliderTypeRecord, _super);
function RangeSliderTypeRecord(defaults) {
_super.apply(this, arguments);
}
RangeSliderTypeRecord.attributesToDeclare = function () {
return [
this.attr("RangeSliderType", "rangeSliderTypeAttr", "RangeSliderType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.RangeSliderTypeRec());
}, true, OutSystemsUIModel.RangeSliderTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
RangeSliderTypeRecord.fromStructure = function (str) {
return new RangeSliderTypeRecord(new RangeSliderTypeRecord.RecordClass({
rangeSliderTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RangeSliderTypeRecord._isAnonymousRecord = true;
RangeSliderTypeRecord.UniqueId = "f332a0a4-298f-66d2-0988-8b6f5c56f633";
RangeSliderTypeRecord.init();
return RangeSliderTypeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.RangeSliderTypeRecord = RangeSliderTypeRecord;

});
define("OutSystemsUI.model$RangeSliderTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$RangeSliderTypeRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var RangeSliderTypeRecordList = (function (_super) {
__extends(RangeSliderTypeRecordList, _super);
function RangeSliderTypeRecordList(defaults) {
_super.apply(this, arguments);
}
RangeSliderTypeRecordList.itemType = OutSystemsUIModel.RangeSliderTypeRecord;
return RangeSliderTypeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.RangeSliderTypeRecordList = RangeSliderTypeRecordList;

});
define("OutSystemsUI.model$PositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$PositionRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var PositionList = (function (_super) {
__extends(PositionList, _super);
function PositionList(defaults) {
_super.apply(this, arguments);
}
PositionList.itemType = OutSystemsUIModel.PositionRec;
return PositionList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.PositionList = PositionList;

});
define("OutSystemsUI.model$DropdownItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownItemRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownItemRecordList = (function (_super) {
__extends(DropdownItemRecordList, _super);
function DropdownItemRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownItemRecordList.itemType = OutSystemsUIModel.DropdownItemRecord;
return DropdownItemRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DropdownItemRecordList = DropdownItemRecordList;

});
define("OutSystemsUI.model$ProgressBar_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ProgressBar_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ProgressBar_InternalConfigList = (function (_super) {
__extends(ProgressBar_InternalConfigList, _super);
function ProgressBar_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
ProgressBar_InternalConfigList.itemType = OutSystemsUIModel.ProgressBar_InternalConfigRec;
return ProgressBar_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ProgressBar_InternalConfigList = ProgressBar_InternalConfigList;

});
define("OutSystemsUI.model$DropdownTags_InternalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownTags_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownTags_InternalConfigsList = (function (_super) {
__extends(DropdownTags_InternalConfigsList, _super);
function DropdownTags_InternalConfigsList(defaults) {
_super.apply(this, arguments);
}
DropdownTags_InternalConfigsList.itemType = OutSystemsUIModel.DropdownTags_InternalConfigsRec;
return DropdownTags_InternalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DropdownTags_InternalConfigsList = DropdownTags_InternalConfigsList;

});
define("OutSystemsUI.model$CarouselItemsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$CarouselItemsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var CarouselItemsRecord = (function (_super) {
__extends(CarouselItemsRecord, _super);
function CarouselItemsRecord(defaults) {
_super.apply(this, arguments);
}
CarouselItemsRecord.attributesToDeclare = function () {
return [
this.attr("CarouselItems", "carouselItemsAttr", "CarouselItems", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.CarouselItemsRec());
}, true, OutSystemsUIModel.CarouselItemsRec)
].concat(_super.attributesToDeclare.call(this));
};
CarouselItemsRecord.fromStructure = function (str) {
return new CarouselItemsRecord(new CarouselItemsRecord.RecordClass({
carouselItemsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselItemsRecord._isAnonymousRecord = true;
CarouselItemsRecord.UniqueId = "dac62773-434c-f92b-5236-8fd089bbfc2a";
CarouselItemsRecord.init();
return CarouselItemsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.CarouselItemsRecord = CarouselItemsRecord;

});
define("OutSystemsUI.model$AutoplayList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$AutoplayRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AutoplayList = (function (_super) {
__extends(AutoplayList, _super);
function AutoplayList(defaults) {
_super.apply(this, arguments);
}
AutoplayList.itemType = OutSystemsUIModel.AutoplayRec;
return AutoplayList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.AutoplayList = AutoplayList;

});
define("OutSystemsUI.model$DropdownServerSideItem_InternalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownServerSideItem_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownServerSideItem_InternalConfigsList = (function (_super) {
__extends(DropdownServerSideItem_InternalConfigsList, _super);
function DropdownServerSideItem_InternalConfigsList(defaults) {
_super.apply(this, arguments);
}
DropdownServerSideItem_InternalConfigsList.itemType = OutSystemsUIModel.DropdownServerSideItem_InternalConfigsRec;
return DropdownServerSideItem_InternalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DropdownServerSideItem_InternalConfigsList = DropdownServerSideItem_InternalConfigsList;

});
define("OutSystemsUI.model$Gallery_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Gallery_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Gallery_InternalConfigRecord = (function (_super) {
__extends(Gallery_InternalConfigRecord, _super);
function Gallery_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
Gallery_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("Gallery_InternalConfig", "gallery_InternalConfigAttr", "Gallery_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.Gallery_InternalConfigRec());
}, true, OutSystemsUIModel.Gallery_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
Gallery_InternalConfigRecord.fromStructure = function (str) {
return new Gallery_InternalConfigRecord(new Gallery_InternalConfigRecord.RecordClass({
gallery_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Gallery_InternalConfigRecord._isAnonymousRecord = true;
Gallery_InternalConfigRecord.UniqueId = "dd0070f2-25e2-4267-3216-fed1481d0a20";
Gallery_InternalConfigRecord.init();
return Gallery_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.Gallery_InternalConfigRecord = Gallery_InternalConfigRecord;

});
define("OutSystemsUI.model$DatePickerCalendarTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerCalendarTypeRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerCalendarTypeRecord = (function (_super) {
__extends(DatePickerCalendarTypeRecord, _super);
function DatePickerCalendarTypeRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerCalendarTypeRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerCalendarType", "datePickerCalendarTypeAttr", "DatePickerCalendarType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DatePickerCalendarTypeRec());
}, true, OutSystemsUIModel.DatePickerCalendarTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerCalendarTypeRecord.fromStructure = function (str) {
return new DatePickerCalendarTypeRecord(new DatePickerCalendarTypeRecord.RecordClass({
datePickerCalendarTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerCalendarTypeRecord._isAnonymousRecord = true;
DatePickerCalendarTypeRecord.UniqueId = "de3deb22-1a4b-1656-cc37-f0db973c4e9a";
DatePickerCalendarTypeRecord.init();
return DatePickerCalendarTypeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.DatePickerCalendarTypeRecord = DatePickerCalendarTypeRecord;

});
define("OutSystemsUI.model$TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TextTextTextTextTextTextTextRecordList", "OutSystemsUI.model$TextTextTextTextTextTextText1RecordList", "OutSystemsUI.model$TextTextTextTextTextTextTextTextTextTextTextTextRecordList"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord = (function (_super) {
__extends(TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord, _super);
function TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord.attributesToDeclare = function () {
return [
this.attr("Midnight", "midnightAttr", "Midnight", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("NextMonth", "nextMonthAttr", "NextMonth", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Noon", "noonAttr", "Noon", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("PreviousMonth", "previousMonthAttr", "PreviousMonth", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("TodayButton", "todayButtonAttr", "TodayButton", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Weekdays", "weekdaysAttr", "Weekdays", false, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.TextTextTextTextTextTextTextRecordList());
}, true, OutSystemsUIModel.TextTextTextTextTextTextTextRecordList), 
this.attr("WeekdaysShort", "weekdaysShortAttr", "WeekdaysShort", false, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.TextTextTextTextTextTextText1RecordList());
}, true, OutSystemsUIModel.TextTextTextTextTextTextText1RecordList), 
this.attr("Months", "monthsAttr", "Months", false, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.TextTextTextTextTextTextTextTextTextTextTextTextRecordList());
}, true, OutSystemsUIModel.TextTextTextTextTextTextTextTextTextTextTextTextRecordList)
].concat(_super.attributesToDeclare.call(this));
};
TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord._isAnonymousRecord = true;
TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord.UniqueId = "edb48204-5d64-b0cb-bcbf-62278fb73c32";
TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord.init();
return TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord = TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord;

});
define("OutSystemsUI.model$TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekRecordList = (function (_super) {
__extends(TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekRecordList, _super);
function TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekRecordList.itemType = OutSystemsUIModel.TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord;
return TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekRecordList = TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekRecordList;

});
define("OutSystemsUI.model$DEPRECATED_MasterDetailItemList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DEPRECATED_MasterDetailItemRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DEPRECATED_MasterDetailItemList = (function (_super) {
__extends(DEPRECATED_MasterDetailItemList, _super);
function DEPRECATED_MasterDetailItemList(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_MasterDetailItemList.itemType = OutSystemsUIModel.DEPRECATED_MasterDetailItemRec;
return DEPRECATED_MasterDetailItemList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DEPRECATED_MasterDetailItemList = DEPRECATED_MasterDetailItemList;

});
define("OutSystemsUI.model$SideMenuBehaviorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SideMenuBehaviorRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SideMenuBehaviorRecord = (function (_super) {
__extends(SideMenuBehaviorRecord, _super);
function SideMenuBehaviorRecord(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorRecord.attributesToDeclare = function () {
return [
this.attr("SideMenuBehavior", "sideMenuBehaviorAttr", "SideMenuBehavior", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SideMenuBehaviorRec());
}, true, OutSystemsUIModel.SideMenuBehaviorRec)
].concat(_super.attributesToDeclare.call(this));
};
SideMenuBehaviorRecord.fromStructure = function (str) {
return new SideMenuBehaviorRecord(new SideMenuBehaviorRecord.RecordClass({
sideMenuBehaviorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SideMenuBehaviorRecord._isAnonymousRecord = true;
SideMenuBehaviorRecord.UniqueId = "e3607d6b-9254-5e57-93fb-eb99fc16b7e7";
SideMenuBehaviorRecord.init();
return SideMenuBehaviorRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.SideMenuBehaviorRecord = SideMenuBehaviorRecord;

});
define("OutSystemsUI.model$CarouselItemsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$CarouselItemsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var CarouselItemsRecordList = (function (_super) {
__extends(CarouselItemsRecordList, _super);
function CarouselItemsRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselItemsRecordList.itemType = OutSystemsUIModel.CarouselItemsRecord;
return CarouselItemsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.CarouselItemsRecordList = CarouselItemsRecordList;

});
define("OutSystemsUI.model$BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord = (function (_super) {
__extends(BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord, _super);
function BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord(defaults) {
_super.apply(this, arguments);
}
BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord.attributesToDeclare = function () {
return [
this.attr("ChangeEventDuringSlide", "changeEventDuringSlideAttr", "ChangeEventDuringSlide", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("ShowPips", "showPipsAttr", "ShowPips", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("InitialValue", "initialValueAttr", "InitialValue", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("PipsStep", "pipsStepAttr", "PipsStep", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Step", "stepAttr", "Step", false, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord._isAnonymousRecord = true;
BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord.UniqueId = "e57d7c30-9592-d9b0-9e76-04ad507fe534";
BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord.init();
return BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUIModel.BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord = BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord;

});
define("OutSystemsUI.model$SectionIndex_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SectionIndex_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SectionIndex_InternalConfigRecordList = (function (_super) {
__extends(SectionIndex_InternalConfigRecordList, _super);
function SectionIndex_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
SectionIndex_InternalConfigRecordList.itemType = OutSystemsUIModel.SectionIndex_InternalConfigRecord;
return SectionIndex_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.SectionIndex_InternalConfigRecordList = SectionIndex_InternalConfigRecordList;

});
define("OutSystemsUI.model$TabsHeaderItem_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TabsHeaderItem_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TabsHeaderItem_InternalConfigRecordList = (function (_super) {
__extends(TabsHeaderItem_InternalConfigRecordList, _super);
function TabsHeaderItem_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
TabsHeaderItem_InternalConfigRecordList.itemType = OutSystemsUIModel.TabsHeaderItem_InternalConfigRecord;
return TabsHeaderItem_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.TabsHeaderItem_InternalConfigRecordList = TabsHeaderItem_InternalConfigRecordList;

});
define("OutSystemsUI.model$TimePicker_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TimePicker_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TimePicker_InternalConfigRecordList = (function (_super) {
__extends(TimePicker_InternalConfigRecordList, _super);
function TimePicker_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
TimePicker_InternalConfigRecordList.itemType = OutSystemsUIModel.TimePicker_InternalConfigRecord;
return TimePicker_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.TimePicker_InternalConfigRecordList = TimePicker_InternalConfigRecordList;

});
define("OutSystemsUI.model$SectionIndexItem_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SectionIndexItem_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SectionIndexItem_InternalConfigList = (function (_super) {
__extends(SectionIndexItem_InternalConfigList, _super);
function SectionIndexItem_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
SectionIndexItem_InternalConfigList.itemType = OutSystemsUIModel.SectionIndexItem_InternalConfigRec;
return SectionIndexItem_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.SectionIndexItem_InternalConfigList = SectionIndexItem_InternalConfigList;

});
define("OutSystemsUI.model$SpeedList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SpeedRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SpeedList = (function (_super) {
__extends(SpeedList, _super);
function SpeedList(defaults) {
_super.apply(this, arguments);
}
SpeedList.itemType = OutSystemsUIModel.SpeedRec;
return SpeedList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.SpeedList = SpeedList;

});
define("OutSystemsUI.model$StepsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$StepsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var StepsRecordList = (function (_super) {
__extends(StepsRecordList, _super);
function StepsRecordList(defaults) {
_super.apply(this, arguments);
}
StepsRecordList.itemType = OutSystemsUIModel.StepsRecord;
return StepsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.StepsRecordList = StepsRecordList;

});
define("OutSystemsUI.model$DatePickerLanguageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerLanguageRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerLanguageRecordList = (function (_super) {
__extends(DatePickerLanguageRecordList, _super);
function DatePickerLanguageRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerLanguageRecordList.itemType = OutSystemsUIModel.DatePickerLanguageRecord;
return DatePickerLanguageRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DatePickerLanguageRecordList = DatePickerLanguageRecordList;

});
define("OutSystemsUI.model$Gallery_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Gallery_InternalConfigRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Gallery_InternalConfigList = (function (_super) {
__extends(Gallery_InternalConfigList, _super);
function Gallery_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
Gallery_InternalConfigList.itemType = OutSystemsUIModel.Gallery_InternalConfigRec;
return Gallery_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.Gallery_InternalConfigList = Gallery_InternalConfigList;

});
define("OutSystemsUI.model$Gallery_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Gallery_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Gallery_InternalConfigRecordList = (function (_super) {
__extends(Gallery_InternalConfigRecordList, _super);
function Gallery_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
Gallery_InternalConfigRecordList.itemType = OutSystemsUIModel.Gallery_InternalConfigRecord;
return Gallery_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.Gallery_InternalConfigRecordList = Gallery_InternalConfigRecordList;

});
define("OutSystemsUI.model$DatePickerCalendarTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DatePickerCalendarTypeRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DatePickerCalendarTypeRecordList = (function (_super) {
__extends(DatePickerCalendarTypeRecordList, _super);
function DatePickerCalendarTypeRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerCalendarTypeRecordList.itemType = OutSystemsUIModel.DatePickerCalendarTypeRecord;
return DatePickerCalendarTypeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DatePickerCalendarTypeRecordList = DatePickerCalendarTypeRecordList;

});
define("OutSystemsUI.model$BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList = (function (_super) {
__extends(BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList, _super);
function BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList.itemType = OutSystemsUIModel.BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord;
return BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList = BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList;

});
define("OutSystemsUI.model$GutterSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$GutterSizeRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var GutterSizeRecordList = (function (_super) {
__extends(GutterSizeRecordList, _super);
function GutterSizeRecordList(defaults) {
_super.apply(this, arguments);
}
GutterSizeRecordList.itemType = OutSystemsUIModel.GutterSizeRecord;
return GutterSizeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.GutterSizeRecordList = GutterSizeRecordList;

});
define("OutSystemsUI.model$SideMenuBehaviorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SideMenuBehaviorRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SideMenuBehaviorRecordList = (function (_super) {
__extends(SideMenuBehaviorRecordList, _super);
function SideMenuBehaviorRecordList(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorRecordList.itemType = OutSystemsUIModel.SideMenuBehaviorRecord;
return SideMenuBehaviorRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.SideMenuBehaviorRecordList = SideMenuBehaviorRecordList;

});
define("OutSystemsUI.model$GradientList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$GradientRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var GradientList = (function (_super) {
__extends(GradientList, _super);
function GradientList(defaults) {
_super.apply(this, arguments);
}
GradientList.itemType = OutSystemsUIModel.GradientRec;
return GradientList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.GradientList = GradientList;

});
define("OutSystemsUI.model$DropdownTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownTypeRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownTypeRecordList = (function (_super) {
__extends(DropdownTypeRecordList, _super);
function DropdownTypeRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownTypeRecordList.itemType = OutSystemsUIModel.DropdownTypeRecord;
return DropdownTypeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DropdownTypeRecordList = DropdownTypeRecordList;

});
define("OutSystemsUI.model$AlertRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$AlertRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var AlertRecordList = (function (_super) {
__extends(AlertRecordList, _super);
function AlertRecordList(defaults) {
_super.apply(this, arguments);
}
AlertRecordList.itemType = OutSystemsUIModel.AlertRecord;
return AlertRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.AlertRecordList = AlertRecordList;

});
define("OutSystemsUI.model$SpeedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$SpeedRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var SpeedRecordList = (function (_super) {
__extends(SpeedRecordList, _super);
function SpeedRecordList(defaults) {
_super.apply(this, arguments);
}
SpeedRecordList.itemType = OutSystemsUIModel.SpeedRecord;
return SpeedRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.SpeedRecordList = SpeedRecordList;

});
define("OutSystemsUI.model$TimePickerOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TimePickerOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TimePickerOptionalConfigsRecordList = (function (_super) {
__extends(TimePickerOptionalConfigsRecordList, _super);
function TimePickerOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
TimePickerOptionalConfigsRecordList.itemType = OutSystemsUIModel.TimePickerOptionalConfigsRecord;
return TimePickerOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.TimePickerOptionalConfigsRecordList = TimePickerOptionalConfigsRecordList;

});
define("OutSystemsUI.model$DirectionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DirectionRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DirectionRecordList = (function (_super) {
__extends(DirectionRecordList, _super);
function DirectionRecordList(defaults) {
_super.apply(this, arguments);
}
DirectionRecordList.itemType = OutSystemsUIModel.DirectionRecord;
return DirectionRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DirectionRecordList = DirectionRecordList;

});
define("OutSystemsUI.model$GradientRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$GradientRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var GradientRecordList = (function (_super) {
__extends(GradientRecordList, _super);
function GradientRecordList(defaults) {
_super.apply(this, arguments);
}
GradientRecordList.itemType = OutSystemsUIModel.GradientRecord;
return GradientRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.GradientRecordList = GradientRecordList;

});
define("OutSystemsUI.model$MonthYearRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$MonthYearRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MonthYearRecordList = (function (_super) {
__extends(MonthYearRecordList, _super);
function MonthYearRecordList(defaults) {
_super.apply(this, arguments);
}
MonthYearRecordList.itemType = OutSystemsUIModel.MonthYearRecord;
return MonthYearRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.MonthYearRecordList = MonthYearRecordList;

});
define("OutSystemsUI.model$TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2RecordList = (function (_super) {
__extends(TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2RecordList, _super);
function TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2RecordList(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2RecordList.itemType = OutSystemsUIModel.TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord;
return TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2RecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2RecordList = TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2RecordList;

});
define("OutSystemsUI.model$MonthList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$MonthRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var MonthList = (function (_super) {
__extends(MonthList, _super);
function MonthList(defaults) {
_super.apply(this, arguments);
}
MonthList.itemType = OutSystemsUIModel.MonthRec;
return MonthList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.MonthList = MonthList;

});
define("OutSystemsUI.model$Tabs_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Tabs_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Tabs_InternalConfigRecordList = (function (_super) {
__extends(Tabs_InternalConfigRecordList, _super);
function Tabs_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
Tabs_InternalConfigRecordList.itemType = OutSystemsUIModel.Tabs_InternalConfigRecord;
return Tabs_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.Tabs_InternalConfigRecordList = Tabs_InternalConfigRecordList;

});
define("OutSystemsUI.model$CarouselItemsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$CarouselItemsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var CarouselItemsList = (function (_super) {
__extends(CarouselItemsList, _super);
function CarouselItemsList(defaults) {
_super.apply(this, arguments);
}
CarouselItemsList.itemType = OutSystemsUIModel.CarouselItemsRec;
return CarouselItemsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.CarouselItemsList = CarouselItemsList;

});
define("OutSystemsUI.model$CarouselProviderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$CarouselProviderRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var CarouselProviderRecordList = (function (_super) {
__extends(CarouselProviderRecordList, _super);
function CarouselProviderRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselProviderRecordList.itemType = OutSystemsUIModel.CarouselProviderRecord;
return CarouselProviderRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.CarouselProviderRecordList = CarouselProviderRecordList;

});
define("OutSystemsUI.model$DropdownSearch_InternalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownSearch_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownSearch_InternalConfigsList = (function (_super) {
__extends(DropdownSearch_InternalConfigsList, _super);
function DropdownSearch_InternalConfigsList(defaults) {
_super.apply(this, arguments);
}
DropdownSearch_InternalConfigsList.itemType = OutSystemsUIModel.DropdownSearch_InternalConfigsRec;
return DropdownSearch_InternalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DropdownSearch_InternalConfigsList = DropdownSearch_InternalConfigsList;

});
define("OutSystemsUI.model$FlipContent_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$FlipContent_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var FlipContent_InternalConfigRecordList = (function (_super) {
__extends(FlipContent_InternalConfigRecordList, _super);
function FlipContent_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
FlipContent_InternalConfigRecordList.itemType = OutSystemsUIModel.FlipContent_InternalConfigRecord;
return FlipContent_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.FlipContent_InternalConfigRecordList = FlipContent_InternalConfigRecordList;

});
define("OutSystemsUI.model$Rating_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$Rating_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var Rating_InternalConfigRecordList = (function (_super) {
__extends(Rating_InternalConfigRecordList, _super);
function Rating_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
Rating_InternalConfigRecordList.itemType = OutSystemsUIModel.Rating_InternalConfigRecord;
return Rating_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.Rating_InternalConfigRecordList = Rating_InternalConfigRecordList;

});
define("OutSystemsUI.model$DropdownOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$DropdownOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var DropdownOptionalConfigsList = (function (_super) {
__extends(DropdownOptionalConfigsList, _super);
function DropdownOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionalConfigsList.itemType = OutSystemsUIModel.DropdownOptionalConfigsRec;
return DropdownOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.DropdownOptionalConfigsList = DropdownOptionalConfigsList;

});
define("OutSystemsUI.model$ScrollbarStyleRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.model$ScrollbarStyleRecord"], function (exports, OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;
var ScrollbarStyleRecordList = (function (_super) {
__extends(ScrollbarStyleRecordList, _super);
function ScrollbarStyleRecordList(defaults) {
_super.apply(this, arguments);
}
ScrollbarStyleRecordList.itemType = OutSystemsUIModel.ScrollbarStyleRecord;
return ScrollbarStyleRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUIModel.ScrollbarStyleRecordList = ScrollbarStyleRecordList;

});
define("OutSystemsUI.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var OutSystemsUIModel = exports;
Object.defineProperty(OutSystemsUIModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"];
}
});

OutSystemsUIModel.staticEntities = {};
OutSystemsUIModel.staticEntities.carouselProvider = {};
var getCarouselProviderRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["01addca3-86ba-436f-950e-e48d74ea2cac"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.carouselProvider, "splide", {
get: function () {
return getCarouselProviderRecord("1b7b1d33-be2e-419f-aa5b-54c1b5e805df");
}
});

OutSystemsUIModel.staticEntities.animationType = {};
var getAnimationTypeRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["0463d449-6834-40d5-817b-3d74d1a71bb2"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.animationType, "topToBottom", {
get: function () {
return getAnimationTypeRecord("2d5a98f9-381b-4ff8-9219-085bc35dfc44");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.animationType, "bounce", {
get: function () {
return getAnimationTypeRecord("3c3ad352-52fc-43c5-ae3a-f8d651bfa094");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.animationType, "fadeIn", {
get: function () {
return getAnimationTypeRecord("69814f09-c20b-4d55-b06a-7231a5515d2c");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.animationType, "scaleDown", {
get: function () {
return getAnimationTypeRecord("7d8fd3a6-eac4-4ae8-b865-18f5711814cb");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.animationType, "scale", {
get: function () {
return getAnimationTypeRecord("8a8e0e8b-0e5a-407c-9739-4942e1c708e8");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.animationType, "spinner", {
get: function () {
return getAnimationTypeRecord("b1e2a22f-cd5a-49a8-83e2-a82471745aea");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.animationType, "bottomToTop", {
get: function () {
return getAnimationTypeRecord("b71cef18-b0ee-4e9b-8b98-5700b6c6b9e4");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.animationType, "rightToLeft", {
get: function () {
return getAnimationTypeRecord("b7a58aaa-e1f6-4bbb-9557-5fb4742ef542");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.animationType, "leftToRight", {
get: function () {
return getAnimationTypeRecord("f4c21a73-5f0c-4d9e-a9e6-7053b68c2cea");
}
});

OutSystemsUIModel.staticEntities.speed = {};
var getSpeedRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["0a5cc4ae-b54f-4ea3-9ace-9f49c7724606"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.speed, "fast", {
get: function () {
return getSpeedRecord("4fb2b6d9-70ff-415d-a09d-4ee05adda5c4");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.speed, "normal", {
get: function () {
return getSpeedRecord("93b9215f-8fb1-4f08-8555-9b0125b18f51");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.speed, "slow", {
get: function () {
return getSpeedRecord("b2c67d31-506d-42e7-890e-0e4f29234ae6");
}
});

OutSystemsUIModel.staticEntities.sideMenuBehavior = {};
var getSideMenuBehaviorRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["11a5937b-e94d-4250-99a8-9c8358d3d965"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.sideMenuBehavior, "visible", {
get: function () {
return getSideMenuBehaviorRecord("25b95337-61e5-4cc7-95a0-fb2bee22c75f");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.sideMenuBehavior, "expandable", {
get: function () {
return getSideMenuBehaviorRecord("db935269-7a37-40aa-898b-e17e546a932a");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.sideMenuBehavior, "overlay", {
get: function () {
return getSideMenuBehaviorRecord("f194be06-0135-4afc-9be2-3f9a7ecd107c");
}
});

OutSystemsUIModel.staticEntities.gradient = {};
var getGradientRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["15f4b55e-c9e8-4f0d-a043-0093e17fa04d"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.gradient, "linearHorizontal", {
get: function () {
return getGradientRecord("8d250673-5528-403b-9e7b-d1717a98219c");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.gradient, "radial", {
get: function () {
return getGradientRecord("b9ce4df8-c39e-4a3a-84d9-35dbc79e82fc");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.gradient, "linearDiagonally", {
get: function () {
return getGradientRecord("cef16d35-677a-4002-8d53-7b385be0011d");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.gradient, "linearVertical", {
get: function () {
return getGradientRecord("f128b147-c173-4df8-a624-d01eab01c46c");
}
});

OutSystemsUIModel.staticEntities.size = {};
var getSizeRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["1ac110b4-8964-470b-a6b2-81ae4a6b5bde"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.size, "medium", {
get: function () {
return getSizeRecord("0f4cba2c-32d2-4bef-b0e8-0ecd7eadbffa");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.size, "small", {
get: function () {
return getSizeRecord("9133cb8a-ca17-4e39-a9fd-4a07cf123c82");
}
});

OutSystemsUIModel.staticEntities.deviceResponsive = {};
var getDeviceResponsiveRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["29468e1d-a25a-42c3-bf53-b232accc150d"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.deviceResponsive, "desktopAndTablet", {
get: function () {
return getDeviceResponsiveRecord("0a533047-a7d6-4897-bfb2-140047b8fccd");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.deviceResponsive, "tabletOnly", {
get: function () {
return getDeviceResponsiveRecord("4164cab0-7b05-43a4-9c78-e81a53431a7d");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.deviceResponsive, "allDevices", {
get: function () {
return getDeviceResponsiveRecord("5283ef6e-84da-42b1-b937-5efa0ee1a6b0");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.deviceResponsive, "phoneOnly", {
get: function () {
return getDeviceResponsiveRecord("a671987e-7b94-462a-9685-e6bcf890454e");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.deviceResponsive, "tabletAndPhone", {
get: function () {
return getDeviceResponsiveRecord("e04f86d2-6c26-47db-9e53-434eb6386498");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.deviceResponsive, "desktopOnly", {
get: function () {
return getDeviceResponsiveRecord("ebed41f5-fbac-4f23-9ae0-429c2e439ff2");
}
});

OutSystemsUIModel.staticEntities.gutterSize = {};
var getGutterSizeRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["2e81a1e8-4fa4-4bd0-a945-65352999b0be"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.gutterSize, "xXLarge", {
get: function () {
return getGutterSizeRecord("087ea4c4-96ff-4fc5-87c9-70e35c61fe6e");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.gutterSize, "medium", {
get: function () {
return getGutterSizeRecord("12874371-fb77-4707-afda-cdddbba81173");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.gutterSize, "none", {
get: function () {
return getGutterSizeRecord("1a6cb2a2-b448-4f08-ba92-5bd24d30a422");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.gutterSize, "extraLarge", {
get: function () {
return getGutterSizeRecord("8d669ecd-b220-4b80-b57b-4700987734dd");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.gutterSize, "small", {
get: function () {
return getGutterSizeRecord("96f816b9-2511-49f9-8e9c-c6ab4ff8683e");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.gutterSize, "large", {
get: function () {
return getGutterSizeRecord("a9dce78b-0487-49ef-b5c0-d3054293816b");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.gutterSize, "base", {
get: function () {
return getGutterSizeRecord("b7549354-102c-45e6-8c2e-b171c6f589c5");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.gutterSize, "extraSmall", {
get: function () {
return getGutterSizeRecord("b8734df5-7557-4609-a566-cf5c35a6dade");
}
});

OutSystemsUIModel.staticEntities.month = {};
var getMonthRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["33d9b724-a0b1-4b0a-91fb-272143c44a85"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.month, "june", {
get: function () {
return getMonthRecord("02cb1fff-a143-48c1-8922-5b2c562e1939");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.month, "march", {
get: function () {
return getMonthRecord("29858d6e-705a-4cfd-a9e2-f9dc6bda346c");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.month, "december", {
get: function () {
return getMonthRecord("5b0eff8b-b2df-4e9a-80a5-eac51617cdc3");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.month, "february", {
get: function () {
return getMonthRecord("6b6caf1c-eadb-4b30-96ec-84b225feb1a5");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.month, "may", {
get: function () {
return getMonthRecord("76cd9430-f4f8-4b0d-8a72-ddcac3928aeb");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.month, "april", {
get: function () {
return getMonthRecord("7c425633-4e80-4f7a-a119-c21d82820511");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.month, "november", {
get: function () {
return getMonthRecord("86e22632-bb44-42ad-8589-0b6aadda9dd4");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.month, "august", {
get: function () {
return getMonthRecord("896ff549-7e70-48af-b967-31ea68b73891");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.month, "january", {
get: function () {
return getMonthRecord("8d3840f5-6ae6-4899-960d-3e215342e2e3");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.month, "july", {
get: function () {
return getMonthRecord("ac483ea0-4423-404a-a61d-8d6bce0ee39e");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.month, "september", {
get: function () {
return getMonthRecord("c858ebfd-c9fe-49b6-bbfc-57c28c895b26");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.month, "october", {
get: function () {
return getMonthRecord("e01b8055-99c6-4096-bc7d-5f0c825b7692");
}
});

OutSystemsUIModel.staticEntities.datePickerLanguage = {};
var getDatePickerLanguageRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["45402ee4-73bf-42a2-b5f8-371ae940bf4f"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "japanese", {
get: function () {
return getDatePickerLanguageRecord("0041af3b-505e-48b8-8d79-b0a00aeeb4de");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "dutchFlemish", {
get: function () {
return getDatePickerLanguageRecord("05968754-a438-40c9-860d-0775c7618c80");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "czech", {
get: function () {
return getDatePickerLanguageRecord("0c6d79c7-6773-4d9e-a914-ad7246505aa8");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "indonesian", {
get: function () {
return getDatePickerLanguageRecord("0e659962-b0fb-4486-9f33-997cf5a00f33");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "punjabiPanjabi", {
get: function () {
return getDatePickerLanguageRecord("10fba89e-f9ea-46da-a114-849a4891c4dd");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "latvian", {
get: function () {
return getDatePickerLanguageRecord("11a9c498-65e3-4074-bd4c-16266288a9e4");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "chinese", {
get: function () {
return getDatePickerLanguageRecord("186d2cd3-7b9d-464a-b31e-b4548b9a80c0");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "polish", {
get: function () {
return getDatePickerLanguageRecord("198c5c59-d610-4e52-b4ed-9fb38c21b3b7");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "estonian", {
get: function () {
return getDatePickerLanguageRecord("1e9dd8a1-ab24-4849-ab74-b65b2a2974a5");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "catalanValencian", {
get: function () {
return getDatePickerLanguageRecord("1efa117c-f1b9-4ae7-94ad-814a752e4864");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "malay", {
get: function () {
return getDatePickerLanguageRecord("242628f3-22b6-4713-8118-7921abd00ad2");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "slovak", {
get: function () {
return getDatePickerLanguageRecord("286e49ad-5406-4f42-a9c4-bcc4adc64d17");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "sinhalaSinhalese", {
get: function () {
return getDatePickerLanguageRecord("2df37c1e-5431-4849-9f0b-405b43fed188");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "danish", {
get: function () {
return getDatePickerLanguageRecord("34689962-0ccc-46dc-bc43-e6bc7716784c");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "english", {
get: function () {
return getDatePickerLanguageRecord("37430fa0-8882-4f69-afde-41c27de03a5f");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "hungarian", {
get: function () {
return getDatePickerLanguageRecord("3854d57f-f8bd-4024-8664-6353d552d8f2");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "norwegianNynorsk", {
get: function () {
return getDatePickerLanguageRecord("459a4a75-fb85-40e0-96b2-f08df284da41");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "arabic", {
get: function () {
return getDatePickerLanguageRecord("530ceb8f-1ff1-44a7-aed5-e0af45b941cb");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "faroese", {
get: function () {
return getDatePickerLanguageRecord("58eb18a6-11fe-4a8b-bb96-7ed1057b16f5");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "centralKhmer", {
get: function () {
return getDatePickerLanguageRecord("5e341bb3-0fc7-4f59-a426-00dcd4b2fabf");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "romanianMoldavianMoldovan", {
get: function () {
return getDatePickerLanguageRecord("62e038a6-8d72-4484-b278-a883b004b3f2");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "chineseTraditional", {
get: function () {
return getDatePickerLanguageRecord("6bb7b0e2-bad8-4f58-801b-4ca0e9e699a7");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "norwegian", {
get: function () {
return getDatePickerLanguageRecord("6f9fd262-32f0-4726-ab3e-5d7bb6916892");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "esperanto", {
get: function () {
return getDatePickerLanguageRecord("7b29c19f-82dd-4e0b-8f5b-9004ca7d24fc");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "croatian", {
get: function () {
return getDatePickerLanguageRecord("7def49c8-f1a0-4600-ae56-53e9471634a2");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "albanian", {
get: function () {
return getDatePickerLanguageRecord("80601fbd-e190-49be-90dd-6964171d5292");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "korean", {
get: function () {
return getDatePickerLanguageRecord("82a53bc2-f8d7-4c5d-bb70-5651a4713880");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "thai", {
get: function () {
return getDatePickerLanguageRecord("84a8de9c-6f4d-4077-9391-98d66414bf4e");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "mongolian", {
get: function () {
return getDatePickerLanguageRecord("872b0db9-d9b4-49d4-b2ae-028122cbd448");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "spanishCastilian", {
get: function () {
return getDatePickerLanguageRecord("8c2fe645-d925-42ea-9819-4a1ac3a340e4");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "slovenian", {
get: function () {
return getDatePickerLanguageRecord("930b417d-72aa-4b39-a3b9-3b9821bf1d4b");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "vietnamese", {
get: function () {
return getDatePickerLanguageRecord("992f2c99-b122-49f6-bc7b-75d242dcb9bb");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "bosnian", {
get: function () {
return getDatePickerLanguageRecord("9d702f7b-360d-46bb-9b6e-0e020a5f6385");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "french", {
get: function () {
return getDatePickerLanguageRecord("9dffbcdd-25c4-44e2-9f6a-d19b9f758ad8");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "turkish", {
get: function () {
return getDatePickerLanguageRecord("9f260686-51cd-40d2-bf26-a09165b213ba");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "russian", {
get: function () {
return getDatePickerLanguageRecord("ad00c2b1-c380-4bf7-b5f4-173b40594bd5");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "serbian", {
get: function () {
return getDatePickerLanguageRecord("b2957404-0007-4b47-a798-dd114894c7e3");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "lithuanian", {
get: function () {
return getDatePickerLanguageRecord("b3519d98-660c-43ed-aee9-bb76e32dcafb");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "portuguese", {
get: function () {
return getDatePickerLanguageRecord("b4e4a5fb-10ef-4d66-84bd-96dddb9d3b3c");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "hebrew", {
get: function () {
return getDatePickerLanguageRecord("b60ef392-7715-437f-a4a9-b89a2128e49c");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "uzbek", {
get: function () {
return getDatePickerLanguageRecord("b6fa2f75-12b9-4973-9027-b4866be01621");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "burmese", {
get: function () {
return getDatePickerLanguageRecord("b719cb40-621d-4610-b16f-f42caad493d4");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "italian", {
get: function () {
return getDatePickerLanguageRecord("ba077ace-9423-401f-88fc-1fff8d7872a0");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "georgian", {
get: function () {
return getDatePickerLanguageRecord("bb85f008-2154-44ee-9199-9e0e19497c47");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "swedish", {
get: function () {
return getDatePickerLanguageRecord("bce28cae-e6f9-4988-97a8-8b0e17ea6703");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "azerbaijani", {
get: function () {
return getDatePickerLanguageRecord("bd68a245-146e-45c9-8dc0-26419cbe5c85");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "hindi", {
get: function () {
return getDatePickerLanguageRecord("c1e7d993-22fe-452a-9754-6a48ac03e6d4");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "bulgarian", {
get: function () {
return getDatePickerLanguageRecord("c356a48b-0411-4b54-b7a3-dd7fa4368645");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "finnish", {
get: function () {
return getDatePickerLanguageRecord("c38dac5a-7528-4647-96e6-887c0c9da82e");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "persian", {
get: function () {
return getDatePickerLanguageRecord("d1bf9a10-3760-41c7-94eb-e24707993416");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "armenian", {
get: function () {
return getDatePickerLanguageRecord("d8f987cd-d08c-40b3-b19b-b60b508cf03d");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "german", {
get: function () {
return getDatePickerLanguageRecord("da3038a7-779c-4599-b0b7-99557f688365");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "belarusian", {
get: function () {
return getDatePickerLanguageRecord("df311624-2b4a-410a-bf54-de447886e3a3");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "welsh", {
get: function () {
return getDatePickerLanguageRecord("dfb449d3-ec70-458e-9f37-89e8f9c207fb");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "ukrainian", {
get: function () {
return getDatePickerLanguageRecord("f6d8b648-df67-4449-934a-bd03dff4c50c");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "bengali", {
get: function () {
return getDatePickerLanguageRecord("fad657c3-4b13-4163-8e21-84c60b6810ee");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "macedonian", {
get: function () {
return getDatePickerLanguageRecord("ffb560d6-c067-42e5-bdd8-0de808acff0a");
}
});

OutSystemsUIModel.staticEntities.dEPRECATED_Color = {};
var getDEPRECATED_ColorRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["4a5b3b8d-44e7-4c03-9b89-453fa2feee20"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.dEPRECATED_Color, "white", {
get: function () {
return getDEPRECATED_ColorRecord("05505a13-1fe9-4adf-9845-11368c74e98b");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.dEPRECATED_Color, "blue", {
get: function () {
return getDEPRECATED_ColorRecord("0772a1e6-baf6-4f8d-9b63-aef9b16bec31");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.dEPRECATED_Color, "black", {
get: function () {
return getDEPRECATED_ColorRecord("26ba2ced-6bce-452f-b33a-7874dc80d8d1");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.dEPRECATED_Color, "violet", {
get: function () {
return getDEPRECATED_ColorRecord("3269784e-d6b0-46db-a0b5-5a9a64ee0e41");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.dEPRECATED_Color, "none", {
get: function () {
return getDEPRECATED_ColorRecord("342260d0-74a4-44fd-9e9d-f0505a330244");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.dEPRECATED_Color, "orange", {
get: function () {
return getDEPRECATED_ColorRecord("833f5f9b-2325-4b92-9285-e14aa1a17c25");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.dEPRECATED_Color, "red", {
get: function () {
return getDEPRECATED_ColorRecord("94682198-3a70-458e-9889-3eef131d1b00");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.dEPRECATED_Color, "primaryColor", {
get: function () {
return getDEPRECATED_ColorRecord("9bd951e1-c94c-434b-85cb-a4cde3ffe638");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.dEPRECATED_Color, "green", {
get: function () {
return getDEPRECATED_ColorRecord("ad00278a-a271-46de-ac30-9f99c87f97a4");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.dEPRECATED_Color, "grey", {
get: function () {
return getDEPRECATED_ColorRecord("f986e894-0745-46fd-aa63-7680b5fd9234");
}
});

OutSystemsUIModel.staticEntities.orientation = {};
var getOrientationRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["4d71f824-a563-4f63-8c76-626e4e0bdddb"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.orientation, "horizontal", {
get: function () {
return getOrientationRecord("7cb45416-3c4a-4178-9c5b-87eccf6ffae8");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.orientation, "vertical", {
get: function () {
return getOrientationRecord("dab877c1-e4a2-43a9-b211-3bb9167dace9");
}
});

OutSystemsUIModel.staticEntities.datePickerTimeFormat = {};
var getDatePickerTimeFormatRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["55e54b1a-0efe-4bef-ae10-c2769129634d"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerTimeFormat, "disabled", {
get: function () {
return getDatePickerTimeFormatRecord("48213c15-538b-4222-a3ea-d136e608a57d");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerTimeFormat, "time24hFormat", {
get: function () {
return getDatePickerTimeFormatRecord("ce1a9924-35ee-4a25-87ae-81f2a97bdf20");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerTimeFormat, "time12hFormat", {
get: function () {
return getDatePickerTimeFormatRecord("e1aba689-db52-4dba-9eef-b5980b3e4fa0");
}
});

OutSystemsUIModel.staticEntities.accordionIconType = {};
var getAccordionIconTypeRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["635cc1de-f6de-4b65-baf1-c661bc518266"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.accordionIconType, "custom", {
get: function () {
return getAccordionIconTypeRecord("586a9223-5e9e-44d2-9405-4a511c4928ee");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.accordionIconType, "plusMinus", {
get: function () {
return getAccordionIconTypeRecord("a4609550-92ab-4e3b-bb2b-7e1f9759b5ed");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.accordionIconType, "caret", {
get: function () {
return getAccordionIconTypeRecord("b16c3109-4152-4df5-a403-ebb92631443c");
}
});

OutSystemsUIModel.staticEntities.direction = {};
var getDirectionRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["67628086-7f8b-4f84-a978-a9d3f547969c"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.direction, "left", {
get: function () {
return getDirectionRecord("67c53875-4631-4b77-b5bf-704f63fe5068");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.direction, "right", {
get: function () {
return getDirectionRecord("d4664682-120b-47de-963c-f7e0e2c432e9");
}
});

OutSystemsUIModel.staticEntities.breakColumns = {};
var getBreakColumnsRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["68f74593-a5c4-4e65-858b-f44211eaf122"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.breakColumns, "none", {
get: function () {
return getBreakColumnsRecord("0712904e-03be-4b5f-9b9e-ecc640f84913");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.breakColumns, "first", {
get: function () {
return getBreakColumnsRecord("3d55ca44-9c70-4bd4-bf96-7d0a7ec1c3b6");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.breakColumns, "all", {
get: function () {
return getBreakColumnsRecord("63e0af38-8b6c-4970-b96a-acd8c6d863e4");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.breakColumns, "middle", {
get: function () {
return getBreakColumnsRecord("694d423c-ce17-45a1-9993-cb57c30ec674");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.breakColumns, "last", {
get: function () {
return getBreakColumnsRecord("6c98320a-c178-4925-b42b-7165ed805ea0");
}
});

OutSystemsUIModel.staticEntities.rangeSliderType = {};
var getRangeSliderTypeRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["6f4436fe-d69a-4b09-8cc9-abddba377729"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.rangeSliderType, "single", {
get: function () {
return getRangeSliderTypeRecord("55e7cf26-5f3d-4d94-9cfc-8258ae2af12b");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.rangeSliderType, "interval", {
get: function () {
return getRangeSliderTypeRecord("d01ad14d-cf37-47ae-8a95-6fbf379558d0");
}
});

OutSystemsUIModel.staticEntities.shape = {};
var getShapeRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["6fe168a9-c16d-4cdb-9b6f-a9e6c6b79326"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.shape, "sharp", {
get: function () {
return getShapeRecord("94deb1f5-6153-4438-92ad-cedea3c1f6f0");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.shape, "softRounded", {
get: function () {
return getShapeRecord("d1093539-d77d-439d-8d53-03d2e0053a52");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.shape, "rounded", {
get: function () {
return getShapeRecord("f20c2269-270a-43b2-ba29-bd8fbff2519f");
}
});

OutSystemsUIModel.staticEntities.stackedCardsPosition = {};
var getStackedCardsPositionRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["71865eb4-55fe-40a5-bc7f-45b005a3a0b5"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.stackedCardsPosition, "bottom", {
get: function () {
return getStackedCardsPositionRecord("2e9dd7c6-b9a7-404f-b207-9a3da7fb05ed");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.stackedCardsPosition, "top", {
get: function () {
return getStackedCardsPositionRecord("5766b18f-82ef-49f1-9476-cf8f49249f25");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.stackedCardsPosition, "none", {
get: function () {
return getStackedCardsPositionRecord("89cf1ed9-b6fd-4e0a-af41-cfd79db935d7");
}
});

OutSystemsUIModel.staticEntities.carouselDirection = {};
var getCarouselDirectionRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["71cbe266-f7c5-42fb-beae-76bc325d99ea"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.carouselDirection, "rightToLeft", {
get: function () {
return getCarouselDirectionRecord("4b5575cd-7598-420a-97db-5088d4d86a4d");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.carouselDirection, "leftToRight", {
get: function () {
return getCarouselDirectionRecord("a05b6420-43c5-4660-9526-95e2052a45a8");
}
});

OutSystemsUIModel.staticEntities.rangeSliderProvider = {};
var getRangeSliderProviderRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["76a8780c-9acf-4be3-949d-c5bb30052481"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.rangeSliderProvider, "noUiSlider", {
get: function () {
return getRangeSliderProviderRecord("5ba5cdf9-a83b-439a-9315-1c857eb9fc08");
}
});

OutSystemsUIModel.staticEntities.autoplay = {};
var getAutoplayRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["82aa58b4-8bbb-4d19-92b6-2944affad02c"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.autoplay, "disabled", {
get: function () {
return getAutoplayRecord("1ffcca5d-17d0-492e-9e9e-b8addde7fd80");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.autoplay, "slow", {
get: function () {
return getAutoplayRecord("4167f601-5731-452d-9653-1be7f25199f1");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.autoplay, "fast", {
get: function () {
return getAutoplayRecord("41b9ec04-2023-4f87-b953-0c01713d1992");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.autoplay, "normal", {
get: function () {
return getAutoplayRecord("e3033046-77ba-49cd-928a-5d831105f349");
}
});

OutSystemsUIModel.staticEntities.position = {};
var getPositionRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["83c073e8-bac2-4122-9772-aa6e122a5d36"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.position, "top", {
get: function () {
return getPositionRecord("3bbcac35-309e-49a8-bf1b-a3c66e1ef3cd");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.position, "left", {
get: function () {
return getPositionRecord("4d70c81a-67bd-4a1f-a21a-c6aa13d0f364");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.position, "bottomRight", {
get: function () {
return getPositionRecord("73459c44-0160-4454-8ad0-c9bd44778a61");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.position, "bottomLeft", {
get: function () {
return getPositionRecord("7352570c-243a-4f05-b6d1-608495931118");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.position, "right", {
get: function () {
return getPositionRecord("bf43697b-2483-4855-a6c2-0a786bab472f");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.position, "topLeft", {
get: function () {
return getPositionRecord("c1d22c62-5a36-4d69-b188-02d62b8fe7c4");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.position, "topRight", {
get: function () {
return getPositionRecord("d14d8aae-f1c9-4538-a4a9-91a2690e6d92");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.position, "center", {
get: function () {
return getPositionRecord("dcc9ffa2-34a7-4097-86d0-dde224907425");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.position, "bottom", {
get: function () {
return getPositionRecord("fb8d90f9-5432-4678-932b-f468c00d3361");
}
});

OutSystemsUIModel.staticEntities.trigger = {};
var getTriggerRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["8f0912ba-c626-4795-90a6-5311e2b970cb"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.trigger, "onClick", {
get: function () {
return getTriggerRecord("19fabbad-c01d-41a3-bdbb-f4f1d87b8042");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.trigger, "onHover", {
get: function () {
return getTriggerRecord("b60aa471-1556-46df-bc15-585543a2a05d");
}
});

OutSystemsUIModel.staticEntities.space = {};
var getSpaceRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["8fb3d471-82a4-439c-9cc1-0555dfa91451"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.space, "large", {
get: function () {
return getSpaceRecord("51b55067-e608-49ed-9f00-1faf9e4a694a");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.space, "medium", {
get: function () {
return getSpaceRecord("7340e97f-de64-4337-ad0d-1defcab8adb2");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.space, "xXLarge", {
get: function () {
return getSpaceRecord("823213f8-9df9-4de0-8aba-2b5566e6f87d");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.space, "extraSmall", {
get: function () {
return getSpaceRecord("83adf9ba-fbcf-4ce0-b4a4-bc6330956b89");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.space, "small", {
get: function () {
return getSpaceRecord("919210a5-6b3b-40c9-9a28-b4e2c28a46f8");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.space, "base", {
get: function () {
return getSpaceRecord("f0572ad3-54ac-4755-8c8e-a9004171fcb1");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.space, "extraLarge", {
get: function () {
return getSpaceRecord("f8dafab9-63b9-40b2-9755-f2f8fa3d6e84");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.space, "none", {
get: function () {
return getSpaceRecord("fb937b97-bd94-4ba4-80ff-446cb3bdf6ae");
}
});

OutSystemsUIModel.staticEntities.alert = {};
var getAlertRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["924486c0-dd9a-46ea-ad74-2cf9ac0c84d9"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.alert, "success", {
get: function () {
return getAlertRecord("4aac6381-179c-477f-a0d2-8aa7c0e2ece5");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.alert, "error", {
get: function () {
return getAlertRecord("85c06001-4d3a-4a08-b18f-4f9ebdc60d33");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.alert, "info", {
get: function () {
return getAlertRecord("e7c6b907-0f56-481e-b267-eb69bd92ed26");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.alert, "warning", {
get: function () {
return getAlertRecord("ed710523-9de5-47b6-b3ac-736fb4848c04");
}
});

OutSystemsUIModel.staticEntities.booleanTypes = {};
var getBooleanTypesRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["9882c8fc-0dd6-492e-b6b9-7a68059ecc06"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.booleanTypes, "true", {
get: function () {
return getBooleanTypesRecord("58ea7788-cac7-4f50-8ef1-ba8e1661b632");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.booleanTypes, "unset", {
get: function () {
return getBooleanTypesRecord("bf11a159-3707-4888-8e86-c3b0c78bc889");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.booleanTypes, "false", {
get: function () {
return getBooleanTypesRecord("df5af092-2604-4409-ae7d-b86d2bcef9fb");
}
});

OutSystemsUIModel.staticEntities.menuAction = {};
var getMenuActionRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["9cc12883-06ab-4cf0-9997-ede7c6c02d67"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.menuAction, "menu", {
get: function () {
return getMenuActionRecord("55ba18a9-cd6b-45dd-99ce-9081ee1387ea");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.menuAction, "auto", {
get: function () {
return getMenuActionRecord("6c0c753a-86f4-4e76-9781-6e821c850c72");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.menuAction, "hidden", {
get: function () {
return getMenuActionRecord("86c9d356-be64-46a1-b027-843ab93b4aea");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.menuAction, "back", {
get: function () {
return getMenuActionRecord("f2db3c50-4c38-4ee7-a770-aa9476cb0d68");
}
});

OutSystemsUIModel.staticEntities.accordionIconPosition = {};
var getAccordionIconPositionRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["a848db2d-fe6c-4df1-8c10-8bdb3c2e948a"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.accordionIconPosition, "left", {
get: function () {
return getAccordionIconPositionRecord("0395cba2-9124-4125-ad88-d6bab39b2253");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.accordionIconPosition, "right", {
get: function () {
return getAccordionIconPositionRecord("8532648f-6556-4b3b-a42c-a3ba091d5efd");
}
});

OutSystemsUIModel.staticEntities.datePickerCalendarType = {};
var getDatePickerCalendarTypeRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["a8849efb-7aa4-4297-971f-db5b0c65fbfa"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerCalendarType, "single", {
get: function () {
return getDatePickerCalendarTypeRecord("15fce8a0-e229-43e7-ba47-f120ed66c001");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerCalendarType, "range", {
get: function () {
return getDatePickerCalendarTypeRecord("c6b4024d-2477-4cef-8c35-be6b1cf28589");
}
});

OutSystemsUIModel.staticEntities.logType = {};
var getLogTypeRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["ac429394-d435-4e1c-8f83-8ec82b367ec9"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.logType, "performance", {
get: function () {
return getLogTypeRecord("0bea3145-4e41-4ff2-8d1a-2cbdd96891d8");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.logType, "debug", {
get: function () {
return getLogTypeRecord("50a3abe9-d7b5-4893-aa9f-6a1571f5f311");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.logType, "error", {
get: function () {
return getLogTypeRecord("9533f0d7-e35b-462f-ac7e-79ae80720888");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.logType, "general", {
get: function () {
return getLogTypeRecord("9562bd04-4fca-4dda-833a-cede0ade14c1");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.logType, "warning", {
get: function () {
return getLogTypeRecord("b84d842f-ae75-493b-9903-9307d627c4d8");
}
});

OutSystemsUIModel.staticEntities.progressType = {};
var getProgressTypeRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["b1c32742-606e-4e3e-9923-1c2e6e69ab6c"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.progressType, "bar", {
get: function () {
return getProgressTypeRecord("2af86c9e-6b2d-46e7-8952-13c649cd474a");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.progressType, "circle", {
get: function () {
return getProgressTypeRecord("383be685-2962-457b-aacf-8950e604937c");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.progressType, "circleFraction", {
get: function () {
return getProgressTypeRecord("4fecd2a8-bf10-456e-af62-a97fbf4d9ca4");
}
});

OutSystemsUIModel.staticEntities.messageStatus = {};
var getMessageStatusRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["c1015fc0-c81c-40cc-a046-bf99cf21a280"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.messageStatus, "hidden", {
get: function () {
return getMessageStatusRecord("2f2266ed-167a-45db-ac12-ca1e3cfa0fd2");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.messageStatus, "read", {
get: function () {
return getMessageStatusRecord("34f4ff93-8e4e-4933-baae-8b9f122eb3cc");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.messageStatus, "sent", {
get: function () {
return getMessageStatusRecord("a1f1ba89-bd84-4943-a94c-a84ea4a142bf");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.messageStatus, "received", {
get: function () {
return getMessageStatusRecord("c90b88d0-8f7d-484a-8d17-b0d1b9795a94");
}
});

OutSystemsUIModel.staticEntities.scrollbarStyle = {};
var getScrollbarStyleRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["c3d6dfea-6da2-468a-80e4-5ce668d43f70"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.scrollbarStyle, "none", {
get: function () {
return getScrollbarStyleRecord("576d66f7-5b65-4e48-a694-eadecda4ff3a");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.scrollbarStyle, "default", {
get: function () {
return getScrollbarStyleRecord("d0f8c46d-762f-47a5-9572-945ac1dbbe7f");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.scrollbarStyle, "compact", {
get: function () {
return getScrollbarStyleRecord("e9191c43-63ef-4469-beac-2b1335aab932");
}
});

OutSystemsUIModel.staticEntities.dropdownProvider = {};
var getDropdownProviderRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["c432b13a-7b10-4a88-993c-71748f34d7ff"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.dropdownProvider, "oSUIComponents", {
get: function () {
return getDropdownProviderRecord("9122fc07-c39c-45f6-8347-0b84ea60be1c");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.dropdownProvider, "virtualSelect", {
get: function () {
return getDropdownProviderRecord("f3edfcf9-5799-472f-8188-937724619a57");
}
});

OutSystemsUIModel.staticEntities.color = {};
var getColorRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["cb6d1da7-26d4-45d9-bc22-9a4c482e6ce2"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.color, "neutral9", {
get: function () {
return getColorRecord("04a6c700-0ae5-44d5-81ce-34ec81d72c1c");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "grape", {
get: function () {
return getColorRecord("0d81324f-81ae-44eb-b81e-cd27ebce7460");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "neutral7", {
get: function () {
return getColorRecord("1434454b-4d44-4ec7-a9ee-8353529b1621");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "neutral10", {
get: function () {
return getColorRecord("1566893e-a30d-405f-878b-e64efdab7f7b");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "teal", {
get: function () {
return getColorRecord("19254415-08b2-4887-a6cf-36433bb1ade0");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "primary", {
get: function () {
return getColorRecord("1df261bf-454e-49a0-951e-87f6077cbbc1");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "neutral4", {
get: function () {
return getColorRecord("20d4e7d1-c296-4853-b584-d2b004ddf9f5");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "neutral8", {
get: function () {
return getColorRecord("31cd8495-438d-4825-8a93-c083bf6f016a");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "indigo", {
get: function () {
return getColorRecord("47b9565a-4f82-4a9d-a543-4aaa707853ac");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "orange", {
get: function () {
return getColorRecord("4d20d5b8-5570-4e18-9345-55772434a9ad");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "lime", {
get: function () {
return getColorRecord("50b20d51-09a6-43df-aa5d-6ae3c99f31e8");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "cyan", {
get: function () {
return getColorRecord("59edafdd-089e-409e-a2d2-78298e55e0f2");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "secondary", {
get: function () {
return getColorRecord("61f545b9-e074-40ee-a884-8102a56d9ee7");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "neutral6", {
get: function () {
return getColorRecord("69c65fbc-5ddc-4e41-afcf-03acff40e7a8");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "yellow", {
get: function () {
return getColorRecord("80145099-0e84-4301-902b-2bd6a933e319");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "neutral2", {
get: function () {
return getColorRecord("8577e423-4296-434f-9ca1-9a18b91e0c29");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "neutral1", {
get: function () {
return getColorRecord("9946980c-176a-4345-90ff-312523579ef0");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "neutral3", {
get: function () {
return getColorRecord("b7447296-c2b5-4d01-883b-b49d25b1c8a6");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "transparent", {
get: function () {
return getColorRecord("b87c59d9-4a95-4567-876d-b978ca413429");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "violet", {
get: function () {
return getColorRecord("bb39306e-ce82-47a7-9c0f-a78f92ff53c6");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "blue", {
get: function () {
return getColorRecord("c1bb8b1b-2f09-4fe9-bec9-eeb243b903d5");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "neutral5", {
get: function () {
return getColorRecord("c1d63249-fde7-4438-b4c9-d445bcfc9257");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "red", {
get: function () {
return getColorRecord("d6c564f5-847a-4155-ba84-91b826bd676f");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "pink", {
get: function () {
return getColorRecord("e9991560-a98c-431e-a583-b707840dc2f3");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "green", {
get: function () {
return getColorRecord("ede4099b-595f-47f0-98ed-583414f4f6bd");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.color, "neutral0", {
get: function () {
return getColorRecord("fb934ce5-6b33-4c96-8d40-b06352706a8d");
}
});

OutSystemsUIModel.staticEntities.columnBreak = {};
var getColumnBreakRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["cce6ac21-942a-492f-8b46-64c5e6ea057b"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.columnBreak, "breakMiddle", {
get: function () {
return getColumnBreakRecord("3b01fc99-ef23-4043-8771-f88660720e01");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.columnBreak, "breakAll", {
get: function () {
return getColumnBreakRecord("43788f73-6893-4396-b67a-04a6ff690e74");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.columnBreak, "breakNone", {
get: function () {
return getColumnBreakRecord("69e6c609-9e8a-45a7-b006-45b92275ec49");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.columnBreak, "breakLast", {
get: function () {
return getColumnBreakRecord("6b3725c8-8951-48ed-a977-cbfaf003c896");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.columnBreak, "breakFirst", {
get: function () {
return getColumnBreakRecord("8c8b45b6-c1af-4b11-907e-3c8a5ce161e2");
}
});

OutSystemsUIModel.staticEntities.dropdownType = {};
var getDropdownTypeRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["e225f392-825d-442c-ac1f-b4b08d829a5d"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.dropdownType, "tags", {
get: function () {
return getDropdownTypeRecord("6c56830e-14f4-418c-bd2d-4d2e0544348f");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.dropdownType, "serverSide", {
get: function () {
return getDropdownTypeRecord("97ff04ac-884e-423d-b756-072fe85a7f03");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.dropdownType, "search", {
get: function () {
return getDropdownTypeRecord("b9ab0f97-c2cd-4696-977e-70b7362f3f15");
}
});

OutSystemsUIModel.staticEntities.steps = {};
var getStepsRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["e4dd8e9f-a620-4df5-b619-9b8a771be5a3"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.steps, "next", {
get: function () {
return getStepsRecord("03e9ec31-9b26-4304-b532-29aa077d99ea");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.steps, "past", {
get: function () {
return getStepsRecord("5452e8a1-02ca-4ff2-8d74-bff1512fc4a3");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.steps, "active", {
get: function () {
return getStepsRecord("dbde9903-8367-49e7-8302-f6758c190844");
}
});

OutSystemsUIModel.staticEntities.datePickerProvider = {};
var getDatePickerProviderRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["eba14106-529d-4e9d-9ca0-fdb74716d75f"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerProvider, "flatpickr", {
get: function () {
return getDatePickerProviderRecord("ed9187c5-7e7e-405e-affc-79f4c04cf540");
}
});

OutSystemsUIModel.staticEntities.carouselNavigation = {};
var getCarouselNavigationRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["ee3aefc9-e437-49fb-86a2-0c2d0656ed43"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.carouselNavigation, "dots", {
get: function () {
return getCarouselNavigationRecord("2ba3836f-3d61-4868-b949-fb01a4e0d441");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.carouselNavigation, "none", {
get: function () {
return getCarouselNavigationRecord("367fee69-dc95-4624-9ba5-da687d881886");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.carouselNavigation, "arrows", {
get: function () {
return getCarouselNavigationRecord("3ae78a75-4c85-4aaa-ba2d-12c24902a7cf");
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.carouselNavigation, "both", {
get: function () {
return getCarouselNavigationRecord("59a3f653-ff1d-49a0-ad2f-dda725b1352b");
}
});

OutSystemsUIModel.staticEntities.datePickerWeekDay = {};
var getDatePickerWeekDayRecord = function (record) {
return OutSystemsUIModel.module.staticEntities["fd4ed0ba-1ab9-4a3e-a2b1-18f41793be2d"][record];
};
Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerWeekDay, "monday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("2fc656af-35c9-4cc8-94f7-cd7970e5afe4"));
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerWeekDay, "saturday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("55758641-50ed-4a93-bb39-a86c02e8782c"));
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerWeekDay, "sunday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("570f21d0-bdbe-4bbe-a452-02e3376f69d8"));
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerWeekDay, "friday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("87ec7c5b-52ec-4dae-82e3-f6f08edd3a2e"));
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerWeekDay, "tuesday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("c59d1722-cbb1-453b-9a29-4fbb246756cd"));
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerWeekDay, "thursday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("f06c120a-c368-4568-9216-42f7c8a60d8c"));
}
});

Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerWeekDay, "wednesday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("f19cb895-a764-44e0-90e8-00bacb84e134"));
}
});

});
