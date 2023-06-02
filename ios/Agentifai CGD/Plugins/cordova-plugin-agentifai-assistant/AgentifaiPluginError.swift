import Foundation

protocol AgentifaiCordovaPluginError: Error {
    var message: String { get }
}

enum AgentifaiPluginError {
    case commandDelegateNotExists
    case clientCallbackNotExists
}

extension AgentifaiPluginError: AgentifaiCordovaPluginError {
    
    var message: String {
        switch self {
        case .commandDelegateNotExists:
            return "[AgentifaiBridge] Command delegate does not exists"
            
        case .clientCallbackNotExists:
            return "[AgentifaiBridge] The plugin callback does not exist"
        }
    }
    
}
