Pod::Spec.new do |s|
  s.name             = 'AgentifaiCoreAnalytics'
  s.version          = '1.0.0'
  s.summary          = 'The Agentifai core analytics library.'
  s.homepage         = 'https://agentifai.com/'
  s.license          = "MIT"
  s.author           = { "Agentifai" => "alice@agentifai.com" }
  s.source           = { :git => 'git@bitbucket.org:agentifai/core-analytics-framework-ios.git', :tag => s.version.to_s }
  s.platform         = :ios, "13.0"
  s.swift_version    = '5.0'
  s.source_files     = "AgentifaiCoreAnalytics/AgentifaiCoreAnalytics", "AgentifaiCoreAnalytics/AgentifaiCoreAnalytics/**/*.{swift}"
  s.frameworks = "Foundation"

  s.dependency 'AgentifaiCoreNetworking'
  s.dependency 'AgentifaiCoreUserAuth'
  s.dependency 'AgentifaiRxSwiftCombine'
  s.dependency 'Swinject', '~> 2.8.3'
  
end
