Pod::Spec.new do |s|
  s.name             = 'AgentifaiRxSwiftCombine'
  s.version          = '1.0.0'
  s.summary          = 'The Agentifai core analytics library.'
  s.homepage         = 'https://agentifai.com/'
  s.license          = "MIT"
  s.author           = { "Agentifai" => "alice@agentifai.com" }
  s.source           = { :git => 'git@bitbucket.org:agentifai/rx-swift-combine-framework-ios.git', :tag => s.version.to_s }
  s.platform         = :ios, "13.0"
  s.swift_version    = '5.0'
  s.source_files     = "AgentifaiRxSwiftCombine/AgentifaiRxSwiftCombine", "AgentifaiRxSwiftCombine/AgentifaiRxSwiftCombine/**/*.{swift}"
  s.frameworks = "Foundation"

  s.dependency 'RxSwift', '~> 6.5.0'
end
