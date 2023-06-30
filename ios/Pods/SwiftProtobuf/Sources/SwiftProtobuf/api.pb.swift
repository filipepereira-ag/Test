// DO NOT EDIT.
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: google/protobuf/api.proto
//
// For information on using the generated types, please see the documentation:
//   https://github.com/apple/swift-protobuf/

// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

import Foundation

// If the compiler emits an error on this type, it is because this file
// was generated by a version of the `protoc` Swift plug-in that is
// incompatible with the version of SwiftProtobuf to which you are linking.
// Please ensure that your are building against the same version of the API
// that was used to generate this file.
fileprivate struct _GeneratedWithProtocGenSwiftVersion: SwiftProtobuf.ProtobufAPIVersionCheck {
  struct _2: SwiftProtobuf.ProtobufAPIVersion_2 {}
  typealias Version = _2
}

/// Api is a light-weight descriptor for an API Interface.
///
/// Interfaces are also described as "protocol buffer services" in some contexts,
/// such as by the "service" keyword in a .proto file, but they are different
/// from API Services, which represent a concrete implementation of an interface
/// as opposed to simply a description of methods and bindings. They are also
/// sometimes simply referred to as "APIs" in other contexts, such as the name of
/// this message itself. See https://cloud.google.com/apis/design/glossary for
/// detailed terminology.
public struct Google_Protobuf_Api {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// The fully qualified name of this interface, including package name
  /// followed by the interface's simple name.
  public var name: String {
    get {return _storage._name}
    set {_uniqueStorage()._name = newValue}
  }

  /// The methods of this interface, in unspecified order.
  public var methods: [Google_Protobuf_Method] {
    get {return _storage._methods}
    set {_uniqueStorage()._methods = newValue}
  }

  /// Any metadata attached to the interface.
  public var options: [Google_Protobuf_Option] {
    get {return _storage._options}
    set {_uniqueStorage()._options = newValue}
  }

  /// A version string for this interface. If specified, must have the form
  /// `major-version.minor-version`, as in `1.10`. If the minor version is
  /// omitted, it defaults to zero. If the entire version field is empty, the
  /// major version is derived from the package name, as outlined below. If the
  /// field is not empty, the version in the package name will be verified to be
  /// consistent with what is provided here.
  ///
  /// The versioning schema uses [semantic
  /// versioning](http://semver.org) where the major version number
  /// indicates a breaking change and the minor version an additive,
  /// non-breaking change. Both version numbers are signals to users
  /// what to expect from different versions, and should be carefully
  /// chosen based on the product plan.
  ///
  /// The major version is also reflected in the package name of the
  /// interface, which must end in `v<major-version>`, as in
  /// `google.feature.v1`. For major versions 0 and 1, the suffix can
  /// be omitted. Zero major versions must only be used for
  /// experimental, non-GA interfaces.
  public var version: String {
    get {return _storage._version}
    set {_uniqueStorage()._version = newValue}
  }

  /// Source context for the protocol buffer service represented by this
  /// message.
  public var sourceContext: Google_Protobuf_SourceContext {
    get {return _storage._sourceContext ?? Google_Protobuf_SourceContext()}
    set {_uniqueStorage()._sourceContext = newValue}
  }
  /// Returns true if `sourceContext` has been explicitly set.
  public var hasSourceContext: Bool {return _storage._sourceContext != nil}
  /// Clears the value of `sourceContext`. Subsequent reads from it will return its default value.
  public mutating func clearSourceContext() {_uniqueStorage()._sourceContext = nil}

  /// Included interfaces. See [Mixin][].
  public var mixins: [Google_Protobuf_Mixin] {
    get {return _storage._mixins}
    set {_uniqueStorage()._mixins = newValue}
  }

  /// The source syntax of the service.
  public var syntax: Google_Protobuf_Syntax {
    get {return _storage._syntax}
    set {_uniqueStorage()._syntax = newValue}
  }

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  fileprivate var _storage = _StorageClass.defaultInstance
}

/// Method represents a method of an API interface.
public struct Google_Protobuf_Method {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// The simple name of this method.
  public var name: String = String()

  /// A URL of the input message type.
  public var requestTypeURL: String = String()

  /// If true, the request is streamed.
  public var requestStreaming: Bool = false

  /// The URL of the output message type.
  public var responseTypeURL: String = String()

  /// If true, the response is streamed.
  public var responseStreaming: Bool = false

  /// Any metadata attached to the method.
  public var options: [Google_Protobuf_Option] = []

  /// The source syntax of this method.
  public var syntax: Google_Protobuf_Syntax = .proto2

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

/// Declares an API Interface to be included in this interface. The including
/// interface must redeclare all the methods from the included interface, but
/// documentation and options are inherited as follows:
///
/// - If after comment and whitespace stripping, the documentation
///   string of the redeclared method is empty, it will be inherited
///   from the original method.
///
/// - Each annotation belonging to the service config (http,
///   visibility) which is not set in the redeclared method will be
///   inherited.
///
/// - If an http annotation is inherited, the path pattern will be
///   modified as follows. Any version prefix will be replaced by the
///   version of the including interface plus the [root][] path if
///   specified.
///
/// Example of a simple mixin:
///
///     package google.acl.v1;
///     service AccessControl {
///       // Get the underlying ACL object.
///       rpc GetAcl(GetAclRequest) returns (Acl) {
///         option (google.api.http).get = "/v1/{resource=**}:getAcl";
///       }
///     }
///
///     package google.storage.v2;
///     service Storage {
///       rpc GetAcl(GetAclRequest) returns (Acl);
///
///       // Get a data record.
///       rpc GetData(GetDataRequest) returns (Data) {
///         option (google.api.http).get = "/v2/{resource=**}";
///       }
///     }
///
/// Example of a mixin configuration:
///
///     apis:
///     - name: google.storage.v2.Storage
///       mixins:
///       - name: google.acl.v1.AccessControl
///
/// The mixin construct implies that all methods in `AccessControl` are
/// also declared with same name and request/response types in
/// `Storage`. A documentation generator or annotation processor will
/// see the effective `Storage.GetAcl` method after inherting
/// documentation and annotations as follows:
///
///     service Storage {
///       // Get the underlying ACL object.
///       rpc GetAcl(GetAclRequest) returns (Acl) {
///         option (google.api.http).get = "/v2/{resource=**}:getAcl";
///       }
///       ...
///     }
///
/// Note how the version in the path pattern changed from `v1` to `v2`.
///
/// If the `root` field in the mixin is specified, it should be a
/// relative path under which inherited HTTP paths are placed. Example:
///
///     apis:
///     - name: google.storage.v2.Storage
///       mixins:
///       - name: google.acl.v1.AccessControl
///         root: acls
///
/// This implies the following inherited HTTP annotation:
///
///     service Storage {
///       // Get the underlying ACL object.
///       rpc GetAcl(GetAclRequest) returns (Acl) {
///         option (google.api.http).get = "/v2/acls/{resource=**}:getAcl";
///       }
///       ...
///     }
public struct Google_Protobuf_Mixin {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// The fully qualified name of the interface which is included.
  public var name: String = String()

  /// If non-empty specifies a path under which inherited HTTP paths
  /// are rooted.
  public var root: String = String()

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "google.protobuf"

extension Google_Protobuf_Api: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".Api"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "name"),
    2: .same(proto: "methods"),
    3: .same(proto: "options"),
    4: .same(proto: "version"),
    5: .standard(proto: "source_context"),
    6: .same(proto: "mixins"),
    7: .same(proto: "syntax"),
  ]

  fileprivate class _StorageClass {
    var _name: String = String()
    var _methods: [Google_Protobuf_Method] = []
    var _options: [Google_Protobuf_Option] = []
    var _version: String = String()
    var _sourceContext: Google_Protobuf_SourceContext? = nil
    var _mixins: [Google_Protobuf_Mixin] = []
    var _syntax: Google_Protobuf_Syntax = .proto2

    static let defaultInstance = _StorageClass()

    private init() {}

    init(copying source: _StorageClass) {
      _name = source._name
      _methods = source._methods
      _options = source._options
      _version = source._version
      _sourceContext = source._sourceContext
      _mixins = source._mixins
      _syntax = source._syntax
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    _ = _uniqueStorage()
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      while let fieldNumber = try decoder.nextFieldNumber() {
        switch fieldNumber {
        case 1: try decoder.decodeSingularStringField(value: &_storage._name)
        case 2: try decoder.decodeRepeatedMessageField(value: &_storage._methods)
        case 3: try decoder.decodeRepeatedMessageField(value: &_storage._options)
        case 4: try decoder.decodeSingularStringField(value: &_storage._version)
        case 5: try decoder.decodeSingularMessageField(value: &_storage._sourceContext)
        case 6: try decoder.decodeRepeatedMessageField(value: &_storage._mixins)
        case 7: try decoder.decodeSingularEnumField(value: &_storage._syntax)
        default: break
        }
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      if !_storage._name.isEmpty {
        try visitor.visitSingularStringField(value: _storage._name, fieldNumber: 1)
      }
      if !_storage._methods.isEmpty {
        try visitor.visitRepeatedMessageField(value: _storage._methods, fieldNumber: 2)
      }
      if !_storage._options.isEmpty {
        try visitor.visitRepeatedMessageField(value: _storage._options, fieldNumber: 3)
      }
      if !_storage._version.isEmpty {
        try visitor.visitSingularStringField(value: _storage._version, fieldNumber: 4)
      }
      if let v = _storage._sourceContext {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 5)
      }
      if !_storage._mixins.isEmpty {
        try visitor.visitRepeatedMessageField(value: _storage._mixins, fieldNumber: 6)
      }
      if _storage._syntax != .proto2 {
        try visitor.visitSingularEnumField(value: _storage._syntax, fieldNumber: 7)
      }
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Google_Protobuf_Api, rhs: Google_Protobuf_Api) -> Bool {
    if lhs._storage !== rhs._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((lhs._storage, rhs._storage)) { (_args: (_StorageClass, _StorageClass)) in
        let _storage = _args.0
        let rhs_storage = _args.1
        if _storage._name != rhs_storage._name {return false}
        if _storage._methods != rhs_storage._methods {return false}
        if _storage._options != rhs_storage._options {return false}
        if _storage._version != rhs_storage._version {return false}
        if _storage._sourceContext != rhs_storage._sourceContext {return false}
        if _storage._mixins != rhs_storage._mixins {return false}
        if _storage._syntax != rhs_storage._syntax {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Google_Protobuf_Method: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".Method"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "name"),
    2: .standard(proto: "request_type_url"),
    3: .standard(proto: "request_streaming"),
    4: .standard(proto: "response_type_url"),
    5: .standard(proto: "response_streaming"),
    6: .same(proto: "options"),
    7: .same(proto: "syntax"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularStringField(value: &self.name)
      case 2: try decoder.decodeSingularStringField(value: &self.requestTypeURL)
      case 3: try decoder.decodeSingularBoolField(value: &self.requestStreaming)
      case 4: try decoder.decodeSingularStringField(value: &self.responseTypeURL)
      case 5: try decoder.decodeSingularBoolField(value: &self.responseStreaming)
      case 6: try decoder.decodeRepeatedMessageField(value: &self.options)
      case 7: try decoder.decodeSingularEnumField(value: &self.syntax)
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.name.isEmpty {
      try visitor.visitSingularStringField(value: self.name, fieldNumber: 1)
    }
    if !self.requestTypeURL.isEmpty {
      try visitor.visitSingularStringField(value: self.requestTypeURL, fieldNumber: 2)
    }
    if self.requestStreaming != false {
      try visitor.visitSingularBoolField(value: self.requestStreaming, fieldNumber: 3)
    }
    if !self.responseTypeURL.isEmpty {
      try visitor.visitSingularStringField(value: self.responseTypeURL, fieldNumber: 4)
    }
    if self.responseStreaming != false {
      try visitor.visitSingularBoolField(value: self.responseStreaming, fieldNumber: 5)
    }
    if !self.options.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.options, fieldNumber: 6)
    }
    if self.syntax != .proto2 {
      try visitor.visitSingularEnumField(value: self.syntax, fieldNumber: 7)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Google_Protobuf_Method, rhs: Google_Protobuf_Method) -> Bool {
    if lhs.name != rhs.name {return false}
    if lhs.requestTypeURL != rhs.requestTypeURL {return false}
    if lhs.requestStreaming != rhs.requestStreaming {return false}
    if lhs.responseTypeURL != rhs.responseTypeURL {return false}
    if lhs.responseStreaming != rhs.responseStreaming {return false}
    if lhs.options != rhs.options {return false}
    if lhs.syntax != rhs.syntax {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Google_Protobuf_Mixin: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".Mixin"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "name"),
    2: .same(proto: "root"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularStringField(value: &self.name)
      case 2: try decoder.decodeSingularStringField(value: &self.root)
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.name.isEmpty {
      try visitor.visitSingularStringField(value: self.name, fieldNumber: 1)
    }
    if !self.root.isEmpty {
      try visitor.visitSingularStringField(value: self.root, fieldNumber: 2)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Google_Protobuf_Mixin, rhs: Google_Protobuf_Mixin) -> Bool {
    if lhs.name != rhs.name {return false}
    if lhs.root != rhs.root {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
