Pod::Spec.new do |s|
  s.name             = 'AgentifaiCoreUserAuth'
  s.version          = '1.0.0'
  s.summary          = 'The Agentifai core user authenticator library.'
  s.homepage         = 'https://agentifai.com/'
  s.license          = "MIT"
  s.author           = { "Agentifai" => "alice@agentifai.com" }
  s.source           = { :git => 'git@bitbucket.org:agentifai/core-user-auth-framework-ios.git', :tag => s.version.to_s }
  s.platform         = :ios, "11.0"
  s.swift_version    = '5.0'
  s.source_files     = "AgentifaiCoreUserAuth/AgentifaiCoreUserAuth", "AgentifaiCoreUserAuth/AgentifaiCoreUserAuth/**/*.{swift}"
  s.frameworks = "Foundation"
  
  s.dependency "JWTDecode", "~> 2.6"
  s.dependency "RxSwift", "~> 6.0"
  s.dependency 'Swinject', '~> 2.7.0'
  s.dependency 'AgentifaiCoreCommon'
  s.dependency 'AgentifaiCoreNetworking'
  
end
