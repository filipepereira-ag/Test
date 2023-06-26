typealias JSON = [String: Any]

class AgentifaiHelper {
    
    static func decode<T: Decodable>(from json: JSON) throws -> T {
        let data = try self.serialize(json: json)
        return try JSONDecoder().decode(T.self, from: data)
    }
    
    static func getErrorDescription(error: Error) -> String {
        if let pluginError = error as? AgentifaiPluginError {
            return pluginError.message
        } else {
            return "[AgentifaiBridge] " + error.localizedDescription
        }
    }
    
    private static func serialize(json: JSON) throws -> Data {
        return try JSONSerialization.data(withJSONObject: json, options: .fragmentsAllowed)
    }
    
}
