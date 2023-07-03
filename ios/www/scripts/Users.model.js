define("Users.model$LoginAttemptPublicRec", ["exports", "OutSystems/ClientRuntime/Main", "Users.model"], function (exports, OutSystems, UsersModel) {
var OS = OutSystems.Internal;
var LoginAttemptPublicRec = (function (_super) {
__extends(LoginAttemptPublicRec, _super);
function LoginAttemptPublicRec(defaults) {
_super.apply(this, arguments);
}
LoginAttemptPublicRec.attributesToDeclare = function () {
return [
this.attr("Instant", "instantAttr", "Instant", false, false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Success", "successAttr", "Success", false, false, OS.Types.Boolean, function () {
return false;
}, true), 
this.attr("IPAddress", "iPAddressAttr", "IPAddress", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("UsernameFailureCount", "usernameFailureCountAttr", "UsernameFailureCount", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("IPAddressFailureCount", "iPAddressFailureCountAttr", "IPAddressFailureCount", false, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("RequestKey", "requestKeyAttr", "RequestKey", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("UserAgent", "userAgentAttr", "UserAgent", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Visitor", "visitorAttr", "Visitor", false, false, OS.Types.Text, function () {
return "";
}, true), 
this.attr("Result", "resultAttr", "Result", false, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LoginAttemptPublicRec.init();
return LoginAttemptPublicRec;
})(OS.DataTypes.GenericRecord);
UsersModel.LoginAttemptPublicRec = LoginAttemptPublicRec;

});
define("Users.model$SamlUserRec", ["exports", "OutSystems/ClientRuntime/Main", "Users.model"], function (exports, OutSystems, UsersModel) {
var OS = OutSystems.Internal;
var SamlUserRec = (function (_super) {
__extends(SamlUserRec, _super);
function SamlUserRec(defaults) {
_super.apply(this, arguments);
}
SamlUserRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("UserId", "userIdAttr", "UserId", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("SamlExternalId", "samlExternalIdAttr", "SamlExternalId", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SamlUserRec.init();
return SamlUserRec;
})(OS.DataTypes.GenericRecord);
UsersModel.SamlUserRec = SamlUserRec;

});
define("Users.model$LoginAttemptResultRec", ["exports", "OutSystems/ClientRuntime/Main", "Users.model"], function (exports, OutSystems, UsersModel) {
var OS = OutSystems.Internal;
var LoginAttemptResultRec = (function (_super) {
__extends(LoginAttemptResultRec, _super);
function LoginAttemptResultRec(defaults) {
_super.apply(this, arguments);
}
LoginAttemptResultRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LoginAttemptResultRec.fromStructure = function (str) {
return new LoginAttemptResultRec(new LoginAttemptResultRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LoginAttemptResultRec.init();
return LoginAttemptResultRec;
})(OS.DataTypes.GenericRecord);
UsersModel.LoginAttemptResultRec = LoginAttemptResultRec;

});
define("Users.model$MenuItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Users.model"], function (exports, OutSystems, UsersModel) {
var OS = OutSystems.Internal;
var MenuItemRec = (function (_super) {
__extends(MenuItemRec, _super);
function MenuItemRec(defaults) {
_super.apply(this, arguments);
}
MenuItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.Types.Integer, function () {
return 0;
}, true), 
this.attr("Caption", "captionAttr", "Caption", true, false, OS.Types.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MenuItemRec.init();
return MenuItemRec;
})(OS.DataTypes.GenericRecord);
UsersModel.MenuItemRec = MenuItemRec;

});
define("Users.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var UsersModel = exports;
});
