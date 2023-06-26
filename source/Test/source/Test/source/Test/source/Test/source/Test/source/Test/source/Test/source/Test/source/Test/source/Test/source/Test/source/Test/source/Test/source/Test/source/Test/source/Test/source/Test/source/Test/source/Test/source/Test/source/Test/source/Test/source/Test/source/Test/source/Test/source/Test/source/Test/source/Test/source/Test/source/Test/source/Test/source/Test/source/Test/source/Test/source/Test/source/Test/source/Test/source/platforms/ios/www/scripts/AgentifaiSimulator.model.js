define("AgentifaiSimulator.model$SpaceRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$SpaceRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.SpaceRecord = SpaceRecord;

});
define("AgentifaiSimulator.model$SpaceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$SpaceRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SpaceRecordList = (function (_super) {
__extends(SpaceRecordList, _super);
function SpaceRecordList(defaults) {
_super.apply(this, arguments);
}
SpaceRecordList.itemType = AgentifaiSimulatorModel.SpaceRecord;
return SpaceRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SpaceRecordList = SpaceRecordList;

});
define("AgentifaiSimulator.model$BooleanTypesList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$BooleanTypesRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var BooleanTypesList = (function (_super) {
__extends(BooleanTypesList, _super);
function BooleanTypesList(defaults) {
_super.apply(this, arguments);
}
BooleanTypesList.itemType = OutSystemsUIModel.BooleanTypesRec;
return BooleanTypesList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.BooleanTypesList = BooleanTypesList;

});
define("AgentifaiSimulator.model$OrientationList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$OrientationRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var OrientationList = (function (_super) {
__extends(OrientationList, _super);
function OrientationList(defaults) {
_super.apply(this, arguments);
}
OrientationList.itemType = OutSystemsUIModel.OrientationRec;
return OrientationList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.OrientationList = OrientationList;

});
define("AgentifaiSimulator.model$CarouselDirectionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$CarouselDirectionRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.CarouselDirectionRecord = CarouselDirectionRecord;

});
define("AgentifaiSimulator.model$CarouselDirectionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$CarouselDirectionRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var CarouselDirectionRecordList = (function (_super) {
__extends(CarouselDirectionRecordList, _super);
function CarouselDirectionRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselDirectionRecordList.itemType = AgentifaiSimulatorModel.CarouselDirectionRecord;
return CarouselDirectionRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.CarouselDirectionRecordList = CarouselDirectionRecordList;

});
define("AgentifaiSimulator.model$ThemesRec", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ThemesRec = (function (_super) {
__extends(ThemesRec, _super);
function ThemesRec(defaults) {
_super.apply(this, arguments);
}
ThemesRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ThemesRec.fromStructure = function (str) {
return new ThemesRec(new ThemesRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ThemesRec.init();
return ThemesRec;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.ThemesRec = ThemesRec;

});
define("AgentifaiSimulator.model$ThemesRecord", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$ThemesRec"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ThemesRecord = (function (_super) {
__extends(ThemesRecord, _super);
function ThemesRecord(defaults) {
_super.apply(this, arguments);
}
ThemesRecord.attributesToDeclare = function () {
return [
this.attr("Themes", "themesAttr", "Themes", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new AgentifaiSimulatorModel.ThemesRec());
}, true, AgentifaiSimulatorModel.ThemesRec)
].concat(_super.attributesToDeclare.call(this));
};
ThemesRecord.fromStructure = function (str) {
return new ThemesRecord(new ThemesRecord.RecordClass({
themesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ThemesRecord._isAnonymousRecord = true;
ThemesRecord.UniqueId = "03347995-95af-2ed3-8ff1-2efd64c0f7e4";
ThemesRecord.init();
return ThemesRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.ThemesRecord = ThemesRecord;

});
define("AgentifaiSimulator.model$LegendPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$LegendPositionRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var LegendPositionRecord = (function (_super) {
__extends(LegendPositionRecord, _super);
function LegendPositionRecord(defaults) {
_super.apply(this, arguments);
}
LegendPositionRecord.attributesToDeclare = function () {
return [
this.attr("LegendPosition", "legendPositionAttr", "LegendPosition", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.LegendPositionRec());
}, true, OutSystemsChartsModel.LegendPositionRec)
].concat(_super.attributesToDeclare.call(this));
};
LegendPositionRecord.fromStructure = function (str) {
return new LegendPositionRecord(new LegendPositionRecord.RecordClass({
legendPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LegendPositionRecord._isAnonymousRecord = true;
LegendPositionRecord.UniqueId = "054139ee-1b4e-118a-0de0-bda9edde9b3e";
LegendPositionRecord.init();
return LegendPositionRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.LegendPositionRecord = LegendPositionRecord;

});
define("AgentifaiSimulator.model$DirectionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DirectionRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.DirectionRecord = DirectionRecord;

});
define("AgentifaiSimulator.model$DatePickerWeekDayRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DatePickerWeekDayRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.DatePickerWeekDayRecord = DatePickerWeekDayRecord;

});
define("AgentifaiSimulator.model$DatePickerWeekDayRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$DatePickerWeekDayRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DatePickerWeekDayRecordList = (function (_super) {
__extends(DatePickerWeekDayRecordList, _super);
function DatePickerWeekDayRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerWeekDayRecordList.itemType = AgentifaiSimulatorModel.DatePickerWeekDayRecord;
return DatePickerWeekDayRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DatePickerWeekDayRecordList = DatePickerWeekDayRecordList;

});
define("AgentifaiSimulator.model$ShapeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$ShapeRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.ShapeRecord = ShapeRecord;

});
define("AgentifaiSimulator.model$BulkActionsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$BulkActionsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var BulkActionsList = (function (_super) {
__extends(BulkActionsList, _super);
function BulkActionsList(defaults) {
_super.apply(this, arguments);
}
BulkActionsList.itemType = OutSystemsUIModel.BulkActionsRec;
return BulkActionsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.BulkActionsList = BulkActionsList;

});
define("AgentifaiSimulator.model$StepsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$StepsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.StepsRecord = StepsRecord;

});
define("AgentifaiSimulator.model$ChartLegendOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$ChartLegendOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ChartLegendOptionalConfigsRecord = (function (_super) {
__extends(ChartLegendOptionalConfigsRecord, _super);
function ChartLegendOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
ChartLegendOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("ChartLegendOptionalConfigs", "chartLegendOptionalConfigsAttr", "ChartLegendOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ChartLegendOptionalConfigsRec());
}, true, OutSystemsChartsModel.ChartLegendOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
ChartLegendOptionalConfigsRecord.fromStructure = function (str) {
return new ChartLegendOptionalConfigsRecord(new ChartLegendOptionalConfigsRecord.RecordClass({
chartLegendOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ChartLegendOptionalConfigsRecord._isAnonymousRecord = true;
ChartLegendOptionalConfigsRecord.UniqueId = "c38769c4-e3f5-3c55-790e-6a4b2c81b7ff";
ChartLegendOptionalConfigsRecord.init();
return ChartLegendOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.ChartLegendOptionalConfigsRecord = ChartLegendOptionalConfigsRecord;

});
define("AgentifaiSimulator.model$ChartLegendOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$ChartLegendOptionalConfigsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ChartLegendOptionalConfigsRecordList = (function (_super) {
__extends(ChartLegendOptionalConfigsRecordList, _super);
function ChartLegendOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
ChartLegendOptionalConfigsRecordList.itemType = AgentifaiSimulatorModel.ChartLegendOptionalConfigsRecord;
return ChartLegendOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ChartLegendOptionalConfigsRecordList = ChartLegendOptionalConfigsRecordList;

});
define("AgentifaiSimulator.model$ChartLegendStylingRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$ChartLegendStylingRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ChartLegendStylingRecord = (function (_super) {
__extends(ChartLegendStylingRecord, _super);
function ChartLegendStylingRecord(defaults) {
_super.apply(this, arguments);
}
ChartLegendStylingRecord.attributesToDeclare = function () {
return [
this.attr("ChartLegendStyling", "chartLegendStylingAttr", "ChartLegendStyling", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ChartLegendStylingRec());
}, true, OutSystemsChartsModel.ChartLegendStylingRec)
].concat(_super.attributesToDeclare.call(this));
};
ChartLegendStylingRecord.fromStructure = function (str) {
return new ChartLegendStylingRecord(new ChartLegendStylingRecord.RecordClass({
chartLegendStylingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ChartLegendStylingRecord._isAnonymousRecord = true;
ChartLegendStylingRecord.UniqueId = "11e12158-254e-5be6-bde5-f4ba88bacb32";
ChartLegendStylingRecord.init();
return ChartLegendStylingRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.ChartLegendStylingRecord = ChartLegendStylingRecord;

});
define("AgentifaiSimulator.model$NoUiSliderConfigs_RangeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$NoUiSliderConfigs_RangeRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var NoUiSliderConfigs_RangeList = (function (_super) {
__extends(NoUiSliderConfigs_RangeList, _super);
function NoUiSliderConfigs_RangeList(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigs_RangeList.itemType = OutSystemsUIModel.NoUiSliderConfigs_RangeRec;
return NoUiSliderConfigs_RangeList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.NoUiSliderConfigs_RangeList = NoUiSliderConfigs_RangeList;

});
define("AgentifaiSimulator.model$NoUiSliderConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$NoUiSliderConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.NoUiSliderConfigsRecord = NoUiSliderConfigsRecord;

});
define("AgentifaiSimulator.model$LoginAttemptResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "Users.model", "AgentifaiSimulator.model", "Users.model$LoginAttemptResultRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$Users"], function (exports, OutSystems, UsersModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var LoginAttemptResultRecord = (function (_super) {
__extends(LoginAttemptResultRecord, _super);
function LoginAttemptResultRecord(defaults) {
_super.apply(this, arguments);
}
LoginAttemptResultRecord.attributesToDeclare = function () {
return [
this.attr("LoginAttemptResult", "loginAttemptResultAttr", "LoginAttemptResult", true, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UsersModel.LoginAttemptResultRec());
}, true, UsersModel.LoginAttemptResultRec)
].concat(_super.attributesToDeclare.call(this));
};
LoginAttemptResultRecord.fromStructure = function (str) {
return new LoginAttemptResultRecord(new LoginAttemptResultRecord.RecordClass({
loginAttemptResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LoginAttemptResultRecord._isAnonymousRecord = true;
LoginAttemptResultRecord.UniqueId = "1310d7a6-3cee-d4d1-094e-f97bea66e945";
LoginAttemptResultRecord.init();
return LoginAttemptResultRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.LoginAttemptResultRecord = LoginAttemptResultRecord;

});
define("AgentifaiSimulator.model$AnimationTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$AnimationTypeRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.AnimationTypeRecord = AnimationTypeRecord;

});
define("AgentifaiSimulator.model$AnimationTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$AnimationTypeRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var AnimationTypeRecordList = (function (_super) {
__extends(AnimationTypeRecordList, _super);
function AnimationTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRecordList.itemType = AgentifaiSimulatorModel.AnimationTypeRecord;
return AnimationTypeRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.AnimationTypeRecordList = AnimationTypeRecordList;

});
define("AgentifaiSimulator.model$YAxisGridLinesStylingRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$YAxisGridLinesStylingRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var YAxisGridLinesStylingRecord = (function (_super) {
__extends(YAxisGridLinesStylingRecord, _super);
function YAxisGridLinesStylingRecord(defaults) {
_super.apply(this, arguments);
}
YAxisGridLinesStylingRecord.attributesToDeclare = function () {
return [
this.attr("YAxisGridLinesStyling", "yAxisGridLinesStylingAttr", "YAxisGridLinesStyling", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.YAxisGridLinesStylingRec());
}, true, OutSystemsChartsModel.YAxisGridLinesStylingRec)
].concat(_super.attributesToDeclare.call(this));
};
YAxisGridLinesStylingRecord.fromStructure = function (str) {
return new YAxisGridLinesStylingRecord(new YAxisGridLinesStylingRecord.RecordClass({
yAxisGridLinesStylingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
YAxisGridLinesStylingRecord._isAnonymousRecord = true;
YAxisGridLinesStylingRecord.UniqueId = "1566355e-c5fa-f313-8acd-d10ae68fb068";
YAxisGridLinesStylingRecord.init();
return YAxisGridLinesStylingRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.YAxisGridLinesStylingRecord = YAxisGridLinesStylingRecord;

});
define("AgentifaiSimulator.model$SpaceList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$SpaceRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SpaceList = (function (_super) {
__extends(SpaceList, _super);
function SpaceList(defaults) {
_super.apply(this, arguments);
}
SpaceList.itemType = OutSystemsUIModel.SpaceRec;
return SpaceList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SpaceList = SpaceList;

});
define("AgentifaiSimulator.model$DeviceResponsiveRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DeviceResponsiveRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.DeviceResponsiveRecord = DeviceResponsiveRecord;

});
define("AgentifaiSimulator.model$OrientationRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$OrientationRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.OrientationRecord = OrientationRecord;

});
define("AgentifaiSimulator.model$OrientationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$OrientationRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var OrientationRecordList = (function (_super) {
__extends(OrientationRecordList, _super);
function OrientationRecordList(defaults) {
_super.apply(this, arguments);
}
OrientationRecordList.itemType = AgentifaiSimulatorModel.OrientationRecord;
return OrientationRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.OrientationRecordList = OrientationRecordList;

});
define("AgentifaiSimulator.model$AxisLabelList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$AxisLabelRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var AxisLabelList = (function (_super) {
__extends(AxisLabelList, _super);
function AxisLabelList(defaults) {
_super.apply(this, arguments);
}
AxisLabelList.itemType = OutSystemsChartsModel.AxisLabelRec;
return AxisLabelList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.AxisLabelList = AxisLabelList;

});
define("AgentifaiSimulator.model$YAxisStylingRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$YAxisStylingRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var YAxisStylingRecord = (function (_super) {
__extends(YAxisStylingRecord, _super);
function YAxisStylingRecord(defaults) {
_super.apply(this, arguments);
}
YAxisStylingRecord.attributesToDeclare = function () {
return [
this.attr("YAxisStyling", "yAxisStylingAttr", "YAxisStyling", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.YAxisStylingRec());
}, true, OutSystemsChartsModel.YAxisStylingRec)
].concat(_super.attributesToDeclare.call(this));
};
YAxisStylingRecord.fromStructure = function (str) {
return new YAxisStylingRecord(new YAxisStylingRecord.RecordClass({
yAxisStylingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
YAxisStylingRecord._isAnonymousRecord = true;
YAxisStylingRecord.UniqueId = "d614572f-93a7-9200-a323-5ee26034df62";
YAxisStylingRecord.init();
return YAxisStylingRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.YAxisStylingRecord = YAxisStylingRecord;

});
define("AgentifaiSimulator.model$YAxisStylingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$YAxisStylingRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var YAxisStylingRecordList = (function (_super) {
__extends(YAxisStylingRecordList, _super);
function YAxisStylingRecordList(defaults) {
_super.apply(this, arguments);
}
YAxisStylingRecordList.itemType = AgentifaiSimulatorModel.YAxisStylingRecord;
return YAxisStylingRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.YAxisStylingRecordList = YAxisStylingRecordList;

});
define("AgentifaiSimulator.model$TriggerList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$TriggerRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var TriggerList = (function (_super) {
__extends(TriggerList, _super);
function TriggerList(defaults) {
_super.apply(this, arguments);
}
TriggerList.itemType = OutSystemsUIModel.TriggerRec;
return TriggerList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.TriggerList = TriggerList;

});
define("AgentifaiSimulator.model$AutoplayRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$AutoplayRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.AutoplayRecord = AutoplayRecord;

});
define("AgentifaiSimulator.model$AutoplayRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$AutoplayRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var AutoplayRecordList = (function (_super) {
__extends(AutoplayRecordList, _super);
function AutoplayRecordList(defaults) {
_super.apply(this, arguments);
}
AutoplayRecordList.itemType = AgentifaiSimulatorModel.AutoplayRecord;
return AutoplayRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.AutoplayRecordList = AutoplayRecordList;

});
define("AgentifaiSimulator.model$", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.Types.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.TextList = TextList;

});
define("AgentifaiSimulator.model$PropertyValueRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$PropertyValueRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var PropertyValueRecord = (function (_super) {
__extends(PropertyValueRecord, _super);
function PropertyValueRecord(defaults) {
_super.apply(this, arguments);
}
PropertyValueRecord.attributesToDeclare = function () {
return [
this.attr("PropertyValue", "propertyValueAttr", "PropertyValue", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.PropertyValueRec());
}, true, OutSystemsChartsModel.PropertyValueRec)
].concat(_super.attributesToDeclare.call(this));
};
PropertyValueRecord.fromStructure = function (str) {
return new PropertyValueRecord(new PropertyValueRecord.RecordClass({
propertyValueAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PropertyValueRecord._isAnonymousRecord = true;
PropertyValueRecord.UniqueId = "a193d684-3268-14a4-a15e-932d0cccd250";
PropertyValueRecord.init();
return PropertyValueRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.PropertyValueRecord = PropertyValueRecord;

});
define("AgentifaiSimulator.model$PropertyValueRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$PropertyValueRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var PropertyValueRecordList = (function (_super) {
__extends(PropertyValueRecordList, _super);
function PropertyValueRecordList(defaults) {
_super.apply(this, arguments);
}
PropertyValueRecordList.itemType = AgentifaiSimulatorModel.PropertyValueRecord;
return PropertyValueRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.PropertyValueRecordList = PropertyValueRecordList;

});
define("AgentifaiSimulator.model$LegendPositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$LegendPositionRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var LegendPositionList = (function (_super) {
__extends(LegendPositionList, _super);
function LegendPositionList(defaults) {
_super.apply(this, arguments);
}
LegendPositionList.itemType = OutSystemsChartsModel.LegendPositionRec;
return LegendPositionList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.LegendPositionList = LegendPositionList;

});
define("AgentifaiSimulator.model$SamlUserRecord", ["exports", "OutSystems/ClientRuntime/Main", "Users.model", "AgentifaiSimulator.model", "Users.model$SamlUserRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$Users"], function (exports, OutSystems, UsersModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SamlUserRecord = (function (_super) {
__extends(SamlUserRecord, _super);
function SamlUserRecord(defaults) {
_super.apply(this, arguments);
}
SamlUserRecord.attributesToDeclare = function () {
return [
this.attr("SamlUser", "samlUserAttr", "SamlUser", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UsersModel.SamlUserRec());
}, true, UsersModel.SamlUserRec)
].concat(_super.attributesToDeclare.call(this));
};
SamlUserRecord.fromStructure = function (str) {
return new SamlUserRecord(new SamlUserRecord.RecordClass({
samlUserAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SamlUserRecord._isAnonymousRecord = true;
SamlUserRecord.UniqueId = "1d70b615-17da-f167-401a-d5f2b6a5089a";
SamlUserRecord.init();
return SamlUserRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.SamlUserRecord = SamlUserRecord;

});
define("AgentifaiSimulator.model$YAxisOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$YAxisOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var YAxisOptionalConfigsRecord = (function (_super) {
__extends(YAxisOptionalConfigsRecord, _super);
function YAxisOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
YAxisOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("YAxisOptionalConfigs", "yAxisOptionalConfigsAttr", "YAxisOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.YAxisOptionalConfigsRec());
}, true, OutSystemsChartsModel.YAxisOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
YAxisOptionalConfigsRecord.fromStructure = function (str) {
return new YAxisOptionalConfigsRecord(new YAxisOptionalConfigsRecord.RecordClass({
yAxisOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
YAxisOptionalConfigsRecord._isAnonymousRecord = true;
YAxisOptionalConfigsRecord.UniqueId = "65ec7e7c-1193-943a-c7d3-16b6ce7d97cc";
YAxisOptionalConfigsRecord.init();
return YAxisOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.YAxisOptionalConfigsRecord = YAxisOptionalConfigsRecord;

});
define("AgentifaiSimulator.model$YAxisOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$YAxisOptionalConfigsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var YAxisOptionalConfigsRecordList = (function (_super) {
__extends(YAxisOptionalConfigsRecordList, _super);
function YAxisOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
YAxisOptionalConfigsRecordList.itemType = AgentifaiSimulatorModel.YAxisOptionalConfigsRecord;
return YAxisOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.YAxisOptionalConfigsRecordList = YAxisOptionalConfigsRecordList;

});
define("AgentifaiSimulator.model$BooleanTypesRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$BooleanTypesRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.BooleanTypesRecord = BooleanTypesRecord;

});
define("AgentifaiSimulator.model$AxisLabelRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$AxisLabelRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var AxisLabelRecord = (function (_super) {
__extends(AxisLabelRecord, _super);
function AxisLabelRecord(defaults) {
_super.apply(this, arguments);
}
AxisLabelRecord.attributesToDeclare = function () {
return [
this.attr("AxisLabel", "axisLabelAttr", "AxisLabel", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.AxisLabelRec());
}, true, OutSystemsChartsModel.AxisLabelRec)
].concat(_super.attributesToDeclare.call(this));
};
AxisLabelRecord.fromStructure = function (str) {
return new AxisLabelRecord(new AxisLabelRecord.RecordClass({
axisLabelAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AxisLabelRecord._isAnonymousRecord = true;
AxisLabelRecord.UniqueId = "f3000856-fa7c-3354-ce37-1360ce2db23a";
AxisLabelRecord.init();
return AxisLabelRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.AxisLabelRecord = AxisLabelRecord;

});
define("AgentifaiSimulator.model$AxisLabelRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$AxisLabelRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var AxisLabelRecordList = (function (_super) {
__extends(AxisLabelRecordList, _super);
function AxisLabelRecordList(defaults) {
_super.apply(this, arguments);
}
AxisLabelRecordList.itemType = AgentifaiSimulatorModel.AxisLabelRecord;
return AxisLabelRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.AxisLabelRecordList = AxisLabelRecordList;

});
define("AgentifaiSimulator.model$AccordionIconPositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$AccordionIconPositionRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var AccordionIconPositionList = (function (_super) {
__extends(AccordionIconPositionList, _super);
function AccordionIconPositionList(defaults) {
_super.apply(this, arguments);
}
AccordionIconPositionList.itemType = OutSystemsUIModel.AccordionIconPositionRec;
return AccordionIconPositionList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.AccordionIconPositionList = AccordionIconPositionList;

});
define("AgentifaiSimulator.model$SeriesStylingMarkerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$SeriesStylingMarkerRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SeriesStylingMarkerRecord = (function (_super) {
__extends(SeriesStylingMarkerRecord, _super);
function SeriesStylingMarkerRecord(defaults) {
_super.apply(this, arguments);
}
SeriesStylingMarkerRecord.attributesToDeclare = function () {
return [
this.attr("SeriesStylingMarker", "seriesStylingMarkerAttr", "SeriesStylingMarker", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.SeriesStylingMarkerRec());
}, true, OutSystemsChartsModel.SeriesStylingMarkerRec)
].concat(_super.attributesToDeclare.call(this));
};
SeriesStylingMarkerRecord.fromStructure = function (str) {
return new SeriesStylingMarkerRecord(new SeriesStylingMarkerRecord.RecordClass({
seriesStylingMarkerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SeriesStylingMarkerRecord._isAnonymousRecord = true;
SeriesStylingMarkerRecord.UniqueId = "23f04252-aed9-962b-8ebd-b251db000b96";
SeriesStylingMarkerRecord.init();
return SeriesStylingMarkerRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.SeriesStylingMarkerRecord = SeriesStylingMarkerRecord;

});
define("AgentifaiSimulator.model$NoUiSliderConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$NoUiSliderConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var NoUiSliderConfigsList = (function (_super) {
__extends(NoUiSliderConfigsList, _super);
function NoUiSliderConfigsList(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigsList.itemType = OutSystemsUIModel.NoUiSliderConfigsRec;
return NoUiSliderConfigsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.NoUiSliderConfigsList = NoUiSliderConfigsList;

});
define("AgentifaiSimulator.model$PropertyValueList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$PropertyValueRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var PropertyValueList = (function (_super) {
__extends(PropertyValueList, _super);
function PropertyValueList(defaults) {
_super.apply(this, arguments);
}
PropertyValueList.itemType = OutSystemsChartsModel.PropertyValueRec;
return PropertyValueList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.PropertyValueList = PropertyValueList;

});
define("AgentifaiSimulator.model$LegendLayoutRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$LegendLayoutRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var LegendLayoutRecord = (function (_super) {
__extends(LegendLayoutRecord, _super);
function LegendLayoutRecord(defaults) {
_super.apply(this, arguments);
}
LegendLayoutRecord.attributesToDeclare = function () {
return [
this.attr("LegendLayout", "legendLayoutAttr", "LegendLayout", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.LegendLayoutRec());
}, true, OutSystemsChartsModel.LegendLayoutRec)
].concat(_super.attributesToDeclare.call(this));
};
LegendLayoutRecord.fromStructure = function (str) {
return new LegendLayoutRecord(new LegendLayoutRecord.RecordClass({
legendLayoutAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LegendLayoutRecord._isAnonymousRecord = true;
LegendLayoutRecord.UniqueId = "250abb78-0612-7d6d-6c56-5bcd6bd8fd6f";
LegendLayoutRecord.init();
return LegendLayoutRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.LegendLayoutRecord = LegendLayoutRecord;

});
define("AgentifaiSimulator.model$LegendPosition_v1Record", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$LegendPosition_v1Rec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var LegendPosition_v1Record = (function (_super) {
__extends(LegendPosition_v1Record, _super);
function LegendPosition_v1Record(defaults) {
_super.apply(this, arguments);
}
LegendPosition_v1Record.attributesToDeclare = function () {
return [
this.attr("LegendPosition_v1", "legendPosition_v1Attr", "LegendPosition_v1", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.LegendPosition_v1Rec());
}, true, OutSystemsChartsModel.LegendPosition_v1Rec)
].concat(_super.attributesToDeclare.call(this));
};
LegendPosition_v1Record.fromStructure = function (str) {
return new LegendPosition_v1Record(new LegendPosition_v1Record.RecordClass({
legendPosition_v1Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LegendPosition_v1Record._isAnonymousRecord = true;
LegendPosition_v1Record.UniqueId = "d2362d0d-0bb3-6623-a5f0-020a47954dfc";
LegendPosition_v1Record.init();
return LegendPosition_v1Record;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.LegendPosition_v1Record = LegendPosition_v1Record;

});
define("AgentifaiSimulator.model$LegendPosition_v1RecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$LegendPosition_v1Record"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var LegendPosition_v1RecordList = (function (_super) {
__extends(LegendPosition_v1RecordList, _super);
function LegendPosition_v1RecordList(defaults) {
_super.apply(this, arguments);
}
LegendPosition_v1RecordList.itemType = AgentifaiSimulatorModel.LegendPosition_v1Record;
return LegendPosition_v1RecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.LegendPosition_v1RecordList = LegendPosition_v1RecordList;

});
define("AgentifaiSimulator.model$BulkActionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$BulkActionsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.BulkActionsRecord = BulkActionsRecord;

});
define("AgentifaiSimulator.model$BulkActionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$BulkActionsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var BulkActionsRecordList = (function (_super) {
__extends(BulkActionsRecordList, _super);
function BulkActionsRecordList(defaults) {
_super.apply(this, arguments);
}
BulkActionsRecordList.itemType = AgentifaiSimulatorModel.BulkActionsRecord;
return BulkActionsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.BulkActionsRecordList = BulkActionsRecordList;

});
define("AgentifaiSimulator.model$BreakColumnsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$BreakColumnsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.BreakColumnsRecord = BreakColumnsRecord;

});
define("AgentifaiSimulator.model$XAxisGridLinesStylingRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$XAxisGridLinesStylingRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var XAxisGridLinesStylingRecord = (function (_super) {
__extends(XAxisGridLinesStylingRecord, _super);
function XAxisGridLinesStylingRecord(defaults) {
_super.apply(this, arguments);
}
XAxisGridLinesStylingRecord.attributesToDeclare = function () {
return [
this.attr("XAxisGridLinesStyling", "xAxisGridLinesStylingAttr", "XAxisGridLinesStyling", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.XAxisGridLinesStylingRec());
}, true, OutSystemsChartsModel.XAxisGridLinesStylingRec)
].concat(_super.attributesToDeclare.call(this));
};
XAxisGridLinesStylingRecord.fromStructure = function (str) {
return new XAxisGridLinesStylingRecord(new XAxisGridLinesStylingRecord.RecordClass({
xAxisGridLinesStylingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
XAxisGridLinesStylingRecord._isAnonymousRecord = true;
XAxisGridLinesStylingRecord.UniqueId = "268a48d1-c903-fcee-31c2-d9b87f8f364f";
XAxisGridLinesStylingRecord.init();
return XAxisGridLinesStylingRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.XAxisGridLinesStylingRecord = XAxisGridLinesStylingRecord;

});
define("AgentifaiSimulator.model$SizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$SizeRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.SizeRecord = SizeRecord;

});
define("AgentifaiSimulator.model$SizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$SizeRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SizeRecordList = (function (_super) {
__extends(SizeRecordList, _super);
function SizeRecordList(defaults) {
_super.apply(this, arguments);
}
SizeRecordList.itemType = AgentifaiSimulatorModel.SizeRecord;
return SizeRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SizeRecordList = SizeRecordList;

});
define("AgentifaiSimulator.model$ErrorMessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$ErrorMessageRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.ErrorMessageRecord = ErrorMessageRecord;

});
define("AgentifaiSimulator.model$GroupRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "AgentifaiSimulator.model", "ServiceCenter.model$GroupRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var GroupRecord = (function (_super) {
__extends(GroupRecord, _super);
function GroupRecord(defaults) {
_super.apply(this, arguments);
}
GroupRecord.attributesToDeclare = function () {
return [
this.attr("Group", "groupAttr", "Group", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.GroupRec());
}, true, ServiceCenterModel.GroupRec)
].concat(_super.attributesToDeclare.call(this));
};
GroupRecord.fromStructure = function (str) {
return new GroupRecord(new GroupRecord.RecordClass({
groupAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GroupRecord._isAnonymousRecord = true;
GroupRecord.UniqueId = "28b11f0a-0807-5ef7-202d-92b33deb5c79";
GroupRecord.init();
return GroupRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.GroupRecord = GroupRecord;

});
define("AgentifaiSimulator.model$DropdownOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DropdownOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.DropdownOptionalConfigsRecord = DropdownOptionalConfigsRecord;

});
define("AgentifaiSimulator.model$GroupRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$GroupRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var GroupRecordList = (function (_super) {
__extends(GroupRecordList, _super);
function GroupRecordList(defaults) {
_super.apply(this, arguments);
}
GroupRecordList.itemType = AgentifaiSimulatorModel.GroupRecord;
return GroupRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.GroupRecordList = GroupRecordList;

});
define("AgentifaiSimulator.model$Legacy_ChartFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$Legacy_ChartFormatRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var Legacy_ChartFormatRecord = (function (_super) {
__extends(Legacy_ChartFormatRecord, _super);
function Legacy_ChartFormatRecord(defaults) {
_super.apply(this, arguments);
}
Legacy_ChartFormatRecord.attributesToDeclare = function () {
return [
this.attr("Legacy_ChartFormat", "legacy_ChartFormatAttr", "Legacy_ChartFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.Legacy_ChartFormatRec());
}, true, OutSystemsChartsModel.Legacy_ChartFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
Legacy_ChartFormatRecord.fromStructure = function (str) {
return new Legacy_ChartFormatRecord(new Legacy_ChartFormatRecord.RecordClass({
legacy_ChartFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Legacy_ChartFormatRecord._isAnonymousRecord = true;
Legacy_ChartFormatRecord.UniqueId = "2b9e4142-8d5c-5ca3-b04a-80be4ce98f53";
Legacy_ChartFormatRecord.init();
return Legacy_ChartFormatRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.Legacy_ChartFormatRecord = Legacy_ChartFormatRecord;

});
define("AgentifaiSimulator.model$LegendLayoutRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$LegendLayoutRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var LegendLayoutRecordList = (function (_super) {
__extends(LegendLayoutRecordList, _super);
function LegendLayoutRecordList(defaults) {
_super.apply(this, arguments);
}
LegendLayoutRecordList.itemType = AgentifaiSimulatorModel.LegendLayoutRecord;
return LegendLayoutRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.LegendLayoutRecordList = LegendLayoutRecordList;

});
define("AgentifaiSimulator.model$MessageStatusRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$MessageStatusRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.MessageStatusRecord = MessageStatusRecord;

});
define("AgentifaiSimulator.model$MessageStatusRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$MessageStatusRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var MessageStatusRecordList = (function (_super) {
__extends(MessageStatusRecordList, _super);
function MessageStatusRecordList(defaults) {
_super.apply(this, arguments);
}
MessageStatusRecordList.itemType = AgentifaiSimulatorModel.MessageStatusRecord;
return MessageStatusRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.MessageStatusRecordList = MessageStatusRecordList;

});
define("AgentifaiSimulator.model$MenuActionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$MenuActionRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.MenuActionRecord = MenuActionRecord;

});
define("AgentifaiSimulator.model$MenuActionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$MenuActionRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var MenuActionRecordList = (function (_super) {
__extends(MenuActionRecordList, _super);
function MenuActionRecordList(defaults) {
_super.apply(this, arguments);
}
MenuActionRecordList.itemType = AgentifaiSimulatorModel.MenuActionRecord;
return MenuActionRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.MenuActionRecordList = MenuActionRecordList;

});
define("AgentifaiSimulator.model$YAxisOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$YAxisOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var YAxisOptionalConfigsList = (function (_super) {
__extends(YAxisOptionalConfigsList, _super);
function YAxisOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
YAxisOptionalConfigsList.itemType = OutSystemsChartsModel.YAxisOptionalConfigsRec;
return YAxisOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.YAxisOptionalConfigsList = YAxisOptionalConfigsList;

});
define("AgentifaiSimulator.model$DatePickerRangeOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DatePickerRangeOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.DatePickerRangeOptionalConfigsRecord = DatePickerRangeOptionalConfigsRecord;

});
define("AgentifaiSimulator.model$DropdownTagsOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DropdownTagsOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.DropdownTagsOptionalConfigsRecord = DropdownTagsOptionalConfigsRecord;

});
define("AgentifaiSimulator.model$DropdownTagsOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$DropdownTagsOptionalConfigsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DropdownTagsOptionalConfigsRecordList = (function (_super) {
__extends(DropdownTagsOptionalConfigsRecordList, _super);
function DropdownTagsOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownTagsOptionalConfigsRecordList.itemType = AgentifaiSimulatorModel.DropdownTagsOptionalConfigsRecord;
return DropdownTagsOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DropdownTagsOptionalConfigsRecordList = DropdownTagsOptionalConfigsRecordList;

});
define("AgentifaiSimulator.model$DatePickerOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DatePickerOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.DatePickerOptionalConfigsRecord = DatePickerOptionalConfigsRecord;

});
define("AgentifaiSimulator.model$StackedCardsPositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$StackedCardsPositionRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var StackedCardsPositionList = (function (_super) {
__extends(StackedCardsPositionList, _super);
function StackedCardsPositionList(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionList.itemType = OutSystemsUIModel.StackedCardsPositionRec;
return StackedCardsPositionList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.StackedCardsPositionList = StackedCardsPositionList;

});
define("AgentifaiSimulator.model$SplideProviderClassesList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$SplideProviderClassesRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SplideProviderClassesList = (function (_super) {
__extends(SplideProviderClassesList, _super);
function SplideProviderClassesList(defaults) {
_super.apply(this, arguments);
}
SplideProviderClassesList.itemType = OutSystemsUIModel.SplideProviderClassesRec;
return SplideProviderClassesList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SplideProviderClassesList = SplideProviderClassesList;

});
define("AgentifaiSimulator.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "AgentifaiSimulator.model", "CommonPlugin.model$ErrorRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ErrorList = ErrorList;

});
define("AgentifaiSimulator.model$SeriesStylingOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$SeriesStylingOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SeriesStylingOptionalConfigsRecord = (function (_super) {
__extends(SeriesStylingOptionalConfigsRecord, _super);
function SeriesStylingOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
SeriesStylingOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("SeriesStylingOptionalConfigs", "seriesStylingOptionalConfigsAttr", "SeriesStylingOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.SeriesStylingOptionalConfigsRec());
}, true, OutSystemsChartsModel.SeriesStylingOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
SeriesStylingOptionalConfigsRecord.fromStructure = function (str) {
return new SeriesStylingOptionalConfigsRecord(new SeriesStylingOptionalConfigsRecord.RecordClass({
seriesStylingOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SeriesStylingOptionalConfigsRecord._isAnonymousRecord = true;
SeriesStylingOptionalConfigsRecord.UniqueId = "34d5d5ab-5565-b38a-57ae-5f2563a8c466";
SeriesStylingOptionalConfigsRecord.init();
return SeriesStylingOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.SeriesStylingOptionalConfigsRecord = SeriesStylingOptionalConfigsRecord;

});
define("AgentifaiSimulator.model$ProgressBarOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$ProgressBarOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.ProgressBarOptionalConfigsRecord = ProgressBarOptionalConfigsRecord;

});
define("AgentifaiSimulator.model$StackingType_v1Record", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$StackingType_v1Rec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var StackingType_v1Record = (function (_super) {
__extends(StackingType_v1Record, _super);
function StackingType_v1Record(defaults) {
_super.apply(this, arguments);
}
StackingType_v1Record.attributesToDeclare = function () {
return [
this.attr("StackingType_v1", "stackingType_v1Attr", "StackingType_v1", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.StackingType_v1Rec());
}, true, OutSystemsChartsModel.StackingType_v1Rec)
].concat(_super.attributesToDeclare.call(this));
};
StackingType_v1Record.fromStructure = function (str) {
return new StackingType_v1Record(new StackingType_v1Record.RecordClass({
stackingType_v1Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StackingType_v1Record._isAnonymousRecord = true;
StackingType_v1Record.UniqueId = "35e37489-cb29-f7a3-04d5-12a403000665";
StackingType_v1Record.init();
return StackingType_v1Record;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.StackingType_v1Record = StackingType_v1Record;

});
define("AgentifaiSimulator.model$ColumnBreakList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$ColumnBreakRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ColumnBreakList = (function (_super) {
__extends(ColumnBreakList, _super);
function ColumnBreakList(defaults) {
_super.apply(this, arguments);
}
ColumnBreakList.itemType = OutSystemsUIModel.ColumnBreakRec;
return ColumnBreakList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ColumnBreakList = ColumnBreakList;

});
define("AgentifaiSimulator.model$CarouselNavigationRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$CarouselNavigationRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.CarouselNavigationRecord = CarouselNavigationRecord;

});
define("AgentifaiSimulator.model$StackingType_v1RecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$StackingType_v1Record"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var StackingType_v1RecordList = (function (_super) {
__extends(StackingType_v1RecordList, _super);
function StackingType_v1RecordList(defaults) {
_super.apply(this, arguments);
}
StackingType_v1RecordList.itemType = AgentifaiSimulatorModel.StackingType_v1Record;
return StackingType_v1RecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.StackingType_v1RecordList = StackingType_v1RecordList;

});
define("AgentifaiSimulator.model$DEPRECATED_ColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DEPRECATED_ColorRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DEPRECATED_ColorList = (function (_super) {
__extends(DEPRECATED_ColorList, _super);
function DEPRECATED_ColorList(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_ColorList.itemType = OutSystemsUIModel.DEPRECATED_ColorRec;
return DEPRECATED_ColorList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DEPRECATED_ColorList = DEPRECATED_ColorList;

});
define("AgentifaiSimulator.model$ProgressBarOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$ProgressBarOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ProgressBarOptionalConfigsList = (function (_super) {
__extends(ProgressBarOptionalConfigsList, _super);
function ProgressBarOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
ProgressBarOptionalConfigsList.itemType = OutSystemsUIModel.ProgressBarOptionalConfigsRec;
return ProgressBarOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ProgressBarOptionalConfigsList = ProgressBarOptionalConfigsList;

});
define("AgentifaiSimulator.model$XAxisOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$XAxisOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var XAxisOptionalConfigsList = (function (_super) {
__extends(XAxisOptionalConfigsList, _super);
function XAxisOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
XAxisOptionalConfigsList.itemType = OutSystemsChartsModel.XAxisOptionalConfigsRec;
return XAxisOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.XAxisOptionalConfigsList = XAxisOptionalConfigsList;

});
define("AgentifaiSimulator.model$ScrollbarStyleRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$ScrollbarStyleRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.ScrollbarStyleRecord = ScrollbarStyleRecord;

});
define("AgentifaiSimulator.model$GradientRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$GradientRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.GradientRecord = GradientRecord;

});
define("AgentifaiSimulator.model$NoUiSliderConfigs_RangeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$NoUiSliderConfigs_RangeRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.NoUiSliderConfigs_RangeRecord = NoUiSliderConfigs_RangeRecord;

});
define("AgentifaiSimulator.model$CarouselOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$CarouselOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.CarouselOptionalConfigsRecord = CarouselOptionalConfigsRecord;

});
define("AgentifaiSimulator.model$Legacy_XAxisFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$Legacy_XAxisFormatRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var Legacy_XAxisFormatRecord = (function (_super) {
__extends(Legacy_XAxisFormatRecord, _super);
function Legacy_XAxisFormatRecord(defaults) {
_super.apply(this, arguments);
}
Legacy_XAxisFormatRecord.attributesToDeclare = function () {
return [
this.attr("Legacy_XAxisFormat", "legacy_XAxisFormatAttr", "Legacy_XAxisFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.Legacy_XAxisFormatRec());
}, true, OutSystemsChartsModel.Legacy_XAxisFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
Legacy_XAxisFormatRecord.fromStructure = function (str) {
return new Legacy_XAxisFormatRecord(new Legacy_XAxisFormatRecord.RecordClass({
legacy_XAxisFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Legacy_XAxisFormatRecord._isAnonymousRecord = true;
Legacy_XAxisFormatRecord.UniqueId = "424d57a2-d666-c8ed-b034-3600d6705eee";
Legacy_XAxisFormatRecord.init();
return Legacy_XAxisFormatRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.Legacy_XAxisFormatRecord = Legacy_XAxisFormatRecord;

});
define("AgentifaiSimulator.model$AccordionIconTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$AccordionIconTypeRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.AccordionIconTypeRecord = AccordionIconTypeRecord;

});
define("AgentifaiSimulator.model$AccordionIconTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$AccordionIconTypeRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var AccordionIconTypeRecordList = (function (_super) {
__extends(AccordionIconTypeRecordList, _super);
function AccordionIconTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AccordionIconTypeRecordList.itemType = AgentifaiSimulatorModel.AccordionIconTypeRecord;
return AccordionIconTypeRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.AccordionIconTypeRecordList = AccordionIconTypeRecordList;

});
define("AgentifaiSimulator.model$DropdownOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$DropdownOptionalConfigsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DropdownOptionalConfigsRecordList = (function (_super) {
__extends(DropdownOptionalConfigsRecordList, _super);
function DropdownOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionalConfigsRecordList.itemType = AgentifaiSimulatorModel.DropdownOptionalConfigsRecord;
return DropdownOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DropdownOptionalConfigsRecordList = DropdownOptionalConfigsRecordList;

});
define("AgentifaiSimulator.model$ErrorMessageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$ErrorMessageRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ErrorMessageList = (function (_super) {
__extends(ErrorMessageList, _super);
function ErrorMessageList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageList.itemType = OutSystemsUIModel.ErrorMessageRec;
return ErrorMessageList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ErrorMessageList = ErrorMessageList;

});
define("AgentifaiSimulator.model$FlatpickrConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$FlatpickrConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.FlatpickrConfigsRecord = FlatpickrConfigsRecord;

});
define("AgentifaiSimulator.model$FlatpickrConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$FlatpickrConfigsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var FlatpickrConfigsRecordList = (function (_super) {
__extends(FlatpickrConfigsRecordList, _super);
function FlatpickrConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
FlatpickrConfigsRecordList.itemType = AgentifaiSimulatorModel.FlatpickrConfigsRecord;
return FlatpickrConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.FlatpickrConfigsRecordList = FlatpickrConfigsRecordList;

});
define("AgentifaiSimulator.model$YAxisGridLinesStylingList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$YAxisGridLinesStylingRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var YAxisGridLinesStylingList = (function (_super) {
__extends(YAxisGridLinesStylingList, _super);
function YAxisGridLinesStylingList(defaults) {
_super.apply(this, arguments);
}
YAxisGridLinesStylingList.itemType = OutSystemsChartsModel.YAxisGridLinesStylingRec;
return YAxisGridLinesStylingList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.YAxisGridLinesStylingList = YAxisGridLinesStylingList;

});
define("AgentifaiSimulator.model$MonthYearRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$MonthYearRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.MonthYearRecord = MonthYearRecord;

});
define("AgentifaiSimulator.model$ThemesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$ThemesRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ThemesRecordList = (function (_super) {
__extends(ThemesRecordList, _super);
function ThemesRecordList(defaults) {
_super.apply(this, arguments);
}
ThemesRecordList.itemType = AgentifaiSimulatorModel.ThemesRecord;
return ThemesRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ThemesRecordList = ThemesRecordList;

});
define("AgentifaiSimulator.model$GradientColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$GradientColorRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.GradientColorRecord = GradientColorRecord;

});
define("AgentifaiSimulator.model$SeriesStylingList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$SeriesStylingRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SeriesStylingList = (function (_super) {
__extends(SeriesStylingList, _super);
function SeriesStylingList(defaults) {
_super.apply(this, arguments);
}
SeriesStylingList.itemType = OutSystemsChartsModel.SeriesStylingRec;
return SeriesStylingList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SeriesStylingList = SeriesStylingList;

});
define("AgentifaiSimulator.model$MenuActionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$MenuActionRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var MenuActionList = (function (_super) {
__extends(MenuActionList, _super);
function MenuActionList(defaults) {
_super.apply(this, arguments);
}
MenuActionList.itemType = OutSystemsUIModel.MenuActionRec;
return MenuActionList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.MenuActionList = MenuActionList;

});
define("AgentifaiSimulator.model$DatePickerTimeFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DatePickerTimeFormatRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DatePickerTimeFormatList = (function (_super) {
__extends(DatePickerTimeFormatList, _super);
function DatePickerTimeFormatList(defaults) {
_super.apply(this, arguments);
}
DatePickerTimeFormatList.itemType = OutSystemsUIModel.DatePickerTimeFormatRec;
return DatePickerTimeFormatList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DatePickerTimeFormatList = DatePickerTimeFormatList;

});
define("AgentifaiSimulator.model$XAxisOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$XAxisOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var XAxisOptionalConfigsRecord = (function (_super) {
__extends(XAxisOptionalConfigsRecord, _super);
function XAxisOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
XAxisOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("XAxisOptionalConfigs", "xAxisOptionalConfigsAttr", "XAxisOptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.XAxisOptionalConfigsRec());
}, true, OutSystemsChartsModel.XAxisOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
XAxisOptionalConfigsRecord.fromStructure = function (str) {
return new XAxisOptionalConfigsRecord(new XAxisOptionalConfigsRecord.RecordClass({
xAxisOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
XAxisOptionalConfigsRecord._isAnonymousRecord = true;
XAxisOptionalConfigsRecord.UniqueId = "d4877c3c-e032-067b-5e79-d1ff12e3ea33";
XAxisOptionalConfigsRecord.init();
return XAxisOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.XAxisOptionalConfigsRecord = XAxisOptionalConfigsRecord;

});
define("AgentifaiSimulator.model$XAxisOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$XAxisOptionalConfigsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var XAxisOptionalConfigsRecordList = (function (_super) {
__extends(XAxisOptionalConfigsRecordList, _super);
function XAxisOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
XAxisOptionalConfigsRecordList.itemType = AgentifaiSimulatorModel.XAxisOptionalConfigsRecord;
return XAxisOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.XAxisOptionalConfigsRecordList = XAxisOptionalConfigsRecordList;

});
define("AgentifaiSimulator.model$DatePickerRangeOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DatePickerRangeOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DatePickerRangeOptionalConfigsList = (function (_super) {
__extends(DatePickerRangeOptionalConfigsList, _super);
function DatePickerRangeOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DatePickerRangeOptionalConfigsList.itemType = OutSystemsUIModel.DatePickerRangeOptionalConfigsRec;
return DatePickerRangeOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DatePickerRangeOptionalConfigsList = DatePickerRangeOptionalConfigsList;

});
define("AgentifaiSimulator.model$GradientColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$GradientColorRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var GradientColorRecordList = (function (_super) {
__extends(GradientColorRecordList, _super);
function GradientColorRecordList(defaults) {
_super.apply(this, arguments);
}
GradientColorRecordList.itemType = AgentifaiSimulatorModel.GradientColorRecord;
return GradientColorRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.GradientColorRecordList = GradientColorRecordList;

});
define("AgentifaiSimulator.model$DatePickerWeekDayList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DatePickerWeekDayRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DatePickerWeekDayList = (function (_super) {
__extends(DatePickerWeekDayList, _super);
function DatePickerWeekDayList(defaults) {
_super.apply(this, arguments);
}
DatePickerWeekDayList.itemType = OutSystemsUIModel.DatePickerWeekDayRec;
return DatePickerWeekDayList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DatePickerWeekDayList = DatePickerWeekDayList;

});
define("AgentifaiSimulator.model$BreakColumnsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$BreakColumnsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var BreakColumnsRecordList = (function (_super) {
__extends(BreakColumnsRecordList, _super);
function BreakColumnsRecordList(defaults) {
_super.apply(this, arguments);
}
BreakColumnsRecordList.itemType = AgentifaiSimulatorModel.BreakColumnsRecord;
return BreakColumnsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.BreakColumnsRecordList = BreakColumnsRecordList;

});
define("AgentifaiSimulator.model$RangeSliderOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$RangeSliderOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.RangeSliderOptionalConfigsRecord = RangeSliderOptionalConfigsRecord;

});
define("AgentifaiSimulator.model$CarouselNavigationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$CarouselNavigationRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var CarouselNavigationRecordList = (function (_super) {
__extends(CarouselNavigationRecordList, _super);
function CarouselNavigationRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselNavigationRecordList.itemType = AgentifaiSimulatorModel.CarouselNavigationRecord;
return CarouselNavigationRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.CarouselNavigationRecordList = CarouselNavigationRecordList;

});
define("AgentifaiSimulator.model$LoginAttemptPublicList", ["exports", "OutSystems/ClientRuntime/Main", "Users.model", "AgentifaiSimulator.model", "Users.model$LoginAttemptPublicRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$Users"], function (exports, OutSystems, UsersModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var LoginAttemptPublicList = (function (_super) {
__extends(LoginAttemptPublicList, _super);
function LoginAttemptPublicList(defaults) {
_super.apply(this, arguments);
}
LoginAttemptPublicList.itemType = UsersModel.LoginAttemptPublicRec;
return LoginAttemptPublicList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.LoginAttemptPublicList = LoginAttemptPublicList;

});
define("AgentifaiSimulator.model$NoUiSliderConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$NoUiSliderConfigsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var NoUiSliderConfigsRecordList = (function (_super) {
__extends(NoUiSliderConfigsRecordList, _super);
function NoUiSliderConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigsRecordList.itemType = AgentifaiSimulatorModel.NoUiSliderConfigsRecord;
return NoUiSliderConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.NoUiSliderConfigsRecordList = NoUiSliderConfigsRecordList;

});
define("AgentifaiSimulator.model$CarouselOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$CarouselOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var CarouselOptionalConfigsList = (function (_super) {
__extends(CarouselOptionalConfigsList, _super);
function CarouselOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
CarouselOptionalConfigsList.itemType = OutSystemsUIModel.CarouselOptionalConfigsRec;
return CarouselOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.CarouselOptionalConfigsList = CarouselOptionalConfigsList;

});
define("AgentifaiSimulator.model$SeriesTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$SeriesTypeRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SeriesTypeRecord = (function (_super) {
__extends(SeriesTypeRecord, _super);
function SeriesTypeRecord(defaults) {
_super.apply(this, arguments);
}
SeriesTypeRecord.attributesToDeclare = function () {
return [
this.attr("SeriesType", "seriesTypeAttr", "SeriesType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.SeriesTypeRec());
}, true, OutSystemsChartsModel.SeriesTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
SeriesTypeRecord.fromStructure = function (str) {
return new SeriesTypeRecord(new SeriesTypeRecord.RecordClass({
seriesTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SeriesTypeRecord._isAnonymousRecord = true;
SeriesTypeRecord.UniqueId = "8bfcc1d3-81d1-0495-3fbf-01fd54a56e45";
SeriesTypeRecord.init();
return SeriesTypeRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.SeriesTypeRecord = SeriesTypeRecord;

});
define("AgentifaiSimulator.model$SeriesTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$SeriesTypeRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SeriesTypeRecordList = (function (_super) {
__extends(SeriesTypeRecordList, _super);
function SeriesTypeRecordList(defaults) {
_super.apply(this, arguments);
}
SeriesTypeRecordList.itemType = AgentifaiSimulatorModel.SeriesTypeRecord;
return SeriesTypeRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SeriesTypeRecordList = SeriesTypeRecordList;

});
define("AgentifaiSimulator.model$DatePickerTimeFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DatePickerTimeFormatRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.DatePickerTimeFormatRecord = DatePickerTimeFormatRecord;

});
define("AgentifaiSimulator.model$Legacy_DataPointList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$Legacy_DataPointRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var Legacy_DataPointList = (function (_super) {
__extends(Legacy_DataPointList, _super);
function Legacy_DataPointList(defaults) {
_super.apply(this, arguments);
}
Legacy_DataPointList.itemType = OutSystemsChartsModel.Legacy_DataPointRec;
return Legacy_DataPointList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.Legacy_DataPointList = Legacy_DataPointList;

});
define("AgentifaiSimulator.model$AxisValuesTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$AxisValuesTypeRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var AxisValuesTypeRecord = (function (_super) {
__extends(AxisValuesTypeRecord, _super);
function AxisValuesTypeRecord(defaults) {
_super.apply(this, arguments);
}
AxisValuesTypeRecord.attributesToDeclare = function () {
return [
this.attr("AxisValuesType", "axisValuesTypeAttr", "AxisValuesType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.AxisValuesTypeRec());
}, true, OutSystemsChartsModel.AxisValuesTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
AxisValuesTypeRecord.fromStructure = function (str) {
return new AxisValuesTypeRecord(new AxisValuesTypeRecord.RecordClass({
axisValuesTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AxisValuesTypeRecord._isAnonymousRecord = true;
AxisValuesTypeRecord.UniqueId = "5411a63f-b30f-bc23-79b4-48666b5ca564";
AxisValuesTypeRecord.init();
return AxisValuesTypeRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.AxisValuesTypeRecord = AxisValuesTypeRecord;

});
define("AgentifaiSimulator.model$ShapeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$ShapeRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ShapeList = (function (_super) {
__extends(ShapeList, _super);
function ShapeList(defaults) {
_super.apply(this, arguments);
}
ShapeList.itemType = OutSystemsUIModel.ShapeRec;
return ShapeList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ShapeList = ShapeList;

});
define("AgentifaiSimulator.model$StackingType_v1List", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$StackingType_v1Rec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var StackingType_v1List = (function (_super) {
__extends(StackingType_v1List, _super);
function StackingType_v1List(defaults) {
_super.apply(this, arguments);
}
StackingType_v1List.itemType = OutSystemsChartsModel.StackingType_v1Rec;
return StackingType_v1List;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.StackingType_v1List = StackingType_v1List;

});
define("AgentifaiSimulator.model$DropdownItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DropdownItemRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.DropdownItemRecord = DropdownItemRecord;

});
define("AgentifaiSimulator.model$LegendPosition_v1List", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$LegendPosition_v1Rec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var LegendPosition_v1List = (function (_super) {
__extends(LegendPosition_v1List, _super);
function LegendPosition_v1List(defaults) {
_super.apply(this, arguments);
}
LegendPosition_v1List.itemType = OutSystemsChartsModel.LegendPosition_v1Rec;
return LegendPosition_v1List;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.LegendPosition_v1List = LegendPosition_v1List;

});
define("AgentifaiSimulator.model$LoginAttemptPublicRecord", ["exports", "OutSystems/ClientRuntime/Main", "Users.model", "AgentifaiSimulator.model", "Users.model$LoginAttemptPublicRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$Users"], function (exports, OutSystems, UsersModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var LoginAttemptPublicRecord = (function (_super) {
__extends(LoginAttemptPublicRecord, _super);
function LoginAttemptPublicRecord(defaults) {
_super.apply(this, arguments);
}
LoginAttemptPublicRecord.attributesToDeclare = function () {
return [
this.attr("LoginAttemptPublic", "loginAttemptPublicAttr", "LoginAttemptPublic", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UsersModel.LoginAttemptPublicRec());
}, true, UsersModel.LoginAttemptPublicRec)
].concat(_super.attributesToDeclare.call(this));
};
LoginAttemptPublicRecord.fromStructure = function (str) {
return new LoginAttemptPublicRecord(new LoginAttemptPublicRecord.RecordClass({
loginAttemptPublicAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LoginAttemptPublicRecord._isAnonymousRecord = true;
LoginAttemptPublicRecord.UniqueId = "57b978e1-84ee-1116-0844-e30676434be3";
LoginAttemptPublicRecord.init();
return LoginAttemptPublicRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.LoginAttemptPublicRecord = LoginAttemptPublicRecord;

});
define("AgentifaiSimulator.model$SplideProvideri18nRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$SplideProvideri18nRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.SplideProvideri18nRecord = SplideProvideri18nRecord;

});
define("AgentifaiSimulator.model$SplideProvideri18nRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$SplideProvideri18nRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SplideProvideri18nRecordList = (function (_super) {
__extends(SplideProvideri18nRecordList, _super);
function SplideProvideri18nRecordList(defaults) {
_super.apply(this, arguments);
}
SplideProvideri18nRecordList.itemType = AgentifaiSimulatorModel.SplideProvideri18nRecord;
return SplideProvideri18nRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SplideProvideri18nRecordList = SplideProvideri18nRecordList;

});
define("AgentifaiSimulator.model$SeriesStylingRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$SeriesStylingRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SeriesStylingRecord = (function (_super) {
__extends(SeriesStylingRecord, _super);
function SeriesStylingRecord(defaults) {
_super.apply(this, arguments);
}
SeriesStylingRecord.attributesToDeclare = function () {
return [
this.attr("SeriesStyling", "seriesStylingAttr", "SeriesStyling", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.SeriesStylingRec());
}, true, OutSystemsChartsModel.SeriesStylingRec)
].concat(_super.attributesToDeclare.call(this));
};
SeriesStylingRecord.fromStructure = function (str) {
return new SeriesStylingRecord(new SeriesStylingRecord.RecordClass({
seriesStylingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SeriesStylingRecord._isAnonymousRecord = true;
SeriesStylingRecord.UniqueId = "b433f1b3-ae72-f9da-85b2-0eb8b0abb0e8";
SeriesStylingRecord.init();
return SeriesStylingRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.SeriesStylingRecord = SeriesStylingRecord;

});
define("AgentifaiSimulator.model$SeriesStylingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$SeriesStylingRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SeriesStylingRecordList = (function (_super) {
__extends(SeriesStylingRecordList, _super);
function SeriesStylingRecordList(defaults) {
_super.apply(this, arguments);
}
SeriesStylingRecordList.itemType = AgentifaiSimulatorModel.SeriesStylingRecord;
return SeriesStylingRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SeriesStylingRecordList = SeriesStylingRecordList;

});
define("AgentifaiSimulator.model$PositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$PositionRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.PositionRecord = PositionRecord;

});
define("AgentifaiSimulator.model$PositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$PositionRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var PositionRecordList = (function (_super) {
__extends(PositionRecordList, _super);
function PositionRecordList(defaults) {
_super.apply(this, arguments);
}
PositionRecordList.itemType = AgentifaiSimulatorModel.PositionRecord;
return PositionRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.PositionRecordList = PositionRecordList;

});
define("AgentifaiSimulator.model$LegendLayoutList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$LegendLayoutRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var LegendLayoutList = (function (_super) {
__extends(LegendLayoutList, _super);
function LegendLayoutList(defaults) {
_super.apply(this, arguments);
}
LegendLayoutList.itemType = OutSystemsChartsModel.LegendLayoutRec;
return LegendLayoutList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.LegendLayoutList = LegendLayoutList;

});
define("AgentifaiSimulator.model$TimePickerOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$TimePickerOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var TimePickerOptionalConfigsList = (function (_super) {
__extends(TimePickerOptionalConfigsList, _super);
function TimePickerOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
TimePickerOptionalConfigsList.itemType = OutSystemsUIModel.TimePickerOptionalConfigsRec;
return TimePickerOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.TimePickerOptionalConfigsList = TimePickerOptionalConfigsList;

});
define("AgentifaiSimulator.model$DEPRECATED_MasterDetailItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DEPRECATED_MasterDetailItemRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.DEPRECATED_MasterDetailItemRecord = DEPRECATED_MasterDetailItemRecord;

});
define("AgentifaiSimulator.model$DEPRECATED_MasterDetailItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$DEPRECATED_MasterDetailItemRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DEPRECATED_MasterDetailItemRecordList = (function (_super) {
__extends(DEPRECATED_MasterDetailItemRecordList, _super);
function DEPRECATED_MasterDetailItemRecordList(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_MasterDetailItemRecordList.itemType = AgentifaiSimulatorModel.DEPRECATED_MasterDetailItemRecord;
return DEPRECATED_MasterDetailItemRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DEPRECATED_MasterDetailItemRecordList = DEPRECATED_MasterDetailItemRecordList;

});
define("AgentifaiSimulator.model$ProgressCircleOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$ProgressCircleOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.ProgressCircleOptionalConfigsRecord = ProgressCircleOptionalConfigsRecord;

});
define("AgentifaiSimulator.model$SamlUserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$SamlUserRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SamlUserRecordList = (function (_super) {
__extends(SamlUserRecordList, _super);
function SamlUserRecordList(defaults) {
_super.apply(this, arguments);
}
SamlUserRecordList.itemType = AgentifaiSimulatorModel.SamlUserRecord;
return SamlUserRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SamlUserRecordList = SamlUserRecordList;

});
define("AgentifaiSimulator.model$TriggerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$TriggerRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.TriggerRecord = TriggerRecord;

});
define("AgentifaiSimulator.model$TriggerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$TriggerRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var TriggerRecordList = (function (_super) {
__extends(TriggerRecordList, _super);
function TriggerRecordList(defaults) {
_super.apply(this, arguments);
}
TriggerRecordList.itemType = AgentifaiSimulatorModel.TriggerRecord;
return TriggerRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.TriggerRecordList = TriggerRecordList;

});
define("AgentifaiSimulator.model$LoginAttemptPublicRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$LoginAttemptPublicRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var LoginAttemptPublicRecordList = (function (_super) {
__extends(LoginAttemptPublicRecordList, _super);
function LoginAttemptPublicRecordList(defaults) {
_super.apply(this, arguments);
}
LoginAttemptPublicRecordList.itemType = AgentifaiSimulatorModel.LoginAttemptPublicRecord;
return LoginAttemptPublicRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.LoginAttemptPublicRecordList = LoginAttemptPublicRecordList;

});
define("AgentifaiSimulator.model$AccordionIconTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$AccordionIconTypeRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var AccordionIconTypeList = (function (_super) {
__extends(AccordionIconTypeList, _super);
function AccordionIconTypeList(defaults) {
_super.apply(this, arguments);
}
AccordionIconTypeList.itemType = OutSystemsUIModel.AccordionIconTypeRec;
return AccordionIconTypeList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.AccordionIconTypeList = AccordionIconTypeList;

});
define("AgentifaiSimulator.model$Legacy_AdvancedDataSeriesFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$Legacy_AdvancedDataSeriesFormatRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var Legacy_AdvancedDataSeriesFormatRecord = (function (_super) {
__extends(Legacy_AdvancedDataSeriesFormatRecord, _super);
function Legacy_AdvancedDataSeriesFormatRecord(defaults) {
_super.apply(this, arguments);
}
Legacy_AdvancedDataSeriesFormatRecord.attributesToDeclare = function () {
return [
this.attr("Legacy_AdvancedDataSeriesFormat", "legacy_AdvancedDataSeriesFormatAttr", "Legacy_AdvancedDataSeriesFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.Legacy_AdvancedDataSeriesFormatRec());
}, true, OutSystemsChartsModel.Legacy_AdvancedDataSeriesFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
Legacy_AdvancedDataSeriesFormatRecord.fromStructure = function (str) {
return new Legacy_AdvancedDataSeriesFormatRecord(new Legacy_AdvancedDataSeriesFormatRecord.RecordClass({
legacy_AdvancedDataSeriesFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Legacy_AdvancedDataSeriesFormatRecord._isAnonymousRecord = true;
Legacy_AdvancedDataSeriesFormatRecord.UniqueId = "e3eb1896-9a1d-0856-d6aa-6db7946dac4d";
Legacy_AdvancedDataSeriesFormatRecord.init();
return Legacy_AdvancedDataSeriesFormatRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.Legacy_AdvancedDataSeriesFormatRecord = Legacy_AdvancedDataSeriesFormatRecord;

});
define("AgentifaiSimulator.model$Legacy_AdvancedDataSeriesFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$Legacy_AdvancedDataSeriesFormatRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var Legacy_AdvancedDataSeriesFormatRecordList = (function (_super) {
__extends(Legacy_AdvancedDataSeriesFormatRecordList, _super);
function Legacy_AdvancedDataSeriesFormatRecordList(defaults) {
_super.apply(this, arguments);
}
Legacy_AdvancedDataSeriesFormatRecordList.itemType = AgentifaiSimulatorModel.Legacy_AdvancedDataSeriesFormatRecord;
return Legacy_AdvancedDataSeriesFormatRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.Legacy_AdvancedDataSeriesFormatRecordList = Legacy_AdvancedDataSeriesFormatRecordList;

});
define("AgentifaiSimulator.model$DatePickerRangeOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$DatePickerRangeOptionalConfigsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DatePickerRangeOptionalConfigsRecordList = (function (_super) {
__extends(DatePickerRangeOptionalConfigsRecordList, _super);
function DatePickerRangeOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerRangeOptionalConfigsRecordList.itemType = AgentifaiSimulatorModel.DatePickerRangeOptionalConfigsRecord;
return DatePickerRangeOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DatePickerRangeOptionalConfigsRecordList = DatePickerRangeOptionalConfigsRecordList;

});
define("AgentifaiSimulator.model$BreakColumnsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$BreakColumnsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var BreakColumnsList = (function (_super) {
__extends(BreakColumnsList, _super);
function BreakColumnsList(defaults) {
_super.apply(this, arguments);
}
BreakColumnsList.itemType = OutSystemsUIModel.BreakColumnsRec;
return BreakColumnsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.BreakColumnsList = BreakColumnsList;

});
define("AgentifaiSimulator.model$DatePickerLanguageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DatePickerLanguageRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.DatePickerLanguageRecord = DatePickerLanguageRecord;

});
define("AgentifaiSimulator.model$ShapeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$ShapeRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ShapeRecordList = (function (_super) {
__extends(ShapeRecordList, _super);
function ShapeRecordList(defaults) {
_super.apply(this, arguments);
}
ShapeRecordList.itemType = AgentifaiSimulatorModel.ShapeRecord;
return ShapeRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ShapeRecordList = ShapeRecordList;

});
define("AgentifaiSimulator.model$DataPoint2Record", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$DataPointRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DataPoint2Record = (function (_super) {
__extends(DataPoint2Record, _super);
function DataPoint2Record(defaults) {
_super.apply(this, arguments);
}
DataPoint2Record.attributesToDeclare = function () {
return [
this.attr("DataPoint", "dataPointAttr", "DataPoint2", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.DataPointRec());
}, true, OutSystemsChartsModel.DataPointRec)
].concat(_super.attributesToDeclare.call(this));
};
DataPoint2Record.fromStructure = function (str) {
return new DataPoint2Record(new DataPoint2Record.RecordClass({
dataPointAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataPoint2Record._isAnonymousRecord = true;
DataPoint2Record.UniqueId = "87ab3d0b-8093-8e4e-95dc-b616c8a9232e";
DataPoint2Record.init();
return DataPoint2Record;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.DataPoint2Record = DataPoint2Record;

});
define("AgentifaiSimulator.model$DataPoint2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$DataPoint2Record"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DataPoint2RecordList = (function (_super) {
__extends(DataPoint2RecordList, _super);
function DataPoint2RecordList(defaults) {
_super.apply(this, arguments);
}
DataPoint2RecordList.itemType = AgentifaiSimulatorModel.DataPoint2Record;
return DataPoint2RecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DataPoint2RecordList = DataPoint2RecordList;

});
define("AgentifaiSimulator.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "AgentifaiSimulator.model", "CommonPlugin.model$ErrorRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.ErrorRecord = ErrorRecord;

});
define("AgentifaiSimulator.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$ErrorRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = AgentifaiSimulatorModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ErrorRecordList = ErrorRecordList;

});
define("AgentifaiSimulator.model$Legacy_DataPointRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$Legacy_DataPointRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var Legacy_DataPointRecord = (function (_super) {
__extends(Legacy_DataPointRecord, _super);
function Legacy_DataPointRecord(defaults) {
_super.apply(this, arguments);
}
Legacy_DataPointRecord.attributesToDeclare = function () {
return [
this.attr("Legacy_DataPoint", "legacy_DataPointAttr", "Legacy_DataPoint", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.Legacy_DataPointRec());
}, true, OutSystemsChartsModel.Legacy_DataPointRec)
].concat(_super.attributesToDeclare.call(this));
};
Legacy_DataPointRecord.fromStructure = function (str) {
return new Legacy_DataPointRecord(new Legacy_DataPointRecord.RecordClass({
legacy_DataPointAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Legacy_DataPointRecord._isAnonymousRecord = true;
Legacy_DataPointRecord.UniqueId = "6ceb0a54-ddbc-9244-6ab6-6e8c847870c1";
Legacy_DataPointRecord.init();
return Legacy_DataPointRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.Legacy_DataPointRecord = Legacy_DataPointRecord;

});
define("AgentifaiSimulator.model$ErrorMessage2Record", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$ErrorMessageRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ErrorMessage2Record = (function (_super) {
__extends(ErrorMessage2Record, _super);
function ErrorMessage2Record(defaults) {
_super.apply(this, arguments);
}
ErrorMessage2Record.attributesToDeclare = function () {
return [
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage2", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ErrorMessageRec());
}, true, OutSystemsChartsModel.ErrorMessageRec)
].concat(_super.attributesToDeclare.call(this));
};
ErrorMessage2Record.fromStructure = function (str) {
return new ErrorMessage2Record(new ErrorMessage2Record.RecordClass({
errorMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ErrorMessage2Record._isAnonymousRecord = true;
ErrorMessage2Record.UniqueId = "6d8d0ab8-b7a8-6a24-d5f4-b91570ad61d9";
ErrorMessage2Record.init();
return ErrorMessage2Record;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.ErrorMessage2Record = ErrorMessage2Record;

});
define("AgentifaiSimulator.model$ErrorMessage2List", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$ErrorMessageRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ErrorMessage2List = (function (_super) {
__extends(ErrorMessage2List, _super);
function ErrorMessage2List(defaults) {
_super.apply(this, arguments);
}
ErrorMessage2List.itemType = OutSystemsChartsModel.ErrorMessageRec;
return ErrorMessage2List;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ErrorMessage2List = ErrorMessage2List;

});
define("AgentifaiSimulator.model$DeviceConfigurationRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DeviceConfigurationRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.DeviceConfigurationRecord = DeviceConfigurationRecord;

});
define("AgentifaiSimulator.model$DeviceConfigurationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$DeviceConfigurationRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DeviceConfigurationRecordList = (function (_super) {
__extends(DeviceConfigurationRecordList, _super);
function DeviceConfigurationRecordList(defaults) {
_super.apply(this, arguments);
}
DeviceConfigurationRecordList.itemType = AgentifaiSimulatorModel.DeviceConfigurationRecord;
return DeviceConfigurationRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DeviceConfigurationRecordList = DeviceConfigurationRecordList;

});
define("AgentifaiSimulator.model$ThemesList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$ThemesRec"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ThemesList = (function (_super) {
__extends(ThemesList, _super);
function ThemesList(defaults) {
_super.apply(this, arguments);
}
ThemesList.itemType = AgentifaiSimulatorModel.ThemesRec;
return ThemesList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ThemesList = ThemesList;

});
define("AgentifaiSimulator.model$MessageStatusList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$MessageStatusRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var MessageStatusList = (function (_super) {
__extends(MessageStatusList, _super);
function MessageStatusList(defaults) {
_super.apply(this, arguments);
}
MessageStatusList.itemType = OutSystemsUIModel.MessageStatusRec;
return MessageStatusList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.MessageStatusList = MessageStatusList;

});
define("AgentifaiSimulator.model$GroupList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "AgentifaiSimulator.model", "ServiceCenter.model$GroupRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var GroupList = (function (_super) {
__extends(GroupList, _super);
function GroupList(defaults) {
_super.apply(this, arguments);
}
GroupList.itemType = ServiceCenterModel.GroupRec;
return GroupList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.GroupList = GroupList;

});
define("AgentifaiSimulator.model$StackedCardsPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$StackedCardsPositionRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.StackedCardsPositionRecord = StackedCardsPositionRecord;

});
define("AgentifaiSimulator.model$StackedCardsPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$StackedCardsPositionRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var StackedCardsPositionRecordList = (function (_super) {
__extends(StackedCardsPositionRecordList, _super);
function StackedCardsPositionRecordList(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionRecordList.itemType = AgentifaiSimulatorModel.StackedCardsPositionRecord;
return StackedCardsPositionRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.StackedCardsPositionRecordList = StackedCardsPositionRecordList;

});
define("AgentifaiSimulator.model$Legacy_DataPointRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$Legacy_DataPointRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var Legacy_DataPointRecordList = (function (_super) {
__extends(Legacy_DataPointRecordList, _super);
function Legacy_DataPointRecordList(defaults) {
_super.apply(this, arguments);
}
Legacy_DataPointRecordList.itemType = AgentifaiSimulatorModel.Legacy_DataPointRecord;
return Legacy_DataPointRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.Legacy_DataPointRecordList = Legacy_DataPointRecordList;

});
define("AgentifaiSimulator.model$MonthOrderYearRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$MonthOrderYearRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.MonthOrderYearRecord = MonthOrderYearRecord;

});
define("AgentifaiSimulator.model$MonthOrderYearRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$MonthOrderYearRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var MonthOrderYearRecordList = (function (_super) {
__extends(MonthOrderYearRecordList, _super);
function MonthOrderYearRecordList(defaults) {
_super.apply(this, arguments);
}
MonthOrderYearRecordList.itemType = AgentifaiSimulatorModel.MonthOrderYearRecord;
return MonthOrderYearRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.MonthOrderYearRecordList = MonthOrderYearRecordList;

});
define("AgentifaiSimulator.model$DirectionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DirectionRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DirectionList = (function (_super) {
__extends(DirectionList, _super);
function DirectionList(defaults) {
_super.apply(this, arguments);
}
DirectionList.itemType = OutSystemsUIModel.DirectionRec;
return DirectionList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DirectionList = DirectionList;

});
define("AgentifaiSimulator.model$Legacy_AdvancedDataPointFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$Legacy_AdvancedDataPointFormatRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var Legacy_AdvancedDataPointFormatList = (function (_super) {
__extends(Legacy_AdvancedDataPointFormatList, _super);
function Legacy_AdvancedDataPointFormatList(defaults) {
_super.apply(this, arguments);
}
Legacy_AdvancedDataPointFormatList.itemType = OutSystemsChartsModel.Legacy_AdvancedDataPointFormatRec;
return Legacy_AdvancedDataPointFormatList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.Legacy_AdvancedDataPointFormatList = Legacy_AdvancedDataPointFormatList;

});
define("AgentifaiSimulator.model$StackingTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$StackingTypeRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var StackingTypeRecord = (function (_super) {
__extends(StackingTypeRecord, _super);
function StackingTypeRecord(defaults) {
_super.apply(this, arguments);
}
StackingTypeRecord.attributesToDeclare = function () {
return [
this.attr("StackingType", "stackingTypeAttr", "StackingType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.StackingTypeRec());
}, true, OutSystemsChartsModel.StackingTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
StackingTypeRecord.fromStructure = function (str) {
return new StackingTypeRecord(new StackingTypeRecord.RecordClass({
stackingTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StackingTypeRecord._isAnonymousRecord = true;
StackingTypeRecord.UniqueId = "7d371655-b207-8695-8d20-c377072ad1b6";
StackingTypeRecord.init();
return StackingTypeRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.StackingTypeRecord = StackingTypeRecord;

});
define("AgentifaiSimulator.model$StackingTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$StackingTypeRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var StackingTypeRecordList = (function (_super) {
__extends(StackingTypeRecordList, _super);
function StackingTypeRecordList(defaults) {
_super.apply(this, arguments);
}
StackingTypeRecordList.itemType = AgentifaiSimulatorModel.StackingTypeRecord;
return StackingTypeRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.StackingTypeRecordList = StackingTypeRecordList;

});
define("AgentifaiSimulator.model$DeviceResponsiveRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$DeviceResponsiveRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DeviceResponsiveRecordList = (function (_super) {
__extends(DeviceResponsiveRecordList, _super);
function DeviceResponsiveRecordList(defaults) {
_super.apply(this, arguments);
}
DeviceResponsiveRecordList.itemType = AgentifaiSimulatorModel.DeviceResponsiveRecord;
return DeviceResponsiveRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DeviceResponsiveRecordList = DeviceResponsiveRecordList;

});
define("AgentifaiSimulator.model$OptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$OptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var OptionalConfigsRecord = (function (_super) {
__extends(OptionalConfigsRecord, _super);
function OptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
OptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("OptionalConfigs", "optionalConfigsAttr", "OptionalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.OptionalConfigsRec());
}, true, OutSystemsChartsModel.OptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
OptionalConfigsRecord.fromStructure = function (str) {
return new OptionalConfigsRecord(new OptionalConfigsRecord.RecordClass({
optionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OptionalConfigsRecord._isAnonymousRecord = true;
OptionalConfigsRecord.UniqueId = "83bc3ae4-c5fe-c64b-fa52-8e6320384107";
OptionalConfigsRecord.init();
return OptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.OptionalConfigsRecord = OptionalConfigsRecord;

});
define("AgentifaiSimulator.model$OptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$OptionalConfigsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var OptionalConfigsRecordList = (function (_super) {
__extends(OptionalConfigsRecordList, _super);
function OptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
OptionalConfigsRecordList.itemType = AgentifaiSimulatorModel.OptionalConfigsRecord;
return OptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.OptionalConfigsRecordList = OptionalConfigsRecordList;

});
define("AgentifaiSimulator.model$CarouselNavigationList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$CarouselNavigationRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var CarouselNavigationList = (function (_super) {
__extends(CarouselNavigationList, _super);
function CarouselNavigationList(defaults) {
_super.apply(this, arguments);
}
CarouselNavigationList.itemType = OutSystemsUIModel.CarouselNavigationRec;
return CarouselNavigationList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.CarouselNavigationList = CarouselNavigationList;

});
define("AgentifaiSimulator.model$NotificationOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$NotificationOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.NotificationOptionalConfigsRecord = NotificationOptionalConfigsRecord;

});
define("AgentifaiSimulator.model$NotificationOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$NotificationOptionalConfigsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var NotificationOptionalConfigsRecordList = (function (_super) {
__extends(NotificationOptionalConfigsRecordList, _super);
function NotificationOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
NotificationOptionalConfigsRecordList.itemType = AgentifaiSimulatorModel.NotificationOptionalConfigsRecord;
return NotificationOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.NotificationOptionalConfigsRecordList = NotificationOptionalConfigsRecordList;

});
define("AgentifaiSimulator.model$DataPoint2List", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$DataPointRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DataPoint2List = (function (_super) {
__extends(DataPoint2List, _super);
function DataPoint2List(defaults) {
_super.apply(this, arguments);
}
DataPoint2List.itemType = OutSystemsChartsModel.DataPointRec;
return DataPoint2List;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DataPoint2List = DataPoint2List;

});
define("AgentifaiSimulator.model$DatePickerOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DatePickerOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DatePickerOptionalConfigsList = (function (_super) {
__extends(DatePickerOptionalConfigsList, _super);
function DatePickerOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DatePickerOptionalConfigsList.itemType = OutSystemsUIModel.DatePickerOptionalConfigsRec;
return DatePickerOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DatePickerOptionalConfigsList = DatePickerOptionalConfigsList;

});
define("AgentifaiSimulator.model$RangeSliderOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$RangeSliderOptionalConfigsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var RangeSliderOptionalConfigsRecordList = (function (_super) {
__extends(RangeSliderOptionalConfigsRecordList, _super);
function RangeSliderOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
RangeSliderOptionalConfigsRecordList.itemType = AgentifaiSimulatorModel.RangeSliderOptionalConfigsRecord;
return RangeSliderOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.RangeSliderOptionalConfigsRecordList = RangeSliderOptionalConfigsRecordList;

});
define("AgentifaiSimulator.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "AgentifaiSimulator.model", "ServiceCenter.model$UserRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var UserRecord = (function (_super) {
__extends(UserRecord, _super);
function UserRecord(defaults) {
_super.apply(this, arguments);
}
UserRecord.attributesToDeclare = function () {
return [
this.attr("User", "userAttr", "User", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.UserRec());
}, true, ServiceCenterModel.UserRec)
].concat(_super.attributesToDeclare.call(this));
};
UserRecord.fromStructure = function (str) {
return new UserRecord(new UserRecord.RecordClass({
userAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserRecord._isAnonymousRecord = true;
UserRecord.UniqueId = "ced01335-8a82-a813-f1d9-a5108f17ce79";
UserRecord.init();
return UserRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.UserRecord = UserRecord;

});
define("AgentifaiSimulator.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$UserRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = AgentifaiSimulatorModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.UserRecordList = UserRecordList;

});
define("AgentifaiSimulator.model$DropdownTagsOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DropdownTagsOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DropdownTagsOptionalConfigsList = (function (_super) {
__extends(DropdownTagsOptionalConfigsList, _super);
function DropdownTagsOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DropdownTagsOptionalConfigsList.itemType = OutSystemsUIModel.DropdownTagsOptionalConfigsRec;
return DropdownTagsOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DropdownTagsOptionalConfigsList = DropdownTagsOptionalConfigsList;

});
define("AgentifaiSimulator.model$AxisValuesTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$AxisValuesTypeRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var AxisValuesTypeRecordList = (function (_super) {
__extends(AxisValuesTypeRecordList, _super);
function AxisValuesTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AxisValuesTypeRecordList.itemType = AgentifaiSimulatorModel.AxisValuesTypeRecord;
return AxisValuesTypeRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.AxisValuesTypeRecordList = AxisValuesTypeRecordList;

});
define("AgentifaiSimulator.model$Legacy_AdvancedDataPointFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$Legacy_AdvancedDataPointFormatRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var Legacy_AdvancedDataPointFormatRecord = (function (_super) {
__extends(Legacy_AdvancedDataPointFormatRecord, _super);
function Legacy_AdvancedDataPointFormatRecord(defaults) {
_super.apply(this, arguments);
}
Legacy_AdvancedDataPointFormatRecord.attributesToDeclare = function () {
return [
this.attr("Legacy_AdvancedDataPointFormat", "legacy_AdvancedDataPointFormatAttr", "Legacy_AdvancedDataPointFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.Legacy_AdvancedDataPointFormatRec());
}, true, OutSystemsChartsModel.Legacy_AdvancedDataPointFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
Legacy_AdvancedDataPointFormatRecord.fromStructure = function (str) {
return new Legacy_AdvancedDataPointFormatRecord(new Legacy_AdvancedDataPointFormatRecord.RecordClass({
legacy_AdvancedDataPointFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Legacy_AdvancedDataPointFormatRecord._isAnonymousRecord = true;
Legacy_AdvancedDataPointFormatRecord.UniqueId = "860a186f-93e9-fe7f-e0d4-2f4282c2ec00";
Legacy_AdvancedDataPointFormatRecord.init();
return Legacy_AdvancedDataPointFormatRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.Legacy_AdvancedDataPointFormatRecord = Legacy_AdvancedDataPointFormatRecord;

});
define("AgentifaiSimulator.model$ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$ColorRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.ColorRecord = ColorRecord;

});
define("AgentifaiSimulator.model$Legacy_XAxisFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$Legacy_XAxisFormatRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var Legacy_XAxisFormatRecordList = (function (_super) {
__extends(Legacy_XAxisFormatRecordList, _super);
function Legacy_XAxisFormatRecordList(defaults) {
_super.apply(this, arguments);
}
Legacy_XAxisFormatRecordList.itemType = AgentifaiSimulatorModel.Legacy_XAxisFormatRecord;
return Legacy_XAxisFormatRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.Legacy_XAxisFormatRecordList = Legacy_XAxisFormatRecordList;

});
define("AgentifaiSimulator.model$MenuItemList", ["exports", "OutSystems/ClientRuntime/Main", "Users.model", "AgentifaiSimulator.model", "Users.model$MenuItemRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$Users"], function (exports, OutSystems, UsersModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var MenuItemList = (function (_super) {
__extends(MenuItemList, _super);
function MenuItemList(defaults) {
_super.apply(this, arguments);
}
MenuItemList.itemType = UsersModel.MenuItemRec;
return MenuItemList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.MenuItemList = MenuItemList;

});
define("AgentifaiSimulator.model$ChartLegendStylingList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$ChartLegendStylingRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ChartLegendStylingList = (function (_super) {
__extends(ChartLegendStylingList, _super);
function ChartLegendStylingList(defaults) {
_super.apply(this, arguments);
}
ChartLegendStylingList.itemType = OutSystemsChartsModel.ChartLegendStylingRec;
return ChartLegendStylingList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ChartLegendStylingList = ChartLegendStylingList;

});
define("AgentifaiSimulator.model$SeriesTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$SeriesTypeRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SeriesTypeList = (function (_super) {
__extends(SeriesTypeList, _super);
function SeriesTypeList(defaults) {
_super.apply(this, arguments);
}
SeriesTypeList.itemType = OutSystemsChartsModel.SeriesTypeRec;
return SeriesTypeList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SeriesTypeList = SeriesTypeList;

});
define("AgentifaiSimulator.model$SizeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$SizeRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SizeList = (function (_super) {
__extends(SizeList, _super);
function SizeList(defaults) {
_super.apply(this, arguments);
}
SizeList.itemType = OutSystemsUIModel.SizeRec;
return SizeList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SizeList = SizeList;

});
define("AgentifaiSimulator.model$MenuItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Users.model", "AgentifaiSimulator.model", "Users.model$MenuItemRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$Users"], function (exports, OutSystems, UsersModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var MenuItemRecord = (function (_super) {
__extends(MenuItemRecord, _super);
function MenuItemRecord(defaults) {
_super.apply(this, arguments);
}
MenuItemRecord.attributesToDeclare = function () {
return [
this.attr("MenuItem", "menuItemAttr", "MenuItem", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UsersModel.MenuItemRec());
}, true, UsersModel.MenuItemRec)
].concat(_super.attributesToDeclare.call(this));
};
MenuItemRecord.fromStructure = function (str) {
return new MenuItemRecord(new MenuItemRecord.RecordClass({
menuItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MenuItemRecord._isAnonymousRecord = true;
MenuItemRecord.UniqueId = "8b8d49ca-e184-f11a-9a03-009fcdc9287f";
MenuItemRecord.init();
return MenuItemRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.MenuItemRecord = MenuItemRecord;

});
define("AgentifaiSimulator.model$Legacy_AdvancedDataSeriesFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$Legacy_AdvancedDataSeriesFormatRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var Legacy_AdvancedDataSeriesFormatList = (function (_super) {
__extends(Legacy_AdvancedDataSeriesFormatList, _super);
function Legacy_AdvancedDataSeriesFormatList(defaults) {
_super.apply(this, arguments);
}
Legacy_AdvancedDataSeriesFormatList.itemType = OutSystemsChartsModel.Legacy_AdvancedDataSeriesFormatRec;
return Legacy_AdvancedDataSeriesFormatList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.Legacy_AdvancedDataSeriesFormatList = Legacy_AdvancedDataSeriesFormatList;

});
define("AgentifaiSimulator.model$Legacy_AdvancedFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$Legacy_AdvancedFormatRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var Legacy_AdvancedFormatRecord = (function (_super) {
__extends(Legacy_AdvancedFormatRecord, _super);
function Legacy_AdvancedFormatRecord(defaults) {
_super.apply(this, arguments);
}
Legacy_AdvancedFormatRecord.attributesToDeclare = function () {
return [
this.attr("Legacy_AdvancedFormat", "legacy_AdvancedFormatAttr", "Legacy_AdvancedFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.Legacy_AdvancedFormatRec());
}, true, OutSystemsChartsModel.Legacy_AdvancedFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
Legacy_AdvancedFormatRecord.fromStructure = function (str) {
return new Legacy_AdvancedFormatRecord(new Legacy_AdvancedFormatRecord.RecordClass({
legacy_AdvancedFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Legacy_AdvancedFormatRecord._isAnonymousRecord = true;
Legacy_AdvancedFormatRecord.UniqueId = "8bd0ab07-a3f3-c2d2-a572-a84134c564bd";
Legacy_AdvancedFormatRecord.init();
return Legacy_AdvancedFormatRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.Legacy_AdvancedFormatRecord = Legacy_AdvancedFormatRecord;

});
define("AgentifaiSimulator.model$Legacy_ChartFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$Legacy_ChartFormatRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var Legacy_ChartFormatList = (function (_super) {
__extends(Legacy_ChartFormatList, _super);
function Legacy_ChartFormatList(defaults) {
_super.apply(this, arguments);
}
Legacy_ChartFormatList.itemType = OutSystemsChartsModel.Legacy_ChartFormatRec;
return Legacy_ChartFormatList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.Legacy_ChartFormatList = Legacy_ChartFormatList;

});
define("AgentifaiSimulator.model$MenuItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$MenuItemRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var MenuItemRecordList = (function (_super) {
__extends(MenuItemRecordList, _super);
function MenuItemRecordList(defaults) {
_super.apply(this, arguments);
}
MenuItemRecordList.itemType = AgentifaiSimulatorModel.MenuItemRecord;
return MenuItemRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.MenuItemRecordList = MenuItemRecordList;

});
define("AgentifaiSimulator.model$BooleanTypesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$BooleanTypesRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var BooleanTypesRecordList = (function (_super) {
__extends(BooleanTypesRecordList, _super);
function BooleanTypesRecordList(defaults) {
_super.apply(this, arguments);
}
BooleanTypesRecordList.itemType = AgentifaiSimulatorModel.BooleanTypesRecord;
return BooleanTypesRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.BooleanTypesRecordList = BooleanTypesRecordList;

});
define("AgentifaiSimulator.model$Legacy_ChartFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$Legacy_ChartFormatRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var Legacy_ChartFormatRecordList = (function (_super) {
__extends(Legacy_ChartFormatRecordList, _super);
function Legacy_ChartFormatRecordList(defaults) {
_super.apply(this, arguments);
}
Legacy_ChartFormatRecordList.itemType = AgentifaiSimulatorModel.Legacy_ChartFormatRecord;
return Legacy_ChartFormatRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.Legacy_ChartFormatRecordList = Legacy_ChartFormatRecordList;

});
define("AgentifaiSimulator.model$Legacy_YAxisFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$Legacy_YAxisFormatRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var Legacy_YAxisFormatRecord = (function (_super) {
__extends(Legacy_YAxisFormatRecord, _super);
function Legacy_YAxisFormatRecord(defaults) {
_super.apply(this, arguments);
}
Legacy_YAxisFormatRecord.attributesToDeclare = function () {
return [
this.attr("Legacy_YAxisFormat", "legacy_YAxisFormatAttr", "Legacy_YAxisFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.Legacy_YAxisFormatRec());
}, true, OutSystemsChartsModel.Legacy_YAxisFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
Legacy_YAxisFormatRecord.fromStructure = function (str) {
return new Legacy_YAxisFormatRecord(new Legacy_YAxisFormatRecord.RecordClass({
legacy_YAxisFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Legacy_YAxisFormatRecord._isAnonymousRecord = true;
Legacy_YAxisFormatRecord.UniqueId = "9ac3a73b-5c3d-dd8f-3923-cd00427e8e10";
Legacy_YAxisFormatRecord.init();
return Legacy_YAxisFormatRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.Legacy_YAxisFormatRecord = Legacy_YAxisFormatRecord;

});
define("AgentifaiSimulator.model$Legacy_YAxisFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$Legacy_YAxisFormatRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var Legacy_YAxisFormatRecordList = (function (_super) {
__extends(Legacy_YAxisFormatRecordList, _super);
function Legacy_YAxisFormatRecordList(defaults) {
_super.apply(this, arguments);
}
Legacy_YAxisFormatRecordList.itemType = AgentifaiSimulatorModel.Legacy_YAxisFormatRecord;
return Legacy_YAxisFormatRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.Legacy_YAxisFormatRecordList = Legacy_YAxisFormatRecordList;

});
define("AgentifaiSimulator.model$ValuesTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$ValuesTypeRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ValuesTypeRecord = (function (_super) {
__extends(ValuesTypeRecord, _super);
function ValuesTypeRecord(defaults) {
_super.apply(this, arguments);
}
ValuesTypeRecord.attributesToDeclare = function () {
return [
this.attr("ValuesType", "valuesTypeAttr", "ValuesType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ValuesTypeRec());
}, true, OutSystemsChartsModel.ValuesTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
ValuesTypeRecord.fromStructure = function (str) {
return new ValuesTypeRecord(new ValuesTypeRecord.RecordClass({
valuesTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ValuesTypeRecord._isAnonymousRecord = true;
ValuesTypeRecord.UniqueId = "ec5ba0dc-ae2f-dbb0-747c-672da6bec9fd";
ValuesTypeRecord.init();
return ValuesTypeRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.ValuesTypeRecord = ValuesTypeRecord;

});
define("AgentifaiSimulator.model$ValuesTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$ValuesTypeRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ValuesTypeRecordList = (function (_super) {
__extends(ValuesTypeRecordList, _super);
function ValuesTypeRecordList(defaults) {
_super.apply(this, arguments);
}
ValuesTypeRecordList.itemType = AgentifaiSimulatorModel.ValuesTypeRecord;
return ValuesTypeRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ValuesTypeRecordList = ValuesTypeRecordList;

});
define("AgentifaiSimulator.model$MonthYearList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$MonthYearRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var MonthYearList = (function (_super) {
__extends(MonthYearList, _super);
function MonthYearList(defaults) {
_super.apply(this, arguments);
}
MonthYearList.itemType = OutSystemsUIModel.MonthYearRec;
return MonthYearList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.MonthYearList = MonthYearList;

});
define("AgentifaiSimulator.model$CarouselOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$CarouselOptionalConfigsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var CarouselOptionalConfigsRecordList = (function (_super) {
__extends(CarouselOptionalConfigsRecordList, _super);
function CarouselOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselOptionalConfigsRecordList.itemType = AgentifaiSimulatorModel.CarouselOptionalConfigsRecord;
return CarouselOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.CarouselOptionalConfigsRecordList = CarouselOptionalConfigsRecordList;

});
define("AgentifaiSimulator.model$ChartLegendOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$ChartLegendOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ChartLegendOptionalConfigsList = (function (_super) {
__extends(ChartLegendOptionalConfigsList, _super);
function ChartLegendOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
ChartLegendOptionalConfigsList.itemType = OutSystemsChartsModel.ChartLegendOptionalConfigsRec;
return ChartLegendOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ChartLegendOptionalConfigsList = ChartLegendOptionalConfigsList;

});
define("AgentifaiSimulator.model$Legacy_AdvancedFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$Legacy_AdvancedFormatRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var Legacy_AdvancedFormatList = (function (_super) {
__extends(Legacy_AdvancedFormatList, _super);
function Legacy_AdvancedFormatList(defaults) {
_super.apply(this, arguments);
}
Legacy_AdvancedFormatList.itemType = OutSystemsChartsModel.Legacy_AdvancedFormatRec;
return Legacy_AdvancedFormatList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.Legacy_AdvancedFormatList = Legacy_AdvancedFormatList;

});
define("AgentifaiSimulator.model$LoginAttemptResultList", ["exports", "OutSystems/ClientRuntime/Main", "Users.model", "AgentifaiSimulator.model", "Users.model$LoginAttemptResultRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$Users"], function (exports, OutSystems, UsersModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var LoginAttemptResultList = (function (_super) {
__extends(LoginAttemptResultList, _super);
function LoginAttemptResultList(defaults) {
_super.apply(this, arguments);
}
LoginAttemptResultList.itemType = UsersModel.LoginAttemptResultRec;
return LoginAttemptResultList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.LoginAttemptResultList = LoginAttemptResultList;

});
define("AgentifaiSimulator.model$SeriesStylingMarkerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$SeriesStylingMarkerRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SeriesStylingMarkerRecordList = (function (_super) {
__extends(SeriesStylingMarkerRecordList, _super);
function SeriesStylingMarkerRecordList(defaults) {
_super.apply(this, arguments);
}
SeriesStylingMarkerRecordList.itemType = AgentifaiSimulatorModel.SeriesStylingMarkerRecord;
return SeriesStylingMarkerRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SeriesStylingMarkerRecordList = SeriesStylingMarkerRecordList;

});
define("AgentifaiSimulator.model$ProgressCircleOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$ProgressCircleOptionalConfigsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ProgressCircleOptionalConfigsRecordList = (function (_super) {
__extends(ProgressCircleOptionalConfigsRecordList, _super);
function ProgressCircleOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
ProgressCircleOptionalConfigsRecordList.itemType = AgentifaiSimulatorModel.ProgressCircleOptionalConfigsRecord;
return ProgressCircleOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ProgressCircleOptionalConfigsRecordList = ProgressCircleOptionalConfigsRecordList;

});
define("AgentifaiSimulator.model$ChartLegendStylingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$ChartLegendStylingRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ChartLegendStylingRecordList = (function (_super) {
__extends(ChartLegendStylingRecordList, _super);
function ChartLegendStylingRecordList(defaults) {
_super.apply(this, arguments);
}
ChartLegendStylingRecordList.itemType = AgentifaiSimulatorModel.ChartLegendStylingRecord;
return ChartLegendStylingRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ChartLegendStylingRecordList = ChartLegendStylingRecordList;

});
define("AgentifaiSimulator.model$AccordionIconPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$AccordionIconPositionRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.AccordionIconPositionRecord = AccordionIconPositionRecord;

});
define("AgentifaiSimulator.model$AccordionIconPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$AccordionIconPositionRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var AccordionIconPositionRecordList = (function (_super) {
__extends(AccordionIconPositionRecordList, _super);
function AccordionIconPositionRecordList(defaults) {
_super.apply(this, arguments);
}
AccordionIconPositionRecordList.itemType = AgentifaiSimulatorModel.AccordionIconPositionRecord;
return AccordionIconPositionRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.AccordionIconPositionRecordList = AccordionIconPositionRecordList;

});
define("AgentifaiSimulator.model$FlatpickrConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$FlatpickrConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var FlatpickrConfigsList = (function (_super) {
__extends(FlatpickrConfigsList, _super);
function FlatpickrConfigsList(defaults) {
_super.apply(this, arguments);
}
FlatpickrConfigsList.itemType = OutSystemsUIModel.FlatpickrConfigsRec;
return FlatpickrConfigsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.FlatpickrConfigsList = FlatpickrConfigsList;

});
define("AgentifaiSimulator.model$ProgressBarOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$ProgressBarOptionalConfigsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ProgressBarOptionalConfigsRecordList = (function (_super) {
__extends(ProgressBarOptionalConfigsRecordList, _super);
function ProgressBarOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
ProgressBarOptionalConfigsRecordList.itemType = AgentifaiSimulatorModel.ProgressBarOptionalConfigsRecord;
return ProgressBarOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ProgressBarOptionalConfigsRecordList = ProgressBarOptionalConfigsRecordList;

});
define("AgentifaiSimulator.model$AlertRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$AlertRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.AlertRecord = AlertRecord;

});
define("AgentifaiSimulator.model$TabsOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$TabsOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.TabsOptionalConfigsRecord = TabsOptionalConfigsRecord;

});
define("AgentifaiSimulator.model$TabsOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$TabsOptionalConfigsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var TabsOptionalConfigsRecordList = (function (_super) {
__extends(TabsOptionalConfigsRecordList, _super);
function TabsOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
TabsOptionalConfigsRecordList.itemType = AgentifaiSimulatorModel.TabsOptionalConfigsRecord;
return TabsOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.TabsOptionalConfigsRecordList = TabsOptionalConfigsRecordList;

});
define("AgentifaiSimulator.model$GradientColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$GradientColorRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var GradientColorList = (function (_super) {
__extends(GradientColorList, _super);
function GradientColorList(defaults) {
_super.apply(this, arguments);
}
GradientColorList.itemType = OutSystemsUIModel.GradientColorRec;
return GradientColorList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.GradientColorList = GradientColorList;

});
define("AgentifaiSimulator.model$ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$ColorRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ColorRecordList = (function (_super) {
__extends(ColorRecordList, _super);
function ColorRecordList(defaults) {
_super.apply(this, arguments);
}
ColorRecordList.itemType = AgentifaiSimulatorModel.ColorRecord;
return ColorRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ColorRecordList = ColorRecordList;

});
define("AgentifaiSimulator.model$YAxisGridLinesStylingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$YAxisGridLinesStylingRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var YAxisGridLinesStylingRecordList = (function (_super) {
__extends(YAxisGridLinesStylingRecordList, _super);
function YAxisGridLinesStylingRecordList(defaults) {
_super.apply(this, arguments);
}
YAxisGridLinesStylingRecordList.itemType = AgentifaiSimulatorModel.YAxisGridLinesStylingRecord;
return YAxisGridLinesStylingRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.YAxisGridLinesStylingRecordList = YAxisGridLinesStylingRecordList;

});
define("AgentifaiSimulator.model$AxisValuesTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$AxisValuesTypeRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var AxisValuesTypeList = (function (_super) {
__extends(AxisValuesTypeList, _super);
function AxisValuesTypeList(defaults) {
_super.apply(this, arguments);
}
AxisValuesTypeList.itemType = OutSystemsChartsModel.AxisValuesTypeRec;
return AxisValuesTypeList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.AxisValuesTypeList = AxisValuesTypeList;

});
define("AgentifaiSimulator.model$VirtualSelectConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$VirtualSelectConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.VirtualSelectConfigsRecord = VirtualSelectConfigsRecord;

});
define("AgentifaiSimulator.model$XAxisStylingRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$XAxisStylingRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var XAxisStylingRecord = (function (_super) {
__extends(XAxisStylingRecord, _super);
function XAxisStylingRecord(defaults) {
_super.apply(this, arguments);
}
XAxisStylingRecord.attributesToDeclare = function () {
return [
this.attr("XAxisStyling", "xAxisStylingAttr", "XAxisStyling", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.XAxisStylingRec());
}, true, OutSystemsChartsModel.XAxisStylingRec)
].concat(_super.attributesToDeclare.call(this));
};
XAxisStylingRecord.fromStructure = function (str) {
return new XAxisStylingRecord(new XAxisStylingRecord.RecordClass({
xAxisStylingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
XAxisStylingRecord._isAnonymousRecord = true;
XAxisStylingRecord.UniqueId = "a36f33fd-75ed-f3ca-18b5-3fc02b778c00";
XAxisStylingRecord.init();
return XAxisStylingRecord;
})(OS.DataTypes.GenericRecord);
AgentifaiSimulatorModel.XAxisStylingRecord = XAxisStylingRecord;

});
define("AgentifaiSimulator.model$AnimationTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$AnimationTypeRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var AnimationTypeList = (function (_super) {
__extends(AnimationTypeList, _super);
function AnimationTypeList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeList.itemType = OutSystemsUIModel.AnimationTypeRec;
return AnimationTypeList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.AnimationTypeList = AnimationTypeList;

});
define("AgentifaiSimulator.model$MonthRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$MonthRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.MonthRecord = MonthRecord;

});
define("AgentifaiSimulator.model$MonthRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$MonthRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var MonthRecordList = (function (_super) {
__extends(MonthRecordList, _super);
function MonthRecordList(defaults) {
_super.apply(this, arguments);
}
MonthRecordList.itemType = AgentifaiSimulatorModel.MonthRecord;
return MonthRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.MonthRecordList = MonthRecordList;

});
define("AgentifaiSimulator.model$GutterSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$GutterSizeRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.GutterSizeRecord = GutterSizeRecord;

});
define("AgentifaiSimulator.model$SplideProvideri18nList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$SplideProvideri18nRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SplideProvideri18nList = (function (_super) {
__extends(SplideProvideri18nList, _super);
function SplideProvideri18nList(defaults) {
_super.apply(this, arguments);
}
SplideProvideri18nList.itemType = OutSystemsUIModel.SplideProvideri18nRec;
return SplideProvideri18nList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SplideProvideri18nList = SplideProvideri18nList;

});
define("AgentifaiSimulator.model$SplideConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$SplideConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.SplideConfigsRecord = SplideConfigsRecord;

});
define("AgentifaiSimulator.model$DEPRECATED_ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DEPRECATED_ColorRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.DEPRECATED_ColorRecord = DEPRECATED_ColorRecord;

});
define("AgentifaiSimulator.model$DEPRECATED_ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$DEPRECATED_ColorRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DEPRECATED_ColorRecordList = (function (_super) {
__extends(DEPRECATED_ColorRecordList, _super);
function DEPRECATED_ColorRecordList(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_ColorRecordList.itemType = AgentifaiSimulatorModel.DEPRECATED_ColorRecord;
return DEPRECATED_ColorRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DEPRECATED_ColorRecordList = DEPRECATED_ColorRecordList;

});
define("AgentifaiSimulator.model$NoUiSliderConfigs_RangeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$NoUiSliderConfigs_RangeRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var NoUiSliderConfigs_RangeRecordList = (function (_super) {
__extends(NoUiSliderConfigs_RangeRecordList, _super);
function NoUiSliderConfigs_RangeRecordList(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigs_RangeRecordList.itemType = AgentifaiSimulatorModel.NoUiSliderConfigs_RangeRecord;
return NoUiSliderConfigs_RangeRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.NoUiSliderConfigs_RangeRecordList = NoUiSliderConfigs_RangeRecordList;

});
define("AgentifaiSimulator.model$XAxisStylingList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$XAxisStylingRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var XAxisStylingList = (function (_super) {
__extends(XAxisStylingList, _super);
function XAxisStylingList(defaults) {
_super.apply(this, arguments);
}
XAxisStylingList.itemType = OutSystemsChartsModel.XAxisStylingRec;
return XAxisStylingList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.XAxisStylingList = XAxisStylingList;

});
define("AgentifaiSimulator.model$SeriesStylingOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$SeriesStylingOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SeriesStylingOptionalConfigsList = (function (_super) {
__extends(SeriesStylingOptionalConfigsList, _super);
function SeriesStylingOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
SeriesStylingOptionalConfigsList.itemType = OutSystemsChartsModel.SeriesStylingOptionalConfigsRec;
return SeriesStylingOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SeriesStylingOptionalConfigsList = SeriesStylingOptionalConfigsList;

});
define("AgentifaiSimulator.model$CarouselDirectionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$CarouselDirectionRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var CarouselDirectionList = (function (_super) {
__extends(CarouselDirectionList, _super);
function CarouselDirectionList(defaults) {
_super.apply(this, arguments);
}
CarouselDirectionList.itemType = OutSystemsUIModel.CarouselDirectionRec;
return CarouselDirectionList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.CarouselDirectionList = CarouselDirectionList;

});
define("AgentifaiSimulator.model$AlertList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$AlertRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var AlertList = (function (_super) {
__extends(AlertList, _super);
function AlertList(defaults) {
_super.apply(this, arguments);
}
AlertList.itemType = OutSystemsUIModel.AlertRec;
return AlertList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.AlertList = AlertList;

});
define("AgentifaiSimulator.model$XAxisGridLinesStylingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$XAxisGridLinesStylingRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var XAxisGridLinesStylingRecordList = (function (_super) {
__extends(XAxisGridLinesStylingRecordList, _super);
function XAxisGridLinesStylingRecordList(defaults) {
_super.apply(this, arguments);
}
XAxisGridLinesStylingRecordList.itemType = AgentifaiSimulatorModel.XAxisGridLinesStylingRecord;
return XAxisGridLinesStylingRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.XAxisGridLinesStylingRecordList = XAxisGridLinesStylingRecordList;

});
define("AgentifaiSimulator.model$DeviceConfigurationList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DeviceConfigurationRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DeviceConfigurationList = (function (_super) {
__extends(DeviceConfigurationList, _super);
function DeviceConfigurationList(defaults) {
_super.apply(this, arguments);
}
DeviceConfigurationList.itemType = OutSystemsUIModel.DeviceConfigurationRec;
return DeviceConfigurationList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DeviceConfigurationList = DeviceConfigurationList;

});
define("AgentifaiSimulator.model$Legacy_AdvancedDataPointFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$Legacy_AdvancedDataPointFormatRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var Legacy_AdvancedDataPointFormatRecordList = (function (_super) {
__extends(Legacy_AdvancedDataPointFormatRecordList, _super);
function Legacy_AdvancedDataPointFormatRecordList(defaults) {
_super.apply(this, arguments);
}
Legacy_AdvancedDataPointFormatRecordList.itemType = AgentifaiSimulatorModel.Legacy_AdvancedDataPointFormatRecord;
return Legacy_AdvancedDataPointFormatRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.Legacy_AdvancedDataPointFormatRecordList = Legacy_AdvancedDataPointFormatRecordList;

});
define("AgentifaiSimulator.model$DropdownOptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DropdownOptionRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.DropdownOptionRecord = DropdownOptionRecord;

});
define("AgentifaiSimulator.model$DropdownOptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$DropdownOptionRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DropdownOptionRecordList = (function (_super) {
__extends(DropdownOptionRecordList, _super);
function DropdownOptionRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionRecordList.itemType = AgentifaiSimulatorModel.DropdownOptionRecord;
return DropdownOptionRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DropdownOptionRecordList = DropdownOptionRecordList;

});
define("AgentifaiSimulator.model$ColumnBreakRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$ColumnBreakRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.ColumnBreakRecord = ColumnBreakRecord;

});
define("AgentifaiSimulator.model$ColumnBreakRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$ColumnBreakRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ColumnBreakRecordList = (function (_super) {
__extends(ColumnBreakRecordList, _super);
function ColumnBreakRecordList(defaults) {
_super.apply(this, arguments);
}
ColumnBreakRecordList.itemType = AgentifaiSimulatorModel.ColumnBreakRecord;
return ColumnBreakRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ColumnBreakRecordList = ColumnBreakRecordList;

});
define("AgentifaiSimulator.model$TabsOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$TabsOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var TabsOptionalConfigsList = (function (_super) {
__extends(TabsOptionalConfigsList, _super);
function TabsOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
TabsOptionalConfigsList.itemType = OutSystemsUIModel.TabsOptionalConfigsRec;
return TabsOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.TabsOptionalConfigsList = TabsOptionalConfigsList;

});
define("AgentifaiSimulator.model$LoginAttemptResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$LoginAttemptResultRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var LoginAttemptResultRecordList = (function (_super) {
__extends(LoginAttemptResultRecordList, _super);
function LoginAttemptResultRecordList(defaults) {
_super.apply(this, arguments);
}
LoginAttemptResultRecordList.itemType = AgentifaiSimulatorModel.LoginAttemptResultRecord;
return LoginAttemptResultRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.LoginAttemptResultRecordList = LoginAttemptResultRecordList;

});
define("AgentifaiSimulator.model$SplideConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$SplideConfigsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SplideConfigsRecordList = (function (_super) {
__extends(SplideConfigsRecordList, _super);
function SplideConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
SplideConfigsRecordList.itemType = AgentifaiSimulatorModel.SplideConfigsRecord;
return SplideConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SplideConfigsRecordList = SplideConfigsRecordList;

});
define("AgentifaiSimulator.model$DropdownItemList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DropdownItemRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DropdownItemList = (function (_super) {
__extends(DropdownItemList, _super);
function DropdownItemList(defaults) {
_super.apply(this, arguments);
}
DropdownItemList.itemType = OutSystemsUIModel.DropdownItemRec;
return DropdownItemList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DropdownItemList = DropdownItemList;

});
define("AgentifaiSimulator.model$TimePickerOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$TimePickerOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.TimePickerOptionalConfigsRecord = TimePickerOptionalConfigsRecord;

});
define("AgentifaiSimulator.model$ValuesTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$ValuesTypeRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ValuesTypeList = (function (_super) {
__extends(ValuesTypeList, _super);
function ValuesTypeList(defaults) {
_super.apply(this, arguments);
}
ValuesTypeList.itemType = OutSystemsChartsModel.ValuesTypeRec;
return ValuesTypeList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ValuesTypeList = ValuesTypeList;

});
define("AgentifaiSimulator.model$DatePickerOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$DatePickerOptionalConfigsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DatePickerOptionalConfigsRecordList = (function (_super) {
__extends(DatePickerOptionalConfigsRecordList, _super);
function DatePickerOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerOptionalConfigsRecordList.itemType = AgentifaiSimulatorModel.DatePickerOptionalConfigsRecord;
return DatePickerOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DatePickerOptionalConfigsRecordList = DatePickerOptionalConfigsRecordList;

});
define("AgentifaiSimulator.model$ErrorMessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$ErrorMessageRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ErrorMessageRecordList = (function (_super) {
__extends(ErrorMessageRecordList, _super);
function ErrorMessageRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRecordList.itemType = AgentifaiSimulatorModel.ErrorMessageRecord;
return ErrorMessageRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ErrorMessageRecordList = ErrorMessageRecordList;

});
define("AgentifaiSimulator.model$SeriesStylingOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$SeriesStylingOptionalConfigsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SeriesStylingOptionalConfigsRecordList = (function (_super) {
__extends(SeriesStylingOptionalConfigsRecordList, _super);
function SeriesStylingOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
SeriesStylingOptionalConfigsRecordList.itemType = AgentifaiSimulatorModel.SeriesStylingOptionalConfigsRecord;
return SeriesStylingOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SeriesStylingOptionalConfigsRecordList = SeriesStylingOptionalConfigsRecordList;

});
define("AgentifaiSimulator.model$DropdownOptionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DropdownOptionRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DropdownOptionList = (function (_super) {
__extends(DropdownOptionList, _super);
function DropdownOptionList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionList.itemType = OutSystemsUIModel.DropdownOptionRec;
return DropdownOptionList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DropdownOptionList = DropdownOptionList;

});
define("AgentifaiSimulator.model$StackingTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$StackingTypeRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var StackingTypeList = (function (_super) {
__extends(StackingTypeList, _super);
function StackingTypeList(defaults) {
_super.apply(this, arguments);
}
StackingTypeList.itemType = OutSystemsChartsModel.StackingTypeRec;
return StackingTypeList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.StackingTypeList = StackingTypeList;

});
define("AgentifaiSimulator.model$VirtualSelectConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$VirtualSelectConfigsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var VirtualSelectConfigsRecordList = (function (_super) {
__extends(VirtualSelectConfigsRecordList, _super);
function VirtualSelectConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
VirtualSelectConfigsRecordList.itemType = AgentifaiSimulatorModel.VirtualSelectConfigsRecord;
return VirtualSelectConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.VirtualSelectConfigsRecordList = VirtualSelectConfigsRecordList;

});
define("AgentifaiSimulator.model$MonthOrderYearList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$MonthOrderYearRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var MonthOrderYearList = (function (_super) {
__extends(MonthOrderYearList, _super);
function MonthOrderYearList(defaults) {
_super.apply(this, arguments);
}
MonthOrderYearList.itemType = OutSystemsUIModel.MonthOrderYearRec;
return MonthOrderYearList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.MonthOrderYearList = MonthOrderYearList;

});
define("AgentifaiSimulator.model$DatePickerTimeFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$DatePickerTimeFormatRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DatePickerTimeFormatRecordList = (function (_super) {
__extends(DatePickerTimeFormatRecordList, _super);
function DatePickerTimeFormatRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerTimeFormatRecordList.itemType = AgentifaiSimulatorModel.DatePickerTimeFormatRecord;
return DatePickerTimeFormatRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DatePickerTimeFormatRecordList = DatePickerTimeFormatRecordList;

});
define("AgentifaiSimulator.model$ProgressCircleOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$ProgressCircleOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ProgressCircleOptionalConfigsList = (function (_super) {
__extends(ProgressCircleOptionalConfigsList, _super);
function ProgressCircleOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
ProgressCircleOptionalConfigsList.itemType = OutSystemsUIModel.ProgressCircleOptionalConfigsRec;
return ProgressCircleOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ProgressCircleOptionalConfigsList = ProgressCircleOptionalConfigsList;

});
define("AgentifaiSimulator.model$LegendPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$LegendPositionRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var LegendPositionRecordList = (function (_super) {
__extends(LegendPositionRecordList, _super);
function LegendPositionRecordList(defaults) {
_super.apply(this, arguments);
}
LegendPositionRecordList.itemType = AgentifaiSimulatorModel.LegendPositionRecord;
return LegendPositionRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.LegendPositionRecordList = LegendPositionRecordList;

});
define("AgentifaiSimulator.model$RangeSliderOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$RangeSliderOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var RangeSliderOptionalConfigsList = (function (_super) {
__extends(RangeSliderOptionalConfigsList, _super);
function RangeSliderOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
RangeSliderOptionalConfigsList.itemType = OutSystemsUIModel.RangeSliderOptionalConfigsRec;
return RangeSliderOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.RangeSliderOptionalConfigsList = RangeSliderOptionalConfigsList;

});
define("AgentifaiSimulator.model$StepsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$StepsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var StepsList = (function (_super) {
__extends(StepsList, _super);
function StepsList(defaults) {
_super.apply(this, arguments);
}
StepsList.itemType = OutSystemsUIModel.StepsRec;
return StepsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.StepsList = StepsList;

});
define("AgentifaiSimulator.model$SplideConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$SplideConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SplideConfigsList = (function (_super) {
__extends(SplideConfigsList, _super);
function SplideConfigsList(defaults) {
_super.apply(this, arguments);
}
SplideConfigsList.itemType = OutSystemsUIModel.SplideConfigsRec;
return SplideConfigsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SplideConfigsList = SplideConfigsList;

});
define("AgentifaiSimulator.model$VirtualSelectConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$VirtualSelectConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var VirtualSelectConfigsList = (function (_super) {
__extends(VirtualSelectConfigsList, _super);
function VirtualSelectConfigsList(defaults) {
_super.apply(this, arguments);
}
VirtualSelectConfigsList.itemType = OutSystemsUIModel.VirtualSelectConfigsRec;
return VirtualSelectConfigsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.VirtualSelectConfigsList = VirtualSelectConfigsList;

});
define("AgentifaiSimulator.model$SamlUserList", ["exports", "OutSystems/ClientRuntime/Main", "Users.model", "AgentifaiSimulator.model", "Users.model$SamlUserRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$Users"], function (exports, OutSystems, UsersModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SamlUserList = (function (_super) {
__extends(SamlUserList, _super);
function SamlUserList(defaults) {
_super.apply(this, arguments);
}
SamlUserList.itemType = UsersModel.SamlUserRec;
return SamlUserList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SamlUserList = SamlUserList;

});
define("AgentifaiSimulator.model$SpeedRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$SpeedRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.SpeedRecord = SpeedRecord;

});
define("AgentifaiSimulator.model$DeviceResponsiveList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DeviceResponsiveRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DeviceResponsiveList = (function (_super) {
__extends(DeviceResponsiveList, _super);
function DeviceResponsiveList(defaults) {
_super.apply(this, arguments);
}
DeviceResponsiveList.itemType = OutSystemsUIModel.DeviceResponsiveRec;
return DeviceResponsiveList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DeviceResponsiveList = DeviceResponsiveList;

});
define("AgentifaiSimulator.model$SideMenuBehaviorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$SideMenuBehaviorRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SideMenuBehaviorList = (function (_super) {
__extends(SideMenuBehaviorList, _super);
function SideMenuBehaviorList(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorList.itemType = OutSystemsUIModel.SideMenuBehaviorRec;
return SideMenuBehaviorList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SideMenuBehaviorList = SideMenuBehaviorList;

});
define("AgentifaiSimulator.model$ColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$ColorRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ColorList = (function (_super) {
__extends(ColorList, _super);
function ColorList(defaults) {
_super.apply(this, arguments);
}
ColorList.itemType = OutSystemsUIModel.ColorRec;
return ColorList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ColorList = ColorList;

});
define("AgentifaiSimulator.model$GutterSizeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$GutterSizeRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var GutterSizeList = (function (_super) {
__extends(GutterSizeList, _super);
function GutterSizeList(defaults) {
_super.apply(this, arguments);
}
GutterSizeList.itemType = OutSystemsUIModel.GutterSizeRec;
return GutterSizeList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.GutterSizeList = GutterSizeList;

});
define("AgentifaiSimulator.model$Legacy_AdvancedFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$Legacy_AdvancedFormatRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var Legacy_AdvancedFormatRecordList = (function (_super) {
__extends(Legacy_AdvancedFormatRecordList, _super);
function Legacy_AdvancedFormatRecordList(defaults) {
_super.apply(this, arguments);
}
Legacy_AdvancedFormatRecordList.itemType = AgentifaiSimulatorModel.Legacy_AdvancedFormatRecord;
return Legacy_AdvancedFormatRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.Legacy_AdvancedFormatRecordList = Legacy_AdvancedFormatRecordList;

});
define("AgentifaiSimulator.model$ScrollbarStyleList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$ScrollbarStyleRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ScrollbarStyleList = (function (_super) {
__extends(ScrollbarStyleList, _super);
function ScrollbarStyleList(defaults) {
_super.apply(this, arguments);
}
ScrollbarStyleList.itemType = OutSystemsUIModel.ScrollbarStyleRec;
return ScrollbarStyleList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ScrollbarStyleList = ScrollbarStyleList;

});
define("AgentifaiSimulator.model$DatePickerLanguageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DatePickerLanguageRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DatePickerLanguageList = (function (_super) {
__extends(DatePickerLanguageList, _super);
function DatePickerLanguageList(defaults) {
_super.apply(this, arguments);
}
DatePickerLanguageList.itemType = OutSystemsUIModel.DatePickerLanguageRec;
return DatePickerLanguageList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DatePickerLanguageList = DatePickerLanguageList;

});
define("AgentifaiSimulator.model$NotificationOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$NotificationOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var NotificationOptionalConfigsList = (function (_super) {
__extends(NotificationOptionalConfigsList, _super);
function NotificationOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
NotificationOptionalConfigsList.itemType = OutSystemsUIModel.NotificationOptionalConfigsRec;
return NotificationOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.NotificationOptionalConfigsList = NotificationOptionalConfigsList;

});
define("AgentifaiSimulator.model$SplideProviderClassesRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$SplideProviderClassesRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.SplideProviderClassesRecord = SplideProviderClassesRecord;

});
define("AgentifaiSimulator.model$SplideProviderClassesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$SplideProviderClassesRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SplideProviderClassesRecordList = (function (_super) {
__extends(SplideProviderClassesRecordList, _super);
function SplideProviderClassesRecordList(defaults) {
_super.apply(this, arguments);
}
SplideProviderClassesRecordList.itemType = AgentifaiSimulatorModel.SplideProviderClassesRecord;
return SplideProviderClassesRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SplideProviderClassesRecordList = SplideProviderClassesRecordList;

});
define("AgentifaiSimulator.model$PositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$PositionRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var PositionList = (function (_super) {
__extends(PositionList, _super);
function PositionList(defaults) {
_super.apply(this, arguments);
}
PositionList.itemType = OutSystemsUIModel.PositionRec;
return PositionList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.PositionList = PositionList;

});
define("AgentifaiSimulator.model$DropdownItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$DropdownItemRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DropdownItemRecordList = (function (_super) {
__extends(DropdownItemRecordList, _super);
function DropdownItemRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownItemRecordList.itemType = AgentifaiSimulatorModel.DropdownItemRecord;
return DropdownItemRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DropdownItemRecordList = DropdownItemRecordList;

});
define("AgentifaiSimulator.model$OptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$OptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var OptionalConfigsList = (function (_super) {
__extends(OptionalConfigsList, _super);
function OptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
OptionalConfigsList.itemType = OutSystemsChartsModel.OptionalConfigsRec;
return OptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.OptionalConfigsList = OptionalConfigsList;

});
define("AgentifaiSimulator.model$CarouselItemsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$CarouselItemsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.CarouselItemsRecord = CarouselItemsRecord;

});
define("AgentifaiSimulator.model$AutoplayList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$AutoplayRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var AutoplayList = (function (_super) {
__extends(AutoplayList, _super);
function AutoplayList(defaults) {
_super.apply(this, arguments);
}
AutoplayList.itemType = OutSystemsUIModel.AutoplayRec;
return AutoplayList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.AutoplayList = AutoplayList;

});
define("AgentifaiSimulator.model$Legacy_XAxisFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$Legacy_XAxisFormatRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var Legacy_XAxisFormatList = (function (_super) {
__extends(Legacy_XAxisFormatList, _super);
function Legacy_XAxisFormatList(defaults) {
_super.apply(this, arguments);
}
Legacy_XAxisFormatList.itemType = OutSystemsChartsModel.Legacy_XAxisFormatRec;
return Legacy_XAxisFormatList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.Legacy_XAxisFormatList = Legacy_XAxisFormatList;

});
define("AgentifaiSimulator.model$ErrorMessage2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$ErrorMessage2Record"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ErrorMessage2RecordList = (function (_super) {
__extends(ErrorMessage2RecordList, _super);
function ErrorMessage2RecordList(defaults) {
_super.apply(this, arguments);
}
ErrorMessage2RecordList.itemType = AgentifaiSimulatorModel.ErrorMessage2Record;
return ErrorMessage2RecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ErrorMessage2RecordList = ErrorMessage2RecordList;

});
define("AgentifaiSimulator.model$XAxisStylingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$XAxisStylingRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var XAxisStylingRecordList = (function (_super) {
__extends(XAxisStylingRecordList, _super);
function XAxisStylingRecordList(defaults) {
_super.apply(this, arguments);
}
XAxisStylingRecordList.itemType = AgentifaiSimulatorModel.XAxisStylingRecord;
return XAxisStylingRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.XAxisStylingRecordList = XAxisStylingRecordList;

});
define("AgentifaiSimulator.model$DEPRECATED_MasterDetailItemList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DEPRECATED_MasterDetailItemRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DEPRECATED_MasterDetailItemList = (function (_super) {
__extends(DEPRECATED_MasterDetailItemList, _super);
function DEPRECATED_MasterDetailItemList(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_MasterDetailItemList.itemType = OutSystemsUIModel.DEPRECATED_MasterDetailItemRec;
return DEPRECATED_MasterDetailItemList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DEPRECATED_MasterDetailItemList = DEPRECATED_MasterDetailItemList;

});
define("AgentifaiSimulator.model$SideMenuBehaviorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$SideMenuBehaviorRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
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
AgentifaiSimulatorModel.SideMenuBehaviorRecord = SideMenuBehaviorRecord;

});
define("AgentifaiSimulator.model$CarouselItemsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$CarouselItemsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var CarouselItemsRecordList = (function (_super) {
__extends(CarouselItemsRecordList, _super);
function CarouselItemsRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselItemsRecordList.itemType = AgentifaiSimulatorModel.CarouselItemsRecord;
return CarouselItemsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.CarouselItemsRecordList = CarouselItemsRecordList;

});
define("AgentifaiSimulator.model$SpeedList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$SpeedRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SpeedList = (function (_super) {
__extends(SpeedList, _super);
function SpeedList(defaults) {
_super.apply(this, arguments);
}
SpeedList.itemType = OutSystemsUIModel.SpeedRec;
return SpeedList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SpeedList = SpeedList;

});
define("AgentifaiSimulator.model$StepsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$StepsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var StepsRecordList = (function (_super) {
__extends(StepsRecordList, _super);
function StepsRecordList(defaults) {
_super.apply(this, arguments);
}
StepsRecordList.itemType = AgentifaiSimulatorModel.StepsRecord;
return StepsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.StepsRecordList = StepsRecordList;

});
define("AgentifaiSimulator.model$DatePickerLanguageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$DatePickerLanguageRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DatePickerLanguageRecordList = (function (_super) {
__extends(DatePickerLanguageRecordList, _super);
function DatePickerLanguageRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerLanguageRecordList.itemType = AgentifaiSimulatorModel.DatePickerLanguageRecord;
return DatePickerLanguageRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DatePickerLanguageRecordList = DatePickerLanguageRecordList;

});
define("AgentifaiSimulator.model$XAxisGridLinesStylingList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$XAxisGridLinesStylingRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var XAxisGridLinesStylingList = (function (_super) {
__extends(XAxisGridLinesStylingList, _super);
function XAxisGridLinesStylingList(defaults) {
_super.apply(this, arguments);
}
XAxisGridLinesStylingList.itemType = OutSystemsChartsModel.XAxisGridLinesStylingRec;
return XAxisGridLinesStylingList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.XAxisGridLinesStylingList = XAxisGridLinesStylingList;

});
define("AgentifaiSimulator.model$YAxisStylingList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$YAxisStylingRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var YAxisStylingList = (function (_super) {
__extends(YAxisStylingList, _super);
function YAxisStylingList(defaults) {
_super.apply(this, arguments);
}
YAxisStylingList.itemType = OutSystemsChartsModel.YAxisStylingRec;
return YAxisStylingList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.YAxisStylingList = YAxisStylingList;

});
define("AgentifaiSimulator.model$GutterSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$GutterSizeRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var GutterSizeRecordList = (function (_super) {
__extends(GutterSizeRecordList, _super);
function GutterSizeRecordList(defaults) {
_super.apply(this, arguments);
}
GutterSizeRecordList.itemType = AgentifaiSimulatorModel.GutterSizeRecord;
return GutterSizeRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.GutterSizeRecordList = GutterSizeRecordList;

});
define("AgentifaiSimulator.model$SideMenuBehaviorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$SideMenuBehaviorRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SideMenuBehaviorRecordList = (function (_super) {
__extends(SideMenuBehaviorRecordList, _super);
function SideMenuBehaviorRecordList(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorRecordList.itemType = AgentifaiSimulatorModel.SideMenuBehaviorRecord;
return SideMenuBehaviorRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SideMenuBehaviorRecordList = SideMenuBehaviorRecordList;

});
define("AgentifaiSimulator.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "AgentifaiSimulator.model", "ServiceCenter.model$UserRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.UserList = UserList;

});
define("AgentifaiSimulator.model$GradientList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$GradientRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var GradientList = (function (_super) {
__extends(GradientList, _super);
function GradientList(defaults) {
_super.apply(this, arguments);
}
GradientList.itemType = OutSystemsUIModel.GradientRec;
return GradientList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.GradientList = GradientList;

});
define("AgentifaiSimulator.model$AlertRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$AlertRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var AlertRecordList = (function (_super) {
__extends(AlertRecordList, _super);
function AlertRecordList(defaults) {
_super.apply(this, arguments);
}
AlertRecordList.itemType = AgentifaiSimulatorModel.AlertRecord;
return AlertRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.AlertRecordList = AlertRecordList;

});
define("AgentifaiSimulator.model$SpeedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$SpeedRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SpeedRecordList = (function (_super) {
__extends(SpeedRecordList, _super);
function SpeedRecordList(defaults) {
_super.apply(this, arguments);
}
SpeedRecordList.itemType = AgentifaiSimulatorModel.SpeedRecord;
return SpeedRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SpeedRecordList = SpeedRecordList;

});
define("AgentifaiSimulator.model$SeriesStylingMarkerList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$SeriesStylingMarkerRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var SeriesStylingMarkerList = (function (_super) {
__extends(SeriesStylingMarkerList, _super);
function SeriesStylingMarkerList(defaults) {
_super.apply(this, arguments);
}
SeriesStylingMarkerList.itemType = OutSystemsChartsModel.SeriesStylingMarkerRec;
return SeriesStylingMarkerList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.SeriesStylingMarkerList = SeriesStylingMarkerList;

});
define("AgentifaiSimulator.model$TimePickerOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$TimePickerOptionalConfigsRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var TimePickerOptionalConfigsRecordList = (function (_super) {
__extends(TimePickerOptionalConfigsRecordList, _super);
function TimePickerOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
TimePickerOptionalConfigsRecordList.itemType = AgentifaiSimulatorModel.TimePickerOptionalConfigsRecord;
return TimePickerOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.TimePickerOptionalConfigsRecordList = TimePickerOptionalConfigsRecordList;

});
define("AgentifaiSimulator.model$DirectionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$DirectionRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DirectionRecordList = (function (_super) {
__extends(DirectionRecordList, _super);
function DirectionRecordList(defaults) {
_super.apply(this, arguments);
}
DirectionRecordList.itemType = AgentifaiSimulatorModel.DirectionRecord;
return DirectionRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DirectionRecordList = DirectionRecordList;

});
define("AgentifaiSimulator.model$GradientRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$GradientRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var GradientRecordList = (function (_super) {
__extends(GradientRecordList, _super);
function GradientRecordList(defaults) {
_super.apply(this, arguments);
}
GradientRecordList.itemType = AgentifaiSimulatorModel.GradientRecord;
return GradientRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.GradientRecordList = GradientRecordList;

});
define("AgentifaiSimulator.model$MonthYearRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$MonthYearRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var MonthYearRecordList = (function (_super) {
__extends(MonthYearRecordList, _super);
function MonthYearRecordList(defaults) {
_super.apply(this, arguments);
}
MonthYearRecordList.itemType = AgentifaiSimulatorModel.MonthYearRecord;
return MonthYearRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.MonthYearRecordList = MonthYearRecordList;

});
define("AgentifaiSimulator.model$MonthList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$MonthRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var MonthList = (function (_super) {
__extends(MonthList, _super);
function MonthList(defaults) {
_super.apply(this, arguments);
}
MonthList.itemType = OutSystemsUIModel.MonthRec;
return MonthList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.MonthList = MonthList;

});
define("AgentifaiSimulator.model$CarouselItemsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$CarouselItemsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var CarouselItemsList = (function (_super) {
__extends(CarouselItemsList, _super);
function CarouselItemsList(defaults) {
_super.apply(this, arguments);
}
CarouselItemsList.itemType = OutSystemsUIModel.CarouselItemsRec;
return CarouselItemsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.CarouselItemsList = CarouselItemsList;

});
define("AgentifaiSimulator.model$Legacy_YAxisFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "AgentifaiSimulator.model", "OutSystemsCharts.model$Legacy_YAxisFormatRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsCharts"], function (exports, OutSystems, OutSystemsChartsModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var Legacy_YAxisFormatList = (function (_super) {
__extends(Legacy_YAxisFormatList, _super);
function Legacy_YAxisFormatList(defaults) {
_super.apply(this, arguments);
}
Legacy_YAxisFormatList.itemType = OutSystemsChartsModel.Legacy_YAxisFormatRec;
return Legacy_YAxisFormatList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.Legacy_YAxisFormatList = Legacy_YAxisFormatList;

});
define("AgentifaiSimulator.model$DropdownOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "AgentifaiSimulator.model", "OutSystemsUI.model$DropdownOptionalConfigsRec", "AgentifaiSimulator.referencesHealth", "AgentifaiSimulator.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var DropdownOptionalConfigsList = (function (_super) {
__extends(DropdownOptionalConfigsList, _super);
function DropdownOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionalConfigsList.itemType = OutSystemsUIModel.DropdownOptionalConfigsRec;
return DropdownOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.DropdownOptionalConfigsList = DropdownOptionalConfigsList;

});
define("AgentifaiSimulator.model$ScrollbarStyleRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiSimulator.model", "AgentifaiSimulator.model$ScrollbarStyleRecord"], function (exports, OutSystems, AgentifaiSimulatorModel) {
var OS = OutSystems.Internal;
var ScrollbarStyleRecordList = (function (_super) {
__extends(ScrollbarStyleRecordList, _super);
function ScrollbarStyleRecordList(defaults) {
_super.apply(this, arguments);
}
ScrollbarStyleRecordList.itemType = AgentifaiSimulatorModel.ScrollbarStyleRecord;
return ScrollbarStyleRecordList;
})(OS.DataTypes.GenericRecordList);
AgentifaiSimulatorModel.ScrollbarStyleRecordList = ScrollbarStyleRecordList;

});
define("AgentifaiSimulator.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var AgentifaiSimulatorModel = exports;
Object.defineProperty(AgentifaiSimulatorModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["8aafc838-1bf5-4be3-a15d-dcb66bd1d563"];
}
});

AgentifaiSimulatorModel.staticEntities = {};
AgentifaiSimulatorModel.staticEntities.stackingType_v1 = {};
var getStackingType_v1Record = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["1aaafcbe-99a5-4857-83f2-e4754e65edcf"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.stackingType_v1, "stacked100Percent", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStackingType_v1Record("5a048369-2987-4af5-b052-ab363ac4b748"));
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.stackingType_v1, "noStacking", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStackingType_v1Record("b664d44a-e707-43cc-b782-cc4fd9c3ce8a"));
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.stackingType_v1, "stacked", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStackingType_v1Record("f5816dfa-da3b-4031-aa5f-06a7a08dcc94"));
}
});

AgentifaiSimulatorModel.staticEntities.legendPosition_v1 = {};
var getLegendPosition_v1Record = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["6f55558f-9a5c-49bb-bc32-8180c0ac0d73"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.legendPosition_v1, "bottom", {
get: function () {
return getLegendPosition_v1Record("24063cd8-b015-4fb7-8ceb-c4cf65110444");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.legendPosition_v1, "right", {
get: function () {
return getLegendPosition_v1Record("2c2e4610-d5b5-4738-9474-83ca4e40f33b");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.legendPosition_v1, "inside", {
get: function () {
return getLegendPosition_v1Record("33fda788-9eba-426b-be1d-284323c6ae2a");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.legendPosition_v1, "left", {
get: function () {
return getLegendPosition_v1Record("5314c097-85bd-407c-84f9-f0ebd17b75ce");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.legendPosition_v1, "hidden", {
get: function () {
return getLegendPosition_v1Record("6519bee3-d71b-41ae-8e57-a377f8aaa6c3");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.legendPosition_v1, "top", {
get: function () {
return getLegendPosition_v1Record("e0495156-d508-4fc2-a3ed-77a194c65b49");
}
});

AgentifaiSimulatorModel.staticEntities.seriesType = {};
var getSeriesTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["a9c663e8-6354-4f02-931c-636fc58b7d51"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.seriesType, "lineSpline", {
get: function () {
return getSeriesTypeRecord("3f7ae828-19cb-41e5-ae17-9532fe55db17");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.seriesType, "pie", {
get: function () {
return getSeriesTypeRecord("444a575c-b641-498a-9920-deba8125d6cd");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.seriesType, "column", {
get: function () {
return getSeriesTypeRecord("725167e0-349e-4d49-ab03-abb973474c3a");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.seriesType, "area", {
get: function () {
return getSeriesTypeRecord("ae810189-6c25-4616-b3d7-9bf355ab45a9");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.seriesType, "line", {
get: function () {
return getSeriesTypeRecord("b8357127-bd9e-4388-ba14-414d253820a8");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.seriesType, "areaSpline", {
get: function () {
return getSeriesTypeRecord("f5f641fb-62a9-4991-b1ef-0ad3e0c09eb2");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.seriesType, "bar", {
get: function () {
return getSeriesTypeRecord("f9a89332-5bd2-4960-85f2-41f70df5566d");
}
});

AgentifaiSimulatorModel.staticEntities.legendPosition = {};
var getLegendPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["aae17a97-3f0a-41cb-8937-e49d737a9771"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.legendPosition, "bottom", {
get: function () {
return getLegendPositionRecord("03026d1b-9c13-4584-9295-671a1586c89a");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.legendPosition, "right", {
get: function () {
return getLegendPositionRecord("4e71bff0-a68c-4905-aa02-46ae2986e6fb");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.legendPosition, "center", {
get: function () {
return getLegendPositionRecord("5686b31a-ba9b-46ca-9282-2f767adc12a4");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.legendPosition, "bottomRight", {
get: function () {
return getLegendPositionRecord("6d4187a9-2b5a-45b6-809c-e3b2284f2d47");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.legendPosition, "left", {
get: function () {
return getLegendPositionRecord("74b2b300-d6d2-4812-ba28-ddeae94869ca");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.legendPosition, "top", {
get: function () {
return getLegendPositionRecord("9da3e0d2-6f98-455b-bea1-5661b75da917");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.legendPosition, "topLeft", {
get: function () {
return getLegendPositionRecord("aeae77ad-7167-40a1-af0d-02b40615709c");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.legendPosition, "topRight", {
get: function () {
return getLegendPositionRecord("ec7543e7-5324-4ffe-8bbf-2c4a0f2dccbb");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.legendPosition, "bottomLeft", {
get: function () {
return getLegendPositionRecord("f08c54cf-074d-4052-8438-7bfdf027eb8b");
}
});

AgentifaiSimulatorModel.staticEntities.valuesType = {};
var getValuesTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["d0562170-cf56-434a-85ef-b8d33f2023f2"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.valuesType, "decimal", {
get: function () {
return getValuesTypeRecord("3e27399e-2c5f-4ea0-9b43-57efda9fc39a");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.valuesType, "text", {
get: function () {
return getValuesTypeRecord("649ea8ca-aea0-4b0a-9e14-7d7be348f570");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.valuesType, "datetime", {
get: function () {
return getValuesTypeRecord("ada8b21f-91d2-4353-b296-3d0f34e8f065");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.valuesType, "integer", {
get: function () {
return getValuesTypeRecord("dacb223d-1024-44f8-ae03-bbd06961a870");
}
});

AgentifaiSimulatorModel.staticEntities.legendLayout = {};
var getLegendLayoutRecord = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["f3006da5-223f-4057-894a-8966e01ba39f"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.legendLayout, "proximate", {
get: function () {
return getLegendLayoutRecord("3936b711-b22b-4e51-ac3a-a8dfae908d39");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.legendLayout, "horizontal", {
get: function () {
return getLegendLayoutRecord("39e35bd8-6ab1-475f-8e44-22ab6a1b0af8");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.legendLayout, "vertical", {
get: function () {
return getLegendLayoutRecord("75c7fcee-0e1f-4392-b359-fa5646dd2236");
}
});

AgentifaiSimulatorModel.staticEntities.stackingType = {};
var getStackingTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["f7a3d532-b80b-4cf8-a88a-1b138a432266"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.stackingType, "stacked", {
get: function () {
return getStackingTypeRecord("088f950f-4da9-4ff9-8a04-65a883f83712");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.stackingType, "stacked100Percent", {
get: function () {
return getStackingTypeRecord("1faf391e-0d35-4bf2-a4eb-23b864eb0827");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.stackingType, "noStacking", {
get: function () {
return getStackingTypeRecord("a63fa021-b305-434c-9ee1-ea028f9a1015");
}
});

AgentifaiSimulatorModel.staticEntities.axisValuesType = {};
var getAxisValuesTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"].staticEntities["fd747d79-417d-4efa-8f89-2d79bb8de835"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.axisValuesType, "linear", {
get: function () {
return getAxisValuesTypeRecord("45d001ca-cc7c-464e-8526-72b015a94f39");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.axisValuesType, "datetime", {
get: function () {
return getAxisValuesTypeRecord("7691cdbd-3a83-4375-a5b9-851b2bd61767");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.axisValuesType, "logarithmic", {
get: function () {
return getAxisValuesTypeRecord("fe3080e5-4116-4dc1-bae7-3715e5612a4b");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.axisValuesType, "category", {
get: function () {
return getAxisValuesTypeRecord("ff0aef46-a8c5-4078-b0a1-fee40a326514");
}
});

AgentifaiSimulatorModel.staticEntities.loginAttemptResult = {};
var getLoginAttemptResultRecord = function (record) {
return OS.ApplicationInfo.getModules()["65106059-0439-4be5-b011-2f01fba4afa6"].staticEntities["4737ce47-7567-4848-b570-0a248fcd7e26"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.loginAttemptResult, "invalidLDAPAuthentication", {
get: function () {
return getLoginAttemptResultRecord("04f8717d-96dc-45c5-b213-cbd7ab2a4bed");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.loginAttemptResult, "blockedIP", {
get: function () {
return getLoginAttemptResultRecord("0502c326-3023-44c0-b9d2-23cd02e44056");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.loginAttemptResult, "unblocked", {
get: function () {
return getLoginAttemptResultRecord("1718bad5-6ab3-48fd-8c86-2adeb45c1bd1");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.loginAttemptResult, "loggedIn", {
get: function () {
return getLoginAttemptResultRecord("17834aea-828f-44b0-bc3a-98ea229badb1");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.loginAttemptResult, "blockedUser", {
get: function () {
return getLoginAttemptResultRecord("6ad2be72-f42d-4e94-a5de-10e55b15738d");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.loginAttemptResult, "invalidADAuthentication", {
get: function () {
return getLoginAttemptResultRecord("bf569f28-590b-411b-9324-b870f5e92358");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.loginAttemptResult, "invalidUser", {
get: function () {
return getLoginAttemptResultRecord("c26ce883-4f22-4b81-96fd-428473e22b90");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.loginAttemptResult, "invalidPassword", {
get: function () {
return getLoginAttemptResultRecord("fb457f23-8cb1-44b9-9dc9-95d550e320c2");
}
});

AgentifaiSimulatorModel.staticEntities.menuItem = {};
var getMenuItemRecord = function (record) {
return OS.ApplicationInfo.getModules()["65106059-0439-4be5-b011-2f01fba4afa6"].staticEntities["Entity5B57028B-F636-4BA3-93F9-C81CACBC5638"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.menuItem, "applications", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMenuItemRecord("4d55224d-22d1-437e-81bb-6b421281482a"));
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.menuItem, "users", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMenuItemRecord("8a2645b7-7471-4771-a988-5d744d4f908f"));
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.menuItem, "groups", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMenuItemRecord("e4281deb-c1ce-4fe9-9438-a02db86b9f3d"));
}
});

AgentifaiSimulatorModel.staticEntities.animationType = {};
var getAnimationTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["0463d449-6834-40d5-817b-3d74d1a71bb2"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.animationType, "topToBottom", {
get: function () {
return getAnimationTypeRecord("2d5a98f9-381b-4ff8-9219-085bc35dfc44");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.animationType, "bounce", {
get: function () {
return getAnimationTypeRecord("3c3ad352-52fc-43c5-ae3a-f8d651bfa094");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.animationType, "fadeIn", {
get: function () {
return getAnimationTypeRecord("69814f09-c20b-4d55-b06a-7231a5515d2c");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.animationType, "scaleDown", {
get: function () {
return getAnimationTypeRecord("7d8fd3a6-eac4-4ae8-b865-18f5711814cb");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.animationType, "scale", {
get: function () {
return getAnimationTypeRecord("8a8e0e8b-0e5a-407c-9739-4942e1c708e8");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.animationType, "spinner", {
get: function () {
return getAnimationTypeRecord("b1e2a22f-cd5a-49a8-83e2-a82471745aea");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.animationType, "bottomToTop", {
get: function () {
return getAnimationTypeRecord("b71cef18-b0ee-4e9b-8b98-5700b6c6b9e4");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.animationType, "rightToLeft", {
get: function () {
return getAnimationTypeRecord("b7a58aaa-e1f6-4bbb-9557-5fb4742ef542");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.animationType, "leftToRight", {
get: function () {
return getAnimationTypeRecord("f4c21a73-5f0c-4d9e-a9e6-7053b68c2cea");
}
});

AgentifaiSimulatorModel.staticEntities.speed = {};
var getSpeedRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["0a5cc4ae-b54f-4ea3-9ace-9f49c7724606"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.speed, "fast", {
get: function () {
return getSpeedRecord("4fb2b6d9-70ff-415d-a09d-4ee05adda5c4");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.speed, "normal", {
get: function () {
return getSpeedRecord("93b9215f-8fb1-4f08-8555-9b0125b18f51");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.speed, "slow", {
get: function () {
return getSpeedRecord("b2c67d31-506d-42e7-890e-0e4f29234ae6");
}
});

AgentifaiSimulatorModel.staticEntities.sideMenuBehavior = {};
var getSideMenuBehaviorRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["11a5937b-e94d-4250-99a8-9c8358d3d965"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.sideMenuBehavior, "visible", {
get: function () {
return getSideMenuBehaviorRecord("25b95337-61e5-4cc7-95a0-fb2bee22c75f");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.sideMenuBehavior, "expandable", {
get: function () {
return getSideMenuBehaviorRecord("db935269-7a37-40aa-898b-e17e546a932a");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.sideMenuBehavior, "overlay", {
get: function () {
return getSideMenuBehaviorRecord("f194be06-0135-4afc-9be2-3f9a7ecd107c");
}
});

AgentifaiSimulatorModel.staticEntities.gradient = {};
var getGradientRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["15f4b55e-c9e8-4f0d-a043-0093e17fa04d"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.gradient, "linearHorizontal", {
get: function () {
return getGradientRecord("8d250673-5528-403b-9e7b-d1717a98219c");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.gradient, "radial", {
get: function () {
return getGradientRecord("b9ce4df8-c39e-4a3a-84d9-35dbc79e82fc");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.gradient, "linearDiagonally", {
get: function () {
return getGradientRecord("cef16d35-677a-4002-8d53-7b385be0011d");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.gradient, "linearVertical", {
get: function () {
return getGradientRecord("f128b147-c173-4df8-a624-d01eab01c46c");
}
});

AgentifaiSimulatorModel.staticEntities.size = {};
var getSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["1ac110b4-8964-470b-a6b2-81ae4a6b5bde"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.size, "medium", {
get: function () {
return getSizeRecord("0f4cba2c-32d2-4bef-b0e8-0ecd7eadbffa");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.size, "small", {
get: function () {
return getSizeRecord("9133cb8a-ca17-4e39-a9fd-4a07cf123c82");
}
});

AgentifaiSimulatorModel.staticEntities.deviceResponsive = {};
var getDeviceResponsiveRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["29468e1d-a25a-42c3-bf53-b232accc150d"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.deviceResponsive, "desktopAndTablet", {
get: function () {
return getDeviceResponsiveRecord("0a533047-a7d6-4897-bfb2-140047b8fccd");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.deviceResponsive, "tabletOnly", {
get: function () {
return getDeviceResponsiveRecord("4164cab0-7b05-43a4-9c78-e81a53431a7d");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.deviceResponsive, "allDevices", {
get: function () {
return getDeviceResponsiveRecord("5283ef6e-84da-42b1-b937-5efa0ee1a6b0");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.deviceResponsive, "phoneOnly", {
get: function () {
return getDeviceResponsiveRecord("a671987e-7b94-462a-9685-e6bcf890454e");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.deviceResponsive, "tabletAndPhone", {
get: function () {
return getDeviceResponsiveRecord("e04f86d2-6c26-47db-9e53-434eb6386498");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.deviceResponsive, "desktopOnly", {
get: function () {
return getDeviceResponsiveRecord("ebed41f5-fbac-4f23-9ae0-429c2e439ff2");
}
});

AgentifaiSimulatorModel.staticEntities.gutterSize = {};
var getGutterSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["2e81a1e8-4fa4-4bd0-a945-65352999b0be"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.gutterSize, "xXLarge", {
get: function () {
return getGutterSizeRecord("087ea4c4-96ff-4fc5-87c9-70e35c61fe6e");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.gutterSize, "medium", {
get: function () {
return getGutterSizeRecord("12874371-fb77-4707-afda-cdddbba81173");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.gutterSize, "none", {
get: function () {
return getGutterSizeRecord("1a6cb2a2-b448-4f08-ba92-5bd24d30a422");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.gutterSize, "extraLarge", {
get: function () {
return getGutterSizeRecord("8d669ecd-b220-4b80-b57b-4700987734dd");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.gutterSize, "small", {
get: function () {
return getGutterSizeRecord("96f816b9-2511-49f9-8e9c-c6ab4ff8683e");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.gutterSize, "large", {
get: function () {
return getGutterSizeRecord("a9dce78b-0487-49ef-b5c0-d3054293816b");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.gutterSize, "base", {
get: function () {
return getGutterSizeRecord("b7549354-102c-45e6-8c2e-b171c6f589c5");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.gutterSize, "extraSmall", {
get: function () {
return getGutterSizeRecord("b8734df5-7557-4609-a566-cf5c35a6dade");
}
});

AgentifaiSimulatorModel.staticEntities.month = {};
var getMonthRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["33d9b724-a0b1-4b0a-91fb-272143c44a85"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.month, "june", {
get: function () {
return getMonthRecord("02cb1fff-a143-48c1-8922-5b2c562e1939");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.month, "march", {
get: function () {
return getMonthRecord("29858d6e-705a-4cfd-a9e2-f9dc6bda346c");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.month, "december", {
get: function () {
return getMonthRecord("5b0eff8b-b2df-4e9a-80a5-eac51617cdc3");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.month, "february", {
get: function () {
return getMonthRecord("6b6caf1c-eadb-4b30-96ec-84b225feb1a5");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.month, "may", {
get: function () {
return getMonthRecord("76cd9430-f4f8-4b0d-8a72-ddcac3928aeb");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.month, "april", {
get: function () {
return getMonthRecord("7c425633-4e80-4f7a-a119-c21d82820511");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.month, "november", {
get: function () {
return getMonthRecord("86e22632-bb44-42ad-8589-0b6aadda9dd4");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.month, "august", {
get: function () {
return getMonthRecord("896ff549-7e70-48af-b967-31ea68b73891");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.month, "january", {
get: function () {
return getMonthRecord("8d3840f5-6ae6-4899-960d-3e215342e2e3");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.month, "july", {
get: function () {
return getMonthRecord("ac483ea0-4423-404a-a61d-8d6bce0ee39e");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.month, "september", {
get: function () {
return getMonthRecord("c858ebfd-c9fe-49b6-bbfc-57c28c895b26");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.month, "october", {
get: function () {
return getMonthRecord("e01b8055-99c6-4096-bc7d-5f0c825b7692");
}
});

AgentifaiSimulatorModel.staticEntities.datePickerLanguage = {};
var getDatePickerLanguageRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["45402ee4-73bf-42a2-b5f8-371ae940bf4f"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "japanese", {
get: function () {
return getDatePickerLanguageRecord("0041af3b-505e-48b8-8d79-b0a00aeeb4de");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "dutchFlemish", {
get: function () {
return getDatePickerLanguageRecord("05968754-a438-40c9-860d-0775c7618c80");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "czech", {
get: function () {
return getDatePickerLanguageRecord("0c6d79c7-6773-4d9e-a914-ad7246505aa8");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "indonesian", {
get: function () {
return getDatePickerLanguageRecord("0e659962-b0fb-4486-9f33-997cf5a00f33");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "punjabiPanjabi", {
get: function () {
return getDatePickerLanguageRecord("10fba89e-f9ea-46da-a114-849a4891c4dd");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "latvian", {
get: function () {
return getDatePickerLanguageRecord("11a9c498-65e3-4074-bd4c-16266288a9e4");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "chinese", {
get: function () {
return getDatePickerLanguageRecord("186d2cd3-7b9d-464a-b31e-b4548b9a80c0");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "polish", {
get: function () {
return getDatePickerLanguageRecord("198c5c59-d610-4e52-b4ed-9fb38c21b3b7");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "estonian", {
get: function () {
return getDatePickerLanguageRecord("1e9dd8a1-ab24-4849-ab74-b65b2a2974a5");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "catalanValencian", {
get: function () {
return getDatePickerLanguageRecord("1efa117c-f1b9-4ae7-94ad-814a752e4864");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "malay", {
get: function () {
return getDatePickerLanguageRecord("242628f3-22b6-4713-8118-7921abd00ad2");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "slovak", {
get: function () {
return getDatePickerLanguageRecord("286e49ad-5406-4f42-a9c4-bcc4adc64d17");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "sinhalaSinhalese", {
get: function () {
return getDatePickerLanguageRecord("2df37c1e-5431-4849-9f0b-405b43fed188");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "danish", {
get: function () {
return getDatePickerLanguageRecord("34689962-0ccc-46dc-bc43-e6bc7716784c");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "english", {
get: function () {
return getDatePickerLanguageRecord("37430fa0-8882-4f69-afde-41c27de03a5f");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "hungarian", {
get: function () {
return getDatePickerLanguageRecord("3854d57f-f8bd-4024-8664-6353d552d8f2");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "norwegianNynorsk", {
get: function () {
return getDatePickerLanguageRecord("459a4a75-fb85-40e0-96b2-f08df284da41");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "arabic", {
get: function () {
return getDatePickerLanguageRecord("530ceb8f-1ff1-44a7-aed5-e0af45b941cb");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "faroese", {
get: function () {
return getDatePickerLanguageRecord("58eb18a6-11fe-4a8b-bb96-7ed1057b16f5");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "centralKhmer", {
get: function () {
return getDatePickerLanguageRecord("5e341bb3-0fc7-4f59-a426-00dcd4b2fabf");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "romanianMoldavianMoldovan", {
get: function () {
return getDatePickerLanguageRecord("62e038a6-8d72-4484-b278-a883b004b3f2");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "chineseTraditional", {
get: function () {
return getDatePickerLanguageRecord("6bb7b0e2-bad8-4f58-801b-4ca0e9e699a7");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "norwegian", {
get: function () {
return getDatePickerLanguageRecord("6f9fd262-32f0-4726-ab3e-5d7bb6916892");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "esperanto", {
get: function () {
return getDatePickerLanguageRecord("7b29c19f-82dd-4e0b-8f5b-9004ca7d24fc");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "croatian", {
get: function () {
return getDatePickerLanguageRecord("7def49c8-f1a0-4600-ae56-53e9471634a2");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "albanian", {
get: function () {
return getDatePickerLanguageRecord("80601fbd-e190-49be-90dd-6964171d5292");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "korean", {
get: function () {
return getDatePickerLanguageRecord("82a53bc2-f8d7-4c5d-bb70-5651a4713880");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "thai", {
get: function () {
return getDatePickerLanguageRecord("84a8de9c-6f4d-4077-9391-98d66414bf4e");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "mongolian", {
get: function () {
return getDatePickerLanguageRecord("872b0db9-d9b4-49d4-b2ae-028122cbd448");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "spanishCastilian", {
get: function () {
return getDatePickerLanguageRecord("8c2fe645-d925-42ea-9819-4a1ac3a340e4");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "slovenian", {
get: function () {
return getDatePickerLanguageRecord("930b417d-72aa-4b39-a3b9-3b9821bf1d4b");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "vietnamese", {
get: function () {
return getDatePickerLanguageRecord("992f2c99-b122-49f6-bc7b-75d242dcb9bb");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "bosnian", {
get: function () {
return getDatePickerLanguageRecord("9d702f7b-360d-46bb-9b6e-0e020a5f6385");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "french", {
get: function () {
return getDatePickerLanguageRecord("9dffbcdd-25c4-44e2-9f6a-d19b9f758ad8");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "turkish", {
get: function () {
return getDatePickerLanguageRecord("9f260686-51cd-40d2-bf26-a09165b213ba");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "russian", {
get: function () {
return getDatePickerLanguageRecord("ad00c2b1-c380-4bf7-b5f4-173b40594bd5");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "serbian", {
get: function () {
return getDatePickerLanguageRecord("b2957404-0007-4b47-a798-dd114894c7e3");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "lithuanian", {
get: function () {
return getDatePickerLanguageRecord("b3519d98-660c-43ed-aee9-bb76e32dcafb");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "portuguese", {
get: function () {
return getDatePickerLanguageRecord("b4e4a5fb-10ef-4d66-84bd-96dddb9d3b3c");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "hebrew", {
get: function () {
return getDatePickerLanguageRecord("b60ef392-7715-437f-a4a9-b89a2128e49c");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "uzbek", {
get: function () {
return getDatePickerLanguageRecord("b6fa2f75-12b9-4973-9027-b4866be01621");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "burmese", {
get: function () {
return getDatePickerLanguageRecord("b719cb40-621d-4610-b16f-f42caad493d4");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "italian", {
get: function () {
return getDatePickerLanguageRecord("ba077ace-9423-401f-88fc-1fff8d7872a0");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "georgian", {
get: function () {
return getDatePickerLanguageRecord("bb85f008-2154-44ee-9199-9e0e19497c47");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "swedish", {
get: function () {
return getDatePickerLanguageRecord("bce28cae-e6f9-4988-97a8-8b0e17ea6703");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "azerbaijani", {
get: function () {
return getDatePickerLanguageRecord("bd68a245-146e-45c9-8dc0-26419cbe5c85");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "hindi", {
get: function () {
return getDatePickerLanguageRecord("c1e7d993-22fe-452a-9754-6a48ac03e6d4");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "bulgarian", {
get: function () {
return getDatePickerLanguageRecord("c356a48b-0411-4b54-b7a3-dd7fa4368645");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "finnish", {
get: function () {
return getDatePickerLanguageRecord("c38dac5a-7528-4647-96e6-887c0c9da82e");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "persian", {
get: function () {
return getDatePickerLanguageRecord("d1bf9a10-3760-41c7-94eb-e24707993416");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "armenian", {
get: function () {
return getDatePickerLanguageRecord("d8f987cd-d08c-40b3-b19b-b60b508cf03d");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "german", {
get: function () {
return getDatePickerLanguageRecord("da3038a7-779c-4599-b0b7-99557f688365");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "belarusian", {
get: function () {
return getDatePickerLanguageRecord("df311624-2b4a-410a-bf54-de447886e3a3");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "welsh", {
get: function () {
return getDatePickerLanguageRecord("dfb449d3-ec70-458e-9f37-89e8f9c207fb");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "ukrainian", {
get: function () {
return getDatePickerLanguageRecord("f6d8b648-df67-4449-934a-bd03dff4c50c");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "bengali", {
get: function () {
return getDatePickerLanguageRecord("fad657c3-4b13-4163-8e21-84c60b6810ee");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerLanguage, "macedonian", {
get: function () {
return getDatePickerLanguageRecord("ffb560d6-c067-42e5-bdd8-0de808acff0a");
}
});

AgentifaiSimulatorModel.staticEntities.dEPRECATED_Color = {};
var getDEPRECATED_ColorRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["4a5b3b8d-44e7-4c03-9b89-453fa2feee20"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.dEPRECATED_Color, "white", {
get: function () {
return getDEPRECATED_ColorRecord("05505a13-1fe9-4adf-9845-11368c74e98b");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.dEPRECATED_Color, "blue", {
get: function () {
return getDEPRECATED_ColorRecord("0772a1e6-baf6-4f8d-9b63-aef9b16bec31");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.dEPRECATED_Color, "black", {
get: function () {
return getDEPRECATED_ColorRecord("26ba2ced-6bce-452f-b33a-7874dc80d8d1");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.dEPRECATED_Color, "violet", {
get: function () {
return getDEPRECATED_ColorRecord("3269784e-d6b0-46db-a0b5-5a9a64ee0e41");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.dEPRECATED_Color, "none", {
get: function () {
return getDEPRECATED_ColorRecord("342260d0-74a4-44fd-9e9d-f0505a330244");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.dEPRECATED_Color, "orange", {
get: function () {
return getDEPRECATED_ColorRecord("833f5f9b-2325-4b92-9285-e14aa1a17c25");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.dEPRECATED_Color, "red", {
get: function () {
return getDEPRECATED_ColorRecord("94682198-3a70-458e-9889-3eef131d1b00");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.dEPRECATED_Color, "primaryColor", {
get: function () {
return getDEPRECATED_ColorRecord("9bd951e1-c94c-434b-85cb-a4cde3ffe638");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.dEPRECATED_Color, "green", {
get: function () {
return getDEPRECATED_ColorRecord("ad00278a-a271-46de-ac30-9f99c87f97a4");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.dEPRECATED_Color, "grey", {
get: function () {
return getDEPRECATED_ColorRecord("f986e894-0745-46fd-aa63-7680b5fd9234");
}
});

AgentifaiSimulatorModel.staticEntities.orientation = {};
var getOrientationRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["4d71f824-a563-4f63-8c76-626e4e0bdddb"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.orientation, "horizontal", {
get: function () {
return getOrientationRecord("7cb45416-3c4a-4178-9c5b-87eccf6ffae8");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.orientation, "vertical", {
get: function () {
return getOrientationRecord("dab877c1-e4a2-43a9-b211-3bb9167dace9");
}
});

AgentifaiSimulatorModel.staticEntities.datePickerTimeFormat = {};
var getDatePickerTimeFormatRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["55e54b1a-0efe-4bef-ae10-c2769129634d"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerTimeFormat, "disabled", {
get: function () {
return getDatePickerTimeFormatRecord("48213c15-538b-4222-a3ea-d136e608a57d");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerTimeFormat, "time24hFormat", {
get: function () {
return getDatePickerTimeFormatRecord("ce1a9924-35ee-4a25-87ae-81f2a97bdf20");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerTimeFormat, "time12hFormat", {
get: function () {
return getDatePickerTimeFormatRecord("e1aba689-db52-4dba-9eef-b5980b3e4fa0");
}
});

AgentifaiSimulatorModel.staticEntities.accordionIconType = {};
var getAccordionIconTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["635cc1de-f6de-4b65-baf1-c661bc518266"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.accordionIconType, "custom", {
get: function () {
return getAccordionIconTypeRecord("586a9223-5e9e-44d2-9405-4a511c4928ee");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.accordionIconType, "plusMinus", {
get: function () {
return getAccordionIconTypeRecord("a4609550-92ab-4e3b-bb2b-7e1f9759b5ed");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.accordionIconType, "caret", {
get: function () {
return getAccordionIconTypeRecord("b16c3109-4152-4df5-a403-ebb92631443c");
}
});

AgentifaiSimulatorModel.staticEntities.direction = {};
var getDirectionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["67628086-7f8b-4f84-a978-a9d3f547969c"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.direction, "left", {
get: function () {
return getDirectionRecord("67c53875-4631-4b77-b5bf-704f63fe5068");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.direction, "right", {
get: function () {
return getDirectionRecord("d4664682-120b-47de-963c-f7e0e2c432e9");
}
});

AgentifaiSimulatorModel.staticEntities.breakColumns = {};
var getBreakColumnsRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["68f74593-a5c4-4e65-858b-f44211eaf122"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.breakColumns, "none", {
get: function () {
return getBreakColumnsRecord("0712904e-03be-4b5f-9b9e-ecc640f84913");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.breakColumns, "first", {
get: function () {
return getBreakColumnsRecord("3d55ca44-9c70-4bd4-bf96-7d0a7ec1c3b6");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.breakColumns, "all", {
get: function () {
return getBreakColumnsRecord("63e0af38-8b6c-4970-b96a-acd8c6d863e4");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.breakColumns, "middle", {
get: function () {
return getBreakColumnsRecord("694d423c-ce17-45a1-9993-cb57c30ec674");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.breakColumns, "last", {
get: function () {
return getBreakColumnsRecord("6c98320a-c178-4925-b42b-7165ed805ea0");
}
});

AgentifaiSimulatorModel.staticEntities.shape = {};
var getShapeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["6fe168a9-c16d-4cdb-9b6f-a9e6c6b79326"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.shape, "sharp", {
get: function () {
return getShapeRecord("94deb1f5-6153-4438-92ad-cedea3c1f6f0");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.shape, "softRounded", {
get: function () {
return getShapeRecord("d1093539-d77d-439d-8d53-03d2e0053a52");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.shape, "rounded", {
get: function () {
return getShapeRecord("f20c2269-270a-43b2-ba29-bd8fbff2519f");
}
});

AgentifaiSimulatorModel.staticEntities.stackedCardsPosition = {};
var getStackedCardsPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["71865eb4-55fe-40a5-bc7f-45b005a3a0b5"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.stackedCardsPosition, "bottom", {
get: function () {
return getStackedCardsPositionRecord("2e9dd7c6-b9a7-404f-b207-9a3da7fb05ed");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.stackedCardsPosition, "top", {
get: function () {
return getStackedCardsPositionRecord("5766b18f-82ef-49f1-9476-cf8f49249f25");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.stackedCardsPosition, "none", {
get: function () {
return getStackedCardsPositionRecord("89cf1ed9-b6fd-4e0a-af41-cfd79db935d7");
}
});

AgentifaiSimulatorModel.staticEntities.carouselDirection = {};
var getCarouselDirectionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["71cbe266-f7c5-42fb-beae-76bc325d99ea"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.carouselDirection, "rightToLeft", {
get: function () {
return getCarouselDirectionRecord("4b5575cd-7598-420a-97db-5088d4d86a4d");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.carouselDirection, "leftToRight", {
get: function () {
return getCarouselDirectionRecord("a05b6420-43c5-4660-9526-95e2052a45a8");
}
});

AgentifaiSimulatorModel.staticEntities.autoplay = {};
var getAutoplayRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["82aa58b4-8bbb-4d19-92b6-2944affad02c"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.autoplay, "disabled", {
get: function () {
return getAutoplayRecord("1ffcca5d-17d0-492e-9e9e-b8addde7fd80");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.autoplay, "slow", {
get: function () {
return getAutoplayRecord("4167f601-5731-452d-9653-1be7f25199f1");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.autoplay, "fast", {
get: function () {
return getAutoplayRecord("41b9ec04-2023-4f87-b953-0c01713d1992");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.autoplay, "normal", {
get: function () {
return getAutoplayRecord("e3033046-77ba-49cd-928a-5d831105f349");
}
});

AgentifaiSimulatorModel.staticEntities.position = {};
var getPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["83c073e8-bac2-4122-9772-aa6e122a5d36"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.position, "top", {
get: function () {
return getPositionRecord("3bbcac35-309e-49a8-bf1b-a3c66e1ef3cd");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.position, "left", {
get: function () {
return getPositionRecord("4d70c81a-67bd-4a1f-a21a-c6aa13d0f364");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.position, "bottomRight", {
get: function () {
return getPositionRecord("73459c44-0160-4454-8ad0-c9bd44778a61");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.position, "bottomLeft", {
get: function () {
return getPositionRecord("7352570c-243a-4f05-b6d1-608495931118");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.position, "right", {
get: function () {
return getPositionRecord("bf43697b-2483-4855-a6c2-0a786bab472f");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.position, "topLeft", {
get: function () {
return getPositionRecord("c1d22c62-5a36-4d69-b188-02d62b8fe7c4");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.position, "topRight", {
get: function () {
return getPositionRecord("d14d8aae-f1c9-4538-a4a9-91a2690e6d92");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.position, "center", {
get: function () {
return getPositionRecord("dcc9ffa2-34a7-4097-86d0-dde224907425");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.position, "bottom", {
get: function () {
return getPositionRecord("fb8d90f9-5432-4678-932b-f468c00d3361");
}
});

AgentifaiSimulatorModel.staticEntities.trigger = {};
var getTriggerRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["8f0912ba-c626-4795-90a6-5311e2b970cb"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.trigger, "onClick", {
get: function () {
return getTriggerRecord("19fabbad-c01d-41a3-bdbb-f4f1d87b8042");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.trigger, "onHover", {
get: function () {
return getTriggerRecord("b60aa471-1556-46df-bc15-585543a2a05d");
}
});

AgentifaiSimulatorModel.staticEntities.space = {};
var getSpaceRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["8fb3d471-82a4-439c-9cc1-0555dfa91451"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.space, "large", {
get: function () {
return getSpaceRecord("51b55067-e608-49ed-9f00-1faf9e4a694a");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.space, "medium", {
get: function () {
return getSpaceRecord("7340e97f-de64-4337-ad0d-1defcab8adb2");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.space, "xXLarge", {
get: function () {
return getSpaceRecord("823213f8-9df9-4de0-8aba-2b5566e6f87d");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.space, "extraSmall", {
get: function () {
return getSpaceRecord("83adf9ba-fbcf-4ce0-b4a4-bc6330956b89");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.space, "small", {
get: function () {
return getSpaceRecord("919210a5-6b3b-40c9-9a28-b4e2c28a46f8");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.space, "base", {
get: function () {
return getSpaceRecord("f0572ad3-54ac-4755-8c8e-a9004171fcb1");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.space, "extraLarge", {
get: function () {
return getSpaceRecord("f8dafab9-63b9-40b2-9755-f2f8fa3d6e84");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.space, "none", {
get: function () {
return getSpaceRecord("fb937b97-bd94-4ba4-80ff-446cb3bdf6ae");
}
});

AgentifaiSimulatorModel.staticEntities.alert = {};
var getAlertRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["924486c0-dd9a-46ea-ad74-2cf9ac0c84d9"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.alert, "success", {
get: function () {
return getAlertRecord("4aac6381-179c-477f-a0d2-8aa7c0e2ece5");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.alert, "error", {
get: function () {
return getAlertRecord("85c06001-4d3a-4a08-b18f-4f9ebdc60d33");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.alert, "info", {
get: function () {
return getAlertRecord("e7c6b907-0f56-481e-b267-eb69bd92ed26");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.alert, "warning", {
get: function () {
return getAlertRecord("ed710523-9de5-47b6-b3ac-736fb4848c04");
}
});

AgentifaiSimulatorModel.staticEntities.booleanTypes = {};
var getBooleanTypesRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["9882c8fc-0dd6-492e-b6b9-7a68059ecc06"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.booleanTypes, "true", {
get: function () {
return getBooleanTypesRecord("58ea7788-cac7-4f50-8ef1-ba8e1661b632");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.booleanTypes, "unset", {
get: function () {
return getBooleanTypesRecord("bf11a159-3707-4888-8e86-c3b0c78bc889");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.booleanTypes, "false", {
get: function () {
return getBooleanTypesRecord("df5af092-2604-4409-ae7d-b86d2bcef9fb");
}
});

AgentifaiSimulatorModel.staticEntities.menuAction = {};
var getMenuActionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["9cc12883-06ab-4cf0-9997-ede7c6c02d67"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.menuAction, "menu", {
get: function () {
return getMenuActionRecord("55ba18a9-cd6b-45dd-99ce-9081ee1387ea");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.menuAction, "auto", {
get: function () {
return getMenuActionRecord("6c0c753a-86f4-4e76-9781-6e821c850c72");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.menuAction, "hidden", {
get: function () {
return getMenuActionRecord("86c9d356-be64-46a1-b027-843ab93b4aea");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.menuAction, "back", {
get: function () {
return getMenuActionRecord("f2db3c50-4c38-4ee7-a770-aa9476cb0d68");
}
});

AgentifaiSimulatorModel.staticEntities.accordionIconPosition = {};
var getAccordionIconPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["a848db2d-fe6c-4df1-8c10-8bdb3c2e948a"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.accordionIconPosition, "left", {
get: function () {
return getAccordionIconPositionRecord("0395cba2-9124-4125-ad88-d6bab39b2253");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.accordionIconPosition, "right", {
get: function () {
return getAccordionIconPositionRecord("8532648f-6556-4b3b-a42c-a3ba091d5efd");
}
});

AgentifaiSimulatorModel.staticEntities.messageStatus = {};
var getMessageStatusRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["c1015fc0-c81c-40cc-a046-bf99cf21a280"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.messageStatus, "hidden", {
get: function () {
return getMessageStatusRecord("2f2266ed-167a-45db-ac12-ca1e3cfa0fd2");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.messageStatus, "read", {
get: function () {
return getMessageStatusRecord("34f4ff93-8e4e-4933-baae-8b9f122eb3cc");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.messageStatus, "sent", {
get: function () {
return getMessageStatusRecord("a1f1ba89-bd84-4943-a94c-a84ea4a142bf");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.messageStatus, "received", {
get: function () {
return getMessageStatusRecord("c90b88d0-8f7d-484a-8d17-b0d1b9795a94");
}
});

AgentifaiSimulatorModel.staticEntities.scrollbarStyle = {};
var getScrollbarStyleRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["c3d6dfea-6da2-468a-80e4-5ce668d43f70"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.scrollbarStyle, "none", {
get: function () {
return getScrollbarStyleRecord("576d66f7-5b65-4e48-a694-eadecda4ff3a");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.scrollbarStyle, "default", {
get: function () {
return getScrollbarStyleRecord("d0f8c46d-762f-47a5-9572-945ac1dbbe7f");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.scrollbarStyle, "compact", {
get: function () {
return getScrollbarStyleRecord("e9191c43-63ef-4469-beac-2b1335aab932");
}
});

AgentifaiSimulatorModel.staticEntities.color = {};
var getColorRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["cb6d1da7-26d4-45d9-bc22-9a4c482e6ce2"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "neutral9", {
get: function () {
return getColorRecord("04a6c700-0ae5-44d5-81ce-34ec81d72c1c");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "grape", {
get: function () {
return getColorRecord("0d81324f-81ae-44eb-b81e-cd27ebce7460");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "neutral7", {
get: function () {
return getColorRecord("1434454b-4d44-4ec7-a9ee-8353529b1621");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "neutral10", {
get: function () {
return getColorRecord("1566893e-a30d-405f-878b-e64efdab7f7b");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "teal", {
get: function () {
return getColorRecord("19254415-08b2-4887-a6cf-36433bb1ade0");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "primary", {
get: function () {
return getColorRecord("1df261bf-454e-49a0-951e-87f6077cbbc1");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "neutral4", {
get: function () {
return getColorRecord("20d4e7d1-c296-4853-b584-d2b004ddf9f5");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "neutral8", {
get: function () {
return getColorRecord("31cd8495-438d-4825-8a93-c083bf6f016a");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "indigo", {
get: function () {
return getColorRecord("47b9565a-4f82-4a9d-a543-4aaa707853ac");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "orange", {
get: function () {
return getColorRecord("4d20d5b8-5570-4e18-9345-55772434a9ad");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "lime", {
get: function () {
return getColorRecord("50b20d51-09a6-43df-aa5d-6ae3c99f31e8");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "cyan", {
get: function () {
return getColorRecord("59edafdd-089e-409e-a2d2-78298e55e0f2");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "secondary", {
get: function () {
return getColorRecord("61f545b9-e074-40ee-a884-8102a56d9ee7");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "neutral6", {
get: function () {
return getColorRecord("69c65fbc-5ddc-4e41-afcf-03acff40e7a8");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "yellow", {
get: function () {
return getColorRecord("80145099-0e84-4301-902b-2bd6a933e319");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "neutral2", {
get: function () {
return getColorRecord("8577e423-4296-434f-9ca1-9a18b91e0c29");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "neutral1", {
get: function () {
return getColorRecord("9946980c-176a-4345-90ff-312523579ef0");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "neutral3", {
get: function () {
return getColorRecord("b7447296-c2b5-4d01-883b-b49d25b1c8a6");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "transparent", {
get: function () {
return getColorRecord("b87c59d9-4a95-4567-876d-b978ca413429");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "violet", {
get: function () {
return getColorRecord("bb39306e-ce82-47a7-9c0f-a78f92ff53c6");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "blue", {
get: function () {
return getColorRecord("c1bb8b1b-2f09-4fe9-bec9-eeb243b903d5");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "neutral5", {
get: function () {
return getColorRecord("c1d63249-fde7-4438-b4c9-d445bcfc9257");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "red", {
get: function () {
return getColorRecord("d6c564f5-847a-4155-ba84-91b826bd676f");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "pink", {
get: function () {
return getColorRecord("e9991560-a98c-431e-a583-b707840dc2f3");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "green", {
get: function () {
return getColorRecord("ede4099b-595f-47f0-98ed-583414f4f6bd");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.color, "neutral0", {
get: function () {
return getColorRecord("fb934ce5-6b33-4c96-8d40-b06352706a8d");
}
});

AgentifaiSimulatorModel.staticEntities.columnBreak = {};
var getColumnBreakRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["cce6ac21-942a-492f-8b46-64c5e6ea057b"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.columnBreak, "breakMiddle", {
get: function () {
return getColumnBreakRecord("3b01fc99-ef23-4043-8771-f88660720e01");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.columnBreak, "breakAll", {
get: function () {
return getColumnBreakRecord("43788f73-6893-4396-b67a-04a6ff690e74");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.columnBreak, "breakNone", {
get: function () {
return getColumnBreakRecord("69e6c609-9e8a-45a7-b006-45b92275ec49");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.columnBreak, "breakLast", {
get: function () {
return getColumnBreakRecord("6b3725c8-8951-48ed-a977-cbfaf003c896");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.columnBreak, "breakFirst", {
get: function () {
return getColumnBreakRecord("8c8b45b6-c1af-4b11-907e-3c8a5ce161e2");
}
});

AgentifaiSimulatorModel.staticEntities.steps = {};
var getStepsRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["e4dd8e9f-a620-4df5-b619-9b8a771be5a3"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.steps, "next", {
get: function () {
return getStepsRecord("03e9ec31-9b26-4304-b532-29aa077d99ea");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.steps, "past", {
get: function () {
return getStepsRecord("5452e8a1-02ca-4ff2-8d74-bff1512fc4a3");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.steps, "active", {
get: function () {
return getStepsRecord("dbde9903-8367-49e7-8302-f6758c190844");
}
});

AgentifaiSimulatorModel.staticEntities.carouselNavigation = {};
var getCarouselNavigationRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["ee3aefc9-e437-49fb-86a2-0c2d0656ed43"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.carouselNavigation, "dots", {
get: function () {
return getCarouselNavigationRecord("2ba3836f-3d61-4868-b949-fb01a4e0d441");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.carouselNavigation, "none", {
get: function () {
return getCarouselNavigationRecord("367fee69-dc95-4624-9ba5-da687d881886");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.carouselNavigation, "arrows", {
get: function () {
return getCarouselNavigationRecord("3ae78a75-4c85-4aaa-ba2d-12c24902a7cf");
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.carouselNavigation, "both", {
get: function () {
return getCarouselNavigationRecord("59a3f653-ff1d-49a0-ad2f-dda725b1352b");
}
});

AgentifaiSimulatorModel.staticEntities.datePickerWeekDay = {};
var getDatePickerWeekDayRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["fd4ed0ba-1ab9-4a3e-a2b1-18f41793be2d"][record];
};
Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerWeekDay, "monday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("2fc656af-35c9-4cc8-94f7-cd7970e5afe4"));
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerWeekDay, "saturday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("55758641-50ed-4a93-bb39-a86c02e8782c"));
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerWeekDay, "sunday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("570f21d0-bdbe-4bbe-a452-02e3376f69d8"));
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerWeekDay, "friday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("87ec7c5b-52ec-4dae-82e3-f6f08edd3a2e"));
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerWeekDay, "tuesday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("c59d1722-cbb1-453b-9a29-4fbb246756cd"));
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerWeekDay, "thursday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("f06c120a-c368-4568-9216-42f7c8a60d8c"));
}
});

Object.defineProperty(AgentifaiSimulatorModel.staticEntities.datePickerWeekDay, "wednesday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("f19cb895-a764-44e0-90e8-00bacb84e134"));
}
});

});
