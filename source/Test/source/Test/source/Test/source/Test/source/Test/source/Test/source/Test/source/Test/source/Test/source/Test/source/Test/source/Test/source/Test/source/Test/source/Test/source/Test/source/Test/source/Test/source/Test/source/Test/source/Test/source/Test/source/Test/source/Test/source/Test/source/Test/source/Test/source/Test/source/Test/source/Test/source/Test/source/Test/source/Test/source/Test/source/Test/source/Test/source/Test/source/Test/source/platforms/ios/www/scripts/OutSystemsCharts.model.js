define("OutSystemsCharts.model$ChartRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ChartRec = (function (_super) {
__extends(ChartRec, _super);
function ChartRec(defaults) {
_super.apply(this, arguments);
}
ChartRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "type", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("RenderTo", "renderToAttr", "renderTo", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Height", "heightAttr", "height", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ClassName", "classNameAttr", "className", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("InnerSize", "innerSizeAttr", "innerSize", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ChartRec.init();
return ChartRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.ChartRec = ChartRec;

});
define("OutSystemsCharts.model$InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ChartRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var InternalConfigRec = (function (_super) {
__extends(InternalConfigRec, _super);
function InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("Chart", "chartAttr", "chart", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ChartRec());
}, true, OutSystemsChartsModel.ChartRec), 
this.attr("StackingType", "stackingTypeAttr", "stackingType", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("UniqueId", "uniqueIdAttr", "uniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ValuesType", "valuesTypeAttr", "valuesType", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("disableLoadingAnimation", "disableLoadingAnimationAttr", "disableLoadingAnimation", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
InternalConfigRec.init();
return InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.InternalConfigRec = InternalConfigRec;

});
define("OutSystemsCharts.model$InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$InternalConfigRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var InternalConfigRecord = (function (_super) {
__extends(InternalConfigRecord, _super);
function InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("InternalConfig", "internalConfigAttr", "InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.InternalConfigRec());
}, true, OutSystemsChartsModel.InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
InternalConfigRecord.fromStructure = function (str) {
return new InternalConfigRecord(new InternalConfigRecord.RecordClass({
internalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
InternalConfigRecord._isAnonymousRecord = true;
InternalConfigRecord.UniqueId = "00179e46-ad19-6fea-9465-36d51a4dedf6";
InternalConfigRecord.init();
return InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.InternalConfigRecord = InternalConfigRecord;

});
define("OutSystemsCharts.model$SerieStylingInternalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SerieStylingInternalConfigsRec = (function (_super) {
__extends(SerieStylingInternalConfigsRec, _super);
function SerieStylingInternalConfigsRec(defaults) {
_super.apply(this, arguments);
}
SerieStylingInternalConfigsRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Binding", "bindingAttr", "Binding", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("MarkerHideMarker", "markerHideMarkerAttr", "MarkerHideMarker", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("MarkerFillColor", "markerFillColorAttr", "MarkerFillColor", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("MarkerBorderColor", "markerBorderColorAttr", "MarkerBorderColor", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("MarkerBorderWidth", "markerBorderWidthAttr", "MarkerBorderWidth", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("MarkerSymbol", "markerSymbolAttr", "MarkerSymbol", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("MarkerRadius", "markerRadiusAttr", "MarkerRadius", false, false, OS.Types.Integer, function () {
return 4;
}, true), 
this.attr("ShowDataPointValues", "showDataPointValuesAttr", "ShowDataPointValues", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("FillColor", "fillColorAttr", "FillColor", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("LineColor", "lineColorAttr", "LineColor", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("LineWidth", "lineWidthAttr", "LineWidth", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Opacity", "opacityAttr", "Opacity", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ShowInLegend", "showInLegendAttr", "ShowInLegend", false, false, OS.Types.Boolean, function () {
return true;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SerieStylingInternalConfigsRec.init();
return SerieStylingInternalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.SerieStylingInternalConfigsRec = SerieStylingInternalConfigsRec;

});
define("OutSystemsCharts.model$SerieStylingInternalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$SerieStylingInternalConfigsRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SerieStylingInternalConfigsRecord = (function (_super) {
__extends(SerieStylingInternalConfigsRecord, _super);
function SerieStylingInternalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
SerieStylingInternalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("SerieStylingInternalConfigs", "serieStylingInternalConfigsAttr", "SerieStylingInternalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.SerieStylingInternalConfigsRec());
}, true, OutSystemsChartsModel.SerieStylingInternalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
SerieStylingInternalConfigsRecord.fromStructure = function (str) {
return new SerieStylingInternalConfigsRecord(new SerieStylingInternalConfigsRecord.RecordClass({
serieStylingInternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SerieStylingInternalConfigsRecord._isAnonymousRecord = true;
SerieStylingInternalConfigsRecord.UniqueId = "024e2239-e97c-5f6d-0bb8-0b2851c02e49";
SerieStylingInternalConfigsRecord.init();
return SerieStylingInternalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.SerieStylingInternalConfigsRecord = SerieStylingInternalConfigsRecord;

});
define("OutSystemsCharts.model$XAxisOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var XAxisOptionalConfigsRec = (function (_super) {
__extends(XAxisOptionalConfigsRec, _super);
function XAxisOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
XAxisOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("ValuesType", "valuesTypeAttr", "ValuesType", false, false, OS.Types.Text, function () {
return OutSystemsChartsModel.staticEntities.axisValuesType.linear;
}, true), 
this.attr("Crosshair", "crosshairAttr", "Crosshair", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
XAxisOptionalConfigsRec.init();
return XAxisOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.XAxisOptionalConfigsRec = XAxisOptionalConfigsRec;

});
define("OutSystemsCharts.model$LegendPositionRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var LegendPositionRec = (function (_super) {
__extends(LegendPositionRec, _super);
function LegendPositionRec(defaults) {
_super.apply(this, arguments);
}
LegendPositionRec.attributesToDeclare = function () {
return [
this.attr("Position", "positionAttr", "Position", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LegendPositionRec.fromStructure = function (str) {
return new LegendPositionRec(new LegendPositionRec.RecordClass({
positionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LegendPositionRec.init();
return LegendPositionRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.LegendPositionRec = LegendPositionRec;

});
define("OutSystemsCharts.model$LegendPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$LegendPositionRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.LegendPositionRecord = LegendPositionRecord;

});
define("OutSystemsCharts.model$AxisTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var AxisTypeRec = (function (_super) {
__extends(AxisTypeRec, _super);
function AxisTypeRec(defaults) {
_super.apply(this, arguments);
}
AxisTypeRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AxisTypeRec.fromStructure = function (str) {
return new AxisTypeRec(new AxisTypeRec.RecordClass({
typeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AxisTypeRec.init();
return AxisTypeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.AxisTypeRec = AxisTypeRec;

});
define("OutSystemsCharts.model$StackingType_v1Rec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var StackingType_v1Rec = (function (_super) {
__extends(StackingType_v1Rec, _super);
function StackingType_v1Rec(defaults) {
_super.apply(this, arguments);
}
StackingType_v1Rec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
StackingType_v1Rec.init();
return StackingType_v1Rec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.StackingType_v1Rec = StackingType_v1Rec;

});
define("OutSystemsCharts.model$StackingTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var StackingTypeRec = (function (_super) {
__extends(StackingTypeRec, _super);
function StackingTypeRec(defaults) {
_super.apply(this, arguments);
}
StackingTypeRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
StackingTypeRec.fromStructure = function (str) {
return new StackingTypeRec(new StackingTypeRec.RecordClass({
typeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StackingTypeRec.init();
return StackingTypeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.StackingTypeRec = StackingTypeRec;

});
define("OutSystemsCharts.model$ChartLegendOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ChartLegendOptionalConfigsRec = (function (_super) {
__extends(ChartLegendOptionalConfigsRec, _super);
function ChartLegendOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
ChartLegendOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("Floating", "floatingAttr", "Floating", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ChartLegendOptionalConfigsRec.fromStructure = function (str) {
return new ChartLegendOptionalConfigsRec(new ChartLegendOptionalConfigsRec.RecordClass({
floatingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ChartLegendOptionalConfigsRec.init();
return ChartLegendOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.ChartLegendOptionalConfigsRec = ChartLegendOptionalConfigsRec;

});
define("OutSystemsCharts.model$ChartLegendOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ChartLegendOptionalConfigsRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.ChartLegendOptionalConfigsRecord = ChartLegendOptionalConfigsRecord;

});
define("OutSystemsCharts.model$ChartLegendOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ChartLegendOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ChartLegendOptionalConfigsRecordList = (function (_super) {
__extends(ChartLegendOptionalConfigsRecordList, _super);
function ChartLegendOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
ChartLegendOptionalConfigsRecordList.itemType = OutSystemsChartsModel.ChartLegendOptionalConfigsRecord;
return ChartLegendOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.ChartLegendOptionalConfigsRecordList = ChartLegendOptionalConfigsRecordList;

});
define("OutSystemsCharts.model$AxisInternalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var AxisInternalConfigsRec = (function (_super) {
__extends(AxisInternalConfigsRec, _super);
function AxisInternalConfigsRec(defaults) {
_super.apply(this, arguments);
}
AxisInternalConfigsRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Visible", "visibleAttr", "Visible", false, false, OS.Types.Boolean, function () {
return true;
}, true), 
this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ValuesPrefix", "valuesPrefixAttr", "ValuesPrefix", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ValuesSuffix", "valuesSuffixAttr", "ValuesSuffix", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("LabelColor", "labelColorAttr", "LabelColor", false, false, OS.Types.Text, function () {
return "#666666";
}, true), 
this.attr("LabelSize", "labelSizeAttr", "LabelSize", false, false, OS.Types.Integer, function () {
return 11;
}, true), 
this.attr("LabelRotation", "labelRotationAttr", "LabelRotation", false, false, OS.Types.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(0);
}, true), 
this.attr("LineColor", "lineColorAttr", "LineColor", false, false, OS.Types.Text, function () {
return "#ccd6eb";
}, true), 
this.attr("LineWidth", "lineWidthAttr", "LineWidth", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("GridLinesColor", "gridLinesColorAttr", "GridLinesColor", false, false, OS.Types.Text, function () {
return "#ccd6eb";
}, true), 
this.attr("GridLinesWidth", "gridLinesWidthAttr", "GridLinesWidth", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("GridLineStep", "gridLineStepAttr", "GridLineStep", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Crosshair", "crosshairAttr", "Crosshair", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("ValuesType", "valuesTypeAttr", "ValuesType", false, false, OS.Types.Text, function () {
return OutSystemsChartsModel.staticEntities.axisValuesType.linear;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AxisInternalConfigsRec.init();
return AxisInternalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.AxisInternalConfigsRec = AxisInternalConfigsRec;

});
define("OutSystemsCharts.model$ChartLegendStylingRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ChartLegendStylingRec = (function (_super) {
__extends(ChartLegendStylingRec, _super);
function ChartLegendStylingRec(defaults) {
_super.apply(this, arguments);
}
ChartLegendStylingRec.attributesToDeclare = function () {
return [
this.attr("BackgroundColor", "backgroundColorAttr", "BackgroundColor", false, false, OS.Types.Text, function () {
return "transparent";
}, true), 
this.attr("ItemsDistance", "itemsDistanceAttr", "ItemsDistance", false, false, OS.Types.Integer, function () {
return 20;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ChartLegendStylingRec.init();
return ChartLegendStylingRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.ChartLegendStylingRec = ChartLegendStylingRec;

});
define("OutSystemsCharts.model$ChartLegendStylingRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ChartLegendStylingRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.ChartLegendStylingRecord = ChartLegendStylingRecord;

});
define("OutSystemsCharts.model$SeriesTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SeriesTypeRec = (function (_super) {
__extends(SeriesTypeRec, _super);
function SeriesTypeRec(defaults) {
_super.apply(this, arguments);
}
SeriesTypeRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SeriesTypeRec.fromStructure = function (str) {
return new SeriesTypeRec(new SeriesTypeRec.RecordClass({
typeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SeriesTypeRec.init();
return SeriesTypeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.SeriesTypeRec = SeriesTypeRec;

});
define("OutSystemsCharts.model$YAxisGridLinesStylingRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var YAxisGridLinesStylingRec = (function (_super) {
__extends(YAxisGridLinesStylingRec, _super);
function YAxisGridLinesStylingRec(defaults) {
_super.apply(this, arguments);
}
YAxisGridLinesStylingRec.attributesToDeclare = function () {
return [
this.attr("GridLineStep", "gridLineStepAttr", "GridLineStep", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("LinesColor", "linesColorAttr", "LinesColor", false, false, OS.Types.Text, function () {
return "#ccd6eb";
}, true), 
this.attr("LinesWidth", "linesWidthAttr", "LinesWidth", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
YAxisGridLinesStylingRec.init();
return YAxisGridLinesStylingRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.YAxisGridLinesStylingRec = YAxisGridLinesStylingRec;

});
define("OutSystemsCharts.model$YAxisGridLinesStylingRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$YAxisGridLinesStylingRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.YAxisGridLinesStylingRecord = YAxisGridLinesStylingRecord;

});
define("OutSystemsCharts.model$AxisLabelRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var AxisLabelRec = (function (_super) {
__extends(AxisLabelRec, _super);
function AxisLabelRec(defaults) {
_super.apply(this, arguments);
}
AxisLabelRec.attributesToDeclare = function () {
return [
this.attr("ValuesPrefix", "valuesPrefixAttr", "ValuesPrefix", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ValuesSuffix", "valuesSuffixAttr", "ValuesSuffix", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("LabelColor", "labelColorAttr", "LabelColor", false, false, OS.Types.Text, function () {
return "#666666";
}, true), 
this.attr("LabelSize", "labelSizeAttr", "LabelSize", false, false, OS.Types.Integer, function () {
return 11;
}, true), 
this.attr("LabelRotation", "labelRotationAttr", "LabelRotation", false, false, OS.Types.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(0);
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AxisLabelRec.init();
return AxisLabelRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.AxisLabelRec = AxisLabelRec;

});
define("OutSystemsCharts.model$AxisLabelList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$AxisLabelRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var AxisLabelList = (function (_super) {
__extends(AxisLabelList, _super);
function AxisLabelList(defaults) {
_super.apply(this, arguments);
}
AxisLabelList.itemType = OutSystemsChartsModel.AxisLabelRec;
return AxisLabelList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.AxisLabelList = AxisLabelList;

});
define("OutSystemsCharts.model$YAxisStylingRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var YAxisStylingRec = (function (_super) {
__extends(YAxisStylingRec, _super);
function YAxisStylingRec(defaults) {
_super.apply(this, arguments);
}
YAxisStylingRec.attributesToDeclare = function () {
return [
this.attr("LineColor", "lineColorAttr", "LineColor", false, false, OS.Types.Text, function () {
return "#ccd6eb";
}, true), 
this.attr("LineWidth", "lineWidthAttr", "LineWidth", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
YAxisStylingRec.init();
return YAxisStylingRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.YAxisStylingRec = YAxisStylingRec;

});
define("OutSystemsCharts.model$YAxisStylingRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$YAxisStylingRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.YAxisStylingRecord = YAxisStylingRecord;

});
define("OutSystemsCharts.model$YAxisStylingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$YAxisStylingRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var YAxisStylingRecordList = (function (_super) {
__extends(YAxisStylingRecordList, _super);
function YAxisStylingRecordList(defaults) {
_super.apply(this, arguments);
}
YAxisStylingRecordList.itemType = OutSystemsChartsModel.YAxisStylingRecord;
return YAxisStylingRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.YAxisStylingRecordList = YAxisStylingRecordList;

});
define("OutSystemsCharts.model$", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.Types.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.TextList = TextList;

});
define("OutSystemsCharts.model$PropertyValueRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var PropertyValueRec = (function (_super) {
__extends(PropertyValueRec, _super);
function PropertyValueRec(defaults) {
_super.apply(this, arguments);
}
PropertyValueRec.attributesToDeclare = function () {
return [
this.attr("PropertyPathList", "propertyPathListAttr", "PropertyPathList", true, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("Value", "valueAttr", "Value", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PropertyValueRec.init();
return PropertyValueRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.PropertyValueRec = PropertyValueRec;

});
define("OutSystemsCharts.model$PropertyValueRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$PropertyValueRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.PropertyValueRecord = PropertyValueRecord;

});
define("OutSystemsCharts.model$PropertyValueRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$PropertyValueRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var PropertyValueRecordList = (function (_super) {
__extends(PropertyValueRecordList, _super);
function PropertyValueRecordList(defaults) {
_super.apply(this, arguments);
}
PropertyValueRecordList.itemType = OutSystemsChartsModel.PropertyValueRecord;
return PropertyValueRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.PropertyValueRecordList = PropertyValueRecordList;

});
define("OutSystemsCharts.model$SeriesStylingOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SeriesStylingOptionalConfigsRec = (function (_super) {
__extends(SeriesStylingOptionalConfigsRec, _super);
function SeriesStylingOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
SeriesStylingOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("ShowInLegend", "showInLegendAttr", "ShowInLegend", false, false, OS.Types.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SeriesStylingOptionalConfigsRec.fromStructure = function (str) {
return new SeriesStylingOptionalConfigsRec(new SeriesStylingOptionalConfigsRec.RecordClass({
showInLegendAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SeriesStylingOptionalConfigsRec.init();
return SeriesStylingOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.SeriesStylingOptionalConfigsRec = SeriesStylingOptionalConfigsRec;

});
define("OutSystemsCharts.model$XAxisGridLinesStylingRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var XAxisGridLinesStylingRec = (function (_super) {
__extends(XAxisGridLinesStylingRec, _super);
function XAxisGridLinesStylingRec(defaults) {
_super.apply(this, arguments);
}
XAxisGridLinesStylingRec.attributesToDeclare = function () {
return [
this.attr("GridLineStep", "gridLineStepAttr", "GridLineStep", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("LinesColor", "linesColorAttr", "LinesColor", false, false, OS.Types.Text, function () {
return "#ccd6eb";
}, true), 
this.attr("LinesWidth", "linesWidthAttr", "LinesWidth", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
XAxisGridLinesStylingRec.init();
return XAxisGridLinesStylingRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.XAxisGridLinesStylingRec = XAxisGridLinesStylingRec;

});
define("OutSystemsCharts.model$LegendPositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$LegendPositionRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var LegendPositionList = (function (_super) {
__extends(LegendPositionList, _super);
function LegendPositionList(defaults) {
_super.apply(this, arguments);
}
LegendPositionList.itemType = OutSystemsChartsModel.LegendPositionRec;
return LegendPositionList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.LegendPositionList = LegendPositionList;

});
define("OutSystemsCharts.model$Legacy_ChartRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_ChartRec = (function (_super) {
__extends(Legacy_ChartRec, _super);
function Legacy_ChartRec(defaults) {
_super.apply(this, arguments);
}
Legacy_ChartRec.attributesToDeclare = function () {
return [
this.attr("plotShadow", "plotShadowAttr", "plotShadow", true, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("type", "typeAttr", "type", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("renderTo", "renderToAttr", "renderTo", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("height", "heightAttr", "height", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("animation", "animationAttr", "animation", true, false, OS.Types.Boolean, function () {
return true;
}, true), 
this.attr("backgroundColor", "backgroundColorAttr", "backgroundColor", true, false, OS.Types.Text, function () {
return "rgba(255, 255, 255, 0)";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Legacy_ChartRec.init();
return Legacy_ChartRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.Legacy_ChartRec = Legacy_ChartRec;

});
define("OutSystemsCharts.model$Legacy_ChartFormatRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_ChartFormatRec = (function (_super) {
__extends(Legacy_ChartFormatRec, _super);
function Legacy_ChartFormatRec(defaults) {
_super.apply(this, arguments);
}
Legacy_ChartFormatRec.attributesToDeclare = function () {
return [
this.attr("ShowDataPointValues", "showDataPointValuesAttr", "ShowDataPointValues", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("UseAnimation", "useAnimationAttr", "UseAnimation", true, false, OS.Types.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Legacy_ChartFormatRec.init();
return Legacy_ChartFormatRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.Legacy_ChartFormatRec = Legacy_ChartFormatRec;

});
define("OutSystemsCharts.model$Legacy_XAxisFormatRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_XAxisFormatRec = (function (_super) {
__extends(Legacy_XAxisFormatRec, _super);
function Legacy_XAxisFormatRec(defaults) {
_super.apply(this, arguments);
}
Legacy_XAxisFormatRec.attributesToDeclare = function () {
return [
this.attr("Title", "titleAttr", "Title", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("LabelsRotation", "labelsRotationAttr", "LabelsRotation", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ValuesType", "valuesTypeAttr", "ValuesType", false, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Legacy_XAxisFormatRec.init();
return Legacy_XAxisFormatRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.Legacy_XAxisFormatRec = Legacy_XAxisFormatRec;

});
define("OutSystemsCharts.model$Legacy_YAxisFormatRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_YAxisFormatRec = (function (_super) {
__extends(Legacy_YAxisFormatRec, _super);
function Legacy_YAxisFormatRec(defaults) {
_super.apply(this, arguments);
}
Legacy_YAxisFormatRec.attributesToDeclare = function () {
return [
this.attr("Title", "titleAttr", "Title", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.Types.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(-2147483647);
}, true), 
this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.Types.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(-2147483647);
}, true), 
this.attr("ValuesPrefix", "valuesPrefixAttr", "ValuesPrefix", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("ValuesSuffix", "valuesSuffixAttr", "ValuesSuffix", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("GridLineStep", "gridLineStepAttr", "GridLineStep", false, false, OS.Types.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(-2147483647);
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Legacy_YAxisFormatRec.init();
return Legacy_YAxisFormatRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.Legacy_YAxisFormatRec = Legacy_YAxisFormatRec;

});
define("OutSystemsCharts.model$Legacy_advancedFormat_JSONRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_advancedFormat_JSONRec = (function (_super) {
__extends(Legacy_advancedFormat_JSONRec, _super);
function Legacy_advancedFormat_JSONRec(defaults) {
_super.apply(this, arguments);
}
Legacy_advancedFormat_JSONRec.attributesToDeclare = function () {
return [
this.attr("DataPointFormatsJSON", "dataPointFormatsJSONAttr", "DataPointFormatsJSON", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("DataSeriesFormatsJSON", "dataSeriesFormatsJSONAttr", "DataSeriesFormatsJSON", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("XAxisJSON", "xAxisJSONAttr", "XAxisJSON", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("YAxisJSON", "yAxisJSONAttr", "YAxisJSON", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("HighchartsJSON", "highchartsJSONAttr", "HighchartsJSON", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Legacy_advancedFormat_JSONRec.init();
return Legacy_advancedFormat_JSONRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.Legacy_advancedFormat_JSONRec = Legacy_advancedFormat_JSONRec;

});
define("OutSystemsCharts.model$Legacy_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_ChartRec", "OutSystemsCharts.model$Legacy_ChartFormatRec", "OutSystemsCharts.model$Legacy_XAxisFormatRec", "OutSystemsCharts.model$Legacy_YAxisFormatRec", "OutSystemsCharts.model$Legacy_advancedFormat_JSONRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_InternalConfigRec = (function (_super) {
__extends(Legacy_InternalConfigRec, _super);
function Legacy_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
Legacy_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("chart", "chartAttr", "chart", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.Legacy_ChartRec());
}, true, OutSystemsChartsModel.Legacy_ChartRec), 
this.attr("chartFormat", "chartFormatAttr", "chartFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.Legacy_ChartFormatRec());
}, true, OutSystemsChartsModel.Legacy_ChartFormatRec), 
this.attr("stackingTypeId", "stackingTypeIdAttr", "stackingTypeId", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("xAxisFormat", "xAxisFormatAttr", "xAxisFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.Legacy_XAxisFormatRec());
}, true, OutSystemsChartsModel.Legacy_XAxisFormatRec), 
this.attr("xAxisType", "xAxisTypeAttr", "xAxisType", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("yAxisFormat", "yAxisFormatAttr", "yAxisFormat", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.Legacy_YAxisFormatRec());
}, true, OutSystemsChartsModel.Legacy_YAxisFormatRec), 
this.attr("legendPositionId", "legendPositionIdAttr", "legendPositionId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("uniqueId", "uniqueIdAttr", "uniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("advancedFormat_JSON", "advancedFormat_JSONAttr", "advancedFormat_JSON", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.Legacy_advancedFormat_JSONRec());
}, true, OutSystemsChartsModel.Legacy_advancedFormat_JSONRec), 
this.attr("isClickable", "isClickableAttr", "isClickable", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Legacy_InternalConfigRec.init();
return Legacy_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.Legacy_InternalConfigRec = Legacy_InternalConfigRec;

});
define("OutSystemsCharts.model$Legacy_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_InternalConfigRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_InternalConfigList = (function (_super) {
__extends(Legacy_InternalConfigList, _super);
function Legacy_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
Legacy_InternalConfigList.itemType = OutSystemsChartsModel.Legacy_InternalConfigRec;
return Legacy_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.Legacy_InternalConfigList = Legacy_InternalConfigList;

});
define("OutSystemsCharts.model$YAxisOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var YAxisOptionalConfigsRec = (function (_super) {
__extends(YAxisOptionalConfigsRec, _super);
function YAxisOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
YAxisOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("ValuesType", "valuesTypeAttr", "ValuesType", false, false, OS.Types.Text, function () {
return OutSystemsChartsModel.staticEntities.axisValuesType.linear;
}, true), 
this.attr("Crosshair", "crosshairAttr", "Crosshair", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
YAxisOptionalConfigsRec.init();
return YAxisOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.YAxisOptionalConfigsRec = YAxisOptionalConfigsRec;

});
define("OutSystemsCharts.model$YAxisOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$YAxisOptionalConfigsRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.YAxisOptionalConfigsRecord = YAxisOptionalConfigsRecord;

});
define("OutSystemsCharts.model$YAxisOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$YAxisOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var YAxisOptionalConfigsRecordList = (function (_super) {
__extends(YAxisOptionalConfigsRecordList, _super);
function YAxisOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
YAxisOptionalConfigsRecordList.itemType = OutSystemsChartsModel.YAxisOptionalConfigsRecord;
return YAxisOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.YAxisOptionalConfigsRecordList = YAxisOptionalConfigsRecordList;

});
define("OutSystemsCharts.model$AxisLabelRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$AxisLabelRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.AxisLabelRecord = AxisLabelRecord;

});
define("OutSystemsCharts.model$AxisLabelRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$AxisLabelRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var AxisLabelRecordList = (function (_super) {
__extends(AxisLabelRecordList, _super);
function AxisLabelRecordList(defaults) {
_super.apply(this, arguments);
}
AxisLabelRecordList.itemType = OutSystemsChartsModel.AxisLabelRecord;
return AxisLabelRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.AxisLabelRecordList = AxisLabelRecordList;

});
define("OutSystemsCharts.model$SeriesStylingMarkerRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SeriesStylingMarkerRec = (function (_super) {
__extends(SeriesStylingMarkerRec, _super);
function SeriesStylingMarkerRec(defaults) {
_super.apply(this, arguments);
}
SeriesStylingMarkerRec.attributesToDeclare = function () {
return [
this.attr("HideMarker", "hideMarkerAttr", "HideMarker", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("FillColor", "fillColorAttr", "FillColor", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("BorderColor", "borderColorAttr", "BorderColor", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("BorderWidth", "borderWidthAttr", "BorderWidth", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Radius", "radiusAttr", "Radius", false, false, OS.Types.Integer, function () {
return 4;
}, true), 
this.attr("MarkerSymbol", "markerSymbolAttr", "MarkerSymbol", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SeriesStylingMarkerRec.init();
return SeriesStylingMarkerRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.SeriesStylingMarkerRec = SeriesStylingMarkerRec;

});
define("OutSystemsCharts.model$SeriesStylingMarkerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$SeriesStylingMarkerRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.SeriesStylingMarkerRecord = SeriesStylingMarkerRecord;

});
define("OutSystemsCharts.model$ReturnMessageRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.ReturnMessageRec = ReturnMessageRec;

});
define("OutSystemsCharts.model$ReturnMessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ReturnMessageRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ReturnMessageRecord = (function (_super) {
__extends(ReturnMessageRecord, _super);
function ReturnMessageRecord(defaults) {
_super.apply(this, arguments);
}
ReturnMessageRecord.attributesToDeclare = function () {
return [
this.attr("ReturnMessage", "returnMessageAttr", "ReturnMessage", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ReturnMessageRec());
}, true, OutSystemsChartsModel.ReturnMessageRec)
].concat(_super.attributesToDeclare.call(this));
};
ReturnMessageRecord.fromStructure = function (str) {
return new ReturnMessageRecord(new ReturnMessageRecord.RecordClass({
returnMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ReturnMessageRecord._isAnonymousRecord = true;
ReturnMessageRecord.UniqueId = "d64ed7ef-2107-9464-b9da-ea706fb2c2b4";
ReturnMessageRecord.init();
return ReturnMessageRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.ReturnMessageRecord = ReturnMessageRecord;

});
define("OutSystemsCharts.model$ReturnMessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ReturnMessageRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ReturnMessageRecordList = (function (_super) {
__extends(ReturnMessageRecordList, _super);
function ReturnMessageRecordList(defaults) {
_super.apply(this, arguments);
}
ReturnMessageRecordList.itemType = OutSystemsChartsModel.ReturnMessageRecord;
return ReturnMessageRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.ReturnMessageRecordList = ReturnMessageRecordList;

});
define("OutSystemsCharts.model$SeriesEvent_v1Rec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SeriesEvent_v1Rec = (function (_super) {
__extends(SeriesEvent_v1Rec, _super);
function SeriesEvent_v1Rec(defaults) {
_super.apply(this, arguments);
}
SeriesEvent_v1Rec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SeriesEvent_v1Rec.fromStructure = function (str) {
return new SeriesEvent_v1Rec(new SeriesEvent_v1Rec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SeriesEvent_v1Rec.init();
return SeriesEvent_v1Rec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.SeriesEvent_v1Rec = SeriesEvent_v1Rec;

});
define("OutSystemsCharts.model$SeriesEvent_v1List", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$SeriesEvent_v1Rec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SeriesEvent_v1List = (function (_super) {
__extends(SeriesEvent_v1List, _super);
function SeriesEvent_v1List(defaults) {
_super.apply(this, arguments);
}
SeriesEvent_v1List.itemType = OutSystemsChartsModel.SeriesEvent_v1Rec;
return SeriesEvent_v1List;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.SeriesEvent_v1List = SeriesEvent_v1List;

});
define("OutSystemsCharts.model$PropertyValueList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$PropertyValueRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var PropertyValueList = (function (_super) {
__extends(PropertyValueList, _super);
function PropertyValueList(defaults) {
_super.apply(this, arguments);
}
PropertyValueList.itemType = OutSystemsChartsModel.PropertyValueRec;
return PropertyValueList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.PropertyValueList = PropertyValueList;

});
define("OutSystemsCharts.model$LegendLayoutRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var LegendLayoutRec = (function (_super) {
__extends(LegendLayoutRec, _super);
function LegendLayoutRec(defaults) {
_super.apply(this, arguments);
}
LegendLayoutRec.attributesToDeclare = function () {
return [
this.attr("Layout", "layoutAttr", "Layout", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LegendLayoutRec.fromStructure = function (str) {
return new LegendLayoutRec(new LegendLayoutRec.RecordClass({
layoutAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LegendLayoutRec.init();
return LegendLayoutRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.LegendLayoutRec = LegendLayoutRec;

});
define("OutSystemsCharts.model$LegendLayoutRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$LegendLayoutRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.LegendLayoutRecord = LegendLayoutRecord;

});
define("OutSystemsCharts.model$LegendPosition_v1Rec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var LegendPosition_v1Rec = (function (_super) {
__extends(LegendPosition_v1Rec, _super);
function LegendPosition_v1Rec(defaults) {
_super.apply(this, arguments);
}
LegendPosition_v1Rec.attributesToDeclare = function () {
return [
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
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
LegendPosition_v1Rec.init();
return LegendPosition_v1Rec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.LegendPosition_v1Rec = LegendPosition_v1Rec;

});
define("OutSystemsCharts.model$LegendPosition_v1Record", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$LegendPosition_v1Rec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.LegendPosition_v1Record = LegendPosition_v1Record;

});
define("OutSystemsCharts.model$LegendPosition_v1RecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$LegendPosition_v1Record"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var LegendPosition_v1RecordList = (function (_super) {
__extends(LegendPosition_v1RecordList, _super);
function LegendPosition_v1RecordList(defaults) {
_super.apply(this, arguments);
}
LegendPosition_v1RecordList.itemType = OutSystemsChartsModel.LegendPosition_v1Record;
return LegendPosition_v1RecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.LegendPosition_v1RecordList = LegendPosition_v1RecordList;

});
define("OutSystemsCharts.model$XAxisGridLinesStylingRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$XAxisGridLinesStylingRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.XAxisGridLinesStylingRecord = XAxisGridLinesStylingRecord;

});
define("OutSystemsCharts.model$SeriesEventRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SeriesEventRec = (function (_super) {
__extends(SeriesEventRec, _super);
function SeriesEventRec(defaults) {
_super.apply(this, arguments);
}
SeriesEventRec.attributesToDeclare = function () {
return [
this.attr("Event", "eventAttr", "Event", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SeriesEventRec.fromStructure = function (str) {
return new SeriesEventRec(new SeriesEventRec.RecordClass({
eventAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SeriesEventRec.init();
return SeriesEventRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.SeriesEventRec = SeriesEventRec;

});
define("OutSystemsCharts.model$SeriesEventList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$SeriesEventRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SeriesEventList = (function (_super) {
__extends(SeriesEventList, _super);
function SeriesEventList(defaults) {
_super.apply(this, arguments);
}
SeriesEventList.itemType = OutSystemsChartsModel.SeriesEventRec;
return SeriesEventList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.SeriesEventList = SeriesEventList;

});
define("OutSystemsCharts.model$Legacy_ChartFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_ChartFormatRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.Legacy_ChartFormatRecord = Legacy_ChartFormatRecord;

});
define("OutSystemsCharts.model$LegendLayoutRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$LegendLayoutRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var LegendLayoutRecordList = (function (_super) {
__extends(LegendLayoutRecordList, _super);
function LegendLayoutRecordList(defaults) {
_super.apply(this, arguments);
}
LegendLayoutRecordList.itemType = OutSystemsChartsModel.LegendLayoutRecord;
return LegendLayoutRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.LegendLayoutRecordList = LegendLayoutRecordList;

});
define("OutSystemsCharts.model$YAxisOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$YAxisOptionalConfigsRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var YAxisOptionalConfigsList = (function (_super) {
__extends(YAxisOptionalConfigsList, _super);
function YAxisOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
YAxisOptionalConfigsList.itemType = OutSystemsChartsModel.YAxisOptionalConfigsRec;
return YAxisOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.YAxisOptionalConfigsList = YAxisOptionalConfigsList;

});
define("OutSystemsCharts.model$XAxisValuesType_v1Rec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var XAxisValuesType_v1Rec = (function (_super) {
__extends(XAxisValuesType_v1Rec, _super);
function XAxisValuesType_v1Rec(defaults) {
_super.apply(this, arguments);
}
XAxisValuesType_v1Rec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", false, false, OS.Types.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
XAxisValuesType_v1Rec.init();
return XAxisValuesType_v1Rec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.XAxisValuesType_v1Rec = XAxisValuesType_v1Rec;

});
define("OutSystemsCharts.model$XAxisValuesType_v1Record", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$XAxisValuesType_v1Rec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var XAxisValuesType_v1Record = (function (_super) {
__extends(XAxisValuesType_v1Record, _super);
function XAxisValuesType_v1Record(defaults) {
_super.apply(this, arguments);
}
XAxisValuesType_v1Record.attributesToDeclare = function () {
return [
this.attr("XAxisValuesType_v1", "xAxisValuesType_v1Attr", "XAxisValuesType_v1", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.XAxisValuesType_v1Rec());
}, true, OutSystemsChartsModel.XAxisValuesType_v1Rec)
].concat(_super.attributesToDeclare.call(this));
};
XAxisValuesType_v1Record.fromStructure = function (str) {
return new XAxisValuesType_v1Record(new XAxisValuesType_v1Record.RecordClass({
xAxisValuesType_v1Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
XAxisValuesType_v1Record._isAnonymousRecord = true;
XAxisValuesType_v1Record.UniqueId = "700a042c-18a5-2538-bbda-09226917700a";
XAxisValuesType_v1Record.init();
return XAxisValuesType_v1Record;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.XAxisValuesType_v1Record = XAxisValuesType_v1Record;

});
define("OutSystemsCharts.model$XAxisValuesType_v1RecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$XAxisValuesType_v1Record"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var XAxisValuesType_v1RecordList = (function (_super) {
__extends(XAxisValuesType_v1RecordList, _super);
function XAxisValuesType_v1RecordList(defaults) {
_super.apply(this, arguments);
}
XAxisValuesType_v1RecordList.itemType = OutSystemsChartsModel.XAxisValuesType_v1Record;
return XAxisValuesType_v1RecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.XAxisValuesType_v1RecordList = XAxisValuesType_v1RecordList;

});
define("OutSystemsCharts.model$XAxisTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var XAxisTypeRec = (function (_super) {
__extends(XAxisTypeRec, _super);
function XAxisTypeRec(defaults) {
_super.apply(this, arguments);
}
XAxisTypeRec.attributesToDeclare = function () {
return [
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
XAxisTypeRec.init();
return XAxisTypeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.XAxisTypeRec = XAxisTypeRec;

});
define("OutSystemsCharts.model$XAxisTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$XAxisTypeRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var XAxisTypeRecord = (function (_super) {
__extends(XAxisTypeRecord, _super);
function XAxisTypeRecord(defaults) {
_super.apply(this, arguments);
}
XAxisTypeRecord.attributesToDeclare = function () {
return [
this.attr("XAxisType", "xAxisTypeAttr", "XAxisType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.XAxisTypeRec());
}, true, OutSystemsChartsModel.XAxisTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
XAxisTypeRecord.fromStructure = function (str) {
return new XAxisTypeRecord(new XAxisTypeRecord.RecordClass({
xAxisTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
XAxisTypeRecord._isAnonymousRecord = true;
XAxisTypeRecord.UniqueId = "ace3a46b-ceb2-ccb5-db97-f9bdb5d49f20";
XAxisTypeRecord.init();
return XAxisTypeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.XAxisTypeRecord = XAxisTypeRecord;

});
define("OutSystemsCharts.model$XAxisTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$XAxisTypeRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var XAxisTypeRecordList = (function (_super) {
__extends(XAxisTypeRecordList, _super);
function XAxisTypeRecordList(defaults) {
_super.apply(this, arguments);
}
XAxisTypeRecordList.itemType = OutSystemsChartsModel.XAxisTypeRecord;
return XAxisTypeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.XAxisTypeRecordList = XAxisTypeRecordList;

});
define("OutSystemsCharts.model$DataPointRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var DataPointRec = (function (_super) {
__extends(DataPointRec, _super);
function DataPointRec(defaults) {
_super.apply(this, arguments);
}
DataPointRec.attributesToDeclare = function () {
return [
this.attr("Value", "valueAttr", "Value", true, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("SeriesName", "seriesNameAttr", "SeriesName", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Color", "colorAttr", "Color", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Tooltip", "tooltipAttr", "Tooltip", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DataPointRec.init();
return DataPointRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.DataPointRec = DataPointRec;

});
define("OutSystemsCharts.model$SeriesStylingOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$SeriesStylingOptionalConfigsRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.SeriesStylingOptionalConfigsRecord = SeriesStylingOptionalConfigsRecord;

});
define("OutSystemsCharts.model$StackingType_v1Record", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$StackingType_v1Rec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.StackingType_v1Record = StackingType_v1Record;

});
define("OutSystemsCharts.model$AxisTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$AxisTypeRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var AxisTypeList = (function (_super) {
__extends(AxisTypeList, _super);
function AxisTypeList(defaults) {
_super.apply(this, arguments);
}
AxisTypeList.itemType = OutSystemsChartsModel.AxisTypeRec;
return AxisTypeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.AxisTypeList = AxisTypeList;

});
define("OutSystemsCharts.model$StackingType_v1RecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$StackingType_v1Record"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var StackingType_v1RecordList = (function (_super) {
__extends(StackingType_v1RecordList, _super);
function StackingType_v1RecordList(defaults) {
_super.apply(this, arguments);
}
StackingType_v1RecordList.itemType = OutSystemsChartsModel.StackingType_v1Record;
return StackingType_v1RecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.StackingType_v1RecordList = StackingType_v1RecordList;

});
define("OutSystemsCharts.model$XAxisOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$XAxisOptionalConfigsRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var XAxisOptionalConfigsList = (function (_super) {
__extends(XAxisOptionalConfigsList, _super);
function XAxisOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
XAxisOptionalConfigsList.itemType = OutSystemsChartsModel.XAxisOptionalConfigsRec;
return XAxisOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.XAxisOptionalConfigsList = XAxisOptionalConfigsList;

});
define("OutSystemsCharts.model$ChartRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ChartRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ChartRecord = (function (_super) {
__extends(ChartRecord, _super);
function ChartRecord(defaults) {
_super.apply(this, arguments);
}
ChartRecord.attributesToDeclare = function () {
return [
this.attr("Chart", "chartAttr", "Chart", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ChartRec());
}, true, OutSystemsChartsModel.ChartRec)
].concat(_super.attributesToDeclare.call(this));
};
ChartRecord.fromStructure = function (str) {
return new ChartRecord(new ChartRecord.RecordClass({
chartAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ChartRecord._isAnonymousRecord = true;
ChartRecord.UniqueId = "76c0cdc9-72cd-99ba-5628-cbffcee3234a";
ChartRecord.init();
return ChartRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.ChartRecord = ChartRecord;

});
define("OutSystemsCharts.model$ChartRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ChartRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ChartRecordList = (function (_super) {
__extends(ChartRecordList, _super);
function ChartRecordList(defaults) {
_super.apply(this, arguments);
}
ChartRecordList.itemType = OutSystemsChartsModel.ChartRecord;
return ChartRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.ChartRecordList = ChartRecordList;

});
define("OutSystemsCharts.model$Legacy_XAxisFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_XAxisFormatRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.Legacy_XAxisFormatRecord = Legacy_XAxisFormatRecord;

});
define("OutSystemsCharts.model$Legacy_ChartRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_ChartRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_ChartRecord = (function (_super) {
__extends(Legacy_ChartRecord, _super);
function Legacy_ChartRecord(defaults) {
_super.apply(this, arguments);
}
Legacy_ChartRecord.attributesToDeclare = function () {
return [
this.attr("Legacy_Chart", "legacy_ChartAttr", "Legacy_Chart", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.Legacy_ChartRec());
}, true, OutSystemsChartsModel.Legacy_ChartRec)
].concat(_super.attributesToDeclare.call(this));
};
Legacy_ChartRecord.fromStructure = function (str) {
return new Legacy_ChartRecord(new Legacy_ChartRecord.RecordClass({
legacy_ChartAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Legacy_ChartRecord._isAnonymousRecord = true;
Legacy_ChartRecord.UniqueId = "60c0eb96-7674-6216-236a-33a6fde51bea";
Legacy_ChartRecord.init();
return Legacy_ChartRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.Legacy_ChartRecord = Legacy_ChartRecord;

});
define("OutSystemsCharts.model$Legacy_ChartRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_ChartRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_ChartRecordList = (function (_super) {
__extends(Legacy_ChartRecordList, _super);
function Legacy_ChartRecordList(defaults) {
_super.apply(this, arguments);
}
Legacy_ChartRecordList.itemType = OutSystemsChartsModel.Legacy_ChartRecord;
return Legacy_ChartRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.Legacy_ChartRecordList = Legacy_ChartRecordList;

});
define("OutSystemsCharts.model$OSChartVersionRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var OSChartVersionRec = (function (_super) {
__extends(OSChartVersionRec, _super);
function OSChartVersionRec(defaults) {
_super.apply(this, arguments);
}
OSChartVersionRec.attributesToDeclare = function () {
return [
this.attr("Version", "versionAttr", "Version", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
OSChartVersionRec.fromStructure = function (str) {
return new OSChartVersionRec(new OSChartVersionRec.RecordClass({
versionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OSChartVersionRec.init();
return OSChartVersionRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.OSChartVersionRec = OSChartVersionRec;

});
define("OutSystemsCharts.model$YAxisGridLinesStylingList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$YAxisGridLinesStylingRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var YAxisGridLinesStylingList = (function (_super) {
__extends(YAxisGridLinesStylingList, _super);
function YAxisGridLinesStylingList(defaults) {
_super.apply(this, arguments);
}
YAxisGridLinesStylingList.itemType = OutSystemsChartsModel.YAxisGridLinesStylingRec;
return YAxisGridLinesStylingList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.YAxisGridLinesStylingList = YAxisGridLinesStylingList;

});
define("OutSystemsCharts.model$SeriesStylingRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SeriesStylingRec = (function (_super) {
__extends(SeriesStylingRec, _super);
function SeriesStylingRec(defaults) {
_super.apply(this, arguments);
}
SeriesStylingRec.attributesToDeclare = function () {
return [
this.attr("FillColor", "fillColorAttr", "FillColor", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("LineColor", "lineColorAttr", "LineColor", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("LineWidth", "lineWidthAttr", "LineWidth", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Opacity", "opacityAttr", "Opacity", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SeriesStylingRec.init();
return SeriesStylingRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.SeriesStylingRec = SeriesStylingRec;

});
define("OutSystemsCharts.model$SeriesStylingList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$SeriesStylingRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SeriesStylingList = (function (_super) {
__extends(SeriesStylingList, _super);
function SeriesStylingList(defaults) {
_super.apply(this, arguments);
}
SeriesStylingList.itemType = OutSystemsChartsModel.SeriesStylingRec;
return SeriesStylingList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.SeriesStylingList = SeriesStylingList;

});
define("OutSystemsCharts.model$LegendInternalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var LegendInternalConfigsRec = (function (_super) {
__extends(LegendInternalConfigsRec, _super);
function LegendInternalConfigsRec(defaults) {
_super.apply(this, arguments);
}
LegendInternalConfigsRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Visible", "visibleAttr", "Visible", false, false, OS.Types.Boolean, function () {
return true;
}, true), 
this.attr("Position", "positionAttr", "Position", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Layout", "layoutAttr", "Layout", false, false, OS.Types.Text, function () {
return OutSystemsChartsModel.staticEntities.legendLayout.horizontal;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("BackgroundColor", "backgroundColorAttr", "BackgroundColor", true, false, OS.Types.Text, function () {
return "transparent";
}, true), 
this.attr("ItemsDistance", "itemsDistanceAttr", "ItemsDistance", true, false, OS.Types.Integer, function () {
return 20;
}, true), 
this.attr("Floating", "floatingAttr", "Floating", true, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LegendInternalConfigsRec.init();
return LegendInternalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.LegendInternalConfigsRec = LegendInternalConfigsRec;

});
define("OutSystemsCharts.model$XAxisOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$XAxisOptionalConfigsRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.XAxisOptionalConfigsRecord = XAxisOptionalConfigsRecord;

});
define("OutSystemsCharts.model$XAxisOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$XAxisOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var XAxisOptionalConfigsRecordList = (function (_super) {
__extends(XAxisOptionalConfigsRecordList, _super);
function XAxisOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
XAxisOptionalConfigsRecordList.itemType = OutSystemsChartsModel.XAxisOptionalConfigsRecord;
return XAxisOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.XAxisOptionalConfigsRecordList = XAxisOptionalConfigsRecordList;

});
define("OutSystemsCharts.model$Legacy_advancedFormat_JSONRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_advancedFormat_JSONRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_advancedFormat_JSONRecord = (function (_super) {
__extends(Legacy_advancedFormat_JSONRecord, _super);
function Legacy_advancedFormat_JSONRecord(defaults) {
_super.apply(this, arguments);
}
Legacy_advancedFormat_JSONRecord.attributesToDeclare = function () {
return [
this.attr("Legacy_advancedFormat_JSON", "legacy_advancedFormat_JSONAttr", "Legacy_advancedFormat_JSON", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.Legacy_advancedFormat_JSONRec());
}, true, OutSystemsChartsModel.Legacy_advancedFormat_JSONRec)
].concat(_super.attributesToDeclare.call(this));
};
Legacy_advancedFormat_JSONRecord.fromStructure = function (str) {
return new Legacy_advancedFormat_JSONRecord(new Legacy_advancedFormat_JSONRecord.RecordClass({
legacy_advancedFormat_JSONAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Legacy_advancedFormat_JSONRecord._isAnonymousRecord = true;
Legacy_advancedFormat_JSONRecord.UniqueId = "4c0c0041-9258-d867-de6c-9a39d39cbd40";
Legacy_advancedFormat_JSONRecord.init();
return Legacy_advancedFormat_JSONRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.Legacy_advancedFormat_JSONRecord = Legacy_advancedFormat_JSONRecord;

});
define("OutSystemsCharts.model$ErrorMessageRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.ErrorMessageRec = ErrorMessageRec;

});
define("OutSystemsCharts.model$SeriesTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$SeriesTypeRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.SeriesTypeRecord = SeriesTypeRecord;

});
define("OutSystemsCharts.model$SeriesTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$SeriesTypeRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SeriesTypeRecordList = (function (_super) {
__extends(SeriesTypeRecordList, _super);
function SeriesTypeRecordList(defaults) {
_super.apply(this, arguments);
}
SeriesTypeRecordList.itemType = OutSystemsChartsModel.SeriesTypeRecord;
return SeriesTypeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.SeriesTypeRecordList = SeriesTypeRecordList;

});
define("OutSystemsCharts.model$Legacy_DataPointRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_DataPointRec = (function (_super) {
__extends(Legacy_DataPointRec, _super);
function Legacy_DataPointRec(defaults) {
_super.apply(this, arguments);
}
Legacy_DataPointRec.attributesToDeclare = function () {
return [
this.attr("Label", "labelAttr", "Label", true, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", true, false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("SeriesName", "seriesNameAttr", "SeriesName", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Tooltip", "tooltipAttr", "Tooltip", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Color", "colorAttr", "Color", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Legacy_DataPointRec.init();
return Legacy_DataPointRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.Legacy_DataPointRec = Legacy_DataPointRec;

});
define("OutSystemsCharts.model$Legacy_DataPointList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_DataPointRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_DataPointList = (function (_super) {
__extends(Legacy_DataPointList, _super);
function Legacy_DataPointList(defaults) {
_super.apply(this, arguments);
}
Legacy_DataPointList.itemType = OutSystemsChartsModel.Legacy_DataPointRec;
return Legacy_DataPointList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.Legacy_DataPointList = Legacy_DataPointList;

});
define("OutSystemsCharts.model$AxisValuesTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var AxisValuesTypeRec = (function (_super) {
__extends(AxisValuesTypeRec, _super);
function AxisValuesTypeRec(defaults) {
_super.apply(this, arguments);
}
AxisValuesTypeRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AxisValuesTypeRec.fromStructure = function (str) {
return new AxisValuesTypeRec(new AxisValuesTypeRec.RecordClass({
typeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AxisValuesTypeRec.init();
return AxisValuesTypeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.AxisValuesTypeRec = AxisValuesTypeRec;

});
define("OutSystemsCharts.model$AxisValuesTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$AxisValuesTypeRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.AxisValuesTypeRecord = AxisValuesTypeRecord;

});
define("OutSystemsCharts.model$OSChartVersionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$OSChartVersionRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var OSChartVersionRecord = (function (_super) {
__extends(OSChartVersionRecord, _super);
function OSChartVersionRecord(defaults) {
_super.apply(this, arguments);
}
OSChartVersionRecord.attributesToDeclare = function () {
return [
this.attr("OSChartVersion", "oSChartVersionAttr", "OSChartVersion", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.OSChartVersionRec());
}, true, OutSystemsChartsModel.OSChartVersionRec)
].concat(_super.attributesToDeclare.call(this));
};
OSChartVersionRecord.fromStructure = function (str) {
return new OSChartVersionRecord(new OSChartVersionRecord.RecordClass({
oSChartVersionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OSChartVersionRecord._isAnonymousRecord = true;
OSChartVersionRecord.UniqueId = "c9cf2667-636b-777a-bbc2-88cec73d1375";
OSChartVersionRecord.init();
return OSChartVersionRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.OSChartVersionRecord = OSChartVersionRecord;

});
define("OutSystemsCharts.model$OSChartVersionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$OSChartVersionRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var OSChartVersionRecordList = (function (_super) {
__extends(OSChartVersionRecordList, _super);
function OSChartVersionRecordList(defaults) {
_super.apply(this, arguments);
}
OSChartVersionRecordList.itemType = OutSystemsChartsModel.OSChartVersionRecord;
return OSChartVersionRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.OSChartVersionRecordList = OSChartVersionRecordList;

});
define("OutSystemsCharts.model$StackingType_v1List", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$StackingType_v1Rec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var StackingType_v1List = (function (_super) {
__extends(StackingType_v1List, _super);
function StackingType_v1List(defaults) {
_super.apply(this, arguments);
}
StackingType_v1List.itemType = OutSystemsChartsModel.StackingType_v1Rec;
return StackingType_v1List;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.StackingType_v1List = StackingType_v1List;

});
define("OutSystemsCharts.model$LegendPosition_v1List", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$LegendPosition_v1Rec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var LegendPosition_v1List = (function (_super) {
__extends(LegendPosition_v1List, _super);
function LegendPosition_v1List(defaults) {
_super.apply(this, arguments);
}
LegendPosition_v1List.itemType = OutSystemsChartsModel.LegendPosition_v1Rec;
return LegendPosition_v1List;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.LegendPosition_v1List = LegendPosition_v1List;

});
define("OutSystemsCharts.model$SeriesStylingRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$SeriesStylingRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.SeriesStylingRecord = SeriesStylingRecord;

});
define("OutSystemsCharts.model$SeriesStylingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$SeriesStylingRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SeriesStylingRecordList = (function (_super) {
__extends(SeriesStylingRecordList, _super);
function SeriesStylingRecordList(defaults) {
_super.apply(this, arguments);
}
SeriesStylingRecordList.itemType = OutSystemsChartsModel.SeriesStylingRecord;
return SeriesStylingRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.SeriesStylingRecordList = SeriesStylingRecordList;

});
define("OutSystemsCharts.model$LegendLayoutList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$LegendLayoutRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var LegendLayoutList = (function (_super) {
__extends(LegendLayoutList, _super);
function LegendLayoutList(defaults) {
_super.apply(this, arguments);
}
LegendLayoutList.itemType = OutSystemsChartsModel.LegendLayoutRec;
return LegendLayoutList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.LegendLayoutList = LegendLayoutList;

});
define("OutSystemsCharts.model$ChartEventRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ChartEventRec = (function (_super) {
__extends(ChartEventRec, _super);
function ChartEventRec(defaults) {
_super.apply(this, arguments);
}
ChartEventRec.attributesToDeclare = function () {
return [
this.attr("Event", "eventAttr", "Event", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ChartEventRec.fromStructure = function (str) {
return new ChartEventRec(new ChartEventRec.RecordClass({
eventAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ChartEventRec.init();
return ChartEventRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.ChartEventRec = ChartEventRec;

});
define("OutSystemsCharts.model$ChartEventRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ChartEventRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ChartEventRecord = (function (_super) {
__extends(ChartEventRecord, _super);
function ChartEventRecord(defaults) {
_super.apply(this, arguments);
}
ChartEventRecord.attributesToDeclare = function () {
return [
this.attr("ChartEvent", "chartEventAttr", "ChartEvent", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ChartEventRec());
}, true, OutSystemsChartsModel.ChartEventRec)
].concat(_super.attributesToDeclare.call(this));
};
ChartEventRecord.fromStructure = function (str) {
return new ChartEventRecord(new ChartEventRecord.RecordClass({
chartEventAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ChartEventRecord._isAnonymousRecord = true;
ChartEventRecord.UniqueId = "a84b998a-9c71-257a-3902-15ab520c29fb";
ChartEventRecord.init();
return ChartEventRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.ChartEventRecord = ChartEventRecord;

});
define("OutSystemsCharts.model$ChartEventRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ChartEventRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ChartEventRecordList = (function (_super) {
__extends(ChartEventRecordList, _super);
function ChartEventRecordList(defaults) {
_super.apply(this, arguments);
}
ChartEventRecordList.itemType = OutSystemsChartsModel.ChartEventRecord;
return ChartEventRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.ChartEventRecordList = ChartEventRecordList;

});
define("OutSystemsCharts.model$InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$InternalConfigRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var InternalConfigList = (function (_super) {
__extends(InternalConfigList, _super);
function InternalConfigList(defaults) {
_super.apply(this, arguments);
}
InternalConfigList.itemType = OutSystemsChartsModel.InternalConfigRec;
return InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.InternalConfigList = InternalConfigList;

});
define("OutSystemsCharts.model$SerieStylingInternalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$SerieStylingInternalConfigsRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SerieStylingInternalConfigsRecordList = (function (_super) {
__extends(SerieStylingInternalConfigsRecordList, _super);
function SerieStylingInternalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
SerieStylingInternalConfigsRecordList.itemType = OutSystemsChartsModel.SerieStylingInternalConfigsRecord;
return SerieStylingInternalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.SerieStylingInternalConfigsRecordList = SerieStylingInternalConfigsRecordList;

});
define("OutSystemsCharts.model$Legacy_AdvancedDataSeriesFormatRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_AdvancedDataSeriesFormatRec = (function (_super) {
__extends(Legacy_AdvancedDataSeriesFormatRec, _super);
function Legacy_AdvancedDataSeriesFormatRec(defaults) {
_super.apply(this, arguments);
}
Legacy_AdvancedDataSeriesFormatRec.attributesToDeclare = function () {
return [
this.attr("SeriesName", "seriesNameAttr", "SeriesName", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("DataSeriesJSON", "dataSeriesJSONAttr", "DataSeriesJSON", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Legacy_AdvancedDataSeriesFormatRec.init();
return Legacy_AdvancedDataSeriesFormatRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.Legacy_AdvancedDataSeriesFormatRec = Legacy_AdvancedDataSeriesFormatRec;

});
define("OutSystemsCharts.model$Legacy_AdvancedDataSeriesFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_AdvancedDataSeriesFormatRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.Legacy_AdvancedDataSeriesFormatRecord = Legacy_AdvancedDataSeriesFormatRecord;

});
define("OutSystemsCharts.model$Legacy_AdvancedDataSeriesFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_AdvancedDataSeriesFormatRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_AdvancedDataSeriesFormatRecordList = (function (_super) {
__extends(Legacy_AdvancedDataSeriesFormatRecordList, _super);
function Legacy_AdvancedDataSeriesFormatRecordList(defaults) {
_super.apply(this, arguments);
}
Legacy_AdvancedDataSeriesFormatRecordList.itemType = OutSystemsChartsModel.Legacy_AdvancedDataSeriesFormatRecord;
return Legacy_AdvancedDataSeriesFormatRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.Legacy_AdvancedDataSeriesFormatRecordList = Legacy_AdvancedDataSeriesFormatRecordList;

});
define("OutSystemsCharts.model$SeriesEvent_v1Record", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$SeriesEvent_v1Rec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SeriesEvent_v1Record = (function (_super) {
__extends(SeriesEvent_v1Record, _super);
function SeriesEvent_v1Record(defaults) {
_super.apply(this, arguments);
}
SeriesEvent_v1Record.attributesToDeclare = function () {
return [
this.attr("SeriesEvent_v1", "seriesEvent_v1Attr", "SeriesEvent_v1", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.SeriesEvent_v1Rec());
}, true, OutSystemsChartsModel.SeriesEvent_v1Rec)
].concat(_super.attributesToDeclare.call(this));
};
SeriesEvent_v1Record.fromStructure = function (str) {
return new SeriesEvent_v1Record(new SeriesEvent_v1Record.RecordClass({
seriesEvent_v1Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SeriesEvent_v1Record._isAnonymousRecord = true;
SeriesEvent_v1Record.UniqueId = "6e662d2b-0dd9-4797-6d5c-b296cc0f82e2";
SeriesEvent_v1Record.init();
return SeriesEvent_v1Record;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.SeriesEvent_v1Record = SeriesEvent_v1Record;

});
define("OutSystemsCharts.model$SeriesEvent_v1RecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$SeriesEvent_v1Record"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SeriesEvent_v1RecordList = (function (_super) {
__extends(SeriesEvent_v1RecordList, _super);
function SeriesEvent_v1RecordList(defaults) {
_super.apply(this, arguments);
}
SeriesEvent_v1RecordList.itemType = OutSystemsChartsModel.SeriesEvent_v1Record;
return SeriesEvent_v1RecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.SeriesEvent_v1RecordList = SeriesEvent_v1RecordList;

});
define("OutSystemsCharts.model$DataPointRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$DataPointRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var DataPointRecord = (function (_super) {
__extends(DataPointRecord, _super);
function DataPointRecord(defaults) {
_super.apply(this, arguments);
}
DataPointRecord.attributesToDeclare = function () {
return [
this.attr("DataPoint", "dataPointAttr", "DataPoint", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.DataPointRec());
}, true, OutSystemsChartsModel.DataPointRec)
].concat(_super.attributesToDeclare.call(this));
};
DataPointRecord.fromStructure = function (str) {
return new DataPointRecord(new DataPointRecord.RecordClass({
dataPointAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataPointRecord._isAnonymousRecord = true;
DataPointRecord.UniqueId = "87ab3d0b-8093-8e4e-95dc-b616c8a9232e";
DataPointRecord.init();
return DataPointRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.DataPointRecord = DataPointRecord;

});
define("OutSystemsCharts.model$DataPointRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$DataPointRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var DataPointRecordList = (function (_super) {
__extends(DataPointRecordList, _super);
function DataPointRecordList(defaults) {
_super.apply(this, arguments);
}
DataPointRecordList.itemType = OutSystemsChartsModel.DataPointRecord;
return DataPointRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.DataPointRecordList = DataPointRecordList;

});
define("OutSystemsCharts.model$Legacy_DataPointRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_DataPointRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.Legacy_DataPointRecord = Legacy_DataPointRecord;

});
define("OutSystemsCharts.model$ErrorMessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ErrorMessageRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ErrorMessageRecord = (function (_super) {
__extends(ErrorMessageRecord, _super);
function ErrorMessageRecord(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRecord.attributesToDeclare = function () {
return [
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ErrorMessageRec());
}, true, OutSystemsChartsModel.ErrorMessageRec)
].concat(_super.attributesToDeclare.call(this));
};
ErrorMessageRecord.fromStructure = function (str) {
return new ErrorMessageRecord(new ErrorMessageRecord.RecordClass({
errorMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ErrorMessageRecord._isAnonymousRecord = true;
ErrorMessageRecord.UniqueId = "6d8d0ab8-b7a8-6a24-d5f4-b91570ad61d9";
ErrorMessageRecord.init();
return ErrorMessageRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.ErrorMessageRecord = ErrorMessageRecord;

});
define("OutSystemsCharts.model$ErrorMessageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ErrorMessageRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ErrorMessageList = (function (_super) {
__extends(ErrorMessageList, _super);
function ErrorMessageList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageList.itemType = OutSystemsChartsModel.ErrorMessageRec;
return ErrorMessageList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.ErrorMessageList = ErrorMessageList;

});
define("OutSystemsCharts.model$LegendInternalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$LegendInternalConfigsRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var LegendInternalConfigsList = (function (_super) {
__extends(LegendInternalConfigsList, _super);
function LegendInternalConfigsList(defaults) {
_super.apply(this, arguments);
}
LegendInternalConfigsList.itemType = OutSystemsChartsModel.LegendInternalConfigsRec;
return LegendInternalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.LegendInternalConfigsList = LegendInternalConfigsList;

});
define("OutSystemsCharts.model$Legacy_DataPointRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_DataPointRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_DataPointRecordList = (function (_super) {
__extends(Legacy_DataPointRecordList, _super);
function Legacy_DataPointRecordList(defaults) {
_super.apply(this, arguments);
}
Legacy_DataPointRecordList.itemType = OutSystemsChartsModel.Legacy_DataPointRecord;
return Legacy_DataPointRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.Legacy_DataPointRecordList = Legacy_DataPointRecordList;

});
define("OutSystemsCharts.model$Legacy_advancedFormat_JSONList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_advancedFormat_JSONRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_advancedFormat_JSONList = (function (_super) {
__extends(Legacy_advancedFormat_JSONList, _super);
function Legacy_advancedFormat_JSONList(defaults) {
_super.apply(this, arguments);
}
Legacy_advancedFormat_JSONList.itemType = OutSystemsChartsModel.Legacy_advancedFormat_JSONRec;
return Legacy_advancedFormat_JSONList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.Legacy_advancedFormat_JSONList = Legacy_advancedFormat_JSONList;

});
define("OutSystemsCharts.model$ValuesTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ValuesTypeRec = (function (_super) {
__extends(ValuesTypeRec, _super);
function ValuesTypeRec(defaults) {
_super.apply(this, arguments);
}
ValuesTypeRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ValuesTypeRec.fromStructure = function (str) {
return new ValuesTypeRec(new ValuesTypeRec.RecordClass({
typeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ValuesTypeRec.init();
return ValuesTypeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.ValuesTypeRec = ValuesTypeRec;

});
define("OutSystemsCharts.model$Legacy_AdvancedDataPointFormatRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_DataPointRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_AdvancedDataPointFormatRec = (function (_super) {
__extends(Legacy_AdvancedDataPointFormatRec, _super);
function Legacy_AdvancedDataPointFormatRec(defaults) {
_super.apply(this, arguments);
}
Legacy_AdvancedDataPointFormatRec.attributesToDeclare = function () {
return [
this.attr("DataPoint", "dataPointAttr", "DataPoint", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.Legacy_DataPointRec());
}, true, OutSystemsChartsModel.Legacy_DataPointRec), 
this.attr("DataPointJSON", "dataPointJSONAttr", "DataPointJSON", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Legacy_AdvancedDataPointFormatRec.init();
return Legacy_AdvancedDataPointFormatRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.Legacy_AdvancedDataPointFormatRec = Legacy_AdvancedDataPointFormatRec;

});
define("OutSystemsCharts.model$Legacy_AdvancedDataPointFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_AdvancedDataPointFormatRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_AdvancedDataPointFormatList = (function (_super) {
__extends(Legacy_AdvancedDataPointFormatList, _super);
function Legacy_AdvancedDataPointFormatList(defaults) {
_super.apply(this, arguments);
}
Legacy_AdvancedDataPointFormatList.itemType = OutSystemsChartsModel.Legacy_AdvancedDataPointFormatRec;
return Legacy_AdvancedDataPointFormatList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.Legacy_AdvancedDataPointFormatList = Legacy_AdvancedDataPointFormatList;

});
define("OutSystemsCharts.model$StackingTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$StackingTypeRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.StackingTypeRecord = StackingTypeRecord;

});
define("OutSystemsCharts.model$StackingTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$StackingTypeRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var StackingTypeRecordList = (function (_super) {
__extends(StackingTypeRecordList, _super);
function StackingTypeRecordList(defaults) {
_super.apply(this, arguments);
}
StackingTypeRecordList.itemType = OutSystemsChartsModel.StackingTypeRecord;
return StackingTypeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.StackingTypeRecordList = StackingTypeRecordList;

});
define("OutSystemsCharts.model$OptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var OptionalConfigsRec = (function (_super) {
__extends(OptionalConfigsRec, _super);
function OptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
OptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("DisableLoadingAnimation", "disableLoadingAnimationAttr", "disableLoadingAnimation", false, false, OS.Types.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
OptionalConfigsRec.fromStructure = function (str) {
return new OptionalConfigsRec(new OptionalConfigsRec.RecordClass({
disableLoadingAnimationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OptionalConfigsRec.init();
return OptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.OptionalConfigsRec = OptionalConfigsRec;

});
define("OutSystemsCharts.model$OptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$OptionalConfigsRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.OptionalConfigsRecord = OptionalConfigsRecord;

});
define("OutSystemsCharts.model$OptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$OptionalConfigsRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var OptionalConfigsRecordList = (function (_super) {
__extends(OptionalConfigsRecordList, _super);
function OptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
OptionalConfigsRecordList.itemType = OutSystemsChartsModel.OptionalConfigsRecord;
return OptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.OptionalConfigsRecordList = OptionalConfigsRecordList;

});
define("OutSystemsCharts.model$XAxisValuesType_v1List", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$XAxisValuesType_v1Rec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var XAxisValuesType_v1List = (function (_super) {
__extends(XAxisValuesType_v1List, _super);
function XAxisValuesType_v1List(defaults) {
_super.apply(this, arguments);
}
XAxisValuesType_v1List.itemType = OutSystemsChartsModel.XAxisValuesType_v1Rec;
return XAxisValuesType_v1List;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.XAxisValuesType_v1List = XAxisValuesType_v1List;

});
define("OutSystemsCharts.model$ChartProviderRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ChartProviderRec = (function (_super) {
__extends(ChartProviderRec, _super);
function ChartProviderRec(defaults) {
_super.apply(this, arguments);
}
ChartProviderRec.attributesToDeclare = function () {
return [
this.attr("ProviderName", "providerNameAttr", "ProviderName", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ChartProviderRec.fromStructure = function (str) {
return new ChartProviderRec(new ChartProviderRec.RecordClass({
providerNameAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ChartProviderRec.init();
return ChartProviderRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.ChartProviderRec = ChartProviderRec;

});
define("OutSystemsCharts.model$DataPointList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$DataPointRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var DataPointList = (function (_super) {
__extends(DataPointList, _super);
function DataPointList(defaults) {
_super.apply(this, arguments);
}
DataPointList.itemType = OutSystemsChartsModel.DataPointRec;
return DataPointList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.DataPointList = DataPointList;

});
define("OutSystemsCharts.model$AxisInternalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$AxisInternalConfigsRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var AxisInternalConfigsRecord = (function (_super) {
__extends(AxisInternalConfigsRecord, _super);
function AxisInternalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
AxisInternalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("AxisInternalConfigs", "axisInternalConfigsAttr", "AxisInternalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.AxisInternalConfigsRec());
}, true, OutSystemsChartsModel.AxisInternalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
AxisInternalConfigsRecord.fromStructure = function (str) {
return new AxisInternalConfigsRecord(new AxisInternalConfigsRecord.RecordClass({
axisInternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AxisInternalConfigsRecord._isAnonymousRecord = true;
AxisInternalConfigsRecord.UniqueId = "7ff33d13-6acf-80fa-7561-894fec32ad32";
AxisInternalConfigsRecord.init();
return AxisInternalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.AxisInternalConfigsRecord = AxisInternalConfigsRecord;

});
define("OutSystemsCharts.model$AxisTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$AxisTypeRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var AxisTypeRecord = (function (_super) {
__extends(AxisTypeRecord, _super);
function AxisTypeRecord(defaults) {
_super.apply(this, arguments);
}
AxisTypeRecord.attributesToDeclare = function () {
return [
this.attr("AxisType", "axisTypeAttr", "AxisType", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.AxisTypeRec());
}, true, OutSystemsChartsModel.AxisTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
AxisTypeRecord.fromStructure = function (str) {
return new AxisTypeRecord(new AxisTypeRecord.RecordClass({
axisTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AxisTypeRecord._isAnonymousRecord = true;
AxisTypeRecord.UniqueId = "83e1e05c-d8ef-0280-76ae-de930ba833d7";
AxisTypeRecord.init();
return AxisTypeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.AxisTypeRecord = AxisTypeRecord;

});
define("OutSystemsCharts.model$OSChartVersionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$OSChartVersionRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var OSChartVersionList = (function (_super) {
__extends(OSChartVersionList, _super);
function OSChartVersionList(defaults) {
_super.apply(this, arguments);
}
OSChartVersionList.itemType = OutSystemsChartsModel.OSChartVersionRec;
return OSChartVersionList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.OSChartVersionList = OSChartVersionList;

});
define("OutSystemsCharts.model$AxisValuesTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$AxisValuesTypeRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var AxisValuesTypeRecordList = (function (_super) {
__extends(AxisValuesTypeRecordList, _super);
function AxisValuesTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AxisValuesTypeRecordList.itemType = OutSystemsChartsModel.AxisValuesTypeRecord;
return AxisValuesTypeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.AxisValuesTypeRecordList = AxisValuesTypeRecordList;

});
define("OutSystemsCharts.model$Legacy_AdvancedDataPointFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_AdvancedDataPointFormatRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.Legacy_AdvancedDataPointFormatRecord = Legacy_AdvancedDataPointFormatRecord;

});
define("OutSystemsCharts.model$Legacy_XAxisFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_XAxisFormatRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_XAxisFormatRecordList = (function (_super) {
__extends(Legacy_XAxisFormatRecordList, _super);
function Legacy_XAxisFormatRecordList(defaults) {
_super.apply(this, arguments);
}
Legacy_XAxisFormatRecordList.itemType = OutSystemsChartsModel.Legacy_XAxisFormatRecord;
return Legacy_XAxisFormatRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.Legacy_XAxisFormatRecordList = Legacy_XAxisFormatRecordList;

});
define("OutSystemsCharts.model$ChartLegendStylingList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ChartLegendStylingRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ChartLegendStylingList = (function (_super) {
__extends(ChartLegendStylingList, _super);
function ChartLegendStylingList(defaults) {
_super.apply(this, arguments);
}
ChartLegendStylingList.itemType = OutSystemsChartsModel.ChartLegendStylingRec;
return ChartLegendStylingList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.ChartLegendStylingList = ChartLegendStylingList;

});
define("OutSystemsCharts.model$SeriesTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$SeriesTypeRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SeriesTypeList = (function (_super) {
__extends(SeriesTypeList, _super);
function SeriesTypeList(defaults) {
_super.apply(this, arguments);
}
SeriesTypeList.itemType = OutSystemsChartsModel.SeriesTypeRec;
return SeriesTypeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.SeriesTypeList = SeriesTypeList;

});
define("OutSystemsCharts.model$ChartProviderRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ChartProviderRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ChartProviderRecord = (function (_super) {
__extends(ChartProviderRecord, _super);
function ChartProviderRecord(defaults) {
_super.apply(this, arguments);
}
ChartProviderRecord.attributesToDeclare = function () {
return [
this.attr("ChartProvider", "chartProviderAttr", "ChartProvider", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ChartProviderRec());
}, true, OutSystemsChartsModel.ChartProviderRec)
].concat(_super.attributesToDeclare.call(this));
};
ChartProviderRecord.fromStructure = function (str) {
return new ChartProviderRecord(new ChartProviderRecord.RecordClass({
chartProviderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ChartProviderRecord._isAnonymousRecord = true;
ChartProviderRecord.UniqueId = "baca360b-74d4-e655-35b8-09cab5137ca4";
ChartProviderRecord.init();
return ChartProviderRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.ChartProviderRecord = ChartProviderRecord;

});
define("OutSystemsCharts.model$ChartProviderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ChartProviderRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ChartProviderRecordList = (function (_super) {
__extends(ChartProviderRecordList, _super);
function ChartProviderRecordList(defaults) {
_super.apply(this, arguments);
}
ChartProviderRecordList.itemType = OutSystemsChartsModel.ChartProviderRecord;
return ChartProviderRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.ChartProviderRecordList = ChartProviderRecordList;

});
define("OutSystemsCharts.model$Legacy_AdvancedDataSeriesFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_AdvancedDataSeriesFormatRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_AdvancedDataSeriesFormatList = (function (_super) {
__extends(Legacy_AdvancedDataSeriesFormatList, _super);
function Legacy_AdvancedDataSeriesFormatList(defaults) {
_super.apply(this, arguments);
}
Legacy_AdvancedDataSeriesFormatList.itemType = OutSystemsChartsModel.Legacy_AdvancedDataSeriesFormatRec;
return Legacy_AdvancedDataSeriesFormatList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.Legacy_AdvancedDataSeriesFormatList = Legacy_AdvancedDataSeriesFormatList;

});
define("OutSystemsCharts.model$Legacy_AdvancedFormatRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_AdvancedDataPointFormatList", "OutSystemsCharts.model$Legacy_AdvancedDataSeriesFormatList"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_AdvancedFormatRec = (function (_super) {
__extends(Legacy_AdvancedFormatRec, _super);
function Legacy_AdvancedFormatRec(defaults) {
_super.apply(this, arguments);
}
Legacy_AdvancedFormatRec.attributesToDeclare = function () {
return [
this.attr("DataPointFormats", "dataPointFormatsAttr", "DataPointFormats", false, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.Legacy_AdvancedDataPointFormatList());
}, true, OutSystemsChartsModel.Legacy_AdvancedDataPointFormatList), 
this.attr("DataSeriesFormats", "dataSeriesFormatsAttr", "DataSeriesFormats", false, false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.Legacy_AdvancedDataSeriesFormatList());
}, true, OutSystemsChartsModel.Legacy_AdvancedDataSeriesFormatList), 
this.attr("XAxisJSON", "xAxisJSONAttr", "XAxisJSON", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("YAxisJSON", "yAxisJSONAttr", "YAxisJSON", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("HighchartsJSON", "highchartsJSONAttr", "HighchartsJSON", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Legacy_AdvancedFormatRec.init();
return Legacy_AdvancedFormatRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.Legacy_AdvancedFormatRec = Legacy_AdvancedFormatRec;

});
define("OutSystemsCharts.model$Legacy_AdvancedFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_AdvancedFormatRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.Legacy_AdvancedFormatRecord = Legacy_AdvancedFormatRecord;

});
define("OutSystemsCharts.model$Legacy_ChartFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_ChartFormatRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_ChartFormatList = (function (_super) {
__extends(Legacy_ChartFormatList, _super);
function Legacy_ChartFormatList(defaults) {
_super.apply(this, arguments);
}
Legacy_ChartFormatList.itemType = OutSystemsChartsModel.Legacy_ChartFormatRec;
return Legacy_ChartFormatList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.Legacy_ChartFormatList = Legacy_ChartFormatList;

});
define("OutSystemsCharts.model$Legacy_ChartFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_ChartFormatRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_ChartFormatRecordList = (function (_super) {
__extends(Legacy_ChartFormatRecordList, _super);
function Legacy_ChartFormatRecordList(defaults) {
_super.apply(this, arguments);
}
Legacy_ChartFormatRecordList.itemType = OutSystemsChartsModel.Legacy_ChartFormatRecord;
return Legacy_ChartFormatRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.Legacy_ChartFormatRecordList = Legacy_ChartFormatRecordList;

});
define("OutSystemsCharts.model$Legacy_YAxisFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_YAxisFormatRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.Legacy_YAxisFormatRecord = Legacy_YAxisFormatRecord;

});
define("OutSystemsCharts.model$Legacy_YAxisFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_YAxisFormatRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_YAxisFormatRecordList = (function (_super) {
__extends(Legacy_YAxisFormatRecordList, _super);
function Legacy_YAxisFormatRecordList(defaults) {
_super.apply(this, arguments);
}
Legacy_YAxisFormatRecordList.itemType = OutSystemsChartsModel.Legacy_YAxisFormatRecord;
return Legacy_YAxisFormatRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.Legacy_YAxisFormatRecordList = Legacy_YAxisFormatRecordList;

});
define("OutSystemsCharts.model$ValuesTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ValuesTypeRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.ValuesTypeRecord = ValuesTypeRecord;

});
define("OutSystemsCharts.model$ValuesTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ValuesTypeRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ValuesTypeRecordList = (function (_super) {
__extends(ValuesTypeRecordList, _super);
function ValuesTypeRecordList(defaults) {
_super.apply(this, arguments);
}
ValuesTypeRecordList.itemType = OutSystemsChartsModel.ValuesTypeRecord;
return ValuesTypeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.ValuesTypeRecordList = ValuesTypeRecordList;

});
define("OutSystemsCharts.model$ChartLegendOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ChartLegendOptionalConfigsRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ChartLegendOptionalConfigsList = (function (_super) {
__extends(ChartLegendOptionalConfigsList, _super);
function ChartLegendOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
ChartLegendOptionalConfigsList.itemType = OutSystemsChartsModel.ChartLegendOptionalConfigsRec;
return ChartLegendOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.ChartLegendOptionalConfigsList = ChartLegendOptionalConfigsList;

});
define("OutSystemsCharts.model$Legacy_AdvancedFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_AdvancedFormatRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_AdvancedFormatList = (function (_super) {
__extends(Legacy_AdvancedFormatList, _super);
function Legacy_AdvancedFormatList(defaults) {
_super.apply(this, arguments);
}
Legacy_AdvancedFormatList.itemType = OutSystemsChartsModel.Legacy_AdvancedFormatRec;
return Legacy_AdvancedFormatList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.Legacy_AdvancedFormatList = Legacy_AdvancedFormatList;

});
define("OutSystemsCharts.model$SeriesStylingMarkerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$SeriesStylingMarkerRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SeriesStylingMarkerRecordList = (function (_super) {
__extends(SeriesStylingMarkerRecordList, _super);
function SeriesStylingMarkerRecordList(defaults) {
_super.apply(this, arguments);
}
SeriesStylingMarkerRecordList.itemType = OutSystemsChartsModel.SeriesStylingMarkerRecord;
return SeriesStylingMarkerRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.SeriesStylingMarkerRecordList = SeriesStylingMarkerRecordList;

});
define("OutSystemsCharts.model$ChartLegendStylingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ChartLegendStylingRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ChartLegendStylingRecordList = (function (_super) {
__extends(ChartLegendStylingRecordList, _super);
function ChartLegendStylingRecordList(defaults) {
_super.apply(this, arguments);
}
ChartLegendStylingRecordList.itemType = OutSystemsChartsModel.ChartLegendStylingRecord;
return ChartLegendStylingRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.ChartLegendStylingRecordList = ChartLegendStylingRecordList;

});
define("OutSystemsCharts.model$YAxisGridLinesStylingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$YAxisGridLinesStylingRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var YAxisGridLinesStylingRecordList = (function (_super) {
__extends(YAxisGridLinesStylingRecordList, _super);
function YAxisGridLinesStylingRecordList(defaults) {
_super.apply(this, arguments);
}
YAxisGridLinesStylingRecordList.itemType = OutSystemsChartsModel.YAxisGridLinesStylingRecord;
return YAxisGridLinesStylingRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.YAxisGridLinesStylingRecordList = YAxisGridLinesStylingRecordList;

});
define("OutSystemsCharts.model$SeriesEventRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$SeriesEventRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SeriesEventRecord = (function (_super) {
__extends(SeriesEventRecord, _super);
function SeriesEventRecord(defaults) {
_super.apply(this, arguments);
}
SeriesEventRecord.attributesToDeclare = function () {
return [
this.attr("SeriesEvent", "seriesEventAttr", "SeriesEvent", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.SeriesEventRec());
}, true, OutSystemsChartsModel.SeriesEventRec)
].concat(_super.attributesToDeclare.call(this));
};
SeriesEventRecord.fromStructure = function (str) {
return new SeriesEventRecord(new SeriesEventRecord.RecordClass({
seriesEventAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SeriesEventRecord._isAnonymousRecord = true;
SeriesEventRecord.UniqueId = "de2d35eb-b3fe-ae70-6b53-13bdafc14f70";
SeriesEventRecord.init();
return SeriesEventRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.SeriesEventRecord = SeriesEventRecord;

});
define("OutSystemsCharts.model$SeriesEventRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$SeriesEventRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SeriesEventRecordList = (function (_super) {
__extends(SeriesEventRecordList, _super);
function SeriesEventRecordList(defaults) {
_super.apply(this, arguments);
}
SeriesEventRecordList.itemType = OutSystemsChartsModel.SeriesEventRecord;
return SeriesEventRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.SeriesEventRecordList = SeriesEventRecordList;

});
define("OutSystemsCharts.model$AxisValuesTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$AxisValuesTypeRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var AxisValuesTypeList = (function (_super) {
__extends(AxisValuesTypeList, _super);
function AxisValuesTypeList(defaults) {
_super.apply(this, arguments);
}
AxisValuesTypeList.itemType = OutSystemsChartsModel.AxisValuesTypeRec;
return AxisValuesTypeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.AxisValuesTypeList = AxisValuesTypeList;

});
define("OutSystemsCharts.model$AxisTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$AxisTypeRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var AxisTypeRecordList = (function (_super) {
__extends(AxisTypeRecordList, _super);
function AxisTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AxisTypeRecordList.itemType = OutSystemsChartsModel.AxisTypeRecord;
return AxisTypeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.AxisTypeRecordList = AxisTypeRecordList;

});
define("OutSystemsCharts.model$XAxisStylingRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var XAxisStylingRec = (function (_super) {
__extends(XAxisStylingRec, _super);
function XAxisStylingRec(defaults) {
_super.apply(this, arguments);
}
XAxisStylingRec.attributesToDeclare = function () {
return [
this.attr("LineColor", "lineColorAttr", "LineColor", false, false, OS.Types.Text, function () {
return "#ccd6eb";
}, true), 
this.attr("LineWidth", "lineWidthAttr", "LineWidth", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
XAxisStylingRec.init();
return XAxisStylingRec;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.XAxisStylingRec = XAxisStylingRec;

});
define("OutSystemsCharts.model$XAxisStylingRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$XAxisStylingRec"], function (exports, OutSystems, OutSystemsChartsModel) {
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
OutSystemsChartsModel.XAxisStylingRecord = XAxisStylingRecord;

});
define("OutSystemsCharts.model$Legacy_advancedFormat_JSONRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_advancedFormat_JSONRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_advancedFormat_JSONRecordList = (function (_super) {
__extends(Legacy_advancedFormat_JSONRecordList, _super);
function Legacy_advancedFormat_JSONRecordList(defaults) {
_super.apply(this, arguments);
}
Legacy_advancedFormat_JSONRecordList.itemType = OutSystemsChartsModel.Legacy_advancedFormat_JSONRecord;
return Legacy_advancedFormat_JSONRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.Legacy_advancedFormat_JSONRecordList = Legacy_advancedFormat_JSONRecordList;

});
define("OutSystemsCharts.model$ChartEventList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ChartEventRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ChartEventList = (function (_super) {
__extends(ChartEventList, _super);
function ChartEventList(defaults) {
_super.apply(this, arguments);
}
ChartEventList.itemType = OutSystemsChartsModel.ChartEventRec;
return ChartEventList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.ChartEventList = ChartEventList;

});
define("OutSystemsCharts.model$XAxisStylingList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$XAxisStylingRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var XAxisStylingList = (function (_super) {
__extends(XAxisStylingList, _super);
function XAxisStylingList(defaults) {
_super.apply(this, arguments);
}
XAxisStylingList.itemType = OutSystemsChartsModel.XAxisStylingRec;
return XAxisStylingList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.XAxisStylingList = XAxisStylingList;

});
define("OutSystemsCharts.model$SeriesStylingOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$SeriesStylingOptionalConfigsRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SeriesStylingOptionalConfigsList = (function (_super) {
__extends(SeriesStylingOptionalConfigsList, _super);
function SeriesStylingOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
SeriesStylingOptionalConfigsList.itemType = OutSystemsChartsModel.SeriesStylingOptionalConfigsRec;
return SeriesStylingOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.SeriesStylingOptionalConfigsList = SeriesStylingOptionalConfigsList;

});
define("OutSystemsCharts.model$XAxisGridLinesStylingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$XAxisGridLinesStylingRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var XAxisGridLinesStylingRecordList = (function (_super) {
__extends(XAxisGridLinesStylingRecordList, _super);
function XAxisGridLinesStylingRecordList(defaults) {
_super.apply(this, arguments);
}
XAxisGridLinesStylingRecordList.itemType = OutSystemsChartsModel.XAxisGridLinesStylingRecord;
return XAxisGridLinesStylingRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.XAxisGridLinesStylingRecordList = XAxisGridLinesStylingRecordList;

});
define("OutSystemsCharts.model$Legacy_AdvancedDataPointFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_AdvancedDataPointFormatRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_AdvancedDataPointFormatRecordList = (function (_super) {
__extends(Legacy_AdvancedDataPointFormatRecordList, _super);
function Legacy_AdvancedDataPointFormatRecordList(defaults) {
_super.apply(this, arguments);
}
Legacy_AdvancedDataPointFormatRecordList.itemType = OutSystemsChartsModel.Legacy_AdvancedDataPointFormatRecord;
return Legacy_AdvancedDataPointFormatRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.Legacy_AdvancedDataPointFormatRecordList = Legacy_AdvancedDataPointFormatRecordList;

});
define("OutSystemsCharts.model$AxisInternalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$AxisInternalConfigsRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var AxisInternalConfigsList = (function (_super) {
__extends(AxisInternalConfigsList, _super);
function AxisInternalConfigsList(defaults) {
_super.apply(this, arguments);
}
AxisInternalConfigsList.itemType = OutSystemsChartsModel.AxisInternalConfigsRec;
return AxisInternalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.AxisInternalConfigsList = AxisInternalConfigsList;

});
define("OutSystemsCharts.model$InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$InternalConfigRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var InternalConfigRecordList = (function (_super) {
__extends(InternalConfigRecordList, _super);
function InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
InternalConfigRecordList.itemType = OutSystemsChartsModel.InternalConfigRecord;
return InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.InternalConfigRecordList = InternalConfigRecordList;

});
define("OutSystemsCharts.model$Legacy_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_InternalConfigRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_InternalConfigRecord = (function (_super) {
__extends(Legacy_InternalConfigRecord, _super);
function Legacy_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
Legacy_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("Legacy_InternalConfig", "legacy_InternalConfigAttr", "Legacy_InternalConfig", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.Legacy_InternalConfigRec());
}, true, OutSystemsChartsModel.Legacy_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
Legacy_InternalConfigRecord.fromStructure = function (str) {
return new Legacy_InternalConfigRecord(new Legacy_InternalConfigRecord.RecordClass({
legacy_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Legacy_InternalConfigRecord._isAnonymousRecord = true;
Legacy_InternalConfigRecord.UniqueId = "b9cc97d4-f5ca-6625-f6d3-1d4e7e643874";
Legacy_InternalConfigRecord.init();
return Legacy_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.Legacy_InternalConfigRecord = Legacy_InternalConfigRecord;

});
define("OutSystemsCharts.model$ValuesTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ValuesTypeRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ValuesTypeList = (function (_super) {
__extends(ValuesTypeList, _super);
function ValuesTypeList(defaults) {
_super.apply(this, arguments);
}
ValuesTypeList.itemType = OutSystemsChartsModel.ValuesTypeRec;
return ValuesTypeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.ValuesTypeList = ValuesTypeList;

});
define("OutSystemsCharts.model$SeriesStylingOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$SeriesStylingOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SeriesStylingOptionalConfigsRecordList = (function (_super) {
__extends(SeriesStylingOptionalConfigsRecordList, _super);
function SeriesStylingOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
SeriesStylingOptionalConfigsRecordList.itemType = OutSystemsChartsModel.SeriesStylingOptionalConfigsRecord;
return SeriesStylingOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.SeriesStylingOptionalConfigsRecordList = SeriesStylingOptionalConfigsRecordList;

});
define("OutSystemsCharts.model$LegendInternalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$LegendInternalConfigsRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var LegendInternalConfigsRecord = (function (_super) {
__extends(LegendInternalConfigsRecord, _super);
function LegendInternalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
LegendInternalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("LegendInternalConfigs", "legendInternalConfigsAttr", "LegendInternalConfigs", false, false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.LegendInternalConfigsRec());
}, true, OutSystemsChartsModel.LegendInternalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
LegendInternalConfigsRecord.fromStructure = function (str) {
return new LegendInternalConfigsRecord(new LegendInternalConfigsRecord.RecordClass({
legendInternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LegendInternalConfigsRecord._isAnonymousRecord = true;
LegendInternalConfigsRecord.UniqueId = "c15b6589-6c08-df0c-893e-b8f103ad3409";
LegendInternalConfigsRecord.init();
return LegendInternalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsChartsModel.LegendInternalConfigsRecord = LegendInternalConfigsRecord;

});
define("OutSystemsCharts.model$AxisInternalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$AxisInternalConfigsRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var AxisInternalConfigsRecordList = (function (_super) {
__extends(AxisInternalConfigsRecordList, _super);
function AxisInternalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
AxisInternalConfigsRecordList.itemType = OutSystemsChartsModel.AxisInternalConfigsRecord;
return AxisInternalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.AxisInternalConfigsRecordList = AxisInternalConfigsRecordList;

});
define("OutSystemsCharts.model$StackingTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$StackingTypeRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var StackingTypeList = (function (_super) {
__extends(StackingTypeList, _super);
function StackingTypeList(defaults) {
_super.apply(this, arguments);
}
StackingTypeList.itemType = OutSystemsChartsModel.StackingTypeRec;
return StackingTypeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.StackingTypeList = StackingTypeList;

});
define("OutSystemsCharts.model$LegendPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$LegendPositionRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var LegendPositionRecordList = (function (_super) {
__extends(LegendPositionRecordList, _super);
function LegendPositionRecordList(defaults) {
_super.apply(this, arguments);
}
LegendPositionRecordList.itemType = OutSystemsChartsModel.LegendPositionRecord;
return LegendPositionRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.LegendPositionRecordList = LegendPositionRecordList;

});
define("OutSystemsCharts.model$Legacy_AdvancedFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_AdvancedFormatRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_AdvancedFormatRecordList = (function (_super) {
__extends(Legacy_AdvancedFormatRecordList, _super);
function Legacy_AdvancedFormatRecordList(defaults) {
_super.apply(this, arguments);
}
Legacy_AdvancedFormatRecordList.itemType = OutSystemsChartsModel.Legacy_AdvancedFormatRecord;
return Legacy_AdvancedFormatRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.Legacy_AdvancedFormatRecordList = Legacy_AdvancedFormatRecordList;

});
define("OutSystemsCharts.model$Legacy_ChartList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_ChartRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_ChartList = (function (_super) {
__extends(Legacy_ChartList, _super);
function Legacy_ChartList(defaults) {
_super.apply(this, arguments);
}
Legacy_ChartList.itemType = OutSystemsChartsModel.Legacy_ChartRec;
return Legacy_ChartList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.Legacy_ChartList = Legacy_ChartList;

});
define("OutSystemsCharts.model$OptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$OptionalConfigsRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var OptionalConfigsList = (function (_super) {
__extends(OptionalConfigsList, _super);
function OptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
OptionalConfigsList.itemType = OutSystemsChartsModel.OptionalConfigsRec;
return OptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.OptionalConfigsList = OptionalConfigsList;

});
define("OutSystemsCharts.model$ReturnMessageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ReturnMessageRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ReturnMessageList = (function (_super) {
__extends(ReturnMessageList, _super);
function ReturnMessageList(defaults) {
_super.apply(this, arguments);
}
ReturnMessageList.itemType = OutSystemsChartsModel.ReturnMessageRec;
return ReturnMessageList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.ReturnMessageList = ReturnMessageList;

});
define("OutSystemsCharts.model$SerieStylingInternalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$SerieStylingInternalConfigsRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SerieStylingInternalConfigsList = (function (_super) {
__extends(SerieStylingInternalConfigsList, _super);
function SerieStylingInternalConfigsList(defaults) {
_super.apply(this, arguments);
}
SerieStylingInternalConfigsList.itemType = OutSystemsChartsModel.SerieStylingInternalConfigsRec;
return SerieStylingInternalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.SerieStylingInternalConfigsList = SerieStylingInternalConfigsList;

});
define("OutSystemsCharts.model$Legacy_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_InternalConfigRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_InternalConfigRecordList = (function (_super) {
__extends(Legacy_InternalConfigRecordList, _super);
function Legacy_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
Legacy_InternalConfigRecordList.itemType = OutSystemsChartsModel.Legacy_InternalConfigRecord;
return Legacy_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.Legacy_InternalConfigRecordList = Legacy_InternalConfigRecordList;

});
define("OutSystemsCharts.model$Legacy_XAxisFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_XAxisFormatRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_XAxisFormatList = (function (_super) {
__extends(Legacy_XAxisFormatList, _super);
function Legacy_XAxisFormatList(defaults) {
_super.apply(this, arguments);
}
Legacy_XAxisFormatList.itemType = OutSystemsChartsModel.Legacy_XAxisFormatRec;
return Legacy_XAxisFormatList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.Legacy_XAxisFormatList = Legacy_XAxisFormatList;

});
define("OutSystemsCharts.model$ErrorMessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ErrorMessageRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ErrorMessageRecordList = (function (_super) {
__extends(ErrorMessageRecordList, _super);
function ErrorMessageRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRecordList.itemType = OutSystemsChartsModel.ErrorMessageRecord;
return ErrorMessageRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.ErrorMessageRecordList = ErrorMessageRecordList;

});
define("OutSystemsCharts.model$XAxisTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$XAxisTypeRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var XAxisTypeList = (function (_super) {
__extends(XAxisTypeList, _super);
function XAxisTypeList(defaults) {
_super.apply(this, arguments);
}
XAxisTypeList.itemType = OutSystemsChartsModel.XAxisTypeRec;
return XAxisTypeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.XAxisTypeList = XAxisTypeList;

});
define("OutSystemsCharts.model$XAxisStylingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$XAxisStylingRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var XAxisStylingRecordList = (function (_super) {
__extends(XAxisStylingRecordList, _super);
function XAxisStylingRecordList(defaults) {
_super.apply(this, arguments);
}
XAxisStylingRecordList.itemType = OutSystemsChartsModel.XAxisStylingRecord;
return XAxisStylingRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.XAxisStylingRecordList = XAxisStylingRecordList;

});
define("OutSystemsCharts.model$ChartProviderList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ChartProviderRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ChartProviderList = (function (_super) {
__extends(ChartProviderList, _super);
function ChartProviderList(defaults) {
_super.apply(this, arguments);
}
ChartProviderList.itemType = OutSystemsChartsModel.ChartProviderRec;
return ChartProviderList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.ChartProviderList = ChartProviderList;

});
define("OutSystemsCharts.model$XAxisGridLinesStylingList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$XAxisGridLinesStylingRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var XAxisGridLinesStylingList = (function (_super) {
__extends(XAxisGridLinesStylingList, _super);
function XAxisGridLinesStylingList(defaults) {
_super.apply(this, arguments);
}
XAxisGridLinesStylingList.itemType = OutSystemsChartsModel.XAxisGridLinesStylingRec;
return XAxisGridLinesStylingList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.XAxisGridLinesStylingList = XAxisGridLinesStylingList;

});
define("OutSystemsCharts.model$YAxisStylingList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$YAxisStylingRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var YAxisStylingList = (function (_super) {
__extends(YAxisStylingList, _super);
function YAxisStylingList(defaults) {
_super.apply(this, arguments);
}
YAxisStylingList.itemType = OutSystemsChartsModel.YAxisStylingRec;
return YAxisStylingList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.YAxisStylingList = YAxisStylingList;

});
define("OutSystemsCharts.model$ChartList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$ChartRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var ChartList = (function (_super) {
__extends(ChartList, _super);
function ChartList(defaults) {
_super.apply(this, arguments);
}
ChartList.itemType = OutSystemsChartsModel.ChartRec;
return ChartList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.ChartList = ChartList;

});
define("OutSystemsCharts.model$SeriesStylingMarkerList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$SeriesStylingMarkerRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var SeriesStylingMarkerList = (function (_super) {
__extends(SeriesStylingMarkerList, _super);
function SeriesStylingMarkerList(defaults) {
_super.apply(this, arguments);
}
SeriesStylingMarkerList.itemType = OutSystemsChartsModel.SeriesStylingMarkerRec;
return SeriesStylingMarkerList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.SeriesStylingMarkerList = SeriesStylingMarkerList;

});
define("OutSystemsCharts.model$LegendInternalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$LegendInternalConfigsRecord"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var LegendInternalConfigsRecordList = (function (_super) {
__extends(LegendInternalConfigsRecordList, _super);
function LegendInternalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
LegendInternalConfigsRecordList.itemType = OutSystemsChartsModel.LegendInternalConfigsRecord;
return LegendInternalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.LegendInternalConfigsRecordList = LegendInternalConfigsRecordList;

});
define("OutSystemsCharts.model$Legacy_YAxisFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsCharts.model", "OutSystemsCharts.model$Legacy_YAxisFormatRec"], function (exports, OutSystems, OutSystemsChartsModel) {
var OS = OutSystems.Internal;
var Legacy_YAxisFormatList = (function (_super) {
__extends(Legacy_YAxisFormatList, _super);
function Legacy_YAxisFormatList(defaults) {
_super.apply(this, arguments);
}
Legacy_YAxisFormatList.itemType = OutSystemsChartsModel.Legacy_YAxisFormatRec;
return Legacy_YAxisFormatList;
})(OS.DataTypes.GenericRecordList);
OutSystemsChartsModel.Legacy_YAxisFormatList = Legacy_YAxisFormatList;

});
define("OutSystemsCharts.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var OutSystemsChartsModel = exports;
Object.defineProperty(OutSystemsChartsModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"];
}
});

OutSystemsChartsModel.staticEntities = {};
OutSystemsChartsModel.staticEntities.chartProvider = {};
var getChartProviderRecord = function (record) {
return OutSystemsChartsModel.module.staticEntities["00943809-64da-4846-97a0-3fbac6b1913d"][record];
};
Object.defineProperty(OutSystemsChartsModel.staticEntities.chartProvider, "highcharts", {
get: function () {
return getChartProviderRecord("eef50a2e-10c5-449a-8dcd-9b6d735d4366");
}
});

OutSystemsChartsModel.staticEntities.stackingType_v1 = {};
var getStackingType_v1Record = function (record) {
return OutSystemsChartsModel.module.staticEntities["1aaafcbe-99a5-4857-83f2-e4754e65edcf"][record];
};
Object.defineProperty(OutSystemsChartsModel.staticEntities.stackingType_v1, "stacked100Percent", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStackingType_v1Record("5a048369-2987-4af5-b052-ab363ac4b748"));
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.stackingType_v1, "noStacking", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStackingType_v1Record("b664d44a-e707-43cc-b782-cc4fd9c3ce8a"));
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.stackingType_v1, "stacked", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getStackingType_v1Record("f5816dfa-da3b-4031-aa5f-06a7a08dcc94"));
}
});

OutSystemsChartsModel.staticEntities.oSChartVersion = {};
var getOSChartVersionRecord = function (record) {
return OutSystemsChartsModel.module.staticEntities["3e3bf022-d92f-488a-9e7d-f0560c2a88d9"][record];
};
Object.defineProperty(OutSystemsChartsModel.staticEntities.oSChartVersion, "version1", {
get: function () {
return getOSChartVersionRecord("8450ce2f-d8b3-4385-b9b3-6c6c2c96428e");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.oSChartVersion, "version2", {
get: function () {
return getOSChartVersionRecord("bb33e5ef-e59c-488f-8ac7-d4b1763e68a1");
}
});

OutSystemsChartsModel.staticEntities.chartEvent = {};
var getChartEventRecord = function (record) {
return OutSystemsChartsModel.module.staticEntities["50efbd5e-bb47-4505-bc1b-aaedd404ac21"][record];
};
Object.defineProperty(OutSystemsChartsModel.staticEntities.chartEvent, "initialized", {
get: function () {
return getChartEventRecord("17a6c163-e29d-40f9-9338-fa3338ea4c06");
}
});

OutSystemsChartsModel.staticEntities.legendPosition_v1 = {};
var getLegendPosition_v1Record = function (record) {
return OutSystemsChartsModel.module.staticEntities["6f55558f-9a5c-49bb-bc32-8180c0ac0d73"][record];
};
Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition_v1, "bottom", {
get: function () {
return getLegendPosition_v1Record("24063cd8-b015-4fb7-8ceb-c4cf65110444");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition_v1, "right", {
get: function () {
return getLegendPosition_v1Record("2c2e4610-d5b5-4738-9474-83ca4e40f33b");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition_v1, "inside", {
get: function () {
return getLegendPosition_v1Record("33fda788-9eba-426b-be1d-284323c6ae2a");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition_v1, "left", {
get: function () {
return getLegendPosition_v1Record("5314c097-85bd-407c-84f9-f0ebd17b75ce");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition_v1, "hidden", {
get: function () {
return getLegendPosition_v1Record("6519bee3-d71b-41ae-8e57-a377f8aaa6c3");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition_v1, "top", {
get: function () {
return getLegendPosition_v1Record("e0495156-d508-4fc2-a3ed-77a194c65b49");
}
});

OutSystemsChartsModel.staticEntities.seriesType = {};
var getSeriesTypeRecord = function (record) {
return OutSystemsChartsModel.module.staticEntities["a9c663e8-6354-4f02-931c-636fc58b7d51"][record];
};
Object.defineProperty(OutSystemsChartsModel.staticEntities.seriesType, "lineSpline", {
get: function () {
return getSeriesTypeRecord("3f7ae828-19cb-41e5-ae17-9532fe55db17");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.seriesType, "pie", {
get: function () {
return getSeriesTypeRecord("444a575c-b641-498a-9920-deba8125d6cd");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.seriesType, "column", {
get: function () {
return getSeriesTypeRecord("725167e0-349e-4d49-ab03-abb973474c3a");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.seriesType, "area", {
get: function () {
return getSeriesTypeRecord("ae810189-6c25-4616-b3d7-9bf355ab45a9");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.seriesType, "line", {
get: function () {
return getSeriesTypeRecord("b8357127-bd9e-4388-ba14-414d253820a8");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.seriesType, "areaSpline", {
get: function () {
return getSeriesTypeRecord("f5f641fb-62a9-4991-b1ef-0ad3e0c09eb2");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.seriesType, "bar", {
get: function () {
return getSeriesTypeRecord("f9a89332-5bd2-4960-85f2-41f70df5566d");
}
});

OutSystemsChartsModel.staticEntities.legendPosition = {};
var getLegendPositionRecord = function (record) {
return OutSystemsChartsModel.module.staticEntities["aae17a97-3f0a-41cb-8937-e49d737a9771"][record];
};
Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition, "bottom", {
get: function () {
return getLegendPositionRecord("03026d1b-9c13-4584-9295-671a1586c89a");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition, "right", {
get: function () {
return getLegendPositionRecord("4e71bff0-a68c-4905-aa02-46ae2986e6fb");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition, "center", {
get: function () {
return getLegendPositionRecord("5686b31a-ba9b-46ca-9282-2f767adc12a4");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition, "bottomRight", {
get: function () {
return getLegendPositionRecord("6d4187a9-2b5a-45b6-809c-e3b2284f2d47");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition, "left", {
get: function () {
return getLegendPositionRecord("74b2b300-d6d2-4812-ba28-ddeae94869ca");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition, "top", {
get: function () {
return getLegendPositionRecord("9da3e0d2-6f98-455b-bea1-5661b75da917");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition, "topLeft", {
get: function () {
return getLegendPositionRecord("aeae77ad-7167-40a1-af0d-02b40615709c");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition, "topRight", {
get: function () {
return getLegendPositionRecord("ec7543e7-5324-4ffe-8bbf-2c4a0f2dccbb");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition, "bottomLeft", {
get: function () {
return getLegendPositionRecord("f08c54cf-074d-4052-8438-7bfdf027eb8b");
}
});

OutSystemsChartsModel.staticEntities.seriesEvent_v1 = {};
var getSeriesEvent_v1Record = function (record) {
return OutSystemsChartsModel.module.staticEntities["ca843517-6f55-4ce4-b34e-28fc63cd740f"][record];
};
Object.defineProperty(OutSystemsChartsModel.staticEntities.seriesEvent_v1, "click", {
get: function () {
return getSeriesEvent_v1Record("060dae58-d4b1-4240-b9b5-a0c9e3b8bbbe");
}
});

OutSystemsChartsModel.staticEntities.valuesType = {};
var getValuesTypeRecord = function (record) {
return OutSystemsChartsModel.module.staticEntities["d0562170-cf56-434a-85ef-b8d33f2023f2"][record];
};
Object.defineProperty(OutSystemsChartsModel.staticEntities.valuesType, "decimal", {
get: function () {
return getValuesTypeRecord("3e27399e-2c5f-4ea0-9b43-57efda9fc39a");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.valuesType, "text", {
get: function () {
return getValuesTypeRecord("649ea8ca-aea0-4b0a-9e14-7d7be348f570");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.valuesType, "datetime", {
get: function () {
return getValuesTypeRecord("ada8b21f-91d2-4353-b296-3d0f34e8f065");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.valuesType, "integer", {
get: function () {
return getValuesTypeRecord("dacb223d-1024-44f8-ae03-bbd06961a870");
}
});

OutSystemsChartsModel.staticEntities.xAxisType = {};
var getXAxisTypeRecord = function (record) {
return OutSystemsChartsModel.module.staticEntities["d2ce446b-c3dd-4453-8e99-0a586230a85c"][record];
};
Object.defineProperty(OutSystemsChartsModel.staticEntities.xAxisType, "linear", {
get: function () {
return getXAxisTypeRecord("25cfc6b3-8ff3-4708-9bb3-d8ecd1e739a3");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.xAxisType, "datetime", {
get: function () {
return getXAxisTypeRecord("2c2bf64b-31a3-4995-9ba2-acacd256c49a");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.xAxisType, "decimal", {
get: function () {
return getXAxisTypeRecord("3bd4a298-f312-4537-ae50-ee37070100c7");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.xAxisType, "category", {
get: function () {
return getXAxisTypeRecord("f6366d74-15bb-4c97-9757-f7b642ddc018");
}
});

OutSystemsChartsModel.staticEntities.axisType = {};
var getAxisTypeRecord = function (record) {
return OutSystemsChartsModel.module.staticEntities["d64ec36e-560e-4509-b2f0-8918dbb72de4"][record];
};
Object.defineProperty(OutSystemsChartsModel.staticEntities.axisType, "y", {
get: function () {
return getAxisTypeRecord("1c36b038-2848-4b70-a5f7-dab8ad532c1a");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.axisType, "x", {
get: function () {
return getAxisTypeRecord("6fadbfc4-8e44-4c2a-961c-ed1e4fcfaf08");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.axisType, "z", {
get: function () {
return getAxisTypeRecord("942c92f8-cd63-4378-9495-c6d94bffc468");
}
});

OutSystemsChartsModel.staticEntities.xAxisValuesType_v1 = {};
var getXAxisValuesType_v1Record = function (record) {
return OutSystemsChartsModel.module.staticEntities["e24bffa0-82f5-4cd2-9d43-97b142649f77"][record];
};
Object.defineProperty(OutSystemsChartsModel.staticEntities.xAxisValuesType_v1, "text", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getXAxisValuesType_v1Record("31d40404-1f4d-4f1a-8c04-aa7377da778a"));
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.xAxisValuesType_v1, "auto", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getXAxisValuesType_v1Record("6599ec19-4160-4794-81cd-6ba06b0bb84d"));
}
});

OutSystemsChartsModel.staticEntities.seriesEvent = {};
var getSeriesEventRecord = function (record) {
return OutSystemsChartsModel.module.staticEntities["e7cb0e07-206a-40ab-a76a-8383ca114365"][record];
};
Object.defineProperty(OutSystemsChartsModel.staticEntities.seriesEvent, "click", {
get: function () {
return getSeriesEventRecord("35963666-b788-4758-b6ab-faa831a4afc7");
}
});

OutSystemsChartsModel.staticEntities.legendLayout = {};
var getLegendLayoutRecord = function (record) {
return OutSystemsChartsModel.module.staticEntities["f3006da5-223f-4057-894a-8966e01ba39f"][record];
};
Object.defineProperty(OutSystemsChartsModel.staticEntities.legendLayout, "proximate", {
get: function () {
return getLegendLayoutRecord("3936b711-b22b-4e51-ac3a-a8dfae908d39");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.legendLayout, "horizontal", {
get: function () {
return getLegendLayoutRecord("39e35bd8-6ab1-475f-8e44-22ab6a1b0af8");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.legendLayout, "vertical", {
get: function () {
return getLegendLayoutRecord("75c7fcee-0e1f-4392-b359-fa5646dd2236");
}
});

OutSystemsChartsModel.staticEntities.stackingType = {};
var getStackingTypeRecord = function (record) {
return OutSystemsChartsModel.module.staticEntities["f7a3d532-b80b-4cf8-a88a-1b138a432266"][record];
};
Object.defineProperty(OutSystemsChartsModel.staticEntities.stackingType, "stacked", {
get: function () {
return getStackingTypeRecord("088f950f-4da9-4ff9-8a04-65a883f83712");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.stackingType, "stacked100Percent", {
get: function () {
return getStackingTypeRecord("1faf391e-0d35-4bf2-a4eb-23b864eb0827");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.stackingType, "noStacking", {
get: function () {
return getStackingTypeRecord("a63fa021-b305-434c-9ee1-ea028f9a1015");
}
});

OutSystemsChartsModel.staticEntities.axisValuesType = {};
var getAxisValuesTypeRecord = function (record) {
return OutSystemsChartsModel.module.staticEntities["fd747d79-417d-4efa-8f89-2d79bb8de835"][record];
};
Object.defineProperty(OutSystemsChartsModel.staticEntities.axisValuesType, "linear", {
get: function () {
return getAxisValuesTypeRecord("45d001ca-cc7c-464e-8526-72b015a94f39");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.axisValuesType, "datetime", {
get: function () {
return getAxisValuesTypeRecord("7691cdbd-3a83-4375-a5b9-851b2bd61767");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.axisValuesType, "logarithmic", {
get: function () {
return getAxisValuesTypeRecord("fe3080e5-4116-4dc1-bae7-3715e5612a4b");
}
});

Object.defineProperty(OutSystemsChartsModel.staticEntities.axisValuesType, "category", {
get: function () {
return getAxisValuesTypeRecord("ff0aef46-a8c5-4078-b0a1-fee40a326514");
}
});

});
