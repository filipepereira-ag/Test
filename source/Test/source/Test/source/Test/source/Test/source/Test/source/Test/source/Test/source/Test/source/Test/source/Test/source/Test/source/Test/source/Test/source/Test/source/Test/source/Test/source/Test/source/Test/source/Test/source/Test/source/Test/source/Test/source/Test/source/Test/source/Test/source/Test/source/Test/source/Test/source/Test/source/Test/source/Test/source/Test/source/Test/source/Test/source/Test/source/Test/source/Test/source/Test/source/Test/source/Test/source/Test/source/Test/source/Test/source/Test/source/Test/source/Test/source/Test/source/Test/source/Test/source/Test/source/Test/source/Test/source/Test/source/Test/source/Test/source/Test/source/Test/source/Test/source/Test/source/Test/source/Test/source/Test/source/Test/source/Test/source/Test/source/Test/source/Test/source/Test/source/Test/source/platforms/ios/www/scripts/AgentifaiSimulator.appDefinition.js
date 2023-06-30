define("AgentifaiSimulator.appDefinition", ["OutSystems/ClientRuntime/Main"], function (OutSystems) {
var OS = OutSystems.Internal;
return {
environmentKey: "ad63ad15-dbe9-4827-8eed-6ad98469d17b",
environmentName: "Development",
applicationKey: "24de4d8d-98d0-44d0-80b6-fd19fd58a3b4",
applicationName: "Agentifai Simulator",
userProviderName: "Users",
debugEnabled: true,
homeModuleName: "AgentifaiSimulator",
homeModuleKey: "8aafc838-1bf5-4be3-a15d-dcb66bd1d563",
homeModuleControllerName: "AgentifaiSimulator.controller",
homeModuleLanguageResourcesName: "AgentifaiSimulator.languageResources",
defaultTransition: "SlideFromRight",
errorPageConfig: {
showExceptionStack: false,
messages: {
defaultMessage: null,
screenNotFound: null,
noDefaultScreen: null,
appOffline: null,
incompatibleProducer: null
},
extraMessage: null,
reloadLabel: null
},
isWeb: false,
personalArea: null,
showWatermark: false
};
});
