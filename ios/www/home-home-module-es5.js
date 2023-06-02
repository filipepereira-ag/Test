(function () {
  var _excluded = ["encryptedKey"],
      _excluded2 = ["encryptedKey"],
      _excluded3 = ["payload"],
      _excluded4 = ["ext", "key_ops", "alg", "use"];

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "+S68": function S68(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isCloudflareWorkers", function () {
        return isCloudflareWorkers;
      });

      function isCloudflareWorkers() {
        return typeof WebSocketPair === 'function';
      }
      /***/

    },

    /***/
    "/D05": function D05(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneralEncrypt", function () {
        return GeneralEncrypt;
      });
      /* harmony import */


      var _flattened_encrypt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../flattened/encrypt.js */
      "Dk7m");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../util/errors.js */
      "StPg");
      /* harmony import */


      var _lib_cek_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../lib/cek.js */
      "qW6o");
      /* harmony import */


      var _lib_is_disjoint_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../lib/is_disjoint.js */
      "yopU");
      /* harmony import */


      var _lib_encrypt_key_management_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../lib/encrypt_key_management.js */
      "NP3A");
      /* harmony import */


      var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../runtime/base64url.js */
      "KjJ5");
      /* harmony import */


      var _lib_validate_crit_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../lib/validate_crit.js */
      "ElMP");

      var IndividualRecipient = /*#__PURE__*/function () {
        function IndividualRecipient(enc, key, options) {
          _classCallCheck(this, IndividualRecipient);

          this.parent = enc;
          this.key = key;
          this.options = options;
        }

        _createClass(IndividualRecipient, [{
          key: "setUnprotectedHeader",
          value: function setUnprotectedHeader(unprotectedHeader) {
            if (this.unprotectedHeader) {
              throw new TypeError('setUnprotectedHeader can only be called once');
            }

            this.unprotectedHeader = unprotectedHeader;
            return this;
          }
        }, {
          key: "addRecipient",
          value: function addRecipient() {
            var _this$parent;

            return (_this$parent = this.parent).addRecipient.apply(_this$parent, arguments);
          }
        }, {
          key: "encrypt",
          value: function encrypt() {
            var _this$parent2;

            return (_this$parent2 = this.parent).encrypt.apply(_this$parent2, arguments);
          }
        }, {
          key: "done",
          value: function done() {
            return this.parent;
          }
        }]);

        return IndividualRecipient;
      }();

      var GeneralEncrypt = /*#__PURE__*/function () {
        function GeneralEncrypt(plaintext) {
          _classCallCheck(this, GeneralEncrypt);

          this._recipients = [];
          this._plaintext = plaintext;
        }

        _createClass(GeneralEncrypt, [{
          key: "addRecipient",
          value: function addRecipient(key, options) {
            var recipient = new IndividualRecipient(this, key, {
              crit: options === null || options === void 0 ? void 0 : options.crit
            });

            this._recipients.push(recipient);

            return recipient;
          }
        }, {
          key: "setProtectedHeader",
          value: function setProtectedHeader(protectedHeader) {
            if (this._protectedHeader) {
              throw new TypeError('setProtectedHeader can only be called once');
            }

            this._protectedHeader = protectedHeader;
            return this;
          }
        }, {
          key: "setSharedUnprotectedHeader",
          value: function setSharedUnprotectedHeader(sharedUnprotectedHeader) {
            if (this._unprotectedHeader) {
              throw new TypeError('setSharedUnprotectedHeader can only be called once');
            }

            this._unprotectedHeader = sharedUnprotectedHeader;
            return this;
          }
        }, {
          key: "setAdditionalAuthenticatedData",
          value: function setAdditionalAuthenticatedData(aad) {
            this._aad = aad;
            return this;
          }
        }, {
          key: "encrypt",
          value: function () {
            var _encrypt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
              var _a, _b, _c, _this$_recipients, recipient, flattened, _jwe, enc, i, _recipient, joseHeader, alg, cek, jwe, _i2, _recipient2, target, _joseHeader, p2c, _flattened, _yield$Object, encryptedKey, parameters;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (this._recipients.length) {
                        _context.next = 2;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('at least one recipient must be added');

                    case 2:
                      options = {
                        deflateRaw: options === null || options === void 0 ? void 0 : options.deflateRaw
                      };

                      if (!(this._recipients.length === 1)) {
                        _context.next = 15;
                        break;
                      }

                      _this$_recipients = _slicedToArray(this._recipients, 1), recipient = _this$_recipients[0];
                      _context.next = 7;
                      return new _flattened_encrypt_js__WEBPACK_IMPORTED_MODULE_0__["FlattenedEncrypt"](this._plaintext).setAdditionalAuthenticatedData(this._aad).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(recipient.unprotectedHeader).encrypt(recipient.key, _objectSpread(_objectSpread({}, recipient.options), options));

                    case 7:
                      flattened = _context.sent;
                      _jwe = {
                        ciphertext: flattened.ciphertext,
                        iv: flattened.iv,
                        recipients: [{}],
                        tag: flattened.tag
                      };
                      if (flattened.aad) _jwe.aad = flattened.aad;
                      if (flattened["protected"]) _jwe["protected"] = flattened["protected"];
                      if (flattened.unprotected) _jwe.unprotected = flattened.unprotected;
                      if (flattened.encrypted_key) _jwe.recipients[0].encrypted_key = flattened.encrypted_key;
                      if (flattened.header) _jwe.recipients[0].header = flattened.header;
                      return _context.abrupt("return", _jwe);

                    case 15:
                      i = 0;

                    case 16:
                      if (!(i < this._recipients.length)) {
                        _context.next = 41;
                        break;
                      }

                      _recipient = this._recipients[i];

                      if (Object(_lib_is_disjoint_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._protectedHeader, this._unprotectedHeader, _recipient.unprotectedHeader)) {
                        _context.next = 20;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint');

                    case 20:
                      joseHeader = _objectSpread(_objectSpread(_objectSpread({}, this._protectedHeader), this._unprotectedHeader), _recipient.unprotectedHeader);
                      alg = joseHeader.alg;

                      if (!(typeof alg !== 'string' || !alg)) {
                        _context.next = 24;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('JWE "alg" (Algorithm) Header Parameter missing or invalid');

                    case 24:
                      if (!(alg === 'dir' || alg === 'ECDH-ES')) {
                        _context.next = 26;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('"dir" and "ECDH-ES" alg may only be used with a single recipient');

                    case 26:
                      if (!(typeof joseHeader.enc !== 'string' || !joseHeader.enc)) {
                        _context.next = 28;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');

                    case 28:
                      if (enc) {
                        _context.next = 32;
                        break;
                      }

                      enc = joseHeader.enc;
                      _context.next = 34;
                      break;

                    case 32:
                      if (!(enc !== joseHeader.enc)) {
                        _context.next = 34;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('JWE "enc" (Encryption Algorithm) Header Parameter must be the same for all recipients');

                    case 34:
                      Object(_lib_validate_crit_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"], new Map(), _recipient.options.crit, this._protectedHeader, joseHeader);

                      if (!(joseHeader.zip !== undefined)) {
                        _context.next = 38;
                        break;
                      }

                      if (!(!this._protectedHeader || !this._protectedHeader.zip)) {
                        _context.next = 38;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');

                    case 38:
                      i++;
                      _context.next = 16;
                      break;

                    case 41:
                      cek = Object(_lib_cek_js__WEBPACK_IMPORTED_MODULE_2__["default"])(enc);
                      jwe = {
                        ciphertext: '',
                        iv: '',
                        recipients: [],
                        tag: ''
                      };
                      _i2 = 0;

                    case 44:
                      if (!(_i2 < this._recipients.length)) {
                        _context.next = 73;
                        break;
                      }

                      _recipient2 = this._recipients[_i2];
                      target = {};
                      jwe.recipients.push(target);
                      _joseHeader = _objectSpread(_objectSpread(_objectSpread({}, this._protectedHeader), this._unprotectedHeader), _recipient2.unprotectedHeader);
                      p2c = _joseHeader.alg.startsWith('PBES2') ? 2048 + _i2 : undefined;

                      if (!(_i2 === 0)) {
                        _context.next = 63;
                        break;
                      }

                      _context.next = 53;
                      return new _flattened_encrypt_js__WEBPACK_IMPORTED_MODULE_0__["FlattenedEncrypt"](this._plaintext).setAdditionalAuthenticatedData(this._aad).setContentEncryptionKey(cek).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(_recipient2.unprotectedHeader).setKeyManagementParameters({
                        p2c: p2c
                      }).encrypt(_recipient2.key, _objectSpread(_objectSpread(_objectSpread({}, _recipient2.options), options), {}, _defineProperty({}, _flattened_encrypt_js__WEBPACK_IMPORTED_MODULE_0__["unprotected"], true)));

                    case 53:
                      _flattened = _context.sent;
                      jwe.ciphertext = _flattened.ciphertext;
                      jwe.iv = _flattened.iv;
                      jwe.tag = _flattened.tag;
                      if (_flattened.aad) jwe.aad = _flattened.aad;
                      if (_flattened["protected"]) jwe["protected"] = _flattened["protected"];
                      if (_flattened.unprotected) jwe.unprotected = _flattened.unprotected;
                      target.encrypted_key = _flattened.encrypted_key;
                      if (_flattened.header) target.header = _flattened.header;
                      return _context.abrupt("continue", 70);

                    case 63:
                      _context.next = 65;
                      return Object(_lib_encrypt_key_management_js__WEBPACK_IMPORTED_MODULE_4__["default"])(((_a = _recipient2.unprotectedHeader) === null || _a === void 0 ? void 0 : _a.alg) || ((_b = this._protectedHeader) === null || _b === void 0 ? void 0 : _b.alg) || ((_c = this._unprotectedHeader) === null || _c === void 0 ? void 0 : _c.alg), enc, _recipient2.key, cek, {
                        p2c: p2c
                      });

                    case 65:
                      _yield$Object = _context.sent;
                      encryptedKey = _yield$Object.encryptedKey;
                      parameters = _yield$Object.parameters;
                      target.encrypted_key = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_5__["encode"])(encryptedKey);
                      if (_recipient2.unprotectedHeader || parameters) target.header = _objectSpread(_objectSpread({}, _recipient2.unprotectedHeader), parameters);

                    case 70:
                      _i2++;
                      _context.next = 44;
                      break;

                    case 73:
                      return _context.abrupt("return", jwe);

                    case 74:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function encrypt(_x) {
              return _encrypt.apply(this, arguments);
            }

            return encrypt;
          }()
        }]);

        return GeneralEncrypt;
      }();
      /***/

    },

    /***/
    "/cEr": function cEr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignJWT", function () {
        return SignJWT;
      });
      /* harmony import */


      var _jws_compact_sign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../jws/compact/sign.js */
      "iEOA");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");
      /* harmony import */


      var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../lib/buffer_utils.js */
      "xpfA");
      /* harmony import */


      var _produce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./produce.js */
      "Wcb1");

      var SignJWT = /*#__PURE__*/function (_produce_js__WEBPACK_) {
        _inherits(SignJWT, _produce_js__WEBPACK_);

        var _super = _createSuper(SignJWT);

        function SignJWT() {
          _classCallCheck(this, SignJWT);

          return _super.apply(this, arguments);
        }

        _createClass(SignJWT, [{
          key: "setProtectedHeader",
          value: function setProtectedHeader(protectedHeader) {
            this._protectedHeader = protectedHeader;
            return this;
          }
        }, {
          key: "sign",
          value: function () {
            var _sign = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(key, options) {
              var _a, sig;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      sig = new _jws_compact_sign_js__WEBPACK_IMPORTED_MODULE_0__["CompactSign"](_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_2__["encoder"].encode(JSON.stringify(this._payload)));
                      sig.setProtectedHeader(this._protectedHeader);

                      if (!(Array.isArray((_a = this._protectedHeader) === null || _a === void 0 ? void 0 : _a.crit) && this._protectedHeader.crit.includes('b64') && this._protectedHeader.b64 === false)) {
                        _context2.next = 4;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWTInvalid"]('JWTs MUST NOT use unencoded payload');

                    case 4:
                      return _context2.abrupt("return", sig.sign(key, options));

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function sign(_x2, _x3) {
              return _sign.apply(this, arguments);
            }

            return sign;
          }()
        }]);

        return SignJWT;
      }(_produce_js__WEBPACK_IMPORTED_MODULE_3__["ProduceJWT"]);
      /***/

    },

    /***/
    "/xMJ": function xMJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generalVerify", function () {
        return generalVerify;
      });
      /* harmony import */


      var _flattened_verify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../flattened/verify.js */
      "n8OJ");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../util/errors.js */
      "StPg");
      /* harmony import */


      var _lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../lib/is_object.js */
      "2fVw");

      function generalVerify(_x4, _x5, _x6) {
        return _generalVerify.apply(this, arguments);
      }
      /***/


      function _generalVerify() {
        _generalVerify = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(jws, key, options) {
          var _iterator, _step, signature;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__["default"])(jws)) {
                    _context3.next = 2;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWSInvalid"]('General JWS must be an object');

                case 2:
                  if (!(!Array.isArray(jws.signatures) || !jws.signatures.every(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__["default"]))) {
                    _context3.next = 4;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWSInvalid"]('JWS Signatures missing or incorrect type');

                case 4:
                  _iterator = _createForOfIteratorHelper(jws.signatures);
                  _context3.prev = 5;

                  _iterator.s();

                case 7:
                  if ((_step = _iterator.n()).done) {
                    _context3.next = 19;
                    break;
                  }

                  signature = _step.value;
                  _context3.prev = 9;
                  _context3.next = 12;
                  return Object(_flattened_verify_js__WEBPACK_IMPORTED_MODULE_0__["flattenedVerify"])({
                    header: signature.header,
                    payload: jws.payload,
                    "protected": signature["protected"],
                    signature: signature.signature
                  }, key, options);

                case 12:
                  return _context3.abrupt("return", _context3.sent);

                case 15:
                  _context3.prev = 15;
                  _context3.t0 = _context3["catch"](9);

                case 17:
                  _context3.next = 7;
                  break;

                case 19:
                  _context3.next = 24;
                  break;

                case 21:
                  _context3.prev = 21;
                  _context3.t1 = _context3["catch"](5);

                  _iterator.e(_context3.t1);

                case 24:
                  _context3.prev = 24;

                  _iterator.f();

                  return _context3.finish(24);

                case 27:
                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWSSignatureVerificationFailed"]();

                case 28:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, null, [[5, 21, 24, 27], [9, 15]]);
        }));
        return _generalVerify.apply(this, arguments);
      }
    },

    /***/
    "18mX": function mX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "calculateJwkThumbprint", function () {
        return calculateJwkThumbprint;
      });
      /* harmony import */


      var _runtime_digest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../runtime/digest.js */
      "DsUi");
      /* harmony import */


      var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../runtime/base64url.js */
      "KjJ5");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");
      /* harmony import */


      var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../lib/buffer_utils.js */
      "xpfA");
      /* harmony import */


      var _lib_is_object_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../lib/is_object.js */
      "2fVw");

      var check = function check(value, description) {
        if (typeof value !== 'string' || !value) {
          throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWKInvalid"]("".concat(description, " missing or invalid"));
        }
      };

      function calculateJwkThumbprint(_x7) {
        return _calculateJwkThumbprint.apply(this, arguments);
      }
      /***/


      function _calculateJwkThumbprint() {
        _calculateJwkThumbprint = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(jwk) {
          var digestAlgorithm,
              components,
              data,
              _args4 = arguments;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  digestAlgorithm = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : 'sha256';

                  if (Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_4__["default"])(jwk)) {
                    _context4.next = 3;
                    break;
                  }

                  throw new TypeError('JWK must be an object');

                case 3:
                  if (!(digestAlgorithm !== 'sha256' && digestAlgorithm !== 'sha384' && digestAlgorithm !== 'sha512')) {
                    _context4.next = 5;
                    break;
                  }

                  throw new TypeError('digestAlgorithm must one of "sha256", "sha384", or "sha512"');

                case 5:
                  _context4.t0 = jwk.kty;
                  _context4.next = _context4.t0 === 'EC' ? 8 : _context4.t0 === 'OKP' ? 13 : _context4.t0 === 'RSA' ? 17 : _context4.t0 === 'oct' ? 21 : 24;
                  break;

                case 8:
                  check(jwk.crv, '"crv" (Curve) Parameter');
                  check(jwk.x, '"x" (X Coordinate) Parameter');
                  check(jwk.y, '"y" (Y Coordinate) Parameter');
                  components = {
                    crv: jwk.crv,
                    kty: jwk.kty,
                    x: jwk.x,
                    y: jwk.y
                  };
                  return _context4.abrupt("break", 25);

                case 13:
                  check(jwk.crv, '"crv" (Subtype of Key Pair) Parameter');
                  check(jwk.x, '"x" (Public Key) Parameter');
                  components = {
                    crv: jwk.crv,
                    kty: jwk.kty,
                    x: jwk.x
                  };
                  return _context4.abrupt("break", 25);

                case 17:
                  check(jwk.e, '"e" (Exponent) Parameter');
                  check(jwk.n, '"n" (Modulus) Parameter');
                  components = {
                    e: jwk.e,
                    kty: jwk.kty,
                    n: jwk.n
                  };
                  return _context4.abrupt("break", 25);

                case 21:
                  check(jwk.k, '"k" (Key Value) Parameter');
                  components = {
                    k: jwk.k,
                    kty: jwk.kty
                  };
                  return _context4.abrupt("break", 25);

                case 24:
                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSENotSupported"]('"kty" (Key Type) Parameter missing or unsupported');

                case 25:
                  data = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_3__["encoder"].encode(JSON.stringify(components));
                  _context4.t1 = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_1__["encode"]);
                  _context4.next = 29;
                  return Object(_runtime_digest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(digestAlgorithm, data);

                case 29:
                  _context4.t2 = _context4.sent;
                  return _context4.abrupt("return", (0, _context4.t1)(_context4.t2));

                case 31:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));
        return _calculateJwkThumbprint.apply(this, arguments);
      }
    },

    /***/
    "1qei": function qei(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");

      var fetchJwks = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(url, timeout, options) {
          var controller, id, timedOut, response;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  timedOut = false;

                  if (typeof AbortController === 'function') {
                    controller = new AbortController();
                    id = setTimeout(function () {
                      timedOut = true;
                      controller.abort();
                    }, timeout);
                  }

                  _context5.next = 4;
                  return fetch(url.href, {
                    signal: controller ? controller.signal : undefined,
                    redirect: 'manual',
                    headers: options.headers
                  })["catch"](function (err) {
                    if (timedOut) throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWKSTimeout"]();
                    throw err;
                  });

                case 4:
                  response = _context5.sent;
                  if (id !== undefined) clearTimeout(id);

                  if (!(response.status !== 200)) {
                    _context5.next = 8;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JOSEError"]('Expected 200 OK from the JSON Web Key Set HTTP response');

                case 8:
                  _context5.prev = 8;
                  _context5.next = 11;
                  return response.json();

                case 11:
                  return _context5.abrupt("return", _context5.sent);

                case 14:
                  _context5.prev = 14;
                  _context5.t0 = _context5["catch"](8);
                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JOSEError"]('Failed to parse the JSON Web Key Set HTTP response as JSON');

                case 17:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, null, [[8, 14]]);
        }));

        return function fetchJwks(_x8, _x9, _x10) {
          return _ref.apply(this, arguments);
        };
      }();
      /* harmony default export */


      __webpack_exports__["default"] = fetchJwks;
      /***/
    },

    /***/
    "1uat": function uat(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./x64-core */
          "MlIO"));
        } else {}
      })(this, function (CryptoJS) {
        (function () {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var Hasher = C_lib.Hasher;
          var C_x64 = C.x64;
          var X64Word = C_x64.Word;
          var X64WordArray = C_x64.WordArray;
          var C_algo = C.algo;

          function X64Word_create() {
            return X64Word.create.apply(X64Word, arguments);
          } // Constants


          var K = [X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd), X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc), X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019), X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118), X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe), X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2), X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1), X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694), X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3), X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65), X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483), X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5), X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210), X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4), X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725), X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70), X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926), X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df), X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8), X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b), X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001), X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30), X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910), X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8), X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53), X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8), X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb), X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3), X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60), X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec), X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9), X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b), X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207), X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178), X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6), X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b), X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493), X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c), X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a), X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)]; // Reusable objects

          var W = [];

          (function () {
            for (var i = 0; i < 80; i++) {
              W[i] = X64Word_create();
            }
          })();
          /**
           * SHA-512 hash algorithm.
           */


          var SHA512 = C_algo.SHA512 = Hasher.extend({
            _doReset: function _doReset() {
              this._hash = new X64WordArray.init([new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b), new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1), new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f), new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)]);
            },
            _doProcessBlock: function _doProcessBlock(M, offset) {
              // Shortcuts
              var H = this._hash.words;
              var H0 = H[0];
              var H1 = H[1];
              var H2 = H[2];
              var H3 = H[3];
              var H4 = H[4];
              var H5 = H[5];
              var H6 = H[6];
              var H7 = H[7];
              var H0h = H0.high;
              var H0l = H0.low;
              var H1h = H1.high;
              var H1l = H1.low;
              var H2h = H2.high;
              var H2l = H2.low;
              var H3h = H3.high;
              var H3l = H3.low;
              var H4h = H4.high;
              var H4l = H4.low;
              var H5h = H5.high;
              var H5l = H5.low;
              var H6h = H6.high;
              var H6l = H6.low;
              var H7h = H7.high;
              var H7l = H7.low; // Working variables

              var ah = H0h;
              var al = H0l;
              var bh = H1h;
              var bl = H1l;
              var ch = H2h;
              var cl = H2l;
              var dh = H3h;
              var dl = H3l;
              var eh = H4h;
              var el = H4l;
              var fh = H5h;
              var fl = H5l;
              var gh = H6h;
              var gl = H6l;
              var hh = H7h;
              var hl = H7l; // Rounds

              for (var i = 0; i < 80; i++) {
                var Wil;
                var Wih; // Shortcut

                var Wi = W[i]; // Extend message

                if (i < 16) {
                  Wih = Wi.high = M[offset + i * 2] | 0;
                  Wil = Wi.low = M[offset + i * 2 + 1] | 0;
                } else {
                  // Gamma0
                  var gamma0x = W[i - 15];
                  var gamma0xh = gamma0x.high;
                  var gamma0xl = gamma0x.low;
                  var gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
                  var gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25); // Gamma1

                  var gamma1x = W[i - 2];
                  var gamma1xh = gamma1x.high;
                  var gamma1xl = gamma1x.low;
                  var gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
                  var gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26); // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]

                  var Wi7 = W[i - 7];
                  var Wi7h = Wi7.high;
                  var Wi7l = Wi7.low;
                  var Wi16 = W[i - 16];
                  var Wi16h = Wi16.high;
                  var Wi16l = Wi16.low;
                  Wil = gamma0l + Wi7l;
                  Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
                  Wil = Wil + gamma1l;
                  Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
                  Wil = Wil + Wi16l;
                  Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);
                  Wi.high = Wih;
                  Wi.low = Wil;
                }

                var chh = eh & fh ^ ~eh & gh;
                var chl = el & fl ^ ~el & gl;
                var majh = ah & bh ^ ah & ch ^ bh & ch;
                var majl = al & bl ^ al & cl ^ bl & cl;
                var sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
                var sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
                var sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
                var sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9); // t1 = h + sigma1 + ch + K[i] + W[i]

                var Ki = K[i];
                var Kih = Ki.high;
                var Kil = Ki.low;
                var t1l = hl + sigma1l;
                var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
                var t1l = t1l + chl;
                var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
                var t1l = t1l + Kil;
                var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
                var t1l = t1l + Wil;
                var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0); // t2 = sigma0 + maj

                var t2l = sigma0l + majl;
                var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0); // Update working variables

                hh = gh;
                hl = gl;
                gh = fh;
                gl = fl;
                fh = eh;
                fl = el;
                el = dl + t1l | 0;
                eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
                dh = ch;
                dl = cl;
                ch = bh;
                cl = bl;
                bh = ah;
                bl = al;
                al = t1l + t2l | 0;
                ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
              } // Intermediate hash value


              H0l = H0.low = H0l + al;
              H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
              H1l = H1.low = H1l + bl;
              H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
              H2l = H2.low = H2l + cl;
              H2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
              H3l = H3.low = H3l + dl;
              H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
              H4l = H4.low = H4l + el;
              H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
              H5l = H5.low = H5l + fl;
              H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
              H6l = H6.low = H6l + gl;
              H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
              H7l = H7.low = H7l + hl;
              H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
            },
            _doFinalize: function _doFinalize() {
              // Shortcuts
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8; // Add padding

              dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
              dataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
              dataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;
              data.sigBytes = dataWords.length * 4; // Hash final blocks

              this._process(); // Convert hash to 32-bit word array before returning


              var hash = this._hash.toX32(); // Return final computed hash


              return hash;
            },
            clone: function clone() {
              var clone = Hasher.clone.call(this);
              clone._hash = this._hash.clone();
              return clone;
            },
            blockSize: 1024 / 32
          });
          /**
           * Shortcut function to the hasher's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           *
           * @return {WordArray} The hash.
           *
           * @static
           *
           * @example
           *
           *     var hash = CryptoJS.SHA512('message');
           *     var hash = CryptoJS.SHA512(wordArray);
           */

          C.SHA512 = Hasher._createHelper(SHA512);
          /**
           * Shortcut function to the HMAC's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           * @param {WordArray|string} key The secret key.
           *
           * @return {WordArray} The HMAC.
           *
           * @static
           *
           * @example
           *
           *     var hmac = CryptoJS.HmacSHA512(message, key);
           */

          C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
        })();

        return CryptoJS.SHA512;
      });
      /***/

    },

    /***/
    "2fVw": function fVw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return isObject;
      });

      function isObjectLike(value) {
        return typeof value === 'object' && value !== null;
      }

      function isObject(input) {
        if (!isObjectLike(input) || Object.prototype.toString.call(input) !== '[object Object]') {
          return false;
        }

        if (Object.getPrototypeOf(input) === null) {
          return true;
        }

        var proto = input;

        while (Object.getPrototypeOf(proto) !== null) {
          proto = Object.getPrototypeOf(proto);
        }

        return Object.getPrototypeOf(input) === proto;
      }
      /***/

    },

    /***/
    "3Qup": function Qup(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Endpoint", function () {
        return Endpoint;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Intent", function () {
        return Intent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginLibComponent", function () {
        return LoginLibComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginLibModule", function () {
        return LoginLibModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginLibService", function () {
        return LoginLibService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var LoginLibService = function LoginLibService() {
        _classCallCheck(this, LoginLibService);
      };

      LoginLibService.ɵfac = function LoginLibService_Factory(t) {
        return new (t || LoginLibService)();
      };

      LoginLibService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        token: LoginLibService,
        factory: LoginLibService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(LoginLibService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      function LoginLibComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "ion-button", 6);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_div_44_Template_ion_button_click_1_listener() {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r4);
            var item_r2 = ctx.$implicit;
            var ctx_r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
            return ctx_r3.openIntentAction(item_r2);
          });
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", item_r2.label, " ");
        }
      }

      function LoginLibComponent_ion_select_option_51_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "ion-select-option", 10);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        }

        if (rf & 2) {
          var endpoint_r5 = ctx.$implicit;
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("value", endpoint_r5);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(endpoint_r5.label);
        }
      }

      var LoginLibComponent = /*#__PURE__*/function () {
        function LoginLibComponent() {
          _classCallCheck(this, LoginLibComponent);

          this.login = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.fakeTokenLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.logout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.endpoint = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.removeConsents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.initialize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.showWidget = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.hideWidget = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.openApp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.registerUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.unregisterUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.setWidgetDimensions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.openIntent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.name = 'Agentifai';
        }

        _createClass(LoginLibComponent, [{
          key: "loginAction",
          value: function loginAction() {
            if (this.username && this.password) {
              this.login.emit({
                username: this.username,
                password: this.password
              });
            }
          }
        }, {
          key: "fakeTokenLoginAction",
          value: function fakeTokenLoginAction() {
            if (this.username && this.password) {
              this.fakeTokenLogin.emit({
                username: this.username,
                password: this.password
              });
            }
          }
        }, {
          key: "logoutAction",
          value: function logoutAction() {
            this.logout.emit();
          }
        }, {
          key: "endpointChangeAction",
          value: function endpointChangeAction() {
            this.endpoint.emit(this.endpointSelected);
          }
        }, {
          key: "removeVoiceConsentAction",
          value: function removeVoiceConsentAction() {
            this.removeConsents.emit();
          }
        }, {
          key: "initializeAction",
          value: function initializeAction() {
            this.initialize.emit();
          }
        }, {
          key: "showWidgetAction",
          value: function showWidgetAction() {
            this.showWidget.emit();
          }
        }, {
          key: "hideWidgetAction",
          value: function hideWidgetAction() {
            this.hideWidget.emit();
          }
        }, {
          key: "openAppAction",
          value: function openAppAction() {
            this.openApp.emit();
          }
        }, {
          key: "setWidgetDimensionsAction",
          value: function setWidgetDimensionsAction() {
            this.setWidgetDimensions.emit();
          }
        }, {
          key: "registerUserAction",
          value: function registerUserAction() {
            this.registerUser.emit({
              id: '123456789',
              name: this.name
            });
          }
        }, {
          key: "unregisterUserAction",
          value: function unregisterUserAction() {
            this.unregisterUser.emit();
          }
        }, {
          key: "openIntentAction",
          value: function openIntentAction(event) {
            this.openIntent.emit(event.value);
          }
        }]);

        return LoginLibComponent;
      }();

      LoginLibComponent.ɵfac = function LoginLibComponent_Factory(t) {
        return new (t || LoginLibComponent)();
      };

      LoginLibComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
        type: LoginLibComponent,
        selectors: [["login-login-lib"]],
        inputs: {
          toolbarTitle: "toolbarTitle",
          usernameLabel: "usernameLabel",
          passwordLabel: "passwordLabel",
          endpoints: "endpoints",
          intents: "intents"
        },
        outputs: {
          login: "login",
          fakeTokenLogin: "fakeTokenLogin",
          logout: "logout",
          endpoint: "endpoint",
          removeConsents: "removeConsents",
          initialize: "initialize",
          showWidget: "showWidget",
          hideWidget: "hideWidget",
          openApp: "openApp",
          registerUser: "registerUser",
          unregisterUser: "unregisterUser",
          setWidgetDimensions: "setWidgetDimensions",
          openIntent: "openIntent"
        },
        decls: 52,
        vars: 10,
        consts: [[3, "translucent"], [1, "ion-padding"], ["position", "floating"], ["inputmode", "text", "id", "name", 3, "ngModel", "ngModelChange"], ["inputmode", "numeric", "id", "username", 3, "ngModel", "ngModelChange"], ["type", "password", "inputmode", "password", "id", "password", "show-hide-input", "", 3, "ngModel", "ngModelChange"], [3, "click"], [4, "ngFor", "ngForOf"], ["okText", "confirm", "cancelText", "cancel", 3, "ngModel", "ngModelChange", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function LoginLibComponent_Template(rf, ctx) {
          if (rf & 1) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "ion-header", 0);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "ion-toolbar");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "ion-title");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "div", 1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "ion-item");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(6, "ion-label", 2);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(7, "Name");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(8, "ion-input", 3);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ngModelChange", function LoginLibComponent_Template_ion_input_ngModelChange_8_listener($event) {
              return ctx.name = $event;
            });
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(9, "ion-item");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(10, "ion-label", 2);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(11);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(12, "ion-input", 4);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ngModelChange", function LoginLibComponent_Template_ion_input_ngModelChange_12_listener($event) {
              return ctx.username = $event;
            });
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(13, "ion-item");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(14, "ion-label", 2);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(15);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(16, "ion-input", 5);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ngModelChange", function LoginLibComponent_Template_ion_input_ngModelChange_16_listener($event) {
              return ctx.password = $event;
            });
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(17, "div");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(18, "ion-button", 6);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_Template_ion_button_click_18_listener() {
              return ctx.loginAction();
            });
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(19, " Login ");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(20, "ion-button", 6);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_Template_ion_button_click_20_listener() {
              return ctx.fakeTokenLoginAction();
            });
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(21, " Fake Token Login ");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(22, "ion-button", 6);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_Template_ion_button_click_22_listener() {
              return ctx.logoutAction();
            });
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(23, " Logout ");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(24, "div");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(25, "ion-button", 6);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_Template_ion_button_click_25_listener() {
              return ctx.initializeAction();
            });
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(26, " Initialize ");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(27, "div");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(28, "ion-button", 6);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_Template_ion_button_click_28_listener() {
              return ctx.showWidgetAction();
            });
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(29, " Show Widget ");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(30, "ion-button", 6);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_Template_ion_button_click_30_listener() {
              return ctx.hideWidgetAction();
            });
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(31, " Hide Widget ");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(32, "ion-button", 6);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_Template_ion_button_click_32_listener() {
              return ctx.openAppAction();
            });
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(33, " open Assistant ");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(34, "div");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(35, "ion-button", 6);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_Template_ion_button_click_35_listener() {
              return ctx.registerUserAction();
            });
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(36, " Register User ");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(37, "ion-button", 6);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_Template_ion_button_click_37_listener() {
              return ctx.unregisterUserAction();
            });
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(38, " Unregister User ");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(39, "ion-button", 6);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_Template_ion_button_click_39_listener() {
              return ctx.removeVoiceConsentAction();
            });
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(40, " Remove Voice Consent ");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(41, "div");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(42, "ion-button", 6);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_Template_ion_button_click_42_listener() {
              return ctx.setWidgetDimensionsAction();
            });
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(43, " Set Widget Dimensions ");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(44, LoginLibComponent_div_44_Template, 3, 1, "div", 7);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(45, "div");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(46, "a");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(47, "ion-item");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(48, "ion-label");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(49, "Endpoint");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(50, "ion-select", 8);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ngModelChange", function LoginLibComponent_Template_ion_select_ngModelChange_50_listener($event) {
              return ctx.endpointSelected = $event;
            })("ionChange", function LoginLibComponent_Template_ion_select_ionChange_50_listener() {
              return ctx.endpointChangeAction();
            });
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(51, LoginLibComponent_ion_select_option_51_Template, 2, 2, "ion-select-option", 9);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
          }

          if (rf & 2) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("translucent", true);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", ctx.toolbarTitle, " ");
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(5);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngModel", ctx.name);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx.usernameLabel);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngModel", ctx.username);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx.passwordLabel);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngModel", ctx.password);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(28);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx.intents);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(6);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngModel", ctx.endpointSelected);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx.endpoints);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSelectOption"]],
        styles: [""]
      });
      /*@__PURE__*/

      (function () {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(LoginLibComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'login-login-lib',
            templateUrl: 'login-lib.component.html',
            styleUrls: ['login-lib.component.scss']
          }]
        }], null, {
          toolbarTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          usernameLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          passwordLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          endpoints: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          intents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          login: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          fakeTokenLogin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          logout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          endpoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          removeConsents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          initialize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          showWidget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          hideWidget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          openApp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          registerUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          unregisterUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          setWidgetDimensions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          openIntent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();

      var LoginLibModule = function LoginLibModule() {
        _classCallCheck(this, LoginLibModule);
      };

      LoginLibModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
        type: LoginLibModule
      });
      LoginLibModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
        factory: function LoginLibModule_Factory(t) {
          return new (t || LoginLibModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(LoginLibModule, {
          declarations: [LoginLibComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"]],
          exports: [LoginLibComponent]
        });
      })();
      /*@__PURE__*/


      (function () {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(LoginLibModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [LoginLibComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"]],
            exports: [LoginLibComponent]
          }]
        }], null, null);
      })();

      var Endpoint = function Endpoint(label, value) {
        _classCallCheck(this, Endpoint);

        this.label = label;
        this.value = value;
      };

      var Intent = function Intent(label, value) {
        _classCallCheck(this, Intent);

        this.label = label;
        this.value = value;
      };
      /*
       * Public API Surface of login-lib
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=login-lib.js.map

      /***/

    },

    /***/
    "3y9D": function y9D(module, exports, __webpack_require__) {
      ;

      (function (root, factory) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"));
        } else {}
      })(this, function (CryptoJS) {
        (function () {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var Hasher = C_lib.Hasher;
          var C_algo = C.algo; // Reusable object

          var W = [];
          /**
           * SHA-1 hash algorithm.
           */

          var SHA1 = C_algo.SHA1 = Hasher.extend({
            _doReset: function _doReset() {
              this._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
            },
            _doProcessBlock: function _doProcessBlock(M, offset) {
              // Shortcut
              var H = this._hash.words; // Working variables

              var a = H[0];
              var b = H[1];
              var c = H[2];
              var d = H[3];
              var e = H[4]; // Computation

              for (var i = 0; i < 80; i++) {
                if (i < 16) {
                  W[i] = M[offset + i] | 0;
                } else {
                  var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                  W[i] = n << 1 | n >>> 31;
                }

                var t = (a << 5 | a >>> 27) + e + W[i];

                if (i < 20) {
                  t += (b & c | ~b & d) + 0x5a827999;
                } else if (i < 40) {
                  t += (b ^ c ^ d) + 0x6ed9eba1;
                } else if (i < 60) {
                  t += (b & c | b & d | c & d) - 0x70e44324;
                } else
                  /* if (i < 80) */
                  {
                    t += (b ^ c ^ d) - 0x359d3e2a;
                  }

                e = d;
                d = c;
                c = b << 30 | b >>> 2;
                b = a;
                a = t;
              } // Intermediate hash value


              H[0] = H[0] + a | 0;
              H[1] = H[1] + b | 0;
              H[2] = H[2] + c | 0;
              H[3] = H[3] + d | 0;
              H[4] = H[4] + e | 0;
            },
            _doFinalize: function _doFinalize() {
              // Shortcuts
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8; // Add padding

              dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
              data.sigBytes = dataWords.length * 4; // Hash final blocks

              this._process(); // Return final computed hash


              return this._hash;
            },
            clone: function clone() {
              var clone = Hasher.clone.call(this);
              clone._hash = this._hash.clone();
              return clone;
            }
          });
          /**
           * Shortcut function to the hasher's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           *
           * @return {WordArray} The hash.
           *
           * @static
           *
           * @example
           *
           *     var hash = CryptoJS.SHA1('message');
           *     var hash = CryptoJS.SHA1(wordArray);
           */

          C.SHA1 = Hasher._createHelper(SHA1);
          /**
           * Shortcut function to the HMAC's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           * @param {WordArray|string} key The secret key.
           *
           * @return {WordArray} The HMAC.
           *
           * @static
           *
           * @example
           *
           *     var hmac = CryptoJS.HmacSHA1(message, key);
           */

          C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
        })();

        return CryptoJS.SHA1;
      });
      /***/

    },

    /***/
    4: function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "4+qi": function qi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return checkP2s;
      });
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");

      function checkP2s(p2s) {
        if (!(p2s instanceof Uint8Array) || p2s.length < 8) {
          throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWEInvalid"]('PBES2 Salt Input must be 8 or more octets');
        }
      }
      /***/

    },

    /***/
    "4TUK": function TUK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isJWKSLike", function () {
        return isJWKSLike;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalJWKSet", function () {
        return LocalJWKSet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createLocalJWKSet", function () {
        return createLocalJWKSet;
      });
      /* harmony import */


      var _key_import_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../key/import.js */
      "Qtqc");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");
      /* harmony import */


      var _lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../lib/is_object.js */
      "2fVw");

      function getKtyFromAlg(alg) {
        switch (typeof alg === 'string' && alg.slice(0, 2)) {
          case 'RS':
          case 'PS':
            return 'RSA';

          case 'ES':
            return 'EC';

          case 'Ed':
            return 'OKP';

          default:
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JOSENotSupported"]('Unsupported "alg" value for a JSON Web Key Set');
        }
      }

      function isJWKSLike(jwks) {
        return jwks && typeof jwks === 'object' && Array.isArray(jwks.keys) && jwks.keys.every(isJWKLike);
      }

      function isJWKLike(key) {
        return Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__["default"])(key);
      }

      function clone(obj) {
        if (typeof structuredClone === 'function') {
          return structuredClone(obj);
        }

        return JSON.parse(JSON.stringify(obj));
      }

      var LocalJWKSet = /*#__PURE__*/function () {
        function LocalJWKSet(jwks) {
          _classCallCheck(this, LocalJWKSet);

          this._cached = new WeakMap();

          if (!isJWKSLike(jwks)) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWKSInvalid"]('JSON Web Key Set malformed');
          }

          this._jwks = clone(jwks);
        }

        _createClass(LocalJWKSet, [{
          key: "getKey",
          value: function () {
            var _getKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(protectedHeader, token) {
              var _protectedHeader$toke, alg, kid, kty, candidates, jwk, length, cached, keyObject;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _protectedHeader$toke = _objectSpread(_objectSpread({}, protectedHeader), token.header), alg = _protectedHeader$toke.alg, kid = _protectedHeader$toke.kid;
                      kty = getKtyFromAlg(alg);
                      candidates = this._jwks.keys.filter(function (jwk) {
                        var candidate = kty === jwk.kty;

                        if (candidate && typeof kid === 'string') {
                          candidate = kid === jwk.kid;
                        }

                        if (candidate && typeof jwk.alg === 'string') {
                          candidate = alg === jwk.alg;
                        }

                        if (candidate && typeof jwk.use === 'string') {
                          candidate = jwk.use === 'sig';
                        }

                        if (candidate && Array.isArray(jwk.key_ops)) {
                          candidate = jwk.key_ops.includes('verify');
                        }

                        if (candidate && alg === 'EdDSA') {
                          candidate = jwk.crv === 'Ed25519' || jwk.crv === 'Ed448';
                        }

                        if (candidate) {
                          switch (alg) {
                            case 'ES256':
                              candidate = jwk.crv === 'P-256';
                              break;

                            case 'ES256K':
                              candidate = jwk.crv === 'secp256k1';
                              break;

                            case 'ES384':
                              candidate = jwk.crv === 'P-384';
                              break;

                            case 'ES512':
                              candidate = jwk.crv === 'P-521';
                              break;
                          }
                        }

                        return candidate;
                      });
                      jwk = candidates[0], length = candidates.length;

                      if (!(length === 0)) {
                        _context6.next = 8;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWKSNoMatchingKey"]();

                    case 8:
                      if (!(length !== 1)) {
                        _context6.next = 10;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWKSMultipleMatchingKeys"]();

                    case 10:
                      cached = this._cached.get(jwk) || this._cached.set(jwk, {}).get(jwk);

                      if (!(cached[alg] === undefined)) {
                        _context6.next = 18;
                        break;
                      }

                      _context6.next = 14;
                      return Object(_key_import_js__WEBPACK_IMPORTED_MODULE_0__["importJWK"])(_objectSpread(_objectSpread({}, jwk), {}, {
                        ext: true
                      }), alg);

                    case 14:
                      keyObject = _context6.sent;

                      if (!(keyObject instanceof Uint8Array || keyObject.type !== 'public')) {
                        _context6.next = 17;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWKSInvalid"]('JSON Web Key Set members must be public keys');

                    case 17:
                      cached[alg] = keyObject;

                    case 18:
                      return _context6.abrupt("return", cached[alg]);

                    case 19:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function getKey(_x11, _x12) {
              return _getKey.apply(this, arguments);
            }

            return getKey;
          }()
        }]);

        return LocalJWKSet;
      }();

      function createLocalJWKSet(jwks) {
        return LocalJWKSet.prototype.getKey.bind(new LocalJWKSet(jwks));
      }
      /***/

    },

    /***/
    "4VJ3": function VJ3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmbeddedJWK", function () {
        return EmbeddedJWK;
      });
      /* harmony import */


      var _key_import_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../key/import.js */
      "Qtqc");
      /* harmony import */


      var _lib_is_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../lib/is_object.js */
      "2fVw");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");

      function EmbeddedJWK(_x13, _x14) {
        return _EmbeddedJWK.apply(this, arguments);
      }
      /***/


      function _EmbeddedJWK() {
        _EmbeddedJWK = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(protectedHeader, token) {
          var joseHeader, key;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  joseHeader = _objectSpread(_objectSpread({}, protectedHeader), token.header);

                  if (Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_1__["default"])(joseHeader.jwk)) {
                    _context7.next = 3;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('"jwk" (JSON Web Key) Header Parameter must be a JSON object');

                case 3:
                  _context7.next = 5;
                  return Object(_key_import_js__WEBPACK_IMPORTED_MODULE_0__["importJWK"])(_objectSpread(_objectSpread({}, joseHeader.jwk), {}, {
                    ext: true
                  }), joseHeader.alg, true);

                case 5:
                  key = _context7.sent;

                  if (!(key instanceof Uint8Array || key.type !== 'public')) {
                    _context7.next = 8;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('"jwk" (JSON Web Key) Header Parameter must be a public key');

                case 8:
                  return _context7.abrupt("return", key);

                case 9:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));
        return _EmbeddedJWK.apply(this, arguments);
      }
    },

    /***/
    "4inf": function inf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _subtle_dsa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./subtle_dsa.js */
      "D2oy");
      /* harmony import */


      var _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./webcrypto.js */
      "hqmz");
      /* harmony import */


      var _check_key_length_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./check_key_length.js */
      "hKMt");
      /* harmony import */


      var _get_sign_verify_key_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./get_sign_verify_key.js */
      "Rg9p");

      var verify = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(alg, key, signature, data) {
          var cryptoKey, algorithm;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return Object(_get_sign_verify_key_js__WEBPACK_IMPORTED_MODULE_3__["default"])(alg, key, 'verify');

                case 2:
                  cryptoKey = _context8.sent;
                  Object(_check_key_length_js__WEBPACK_IMPORTED_MODULE_2__["default"])(alg, cryptoKey);
                  algorithm = Object(_subtle_dsa_js__WEBPACK_IMPORTED_MODULE_0__["default"])(alg, cryptoKey.algorithm);
                  _context8.prev = 5;
                  _context8.next = 8;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.verify(algorithm, cryptoKey, signature, data);

                case 8:
                  return _context8.abrupt("return", _context8.sent);

                case 11:
                  _context8.prev = 11;
                  _context8.t0 = _context8["catch"](5);
                  return _context8.abrupt("return", false);

                case 14:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, null, [[5, 11]]);
        }));

        return function verify(_x15, _x16, _x17, _x18) {
          return _ref2.apply(this, arguments);
        };
      }();
      /* harmony default export */


      __webpack_exports__["default"] = verify;
      /***/
    },

    /***/
    "4xNZ": function xNZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlattenedSign", function () {
        return FlattenedSign;
      });
      /* harmony import */


      var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../runtime/base64url.js */
      "KjJ5");
      /* harmony import */


      var _runtime_sign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../runtime/sign.js */
      "eNpK");
      /* harmony import */


      var _lib_is_disjoint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../lib/is_disjoint.js */
      "yopU");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../util/errors.js */
      "StPg");
      /* harmony import */


      var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../lib/buffer_utils.js */
      "xpfA");
      /* harmony import */


      var _lib_check_key_type_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../lib/check_key_type.js */
      "ceW5");
      /* harmony import */


      var _lib_validate_crit_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../lib/validate_crit.js */
      "ElMP");

      var FlattenedSign = /*#__PURE__*/function () {
        function FlattenedSign(payload) {
          _classCallCheck(this, FlattenedSign);

          if (!(payload instanceof Uint8Array)) {
            throw new TypeError('payload must be an instance of Uint8Array');
          }

          this._payload = payload;
        }

        _createClass(FlattenedSign, [{
          key: "setProtectedHeader",
          value: function setProtectedHeader(protectedHeader) {
            if (this._protectedHeader) {
              throw new TypeError('setProtectedHeader can only be called once');
            }

            this._protectedHeader = protectedHeader;
            return this;
          }
        }, {
          key: "setUnprotectedHeader",
          value: function setUnprotectedHeader(unprotectedHeader) {
            if (this._unprotectedHeader) {
              throw new TypeError('setUnprotectedHeader can only be called once');
            }

            this._unprotectedHeader = unprotectedHeader;
            return this;
          }
        }, {
          key: "sign",
          value: function () {
            var _sign2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(key, options) {
              var joseHeader, extensions, b64, alg, payload, protectedHeader, data, signature, jws;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      if (!(!this._protectedHeader && !this._unprotectedHeader)) {
                        _context9.next = 2;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWSInvalid"]('either setProtectedHeader or setUnprotectedHeader must be called before #sign()');

                    case 2:
                      if (Object(_lib_is_disjoint_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this._protectedHeader, this._unprotectedHeader)) {
                        _context9.next = 4;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWSInvalid"]('JWS Protected and JWS Unprotected Header Parameter names must be disjoint');

                    case 4:
                      joseHeader = _objectSpread(_objectSpread({}, this._protectedHeader), this._unprotectedHeader);
                      extensions = Object(_lib_validate_crit_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWSInvalid"], new Map([['b64', true]]), options === null || options === void 0 ? void 0 : options.crit, this._protectedHeader, joseHeader);
                      b64 = true;

                      if (!extensions.has('b64')) {
                        _context9.next = 11;
                        break;
                      }

                      b64 = this._protectedHeader.b64;

                      if (!(typeof b64 !== 'boolean')) {
                        _context9.next = 11;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWSInvalid"]('The "b64" (base64url-encode payload) Header Parameter must be a boolean');

                    case 11:
                      alg = joseHeader.alg;

                      if (!(typeof alg !== 'string' || !alg)) {
                        _context9.next = 14;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWSInvalid"]('JWS "alg" (Algorithm) Header Parameter missing or invalid');

                    case 14:
                      Object(_lib_check_key_type_js__WEBPACK_IMPORTED_MODULE_5__["default"])(alg, key, 'sign');
                      payload = this._payload;

                      if (b64) {
                        payload = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_4__["encoder"].encode(Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"])(payload));
                      }

                      if (this._protectedHeader) {
                        protectedHeader = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_4__["encoder"].encode(Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"])(JSON.stringify(this._protectedHeader)));
                      } else {
                        protectedHeader = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_4__["encoder"].encode('');
                      }

                      data = Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_4__["concat"])(protectedHeader, _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_4__["encoder"].encode('.'), payload);
                      _context9.next = 21;
                      return Object(_runtime_sign_js__WEBPACK_IMPORTED_MODULE_1__["default"])(alg, key, data);

                    case 21:
                      signature = _context9.sent;
                      jws = {
                        signature: Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"])(signature),
                        payload: ''
                      };

                      if (b64) {
                        jws.payload = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_4__["decoder"].decode(payload);
                      }

                      if (this._unprotectedHeader) {
                        jws.header = this._unprotectedHeader;
                      }

                      if (this._protectedHeader) {
                        jws["protected"] = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_4__["decoder"].decode(protectedHeader);
                      }

                      return _context9.abrupt("return", jws);

                    case 27:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function sign(_x19, _x20) {
              return _sign2.apply(this, arguments);
            }

            return sign;
          }()
        }]);

        return FlattenedSign;
      }();
      /***/

    },

    /***/
    "5hvy": function hvy(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./x64-core */
          "MlIO"));
        } else {}
      })(this, function (CryptoJS) {
        (function (Math) {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var Hasher = C_lib.Hasher;
          var C_x64 = C.x64;
          var X64Word = C_x64.Word;
          var C_algo = C.algo; // Constants tables

          var RHO_OFFSETS = [];
          var PI_INDEXES = [];
          var ROUND_CONSTANTS = []; // Compute Constants

          (function () {
            // Compute rho offset constants
            var x = 1,
                y = 0;

            for (var t = 0; t < 24; t++) {
              RHO_OFFSETS[x + 5 * y] = (t + 1) * (t + 2) / 2 % 64;
              var newX = y % 5;
              var newY = (2 * x + 3 * y) % 5;
              x = newX;
              y = newY;
            } // Compute pi index constants


            for (var x = 0; x < 5; x++) {
              for (var y = 0; y < 5; y++) {
                PI_INDEXES[x + 5 * y] = y + (2 * x + 3 * y) % 5 * 5;
              }
            } // Compute round constants


            var LFSR = 0x01;

            for (var i = 0; i < 24; i++) {
              var roundConstantMsw = 0;
              var roundConstantLsw = 0;

              for (var j = 0; j < 7; j++) {
                if (LFSR & 0x01) {
                  var bitPosition = (1 << j) - 1;

                  if (bitPosition < 32) {
                    roundConstantLsw ^= 1 << bitPosition;
                  } else
                    /* if (bitPosition >= 32) */
                    {
                      roundConstantMsw ^= 1 << bitPosition - 32;
                    }
                } // Compute next LFSR


                if (LFSR & 0x80) {
                  // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
                  LFSR = LFSR << 1 ^ 0x71;
                } else {
                  LFSR <<= 1;
                }
              }

              ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
            }
          })(); // Reusable objects for temporary values


          var T = [];

          (function () {
            for (var i = 0; i < 25; i++) {
              T[i] = X64Word.create();
            }
          })();
          /**
           * SHA-3 hash algorithm.
           */


          var SHA3 = C_algo.SHA3 = Hasher.extend({
            /**
             * Configuration options.
             *
             * @property {number} outputLength
             *   The desired number of bits in the output hash.
             *   Only values permitted are: 224, 256, 384, 512.
             *   Default: 512
             */
            cfg: Hasher.cfg.extend({
              outputLength: 512
            }),
            _doReset: function _doReset() {
              var state = this._state = [];

              for (var i = 0; i < 25; i++) {
                state[i] = new X64Word.init();
              }

              this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
            },
            _doProcessBlock: function _doProcessBlock(M, offset) {
              // Shortcuts
              var state = this._state;
              var nBlockSizeLanes = this.blockSize / 2; // Absorb

              for (var i = 0; i < nBlockSizeLanes; i++) {
                // Shortcuts
                var M2i = M[offset + 2 * i];
                var M2i1 = M[offset + 2 * i + 1]; // Swap endian

                M2i = (M2i << 8 | M2i >>> 24) & 0x00ff00ff | (M2i << 24 | M2i >>> 8) & 0xff00ff00;
                M2i1 = (M2i1 << 8 | M2i1 >>> 24) & 0x00ff00ff | (M2i1 << 24 | M2i1 >>> 8) & 0xff00ff00; // Absorb message into state

                var lane = state[i];
                lane.high ^= M2i1;
                lane.low ^= M2i;
              } // Rounds


              for (var round = 0; round < 24; round++) {
                // Theta
                for (var x = 0; x < 5; x++) {
                  // Mix column lanes
                  var tMsw = 0,
                      tLsw = 0;

                  for (var y = 0; y < 5; y++) {
                    var lane = state[x + 5 * y];
                    tMsw ^= lane.high;
                    tLsw ^= lane.low;
                  } // Temporary values


                  var Tx = T[x];
                  Tx.high = tMsw;
                  Tx.low = tLsw;
                }

                for (var x = 0; x < 5; x++) {
                  // Shortcuts
                  var Tx4 = T[(x + 4) % 5];
                  var Tx1 = T[(x + 1) % 5];
                  var Tx1Msw = Tx1.high;
                  var Tx1Lsw = Tx1.low; // Mix surrounding columns

                  var tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
                  var tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);

                  for (var y = 0; y < 5; y++) {
                    var lane = state[x + 5 * y];
                    lane.high ^= tMsw;
                    lane.low ^= tLsw;
                  }
                } // Rho Pi


                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
                  var tMsw;
                  var tLsw; // Shortcuts

                  var lane = state[laneIndex];
                  var laneMsw = lane.high;
                  var laneLsw = lane.low;
                  var rhoOffset = RHO_OFFSETS[laneIndex]; // Rotate lanes

                  if (rhoOffset < 32) {
                    tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
                    tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
                  } else
                    /* if (rhoOffset >= 32) */
                    {
                      tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
                      tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
                    } // Transpose lanes


                  var TPiLane = T[PI_INDEXES[laneIndex]];
                  TPiLane.high = tMsw;
                  TPiLane.low = tLsw;
                } // Rho pi at x = y = 0


                var T0 = T[0];
                var state0 = state[0];
                T0.high = state0.high;
                T0.low = state0.low; // Chi

                for (var x = 0; x < 5; x++) {
                  for (var y = 0; y < 5; y++) {
                    // Shortcuts
                    var laneIndex = x + 5 * y;
                    var lane = state[laneIndex];
                    var TLane = T[laneIndex];
                    var Tx1Lane = T[(x + 1) % 5 + 5 * y];
                    var Tx2Lane = T[(x + 2) % 5 + 5 * y]; // Mix rows

                    lane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
                    lane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
                  }
                } // Iota


                var lane = state[0];
                var roundConstant = ROUND_CONSTANTS[round];
                lane.high ^= roundConstant.high;
                lane.low ^= roundConstant.low;
              }
            },
            _doFinalize: function _doFinalize() {
              // Shortcuts
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8;
              var blockSizeBits = this.blockSize * 32; // Add padding

              dataWords[nBitsLeft >>> 5] |= 0x1 << 24 - nBitsLeft % 32;
              dataWords[(Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 0x80;
              data.sigBytes = dataWords.length * 4; // Hash final blocks

              this._process(); // Shortcuts


              var state = this._state;
              var outputLengthBytes = this.cfg.outputLength / 8;
              var outputLengthLanes = outputLengthBytes / 8; // Squeeze

              var hashWords = [];

              for (var i = 0; i < outputLengthLanes; i++) {
                // Shortcuts
                var lane = state[i];
                var laneMsw = lane.high;
                var laneLsw = lane.low; // Swap endian

                laneMsw = (laneMsw << 8 | laneMsw >>> 24) & 0x00ff00ff | (laneMsw << 24 | laneMsw >>> 8) & 0xff00ff00;
                laneLsw = (laneLsw << 8 | laneLsw >>> 24) & 0x00ff00ff | (laneLsw << 24 | laneLsw >>> 8) & 0xff00ff00; // Squeeze state to retrieve hash

                hashWords.push(laneLsw);
                hashWords.push(laneMsw);
              } // Return final computed hash


              return new WordArray.init(hashWords, outputLengthBytes);
            },
            clone: function clone() {
              var clone = Hasher.clone.call(this);

              var state = clone._state = this._state.slice(0);

              for (var i = 0; i < 25; i++) {
                state[i] = state[i].clone();
              }

              return clone;
            }
          });
          /**
           * Shortcut function to the hasher's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           *
           * @return {WordArray} The hash.
           *
           * @static
           *
           * @example
           *
           *     var hash = CryptoJS.SHA3('message');
           *     var hash = CryptoJS.SHA3(wordArray);
           */

          C.SHA3 = Hasher._createHelper(SHA3);
          /**
           * Shortcut function to the HMAC's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           * @param {WordArray|string} key The secret key.
           *
           * @return {WordArray} The HMAC.
           *
           * @static
           *
           * @example
           *
           *     var hmac = CryptoJS.HmacSHA3(message, key);
           */

          C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
        })(Math);

        return CryptoJS.SHA3;
      });
      /***/

    },

    /***/
    "7SCF": function SCF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = function (date) {
        return Math.floor(date.getTime() / 1000);
      };
      /***/

    },

    /***/
    "8s3D": function s3D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decodeProtectedHeader", function () {
        return decodeProtectedHeader;
      });
      /* harmony import */


      var _base64url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./base64url.js */
      "JeaE");
      /* harmony import */


      var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../lib/buffer_utils.js */
      "xpfA");
      /* harmony import */


      var _lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../lib/is_object.js */
      "2fVw");

      function decodeProtectedHeader(token) {
        var protectedB64u;

        if (typeof token === 'string') {
          var parts = token.split('.');

          if (parts.length === 3 || parts.length === 5) {
            ;

            var _parts = _slicedToArray(parts, 1);

            protectedB64u = _parts[0];
          }
        } else if (typeof token === 'object' && token) {
          if ('protected' in token) {
            protectedB64u = token["protected"];
          } else {
            throw new TypeError('Token does not contain a Protected Header');
          }
        }

        try {
          if (typeof protectedB64u !== 'string' || !protectedB64u) {
            throw new Error();
          }

          var result = JSON.parse(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__["decoder"].decode(Object(_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(protectedB64u)));

          if (!Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__["default"])(result)) {
            throw new Error();
          }

          return result;
        } catch (_a) {
          throw new TypeError('Invalid Token or Protected Header formatting');
        }
      }
      /***/

    },

    /***/
    "9CFX": function CFX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _jwe_compact_decrypt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./jwe/compact/decrypt.js */
      "xhLL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "compactDecrypt", function () {
        return _jwe_compact_decrypt_js__WEBPACK_IMPORTED_MODULE_0__["compactDecrypt"];
      });
      /* harmony import */


      var _jwe_flattened_decrypt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./jwe/flattened/decrypt.js */
      "xHgm");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "flattenedDecrypt", function () {
        return _jwe_flattened_decrypt_js__WEBPACK_IMPORTED_MODULE_1__["flattenedDecrypt"];
      });
      /* harmony import */


      var _jwe_general_decrypt_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./jwe/general/decrypt.js */
      "aaL6");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "generalDecrypt", function () {
        return _jwe_general_decrypt_js__WEBPACK_IMPORTED_MODULE_2__["generalDecrypt"];
      });
      /* harmony import */


      var _jwe_general_encrypt_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./jwe/general/encrypt.js */
      "/D05");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GeneralEncrypt", function () {
        return _jwe_general_encrypt_js__WEBPACK_IMPORTED_MODULE_3__["GeneralEncrypt"];
      });
      /* harmony import */


      var _jws_compact_verify_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./jws/compact/verify.js */
      "e4TT");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "compactVerify", function () {
        return _jws_compact_verify_js__WEBPACK_IMPORTED_MODULE_4__["compactVerify"];
      });
      /* harmony import */


      var _jws_flattened_verify_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./jws/flattened/verify.js */
      "n8OJ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "flattenedVerify", function () {
        return _jws_flattened_verify_js__WEBPACK_IMPORTED_MODULE_5__["flattenedVerify"];
      });
      /* harmony import */


      var _jws_general_verify_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./jws/general/verify.js */
      "/xMJ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "generalVerify", function () {
        return _jws_general_verify_js__WEBPACK_IMPORTED_MODULE_6__["generalVerify"];
      });
      /* harmony import */


      var _jwt_verify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./jwt/verify.js */
      "m2FS");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "jwtVerify", function () {
        return _jwt_verify_js__WEBPACK_IMPORTED_MODULE_7__["jwtVerify"];
      });
      /* harmony import */


      var _jwt_decrypt_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./jwt/decrypt.js */
      "tOAC");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "jwtDecrypt", function () {
        return _jwt_decrypt_js__WEBPACK_IMPORTED_MODULE_8__["jwtDecrypt"];
      });
      /* harmony import */


      var _jwe_compact_encrypt_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./jwe/compact/encrypt.js */
      "xwey");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CompactEncrypt", function () {
        return _jwe_compact_encrypt_js__WEBPACK_IMPORTED_MODULE_9__["CompactEncrypt"];
      });
      /* harmony import */


      var _jwe_flattened_encrypt_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./jwe/flattened/encrypt.js */
      "Dk7m");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlattenedEncrypt", function () {
        return _jwe_flattened_encrypt_js__WEBPACK_IMPORTED_MODULE_10__["FlattenedEncrypt"];
      });
      /* harmony import */


      var _jws_compact_sign_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./jws/compact/sign.js */
      "iEOA");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CompactSign", function () {
        return _jws_compact_sign_js__WEBPACK_IMPORTED_MODULE_11__["CompactSign"];
      });
      /* harmony import */


      var _jws_flattened_sign_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./jws/flattened/sign.js */
      "4xNZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FlattenedSign", function () {
        return _jws_flattened_sign_js__WEBPACK_IMPORTED_MODULE_12__["FlattenedSign"];
      });
      /* harmony import */


      var _jws_general_sign_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./jws/general/sign.js */
      "NSDb");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GeneralSign", function () {
        return _jws_general_sign_js__WEBPACK_IMPORTED_MODULE_13__["GeneralSign"];
      });
      /* harmony import */


      var _jwt_sign_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./jwt/sign.js */
      "/cEr");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SignJWT", function () {
        return _jwt_sign_js__WEBPACK_IMPORTED_MODULE_14__["SignJWT"];
      });
      /* harmony import */


      var _jwt_encrypt_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./jwt/encrypt.js */
      "c9hL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EncryptJWT", function () {
        return _jwt_encrypt_js__WEBPACK_IMPORTED_MODULE_15__["EncryptJWT"];
      });
      /* harmony import */


      var _jwk_thumbprint_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./jwk/thumbprint.js */
      "18mX");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "calculateJwkThumbprint", function () {
        return _jwk_thumbprint_js__WEBPACK_IMPORTED_MODULE_16__["calculateJwkThumbprint"];
      });
      /* harmony import */


      var _jwk_embedded_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./jwk/embedded.js */
      "4VJ3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EmbeddedJWK", function () {
        return _jwk_embedded_js__WEBPACK_IMPORTED_MODULE_17__["EmbeddedJWK"];
      });
      /* harmony import */


      var _jwks_local_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./jwks/local.js */
      "4TUK");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "createLocalJWKSet", function () {
        return _jwks_local_js__WEBPACK_IMPORTED_MODULE_18__["createLocalJWKSet"];
      });
      /* harmony import */


      var _jwks_remote_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./jwks/remote.js */
      "OvXJ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "createRemoteJWKSet", function () {
        return _jwks_remote_js__WEBPACK_IMPORTED_MODULE_19__["createRemoteJWKSet"];
      });
      /* harmony import */


      var _jwt_unsecured_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./jwt/unsecured.js */
      "xXIV");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UnsecuredJWT", function () {
        return _jwt_unsecured_js__WEBPACK_IMPORTED_MODULE_20__["UnsecuredJWT"];
      });
      /* harmony import */


      var _key_export_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./key/export.js */
      "k303");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "exportPKCS8", function () {
        return _key_export_js__WEBPACK_IMPORTED_MODULE_21__["exportPKCS8"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "exportSPKI", function () {
        return _key_export_js__WEBPACK_IMPORTED_MODULE_21__["exportSPKI"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "exportJWK", function () {
        return _key_export_js__WEBPACK_IMPORTED_MODULE_21__["exportJWK"];
      });
      /* harmony import */


      var _key_import_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./key/import.js */
      "Qtqc");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "importSPKI", function () {
        return _key_import_js__WEBPACK_IMPORTED_MODULE_22__["importSPKI"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "importPKCS8", function () {
        return _key_import_js__WEBPACK_IMPORTED_MODULE_22__["importPKCS8"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "importX509", function () {
        return _key_import_js__WEBPACK_IMPORTED_MODULE_22__["importX509"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "importJWK", function () {
        return _key_import_js__WEBPACK_IMPORTED_MODULE_22__["importJWK"];
      });
      /* harmony import */


      var _util_decode_protected_header_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./util/decode_protected_header.js */
      "8s3D");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "decodeProtectedHeader", function () {
        return _util_decode_protected_header_js__WEBPACK_IMPORTED_MODULE_23__["decodeProtectedHeader"];
      });
      /* harmony import */


      var _util_decode_jwt_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./util/decode_jwt.js */
      "IeVz");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "decodeJwt", function () {
        return _util_decode_jwt_js__WEBPACK_IMPORTED_MODULE_24__["decodeJwt"];
      });
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./util/errors.js */
      "StPg");
      /* harmony reexport (module object) */


      __webpack_require__.d(__webpack_exports__, "errors", function () {
        return _util_errors_js__WEBPACK_IMPORTED_MODULE_25__;
      });
      /* harmony import */


      var _key_generate_key_pair_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./key/generate_key_pair.js */
      "j2Dr");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "generateKeyPair", function () {
        return _key_generate_key_pair_js__WEBPACK_IMPORTED_MODULE_26__["generateKeyPair"];
      });
      /* harmony import */


      var _key_generate_secret_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./key/generate_secret.js */
      "KJfr");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "generateSecret", function () {
        return _key_generate_secret_js__WEBPACK_IMPORTED_MODULE_27__["generateSecret"];
      });
      /* harmony import */


      var _util_base64url_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./util/base64url.js */
      "JeaE");
      /* harmony reexport (module object) */


      __webpack_require__.d(__webpack_exports__, "base64url", function () {
        return _util_base64url_js__WEBPACK_IMPORTED_MODULE_28__;
      });
      /***/

    },

    /***/
    "9OqN": function OqN(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./cipher-core */
          "OLod"));
        } else {}
      })(this, function (CryptoJS) {
        /**
         * Counter block mode.
         */
        CryptoJS.mode.CTR = function () {
          var CTR = CryptoJS.lib.BlockCipherMode.extend();
          var Encryptor = CTR.Encryptor = CTR.extend({
            processBlock: function processBlock(words, offset) {
              // Shortcuts
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              var iv = this._iv;
              var counter = this._counter; // Generate keystream

              if (iv) {
                counter = this._counter = iv.slice(0); // Remove IV for subsequent blocks

                this._iv = undefined;
              }

              var keystream = counter.slice(0);
              cipher.encryptBlock(keystream, 0); // Increment counter

              counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0; // Encrypt

              for (var i = 0; i < blockSize; i++) {
                words[offset + i] ^= keystream[i];
              }
            }
          });
          CTR.Decryptor = Encryptor;
          return CTR;
        }();

        return CryptoJS.mode.CTR;
      });
      /***/

    },

    /***/
    "9kcE": function kcE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentifaiHorizontalAlignment", function () {
        return AgentifaiHorizontalAlignment;
      });

      var AgentifaiHorizontalAlignment;

      (function (AgentifaiHorizontalAlignment) {
        AgentifaiHorizontalAlignment["Left"] = "LEFT";
        AgentifaiHorizontalAlignment["Right"] = "RIGHT";
        AgentifaiHorizontalAlignment["Center"] = "CENTER";
      })(AgentifaiHorizontalAlignment || (AgentifaiHorizontalAlignment = {}));

      ;
      /***/
    },

    /***/
    "9yED": function yED(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "inflate", function () {
        return inflate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deflate", function () {
        return deflate;
      });
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");

      var inflate = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JOSENotSupported"]('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `inflateRaw` decrypt option to provide Inflate Raw implementation.');

                case 1:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        return function inflate() {
          return _ref3.apply(this, arguments);
        };
      }();

      var deflate = /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JOSENotSupported"]('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `deflateRaw` encrypt option to provide Deflate Raw implementation.');

                case 1:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));

        return function deflate() {
          return _ref4.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "A/hn": function AHn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentifaiVerticalAlignment", function () {
        return AgentifaiVerticalAlignment;
      });

      var AgentifaiVerticalAlignment;

      (function (AgentifaiVerticalAlignment) {
        AgentifaiVerticalAlignment["Top"] = "TOP";
        AgentifaiVerticalAlignment["Bottom"] = "BOTTOM";
        AgentifaiVerticalAlignment["Center"] = "CENTER";
      })(AgentifaiVerticalAlignment || (AgentifaiVerticalAlignment = {}));

      ;
      /***/
    },

    /***/
    "A3+G": function A3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "ALsQ": function ALsQ(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./cipher-core */
          "OLod"));
        } else {}
      })(this, function (CryptoJS) {
        /**
         * Cipher Feedback block mode.
         */
        CryptoJS.mode.CFB = function () {
          var CFB = CryptoJS.lib.BlockCipherMode.extend();
          CFB.Encryptor = CFB.extend({
            processBlock: function processBlock(words, offset) {
              // Shortcuts
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher); // Remember this block to use with next block

              this._prevBlock = words.slice(offset, offset + blockSize);
            }
          });
          CFB.Decryptor = CFB.extend({
            processBlock: function processBlock(words, offset) {
              // Shortcuts
              var cipher = this._cipher;
              var blockSize = cipher.blockSize; // Remember this block to use with next block

              var thisBlock = words.slice(offset, offset + blockSize);
              generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher); // This block becomes the previous block

              this._prevBlock = thisBlock;
            }
          });

          function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
            var keystream; // Shortcut

            var iv = this._iv; // Generate keystream

            if (iv) {
              keystream = iv.slice(0); // Remove IV for subsequent blocks

              this._iv = undefined;
            } else {
              keystream = this._prevBlock;
            }

            cipher.encryptBlock(keystream, 0); // Encrypt

            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }

          return CFB;
        }();

        return CryptoJS.mode.CFB;
      });
      /***/

    },

    /***/
    "AQ7b": function AQ7b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _runtime_aeskw_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../runtime/aeskw.js */
      "Qm1j");
      /* harmony import */


      var _runtime_ecdhes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../runtime/ecdhes.js */
      "qIkZ");
      /* harmony import */


      var _runtime_pbes2kw_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../runtime/pbes2kw.js */
      "Oe4d");
      /* harmony import */


      var _runtime_rsaes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../runtime/rsaes.js */
      "WR06");
      /* harmony import */


      var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../runtime/base64url.js */
      "KjJ5");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");
      /* harmony import */


      var _lib_cek_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../lib/cek.js */
      "qW6o");
      /* harmony import */


      var _key_import_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../key/import.js */
      "Qtqc");
      /* harmony import */


      var _check_key_type_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./check_key_type.js */
      "ceW5");
      /* harmony import */


      var _is_object_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./is_object.js */
      "2fVw");
      /* harmony import */


      var _aesgcmkw_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./aesgcmkw.js */
      "aAVB");

      function decryptKeyManagement(_x21, _x22, _x23, _x24) {
        return _decryptKeyManagement.apply(this, arguments);
      }
      /* harmony default export */


      function _decryptKeyManagement() {
        _decryptKeyManagement = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(alg, key, encryptedKey, joseHeader) {
          var epk, partyUInfo, partyVInfo, sharedSecret, iv, tag;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  Object(_check_key_type_js__WEBPACK_IMPORTED_MODULE_8__["default"])(alg, key, 'decrypt');
                  _context12.t0 = alg;
                  _context12.next = _context12.t0 === 'dir' ? 4 : _context12.t0 === 'ECDH-ES' ? 7 : _context12.t0 === 'ECDH-ES+A128KW' ? 9 : _context12.t0 === 'ECDH-ES+A192KW' ? 9 : _context12.t0 === 'ECDH-ES+A256KW' ? 9 : _context12.t0 === 'RSA1_5' ? 32 : _context12.t0 === 'RSA-OAEP' ? 32 : _context12.t0 === 'RSA-OAEP-256' ? 32 : _context12.t0 === 'RSA-OAEP-384' ? 32 : _context12.t0 === 'RSA-OAEP-512' ? 32 : _context12.t0 === 'PBES2-HS256+A128KW' ? 35 : _context12.t0 === 'PBES2-HS384+A192KW' ? 35 : _context12.t0 === 'PBES2-HS512+A256KW' ? 35 : _context12.t0 === 'A128KW' ? 42 : _context12.t0 === 'A192KW' ? 42 : _context12.t0 === 'A256KW' ? 42 : _context12.t0 === 'A128GCMKW' ? 45 : _context12.t0 === 'A192GCMKW' ? 45 : _context12.t0 === 'A256GCMKW' ? 45 : 54;
                  break;

                case 4:
                  if (!(encryptedKey !== undefined)) {
                    _context12.next = 6;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('Encountered unexpected JWE Encrypted Key');

                case 6:
                  return _context12.abrupt("return", key);

                case 7:
                  if (!(encryptedKey !== undefined)) {
                    _context12.next = 9;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('Encountered unexpected JWE Encrypted Key');

                case 9:
                  if (Object(_is_object_js__WEBPACK_IMPORTED_MODULE_9__["default"])(joseHeader.epk)) {
                    _context12.next = 11;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]("JOSE Header \"epk\" (Ephemeral Public Key) missing or invalid");

                case 11:
                  if (_runtime_ecdhes_js__WEBPACK_IMPORTED_MODULE_1__["ecdhAllowed"](key)) {
                    _context12.next = 13;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JOSENotSupported"]('ECDH with the provided key is not allowed or not supported by your javascript runtime');

                case 13:
                  _context12.next = 15;
                  return Object(_key_import_js__WEBPACK_IMPORTED_MODULE_7__["importJWK"])(joseHeader.epk, alg);

                case 15:
                  epk = _context12.sent;

                  if (!(joseHeader.apu !== undefined)) {
                    _context12.next = 20;
                    break;
                  }

                  if (!(typeof joseHeader.apu !== 'string')) {
                    _context12.next = 19;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]("JOSE Header \"apu\" (Agreement PartyUInfo) invalid");

                case 19:
                  partyUInfo = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_4__["decode"])(joseHeader.apu);

                case 20:
                  if (!(joseHeader.apv !== undefined)) {
                    _context12.next = 24;
                    break;
                  }

                  if (!(typeof joseHeader.apv !== 'string')) {
                    _context12.next = 23;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]("JOSE Header \"apv\" (Agreement PartyVInfo) invalid");

                case 23:
                  partyVInfo = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_4__["decode"])(joseHeader.apv);

                case 24:
                  _context12.next = 26;
                  return _runtime_ecdhes_js__WEBPACK_IMPORTED_MODULE_1__["deriveKey"](epk, key, alg === 'ECDH-ES' ? joseHeader.enc : alg, alg === 'ECDH-ES' ? Object(_lib_cek_js__WEBPACK_IMPORTED_MODULE_6__["bitLength"])(joseHeader.enc) : parseInt(alg.slice(-5, -2), 10), partyUInfo, partyVInfo);

                case 26:
                  sharedSecret = _context12.sent;

                  if (!(alg === 'ECDH-ES')) {
                    _context12.next = 29;
                    break;
                  }

                  return _context12.abrupt("return", sharedSecret);

                case 29:
                  if (!(encryptedKey === undefined)) {
                    _context12.next = 31;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('JWE Encrypted Key missing');

                case 31:
                  return _context12.abrupt("return", Object(_runtime_aeskw_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(alg.slice(-6), sharedSecret, encryptedKey));

                case 32:
                  if (!(encryptedKey === undefined)) {
                    _context12.next = 34;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('JWE Encrypted Key missing');

                case 34:
                  return _context12.abrupt("return", Object(_runtime_rsaes_js__WEBPACK_IMPORTED_MODULE_3__["decrypt"])(alg, key, encryptedKey));

                case 35:
                  if (!(encryptedKey === undefined)) {
                    _context12.next = 37;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('JWE Encrypted Key missing');

                case 37:
                  if (!(typeof joseHeader.p2c !== 'number')) {
                    _context12.next = 39;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]("JOSE Header \"p2c\" (PBES2 Count) missing or invalid");

                case 39:
                  if (!(typeof joseHeader.p2s !== 'string')) {
                    _context12.next = 41;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]("JOSE Header \"p2s\" (PBES2 Salt) missing or invalid");

                case 41:
                  return _context12.abrupt("return", Object(_runtime_pbes2kw_js__WEBPACK_IMPORTED_MODULE_2__["decrypt"])(alg, key, encryptedKey, joseHeader.p2c, Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_4__["decode"])(joseHeader.p2s)));

                case 42:
                  if (!(encryptedKey === undefined)) {
                    _context12.next = 44;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('JWE Encrypted Key missing');

                case 44:
                  return _context12.abrupt("return", Object(_runtime_aeskw_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(alg, key, encryptedKey));

                case 45:
                  if (!(encryptedKey === undefined)) {
                    _context12.next = 47;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('JWE Encrypted Key missing');

                case 47:
                  if (!(typeof joseHeader.iv !== 'string')) {
                    _context12.next = 49;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]("JOSE Header \"iv\" (Initialization Vector) missing or invalid");

                case 49:
                  if (!(typeof joseHeader.tag !== 'string')) {
                    _context12.next = 51;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]("JOSE Header \"tag\" (Authentication Tag) missing or invalid");

                case 51:
                  iv = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_4__["decode"])(joseHeader.iv);
                  tag = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_4__["decode"])(joseHeader.tag);
                  return _context12.abrupt("return", Object(_aesgcmkw_js__WEBPACK_IMPORTED_MODULE_10__["unwrap"])(alg, key, encryptedKey, iv, tag));

                case 54:
                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JOSENotSupported"]('Invalid or unsupported "alg" (JWE Algorithm) header value');

                case 55:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12);
        }));
        return _decryptKeyManagement.apply(this, arguments);
      }

      __webpack_exports__["default"] = decryptKeyManagement;
      /***/
    },

    /***/
    "D2oy": function D2oy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return subtleDsa;
      });
      /* harmony import */


      var _env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./env.js */
      "+S68");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");

      function subtleDsa(alg, algorithm) {
        var hash = "SHA-".concat(alg.slice(-3));

        switch (alg) {
          case 'HS256':
          case 'HS384':
          case 'HS512':
            return {
              hash: hash,
              name: 'HMAC'
            };

          case 'PS256':
          case 'PS384':
          case 'PS512':
            return {
              hash: hash,
              name: 'RSA-PSS',
              saltLength: alg.slice(-3) >> 3
            };

          case 'RS256':
          case 'RS384':
          case 'RS512':
            return {
              hash: hash,
              name: 'RSASSA-PKCS1-v1_5'
            };

          case 'ES256':
          case 'ES384':
          case 'ES512':
            return {
              hash: hash,
              name: 'ECDSA',
              namedCurve: algorithm.namedCurve
            };

          case Object(_env_js__WEBPACK_IMPORTED_MODULE_0__["isCloudflareWorkers"])() && 'EdDSA':
            var namedCurve = algorithm.namedCurve;
            return {
              name: namedCurve,
              namedCurve: namedCurve
            };

          default:
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JOSENotSupported"]("alg ".concat(alg, " is not supported either by JOSE or your javascript runtime"));
        }
      }
      /***/

    },

    /***/
    "D3C9": function D3C9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "checkSigCryptoKey", function () {
        return checkSigCryptoKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "checkEncCryptoKey", function () {
        return checkEncCryptoKey;
      });
      /* harmony import */


      var _runtime_env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../runtime/env.js */
      "+S68");

      function unusable(name) {
        var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'algorithm.name';
        return new TypeError("CryptoKey does not support this operation, its ".concat(prop, " must be ").concat(name));
      }

      function isAlgorithm(algorithm, name) {
        return algorithm.name === name;
      }

      function getHashLength(hash) {
        return parseInt(hash.name.slice(4), 10);
      }

      function getNamedCurve(alg) {
        switch (alg) {
          case 'ES256':
            return 'P-256';

          case 'ES384':
            return 'P-384';

          case 'ES512':
            return 'P-521';

          default:
            throw new Error('unreachable');
        }
      }

      function checkUsage(key, usages) {
        if (usages.length && !usages.some(function (expected) {
          return key.usages.includes(expected);
        })) {
          var msg = 'CryptoKey does not support this operation, its usages must include ';

          if (usages.length > 2) {
            var last = usages.pop();
            msg += "one of ".concat(usages.join(', '), ", or ").concat(last, ".");
          } else if (usages.length === 2) {
            msg += "one of ".concat(usages[0], " or ").concat(usages[1], ".");
          } else {
            msg += "".concat(usages[0], ".");
          }

          throw new TypeError(msg);
        }
      }

      function checkSigCryptoKey(key, alg) {
        switch (alg) {
          case 'HS256':
          case 'HS384':
          case 'HS512':
            {
              if (!isAlgorithm(key.algorithm, 'HMAC')) throw unusable('HMAC');
              var expected = parseInt(alg.slice(2), 10);
              var actual = getHashLength(key.algorithm.hash);
              if (actual !== expected) throw unusable("SHA-".concat(expected), 'algorithm.hash');
              break;
            }

          case 'RS256':
          case 'RS384':
          case 'RS512':
            {
              if (!isAlgorithm(key.algorithm, 'RSASSA-PKCS1-v1_5')) throw unusable('RSASSA-PKCS1-v1_5');

              var _expected = parseInt(alg.slice(2), 10);

              var _actual = getHashLength(key.algorithm.hash);

              if (_actual !== _expected) throw unusable("SHA-".concat(_expected), 'algorithm.hash');
              break;
            }

          case 'PS256':
          case 'PS384':
          case 'PS512':
            {
              if (!isAlgorithm(key.algorithm, 'RSA-PSS')) throw unusable('RSA-PSS');

              var _expected2 = parseInt(alg.slice(2), 10);

              var _actual2 = getHashLength(key.algorithm.hash);

              if (_actual2 !== _expected2) throw unusable("SHA-".concat(_expected2), 'algorithm.hash');
              break;
            }

          case Object(_runtime_env_js__WEBPACK_IMPORTED_MODULE_0__["isCloudflareWorkers"])() && 'EdDSA':
            {
              if (!isAlgorithm(key.algorithm, 'NODE-ED25519')) throw unusable('NODE-ED25519');
              break;
            }

          case 'ES256':
          case 'ES384':
          case 'ES512':
            {
              if (!isAlgorithm(key.algorithm, 'ECDSA')) throw unusable('ECDSA');

              var _expected3 = getNamedCurve(alg);

              var _actual3 = key.algorithm.namedCurve;
              if (_actual3 !== _expected3) throw unusable(_expected3, 'algorithm.namedCurve');
              break;
            }

          default:
            throw new TypeError('CryptoKey does not support this operation');
        }

        for (var _len = arguments.length, usages = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          usages[_key - 2] = arguments[_key];
        }

        checkUsage(key, usages);
      }

      function checkEncCryptoKey(key, alg) {
        switch (alg) {
          case 'A128GCM':
          case 'A192GCM':
          case 'A256GCM':
            {
              if (!isAlgorithm(key.algorithm, 'AES-GCM')) throw unusable('AES-GCM');
              var expected = parseInt(alg.slice(1, 4), 10);
              var actual = key.algorithm.length;
              if (actual !== expected) throw unusable(expected, 'algorithm.length');
              break;
            }

          case 'A128KW':
          case 'A192KW':
          case 'A256KW':
            {
              if (!isAlgorithm(key.algorithm, 'AES-KW')) throw unusable('AES-KW');

              var _expected4 = parseInt(alg.slice(1, 4), 10);

              var _actual4 = key.algorithm.length;
              if (_actual4 !== _expected4) throw unusable(_expected4, 'algorithm.length');
              break;
            }

          case 'ECDH':
            if (!isAlgorithm(key.algorithm, 'ECDH')) throw unusable('ECDH');
            break;

          case 'PBES2-HS256+A128KW':
          case 'PBES2-HS384+A192KW':
          case 'PBES2-HS512+A256KW':
            if (!isAlgorithm(key.algorithm, 'PBKDF2')) throw unusable('PBKDF2');
            break;

          case 'RSA-OAEP':
          case 'RSA-OAEP-256':
          case 'RSA-OAEP-384':
          case 'RSA-OAEP-512':
            {
              if (!isAlgorithm(key.algorithm, 'RSA-OAEP')) throw unusable('RSA-OAEP');

              var _expected5 = parseInt(alg.slice(9), 10) || 1;

              var _actual5 = getHashLength(key.algorithm.hash);

              if (_actual5 !== _expected5) throw unusable("SHA-".concat(_expected5), 'algorithm.hash');
              break;
            }

          default:
            throw new TypeError('CryptoKey does not support this operation');
        }

        for (var _len2 = arguments.length, usages = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          usages[_key2 - 2] = arguments[_key2];
        }

        checkUsage(key, usages);
      }
      /***/

    },

    /***/
    "Dk7m": function Dk7m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unprotected", function () {
        return unprotected;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlattenedEncrypt", function () {
        return FlattenedEncrypt;
      });
      /* harmony import */


      var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../runtime/base64url.js */
      "KjJ5");
      /* harmony import */


      var _runtime_encrypt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../runtime/encrypt.js */
      "Ninj");
      /* harmony import */


      var _runtime_zlib_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../runtime/zlib.js */
      "9yED");
      /* harmony import */


      var _lib_iv_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../lib/iv.js */
      "spAk");
      /* harmony import */


      var _lib_encrypt_key_management_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../lib/encrypt_key_management.js */
      "NP3A");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../util/errors.js */
      "StPg");
      /* harmony import */


      var _lib_is_disjoint_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../lib/is_disjoint.js */
      "yopU");
      /* harmony import */


      var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../lib/buffer_utils.js */
      "xpfA");
      /* harmony import */


      var _lib_validate_crit_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../lib/validate_crit.js */
      "ElMP");

      var unprotected = Symbol();

      var FlattenedEncrypt = /*#__PURE__*/function () {
        function FlattenedEncrypt(plaintext) {
          _classCallCheck(this, FlattenedEncrypt);

          if (!(plaintext instanceof Uint8Array)) {
            throw new TypeError('plaintext must be an instance of Uint8Array');
          }

          this._plaintext = plaintext;
        }

        _createClass(FlattenedEncrypt, [{
          key: "setKeyManagementParameters",
          value: function setKeyManagementParameters(parameters) {
            if (this._keyManagementParameters) {
              throw new TypeError('setKeyManagementParameters can only be called once');
            }

            this._keyManagementParameters = parameters;
            return this;
          }
        }, {
          key: "setProtectedHeader",
          value: function setProtectedHeader(protectedHeader) {
            if (this._protectedHeader) {
              throw new TypeError('setProtectedHeader can only be called once');
            }

            this._protectedHeader = protectedHeader;
            return this;
          }
        }, {
          key: "setSharedUnprotectedHeader",
          value: function setSharedUnprotectedHeader(sharedUnprotectedHeader) {
            if (this._sharedUnprotectedHeader) {
              throw new TypeError('setSharedUnprotectedHeader can only be called once');
            }

            this._sharedUnprotectedHeader = sharedUnprotectedHeader;
            return this;
          }
        }, {
          key: "setUnprotectedHeader",
          value: function setUnprotectedHeader(unprotectedHeader) {
            if (this._unprotectedHeader) {
              throw new TypeError('setUnprotectedHeader can only be called once');
            }

            this._unprotectedHeader = unprotectedHeader;
            return this;
          }
        }, {
          key: "setAdditionalAuthenticatedData",
          value: function setAdditionalAuthenticatedData(aad) {
            this._aad = aad;
            return this;
          }
        }, {
          key: "setContentEncryptionKey",
          value: function setContentEncryptionKey(cek) {
            if (this._cek) {
              throw new TypeError('setContentEncryptionKey can only be called once');
            }

            this._cek = cek;
            return this;
          }
        }, {
          key: "setInitializationVector",
          value: function setInitializationVector(iv) {
            if (this._iv) {
              throw new TypeError('setInitializationVector can only be called once');
            }

            this._iv = iv;
            return this;
          }
        }, {
          key: "encrypt",
          value: function () {
            var _encrypt2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(key, options) {
              var joseHeader, alg, enc, encryptedKey, cek, parameters, _yield$Object2, additionalData, protectedHeader, aadMember, ciphertext, tag, deflated, _yield$Object3, _yield$Object4, jwe;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (!(!this._protectedHeader && !this._unprotectedHeader && !this._sharedUnprotectedHeader)) {
                        _context13.next = 2;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()');

                    case 2:
                      if (Object(_lib_is_disjoint_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this._protectedHeader, this._unprotectedHeader, this._sharedUnprotectedHeader)) {
                        _context13.next = 4;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint');

                    case 4:
                      joseHeader = _objectSpread(_objectSpread(_objectSpread({}, this._protectedHeader), this._unprotectedHeader), this._sharedUnprotectedHeader);
                      Object(_lib_validate_crit_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"], new Map(), options === null || options === void 0 ? void 0 : options.crit, this._protectedHeader, joseHeader);

                      if (!(joseHeader.zip !== undefined)) {
                        _context13.next = 11;
                        break;
                      }

                      if (!(!this._protectedHeader || !this._protectedHeader.zip)) {
                        _context13.next = 9;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');

                    case 9:
                      if (!(joseHeader.zip !== 'DEF')) {
                        _context13.next = 11;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JOSENotSupported"]('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value');

                    case 11:
                      alg = joseHeader.alg, enc = joseHeader.enc;

                      if (!(typeof alg !== 'string' || !alg)) {
                        _context13.next = 14;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('JWE "alg" (Algorithm) Header Parameter missing or invalid');

                    case 14:
                      if (!(typeof enc !== 'string' || !enc)) {
                        _context13.next = 16;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');

                    case 16:
                      if (!(alg === 'dir')) {
                        _context13.next = 21;
                        break;
                      }

                      if (!this._cek) {
                        _context13.next = 19;
                        break;
                      }

                      throw new TypeError('setContentEncryptionKey cannot be called when using Direct Encryption');

                    case 19:
                      _context13.next = 24;
                      break;

                    case 21:
                      if (!(alg === 'ECDH-ES')) {
                        _context13.next = 24;
                        break;
                      }

                      if (!this._cek) {
                        _context13.next = 24;
                        break;
                      }

                      throw new TypeError('setContentEncryptionKey cannot be called when using Direct Key Agreement');

                    case 24:
                      _context13.next = 26;
                      return Object(_lib_encrypt_key_management_js__WEBPACK_IMPORTED_MODULE_4__["default"])(alg, enc, key, this._cek, this._keyManagementParameters);

                    case 26:
                      _yield$Object2 = _context13.sent;
                      cek = _yield$Object2.cek;
                      encryptedKey = _yield$Object2.encryptedKey;
                      parameters = _yield$Object2.parameters;

                      if (parameters) {
                        if (options && unprotected in options) {
                          if (!this._unprotectedHeader) {
                            this.setUnprotectedHeader(parameters);
                          } else {
                            this._unprotectedHeader = _objectSpread(_objectSpread({}, this._unprotectedHeader), parameters);
                          }
                        } else {
                          if (!this._protectedHeader) {
                            this.setProtectedHeader(parameters);
                          } else {
                            this._protectedHeader = _objectSpread(_objectSpread({}, this._protectedHeader), parameters);
                          }
                        }
                      }

                      this._iv || (this._iv = Object(_lib_iv_js__WEBPACK_IMPORTED_MODULE_3__["default"])(enc));

                      if (this._protectedHeader) {
                        protectedHeader = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__["encoder"].encode(Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"])(JSON.stringify(this._protectedHeader)));
                      } else {
                        protectedHeader = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__["encoder"].encode('');
                      }

                      if (this._aad) {
                        aadMember = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"])(this._aad);
                        additionalData = Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__["concat"])(protectedHeader, _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__["encoder"].encode('.'), _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__["encoder"].encode(aadMember));
                      } else {
                        additionalData = protectedHeader;
                      }

                      if (!(joseHeader.zip === 'DEF')) {
                        _context13.next = 45;
                        break;
                      }

                      _context13.next = 37;
                      return ((options === null || options === void 0 ? void 0 : options.deflateRaw) || _runtime_zlib_js__WEBPACK_IMPORTED_MODULE_2__["deflate"])(this._plaintext);

                    case 37:
                      deflated = _context13.sent;
                      _context13.next = 40;
                      return Object(_runtime_encrypt_js__WEBPACK_IMPORTED_MODULE_1__["default"])(enc, deflated, cek, this._iv, additionalData);

                    case 40:
                      _yield$Object3 = _context13.sent;
                      ciphertext = _yield$Object3.ciphertext;
                      tag = _yield$Object3.tag;
                      _context13.next = 51;
                      break;

                    case 45:
                      ;
                      _context13.next = 48;
                      return Object(_runtime_encrypt_js__WEBPACK_IMPORTED_MODULE_1__["default"])(enc, this._plaintext, cek, this._iv, additionalData);

                    case 48:
                      _yield$Object4 = _context13.sent;
                      ciphertext = _yield$Object4.ciphertext;
                      tag = _yield$Object4.tag;

                    case 51:
                      jwe = {
                        ciphertext: Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"])(ciphertext),
                        iv: Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"])(this._iv),
                        tag: Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"])(tag)
                      };

                      if (encryptedKey) {
                        jwe.encrypted_key = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"])(encryptedKey);
                      }

                      if (aadMember) {
                        jwe.aad = aadMember;
                      }

                      if (this._protectedHeader) {
                        jwe["protected"] = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__["decoder"].decode(protectedHeader);
                      }

                      if (this._sharedUnprotectedHeader) {
                        jwe.unprotected = this._sharedUnprotectedHeader;
                      }

                      if (this._unprotectedHeader) {
                        jwe.header = this._unprotectedHeader;
                      }

                      return _context13.abrupt("return", jwe);

                    case 58:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));

            function encrypt(_x25, _x26) {
              return _encrypt2.apply(this, arguments);
            }

            return encrypt;
          }()
        }]);

        return FlattenedEncrypt;
      }();
      /***/

    },

    /***/
    "DsUi": function DsUi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _webcrypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./webcrypto.js */
      "hqmz");

      var digest = /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(algorithm, data) {
          var subtleDigest;
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  subtleDigest = "SHA-".concat(algorithm.slice(-3));
                  _context14.t0 = Uint8Array;
                  _context14.next = 4;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_0__["default"].subtle.digest(subtleDigest, data);

                case 4:
                  _context14.t1 = _context14.sent;
                  return _context14.abrupt("return", new _context14.t0(_context14.t1));

                case 6:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14);
        }));

        return function digest(_x27, _x28) {
          return _ref5.apply(this, arguments);
        };
      }();
      /* harmony default export */


      __webpack_exports__["default"] = digest;
      /***/
    },

    /***/
    "E4JC": function E4JC(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./enc-base64 */
          "ETIr"), __webpack_require__(
          /*! ./md5 */
          "cv67"), __webpack_require__(
          /*! ./evpkdf */
          "K3mO"), __webpack_require__(
          /*! ./cipher-core */
          "OLod"));
        } else {}
      })(this, function (CryptoJS) {
        (function () {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var StreamCipher = C_lib.StreamCipher;
          var C_algo = C.algo; // Reusable objects

          var S = [];
          var C_ = [];
          var G = [];
          /**
           * Rabbit stream cipher algorithm
           */

          var Rabbit = C_algo.Rabbit = StreamCipher.extend({
            _doReset: function _doReset() {
              // Shortcuts
              var K = this._key.words;
              var iv = this.cfg.iv; // Swap endian

              for (var i = 0; i < 4; i++) {
                K[i] = (K[i] << 8 | K[i] >>> 24) & 0x00ff00ff | (K[i] << 24 | K[i] >>> 8) & 0xff00ff00;
              } // Generate initial state values


              var X = this._X = [K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16]; // Generate initial counter values

              var C = this._C = [K[2] << 16 | K[2] >>> 16, K[0] & 0xffff0000 | K[1] & 0x0000ffff, K[3] << 16 | K[3] >>> 16, K[1] & 0xffff0000 | K[2] & 0x0000ffff, K[0] << 16 | K[0] >>> 16, K[2] & 0xffff0000 | K[3] & 0x0000ffff, K[1] << 16 | K[1] >>> 16, K[3] & 0xffff0000 | K[0] & 0x0000ffff]; // Carry bit

              this._b = 0; // Iterate the system four times

              for (var i = 0; i < 4; i++) {
                nextState.call(this);
              } // Modify the counters


              for (var i = 0; i < 8; i++) {
                C[i] ^= X[i + 4 & 7];
              } // IV setup


              if (iv) {
                // Shortcuts
                var IV = iv.words;
                var IV_0 = IV[0];
                var IV_1 = IV[1]; // Generate four subvectors

                var i0 = (IV_0 << 8 | IV_0 >>> 24) & 0x00ff00ff | (IV_0 << 24 | IV_0 >>> 8) & 0xff00ff00;
                var i2 = (IV_1 << 8 | IV_1 >>> 24) & 0x00ff00ff | (IV_1 << 24 | IV_1 >>> 8) & 0xff00ff00;
                var i1 = i0 >>> 16 | i2 & 0xffff0000;
                var i3 = i2 << 16 | i0 & 0x0000ffff; // Modify counter values

                C[0] ^= i0;
                C[1] ^= i1;
                C[2] ^= i2;
                C[3] ^= i3;
                C[4] ^= i0;
                C[5] ^= i1;
                C[6] ^= i2;
                C[7] ^= i3; // Iterate the system four times

                for (var i = 0; i < 4; i++) {
                  nextState.call(this);
                }
              }
            },
            _doProcessBlock: function _doProcessBlock(M, offset) {
              // Shortcut
              var X = this._X; // Iterate the system

              nextState.call(this); // Generate four keystream words

              S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
              S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
              S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
              S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;

              for (var i = 0; i < 4; i++) {
                // Swap endian
                S[i] = (S[i] << 8 | S[i] >>> 24) & 0x00ff00ff | (S[i] << 24 | S[i] >>> 8) & 0xff00ff00; // Encrypt

                M[offset + i] ^= S[i];
              }
            },
            blockSize: 128 / 32,
            ivSize: 64 / 32
          });

          function nextState() {
            // Shortcuts
            var X = this._X;
            var C = this._C; // Save old counter values

            for (var i = 0; i < 8; i++) {
              C_[i] = C[i];
            } // Calculate new counter values


            C[0] = C[0] + 0x4d34d34d + this._b | 0;
            C[1] = C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
            C[2] = C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
            C[3] = C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
            C[4] = C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
            C[5] = C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
            C[6] = C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
            C[7] = C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
            this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0; // Calculate the g-values

            for (var i = 0; i < 8; i++) {
              var gx = X[i] + C[i]; // Construct high and low argument for squaring

              var ga = gx & 0xffff;
              var gb = gx >>> 16; // Calculate high and low result of squaring

              var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
              var gl = ((gx & 0xffff0000) * gx | 0) + ((gx & 0x0000ffff) * gx | 0); // High XOR low

              G[i] = gh ^ gl;
            } // Calculate new state values


            X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
            X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
            X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
            X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
            X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
            X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
            X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
            X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
          }
          /**
           * Shortcut functions to the cipher's object interface.
           *
           * @example
           *
           *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
           *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
           */


          C.Rabbit = StreamCipher._createHelper(Rabbit);
        })();

        return CryptoJS.Rabbit;
      });
      /***/

    },

    /***/
    "ELcG": function ELcG(module, exports, __webpack_require__) {
      ;

      (function (root, factory) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"));
        } else {}
      })(this, function (CryptoJS) {
        /** @preserve
        (c) 2012 by Cédric Mesnil. All rights reserved.
        	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
        	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
            - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
        	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        */
        (function (Math) {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var Hasher = C_lib.Hasher;
          var C_algo = C.algo; // Constants table

          var _zl = WordArray.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);

          var _zr = WordArray.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);

          var _sl = WordArray.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);

          var _sr = WordArray.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);

          var _hl = WordArray.create([0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);

          var _hr = WordArray.create([0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);
          /**
           * RIPEMD160 hash algorithm.
           */


          var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
            _doReset: function _doReset() {
              this._hash = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
            },
            _doProcessBlock: function _doProcessBlock(M, offset) {
              // Swap endian
              for (var i = 0; i < 16; i++) {
                // Shortcuts
                var offset_i = offset + i;
                var M_offset_i = M[offset_i]; // Swap

                M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff | (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;
              } // Shortcut


              var H = this._hash.words;
              var hl = _hl.words;
              var hr = _hr.words;
              var zl = _zl.words;
              var zr = _zr.words;
              var sl = _sl.words;
              var sr = _sr.words; // Working variables

              var al, bl, cl, dl, el;
              var ar, br, cr, dr, er;
              ar = al = H[0];
              br = bl = H[1];
              cr = cl = H[2];
              dr = dl = H[3];
              er = el = H[4]; // Computation

              var t;

              for (var i = 0; i < 80; i += 1) {
                t = al + M[offset + zl[i]] | 0;

                if (i < 16) {
                  t += f1(bl, cl, dl) + hl[0];
                } else if (i < 32) {
                  t += f2(bl, cl, dl) + hl[1];
                } else if (i < 48) {
                  t += f3(bl, cl, dl) + hl[2];
                } else if (i < 64) {
                  t += f4(bl, cl, dl) + hl[3];
                } else {
                  // if (i<80) {
                  t += f5(bl, cl, dl) + hl[4];
                }

                t = t | 0;
                t = rotl(t, sl[i]);
                t = t + el | 0;
                al = el;
                el = dl;
                dl = rotl(cl, 10);
                cl = bl;
                bl = t;
                t = ar + M[offset + zr[i]] | 0;

                if (i < 16) {
                  t += f5(br, cr, dr) + hr[0];
                } else if (i < 32) {
                  t += f4(br, cr, dr) + hr[1];
                } else if (i < 48) {
                  t += f3(br, cr, dr) + hr[2];
                } else if (i < 64) {
                  t += f2(br, cr, dr) + hr[3];
                } else {
                  // if (i<80) {
                  t += f1(br, cr, dr) + hr[4];
                }

                t = t | 0;
                t = rotl(t, sr[i]);
                t = t + er | 0;
                ar = er;
                er = dr;
                dr = rotl(cr, 10);
                cr = br;
                br = t;
              } // Intermediate hash value


              t = H[1] + cl + dr | 0;
              H[1] = H[2] + dl + er | 0;
              H[2] = H[3] + el + ar | 0;
              H[3] = H[4] + al + br | 0;
              H[4] = H[0] + bl + cr | 0;
              H[0] = t;
            },
            _doFinalize: function _doFinalize() {
              // Shortcuts
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8; // Add padding

              dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 0x00ff00ff | (nBitsTotal << 24 | nBitsTotal >>> 8) & 0xff00ff00;
              data.sigBytes = (dataWords.length + 1) * 4; // Hash final blocks

              this._process(); // Shortcuts


              var hash = this._hash;
              var H = hash.words; // Swap endian

              for (var i = 0; i < 5; i++) {
                // Shortcut
                var H_i = H[i]; // Swap

                H[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff | (H_i << 24 | H_i >>> 8) & 0xff00ff00;
              } // Return final computed hash


              return hash;
            },
            clone: function clone() {
              var clone = Hasher.clone.call(this);
              clone._hash = this._hash.clone();
              return clone;
            }
          });

          function f1(x, y, z) {
            return x ^ y ^ z;
          }

          function f2(x, y, z) {
            return x & y | ~x & z;
          }

          function f3(x, y, z) {
            return (x | ~y) ^ z;
          }

          function f4(x, y, z) {
            return x & z | y & ~z;
          }

          function f5(x, y, z) {
            return x ^ (y | ~z);
          }

          function rotl(x, n) {
            return x << n | x >>> 32 - n;
          }
          /**
           * Shortcut function to the hasher's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           *
           * @return {WordArray} The hash.
           *
           * @static
           *
           * @example
           *
           *     var hash = CryptoJS.RIPEMD160('message');
           *     var hash = CryptoJS.RIPEMD160(wordArray);
           */


          C.RIPEMD160 = Hasher._createHelper(RIPEMD160);
          /**
           * Shortcut function to the HMAC's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           * @param {WordArray|string} key The secret key.
           *
           * @return {WordArray} The HMAC.
           *
           * @static
           *
           * @example
           *
           *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
           */

          C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
        })(Math);

        return CryptoJS.RIPEMD160;
      });
      /***/

    },

    /***/
    "ETIr": function ETIr(module, exports, __webpack_require__) {
      ;

      (function (root, factory) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"));
        } else {}
      })(this, function (CryptoJS) {
        (function () {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var C_enc = C.enc;
          /**
           * Base64 encoding strategy.
           */

          var Base64 = C_enc.Base64 = {
            /**
             * Converts a word array to a Base64 string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The Base64 string.
             *
             * @static
             *
             * @example
             *
             *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
             */
            stringify: function stringify(wordArray) {
              // Shortcuts
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var map = this._map; // Clamp excess bits

              wordArray.clamp(); // Convert

              var base64Chars = [];

              for (var i = 0; i < sigBytes; i += 3) {
                var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
                var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 0xff;
                var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 0xff;
                var triplet = byte1 << 16 | byte2 << 8 | byte3;

                for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                  base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));
                }
              } // Add padding


              var paddingChar = map.charAt(64);

              if (paddingChar) {
                while (base64Chars.length % 4) {
                  base64Chars.push(paddingChar);
                }
              }

              return base64Chars.join('');
            },

            /**
             * Converts a Base64 string to a word array.
             *
             * @param {string} base64Str The Base64 string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
             */
            parse: function parse(base64Str) {
              // Shortcuts
              var base64StrLength = base64Str.length;
              var map = this._map;
              var reverseMap = this._reverseMap;

              if (!reverseMap) {
                reverseMap = this._reverseMap = [];

                for (var j = 0; j < map.length; j++) {
                  reverseMap[map.charCodeAt(j)] = j;
                }
              } // Ignore padding


              var paddingChar = map.charAt(64);

              if (paddingChar) {
                var paddingIndex = base64Str.indexOf(paddingChar);

                if (paddingIndex !== -1) {
                  base64StrLength = paddingIndex;
                }
              } // Convert


              return parseLoop(base64Str, base64StrLength, reverseMap);
            },
            _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
          };

          function parseLoop(base64Str, base64StrLength, reverseMap) {
            var words = [];
            var nBytes = 0;

            for (var i = 0; i < base64StrLength; i++) {
              if (i % 4) {
                var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
                var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
                var bitsCombined = bits1 | bits2;
                words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
                nBytes++;
              }
            }

            return WordArray.create(words, nBytes);
          }
        })();

        return CryptoJS.enc.Base64;
      });
      /***/

    },

    /***/
    "ElMP": function ElMP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");

      function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
        if (joseHeader.crit !== undefined && protectedHeader.crit === undefined) {
          throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
        }

        if (!protectedHeader || protectedHeader.crit === undefined) {
          return new Set();
        }

        if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some(function (input) {
          return typeof input !== 'string' || input.length === 0;
        })) {
          throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
        }

        var recognized;

        if (recognizedOption !== undefined) {
          recognized = new Map([].concat(_toConsumableArray(Object.entries(recognizedOption)), _toConsumableArray(recognizedDefault.entries())));
        } else {
          recognized = recognizedDefault;
        }

        var _iterator2 = _createForOfIteratorHelper(protectedHeader.crit),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var parameter = _step2.value;

            if (!recognized.has(parameter)) {
              throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JOSENotSupported"]("Extension Header Parameter \"".concat(parameter, "\" is not recognized"));
            }

            if (joseHeader[parameter] === undefined) {
              throw new Err("Extension Header Parameter \"".concat(parameter, "\" is missing"));
            } else if (recognized.get(parameter) && protectedHeader[parameter] === undefined) {
              throw new Err("Extension Header Parameter \"".concat(parameter, "\" MUST be integrity protected"));
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return new Set(protectedHeader.crit);
      }
      /* harmony default export */


      __webpack_exports__["default"] = validateCrit;
      /***/
    },

    /***/
    "F+F2": function FF2(module, exports, __webpack_require__) {
      ;

      (function (root, factory) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"));
        } else {}
      })(this, function (CryptoJS) {
        (function () {
          // Check if typed arrays are supported
          if (typeof ArrayBuffer != 'function') {
            return;
          } // Shortcuts


          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray; // Reference original init

          var superInit = WordArray.init; // Augment WordArray.init to handle typed arrays

          var subInit = WordArray.init = function (typedArray) {
            // Convert buffers to uint8
            if (typedArray instanceof ArrayBuffer) {
              typedArray = new Uint8Array(typedArray);
            } // Convert other array views to uint8


            if (typedArray instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {
              typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
            } // Handle Uint8Array


            if (typedArray instanceof Uint8Array) {
              // Shortcut
              var typedArrayByteLength = typedArray.byteLength; // Extract bytes

              var words = [];

              for (var i = 0; i < typedArrayByteLength; i++) {
                words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
              } // Initialize this word array


              superInit.call(this, words, typedArrayByteLength);
            } else {
              // Else call normal init
              superInit.apply(this, arguments);
            }
          };

          subInit.prototype = WordArray;
        })();

        return CryptoJS.lib.WordArray;
      });
      /***/

    },

    /***/
    "GRuw": function GRuw(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./sha256 */
          "lPiR"));
        } else {}
      })(this, function (CryptoJS) {
        (function () {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var C_algo = C.algo;
          var SHA256 = C_algo.SHA256;
          /**
           * SHA-224 hash algorithm.
           */

          var SHA224 = C_algo.SHA224 = SHA256.extend({
            _doReset: function _doReset() {
              this._hash = new WordArray.init([0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]);
            },
            _doFinalize: function _doFinalize() {
              var hash = SHA256._doFinalize.call(this);

              hash.sigBytes -= 4;
              return hash;
            }
          });
          /**
           * Shortcut function to the hasher's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           *
           * @return {WordArray} The hash.
           *
           * @static
           *
           * @example
           *
           *     var hash = CryptoJS.SHA224('message');
           *     var hash = CryptoJS.SHA224(wordArray);
           */

          C.SHA224 = SHA256._createHelper(SHA224);
          /**
           * Shortcut function to the HMAC's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           * @param {WordArray|string} key The secret key.
           *
           * @return {WordArray} The HMAC.
           *
           * @static
           *
           * @example
           *
           *     var hmac = CryptoJS.HmacSHA224(message, key);
           */

          C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
        })();

        return CryptoJS.SHA224;
      });
      /***/

    },

    /***/
    "H/EN": function HEN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "types", function () {
        return types;
      });
      /* harmony import */


      var _webcrypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./webcrypto.js */
      "hqmz");
      /* harmony default export */


      __webpack_exports__["default"] = function (key) {
        return Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_0__["isCryptoKey"])(key);
      };

      var types = ['CryptoKey'];
      /***/
    },

    /***/
    "HFAi": function HFAi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return subtleRsaEs;
      });
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");

      function subtleRsaEs(alg) {
        switch (alg) {
          case 'RSA-OAEP':
          case 'RSA-OAEP-256':
          case 'RSA-OAEP-384':
          case 'RSA-OAEP-512':
            return 'RSA-OAEP';

          default:
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JOSENotSupported"]("alg ".concat(alg, " is not supported either by JOSE or your javascript runtime"));
        }
      }
      /***/

    },

    /***/
    "Ib8C": function Ib8C(module, exports, __webpack_require__) {
      ;

      (function (root, factory) {
        if (true) {
          // CommonJS
          module.exports = exports = factory();
        } else {}
      })(this, function () {
        /*globals window, global, require*/

        /**
         * CryptoJS core components.
         */
        var CryptoJS = CryptoJS || function (Math, undefined) {
          var crypto; // Native crypto from window (Browser)

          if (typeof window !== 'undefined' && window.crypto) {
            crypto = window.crypto;
          } // Native crypto in web worker (Browser)


          if (typeof self !== 'undefined' && self.crypto) {
            crypto = self.crypto;
          } // Native crypto from worker


          if (typeof globalThis !== 'undefined' && globalThis.crypto) {
            crypto = globalThis.crypto;
          } // Native (experimental IE 11) crypto from window (Browser)


          if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
            crypto = window.msCrypto;
          } // Native crypto from global (NodeJS)


          if (!crypto && typeof global !== 'undefined' && global.crypto) {
            crypto = global.crypto;
          } // Native crypto import via require (NodeJS)


          if (!crypto && "function" === 'function') {
            try {
              crypto = __webpack_require__(
              /*! crypto */
              4);
            } catch (err) {}
          }
          /*
           * Cryptographically secure pseudorandom number generator
           *
           * As Math.random() is cryptographically not safe to use
           */


          var cryptoSecureRandomInt = function cryptoSecureRandomInt() {
            if (crypto) {
              // Use getRandomValues method (Browser)
              if (typeof crypto.getRandomValues === 'function') {
                try {
                  return crypto.getRandomValues(new Uint32Array(1))[0];
                } catch (err) {}
              } // Use randomBytes method (NodeJS)


              if (typeof crypto.randomBytes === 'function') {
                try {
                  return crypto.randomBytes(4).readInt32LE();
                } catch (err) {}
              }
            }

            throw new Error('Native crypto module could not be used to get secure random number.');
          };
          /*
           * Local polyfill of Object.create
            */


          var create = Object.create || function () {
            function F() {}

            return function (obj) {
              var subtype;
              F.prototype = obj;
              subtype = new F();
              F.prototype = null;
              return subtype;
            };
          }();
          /**
           * CryptoJS namespace.
           */


          var C = {};
          /**
           * Library namespace.
           */

          var C_lib = C.lib = {};
          /**
           * Base object for prototypal inheritance.
           */

          var Base = C_lib.Base = function () {
            return {
              /**
               * Creates a new object that inherits from this object.
               *
               * @param {Object} overrides Properties to copy into the new object.
               *
               * @return {Object} The new object.
               *
               * @static
               *
               * @example
               *
               *     var MyType = CryptoJS.lib.Base.extend({
               *         field: 'value',
               *
               *         method: function () {
               *         }
               *     });
               */
              extend: function extend(overrides) {
                // Spawn
                var subtype = create(this); // Augment

                if (overrides) {
                  subtype.mixIn(overrides);
                } // Create default initializer


                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
                  subtype.init = function () {
                    subtype.$super.init.apply(this, arguments);
                  };
                } // Initializer's prototype is the subtype object


                subtype.init.prototype = subtype; // Reference supertype

                subtype.$super = this;
                return subtype;
              },

              /**
               * Extends this object and runs the init method.
               * Arguments to create() will be passed to init().
               *
               * @return {Object} The new object.
               *
               * @static
               *
               * @example
               *
               *     var instance = MyType.create();
               */
              create: function create() {
                var instance = this.extend();
                instance.init.apply(instance, arguments);
                return instance;
              },

              /**
               * Initializes a newly created object.
               * Override this method to add some logic when your objects are created.
               *
               * @example
               *
               *     var MyType = CryptoJS.lib.Base.extend({
               *         init: function () {
               *             // ...
               *         }
               *     });
               */
              init: function init() {},

              /**
               * Copies properties into this object.
               *
               * @param {Object} properties The properties to mix in.
               *
               * @example
               *
               *     MyType.mixIn({
               *         field: 'value'
               *     });
               */
              mixIn: function mixIn(properties) {
                for (var propertyName in properties) {
                  if (properties.hasOwnProperty(propertyName)) {
                    this[propertyName] = properties[propertyName];
                  }
                } // IE won't copy toString using the loop above


                if (properties.hasOwnProperty('toString')) {
                  this.toString = properties.toString;
                }
              },

              /**
               * Creates a copy of this object.
               *
               * @return {Object} The clone.
               *
               * @example
               *
               *     var clone = instance.clone();
               */
              clone: function clone() {
                return this.init.prototype.extend(this);
              }
            };
          }();
          /**
           * An array of 32-bit words.
           *
           * @property {Array} words The array of 32-bit words.
           * @property {number} sigBytes The number of significant bytes in this word array.
           */


          var WordArray = C_lib.WordArray = Base.extend({
            /**
             * Initializes a newly created word array.
             *
             * @param {Array} words (Optional) An array of 32-bit words.
             * @param {number} sigBytes (Optional) The number of significant bytes in the words.
             *
             * @example
             *
             *     var wordArray = CryptoJS.lib.WordArray.create();
             *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
             *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
             */
            init: function init(words, sigBytes) {
              words = this.words = words || [];

              if (sigBytes != undefined) {
                this.sigBytes = sigBytes;
              } else {
                this.sigBytes = words.length * 4;
              }
            },

            /**
             * Converts this word array to a string.
             *
             * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
             *
             * @return {string} The stringified word array.
             *
             * @example
             *
             *     var string = wordArray + '';
             *     var string = wordArray.toString();
             *     var string = wordArray.toString(CryptoJS.enc.Utf8);
             */
            toString: function toString(encoder) {
              return (encoder || Hex).stringify(this);
            },

            /**
             * Concatenates a word array to this word array.
             *
             * @param {WordArray} wordArray The word array to append.
             *
             * @return {WordArray} This word array.
             *
             * @example
             *
             *     wordArray1.concat(wordArray2);
             */
            concat: function concat(wordArray) {
              // Shortcuts
              var thisWords = this.words;
              var thatWords = wordArray.words;
              var thisSigBytes = this.sigBytes;
              var thatSigBytes = wordArray.sigBytes; // Clamp excess bits

              this.clamp(); // Concat

              if (thisSigBytes % 4) {
                // Copy one byte at a time
                for (var i = 0; i < thatSigBytes; i++) {
                  var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
                  thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
                }
              } else {
                // Copy one word at a time
                for (var j = 0; j < thatSigBytes; j += 4) {
                  thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
                }
              }

              this.sigBytes += thatSigBytes; // Chainable

              return this;
            },

            /**
             * Removes insignificant bits.
             *
             * @example
             *
             *     wordArray.clamp();
             */
            clamp: function clamp() {
              // Shortcuts
              var words = this.words;
              var sigBytes = this.sigBytes; // Clamp

              words[sigBytes >>> 2] &= 0xffffffff << 32 - sigBytes % 4 * 8;
              words.length = Math.ceil(sigBytes / 4);
            },

            /**
             * Creates a copy of this word array.
             *
             * @return {WordArray} The clone.
             *
             * @example
             *
             *     var clone = wordArray.clone();
             */
            clone: function clone() {
              var clone = Base.clone.call(this);
              clone.words = this.words.slice(0);
              return clone;
            },

            /**
             * Creates a word array filled with random bytes.
             *
             * @param {number} nBytes The number of random bytes to generate.
             *
             * @return {WordArray} The random word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.lib.WordArray.random(16);
             */
            random: function random(nBytes) {
              var words = [];

              for (var i = 0; i < nBytes; i += 4) {
                words.push(cryptoSecureRandomInt());
              }

              return new WordArray.init(words, nBytes);
            }
          });
          /**
           * Encoder namespace.
           */

          var C_enc = C.enc = {};
          /**
           * Hex encoding strategy.
           */

          var Hex = C_enc.Hex = {
            /**
             * Converts a word array to a hex string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The hex string.
             *
             * @static
             *
             * @example
             *
             *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
             */
            stringify: function stringify(wordArray) {
              // Shortcuts
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes; // Convert

              var hexChars = [];

              for (var i = 0; i < sigBytes; i++) {
                var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
                hexChars.push((bite >>> 4).toString(16));
                hexChars.push((bite & 0x0f).toString(16));
              }

              return hexChars.join('');
            },

            /**
             * Converts a hex string to a word array.
             *
             * @param {string} hexStr The hex string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
             */
            parse: function parse(hexStr) {
              // Shortcut
              var hexStrLength = hexStr.length; // Convert

              var words = [];

              for (var i = 0; i < hexStrLength; i += 2) {
                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
              }

              return new WordArray.init(words, hexStrLength / 2);
            }
          };
          /**
           * Latin1 encoding strategy.
           */

          var Latin1 = C_enc.Latin1 = {
            /**
             * Converts a word array to a Latin1 string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The Latin1 string.
             *
             * @static
             *
             * @example
             *
             *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
             */
            stringify: function stringify(wordArray) {
              // Shortcuts
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes; // Convert

              var latin1Chars = [];

              for (var i = 0; i < sigBytes; i++) {
                var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
                latin1Chars.push(String.fromCharCode(bite));
              }

              return latin1Chars.join('');
            },

            /**
             * Converts a Latin1 string to a word array.
             *
             * @param {string} latin1Str The Latin1 string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
             */
            parse: function parse(latin1Str) {
              // Shortcut
              var latin1StrLength = latin1Str.length; // Convert

              var words = [];

              for (var i = 0; i < latin1StrLength; i++) {
                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << 24 - i % 4 * 8;
              }

              return new WordArray.init(words, latin1StrLength);
            }
          };
          /**
           * UTF-8 encoding strategy.
           */

          var Utf8 = C_enc.Utf8 = {
            /**
             * Converts a word array to a UTF-8 string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The UTF-8 string.
             *
             * @static
             *
             * @example
             *
             *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
             */
            stringify: function stringify(wordArray) {
              try {
                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
              } catch (e) {
                throw new Error('Malformed UTF-8 data');
              }
            },

            /**
             * Converts a UTF-8 string to a word array.
             *
             * @param {string} utf8Str The UTF-8 string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
             */
            parse: function parse(utf8Str) {
              return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
            }
          };
          /**
           * Abstract buffered block algorithm template.
           *
           * The property blockSize must be implemented in a concrete subtype.
           *
           * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
           */

          var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
            /**
             * Resets this block algorithm's data buffer to its initial state.
             *
             * @example
             *
             *     bufferedBlockAlgorithm.reset();
             */
            reset: function reset() {
              // Initial values
              this._data = new WordArray.init();
              this._nDataBytes = 0;
            },

            /**
             * Adds new data to this block algorithm's buffer.
             *
             * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
             *
             * @example
             *
             *     bufferedBlockAlgorithm._append('data');
             *     bufferedBlockAlgorithm._append(wordArray);
             */
            _append: function _append(data) {
              // Convert string to WordArray, else assume WordArray already
              if (typeof data == 'string') {
                data = Utf8.parse(data);
              } // Append


              this._data.concat(data);

              this._nDataBytes += data.sigBytes;
            },

            /**
             * Processes available data blocks.
             *
             * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
             *
             * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
             *
             * @return {WordArray} The processed data.
             *
             * @example
             *
             *     var processedData = bufferedBlockAlgorithm._process();
             *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
             */
            _process: function _process(doFlush) {
              var processedWords; // Shortcuts

              var data = this._data;
              var dataWords = data.words;
              var dataSigBytes = data.sigBytes;
              var blockSize = this.blockSize;
              var blockSizeBytes = blockSize * 4; // Count blocks ready

              var nBlocksReady = dataSigBytes / blockSizeBytes;

              if (doFlush) {
                // Round up to include partial blocks
                nBlocksReady = Math.ceil(nBlocksReady);
              } else {
                // Round down to include only full blocks,
                // less the number of blocks that must remain in the buffer
                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
              } // Count words ready


              var nWordsReady = nBlocksReady * blockSize; // Count bytes ready

              var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes); // Process blocks

              if (nWordsReady) {
                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                  // Perform concrete-algorithm logic
                  this._doProcessBlock(dataWords, offset);
                } // Remove processed words


                processedWords = dataWords.splice(0, nWordsReady);
                data.sigBytes -= nBytesReady;
              } // Return processed words


              return new WordArray.init(processedWords, nBytesReady);
            },

            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = bufferedBlockAlgorithm.clone();
             */
            clone: function clone() {
              var clone = Base.clone.call(this);
              clone._data = this._data.clone();
              return clone;
            },
            _minBufferSize: 0
          });
          /**
           * Abstract hasher template.
           *
           * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
           */

          var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
            /**
             * Configuration options.
             */
            cfg: Base.extend(),

            /**
             * Initializes a newly created hasher.
             *
             * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
             *
             * @example
             *
             *     var hasher = CryptoJS.algo.SHA256.create();
             */
            init: function init(cfg) {
              // Apply config defaults
              this.cfg = this.cfg.extend(cfg); // Set initial values

              this.reset();
            },

            /**
             * Resets this hasher to its initial state.
             *
             * @example
             *
             *     hasher.reset();
             */
            reset: function reset() {
              // Reset data buffer
              BufferedBlockAlgorithm.reset.call(this); // Perform concrete-hasher logic

              this._doReset();
            },

            /**
             * Updates this hasher with a message.
             *
             * @param {WordArray|string} messageUpdate The message to append.
             *
             * @return {Hasher} This hasher.
             *
             * @example
             *
             *     hasher.update('message');
             *     hasher.update(wordArray);
             */
            update: function update(messageUpdate) {
              // Append
              this._append(messageUpdate); // Update the hash


              this._process(); // Chainable


              return this;
            },

            /**
             * Finalizes the hash computation.
             * Note that the finalize operation is effectively a destructive, read-once operation.
             *
             * @param {WordArray|string} messageUpdate (Optional) A final message update.
             *
             * @return {WordArray} The hash.
             *
             * @example
             *
             *     var hash = hasher.finalize();
             *     var hash = hasher.finalize('message');
             *     var hash = hasher.finalize(wordArray);
             */
            finalize: function finalize(messageUpdate) {
              // Final message update
              if (messageUpdate) {
                this._append(messageUpdate);
              } // Perform concrete-hasher logic


              var hash = this._doFinalize();

              return hash;
            },
            blockSize: 512 / 32,

            /**
             * Creates a shortcut function to a hasher's object interface.
             *
             * @param {Hasher} hasher The hasher to create a helper for.
             *
             * @return {Function} The shortcut function.
             *
             * @static
             *
             * @example
             *
             *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
             */
            _createHelper: function _createHelper(hasher) {
              return function (message, cfg) {
                return new hasher.init(cfg).finalize(message);
              };
            },

            /**
             * Creates a shortcut function to the HMAC's object interface.
             *
             * @param {Hasher} hasher The hasher to use in this HMAC helper.
             *
             * @return {Function} The shortcut function.
             *
             * @static
             *
             * @example
             *
             *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
             */
            _createHmacHelper: function _createHmacHelper(hasher) {
              return function (message, key) {
                return new C_algo.HMAC.init(hasher, key).finalize(message);
              };
            }
          });
          /**
           * Algorithm namespace.
           */

          var C_algo = C.algo = {};
          return C;
        }(Math);

        return CryptoJS;
      });
      /***/

    },

    /***/
    "IeVz": function IeVz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decodeJwt", function () {
        return decodeJwt;
      });
      /* harmony import */


      var _base64url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./base64url.js */
      "JeaE");
      /* harmony import */


      var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../lib/buffer_utils.js */
      "xpfA");
      /* harmony import */


      var _lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../lib/is_object.js */
      "2fVw");
      /* harmony import */


      var _errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./errors.js */
      "StPg");

      function decodeJwt(jwt) {
        if (typeof jwt !== 'string') throw new _errors_js__WEBPACK_IMPORTED_MODULE_3__["JWTInvalid"]('JWTs must use Compact JWS serialization, JWT must be a string');

        var _jwt$split = jwt.split('.'),
            payload = _jwt$split[1],
            length = _jwt$split.length;

        if (length === 5) throw new _errors_js__WEBPACK_IMPORTED_MODULE_3__["JWTInvalid"]('Only JWTs using Compact JWS serialization can be decoded');
        if (length !== 3) throw new _errors_js__WEBPACK_IMPORTED_MODULE_3__["JWTInvalid"]('Invalid JWT');
        if (!payload) throw new _errors_js__WEBPACK_IMPORTED_MODULE_3__["JWTInvalid"]('JWTs must contain a payload');
        var decoded;

        try {
          decoded = Object(_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(payload);
        } catch (_a) {
          throw new _errors_js__WEBPACK_IMPORTED_MODULE_3__["JWTInvalid"]('Failed to parse the base64url encoded payload');
        }

        var result;

        try {
          result = JSON.parse(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__["decoder"].decode(decoded));
        } catch (_b) {
          throw new _errors_js__WEBPACK_IMPORTED_MODULE_3__["JWTInvalid"]('Failed to parse the decoded payload as JSON');
        }

        if (!Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__["default"])(result)) throw new _errors_js__WEBPACK_IMPORTED_MODULE_3__["JWTInvalid"]('Invalid JWT Claims Set');
        return result;
      }
      /***/

    },

    /***/
    "IpBm": function IpBm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toSPKI", function () {
        return toSPKI;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toPKCS8", function () {
        return toPKCS8;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromPKCS8", function () {
        return fromPKCS8;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromSPKI", function () {
        return fromSPKI;
      });
      /* harmony import */


      var _env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./env.js */
      "+S68");
      /* harmony import */


      var _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./webcrypto.js */
      "hqmz");
      /* harmony import */


      var _lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../lib/invalid_key_input.js */
      "wZa+");
      /* harmony import */


      var _base64url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./base64url.js */
      "KjJ5");
      /* harmony import */


      var _lib_format_pem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../lib/format_pem.js */
      "aMKJ");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");
      /* harmony import */


      var _is_key_like_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./is_key_like.js */
      "H/EN");

      var genericExport = /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(keyType, keyFormat, key) {
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  if (Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["isCryptoKey"])(key)) {
                    _context15.next = 2;
                    break;
                  }

                  throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_2__["default"]).apply(void 0, [key].concat(_toConsumableArray(_is_key_like_js__WEBPACK_IMPORTED_MODULE_6__["types"]))));

                case 2:
                  if (key.extractable) {
                    _context15.next = 4;
                    break;
                  }

                  throw new TypeError('CryptoKey is not extractable');

                case 4:
                  if (!(key.type !== keyType)) {
                    _context15.next = 6;
                    break;
                  }

                  throw new TypeError("key is not a ".concat(keyType, " key"));

                case 6:
                  _context15.t0 = Object(_lib_format_pem_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
                  _context15.t1 = Object(_base64url_js__WEBPACK_IMPORTED_MODULE_3__["encodeBase64"]);
                  _context15.t2 = Uint8Array;
                  _context15.next = 11;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.exportKey(keyFormat, key);

                case 11:
                  _context15.t3 = _context15.sent;
                  _context15.t4 = new _context15.t2(_context15.t3);
                  _context15.t5 = (0, _context15.t1)(_context15.t4);
                  _context15.t6 = "".concat(keyType.toUpperCase(), " KEY");
                  return _context15.abrupt("return", (0, _context15.t0)(_context15.t5, _context15.t6));

                case 16:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15);
        }));

        return function genericExport(_x29, _x30, _x31) {
          return _ref6.apply(this, arguments);
        };
      }();

      var toSPKI = function toSPKI(key) {
        return genericExport('public', 'spki', key);
      };

      var toPKCS8 = function toPKCS8(key) {
        return genericExport('private', 'pkcs8', key);
      };

      var findOid = function findOid(keyData, oid) {
        var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        if (from === 0) {
          oid.unshift(oid.length);
          oid.unshift(0x06);
        }

        var i = keyData.indexOf(oid[0], from);
        if (i === -1) return false;
        var sub = keyData.subarray(i, i + oid.length);
        if (sub.length !== oid.length) return false;
        return sub.every(function (value, index) {
          return value === oid[index];
        }) || findOid(keyData, oid, i + 1);
      };

      var getNamedCurve = function getNamedCurve(keyData) {
        switch (true) {
          case findOid(keyData, [0x2a, 0x86, 0x48, 0xce, 0x3d, 0x03, 0x01, 0x07]):
            return 'P-256';

          case findOid(keyData, [0x2b, 0x81, 0x04, 0x00, 0x22]):
            return 'P-384';

          case findOid(keyData, [0x2b, 0x81, 0x04, 0x00, 0x23]):
            return 'P-521';

          case Object(_env_js__WEBPACK_IMPORTED_MODULE_0__["isCloudflareWorkers"])() && findOid(keyData, [0x2b, 0x65, 0x70]):
            return 'Ed25519';

          default:
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JOSENotSupported"]('Invalid or unsupported EC Key Curve or OKP Key Sub Type');
        }
      };

      var genericImport = /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(replace, keyFormat, pem, alg, options) {
          var _a, algorithm, keyUsages, keyData, isPublic, namedCurve;

          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  keyData = new Uint8Array(atob(pem.replace(replace, '')).split('').map(function (c) {
                    return c.charCodeAt(0);
                  }));
                  isPublic = keyFormat === 'spki';
                  _context16.t0 = alg;
                  _context16.next = _context16.t0 === 'PS256' ? 5 : _context16.t0 === 'PS384' ? 5 : _context16.t0 === 'PS512' ? 5 : _context16.t0 === 'RS256' ? 8 : _context16.t0 === 'RS384' ? 8 : _context16.t0 === 'RS512' ? 8 : _context16.t0 === 'RSA-OAEP' ? 11 : _context16.t0 === 'RSA-OAEP-256' ? 11 : _context16.t0 === 'RSA-OAEP-384' ? 11 : _context16.t0 === 'RSA-OAEP-512' ? 11 : _context16.t0 === 'ES256' ? 14 : _context16.t0 === 'ES384' ? 17 : _context16.t0 === 'ES512' ? 20 : _context16.t0 === 'ECDH-ES' ? 23 : _context16.t0 === 'ECDH-ES+A128KW' ? 23 : _context16.t0 === 'ECDH-ES+A192KW' ? 23 : _context16.t0 === 'ECDH-ES+A256KW' ? 23 : _context16.t0 === (Object(_env_js__WEBPACK_IMPORTED_MODULE_0__["isCloudflareWorkers"])() && 'EdDSA') ? 26 : 30;
                  break;

                case 5:
                  algorithm = {
                    name: 'RSA-PSS',
                    hash: "SHA-".concat(alg.slice(-3))
                  };
                  keyUsages = isPublic ? ['verify'] : ['sign'];
                  return _context16.abrupt("break", 31);

                case 8:
                  algorithm = {
                    name: 'RSASSA-PKCS1-v1_5',
                    hash: "SHA-".concat(alg.slice(-3))
                  };
                  keyUsages = isPublic ? ['verify'] : ['sign'];
                  return _context16.abrupt("break", 31);

                case 11:
                  algorithm = {
                    name: 'RSA-OAEP',
                    hash: "SHA-".concat(parseInt(alg.slice(-3), 10) || 1)
                  };
                  keyUsages = isPublic ? ['encrypt', 'wrapKey'] : ['decrypt', 'unwrapKey'];
                  return _context16.abrupt("break", 31);

                case 14:
                  algorithm = {
                    name: 'ECDSA',
                    namedCurve: 'P-256'
                  };
                  keyUsages = isPublic ? ['verify'] : ['sign'];
                  return _context16.abrupt("break", 31);

                case 17:
                  algorithm = {
                    name: 'ECDSA',
                    namedCurve: 'P-384'
                  };
                  keyUsages = isPublic ? ['verify'] : ['sign'];
                  return _context16.abrupt("break", 31);

                case 20:
                  algorithm = {
                    name: 'ECDSA',
                    namedCurve: 'P-521'
                  };
                  keyUsages = isPublic ? ['verify'] : ['sign'];
                  return _context16.abrupt("break", 31);

                case 23:
                  algorithm = {
                    name: 'ECDH',
                    namedCurve: getNamedCurve(keyData)
                  };
                  keyUsages = isPublic ? [] : ['deriveBits'];
                  return _context16.abrupt("break", 31);

                case 26:
                  namedCurve = getNamedCurve(keyData).toUpperCase();
                  algorithm = {
                    name: "NODE-".concat(namedCurve),
                    namedCurve: "NODE-".concat(namedCurve)
                  };
                  keyUsages = isPublic ? ['verify'] : ['sign'];
                  return _context16.abrupt("break", 31);

                case 30:
                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JOSENotSupported"]('Invalid or unsupported "alg" (Algorithm) value');

                case 31:
                  return _context16.abrupt("return", _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.importKey(keyFormat, keyData, algorithm, (_a = options === null || options === void 0 ? void 0 : options.extractable) !== null && _a !== void 0 ? _a : false, keyUsages));

                case 32:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16);
        }));

        return function genericImport(_x32, _x33, _x34, _x35, _x36) {
          return _ref7.apply(this, arguments);
        };
      }();

      var fromPKCS8 = function fromPKCS8(pem, alg, options) {
        return genericImport(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, 'pkcs8', pem, alg, options);
      };

      var fromSPKI = function fromSPKI(pem, alg, options) {
        return genericImport(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, 'spki', pem, alg, options);
      };
      /***/

    },

    /***/
    "JeaE": function JeaE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "encode", function () {
        return encode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decode", function () {
        return decode;
      });
      /* harmony import */


      var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../runtime/base64url.js */
      "KjJ5");

      var encode = _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"];
      var decode = _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"];
      /***/
    },

    /***/
    "JnDH": function JnDH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      var validateAlgorithms = function validateAlgorithms(option, algorithms) {
        if (algorithms !== undefined && (!Array.isArray(algorithms) || algorithms.some(function (s) {
          return typeof s !== 'string';
        }))) {
          throw new TypeError("\"".concat(option, "\" option must be an array of strings"));
        }

        if (!algorithms) {
          return undefined;
        }

        return new Set(algorithms);
      };
      /* harmony default export */


      __webpack_exports__["default"] = validateAlgorithms;
      /***/
    },

    /***/
    "K3mO": function K3mO(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./sha1 */
          "3y9D"), __webpack_require__(
          /*! ./hmac */
          "WYAk"));
        } else {}
      })(this, function (CryptoJS) {
        (function () {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var Base = C_lib.Base;
          var WordArray = C_lib.WordArray;
          var C_algo = C.algo;
          var MD5 = C_algo.MD5;
          /**
           * This key derivation function is meant to conform with EVP_BytesToKey.
           * www.openssl.org/docs/crypto/EVP_BytesToKey.html
           */

          var EvpKDF = C_algo.EvpKDF = Base.extend({
            /**
             * Configuration options.
             *
             * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
             * @property {Hasher} hasher The hash algorithm to use. Default: MD5
             * @property {number} iterations The number of iterations to perform. Default: 1
             */
            cfg: Base.extend({
              keySize: 128 / 32,
              hasher: MD5,
              iterations: 1
            }),

            /**
             * Initializes a newly created key derivation function.
             *
             * @param {Object} cfg (Optional) The configuration options to use for the derivation.
             *
             * @example
             *
             *     var kdf = CryptoJS.algo.EvpKDF.create();
             *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
             *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
             */
            init: function init(cfg) {
              this.cfg = this.cfg.extend(cfg);
            },

            /**
             * Derives a key from a password.
             *
             * @param {WordArray|string} password The password.
             * @param {WordArray|string} salt A salt.
             *
             * @return {WordArray} The derived key.
             *
             * @example
             *
             *     var key = kdf.compute(password, salt);
             */
            compute: function compute(password, salt) {
              var block; // Shortcut

              var cfg = this.cfg; // Init hasher

              var hasher = cfg.hasher.create(); // Initial values

              var derivedKey = WordArray.create(); // Shortcuts

              var derivedKeyWords = derivedKey.words;
              var keySize = cfg.keySize;
              var iterations = cfg.iterations; // Generate key

              while (derivedKeyWords.length < keySize) {
                if (block) {
                  hasher.update(block);
                }

                block = hasher.update(password).finalize(salt);
                hasher.reset(); // Iterations

                for (var i = 1; i < iterations; i++) {
                  block = hasher.finalize(block);
                  hasher.reset();
                }

                derivedKey.concat(block);
              }

              derivedKey.sigBytes = keySize * 4;
              return derivedKey;
            }
          });
          /**
           * Derives a key from a password.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           * @param {Object} cfg (Optional) The configuration options to use for this computation.
           *
           * @return {WordArray} The derived key.
           *
           * @static
           *
           * @example
           *
           *     var key = CryptoJS.EvpKDF(password, salt);
           *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
           *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
           */

          C.EvpKDF = function (password, salt, cfg) {
            return EvpKDF.create(cfg).compute(password, salt);
          };
        })();

        return CryptoJS.EvpKDF;
      });
      /***/

    },

    /***/
    "KJfr": function KJfr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generateSecret", function () {
        return generateSecret;
      });
      /* harmony import */


      var _runtime_generate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../runtime/generate.js */
      "QaxS");

      function generateSecret(_x37, _x38) {
        return _generateSecret.apply(this, arguments);
      }
      /***/


      function _generateSecret() {
        _generateSecret = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(alg, options) {
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  return _context17.abrupt("return", Object(_runtime_generate_js__WEBPACK_IMPORTED_MODULE_0__["generateSecret"])(alg, options));

                case 1:
                case "end":
                  return _context17.stop();
              }
            }
          }, _callee17);
        }));
        return _generateSecret.apply(this, arguments);
      }
    },

    /***/
    "KMcw": function KMcw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");

      var checkCekLength = function checkCekLength(cek, expected) {
        if (cek.length << 3 !== expected) {
          throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWEInvalid"]('Invalid Content Encryption Key length');
        }
      };
      /* harmony default export */


      __webpack_exports__["default"] = checkCekLength;
      /***/
    },

    /***/
    "KjJ5": function KjJ5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "encodeBase64", function () {
        return encodeBase64;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "encode", function () {
        return encode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decodeBase64", function () {
        return decodeBase64;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decode", function () {
        return decode;
      });
      /* harmony import */


      var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../lib/buffer_utils.js */
      "xpfA");

      var encodeBase64 = function encodeBase64(input) {
        var unencoded = input;

        if (typeof unencoded === 'string') {
          unencoded = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["encoder"].encode(unencoded);
        }

        var CHUNK_SIZE = 0x8000;
        var arr = [];

        for (var i = 0; i < unencoded.length; i += CHUNK_SIZE) {
          arr.push(String.fromCharCode.apply(null, unencoded.subarray(i, i + CHUNK_SIZE)));
        }

        return btoa(arr.join(''));
      };

      var encode = function encode(input) {
        return encodeBase64(input).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
      };

      var decodeBase64 = function decodeBase64(encoded) {
        var binary = atob(encoded);
        var bytes = new Uint8Array(binary.length);

        for (var i = 0; i < binary.length; i++) {
          bytes[i] = binary.charCodeAt(i);
        }

        return bytes;
      };

      var decode = function decode(input) {
        var encoded = input;

        if (encoded instanceof Uint8Array) {
          encoded = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["decoder"].decode(encoded);
        }

        encoded = encoded.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');

        try {
          return decodeBase64(encoded);
        } catch (_a) {
          throw new TypeError('The input to be decoded is not correctly encoded.');
        }
      };
      /***/

    },

    /***/
    "KmYQ": function KmYQ(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./cipher-core */
          "OLod"));
        } else {}
      })(this, function (CryptoJS) {
        /**
         * Zero padding strategy.
         */
        CryptoJS.pad.ZeroPadding = {
          pad: function pad(data, blockSize) {
            // Shortcut
            var blockSizeBytes = blockSize * 4; // Pad

            data.clamp();
            data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
          },
          unpad: function unpad(data) {
            // Shortcut
            var dataWords = data.words; // Unpad

            var i = data.sigBytes - 1;

            for (var i = data.sigBytes - 1; i >= 0; i--) {
              if (dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff) {
                data.sigBytes = i + 1;
                break;
              }
            }
          }
        };
        return CryptoJS.pad.ZeroPadding;
      });
      /***/

    },

    /***/
    "LuQ+": function LuQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./env.js */
      "+S68");
      /* harmony import */


      var _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./webcrypto.js */
      "hqmz");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");
      /* harmony import */


      var _base64url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./base64url.js */
      "KjJ5");

      function subtleMapping(jwk) {
        var algorithm;
        var keyUsages;

        switch (jwk.kty) {
          case 'oct':
            {
              switch (jwk.alg) {
                case 'HS256':
                case 'HS384':
                case 'HS512':
                  algorithm = {
                    name: 'HMAC',
                    hash: "SHA-".concat(jwk.alg.slice(-3))
                  };
                  keyUsages = ['sign', 'verify'];
                  break;

                case 'A128CBC-HS256':
                case 'A192CBC-HS384':
                case 'A256CBC-HS512':
                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSENotSupported"]("".concat(jwk.alg, " keys cannot be imported as CryptoKey instances"));

                case 'A128GCM':
                case 'A192GCM':
                case 'A256GCM':
                case 'A128GCMKW':
                case 'A192GCMKW':
                case 'A256GCMKW':
                  algorithm = {
                    name: 'AES-GCM'
                  };
                  keyUsages = ['encrypt', 'decrypt'];
                  break;

                case 'A128KW':
                case 'A192KW':
                case 'A256KW':
                  algorithm = {
                    name: 'AES-KW'
                  };
                  keyUsages = ['wrapKey', 'unwrapKey'];
                  break;

                case 'PBES2-HS256+A128KW':
                case 'PBES2-HS384+A192KW':
                case 'PBES2-HS512+A256KW':
                  algorithm = {
                    name: 'PBKDF2'
                  };
                  keyUsages = ['deriveBits'];
                  break;

                default:
                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSENotSupported"]('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
              }

              break;
            }

          case 'RSA':
            {
              switch (jwk.alg) {
                case 'PS256':
                case 'PS384':
                case 'PS512':
                  algorithm = {
                    name: 'RSA-PSS',
                    hash: "SHA-".concat(jwk.alg.slice(-3))
                  };
                  keyUsages = jwk.d ? ['sign'] : ['verify'];
                  break;

                case 'RS256':
                case 'RS384':
                case 'RS512':
                  algorithm = {
                    name: 'RSASSA-PKCS1-v1_5',
                    hash: "SHA-".concat(jwk.alg.slice(-3))
                  };
                  keyUsages = jwk.d ? ['sign'] : ['verify'];
                  break;

                case 'RSA-OAEP':
                case 'RSA-OAEP-256':
                case 'RSA-OAEP-384':
                case 'RSA-OAEP-512':
                  algorithm = {
                    name: 'RSA-OAEP',
                    hash: "SHA-".concat(parseInt(jwk.alg.slice(-3), 10) || 1)
                  };
                  keyUsages = jwk.d ? ['decrypt', 'unwrapKey'] : ['encrypt', 'wrapKey'];
                  break;

                default:
                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSENotSupported"]('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
              }

              break;
            }

          case 'EC':
            {
              switch (jwk.alg) {
                case 'ES256':
                  algorithm = {
                    name: 'ECDSA',
                    namedCurve: 'P-256'
                  };
                  keyUsages = jwk.d ? ['sign'] : ['verify'];
                  break;

                case 'ES384':
                  algorithm = {
                    name: 'ECDSA',
                    namedCurve: 'P-384'
                  };
                  keyUsages = jwk.d ? ['sign'] : ['verify'];
                  break;

                case 'ES512':
                  algorithm = {
                    name: 'ECDSA',
                    namedCurve: 'P-521'
                  };
                  keyUsages = jwk.d ? ['sign'] : ['verify'];
                  break;

                case 'ECDH-ES':
                case 'ECDH-ES+A128KW':
                case 'ECDH-ES+A192KW':
                case 'ECDH-ES+A256KW':
                  algorithm = {
                    name: 'ECDH',
                    namedCurve: jwk.crv
                  };
                  keyUsages = jwk.d ? ['deriveBits'] : [];
                  break;

                default:
                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSENotSupported"]('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
              }

              break;
            }

          case Object(_env_js__WEBPACK_IMPORTED_MODULE_0__["isCloudflareWorkers"])() && 'OKP':
            if (jwk.alg !== 'EdDSA') {
              throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSENotSupported"]('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
            }

            switch (jwk.crv) {
              case 'Ed25519':
                algorithm = {
                  name: 'NODE-ED25519',
                  namedCurve: 'NODE-ED25519'
                };
                keyUsages = jwk.d ? ['sign'] : ['verify'];
                break;

              default:
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSENotSupported"]('Invalid or unsupported JWK "crv" (Subtype of Key Pair) Parameter value');
            }

            break;

          default:
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSENotSupported"]('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
        }

        return {
          algorithm: algorithm,
          keyUsages: keyUsages
        };
      }

      var parse = /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(jwk) {
          var _webcrypto_js__WEBPAC2;

          var _a, _b, _subtleMapping, algorithm, keyUsages, rest, _webcrypto_js__WEBPAC, keyData;

          return regeneratorRuntime.wrap(function _callee18$(_context18) {
            while (1) {
              switch (_context18.prev = _context18.next) {
                case 0:
                  _subtleMapping = subtleMapping(jwk), algorithm = _subtleMapping.algorithm, keyUsages = _subtleMapping.keyUsages;
                  rest = [algorithm, (_a = jwk.ext) !== null && _a !== void 0 ? _a : false, (_b = jwk.key_ops) !== null && _b !== void 0 ? _b : keyUsages];

                  if (!(algorithm.name === 'PBKDF2')) {
                    _context18.next = 4;
                    break;
                  }

                  return _context18.abrupt("return", (_webcrypto_js__WEBPAC = _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle).importKey.apply(_webcrypto_js__WEBPAC, ['raw', Object(_base64url_js__WEBPACK_IMPORTED_MODULE_3__["decode"])(jwk.k)].concat(rest)));

                case 4:
                  keyData = _objectSpread({}, jwk);
                  delete keyData.alg;
                  return _context18.abrupt("return", (_webcrypto_js__WEBPAC2 = _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle).importKey.apply(_webcrypto_js__WEBPAC2, ['jwk', keyData].concat(rest)));

                case 7:
                case "end":
                  return _context18.stop();
              }
            }
          }, _callee18);
        }));

        return function parse(_x39) {
          return _ref8.apply(this, arguments);
        };
      }();
      /* harmony default export */


      __webpack_exports__["default"] = parse;
      /***/
    },

    /***/
    "MlIO": function MlIO(module, exports, __webpack_require__) {
      ;

      (function (root, factory) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"));
        } else {}
      })(this, function (CryptoJS) {
        (function (undefined) {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var Base = C_lib.Base;
          var X32WordArray = C_lib.WordArray;
          /**
           * x64 namespace.
           */

          var C_x64 = C.x64 = {};
          /**
           * A 64-bit word.
           */

          var X64Word = C_x64.Word = Base.extend({
            /**
             * Initializes a newly created 64-bit word.
             *
             * @param {number} high The high 32 bits.
             * @param {number} low The low 32 bits.
             *
             * @example
             *
             *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
             */
            init: function init(high, low) {
              this.high = high;
              this.low = low;
            }
            /**
             * Bitwise NOTs this word.
             *
             * @return {X64Word} A new x64-Word object after negating.
             *
             * @example
             *
             *     var negated = x64Word.not();
             */
            // not: function () {
            // var high = ~this.high;
            // var low = ~this.low;
            // return X64Word.create(high, low);
            // },

            /**
             * Bitwise ANDs this word with the passed word.
             *
             * @param {X64Word} word The x64-Word to AND with this word.
             *
             * @return {X64Word} A new x64-Word object after ANDing.
             *
             * @example
             *
             *     var anded = x64Word.and(anotherX64Word);
             */
            // and: function (word) {
            // var high = this.high & word.high;
            // var low = this.low & word.low;
            // return X64Word.create(high, low);
            // },

            /**
             * Bitwise ORs this word with the passed word.
             *
             * @param {X64Word} word The x64-Word to OR with this word.
             *
             * @return {X64Word} A new x64-Word object after ORing.
             *
             * @example
             *
             *     var ored = x64Word.or(anotherX64Word);
             */
            // or: function (word) {
            // var high = this.high | word.high;
            // var low = this.low | word.low;
            // return X64Word.create(high, low);
            // },

            /**
             * Bitwise XORs this word with the passed word.
             *
             * @param {X64Word} word The x64-Word to XOR with this word.
             *
             * @return {X64Word} A new x64-Word object after XORing.
             *
             * @example
             *
             *     var xored = x64Word.xor(anotherX64Word);
             */
            // xor: function (word) {
            // var high = this.high ^ word.high;
            // var low = this.low ^ word.low;
            // return X64Word.create(high, low);
            // },

            /**
             * Shifts this word n bits to the left.
             *
             * @param {number} n The number of bits to shift.
             *
             * @return {X64Word} A new x64-Word object after shifting.
             *
             * @example
             *
             *     var shifted = x64Word.shiftL(25);
             */
            // shiftL: function (n) {
            // if (n < 32) {
            // var high = (this.high << n) | (this.low >>> (32 - n));
            // var low = this.low << n;
            // } else {
            // var high = this.low << (n - 32);
            // var low = 0;
            // }
            // return X64Word.create(high, low);
            // },

            /**
             * Shifts this word n bits to the right.
             *
             * @param {number} n The number of bits to shift.
             *
             * @return {X64Word} A new x64-Word object after shifting.
             *
             * @example
             *
             *     var shifted = x64Word.shiftR(7);
             */
            // shiftR: function (n) {
            // if (n < 32) {
            // var low = (this.low >>> n) | (this.high << (32 - n));
            // var high = this.high >>> n;
            // } else {
            // var low = this.high >>> (n - 32);
            // var high = 0;
            // }
            // return X64Word.create(high, low);
            // },

            /**
             * Rotates this word n bits to the left.
             *
             * @param {number} n The number of bits to rotate.
             *
             * @return {X64Word} A new x64-Word object after rotating.
             *
             * @example
             *
             *     var rotated = x64Word.rotL(25);
             */
            // rotL: function (n) {
            // return this.shiftL(n).or(this.shiftR(64 - n));
            // },

            /**
             * Rotates this word n bits to the right.
             *
             * @param {number} n The number of bits to rotate.
             *
             * @return {X64Word} A new x64-Word object after rotating.
             *
             * @example
             *
             *     var rotated = x64Word.rotR(7);
             */
            // rotR: function (n) {
            // return this.shiftR(n).or(this.shiftL(64 - n));
            // },

            /**
             * Adds this word with the passed word.
             *
             * @param {X64Word} word The x64-Word to add with this word.
             *
             * @return {X64Word} A new x64-Word object after adding.
             *
             * @example
             *
             *     var added = x64Word.add(anotherX64Word);
             */
            // add: function (word) {
            // var low = (this.low + word.low) | 0;
            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
            // var high = (this.high + word.high + carry) | 0;
            // return X64Word.create(high, low);
            // }

          });
          /**
           * An array of 64-bit words.
           *
           * @property {Array} words The array of CryptoJS.x64.Word objects.
           * @property {number} sigBytes The number of significant bytes in this word array.
           */

          var X64WordArray = C_x64.WordArray = Base.extend({
            /**
             * Initializes a newly created word array.
             *
             * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
             * @param {number} sigBytes (Optional) The number of significant bytes in the words.
             *
             * @example
             *
             *     var wordArray = CryptoJS.x64.WordArray.create();
             *
             *     var wordArray = CryptoJS.x64.WordArray.create([
             *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
             *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
             *     ]);
             *
             *     var wordArray = CryptoJS.x64.WordArray.create([
             *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
             *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
             *     ], 10);
             */
            init: function init(words, sigBytes) {
              words = this.words = words || [];

              if (sigBytes != undefined) {
                this.sigBytes = sigBytes;
              } else {
                this.sigBytes = words.length * 8;
              }
            },

            /**
             * Converts this 64-bit word array to a 32-bit word array.
             *
             * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
             *
             * @example
             *
             *     var x32WordArray = x64WordArray.toX32();
             */
            toX32: function toX32() {
              // Shortcuts
              var x64Words = this.words;
              var x64WordsLength = x64Words.length; // Convert

              var x32Words = [];

              for (var i = 0; i < x64WordsLength; i++) {
                var x64Word = x64Words[i];
                x32Words.push(x64Word.high);
                x32Words.push(x64Word.low);
              }

              return X32WordArray.create(x32Words, this.sigBytes);
            },

            /**
             * Creates a copy of this word array.
             *
             * @return {X64WordArray} The clone.
             *
             * @example
             *
             *     var clone = x64WordArray.clone();
             */
            clone: function clone() {
              var clone = Base.clone.call(this); // Clone "words" array

              var words = clone.words = this.words.slice(0); // Clone each X64Word object

              var wordsLength = words.length;

              for (var i = 0; i < wordsLength; i++) {
                words[i] = words[i].clone();
              }

              return clone;
            }
          });
        })();

        return CryptoJS;
      });
      /***/

    },

    /***/
    "NFKh": function NFKh(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./x64-core */
          "MlIO"), __webpack_require__(
          /*! ./lib-typedarrays */
          "F+F2"), __webpack_require__(
          /*! ./enc-utf16 */
          "qM6L"), __webpack_require__(
          /*! ./enc-base64 */
          "ETIr"), __webpack_require__(
          /*! ./enc-base64url */
          "wbyO"), __webpack_require__(
          /*! ./md5 */
          "cv67"), __webpack_require__(
          /*! ./sha1 */
          "3y9D"), __webpack_require__(
          /*! ./sha256 */
          "lPiR"), __webpack_require__(
          /*! ./sha224 */
          "GRuw"), __webpack_require__(
          /*! ./sha512 */
          "1uat"), __webpack_require__(
          /*! ./sha384 */
          "uGsb"), __webpack_require__(
          /*! ./sha3 */
          "5hvy"), __webpack_require__(
          /*! ./ripemd160 */
          "ELcG"), __webpack_require__(
          /*! ./hmac */
          "WYAk"), __webpack_require__(
          /*! ./pbkdf2 */
          "e7zE"), __webpack_require__(
          /*! ./evpkdf */
          "K3mO"), __webpack_require__(
          /*! ./cipher-core */
          "OLod"), __webpack_require__(
          /*! ./mode-cfb */
          "ALsQ"), __webpack_require__(
          /*! ./mode-ctr */
          "9OqN"), __webpack_require__(
          /*! ./mode-ctr-gladman */
          "qu8F"), __webpack_require__(
          /*! ./mode-ofb */
          "S6kV"), __webpack_require__(
          /*! ./mode-ecb */
          "gb/T"), __webpack_require__(
          /*! ./pad-ansix923 */
          "qBft"), __webpack_require__(
          /*! ./pad-iso10126 */
          "oRuE"), __webpack_require__(
          /*! ./pad-iso97971 */
          "jO9C"), __webpack_require__(
          /*! ./pad-zeropadding */
          "KmYQ"), __webpack_require__(
          /*! ./pad-nopadding */
          "uGxW"), __webpack_require__(
          /*! ./format-hex */
          "bQjk"), __webpack_require__(
          /*! ./aes */
          "wZgz"), __webpack_require__(
          /*! ./tripledes */
          "pA7S"), __webpack_require__(
          /*! ./rc4 */
          "w7YG"), __webpack_require__(
          /*! ./rabbit */
          "E4JC"), __webpack_require__(
          /*! ./rabbit-legacy */
          "PVpz"));
        } else {}
      })(this, function (CryptoJS) {
        return CryptoJS;
      });
      /***/

    },

    /***/
    "NP3A": function NP3A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _runtime_aeskw_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../runtime/aeskw.js */
      "Qm1j");
      /* harmony import */


      var _runtime_ecdhes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../runtime/ecdhes.js */
      "qIkZ");
      /* harmony import */


      var _runtime_pbes2kw_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../runtime/pbes2kw.js */
      "Oe4d");
      /* harmony import */


      var _runtime_rsaes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../runtime/rsaes.js */
      "WR06");
      /* harmony import */


      var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../runtime/base64url.js */
      "KjJ5");
      /* harmony import */


      var _lib_cek_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../lib/cek.js */
      "qW6o");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");
      /* harmony import */


      var _key_export_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../key/export.js */
      "k303");
      /* harmony import */


      var _check_key_type_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./check_key_type.js */
      "ceW5");
      /* harmony import */


      var _aesgcmkw_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./aesgcmkw.js */
      "aAVB");

      function encryptKeyManagement(_x40, _x41, _x42, _x43) {
        return _encryptKeyManagement.apply(this, arguments);
      }
      /* harmony default export */


      function _encryptKeyManagement() {
        _encryptKeyManagement = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(alg, enc, key, providedCek) {
          var providedParameters,
              encryptedKey,
              parameters,
              cek,
              apu,
              apv,
              ephemeralKey,
              _yield$Object5,
              x,
              y,
              crv,
              kty,
              sharedSecret,
              kwAlg,
              p2c,
              p2s,
              _yield$Object6,
              iv,
              _yield$Object7,
              _args19 = arguments;

          return regeneratorRuntime.wrap(function _callee19$(_context19) {
            while (1) {
              switch (_context19.prev = _context19.next) {
                case 0:
                  providedParameters = _args19.length > 4 && _args19[4] !== undefined ? _args19[4] : {};
                  Object(_check_key_type_js__WEBPACK_IMPORTED_MODULE_8__["default"])(alg, key, 'encrypt');
                  _context19.t0 = alg;
                  _context19.next = _context19.t0 === 'dir' ? 5 : _context19.t0 === 'ECDH-ES' ? 7 : _context19.t0 === 'ECDH-ES+A128KW' ? 7 : _context19.t0 === 'ECDH-ES+A192KW' ? 7 : _context19.t0 === 'ECDH-ES+A256KW' ? 7 : _context19.t0 === 'RSA1_5' ? 39 : _context19.t0 === 'RSA-OAEP' ? 39 : _context19.t0 === 'RSA-OAEP-256' ? 39 : _context19.t0 === 'RSA-OAEP-384' ? 39 : _context19.t0 === 'RSA-OAEP-512' ? 39 : _context19.t0 === 'PBES2-HS256+A128KW' ? 44 : _context19.t0 === 'PBES2-HS384+A192KW' ? 44 : _context19.t0 === 'PBES2-HS512+A256KW' ? 44 : _context19.t0 === 'A128KW' ? 53 : _context19.t0 === 'A192KW' ? 53 : _context19.t0 === 'A256KW' ? 53 : _context19.t0 === 'A128GCMKW' ? 58 : _context19.t0 === 'A192GCMKW' ? 58 : _context19.t0 === 'A256GCMKW' ? 58 : 67;
                  break;

                case 5:
                  cek = key;
                  return _context19.abrupt("break", 68);

                case 7:
                  if (_runtime_ecdhes_js__WEBPACK_IMPORTED_MODULE_1__["ecdhAllowed"](key)) {
                    _context19.next = 9;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_6__["JOSENotSupported"]('ECDH with the provided key is not allowed or not supported by your javascript runtime');

                case 9:
                  apu = providedParameters.apu, apv = providedParameters.apv;
                  ephemeralKey = providedParameters.epk;
                  _context19.t1 = ephemeralKey;

                  if (_context19.t1) {
                    _context19.next = 16;
                    break;
                  }

                  _context19.next = 15;
                  return _runtime_ecdhes_js__WEBPACK_IMPORTED_MODULE_1__["generateEpk"](key);

                case 15:
                  ephemeralKey = _context19.sent.privateKey;

                case 16:
                  _context19.next = 18;
                  return Object(_key_export_js__WEBPACK_IMPORTED_MODULE_7__["exportJWK"])(ephemeralKey);

                case 18:
                  _yield$Object5 = _context19.sent;
                  x = _yield$Object5.x;
                  y = _yield$Object5.y;
                  crv = _yield$Object5.crv;
                  kty = _yield$Object5.kty;
                  _context19.next = 25;
                  return _runtime_ecdhes_js__WEBPACK_IMPORTED_MODULE_1__["deriveKey"](key, ephemeralKey, alg === 'ECDH-ES' ? enc : alg, alg === 'ECDH-ES' ? Object(_lib_cek_js__WEBPACK_IMPORTED_MODULE_5__["bitLength"])(enc) : parseInt(alg.slice(-5, -2), 10), apu, apv);

                case 25:
                  sharedSecret = _context19.sent;
                  parameters = {
                    epk: {
                      x: x,
                      crv: crv,
                      kty: kty
                    }
                  };
                  if (kty === 'EC') parameters.epk.y = y;
                  if (apu) parameters.apu = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_4__["encode"])(apu);
                  if (apv) parameters.apv = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_4__["encode"])(apv);

                  if (!(alg === 'ECDH-ES')) {
                    _context19.next = 33;
                    break;
                  }

                  cek = sharedSecret;
                  return _context19.abrupt("break", 68);

                case 33:
                  cek = providedCek || Object(_lib_cek_js__WEBPACK_IMPORTED_MODULE_5__["default"])(enc);
                  kwAlg = alg.slice(-6);
                  _context19.next = 37;
                  return Object(_runtime_aeskw_js__WEBPACK_IMPORTED_MODULE_0__["wrap"])(kwAlg, sharedSecret, cek);

                case 37:
                  encryptedKey = _context19.sent;
                  return _context19.abrupt("break", 68);

                case 39:
                  cek = providedCek || Object(_lib_cek_js__WEBPACK_IMPORTED_MODULE_5__["default"])(enc);
                  _context19.next = 42;
                  return Object(_runtime_rsaes_js__WEBPACK_IMPORTED_MODULE_3__["encrypt"])(alg, key, cek);

                case 42:
                  encryptedKey = _context19.sent;
                  return _context19.abrupt("break", 68);

                case 44:
                  cek = providedCek || Object(_lib_cek_js__WEBPACK_IMPORTED_MODULE_5__["default"])(enc);
                  p2c = providedParameters.p2c, p2s = providedParameters.p2s;
                  _context19.next = 48;
                  return Object(_runtime_pbes2kw_js__WEBPACK_IMPORTED_MODULE_2__["encrypt"])(alg, key, cek, p2c, p2s);

                case 48:
                  _yield$Object6 = _context19.sent;
                  encryptedKey = _yield$Object6.encryptedKey;
                  parameters = _objectWithoutProperties(_yield$Object6, _excluded);
                  _yield$Object6;
                  return _context19.abrupt("break", 68);

                case 53:
                  cek = providedCek || Object(_lib_cek_js__WEBPACK_IMPORTED_MODULE_5__["default"])(enc);
                  _context19.next = 56;
                  return Object(_runtime_aeskw_js__WEBPACK_IMPORTED_MODULE_0__["wrap"])(alg, key, cek);

                case 56:
                  encryptedKey = _context19.sent;
                  return _context19.abrupt("break", 68);

                case 58:
                  cek = providedCek || Object(_lib_cek_js__WEBPACK_IMPORTED_MODULE_5__["default"])(enc);
                  iv = providedParameters.iv;
                  _context19.next = 62;
                  return Object(_aesgcmkw_js__WEBPACK_IMPORTED_MODULE_9__["wrap"])(alg, key, cek, iv);

                case 62:
                  _yield$Object7 = _context19.sent;
                  encryptedKey = _yield$Object7.encryptedKey;
                  parameters = _objectWithoutProperties(_yield$Object7, _excluded2);
                  _yield$Object7;
                  return _context19.abrupt("break", 68);

                case 67:
                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_6__["JOSENotSupported"]('Invalid or unsupported "alg" (JWE Algorithm) header value');

                case 68:
                  return _context19.abrupt("return", {
                    cek: cek,
                    encryptedKey: encryptedKey,
                    parameters: parameters
                  });

                case 69:
                case "end":
                  return _context19.stop();
              }
            }
          }, _callee19);
        }));
        return _encryptKeyManagement.apply(this, arguments);
      }

      __webpack_exports__["default"] = encryptKeyManagement;
      /***/
    },

    /***/
    "NSDb": function NSDb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneralSign", function () {
        return GeneralSign;
      });
      /* harmony import */


      var _flattened_sign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../flattened/sign.js */
      "4xNZ");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../util/errors.js */
      "StPg");

      var IndividualSignature = /*#__PURE__*/function () {
        function IndividualSignature(sig, key, options) {
          _classCallCheck(this, IndividualSignature);

          this.parent = sig;
          this.key = key;
          this.options = options;
        }

        _createClass(IndividualSignature, [{
          key: "setProtectedHeader",
          value: function setProtectedHeader(protectedHeader) {
            if (this.protectedHeader) {
              throw new TypeError('setProtectedHeader can only be called once');
            }

            this.protectedHeader = protectedHeader;
            return this;
          }
        }, {
          key: "setUnprotectedHeader",
          value: function setUnprotectedHeader(unprotectedHeader) {
            if (this.unprotectedHeader) {
              throw new TypeError('setUnprotectedHeader can only be called once');
            }

            this.unprotectedHeader = unprotectedHeader;
            return this;
          }
        }, {
          key: "addSignature",
          value: function addSignature() {
            var _this$parent3;

            return (_this$parent3 = this.parent).addSignature.apply(_this$parent3, arguments);
          }
        }, {
          key: "sign",
          value: function sign() {
            var _this$parent4;

            return (_this$parent4 = this.parent).sign.apply(_this$parent4, arguments);
          }
        }, {
          key: "done",
          value: function done() {
            return this.parent;
          }
        }]);

        return IndividualSignature;
      }();

      var GeneralSign = /*#__PURE__*/function () {
        function GeneralSign(payload) {
          _classCallCheck(this, GeneralSign);

          this._signatures = [];
          this._payload = payload;
        }

        _createClass(GeneralSign, [{
          key: "addSignature",
          value: function addSignature(key, options) {
            var signature = new IndividualSignature(this, key, options);

            this._signatures.push(signature);

            return signature;
          }
        }, {
          key: "sign",
          value: function () {
            var _sign3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var jws, i, signature, flattened, _yield$flattened$sign, payload, rest;

              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      if (this._signatures.length) {
                        _context20.next = 2;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWSInvalid"]('at least one signature must be added');

                    case 2:
                      jws = {
                        signatures: [],
                        payload: ''
                      };
                      i = 0;

                    case 4:
                      if (!(i < this._signatures.length)) {
                        _context20.next = 24;
                        break;
                      }

                      signature = this._signatures[i];
                      flattened = new _flattened_sign_js__WEBPACK_IMPORTED_MODULE_0__["FlattenedSign"](this._payload);
                      flattened.setProtectedHeader(signature.protectedHeader);
                      flattened.setUnprotectedHeader(signature.unprotectedHeader);
                      _context20.next = 11;
                      return flattened.sign(signature.key, signature.options);

                    case 11:
                      _yield$flattened$sign = _context20.sent;
                      payload = _yield$flattened$sign.payload;
                      rest = _objectWithoutProperties(_yield$flattened$sign, _excluded3);

                      if (!(i === 0)) {
                        _context20.next = 18;
                        break;
                      }

                      jws.payload = payload;
                      _context20.next = 20;
                      break;

                    case 18:
                      if (!(jws.payload !== payload)) {
                        _context20.next = 20;
                        break;
                      }

                      throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWSInvalid"]('inconsistent use of JWS Unencoded Payload Option (RFC7797)');

                    case 20:
                      jws.signatures.push(rest);

                    case 21:
                      i++;
                      _context20.next = 4;
                      break;

                    case 24:
                      return _context20.abrupt("return", jws);

                    case 25:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));

            function sign() {
              return _sign3.apply(this, arguments);
            }

            return sign;
          }()
        }]);

        return GeneralSign;
      }();
      /***/

    },

    /***/
    "Ninj": function Ninj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../lib/buffer_utils.js */
      "xpfA");
      /* harmony import */


      var _lib_check_iv_length_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../lib/check_iv_length.js */
      "g1Po");
      /* harmony import */


      var _check_cek_length_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./check_cek_length.js */
      "KMcw");
      /* harmony import */


      var _webcrypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./webcrypto.js */
      "hqmz");
      /* harmony import */


      var _lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../lib/crypto_key.js */
      "D3C9");
      /* harmony import */


      var _lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../lib/invalid_key_input.js */
      "wZa+");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");
      /* harmony import */


      var _is_key_like_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./is_key_like.js */
      "H/EN");

      function cbcEncrypt(_x44, _x45, _x46, _x47, _x48) {
        return _cbcEncrypt.apply(this, arguments);
      }

      function _cbcEncrypt() {
        _cbcEncrypt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(enc, plaintext, cek, iv, aad) {
          var keySize, encKey, macKey, ciphertext, macData, tag;
          return regeneratorRuntime.wrap(function _callee22$(_context22) {
            while (1) {
              switch (_context22.prev = _context22.next) {
                case 0:
                  if (cek instanceof Uint8Array) {
                    _context22.next = 2;
                    break;
                  }

                  throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_5__["default"])(cek, 'Uint8Array'));

                case 2:
                  keySize = parseInt(enc.slice(1, 4), 10);
                  _context22.next = 5;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_3__["default"].subtle.importKey('raw', cek.subarray(keySize >> 3), 'AES-CBC', false, ['encrypt']);

                case 5:
                  encKey = _context22.sent;
                  _context22.next = 8;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_3__["default"].subtle.importKey('raw', cek.subarray(0, keySize >> 3), {
                    hash: "SHA-".concat(keySize << 1),
                    name: 'HMAC'
                  }, false, ['sign']);

                case 8:
                  macKey = _context22.sent;
                  _context22.t0 = Uint8Array;
                  _context22.next = 12;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_3__["default"].subtle.encrypt({
                    iv: iv,
                    name: 'AES-CBC'
                  }, encKey, plaintext);

                case 12:
                  _context22.t1 = _context22.sent;
                  ciphertext = new _context22.t0(_context22.t1);
                  macData = Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["concat"])(aad, iv, ciphertext, Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["uint64be"])(aad.length << 3));
                  _context22.t2 = Uint8Array;
                  _context22.next = 18;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_3__["default"].subtle.sign('HMAC', macKey, macData);

                case 18:
                  _context22.t3 = _context22.sent.slice(0, keySize >> 3);
                  tag = new _context22.t2(_context22.t3);
                  return _context22.abrupt("return", {
                    ciphertext: ciphertext,
                    tag: tag
                  });

                case 21:
                case "end":
                  return _context22.stop();
              }
            }
          }, _callee22);
        }));
        return _cbcEncrypt.apply(this, arguments);
      }

      function gcmEncrypt(_x49, _x50, _x51, _x52, _x53) {
        return _gcmEncrypt.apply(this, arguments);
      }

      function _gcmEncrypt() {
        _gcmEncrypt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(enc, plaintext, cek, iv, aad) {
          var encKey, encrypted, tag, ciphertext;
          return regeneratorRuntime.wrap(function _callee23$(_context23) {
            while (1) {
              switch (_context23.prev = _context23.next) {
                case 0:
                  if (!(cek instanceof Uint8Array)) {
                    _context23.next = 6;
                    break;
                  }

                  _context23.next = 3;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_3__["default"].subtle.importKey('raw', cek, 'AES-GCM', false, ['encrypt']);

                case 3:
                  encKey = _context23.sent;
                  _context23.next = 8;
                  break;

                case 6:
                  Object(_lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_4__["checkEncCryptoKey"])(cek, enc, 'encrypt');
                  encKey = cek;

                case 8:
                  _context23.t0 = Uint8Array;
                  _context23.next = 11;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_3__["default"].subtle.encrypt({
                    additionalData: aad,
                    iv: iv,
                    name: 'AES-GCM',
                    tagLength: 128
                  }, encKey, plaintext);

                case 11:
                  _context23.t1 = _context23.sent;
                  encrypted = new _context23.t0(_context23.t1);
                  tag = encrypted.slice(-16);
                  ciphertext = encrypted.slice(0, -16);
                  return _context23.abrupt("return", {
                    ciphertext: ciphertext,
                    tag: tag
                  });

                case 16:
                case "end":
                  return _context23.stop();
              }
            }
          }, _callee23);
        }));
        return _gcmEncrypt.apply(this, arguments);
      }

      var encrypt = /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(enc, plaintext, cek, iv, aad) {
          return regeneratorRuntime.wrap(function _callee21$(_context21) {
            while (1) {
              switch (_context21.prev = _context21.next) {
                case 0:
                  if (!(!Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_3__["isCryptoKey"])(cek) && !(cek instanceof Uint8Array))) {
                    _context21.next = 2;
                    break;
                  }

                  throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_5__["default"]).apply(void 0, [cek].concat(_toConsumableArray(_is_key_like_js__WEBPACK_IMPORTED_MODULE_7__["types"]), ['Uint8Array'])));

                case 2:
                  Object(_lib_check_iv_length_js__WEBPACK_IMPORTED_MODULE_1__["default"])(enc, iv);
                  _context21.t0 = enc;
                  _context21.next = _context21.t0 === 'A128CBC-HS256' ? 6 : _context21.t0 === 'A192CBC-HS384' ? 6 : _context21.t0 === 'A256CBC-HS512' ? 6 : _context21.t0 === 'A128GCM' ? 8 : _context21.t0 === 'A192GCM' ? 8 : _context21.t0 === 'A256GCM' ? 8 : 10;
                  break;

                case 6:
                  if (cek instanceof Uint8Array) Object(_check_cek_length_js__WEBPACK_IMPORTED_MODULE_2__["default"])(cek, parseInt(enc.slice(-3), 10));
                  return _context21.abrupt("return", cbcEncrypt(enc, plaintext, cek, iv, aad));

                case 8:
                  if (cek instanceof Uint8Array) Object(_check_cek_length_js__WEBPACK_IMPORTED_MODULE_2__["default"])(cek, parseInt(enc.slice(1, 4), 10));
                  return _context21.abrupt("return", gcmEncrypt(enc, plaintext, cek, iv, aad));

                case 10:
                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_6__["JOSENotSupported"]('Unsupported JWE Content Encryption Algorithm');

                case 11:
                case "end":
                  return _context21.stop();
              }
            }
          }, _callee21);
        }));

        return function encrypt(_x54, _x55, _x56, _x57, _x58) {
          return _ref9.apply(this, arguments);
        };
      }();
      /* harmony default export */


      __webpack_exports__["default"] = encrypt;
      /***/
    },

    /***/
    "OLod": function OLod(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./evpkdf */
          "K3mO"));
        } else {}
      })(this, function (CryptoJS) {
        /**
         * Cipher core components.
         */
        CryptoJS.lib.Cipher || function (undefined) {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var Base = C_lib.Base;
          var WordArray = C_lib.WordArray;
          var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
          var C_enc = C.enc;
          var Utf8 = C_enc.Utf8;
          var Base64 = C_enc.Base64;
          var C_algo = C.algo;
          var EvpKDF = C_algo.EvpKDF;
          /**
           * Abstract base cipher template.
           *
           * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
           * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
           * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
           * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
           */

          var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
            /**
             * Configuration options.
             *
             * @property {WordArray} iv The IV to use for this operation.
             */
            cfg: Base.extend(),

            /**
             * Creates this cipher in encryption mode.
             *
             * @param {WordArray} key The key.
             * @param {Object} cfg (Optional) The configuration options to use for this operation.
             *
             * @return {Cipher} A cipher instance.
             *
             * @static
             *
             * @example
             *
             *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
             */
            createEncryptor: function createEncryptor(key, cfg) {
              return this.create(this._ENC_XFORM_MODE, key, cfg);
            },

            /**
             * Creates this cipher in decryption mode.
             *
             * @param {WordArray} key The key.
             * @param {Object} cfg (Optional) The configuration options to use for this operation.
             *
             * @return {Cipher} A cipher instance.
             *
             * @static
             *
             * @example
             *
             *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
             */
            createDecryptor: function createDecryptor(key, cfg) {
              return this.create(this._DEC_XFORM_MODE, key, cfg);
            },

            /**
             * Initializes a newly created cipher.
             *
             * @param {number} xformMode Either the encryption or decryption transormation mode constant.
             * @param {WordArray} key The key.
             * @param {Object} cfg (Optional) The configuration options to use for this operation.
             *
             * @example
             *
             *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
             */
            init: function init(xformMode, key, cfg) {
              // Apply config defaults
              this.cfg = this.cfg.extend(cfg); // Store transform mode and key

              this._xformMode = xformMode;
              this._key = key; // Set initial values

              this.reset();
            },

            /**
             * Resets this cipher to its initial state.
             *
             * @example
             *
             *     cipher.reset();
             */
            reset: function reset() {
              // Reset data buffer
              BufferedBlockAlgorithm.reset.call(this); // Perform concrete-cipher logic

              this._doReset();
            },

            /**
             * Adds data to be encrypted or decrypted.
             *
             * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
             *
             * @return {WordArray} The data after processing.
             *
             * @example
             *
             *     var encrypted = cipher.process('data');
             *     var encrypted = cipher.process(wordArray);
             */
            process: function process(dataUpdate) {
              // Append
              this._append(dataUpdate); // Process available blocks


              return this._process();
            },

            /**
             * Finalizes the encryption or decryption process.
             * Note that the finalize operation is effectively a destructive, read-once operation.
             *
             * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
             *
             * @return {WordArray} The data after final processing.
             *
             * @example
             *
             *     var encrypted = cipher.finalize();
             *     var encrypted = cipher.finalize('data');
             *     var encrypted = cipher.finalize(wordArray);
             */
            finalize: function finalize(dataUpdate) {
              // Final data update
              if (dataUpdate) {
                this._append(dataUpdate);
              } // Perform concrete-cipher logic


              var finalProcessedData = this._doFinalize();

              return finalProcessedData;
            },
            keySize: 128 / 32,
            ivSize: 128 / 32,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,

            /**
             * Creates shortcut functions to a cipher's object interface.
             *
             * @param {Cipher} cipher The cipher to create a helper for.
             *
             * @return {Object} An object with encrypt and decrypt shortcut functions.
             *
             * @static
             *
             * @example
             *
             *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
             */
            _createHelper: function () {
              function selectCipherStrategy(key) {
                if (typeof key == 'string') {
                  return PasswordBasedCipher;
                } else {
                  return SerializableCipher;
                }
              }

              return function (cipher) {
                return {
                  encrypt: function encrypt(message, key, cfg) {
                    return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
                  },
                  decrypt: function decrypt(ciphertext, key, cfg) {
                    return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
                  }
                };
              };
            }()
          });
          /**
           * Abstract base stream cipher template.
           *
           * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
           */

          var StreamCipher = C_lib.StreamCipher = Cipher.extend({
            _doFinalize: function _doFinalize() {
              // Process partial blocks
              var finalProcessedBlocks = this._process(!!'flush');

              return finalProcessedBlocks;
            },
            blockSize: 1
          });
          /**
           * Mode namespace.
           */

          var C_mode = C.mode = {};
          /**
           * Abstract base block cipher mode template.
           */

          var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
            /**
             * Creates this mode for encryption.
             *
             * @param {Cipher} cipher A block cipher instance.
             * @param {Array} iv The IV words.
             *
             * @static
             *
             * @example
             *
             *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
             */
            createEncryptor: function createEncryptor(cipher, iv) {
              return this.Encryptor.create(cipher, iv);
            },

            /**
             * Creates this mode for decryption.
             *
             * @param {Cipher} cipher A block cipher instance.
             * @param {Array} iv The IV words.
             *
             * @static
             *
             * @example
             *
             *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
             */
            createDecryptor: function createDecryptor(cipher, iv) {
              return this.Decryptor.create(cipher, iv);
            },

            /**
             * Initializes a newly created mode.
             *
             * @param {Cipher} cipher A block cipher instance.
             * @param {Array} iv The IV words.
             *
             * @example
             *
             *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
             */
            init: function init(cipher, iv) {
              this._cipher = cipher;
              this._iv = iv;
            }
          });
          /**
           * Cipher Block Chaining mode.
           */

          var CBC = C_mode.CBC = function () {
            /**
             * Abstract base CBC mode.
             */
            var CBC = BlockCipherMode.extend();
            /**
             * CBC encryptor.
             */

            CBC.Encryptor = CBC.extend({
              /**
               * Processes the data block at offset.
               *
               * @param {Array} words The data words to operate on.
               * @param {number} offset The offset where the block starts.
               *
               * @example
               *
               *     mode.processBlock(data.words, offset);
               */
              processBlock: function processBlock(words, offset) {
                // Shortcuts
                var cipher = this._cipher;
                var blockSize = cipher.blockSize; // XOR and encrypt

                xorBlock.call(this, words, offset, blockSize);
                cipher.encryptBlock(words, offset); // Remember this block to use with next block

                this._prevBlock = words.slice(offset, offset + blockSize);
              }
            });
            /**
             * CBC decryptor.
             */

            CBC.Decryptor = CBC.extend({
              /**
               * Processes the data block at offset.
               *
               * @param {Array} words The data words to operate on.
               * @param {number} offset The offset where the block starts.
               *
               * @example
               *
               *     mode.processBlock(data.words, offset);
               */
              processBlock: function processBlock(words, offset) {
                // Shortcuts
                var cipher = this._cipher;
                var blockSize = cipher.blockSize; // Remember this block to use with next block

                var thisBlock = words.slice(offset, offset + blockSize); // Decrypt and XOR

                cipher.decryptBlock(words, offset);
                xorBlock.call(this, words, offset, blockSize); // This block becomes the previous block

                this._prevBlock = thisBlock;
              }
            });

            function xorBlock(words, offset, blockSize) {
              var block; // Shortcut

              var iv = this._iv; // Choose mixing block

              if (iv) {
                block = iv; // Remove IV for subsequent blocks

                this._iv = undefined;
              } else {
                block = this._prevBlock;
              } // XOR blocks


              for (var i = 0; i < blockSize; i++) {
                words[offset + i] ^= block[i];
              }
            }

            return CBC;
          }();
          /**
           * Padding namespace.
           */


          var C_pad = C.pad = {};
          /**
           * PKCS #5/7 padding strategy.
           */

          var Pkcs7 = C_pad.Pkcs7 = {
            /**
             * Pads data using the algorithm defined in PKCS #5/7.
             *
             * @param {WordArray} data The data to pad.
             * @param {number} blockSize The multiple that the data should be padded to.
             *
             * @static
             *
             * @example
             *
             *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
             */
            pad: function pad(data, blockSize) {
              // Shortcut
              var blockSizeBytes = blockSize * 4; // Count padding bytes

              var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes; // Create padding word

              var paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes; // Create padding

              var paddingWords = [];

              for (var i = 0; i < nPaddingBytes; i += 4) {
                paddingWords.push(paddingWord);
              }

              var padding = WordArray.create(paddingWords, nPaddingBytes); // Add padding

              data.concat(padding);
            },

            /**
             * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
             *
             * @param {WordArray} data The data to unpad.
             *
             * @static
             *
             * @example
             *
             *     CryptoJS.pad.Pkcs7.unpad(wordArray);
             */
            unpad: function unpad(data) {
              // Get number of padding bytes from last byte
              var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff; // Remove padding

              data.sigBytes -= nPaddingBytes;
            }
          };
          /**
           * Abstract base block cipher template.
           *
           * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
           */

          var BlockCipher = C_lib.BlockCipher = Cipher.extend({
            /**
             * Configuration options.
             *
             * @property {Mode} mode The block mode to use. Default: CBC
             * @property {Padding} padding The padding strategy to use. Default: Pkcs7
             */
            cfg: Cipher.cfg.extend({
              mode: CBC,
              padding: Pkcs7
            }),
            reset: function reset() {
              var modeCreator; // Reset cipher

              Cipher.reset.call(this); // Shortcuts

              var cfg = this.cfg;
              var iv = cfg.iv;
              var mode = cfg.mode; // Reset block mode

              if (this._xformMode == this._ENC_XFORM_MODE) {
                modeCreator = mode.createEncryptor;
              } else
                /* if (this._xformMode == this._DEC_XFORM_MODE) */
                {
                  modeCreator = mode.createDecryptor; // Keep at least one block in the buffer for unpadding

                  this._minBufferSize = 1;
                }

              if (this._mode && this._mode.__creator == modeCreator) {
                this._mode.init(this, iv && iv.words);
              } else {
                this._mode = modeCreator.call(mode, this, iv && iv.words);
                this._mode.__creator = modeCreator;
              }
            },
            _doProcessBlock: function _doProcessBlock(words, offset) {
              this._mode.processBlock(words, offset);
            },
            _doFinalize: function _doFinalize() {
              var finalProcessedBlocks; // Shortcut

              var padding = this.cfg.padding; // Finalize

              if (this._xformMode == this._ENC_XFORM_MODE) {
                // Pad data
                padding.pad(this._data, this.blockSize); // Process final blocks

                finalProcessedBlocks = this._process(!!'flush');
              } else
                /* if (this._xformMode == this._DEC_XFORM_MODE) */
                {
                  // Process final blocks
                  finalProcessedBlocks = this._process(!!'flush'); // Unpad data

                  padding.unpad(finalProcessedBlocks);
                }

              return finalProcessedBlocks;
            },
            blockSize: 128 / 32
          });
          /**
           * A collection of cipher parameters.
           *
           * @property {WordArray} ciphertext The raw ciphertext.
           * @property {WordArray} key The key to this ciphertext.
           * @property {WordArray} iv The IV used in the ciphering operation.
           * @property {WordArray} salt The salt used with a key derivation function.
           * @property {Cipher} algorithm The cipher algorithm.
           * @property {Mode} mode The block mode used in the ciphering operation.
           * @property {Padding} padding The padding scheme used in the ciphering operation.
           * @property {number} blockSize The block size of the cipher.
           * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
           */

          var CipherParams = C_lib.CipherParams = Base.extend({
            /**
             * Initializes a newly created cipher params object.
             *
             * @param {Object} cipherParams An object with any of the possible cipher parameters.
             *
             * @example
             *
             *     var cipherParams = CryptoJS.lib.CipherParams.create({
             *         ciphertext: ciphertextWordArray,
             *         key: keyWordArray,
             *         iv: ivWordArray,
             *         salt: saltWordArray,
             *         algorithm: CryptoJS.algo.AES,
             *         mode: CryptoJS.mode.CBC,
             *         padding: CryptoJS.pad.PKCS7,
             *         blockSize: 4,
             *         formatter: CryptoJS.format.OpenSSL
             *     });
             */
            init: function init(cipherParams) {
              this.mixIn(cipherParams);
            },

            /**
             * Converts this cipher params object to a string.
             *
             * @param {Format} formatter (Optional) The formatting strategy to use.
             *
             * @return {string} The stringified cipher params.
             *
             * @throws Error If neither the formatter nor the default formatter is set.
             *
             * @example
             *
             *     var string = cipherParams + '';
             *     var string = cipherParams.toString();
             *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
             */
            toString: function toString(formatter) {
              return (formatter || this.formatter).stringify(this);
            }
          });
          /**
           * Format namespace.
           */

          var C_format = C.format = {};
          /**
           * OpenSSL formatting strategy.
           */

          var OpenSSLFormatter = C_format.OpenSSL = {
            /**
             * Converts a cipher params object to an OpenSSL-compatible string.
             *
             * @param {CipherParams} cipherParams The cipher params object.
             *
             * @return {string} The OpenSSL-compatible string.
             *
             * @static
             *
             * @example
             *
             *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
             */
            stringify: function stringify(cipherParams) {
              var wordArray; // Shortcuts

              var ciphertext = cipherParams.ciphertext;
              var salt = cipherParams.salt; // Format

              if (salt) {
                wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
              } else {
                wordArray = ciphertext;
              }

              return wordArray.toString(Base64);
            },

            /**
             * Converts an OpenSSL-compatible string to a cipher params object.
             *
             * @param {string} openSSLStr The OpenSSL-compatible string.
             *
             * @return {CipherParams} The cipher params object.
             *
             * @static
             *
             * @example
             *
             *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
             */
            parse: function parse(openSSLStr) {
              var salt; // Parse base64

              var ciphertext = Base64.parse(openSSLStr); // Shortcut

              var ciphertextWords = ciphertext.words; // Test for salt

              if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
                // Extract salt
                salt = WordArray.create(ciphertextWords.slice(2, 4)); // Remove salt from ciphertext

                ciphertextWords.splice(0, 4);
                ciphertext.sigBytes -= 16;
              }

              return CipherParams.create({
                ciphertext: ciphertext,
                salt: salt
              });
            }
          };
          /**
           * A cipher wrapper that returns ciphertext as a serializable cipher params object.
           */

          var SerializableCipher = C_lib.SerializableCipher = Base.extend({
            /**
             * Configuration options.
             *
             * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
             */
            cfg: Base.extend({
              format: OpenSSLFormatter
            }),

            /**
             * Encrypts a message.
             *
             * @param {Cipher} cipher The cipher algorithm to use.
             * @param {WordArray|string} message The message to encrypt.
             * @param {WordArray} key The key.
             * @param {Object} cfg (Optional) The configuration options to use for this operation.
             *
             * @return {CipherParams} A cipher params object.
             *
             * @static
             *
             * @example
             *
             *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
             *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
             *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
             */
            encrypt: function encrypt(cipher, message, key, cfg) {
              // Apply config defaults
              cfg = this.cfg.extend(cfg); // Encrypt

              var encryptor = cipher.createEncryptor(key, cfg);
              var ciphertext = encryptor.finalize(message); // Shortcut

              var cipherCfg = encryptor.cfg; // Create and return serializable cipher params

              return CipherParams.create({
                ciphertext: ciphertext,
                key: key,
                iv: cipherCfg.iv,
                algorithm: cipher,
                mode: cipherCfg.mode,
                padding: cipherCfg.padding,
                blockSize: cipher.blockSize,
                formatter: cfg.format
              });
            },

            /**
             * Decrypts serialized ciphertext.
             *
             * @param {Cipher} cipher The cipher algorithm to use.
             * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
             * @param {WordArray} key The key.
             * @param {Object} cfg (Optional) The configuration options to use for this operation.
             *
             * @return {WordArray} The plaintext.
             *
             * @static
             *
             * @example
             *
             *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
             *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
             */
            decrypt: function decrypt(cipher, ciphertext, key, cfg) {
              // Apply config defaults
              cfg = this.cfg.extend(cfg); // Convert string to CipherParams

              ciphertext = this._parse(ciphertext, cfg.format); // Decrypt

              var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
              return plaintext;
            },

            /**
             * Converts serialized ciphertext to CipherParams,
             * else assumed CipherParams already and returns ciphertext unchanged.
             *
             * @param {CipherParams|string} ciphertext The ciphertext.
             * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
             *
             * @return {CipherParams} The unserialized ciphertext.
             *
             * @static
             *
             * @example
             *
             *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
             */
            _parse: function _parse(ciphertext, format) {
              if (typeof ciphertext == 'string') {
                return format.parse(ciphertext, this);
              } else {
                return ciphertext;
              }
            }
          });
          /**
           * Key derivation function namespace.
           */

          var C_kdf = C.kdf = {};
          /**
           * OpenSSL key derivation function.
           */

          var OpenSSLKdf = C_kdf.OpenSSL = {
            /**
             * Derives a key and IV from a password.
             *
             * @param {string} password The password to derive from.
             * @param {number} keySize The size in words of the key to generate.
             * @param {number} ivSize The size in words of the IV to generate.
             * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
             *
             * @return {CipherParams} A cipher params object with the key, IV, and salt.
             *
             * @static
             *
             * @example
             *
             *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
             *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
             */
            execute: function execute(password, keySize, ivSize, salt) {
              // Generate random salt
              if (!salt) {
                salt = WordArray.random(64 / 8);
              } // Derive key and IV


              var key = EvpKDF.create({
                keySize: keySize + ivSize
              }).compute(password, salt); // Separate key and IV

              var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
              key.sigBytes = keySize * 4; // Return params

              return CipherParams.create({
                key: key,
                iv: iv,
                salt: salt
              });
            }
          };
          /**
           * A serializable cipher wrapper that derives the key from a password,
           * and returns ciphertext as a serializable cipher params object.
           */

          var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
            /**
             * Configuration options.
             *
             * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
             */
            cfg: SerializableCipher.cfg.extend({
              kdf: OpenSSLKdf
            }),

            /**
             * Encrypts a message using a password.
             *
             * @param {Cipher} cipher The cipher algorithm to use.
             * @param {WordArray|string} message The message to encrypt.
             * @param {string} password The password.
             * @param {Object} cfg (Optional) The configuration options to use for this operation.
             *
             * @return {CipherParams} A cipher params object.
             *
             * @static
             *
             * @example
             *
             *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
             *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
             */
            encrypt: function encrypt(cipher, message, password, cfg) {
              // Apply config defaults
              cfg = this.cfg.extend(cfg); // Derive key and other params

              var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize); // Add IV to config

              cfg.iv = derivedParams.iv; // Encrypt

              var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg); // Mix in derived params

              ciphertext.mixIn(derivedParams);
              return ciphertext;
            },

            /**
             * Decrypts serialized ciphertext using a password.
             *
             * @param {Cipher} cipher The cipher algorithm to use.
             * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
             * @param {string} password The password.
             * @param {Object} cfg (Optional) The configuration options to use for this operation.
             *
             * @return {WordArray} The plaintext.
             *
             * @static
             *
             * @example
             *
             *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
             *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
             */
            decrypt: function decrypt(cipher, ciphertext, password, cfg) {
              // Apply config defaults
              cfg = this.cfg.extend(cfg); // Convert string to CipherParams

              ciphertext = this._parse(ciphertext, cfg.format); // Derive key and other params

              var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt); // Add IV to config

              cfg.iv = derivedParams.iv; // Decrypt

              var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
              return plaintext;
            }
          });
        }();
      });
      /***/

    },

    /***/
    "Oe4d": function Oe4d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "encrypt", function () {
        return encrypt;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decrypt", function () {
        return decrypt;
      });
      /* harmony import */


      var _random_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./random.js */
      "kIlW");
      /* harmony import */


      var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../lib/buffer_utils.js */
      "xpfA");
      /* harmony import */


      var _base64url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./base64url.js */
      "KjJ5");
      /* harmony import */


      var _aeskw_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./aeskw.js */
      "Qm1j");
      /* harmony import */


      var _lib_check_p2s_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../lib/check_p2s.js */
      "4+qi");
      /* harmony import */


      var _webcrypto_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./webcrypto.js */
      "hqmz");
      /* harmony import */


      var _lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../lib/crypto_key.js */
      "D3C9");
      /* harmony import */


      var _lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../lib/invalid_key_input.js */
      "wZa+");
      /* harmony import */


      var _is_key_like_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./is_key_like.js */
      "H/EN");

      function getCryptoKey(key, alg) {
        if (key instanceof Uint8Array) {
          return _webcrypto_js__WEBPACK_IMPORTED_MODULE_5__["default"].subtle.importKey('raw', key, 'PBKDF2', false, ['deriveBits']);
        }

        if (Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_5__["isCryptoKey"])(key)) {
          Object(_lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_6__["checkEncCryptoKey"])(key, alg, 'deriveBits', 'deriveKey');
          return key;
        }

        throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_7__["default"]).apply(void 0, [key].concat(_toConsumableArray(_is_key_like_js__WEBPACK_IMPORTED_MODULE_8__["types"]), ['Uint8Array'])));
      }

      function deriveKey(_x59, _x60, _x61, _x62) {
        return _deriveKey.apply(this, arguments);
      }

      function _deriveKey() {
        _deriveKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(p2s, alg, p2c, key) {
          var salt, keylen, subtleAlg, wrapAlg, cryptoKey;
          return regeneratorRuntime.wrap(function _callee26$(_context26) {
            while (1) {
              switch (_context26.prev = _context26.next) {
                case 0:
                  Object(_lib_check_p2s_js__WEBPACK_IMPORTED_MODULE_4__["default"])(p2s);
                  salt = Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__["p2s"])(alg, p2s);
                  keylen = parseInt(alg.slice(13, 16), 10);
                  subtleAlg = {
                    hash: "SHA-".concat(alg.slice(8, 11)),
                    iterations: p2c,
                    name: 'PBKDF2',
                    salt: salt
                  };
                  wrapAlg = {
                    length: keylen,
                    name: 'AES-KW'
                  };
                  _context26.next = 7;
                  return getCryptoKey(key, alg);

                case 7:
                  cryptoKey = _context26.sent;

                  if (!cryptoKey.usages.includes('deriveBits')) {
                    _context26.next = 14;
                    break;
                  }

                  _context26.t0 = Uint8Array;
                  _context26.next = 12;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_5__["default"].subtle.deriveBits(subtleAlg, cryptoKey, keylen);

                case 12:
                  _context26.t1 = _context26.sent;
                  return _context26.abrupt("return", new _context26.t0(_context26.t1));

                case 14:
                  if (!cryptoKey.usages.includes('deriveKey')) {
                    _context26.next = 16;
                    break;
                  }

                  return _context26.abrupt("return", _webcrypto_js__WEBPACK_IMPORTED_MODULE_5__["default"].subtle.deriveKey(subtleAlg, cryptoKey, wrapAlg, false, ['wrapKey', 'unwrapKey']));

                case 16:
                  throw new TypeError('PBKDF2 key "usages" must include "deriveBits" or "deriveKey"');

                case 17:
                case "end":
                  return _context26.stop();
              }
            }
          }, _callee26);
        }));
        return _deriveKey.apply(this, arguments);
      }

      var encrypt = /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(alg, key, cek) {
          var p2c,
              p2s,
              derived,
              encryptedKey,
              _args24 = arguments;
          return regeneratorRuntime.wrap(function _callee24$(_context24) {
            while (1) {
              switch (_context24.prev = _context24.next) {
                case 0:
                  p2c = _args24.length > 3 && _args24[3] !== undefined ? _args24[3] : 2048;
                  p2s = _args24.length > 4 && _args24[4] !== undefined ? _args24[4] : Object(_random_js__WEBPACK_IMPORTED_MODULE_0__["default"])(new Uint8Array(16));
                  _context24.next = 4;
                  return deriveKey(p2s, alg, p2c, key);

                case 4:
                  derived = _context24.sent;
                  _context24.next = 7;
                  return Object(_aeskw_js__WEBPACK_IMPORTED_MODULE_3__["wrap"])(alg.slice(-6), derived, cek);

                case 7:
                  encryptedKey = _context24.sent;
                  return _context24.abrupt("return", {
                    encryptedKey: encryptedKey,
                    p2c: p2c,
                    p2s: Object(_base64url_js__WEBPACK_IMPORTED_MODULE_2__["encode"])(p2s)
                  });

                case 9:
                case "end":
                  return _context24.stop();
              }
            }
          }, _callee24);
        }));

        return function encrypt(_x63, _x64, _x65) {
          return _ref10.apply(this, arguments);
        };
      }();

      var decrypt = /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(alg, key, encryptedKey, p2c, p2s) {
          var derived;
          return regeneratorRuntime.wrap(function _callee25$(_context25) {
            while (1) {
              switch (_context25.prev = _context25.next) {
                case 0:
                  _context25.next = 2;
                  return deriveKey(p2s, alg, p2c, key);

                case 2:
                  derived = _context25.sent;
                  return _context25.abrupt("return", Object(_aeskw_js__WEBPACK_IMPORTED_MODULE_3__["unwrap"])(alg.slice(-6), derived, encryptedKey));

                case 4:
                case "end":
                  return _context25.stop();
              }
            }
          }, _callee25);
        }));

        return function decrypt(_x66, _x67, _x68, _x69, _x70) {
          return _ref11.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "OvXJ": function OvXJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createRemoteJWKSet", function () {
        return createRemoteJWKSet;
      });
      /* harmony import */


      var _runtime_fetch_jwks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../runtime/fetch_jwks.js */
      "1qei");
      /* harmony import */


      var _runtime_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../runtime/env.js */
      "+S68");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");
      /* harmony import */


      var _local_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./local.js */
      "4TUK");

      var RemoteJWKSet = /*#__PURE__*/function (_local_js__WEBPACK_IM) {
        _inherits(RemoteJWKSet, _local_js__WEBPACK_IM);

        var _super2 = _createSuper(RemoteJWKSet);

        function RemoteJWKSet(url, options) {
          var _this;

          _classCallCheck(this, RemoteJWKSet);

          _this = _super2.call(this, {
            keys: []
          });
          _this._jwks = undefined;

          if (!(url instanceof URL)) {
            throw new TypeError('url must be an instance of URL');
          }

          _this._url = new URL(url.href);
          _this._options = {
            agent: options === null || options === void 0 ? void 0 : options.agent,
            headers: options === null || options === void 0 ? void 0 : options.headers
          };
          _this._timeoutDuration = typeof (options === null || options === void 0 ? void 0 : options.timeoutDuration) === 'number' ? options === null || options === void 0 ? void 0 : options.timeoutDuration : 5000;
          _this._cooldownDuration = typeof (options === null || options === void 0 ? void 0 : options.cooldownDuration) === 'number' ? options === null || options === void 0 ? void 0 : options.cooldownDuration : 30000;
          _this._cacheMaxAge = typeof (options === null || options === void 0 ? void 0 : options.cacheMaxAge) === 'number' ? options === null || options === void 0 ? void 0 : options.cacheMaxAge : 600000;
          return _this;
        }

        _createClass(RemoteJWKSet, [{
          key: "coolingDown",
          value: function coolingDown() {
            return typeof this._jwksTimestamp === 'number' ? Date.now() < this._jwksTimestamp + this._cooldownDuration : false;
          }
        }, {
          key: "fresh",
          value: function fresh() {
            return typeof this._jwksTimestamp === 'number' ? Date.now() < this._jwksTimestamp + this._cacheMaxAge : false;
          }
        }, {
          key: "getKey",
          value: function () {
            var _getKey2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27(protectedHeader, token) {
              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      if (!(!this._jwks || !this.fresh())) {
                        _context27.next = 3;
                        break;
                      }

                      _context27.next = 3;
                      return this.reload();

                    case 3:
                      _context27.prev = 3;
                      _context27.next = 6;
                      return _get(_getPrototypeOf(RemoteJWKSet.prototype), "getKey", this).call(this, protectedHeader, token);

                    case 6:
                      return _context27.abrupt("return", _context27.sent);

                    case 9:
                      _context27.prev = 9;
                      _context27.t0 = _context27["catch"](3);

                      if (!(_context27.t0 instanceof _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWKSNoMatchingKey"])) {
                        _context27.next = 16;
                        break;
                      }

                      if (!(this.coolingDown() === false)) {
                        _context27.next = 16;
                        break;
                      }

                      _context27.next = 15;
                      return this.reload();

                    case 15:
                      return _context27.abrupt("return", _get(_getPrototypeOf(RemoteJWKSet.prototype), "getKey", this).call(this, protectedHeader, token));

                    case 16:
                      throw _context27.t0;

                    case 17:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this, [[3, 9]]);
            }));

            function getKey(_x71, _x72) {
              return _getKey2.apply(this, arguments);
            }

            return getKey;
          }()
        }, {
          key: "reload",
          value: function () {
            var _reload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      if (!(this._pendingFetch && Object(_runtime_env_js__WEBPACK_IMPORTED_MODULE_1__["isCloudflareWorkers"])())) {
                        _context28.next = 2;
                        break;
                      }

                      return _context28.abrupt("return", new Promise(function (resolve) {
                        var isDone = function isDone() {
                          if (_this2._pendingFetch === undefined) {
                            resolve();
                          } else {
                            setTimeout(isDone, 5);
                          }
                        };

                        isDone();
                      }));

                    case 2:
                      if (!this._pendingFetch) {
                        this._pendingFetch = Object(_runtime_fetch_jwks_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this._url, this._timeoutDuration, this._options).then(function (json) {
                          if (!Object(_local_js__WEBPACK_IMPORTED_MODULE_3__["isJWKSLike"])(json)) {
                            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWKSInvalid"]('JSON Web Key Set malformed');
                          }

                          _this2._jwks = {
                            keys: json.keys
                          };
                          _this2._jwksTimestamp = Date.now();
                          _this2._pendingFetch = undefined;
                        })["catch"](function (err) {
                          _this2._pendingFetch = undefined;
                          throw err;
                        });
                      }

                      _context28.next = 5;
                      return this._pendingFetch;

                    case 5:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));

            function reload() {
              return _reload.apply(this, arguments);
            }

            return reload;
          }()
        }]);

        return RemoteJWKSet;
      }(_local_js__WEBPACK_IMPORTED_MODULE_3__["LocalJWKSet"]);

      function createRemoteJWKSet(url, options) {
        return RemoteJWKSet.prototype.getKey.bind(new RemoteJWKSet(url, options));
      }
      /***/

    },

    /***/
    "PVpz": function PVpz(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./enc-base64 */
          "ETIr"), __webpack_require__(
          /*! ./md5 */
          "cv67"), __webpack_require__(
          /*! ./evpkdf */
          "K3mO"), __webpack_require__(
          /*! ./cipher-core */
          "OLod"));
        } else {}
      })(this, function (CryptoJS) {
        (function () {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var StreamCipher = C_lib.StreamCipher;
          var C_algo = C.algo; // Reusable objects

          var S = [];
          var C_ = [];
          var G = [];
          /**
           * Rabbit stream cipher algorithm.
           *
           * This is a legacy version that neglected to convert the key to little-endian.
           * This error doesn't affect the cipher's security,
           * but it does affect its compatibility with other implementations.
           */

          var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
            _doReset: function _doReset() {
              // Shortcuts
              var K = this._key.words;
              var iv = this.cfg.iv; // Generate initial state values

              var X = this._X = [K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16]; // Generate initial counter values

              var C = this._C = [K[2] << 16 | K[2] >>> 16, K[0] & 0xffff0000 | K[1] & 0x0000ffff, K[3] << 16 | K[3] >>> 16, K[1] & 0xffff0000 | K[2] & 0x0000ffff, K[0] << 16 | K[0] >>> 16, K[2] & 0xffff0000 | K[3] & 0x0000ffff, K[1] << 16 | K[1] >>> 16, K[3] & 0xffff0000 | K[0] & 0x0000ffff]; // Carry bit

              this._b = 0; // Iterate the system four times

              for (var i = 0; i < 4; i++) {
                nextState.call(this);
              } // Modify the counters


              for (var i = 0; i < 8; i++) {
                C[i] ^= X[i + 4 & 7];
              } // IV setup


              if (iv) {
                // Shortcuts
                var IV = iv.words;
                var IV_0 = IV[0];
                var IV_1 = IV[1]; // Generate four subvectors

                var i0 = (IV_0 << 8 | IV_0 >>> 24) & 0x00ff00ff | (IV_0 << 24 | IV_0 >>> 8) & 0xff00ff00;
                var i2 = (IV_1 << 8 | IV_1 >>> 24) & 0x00ff00ff | (IV_1 << 24 | IV_1 >>> 8) & 0xff00ff00;
                var i1 = i0 >>> 16 | i2 & 0xffff0000;
                var i3 = i2 << 16 | i0 & 0x0000ffff; // Modify counter values

                C[0] ^= i0;
                C[1] ^= i1;
                C[2] ^= i2;
                C[3] ^= i3;
                C[4] ^= i0;
                C[5] ^= i1;
                C[6] ^= i2;
                C[7] ^= i3; // Iterate the system four times

                for (var i = 0; i < 4; i++) {
                  nextState.call(this);
                }
              }
            },
            _doProcessBlock: function _doProcessBlock(M, offset) {
              // Shortcut
              var X = this._X; // Iterate the system

              nextState.call(this); // Generate four keystream words

              S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
              S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
              S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
              S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;

              for (var i = 0; i < 4; i++) {
                // Swap endian
                S[i] = (S[i] << 8 | S[i] >>> 24) & 0x00ff00ff | (S[i] << 24 | S[i] >>> 8) & 0xff00ff00; // Encrypt

                M[offset + i] ^= S[i];
              }
            },
            blockSize: 128 / 32,
            ivSize: 64 / 32
          });

          function nextState() {
            // Shortcuts
            var X = this._X;
            var C = this._C; // Save old counter values

            for (var i = 0; i < 8; i++) {
              C_[i] = C[i];
            } // Calculate new counter values


            C[0] = C[0] + 0x4d34d34d + this._b | 0;
            C[1] = C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
            C[2] = C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
            C[3] = C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
            C[4] = C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
            C[5] = C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
            C[6] = C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
            C[7] = C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
            this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0; // Calculate the g-values

            for (var i = 0; i < 8; i++) {
              var gx = X[i] + C[i]; // Construct high and low argument for squaring

              var ga = gx & 0xffff;
              var gb = gx >>> 16; // Calculate high and low result of squaring

              var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
              var gl = ((gx & 0xffff0000) * gx | 0) + ((gx & 0x0000ffff) * gx | 0); // High XOR low

              G[i] = gh ^ gl;
            } // Calculate new state values


            X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
            X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
            X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
            X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
            X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
            X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
            X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
            X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
          }
          /**
           * Shortcut functions to the cipher's object interface.
           *
           * @example
           *
           *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
           *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
           */


          C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
        })();

        return CryptoJS.RabbitLegacy;
      });
      /***/

    },

    /***/
    "QaxS": function QaxS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generateSecret", function () {
        return generateSecret;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generateKeyPair", function () {
        return generateKeyPair;
      });
      /* harmony import */


      var _env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./env.js */
      "+S68");
      /* harmony import */


      var _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./webcrypto.js */
      "hqmz");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");
      /* harmony import */


      var _random_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./random.js */
      "kIlW");

      function generateSecret(_x73, _x74) {
        return _generateSecret2.apply(this, arguments);
      }

      function _generateSecret2() {
        _generateSecret2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(alg, options) {
          var _a, length, algorithm, keyUsages;

          return regeneratorRuntime.wrap(function _callee29$(_context29) {
            while (1) {
              switch (_context29.prev = _context29.next) {
                case 0:
                  _context29.t0 = alg;
                  _context29.next = _context29.t0 === 'HS256' ? 3 : _context29.t0 === 'HS384' ? 3 : _context29.t0 === 'HS512' ? 3 : _context29.t0 === 'A128CBC-HS256' ? 7 : _context29.t0 === 'A192CBC-HS384' ? 7 : _context29.t0 === 'A256CBC-HS512' ? 7 : _context29.t0 === 'A128KW' ? 9 : _context29.t0 === 'A192KW' ? 9 : _context29.t0 === 'A256KW' ? 9 : _context29.t0 === 'A128GCMKW' ? 13 : _context29.t0 === 'A192GCMKW' ? 13 : _context29.t0 === 'A256GCMKW' ? 13 : _context29.t0 === 'A128GCM' ? 13 : _context29.t0 === 'A192GCM' ? 13 : _context29.t0 === 'A256GCM' ? 13 : 17;
                  break;

                case 3:
                  length = parseInt(alg.slice(-3), 10);
                  algorithm = {
                    name: 'HMAC',
                    hash: "SHA-".concat(length),
                    length: length
                  };
                  keyUsages = ['sign', 'verify'];
                  return _context29.abrupt("break", 18);

                case 7:
                  length = parseInt(alg.slice(-3), 10);
                  return _context29.abrupt("return", Object(_random_js__WEBPACK_IMPORTED_MODULE_3__["default"])(new Uint8Array(length >> 3)));

                case 9:
                  length = parseInt(alg.slice(1, 4), 10);
                  algorithm = {
                    name: 'AES-KW',
                    length: length
                  };
                  keyUsages = ['wrapKey', 'unwrapKey'];
                  return _context29.abrupt("break", 18);

                case 13:
                  length = parseInt(alg.slice(1, 4), 10);
                  algorithm = {
                    name: 'AES-GCM',
                    length: length
                  };
                  keyUsages = ['encrypt', 'decrypt'];
                  return _context29.abrupt("break", 18);

                case 17:
                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSENotSupported"]('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');

                case 18:
                  return _context29.abrupt("return", _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.generateKey(algorithm, (_a = options === null || options === void 0 ? void 0 : options.extractable) !== null && _a !== void 0 ? _a : false, keyUsages));

                case 19:
                case "end":
                  return _context29.stop();
              }
            }
          }, _callee29);
        }));
        return _generateSecret2.apply(this, arguments);
      }

      function getModulusLengthOption(options) {
        var _a;

        var modulusLength = (_a = options === null || options === void 0 ? void 0 : options.modulusLength) !== null && _a !== void 0 ? _a : 2048;

        if (typeof modulusLength !== 'number' || modulusLength < 2048) {
          throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSENotSupported"]('Invalid or unsupported modulusLength option provided, 2048 bits or larger keys must be used');
        }

        return modulusLength;
      }

      function generateKeyPair(_x75, _x76) {
        return _generateKeyPair.apply(this, arguments);
      }
      /***/


      function _generateKeyPair() {
        _generateKeyPair = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(alg, options) {
          var _a, _b, algorithm, keyUsages;

          return regeneratorRuntime.wrap(function _callee30$(_context30) {
            while (1) {
              switch (_context30.prev = _context30.next) {
                case 0:
                  _context30.t0 = alg;
                  _context30.next = _context30.t0 === 'PS256' ? 3 : _context30.t0 === 'PS384' ? 3 : _context30.t0 === 'PS512' ? 3 : _context30.t0 === 'RS256' ? 6 : _context30.t0 === 'RS384' ? 6 : _context30.t0 === 'RS512' ? 6 : _context30.t0 === 'RSA-OAEP' ? 9 : _context30.t0 === 'RSA-OAEP-256' ? 9 : _context30.t0 === 'RSA-OAEP-384' ? 9 : _context30.t0 === 'RSA-OAEP-512' ? 9 : _context30.t0 === 'ES256' ? 12 : _context30.t0 === 'ES384' ? 15 : _context30.t0 === 'ES512' ? 18 : _context30.t0 === (Object(_env_js__WEBPACK_IMPORTED_MODULE_0__["isCloudflareWorkers"])() && 'EdDSA') ? 21 : _context30.t0 === 'ECDH-ES' ? 29 : _context30.t0 === 'ECDH-ES+A128KW' ? 29 : _context30.t0 === 'ECDH-ES+A192KW' ? 29 : _context30.t0 === 'ECDH-ES+A256KW' ? 29 : 32;
                  break;

                case 3:
                  algorithm = {
                    name: 'RSA-PSS',
                    hash: "SHA-".concat(alg.slice(-3)),
                    publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
                    modulusLength: getModulusLengthOption(options)
                  };
                  keyUsages = ['sign', 'verify'];
                  return _context30.abrupt("break", 33);

                case 6:
                  algorithm = {
                    name: 'RSASSA-PKCS1-v1_5',
                    hash: "SHA-".concat(alg.slice(-3)),
                    publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
                    modulusLength: getModulusLengthOption(options)
                  };
                  keyUsages = ['sign', 'verify'];
                  return _context30.abrupt("break", 33);

                case 9:
                  algorithm = {
                    name: 'RSA-OAEP',
                    hash: "SHA-".concat(parseInt(alg.slice(-3), 10) || 1),
                    publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
                    modulusLength: getModulusLengthOption(options)
                  };
                  keyUsages = ['decrypt', 'unwrapKey', 'encrypt', 'wrapKey'];
                  return _context30.abrupt("break", 33);

                case 12:
                  algorithm = {
                    name: 'ECDSA',
                    namedCurve: 'P-256'
                  };
                  keyUsages = ['sign', 'verify'];
                  return _context30.abrupt("break", 33);

                case 15:
                  algorithm = {
                    name: 'ECDSA',
                    namedCurve: 'P-384'
                  };
                  keyUsages = ['sign', 'verify'];
                  return _context30.abrupt("break", 33);

                case 18:
                  algorithm = {
                    name: 'ECDSA',
                    namedCurve: 'P-521'
                  };
                  keyUsages = ['sign', 'verify'];
                  return _context30.abrupt("break", 33);

                case 21:
                  _context30.t1 = options === null || options === void 0 ? void 0 : options.crv;
                  _context30.next = _context30.t1 === undefined ? 24 : _context30.t1 === 'Ed25519' ? 24 : 27;
                  break;

                case 24:
                  algorithm = {
                    name: 'NODE-ED25519',
                    namedCurve: 'NODE-ED25519'
                  };
                  keyUsages = ['sign', 'verify'];
                  return _context30.abrupt("break", 28);

                case 27:
                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSENotSupported"]('Invalid or unsupported crv option provided');

                case 28:
                  return _context30.abrupt("break", 33);

                case 29:
                  algorithm = {
                    name: 'ECDH',
                    namedCurve: (_a = options === null || options === void 0 ? void 0 : options.crv) !== null && _a !== void 0 ? _a : 'P-256'
                  };
                  keyUsages = ['deriveKey', 'deriveBits'];
                  return _context30.abrupt("break", 33);

                case 32:
                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSENotSupported"]('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');

                case 33:
                  return _context30.abrupt("return", _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.generateKey(algorithm, (_b = options === null || options === void 0 ? void 0 : options.extractable) !== null && _b !== void 0 ? _b : false, keyUsages));

                case 34:
                case "end":
                  return _context30.stop();
              }
            }
          }, _callee30);
        }));
        return _generateKeyPair.apply(this, arguments);
      }
    },

    /***/
    "Qm1j": function Qm1j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "wrap", function () {
        return wrap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unwrap", function () {
        return unwrap;
      });
      /* harmony import */


      var _bogus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bogus.js */
      "tj0O");
      /* harmony import */


      var _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./webcrypto.js */
      "hqmz");
      /* harmony import */


      var _lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../lib/crypto_key.js */
      "D3C9");
      /* harmony import */


      var _lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../lib/invalid_key_input.js */
      "wZa+");
      /* harmony import */


      var _is_key_like_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./is_key_like.js */
      "H/EN");

      function checkKeySize(key, alg) {
        if (key.algorithm.length !== parseInt(alg.slice(1, 4), 10)) {
          throw new TypeError("Invalid key size for alg: ".concat(alg));
        }
      }

      function getCryptoKey(key, alg, usage) {
        if (Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["isCryptoKey"])(key)) {
          Object(_lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_2__["checkEncCryptoKey"])(key, alg, usage);
          return key;
        }

        if (key instanceof Uint8Array) {
          return _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.importKey('raw', key, 'AES-KW', true, [usage]);
        }

        throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_3__["default"]).apply(void 0, [key].concat(_toConsumableArray(_is_key_like_js__WEBPACK_IMPORTED_MODULE_4__["types"]), ['Uint8Array'])));
      }

      var wrap = /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(alg, key, cek) {
          var _webcrypto_js__WEBPAC3;

          var cryptoKey, cryptoKeyCek;
          return regeneratorRuntime.wrap(function _callee31$(_context31) {
            while (1) {
              switch (_context31.prev = _context31.next) {
                case 0:
                  _context31.next = 2;
                  return getCryptoKey(key, alg, 'wrapKey');

                case 2:
                  cryptoKey = _context31.sent;
                  checkKeySize(cryptoKey, alg);
                  _context31.next = 6;
                  return (_webcrypto_js__WEBPAC3 = _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle).importKey.apply(_webcrypto_js__WEBPAC3, ['raw', cek].concat(_toConsumableArray(_bogus_js__WEBPACK_IMPORTED_MODULE_0__["default"])));

                case 6:
                  cryptoKeyCek = _context31.sent;
                  _context31.t0 = Uint8Array;
                  _context31.next = 10;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.wrapKey('raw', cryptoKeyCek, cryptoKey, 'AES-KW');

                case 10:
                  _context31.t1 = _context31.sent;
                  return _context31.abrupt("return", new _context31.t0(_context31.t1));

                case 12:
                case "end":
                  return _context31.stop();
              }
            }
          }, _callee31);
        }));

        return function wrap(_x77, _x78, _x79) {
          return _ref12.apply(this, arguments);
        };
      }();

      var unwrap = /*#__PURE__*/function () {
        var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32(alg, key, encryptedKey) {
          var _webcrypto_js__WEBPAC4;

          var cryptoKey, cryptoKeyCek;
          return regeneratorRuntime.wrap(function _callee32$(_context32) {
            while (1) {
              switch (_context32.prev = _context32.next) {
                case 0:
                  _context32.next = 2;
                  return getCryptoKey(key, alg, 'unwrapKey');

                case 2:
                  cryptoKey = _context32.sent;
                  checkKeySize(cryptoKey, alg);
                  _context32.next = 6;
                  return (_webcrypto_js__WEBPAC4 = _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle).unwrapKey.apply(_webcrypto_js__WEBPAC4, ['raw', encryptedKey, cryptoKey, 'AES-KW'].concat(_toConsumableArray(_bogus_js__WEBPACK_IMPORTED_MODULE_0__["default"])));

                case 6:
                  cryptoKeyCek = _context32.sent;
                  _context32.t0 = Uint8Array;
                  _context32.next = 10;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.exportKey('raw', cryptoKeyCek);

                case 10:
                  _context32.t1 = _context32.sent;
                  return _context32.abrupt("return", new _context32.t0(_context32.t1));

                case 12:
                case "end":
                  return _context32.stop();
              }
            }
          }, _callee32);
        }));

        return function unwrap(_x80, _x81, _x82) {
          return _ref13.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "Qtqc": function Qtqc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "importSPKI", function () {
        return importSPKI;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "importX509", function () {
        return importX509;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "importPKCS8", function () {
        return importPKCS8;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "importJWK", function () {
        return importJWK;
      });
      /* harmony import */


      var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../runtime/base64url.js */
      "KjJ5");
      /* harmony import */


      var _runtime_asn1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../runtime/asn1.js */
      "IpBm");
      /* harmony import */


      var _runtime_jwk_to_key_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../runtime/jwk_to_key.js */
      "LuQ+");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");
      /* harmony import */


      var _lib_format_pem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../lib/format_pem.js */
      "aMKJ");
      /* harmony import */


      var _lib_is_object_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../lib/is_object.js */
      "2fVw");

      function getElement(seq) {
        var result = [];
        var next = 0;

        while (next < seq.length) {
          var nextPart = parseElement(seq.subarray(next));
          result.push(nextPart);
          next += nextPart.byteLength;
        }

        return result;
      }

      function parseElement(bytes) {
        var position = 0;
        var tag = bytes[0] & 0x1f;
        position++;

        if (tag === 0x1f) {
          tag = 0;

          while (bytes[position] >= 0x80) {
            tag = tag * 128 + bytes[position] - 0x80;
            position++;
          }

          tag = tag * 128 + bytes[position] - 0x80;
          position++;
        }

        var length = 0;

        if (bytes[position] < 0x80) {
          length = bytes[position];
          position++;
        } else {
          var numberOfDigits = bytes[position] & 0x7f;
          position++;
          length = 0;

          for (var i = 0; i < numberOfDigits; i++) {
            length = length * 256 + bytes[position];
            position++;
          }
        }

        if (length === 0x80) {
          length = 0;

          while (bytes[position + length] !== 0 || bytes[position + length + 1] !== 0) {
            length++;
          }

          var _byteLength = position + length + 2;

          return {
            byteLength: _byteLength,
            contents: bytes.subarray(position, position + length),
            raw: bytes.subarray(0, _byteLength)
          };
        }

        var byteLength = position + length;
        return {
          byteLength: byteLength,
          contents: bytes.subarray(position, byteLength),
          raw: bytes.subarray(0, byteLength)
        };
      }

      function spkiFromX509(buf) {
        var tbsCertificate = getElement(getElement(parseElement(buf).contents)[0].contents);
        return Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encodeBase64"])(tbsCertificate[tbsCertificate[0].raw[0] === 0xa0 ? 6 : 5].raw);
      }

      function getSPKI(x509) {
        var pem = x509.replace(/(?:-----(?:BEGIN|END) CERTIFICATE-----|\s)/g, '');
        var raw = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decodeBase64"])(pem);
        return Object(_lib_format_pem_js__WEBPACK_IMPORTED_MODULE_4__["default"])(spkiFromX509(raw), 'PUBLIC KEY');
      }

      function importSPKI(_x83, _x84, _x85) {
        return _importSPKI.apply(this, arguments);
      }

      function _importSPKI() {
        _importSPKI = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33(spki, alg, options) {
          return regeneratorRuntime.wrap(function _callee33$(_context33) {
            while (1) {
              switch (_context33.prev = _context33.next) {
                case 0:
                  if (!(typeof spki !== 'string' || spki.indexOf('-----BEGIN PUBLIC KEY-----') !== 0)) {
                    _context33.next = 2;
                    break;
                  }

                  throw new TypeError('"spki" must be SPKI formatted string');

                case 2:
                  return _context33.abrupt("return", Object(_runtime_asn1_js__WEBPACK_IMPORTED_MODULE_1__["fromSPKI"])(spki, alg, options));

                case 3:
                case "end":
                  return _context33.stop();
              }
            }
          }, _callee33);
        }));
        return _importSPKI.apply(this, arguments);
      }

      function importX509(_x86, _x87, _x88) {
        return _importX.apply(this, arguments);
      }

      function _importX() {
        _importX = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee34(x509, alg, options) {
          var spki;
          return regeneratorRuntime.wrap(function _callee34$(_context34) {
            while (1) {
              switch (_context34.prev = _context34.next) {
                case 0:
                  if (!(typeof x509 !== 'string' || x509.indexOf('-----BEGIN CERTIFICATE-----') !== 0)) {
                    _context34.next = 2;
                    break;
                  }

                  throw new TypeError('"x509" must be X.509 formatted string');

                case 2:
                  spki = getSPKI(x509);
                  return _context34.abrupt("return", Object(_runtime_asn1_js__WEBPACK_IMPORTED_MODULE_1__["fromSPKI"])(spki, alg, options));

                case 4:
                case "end":
                  return _context34.stop();
              }
            }
          }, _callee34);
        }));
        return _importX.apply(this, arguments);
      }

      function importPKCS8(_x89, _x90, _x91) {
        return _importPKCS.apply(this, arguments);
      }

      function _importPKCS() {
        _importPKCS = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee35(pkcs8, alg, options) {
          return regeneratorRuntime.wrap(function _callee35$(_context35) {
            while (1) {
              switch (_context35.prev = _context35.next) {
                case 0:
                  if (!(typeof pkcs8 !== 'string' || pkcs8.indexOf('-----BEGIN PRIVATE KEY-----') !== 0)) {
                    _context35.next = 2;
                    break;
                  }

                  throw new TypeError('"pkcs8" must be PCKS8 formatted string');

                case 2:
                  return _context35.abrupt("return", Object(_runtime_asn1_js__WEBPACK_IMPORTED_MODULE_1__["fromPKCS8"])(pkcs8, alg, options));

                case 3:
                case "end":
                  return _context35.stop();
              }
            }
          }, _callee35);
        }));
        return _importPKCS.apply(this, arguments);
      }

      function importJWK(_x92, _x93, _x94) {
        return _importJWK.apply(this, arguments);
      }
      /***/


      function _importJWK() {
        _importJWK = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee36(jwk, alg, octAsKeyObject) {
          return regeneratorRuntime.wrap(function _callee36$(_context36) {
            while (1) {
              switch (_context36.prev = _context36.next) {
                case 0:
                  if (Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_5__["default"])(jwk)) {
                    _context36.next = 2;
                    break;
                  }

                  throw new TypeError('JWK must be an object');

                case 2:
                  alg || (alg = jwk.alg);

                  if (!(typeof alg !== 'string' || !alg)) {
                    _context36.next = 5;
                    break;
                  }

                  throw new TypeError('"alg" argument is required when "jwk.alg" is not present');

                case 5:
                  _context36.t0 = jwk.kty;
                  _context36.next = _context36.t0 === 'oct' ? 8 : _context36.t0 === 'RSA' ? 14 : _context36.t0 === 'EC' ? 16 : _context36.t0 === 'OKP' ? 16 : 17;
                  break;

                case 8:
                  if (!(typeof jwk.k !== 'string' || !jwk.k)) {
                    _context36.next = 10;
                    break;
                  }

                  throw new TypeError('missing "k" (Key Value) Parameter value');

                case 10:
                  octAsKeyObject !== null && octAsKeyObject !== void 0 ? octAsKeyObject : octAsKeyObject = jwk.ext !== true;

                  if (!octAsKeyObject) {
                    _context36.next = 13;
                    break;
                  }

                  return _context36.abrupt("return", Object(_runtime_jwk_to_key_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread(_objectSpread({}, jwk), {}, {
                    alg: alg,
                    ext: false
                  })));

                case 13:
                  return _context36.abrupt("return", Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(jwk.k));

                case 14:
                  if (!(jwk.oth !== undefined)) {
                    _context36.next = 16;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JOSENotSupported"]('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');

                case 16:
                  return _context36.abrupt("return", Object(_runtime_jwk_to_key_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread(_objectSpread({}, jwk), {}, {
                    alg: alg
                  })));

                case 17:
                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JOSENotSupported"]('Unsupported "kty" (Key Type) Parameter value');

                case 18:
                case "end":
                  return _context36.stop();
              }
            }
          }, _callee36);
        }));
        return _importJWK.apply(this, arguments);
      }
    },

    /***/
    "Rg9p": function Rg9p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return getCryptoKey;
      });
      /* harmony import */


      var _webcrypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./webcrypto.js */
      "hqmz");
      /* harmony import */


      var _lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../lib/crypto_key.js */
      "D3C9");
      /* harmony import */


      var _lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../lib/invalid_key_input.js */
      "wZa+");
      /* harmony import */


      var _is_key_like_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./is_key_like.js */
      "H/EN");

      function getCryptoKey(alg, key, usage) {
        if (Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_0__["isCryptoKey"])(key)) {
          Object(_lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_1__["checkSigCryptoKey"])(key, alg, usage);
          return key;
        }

        if (key instanceof Uint8Array) {
          if (!alg.startsWith('HS')) {
            throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_2__["default"]).apply(void 0, [key].concat(_toConsumableArray(_is_key_like_js__WEBPACK_IMPORTED_MODULE_3__["types"]))));
          }

          return _webcrypto_js__WEBPACK_IMPORTED_MODULE_0__["default"].subtle.importKey('raw', key, {
            hash: "SHA-".concat(alg.slice(-3)),
            name: 'HMAC'
          }, false, [usage]);
        }

        throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_2__["default"]).apply(void 0, [key].concat(_toConsumableArray(_is_key_like_js__WEBPACK_IMPORTED_MODULE_3__["types"]), ['Uint8Array'])));
      }
      /***/

    },

    /***/
    "S6kV": function S6kV(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./cipher-core */
          "OLod"));
        } else {}
      })(this, function (CryptoJS) {
        /**
         * Output Feedback block mode.
         */
        CryptoJS.mode.OFB = function () {
          var OFB = CryptoJS.lib.BlockCipherMode.extend();
          var Encryptor = OFB.Encryptor = OFB.extend({
            processBlock: function processBlock(words, offset) {
              // Shortcuts
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              var iv = this._iv;
              var keystream = this._keystream; // Generate keystream

              if (iv) {
                keystream = this._keystream = iv.slice(0); // Remove IV for subsequent blocks

                this._iv = undefined;
              }

              cipher.encryptBlock(keystream, 0); // Encrypt

              for (var i = 0; i < blockSize; i++) {
                words[offset + i] ^= keystream[i];
              }
            }
          });
          OFB.Decryptor = Encryptor;
          return OFB;
        }();

        return CryptoJS.mode.OFB;
      });
      /***/

    },

    /***/
    "Sblm": function Sblm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      var minute = 60;
      var hour = minute * 60;
      var day = hour * 24;
      var week = day * 7;
      var year = day * 365.25;
      var REGEX = /^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i;
      /* harmony default export */

      __webpack_exports__["default"] = function (str) {
        var matched = REGEX.exec(str);

        if (!matched) {
          throw new TypeError('Invalid time period format');
        }

        var value = parseFloat(matched[1]);
        var unit = matched[2].toLowerCase();

        switch (unit) {
          case 'sec':
          case 'secs':
          case 'second':
          case 'seconds':
          case 's':
            return Math.round(value);

          case 'minute':
          case 'minutes':
          case 'min':
          case 'mins':
          case 'm':
            return Math.round(value * minute);

          case 'hour':
          case 'hours':
          case 'hr':
          case 'hrs':
          case 'h':
            return Math.round(value * hour);

          case 'day':
          case 'days':
          case 'd':
            return Math.round(value * day);

          case 'week':
          case 'weeks':
          case 'w':
            return Math.round(value * week);

          default:
            return Math.round(value * year);
        }
      };
      /***/

    },

    /***/
    "StPg": function StPg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JOSEError", function () {
        return JOSEError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JWTClaimValidationFailed", function () {
        return JWTClaimValidationFailed;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JWTExpired", function () {
        return JWTExpired;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JOSEAlgNotAllowed", function () {
        return JOSEAlgNotAllowed;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JOSENotSupported", function () {
        return JOSENotSupported;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JWEDecryptionFailed", function () {
        return JWEDecryptionFailed;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JWEInvalid", function () {
        return JWEInvalid;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JWSInvalid", function () {
        return JWSInvalid;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JWTInvalid", function () {
        return JWTInvalid;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JWKInvalid", function () {
        return JWKInvalid;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JWKSInvalid", function () {
        return JWKSInvalid;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JWKSNoMatchingKey", function () {
        return JWKSNoMatchingKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JWKSMultipleMatchingKeys", function () {
        return JWKSMultipleMatchingKeys;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JWKSTimeout", function () {
        return JWKSTimeout;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JWSSignatureVerificationFailed", function () {
        return JWSSignatureVerificationFailed;
      });

      var JOSEError = /*#__PURE__*/function (_Error) {
        _inherits(JOSEError, _Error);

        var _super3 = _createSuper(JOSEError);

        function JOSEError(message) {
          var _this3;

          _classCallCheck(this, JOSEError);

          var _a;

          _this3 = _super3.call(this, message);
          _this3.code = 'ERR_JOSE_GENERIC';
          _this3.name = _this3.constructor.name;
          (_a = Error.captureStackTrace) === null || _a === void 0 ? void 0 : _a.call(Error, _assertThisInitialized(_this3), _this3.constructor);
          return _this3;
        }

        _createClass(JOSEError, null, [{
          key: "code",
          get: function get() {
            return 'ERR_JOSE_GENERIC';
          }
        }]);

        return JOSEError;
      }( /*#__PURE__*/_wrapNativeSuper(Error));

      var JWTClaimValidationFailed = /*#__PURE__*/function (_JOSEError) {
        _inherits(JWTClaimValidationFailed, _JOSEError);

        var _super4 = _createSuper(JWTClaimValidationFailed);

        function JWTClaimValidationFailed(message) {
          var _this4;

          var claim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'unspecified';
          var reason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'unspecified';

          _classCallCheck(this, JWTClaimValidationFailed);

          _this4 = _super4.call(this, message);
          _this4.code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
          _this4.claim = claim;
          _this4.reason = reason;
          return _this4;
        }

        _createClass(JWTClaimValidationFailed, null, [{
          key: "code",
          get: function get() {
            return 'ERR_JWT_CLAIM_VALIDATION_FAILED';
          }
        }]);

        return JWTClaimValidationFailed;
      }(JOSEError);

      var JWTExpired = /*#__PURE__*/function (_JOSEError2) {
        _inherits(JWTExpired, _JOSEError2);

        var _super5 = _createSuper(JWTExpired);

        function JWTExpired(message) {
          var _this5;

          var claim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'unspecified';
          var reason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'unspecified';

          _classCallCheck(this, JWTExpired);

          _this5 = _super5.call(this, message);
          _this5.code = 'ERR_JWT_EXPIRED';
          _this5.claim = claim;
          _this5.reason = reason;
          return _this5;
        }

        _createClass(JWTExpired, null, [{
          key: "code",
          get: function get() {
            return 'ERR_JWT_EXPIRED';
          }
        }]);

        return JWTExpired;
      }(JOSEError);

      var JOSEAlgNotAllowed = /*#__PURE__*/function (_JOSEError3) {
        _inherits(JOSEAlgNotAllowed, _JOSEError3);

        var _super6 = _createSuper(JOSEAlgNotAllowed);

        function JOSEAlgNotAllowed() {
          var _this6;

          _classCallCheck(this, JOSEAlgNotAllowed);

          _this6 = _super6.apply(this, arguments);
          _this6.code = 'ERR_JOSE_ALG_NOT_ALLOWED';
          return _this6;
        }

        _createClass(JOSEAlgNotAllowed, null, [{
          key: "code",
          get: function get() {
            return 'ERR_JOSE_ALG_NOT_ALLOWED';
          }
        }]);

        return JOSEAlgNotAllowed;
      }(JOSEError);

      var JOSENotSupported = /*#__PURE__*/function (_JOSEError4) {
        _inherits(JOSENotSupported, _JOSEError4);

        var _super7 = _createSuper(JOSENotSupported);

        function JOSENotSupported() {
          var _this7;

          _classCallCheck(this, JOSENotSupported);

          _this7 = _super7.apply(this, arguments);
          _this7.code = 'ERR_JOSE_NOT_SUPPORTED';
          return _this7;
        }

        _createClass(JOSENotSupported, null, [{
          key: "code",
          get: function get() {
            return 'ERR_JOSE_NOT_SUPPORTED';
          }
        }]);

        return JOSENotSupported;
      }(JOSEError);

      var JWEDecryptionFailed = /*#__PURE__*/function (_JOSEError5) {
        _inherits(JWEDecryptionFailed, _JOSEError5);

        var _super8 = _createSuper(JWEDecryptionFailed);

        function JWEDecryptionFailed() {
          var _this8;

          _classCallCheck(this, JWEDecryptionFailed);

          _this8 = _super8.apply(this, arguments);
          _this8.code = 'ERR_JWE_DECRYPTION_FAILED';
          _this8.message = 'decryption operation failed';
          return _this8;
        }

        _createClass(JWEDecryptionFailed, null, [{
          key: "code",
          get: function get() {
            return 'ERR_JWE_DECRYPTION_FAILED';
          }
        }]);

        return JWEDecryptionFailed;
      }(JOSEError);

      var JWEInvalid = /*#__PURE__*/function (_JOSEError6) {
        _inherits(JWEInvalid, _JOSEError6);

        var _super9 = _createSuper(JWEInvalid);

        function JWEInvalid() {
          var _this9;

          _classCallCheck(this, JWEInvalid);

          _this9 = _super9.apply(this, arguments);
          _this9.code = 'ERR_JWE_INVALID';
          return _this9;
        }

        _createClass(JWEInvalid, null, [{
          key: "code",
          get: function get() {
            return 'ERR_JWE_INVALID';
          }
        }]);

        return JWEInvalid;
      }(JOSEError);

      var JWSInvalid = /*#__PURE__*/function (_JOSEError7) {
        _inherits(JWSInvalid, _JOSEError7);

        var _super10 = _createSuper(JWSInvalid);

        function JWSInvalid() {
          var _this10;

          _classCallCheck(this, JWSInvalid);

          _this10 = _super10.apply(this, arguments);
          _this10.code = 'ERR_JWS_INVALID';
          return _this10;
        }

        _createClass(JWSInvalid, null, [{
          key: "code",
          get: function get() {
            return 'ERR_JWS_INVALID';
          }
        }]);

        return JWSInvalid;
      }(JOSEError);

      var JWTInvalid = /*#__PURE__*/function (_JOSEError8) {
        _inherits(JWTInvalid, _JOSEError8);

        var _super11 = _createSuper(JWTInvalid);

        function JWTInvalid() {
          var _this11;

          _classCallCheck(this, JWTInvalid);

          _this11 = _super11.apply(this, arguments);
          _this11.code = 'ERR_JWT_INVALID';
          return _this11;
        }

        _createClass(JWTInvalid, null, [{
          key: "code",
          get: function get() {
            return 'ERR_JWT_INVALID';
          }
        }]);

        return JWTInvalid;
      }(JOSEError);

      var JWKInvalid = /*#__PURE__*/function (_JOSEError9) {
        _inherits(JWKInvalid, _JOSEError9);

        var _super12 = _createSuper(JWKInvalid);

        function JWKInvalid() {
          var _this12;

          _classCallCheck(this, JWKInvalid);

          _this12 = _super12.apply(this, arguments);
          _this12.code = 'ERR_JWK_INVALID';
          return _this12;
        }

        _createClass(JWKInvalid, null, [{
          key: "code",
          get: function get() {
            return 'ERR_JWK_INVALID';
          }
        }]);

        return JWKInvalid;
      }(JOSEError);

      var JWKSInvalid = /*#__PURE__*/function (_JOSEError10) {
        _inherits(JWKSInvalid, _JOSEError10);

        var _super13 = _createSuper(JWKSInvalid);

        function JWKSInvalid() {
          var _this13;

          _classCallCheck(this, JWKSInvalid);

          _this13 = _super13.apply(this, arguments);
          _this13.code = 'ERR_JWKS_INVALID';
          return _this13;
        }

        _createClass(JWKSInvalid, null, [{
          key: "code",
          get: function get() {
            return 'ERR_JWKS_INVALID';
          }
        }]);

        return JWKSInvalid;
      }(JOSEError);

      var JWKSNoMatchingKey = /*#__PURE__*/function (_JOSEError11) {
        _inherits(JWKSNoMatchingKey, _JOSEError11);

        var _super14 = _createSuper(JWKSNoMatchingKey);

        function JWKSNoMatchingKey() {
          var _this14;

          _classCallCheck(this, JWKSNoMatchingKey);

          _this14 = _super14.apply(this, arguments);
          _this14.code = 'ERR_JWKS_NO_MATCHING_KEY';
          _this14.message = 'no applicable key found in the JSON Web Key Set';
          return _this14;
        }

        _createClass(JWKSNoMatchingKey, null, [{
          key: "code",
          get: function get() {
            return 'ERR_JWKS_NO_MATCHING_KEY';
          }
        }]);

        return JWKSNoMatchingKey;
      }(JOSEError);

      var JWKSMultipleMatchingKeys = /*#__PURE__*/function (_JOSEError12) {
        _inherits(JWKSMultipleMatchingKeys, _JOSEError12);

        var _super15 = _createSuper(JWKSMultipleMatchingKeys);

        function JWKSMultipleMatchingKeys() {
          var _this15;

          _classCallCheck(this, JWKSMultipleMatchingKeys);

          _this15 = _super15.apply(this, arguments);
          _this15.code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
          _this15.message = 'multiple matching keys found in the JSON Web Key Set';
          return _this15;
        }

        _createClass(JWKSMultipleMatchingKeys, null, [{
          key: "code",
          get: function get() {
            return 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
          }
        }]);

        return JWKSMultipleMatchingKeys;
      }(JOSEError);

      var JWKSTimeout = /*#__PURE__*/function (_JOSEError13) {
        _inherits(JWKSTimeout, _JOSEError13);

        var _super16 = _createSuper(JWKSTimeout);

        function JWKSTimeout() {
          var _this16;

          _classCallCheck(this, JWKSTimeout);

          _this16 = _super16.apply(this, arguments);
          _this16.code = 'ERR_JWKS_TIMEOUT';
          _this16.message = 'request timed out';
          return _this16;
        }

        _createClass(JWKSTimeout, null, [{
          key: "code",
          get: function get() {
            return 'ERR_JWKS_TIMEOUT';
          }
        }]);

        return JWKSTimeout;
      }(JOSEError);

      var JWSSignatureVerificationFailed = /*#__PURE__*/function (_JOSEError14) {
        _inherits(JWSSignatureVerificationFailed, _JOSEError14);

        var _super17 = _createSuper(JWSSignatureVerificationFailed);

        function JWSSignatureVerificationFailed() {
          var _this17;

          _classCallCheck(this, JWSSignatureVerificationFailed);

          _this17 = _super17.apply(this, arguments);
          _this17.code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
          _this17.message = 'signature verification failed';
          return _this17;
        }

        _createClass(JWSSignatureVerificationFailed, null, [{
          key: "code",
          get: function get() {
            return 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
          }
        }]);

        return JWSSignatureVerificationFailed;
      }(JOSEError);
      /***/

    },

    /***/
    "WR06": function WR06(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "encrypt", function () {
        return encrypt;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decrypt", function () {
        return decrypt;
      });
      /* harmony import */


      var _subtle_rsaes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./subtle_rsaes.js */
      "HFAi");
      /* harmony import */


      var _bogus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bogus.js */
      "tj0O");
      /* harmony import */


      var _webcrypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./webcrypto.js */
      "hqmz");
      /* harmony import */


      var _lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../lib/crypto_key.js */
      "D3C9");
      /* harmony import */


      var _check_key_length_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./check_key_length.js */
      "hKMt");
      /* harmony import */


      var _lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../lib/invalid_key_input.js */
      "wZa+");
      /* harmony import */


      var _is_key_like_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./is_key_like.js */
      "H/EN");

      var encrypt = /*#__PURE__*/function () {
        var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee37(alg, key, cek) {
          var _webcrypto_js__WEBPAC5, cryptoKeyCek;

          return regeneratorRuntime.wrap(function _callee37$(_context37) {
            while (1) {
              switch (_context37.prev = _context37.next) {
                case 0:
                  if (Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_2__["isCryptoKey"])(key)) {
                    _context37.next = 2;
                    break;
                  }

                  throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_5__["default"]).apply(void 0, [key].concat(_toConsumableArray(_is_key_like_js__WEBPACK_IMPORTED_MODULE_6__["types"]))));

                case 2:
                  Object(_lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_3__["checkEncCryptoKey"])(key, alg, 'encrypt', 'wrapKey');
                  Object(_check_key_length_js__WEBPACK_IMPORTED_MODULE_4__["default"])(alg, key);

                  if (!key.usages.includes('encrypt')) {
                    _context37.next = 10;
                    break;
                  }

                  _context37.t0 = Uint8Array;
                  _context37.next = 8;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_2__["default"].subtle.encrypt(Object(_subtle_rsaes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(alg), key, cek);

                case 8:
                  _context37.t1 = _context37.sent;
                  return _context37.abrupt("return", new _context37.t0(_context37.t1));

                case 10:
                  if (!key.usages.includes('wrapKey')) {
                    _context37.next = 19;
                    break;
                  }

                  _context37.next = 13;
                  return (_webcrypto_js__WEBPAC5 = _webcrypto_js__WEBPACK_IMPORTED_MODULE_2__["default"].subtle).importKey.apply(_webcrypto_js__WEBPAC5, ['raw', cek].concat(_toConsumableArray(_bogus_js__WEBPACK_IMPORTED_MODULE_1__["default"])));

                case 13:
                  cryptoKeyCek = _context37.sent;
                  _context37.t2 = Uint8Array;
                  _context37.next = 17;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_2__["default"].subtle.wrapKey('raw', cryptoKeyCek, key, Object(_subtle_rsaes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(alg));

                case 17:
                  _context37.t3 = _context37.sent;
                  return _context37.abrupt("return", new _context37.t2(_context37.t3));

                case 19:
                  throw new TypeError('RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation');

                case 20:
                case "end":
                  return _context37.stop();
              }
            }
          }, _callee37);
        }));

        return function encrypt(_x95, _x96, _x97) {
          return _ref14.apply(this, arguments);
        };
      }();

      var decrypt = /*#__PURE__*/function () {
        var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee38(alg, key, encryptedKey) {
          var _webcrypto_js__WEBPAC6, cryptoKeyCek;

          return regeneratorRuntime.wrap(function _callee38$(_context38) {
            while (1) {
              switch (_context38.prev = _context38.next) {
                case 0:
                  if (Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_2__["isCryptoKey"])(key)) {
                    _context38.next = 2;
                    break;
                  }

                  throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_5__["default"]).apply(void 0, [key].concat(_toConsumableArray(_is_key_like_js__WEBPACK_IMPORTED_MODULE_6__["types"]))));

                case 2:
                  Object(_lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_3__["checkEncCryptoKey"])(key, alg, 'decrypt', 'unwrapKey');
                  Object(_check_key_length_js__WEBPACK_IMPORTED_MODULE_4__["default"])(alg, key);

                  if (!key.usages.includes('decrypt')) {
                    _context38.next = 10;
                    break;
                  }

                  _context38.t0 = Uint8Array;
                  _context38.next = 8;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_2__["default"].subtle.decrypt(Object(_subtle_rsaes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(alg), key, encryptedKey);

                case 8:
                  _context38.t1 = _context38.sent;
                  return _context38.abrupt("return", new _context38.t0(_context38.t1));

                case 10:
                  if (!key.usages.includes('unwrapKey')) {
                    _context38.next = 19;
                    break;
                  }

                  _context38.next = 13;
                  return (_webcrypto_js__WEBPAC6 = _webcrypto_js__WEBPACK_IMPORTED_MODULE_2__["default"].subtle).unwrapKey.apply(_webcrypto_js__WEBPAC6, ['raw', encryptedKey, key, Object(_subtle_rsaes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(alg)].concat(_toConsumableArray(_bogus_js__WEBPACK_IMPORTED_MODULE_1__["default"])));

                case 13:
                  cryptoKeyCek = _context38.sent;
                  _context38.t2 = Uint8Array;
                  _context38.next = 17;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_2__["default"].subtle.exportKey('raw', cryptoKeyCek);

                case 17:
                  _context38.t3 = _context38.sent;
                  return _context38.abrupt("return", new _context38.t2(_context38.t3));

                case 19:
                  throw new TypeError('RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation');

                case 20:
                case "end":
                  return _context38.stop();
              }
            }
          }, _callee38);
        }));

        return function decrypt(_x98, _x99, _x100) {
          return _ref15.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "WYAk": function WYAk(module, exports, __webpack_require__) {
      ;

      (function (root, factory) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"));
        } else {}
      })(this, function (CryptoJS) {
        (function () {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var Base = C_lib.Base;
          var C_enc = C.enc;
          var Utf8 = C_enc.Utf8;
          var C_algo = C.algo;
          /**
           * HMAC algorithm.
           */

          var HMAC = C_algo.HMAC = Base.extend({
            /**
             * Initializes a newly created HMAC.
             *
             * @param {Hasher} hasher The hash algorithm to use.
             * @param {WordArray|string} key The secret key.
             *
             * @example
             *
             *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
             */
            init: function init(hasher, key) {
              // Init hasher
              hasher = this._hasher = new hasher.init(); // Convert string to WordArray, else assume WordArray already

              if (typeof key == 'string') {
                key = Utf8.parse(key);
              } // Shortcuts


              var hasherBlockSize = hasher.blockSize;
              var hasherBlockSizeBytes = hasherBlockSize * 4; // Allow arbitrary length keys

              if (key.sigBytes > hasherBlockSizeBytes) {
                key = hasher.finalize(key);
              } // Clamp excess bits


              key.clamp(); // Clone key for inner and outer pads

              var oKey = this._oKey = key.clone();
              var iKey = this._iKey = key.clone(); // Shortcuts

              var oKeyWords = oKey.words;
              var iKeyWords = iKey.words; // XOR keys with pad constants

              for (var i = 0; i < hasherBlockSize; i++) {
                oKeyWords[i] ^= 0x5c5c5c5c;
                iKeyWords[i] ^= 0x36363636;
              }

              oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes; // Set initial values

              this.reset();
            },

            /**
             * Resets this HMAC to its initial state.
             *
             * @example
             *
             *     hmacHasher.reset();
             */
            reset: function reset() {
              // Shortcut
              var hasher = this._hasher; // Reset

              hasher.reset();
              hasher.update(this._iKey);
            },

            /**
             * Updates this HMAC with a message.
             *
             * @param {WordArray|string} messageUpdate The message to append.
             *
             * @return {HMAC} This HMAC instance.
             *
             * @example
             *
             *     hmacHasher.update('message');
             *     hmacHasher.update(wordArray);
             */
            update: function update(messageUpdate) {
              this._hasher.update(messageUpdate); // Chainable


              return this;
            },

            /**
             * Finalizes the HMAC computation.
             * Note that the finalize operation is effectively a destructive, read-once operation.
             *
             * @param {WordArray|string} messageUpdate (Optional) A final message update.
             *
             * @return {WordArray} The HMAC.
             *
             * @example
             *
             *     var hmac = hmacHasher.finalize();
             *     var hmac = hmacHasher.finalize('message');
             *     var hmac = hmacHasher.finalize(wordArray);
             */
            finalize: function finalize(messageUpdate) {
              // Shortcut
              var hasher = this._hasher; // Compute HMAC

              var innerHash = hasher.finalize(messageUpdate);
              hasher.reset();
              var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
              return hmac;
            }
          });
        })();
      });
      /***/

    },

    /***/
    "WcN3": function WcN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n\n  <login-login-lib\n    toolbarTitle=\"Agentifai\"\n    usernameLabel=\"ID Number\" \n    passwordLabel=\"Access Code\" \n    [intents]=\"intents\"\n    [endpoints]=\"endpoints\"\n    (endpoint)=\"endpoint($event)\"\n    (removeConsents)=\"removeVoiceConsent()\"\n    (login)=\"login($event)\"\n    (fakeTokenLogin)=\"fakeTokenLogin($event)\"\n    (logout)=\"logout()\"\n    (initialize)=\"initializeAction()\"\n    (registerUser)=\"registerUser($event)\"\n    (unregisterUser)=\"unregisterUser()\"\n    (setWidgetDimensions)=\"setWidgetDimensionsAction()\"\n    (openApp)=\"showAppAction()\"\n    (showWidget)=\"showWidgetAction()\"\n    (hideWidget)=\"hideWidgetAction()\"\n    (openIntent)=\"openIntent($event)\">\n  </login-login-lib>\n\n  <div class=\"ion-padding\">\n    <ion-button (click)=\"showNewPage()\">\n      Show New Page\n    </ion-button>\n  \n    <ion-button (click)=\"showFingerprint()\">\n      Show Fingerprint\n    </ion-button>\n  </div>\n\n  <div class=\"ion-padding\" *ngIf=\"assistantConfigsEnabled\"> \n    <ion-item>\n      <ion-label position=\"floating\">Api Url</ion-label>\n      <ion-input inputmode=\"text\" [(ngModel)]=\"apiUrl\" id=\"apiUrl\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Tenant Id</ion-label>\n      <ion-input inputmode=\"text\" [(ngModel)]=\"tenantId\" id=\"tenantId\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Channel Id</ion-label>\n      <ion-input inputmode=\"text\" [(ngModel)]=\"channelId\" id=\"channelId\"></ion-input>\n    </ion-item>\n    <ion-button (click)=\"setupNewTenant()\">\n      Setup New Tenant\n    </ion-button>\n    <ion-button (click)=\"resetDefaultTenant()\">\n      Reset Default Tenant\n    </ion-button>\n  </div>\n\n  <div class=\"ion-padding\">\n    <ion-item>\n      <ion-label>Theme</ion-label>\n      <ion-select okText=\"confirm\" cancelText=\"cancel\" [(ngModel)]=\"themeSelected\" (ionChange)=\"setTheme(themeSelected)\">\n        <ion-select-option *ngFor=\"let theme of themes\" value=\"{{theme}}\">{{theme}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </div>\n\n</ion-content>\n\n\n\n";
      /***/
    },

    /***/
    "Wcb1": function Wcb1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProduceJWT", function () {
        return ProduceJWT;
      });
      /* harmony import */


      var _lib_epoch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../lib/epoch.js */
      "7SCF");
      /* harmony import */


      var _lib_is_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../lib/is_object.js */
      "2fVw");
      /* harmony import */


      var _lib_secs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../lib/secs.js */
      "Sblm");

      var ProduceJWT = /*#__PURE__*/function () {
        function ProduceJWT(payload) {
          _classCallCheck(this, ProduceJWT);

          if (!Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_1__["default"])(payload)) {
            throw new TypeError('JWT Claims Set MUST be an object');
          }

          this._payload = payload;
        }

        _createClass(ProduceJWT, [{
          key: "setIssuer",
          value: function setIssuer(issuer) {
            this._payload = _objectSpread(_objectSpread({}, this._payload), {}, {
              iss: issuer
            });
            return this;
          }
        }, {
          key: "setSubject",
          value: function setSubject(subject) {
            this._payload = _objectSpread(_objectSpread({}, this._payload), {}, {
              sub: subject
            });
            return this;
          }
        }, {
          key: "setAudience",
          value: function setAudience(audience) {
            this._payload = _objectSpread(_objectSpread({}, this._payload), {}, {
              aud: audience
            });
            return this;
          }
        }, {
          key: "setJti",
          value: function setJti(jwtId) {
            this._payload = _objectSpread(_objectSpread({}, this._payload), {}, {
              jti: jwtId
            });
            return this;
          }
        }, {
          key: "setNotBefore",
          value: function setNotBefore(input) {
            if (typeof input === 'number') {
              this._payload = _objectSpread(_objectSpread({}, this._payload), {}, {
                nbf: input
              });
            } else {
              this._payload = _objectSpread(_objectSpread({}, this._payload), {}, {
                nbf: Object(_lib_epoch_js__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date()) + Object(_lib_secs_js__WEBPACK_IMPORTED_MODULE_2__["default"])(input)
              });
            }

            return this;
          }
        }, {
          key: "setExpirationTime",
          value: function setExpirationTime(input) {
            if (typeof input === 'number') {
              this._payload = _objectSpread(_objectSpread({}, this._payload), {}, {
                exp: input
              });
            } else {
              this._payload = _objectSpread(_objectSpread({}, this._payload), {}, {
                exp: Object(_lib_epoch_js__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date()) + Object(_lib_secs_js__WEBPACK_IMPORTED_MODULE_2__["default"])(input)
              });
            }

            return this;
          }
        }, {
          key: "setIssuedAt",
          value: function setIssuedAt(input) {
            if (typeof input === 'undefined') {
              this._payload = _objectSpread(_objectSpread({}, this._payload), {}, {
                iat: Object(_lib_epoch_js__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date())
              });
            } else {
              this._payload = _objectSpread(_objectSpread({}, this._payload), {}, {
                iat: input
              });
            }

            return this;
          }
        }]);

        return ProduceJWT;
      }();
      /***/

    },

    /***/
    "aAVB": function aAVB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "wrap", function () {
        return wrap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unwrap", function () {
        return unwrap;
      });
      /* harmony import */


      var _runtime_encrypt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../runtime/encrypt.js */
      "Ninj");
      /* harmony import */


      var _runtime_decrypt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../runtime/decrypt.js */
      "v9/r");
      /* harmony import */


      var _iv_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./iv.js */
      "spAk");
      /* harmony import */


      var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../runtime/base64url.js */
      "KjJ5");

      function wrap(_x101, _x102, _x103, _x104) {
        return _wrap.apply(this, arguments);
      }

      function _wrap() {
        _wrap = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee39(alg, key, cek, iv) {
          var jweAlgorithm, _yield$Object8, encryptedKey, tag;

          return regeneratorRuntime.wrap(function _callee39$(_context39) {
            while (1) {
              switch (_context39.prev = _context39.next) {
                case 0:
                  jweAlgorithm = alg.slice(0, 7);
                  iv || (iv = Object(_iv_js__WEBPACK_IMPORTED_MODULE_2__["default"])(jweAlgorithm));
                  _context39.next = 4;
                  return Object(_runtime_encrypt_js__WEBPACK_IMPORTED_MODULE_0__["default"])(jweAlgorithm, cek, key, iv, new Uint8Array(0));

                case 4:
                  _yield$Object8 = _context39.sent;
                  encryptedKey = _yield$Object8.ciphertext;
                  tag = _yield$Object8.tag;
                  return _context39.abrupt("return", {
                    encryptedKey: encryptedKey,
                    iv: Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_3__["encode"])(iv),
                    tag: Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_3__["encode"])(tag)
                  });

                case 8:
                case "end":
                  return _context39.stop();
              }
            }
          }, _callee39);
        }));
        return _wrap.apply(this, arguments);
      }

      function unwrap(_x105, _x106, _x107, _x108, _x109) {
        return _unwrap.apply(this, arguments);
      }
      /***/


      function _unwrap() {
        _unwrap = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee40(alg, key, encryptedKey, iv, tag) {
          var jweAlgorithm;
          return regeneratorRuntime.wrap(function _callee40$(_context40) {
            while (1) {
              switch (_context40.prev = _context40.next) {
                case 0:
                  jweAlgorithm = alg.slice(0, 7);
                  return _context40.abrupt("return", Object(_runtime_decrypt_js__WEBPACK_IMPORTED_MODULE_1__["default"])(jweAlgorithm, key, encryptedKey, iv, tag, new Uint8Array(0)));

                case 2:
                case "end":
                  return _context40.stop();
              }
            }
          }, _callee40);
        }));
        return _unwrap.apply(this, arguments);
      }
    },

    /***/
    "aMKJ": function aMKJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = function (b64, descriptor) {
        var newlined = (b64.match(/.{1,64}/g) || []).join('\n');
        return "-----BEGIN ".concat(descriptor, "-----\n").concat(newlined, "\n-----END ").concat(descriptor, "-----");
      };
      /***/

    },

    /***/
    "aaL6": function aaL6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generalDecrypt", function () {
        return generalDecrypt;
      });
      /* harmony import */


      var _flattened_decrypt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../flattened/decrypt.js */
      "xHgm");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../util/errors.js */
      "StPg");
      /* harmony import */


      var _lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../lib/is_object.js */
      "2fVw");

      function generalDecrypt(_x110, _x111, _x112) {
        return _generalDecrypt.apply(this, arguments);
      }
      /***/


      function _generalDecrypt() {
        _generalDecrypt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee41(jwe, key, options) {
          var _iterator3, _step3, recipient;

          return regeneratorRuntime.wrap(function _callee41$(_context41) {
            while (1) {
              switch (_context41.prev = _context41.next) {
                case 0:
                  if (Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__["default"])(jwe)) {
                    _context41.next = 2;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('General JWE must be an object');

                case 2:
                  if (!(!Array.isArray(jwe.recipients) || !jwe.recipients.every(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__["default"]))) {
                    _context41.next = 4;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('JWE Recipients missing or incorrect type');

                case 4:
                  if (jwe.recipients.length) {
                    _context41.next = 6;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('JWE Recipients has no members');

                case 6:
                  _iterator3 = _createForOfIteratorHelper(jwe.recipients);
                  _context41.prev = 7;

                  _iterator3.s();

                case 9:
                  if ((_step3 = _iterator3.n()).done) {
                    _context41.next = 21;
                    break;
                  }

                  recipient = _step3.value;
                  _context41.prev = 11;
                  _context41.next = 14;
                  return Object(_flattened_decrypt_js__WEBPACK_IMPORTED_MODULE_0__["flattenedDecrypt"])({
                    aad: jwe.aad,
                    ciphertext: jwe.ciphertext,
                    encrypted_key: recipient.encrypted_key,
                    header: recipient.header,
                    iv: jwe.iv,
                    "protected": jwe["protected"],
                    tag: jwe.tag,
                    unprotected: jwe.unprotected
                  }, key, options);

                case 14:
                  return _context41.abrupt("return", _context41.sent);

                case 17:
                  _context41.prev = 17;
                  _context41.t0 = _context41["catch"](11);

                case 19:
                  _context41.next = 9;
                  break;

                case 21:
                  _context41.next = 26;
                  break;

                case 23:
                  _context41.prev = 23;
                  _context41.t1 = _context41["catch"](7);

                  _iterator3.e(_context41.t1);

                case 26:
                  _context41.prev = 26;

                  _iterator3.f();

                  return _context41.finish(26);

                case 29:
                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEDecryptionFailed"]();

                case 30:
                case "end":
                  return _context41.stop();
              }
            }
          }, _callee41, null, [[7, 23, 26, 29], [11, 17]]);
        }));
        return _generalDecrypt.apply(this, arguments);
      }
    },

    /***/
    "bQjk": function bQjk(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./cipher-core */
          "OLod"));
        } else {}
      })(this, function (CryptoJS) {
        (function (undefined) {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var CipherParams = C_lib.CipherParams;
          var C_enc = C.enc;
          var Hex = C_enc.Hex;
          var C_format = C.format;
          var HexFormatter = C_format.Hex = {
            /**
             * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
             *
             * @param {CipherParams} cipherParams The cipher params object.
             *
             * @return {string} The hexadecimally encoded string.
             *
             * @static
             *
             * @example
             *
             *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
             */
            stringify: function stringify(cipherParams) {
              return cipherParams.ciphertext.toString(Hex);
            },

            /**
             * Converts a hexadecimally encoded ciphertext string to a cipher params object.
             *
             * @param {string} input The hexadecimally encoded string.
             *
             * @return {CipherParams} The cipher params object.
             *
             * @static
             *
             * @example
             *
             *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
             */
            parse: function parse(input) {
              var ciphertext = Hex.parse(input);
              return CipherParams.create({
                ciphertext: ciphertext
              });
            }
          };
        })();

        return CryptoJS.format.Hex;
      });
      /***/

    },

    /***/
    "c9hL": function c9hL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EncryptJWT", function () {
        return EncryptJWT;
      });
      /* harmony import */


      var _jwe_compact_encrypt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../jwe/compact/encrypt.js */
      "xwey");
      /* harmony import */


      var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../lib/buffer_utils.js */
      "xpfA");
      /* harmony import */


      var _produce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./produce.js */
      "Wcb1");

      var EncryptJWT = /*#__PURE__*/function (_produce_js__WEBPACK_2) {
        _inherits(EncryptJWT, _produce_js__WEBPACK_2);

        var _super18 = _createSuper(EncryptJWT);

        function EncryptJWT() {
          _classCallCheck(this, EncryptJWT);

          return _super18.apply(this, arguments);
        }

        _createClass(EncryptJWT, [{
          key: "setProtectedHeader",
          value: function setProtectedHeader(protectedHeader) {
            if (this._protectedHeader) {
              throw new TypeError('setProtectedHeader can only be called once');
            }

            this._protectedHeader = protectedHeader;
            return this;
          }
        }, {
          key: "setKeyManagementParameters",
          value: function setKeyManagementParameters(parameters) {
            if (this._keyManagementParameters) {
              throw new TypeError('setKeyManagementParameters can only be called once');
            }

            this._keyManagementParameters = parameters;
            return this;
          }
        }, {
          key: "setContentEncryptionKey",
          value: function setContentEncryptionKey(cek) {
            if (this._cek) {
              throw new TypeError('setContentEncryptionKey can only be called once');
            }

            this._cek = cek;
            return this;
          }
        }, {
          key: "setInitializationVector",
          value: function setInitializationVector(iv) {
            if (this._iv) {
              throw new TypeError('setInitializationVector can only be called once');
            }

            this._iv = iv;
            return this;
          }
        }, {
          key: "replicateIssuerAsHeader",
          value: function replicateIssuerAsHeader() {
            this._replicateIssuerAsHeader = true;
            return this;
          }
        }, {
          key: "replicateSubjectAsHeader",
          value: function replicateSubjectAsHeader() {
            this._replicateSubjectAsHeader = true;
            return this;
          }
        }, {
          key: "replicateAudienceAsHeader",
          value: function replicateAudienceAsHeader() {
            this._replicateAudienceAsHeader = true;
            return this;
          }
        }, {
          key: "encrypt",
          value: function () {
            var _encrypt3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee42(key, options) {
              var enc;
              return regeneratorRuntime.wrap(function _callee42$(_context42) {
                while (1) {
                  switch (_context42.prev = _context42.next) {
                    case 0:
                      enc = new _jwe_compact_encrypt_js__WEBPACK_IMPORTED_MODULE_0__["CompactEncrypt"](_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__["encoder"].encode(JSON.stringify(this._payload)));

                      if (this._replicateIssuerAsHeader) {
                        this._protectedHeader = _objectSpread(_objectSpread({}, this._protectedHeader), {}, {
                          iss: this._payload.iss
                        });
                      }

                      if (this._replicateSubjectAsHeader) {
                        this._protectedHeader = _objectSpread(_objectSpread({}, this._protectedHeader), {}, {
                          sub: this._payload.sub
                        });
                      }

                      if (this._replicateAudienceAsHeader) {
                        this._protectedHeader = _objectSpread(_objectSpread({}, this._protectedHeader), {}, {
                          aud: this._payload.aud
                        });
                      }

                      enc.setProtectedHeader(this._protectedHeader);

                      if (this._iv) {
                        enc.setInitializationVector(this._iv);
                      }

                      if (this._cek) {
                        enc.setContentEncryptionKey(this._cek);
                      }

                      if (this._keyManagementParameters) {
                        enc.setKeyManagementParameters(this._keyManagementParameters);
                      }

                      return _context42.abrupt("return", enc.encrypt(key, options));

                    case 9:
                    case "end":
                      return _context42.stop();
                  }
                }
              }, _callee42, this);
            }));

            function encrypt(_x113, _x114) {
              return _encrypt3.apply(this, arguments);
            }

            return encrypt;
          }()
        }]);

        return EncryptJWT;
      }(_produce_js__WEBPACK_IMPORTED_MODULE_2__["ProduceJWT"]);
      /***/

    },

    /***/
    "ceW5": function ceW5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _invalid_key_input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./invalid_key_input.js */
      "wZa+");
      /* harmony import */


      var _runtime_is_key_like_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../runtime/is_key_like.js */
      "H/EN");

      var symmetricTypeCheck = function symmetricTypeCheck(key) {
        if (key instanceof Uint8Array) return;

        if (!Object(_runtime_is_key_like_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key)) {
          throw new TypeError(Object(_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_0__["default"]).apply(void 0, [key].concat(_toConsumableArray(_runtime_is_key_like_js__WEBPACK_IMPORTED_MODULE_1__["types"]), ['Uint8Array'])));
        }

        if (key.type !== 'secret') {
          throw new TypeError("".concat(_runtime_is_key_like_js__WEBPACK_IMPORTED_MODULE_1__["types"].join(' or '), " instances for symmetric algorithms must be of type \"secret\""));
        }
      };

      var asymmetricTypeCheck = function asymmetricTypeCheck(key, usage) {
        if (!Object(_runtime_is_key_like_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key)) {
          throw new TypeError(Object(_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_0__["default"]).apply(void 0, [key].concat(_toConsumableArray(_runtime_is_key_like_js__WEBPACK_IMPORTED_MODULE_1__["types"]))));
        }

        if (key.type === 'secret') {
          throw new TypeError("".concat(_runtime_is_key_like_js__WEBPACK_IMPORTED_MODULE_1__["types"].join(' or '), " instances for asymmetric algorithms must not be of type \"secret\""));
        }

        if (usage === 'sign' && key.type === 'public') {
          throw new TypeError("".concat(_runtime_is_key_like_js__WEBPACK_IMPORTED_MODULE_1__["types"].join(' or '), " instances for asymmetric algorithm signing must be of type \"private\""));
        }

        if (usage === 'decrypt' && key.type === 'public') {
          throw new TypeError("".concat(_runtime_is_key_like_js__WEBPACK_IMPORTED_MODULE_1__["types"].join(' or '), " instances for asymmetric algorithm decryption must be of type \"private\""));
        }

        if (key.algorithm && usage === 'verify' && key.type === 'private') {
          throw new TypeError("".concat(_runtime_is_key_like_js__WEBPACK_IMPORTED_MODULE_1__["types"].join(' or '), " instances for asymmetric algorithm verifying must be of type \"public\""));
        }

        if (key.algorithm && usage === 'encrypt' && key.type === 'private') {
          throw new TypeError("".concat(_runtime_is_key_like_js__WEBPACK_IMPORTED_MODULE_1__["types"].join(' or '), " instances for asymmetric algorithm encryption must be of type \"public\""));
        }
      };

      var checkKeyType = function checkKeyType(alg, key, usage) {
        var symmetric = alg.startsWith('HS') || alg === 'dir' || alg.startsWith('PBES2') || /^A\d{3}(?:GCM)?KW$/.test(alg);

        if (symmetric) {
          symmetricTypeCheck(key);
        } else {
          asymmetricTypeCheck(key, usage);
        }
      };
      /* harmony default export */


      __webpack_exports__["default"] = checkKeyType;
      /***/
    },

    /***/
    "ct+p": function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "A3+G");
      /* harmony import */


      var login_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! login-lib */
      "3Qup");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"], login_lib__WEBPACK_IMPORTED_MODULE_7__["LoginLibModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "cv67": function cv67(module, exports, __webpack_require__) {
      ;

      (function (root, factory) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"));
        } else {}
      })(this, function (CryptoJS) {
        (function (Math) {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var Hasher = C_lib.Hasher;
          var C_algo = C.algo; // Constants table

          var T = []; // Compute constants

          (function () {
            for (var i = 0; i < 64; i++) {
              T[i] = Math.abs(Math.sin(i + 1)) * 0x100000000 | 0;
            }
          })();
          /**
           * MD5 hash algorithm.
           */


          var MD5 = C_algo.MD5 = Hasher.extend({
            _doReset: function _doReset() {
              this._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);
            },
            _doProcessBlock: function _doProcessBlock(M, offset) {
              // Swap endian
              for (var i = 0; i < 16; i++) {
                // Shortcuts
                var offset_i = offset + i;
                var M_offset_i = M[offset_i];
                M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff | (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;
              } // Shortcuts


              var H = this._hash.words;
              var M_offset_0 = M[offset + 0];
              var M_offset_1 = M[offset + 1];
              var M_offset_2 = M[offset + 2];
              var M_offset_3 = M[offset + 3];
              var M_offset_4 = M[offset + 4];
              var M_offset_5 = M[offset + 5];
              var M_offset_6 = M[offset + 6];
              var M_offset_7 = M[offset + 7];
              var M_offset_8 = M[offset + 8];
              var M_offset_9 = M[offset + 9];
              var M_offset_10 = M[offset + 10];
              var M_offset_11 = M[offset + 11];
              var M_offset_12 = M[offset + 12];
              var M_offset_13 = M[offset + 13];
              var M_offset_14 = M[offset + 14];
              var M_offset_15 = M[offset + 15]; // Working varialbes

              var a = H[0];
              var b = H[1];
              var c = H[2];
              var d = H[3]; // Computation

              a = FF(a, b, c, d, M_offset_0, 7, T[0]);
              d = FF(d, a, b, c, M_offset_1, 12, T[1]);
              c = FF(c, d, a, b, M_offset_2, 17, T[2]);
              b = FF(b, c, d, a, M_offset_3, 22, T[3]);
              a = FF(a, b, c, d, M_offset_4, 7, T[4]);
              d = FF(d, a, b, c, M_offset_5, 12, T[5]);
              c = FF(c, d, a, b, M_offset_6, 17, T[6]);
              b = FF(b, c, d, a, M_offset_7, 22, T[7]);
              a = FF(a, b, c, d, M_offset_8, 7, T[8]);
              d = FF(d, a, b, c, M_offset_9, 12, T[9]);
              c = FF(c, d, a, b, M_offset_10, 17, T[10]);
              b = FF(b, c, d, a, M_offset_11, 22, T[11]);
              a = FF(a, b, c, d, M_offset_12, 7, T[12]);
              d = FF(d, a, b, c, M_offset_13, 12, T[13]);
              c = FF(c, d, a, b, M_offset_14, 17, T[14]);
              b = FF(b, c, d, a, M_offset_15, 22, T[15]);
              a = GG(a, b, c, d, M_offset_1, 5, T[16]);
              d = GG(d, a, b, c, M_offset_6, 9, T[17]);
              c = GG(c, d, a, b, M_offset_11, 14, T[18]);
              b = GG(b, c, d, a, M_offset_0, 20, T[19]);
              a = GG(a, b, c, d, M_offset_5, 5, T[20]);
              d = GG(d, a, b, c, M_offset_10, 9, T[21]);
              c = GG(c, d, a, b, M_offset_15, 14, T[22]);
              b = GG(b, c, d, a, M_offset_4, 20, T[23]);
              a = GG(a, b, c, d, M_offset_9, 5, T[24]);
              d = GG(d, a, b, c, M_offset_14, 9, T[25]);
              c = GG(c, d, a, b, M_offset_3, 14, T[26]);
              b = GG(b, c, d, a, M_offset_8, 20, T[27]);
              a = GG(a, b, c, d, M_offset_13, 5, T[28]);
              d = GG(d, a, b, c, M_offset_2, 9, T[29]);
              c = GG(c, d, a, b, M_offset_7, 14, T[30]);
              b = GG(b, c, d, a, M_offset_12, 20, T[31]);
              a = HH(a, b, c, d, M_offset_5, 4, T[32]);
              d = HH(d, a, b, c, M_offset_8, 11, T[33]);
              c = HH(c, d, a, b, M_offset_11, 16, T[34]);
              b = HH(b, c, d, a, M_offset_14, 23, T[35]);
              a = HH(a, b, c, d, M_offset_1, 4, T[36]);
              d = HH(d, a, b, c, M_offset_4, 11, T[37]);
              c = HH(c, d, a, b, M_offset_7, 16, T[38]);
              b = HH(b, c, d, a, M_offset_10, 23, T[39]);
              a = HH(a, b, c, d, M_offset_13, 4, T[40]);
              d = HH(d, a, b, c, M_offset_0, 11, T[41]);
              c = HH(c, d, a, b, M_offset_3, 16, T[42]);
              b = HH(b, c, d, a, M_offset_6, 23, T[43]);
              a = HH(a, b, c, d, M_offset_9, 4, T[44]);
              d = HH(d, a, b, c, M_offset_12, 11, T[45]);
              c = HH(c, d, a, b, M_offset_15, 16, T[46]);
              b = HH(b, c, d, a, M_offset_2, 23, T[47]);
              a = II(a, b, c, d, M_offset_0, 6, T[48]);
              d = II(d, a, b, c, M_offset_7, 10, T[49]);
              c = II(c, d, a, b, M_offset_14, 15, T[50]);
              b = II(b, c, d, a, M_offset_5, 21, T[51]);
              a = II(a, b, c, d, M_offset_12, 6, T[52]);
              d = II(d, a, b, c, M_offset_3, 10, T[53]);
              c = II(c, d, a, b, M_offset_10, 15, T[54]);
              b = II(b, c, d, a, M_offset_1, 21, T[55]);
              a = II(a, b, c, d, M_offset_8, 6, T[56]);
              d = II(d, a, b, c, M_offset_15, 10, T[57]);
              c = II(c, d, a, b, M_offset_6, 15, T[58]);
              b = II(b, c, d, a, M_offset_13, 21, T[59]);
              a = II(a, b, c, d, M_offset_4, 6, T[60]);
              d = II(d, a, b, c, M_offset_11, 10, T[61]);
              c = II(c, d, a, b, M_offset_2, 15, T[62]);
              b = II(b, c, d, a, M_offset_9, 21, T[63]); // Intermediate hash value

              H[0] = H[0] + a | 0;
              H[1] = H[1] + b | 0;
              H[2] = H[2] + c | 0;
              H[3] = H[3] + d | 0;
            },
            _doFinalize: function _doFinalize() {
              // Shortcuts
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8; // Add padding

              dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
              var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
              var nBitsTotalL = nBitsTotal;
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 0x00ff00ff | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 0xff00ff00;
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 0x00ff00ff | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 0xff00ff00;
              data.sigBytes = (dataWords.length + 1) * 4; // Hash final blocks

              this._process(); // Shortcuts


              var hash = this._hash;
              var H = hash.words; // Swap endian

              for (var i = 0; i < 4; i++) {
                // Shortcut
                var H_i = H[i];
                H[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff | (H_i << 24 | H_i >>> 8) & 0xff00ff00;
              } // Return final computed hash


              return hash;
            },
            clone: function clone() {
              var clone = Hasher.clone.call(this);
              clone._hash = this._hash.clone();
              return clone;
            }
          });

          function FF(a, b, c, d, x, s, t) {
            var n = a + (b & c | ~b & d) + x + t;
            return (n << s | n >>> 32 - s) + b;
          }

          function GG(a, b, c, d, x, s, t) {
            var n = a + (b & d | c & ~d) + x + t;
            return (n << s | n >>> 32 - s) + b;
          }

          function HH(a, b, c, d, x, s, t) {
            var n = a + (b ^ c ^ d) + x + t;
            return (n << s | n >>> 32 - s) + b;
          }

          function II(a, b, c, d, x, s, t) {
            var n = a + (c ^ (b | ~d)) + x + t;
            return (n << s | n >>> 32 - s) + b;
          }
          /**
           * Shortcut function to the hasher's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           *
           * @return {WordArray} The hash.
           *
           * @static
           *
           * @example
           *
           *     var hash = CryptoJS.MD5('message');
           *     var hash = CryptoJS.MD5(wordArray);
           */


          C.MD5 = Hasher._createHelper(MD5);
          /**
           * Shortcut function to the HMAC's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           * @param {WordArray|string} key The secret key.
           *
           * @return {WordArray} The HMAC.
           *
           * @static
           *
           * @example
           *
           *     var hmac = CryptoJS.HmacMD5(message, key);
           */

          C.HmacMD5 = Hasher._createHmacHelper(MD5);
        })(Math);

        return CryptoJS.MD5;
      });
      /***/

    },

    /***/
    "e4TT": function e4TT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "compactVerify", function () {
        return compactVerify;
      });
      /* harmony import */


      var _flattened_verify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../flattened/verify.js */
      "n8OJ");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../util/errors.js */
      "StPg");
      /* harmony import */


      var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../lib/buffer_utils.js */
      "xpfA");

      function compactVerify(_x115, _x116, _x117) {
        return _compactVerify.apply(this, arguments);
      }
      /***/


      function _compactVerify() {
        _compactVerify = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee43(jws, key, options) {
          var _jws$split, protectedHeader, payload, signature, length, verified, result;

          return regeneratorRuntime.wrap(function _callee43$(_context43) {
            while (1) {
              switch (_context43.prev = _context43.next) {
                case 0:
                  if (jws instanceof Uint8Array) {
                    jws = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_2__["decoder"].decode(jws);
                  }

                  if (!(typeof jws !== 'string')) {
                    _context43.next = 3;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWSInvalid"]('Compact JWS must be a string or Uint8Array');

                case 3:
                  _jws$split = jws.split('.'), protectedHeader = _jws$split[0], payload = _jws$split[1], signature = _jws$split[2], length = _jws$split.length;

                  if (!(length !== 3)) {
                    _context43.next = 6;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWSInvalid"]('Invalid Compact JWS');

                case 6:
                  _context43.next = 8;
                  return Object(_flattened_verify_js__WEBPACK_IMPORTED_MODULE_0__["flattenedVerify"])({
                    payload: payload,
                    "protected": protectedHeader,
                    signature: signature
                  }, key, options);

                case 8:
                  verified = _context43.sent;
                  result = {
                    payload: verified.payload,
                    protectedHeader: verified.protectedHeader
                  };

                  if (!(typeof key === 'function')) {
                    _context43.next = 12;
                    break;
                  }

                  return _context43.abrupt("return", _objectSpread(_objectSpread({}, result), {}, {
                    key: verified.key
                  }));

                case 12:
                  return _context43.abrupt("return", result);

                case 13:
                case "end":
                  return _context43.stop();
              }
            }
          }, _callee43);
        }));
        return _compactVerify.apply(this, arguments);
      }
    },

    /***/
    "e7zE": function e7zE(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./sha1 */
          "3y9D"), __webpack_require__(
          /*! ./hmac */
          "WYAk"));
        } else {}
      })(this, function (CryptoJS) {
        (function () {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var Base = C_lib.Base;
          var WordArray = C_lib.WordArray;
          var C_algo = C.algo;
          var SHA1 = C_algo.SHA1;
          var HMAC = C_algo.HMAC;
          /**
           * Password-Based Key Derivation Function 2 algorithm.
           */

          var PBKDF2 = C_algo.PBKDF2 = Base.extend({
            /**
             * Configuration options.
             *
             * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
             * @property {Hasher} hasher The hasher to use. Default: SHA1
             * @property {number} iterations The number of iterations to perform. Default: 1
             */
            cfg: Base.extend({
              keySize: 128 / 32,
              hasher: SHA1,
              iterations: 1
            }),

            /**
             * Initializes a newly created key derivation function.
             *
             * @param {Object} cfg (Optional) The configuration options to use for the derivation.
             *
             * @example
             *
             *     var kdf = CryptoJS.algo.PBKDF2.create();
             *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
             *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
             */
            init: function init(cfg) {
              this.cfg = this.cfg.extend(cfg);
            },

            /**
             * Computes the Password-Based Key Derivation Function 2.
             *
             * @param {WordArray|string} password The password.
             * @param {WordArray|string} salt A salt.
             *
             * @return {WordArray} The derived key.
             *
             * @example
             *
             *     var key = kdf.compute(password, salt);
             */
            compute: function compute(password, salt) {
              // Shortcut
              var cfg = this.cfg; // Init HMAC

              var hmac = HMAC.create(cfg.hasher, password); // Initial values

              var derivedKey = WordArray.create();
              var blockIndex = WordArray.create([0x00000001]); // Shortcuts

              var derivedKeyWords = derivedKey.words;
              var blockIndexWords = blockIndex.words;
              var keySize = cfg.keySize;
              var iterations = cfg.iterations; // Generate key

              while (derivedKeyWords.length < keySize) {
                var block = hmac.update(salt).finalize(blockIndex);
                hmac.reset(); // Shortcuts

                var blockWords = block.words;
                var blockWordsLength = blockWords.length; // Iterations

                var intermediate = block;

                for (var i = 1; i < iterations; i++) {
                  intermediate = hmac.finalize(intermediate);
                  hmac.reset(); // Shortcut

                  var intermediateWords = intermediate.words; // XOR intermediate with block

                  for (var j = 0; j < blockWordsLength; j++) {
                    blockWords[j] ^= intermediateWords[j];
                  }
                }

                derivedKey.concat(block);
                blockIndexWords[0]++;
              }

              derivedKey.sigBytes = keySize * 4;
              return derivedKey;
            }
          });
          /**
           * Computes the Password-Based Key Derivation Function 2.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           * @param {Object} cfg (Optional) The configuration options to use for this computation.
           *
           * @return {WordArray} The derived key.
           *
           * @static
           *
           * @example
           *
           *     var key = CryptoJS.PBKDF2(password, salt);
           *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
           *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
           */

          C.PBKDF2 = function (password, salt, cfg) {
            return PBKDF2.create(cfg).compute(password, salt);
          };
        })();

        return CryptoJS.PBKDF2;
      });
      /***/

    },

    /***/
    "eNpK": function eNpK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _subtle_dsa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./subtle_dsa.js */
      "D2oy");
      /* harmony import */


      var _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./webcrypto.js */
      "hqmz");
      /* harmony import */


      var _check_key_length_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./check_key_length.js */
      "hKMt");
      /* harmony import */


      var _get_sign_verify_key_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./get_sign_verify_key.js */
      "Rg9p");

      var sign = /*#__PURE__*/function () {
        var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee44(alg, key, data) {
          var cryptoKey, signature;
          return regeneratorRuntime.wrap(function _callee44$(_context44) {
            while (1) {
              switch (_context44.prev = _context44.next) {
                case 0:
                  _context44.next = 2;
                  return Object(_get_sign_verify_key_js__WEBPACK_IMPORTED_MODULE_3__["default"])(alg, key, 'sign');

                case 2:
                  cryptoKey = _context44.sent;
                  Object(_check_key_length_js__WEBPACK_IMPORTED_MODULE_2__["default"])(alg, cryptoKey);
                  _context44.next = 6;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.sign(Object(_subtle_dsa_js__WEBPACK_IMPORTED_MODULE_0__["default"])(alg, cryptoKey.algorithm), cryptoKey, data);

                case 6:
                  signature = _context44.sent;
                  return _context44.abrupt("return", new Uint8Array(signature));

                case 8:
                case "end":
                  return _context44.stop();
              }
            }
          }, _callee44);
        }));

        return function sign(_x118, _x119, _x120) {
          return _ref16.apply(this, arguments);
        };
      }();
      /* harmony default export */


      __webpack_exports__["default"] = sign;
      /***/
    },

    /***/
    "f6od": function f6od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";
      /***/
    },

    /***/
    "g1Po": function g1Po(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");
      /* harmony import */


      var _iv_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./iv.js */
      "spAk");

      var checkIvLength = function checkIvLength(enc, iv) {
        if (iv.length << 3 !== Object(_iv_js__WEBPACK_IMPORTED_MODULE_1__["bitLength"])(enc)) {
          throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWEInvalid"]('Invalid Initialization Vector length');
        }
      };
      /* harmony default export */


      __webpack_exports__["default"] = checkIvLength;
      /***/
    },

    /***/
    "gb/T": function gbT(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./cipher-core */
          "OLod"));
        } else {}
      })(this, function (CryptoJS) {
        /**
         * Electronic Codebook block mode.
         */
        CryptoJS.mode.ECB = function () {
          var ECB = CryptoJS.lib.BlockCipherMode.extend();
          ECB.Encryptor = ECB.extend({
            processBlock: function processBlock(words, offset) {
              this._cipher.encryptBlock(words, offset);
            }
          });
          ECB.Decryptor = ECB.extend({
            processBlock: function processBlock(words, offset) {
              this._cipher.decryptBlock(words, offset);
            }
          });
          return ECB;
        }();

        return CryptoJS.mode.ECB;
      });
      /***/

    },

    /***/
    "hKMt": function hKMt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = function (alg, key) {
        if (alg.startsWith('RS') || alg.startsWith('PS')) {
          var modulusLength = key.algorithm.modulusLength;

          if (typeof modulusLength !== 'number' || modulusLength < 2048) {
            throw new TypeError("".concat(alg, " requires key modulusLength to be 2048 bits or larger"));
          }
        }
      };
      /***/

    },

    /***/
    "hqmz": function hqmz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isCryptoKey", function () {
        return isCryptoKey;
      });
      /* harmony default export */


      __webpack_exports__["default"] = crypto;

      var isCryptoKey = function isCryptoKey(key) {
        return key instanceof CryptoKey;
      };
      /***/

    },

    /***/
    "iEOA": function iEOA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompactSign", function () {
        return CompactSign;
      });
      /* harmony import */


      var _flattened_sign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../flattened/sign.js */
      "4xNZ");

      var CompactSign = /*#__PURE__*/function () {
        function CompactSign(payload) {
          _classCallCheck(this, CompactSign);

          this._flattened = new _flattened_sign_js__WEBPACK_IMPORTED_MODULE_0__["FlattenedSign"](payload);
        }

        _createClass(CompactSign, [{
          key: "setProtectedHeader",
          value: function setProtectedHeader(protectedHeader) {
            this._flattened.setProtectedHeader(protectedHeader);

            return this;
          }
        }, {
          key: "sign",
          value: function () {
            var _sign4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee45(key, options) {
              var jws;
              return regeneratorRuntime.wrap(function _callee45$(_context45) {
                while (1) {
                  switch (_context45.prev = _context45.next) {
                    case 0:
                      _context45.next = 2;
                      return this._flattened.sign(key, options);

                    case 2:
                      jws = _context45.sent;

                      if (!(jws.payload === undefined)) {
                        _context45.next = 5;
                        break;
                      }

                      throw new TypeError('use the flattened module for creating JWS with b64: false');

                    case 5:
                      return _context45.abrupt("return", "".concat(jws["protected"], ".").concat(jws.payload, ".").concat(jws.signature));

                    case 6:
                    case "end":
                      return _context45.stop();
                  }
                }
              }, _callee45, this);
            }));

            function sign(_x121, _x122) {
              return _sign4.apply(this, arguments);
            }

            return sign;
          }()
        }]);

        return CompactSign;
      }();
      /***/

    },

    /***/
    "j2Dr": function j2Dr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generateKeyPair", function () {
        return generateKeyPair;
      });
      /* harmony import */


      var _runtime_generate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../runtime/generate.js */
      "QaxS");

      function generateKeyPair(_x123, _x124) {
        return _generateKeyPair2.apply(this, arguments);
      }
      /***/


      function _generateKeyPair2() {
        _generateKeyPair2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee46(alg, options) {
          return regeneratorRuntime.wrap(function _callee46$(_context46) {
            while (1) {
              switch (_context46.prev = _context46.next) {
                case 0:
                  return _context46.abrupt("return", Object(_runtime_generate_js__WEBPACK_IMPORTED_MODULE_0__["generateKeyPair"])(alg, options));

                case 1:
                case "end":
                  return _context46.stop();
              }
            }
          }, _callee46);
        }));
        return _generateKeyPair2.apply(this, arguments);
      }
    },

    /***/
    "jO9C": function jO9C(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./cipher-core */
          "OLod"));
        } else {}
      })(this, function (CryptoJS) {
        /**
         * ISO/IEC 9797-1 Padding Method 2.
         */
        CryptoJS.pad.Iso97971 = {
          pad: function pad(data, blockSize) {
            // Add 0x80 byte
            data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1)); // Zero pad the rest

            CryptoJS.pad.ZeroPadding.pad(data, blockSize);
          },
          unpad: function unpad(data) {
            // Remove zero padding
            CryptoJS.pad.ZeroPadding.unpad(data); // Remove one more byte -- the 0x80 byte

            data.sigBytes--;
          }
        };
        return CryptoJS.pad.Iso97971;
      });
      /***/

    },

    /***/
    "k303": function k303(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "exportSPKI", function () {
        return exportSPKI;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "exportPKCS8", function () {
        return exportPKCS8;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "exportJWK", function () {
        return exportJWK;
      });
      /* harmony import */


      var _runtime_asn1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../runtime/asn1.js */
      "IpBm");
      /* harmony import */


      var _runtime_key_to_jwk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../runtime/key_to_jwk.js */
      "n/1e");

      function exportSPKI(_x125) {
        return _exportSPKI.apply(this, arguments);
      }

      function _exportSPKI() {
        _exportSPKI = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee47(key) {
          return regeneratorRuntime.wrap(function _callee47$(_context47) {
            while (1) {
              switch (_context47.prev = _context47.next) {
                case 0:
                  return _context47.abrupt("return", Object(_runtime_asn1_js__WEBPACK_IMPORTED_MODULE_0__["toSPKI"])(key));

                case 1:
                case "end":
                  return _context47.stop();
              }
            }
          }, _callee47);
        }));
        return _exportSPKI.apply(this, arguments);
      }

      function exportPKCS8(_x126) {
        return _exportPKCS.apply(this, arguments);
      }

      function _exportPKCS() {
        _exportPKCS = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee48(key) {
          return regeneratorRuntime.wrap(function _callee48$(_context48) {
            while (1) {
              switch (_context48.prev = _context48.next) {
                case 0:
                  return _context48.abrupt("return", Object(_runtime_asn1_js__WEBPACK_IMPORTED_MODULE_0__["toPKCS8"])(key));

                case 1:
                case "end":
                  return _context48.stop();
              }
            }
          }, _callee48);
        }));
        return _exportPKCS.apply(this, arguments);
      }

      function exportJWK(_x127) {
        return _exportJWK.apply(this, arguments);
      }
      /***/


      function _exportJWK() {
        _exportJWK = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee49(key) {
          return regeneratorRuntime.wrap(function _callee49$(_context49) {
            while (1) {
              switch (_context49.prev = _context49.next) {
                case 0:
                  return _context49.abrupt("return", Object(_runtime_key_to_jwk_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key));

                case 1:
                case "end":
                  return _context49.stop();
              }
            }
          }, _callee49);
        }));
        return _exportJWK.apply(this, arguments);
      }
    },

    /***/
    "kIlW": function kIlW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _webcrypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./webcrypto.js */
      "hqmz");
      /* harmony default export */


      __webpack_exports__["default"] = _webcrypto_js__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomValues.bind(_webcrypto_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      /***/
    },

    /***/
    "kf/P": function kfP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OpenAliceIntent", function () {
        return OpenAliceIntent;
      });

      var OpenAliceIntent;

      (function (OpenAliceIntent) {
        OpenAliceIntent["UnlockContract"] = "UNLOCK_CONTRACT";
        OpenAliceIntent["MoratoriumForm"] = "MORATORIUM_FORM";
      })(OpenAliceIntent || (OpenAliceIntent = {}));
      /***/

    },

    /***/
    "lPiR": function lPiR(module, exports, __webpack_require__) {
      ;

      (function (root, factory) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"));
        } else {}
      })(this, function (CryptoJS) {
        (function (Math) {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var Hasher = C_lib.Hasher;
          var C_algo = C.algo; // Initialization and round constants tables

          var H = [];
          var K = []; // Compute constants

          (function () {
            function isPrime(n) {
              var sqrtN = Math.sqrt(n);

              for (var factor = 2; factor <= sqrtN; factor++) {
                if (!(n % factor)) {
                  return false;
                }
              }

              return true;
            }

            function getFractionalBits(n) {
              return (n - (n | 0)) * 0x100000000 | 0;
            }

            var n = 2;
            var nPrime = 0;

            while (nPrime < 64) {
              if (isPrime(n)) {
                if (nPrime < 8) {
                  H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
                }

                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));
                nPrime++;
              }

              n++;
            }
          })(); // Reusable object


          var W = [];
          /**
           * SHA-256 hash algorithm.
           */

          var SHA256 = C_algo.SHA256 = Hasher.extend({
            _doReset: function _doReset() {
              this._hash = new WordArray.init(H.slice(0));
            },
            _doProcessBlock: function _doProcessBlock(M, offset) {
              // Shortcut
              var H = this._hash.words; // Working variables

              var a = H[0];
              var b = H[1];
              var c = H[2];
              var d = H[3];
              var e = H[4];
              var f = H[5];
              var g = H[6];
              var h = H[7]; // Computation

              for (var i = 0; i < 64; i++) {
                if (i < 16) {
                  W[i] = M[offset + i] | 0;
                } else {
                  var gamma0x = W[i - 15];
                  var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
                  var gamma1x = W[i - 2];
                  var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
                  W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
                }

                var ch = e & f ^ ~e & g;
                var maj = a & b ^ a & c ^ b & c;
                var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
                var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
                var t1 = h + sigma1 + ch + K[i] + W[i];
                var t2 = sigma0 + maj;
                h = g;
                g = f;
                f = e;
                e = d + t1 | 0;
                d = c;
                c = b;
                b = a;
                a = t1 + t2 | 0;
              } // Intermediate hash value


              H[0] = H[0] + a | 0;
              H[1] = H[1] + b | 0;
              H[2] = H[2] + c | 0;
              H[3] = H[3] + d | 0;
              H[4] = H[4] + e | 0;
              H[5] = H[5] + f | 0;
              H[6] = H[6] + g | 0;
              H[7] = H[7] + h | 0;
            },
            _doFinalize: function _doFinalize() {
              // Shortcuts
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8; // Add padding

              dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
              data.sigBytes = dataWords.length * 4; // Hash final blocks

              this._process(); // Return final computed hash


              return this._hash;
            },
            clone: function clone() {
              var clone = Hasher.clone.call(this);
              clone._hash = this._hash.clone();
              return clone;
            }
          });
          /**
           * Shortcut function to the hasher's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           *
           * @return {WordArray} The hash.
           *
           * @static
           *
           * @example
           *
           *     var hash = CryptoJS.SHA256('message');
           *     var hash = CryptoJS.SHA256(wordArray);
           */

          C.SHA256 = Hasher._createHelper(SHA256);
          /**
           * Shortcut function to the HMAC's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           * @param {WordArray|string} key The secret key.
           *
           * @return {WordArray} The HMAC.
           *
           * @static
           *
           * @example
           *
           *     var hmac = CryptoJS.HmacSHA256(message, key);
           */

          C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
        })(Math);

        return CryptoJS.SHA256;
      });
      /***/

    },

    /***/
    "lpQU": function lpQU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicService", function () {
        return PublicService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/api/api.service */
      "oZWX");

      var PublicService = /*#__PURE__*/function () {
        function PublicService(api) {
          _classCallCheck(this, PublicService);

          this.api = api;
          this.LOGIN_SERVICE = "system/security/authentications/basic";
        }

        _createClass(PublicService, [{
          key: "login",
          value: function login(username, password, withFingerprint, deviceToken) {
            var auth;

            if (withFingerprint) {
              auth = btoa(username + ":" + password + ":" + deviceToken);
            } else {
              auth = btoa(username + ":" + password);
            }

            return this.api.postLogin(auth, this.LOGIN_SERVICE + "?u=" + username + "&includeAccountsInResponse=" + "false", withFingerprint);
          }
        }]);

        return PublicService;
      }();

      PublicService.ctorParameters = function () {
        return [{
          type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["Api"]
        }];
      };

      PublicService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PublicService);
      /***/
    },

    /***/
    "m2FS": function m2FS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "jwtVerify", function () {
        return jwtVerify;
      });
      /* harmony import */


      var _jws_compact_verify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../jws/compact/verify.js */
      "e4TT");
      /* harmony import */


      var _lib_jwt_claims_set_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../lib/jwt_claims_set.js */
      "rCIK");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");

      function jwtVerify(_x128, _x129, _x130) {
        return _jwtVerify.apply(this, arguments);
      }
      /***/


      function _jwtVerify() {
        _jwtVerify = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee50(jwt, key, options) {
          var _a, verified, payload, result;

          return regeneratorRuntime.wrap(function _callee50$(_context50) {
            while (1) {
              switch (_context50.prev = _context50.next) {
                case 0:
                  _context50.next = 2;
                  return Object(_jws_compact_verify_js__WEBPACK_IMPORTED_MODULE_0__["compactVerify"])(jwt, key, options);

                case 2:
                  verified = _context50.sent;

                  if (!(((_a = verified.protectedHeader.crit) === null || _a === void 0 ? void 0 : _a.includes('b64')) && verified.protectedHeader.b64 === false)) {
                    _context50.next = 5;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWTInvalid"]('JWTs MUST NOT use unencoded payload');

                case 5:
                  payload = Object(_lib_jwt_claims_set_js__WEBPACK_IMPORTED_MODULE_1__["default"])(verified.protectedHeader, verified.payload, options);
                  result = {
                    payload: payload,
                    protectedHeader: verified.protectedHeader
                  };

                  if (!(typeof key === 'function')) {
                    _context50.next = 9;
                    break;
                  }

                  return _context50.abrupt("return", _objectSpread(_objectSpread({}, result), {}, {
                    key: verified.key
                  }));

                case 9:
                  return _context50.abrupt("return", result);

                case 10:
                case "end":
                  return _context50.stop();
              }
            }
          }, _callee50);
        }));
        return _jwtVerify.apply(this, arguments);
      }
    },

    /***/
    "n/1e": function n1e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _webcrypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./webcrypto.js */
      "hqmz");
      /* harmony import */


      var _lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../lib/invalid_key_input.js */
      "wZa+");
      /* harmony import */


      var _base64url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./base64url.js */
      "KjJ5");
      /* harmony import */


      var _is_key_like_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./is_key_like.js */
      "H/EN");

      var keyToJWK = /*#__PURE__*/function () {
        var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee51(key) {
          var _yield$_webcrypto_js_, ext, key_ops, alg, use, jwk;

          return regeneratorRuntime.wrap(function _callee51$(_context51) {
            while (1) {
              switch (_context51.prev = _context51.next) {
                case 0:
                  if (!(key instanceof Uint8Array)) {
                    _context51.next = 2;
                    break;
                  }

                  return _context51.abrupt("return", {
                    kty: 'oct',
                    k: Object(_base64url_js__WEBPACK_IMPORTED_MODULE_2__["encode"])(key)
                  });

                case 2:
                  if (Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_0__["isCryptoKey"])(key)) {
                    _context51.next = 4;
                    break;
                  }

                  throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_1__["default"]).apply(void 0, [key].concat(_toConsumableArray(_is_key_like_js__WEBPACK_IMPORTED_MODULE_3__["types"]), ['Uint8Array'])));

                case 4:
                  if (key.extractable) {
                    _context51.next = 6;
                    break;
                  }

                  throw new TypeError('non-extractable CryptoKey cannot be exported as a JWK');

                case 6:
                  _context51.next = 8;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_0__["default"].subtle.exportKey('jwk', key);

                case 8:
                  _yield$_webcrypto_js_ = _context51.sent;
                  ext = _yield$_webcrypto_js_.ext;
                  key_ops = _yield$_webcrypto_js_.key_ops;
                  alg = _yield$_webcrypto_js_.alg;
                  use = _yield$_webcrypto_js_.use;
                  jwk = _objectWithoutProperties(_yield$_webcrypto_js_, _excluded4);
                  return _context51.abrupt("return", jwk);

                case 15:
                case "end":
                  return _context51.stop();
              }
            }
          }, _callee51);
        }));

        return function keyToJWK(_x131) {
          return _ref17.apply(this, arguments);
        };
      }();
      /* harmony default export */


      __webpack_exports__["default"] = keyToJWK;
      /***/
    },

    /***/
    "n8OJ": function n8OJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "flattenedVerify", function () {
        return flattenedVerify;
      });
      /* harmony import */


      var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../runtime/base64url.js */
      "KjJ5");
      /* harmony import */


      var _runtime_verify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../runtime/verify.js */
      "4inf");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../util/errors.js */
      "StPg");
      /* harmony import */


      var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../lib/buffer_utils.js */
      "xpfA");
      /* harmony import */


      var _lib_is_disjoint_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../lib/is_disjoint.js */
      "yopU");
      /* harmony import */


      var _lib_is_object_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../lib/is_object.js */
      "2fVw");
      /* harmony import */


      var _lib_check_key_type_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../lib/check_key_type.js */
      "ceW5");
      /* harmony import */


      var _lib_validate_crit_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../lib/validate_crit.js */
      "ElMP");
      /* harmony import */


      var _lib_validate_algorithms_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../lib/validate_algorithms.js */
      "JnDH");

      function flattenedVerify(_x132, _x133, _x134) {
        return _flattenedVerify.apply(this, arguments);
      }
      /***/


      function _flattenedVerify() {
        _flattenedVerify = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee52(jws, key, options) {
          var _a, parsedProt, protectedHeader, joseHeader, extensions, b64, alg, algorithms, resolvedKey, data, signature, verified, payload, result;

          return regeneratorRuntime.wrap(function _callee52$(_context52) {
            while (1) {
              switch (_context52.prev = _context52.next) {
                case 0:
                  if (Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_5__["default"])(jws)) {
                    _context52.next = 2;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('Flattened JWS must be an object');

                case 2:
                  if (!(jws["protected"] === undefined && jws.header === undefined)) {
                    _context52.next = 4;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('Flattened JWS must have either of the "protected" or "header" members');

                case 4:
                  if (!(jws["protected"] !== undefined && typeof jws["protected"] !== 'string')) {
                    _context52.next = 6;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('JWS Protected Header incorrect type');

                case 6:
                  if (!(jws.payload === undefined)) {
                    _context52.next = 8;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('JWS Payload missing');

                case 8:
                  if (!(typeof jws.signature !== 'string')) {
                    _context52.next = 10;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('JWS Signature missing or incorrect type');

                case 10:
                  if (!(jws.header !== undefined && !Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_5__["default"])(jws.header))) {
                    _context52.next = 12;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('JWS Unprotected Header incorrect type');

                case 12:
                  parsedProt = {};

                  if (!jws["protected"]) {
                    _context52.next = 22;
                    break;
                  }

                  protectedHeader = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(jws["protected"]);
                  _context52.prev = 15;
                  parsedProt = JSON.parse(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_3__["decoder"].decode(protectedHeader));
                  _context52.next = 22;
                  break;

                case 19:
                  _context52.prev = 19;
                  _context52.t0 = _context52["catch"](15);
                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('JWS Protected Header is invalid');

                case 22:
                  if (Object(_lib_is_disjoint_js__WEBPACK_IMPORTED_MODULE_4__["default"])(parsedProt, jws.header)) {
                    _context52.next = 24;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('JWS Protected and JWS Unprotected Header Parameter names must be disjoint');

                case 24:
                  joseHeader = _objectSpread(_objectSpread({}, parsedProt), jws.header);
                  extensions = Object(_lib_validate_crit_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"], new Map([['b64', true]]), options === null || options === void 0 ? void 0 : options.crit, parsedProt, joseHeader);
                  b64 = true;

                  if (!extensions.has('b64')) {
                    _context52.next = 31;
                    break;
                  }

                  b64 = parsedProt.b64;

                  if (!(typeof b64 !== 'boolean')) {
                    _context52.next = 31;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('The "b64" (base64url-encode payload) Header Parameter must be a boolean');

                case 31:
                  alg = joseHeader.alg;

                  if (!(typeof alg !== 'string' || !alg)) {
                    _context52.next = 34;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('JWS "alg" (Algorithm) Header Parameter missing or invalid');

                case 34:
                  algorithms = options && Object(_lib_validate_algorithms_js__WEBPACK_IMPORTED_MODULE_8__["default"])('algorithms', options.algorithms);

                  if (!(algorithms && !algorithms.has(alg))) {
                    _context52.next = 37;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSEAlgNotAllowed"]('"alg" (Algorithm) Header Parameter not allowed');

                case 37:
                  if (!b64) {
                    _context52.next = 42;
                    break;
                  }

                  if (!(typeof jws.payload !== 'string')) {
                    _context52.next = 40;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('JWS Payload must be a string');

                case 40:
                  _context52.next = 44;
                  break;

                case 42:
                  if (!(typeof jws.payload !== 'string' && !(jws.payload instanceof Uint8Array))) {
                    _context52.next = 44;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('JWS Payload must be a string or an Uint8Array instance');

                case 44:
                  resolvedKey = false;

                  if (!(typeof key === 'function')) {
                    _context52.next = 50;
                    break;
                  }

                  _context52.next = 48;
                  return key(parsedProt, jws);

                case 48:
                  key = _context52.sent;
                  resolvedKey = true;

                case 50:
                  Object(_lib_check_key_type_js__WEBPACK_IMPORTED_MODULE_6__["default"])(alg, key, 'verify');
                  data = Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_3__["concat"])(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_3__["encoder"].encode((_a = jws["protected"]) !== null && _a !== void 0 ? _a : ''), _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_3__["encoder"].encode('.'), typeof jws.payload === 'string' ? _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_3__["encoder"].encode(jws.payload) : jws.payload);
                  signature = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(jws.signature);
                  _context52.next = 55;
                  return Object(_runtime_verify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(alg, key, signature, data);

                case 55:
                  verified = _context52.sent;

                  if (verified) {
                    _context52.next = 58;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSSignatureVerificationFailed"]();

                case 58:
                  if (b64) {
                    payload = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(jws.payload);
                  } else if (typeof jws.payload === 'string') {
                    payload = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_3__["encoder"].encode(jws.payload);
                  } else {
                    payload = jws.payload;
                  }

                  result = {
                    payload: payload
                  };

                  if (jws["protected"] !== undefined) {
                    result.protectedHeader = parsedProt;
                  }

                  if (jws.header !== undefined) {
                    result.unprotectedHeader = jws.header;
                  }

                  if (!resolvedKey) {
                    _context52.next = 64;
                    break;
                  }

                  return _context52.abrupt("return", _objectSpread(_objectSpread({}, result), {}, {
                    key: key
                  }));

                case 64:
                  return _context52.abrupt("return", result);

                case 65:
                case "end":
                  return _context52.stop();
              }
            }
          }, _callee52, null, [[15, 19]]);
        }));
        return _flattenedVerify.apply(this, arguments);
      }
    },

    /***/
    "ncFE": function ncFE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentifaiWidgetDimensions", function () {
        return AgentifaiWidgetDimensions;
      });

      var AgentifaiWidgetDimensions = function AgentifaiWidgetDimensions(horizontalAlignment, horizontalMargin, verticalAlignment, verticalMargin, size) {
        _classCallCheck(this, AgentifaiWidgetDimensions);

        this.horizontalAlignment = horizontalAlignment;
        this.horizontalMargin = horizontalMargin;
        this.verticalAlignment = verticalAlignment;
        this.verticalMargin = verticalMargin;
        this.size = size;
      };
      /***/

    },

    /***/
    "oRuE": function oRuE(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./cipher-core */
          "OLod"));
        } else {}
      })(this, function (CryptoJS) {
        /**
         * ISO 10126 padding strategy.
         */
        CryptoJS.pad.Iso10126 = {
          pad: function pad(data, blockSize) {
            // Shortcut
            var blockSizeBytes = blockSize * 4; // Count padding bytes

            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes; // Pad

            data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
          },
          unpad: function unpad(data) {
            // Get number of padding bytes from last byte
            var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff; // Remove padding

            data.sigBytes -= nPaddingBytes;
          }
        };
        return CryptoJS.pad.Iso10126;
      });
      /***/

    },

    /***/
    "oZgo": function oZgo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      var timingSafeEqual = function timingSafeEqual(a, b) {
        if (!(a instanceof Uint8Array)) {
          throw new TypeError('First argument must be a buffer');
        }

        if (!(b instanceof Uint8Array)) {
          throw new TypeError('Second argument must be a buffer');
        }

        if (a.length !== b.length) {
          throw new TypeError('Input buffers must have the same length');
        }

        var len = a.length;
        var out = 0;
        var i = -1;

        while (++i < len) {
          out |= a[i] ^ b[i];
        }

        return out === 0;
      };
      /* harmony default export */


      __webpack_exports__["default"] = timingSafeEqual;
      /***/
    },

    /***/
    "pA7S": function pA7S(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./enc-base64 */
          "ETIr"), __webpack_require__(
          /*! ./md5 */
          "cv67"), __webpack_require__(
          /*! ./evpkdf */
          "K3mO"), __webpack_require__(
          /*! ./cipher-core */
          "OLod"));
        } else {}
      })(this, function (CryptoJS) {
        (function () {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var BlockCipher = C_lib.BlockCipher;
          var C_algo = C.algo; // Permuted Choice 1 constants

          var PC1 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4]; // Permuted Choice 2 constants

          var PC2 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32]; // Cumulative bit shift constants

          var BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28]; // SBOXes and round permutation constants

          var SBOX_P = [{
            0x0: 0x808200,
            0x10000000: 0x8000,
            0x20000000: 0x808002,
            0x30000000: 0x2,
            0x40000000: 0x200,
            0x50000000: 0x808202,
            0x60000000: 0x800202,
            0x70000000: 0x800000,
            0x80000000: 0x202,
            0x90000000: 0x800200,
            0xa0000000: 0x8200,
            0xb0000000: 0x808000,
            0xc0000000: 0x8002,
            0xd0000000: 0x800002,
            0xe0000000: 0x0,
            0xf0000000: 0x8202,
            0x8000000: 0x0,
            0x18000000: 0x808202,
            0x28000000: 0x8202,
            0x38000000: 0x8000,
            0x48000000: 0x808200,
            0x58000000: 0x200,
            0x68000000: 0x808002,
            0x78000000: 0x2,
            0x88000000: 0x800200,
            0x98000000: 0x8200,
            0xa8000000: 0x808000,
            0xb8000000: 0x800202,
            0xc8000000: 0x800002,
            0xd8000000: 0x8002,
            0xe8000000: 0x202,
            0xf8000000: 0x800000,
            0x1: 0x8000,
            0x10000001: 0x2,
            0x20000001: 0x808200,
            0x30000001: 0x800000,
            0x40000001: 0x808002,
            0x50000001: 0x8200,
            0x60000001: 0x200,
            0x70000001: 0x800202,
            0x80000001: 0x808202,
            0x90000001: 0x808000,
            0xa0000001: 0x800002,
            0xb0000001: 0x8202,
            0xc0000001: 0x202,
            0xd0000001: 0x800200,
            0xe0000001: 0x8002,
            0xf0000001: 0x0,
            0x8000001: 0x808202,
            0x18000001: 0x808000,
            0x28000001: 0x800000,
            0x38000001: 0x200,
            0x48000001: 0x8000,
            0x58000001: 0x800002,
            0x68000001: 0x2,
            0x78000001: 0x8202,
            0x88000001: 0x8002,
            0x98000001: 0x800202,
            0xa8000001: 0x202,
            0xb8000001: 0x808200,
            0xc8000001: 0x800200,
            0xd8000001: 0x0,
            0xe8000001: 0x8200,
            0xf8000001: 0x808002
          }, {
            0x0: 0x40084010,
            0x1000000: 0x4000,
            0x2000000: 0x80000,
            0x3000000: 0x40080010,
            0x4000000: 0x40000010,
            0x5000000: 0x40084000,
            0x6000000: 0x40004000,
            0x7000000: 0x10,
            0x8000000: 0x84000,
            0x9000000: 0x40004010,
            0xa000000: 0x40000000,
            0xb000000: 0x84010,
            0xc000000: 0x80010,
            0xd000000: 0x0,
            0xe000000: 0x4010,
            0xf000000: 0x40080000,
            0x800000: 0x40004000,
            0x1800000: 0x84010,
            0x2800000: 0x10,
            0x3800000: 0x40004010,
            0x4800000: 0x40084010,
            0x5800000: 0x40000000,
            0x6800000: 0x80000,
            0x7800000: 0x40080010,
            0x8800000: 0x80010,
            0x9800000: 0x0,
            0xa800000: 0x4000,
            0xb800000: 0x40080000,
            0xc800000: 0x40000010,
            0xd800000: 0x84000,
            0xe800000: 0x40084000,
            0xf800000: 0x4010,
            0x10000000: 0x0,
            0x11000000: 0x40080010,
            0x12000000: 0x40004010,
            0x13000000: 0x40084000,
            0x14000000: 0x40080000,
            0x15000000: 0x10,
            0x16000000: 0x84010,
            0x17000000: 0x4000,
            0x18000000: 0x4010,
            0x19000000: 0x80000,
            0x1a000000: 0x80010,
            0x1b000000: 0x40000010,
            0x1c000000: 0x84000,
            0x1d000000: 0x40004000,
            0x1e000000: 0x40000000,
            0x1f000000: 0x40084010,
            0x10800000: 0x84010,
            0x11800000: 0x80000,
            0x12800000: 0x40080000,
            0x13800000: 0x4000,
            0x14800000: 0x40004000,
            0x15800000: 0x40084010,
            0x16800000: 0x10,
            0x17800000: 0x40000000,
            0x18800000: 0x40084000,
            0x19800000: 0x40000010,
            0x1a800000: 0x40004010,
            0x1b800000: 0x80010,
            0x1c800000: 0x0,
            0x1d800000: 0x4010,
            0x1e800000: 0x40080010,
            0x1f800000: 0x84000
          }, {
            0x0: 0x104,
            0x100000: 0x0,
            0x200000: 0x4000100,
            0x300000: 0x10104,
            0x400000: 0x10004,
            0x500000: 0x4000004,
            0x600000: 0x4010104,
            0x700000: 0x4010000,
            0x800000: 0x4000000,
            0x900000: 0x4010100,
            0xa00000: 0x10100,
            0xb00000: 0x4010004,
            0xc00000: 0x4000104,
            0xd00000: 0x10000,
            0xe00000: 0x4,
            0xf00000: 0x100,
            0x80000: 0x4010100,
            0x180000: 0x4010004,
            0x280000: 0x0,
            0x380000: 0x4000100,
            0x480000: 0x4000004,
            0x580000: 0x10000,
            0x680000: 0x10004,
            0x780000: 0x104,
            0x880000: 0x4,
            0x980000: 0x100,
            0xa80000: 0x4010000,
            0xb80000: 0x10104,
            0xc80000: 0x10100,
            0xd80000: 0x4000104,
            0xe80000: 0x4010104,
            0xf80000: 0x4000000,
            0x1000000: 0x4010100,
            0x1100000: 0x10004,
            0x1200000: 0x10000,
            0x1300000: 0x4000100,
            0x1400000: 0x100,
            0x1500000: 0x4010104,
            0x1600000: 0x4000004,
            0x1700000: 0x0,
            0x1800000: 0x4000104,
            0x1900000: 0x4000000,
            0x1a00000: 0x4,
            0x1b00000: 0x10100,
            0x1c00000: 0x4010000,
            0x1d00000: 0x104,
            0x1e00000: 0x10104,
            0x1f00000: 0x4010004,
            0x1080000: 0x4000000,
            0x1180000: 0x104,
            0x1280000: 0x4010100,
            0x1380000: 0x0,
            0x1480000: 0x10004,
            0x1580000: 0x4000100,
            0x1680000: 0x100,
            0x1780000: 0x4010004,
            0x1880000: 0x10000,
            0x1980000: 0x4010104,
            0x1a80000: 0x10104,
            0x1b80000: 0x4000004,
            0x1c80000: 0x4000104,
            0x1d80000: 0x4010000,
            0x1e80000: 0x4,
            0x1f80000: 0x10100
          }, {
            0x0: 0x80401000,
            0x10000: 0x80001040,
            0x20000: 0x401040,
            0x30000: 0x80400000,
            0x40000: 0x0,
            0x50000: 0x401000,
            0x60000: 0x80000040,
            0x70000: 0x400040,
            0x80000: 0x80000000,
            0x90000: 0x400000,
            0xa0000: 0x40,
            0xb0000: 0x80001000,
            0xc0000: 0x80400040,
            0xd0000: 0x1040,
            0xe0000: 0x1000,
            0xf0000: 0x80401040,
            0x8000: 0x80001040,
            0x18000: 0x40,
            0x28000: 0x80400040,
            0x38000: 0x80001000,
            0x48000: 0x401000,
            0x58000: 0x80401040,
            0x68000: 0x0,
            0x78000: 0x80400000,
            0x88000: 0x1000,
            0x98000: 0x80401000,
            0xa8000: 0x400000,
            0xb8000: 0x1040,
            0xc8000: 0x80000000,
            0xd8000: 0x400040,
            0xe8000: 0x401040,
            0xf8000: 0x80000040,
            0x100000: 0x400040,
            0x110000: 0x401000,
            0x120000: 0x80000040,
            0x130000: 0x0,
            0x140000: 0x1040,
            0x150000: 0x80400040,
            0x160000: 0x80401000,
            0x170000: 0x80001040,
            0x180000: 0x80401040,
            0x190000: 0x80000000,
            0x1a0000: 0x80400000,
            0x1b0000: 0x401040,
            0x1c0000: 0x80001000,
            0x1d0000: 0x400000,
            0x1e0000: 0x40,
            0x1f0000: 0x1000,
            0x108000: 0x80400000,
            0x118000: 0x80401040,
            0x128000: 0x0,
            0x138000: 0x401000,
            0x148000: 0x400040,
            0x158000: 0x80000000,
            0x168000: 0x80001040,
            0x178000: 0x40,
            0x188000: 0x80000040,
            0x198000: 0x1000,
            0x1a8000: 0x80001000,
            0x1b8000: 0x80400040,
            0x1c8000: 0x1040,
            0x1d8000: 0x80401000,
            0x1e8000: 0x400000,
            0x1f8000: 0x401040
          }, {
            0x0: 0x80,
            0x1000: 0x1040000,
            0x2000: 0x40000,
            0x3000: 0x20000000,
            0x4000: 0x20040080,
            0x5000: 0x1000080,
            0x6000: 0x21000080,
            0x7000: 0x40080,
            0x8000: 0x1000000,
            0x9000: 0x20040000,
            0xa000: 0x20000080,
            0xb000: 0x21040080,
            0xc000: 0x21040000,
            0xd000: 0x0,
            0xe000: 0x1040080,
            0xf000: 0x21000000,
            0x800: 0x1040080,
            0x1800: 0x21000080,
            0x2800: 0x80,
            0x3800: 0x1040000,
            0x4800: 0x40000,
            0x5800: 0x20040080,
            0x6800: 0x21040000,
            0x7800: 0x20000000,
            0x8800: 0x20040000,
            0x9800: 0x0,
            0xa800: 0x21040080,
            0xb800: 0x1000080,
            0xc800: 0x20000080,
            0xd800: 0x21000000,
            0xe800: 0x1000000,
            0xf800: 0x40080,
            0x10000: 0x40000,
            0x11000: 0x80,
            0x12000: 0x20000000,
            0x13000: 0x21000080,
            0x14000: 0x1000080,
            0x15000: 0x21040000,
            0x16000: 0x20040080,
            0x17000: 0x1000000,
            0x18000: 0x21040080,
            0x19000: 0x21000000,
            0x1a000: 0x1040000,
            0x1b000: 0x20040000,
            0x1c000: 0x40080,
            0x1d000: 0x20000080,
            0x1e000: 0x0,
            0x1f000: 0x1040080,
            0x10800: 0x21000080,
            0x11800: 0x1000000,
            0x12800: 0x1040000,
            0x13800: 0x20040080,
            0x14800: 0x20000000,
            0x15800: 0x1040080,
            0x16800: 0x80,
            0x17800: 0x21040000,
            0x18800: 0x40080,
            0x19800: 0x21040080,
            0x1a800: 0x0,
            0x1b800: 0x21000000,
            0x1c800: 0x1000080,
            0x1d800: 0x40000,
            0x1e800: 0x20040000,
            0x1f800: 0x20000080
          }, {
            0x0: 0x10000008,
            0x100: 0x2000,
            0x200: 0x10200000,
            0x300: 0x10202008,
            0x400: 0x10002000,
            0x500: 0x200000,
            0x600: 0x200008,
            0x700: 0x10000000,
            0x800: 0x0,
            0x900: 0x10002008,
            0xa00: 0x202000,
            0xb00: 0x8,
            0xc00: 0x10200008,
            0xd00: 0x202008,
            0xe00: 0x2008,
            0xf00: 0x10202000,
            0x80: 0x10200000,
            0x180: 0x10202008,
            0x280: 0x8,
            0x380: 0x200000,
            0x480: 0x202008,
            0x580: 0x10000008,
            0x680: 0x10002000,
            0x780: 0x2008,
            0x880: 0x200008,
            0x980: 0x2000,
            0xa80: 0x10002008,
            0xb80: 0x10200008,
            0xc80: 0x0,
            0xd80: 0x10202000,
            0xe80: 0x202000,
            0xf80: 0x10000000,
            0x1000: 0x10002000,
            0x1100: 0x10200008,
            0x1200: 0x10202008,
            0x1300: 0x2008,
            0x1400: 0x200000,
            0x1500: 0x10000000,
            0x1600: 0x10000008,
            0x1700: 0x202000,
            0x1800: 0x202008,
            0x1900: 0x0,
            0x1a00: 0x8,
            0x1b00: 0x10200000,
            0x1c00: 0x2000,
            0x1d00: 0x10002008,
            0x1e00: 0x10202000,
            0x1f00: 0x200008,
            0x1080: 0x8,
            0x1180: 0x202000,
            0x1280: 0x200000,
            0x1380: 0x10000008,
            0x1480: 0x10002000,
            0x1580: 0x2008,
            0x1680: 0x10202008,
            0x1780: 0x10200000,
            0x1880: 0x10202000,
            0x1980: 0x10200008,
            0x1a80: 0x2000,
            0x1b80: 0x202008,
            0x1c80: 0x200008,
            0x1d80: 0x0,
            0x1e80: 0x10000000,
            0x1f80: 0x10002008
          }, {
            0x0: 0x100000,
            0x10: 0x2000401,
            0x20: 0x400,
            0x30: 0x100401,
            0x40: 0x2100401,
            0x50: 0x0,
            0x60: 0x1,
            0x70: 0x2100001,
            0x80: 0x2000400,
            0x90: 0x100001,
            0xa0: 0x2000001,
            0xb0: 0x2100400,
            0xc0: 0x2100000,
            0xd0: 0x401,
            0xe0: 0x100400,
            0xf0: 0x2000000,
            0x8: 0x2100001,
            0x18: 0x0,
            0x28: 0x2000401,
            0x38: 0x2100400,
            0x48: 0x100000,
            0x58: 0x2000001,
            0x68: 0x2000000,
            0x78: 0x401,
            0x88: 0x100401,
            0x98: 0x2000400,
            0xa8: 0x2100000,
            0xb8: 0x100001,
            0xc8: 0x400,
            0xd8: 0x2100401,
            0xe8: 0x1,
            0xf8: 0x100400,
            0x100: 0x2000000,
            0x110: 0x100000,
            0x120: 0x2000401,
            0x130: 0x2100001,
            0x140: 0x100001,
            0x150: 0x2000400,
            0x160: 0x2100400,
            0x170: 0x100401,
            0x180: 0x401,
            0x190: 0x2100401,
            0x1a0: 0x100400,
            0x1b0: 0x1,
            0x1c0: 0x0,
            0x1d0: 0x2100000,
            0x1e0: 0x2000001,
            0x1f0: 0x400,
            0x108: 0x100400,
            0x118: 0x2000401,
            0x128: 0x2100001,
            0x138: 0x1,
            0x148: 0x2000000,
            0x158: 0x100000,
            0x168: 0x401,
            0x178: 0x2100400,
            0x188: 0x2000001,
            0x198: 0x2100000,
            0x1a8: 0x0,
            0x1b8: 0x2100401,
            0x1c8: 0x100401,
            0x1d8: 0x400,
            0x1e8: 0x2000400,
            0x1f8: 0x100001
          }, {
            0x0: 0x8000820,
            0x1: 0x20000,
            0x2: 0x8000000,
            0x3: 0x20,
            0x4: 0x20020,
            0x5: 0x8020820,
            0x6: 0x8020800,
            0x7: 0x800,
            0x8: 0x8020000,
            0x9: 0x8000800,
            0xa: 0x20800,
            0xb: 0x8020020,
            0xc: 0x820,
            0xd: 0x0,
            0xe: 0x8000020,
            0xf: 0x20820,
            0x80000000: 0x800,
            0x80000001: 0x8020820,
            0x80000002: 0x8000820,
            0x80000003: 0x8000000,
            0x80000004: 0x8020000,
            0x80000005: 0x20800,
            0x80000006: 0x20820,
            0x80000007: 0x20,
            0x80000008: 0x8000020,
            0x80000009: 0x820,
            0x8000000a: 0x20020,
            0x8000000b: 0x8020800,
            0x8000000c: 0x0,
            0x8000000d: 0x8020020,
            0x8000000e: 0x8000800,
            0x8000000f: 0x20000,
            0x10: 0x20820,
            0x11: 0x8020800,
            0x12: 0x20,
            0x13: 0x800,
            0x14: 0x8000800,
            0x15: 0x8000020,
            0x16: 0x8020020,
            0x17: 0x20000,
            0x18: 0x0,
            0x19: 0x20020,
            0x1a: 0x8020000,
            0x1b: 0x8000820,
            0x1c: 0x8020820,
            0x1d: 0x20800,
            0x1e: 0x820,
            0x1f: 0x8000000,
            0x80000010: 0x20000,
            0x80000011: 0x800,
            0x80000012: 0x8020020,
            0x80000013: 0x20820,
            0x80000014: 0x20,
            0x80000015: 0x8020000,
            0x80000016: 0x8000000,
            0x80000017: 0x8000820,
            0x80000018: 0x8020820,
            0x80000019: 0x8000020,
            0x8000001a: 0x8000800,
            0x8000001b: 0x0,
            0x8000001c: 0x20800,
            0x8000001d: 0x820,
            0x8000001e: 0x20020,
            0x8000001f: 0x8020800
          }]; // Masks that select the SBOX input

          var SBOX_MASK = [0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000, 0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f];
          /**
           * DES block cipher algorithm.
           */

          var DES = C_algo.DES = BlockCipher.extend({
            _doReset: function _doReset() {
              // Shortcuts
              var key = this._key;
              var keyWords = key.words; // Select 56 bits according to PC1

              var keyBits = [];

              for (var i = 0; i < 56; i++) {
                var keyBitPos = PC1[i] - 1;
                keyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;
              } // Assemble 16 subkeys


              var subKeys = this._subKeys = [];

              for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
                // Create subkey
                var subKey = subKeys[nSubKey] = []; // Shortcut

                var bitShift = BIT_SHIFTS[nSubKey]; // Select 48 bits according to PC2

                for (var i = 0; i < 24; i++) {
                  // Select from the left 28 key bits
                  subKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6; // Select from the right 28 key bits

                  subKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;
                } // Since each subkey is applied to an expanded 32-bit input,
                // the subkey can be broken into 8 values scaled to 32-bits,
                // which allows the key to be used without expansion


                subKey[0] = subKey[0] << 1 | subKey[0] >>> 31;

                for (var i = 1; i < 7; i++) {
                  subKey[i] = subKey[i] >>> (i - 1) * 4 + 3;
                }

                subKey[7] = subKey[7] << 5 | subKey[7] >>> 27;
              } // Compute inverse subkeys


              var invSubKeys = this._invSubKeys = [];

              for (var i = 0; i < 16; i++) {
                invSubKeys[i] = subKeys[15 - i];
              }
            },
            encryptBlock: function encryptBlock(M, offset) {
              this._doCryptBlock(M, offset, this._subKeys);
            },
            decryptBlock: function decryptBlock(M, offset) {
              this._doCryptBlock(M, offset, this._invSubKeys);
            },
            _doCryptBlock: function _doCryptBlock(M, offset, subKeys) {
              // Get input
              this._lBlock = M[offset];
              this._rBlock = M[offset + 1]; // Initial permutation

              exchangeLR.call(this, 4, 0x0f0f0f0f);
              exchangeLR.call(this, 16, 0x0000ffff);
              exchangeRL.call(this, 2, 0x33333333);
              exchangeRL.call(this, 8, 0x00ff00ff);
              exchangeLR.call(this, 1, 0x55555555); // Rounds

              for (var round = 0; round < 16; round++) {
                // Shortcuts
                var subKey = subKeys[round];
                var lBlock = this._lBlock;
                var rBlock = this._rBlock; // Feistel function

                var f = 0;

                for (var i = 0; i < 8; i++) {
                  f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
                }

                this._lBlock = rBlock;
                this._rBlock = lBlock ^ f;
              } // Undo swap from last round


              var t = this._lBlock;
              this._lBlock = this._rBlock;
              this._rBlock = t; // Final permutation

              exchangeLR.call(this, 1, 0x55555555);
              exchangeRL.call(this, 8, 0x00ff00ff);
              exchangeRL.call(this, 2, 0x33333333);
              exchangeLR.call(this, 16, 0x0000ffff);
              exchangeLR.call(this, 4, 0x0f0f0f0f); // Set output

              M[offset] = this._lBlock;
              M[offset + 1] = this._rBlock;
            },
            keySize: 64 / 32,
            ivSize: 64 / 32,
            blockSize: 64 / 32
          }); // Swap bits across the left and right words

          function exchangeLR(offset, mask) {
            var t = (this._lBlock >>> offset ^ this._rBlock) & mask;
            this._rBlock ^= t;
            this._lBlock ^= t << offset;
          }

          function exchangeRL(offset, mask) {
            var t = (this._rBlock >>> offset ^ this._lBlock) & mask;
            this._lBlock ^= t;
            this._rBlock ^= t << offset;
          }
          /**
           * Shortcut functions to the cipher's object interface.
           *
           * @example
           *
           *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
           *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
           */


          C.DES = BlockCipher._createHelper(DES);
          /**
           * Triple-DES block cipher algorithm.
           */

          var TripleDES = C_algo.TripleDES = BlockCipher.extend({
            _doReset: function _doReset() {
              // Shortcuts
              var key = this._key;
              var keyWords = key.words; // Make sure the key length is valid (64, 128 or >= 192 bit)

              if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
                throw new Error('Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.');
              } // Extend the key according to the keying options defined in 3DES standard


              var key1 = keyWords.slice(0, 2);
              var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
              var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6); // Create DES instances

              this._des1 = DES.createEncryptor(WordArray.create(key1));
              this._des2 = DES.createEncryptor(WordArray.create(key2));
              this._des3 = DES.createEncryptor(WordArray.create(key3));
            },
            encryptBlock: function encryptBlock(M, offset) {
              this._des1.encryptBlock(M, offset);

              this._des2.decryptBlock(M, offset);

              this._des3.encryptBlock(M, offset);
            },
            decryptBlock: function decryptBlock(M, offset) {
              this._des3.decryptBlock(M, offset);

              this._des2.encryptBlock(M, offset);

              this._des1.decryptBlock(M, offset);
            },
            keySize: 192 / 32,
            ivSize: 64 / 32,
            blockSize: 64 / 32
          });
          /**
           * Shortcut functions to the cipher's object interface.
           *
           * @example
           *
           *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
           *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
           */

          C.TripleDES = BlockCipher._createHelper(TripleDES);
        })();

        return CryptoJS.TripleDES;
      });
      /***/

    },

    /***/
    "qBft": function qBft(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./cipher-core */
          "OLod"));
        } else {}
      })(this, function (CryptoJS) {
        /**
         * ANSI X.923 padding strategy.
         */
        CryptoJS.pad.AnsiX923 = {
          pad: function pad(data, blockSize) {
            // Shortcuts
            var dataSigBytes = data.sigBytes;
            var blockSizeBytes = blockSize * 4; // Count padding bytes

            var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes; // Compute last byte position

            var lastBytePos = dataSigBytes + nPaddingBytes - 1; // Pad

            data.clamp();
            data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
            data.sigBytes += nPaddingBytes;
          },
          unpad: function unpad(data) {
            // Get number of padding bytes from last byte
            var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff; // Remove padding

            data.sigBytes -= nPaddingBytes;
          }
        };
        return CryptoJS.pad.Ansix923;
      });
      /***/

    },

    /***/
    "qIkZ": function qIkZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deriveKey", function () {
        return deriveKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generateEpk", function () {
        return generateEpk;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ecdhAllowed", function () {
        return ecdhAllowed;
      });
      /* harmony import */


      var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../lib/buffer_utils.js */
      "xpfA");
      /* harmony import */


      var _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./webcrypto.js */
      "hqmz");
      /* harmony import */


      var _lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../lib/crypto_key.js */
      "D3C9");
      /* harmony import */


      var _lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../lib/invalid_key_input.js */
      "wZa+");
      /* harmony import */


      var _is_key_like_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./is_key_like.js */
      "H/EN");

      function deriveKey(_x135, _x136, _x137, _x138) {
        return _deriveKey2.apply(this, arguments);
      }

      function _deriveKey2() {
        _deriveKey2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee53(publicKey, privateKey, algorithm, keyLength) {
          var apu,
              apv,
              value,
              sharedSecret,
              _args53 = arguments;
          return regeneratorRuntime.wrap(function _callee53$(_context53) {
            while (1) {
              switch (_context53.prev = _context53.next) {
                case 0:
                  apu = _args53.length > 4 && _args53[4] !== undefined ? _args53[4] : new Uint8Array(0);
                  apv = _args53.length > 5 && _args53[5] !== undefined ? _args53[5] : new Uint8Array(0);

                  if (Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["isCryptoKey"])(publicKey)) {
                    _context53.next = 4;
                    break;
                  }

                  throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_3__["default"]).apply(void 0, [publicKey].concat(_toConsumableArray(_is_key_like_js__WEBPACK_IMPORTED_MODULE_4__["types"]))));

                case 4:
                  Object(_lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_2__["checkEncCryptoKey"])(publicKey, 'ECDH');

                  if (Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["isCryptoKey"])(privateKey)) {
                    _context53.next = 7;
                    break;
                  }

                  throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_3__["default"]).apply(void 0, [privateKey].concat(_toConsumableArray(_is_key_like_js__WEBPACK_IMPORTED_MODULE_4__["types"]))));

                case 7:
                  Object(_lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_2__["checkEncCryptoKey"])(privateKey, 'ECDH', 'deriveBits');
                  value = Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["concat"])(Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["lengthAndInput"])(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["encoder"].encode(algorithm)), Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["lengthAndInput"])(apu), Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["lengthAndInput"])(apv), Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["uint32be"])(keyLength));
                  _context53.t0 = Uint8Array;
                  _context53.next = 12;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.deriveBits({
                    name: 'ECDH',
                    "public": publicKey
                  }, privateKey, Math.ceil(parseInt(privateKey.algorithm.namedCurve.slice(-3), 10) / 8) << 3);

                case 12:
                  _context53.t1 = _context53.sent;
                  sharedSecret = new _context53.t0(_context53.t1);
                  return _context53.abrupt("return", Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["concatKdf"])(sharedSecret, keyLength, value));

                case 15:
                case "end":
                  return _context53.stop();
              }
            }
          }, _callee53);
        }));
        return _deriveKey2.apply(this, arguments);
      }

      function generateEpk(_x139) {
        return _generateEpk.apply(this, arguments);
      }

      function _generateEpk() {
        _generateEpk = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee54(key) {
          return regeneratorRuntime.wrap(function _callee54$(_context54) {
            while (1) {
              switch (_context54.prev = _context54.next) {
                case 0:
                  if (Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["isCryptoKey"])(key)) {
                    _context54.next = 2;
                    break;
                  }

                  throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_3__["default"]).apply(void 0, [key].concat(_toConsumableArray(_is_key_like_js__WEBPACK_IMPORTED_MODULE_4__["types"]))));

                case 2:
                  return _context54.abrupt("return", _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.generateKey(key.algorithm, true, ['deriveBits']));

                case 3:
                case "end":
                  return _context54.stop();
              }
            }
          }, _callee54);
        }));
        return _generateEpk.apply(this, arguments);
      }

      function ecdhAllowed(key) {
        if (!Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["isCryptoKey"])(key)) {
          throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_3__["default"]).apply(void 0, [key].concat(_toConsumableArray(_is_key_like_js__WEBPACK_IMPORTED_MODULE_4__["types"]))));
        }

        return ['P-256', 'P-384', 'P-521'].includes(key.algorithm.namedCurve);
      }
      /***/

    },

    /***/
    "qM6L": function qM6L(module, exports, __webpack_require__) {
      ;

      (function (root, factory) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"));
        } else {}
      })(this, function (CryptoJS) {
        (function () {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var C_enc = C.enc;
          /**
           * UTF-16 BE encoding strategy.
           */

          var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
            /**
             * Converts a word array to a UTF-16 BE string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The UTF-16 BE string.
             *
             * @static
             *
             * @example
             *
             *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
             */
            stringify: function stringify(wordArray) {
              // Shortcuts
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes; // Convert

              var utf16Chars = [];

              for (var i = 0; i < sigBytes; i += 2) {
                var codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff;
                utf16Chars.push(String.fromCharCode(codePoint));
              }

              return utf16Chars.join('');
            },

            /**
             * Converts a UTF-16 BE string to a word array.
             *
             * @param {string} utf16Str The UTF-16 BE string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
             */
            parse: function parse(utf16Str) {
              // Shortcut
              var utf16StrLength = utf16Str.length; // Convert

              var words = [];

              for (var i = 0; i < utf16StrLength; i++) {
                words[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;
              }

              return WordArray.create(words, utf16StrLength * 2);
            }
          };
          /**
           * UTF-16 LE encoding strategy.
           */

          C_enc.Utf16LE = {
            /**
             * Converts a word array to a UTF-16 LE string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The UTF-16 LE string.
             *
             * @static
             *
             * @example
             *
             *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
             */
            stringify: function stringify(wordArray) {
              // Shortcuts
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes; // Convert

              var utf16Chars = [];

              for (var i = 0; i < sigBytes; i += 2) {
                var codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff);
                utf16Chars.push(String.fromCharCode(codePoint));
              }

              return utf16Chars.join('');
            },

            /**
             * Converts a UTF-16 LE string to a word array.
             *
             * @param {string} utf16Str The UTF-16 LE string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
             */
            parse: function parse(utf16Str) {
              // Shortcut
              var utf16StrLength = utf16Str.length; // Convert

              var words = [];

              for (var i = 0; i < utf16StrLength; i++) {
                words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);
              }

              return WordArray.create(words, utf16StrLength * 2);
            }
          };

          function swapEndian(word) {
            return word << 8 & 0xff00ff00 | word >>> 8 & 0x00ff00ff;
          }
        })();

        return CryptoJS.enc.Utf16;
      });
      /***/

    },

    /***/
    "qW6o": function qW6o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bitLength", function () {
        return bitLength;
      });
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");
      /* harmony import */


      var _runtime_random_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../runtime/random.js */
      "kIlW");

      function bitLength(alg) {
        switch (alg) {
          case 'A128GCM':
            return 128;

          case 'A192GCM':
            return 192;

          case 'A256GCM':
          case 'A128CBC-HS256':
            return 256;

          case 'A192CBC-HS384':
            return 384;

          case 'A256CBC-HS512':
            return 512;

          default:
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JOSENotSupported"]("Unsupported JWE Algorithm: ".concat(alg));
        }
      }
      /* harmony default export */


      __webpack_exports__["default"] = function (alg) {
        return Object(_runtime_random_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new Uint8Array(bitLength(alg) >> 3));
      };
      /***/

    },

    /***/
    "qu8F": function qu8F(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./cipher-core */
          "OLod"));
        } else {}
      })(this, function (CryptoJS) {
        /** @preserve
         * Counter block mode compatible with  Dr Brian Gladman fileenc.c
         * derived from CryptoJS.mode.CTR
         * Jan Hruby jhruby.web@gmail.com
         */
        CryptoJS.mode.CTRGladman = function () {
          var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

          function incWord(word) {
            if ((word >> 24 & 0xff) === 0xff) {
              //overflow
              var b1 = word >> 16 & 0xff;
              var b2 = word >> 8 & 0xff;
              var b3 = word & 0xff;

              if (b1 === 0xff) // overflow b1
                {
                  b1 = 0;

                  if (b2 === 0xff) {
                    b2 = 0;

                    if (b3 === 0xff) {
                      b3 = 0;
                    } else {
                      ++b3;
                    }
                  } else {
                    ++b2;
                  }
                } else {
                ++b1;
              }

              word = 0;
              word += b1 << 16;
              word += b2 << 8;
              word += b3;
            } else {
              word += 0x01 << 24;
            }

            return word;
          }

          function incCounter(counter) {
            if ((counter[0] = incWord(counter[0])) === 0) {
              // encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
              counter[1] = incWord(counter[1]);
            }

            return counter;
          }

          var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
            processBlock: function processBlock(words, offset) {
              // Shortcuts
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              var iv = this._iv;
              var counter = this._counter; // Generate keystream

              if (iv) {
                counter = this._counter = iv.slice(0); // Remove IV for subsequent blocks

                this._iv = undefined;
              }

              incCounter(counter);
              var keystream = counter.slice(0);
              cipher.encryptBlock(keystream, 0); // Encrypt

              for (var i = 0; i < blockSize; i++) {
                words[offset + i] ^= keystream[i];
              }
            }
          });
          CTRGladman.Decryptor = Encryptor;
          return CTRGladman;
        }();

        return CryptoJS.mode.CTRGladman;
      });
      /***/

    },

    /***/
    "rCIK": function rCIK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");
      /* harmony import */


      var _buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./buffer_utils.js */
      "xpfA");
      /* harmony import */


      var _epoch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./epoch.js */
      "7SCF");
      /* harmony import */


      var _secs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./secs.js */
      "Sblm");
      /* harmony import */


      var _is_object_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./is_object.js */
      "2fVw");

      var normalizeTyp = function normalizeTyp(value) {
        return value.toLowerCase().replace(/^application\//, '');
      };

      var checkAudiencePresence = function checkAudiencePresence(audPayload, audOption) {
        if (typeof audPayload === 'string') {
          return audOption.includes(audPayload);
        }

        if (Array.isArray(audPayload)) {
          return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
        }

        return false;
      };
      /* harmony default export */


      __webpack_exports__["default"] = function (protectedHeader, encodedPayload) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var typ = options.typ;

        if (typ && (typeof protectedHeader.typ !== 'string' || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
          throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWTClaimValidationFailed"]('unexpected "typ" JWT header value', 'typ', 'check_failed');
        }

        var payload;

        try {
          payload = JSON.parse(_buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__["decoder"].decode(encodedPayload));
        } catch (_a) {}

        if (!Object(_is_object_js__WEBPACK_IMPORTED_MODULE_4__["default"])(payload)) {
          throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWTInvalid"]('JWT Claims Set must be a top-level JSON object');
        }

        var issuer = options.issuer;

        if (issuer && !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)) {
          throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWTClaimValidationFailed"]('unexpected "iss" claim value', 'iss', 'check_failed');
        }

        var subject = options.subject;

        if (subject && payload.sub !== subject) {
          throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWTClaimValidationFailed"]('unexpected "sub" claim value', 'sub', 'check_failed');
        }

        var audience = options.audience;

        if (audience && !checkAudiencePresence(payload.aud, typeof audience === 'string' ? [audience] : audience)) {
          throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWTClaimValidationFailed"]('unexpected "aud" claim value', 'aud', 'check_failed');
        }

        var tolerance;

        switch (typeof options.clockTolerance) {
          case 'string':
            tolerance = Object(_secs_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options.clockTolerance);
            break;

          case 'number':
            tolerance = options.clockTolerance;
            break;

          case 'undefined':
            tolerance = 0;
            break;

          default:
            throw new TypeError('Invalid clockTolerance option type');
        }

        var currentDate = options.currentDate;
        var now = Object(_epoch_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentDate || new Date());

        if ((payload.iat !== undefined || options.maxTokenAge) && typeof payload.iat !== 'number') {
          throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWTClaimValidationFailed"]('"iat" claim must be a number', 'iat', 'invalid');
        }

        if (payload.nbf !== undefined) {
          if (typeof payload.nbf !== 'number') {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWTClaimValidationFailed"]('"nbf" claim must be a number', 'nbf', 'invalid');
          }

          if (payload.nbf > now + tolerance) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWTClaimValidationFailed"]('"nbf" claim timestamp check failed', 'nbf', 'check_failed');
          }
        }

        if (payload.exp !== undefined) {
          if (typeof payload.exp !== 'number') {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWTClaimValidationFailed"]('"exp" claim must be a number', 'exp', 'invalid');
          }

          if (payload.exp <= now - tolerance) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWTExpired"]('"exp" claim timestamp check failed', 'exp', 'check_failed');
          }
        }

        if (options.maxTokenAge) {
          var age = now - payload.iat;
          var max = typeof options.maxTokenAge === 'number' ? options.maxTokenAge : Object(_secs_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options.maxTokenAge);

          if (age - tolerance > max) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWTExpired"]('"iat" claim timestamp check failed (too far in the past)', 'iat', 'check_failed');
          }

          if (age < 0 - tolerance) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWTClaimValidationFailed"]('"iat" claim timestamp check failed (it should be in the past)', 'iat', 'check_failed');
          }
        }

        return payload;
      };
      /***/

    },

    /***/
    "spAk": function spAk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bitLength", function () {
        return bitLength;
      });
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");
      /* harmony import */


      var _runtime_random_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../runtime/random.js */
      "kIlW");

      function bitLength(alg) {
        switch (alg) {
          case 'A128GCM':
          case 'A128GCMKW':
          case 'A192GCM':
          case 'A192GCMKW':
          case 'A256GCM':
          case 'A256GCMKW':
            return 96;

          case 'A128CBC-HS256':
          case 'A192CBC-HS384':
          case 'A256CBC-HS512':
            return 128;

          default:
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JOSENotSupported"]("Unsupported JWE Algorithm: ".concat(alg));
        }
      }
      /* harmony default export */


      __webpack_exports__["default"] = function (alg) {
        return Object(_runtime_random_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new Uint8Array(bitLength(alg) >> 3));
      };
      /***/

    },

    /***/
    "tOAC": function tOAC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "jwtDecrypt", function () {
        return jwtDecrypt;
      });
      /* harmony import */


      var _jwe_compact_decrypt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../jwe/compact/decrypt.js */
      "xhLL");
      /* harmony import */


      var _lib_jwt_claims_set_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../lib/jwt_claims_set.js */
      "rCIK");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");

      function jwtDecrypt(_x140, _x141, _x142) {
        return _jwtDecrypt.apply(this, arguments);
      }
      /***/


      function _jwtDecrypt() {
        _jwtDecrypt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee55(jwt, key, options) {
          var decrypted, payload, protectedHeader, result;
          return regeneratorRuntime.wrap(function _callee55$(_context55) {
            while (1) {
              switch (_context55.prev = _context55.next) {
                case 0:
                  _context55.next = 2;
                  return Object(_jwe_compact_decrypt_js__WEBPACK_IMPORTED_MODULE_0__["compactDecrypt"])(jwt, key, options);

                case 2:
                  decrypted = _context55.sent;
                  payload = Object(_lib_jwt_claims_set_js__WEBPACK_IMPORTED_MODULE_1__["default"])(decrypted.protectedHeader, decrypted.plaintext, options);
                  protectedHeader = decrypted.protectedHeader;

                  if (!(protectedHeader.iss !== undefined && protectedHeader.iss !== payload.iss)) {
                    _context55.next = 7;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWTClaimValidationFailed"]('replicated "iss" claim header parameter mismatch', 'iss', 'mismatch');

                case 7:
                  if (!(protectedHeader.sub !== undefined && protectedHeader.sub !== payload.sub)) {
                    _context55.next = 9;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWTClaimValidationFailed"]('replicated "sub" claim header parameter mismatch', 'sub', 'mismatch');

                case 9:
                  if (!(protectedHeader.aud !== undefined && JSON.stringify(protectedHeader.aud) !== JSON.stringify(payload.aud))) {
                    _context55.next = 11;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWTClaimValidationFailed"]('replicated "aud" claim header parameter mismatch', 'aud', 'mismatch');

                case 11:
                  result = {
                    payload: payload,
                    protectedHeader: protectedHeader
                  };

                  if (!(typeof key === 'function')) {
                    _context55.next = 14;
                    break;
                  }

                  return _context55.abrupt("return", _objectSpread(_objectSpread({}, result), {}, {
                    key: decrypted.key
                  }));

                case 14:
                  return _context55.abrupt("return", result);

                case 15:
                case "end":
                  return _context55.stop();
              }
            }
          }, _callee55);
        }));
        return _jwtDecrypt.apply(this, arguments);
      }
    },

    /***/
    "tj0O": function tj0O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      var bogusWebCrypto = [{
        hash: 'SHA-256',
        name: 'HMAC'
      }, true, ['sign']];
      /* harmony default export */

      __webpack_exports__["default"] = bogusWebCrypto;
      /***/
    },

    /***/
    "uGsb": function uGsb(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./x64-core */
          "MlIO"), __webpack_require__(
          /*! ./sha512 */
          "1uat"));
        } else {}
      })(this, function (CryptoJS) {
        (function () {
          // Shortcuts
          var C = CryptoJS;
          var C_x64 = C.x64;
          var X64Word = C_x64.Word;
          var X64WordArray = C_x64.WordArray;
          var C_algo = C.algo;
          var SHA512 = C_algo.SHA512;
          /**
           * SHA-384 hash algorithm.
           */

          var SHA384 = C_algo.SHA384 = SHA512.extend({
            _doReset: function _doReset() {
              this._hash = new X64WordArray.init([new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507), new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939), new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511), new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)]);
            },
            _doFinalize: function _doFinalize() {
              var hash = SHA512._doFinalize.call(this);

              hash.sigBytes -= 16;
              return hash;
            }
          });
          /**
           * Shortcut function to the hasher's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           *
           * @return {WordArray} The hash.
           *
           * @static
           *
           * @example
           *
           *     var hash = CryptoJS.SHA384('message');
           *     var hash = CryptoJS.SHA384(wordArray);
           */

          C.SHA384 = SHA512._createHelper(SHA384);
          /**
           * Shortcut function to the HMAC's object interface.
           *
           * @param {WordArray|string} message The message to hash.
           * @param {WordArray|string} key The secret key.
           *
           * @return {WordArray} The HMAC.
           *
           * @static
           *
           * @example
           *
           *     var hmac = CryptoJS.HmacSHA384(message, key);
           */

          C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
        })();

        return CryptoJS.SHA384;
      });
      /***/

    },

    /***/
    "uGxW": function uGxW(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./cipher-core */
          "OLod"));
        } else {}
      })(this, function (CryptoJS) {
        /**
         * A noop padding strategy.
         */
        CryptoJS.pad.NoPadding = {
          pad: function pad() {},
          unpad: function unpad() {}
        };
        return CryptoJS.pad.NoPadding;
      });
      /***/

    },

    /***/
    "v9/r": function v9R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../lib/buffer_utils.js */
      "xpfA");
      /* harmony import */


      var _lib_check_iv_length_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../lib/check_iv_length.js */
      "g1Po");
      /* harmony import */


      var _check_cek_length_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./check_cek_length.js */
      "KMcw");
      /* harmony import */


      var _timing_safe_equal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./timing_safe_equal.js */
      "oZgo");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");
      /* harmony import */


      var _webcrypto_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./webcrypto.js */
      "hqmz");
      /* harmony import */


      var _lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../lib/crypto_key.js */
      "D3C9");
      /* harmony import */


      var _lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../lib/invalid_key_input.js */
      "wZa+");
      /* harmony import */


      var _is_key_like_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./is_key_like.js */
      "H/EN");

      function cbcDecrypt(_x143, _x144, _x145, _x146, _x147, _x148) {
        return _cbcDecrypt.apply(this, arguments);
      }

      function _cbcDecrypt() {
        _cbcDecrypt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee57(enc, cek, ciphertext, iv, tag, aad) {
          var keySize, encKey, macKey, macData, expectedTag, macCheckPassed, plaintext;
          return regeneratorRuntime.wrap(function _callee57$(_context57) {
            while (1) {
              switch (_context57.prev = _context57.next) {
                case 0:
                  if (cek instanceof Uint8Array) {
                    _context57.next = 2;
                    break;
                  }

                  throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_7__["default"])(cek, 'Uint8Array'));

                case 2:
                  keySize = parseInt(enc.slice(1, 4), 10);
                  _context57.next = 5;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_5__["default"].subtle.importKey('raw', cek.subarray(keySize >> 3), 'AES-CBC', false, ['decrypt']);

                case 5:
                  encKey = _context57.sent;
                  _context57.next = 8;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_5__["default"].subtle.importKey('raw', cek.subarray(0, keySize >> 3), {
                    hash: "SHA-".concat(keySize << 1),
                    name: 'HMAC'
                  }, false, ['sign']);

                case 8:
                  macKey = _context57.sent;
                  macData = Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["concat"])(aad, iv, ciphertext, Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["uint64be"])(aad.length << 3));
                  _context57.t0 = Uint8Array;
                  _context57.next = 13;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_5__["default"].subtle.sign('HMAC', macKey, macData);

                case 13:
                  _context57.t1 = _context57.sent.slice(0, keySize >> 3);
                  expectedTag = new _context57.t0(_context57.t1);

                  try {
                    macCheckPassed = Object(_timing_safe_equal_js__WEBPACK_IMPORTED_MODULE_3__["default"])(tag, expectedTag);
                  } catch (_a) {}

                  if (macCheckPassed) {
                    _context57.next = 18;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_4__["JWEDecryptionFailed"]();

                case 18:
                  _context57.prev = 18;
                  _context57.t2 = Uint8Array;
                  _context57.next = 22;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_5__["default"].subtle.decrypt({
                    iv: iv,
                    name: 'AES-CBC'
                  }, encKey, ciphertext);

                case 22:
                  _context57.t3 = _context57.sent;
                  plaintext = new _context57.t2(_context57.t3);
                  _context57.next = 28;
                  break;

                case 26:
                  _context57.prev = 26;
                  _context57.t4 = _context57["catch"](18);

                case 28:
                  if (plaintext) {
                    _context57.next = 30;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_4__["JWEDecryptionFailed"]();

                case 30:
                  return _context57.abrupt("return", plaintext);

                case 31:
                case "end":
                  return _context57.stop();
              }
            }
          }, _callee57, null, [[18, 26]]);
        }));
        return _cbcDecrypt.apply(this, arguments);
      }

      function gcmDecrypt(_x149, _x150, _x151, _x152, _x153, _x154) {
        return _gcmDecrypt.apply(this, arguments);
      }

      function _gcmDecrypt() {
        _gcmDecrypt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee58(enc, cek, ciphertext, iv, tag, aad) {
          var encKey;
          return regeneratorRuntime.wrap(function _callee58$(_context58) {
            while (1) {
              switch (_context58.prev = _context58.next) {
                case 0:
                  if (!(cek instanceof Uint8Array)) {
                    _context58.next = 6;
                    break;
                  }

                  _context58.next = 3;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_5__["default"].subtle.importKey('raw', cek, 'AES-GCM', false, ['decrypt']);

                case 3:
                  encKey = _context58.sent;
                  _context58.next = 8;
                  break;

                case 6:
                  Object(_lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_6__["checkEncCryptoKey"])(cek, enc, 'decrypt');
                  encKey = cek;

                case 8:
                  _context58.prev = 8;
                  _context58.t0 = Uint8Array;
                  _context58.next = 12;
                  return _webcrypto_js__WEBPACK_IMPORTED_MODULE_5__["default"].subtle.decrypt({
                    additionalData: aad,
                    iv: iv,
                    name: 'AES-GCM',
                    tagLength: 128
                  }, encKey, Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["concat"])(ciphertext, tag));

                case 12:
                  _context58.t1 = _context58.sent;
                  return _context58.abrupt("return", new _context58.t0(_context58.t1));

                case 16:
                  _context58.prev = 16;
                  _context58.t2 = _context58["catch"](8);
                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_4__["JWEDecryptionFailed"]();

                case 19:
                case "end":
                  return _context58.stop();
              }
            }
          }, _callee58, null, [[8, 16]]);
        }));
        return _gcmDecrypt.apply(this, arguments);
      }

      var decrypt = /*#__PURE__*/function () {
        var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee56(enc, cek, ciphertext, iv, tag, aad) {
          return regeneratorRuntime.wrap(function _callee56$(_context56) {
            while (1) {
              switch (_context56.prev = _context56.next) {
                case 0:
                  if (!(!Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_5__["isCryptoKey"])(cek) && !(cek instanceof Uint8Array))) {
                    _context56.next = 2;
                    break;
                  }

                  throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_7__["default"]).apply(void 0, [cek].concat(_toConsumableArray(_is_key_like_js__WEBPACK_IMPORTED_MODULE_8__["types"]), ['Uint8Array'])));

                case 2:
                  Object(_lib_check_iv_length_js__WEBPACK_IMPORTED_MODULE_1__["default"])(enc, iv);
                  _context56.t0 = enc;
                  _context56.next = _context56.t0 === 'A128CBC-HS256' ? 6 : _context56.t0 === 'A192CBC-HS384' ? 6 : _context56.t0 === 'A256CBC-HS512' ? 6 : _context56.t0 === 'A128GCM' ? 8 : _context56.t0 === 'A192GCM' ? 8 : _context56.t0 === 'A256GCM' ? 8 : 10;
                  break;

                case 6:
                  if (cek instanceof Uint8Array) Object(_check_cek_length_js__WEBPACK_IMPORTED_MODULE_2__["default"])(cek, parseInt(enc.slice(-3), 10));
                  return _context56.abrupt("return", cbcDecrypt(enc, cek, ciphertext, iv, tag, aad));

                case 8:
                  if (cek instanceof Uint8Array) Object(_check_cek_length_js__WEBPACK_IMPORTED_MODULE_2__["default"])(cek, parseInt(enc.slice(1, 4), 10));
                  return _context56.abrupt("return", gcmDecrypt(enc, cek, ciphertext, iv, tag, aad));

                case 10:
                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_4__["JOSENotSupported"]('Unsupported JWE Content Encryption Algorithm');

                case 11:
                case "end":
                  return _context56.stop();
              }
            }
          }, _callee56);
        }));

        return function decrypt(_x155, _x156, _x157, _x158, _x159, _x160) {
          return _ref18.apply(this, arguments);
        };
      }();
      /* harmony default export */


      __webpack_exports__["default"] = decrypt;
      /***/
    },

    /***/
    "w7YG": function w7YG(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./enc-base64 */
          "ETIr"), __webpack_require__(
          /*! ./md5 */
          "cv67"), __webpack_require__(
          /*! ./evpkdf */
          "K3mO"), __webpack_require__(
          /*! ./cipher-core */
          "OLod"));
        } else {}
      })(this, function (CryptoJS) {
        (function () {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var StreamCipher = C_lib.StreamCipher;
          var C_algo = C.algo;
          /**
           * RC4 stream cipher algorithm.
           */

          var RC4 = C_algo.RC4 = StreamCipher.extend({
            _doReset: function _doReset() {
              // Shortcuts
              var key = this._key;
              var keyWords = key.words;
              var keySigBytes = key.sigBytes; // Init sbox

              var S = this._S = [];

              for (var i = 0; i < 256; i++) {
                S[i] = i;
              } // Key setup


              for (var i = 0, j = 0; i < 256; i++) {
                var keyByteIndex = i % keySigBytes;
                var keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 0xff;
                j = (j + S[i] + keyByte) % 256; // Swap

                var t = S[i];
                S[i] = S[j];
                S[j] = t;
              } // Counters


              this._i = this._j = 0;
            },
            _doProcessBlock: function _doProcessBlock(M, offset) {
              M[offset] ^= generateKeystreamWord.call(this);
            },
            keySize: 256 / 32,
            ivSize: 0
          });

          function generateKeystreamWord() {
            // Shortcuts
            var S = this._S;
            var i = this._i;
            var j = this._j; // Generate keystream word

            var keystreamWord = 0;

            for (var n = 0; n < 4; n++) {
              i = (i + 1) % 256;
              j = (j + S[i]) % 256; // Swap

              var t = S[i];
              S[i] = S[j];
              S[j] = t;
              keystreamWord |= S[(S[i] + S[j]) % 256] << 24 - n * 8;
            } // Update counters


            this._i = i;
            this._j = j;
            return keystreamWord;
          }
          /**
           * Shortcut functions to the cipher's object interface.
           *
           * @example
           *
           *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
           *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
           */


          C.RC4 = StreamCipher._createHelper(RC4);
          /**
           * Modified RC4 stream cipher algorithm.
           */

          var RC4Drop = C_algo.RC4Drop = RC4.extend({
            /**
             * Configuration options.
             *
             * @property {number} drop The number of keystream words to drop. Default 192
             */
            cfg: RC4.cfg.extend({
              drop: 192
            }),
            _doReset: function _doReset() {
              RC4._doReset.call(this); // Drop


              for (var i = this.cfg.drop; i > 0; i--) {
                generateKeystreamWord.call(this);
              }
            }
          });
          /**
           * Shortcut functions to the cipher's object interface.
           *
           * @example
           *
           *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
           *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
           */

          C.RC4Drop = StreamCipher._createHelper(RC4Drop);
        })();

        return CryptoJS.RC4;
      });
      /***/

    },

    /***/
    "wZa+": function wZa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = function (actual) {
        var msg = 'Key must be ';

        for (var _len3 = arguments.length, types = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          types[_key3 - 1] = arguments[_key3];
        }

        if (types.length > 2) {
          var last = types.pop();
          msg += "one of type ".concat(types.join(', '), ", or ").concat(last, ".");
        } else if (types.length === 2) {
          msg += "one of type ".concat(types[0], " or ").concat(types[1], ".");
        } else {
          msg += "of type ".concat(types[0], ".");
        }

        if (actual == null) {
          msg += " Received ".concat(actual);
        } else if (typeof actual === 'function' && actual.name) {
          msg += " Received function ".concat(actual.name);
        } else if (typeof actual === 'object' && actual != null) {
          if (actual.constructor && actual.constructor.name) {
            msg += " Received an instance of ".concat(actual.constructor.name);
          }
        }

        return msg;
      };
      /***/

    },

    /***/
    "wZgz": function wZgz(module, exports, __webpack_require__) {
      ;

      (function (root, factory, undef) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"), __webpack_require__(
          /*! ./enc-base64 */
          "ETIr"), __webpack_require__(
          /*! ./md5 */
          "cv67"), __webpack_require__(
          /*! ./evpkdf */
          "K3mO"), __webpack_require__(
          /*! ./cipher-core */
          "OLod"));
        } else {}
      })(this, function (CryptoJS) {
        (function () {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var BlockCipher = C_lib.BlockCipher;
          var C_algo = C.algo; // Lookup tables

          var SBOX = [];
          var INV_SBOX = [];
          var SUB_MIX_0 = [];
          var SUB_MIX_1 = [];
          var SUB_MIX_2 = [];
          var SUB_MIX_3 = [];
          var INV_SUB_MIX_0 = [];
          var INV_SUB_MIX_1 = [];
          var INV_SUB_MIX_2 = [];
          var INV_SUB_MIX_3 = []; // Compute lookup tables

          (function () {
            // Compute double table
            var d = [];

            for (var i = 0; i < 256; i++) {
              if (i < 128) {
                d[i] = i << 1;
              } else {
                d[i] = i << 1 ^ 0x11b;
              }
            } // Walk GF(2^8)


            var x = 0;
            var xi = 0;

            for (var i = 0; i < 256; i++) {
              // Compute sbox
              var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
              sx = sx >>> 8 ^ sx & 0xff ^ 0x63;
              SBOX[x] = sx;
              INV_SBOX[sx] = x; // Compute multiplication

              var x2 = d[x];
              var x4 = d[x2];
              var x8 = d[x4]; // Compute sub bytes, mix columns tables

              var t = d[sx] * 0x101 ^ sx * 0x1010100;
              SUB_MIX_0[x] = t << 24 | t >>> 8;
              SUB_MIX_1[x] = t << 16 | t >>> 16;
              SUB_MIX_2[x] = t << 8 | t >>> 24;
              SUB_MIX_3[x] = t; // Compute inv sub bytes, inv mix columns tables

              var t = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
              INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
              INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
              INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
              INV_SUB_MIX_3[sx] = t; // Compute next counter

              if (!x) {
                x = xi = 1;
              } else {
                x = x2 ^ d[d[d[x8 ^ x2]]];
                xi ^= d[d[xi]];
              }
            }
          })(); // Precomputed Rcon lookup


          var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
          /**
           * AES block cipher algorithm.
           */

          var AES = C_algo.AES = BlockCipher.extend({
            _doReset: function _doReset() {
              var t; // Skip reset of nRounds has been set before and key did not change

              if (this._nRounds && this._keyPriorReset === this._key) {
                return;
              } // Shortcuts


              var key = this._keyPriorReset = this._key;
              var keyWords = key.words;
              var keySize = key.sigBytes / 4; // Compute number of rounds

              var nRounds = this._nRounds = keySize + 6; // Compute number of key schedule rows

              var ksRows = (nRounds + 1) * 4; // Compute key schedule

              var keySchedule = this._keySchedule = [];

              for (var ksRow = 0; ksRow < ksRows; ksRow++) {
                if (ksRow < keySize) {
                  keySchedule[ksRow] = keyWords[ksRow];
                } else {
                  t = keySchedule[ksRow - 1];

                  if (!(ksRow % keySize)) {
                    // Rot word
                    t = t << 8 | t >>> 24; // Sub word

                    t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff]; // Mix Rcon

                    t ^= RCON[ksRow / keySize | 0] << 24;
                  } else if (keySize > 6 && ksRow % keySize == 4) {
                    // Sub word
                    t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff];
                  }

                  keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
                }
              } // Compute inv key schedule


              var invKeySchedule = this._invKeySchedule = [];

              for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
                var ksRow = ksRows - invKsRow;

                if (invKsRow % 4) {
                  var t = keySchedule[ksRow];
                } else {
                  var t = keySchedule[ksRow - 4];
                }

                if (invKsRow < 4 || ksRow <= 4) {
                  invKeySchedule[invKsRow] = t;
                } else {
                  invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 0xff]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
                }
              }
            },
            encryptBlock: function encryptBlock(M, offset) {
              this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
            },
            decryptBlock: function decryptBlock(M, offset) {
              // Swap 2nd and 4th rows
              var t = M[offset + 1];
              M[offset + 1] = M[offset + 3];
              M[offset + 3] = t;

              this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX); // Inv swap 2nd and 4th rows


              var t = M[offset + 1];
              M[offset + 1] = M[offset + 3];
              M[offset + 3] = t;
            },
            _doCryptBlock: function _doCryptBlock(M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
              // Shortcut
              var nRounds = this._nRounds; // Get input, add round key

              var s0 = M[offset] ^ keySchedule[0];
              var s1 = M[offset + 1] ^ keySchedule[1];
              var s2 = M[offset + 2] ^ keySchedule[2];
              var s3 = M[offset + 3] ^ keySchedule[3]; // Key schedule row counter

              var ksRow = 4; // Rounds

              for (var round = 1; round < nRounds; round++) {
                // Shift rows, sub bytes, mix columns, add round key
                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 0xff] ^ SUB_MIX_2[s2 >>> 8 & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 0xff] ^ SUB_MIX_2[s3 >>> 8 & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 0xff] ^ SUB_MIX_2[s0 >>> 8 & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 0xff] ^ SUB_MIX_2[s1 >>> 8 & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++]; // Update state

                s0 = t0;
                s1 = t1;
                s2 = t2;
                s3 = t3;
              } // Shift rows, sub bytes, add round key


              var t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 0xff] << 16 | SBOX[s2 >>> 8 & 0xff] << 8 | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
              var t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 0xff] << 16 | SBOX[s3 >>> 8 & 0xff] << 8 | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
              var t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 0xff] << 16 | SBOX[s0 >>> 8 & 0xff] << 8 | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
              var t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 0xff] << 16 | SBOX[s1 >>> 8 & 0xff] << 8 | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++]; // Set output

              M[offset] = t0;
              M[offset + 1] = t1;
              M[offset + 2] = t2;
              M[offset + 3] = t3;
            },
            keySize: 256 / 32
          });
          /**
           * Shortcut functions to the cipher's object interface.
           *
           * @example
           *
           *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
           *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
           */

          C.AES = BlockCipher._createHelper(AES);
        })();

        return CryptoJS.AES;
      });
      /***/

    },

    /***/
    "wbyO": function wbyO(module, exports, __webpack_require__) {
      ;

      (function (root, factory) {
        if (true) {
          // CommonJS
          module.exports = exports = factory(__webpack_require__(
          /*! ./core */
          "Ib8C"));
        } else {}
      })(this, function (CryptoJS) {
        (function () {
          // Shortcuts
          var C = CryptoJS;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var C_enc = C.enc;
          /**
           * Base64url encoding strategy.
           */

          var Base64url = C_enc.Base64url = {
            /**
             * Converts a word array to a Base64url string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @param {boolean} urlSafe Whether to use url safe
             *
             * @return {string} The Base64url string.
             *
             * @static
             *
             * @example
             *
             *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
             */
            stringify: function stringify(wordArray) {
              var urlSafe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
              // Shortcuts
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var map = urlSafe ? this._safe_map : this._map; // Clamp excess bits

              wordArray.clamp(); // Convert

              var base64Chars = [];

              for (var i = 0; i < sigBytes; i += 3) {
                var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
                var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 0xff;
                var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 0xff;
                var triplet = byte1 << 16 | byte2 << 8 | byte3;

                for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                  base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));
                }
              } // Add padding


              var paddingChar = map.charAt(64);

              if (paddingChar) {
                while (base64Chars.length % 4) {
                  base64Chars.push(paddingChar);
                }
              }

              return base64Chars.join('');
            },

            /**
             * Converts a Base64url string to a word array.
             *
             * @param {string} base64Str The Base64url string.
             *
             * @param {boolean} urlSafe Whether to use url safe
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
             */
            parse: function parse(base64Str) {
              var urlSafe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
              // Shortcuts
              var base64StrLength = base64Str.length;
              var map = urlSafe ? this._safe_map : this._map;
              var reverseMap = this._reverseMap;

              if (!reverseMap) {
                reverseMap = this._reverseMap = [];

                for (var j = 0; j < map.length; j++) {
                  reverseMap[map.charCodeAt(j)] = j;
                }
              } // Ignore padding


              var paddingChar = map.charAt(64);

              if (paddingChar) {
                var paddingIndex = base64Str.indexOf(paddingChar);

                if (paddingIndex !== -1) {
                  base64StrLength = paddingIndex;
                }
              } // Convert


              return parseLoop(base64Str, base64StrLength, reverseMap);
            },
            _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            _safe_map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
          };

          function parseLoop(base64Str, base64StrLength, reverseMap) {
            var words = [];
            var nBytes = 0;

            for (var i = 0; i < base64StrLength; i++) {
              if (i % 4) {
                var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
                var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
                var bitsCombined = bits1 | bits2;
                words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
                nBytes++;
              }
            }

            return WordArray.create(words, nBytes);
          }
        })();

        return CryptoJS.enc.Base64url;
      });
      /***/

    },

    /***/
    "xHgm": function xHgm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "flattenedDecrypt", function () {
        return flattenedDecrypt;
      });
      /* harmony import */


      var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../runtime/base64url.js */
      "KjJ5");
      /* harmony import */


      var _runtime_decrypt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../runtime/decrypt.js */
      "v9/r");
      /* harmony import */


      var _runtime_zlib_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../runtime/zlib.js */
      "9yED");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../util/errors.js */
      "StPg");
      /* harmony import */


      var _lib_is_disjoint_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../lib/is_disjoint.js */
      "yopU");
      /* harmony import */


      var _lib_is_object_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../lib/is_object.js */
      "2fVw");
      /* harmony import */


      var _lib_decrypt_key_management_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../lib/decrypt_key_management.js */
      "AQ7b");
      /* harmony import */


      var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../lib/buffer_utils.js */
      "xpfA");
      /* harmony import */


      var _lib_cek_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../lib/cek.js */
      "qW6o");
      /* harmony import */


      var _lib_validate_crit_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../lib/validate_crit.js */
      "ElMP");
      /* harmony import */


      var _lib_validate_algorithms_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../lib/validate_algorithms.js */
      "JnDH");

      function flattenedDecrypt(_x161, _x162, _x163) {
        return _flattenedDecrypt.apply(this, arguments);
      }
      /***/


      function _flattenedDecrypt() {
        _flattenedDecrypt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee59(jwe, key, options) {
          var _a, parsedProt, _protectedHeader, joseHeader, alg, enc, keyManagementAlgorithms, contentEncryptionAlgorithms, encryptedKey, resolvedKey, cek, iv, tag, protectedHeader, additionalData, plaintext, result;

          return regeneratorRuntime.wrap(function _callee59$(_context59) {
            while (1) {
              switch (_context59.prev = _context59.next) {
                case 0:
                  if (Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_5__["default"])(jwe)) {
                    _context59.next = 2;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('Flattened JWE must be an object');

                case 2:
                  if (!(jwe["protected"] === undefined && jwe.header === undefined && jwe.unprotected === undefined)) {
                    _context59.next = 4;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JOSE Header missing');

                case 4:
                  if (!(typeof jwe.iv !== 'string')) {
                    _context59.next = 6;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JWE Initialization Vector missing or incorrect type');

                case 6:
                  if (!(typeof jwe.ciphertext !== 'string')) {
                    _context59.next = 8;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JWE Ciphertext missing or incorrect type');

                case 8:
                  if (!(typeof jwe.tag !== 'string')) {
                    _context59.next = 10;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JWE Authentication Tag missing or incorrect type');

                case 10:
                  if (!(jwe["protected"] !== undefined && typeof jwe["protected"] !== 'string')) {
                    _context59.next = 12;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JWE Protected Header incorrect type');

                case 12:
                  if (!(jwe.encrypted_key !== undefined && typeof jwe.encrypted_key !== 'string')) {
                    _context59.next = 14;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JWE Encrypted Key incorrect type');

                case 14:
                  if (!(jwe.aad !== undefined && typeof jwe.aad !== 'string')) {
                    _context59.next = 16;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JWE AAD incorrect type');

                case 16:
                  if (!(jwe.header !== undefined && !Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_5__["default"])(jwe.header))) {
                    _context59.next = 18;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JWE Shared Unprotected Header incorrect type');

                case 18:
                  if (!(jwe.unprotected !== undefined && !Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_5__["default"])(jwe.unprotected))) {
                    _context59.next = 20;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JWE Per-Recipient Unprotected Header incorrect type');

                case 20:
                  if (!jwe["protected"]) {
                    _context59.next = 29;
                    break;
                  }

                  _protectedHeader = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(jwe["protected"]);
                  _context59.prev = 22;
                  parsedProt = JSON.parse(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__["decoder"].decode(_protectedHeader));
                  _context59.next = 29;
                  break;

                case 26:
                  _context59.prev = 26;
                  _context59.t0 = _context59["catch"](22);
                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JWE Protected Header is invalid');

                case 29:
                  if (Object(_lib_is_disjoint_js__WEBPACK_IMPORTED_MODULE_4__["default"])(parsedProt, jwe.header, jwe.unprotected)) {
                    _context59.next = 31;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint');

                case 31:
                  joseHeader = _objectSpread(_objectSpread(_objectSpread({}, parsedProt), jwe.header), jwe.unprotected);
                  Object(_lib_validate_crit_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"], new Map(), options === null || options === void 0 ? void 0 : options.crit, parsedProt, joseHeader);

                  if (!(joseHeader.zip !== undefined)) {
                    _context59.next = 38;
                    break;
                  }

                  if (!(!parsedProt || !parsedProt.zip)) {
                    _context59.next = 36;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');

                case 36:
                  if (!(joseHeader.zip !== 'DEF')) {
                    _context59.next = 38;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JOSENotSupported"]('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value');

                case 38:
                  alg = joseHeader.alg, enc = joseHeader.enc;

                  if (!(typeof alg !== 'string' || !alg)) {
                    _context59.next = 41;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('missing JWE Algorithm (alg) in JWE Header');

                case 41:
                  if (!(typeof enc !== 'string' || !enc)) {
                    _context59.next = 43;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('missing JWE Encryption Algorithm (enc) in JWE Header');

                case 43:
                  keyManagementAlgorithms = options && Object(_lib_validate_algorithms_js__WEBPACK_IMPORTED_MODULE_10__["default"])('keyManagementAlgorithms', options.keyManagementAlgorithms);
                  contentEncryptionAlgorithms = options && Object(_lib_validate_algorithms_js__WEBPACK_IMPORTED_MODULE_10__["default"])('contentEncryptionAlgorithms', options.contentEncryptionAlgorithms);

                  if (!(keyManagementAlgorithms && !keyManagementAlgorithms.has(alg))) {
                    _context59.next = 47;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JOSEAlgNotAllowed"]('"alg" (Algorithm) Header Parameter not allowed');

                case 47:
                  if (!(contentEncryptionAlgorithms && !contentEncryptionAlgorithms.has(enc))) {
                    _context59.next = 49;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JOSEAlgNotAllowed"]('"enc" (Encryption Algorithm) Header Parameter not allowed');

                case 49:
                  if (jwe.encrypted_key !== undefined) {
                    encryptedKey = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(jwe.encrypted_key);
                  }

                  resolvedKey = false;

                  if (!(typeof key === 'function')) {
                    _context59.next = 56;
                    break;
                  }

                  _context59.next = 54;
                  return key(parsedProt, jwe);

                case 54:
                  key = _context59.sent;
                  resolvedKey = true;

                case 56:
                  _context59.prev = 56;
                  _context59.next = 59;
                  return Object(_lib_decrypt_key_management_js__WEBPACK_IMPORTED_MODULE_6__["default"])(alg, key, encryptedKey, joseHeader);

                case 59:
                  cek = _context59.sent;
                  _context59.next = 67;
                  break;

                case 62:
                  _context59.prev = 62;
                  _context59.t1 = _context59["catch"](56);

                  if (!(_context59.t1 instanceof TypeError)) {
                    _context59.next = 66;
                    break;
                  }

                  throw _context59.t1;

                case 66:
                  cek = Object(_lib_cek_js__WEBPACK_IMPORTED_MODULE_8__["default"])(enc);

                case 67:
                  iv = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(jwe.iv);
                  tag = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(jwe.tag);
                  protectedHeader = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__["encoder"].encode((_a = jwe["protected"]) !== null && _a !== void 0 ? _a : '');

                  if (jwe.aad !== undefined) {
                    additionalData = Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__["concat"])(protectedHeader, _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__["encoder"].encode('.'), _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__["encoder"].encode(jwe.aad));
                  } else {
                    additionalData = protectedHeader;
                  }

                  _context59.next = 73;
                  return Object(_runtime_decrypt_js__WEBPACK_IMPORTED_MODULE_1__["default"])(enc, cek, Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(jwe.ciphertext), iv, tag, additionalData);

                case 73:
                  plaintext = _context59.sent;

                  if (!(joseHeader.zip === 'DEF')) {
                    _context59.next = 78;
                    break;
                  }

                  _context59.next = 77;
                  return ((options === null || options === void 0 ? void 0 : options.inflateRaw) || _runtime_zlib_js__WEBPACK_IMPORTED_MODULE_2__["inflate"])(plaintext);

                case 77:
                  plaintext = _context59.sent;

                case 78:
                  result = {
                    plaintext: plaintext
                  };

                  if (jwe["protected"] !== undefined) {
                    result.protectedHeader = parsedProt;
                  }

                  if (jwe.aad !== undefined) {
                    result.additionalAuthenticatedData = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(jwe.aad);
                  }

                  if (jwe.unprotected !== undefined) {
                    result.sharedUnprotectedHeader = jwe.unprotected;
                  }

                  if (jwe.header !== undefined) {
                    result.unprotectedHeader = jwe.header;
                  }

                  if (!resolvedKey) {
                    _context59.next = 85;
                    break;
                  }

                  return _context59.abrupt("return", _objectSpread(_objectSpread({}, result), {}, {
                    key: key
                  }));

                case 85:
                  return _context59.abrupt("return", result);

                case 86:
                case "end":
                  return _context59.stop();
              }
            }
          }, _callee59, null, [[22, 26], [56, 62]]);
        }));
        return _flattenedDecrypt.apply(this, arguments);
      }
    },

    /***/
    "xXIV": function xXIV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnsecuredJWT", function () {
        return UnsecuredJWT;
      });
      /* harmony import */


      var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../runtime/base64url.js */
      "KjJ5");
      /* harmony import */


      var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../lib/buffer_utils.js */
      "xpfA");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util/errors.js */
      "StPg");
      /* harmony import */


      var _lib_jwt_claims_set_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../lib/jwt_claims_set.js */
      "rCIK");
      /* harmony import */


      var _produce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./produce.js */
      "Wcb1");

      var UnsecuredJWT = /*#__PURE__*/function (_produce_js__WEBPACK_3) {
        _inherits(UnsecuredJWT, _produce_js__WEBPACK_3);

        var _super19 = _createSuper(UnsecuredJWT);

        function UnsecuredJWT() {
          _classCallCheck(this, UnsecuredJWT);

          return _super19.apply(this, arguments);
        }

        _createClass(UnsecuredJWT, [{
          key: "encode",
          value: function encode() {
            var header = _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"](JSON.stringify({
              alg: 'none'
            }));

            var payload = _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"](JSON.stringify(this._payload));

            return "".concat(header, ".").concat(payload, ".");
          }
        }], [{
          key: "decode",
          value: function decode(jwt, options) {
            if (typeof jwt !== 'string') {
              throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWTInvalid"]('Unsecured JWT must be a string');
            }

            var _jwt$split2 = jwt.split('.'),
                encodedHeader = _jwt$split2[0],
                encodedPayload = _jwt$split2[1],
                signature = _jwt$split2[2],
                length = _jwt$split2.length;

            if (length !== 3 || signature !== '') {
              throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWTInvalid"]('Invalid Unsecured JWT');
            }

            var header;

            try {
              header = JSON.parse(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__["decoder"].decode(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"](encodedHeader)));
              if (header.alg !== 'none') throw new Error();
            } catch (_a) {
              throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWTInvalid"]('Invalid Unsecured JWT');
            }

            var payload = Object(_lib_jwt_claims_set_js__WEBPACK_IMPORTED_MODULE_3__["default"])(header, _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"](encodedPayload), options);
            return {
              payload: payload,
              header: header
            };
          }
        }]);

        return UnsecuredJWT;
      }(_produce_js__WEBPACK_IMPORTED_MODULE_4__["ProduceJWT"]);
      /***/

    },

    /***/
    "xhLL": function xhLL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "compactDecrypt", function () {
        return compactDecrypt;
      });
      /* harmony import */


      var _flattened_decrypt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../flattened/decrypt.js */
      "xHgm");
      /* harmony import */


      var _util_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../util/errors.js */
      "StPg");
      /* harmony import */


      var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../lib/buffer_utils.js */
      "xpfA");

      function compactDecrypt(_x164, _x165, _x166) {
        return _compactDecrypt.apply(this, arguments);
      }
      /***/


      function _compactDecrypt() {
        _compactDecrypt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee60(jwe, key, options) {
          var _jwe$split, protectedHeader, encryptedKey, iv, ciphertext, tag, length, decrypted, result;

          return regeneratorRuntime.wrap(function _callee60$(_context60) {
            while (1) {
              switch (_context60.prev = _context60.next) {
                case 0:
                  if (jwe instanceof Uint8Array) {
                    jwe = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_2__["decoder"].decode(jwe);
                  }

                  if (!(typeof jwe !== 'string')) {
                    _context60.next = 3;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('Compact JWE must be a string or Uint8Array');

                case 3:
                  _jwe$split = jwe.split('.'), protectedHeader = _jwe$split[0], encryptedKey = _jwe$split[1], iv = _jwe$split[2], ciphertext = _jwe$split[3], tag = _jwe$split[4], length = _jwe$split.length;

                  if (!(length !== 5)) {
                    _context60.next = 6;
                    break;
                  }

                  throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('Invalid Compact JWE');

                case 6:
                  _context60.next = 8;
                  return Object(_flattened_decrypt_js__WEBPACK_IMPORTED_MODULE_0__["flattenedDecrypt"])({
                    ciphertext: ciphertext,
                    iv: iv || undefined,
                    "protected": protectedHeader || undefined,
                    tag: tag || undefined,
                    encrypted_key: encryptedKey || undefined
                  }, key, options);

                case 8:
                  decrypted = _context60.sent;
                  result = {
                    plaintext: decrypted.plaintext,
                    protectedHeader: decrypted.protectedHeader
                  };

                  if (!(typeof key === 'function')) {
                    _context60.next = 12;
                    break;
                  }

                  return _context60.abrupt("return", _objectSpread(_objectSpread({}, result), {}, {
                    key: decrypted.key
                  }));

                case 12:
                  return _context60.abrupt("return", result);

                case 13:
                case "end":
                  return _context60.stop();
              }
            }
          }, _callee60);
        }));
        return _compactDecrypt.apply(this, arguments);
      }
    },

    /***/
    "xpfA": function xpfA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "encoder", function () {
        return encoder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decoder", function () {
        return decoder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "concat", function () {
        return concat;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "p2s", function () {
        return p2s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "uint64be", function () {
        return uint64be;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "uint32be", function () {
        return uint32be;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lengthAndInput", function () {
        return lengthAndInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "concatKdf", function () {
        return concatKdf;
      });
      /* harmony import */


      var _runtime_digest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../runtime/digest.js */
      "DsUi");

      var encoder = new TextEncoder();
      var decoder = new TextDecoder();
      var MAX_INT32 = Math.pow(2, 32);

      function concat() {
        for (var _len4 = arguments.length, buffers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          buffers[_key4] = arguments[_key4];
        }

        var size = buffers.reduce(function (acc, _ref19) {
          var length = _ref19.length;
          return acc + length;
        }, 0);
        var buf = new Uint8Array(size);
        var i = 0;
        buffers.forEach(function (buffer) {
          buf.set(buffer, i);
          i += buffer.length;
        });
        return buf;
      }

      function p2s(alg, p2sInput) {
        return concat(encoder.encode(alg), new Uint8Array([0]), p2sInput);
      }

      function writeUInt32BE(buf, value, offset) {
        if (value < 0 || value >= MAX_INT32) {
          throw new RangeError("value must be >= 0 and <= ".concat(MAX_INT32 - 1, ". Received ").concat(value));
        }

        buf.set([value >>> 24, value >>> 16, value >>> 8, value & 0xff], offset);
      }

      function uint64be(value) {
        var high = Math.floor(value / MAX_INT32);
        var low = value % MAX_INT32;
        var buf = new Uint8Array(8);
        writeUInt32BE(buf, high, 0);
        writeUInt32BE(buf, low, 4);
        return buf;
      }

      function uint32be(value) {
        var buf = new Uint8Array(4);
        writeUInt32BE(buf, value);
        return buf;
      }

      function lengthAndInput(input) {
        return concat(uint32be(input.length), input);
      }

      function concatKdf(_x167, _x168, _x169) {
        return _concatKdf.apply(this, arguments);
      }
      /***/


      function _concatKdf() {
        _concatKdf = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee61(secret, bits, value) {
          var iterations, res, iter, buf;
          return regeneratorRuntime.wrap(function _callee61$(_context61) {
            while (1) {
              switch (_context61.prev = _context61.next) {
                case 0:
                  iterations = Math.ceil((bits >> 3) / 32);
                  res = new Uint8Array(iterations * 32);
                  iter = 0;

                case 3:
                  if (!(iter < iterations)) {
                    _context61.next = 17;
                    break;
                  }

                  buf = new Uint8Array(4 + secret.length + value.length);
                  buf.set(uint32be(iter + 1));
                  buf.set(secret, 4);
                  buf.set(value, 4 + secret.length);
                  _context61.t0 = res;
                  _context61.next = 11;
                  return Object(_runtime_digest_js__WEBPACK_IMPORTED_MODULE_0__["default"])('sha256', buf);

                case 11:
                  _context61.t1 = _context61.sent;
                  _context61.t2 = iter * 32;

                  _context61.t0.set.call(_context61.t0, _context61.t1, _context61.t2);

                case 14:
                  iter++;
                  _context61.next = 3;
                  break;

                case 17:
                  return _context61.abrupt("return", res.slice(0, bits >> 3));

                case 18:
                case "end":
                  return _context61.stop();
              }
            }
          }, _callee61);
        }));
        return _concatKdf.apply(this, arguments);
      }
    },

    /***/
    "xwey": function xwey(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompactEncrypt", function () {
        return CompactEncrypt;
      });
      /* harmony import */


      var _flattened_encrypt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../flattened/encrypt.js */
      "Dk7m");

      var CompactEncrypt = /*#__PURE__*/function () {
        function CompactEncrypt(plaintext) {
          _classCallCheck(this, CompactEncrypt);

          this._flattened = new _flattened_encrypt_js__WEBPACK_IMPORTED_MODULE_0__["FlattenedEncrypt"](plaintext);
        }

        _createClass(CompactEncrypt, [{
          key: "setContentEncryptionKey",
          value: function setContentEncryptionKey(cek) {
            this._flattened.setContentEncryptionKey(cek);

            return this;
          }
        }, {
          key: "setInitializationVector",
          value: function setInitializationVector(iv) {
            this._flattened.setInitializationVector(iv);

            return this;
          }
        }, {
          key: "setProtectedHeader",
          value: function setProtectedHeader(protectedHeader) {
            this._flattened.setProtectedHeader(protectedHeader);

            return this;
          }
        }, {
          key: "setKeyManagementParameters",
          value: function setKeyManagementParameters(parameters) {
            this._flattened.setKeyManagementParameters(parameters);

            return this;
          }
        }, {
          key: "encrypt",
          value: function () {
            var _encrypt4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee62(key, options) {
              var jwe;
              return regeneratorRuntime.wrap(function _callee62$(_context62) {
                while (1) {
                  switch (_context62.prev = _context62.next) {
                    case 0:
                      _context62.next = 2;
                      return this._flattened.encrypt(key, options);

                    case 2:
                      jwe = _context62.sent;
                      return _context62.abrupt("return", [jwe["protected"], jwe.encrypted_key, jwe.iv, jwe.ciphertext, jwe.tag].join('.'));

                    case 4:
                    case "end":
                      return _context62.stop();
                  }
                }
              }, _callee62, this);
            }));

            function encrypt(_x170, _x171) {
              return _encrypt4.apply(this, arguments);
            }

            return encrypt;
          }()
        }]);

        return CompactEncrypt;
      }();
      /***/

    },

    /***/
    "yopU": function yopU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      var isDisjoint = function isDisjoint() {
        for (var _len5 = arguments.length, headers = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          headers[_key5] = arguments[_key5];
        }

        var sources = headers.filter(Boolean);

        if (sources.length === 0 || sources.length === 1) {
          return true;
        }

        var acc;

        var _iterator4 = _createForOfIteratorHelper(sources),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var header = _step4.value;

            var _parameters = Object.keys(header);

            if (!acc || acc.size === 0) {
              acc = new Set(_parameters);
              continue;
            }

            for (var _i3 = 0, _parameters2 = _parameters; _i3 < _parameters2.length; _i3++) {
              var parameter = _parameters2[_i3];

              if (acc.has(parameter)) {
                return false;
              }

              acc.add(parameter);
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        return true;
      };
      /* harmony default export */


      __webpack_exports__["default"] = isDisjoint;
      /***/
    },

    /***/
    "zR7b": function zR7b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EncryptorService", function () {
        return EncryptorService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! crypto-js */
      "NFKh");
      /* harmony import */


      var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var jose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jose */
      "9CFX");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var EncryptorService = /*#__PURE__*/function () {
        function EncryptorService() {
          _classCallCheck(this, EncryptorService);
        }

        _createClass(EncryptorService, [{
          key: "encryptRx",
          value: function encryptRx(userId) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.encrypt(userId).then(function (token) {
              return token;
            }, function (error) {
              throw error;
            }));
          }
        }, {
          key: "encrypt",
          value: function encrypt(userId) {
            var signingKey = '3BRfetbNKmtDYPQaw3UmWyvejxyVJnLF';
            var encryptionKey = 'gFtEPgLL1A6svXHrfz5kdnrDxzevHxnK';
            var initializationVector = 'JRhLdHeVsHGkv5cB';
            var userIdHashSalt = 'lVlTqJg95TeRIIRG';
            var userIdEncryption = this.aesEncrypt(userId, encryptionKey, initializationVector);
            var userIdHash = this.computeSha256Hash(userId, userIdHashSalt);
            console.log('userIdEncryption:', userIdEncryption);
            console.log('userIdHash:', userIdHash);
            return new jose__WEBPACK_IMPORTED_MODULE_3__["SignJWT"]({
              userIdHash: userIdHash,
              userIdEncryption: userIdEncryption
            }).setProtectedHeader({
              alg: 'HS256'
            }).sign(new TextEncoder().encode(signingKey));
          }
        }, {
          key: "aesEncrypt",
          value: function aesEncrypt(text, key, initializationVector) {
            var encondedKey = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8.parse(key);
            var iv = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8.parse(initializationVector);
            var encryptedText = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].encrypt(text, encondedKey, {
              iv: iv
            }).toString();
            return encryptedText;
          }
        }, {
          key: "computeSha256Hash",
          value: function computeSha256Hash(plainText, salt) {
            return new crypto_js__WEBPACK_IMPORTED_MODULE_2__["SHA256"](plainText + salt).toString();
          }
        }]);

        return EncryptorService;
      }();

      EncryptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EncryptorService);
      /***/
    },

    /***/
    "zpKS": function zpKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.page.html */
      "WcN3");
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page.scss */
      "f6od");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_agentifai_agentifai_plugin_controller_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/agentifai/agentifai-plugin-controller.service */
      "Noh+");
      /* harmony import */


      var src_app_services_public_public_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/public/public.service */
      "lpQU");
      /* harmony import */


      var src_app_agentifai_open_alice_intent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/agentifai/open-alice-intent */
      "kf/P");
      /* harmony import */


      var src_app_internal_internal_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/internal/internal-utils */
      "kajc");
      /* harmony import */


      var src_app_agentifai_models_widget_config_agentifai_widget_dimensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/agentifai/models/widget-config/agentifai-widget-dimensions */
      "ncFE");
      /* harmony import */


      var src_app_agentifai_models_widget_config_agentifai_horizontal_alignment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/agentifai/models/widget-config/agentifai-horizontal-alignment */
      "9kcE");
      /* harmony import */


      var src_app_agentifai_models_widget_config_agentifai_vertical_alignment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/agentifai/models/widget-config/agentifai-vertical-alignment */
      "A/hn");
      /* harmony import */


      var src_app_services_agentifai_agentifai_services_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/agentifai/agentifai-services.service */
      "JxHx");
      /* harmony import */


      var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/services/api/api.service */
      "oZWX");
      /* harmony import */


      var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/services/storage/storage.service */
      "E2f4");
      /* harmony import */


      var src_app_services_assistant_utils_assistant_utils_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/services/assistant-utils/assistant-utils.service */
      "pTIB");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var src_app_services_encryptor_encryptor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/services/encryptor/encryptor.service */
      "zR7b");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(navCtrl, alertCtrl, loadingController, agentifaiController, publicApi, services, platform, api, storage, assistantUtils, encryptor) {
          var _this18 = this;

          _classCallCheck(this, HomePage);

          this.navCtrl = navCtrl;
          this.alertCtrl = alertCtrl;
          this.loadingController = loadingController;
          this.agentifaiController = agentifaiController;
          this.publicApi = publicApi;
          this.services = services;
          this.platform = platform;
          this.api = api;
          this.storage = storage;
          this.assistantUtils = assistantUtils;
          this.encryptor = encryptor;
          this.endpoints = src_app_internal_internal_utils__WEBPACK_IMPORTED_MODULE_8__["InternalUtils"].endpoints;
          this.assistantConfigsEnabled = src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].assistantConfigurationEnabled;
          this.apiUrl = "";
          this.tenantId = "";
          this.channelId = "";
          this.themes = [];
          this.intents = [{
            label: 'Unlock Contract',
            value: src_app_agentifai_open_alice_intent__WEBPACK_IMPORTED_MODULE_7__["OpenAliceIntent"].UnlockContract
          }, {
            label: 'Moratorium Form',
            value: src_app_agentifai_open_alice_intent__WEBPACK_IMPORTED_MODULE_7__["OpenAliceIntent"].MoratoriumForm
          }];
          this.platform.ready().then(function () {
            _this18.readEndpoint();

            _this18.readAssistantConfigs();
          });
        }

        _createClass(HomePage, [{
          key: "initializeAction",
          value: function initializeAction() {
            var _this19 = this;

            this.assistantUtils.getConfig().then(function (config) {
              _this19.agentifaiController.initializeWithConfig(config[0], config[1], config[2]);
            });
          }
        }, {
          key: "showWidgetAction",
          value: function showWidgetAction() {
            this.agentifaiController.showWidget();
          }
        }, {
          key: "hideWidgetAction",
          value: function hideWidgetAction() {
            this.agentifaiController.hideWidget();
          }
        }, {
          key: "showAppAction",
          value: function showAppAction() {
            this.agentifaiController.showApp();
          }
        }, {
          key: "openIntent",
          value: function openIntent(intent) {
            this.agentifaiController.showApp(intent);
          }
        }, {
          key: "setWidgetDimensionsAction",
          value: function setWidgetDimensionsAction() {
            var horizontalMargin = 0;
            var verticalMargin = 30;
            var size = 60;
            var dimensions = new src_app_agentifai_models_widget_config_agentifai_widget_dimensions__WEBPACK_IMPORTED_MODULE_9__["AgentifaiWidgetDimensions"](src_app_agentifai_models_widget_config_agentifai_horizontal_alignment__WEBPACK_IMPORTED_MODULE_10__["AgentifaiHorizontalAlignment"].Center, horizontalMargin, src_app_agentifai_models_widget_config_agentifai_vertical_alignment__WEBPACK_IMPORTED_MODULE_11__["AgentifaiVerticalAlignment"].Bottom, verticalMargin, size);
            this.agentifaiController.setWidgetDimensions(dimensions);
          }
        }, {
          key: "registerUser",
          value: function registerUser(user) {
            this.agentifaiController.registerUser(user.id, user.name, null, {});
          }
        }, {
          key: "unregisterUser",
          value: function unregisterUser() {
            this.agentifaiController.unregisterUser();
          }
        }, {
          key: "login",
          value: function login(event) {
            var contractNumber = event.username;
            var accessCode = event.password;
            this.loginService(contractNumber, accessCode);
          }
        }, {
          key: "fakeTokenLogin",
          value: function fakeTokenLogin(event) {
            var contractNumber = event.username;
            var accessCode = event.password;
            this.loginService(contractNumber, accessCode, true);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.logoutService();
          }
        }, {
          key: "endpoint",
          value: function endpoint(event) {
            var endpoint = event;
            this.writeEnpoint(endpoint);
            this.setConfigurations(endpoint.baseUrl);
          }
        }, {
          key: "removeVoiceConsent",
          value: function removeVoiceConsent() {
            var _this20 = this;

            this.services.deleteVoiceTreatmentConsent(null).subscribe(function (resp) {
              _this20.showAlert("SUCCESS", "Voice consent removed");
            }, function (error) {
              _this20.showAlert("FAILED", String(error));
            });
          }
        }, {
          key: "showNewPage",
          value: function showNewPage() {
            this.showSecondPage();
          }
        }, {
          key: "showFingerprint",
          value: function showFingerprint() {
            var _this21 = this;

            Fingerprint.show({
              description: "Some biometric description"
            }, function () {
              _this21.showSecondPage();
            }, function (error) {
              alert("Authentication invalid " + error.message);
            });
          }
        }, {
          key: "setupNewTenant",
          value: function setupNewTenant() {
            var _this22 = this;

            var apiKey = this.encodeApiKey(this.tenantId, this.channelId);
            this.assistantUtils.setConfig(this.apiUrl, apiKey, this.settings).then(function () {
              _this22.agentifaiController.stop();

              _this22.initializeAction();
            });
          }
        }, {
          key: "resetDefaultTenant",
          value: function resetDefaultTenant() {
            var _this23 = this;

            this.assistantUtils.resetDefaultConfig().then(function (config) {
              return _this23.setupAssistantConfig(config[0], config[1], config[2]);
            }).then(function () {
              return _this23.setupNewTenant();
            });
          }
        }, {
          key: "setTheme",
          value: function setTheme(theme) {
            this.agentifaiController.setTheme(theme);
          }
        }, {
          key: "showSecondPage",
          value: function showSecondPage() {
            this.navCtrl.navigateForward('second-page');
          }
        }, {
          key: "writeEnpoint",
          value: function writeEnpoint(endpoint) {
            this.storage.setBaseUrl(endpoint);
            this.setupBaseUrl(endpoint);
          }
        }, {
          key: "createEndpointDefault",
          value: function createEndpointDefault() {
            this.writeEnpoint(this.endpoints[0]);
          }
        }, {
          key: "readEndpoint",
          value: function readEndpoint() {
            var _this24 = this;

            this.storage.getbaseUrl().then(function (result) {
              if (result != null) {
                _this24.setupBaseUrl(result);
              } else {
                _this24.createEndpointDefault();
              }
            }, function (error) {
              _this24.createEndpointDefault();
            });
          }
        }, {
          key: "setupBaseUrl",
          value: function setupBaseUrl(endpoint) {
            src_app_internal_internal_utils__WEBPACK_IMPORTED_MODULE_8__["InternalUtils"].baseUrl = endpoint.baseUrl;
          }
        }, {
          key: "showAlert",
          value: function showAlert(title, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee63() {
              var alert;
              return regeneratorRuntime.wrap(function _callee63$(_context63) {
                while (1) {
                  switch (_context63.prev = _context63.next) {
                    case 0:
                      _context63.next = 2;
                      return this.alertCtrl.create({
                        header: title,
                        message: message,
                        buttons: ['Dismiss']
                      });

                    case 2:
                      alert = _context63.sent;
                      _context63.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context63.stop();
                  }
                }
              }, _callee63, this);
            }));
          }
        }, {
          key: "loginService",
          value: function loginService(contractNumber, accessCode) {
            var generateFakeToken = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee66() {
              var _this25 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee66$(_context66) {
                while (1) {
                  switch (_context66.prev = _context66.next) {
                    case 0:
                      _context66.next = 2;
                      return this.getLoading();

                    case 2:
                      loading = _context66.sent;
                      loading.present();
                      Object(rxjs__WEBPACK_IMPORTED_MODULE_19__["combineLatest"])([this.publicApi.login(contractNumber, accessCode, false), this.encryptor.encryptRx(contractNumber)]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])(function (results) {
                        return {
                          response: results[0],
                          token: results[1]
                        };
                      })).subscribe(function (resp) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this25, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee64() {
                          var cookie, authHeaders, login, token, subTitle, name;
                          return regeneratorRuntime.wrap(function _callee64$(_context64) {
                            while (1) {
                              switch (_context64.prev = _context64.next) {
                                case 0:
                                  console.log(resp);
                                  cookie = resp.response.headers['set-cookie'];
                                  authHeaders = {};

                                  if (cookie != null) {
                                    authHeaders = {
                                      Cookie: cookie
                                    };
                                  }

                                  login = resp.response.data;
                                  token = generateFakeToken ? resp.token : login.jwt;
                                  subTitle = "Olá ";
                                  name = "";

                                  if (login.customerName != undefined || login.customerName != null) {
                                    subTitle += login.customerName;
                                    name = login.customerName;
                                  } else {
                                    subTitle += contractNumber;
                                  }

                                  _context64.next = 11;
                                  return this.showAlert("SUCCESS", subTitle);

                                case 11:
                                  loading.dismiss();
                                  this.agentifaiController.registerUser(contractNumber, name, token, authHeaders);

                                case 13:
                                case "end":
                                  return _context64.stop();
                              }
                            }
                          }, _callee64, this);
                        }));
                      }, function (error) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this25, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee65() {
                          return regeneratorRuntime.wrap(function _callee65$(_context65) {
                            while (1) {
                              switch (_context65.prev = _context65.next) {
                                case 0:
                                  console.log(error);
                                  loading.dismiss();
                                  _context65.next = 4;
                                  return this.showAlert("FAILED", error.error);

                                case 4:
                                case "end":
                                  return _context65.stop();
                              }
                            }
                          }, _callee65, this);
                        }));
                      });

                    case 5:
                    case "end":
                      return _context66.stop();
                  }
                }
              }, _callee66, this);
            }));
          }
        }, {
          key: "logoutService",
          value: function logoutService() {
            var _this26 = this;

            this.services.logout().subscribe(function (resp) {
              _this26.showAlert("SUCCESS", "logout");

              _this26.unregisterUser();
            }, function (error) {
              _this26.showAlert("FAILED", error.error);
            });
          }
        }, {
          key: "setConfigurations",
          value: function setConfigurations(endpointUrl) {
            var headers = this.api.getHeadersAlice();
            var headersKeysMapping = this.api.HEADERS_KEYS_MAPPING_ALICE;
            var endpoints = src_app_internal_internal_utils__WEBPACK_IMPORTED_MODULE_8__["InternalUtils"].getEndpointsWhitelist();
            this.agentifaiController.setConfigurations({
              url: endpointUrl,
              headers: headers,
              headersKeysMapping: headersKeysMapping,
              endpoints: endpoints
            });
          }
        }, {
          key: "readAssistantConfigs",
          value: function readAssistantConfigs() {
            var _this27 = this;

            return this.assistantUtils.getConfig().then(function (config) {
              return _this27.setupAssistantConfig(config[0], config[1], config[2]);
            });
          }
        }, {
          key: "setupAssistantConfig",
          value: function setupAssistantConfig(apiUrl, apiKey, settings) {
            this.apiUrl = apiUrl;
            this.settings = settings;
            this.themes = Object.keys(settings["themes"]);
            var decodedApiKey = this.decodeApiKey(apiKey);
            this.tenantId = decodedApiKey.tenantId;
            this.channelId = decodedApiKey.channelId;
          }
        }, {
          key: "encodeApiKey",
          value: function encodeApiKey(tenantId, channelId) {
            var data = {
              "tenantId": tenantId,
              "channelId": channelId
            };
            return btoa(JSON.stringify(data));
          }
        }, {
          key: "decodeApiKey",
          value: function decodeApiKey(apiKey) {
            return JSON.parse(atob(apiKey));
          }
        }, {
          key: "getLoading",
          value: function getLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee67() {
              var loading;
              return regeneratorRuntime.wrap(function _callee67$(_context67) {
                while (1) {
                  switch (_context67.prev = _context67.next) {
                    case 0:
                      _context67.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...',
                        backdropDismiss: true,
                        duration: 5000
                      });

                    case 2:
                      loading = _context67.sent;
                      return _context67.abrupt("return", loading);

                    case 4:
                    case "end":
                      return _context67.stop();
                  }
                }
              }, _callee67, this);
            }));
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: src_app_services_agentifai_agentifai_plugin_controller_service__WEBPACK_IMPORTED_MODULE_5__["AgentifaiPluginControllerService"]
        }, {
          type: src_app_services_public_public_service__WEBPACK_IMPORTED_MODULE_6__["PublicService"]
        }, {
          type: src_app_services_agentifai_agentifai_services_service__WEBPACK_IMPORTED_MODULE_12__["AgentifaiServicesProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_13__["Api"]
        }, {
          type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_14__["StorageService"]
        }, {
          type: src_app_services_assistant_utils_assistant_utils_service__WEBPACK_IMPORTED_MODULE_15__["AssistantUtilsService"]
        }, {
          type: src_app_services_encryptor_encryptor_service__WEBPACK_IMPORTED_MODULE_17__["EncryptorService"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map