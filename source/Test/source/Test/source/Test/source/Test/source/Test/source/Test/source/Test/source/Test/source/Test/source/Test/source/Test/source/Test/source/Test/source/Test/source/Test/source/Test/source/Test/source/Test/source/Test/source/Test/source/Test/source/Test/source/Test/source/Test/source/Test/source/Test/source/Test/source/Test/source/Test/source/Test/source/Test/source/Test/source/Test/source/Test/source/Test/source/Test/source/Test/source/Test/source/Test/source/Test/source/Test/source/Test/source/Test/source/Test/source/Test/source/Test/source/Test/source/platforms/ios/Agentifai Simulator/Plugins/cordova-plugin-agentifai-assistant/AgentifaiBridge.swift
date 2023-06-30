import AgentifaiAssistant

@objc(AgentifaiBridge)
class AgentifaiBridge : CDVPlugin {
    
    private var clientCommand: CDVInvokedUrlCommand?
    
    @objc(initialize:) func initialize(command: CDVInvokedUrlCommand) {
        guard let apiUrl = command.argument(at: 0) as? String,
            let apiKey = command.argument(at: 1) as? String,
            let settings = command.argument(at: 2) as? JSON
            else {
                self.sendError(command: command)
                return
        }
        
        Agentifai.initialize(apiUrl: apiUrl, apiKey: apiKey, settings: settings, delegate: self)
        let pluginResult = CDVPluginResult(status: CDVCommandStatus_OK)
        self.commandDelegate?.send(pluginResult, callbackId: command.callbackId)
    }

    @objc(setConfigurations:) func setConfigurations(command: CDVInvokedUrlCommand) {
        guard let data = command.argument(at: 0) as? JSON else {
            self.sendError(command: command)
            return
        }
        
        do {
            let configurations: ClientApiConfigurations = try AgentifaiHelper.decode(from: data)
            Agentifai.setConfigurations(configurations: configurations)
            
            let pluginResult = CDVPluginResult(status: CDVCommandStatus_OK)
            self.commandDelegate?.send(pluginResult, callbackId: command.callbackId)
        } catch {
           self.sendError(command: command)
        }
    }
    
    @objc(setWidgetVisibility:) func setWidgetVisibility(command: CDVInvokedUrlCommand) {
        guard let visibility = command.arguments.first as? Bool else {
                self.sendError(command: command)
                return
        }
        
        Agentifai.setWidgetVisibility(visible: visibility)
        let pluginResult = CDVPluginResult(status: CDVCommandStatus_OK)
        self.commandDelegate?.send(pluginResult, callbackId: command.callbackId)
    }

    @objc(openApplication:) func openApplication(command: CDVInvokedUrlCommand) {
        let intent = command.arguments.first as? String
        Agentifai.openApplication(intent: intent)
        let pluginResult = CDVPluginResult(status: CDVCommandStatus_OK)
        self.commandDelegate?.send(pluginResult, callbackId: command.callbackId)
    }

    @objc(closeApplication:) func closeApplication(command: CDVInvokedUrlCommand) {
        Agentifai.closeApplication()
        let pluginResult = CDVPluginResult(status: CDVCommandStatus_OK)
        self.commandDelegate?.send(pluginResult, callbackId: command.callbackId)
    }
    
    @objc(stop:) func stop(command: CDVInvokedUrlCommand) {
        Agentifai.stop()
        let pluginResult = CDVPluginResult(status: CDVCommandStatus_OK)
        self.commandDelegate?.send(pluginResult, callbackId: command.callbackId)
    }
    
    @objc(registerUser:) func registerUser(command: CDVInvokedUrlCommand) {
        guard let userJson = command.argument(at: 0) as? JSON,
            let id = userJson["id"] as? String,
            let authHeaders = command.argument(at: 1) as? [String: String]
        else {
            self.sendError(command: command)
            return
        }

        let name = userJson["name"] as? String
        let token = userJson["token"] as? String

        self.commandDelegate?.run(inBackground: {
            let user = AgentifaiUser(id: id, name: name, token: token)
            Agentifai.register(user: user, authHeaders: authHeaders)
        
            let pluginResult = CDVPluginResult(status: CDVCommandStatus_OK)
            self.commandDelegate?.send(pluginResult, callbackId: command.callbackId)
        })
    }

    @objc(unregisterUser:) func unregisterUser(command: CDVInvokedUrlCommand) {
        self.commandDelegate?.run(inBackground: {
            Agentifai.unregisterUser()
            let pluginResult = CDVPluginResult(status: CDVCommandStatus_OK)
            self.commandDelegate?.send(pluginResult, callbackId: command.callbackId)
        })
    }
    
    @objc(requestResult:) func requestResult(command: CDVInvokedUrlCommand) {
        guard let requestId = command.argument(at: 0) as? String,
            let success = command.argument(at: 1) as? Bool,
            var response = command.argument(at: 2) as? JSON
            else {
                self.sendError(command: command)
                return
        }
        
        do {
            response["requestId"] = requestId
            response["success"] = success
            let hostResponse: HostAppResponse = try AgentifaiHelper.decode(from: response)
            
            self.commandDelegate?.run(inBackground: {
                Agentifai.requestResult(response: hostResponse)
                let pluginResult = CDVPluginResult(status: CDVCommandStatus_OK)
                self.commandDelegate?.send(pluginResult, callbackId: command.callbackId)
            })
        }
        catch {
            self.sendError(command: command)
            self.sendErrorResponse(requestId: requestId, error: error)
        }
    }
    
    @objc(addClientCallback:) func addClientCallback(command: CDVInvokedUrlCommand) {
        self.clientCommand = command
    }

    @objc(setWidgetDimensions:) func setWidgetDimensions(command: CDVInvokedUrlCommand) {
        guard let data = command.argument(at: 0) as? JSON else {
                self.sendError(command: command)
                return
            }
        
        do {
            let dimensions: WidgetDimensions = try AgentifaiHelper.decode(from: data)
            Agentifai.setWidgetDimensions(dimensions: dimensions)
            
            let pluginResult = CDVPluginResult(status: CDVCommandStatus_OK)
            self.commandDelegate?.send(pluginResult, callbackId: command.callbackId)
        } catch {
           self.sendError(command: command)
        }
    }

    @objc(setTheme:) func setTheme(command: CDVInvokedUrlCommand) {
        guard let theme = command.arguments.first as? String else {
                self.sendError(command: command)
                return
        }
        
        Agentifai.setTheme(theme: theme)
        let pluginResult = CDVPluginResult(status: CDVCommandStatus_OK)
        self.commandDelegate?.send(pluginResult, callbackId: command.callbackId)
    }
    
    private func sendDataToClient(data: JSON) throws {
        guard let delegate = self.commandDelegate else {
            throw AgentifaiPluginError.commandDelegateNotExists
        }
        
        guard let callback = self.clientCommand else {
            throw AgentifaiPluginError.clientCallbackNotExists
        }
        
        delegate.run(inBackground: {
            let pluginResult: CDVPluginResult! = CDVPluginResult(
                status: CDVCommandStatus_OK,
                messageAs: data
            )
            pluginResult.keepCallback = true
        
            delegate.send(pluginResult, callbackId: callback.callbackId)
        })
    }
    
    private func sendError(command: CDVInvokedUrlCommand) {
        self.commandDelegate?.run(inBackground: {
            let result = CDVPluginResult(status: CDVCommandStatus_ERROR)
            self.commandDelegate.send(result, callbackId: command.callbackId)
        })
    }
    
    private func sendErrorResponse(requestId: String, error: Error) {
        let nonAnonymizableRegexPaths = ["*"]
        let data: [String : Any] = [
            "status": 550,
            "body": [
                "error": AgentifaiHelper.getErrorDescription(error: error)
            ]
        ]

        let response = HostAppResponse(requestId: requestId, success: false, data: data, nonAnonymizableRegexPaths: nonAnonymizableRegexPaths)
        Agentifai.requestResult(response: response)
    }
    
}

extension AgentifaiBridge: AgentifaiProtocol {
    
    func request(id: String, data: JSON) {
        var newData: JSON = data
        newData["type"] = "request"
        newData["requestId"] = id
        
        do {
            try self.sendDataToClient(data: newData)
        }
        catch {
            self.sendErrorResponse(requestId: id, error: error)
        }
    }
    
    func agentifaiStatus(isOpened: Bool) {
        var newData: JSON = [:]
        newData["type"] = "applicationStatus"
        newData["isOpened"] = isOpened
        
        do {
            try self.sendDataToClient(data: newData)
        }
        catch {}
    }
    
}