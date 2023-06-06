define("AgentifaiAssistantPlugin.controller$CheckAgentifaiPlugin", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiAssistantPlugin.model", "AgentifaiAssistantPlugin.controller", "CommonPlugin.controller", "CommonPlugin.model", "AgentifaiAssistantPlugin.controller$CheckAgentifaiPlugin.PluginIsLoadedJS", "CommonPlugin.controller$IsCordovaDefined", "AgentifaiAssistantPlugin.referencesHealth", "AgentifaiAssistantPlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$ErrorRec"], function (exports, OutSystems, AgentifaiAssistantPluginModel, AgentifaiAssistantPluginController, CommonPluginController, CommonPluginModel, AgentifaiAssistantPlugin_controller_CheckAgentifaiPlugin_PluginIsLoadedJS) {
var OS = OutSystems.Internal;
AgentifaiAssistantPluginController.default.checkAgentifaiPlugin$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
var pluginIsLoadedJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("AgentifaiAssistantPlugin.CheckAgentifaiPlugin$outVars"))());
varBag.callContext = callContext;
varBag.isCordovaDefinedVar = isCordovaDefinedVar;
varBag.pluginIsLoadedJSResult = pluginIsLoadedJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("dxxec54fvEG69NKTMk04Rg:S9kXFJwG60GHkCNyxs0UoQ:/ClientActionFlows.S9kXFJwG60GHkCNyxs0UoQ:8w4tZzDyocmSpaEvE_U+zw", "AgentifaiAssistantPlugin", "CheckAgentifaiPlugin", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:zk9Fg0heAUaXrfb21Rn5xw", callContext.id);
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:+O52bI1Fi0S7FoefmJK3PQ", callContext.id);
// Execute Action: IsCordovaDefined
isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:eLTLqRnB3k2lL7GlwwvjdQ", callContext.id) && isCordovaDefinedVar.value.isLoadedOut)) {
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:9EfaYgMYHUKW7bpRFsJ4Sw", callContext.id);
pluginIsLoadedJSResult.value = controller.safeExecuteJSNode(AgentifaiAssistantPlugin_controller_CheckAgentifaiPlugin_PluginIsLoadedJS, "PluginIsLoaded", "CheckAgentifaiPlugin", {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(false, OS.Types.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("AgentifaiAssistantPlugin.CheckAgentifaiPlugin$pluginIsLoadedJSResult"))();
jsNodeResult.isAvailableOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsAvailable, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:JW8E8+lUvk+41C9G8nSLtQ", callContext.id) && pluginIsLoadedJSResult.value.isAvailableOut)) {
// Set Result
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:SmpqEd72kE+v+B8rVnUTMw", callContext.id);
// IsAvailable = True
outVars.value.isAvailableOut = true;
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:i4QK1Z9dIUmsjnC06F0Vew", callContext.id);
} else {
// Set Output
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:yqnEB2WGPECmrWvYUc5Cgg", callContext.id);
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:yqnEB2WGPECmrWvYUc5Cgg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = 2
outVars.value.errorOut.errorCodeAttr = "2";
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:yqnEB2WGPECmrWvYUc5Cgg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = "Plugin is not loaded."
outVars.value.errorOut.errorMessageAttr = "Plugin is not loaded.";
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:AMFNVxrY+U+ZK_TbULUBeA", callContext.id);
}

} else {
// Set Output
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:J1wZff9SAE2uVYSO3NH3uw", callContext.id);
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:J1wZff9SAE2uVYSO3NH3uw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = 1
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:J1wZff9SAE2uVYSO3NH3uw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = "cordova is not defined"
outVars.value.errorOut.errorMessageAttr = "cordova is not defined";
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:GxDT24CrGUWfTlxw0FES1g", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("dxxec54fvEG69NKTMk04Rg:S9kXFJwG60GHkCNyxs0UoQ", callContext.id);
}

};
var controller = AgentifaiAssistantPluginController.default;
AgentifaiAssistantPluginController.default.constructor.registerVariableGroupType("AgentifaiAssistantPlugin.CheckAgentifaiPlugin$pluginIsLoadedJSResult", [{
name: "IsAvailable",
attrName: "isAvailableOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
AgentifaiAssistantPluginController.default.constructor.registerVariableGroupType("AgentifaiAssistantPlugin.CheckAgentifaiPlugin$outVars", [{
name: "IsAvailable",
attrName: "isAvailableOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Error",
attrName: "errorOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new CommonPluginModel.ErrorRec();
},
complexType: CommonPluginModel.ErrorRec
}]);
AgentifaiAssistantPluginController.default.clientActionProxies.checkAgentifaiPlugin$Action = function () {
return controller.executeActionInsideJSNode(AgentifaiAssistantPluginController.default.checkAgentifaiPlugin$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAvailableOut, OS.Types.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("AgentifaiAssistantPlugin.controller$CheckAgentifaiPlugin.PluginIsLoadedJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsAvailable = typeof(window.plugin) !== 'undefined' && typeof(window.plugin.agentifai) !== 'undefined';
};
});

define("AgentifaiAssistantPlugin.controller$Close", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiAssistantPlugin.model", "AgentifaiAssistantPlugin.controller", "AgentifaiAssistantPlugin.controller$Close.CloseJS"], function (exports, OutSystems, AgentifaiAssistantPluginModel, AgentifaiAssistantPluginController, AgentifaiAssistantPlugin_controller_Close_CloseJS) {
var OS = OutSystems.Internal;
AgentifaiAssistantPluginController.default.close$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("dxxec54fvEG69NKTMk04Rg:Z2s8N1B970utL40JuO3tZg:/ClientActionFlows.Z2s8N1B970utL40JuO3tZg:sYa_Bqg5_Nnx6Zz26L95lw", "AgentifaiAssistantPlugin", "Close", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:6D6rWamddU+dveHFuSe6+Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:hD7St2Vj_0i48GuK09OUAw", callContext.id);
controller.safeExecuteJSNode(AgentifaiAssistantPlugin_controller_Close_CloseJS, "Close", "Close", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:c+cM+plVJkaL2Rzs7ghMUA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("dxxec54fvEG69NKTMk04Rg:Z2s8N1B970utL40JuO3tZg", callContext.id);
}

};
var controller = AgentifaiAssistantPluginController.default;
AgentifaiAssistantPluginController.default.clientActionProxies.close$Action = function () {
return controller.executeActionInsideJSNode(AgentifaiAssistantPluginController.default.close$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("AgentifaiAssistantPlugin.controller$Close.CloseJS", [], function () {
return function ($actions, $roles, $public) {
window.plugin.agentifai.closeApplication();
};
});

define("AgentifaiAssistantPlugin.controller$Hide", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiAssistantPlugin.model", "AgentifaiAssistantPlugin.controller", "AgentifaiAssistantPlugin.controller$Hide.HideJS"], function (exports, OutSystems, AgentifaiAssistantPluginModel, AgentifaiAssistantPluginController, AgentifaiAssistantPlugin_controller_Hide_HideJS) {
var OS = OutSystems.Internal;
AgentifaiAssistantPluginController.default.hide$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("dxxec54fvEG69NKTMk04Rg:AIQDLFUFek6eY1qQ+aa9eQ:/ClientActionFlows.AIQDLFUFek6eY1qQ+aa9eQ:gAdaDeKuq5eEluSXY34A4A", "AgentifaiAssistantPlugin", "Hide", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:_fQyz0eE6keJS1G5d7wHbw", callContext.id);
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:f8PrmCiKT0e89i_9C_1WNw", callContext.id);
controller.safeExecuteJSNode(AgentifaiAssistantPlugin_controller_Hide_HideJS, "Hide", "Hide", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:hRPigwn_UUqNhq0g8nKItQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("dxxec54fvEG69NKTMk04Rg:AIQDLFUFek6eY1qQ+aa9eQ", callContext.id);
}

};
var controller = AgentifaiAssistantPluginController.default;
AgentifaiAssistantPluginController.default.clientActionProxies.hide$Action = function () {
return controller.executeActionInsideJSNode(AgentifaiAssistantPluginController.default.hide$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("AgentifaiAssistantPlugin.controller$Hide.HideJS", [], function () {
return function ($actions, $roles, $public) {
window.plugin.agentifai.setWidgetVisibility(false);
};
});

define("AgentifaiAssistantPlugin.controller$Initialize", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiAssistantPlugin.model", "AgentifaiAssistantPlugin.controller", "AgentifaiAssistantPlugin.controller$Initialize.InitializeJS"], function (exports, OutSystems, AgentifaiAssistantPluginModel, AgentifaiAssistantPluginController, AgentifaiAssistantPlugin_controller_Initialize_InitializeJS) {
var OS = OutSystems.Internal;
AgentifaiAssistantPluginController.default.initialize$Action = function (apiUrlIn, apiKeyIn, settingsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("AgentifaiAssistantPlugin.Initialize$vars"))());
vars.value.apiUrlInLocal = apiUrlIn;
vars.value.apiKeyInLocal = apiKeyIn;
vars.value.settingsInLocal = settingsIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("dxxec54fvEG69NKTMk04Rg:jjx2rrUEI0aeJN5D31fEPg:/ClientActionFlows.jjx2rrUEI0aeJN5D31fEPg:OrlFrrnNjK2fjMgpXjTeUA", "AgentifaiAssistantPlugin", "Initialize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:l0yAMFMd2kC44tgRe0M7Kg", callContext.id);
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:xGWbBaRqzEiEcv5AXydacA", callContext.id);
controller.safeExecuteJSNode(AgentifaiAssistantPlugin_controller_Initialize_InitializeJS, "Initialize", "Initialize", {
ApiKey: OS.DataConversion.JSNodeParamConverter.to(vars.value.apiKeyInLocal, OS.Types.Text),
Settings: OS.DataConversion.JSNodeParamConverter.to(vars.value.settingsInLocal, OS.Types.Object),
ApiUrl: OS.DataConversion.JSNodeParamConverter.to(vars.value.apiUrlInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:mImJXu9m0U28H_q0C8ECFw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("dxxec54fvEG69NKTMk04Rg:jjx2rrUEI0aeJN5D31fEPg", callContext.id);
}

};
var controller = AgentifaiAssistantPluginController.default;
AgentifaiAssistantPluginController.default.constructor.registerVariableGroupType("AgentifaiAssistantPlugin.Initialize$vars", [{
name: "ApiUrl",
attrName: "apiUrlInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ApiKey",
attrName: "apiKeyInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Settings",
attrName: "settingsInLocal",
mandatory: true,
dataType: OS.Types.Object,
defaultValue: function () {
return null;
}
}]);
AgentifaiAssistantPluginController.default.clientActionProxies.initialize$Action = function (apiUrlIn, apiKeyIn, settingsIn) {
apiUrlIn = (apiUrlIn === undefined) ? "" : apiUrlIn;
apiKeyIn = (apiKeyIn === undefined) ? "" : apiKeyIn;
settingsIn = (settingsIn === undefined) ? null : settingsIn;
return controller.executeActionInsideJSNode(AgentifaiAssistantPluginController.default.initialize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(apiUrlIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(apiKeyIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(settingsIn, OS.Types.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("AgentifaiAssistantPlugin.controller$Initialize.InitializeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.plugin.agentifai.initialize($parameters.ApiUrl, $parameters.ApiKey, $parameters.Settings);
};
});

define("AgentifaiAssistantPlugin.controller$Open", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiAssistantPlugin.model", "AgentifaiAssistantPlugin.controller", "AgentifaiAssistantPlugin.controller$Open.OpenJS"], function (exports, OutSystems, AgentifaiAssistantPluginModel, AgentifaiAssistantPluginController, AgentifaiAssistantPlugin_controller_Open_OpenJS) {
var OS = OutSystems.Internal;
AgentifaiAssistantPluginController.default.open$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("dxxec54fvEG69NKTMk04Rg:DRKe2zWbuECg5jvM90xYiA:/ClientActionFlows.DRKe2zWbuECg5jvM90xYiA:CEjDPT7wD7FeFPQzP7Rt6g", "AgentifaiAssistantPlugin", "Open", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:JNgAyasot0yt__pGRV+ABQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:vYkYEB4pg0uIUzfyTb0v1Q", callContext.id);
controller.safeExecuteJSNode(AgentifaiAssistantPlugin_controller_Open_OpenJS, "Open", "Open", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:JznfciSm+EKs0+4Sl7VSOg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("dxxec54fvEG69NKTMk04Rg:DRKe2zWbuECg5jvM90xYiA", callContext.id);
}

};
var controller = AgentifaiAssistantPluginController.default;
AgentifaiAssistantPluginController.default.clientActionProxies.open$Action = function () {
return controller.executeActionInsideJSNode(AgentifaiAssistantPluginController.default.open$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("AgentifaiAssistantPlugin.controller$Open.OpenJS", [], function () {
return function ($actions, $roles, $public) {
window.plugin.agentifai.openApplication();
};
});

define("AgentifaiAssistantPlugin.controller$RegisterUser", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiAssistantPlugin.model", "AgentifaiAssistantPlugin.controller", "AgentifaiAssistantPlugin.controller$RegisterUser.RegisterUserJS"], function (exports, OutSystems, AgentifaiAssistantPluginModel, AgentifaiAssistantPluginController, AgentifaiAssistantPlugin_controller_RegisterUser_RegisterUserJS) {
var OS = OutSystems.Internal;
AgentifaiAssistantPluginController.default.registerUser$Action = function (idIn, nameIn, tokenIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("AgentifaiAssistantPlugin.RegisterUser$vars"))());
vars.value.idInLocal = idIn;
vars.value.nameInLocal = nameIn;
vars.value.tokenInLocal = tokenIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("dxxec54fvEG69NKTMk04Rg:UzbRCksKvEyVGIiL+dddpw:/ClientActionFlows.UzbRCksKvEyVGIiL+dddpw:MoA1q0aYeqF8EiQBKh30tg", "AgentifaiAssistantPlugin", "RegisterUser", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:DcRMUyzwREinl49yWwKaTw", callContext.id);
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:700sSHPNHkusVYgqLzprEQ", callContext.id);
controller.safeExecuteJSNode(AgentifaiAssistantPlugin_controller_RegisterUser_RegisterUserJS, "RegisterUser", "RegisterUser", {
Name: OS.DataConversion.JSNodeParamConverter.to(vars.value.nameInLocal, OS.Types.Text),
Id: OS.DataConversion.JSNodeParamConverter.to(vars.value.idInLocal, OS.Types.Text),
Token: OS.DataConversion.JSNodeParamConverter.to(vars.value.tokenInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:St45hdsjiECPWXrzkHRtdw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("dxxec54fvEG69NKTMk04Rg:UzbRCksKvEyVGIiL+dddpw", callContext.id);
}

};
var controller = AgentifaiAssistantPluginController.default;
AgentifaiAssistantPluginController.default.constructor.registerVariableGroupType("AgentifaiAssistantPlugin.RegisterUser$vars", [{
name: "Id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Name",
attrName: "nameInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Token",
attrName: "tokenInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
AgentifaiAssistantPluginController.default.clientActionProxies.registerUser$Action = function (idIn, nameIn, tokenIn) {
idIn = (idIn === undefined) ? "" : idIn;
nameIn = (nameIn === undefined) ? "" : nameIn;
tokenIn = (tokenIn === undefined) ? "" : tokenIn;
return controller.executeActionInsideJSNode(AgentifaiAssistantPluginController.default.registerUser$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(idIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(nameIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(tokenIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("AgentifaiAssistantPlugin.controller$RegisterUser.RegisterUserJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var user = {"id": $parameters.Id, "name": $parameters.Name, "token": $parameters.Token};
window.plugin.agentifai.registerUser(user);
};
});

define("AgentifaiAssistantPlugin.controller$SetTheme", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiAssistantPlugin.model", "AgentifaiAssistantPlugin.controller", "AgentifaiAssistantPlugin.controller$SetTheme.SetThemeJS"], function (exports, OutSystems, AgentifaiAssistantPluginModel, AgentifaiAssistantPluginController, AgentifaiAssistantPlugin_controller_SetTheme_SetThemeJS) {
var OS = OutSystems.Internal;
AgentifaiAssistantPluginController.default.setTheme$Action = function (themeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("AgentifaiAssistantPlugin.SetTheme$vars"))());
vars.value.themeInLocal = themeIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("dxxec54fvEG69NKTMk04Rg:jr7Nc4+hCEyWfWCRnsJBXw:/ClientActionFlows.jr7Nc4+hCEyWfWCRnsJBXw:wDUt1YAWJqJf2_A48NZ8AQ", "AgentifaiAssistantPlugin", "SetTheme", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:mRlirbem9EiMiTSSvMvnGA", callContext.id);
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:buCFNKKtq0+ZzaieHW1MFQ", callContext.id);
controller.safeExecuteJSNode(AgentifaiAssistantPlugin_controller_SetTheme_SetThemeJS, "SetTheme", "SetTheme", {
Theme: OS.DataConversion.JSNodeParamConverter.to(vars.value.themeInLocal, OS.Types.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:ml3m92DwUECLnHp0cohudQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("dxxec54fvEG69NKTMk04Rg:jr7Nc4+hCEyWfWCRnsJBXw", callContext.id);
}

};
var controller = AgentifaiAssistantPluginController.default;
AgentifaiAssistantPluginController.default.constructor.registerVariableGroupType("AgentifaiAssistantPlugin.SetTheme$vars", [{
name: "Theme",
attrName: "themeInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
AgentifaiAssistantPluginController.default.clientActionProxies.setTheme$Action = function (themeIn) {
themeIn = (themeIn === undefined) ? "" : themeIn;
return controller.executeActionInsideJSNode(AgentifaiAssistantPluginController.default.setTheme$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(themeIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("AgentifaiAssistantPlugin.controller$SetTheme.SetThemeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.plugin.agentifai.setTheme($parameters.Theme);
};
});

define("AgentifaiAssistantPlugin.controller$SetWidgetDimensions", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiAssistantPlugin.model", "AgentifaiAssistantPlugin.controller", "AgentifaiAssistantPlugin.controller$SetWidgetDimensions.SetWidgetDimensionsJS"], function (exports, OutSystems, AgentifaiAssistantPluginModel, AgentifaiAssistantPluginController, AgentifaiAssistantPlugin_controller_SetWidgetDimensions_SetWidgetDimensionsJS) {
var OS = OutSystems.Internal;
AgentifaiAssistantPluginController.default.setWidgetDimensions$Action = function (horizontalAlignmentIn, verticalAlignmentIn, horizontalMarginIn, verticalMarginIn, sizeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("AgentifaiAssistantPlugin.SetWidgetDimensions$vars"))());
vars.value.horizontalAlignmentInLocal = horizontalAlignmentIn;
vars.value.verticalAlignmentInLocal = verticalAlignmentIn;
vars.value.horizontalMarginInLocal = horizontalMarginIn;
vars.value.verticalMarginInLocal = verticalMarginIn;
vars.value.sizeInLocal = sizeIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("dxxec54fvEG69NKTMk04Rg:ELqLoVO6vUGqdBGQ2GTeWQ:/ClientActionFlows.ELqLoVO6vUGqdBGQ2GTeWQ:jxasGYiYv8qjwIx6BQib1w", "AgentifaiAssistantPlugin", "SetWidgetDimensions", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:BCzDxe4UtUKfbCVzngqtXg", callContext.id);
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:s7r3VzjoXEWSNMa5A0wR6Q", callContext.id);
controller.safeExecuteJSNode(AgentifaiAssistantPlugin_controller_SetWidgetDimensions_SetWidgetDimensionsJS, "SetWidgetDimensions", "SetWidgetDimensions", {
HorizontalMargin: OS.DataConversion.JSNodeParamConverter.to(vars.value.horizontalMarginInLocal, OS.Types.Decimal),
Size: OS.DataConversion.JSNodeParamConverter.to(vars.value.sizeInLocal, OS.Types.Decimal),
HorizontalAlignment: OS.DataConversion.JSNodeParamConverter.to(vars.value.horizontalAlignmentInLocal, OS.Types.Text),
VerticalAlignment: OS.DataConversion.JSNodeParamConverter.to(vars.value.verticalAlignmentInLocal, OS.Types.Text),
VerticalMargin: OS.DataConversion.JSNodeParamConverter.to(vars.value.verticalMarginInLocal, OS.Types.Decimal)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:uzzbeUugv0iXQN20Det0Tw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("dxxec54fvEG69NKTMk04Rg:ELqLoVO6vUGqdBGQ2GTeWQ", callContext.id);
}

};
var controller = AgentifaiAssistantPluginController.default;
AgentifaiAssistantPluginController.default.constructor.registerVariableGroupType("AgentifaiAssistantPlugin.SetWidgetDimensions$vars", [{
name: "HorizontalAlignment",
attrName: "horizontalAlignmentInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "VerticalAlignment",
attrName: "verticalAlignmentInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "HorizontalMargin",
attrName: "horizontalMarginInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "VerticalMargin",
attrName: "verticalMarginInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "Size",
attrName: "sizeInLocal",
mandatory: false,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
AgentifaiAssistantPluginController.default.clientActionProxies.setWidgetDimensions$Action = function (horizontalAlignmentIn, verticalAlignmentIn, horizontalMarginIn, verticalMarginIn, sizeIn) {
horizontalAlignmentIn = (horizontalAlignmentIn === undefined) ? "" : horizontalAlignmentIn;
verticalAlignmentIn = (verticalAlignmentIn === undefined) ? "" : verticalAlignmentIn;
horizontalMarginIn = (horizontalMarginIn === undefined) ? OS.DataTypes.Decimal.defaultValue : horizontalMarginIn;
verticalMarginIn = (verticalMarginIn === undefined) ? OS.DataTypes.Decimal.defaultValue : verticalMarginIn;
sizeIn = (sizeIn === undefined) ? OS.DataTypes.Decimal.defaultValue : sizeIn;
return controller.executeActionInsideJSNode(AgentifaiAssistantPluginController.default.setWidgetDimensions$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(horizontalAlignmentIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(verticalAlignmentIn, OS.Types.Text), OS.DataConversion.JSNodeParamConverter.from(horizontalMarginIn, OS.Types.Decimal), OS.DataConversion.JSNodeParamConverter.from(verticalMarginIn, OS.Types.Decimal), OS.DataConversion.JSNodeParamConverter.from(sizeIn, OS.Types.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("AgentifaiAssistantPlugin.controller$SetWidgetDimensions.SetWidgetDimensionsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var dimensions = { 
    "horizontalAlignment": $parameters.HorizontalAlignment,
    "verticalAlignment": $parameters.VerticalAlignment,
    "horizontalMargin": $parameters.HorizontalMargin,
    "verticalMargin": $parameters.VerticalMargin,
    "size": $parameters.Size
};

window.plugin.agentifai.setWidgetDimensions(dimensions);
};
});

define("AgentifaiAssistantPlugin.controller$Show", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiAssistantPlugin.model", "AgentifaiAssistantPlugin.controller", "AgentifaiAssistantPlugin.controller$Show.ShowJS"], function (exports, OutSystems, AgentifaiAssistantPluginModel, AgentifaiAssistantPluginController, AgentifaiAssistantPlugin_controller_Show_ShowJS) {
var OS = OutSystems.Internal;
AgentifaiAssistantPluginController.default.show$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("dxxec54fvEG69NKTMk04Rg:pqqFJKPW4kmOwkbyD+LGZQ:/ClientActionFlows.pqqFJKPW4kmOwkbyD+LGZQ:FdqZYWW30yBvta8U77+XpQ", "AgentifaiAssistantPlugin", "Show", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:+jleVsfS30+aFUWbc7doqw", callContext.id);
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:xeSgTAlOPESIk3_9l6+Pxg", callContext.id);
controller.safeExecuteJSNode(AgentifaiAssistantPlugin_controller_Show_ShowJS, "Show", "Show", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:XVQxDBw1zEeTK+WzP0+ahg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("dxxec54fvEG69NKTMk04Rg:pqqFJKPW4kmOwkbyD+LGZQ", callContext.id);
}

};
var controller = AgentifaiAssistantPluginController.default;
AgentifaiAssistantPluginController.default.clientActionProxies.show$Action = function () {
return controller.executeActionInsideJSNode(AgentifaiAssistantPluginController.default.show$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("AgentifaiAssistantPlugin.controller$Show.ShowJS", [], function () {
return function ($actions, $roles, $public) {
window.plugin.agentifai.setWidgetVisibility(true);
};
});

define("AgentifaiAssistantPlugin.controller$Stop", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiAssistantPlugin.model", "AgentifaiAssistantPlugin.controller", "AgentifaiAssistantPlugin.controller$Stop.StopJS"], function (exports, OutSystems, AgentifaiAssistantPluginModel, AgentifaiAssistantPluginController, AgentifaiAssistantPlugin_controller_Stop_StopJS) {
var OS = OutSystems.Internal;
AgentifaiAssistantPluginController.default.stop$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("dxxec54fvEG69NKTMk04Rg:JmJOrH7rk0Crn1Qlzm4BZw:/ClientActionFlows.JmJOrH7rk0Crn1Qlzm4BZw:IPJvishIKv3TOJHlsvleyQ", "AgentifaiAssistantPlugin", "Stop", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:0XfzkHMESUCfDBI1f+W1fA", callContext.id);
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:xPW+5CDWfk2H6CS5o+L60A", callContext.id);
controller.safeExecuteJSNode(AgentifaiAssistantPlugin_controller_Stop_StopJS, "Stop", "Stop", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:blqt0BUsAUOgER1YUlyobw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("dxxec54fvEG69NKTMk04Rg:JmJOrH7rk0Crn1Qlzm4BZw", callContext.id);
}

};
var controller = AgentifaiAssistantPluginController.default;
AgentifaiAssistantPluginController.default.clientActionProxies.stop$Action = function () {
return controller.executeActionInsideJSNode(AgentifaiAssistantPluginController.default.stop$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("AgentifaiAssistantPlugin.controller$Stop.StopJS", [], function () {
return function ($actions, $roles, $public) {
window.plugin.agentifai.stop();
};
});

define("AgentifaiAssistantPlugin.controller$UnregisterUser", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiAssistantPlugin.model", "AgentifaiAssistantPlugin.controller", "AgentifaiAssistantPlugin.controller$UnregisterUser.UnregisterUserJS"], function (exports, OutSystems, AgentifaiAssistantPluginModel, AgentifaiAssistantPluginController, AgentifaiAssistantPlugin_controller_UnregisterUser_UnregisterUserJS) {
var OS = OutSystems.Internal;
AgentifaiAssistantPluginController.default.unregisterUser$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("dxxec54fvEG69NKTMk04Rg:7nErBhEwUUSZWfx20_kSQg:/ClientActionFlows.7nErBhEwUUSZWfx20_kSQg:Bp4bn0GnI5xWJI09pZNcWw", "AgentifaiAssistantPlugin", "UnregisterUser", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:VkPQ8Tp7x0GCOsfVBoXczQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:Fvrm4oIhCkqEwoJdNHu5Hw", callContext.id);
controller.safeExecuteJSNode(AgentifaiAssistantPlugin_controller_UnregisterUser_UnregisterUserJS, "UnregisterUser", "UnregisterUser", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("dxxec54fvEG69NKTMk04Rg:PnPrYkuF30+gQqvjUlfd2Q", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("dxxec54fvEG69NKTMk04Rg:7nErBhEwUUSZWfx20_kSQg", callContext.id);
}

};
var controller = AgentifaiAssistantPluginController.default;
AgentifaiAssistantPluginController.default.clientActionProxies.unregisterUser$Action = function () {
return controller.executeActionInsideJSNode(AgentifaiAssistantPluginController.default.unregisterUser$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("AgentifaiAssistantPlugin.controller$UnregisterUser.UnregisterUserJS", [], function () {
return function ($actions, $roles, $public) {
window.plugin.agentifai.unregisterUser();
};
});

define("AgentifaiAssistantPlugin.controller", ["exports", "OutSystems/ClientRuntime/Main", "AgentifaiAssistantPlugin.model", "AgentifaiAssistantPlugin.controller$debugger"], function (exports, OutSystems, AgentifaiAssistantPluginModel, AgentifaiAssistantPlugin_Controller_debugger) {
var OS = OutSystems.Internal;
var AgentifaiAssistantPluginController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return AgentifaiAssistantPluginController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseModuleController);
AgentifaiAssistantPluginController.default = new Controller();
});
define("AgentifaiAssistantPlugin.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"Fvrm4oIhCkqEwoJdNHu5Hw": {
getter: function (varBag, idService) {
return varBag.unregisterUserJSResult.value;
}
},
"maYYJfHqyUurIxgnqBhByg": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.Types.Text
},
"sSkO8mV2_UW2qCT_Alwucg": {
getter: function (varBag, idService) {
return varBag.vars.value.nameInLocal;
},
dataType: OS.Types.Text
},
"nWnFvtkBxk2rmBxr4CNwGg": {
getter: function (varBag, idService) {
return varBag.vars.value.tokenInLocal;
},
dataType: OS.Types.Text
},
"700sSHPNHkusVYgqLzprEQ": {
getter: function (varBag, idService) {
return varBag.registerUserJSResult.value;
}
},
"KVPTw+fvq0WiUq_HeNDzMQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.isAvailableOut;
},
dataType: OS.Types.Boolean
},
"N0YvK2yJXEyurH6Th468fg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"+O52bI1Fi0S7FoefmJK3PQ": {
getter: function (varBag, idService) {
return varBag.isCordovaDefinedVar.value;
}
},
"9EfaYgMYHUKW7bpRFsJ4Sw": {
getter: function (varBag, idService) {
return varBag.pluginIsLoadedJSResult.value;
}
},
"xeSgTAlOPESIk3_9l6+Pxg": {
getter: function (varBag, idService) {
return varBag.showJSResult.value;
}
},
"f8PrmCiKT0e89i_9C_1WNw": {
getter: function (varBag, idService) {
return varBag.hideJSResult.value;
}
},
"hD7St2Vj_0i48GuK09OUAw": {
getter: function (varBag, idService) {
return varBag.closeJSResult.value;
}
},
"GyB16K5NqUSAhg3EnIoLYw": {
getter: function (varBag, idService) {
return varBag.vars.value.themeInLocal;
},
dataType: OS.Types.Text
},
"buCFNKKtq0+ZzaieHW1MFQ": {
getter: function (varBag, idService) {
return varBag.setThemeJSResult.value;
}
},
"MTUawN6uaUCBuGcdC8OH3w": {
getter: function (varBag, idService) {
return varBag.vars.value.horizontalAlignmentInLocal;
},
dataType: OS.Types.Text
},
"Sn+UYVh0f02eZWJ6DygAtQ": {
getter: function (varBag, idService) {
return varBag.vars.value.verticalAlignmentInLocal;
},
dataType: OS.Types.Text
},
"mtc_fNrq20q5XBRSiJEmaQ": {
getter: function (varBag, idService) {
return varBag.vars.value.horizontalMarginInLocal;
},
dataType: OS.Types.Decimal
},
"UdfzRKHkPEKEdw+KSeJU3Q": {
getter: function (varBag, idService) {
return varBag.vars.value.verticalMarginInLocal;
},
dataType: OS.Types.Decimal
},
"XrErITGoFki8Zoh0hysTsw": {
getter: function (varBag, idService) {
return varBag.vars.value.sizeInLocal;
},
dataType: OS.Types.Decimal
},
"s7r3VzjoXEWSNMa5A0wR6Q": {
getter: function (varBag, idService) {
return varBag.setWidgetDimensionsJSResult.value;
}
},
"xPW+5CDWfk2H6CS5o+L60A": {
getter: function (varBag, idService) {
return varBag.stopJSResult.value;
}
},
"AyacMzVP3EiaOePL_NCcbA": {
getter: function (varBag, idService) {
return varBag.vars.value.apiUrlInLocal;
},
dataType: OS.Types.Text
},
"gTYAqxdQmEWqhUV3673Tfg": {
getter: function (varBag, idService) {
return varBag.vars.value.apiKeyInLocal;
},
dataType: OS.Types.Text
},
"mA0evfY4J0+r4HaVvqVePw": {
getter: function (varBag, idService) {
return varBag.vars.value.settingsInLocal;
},
dataType: OS.Types.Object
},
"xGWbBaRqzEiEcv5AXydacA": {
getter: function (varBag, idService) {
return varBag.initializeJSResult.value;
}
},
"vYkYEB4pg0uIUzfyTb0v1Q": {
getter: function (varBag, idService) {
return varBag.openJSResult.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
