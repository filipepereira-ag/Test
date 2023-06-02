(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37;

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+OAk": function OAk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Credential", function () {
        return Credential;
      });

      var Credential = function Credential() {
        _classCallCheck(this, Credential);
      };
      /***/

    },

    /***/
    "+n3k": function n3k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExecuteCardPaymentCommand", function () {
        return ExecuteCardPaymentCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var src_app_models_operation_request_cards_CardPaymentRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/operation/request/cards/CardPaymentRequest */
      "vh/R");

      var ExecuteCardPaymentCommand = /*#__PURE__*/function () {
        function ExecuteCardPaymentCommand(request, requestFactory, responseFactory) {
          _classCallCheck(this, ExecuteCardPaymentCommand);

          this.request = request;
          this.requestFactory = requestFactory;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexesPathsSuccess = ["headers.+", "status", "body.(operationId|operationStatus|charges.*|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")];
          this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(ExecuteCardPaymentCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            var credential = this.createCredentials(parameters);
            return service.executeCardPayment(headers, request, credential).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (resp) {
              return _this.createErrorResponse(resp);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_cards_CardPaymentRequest__WEBPACK_IMPORTED_MODULE_3__["CardPaymentRequest"]();
            request.operationId = parameters.operationId;
            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.scheduling = this.requestFactory.createScheduling(parameters);
            request.sourceAccount = parameters.sourceAccount;
            request.destinationCardNumber = parameters.destinationCardNumber;
            request.amount = parameters.amount;
            request.currency = parameters.currency;
            request.cardPaymentType = parameters.cardPaymentType;
            request.manuallyEnteredCardNumber = parameters.manuallyEnteredCardNumber;
            return request;
          }
        }, {
          key: "createCredentials",
          value: function createCredentials(parameters) {
            return this.requestFactory.createCredentials(parameters);
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
          }
        }]);

        return ExecuteCardPaymentCommand;
      }();
      /***/

    },

    /***/
    "/Lgg": function Lgg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InitNewCreditCard", function () {
        return InitNewCreditCard;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var src_app_models_operation_request_cards_CardRequestRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/operation/request/cards/CardRequestRequest */
      "cnaj");

      var InitNewCreditCard = /*#__PURE__*/function () {
        function InitNewCreditCard(request, responseFactory, requestFactory) {
          _classCallCheck(this, InitNewCreditCard);

          this.request = request;
          this.responseFactory = responseFactory;
          this.requestFactory = requestFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["^body.(operationId|showCardCreditDocuments)$"], ["^body\\.(operationId|showCardCreditDocuments)$"])))];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(InitNewCreditCard, [{
          key: "execute",
          value: function execute(service) {
            var _this2 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            return service.initNewCreditCard(headers, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this2.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this2.createErrorResponse(error);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_cards_CardRequestRequest__WEBPACK_IMPORTED_MODULE_3__["CardRequestRequest"]();

            if (parameters.operationId != null) {
              request.operationId = parseInt(parameters.operationId);
            }

            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.scheduling = this.requestFactory.createScheduling(parameters);
            request.fullAccountKey = parameters.fullAccountKey;
            request.productCode = parameters.productCode;
            request.cardPaymentMode = parameters.cardPaymentMode;

            if (parameters.paymentPercentage != null) {
              request.paymentPercentage = parseInt(parameters.paymentPercentage);
            }

            request.paymentFixedValue = parameters.paymentFixedValue;
            request.nameToPrintOnCard = parameters.nameToPrintOnCard;

            if (parameters.statementEmissionDay != null) {
              request.statementEmissionDay = parseInt(parameters.statementEmissionDay);
            }

            request.postalAddress = parameters.postalAddress;
            request.creditLimit = parameters.creditLimit;

            if (parameters.checkForCredit != null) {
              request.checkForCredit = this.requestFactory.parseBool(parameters.checkForCredit);
            }

            if (parameters.onlineAdherence != null) {
              request.onlineAdherence = this.requestFactory.parseBool(parameters.onlineAdherence);
            }

            if (parameters.safeMessageAdhesion != null) {
              request.safeMessageAdhesion = this.requestFactory.parseBool(parameters.safeMessageAdhesion);
            }

            return request;
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return InitNewCreditCard;
      }();
      /***/

    },

    /***/
    "/gT+": function gT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentifaiManagerProvider", function () {
        return AgentifaiManagerProvider;
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


      var src_app_agentifai_models_agentifai_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/models/agentifai-response */
      "pLv3");
      /* harmony import */


      var src_app_agentifai_models_agentifai_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/models/agentifai-request */
      "nYpB");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/agentifai/utils/agentifai-utils */
      "EZ/N");
      /* harmony import */


      var src_app_services_agentifai_agentifai_command_factory_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/agentifai/agentifai-command-factory.service */
      "HTOI");
      /* harmony import */


      var src_app_services_agentifai_agentifai_services_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/agentifai/agentifai-services.service */
      "JxHx");

      var AgentifaiManagerProvider_1;

      var AgentifaiManagerProvider = AgentifaiManagerProvider_1 = /*#__PURE__*/function () {
        function AgentifaiManagerProvider(service, commandsFactory) {
          _classCallCheck(this, AgentifaiManagerProvider);

          this.service = service;
          this.commandsFactory = commandsFactory;
        }

        _createClass(AgentifaiManagerProvider, [{
          key: "executeWidgetRequest",
          value: function executeWidgetRequest(data) {
            var request = this.createRequest(data);
            var commandValue = request.data[AgentifaiManagerProvider_1.commandKey];
            var commandType = commandValue;
            var command = this.commandsFactory.createCommand(commandType, request);

            try {
              return this.executeCommand(command, request.id);
            } catch (error) {
              return this.handleError(request.id, error.toString());
            }
          }
        }, {
          key: "executeCommand",
          value: function executeCommand(command, requestId) {
            var _this3 = this;

            return command.execute(this.service).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
              return _this3.createSuccessResponse(requestId, result);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return _this3.handleError(requestId, error);
            }));
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(requestId, response) {
            var json = src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_6__["AgentifaiUtils"].mapFromAny(response);
            return new src_app_agentifai_models_agentifai_response__WEBPACK_IMPORTED_MODULE_2__["AgentifaiResponse"](requestId, true, json);
          }
        }, {
          key: "createFailedResponse",
          value: function createFailedResponse(requestId, errorResponse) {
            var json = src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_6__["AgentifaiUtils"].mapFromAny(errorResponse);
            return new src_app_agentifai_models_agentifai_response__WEBPACK_IMPORTED_MODULE_2__["AgentifaiResponse"](requestId, false, json);
          }
        }, {
          key: "handleError",
          value: function handleError(requestId, error) {
            var errorResponse = this.createFailedResponse(requestId, error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorResponse);
          }
        }, {
          key: "createRequest",
          value: function createRequest(data) {
            var id = data["requestId"];
            delete data["requestId"];
            return new src_app_agentifai_models_agentifai_request__WEBPACK_IMPORTED_MODULE_3__["AgentifaiRequest"](id, data);
          }
        }]);

        return AgentifaiManagerProvider;
      }();

      AgentifaiManagerProvider.commandKey = "requestType";

      AgentifaiManagerProvider.ctorParameters = function () {
        return [{
          type: src_app_services_agentifai_agentifai_services_service__WEBPACK_IMPORTED_MODULE_8__["AgentifaiServicesProvider"]
        }, {
          type: src_app_services_agentifai_agentifai_command_factory_service__WEBPACK_IMPORTED_MODULE_7__["AgentifaiCommandFactoryService"]
        }];
      };

      AgentifaiManagerProvider = AgentifaiManagerProvider_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AgentifaiManagerProvider);
      /***/
    },

    /***/
    "/tM9": function tM9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsentTermsAndConditionsCommand", function () {
        return ConsentTermsAndConditionsCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_models_operation_request_devices_VoiceTreatmentConsentRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/operation/request/devices/VoiceTreatmentConsentRequest */
      "c1BC");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var ConsentTermsAndConditionsCommand = /*#__PURE__*/function () {
        function ConsentTermsAndConditionsCommand(request, responseFactory) {
          _classCallCheck(this, ConsentTermsAndConditionsCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizablePathRegex = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(ConsentTermsAndConditionsCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this4 = this;

            var headers = this.request.getHeaders();
            var request = new src_app_models_operation_request_devices_VoiceTreatmentConsentRequest__WEBPACK_IMPORTED_MODULE_2__["VoiceTreatmentConsentRequest"]();
            return service.addVoiceTreatmentConsent(headers, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this4.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this4.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizablePathRegex);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegex));
          }
        }]);

        return ConsentTermsAndConditionsCommand;
      }();
      /***/

    },

    /***/
    0: function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/filipepereira/Agentifai/projects/mobile/ionic/client-assistant-integration-app/projects/cgd/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0K33": function K33(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetPersonalLoanGeneralData", function () {
        return GetPersonalLoanGeneralData;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/agentifai-utils */
      "EZ/N");
      /* harmony import */


      var src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/agentifai/commands/accounts/accounts-utils */
      "il6X");

      var GetPersonalLoanGeneralData = /*#__PURE__*/function () {
        function GetPersonalLoanGeneralData(request, responseFactory, transformer) {
          _classCallCheck(this, GetPersonalLoanGeneralData);

          this.request = request;
          this.responseFactory = responseFactory;
          this.transformer = transformer;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["^body.(pedidoExistenteMes|validClient|client95_96|professionalInformation..+|accounts.[^.]+.(", "))$"], ["^body\\.(pedidoExistenteMes|validClient|client95_96|professionalInformation\\..+|accounts\\.[^.]+\\.(", "))$"])), src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_4__["AccountsUtils"].nonAnonymizedAccountsProperties)];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetPersonalLoanGeneralData, [{
          key: "execute",
          value: function execute(service) {
            var _this5 = this;

            var headers = this.request.getHeaders();
            return service.getConsumerLoanAdhesionGeneralData(headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this5.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this5.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            var transformedResponse = this.transformResponse(response);
            return this.createResponse(transformedResponse, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }, {
          key: "transformResponse",
          value: function transformResponse(response) {
            var data = src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__["AgentifaiUtils"].mapFromString(response.data);

            if (data.accounts != null) {
              data.accounts = this.transformer.transformAccounts(data.accounts);
              response.data = data;
            }

            return response;
          }
        }]);

        return GetPersonalLoanGeneralData;
      }();
      /***/

    },

    /***/
    "0xVn": function xVn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimulateActivateMatrix", function () {
        return SimulateActivateMatrix;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var _credentials_management_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../credentials-management-utils */
      "G8L4");

      var SimulateActivateMatrix = /*#__PURE__*/function () {
        function SimulateActivateMatrix(request, responseFactory, requestFactory) {
          _classCallCheck(this, SimulateActivateMatrix);

          this.request = request;
          this.responseFactory = responseFactory;
          this.requestFactory = requestFactory;
          this.nonAnonymizableRegexPathsSuccess = ['headers.+', 'status', "body.(operationId|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(SimulateActivateMatrix, [{
          key: "execute",
          value: function execute(service) {
            var _this6 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            return service.simulateActivateMatrix(headers, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
              return _this6.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
              return _this6.createErrorResponse(error);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            return _credentials_management_utils__WEBPACK_IMPORTED_MODULE_3__["CredentialsManagementUtils"].createMatrixActivateSimExe(parameters, this.requestFactory);
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return SimulateActivateMatrix;
      }();
      /***/

    },

    /***/
    "13TP": function TP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicePaymentRequest", function () {
        return ServicePaymentRequest;
      });
      /* harmony import */


      var src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/operation/request/GenericOperationRequest */
      "AwYQ");

      var ServicePaymentRequest = /*#__PURE__*/function (_src_app_models_opera) {
        _inherits(ServicePaymentRequest, _src_app_models_opera);

        var _super = _createSuper(ServicePaymentRequest);

        function ServicePaymentRequest() {
          _classCallCheck(this, ServicePaymentRequest);

          return _super.call(this);
        }

        return ServicePaymentRequest;
      }(src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"]);
      /***/

    },

    /***/
    "1Orp": function Orp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetAccountBalance", function () {
        return GetAccountBalance;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetAccountBalance = /*#__PURE__*/function () {
        function GetAccountBalance(request, responseFactory) {
          _classCallCheck(this, GetAccountBalance);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", "body\.(accountCurrency|accountBalancesList\.[^.]+\.currency)(?:$|\W)"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetAccountBalance, [{
          key: "execute",
          value: function execute(service) {
            var _this7 = this;

            var headers = this.request.getHeaders();
            var fullAccountKey = this.request.getParameters()["fullAccountKey"];
            return service.getAccountBalance(headers, fullAccountKey).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this7.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this7.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetAccountBalance;
      }();
      /***/

    },

    /***/
    "1wiW": function wiW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Charges", function () {
        return Charges;
      });

      var Charges = function Charges() {
        _classCallCheck(this, Charges);

        this.type = '';
        this.code = '';
        this.description = '';
        this.amount = null;
        this.currency = '';
        this.taxCode = '';
        this.taxDescription = '';
        this.taxAmount = null;
        this.taxCurrency = '';
        this.taxRate = null;
        this.taxExemption = null;
        this.chargeCollectionCancellationOperationCode = '';
        this.chargeCollectionOperationCode = '';
        this.taxCollectionOperationCode = '';
        this.taxCollectionCancellationOperationCode = '';
        this.taxExemptionOperationCode = '';
        this.taxExemptionCancellationOperationCode = '';
        this.operationCost = null;
        this.commissions = null;
        this.stampDuty = null;
        this.expense = null;
        this.vat = null;
      };
      /***/

    },

    /***/
    "3ZgE": function ZgE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GenericPersonalCreditWorkElement", function () {
        return GenericPersonalCreditWorkElement;
      });

      var GenericPersonalCreditWorkElement = function GenericPersonalCreditWorkElement() {
        _classCallCheck(this, GenericPersonalCreditWorkElement);

        this.cod = "", this.description = "";
      };
      /***/

    },

    /***/
    "3hTJ": function hTJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetCustomerManager", function () {
        return GetCustomerManager;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetCustomerManager = /*#__PURE__*/function () {
        function GetCustomerManager(request, responseFactory) {
          _classCallCheck(this, GetCustomerManager);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", String.raw(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["^body.serviceModel$"], ["^body\\.serviceModel$"])))];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetCustomerManager, [{
          key: "execute",
          value: function execute(service) {
            var _this8 = this;

            var headers = this.request.getHeaders();
            return service.getCustomerManager(headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this8.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this8.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetCustomerManager;
      }();
      /***/

    },

    /***/
    "3zAc": function zAc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetCardAdhesionAccounts", function () {
        return GetCardAdhesionAccounts;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/agentifai-utils */
      "EZ/N");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetCardAdhesionAccounts = /*#__PURE__*/function () {
        function GetCardAdhesionAccounts(request, responseFactory, transformer) {
          _classCallCheck(this, GetCardAdhesionAccounts);

          this.request = request;
          this.responseFactory = responseFactory;
          this.transformer = transformer;
          this.nonAnonymizableRegexPathsSuccess = ['headers.+', 'status'];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetCardAdhesionAccounts, [{
          key: "execute",
          value: function execute(service) {
            var _this9 = this;

            var headers = this.request.getHeaders();
            return service.getCardAdhesionAccounts(headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this9.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this9.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            var transformedResponse = this.transformResponse(response);
            return this.createResponse(transformedResponse, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }, {
          key: "transformResponse",
          value: function transformResponse(response) {
            var data = src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_2__["AgentifaiUtils"].mapFromString(response.data);

            if (data.defaultAccount != null && data.accounts != null) {
              data.accounts = this.transformer.transformAccounts(data.accounts);
              data.defaultAccount = this.transformer.transformAccount(data.defaultAccount);
              response.data = data;
            }

            return response;
          }
        }]);

        return GetCardAdhesionAccounts;
      }();
      /***/

    },

    /***/
    "4+i+": function i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetUpdateClientInformationList", function () {
        return GetUpdateClientInformationList;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetUpdateClientInformationList = /*#__PURE__*/function () {
        function GetUpdateClientInformationList(request, responseFactory) {
          _classCallCheck(this, GetUpdateClientInformationList);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", "body.*"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetUpdateClientInformationList, [{
          key: "execute",
          value: function execute(service) {
            var _this10 = this;

            var headers = this.request.getHeaders();
            var id = this.request.getParameters().id;
            return service.getUpdateClientListField(headers, id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this10.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this10.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetUpdateClientInformationList;
      }();
      /***/

    },

    /***/
    "4OU7": function OU7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExecuteServicePaymentCommand", function () {
        return ExecuteServicePaymentCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_models_operation_request_payments_ServicePaymentRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/operation/request/payments/ServicePaymentRequest */
      "13TP");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var ExecuteServicePaymentCommand = /*#__PURE__*/function () {
        function ExecuteServicePaymentCommand(request, responseFactory, requestFactory) {
          _classCallCheck(this, ExecuteServicePaymentCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.requestFactory = requestFactory;
          this.nonAnonymizablePathRegex = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(ExecuteServicePaymentCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this11 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            var credential = this.createCredentials(parameters);
            return service.executeServicePayment(headers, request, credential).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this11.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (resp) {
              return _this11.createErrorResponse(resp);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_payments_ServicePaymentRequest__WEBPACK_IMPORTED_MODULE_2__["ServicePaymentRequest"]();
            request.sourceAccount = parameters.sourceAccount;
            request.entity = parameters.entity;
            request.reference = parameters.reference;
            request.amount = parameters.amount;
            request.operationId = parseInt(parameters.operationId);
            request.operationName = "";
            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.scheduling = this.requestFactory.createScheduling(parameters);
            return request;
          }
        }, {
          key: "createCredentials",
          value: function createCredentials(parameters) {
            return this.requestFactory.createCredentials(parameters);
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizablePathRegex);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegex));
          }
        }]);

        return ExecuteServicePaymentCommand;
      }();
      /***/

    },

    /***/
    "4Rlb": function Rlb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsumerLoanAdhesionRequest", function () {
        return ConsumerLoanAdhesionRequest;
      });
      /* harmony import */


      var _GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../GenericOperationRequest */
      "AwYQ");

      var ConsumerLoanAdhesionRequest = /*#__PURE__*/function (_GenericOperationRequ) {
        _inherits(ConsumerLoanAdhesionRequest, _GenericOperationRequ);

        var _super2 = _createSuper(ConsumerLoanAdhesionRequest);

        function ConsumerLoanAdhesionRequest() {
          _classCallCheck(this, ConsumerLoanAdhesionRequest);

          return _super2.apply(this, arguments);
        }

        return ConsumerLoanAdhesionRequest;
      }(_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"]);
      /***/

    },

    /***/
    "65CJ": function CJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetShowcaseProductDocument", function () {
        return GetShowcaseProductDocument;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetShowcaseProductDocument = /*#__PURE__*/function () {
        function GetShowcaseProductDocument(request, responseFactory) {
          _classCallCheck(this, GetShowcaseProductDocument);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetShowcaseProductDocument, [{
          key: "execute",
          value: function execute(service) {
            var _this12 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var productCode = parameters.productCode;
            var docType = parameters.docType;
            return service.getShowcaseProductDocument(headers, productCode, docType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this12.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this12.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetShowcaseProductDocument;
      }();
      /***/

    },

    /***/
    "6SY+": function SY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetUpdateClientInformationAddress", function () {
        return GetUpdateClientInformationAddress;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetUpdateClientInformationAddress = /*#__PURE__*/function () {
        function GetUpdateClientInformationAddress(request, responseFactory) {
          _classCallCheck(this, GetUpdateClientInformationAddress);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", "body.expirado"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetUpdateClientInformationAddress, [{
          key: "execute",
          value: function execute(service) {
            var _this13 = this;

            var headers = this.request.getHeaders();
            return service.getUpdateClientInfoAddress(headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this13.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this13.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetUpdateClientInformationAddress;
      }();
      /***/

    },

    /***/
    "7WAv": function WAv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatrixActivateSimExe", function () {
        return MatrixActivateSimExe;
      });
      /* harmony import */


      var _operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../operation/request/GenericOperationRequest */
      "AwYQ");

      var MatrixActivateSimExe = /*#__PURE__*/function (_operation_request_Ge) {
        _inherits(MatrixActivateSimExe, _operation_request_Ge);

        var _super3 = _createSuper(MatrixActivateSimExe);

        function MatrixActivateSimExe() {
          var _this14;

          _classCallCheck(this, MatrixActivateSimExe);

          _this14 = _super3.call(this);
          _this14.matrixReferenceNumber = '';
          _this14.hasNifCreds = false;
          return _this14;
        }

        return MatrixActivateSimExe;
      }(_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"]);
      /***/

    },

    /***/
    "7gY9": function gY9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetContractNumberQuestionsRequest", function () {
        return GetContractNumberQuestionsRequest;
      });

      var GetContractNumberQuestionsRequest = function GetContractNumberQuestionsRequest() {
        _classCallCheck(this, GetContractNumberQuestionsRequest);

        this.nif = "";
        this.phoneNumber = "";
      };
      /***/

    },

    /***/
    "8EHu": function EHu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimulateCardPaymentCommand", function () {
        return SimulateCardPaymentCommand;
      });
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_models_operation_request_cards_CardPaymentRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/operation/request/cards/CardPaymentRequest */
      "vh/R");

      var SimulateCardPaymentCommand = /*#__PURE__*/function () {
        function SimulateCardPaymentCommand(request, requestFactory, responseFactory) {
          _classCallCheck(this, SimulateCardPaymentCommand);

          this.request = request;
          this.requestFactory = requestFactory;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexesPathsSuccess = ["headers.+", "status", "body.(operationId|operationStatus|charges.*|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_0__["Anonymization"].scheduling(), ")")];
          this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_0__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(SimulateCardPaymentCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this15 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            return service.simulateCardPayment(headers, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
              return _this15.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (resp) {
              return _this15.createErrorResponse(resp);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_cards_CardPaymentRequest__WEBPACK_IMPORTED_MODULE_3__["CardPaymentRequest"]();
            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.scheduling = this.requestFactory.createScheduling(parameters);
            request.sourceAccount = parameters.sourceAccount;
            request.destinationCardNumber = parameters.destinationCardNumber;
            request.amount = parameters.amount;
            request.currency = parameters.currency;
            request.cardPaymentType = parameters.cardPaymentType;
            request.manuallyEnteredCardNumber = parameters.manuallyEnteredCardNumber;
            return request;
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
          }
        }]);

        return SimulateCardPaymentCommand;
      }();
      /***/

    },

    /***/
    "8l7Y": function l7Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnlockCredentials", function () {
        return UnlockCredentials;
      });
      /* harmony import */


      var src_app_models_operation_request_customers_CredentialUnlockAnswersRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/operation/request/customers/CredentialUnlockAnswersRequest */
      "uTo4");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var UnlockCredentials = /*#__PURE__*/function () {
        function UnlockCredentials(request, responseFactory) {
          _classCallCheck(this, UnlockCredentials);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexesPathsSuccess = ["headers.+", "status", "body\.(operationId|success)"];
          this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(UnlockCredentials, [{
          key: "execute",
          value: function execute(service) {
            var _this16 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            return service.credentialUnlockAnswers(headers, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
              return _this16.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (resp) {
              return _this16.createErrorResponse(resp);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_customers_CredentialUnlockAnswersRequest__WEBPACK_IMPORTED_MODULE_0__["CredentialUnlockAnswersRequest"]();
            request.answers = parameters.answers;
            request.contractNumber = parameters.contractNumber;
            request.operationId = parameters.operationId;
            return request;
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
          }
        }]);

        return UnlockCredentials;
      }();
      /***/

    },

    /***/
    "96wc": function wc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallbackSolicitationRequest", function () {
        return CallbackSolicitationRequest;
      });

      var CallbackSolicitationRequest = function CallbackSolicitationRequest() {
        _classCallCheck(this, CallbackSolicitationRequest);
      };
      /***/

    },

    /***/
    "9Ygl": function Ygl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResponseEvent", function () {
        return ResponseEvent;
      });

      var ResponseEvent = function ResponseEvent(headers, status, body) {
        _classCallCheck(this, ResponseEvent);

        this.headers = headers;
        this.status = status;
        this.body = body;
      };
      /***/

    },

    /***/
    "9p9f": function p9f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetFrequentServicePaymentCommand", function () {
        return GetFrequentServicePaymentCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetFrequentServicePaymentCommand = /*#__PURE__*/function () {
        function GetFrequentServicePaymentCommand(request, responseFactory) {
          _classCallCheck(this, GetFrequentServicePaymentCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", "body\.(operationName|operationId|amount)(?:$|\W)"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetFrequentServicePaymentCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this17 = this;

            var headers = this.request.getHeaders();
            var idFrequentOperation = this.request.getParameters()["idFrequentOperation"];
            return service.getFrequentPaymentDetail(headers, String(idFrequentOperation)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this17.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this17.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetFrequentServicePaymentCommand;
      }();
      /***/

    },

    /***/
    "ANQa": function ANQa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetTransferTypeValidation", function () {
        return GetTransferTypeValidation;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetTransferTypeValidation = /*#__PURE__*/function () {
        function GetTransferTypeValidation(request, responseFactory) {
          _classCallCheck(this, GetTransferTypeValidation);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPaths = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetTransferTypeValidation, [{
          key: "execute",
          value: function execute(service) {
            var _this18 = this;

            var headers = this.request.getHeaders();
            var targetAccount = this.request.getParameters()["targetAccount"];
            return service.getTransferType(headers, targetAccount).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this18.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this18.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPaths);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexPaths));
          }
        }]);

        return GetTransferTypeValidation;
      }();
      /***/

    },

    /***/
    "ARNw": function ARNw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateClientInformationUtils", function () {
        return UpdateClientInformationUtils;
      });
      /* harmony import */


      var src_app_models_customers_updateClientInfo_UpdateClientInfoRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/customers/updateClientInfo/UpdateClientInfoRequest */
      "TiZ7");

      var UpdateClientInformationUtils = /*#__PURE__*/function () {
        function UpdateClientInformationUtils() {
          _classCallCheck(this, UpdateClientInformationUtils);
        }

        _createClass(UpdateClientInformationUtils, null, [{
          key: "createAddress",
          value: function createAddress(parameters) {
            var address = new src_app_models_customers_updateClientInfo_UpdateClientInfoRequest__WEBPACK_IMPORTED_MODULE_0__["UpdateClientAddress"]();
            address.codigoPostal = parameters.postalCode;
            address.codigoPostalFiscal = parameters.fiscalPostalCode;
            address.localidade = parameters.locality;
            address.localidadeFiscal = parameters.fiscalLocality;
            address.moradaFiscalResidencia = parameters.fiscalHomeAddress;
            address.moradaResidencia = parameters.homeAddress;
            address.pais = parameters.country;
            address.paisFiscal = parameters.fiscalCountry;
            address.contribuinteFiscalEstrangeiro = parameters.foreignTaxpayerNumber;
            address.fiscal = parameters.fiscal;
            return address;
          }
        }, {
          key: "createAttachments",
          value: function createAttachments(parameters) {
            return parameters.map(function (object) {
              var attachment = new src_app_models_customers_updateClientInfo_UpdateClientInfoRequest__WEBPACK_IMPORTED_MODULE_0__["UpdateClientAttachment"]();
              attachment.name = object.name;
              attachment.document = object.document;
              attachment.extension = object.extension;
              return attachment;
            });
          }
        }, {
          key: "createPersonal",
          value: function createPersonal(parameters) {
            var personal = new src_app_models_customers_updateClientInfo_UpdateClientInfoRequest__WEBPACK_IMPORTED_MODULE_0__["UpdateClientPersonal"]();
            personal.estadoCivil = parameters.maritalStatus;
            personal.naturalidade = parameters.naturalness;
            personal.nifEstrangeiro = parameters.foreignFiscalIdNumber;
            personal.nomeCompleto = parameters.fullName;
            personal.nrDoc = parameters.idNumber;
            personal.nrDocFiscal = parameters.fiscalIdNumber;
            personal.paisEstrangeiro = parameters.foreignCountry;
            personal.validade = parameters.validity;
            personal.paisNaturalidade = parameters.birthCountry;
            personal.distrito = parameters.birthDistrict;
            personal.concelho = parameters.birthCounty;
            return personal;
          }
        }, {
          key: "createProfessional",
          value: function createProfessional(parameters) {
            var professional = new src_app_models_customers_updateClientInfo_UpdateClientInfoRequest__WEBPACK_IMPORTED_MODULE_0__["UpdateClientProfessional"]();
            professional.cirs = parameters.cirs;
            professional.entidadePatronal = parameters.employer;
            professional.profissao = parameters.profession;
            professional.trabalharPorContaDoutrem = parameters.workForSomeoneElse;
            professional.tipoDependencia = parameters.dependencyType;
            professional.tipoCliente = parameters.clientType;
            professional.dataInicioAtividade = parameters.activityBeginDate;
            professional.caeData = parameters.dateCae;
            professional.cae = parameters.cae;
            professional.situacaoSocioProfissional = parameters.socioProfessionalStatus;
            professional.codigoProfissao = parameters.professionCode;
            professional.interveniente = parameters.intervening;
            return professional;
          }
        }]);

        return UpdateClientInformationUtils;
      }();
      /***/

    },

    /***/
    "AwYQ": function AwYQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GenericOperationRequest", function () {
        return GenericOperationRequest;
      });
      /* harmony import */


      var src_app_models_operation_Scheduling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/operation/Scheduling */
      "sd8+");

      var GenericOperationRequest = function GenericOperationRequest() {
        _classCallCheck(this, GenericOperationRequest);

        this.operationId = null;
        this.operationName = '';
        this.forceDuplicateOperation = false;
        this.scheduling = new src_app_models_operation_Scheduling__WEBPACK_IMPORTED_MODULE_0__["Scheduling"]();
      };
      /***/

    },

    /***/
    "AytR": function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        assistantConfiguration: {
          apiUrl: "https://development.agentifai.com/widget-setup-data",
          apiKey: "eyJ0ZW5hbnRJZCI6ICJjZ2QiLCAiY2hhbm5lbElkIjogIkNnZFdpZGdldCJ9"
        },
        assistantConfigurationEnabled: true,
        endpoints: [{
          label: "development",
          baseUrl: "https://dev.agentifai.com:23007/"
        }, {
          label: "staging-agentifai",
          baseUrl: "https://cgd-staging-client.agentifai.com:23007/"
        }, {
          label: "cq-cgd",
          baseUrl: "https://qoba.cgd.pt/pceApi/rest/v1/"
        }, {
          label: "production",
          baseUrl: "https://app.cgd.pt/pceApi/rest/v1/"
        }]
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BoZz": function BoZz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetContractNumberUnlockQuestions", function () {
        return GetContractNumberUnlockQuestions;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var src_app_models_operation_request_customers_GetContractNumberQuestionsRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/operation/request/customers/GetContractNumberQuestionsRequest */
      "7gY9");

      var GetContractNumberUnlockQuestions = /*#__PURE__*/function () {
        function GetContractNumberUnlockQuestions(request, responseFactory) {
          _classCallCheck(this, GetContractNumberUnlockQuestions);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", "body\.(questions\.*)"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetContractNumberUnlockQuestions, [{
          key: "execute",
          value: function execute(service) {
            var _this19 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            return service.getContractNumberQuestions(headers, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this19.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this19.createErrorResponse(error);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_customers_GetContractNumberQuestionsRequest__WEBPACK_IMPORTED_MODULE_3__["GetContractNumberQuestionsRequest"]();
            request.nif = parameters.nif;
            request.phoneNumber = parameters.phoneNumber;
            return request;
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetContractNumberUnlockQuestions;
      }();
      /***/

    },

    /***/
    "C8/L": function C8L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimulateServicePaymentCommand", function () {
        return SimulateServicePaymentCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_models_operation_request_payments_ServicePaymentRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/operation/request/payments/ServicePaymentRequest */
      "13TP");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var SimulateServicePaymentCommand = /*#__PURE__*/function () {
        function SimulateServicePaymentCommand(request, responseFactory, requestFactory) {
          _classCallCheck(this, SimulateServicePaymentCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.requestFactory = requestFactory;
          this.nonAnonymizableRegexesPaths = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(SimulateServicePaymentCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this20 = this;

            var headers = this.request.getHeaders();
            var request = this.createServicePaymentRequest();
            return service.simulateServicePayment(headers, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this20.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (resp) {
              return _this20.createErrorResponse(resp);
            }));
          }
        }, {
          key: "createServicePaymentRequest",
          value: function createServicePaymentRequest() {
            var parameters = this.request.getParameters();
            var request = new src_app_models_operation_request_payments_ServicePaymentRequest__WEBPACK_IMPORTED_MODULE_2__["ServicePaymentRequest"]();
            request.sourceAccount = parameters.sourceAccount;
            request.entity = parameters.entity;
            request.reference = parameters.reference;
            request.amount = parameters.amount;
            request.operationName = "";
            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.scheduling = this.requestFactory.createScheduling(parameters);
            return request;
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPaths));
          }
        }]);

        return SimulateServicePaymentCommand;
      }();
      /***/

    },

    /***/
    "Cx/3": function Cx3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetContractNumberAnswersRequest", function () {
        return GetContractNumberAnswersRequest;
      });

      var GetContractNumberAnswersRequest = function GetContractNumberAnswersRequest() {
        _classCallCheck(this, GetContractNumberAnswersRequest);

        this.respostasUser = [];
        this.nif = "";
      };
      /***/

    },

    /***/
    "DEGM": function DEGM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetUpdateClientInformationPersonal", function () {
        return GetUpdateClientInformationPersonal;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetUpdateClientInformationPersonal = /*#__PURE__*/function () {
        function GetUpdateClientInformationPersonal(request, responseFactory) {
          _classCallCheck(this, GetUpdateClientInformationPersonal);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", "body.expirado"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetUpdateClientInformationPersonal, [{
          key: "execute",
          value: function execute(service) {
            var _this21 = this;

            var headers = this.request.getHeaders();
            return service.getUpdateClientInfoIdentification(headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this21.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this21.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetUpdateClientInformationPersonal;
      }();
      /***/

    },

    /***/
    "E2f4": function E2f4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var StorageService = /*#__PURE__*/function () {
        function StorageService(storage) {
          _classCallCheck(this, StorageService);

          this.storage = storage;
          this.apiUrlKey = "apiUrl";
          this.apiKeyKey = "apiKey";
          this.baseUrlKey = "baseUrl";
          this.settingsKey = "settings";
        }

        _createClass(StorageService, [{
          key: "getApiUrl",
          value: function getApiUrl() {
            return this.get(this.apiUrlKey);
          }
        }, {
          key: "setApiUrl",
          value: function setApiUrl(apiUrl) {
            return this.set(this.apiUrlKey, apiUrl);
          }
        }, {
          key: "getApiKey",
          value: function getApiKey() {
            return this.get(this.apiKeyKey);
          }
        }, {
          key: "setApiKey",
          value: function setApiKey(apiKey) {
            return this.set(this.apiKeyKey, apiKey);
          }
        }, {
          key: "getbaseUrl",
          value: function getbaseUrl() {
            return this.get(this.baseUrlKey);
          }
        }, {
          key: "setBaseUrl",
          value: function setBaseUrl(baseUrl) {
            return this.set(this.baseUrlKey, baseUrl);
          }
        }, {
          key: "getSettings",
          value: function getSettings() {
            return this.get(this.settingsKey);
          }
        }, {
          key: "setSettings",
          value: function setSettings(settings) {
            return this.set(this.settingsKey, settings);
          }
        }, {
          key: "get",
          value: function get(key) {
            var _this22 = this;

            return this.ready().then(function () {
              return _this22.storage.get(key);
            });
          }
        }, {
          key: "set",
          value: function set(key, value) {
            var _this23 = this;

            return this.ready().then(function () {
              return _this23.storage.set(key, value);
            });
          }
        }, {
          key: "ready",
          value: function ready() {
            return this.storage.ready();
          }
        }]);

        return StorageService;
      }();

      StorageService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      };

      StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], StorageService);
      /***/
    },

    /***/
    "EUKi": function EUKi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetCredentialsUnlockQuestions", function () {
        return GetCredentialsUnlockQuestions;
      });
      /* harmony import */


      var src_app_models_operation_request_customers_CredentialUnlockQuestionsRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/operation/request/customers/CredentialUnlockQuestionsRequest */
      "Fzy9");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetCredentialsUnlockQuestions = /*#__PURE__*/function () {
        function GetCredentialsUnlockQuestions(request, responseFactory) {
          _classCallCheck(this, GetCredentialsUnlockQuestions);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", "body\.(operationId|questions\.*|passwordRegeneration|forceDuplicateOperation)"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetCredentialsUnlockQuestions, [{
          key: "execute",
          value: function execute(service) {
            var _this24 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            return service.getCredentialUnlockQuestions(headers, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
              return _this24.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
              return _this24.createErrorResponse(error);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_customers_CredentialUnlockQuestionsRequest__WEBPACK_IMPORTED_MODULE_0__["CredentialUnlockQuestionsRequest"]();
            request.contractNumber = parameters.contractNumber;
            request.phoneNumber = parameters.phoneNumber;
            return request;
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetCredentialsUnlockQuestions;
      }();
      /***/

    },

    /***/
    "EZ/N": function EZN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentifaiUtils", function () {
        return AgentifaiUtils;
      });

      var AgentifaiUtils = /*#__PURE__*/function () {
        function AgentifaiUtils() {
          _classCallCheck(this, AgentifaiUtils);
        }

        _createClass(AgentifaiUtils, null, [{
          key: "mapFromString",
          value: function mapFromString(data) {
            var json;

            try {
              json = JSON.parse(data);
            } catch (error) {
              json = this.mapFromAny(data);
            }

            return json;
          }
        }, {
          key: "mapFromAny",
          value: function mapFromAny(data) {
            var dataStr = JSON.stringify(data);
            return JSON.parse(dataStr);
          }
        }, {
          key: "convertToApiFormat",
          value: function convertToApiFormat(detectedValue) {
            var detectedValueWithDots = detectedValue.replace(",", ".");
            var result = parseFloat(detectedValueWithDots);
            var resultInCents = (result * 100).toFixed(0);
            var resultInApiFormat = resultInCents.toString();
            return resultInApiFormat;
          }
        }]);

        return AgentifaiUtils;
      }();
      /***/

    },

    /***/
    "EpBD": function EpBD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetTelecommunicationConfigurationsCommand", function () {
        return GetTelecommunicationConfigurationsCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetTelecommunicationConfigurationsCommand = /*#__PURE__*/function () {
        function GetTelecommunicationConfigurationsCommand(request, responseFactory) {
          _classCallCheck(this, GetTelecommunicationConfigurationsCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPaths = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetTelecommunicationConfigurationsCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this25 = this;

            var headers = this.request.getHeaders();
            return service.getTelecomConfigurations(headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this25.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this25.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPaths);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexPaths));
          }
        }]);

        return GetTelecommunicationConfigurationsCommand;
      }();
      /***/

    },

    /***/
    "FcPO": function FcPO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentifaiCardsTransformerService", function () {
        return AgentifaiCardsTransformerService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AgentifaiCardsTransformerService = /*#__PURE__*/function () {
        function AgentifaiCardsTransformerService() {
          _classCallCheck(this, AgentifaiCardsTransformerService);
        }

        _createClass(AgentifaiCardsTransformerService, [{
          key: "addNewCardProperties",
          value: function addNewCardProperties(cards) {
            if (cards != null) {
              cards.forEach(function (card) {
                card.cardName = card.description != null ? card.description.split(" - ").reverse()[0] : null;
              });
            }

            return cards;
          }
        }, {
          key: "addCardsGeneralDataProperties",
          value: function addCardsGeneralDataProperties(data) {
            var cardAccounts = data.cardAccounts;
            cardAccounts = this.addCardAccountsCardProperties(cardAccounts);
            var defaultCardAccount = data.defaultCardAccount;

            if (defaultCardAccount != null) {
              defaultCardAccount = this.addNewCardProperties(defaultCardAccount.cards);
            }

            return data;
          }
        }, {
          key: "addCardAccountsCardProperties",
          value: function addCardAccountsCardProperties(accounts) {
            var _this26 = this;

            accounts.forEach(function (account) {
              var cards = account.cards;
              account.cards = _this26.addNewCardProperties(cards);
            });
            return accounts;
          }
        }]);

        return AgentifaiCardsTransformerService;
      }();

      AgentifaiCardsTransformerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AgentifaiCardsTransformerService);
      /***/
    },

    /***/
    "Fzy9": function Fzy9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CredentialUnlockQuestionsRequest", function () {
        return CredentialUnlockQuestionsRequest;
      });

      var CredentialUnlockQuestionsRequest = function CredentialUnlockQuestionsRequest() {
        _classCallCheck(this, CredentialUnlockQuestionsRequest);

        this.contractNumber = "";
        this.phoneNumber = "";
      };
      /***/

    },

    /***/
    "G8L4": function G8L4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CredentialsManagementUtils", function () {
        return CredentialsManagementUtils;
      });
      /* harmony import */


      var src_app_models_cardMatrix_MatrixActivateSimExe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/cardMatrix/MatrixActivateSimExe */
      "7WAv");
      /* harmony import */


      var src_app_models_cardMatrix_MatrixRequisitionSimExe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/cardMatrix/MatrixRequisitionSimExe */
      "cIA/");

      var CredentialsManagementUtils = /*#__PURE__*/function () {
        function CredentialsManagementUtils() {
          _classCallCheck(this, CredentialsManagementUtils);
        }

        _createClass(CredentialsManagementUtils, null, [{
          key: "createMatrixRequisitionSimExe",
          value: function createMatrixRequisitionSimExe(parameters, requestFactory) {
            var request = new src_app_models_cardMatrix_MatrixRequisitionSimExe__WEBPACK_IMPORTED_MODULE_1__["MatrixRequisitionSimExe"]();
            request.operationId = parseInt(parameters.operationId);
            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.operationName = '';
            request.scheduling = requestFactory.createScheduling(parameters);
            request.adressSequenceNumber = parseInt(parameters.addressSequenceNumber);
            request.motive = requestFactory.createGenericKeyValue(parameters["motive"]);
            return request;
          }
        }, {
          key: "createMatrixActivateSimExe",
          value: function createMatrixActivateSimExe(parameters, requestFactory) {
            var request = new src_app_models_cardMatrix_MatrixActivateSimExe__WEBPACK_IMPORTED_MODULE_0__["MatrixActivateSimExe"]();
            request.operationId = parseInt(parameters.operationId);
            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.operationName = '';
            request.scheduling = requestFactory.createScheduling(parameters);
            request.matrixReferenceNumber = parameters.matrixReferenceNumber;
            request.hasNifCreds = parameters.hasNifCreds;
            return request;
          }
        }]);

        return CredentialsManagementUtils;
      }();
      /***/

    },

    /***/
    "GI5K": function GI5K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetMatrixConfig", function () {
        return GetMatrixConfig;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetMatrixConfig = /*#__PURE__*/function () {
        function GetMatrixConfig(request, responseFactory) {
          _classCallCheck(this, GetMatrixConfig);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ['headers.+', 'status', String.raw(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["body.((adressList.[^.]+.adressSequenceNumber)|motiveList.[^.]+)"], ["body\\.((adressList\\.[^.]+\\.adressSequenceNumber)|motiveList\\.[^.]+)"])))];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetMatrixConfig, [{
          key: "execute",
          value: function execute(service) {
            var _this27 = this;

            var headers = this.request.getHeaders();
            return service.matrixConfig(headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
              return _this27.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
              return _this27.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetMatrixConfig;
      }();
      /***/

    },

    /***/
    "GIPb": function GIPb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MBWayPartnerAcceptTransferCGDAccountRequest", function () {
        return MBWayPartnerAcceptTransferCGDAccountRequest;
      });
      /* harmony import */


      var src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/operation/request/GenericOperationRequest */
      "AwYQ");

      var MBWayPartnerAcceptTransferCGDAccountRequest = /*#__PURE__*/function (_src_app_models_opera2) {
        _inherits(MBWayPartnerAcceptTransferCGDAccountRequest, _src_app_models_opera2);

        var _super4 = _createSuper(MBWayPartnerAcceptTransferCGDAccountRequest);

        function MBWayPartnerAcceptTransferCGDAccountRequest() {
          _classCallCheck(this, MBWayPartnerAcceptTransferCGDAccountRequest);

          return _super4.apply(this, arguments);
        }

        return MBWayPartnerAcceptTransferCGDAccountRequest;
      }(src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"]);
      /***/

    },

    /***/
    "Gowj": function Gowj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransferInternalRequest", function () {
        return TransferInternalRequest;
      });
      /* harmony import */


      var src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/operation/request/GenericOperationRequest */
      "AwYQ");
      /* harmony import */


      var src_app_models_operation_Charges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/operation/Charges */
      "1wiW");

      var TransferInternalRequest = /*#__PURE__*/function (_src_app_models_opera3) {
        _inherits(TransferInternalRequest, _src_app_models_opera3);

        var _super5 = _createSuper(TransferInternalRequest);

        function TransferInternalRequest() {
          var _this28;

          _classCallCheck(this, TransferInternalRequest);

          _this28 = _super5.call(this);
          _this28.charges = [new src_app_models_operation_Charges__WEBPACK_IMPORTED_MODULE_1__["Charges"]()];
          _this28.sourceAccount = '';
          _this28.destinationAccount = '';
          _this28.destinationAccountCurrency = '';
          _this28.amount = '';
          _this28.currency = '';
          _this28.descriptionForSourceAccount = '';
          _this28.descriptionForDestinationAccount = '';
          _this28.finality = '';
          _this28.comment = '';
          return _this28;
        }

        _createClass(TransferInternalRequest, [{
          key: "getSourceAccount",
          get: function get() {
            return this.sourceAccount;
          }
        }, {
          key: "setSourceAccount",
          set: function set(sourceAccount) {
            this.sourceAccount = sourceAccount;
          }
        }, {
          key: "getDestinationAccountAccount",
          get: function get() {
            return this.destinationAccount;
          }
        }, {
          key: "setDestinationAccountAccount",
          set: function set(destinationAccount) {
            this.destinationAccount = destinationAccount;
          }
        }, {
          key: "getDestinationAccountCurrency",
          get: function get() {
            return this.destinationAccountCurrency;
          }
        }, {
          key: "setDestinationAccountCurrency",
          set: function set(destinationAccountCurrency) {
            this.destinationAccountCurrency = destinationAccountCurrency;
          }
        }, {
          key: "getAmount",
          get: function get() {
            return this.amount;
          }
        }, {
          key: "setAmount",
          set: function set(amount) {
            this.amount = amount;
          }
        }, {
          key: "getCurrency",
          get: function get() {
            return this.currency;
          }
        }, {
          key: "setCurrency",
          set: function set(currency) {
            this.currency = currency;
          }
        }, {
          key: "getDescriptionForSourceAccount",
          get: function get() {
            return this.descriptionForSourceAccount;
          }
        }, {
          key: "setDescriptionForSourceAccount",
          set: function set(descriptionForSourceAccount) {
            this.descriptionForSourceAccount = descriptionForSourceAccount;
          }
        }, {
          key: "getdescriptionForDestinationAccount",
          get: function get() {
            return this.descriptionForDestinationAccount;
          }
        }, {
          key: "setdescriptionForDestinationAccount",
          set: function set(descriptionForDestinationAccount) {
            this.descriptionForDestinationAccount = descriptionForDestinationAccount;
          }
        }, {
          key: "getFinality",
          get: function get() {
            return this.finality;
          }
        }, {
          key: "setFinality",
          set: function set(finality) {
            this.finality = finality;
          }
        }, {
          key: "getComment",
          get: function get() {
            return this.comment;
          }
        }, {
          key: "setComment",
          set: function set(comment) {
            this.comment = comment;
          }
        }]);

        return TransferInternalRequest;
      }(src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"]);
      /***/

    },

    /***/
    "GvD3": function GvD3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisableBannerPage", function () {
        return DisableBannerPage;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var DisableBannerPage = /*#__PURE__*/function () {
        function DisableBannerPage(request, responseFactory) {
          _classCallCheck(this, DisableBannerPage);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(DisableBannerPage, [{
          key: "execute",
          value: function execute(service) {
            var _this29 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var pageName = parameters.pageName;
            return service.disableLandingPageBanner(headers, pageName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this29.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this29.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return DisableBannerPage;
      }();
      /***/

    },

    /***/
    "HPR3": function HPR3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilsService", function () {
        return UtilsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UtilsService = /*#__PURE__*/function () {
        function UtilsService() {
          _classCallCheck(this, UtilsService);
        }

        _createClass(UtilsService, [{
          key: "handleError",
          value: function handleError(_ref) {
            var error = _ref.error,
                _ref$isLogin = _ref.isLogin,
                isLogin = _ref$isLogin === void 0 ? null : _ref$isLogin,
                _ref$isFingerPrint = _ref.isFingerPrint,
                isFingerPrint = _ref$isFingerPrint === void 0 ? null : _ref$isFingerPrint;
          }
        }, {
          key: "APPSetTimeout",
          value: function APPSetTimeout() {}
        }, {
          key: "APPClearTimeout",
          value: function APPClearTimeout() {}
        }, {
          key: "resetCredentials",
          value: function resetCredentials() {}
        }]);

        return UtilsService;
      }();

      UtilsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UtilsService);
      /***/
    },

    /***/
    "HTOI": function HTOI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentifaiCommandFactoryService", function () {
        return AgentifaiCommandFactoryService;
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


      var src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/commands/commom/agentifai-command-type */
      "PZoT");
      /* harmony import */


      var src_app_agentifai_commands_payments_services_execute_service_payment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/commands/payments/services/execute-service-payment */
      "4OU7");
      /* harmony import */


      var src_app_agentifai_commands_accounts_get_accounts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/agentifai/commands/accounts/get-accounts */
      "Lx10");
      /* harmony import */


      var src_app_services_agentifai_agentifai_response_factory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/agentifai/agentifai-response-factory.service */
      "LCUH");
      /* harmony import */


      var src_app_agentifai_commands_payments_services_get_frequent_service_payment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/agentifai/commands/payments/services/get-frequent-service-payment */
      "9p9f");
      /* harmony import */


      var src_app_agentifai_commands_payments_get_payments_general_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/agentifai/commands/payments/get-payments-general-data */
      "bt0b");
      /* harmony import */


      var src_app_agentifai_commands_operation_proof_get_operation_proof__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/agentifai/commands/operation-proof/get-operation-proof */
      "Jrio");
      /* harmony import */


      var src_app_agentifai_commands_get_current_customer_contacts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/agentifai/commands/get-current-customer-contacts */
      "ovxX");
      /* harmony import */


      var src_app_agentifai_commands_operation_proof_send_operation_proof__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/agentifai/commands/operation-proof/send-operation-proof */
      "zZvH");
      /* harmony import */


      var src_app_agentifai_commands_payments_services_simulate_service_payment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/agentifai/commands/payments/services/simulate-service-payment */
      "C8/L");
      /* harmony import */


      var src_app_agentifai_commands_payments_get_payments_entity__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/agentifai/commands/payments/get-payments-entity */
      "bkYj");
      /* harmony import */


      var src_app_agentifai_commands_accounts_get_account_balances__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/agentifai/commands/accounts/get-account-balances */
      "1Orp");
      /* harmony import */


      var src_app_agentifai_commands_accounts_get_transactions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/agentifai/commands/accounts/get-transactions */
      "UR4D");
      /* harmony import */


      var src_app_agentifai_commands_transfers_internal_simulate_internal_transfer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/agentifai/commands/transfers/internal/simulate-internal-transfer */
      "MBy1");
      /* harmony import */


      var src_app_services_agentifai_agentifai_request_factory_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/services/agentifai/agentifai-request-factory.service */
      "ekNZ");
      /* harmony import */


      var src_app_agentifai_commands_transfers_internal_execute_internal_transfer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/agentifai/commands/transfers/internal/execute-internal-transfer */
      "U4TL");
      /* harmony import */


      var src_app_agentifai_commands_transfers_sepa_execute_sepa_transfer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/agentifai/commands/transfers/sepa/execute-sepa-transfer */
      "zS/o");
      /* harmony import */


      var src_app_agentifai_commands_transfers_sepa_simulate_sepa_transfer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/agentifai/commands/transfers/sepa/simulate-sepa-transfer */
      "WQQq");
      /* harmony import */


      var src_app_agentifai_commands_transfers_immediate_execute_immediate_transfer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/agentifai/commands/transfers/immediate/execute-immediate-transfer */
      "gI+7");
      /* harmony import */


      var src_app_agentifai_commands_transfers_immediate_simulate_immediate_transfer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! src/app/agentifai/commands/transfers/immediate/simulate-immediate-transfer */
      "mxeL");
      /* harmony import */


      var src_app_agentifai_commands_transfers_get_transfer_type_validation__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! src/app/agentifai/commands/transfers/get-transfer-type-validation */
      "ANQa");
      /* harmony import */


      var src_app_agentifai_commands_transfers_get_client_status__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! src/app/agentifai/commands/transfers/get-client-status */
      "Vd28");
      /* harmony import */


      var src_app_agentifai_commands_transfers_get_transfer_calendar_restrictions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! src/app/agentifai/commands/transfers/get-transfer-calendar-restrictions */
      "a+bK");
      /* harmony import */


      var src_app_agentifai_commands_transfers_get_transfers_general_data__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! src/app/agentifai/commands/transfers/get-transfers-general-data */
      "x5Zr");
      /* harmony import */


      var src_app_agentifai_commands_transfers_internal_get_frequent_internal_transfer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! src/app/agentifai/commands/transfers/internal/get-frequent-internal-transfer */
      "aTnY");
      /* harmony import */


      var src_app_agentifai_commands_transfers_sepa_get_frequent_sepa_transfer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! src/app/agentifai/commands/transfers/sepa/get-frequent-sepa-transfer */
      "rqpB");
      /* harmony import */


      var src_app_agentifai_commands_unlock_credentials_get_credential_unlock_questions__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! src/app/agentifai/commands/unlock-credentials/get-credential-unlock-questions */
      "EUKi");
      /* harmony import */


      var src_app_agentifai_commands_unlock_credentials_unlock_credentials__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! src/app/agentifai/commands/unlock-credentials/unlock-credentials */
      "8l7Y");
      /* harmony import */


      var src_app_agentifai_commands_terms_and_conditions_get_terms_and_conditions_consent__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! src/app/agentifai/commands/terms-and-conditions/get-terms-and-conditions-consent */
      "tHMQ");
      /* harmony import */


      var src_app_agentifai_commands_terms_and_conditions_consent_terms_and_conditions__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! src/app/agentifai/commands/terms-and-conditions/consent-terms-and-conditions */
      "/tM9");
      /* harmony import */


      var src_app_services_agentifai_agentifai_accounts_transformer_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! src/app/services/agentifai/agentifai-accounts-transformer.service */
      "MCMW");
      /* harmony import */


      var src_app_agentifai_commands_payments_telecommunications_get_telecommunicaition_configurations__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! src/app/agentifai/commands/payments/telecommunications/get-telecommunicaition-configurations */
      "EpBD");
      /* harmony import */


      var src_app_agentifai_commands_payments_telecommunications_simulate_telecommunication_payment__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! src/app/agentifai/commands/payments/telecommunications/simulate-telecommunication-payment */
      "n/kK");
      /* harmony import */


      var src_app_agentifai_commands_payments_telecommunications_execute_telecommunication_payment__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! src/app/agentifai/commands/payments/telecommunications/execute-telecommunication-payment */
      "YARR");
      /* harmony import */


      var src_app_agentifai_commands_payments_telecommunications_get_frequent_telecommunication_payment__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! src/app/agentifai/commands/payments/telecommunications/get-frequent-telecommunication-payment */
      "Rkud");
      /* harmony import */


      var src_app_agentifai_commands_mbway_get_mbway_cards__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! src/app/agentifai/commands/mbway/get-mbway-cards */
      "HyTs");
      /* harmony import */


      var src_app_agentifai_commands_mbway_simulate_mbway_adhesion__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! src/app/agentifai/commands/mbway/simulate-mbway-adhesion */
      "vzdz");
      /* harmony import */


      var src_app_agentifai_commands_mbway_execute_mbway_adhesion__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! src/app/agentifai/commands/mbway/execute-mbway-adhesion */
      "z/oj");
      /* harmony import */


      var src_app_agentifai_commands_mbway_update_transfer_consent_for_cgd_account__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! src/app/agentifai/commands/mbway/update-transfer-consent-for-cgd-account */
      "sqgU");
      /* harmony import */


      var src_app_agentifai_commands_transfers_immediate_get_immediate_transfer_phone_numbers__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! src/app/agentifai/commands/transfers/immediate/get-immediate-transfer-phone-numbers */
      "gASa");
      /* harmony import */


      var src_app_agentifai_commands_transfers_immediate_get_immediate_transfer_accounts__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! src/app/agentifai/commands/transfers/immediate/get-immediate-transfer-accounts */
      "zw4M");
      /* harmony import */


      var src_app_agentifai_commands_cards_get_payment_cards__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! src/app/agentifai/commands/cards/get-payment-cards */
      "g2f/");
      /* harmony import */


      var src_app_agentifai_commands_cards_get_cards_general_data__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! src/app/agentifai/commands/cards/get-cards-general-data */
      "vEtZ");
      /* harmony import */


      var src_app_agentifai_commands_cards_get_card_account_transactions__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! src/app/agentifai/commands/cards/get-card-account-transactions */
      "UKJ5");
      /* harmony import */


      var src_app_services_agentifai_agentifai_cards_transformer_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! src/app/services/agentifai/agentifai-cards-transformer.service */
      "FcPO");
      /* harmony import */


      var src_app_agentifai_commands_cards_payment_execute_card_payment__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! src/app/agentifai/commands/cards/payment/execute-card-payment */
      "+n3k");
      /* harmony import */


      var src_app_agentifai_commands_cards_payment_simulate_card_payment__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! src/app/agentifai/commands/cards/payment/simulate-card-payment */
      "8EHu");
      /* harmony import */


      var src_app_agentifai_commands_cards_get_sms_token_phone_number__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! src/app/agentifai/commands/cards/get-sms-token-phone-number */
      "vVt6");
      /* harmony import */


      var src_app_agentifai_commands_cards_activation_activate_card__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! src/app/agentifai/commands/cards/activation/activate-card */
      "R97l");
      /* harmony import */


      var src_app_agentifai_commands_callback_get_customer_manager__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! src/app/agentifai/commands/callback/get-customer-manager */
      "3hTJ");
      /* harmony import */


      var src_app_agentifai_commands_callback_get_manager_callback_config__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! src/app/agentifai/commands/callback/get-manager-callback-config */
      "RgOd");
      /* harmony import */


      var src_app_agentifai_commands_callback_get_manager_available_time__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! src/app/agentifai/commands/callback/get-manager-available-time */
      "iy9M");
      /* harmony import */


      var src_app_agentifai_commands_callback_set_callback__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! src/app/agentifai/commands/callback/set-callback */
      "s94i");
      /* harmony import */


      var src_app_agentifai_commands_loans_simulate_personal_loan__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! src/app/agentifai/commands/loans/simulate-personal-loan */
      "OQS7");
      /* harmony import */


      var src_app_agentifai_commands_loans_get_personal_loan_general_data__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! src/app/agentifai/commands/loans/get-personal-loan-general-data */
      "0K33");
      /* harmony import */


      var src_app_agentifai_commands_loans_simulate_personal_loan_adhesion__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! src/app/agentifai/commands/loans/simulate-personal-loan-adhesion */
      "zQ9Q");
      /* harmony import */


      var src_app_agentifai_commands_loans_execute_personal_loan_adhesion__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! src/app/agentifai/commands/loans/execute-personal-loan-adhesion */
      "eFPC");
      /* harmony import */


      var src_app_agentifai_commands_content_get_private_content__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! src/app/agentifai/commands/content/get-private-content */
      "IqUE");
      /* harmony import */


      var src_app_agentifai_commands_content_disable_banner_page__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! src/app/agentifai/commands/content/disable-banner-page */
      "GvD3");
      /* harmony import */


      var src_app_agentifai_commands_cards_acquisition_get_showcase_cards__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! src/app/agentifai/commands/cards/acquisition/get-showcase-cards */
      "zjHV");
      /* harmony import */


      var src_app_agentifai_commands_cards_acquisition_get_showcase_product_document__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! src/app/agentifai/commands/cards/acquisition/get-showcase-product-document */
      "65CJ");
      /* harmony import */


      var src_app_agentifai_commands_cards_acquisition_get_card_adhesion_accounts__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! src/app/agentifai/commands/cards/acquisition/get-card-adhesion-accounts */
      "3zAc");
      /* harmony import */


      var src_app_agentifai_commands_cards_acquisition_get_card_adhesion_configurations__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! src/app/agentifai/commands/cards/acquisition/get-card-adhesion-configurations */
      "Ys4l");
      /* harmony import */


      var src_app_agentifai_commands_cards_acquisition_simulate_card_adhesion__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
      /*! src/app/agentifai/commands/cards/acquisition/simulate-card-adhesion */
      "P3RZ");
      /* harmony import */


      var src_app_agentifai_commands_cards_acquisition_init_new_credit_card__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
      /*! src/app/agentifai/commands/cards/acquisition/init-new-credit-card */
      "/Lgg");
      /* harmony import */


      var src_app_agentifai_commands_cards_acquisition_execute_card_adhesion__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
      /*! src/app/agentifai/commands/cards/acquisition/execute-card-adhesion */
      "apfW");
      /* harmony import */


      var src_app_agentifai_commands_cards_acquisition_get_showcase_characteristics__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
      /*! src/app/agentifai/commands/cards/acquisition/get-showcase-characteristics */
      "S3cc");
      /* harmony import */


      var src_app_agentifai_commands_unlock_contract_number_unlock_contract_number__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
      /*! src/app/agentifai/commands/unlock-contract-number/unlock-contract-number */
      "Vwa5");
      /* harmony import */


      var src_app_agentifai_commands_unlock_contract_number_get_contract_number_unlock_questions__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
      /*! src/app/agentifai/commands/unlock-contract-number/get-contract-number-unlock-questions */
      "BoZz");
      /* harmony import */


      var src_app_agentifai_commands_customers_update_client_information_get_update_client_information_address__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
      /*! src/app/agentifai/commands/customers/update-client-information/get-update-client-information-address */
      "6SY+");
      /* harmony import */


      var src_app_agentifai_commands_customers_update_client_information_get_update_client_information_list__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
      /*! src/app/agentifai/commands/customers/update-client-information/get-update-client-information-list */
      "4+i+");
      /* harmony import */


      var src_app_agentifai_commands_customers_update_client_information_simulate_update_client_information__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
      /*! src/app/agentifai/commands/customers/update-client-information/simulate-update-client-information */
      "xvKO");
      /* harmony import */


      var src_app_agentifai_commands_customers_update_client_information_execute_update_client_information__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(
      /*! src/app/agentifai/commands/customers/update-client-information/execute-update-client-information */
      "y8zl");
      /* harmony import */


      var src_app_agentifai_commands_customers_update_client_information_get_update_client_information_validity__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(
      /*! src/app/agentifai/commands/customers/update-client-information/get-update-client-information-validity */
      "R5IS");
      /* harmony import */


      var src_app_agentifai_commands_customers_update_client_information_get_update_client_information_professional__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(
      /*! src/app/agentifai/commands/customers/update-client-information/get-update-client-information-professional */
      "K9C8");
      /* harmony import */


      var src_app_agentifai_commands_customers_update_client_information_get_update_client_information_personal__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(
      /*! src/app/agentifai/commands/customers/update-client-information/get-update-client-information-personal */
      "DEGM");
      /* harmony import */


      var src_app_agentifai_commands_credentialsmanagement_get_credentials_management__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(
      /*! src/app/agentifai/commands/credentialsmanagement/get-credentials-management */
      "MjQc");
      /* harmony import */


      var src_app_agentifai_commands_credentialsmanagement_matrixrequisition_get_matrix_config__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(
      /*! src/app/agentifai/commands/credentialsmanagement/matrixrequisition/get-matrix-config */
      "GI5K");
      /* harmony import */


      var src_app_agentifai_commands_credentialsmanagement_matrixrequisition_simulate_matrix_requisition__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(
      /*! src/app/agentifai/commands/credentialsmanagement/matrixrequisition/simulate-matrix-requisition */
      "HXFE");
      /* harmony import */


      var src_app_agentifai_commands_credentialsmanagement_matrixrequisition_execute_matrix_requisition__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(
      /*! src/app/agentifai/commands/credentialsmanagement/matrixrequisition/execute-matrix-requisition */
      "K+8N");
      /* harmony import */


      var src_app_agentifai_commands_credentialsmanagement_matrixactivation_simulate_activate_matrix__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(
      /*! src/app/agentifai/commands/credentialsmanagement/matrixactivation/simulate-activate-matrix */
      "0xVn");
      /* harmony import */


      var src_app_agentifai_commands_credentialsmanagement_matrixactivation_execute_activate_matrix__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(
      /*! src/app/agentifai/commands/credentialsmanagement/matrixactivation/execute-activate-matrix */
      "RpFj");

      var AgentifaiCommandFactoryService = /*#__PURE__*/function () {
        function AgentifaiCommandFactoryService(responseFactory, requestFactory, accountsTranformer, cardsTransformer) {
          _classCallCheck(this, AgentifaiCommandFactoryService);

          this.responseFactory = responseFactory;
          this.requestFactory = requestFactory;
          this.accountsTranformer = accountsTranformer;
          this.cardsTransformer = cardsTransformer;
        }

        _createClass(AgentifaiCommandFactoryService, [{
          key: "createCommand",
          value: function createCommand(commandType, request) {
            var command;

            switch (commandType) {
              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetAccounts:
                command = this.createGetAccounts(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetAccountBalances:
                command = this.createGetAccountBalances(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetTransactions:
                command = this.createGetTransactions(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetPaymentsEntity:
                command = this.createGetPaymentsEntity(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetFrequentServicePayment:
                command = this.createGetFrequentServicePayment(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetPaymentsGeneralData:
                command = this.createGetPaymentsGeneralData(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].SimulateServicePayment:
                command = this.createSimulateServicePayment(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].ExecuteServicePayment:
                command = this.createExecuteService(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetTelecommunicationConfigurations:
                command = this.createGetTelecommunicationConfigurations(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].SimulateTelecommunicationPayment:
                command = this.createSimulateTelecommunicationPayment(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].ExecuteTelecommunicationPayment:
                command = this.createExecuteTelecommunicationPayment(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetFrequentTelecommunicationPayment:
                command = this.createGetFrequentTelecommunicationPayment(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetCurrentCustomerContacts:
                command = this.createGetCurrentCustomerContacts(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetOperationProof:
                command = this.createGetOperationProof(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].SendOperationProof:
                command = this.createSendOperationProof(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].SimulateInternalTransfer:
                command = this.createSimulateInternalTransfer(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].ExecuteInternalTransfer:
                command = this.createExecuteInternalTransfer(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].SimulateSEPATransfer:
                command = this.createSimulateSEPATransfer(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].ExecuteSEPATransfer:
                command = this.createExecuteSEPATransfer(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].SimulateImmediateTransfer:
                command = this.createSimulateImmediateTransferCommand(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].ExecuteImmediateTransfer:
                command = this.createExecuteImmediateTransferCommand(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetTransferTypeValidation:
                command = this.createGetTransferTypeValidation(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetTransferCalendarRestrictions:
                command = this.createGeTransferCalendarRestrictions(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetClientStatus:
                command = this.createGetClientStatus(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetTransfersGeneralData:
                command = this.createGetTransfersGeneralData(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetFrequentInternalTransfer:
                command = this.createGetFrequentInternalTransfer(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetFrequentSEPATransfer:
                command = this.createGetFrequentSEPATransfer(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetImmediateTransferPhoneNumbers:
                command = this.createGetImmediateTransferPhoneNumbers(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetImmediateTransferAccounts:
                command = this.createGetImmediateTransferAccounts(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetCredentialUnlockQuestions:
                command = this.createGetCredentialUnlockQuestions(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].UnlockCredentials:
                command = this.createUnlockQuestions(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetContractNumberUnlockQuestions:
                command = this.createGetContractNumberUnlockQuestions(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].UnlockContractNumber:
                command = this.createUnlockContractNumber(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetTermsAndConditionsConsent:
                command = this.createGetTermsAndConditionsConsent(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].ConsentTermsAndConditions:
                command = this.createConsentTermsAndConditions(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetMBWayCards:
                command = this.createGetMBWayCards(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].SimulateMBWayAdhesion:
                command = this.createSimulateMBWayAdhesion(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].ExecuteMBWayAdhesion:
                command = this.createExecuteMBWayAdhesion(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].UpdateTransferConsentForCgdAccount:
                command = this.createUpdateTransferConsentForCgdAccounts(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetPaymentCards:
                command = this.createGetPaymentCards(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetCardsGeneralData:
                command = this.createGetCardsGeneralData(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetCardAccountTransactions:
                command = this.createGetCardAccountTransactions(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].SimulateCardPayment:
                command = this.createSimulateCardPayment(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].ExecuteCardPayment:
                command = this.createExecuteCardPayment(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].ActivateCard:
                command = this.createActivateCard(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetSmsTokenPhoneNumber:
                command = this.createGetSmsTokenPhoneNumber(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetCustomerManager:
                command = this.createGetCustomerManager(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetManagerCallbackConfig:
                command = this.createGetManagerCallbackConfig(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetManagerAvailableTime:
                command = this.createGetManagerAvailableTime(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].SetCallback:
                command = this.createSetCallback(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].SimulatePersonalLoan:
                command = this.createSimulatePersonalLoan(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetPersonalLoanGeneralData:
                command = this.createGetPersonalLoanGeneralData(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].SimulatePersonalLoanAdhesion:
                command = this.createSimulatePersonalLoanAdhesion(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].ExecutePersonalLoanAdhesion:
                command = this.createExecutePersonalLoanAdhesion(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetPrivateContent:
                command = this.createGetPrivateContent(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].DisableBannerPage:
                command = this.createDisableBannerPage(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetShowcaseCards:
                command = this.createGetShowcaseCards(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetShowcaseCharacteristics:
                command = this.createGetShowcaseCharacteristics(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetShowcaseProductDocument:
                command = this.createGetShowcaseProductDocument(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetCardAdhesionAccounts:
                command = this.createGetCardAdhesionAccounts(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetCardAdhesionConfigurations:
                command = this.createGetCardAdhesionConfigurations(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].SimulateCardAdhesion:
                command = this.createSimulateCardAdhesion(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].InitNewCreditCard:
                command = this.createInitNewCreditCard(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].ExecuteCardAdhesion:
                command = this.createExecuteCardAdhesion(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetUpdateClientInformationAddress:
                command = this.createGetUpdateClientInformationAddress(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetUpdateClientInformationPersonal:
                command = this.createGetUpdateClientInformationPersonal(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetUpdateClientInformationProfessional:
                command = this.createGetUpdateClientInformationProfessional(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetUpdateClientInformationValidity:
                command = this.createGetUpdateClientInformationValidity(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetUpdateClientInformationList:
                command = this.createGetUpdateClientInformationList(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].SimulateUpdateClientInformation:
                command = this.createSimulateUpdateClientInformation(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].ExecuteUpdateClientInformation:
                command = this.createExecuteUpdateClientInformation(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetCredentialsManagement:
                command = this.createGetCredentialsManagement(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].GetMatrixConfig:
                command = this.createGetMatrixConfig(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].SimulateMatrixRequisition:
                command = this.createSimulateMatrixRequistion(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].ExecuteMatrixRequisition:
                command = this.createExecuteMatrixRequisition(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].SimulateActivateMatrix:
                command = this.createSimulateActivateMatrix(request);
                break;

              case src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__["AgentifaiCommandType"].ExecuteActivateMatrix:
                command = this.createExecuteActivateMatrix(request);
                break;

              default:
                break;
            }

            return command;
          } //Accounts

        }, {
          key: "createGetAccounts",
          value: function createGetAccounts(request) {
            return new src_app_agentifai_commands_accounts_get_accounts__WEBPACK_IMPORTED_MODULE_4__["GetAccountsCommand"](request, this.responseFactory, this.accountsTranformer);
          }
        }, {
          key: "createGetAccountBalances",
          value: function createGetAccountBalances(request) {
            return new src_app_agentifai_commands_accounts_get_account_balances__WEBPACK_IMPORTED_MODULE_13__["GetAccountBalance"](request, this.responseFactory);
          }
        }, {
          key: "createGetTransactions",
          value: function createGetTransactions(request) {
            return new src_app_agentifai_commands_accounts_get_transactions__WEBPACK_IMPORTED_MODULE_14__["GetTransactions"](request, this.responseFactory);
          } //Services Payment

        }, {
          key: "createGetPaymentsEntity",
          value: function createGetPaymentsEntity(request) {
            return new src_app_agentifai_commands_payments_get_payments_entity__WEBPACK_IMPORTED_MODULE_12__["GetPaymentsEntityCommand"](request, this.responseFactory);
          }
        }, {
          key: "createGetPaymentsGeneralData",
          value: function createGetPaymentsGeneralData(request) {
            return new src_app_agentifai_commands_payments_get_payments_general_data__WEBPACK_IMPORTED_MODULE_7__["GetPaymentsGeneralData"](request, this.responseFactory, this.accountsTranformer);
          }
        }, {
          key: "createGetFrequentServicePayment",
          value: function createGetFrequentServicePayment(request) {
            return new src_app_agentifai_commands_payments_services_get_frequent_service_payment__WEBPACK_IMPORTED_MODULE_6__["GetFrequentServicePaymentCommand"](request, this.responseFactory);
          }
        }, {
          key: "createSimulateServicePayment",
          value: function createSimulateServicePayment(request) {
            return new src_app_agentifai_commands_payments_services_simulate_service_payment__WEBPACK_IMPORTED_MODULE_11__["SimulateServicePaymentCommand"](request, this.responseFactory, this.requestFactory);
          }
        }, {
          key: "createExecuteService",
          value: function createExecuteService(request) {
            return new src_app_agentifai_commands_payments_services_execute_service_payment__WEBPACK_IMPORTED_MODULE_3__["ExecuteServicePaymentCommand"](request, this.responseFactory, this.requestFactory);
          }
        }, {
          key: "createGetCurrentCustomerContacts",
          value: function createGetCurrentCustomerContacts(request) {
            return new src_app_agentifai_commands_get_current_customer_contacts__WEBPACK_IMPORTED_MODULE_9__["GetCurrentCustomerContactsCommand"](request, this.responseFactory);
          } //Telecommunications Payment

        }, {
          key: "createGetTelecommunicationConfigurations",
          value: function createGetTelecommunicationConfigurations(request) {
            return new src_app_agentifai_commands_payments_telecommunications_get_telecommunicaition_configurations__WEBPACK_IMPORTED_MODULE_33__["GetTelecommunicationConfigurationsCommand"](request, this.responseFactory);
          }
        }, {
          key: "createSimulateTelecommunicationPayment",
          value: function createSimulateTelecommunicationPayment(request) {
            return new src_app_agentifai_commands_payments_telecommunications_simulate_telecommunication_payment__WEBPACK_IMPORTED_MODULE_34__["SimulateTelecommunicationPaymentCommand"](request, this.requestFactory, this.responseFactory);
          }
        }, {
          key: "createExecuteTelecommunicationPayment",
          value: function createExecuteTelecommunicationPayment(request) {
            return new src_app_agentifai_commands_payments_telecommunications_execute_telecommunication_payment__WEBPACK_IMPORTED_MODULE_35__["ExecuteTelecommunicationPaymentCommand"](request, this.requestFactory, this.responseFactory);
          }
        }, {
          key: "createGetFrequentTelecommunicationPayment",
          value: function createGetFrequentTelecommunicationPayment(request) {
            return new src_app_agentifai_commands_payments_telecommunications_get_frequent_telecommunication_payment__WEBPACK_IMPORTED_MODULE_36__["GetFrequentTelecommunicationPaymentCommand"](request, this.responseFactory);
          } //Proofs

        }, {
          key: "createGetOperationProof",
          value: function createGetOperationProof(request) {
            return new src_app_agentifai_commands_operation_proof_get_operation_proof__WEBPACK_IMPORTED_MODULE_8__["GetOperationProofCommand"](request, this.responseFactory);
          }
        }, {
          key: "createSendOperationProof",
          value: function createSendOperationProof(request) {
            return new src_app_agentifai_commands_operation_proof_send_operation_proof__WEBPACK_IMPORTED_MODULE_10__["SendOperationProofCommand"](request, this.responseFactory);
          } //Transfers

        }, {
          key: "createSimulateInternalTransfer",
          value: function createSimulateInternalTransfer(request) {
            return new src_app_agentifai_commands_transfers_internal_simulate_internal_transfer__WEBPACK_IMPORTED_MODULE_15__["SimulateInternalTransferCommand"](request, this.responseFactory, this.requestFactory);
          }
        }, {
          key: "createExecuteInternalTransfer",
          value: function createExecuteInternalTransfer(request) {
            return new src_app_agentifai_commands_transfers_internal_execute_internal_transfer__WEBPACK_IMPORTED_MODULE_17__["ExecuteInternalTransferCommand"](request, this.responseFactory, this.requestFactory);
          }
        }, {
          key: "createSimulateSEPATransfer",
          value: function createSimulateSEPATransfer(request) {
            return new src_app_agentifai_commands_transfers_sepa_simulate_sepa_transfer__WEBPACK_IMPORTED_MODULE_19__["SimulateSEPATransferCommand"](request, this.responseFactory, this.requestFactory);
          }
        }, {
          key: "createExecuteSEPATransfer",
          value: function createExecuteSEPATransfer(request) {
            return new src_app_agentifai_commands_transfers_sepa_execute_sepa_transfer__WEBPACK_IMPORTED_MODULE_18__["ExecuteSEPATransferCommand"](request, this.responseFactory, this.requestFactory);
          }
        }, {
          key: "createSimulateImmediateTransferCommand",
          value: function createSimulateImmediateTransferCommand(request) {
            return new src_app_agentifai_commands_transfers_immediate_simulate_immediate_transfer__WEBPACK_IMPORTED_MODULE_21__["SimulateImmediateTransferCommand"](request, this.responseFactory);
          }
        }, {
          key: "createExecuteImmediateTransferCommand",
          value: function createExecuteImmediateTransferCommand(request) {
            return new src_app_agentifai_commands_transfers_immediate_execute_immediate_transfer__WEBPACK_IMPORTED_MODULE_20__["ExecuteImmediateTransferCommand"](request, this.responseFactory, this.requestFactory);
          }
        }, {
          key: "createGetTransferTypeValidation",
          value: function createGetTransferTypeValidation(request) {
            return new src_app_agentifai_commands_transfers_get_transfer_type_validation__WEBPACK_IMPORTED_MODULE_22__["GetTransferTypeValidation"](request, this.responseFactory);
          }
        }, {
          key: "createGeTransferCalendarRestrictions",
          value: function createGeTransferCalendarRestrictions(request) {
            return new src_app_agentifai_commands_transfers_get_transfer_calendar_restrictions__WEBPACK_IMPORTED_MODULE_24__["GetTransferCalendarRestrictions"](request, this.responseFactory);
          }
        }, {
          key: "createGetClientStatus",
          value: function createGetClientStatus(request) {
            return new src_app_agentifai_commands_transfers_get_client_status__WEBPACK_IMPORTED_MODULE_23__["GetClientStatus"](request, this.responseFactory);
          }
        }, {
          key: "createGetTransfersGeneralData",
          value: function createGetTransfersGeneralData(request) {
            return new src_app_agentifai_commands_transfers_get_transfers_general_data__WEBPACK_IMPORTED_MODULE_25__["GetTransfersGeneralData"](request, this.responseFactory, this.accountsTranformer);
          }
        }, {
          key: "createGetFrequentInternalTransfer",
          value: function createGetFrequentInternalTransfer(request) {
            return new src_app_agentifai_commands_transfers_internal_get_frequent_internal_transfer__WEBPACK_IMPORTED_MODULE_26__["GetFrequentInternalTransfer"](request, this.responseFactory);
          }
        }, {
          key: "createGetFrequentSEPATransfer",
          value: function createGetFrequentSEPATransfer(request) {
            return new src_app_agentifai_commands_transfers_sepa_get_frequent_sepa_transfer__WEBPACK_IMPORTED_MODULE_27__["GetFrequentSEPATransfer"](request, this.responseFactory);
          }
        }, {
          key: "createGetImmediateTransferPhoneNumbers",
          value: function createGetImmediateTransferPhoneNumbers(request) {
            return new src_app_agentifai_commands_transfers_immediate_get_immediate_transfer_phone_numbers__WEBPACK_IMPORTED_MODULE_41__["GetImmediateTransferPhoneNumbersCommand"](request, this.responseFactory);
          }
        }, {
          key: "createGetImmediateTransferAccounts",
          value: function createGetImmediateTransferAccounts(request) {
            return new src_app_agentifai_commands_transfers_immediate_get_immediate_transfer_accounts__WEBPACK_IMPORTED_MODULE_42__["GetImmediateTransferAccountsCommand"](request, this.responseFactory, this.accountsTranformer);
          } //Terms and Conditions

        }, {
          key: "createGetTermsAndConditionsConsent",
          value: function createGetTermsAndConditionsConsent(request) {
            return new src_app_agentifai_commands_terms_and_conditions_get_terms_and_conditions_consent__WEBPACK_IMPORTED_MODULE_30__["GetTermsAndConditionsConsentCommand"](request, this.responseFactory);
          }
        }, {
          key: "createConsentTermsAndConditions",
          value: function createConsentTermsAndConditions(request) {
            return new src_app_agentifai_commands_terms_and_conditions_consent_terms_and_conditions__WEBPACK_IMPORTED_MODULE_31__["ConsentTermsAndConditionsCommand"](request, this.responseFactory);
          } //Unlock Contract

        }, {
          key: "createGetCredentialUnlockQuestions",
          value: function createGetCredentialUnlockQuestions(request) {
            return new src_app_agentifai_commands_unlock_credentials_get_credential_unlock_questions__WEBPACK_IMPORTED_MODULE_28__["GetCredentialsUnlockQuestions"](request, this.responseFactory);
          }
        }, {
          key: "createUnlockQuestions",
          value: function createUnlockQuestions(request) {
            return new src_app_agentifai_commands_unlock_credentials_unlock_credentials__WEBPACK_IMPORTED_MODULE_29__["UnlockCredentials"](request, this.responseFactory);
          } //Unlock Contract Number

        }, {
          key: "createGetContractNumberUnlockQuestions",
          value: function createGetContractNumberUnlockQuestions(request) {
            return new src_app_agentifai_commands_unlock_contract_number_get_contract_number_unlock_questions__WEBPACK_IMPORTED_MODULE_70__["GetContractNumberUnlockQuestions"](request, this.responseFactory);
          }
        }, {
          key: "createUnlockContractNumber",
          value: function createUnlockContractNumber(request) {
            return new src_app_agentifai_commands_unlock_contract_number_unlock_contract_number__WEBPACK_IMPORTED_MODULE_69__["UnlockContractNumber"](request, this.responseFactory);
          } // MBWAY

        }, {
          key: "createGetMBWayCards",
          value: function createGetMBWayCards(request) {
            return new src_app_agentifai_commands_mbway_get_mbway_cards__WEBPACK_IMPORTED_MODULE_37__["GetMBWayCardsCommand"](request, this.responseFactory);
          }
        }, {
          key: "createSimulateMBWayAdhesion",
          value: function createSimulateMBWayAdhesion(request) {
            return new src_app_agentifai_commands_mbway_simulate_mbway_adhesion__WEBPACK_IMPORTED_MODULE_38__["SimulateMBWayAdhesionCommand"](request, this.responseFactory, this.requestFactory);
          }
        }, {
          key: "createExecuteMBWayAdhesion",
          value: function createExecuteMBWayAdhesion(request) {
            return new src_app_agentifai_commands_mbway_execute_mbway_adhesion__WEBPACK_IMPORTED_MODULE_39__["ExecuteMBWayAdhesionCommand"](request, this.responseFactory, this.requestFactory);
          }
        }, {
          key: "createUpdateTransferConsentForCgdAccounts",
          value: function createUpdateTransferConsentForCgdAccounts(request) {
            return new src_app_agentifai_commands_mbway_update_transfer_consent_for_cgd_account__WEBPACK_IMPORTED_MODULE_40__["UpdateTransferConsentForCgdAccountCommand"](request, this.responseFactory, this.requestFactory);
          } // Cards

        }, {
          key: "createGetPaymentCards",
          value: function createGetPaymentCards(request) {
            return new src_app_agentifai_commands_cards_get_payment_cards__WEBPACK_IMPORTED_MODULE_43__["GetPaymentCards"](request, this.responseFactory, this.cardsTransformer);
          }
        }, {
          key: "createGetCardsGeneralData",
          value: function createGetCardsGeneralData(request) {
            return new src_app_agentifai_commands_cards_get_cards_general_data__WEBPACK_IMPORTED_MODULE_44__["GetCardsGeneralData"](request, this.responseFactory, this.cardsTransformer);
          }
        }, {
          key: "createGetCardAccountTransactions",
          value: function createGetCardAccountTransactions(request) {
            return new src_app_agentifai_commands_cards_get_card_account_transactions__WEBPACK_IMPORTED_MODULE_45__["GetCardAccountTransactions"](request, this.responseFactory, this.cardsTransformer);
          }
        }, {
          key: "createSimulateCardPayment",
          value: function createSimulateCardPayment(request) {
            return new src_app_agentifai_commands_cards_payment_simulate_card_payment__WEBPACK_IMPORTED_MODULE_48__["SimulateCardPaymentCommand"](request, this.requestFactory, this.responseFactory);
          }
        }, {
          key: "createExecuteCardPayment",
          value: function createExecuteCardPayment(request) {
            return new src_app_agentifai_commands_cards_payment_execute_card_payment__WEBPACK_IMPORTED_MODULE_47__["ExecuteCardPaymentCommand"](request, this.requestFactory, this.responseFactory);
          }
        }, {
          key: "createActivateCard",
          value: function createActivateCard(request) {
            return new src_app_agentifai_commands_cards_activation_activate_card__WEBPACK_IMPORTED_MODULE_50__["ActivateCardCommand"](request, this.responseFactory);
          }
        }, {
          key: "createGetSmsTokenPhoneNumber",
          value: function createGetSmsTokenPhoneNumber(request) {
            return new src_app_agentifai_commands_cards_get_sms_token_phone_number__WEBPACK_IMPORTED_MODULE_49__["GetSmsTokenPhoneNumber"](request, this.responseFactory);
          } // Callback

        }, {
          key: "createGetCustomerManager",
          value: function createGetCustomerManager(request) {
            return new src_app_agentifai_commands_callback_get_customer_manager__WEBPACK_IMPORTED_MODULE_51__["GetCustomerManager"](request, this.responseFactory);
          }
        }, {
          key: "createGetManagerCallbackConfig",
          value: function createGetManagerCallbackConfig(request) {
            return new src_app_agentifai_commands_callback_get_manager_callback_config__WEBPACK_IMPORTED_MODULE_52__["GetManagerCallbackConfig"](request, this.responseFactory);
          }
        }, {
          key: "createGetManagerAvailableTime",
          value: function createGetManagerAvailableTime(request) {
            return new src_app_agentifai_commands_callback_get_manager_available_time__WEBPACK_IMPORTED_MODULE_53__["GetManagerAvailableTime"](request, this.responseFactory);
          }
        }, {
          key: "createSetCallback",
          value: function createSetCallback(request) {
            return new src_app_agentifai_commands_callback_set_callback__WEBPACK_IMPORTED_MODULE_54__["SetCallback"](request, this.responseFactory);
          } // Loans

        }, {
          key: "createSimulatePersonalLoan",
          value: function createSimulatePersonalLoan(request) {
            return new src_app_agentifai_commands_loans_simulate_personal_loan__WEBPACK_IMPORTED_MODULE_55__["SimulatePersonalLoan"](request, this.requestFactory, this.responseFactory);
          }
        }, {
          key: "createGetPersonalLoanGeneralData",
          value: function createGetPersonalLoanGeneralData(request) {
            return new src_app_agentifai_commands_loans_get_personal_loan_general_data__WEBPACK_IMPORTED_MODULE_56__["GetPersonalLoanGeneralData"](request, this.responseFactory, this.accountsTranformer);
          }
        }, {
          key: "createSimulatePersonalLoanAdhesion",
          value: function createSimulatePersonalLoanAdhesion(request) {
            return new src_app_agentifai_commands_loans_simulate_personal_loan_adhesion__WEBPACK_IMPORTED_MODULE_57__["SimulatePersonalLoanAdhesion"](request, this.requestFactory, this.responseFactory);
          }
        }, {
          key: "createExecutePersonalLoanAdhesion",
          value: function createExecutePersonalLoanAdhesion(request) {
            return new src_app_agentifai_commands_loans_execute_personal_loan_adhesion__WEBPACK_IMPORTED_MODULE_58__["ExecutePersonalLoanAdhesion"](request, this.requestFactory, this.responseFactory);
          }
        }, {
          key: "createGetPrivateContent",
          value: function createGetPrivateContent(request) {
            return new src_app_agentifai_commands_content_get_private_content__WEBPACK_IMPORTED_MODULE_59__["GetPrivateContent"](request, this.responseFactory);
          } // Moratorium Form

        }, {
          key: "createDisableBannerPage",
          value: function createDisableBannerPage(request) {
            return new src_app_agentifai_commands_content_disable_banner_page__WEBPACK_IMPORTED_MODULE_60__["DisableBannerPage"](request, this.responseFactory);
          } // Card acquisition

        }, {
          key: "createGetShowcaseCards",
          value: function createGetShowcaseCards(request) {
            return new src_app_agentifai_commands_cards_acquisition_get_showcase_cards__WEBPACK_IMPORTED_MODULE_61__["GetShowcaseCards"](request, this.responseFactory);
          }
        }, {
          key: "createGetShowcaseCharacteristics",
          value: function createGetShowcaseCharacteristics(request) {
            return new src_app_agentifai_commands_cards_acquisition_get_showcase_characteristics__WEBPACK_IMPORTED_MODULE_68__["GetShowcaseCharacteristics"](request, this.responseFactory);
          }
        }, {
          key: "createGetShowcaseProductDocument",
          value: function createGetShowcaseProductDocument(request) {
            return new src_app_agentifai_commands_cards_acquisition_get_showcase_product_document__WEBPACK_IMPORTED_MODULE_62__["GetShowcaseProductDocument"](request, this.responseFactory);
          }
        }, {
          key: "createGetCardAdhesionAccounts",
          value: function createGetCardAdhesionAccounts(request) {
            return new src_app_agentifai_commands_cards_acquisition_get_card_adhesion_accounts__WEBPACK_IMPORTED_MODULE_63__["GetCardAdhesionAccounts"](request, this.responseFactory, this.accountsTranformer);
          }
        }, {
          key: "createGetCardAdhesionConfigurations",
          value: function createGetCardAdhesionConfigurations(request) {
            return new src_app_agentifai_commands_cards_acquisition_get_card_adhesion_configurations__WEBPACK_IMPORTED_MODULE_64__["GetCardAdhesionConfigurations"](request, this.responseFactory);
          }
        }, {
          key: "createSimulateCardAdhesion",
          value: function createSimulateCardAdhesion(request) {
            return new src_app_agentifai_commands_cards_acquisition_simulate_card_adhesion__WEBPACK_IMPORTED_MODULE_65__["SimulateCardAdhesion"](request, this.responseFactory, this.requestFactory);
          }
        }, {
          key: "createInitNewCreditCard",
          value: function createInitNewCreditCard(request) {
            return new src_app_agentifai_commands_cards_acquisition_init_new_credit_card__WEBPACK_IMPORTED_MODULE_66__["InitNewCreditCard"](request, this.responseFactory, this.requestFactory);
          }
        }, {
          key: "createExecuteCardAdhesion",
          value: function createExecuteCardAdhesion(request) {
            return new src_app_agentifai_commands_cards_acquisition_execute_card_adhesion__WEBPACK_IMPORTED_MODULE_67__["ExecuteCardAdhesion"](request, this.responseFactory, this.requestFactory);
          } //Update Client Information

        }, {
          key: "createGetUpdateClientInformationAddress",
          value: function createGetUpdateClientInformationAddress(request) {
            return new src_app_agentifai_commands_customers_update_client_information_get_update_client_information_address__WEBPACK_IMPORTED_MODULE_71__["GetUpdateClientInformationAddress"](request, this.responseFactory);
          }
        }, {
          key: "createGetUpdateClientInformationPersonal",
          value: function createGetUpdateClientInformationPersonal(request) {
            return new src_app_agentifai_commands_customers_update_client_information_get_update_client_information_personal__WEBPACK_IMPORTED_MODULE_77__["GetUpdateClientInformationPersonal"](request, this.responseFactory);
          }
        }, {
          key: "createGetUpdateClientInformationProfessional",
          value: function createGetUpdateClientInformationProfessional(request) {
            return new src_app_agentifai_commands_customers_update_client_information_get_update_client_information_professional__WEBPACK_IMPORTED_MODULE_76__["GetUpdateClientInformationProfessional"](request, this.responseFactory);
          }
        }, {
          key: "createGetUpdateClientInformationValidity",
          value: function createGetUpdateClientInformationValidity(request) {
            return new src_app_agentifai_commands_customers_update_client_information_get_update_client_information_validity__WEBPACK_IMPORTED_MODULE_75__["GetUpdateClientInformationValidity"](request, this.responseFactory);
          }
        }, {
          key: "createGetUpdateClientInformationList",
          value: function createGetUpdateClientInformationList(request) {
            return new src_app_agentifai_commands_customers_update_client_information_get_update_client_information_list__WEBPACK_IMPORTED_MODULE_72__["GetUpdateClientInformationList"](request, this.responseFactory);
          }
        }, {
          key: "createSimulateUpdateClientInformation",
          value: function createSimulateUpdateClientInformation(request) {
            return new src_app_agentifai_commands_customers_update_client_information_simulate_update_client_information__WEBPACK_IMPORTED_MODULE_73__["SimulateUpdateClientInformation"](request, this.requestFactory, this.responseFactory);
          }
        }, {
          key: "createExecuteUpdateClientInformation",
          value: function createExecuteUpdateClientInformation(request) {
            return new src_app_agentifai_commands_customers_update_client_information_execute_update_client_information__WEBPACK_IMPORTED_MODULE_74__["ExecuteUpdateClientInformation"](request, this.requestFactory, this.responseFactory);
          }
        }, {
          key: "createGetCredentialsManagement",
          value: function createGetCredentialsManagement(request) {
            return new src_app_agentifai_commands_credentialsmanagement_get_credentials_management__WEBPACK_IMPORTED_MODULE_78__["GetCredentialsManagement"](request, this.responseFactory);
          }
        }, {
          key: "createGetMatrixConfig",
          value: function createGetMatrixConfig(request) {
            return new src_app_agentifai_commands_credentialsmanagement_matrixrequisition_get_matrix_config__WEBPACK_IMPORTED_MODULE_79__["GetMatrixConfig"](request, this.responseFactory);
          }
        }, {
          key: "createSimulateMatrixRequistion",
          value: function createSimulateMatrixRequistion(request) {
            return new src_app_agentifai_commands_credentialsmanagement_matrixrequisition_simulate_matrix_requisition__WEBPACK_IMPORTED_MODULE_80__["SimulateMatrixRequisition"](request, this.responseFactory, this.requestFactory);
          }
        }, {
          key: "createExecuteMatrixRequisition",
          value: function createExecuteMatrixRequisition(request) {
            return new src_app_agentifai_commands_credentialsmanagement_matrixrequisition_execute_matrix_requisition__WEBPACK_IMPORTED_MODULE_81__["ExecuteMatrixRequisition"](request, this.responseFactory, this.requestFactory);
          }
        }, {
          key: "createSimulateActivateMatrix",
          value: function createSimulateActivateMatrix(request) {
            return new src_app_agentifai_commands_credentialsmanagement_matrixactivation_simulate_activate_matrix__WEBPACK_IMPORTED_MODULE_82__["SimulateActivateMatrix"](request, this.responseFactory, this.requestFactory);
          }
        }, {
          key: "createExecuteActivateMatrix",
          value: function createExecuteActivateMatrix(request) {
            return new src_app_agentifai_commands_credentialsmanagement_matrixactivation_execute_activate_matrix__WEBPACK_IMPORTED_MODULE_83__["ExecuteActivateMatrix"](request, this.responseFactory, this.requestFactory);
          }
        }]);

        return AgentifaiCommandFactoryService;
      }();

      AgentifaiCommandFactoryService.ctorParameters = function () {
        return [{
          type: src_app_services_agentifai_agentifai_response_factory_service__WEBPACK_IMPORTED_MODULE_5__["AgentifaiResponseFactoryService"]
        }, {
          type: src_app_services_agentifai_agentifai_request_factory_service__WEBPACK_IMPORTED_MODULE_16__["AgentifaiRequestFactoryService"]
        }, {
          type: src_app_services_agentifai_agentifai_accounts_transformer_service__WEBPACK_IMPORTED_MODULE_32__["AgentifaiAccountsTransformerService"]
        }, {
          type: src_app_services_agentifai_agentifai_cards_transformer_service__WEBPACK_IMPORTED_MODULE_46__["AgentifaiCardsTransformerService"]
        }];
      };

      AgentifaiCommandFactoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AgentifaiCommandFactoryService);
      /***/
    },

    /***/
    "HXFE": function HXFE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimulateMatrixRequisition", function () {
        return SimulateMatrixRequisition;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var _credentials_management_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../credentials-management-utils */
      "G8L4");

      var SimulateMatrixRequisition = /*#__PURE__*/function () {
        function SimulateMatrixRequisition(request, responseFactory, requestFactory) {
          _classCallCheck(this, SimulateMatrixRequisition);

          this.request = request;
          this.responseFactory = responseFactory;
          this.requestFactory = requestFactory;
          this.nonAnonymizableRegexPathsSuccess = ['headers.+', 'status', "body.(operationId|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(SimulateMatrixRequisition, [{
          key: "execute",
          value: function execute(service) {
            var _this30 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            return service.simulateMatrixRequisition(headers, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
              return _this30.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
              return _this30.createErrorResponse(error);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            return _credentials_management_utils__WEBPACK_IMPORTED_MODULE_3__["CredentialsManagementUtils"].createMatrixRequisitionSimExe(parameters, this.requestFactory);
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return SimulateMatrixRequisition;
      }();
      /***/

    },

    /***/
    "HyTs": function HyTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetMBWayCardsCommand", function () {
        return GetMBWayCardsCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var src_app_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/commands/cards/cards-utils */
      "lw/H");

      var GetMBWayCardsCommand = /*#__PURE__*/function () {
        function GetMBWayCardsCommand(request, responseFactory) {
          _classCallCheck(this, GetMBWayCardsCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", "body.[^.]+.(".concat(src_app_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__["CardsUtils"].nonAnonymizedCardProperties, ")")];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetMBWayCardsCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this31 = this;

            var headers = this.request.getHeaders();
            var fullAccountKey = this.request.getParameters()["fullAccountKey"];
            return service.getCardsForMbwayAssociation(headers, fullAccountKey).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this31.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this31.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetMBWayCardsCommand;
      }();
      /***/

    },

    /***/
    "IqUE": function IqUE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetPrivateContent", function () {
        return GetPrivateContent;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetPrivateContent = /*#__PURE__*/function () {
        function GetPrivateContent(request, responseFactory) {
          _classCallCheck(this, GetPrivateContent);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetPrivateContent, [{
          key: "execute",
          value: function execute(service) {
            var _this32 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var featureId = parameters.featureId;
            return service.getPrivateContent(headers, featureId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this32.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this32.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetPrivateContent;
      }();
      /***/

    },

    /***/
    "Jrio": function Jrio(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetOperationProofCommand", function () {
        return GetOperationProofCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetOperationProofCommand = /*#__PURE__*/function () {
        function GetOperationProofCommand(request, responseFactory) {
          _classCallCheck(this, GetOperationProofCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetOperationProofCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this33 = this;

            var headers = this.request.getHeaders();
            var operationId = Number(this.request.getParameters()["operationId"]);
            return service.getOperationProof(headers, operationId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this33.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this33.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetOperationProofCommand;
      }();
      /***/

    },

    /***/
    "JxHx": function JxHx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentifaiServicesProvider", function () {
        return AgentifaiServicesProvider;
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

      var AgentifaiServicesProvider = /*#__PURE__*/function () {
        function AgentifaiServicesProvider(api) {
          _classCallCheck(this, AgentifaiServicesProvider);

          this.api = api;
          this.ACCOUNTS_FOR_BALANCES_AND_TRANSACTIONS = "business/accounts?targetOperationType=BALANCES_AND_TRANSACTIONS";
          this.ACCOUNTS_FOR_BALANCES_AND_TRANSACTIONS_DEPOSITSONLY = "business/accounts?targetOperationType=DEPOSIT_ACCOUNT_BALANCES";
          this.ACCOUNT_BALANCES_AND_TRANSACTIONS = "business/accounts/#ACCOUNT#?includeBalancesInResponse=true&includeTransactionsInResponse=true&fromBookDate=#FROM_DATE#&toBookDate=#TO_DATE#";
          this.ACCOUNT_TRANSACTIONS = "business/accounts/#ACCOUNT#/transactions?fromBookDate=#FROM_DATE#&toBookDate=#TO_DATE#";
          this.ACCOUNT_BALANCES = "business/accounts/#ACCOUNT#/balances";
          this.EXECUTE_SERVICE_PAYMENT = "business/payments/service/executions";
          this.SIMULATE_SERVICE_PAYMENT = "business/payments/service/simulations";
          this.PAYMENTS_PAGE_DATA_SERVICE = "business/payments/generaldataforpayments?paymentOperationsFilter=SERVICES_PAYMENT,TAXES_PAYMENT,TELECOMMUNICATIONS_PAYMENT,SOCIAL_SECURITY_PAYMENT";
          this.PAYMENT_CALENDAR_SERVICE = "business/payments/calendarrestrictions";
          this.GET_ENTITY = "business/payments/entities";
          this.GET_FREQUENT_SERVICE_PAYMENT_DETAIL = "business/payments/service/frequent";
          this.TELECOM_CONFIGURATIONS = "business/payments/telecommunications/configurations";
          this.SIMULATE_TELECOM_PAYMENT = "business/payments/telecommunications/simulations";
          this.EXECUTE_TELECOM_PAYMENT = "business/payments/telecommunications/executions";
          this.GET_FREQUENT_TELECOM_PAYMENT_DETAIL = "business/payments/telecommunications/frequent";
          this.BUSINESS_OPERATIONS = "business/operations";
          this.PROOFS_EMAILS = "proofs/emails";
          this.INTERNAL_TRANSFER_SIMULATION_SERVICE = "business/transfers/internal/simulations";
          this.INTERNAL_TRANSFER_EXECUTION_SERVICE = "business/transfers/internal/executions";
          this.INTERNAL_TRANSFER_CERTIFICATE_SERVICE = "business/transfers/internal/certificate";
          this.INTERNAL_TRANSFER_SIMULATE_CERTIFICATE_SERVICE = "business/transfers/internal/certificate/simulations";
          this.INTERNAL_TRANSFER_FREQUENT_SERVICE = "business/transfers/internal/frequent";
          this.TRANSFER_PAGE_DATA_SERVICE = "business/transfers/generaldatafortransfers";
          this.TRANSFER_TYPE_SERVICE = "business/transfers/types/validate?targetAccount=";
          this.INTERNAL_TRANSFER_CALENDAR_SERVICE = "business/transfers/calendarrestrictions?transferTypeFilter=INTERNAL_TRANSFER";
          this.SEPA_TRANSFER_CALENDAR_SERVICE = "business/transfers/calendarrestrictions?transferTypeFilter=SEPA_TRANSFER";
          this.ALL_TRANSFERS_CALENDAR_SERVICE = "business/transfers/calendarrestrictions?transferTypeFilter=INTERNAL_TRANSFER,SEPA_TRANSFER,INTERNATIONAL_TRANSFER";
          this.SEPA_TRANSFER_SIMULATION_SERVICE = "business/transfers/sepa/simulations";
          this.SEPA_TRANSFER_EXECUTION_SERVICE = "business/transfers/sepa/executions";
          this.SEPA_TRANSFER_CERTIFICATE_SERVICE = "business/transfers/sepa/certificate";
          this.SEPA_TRANSFER_SIMULATE_CERTIFICATE_SERVICE = "business/transfers/sepa/certificate/simulations";
          this.SEPA_TRANSFER_FREQUENT_SERVICE = "business/transfers/sepa/frequent";
          this.SEPA_TRANSFER_VALIDATE_BENEFICIARY = "business/transfers/sepa/validations/beneficiary?beneficiaryName=";
          this.SEPA_TRANSFER_GET_FREQUENT_OPERATION = "business/transfers/sepa/frequent";
          this.IMMEDIATE_TRANSFER_SIMULATION_SERVICE = "business/transfers/immediate/simulations";
          this.IMMEDIATE_TRANSFER_EXECUTION_SERVICE = "business/transfers/immediate/executions";
          this.ACCOUNTS_FOR_IMMEDIATE_TRANSFER_REGISTRATION = "business/accounts?targetOperationType=IMMEDIATE_TRANSFER_REGISTRATION";
          this.PHONE_NUMBERS_FOR_IMMEDIATE_TRANSFER_REGISTRATION = "business/transfers/immediate/registration/contacts";
          this.MBWAY_PARTNER_CLIENT_STATUS = "business/cards/mbwaypartner/clientStatus";
          this.MBWAY_PARTNER_CARDS_LIST = "business/cards/mbwaypartner/cards";
          this.WITHDRAWAL_SIMULATE_ADHESION_MBWAY = "business/cards/mbwaypartner/adhesion/simulationsv2";
          this.WITHDRAWAL_EXECUTE_ADHESION_MBWAY = "business/cards/mbwaypartner/adhesion/executionsv2";
          this.MBWAY_ACCEPT_TRANSFERS_CGD = "business/cards/mbwaypartner/acceptTransferCGD";
          this.CUSTOMER_CONTACTS = "business/customers/current/contacts";
          this.CREDENTIAL_UNLOCK_QUESTIONS = "business/customers/contracts/credencialUnlockQuestions";
          this.CREDENTIAL_UNLOCK_ANSWERS = "business/customers/contracts/credencialUnlockAnswers";
          this.GET_CONTRACT_NUMBER_QUESTIONS = "business/customers/contracts/contractUnlockQuestions";
          this.GET_CONTRACT_NUMBER_ANSWERS = "business/customers/contracts/contractUnlockAnswers";
          this.VOICE_TREATMENT_CONSENT = "business/consent/voiceTreatment";
          this.LOGOUT_SERVICE = "system/security/authentications/current";
          this.GENERAL_CARD_DATA = "business/cards/customercarddata";
          this.CARD_ACCOUNT_TRANSACTIONS = "business/cards/accounts/#CARDACCOUNT#/transactions";
          this.CARD_PAYMENT_DATA = "business/cards?targetCardOperationType=CARD_PAYMENT";
          this.SIMULATE_CARD_PAYMENT = "business/cards/payments/simulations";
          this.EXECUTE_CARD_PAYMENT = "business/cards/payments/executions";
          this.CARD_ACTIVATION = "business/cards/activation/#CARDNUMBER#/#CARDVALIDITYDATE#/activateCard";
          this.GET_SMS_TOKEN = "business/cards/phoneNumber";
          this.CUSTOMER_MANAGER = "business/customers/manager";
          this.MANAGER_CALLBACK_CONFIG = "business/customers/manager/callback/configuration";
          this.MANAGER_CALLBACK_AVAILABLETIME = "business/customers/manager/callback/availabletime";
          this.CUSTOMER_CALLBACK = "business/customers/manager/callback";
          this.LOANS_CONSUMER_CALCULATOR = "business/loans/consumer/calculatorV2";
          this.CONSULT_LOAN_ADHESION_GENERAL_DATA = "business/loans/consumer/adhesionGeneralDataV2";
          this.LOAN_ADHESION_SIMULATION = "business/loans/consumer/adhesionSimulationV2";
          this.LOAN_ADHESION_EXECUTION = "business/loans/consumer/adhesionExecutionV2"; //contents

          this.CONTENT_PRIVATE_CONTENT = "business/content/privateContent/features/#FEATUREID#";
          this.CONTENT_PRIVATE_CONTENT_LANDING_BANNER_DISABLE = "business/content/privateContent/landingPage/banner/disable";
          this.SHOWCASE_CARDS = "business/showcase/cards";
          this.SHOWCASE_CHARACTERISTICS = "business/showcase/characteristics?characteristicsId=#CHARACTERISTICSID#";
          this.SHOWCASE_PRODUCT_DOCUMENT = "business/showcase/productdocument?productCode=#PRODUCTCODE#&docType=#DOCTYPE#";
          this.CARD_ADHESION_ACCOUNTS = "business/accounts?targetOperationType=NEW_CARD_REQUEST";
          this.CARD_ADHESION_CONFIGURATIONS = "business/cards/requests/configurations?fullAccountKey=#ACCOUNT#&productCode=#PRODUCTCODE#";
          this.CARD_ADHESION_SIMULATE = "business/cards/requests/simulations";
          this.CARD_ADHESION_INIT = "business/cards/requests/initNewCreditCard";
          this.CARD_ADHESION_EXECUTE = "business/cards/requests/executions"; // Update client personal data

          this.UPDATE_CLIENT_INFO_VALIDITY = "business/customers/updateClientInformation/validity";
          this.UPDATE_CLIENT_INFO_ADDRESS = "business/customers/updateClientInformation/address";
          this.UPDATE_CLIENT_INFO_PERSONAL = "business/customers/updateClientInformation/personal";
          this.UPDATE_CLIENT_INFO_PROFESSIONAL = "business/customers/updateClientInformation/professional";
          this.UPDATE_CLIENT_MARTIAL_STATUS = "business/customers/updateClientInformation/list/#ID#";
          this.UPDATE_CLIENT_SIMULATION = "business/customers/updateClientInformation/simulation";
          this.UPDATE_CLIENT_EXECUTION = "business/customers/updateClientInformation/execution"; //CREDENTIALS_MANAGEMENT

          this.GET_CREDENTIALS = "business/credentialsmanagement/credentials/#CREDENTIALTYPE#"; // MATRIX CARD

          this.MATRIX_CONFIG = "business/credentialsmanagement/matrixrequisition/config";
          this.MATRIX_REQUISITION_SIMULATION = "business/credentialsmanagement/matrixrequisition/simulations";
          this.MATRIX_REQUISITION_EXECUTION = "business/credentialsmanagement/matrixrequisition/executions";
          this.MATRIX_ACTIVE_SIMULATION = "business/credentialsmanagement/matrixactivation/simulations";
          this.MATRIX_ACTIVE_EXECUTION = "business/credentialsmanagement/matrixactivation/executions"; // parametros de servicos

          this.ACCOUNT_PARAM = "#ACCOUNT#";
          this.FROM_DATE_PARAM = "#FROM_DATE#";
          this.TO_DATE_PARAM = "#TO_DATE#";
          this.CARD_ACCOUNT_PARAM = "#CARDACCOUNT#";
          this.CARD_NUMBER = "#CARDNUMBER#";
          this.CARD_VALIDITY_DATE = "#CARDVALIDITYDATE#";
          this.CHARACTERISTICSID_PARAM = "#CHARACTERISTICSID#";
          this.PRODUCTCODE_PARAM = "#PRODUCTCODE#";
          this.DOCTYPE_PARAM = "#DOCTYPE#";
          this.FEATUREID = "#FEATUREID#";
          this.ID = "#ID#";
          this.CREDENTIAL_PARAM = "#CREDENTIALTYPE#";
        }

        _createClass(AgentifaiServicesProvider, [{
          key: "logout",
          value: function logout() {
            var obs = this.api.deleteLogoutAgentifai(this.LOGOUT_SERVICE, null);
            this.api.genericClearCookies();
            return obs;
          }
          /* obter a listagem de contas para os saldos e movimentos de conta */

        }, {
          key: "getBalancesAndTransactionsAccountList",
          value: function getBalancesAndTransactionsAccountList(headers) {
            var onlyDeposit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (onlyDeposit == true) {
              return this.api.genericGetAuthenticatedMethodAgentifai(this.ACCOUNTS_FOR_BALANCES_AND_TRANSACTIONS_DEPOSITSONLY, headers);
            } else {
              return this.api.genericGetAuthenticatedMethodAgentifai(this.ACCOUNTS_FOR_BALANCES_AND_TRANSACTIONS, headers);
            }
          }
          /* obtem os detalhes de saldo e movimentos da conta no formato label/value standard da app */

        }, {
          key: "getDebitAccountBalancesAndMovements",
          value: function getDebitAccountBalancesAndMovements(headers, sourceAccount, minimumDate, maximumDate) {
            var url = this.ACCOUNT_BALANCES_AND_TRANSACTIONS.replace(this.ACCOUNT_PARAM, sourceAccount).replace(this.FROM_DATE_PARAM, minimumDate).replace(this.TO_DATE_PARAM, maximumDate);
            return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
          }
          /* lista de movimentos de uma conta DO */

        }, {
          key: "getTransactions",
          value: function getTransactions(headers, request) {
            var url = this.ACCOUNT_TRANSACTIONS.replace(this.ACCOUNT_PARAM, request.sourceAccount).replace(this.FROM_DATE_PARAM, request.minimumDate).replace(this.TO_DATE_PARAM, request.maximumDate);

            if (request.nextPageKeys && request.nextPageKeys != "") {
              url += "&pageKey=" + request.nextPageKeys;
            }

            return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
          }
          /* obtem os detalhes de saldo da conta */

        }, {
          key: "getAccountBalance",
          value: function getAccountBalance(headers, fullAccountKey) {
            var url = this.ACCOUNT_BALANCES.replace(this.ACCOUNT_PARAM, fullAccountKey);
            return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
          } //SERVICES PAYMENT

          /* dados para a pagina de pagamentos */

        }, {
          key: "getPaymentsPageData",
          value: function getPaymentsPageData(headers, includeFrequentOperationImages) {
            var url = this.PAYMENTS_PAGE_DATA_SERVICE;

            if (includeFrequentOperationImages) {
              url += "&includeFrequentOperationsImages=true";
            }

            return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
          }
          /* obter calendario de pagamentos */

        }, {
          key: "getCalendarToPayment",
          value: function getCalendarToPayment(headers) {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.PAYMENT_CALENDAR_SERVICE, headers);
          }
          /* obter nome da entidade */

        }, {
          key: "getPaymentsEntity",
          value: function getPaymentsEntity(headers, entityNumber) {
            var url = this.GET_ENTITY + "/" + entityNumber;
            return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
          }
          /* simular pagamento de servicos */

        }, {
          key: "simulateServicePayment",
          value: function simulateServicePayment(headers, request) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.SIMULATE_SERVICE_PAYMENT, headers);
          }
          /* executar pagamento de servicos */

        }, {
          key: "executeServicePayment",
          value: function executeServicePayment(headers, request, credential) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.EXECUTE_SERVICE_PAYMENT, headers, credential);
          }
          /* dados para a pagina de pagamento de telecomunicacoes */

        }, {
          key: "getTelecomConfigurations",
          value: function getTelecomConfigurations(headers) {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.TELECOM_CONFIGURATIONS, headers);
          }
          /* simular pagamento de telecomunicacoes */

        }, {
          key: "simulateTelecomPayment",
          value: function simulateTelecomPayment(headers, request) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.SIMULATE_TELECOM_PAYMENT, headers);
          }
          /* executar pagamento de telecomunicacoes */

        }, {
          key: "executeTelecomPayment",
          value: function executeTelecomPayment(headers, request, credential) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.EXECUTE_TELECOM_PAYMENT, headers, credential);
          } //OPERATIONS PROOF

          /* send email to user with document of operation */

        }, {
          key: "sendOperationProofByEmail",
          value: function sendOperationProofByEmail(headers, operationId, request) {
            var url = this.BUSINESS_OPERATIONS + "/".concat(operationId, "/") + this.PROOFS_EMAILS;
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, url, headers);
          }
        }, {
          key: "getOperationProof",
          value: function getOperationProof(headers, operationId) {
            var url = this.BUSINESS_OPERATIONS + "/".concat(operationId, "/") + "proof";
            return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
          } //Frequent Operations

        }, {
          key: "getFrequentPaymentDetail",
          value: function getFrequentPaymentDetail(headers, operationId) {
            var url = this.GET_FREQUENT_SERVICE_PAYMENT_DETAIL + "?idFrequentOperation=" + operationId;
            return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
          }
        }, {
          key: "getFrequentTelecomPaymentDetail",
          value: function getFrequentTelecomPaymentDetail(headers, operationId) {
            var url = this.GET_FREQUENT_TELECOM_PAYMENT_DETAIL + "?idFrequentOperation=" + operationId;
            return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
          } //Contacts

        }, {
          key: "getCustomerContacts",
          value: function getCustomerContacts(headers) {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.CUSTOMER_CONTACTS, headers);
          }
          /********************************/

          /******** Transferências ********/

          /********************************/

          /* dados para a pagina de transferencias */

        }, {
          key: "getTransferPageData",
          value: function getTransferPageData(headers, includeFrequentOperationImages, account) {
            var url = this.TRANSFER_PAGE_DATA_SERVICE + "?transferOperationsFilter=INTERNAL_TRANSFER";
            url += ", SEPA_TRANSFER";

            if (account && account != "") {
              url += "&fullAccountKey=" + account;
            }

            if (includeFrequentOperationImages) {
              url += "&includeFrequentOperationsImages=true";
            }

            return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
          }
          /* tipo de transferencia */

        }, {
          key: "getTransferType",
          value: function getTransferType(headers, account) {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.TRANSFER_TYPE_SERVICE + account, headers);
          }
        }, {
          key: "getCalendarToAllTranfers",
          value: function getCalendarToAllTranfers(headers) {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.ALL_TRANSFERS_CALENDAR_SERVICE, headers);
          }
          /***** Transferências internas *****/

          /* simular transferencia interna */

        }, {
          key: "simulateInternalTransfer",
          value: function simulateInternalTransfer(headers, request) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.INTERNAL_TRANSFER_SIMULATION_SERVICE, headers);
          }
          /* executar transferencia interna */

        }, {
          key: "executeInternalTransfer",
          value: function executeInternalTransfer(headers, request, credential) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.INTERNAL_TRANSFER_EXECUTION_SERVICE, headers, credential);
          }
          /* obter dados de uma transferencia frequente interna */

        }, {
          key: "getFrequentINTERNALoperation",
          value: function getFrequentINTERNALoperation(headers, operationId) {
            var url = this.INTERNAL_TRANSFER_FREQUENT_SERVICE + "?idFrequentOperation=" + operationId;
            return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
          }
          /***** Transferências SEPA *****/

          /* validacao do nome do beneficiario nas transferencias SEPA */

        }, {
          key: "validateSepaBeneficiaryName",
          value: function validateSepaBeneficiaryName(headers, beneficiaryName) {
            var url = this.SEPA_TRANSFER_VALIDATE_BENEFICIARY + beneficiaryName;
            return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
          }
          /* simular transferencia SEPA */

        }, {
          key: "simulateSepaTransfer",
          value: function simulateSepaTransfer(headers, request) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.SEPA_TRANSFER_SIMULATION_SERVICE, headers);
          }
          /* executar transferencia SEPA */

        }, {
          key: "executeSepaTransfer",
          value: function executeSepaTransfer(headers, request, credential) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.SEPA_TRANSFER_EXECUTION_SERVICE, headers, credential);
          }
          /* obter dados de uma transferencia frequente SEPA */

        }, {
          key: "getFrequentSEPAoperation",
          value: function getFrequentSEPAoperation(headers, operationId) {
            var url = this.SEPA_TRANSFER_GET_FREQUENT_OPERATION + "?idFrequentOperation=" + operationId;
            return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
          }
          /***** Transferências imediatas *****/

          /* simular transferencia imediata - para contacto */

        }, {
          key: "simulateImmediateTransfer",
          value: function simulateImmediateTransfer(headers, request) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.IMMEDIATE_TRANSFER_SIMULATION_SERVICE, headers);
          }
          /* executar transferencia imediata - para contacto */

        }, {
          key: "executeImmediateTransfer",
          value: function executeImmediateTransfer(headers, request, credential) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.IMMEDIATE_TRANSFER_EXECUTION_SERVICE, headers, credential);
          }
          /* obter a lista de contas elegíveis para uma transferencia imediata */

        }, {
          key: "getAccountsForImmediateTransfers",
          value: function getAccountsForImmediateTransfers(headers) {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.ACCOUNTS_FOR_IMMEDIATE_TRANSFER_REGISTRATION, headers);
          }
          /* obter a lista de numeros disponíveis para uma transferencia imediata */

        }, {
          key: "getPhoneNumbersForImmediateTransfers",
          value: function getPhoneNumbersForImmediateTransfers(headers) {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.PHONE_NUMBERS_FOR_IMMEDIATE_TRANSFER_REGISTRATION, headers);
          }
        }, {
          key: "getMbwayPartnerClientStatus",
          value: function getMbwayPartnerClientStatus(headers) {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.MBWAY_PARTNER_CLIENT_STATUS, headers);
          }
          /* Obtém lista de cartões possíveis para associar para uma dada conta */

        }, {
          key: "getCardsForMbwayAssociation",
          value: function getCardsForMbwayAssociation(headers, fullAccountKey) {
            var url = this.MBWAY_PARTNER_CARDS_LIST;
            url += '?onlyCardsWithoutMBWAY=true&fullAccountKey=' + fullAccountKey;
            return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
          }
        }, {
          key: "simulateAdhesionMbway",
          value: function simulateAdhesionMbway(headers, request) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.WITHDRAWAL_SIMULATE_ADHESION_MBWAY, headers);
          }
        }, {
          key: "executeAdhesionMbway",
          value: function executeAdhesionMbway(headers, request, credential) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.WITHDRAWAL_EXECUTE_ADHESION_MBWAY, headers, credential);
          }
          /* Após concluída a adesão deve ser perguntado ao cliente se pretende receber sempre as transferências MBWay na conta da Caixa
              este serviço serve para registar a resposta do cliente */

        }, {
          key: "acceptTransferCGD",
          value: function acceptTransferCGD(headers, request) {
            return this.api.genericPutAuthenticatedMethodWithInputAgentifai(request, this.MBWAY_ACCEPT_TRANSFERS_CGD, headers);
          }
          /***** Termos e condições *****/

        }, {
          key: "getVoiceTreatmentConsent",
          value: function getVoiceTreatmentConsent(headers) {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.VOICE_TREATMENT_CONSENT, headers);
          }
        }, {
          key: "addVoiceTreatmentConsent",
          value: function addVoiceTreatmentConsent(headers, request) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.VOICE_TREATMENT_CONSENT, headers);
          }
        }, {
          key: "deleteVoiceTreatmentConsent",
          value: function deleteVoiceTreatmentConsent(headers) {
            return this.api.genericDeleteAuthenticatedMethodAgentifai(this.VOICE_TREATMENT_CONSENT, headers);
          }
          /***** Desbloqueio de Contrato *****/

          /* obter questões para desbloquear contrato */

        }, {
          key: "getCredentialUnlockQuestions",
          value: function getCredentialUnlockQuestions(headers, request) {
            var url = this.CREDENTIAL_UNLOCK_QUESTIONS + "?contractNumber=" + request.contractNumber + "&phoneNumber=" + request.phoneNumber;
            return this.api.genericGetMethodAgentifai(url, headers);
          }
          /* enviar respostas para desbloqueio do contrato */

        }, {
          key: "credentialUnlockAnswers",
          value: function credentialUnlockAnswers(headers, request) {
            return this.api.genericPostMethodWithInputAgentifai(request, this.CREDENTIAL_UNLOCK_ANSWERS, headers);
          }
          /***** Obter numero de Contrato *****/

          /* obter questões para obter numero de contrato */

        }, {
          key: "getContractNumberQuestions",
          value: function getContractNumberQuestions(headers, request) {
            var url = this.GET_CONTRACT_NUMBER_QUESTIONS + "?nif=" + request.nif + "&phoneNumber=" + request.phoneNumber;
            return this.api.genericGetMethodAgentifai(url, headers);
          }
          /* enviar respostas para obter numero de contrato */

        }, {
          key: "getContractNumberAnswers",
          value: function getContractNumberAnswers(headers, request) {
            return this.api.genericPostMethodWithInputAgentifai(request, this.GET_CONTRACT_NUMBER_ANSWERS, headers);
          }
          /***** Cartões *****/

        }, {
          key: "getCardsGeneralData",
          value: function getCardsGeneralData(headers, cardAccountId, targetCardOperationType, omitTransactionsInResponse) {
            if (!targetCardOperationType) {
              targetCardOperationType = 'BALANCES_AND_TRANSACTIONS';
            }

            var url = this.GENERAL_CARD_DATA + "?targetCardOperationType=" + targetCardOperationType;

            if (cardAccountId) {
              url += "&cardAccountId=" + cardAccountId + "&omitAccountsInResponse=true";
            }

            if (omitTransactionsInResponse) {
              url += "&omitTransactionsInResponse=true";
            }

            return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
          }
        }, {
          key: "getCardStatementTransactions",
          value: function getCardStatementTransactions(headers, cardAccountId, statementDate) {
            var url = this.CARD_ACCOUNT_TRANSACTIONS.replace(this.CARD_ACCOUNT_PARAM, cardAccountId);

            if (statementDate) {
              url = url + "?statementDate=" + statementDate;
            }

            return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
          }
        }, {
          key: "getCardsPaymentData",
          value: function getCardsPaymentData(headers) {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.CARD_PAYMENT_DATA, headers);
          }
        }, {
          key: "simulateCardPayment",
          value: function simulateCardPayment(headers, request) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.SIMULATE_CARD_PAYMENT, headers);
          }
        }, {
          key: "executeCardPayment",
          value: function executeCardPayment(headers, request, credential) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.EXECUTE_CARD_PAYMENT, headers, credential);
          }
        }, {
          key: "activateCard",
          value: function activateCard(headers, cardNumber, cardValidityDate) {
            return this.api.genericPostAuthenticatedMethodAgentifai(this.CARD_ACTIVATION.replace(this.CARD_NUMBER, cardNumber).replace(this.CARD_VALIDITY_DATE, cardValidityDate), headers);
          }
        }, {
          key: "getContactSmsToken",
          value: function getContactSmsToken(headers) {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.GET_SMS_TOKEN, headers);
          }
          /***** Callback *****/

        }, {
          key: "getCustomerManager",
          value: function getCustomerManager(headers) {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.CUSTOMER_MANAGER, headers);
          }
        }, {
          key: "getManagerCallbackConfig",
          value: function getManagerCallbackConfig(headers) {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.MANAGER_CALLBACK_CONFIG, headers);
          }
        }, {
          key: "getManagerAvailableTime",
          value: function getManagerAvailableTime(headers, destinationType, date) {
            var url = this.MANAGER_CALLBACK_AVAILABLETIME;
            url += '?destinationType=' + destinationType.toString();
            url += '&date=' + date;
            return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
          }
        }, {
          key: "setCallback",
          value: function setCallback(headers, request) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.CUSTOMER_CALLBACK, headers);
          }
          /***** LOANS *****/

        }, {
          key: "getConsumerLoanCalculatorResult",
          value: function getConsumerLoanCalculatorResult(headers, request) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.LOANS_CONSUMER_CALCULATOR, headers);
          }
        }, {
          key: "getConsumerLoanAdhesionGeneralData",
          value: function getConsumerLoanAdhesionGeneralData(headers) {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.CONSULT_LOAN_ADHESION_GENERAL_DATA, headers);
          }
        }, {
          key: "simulateLoanRequest",
          value: function simulateLoanRequest(headers, request) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.LOAN_ADHESION_SIMULATION, headers);
          }
        }, {
          key: "executeLoanRequest",
          value: function executeLoanRequest(headers, request, credential) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.LOAN_ADHESION_EXECUTION, headers, credential);
          }
        }, {
          key: "getPrivateContent",
          value: function getPrivateContent(headers, featureId) {
            var url = this.CONTENT_PRIVATE_CONTENT.replace(this.FEATUREID, featureId);
            return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
          }
        }, {
          key: "disableLandingPageBanner",
          value: function disableLandingPageBanner(headers, pageName) {
            var url = this.CONTENT_PRIVATE_CONTENT_LANDING_BANNER_DISABLE + "?pageName=" + pageName;
            return this.api.genericPutAuthenticatedMethodAgentifai(url, headers);
          }
          /***** CARD ACQUISITION *****/

        }, {
          key: "getShowcaseCards",
          value: function getShowcaseCards(headers) {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.SHOWCASE_CARDS, headers);
          }
        }, {
          key: "getShowcaseCharacteristics",
          value: function getShowcaseCharacteristics(headers, characteristicsId) {
            var url = this.SHOWCASE_CHARACTERISTICS.replace(this.CHARACTERISTICSID_PARAM, characteristicsId);
            return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
          }
        }, {
          key: "getShowcaseProductDocument",
          value: function getShowcaseProductDocument(headers, productCode, docType) {
            var url = this.SHOWCASE_PRODUCT_DOCUMENT.replace(this.PRODUCTCODE_PARAM, productCode).replace(this.DOCTYPE_PARAM, docType);
            return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
          }
        }, {
          key: "getCardAdhesionAccounts",
          value: function getCardAdhesionAccounts(headers) {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.CARD_ADHESION_ACCOUNTS, headers);
          }
        }, {
          key: "getCardAdhesionConfigurations",
          value: function getCardAdhesionConfigurations(headers, fullAccountKey, productCode) {
            var url = this.CARD_ADHESION_CONFIGURATIONS.replace(this.ACCOUNT_PARAM, fullAccountKey).replace(this.PRODUCTCODE_PARAM, productCode);
            return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
          }
        }, {
          key: "simulateCardAdhesion",
          value: function simulateCardAdhesion(headers, request) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.CARD_ADHESION_SIMULATE, headers);
          }
        }, {
          key: "initNewCreditCard",
          value: function initNewCreditCard(headers, request) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.CARD_ADHESION_INIT, headers);
          }
        }, {
          key: "executeCardAdhesion",
          value: function executeCardAdhesion(headers, request, credential) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.CARD_ADHESION_EXECUTE, headers, credential);
          }
          /***** UPDATE CLIENT INFO *****/

        }, {
          key: "getUpdateClientInfoValidity",
          value: function getUpdateClientInfoValidity(headers) {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.UPDATE_CLIENT_INFO_VALIDITY, headers);
          }
        }, {
          key: "getUpdateClientInfoAddress",
          value: function getUpdateClientInfoAddress(headers) {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.UPDATE_CLIENT_INFO_ADDRESS, headers);
          }
        }, {
          key: "getUpdateClientInfoIdentification",
          value: function getUpdateClientInfoIdentification(headers) {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.UPDATE_CLIENT_INFO_PERSONAL, headers);
          }
        }, {
          key: "getUpdateClientInfoOccupation",
          value: function getUpdateClientInfoOccupation(headers) {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.UPDATE_CLIENT_INFO_PROFESSIONAL, headers);
          }
          /**
             *
             * @param id 0/1/2
             * @returns Estado Civil/Paises/Profissoes
             */

        }, {
          key: "getUpdateClientListField",
          value: function getUpdateClientListField(headers, id) {
            var url = this.UPDATE_CLIENT_MARTIAL_STATUS.replace(this.ID, id);
            return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
          }
        }, {
          key: "simulateUpdateClientInfo",
          value: function simulateUpdateClientInfo(headers, request) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.UPDATE_CLIENT_SIMULATION, headers);
          }
        }, {
          key: "executeUpdateClientInfo",
          value: function executeUpdateClientInfo(headers, request, credential) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.UPDATE_CLIENT_EXECUTION, headers, credential);
          }
          /***** CREDENTIALS_MANAGEMENT *****/

        }, {
          key: "getCredentials",
          value: function getCredentials(headers, credentialType) {
            var url = this.GET_CREDENTIALS.replace(this.CREDENTIAL_PARAM, credentialType);
            return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
          }
          /***** MATRIX *****/

        }, {
          key: "matrixConfig",
          value: function matrixConfig(headers) {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.MATRIX_CONFIG, headers);
          }
        }, {
          key: "simulateMatrixRequisition",
          value: function simulateMatrixRequisition(headers, request) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.MATRIX_REQUISITION_SIMULATION, headers);
          }
        }, {
          key: "executeMatrixRequisition",
          value: function executeMatrixRequisition(headers, request, credential) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.MATRIX_REQUISITION_EXECUTION, headers, credential);
          }
        }, {
          key: "simulateActivateMatrix",
          value: function simulateActivateMatrix(headers, request) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.MATRIX_ACTIVE_SIMULATION, headers);
          }
        }, {
          key: "executeActivateMatrix",
          value: function executeActivateMatrix(headers, request, credential) {
            return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.MATRIX_ACTIVE_EXECUTION, headers, credential);
          }
        }]);

        return AgentifaiServicesProvider;
      }();

      AgentifaiServicesProvider.ctorParameters = function () {
        return [{
          type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["Api"]
        }];
      };

      AgentifaiServicesProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AgentifaiServicesProvider);
      /***/
    },

    /***/
    "K+8N": function K8N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExecuteMatrixRequisition", function () {
        return ExecuteMatrixRequisition;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var _credentials_management_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../credentials-management-utils */
      "G8L4");

      var ExecuteMatrixRequisition = /*#__PURE__*/function () {
        function ExecuteMatrixRequisition(request, responseFactory, requestFactory) {
          _classCallCheck(this, ExecuteMatrixRequisition);

          this.request = request;
          this.responseFactory = responseFactory;
          this.requestFactory = requestFactory;
          this.nonAnonymizableRegexPathsSuccess = ['headers.+', 'status', "body.(operationId|operationStatus|customerMessage|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(ExecuteMatrixRequisition, [{
          key: "execute",
          value: function execute(service) {
            var _this34 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            var credential = this.createCredentials(parameters);
            return service.executeMatrixRequisition(headers, request, credential).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
              return _this34.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
              return _this34.createErrorResponse(error);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            return _credentials_management_utils__WEBPACK_IMPORTED_MODULE_3__["CredentialsManagementUtils"].createMatrixRequisitionSimExe(parameters, this.requestFactory);
          }
        }, {
          key: "createCredentials",
          value: function createCredentials(parameters) {
            return this.requestFactory.createCredentials(parameters);
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return ExecuteMatrixRequisition;
      }();
      /***/

    },

    /***/
    "K9C8": function K9C8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetUpdateClientInformationProfessional", function () {
        return GetUpdateClientInformationProfessional;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetUpdateClientInformationProfessional = /*#__PURE__*/function () {
        function GetUpdateClientInformationProfessional(request, responseFactory) {
          _classCallCheck(this, GetUpdateClientInformationProfessional);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ['headers.+', 'status', String.raw(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["^body.(expirado|trabalharPorContaDoutrem|empregadoCgd|tipoDependencia)$"], ["^body\\.(expirado|trabalharPorContaDoutrem|empregadoCgd|tipoDependencia)$"])))];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetUpdateClientInformationProfessional, [{
          key: "execute",
          value: function execute(service) {
            var _this35 = this;

            var headers = this.request.getHeaders();
            return service.getUpdateClientInfoOccupation(headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this35.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this35.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetUpdateClientInformationProfessional;
      }();
      /***/

    },

    /***/
    "LCUH": function LCUH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentifaiResponseFactoryService", function () {
        return AgentifaiResponseFactoryService;
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


      var src_app_agentifai_models_agentifai_response_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/models/agentifai-response-event */
      "9Ygl");
      /* harmony import */


      var src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/agentifai-utils */
      "EZ/N");
      /* harmony import */


      var src_app_agentifai_models_agentifai_widget_response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/agentifai/models/agentifai-widget-response */
      "zJBa");

      var AgentifaiResponseFactoryService = /*#__PURE__*/function () {
        function AgentifaiResponseFactoryService() {
          _classCallCheck(this, AgentifaiResponseFactoryService);
        }

        _createClass(AgentifaiResponseFactoryService, [{
          key: "createResponseFromRestApi",
          value: function createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths) {
            var event = success ? this.createResponseEventFromRestApi(response) : this.createErrorResponseEventFromRestApi(response);
            return new src_app_agentifai_models_agentifai_widget_response__WEBPACK_IMPORTED_MODULE_4__["WidgetResponse"](event, nonAnonymizableRegexesPaths);
          } //Create ResponseEvent Factory

        }, {
          key: "createResponseEventFromRestApi",
          value: function createResponseEventFromRestApi(response) {
            return this.createResponseEvent(response.headers, response.status, src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__["AgentifaiUtils"].mapFromString(response.data));
          }
        }, {
          key: "createErrorResponseEventFromRestApi",
          value: function createErrorResponseEventFromRestApi(response) {
            return this.createResponseEvent(response.headers, response.status, src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__["AgentifaiUtils"].mapFromString(response.error));
          }
        }, {
          key: "createResponseEvent",
          value: function createResponseEvent(headers, status, body) {
            return new src_app_agentifai_models_agentifai_response_event__WEBPACK_IMPORTED_MODULE_2__["ResponseEvent"](headers, status, body);
          }
        }]);

        return AgentifaiResponseFactoryService;
      }();

      AgentifaiResponseFactoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AgentifaiResponseFactoryService);
      /***/
    },

    /***/
    "LT4J": function LT4J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperationProofByEmailRequest", function () {
        return OperationProofByEmailRequest;
      });

      var OperationProofByEmailRequest = function OperationProofByEmailRequest() {
        _classCallCheck(this, OperationProofByEmailRequest);
      };
      /***/

    },

    /***/
    "Lx10": function Lx10(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetAccountsCommand", function () {
        return GetAccountsCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/agentifai-utils */
      "EZ/N");
      /* harmony import */


      var src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/commands/accounts/accounts-utils */
      "il6X");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetAccountsCommand = /*#__PURE__*/function () {
        function GetAccountsCommand(request, responseFactory, transformer) {
          _classCallCheck(this, GetAccountsCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.transformer = transformer;
          this.nonAnonymizableRegexesPathsuccess = ["headers.+", "status", "body\.(" + "defaultAccount.(".concat(src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_3__["AccountsUtils"].nonAnonymizedAccountsProperties, ")") + "|accounts.[^.]+.(".concat(src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_3__["AccountsUtils"].nonAnonymizedAccountsProperties, ")") + ")(?:$|\W)"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetAccountsCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this36 = this;

            var headers = this.request.getHeaders();
            return service.getBalancesAndTransactionsAccountList(headers, false).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this36.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this36.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            var transformedResponse = this.transformResponse(response);
            return this.createResponse(transformedResponse, true, this.nonAnonymizableRegexesPathsuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }, {
          key: "transformResponse",
          value: function transformResponse(response) {
            var data = src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_2__["AgentifaiUtils"].mapFromString(response.data);

            if (data.defaultAccount != null && data.accounts != null) {
              data.accounts = this.transformer.transformAccounts(data.accounts);
              data.defaultAccount = this.transformer.transformAccount(data.defaultAccount);
              response.data = data;
            }

            return response;
          }
        }]);

        return GetAccountsCommand;
      }();
      /***/

    },

    /***/
    "MBy1": function MBy1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimulateInternalTransferCommand", function () {
        return SimulateInternalTransferCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_models_operation_request_transfers_TransferInternalRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/operation/request/transfers/TransferInternalRequest */
      "Gowj");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var SimulateInternalTransferCommand = /*#__PURE__*/function () {
        function SimulateInternalTransferCommand(request, responseFactory, requestFactory) {
          _classCallCheck(this, SimulateInternalTransferCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.requestFactory = requestFactory;
          this.nonAnonymizableRegexesPathsSuccess = ["headers.+", "status", "body.(operationId|operationStatus|charges[.].*|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].scheduling(), ")")];
          this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(SimulateInternalTransferCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this37 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            return service.simulateInternalTransfer(headers, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this37.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (resp) {
              return _this37.createErrorResponse(resp);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_transfers_TransferInternalRequest__WEBPACK_IMPORTED_MODULE_1__["TransferInternalRequest"]();
            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.sourceAccount = parameters.sourceAccount;
            request.destinationAccount = parameters.destinationAccount;
            request.amount = parameters.amount;
            request.currency = parameters.currency;
            request.descriptionForSourceAccount = parameters.descriptionForSourceAccount;
            request.descriptionForDestinationAccount = parameters.descriptionForDestinationAccount;
            request.scheduling = this.requestFactory.createScheduling(parameters);
            return request;
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
          }
        }]);

        return SimulateInternalTransferCommand;
      }();
      /***/

    },

    /***/
    "MCMW": function MCMW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentifaiAccountsTransformerService", function () {
        return AgentifaiAccountsTransformerService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AgentifaiAccountsTransformerService = /*#__PURE__*/function () {
        function AgentifaiAccountsTransformerService() {
          _classCallCheck(this, AgentifaiAccountsTransformerService);
        }

        _createClass(AgentifaiAccountsTransformerService, [{
          key: "transformAccount",
          value: function transformAccount(account) {
            return this.transform(account);
          }
        }, {
          key: "transformAccounts",
          value: function transformAccounts(accounts) {
            var _this38 = this;

            var accounts = accounts;
            accounts.forEach(function (account) {
              account = _this38.transform(account);
            });
            return accounts;
          }
        }, {
          key: "transform",
          value: function transform(account) {
            return this.addNewAccountProperties(account);
          }
        }, {
          key: "addNewAccountProperties",
          value: function addNewAccountProperties(account) {
            account.accountName = account.description != null ? account.description.split(" - ").reverse()[0] : null;
            return account;
          }
        }]);

        return AgentifaiAccountsTransformerService;
      }();

      AgentifaiAccountsTransformerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AgentifaiAccountsTransformerService);
      /***/
    },

    /***/
    "MjQc": function MjQc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetCredentialsManagement", function () {
        return GetCredentialsManagement;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../utils/anonymization-utils */
      "Xntl");

      var GetCredentialsManagement = /*#__PURE__*/function () {
        function GetCredentialsManagement(request, responseFactory) {
          _classCallCheck(this, GetCredentialsManagement);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ['headers.+', 'status', String.raw(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["body.credentials.[^.]+.status"], ["body\\.credentials\\.[^.]+\\.status"])))];
          this.nonAnonymizablePathRegexError = _utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetCredentialsManagement, [{
          key: "execute",
          value: function execute(service) {
            var _this39 = this;

            var headers = this.request.getHeaders();
            var credentialType = this.request.getParameters().credentialType;
            return service.getCredentials(headers, credentialType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this39.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this39.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetCredentialsManagement;
      }();
      /***/

    },

    /***/
    "Noh+": function Noh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentifaiPluginControllerService", function () {
        return AgentifaiPluginControllerService;
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


      var src_app_services_agentifai_agentifai_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/agentifai/agentifai-manager.service */
      "/gT+");
      /* harmony import */


      var src_app_services_environment_service_environment_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/environment-service/environment-service.service */
      "oUY6");

      var AgentifaiPluginControllerService = /*#__PURE__*/function () {
        function AgentifaiPluginControllerService(agentifaiManager, env) {
          _classCallCheck(this, AgentifaiPluginControllerService);

          this.agentifaiManager = agentifaiManager;
          this.env = env;
        }

        _createClass(AgentifaiPluginControllerService, [{
          key: "initialize",
          value: function initialize() {
            if (agentifai) {
              var config = this.env.getAgentifaiConfiguration();
              this.initializeWithConfig(config.apiUrl, config.apiKey, config.settings);
            }
          }
        }, {
          key: "initializeWithConfig",
          value: function initializeWithConfig(apiUrl, apiKey, settings) {
            if (agentifai) {
              this.addCallback();
              agentifai.initialize(apiUrl, apiKey, settings);
            }
          }
        }, {
          key: "stop",
          value: function stop() {
            if (agentifai) {
              agentifai.stop();
            }
          }
        }, {
          key: "setConfigurations",
          value: function setConfigurations(configurations) {
            if (agentifai) {
              agentifai.setConfigurations(configurations);
            }
          }
        }, {
          key: "showWidget",
          value: function showWidget() {
            if (agentifai) {
              agentifai.setWidgetVisibility(true);
            }
          }
        }, {
          key: "hideWidget",
          value: function hideWidget() {
            if (agentifai) {
              agentifai.setWidgetVisibility(false);
            }
          }
        }, {
          key: "showApp",
          value: function showApp() {
            var intent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (agentifai) {
              agentifai.openApplication(intent);
            }
          }
        }, {
          key: "hideApp",
          value: function hideApp() {
            if (agentifai) {
              agentifai.closeApplication();
            }
          }
        }, {
          key: "registerUser",
          value: function registerUser(id, name, token, authHeaders) {
            if (agentifai) {
              var user = {
                "id": id,
                "name": name,
                "token": token
              };
              agentifai.registerUser(user, authHeaders);
            }
          }
        }, {
          key: "unregisterUser",
          value: function unregisterUser() {
            if (agentifai) {
              agentifai.unregisterUser();
            }
          }
        }, {
          key: "addCallback",
          value: function addCallback() {
            var _this40 = this;

            if (agentifai) {
              agentifai.addClientCallback(function (data) {
                _this40.processAgentifaiEvent(data);
              }, function () {});
            }
          }
        }, {
          key: "setWidgetDimensions",
          value: function setWidgetDimensions(dimensions) {
            if (agentifai) {
              agentifai.setWidgetDimensions(dimensions);
            }
          }
        }, {
          key: "setTheme",
          value: function setTheme(theme) {
            if (agentifai) {
              agentifai.setTheme(theme);
            }
          }
        }, {
          key: "processAgentifaiEvent",
          value: function processAgentifaiEvent(data) {
            var eventType = data["type"];

            if (eventType == "applicationStatus") {
              this.processApplicationStatusEvent(data);
            } else if (eventType == "request") {
              this.executeAgentifaiRequest(data);
            }
          }
        }, {
          key: "processApplicationStatusEvent",
          value: function processApplicationStatusEvent(data) {
            var isOpened = data["isOpened"];

            if (isOpened) {
              this.env.openAlice();
            } else {
              this.env.closeAlice();
            }
          }
        }, {
          key: "executeAgentifaiRequest",
          value: function executeAgentifaiRequest(data) {
            var _this41 = this;

            console.log("REQUEST:" + JSON.stringify(data));
            this.agentifaiManager.executeWidgetRequest(data).subscribe(function (resp) {
              _this41.sendResponseOfRequest(resp);
            }, function (error) {
              _this41.sendResponseOfRequest(error);
            });
          }
        }, {
          key: "sendResponseOfRequest",
          value: function sendResponseOfRequest(response) {
            console.log("RESPONSE: " + JSON.stringify(response));
            agentifai.requestResult(response.requestId, response.success, response.result);
          }
        }]);

        return AgentifaiPluginControllerService;
      }();

      AgentifaiPluginControllerService.ctorParameters = function () {
        return [{
          type: src_app_services_agentifai_agentifai_manager_service__WEBPACK_IMPORTED_MODULE_2__["AgentifaiManagerProvider"]
        }, {
          type: src_app_services_environment_service_environment_service_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"]
        }];
      };

      AgentifaiPluginControllerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AgentifaiPluginControllerService);
      /***/
    },

    /***/
    "OQS7": function OQS7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimulatePersonalLoan", function () {
        return SimulatePersonalLoan;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var src_app_models_operation_request_loans_ConsumerLoanAdhesionRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/operation/request/loans/ConsumerLoanAdhesionRequest */
      "4Rlb");
      /* harmony import */


      var src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/operation/request/loans/GenericPersonalCreditWorkElement */
      "3ZgE");

      var SimulatePersonalLoan = /*#__PURE__*/function () {
        function SimulatePersonalLoan(request, requestFactory, responseFactory) {
          _classCallCheck(this, SimulatePersonalLoan);

          this.request = request;
          this.requestFactory = requestFactory;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", String.raw(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["^body.(operationId|success|errorMessage|simulationDate|amountMin|amountMax)$"], ["^body\\.(operationId|success|errorMessage|simulationDate|amountMin|amountMax)$"])))];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(SimulatePersonalLoan, [{
          key: "execute",
          value: function execute(service) {
            var _this42 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            return service.getConsumerLoanCalculatorResult(headers, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this42.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this42.createErrorResponse(error);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_loans_ConsumerLoanAdhesionRequest__WEBPACK_IMPORTED_MODULE_3__["ConsumerLoanAdhesionRequest"]();

            if (parameters.operationId != null) {
              request.operationId = parseInt(parameters.operationId);
            }

            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.scheduling = this.requestFactory.createScheduling(parameters);
            request.currency = parameters.currency;
            request.targetAmount = parseInt(parameters.targetAmount);
            request.periodMonths = parseInt(parameters.periodMonths);
            request.includeDocuments = parameters.includeDocuments;
            request.fullKeyToAccount = parameters.fullKeyToAccount;

            if (parameters.profession != null) {
              var profession = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
              profession.cod = parameters.profession.cod;
              profession.description = parameters.profession.description;
              request.profissao = profession;
            }

            if (parameters.jobSector != null) {
              var jobSector = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
              jobSector.cod = parameters.jobSector.cod;
              jobSector.description = parameters.jobSector.description;
              request.sector = jobSector;
            }

            if (parameters.jobType != null) {
              var jobType = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
              jobType.cod = parameters.jobType.cod;
              jobType.description = parameters.jobType.description;
              request.trabalho = jobType;
            }

            if (parameters.contractType != null) {
              var contractType = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
              contractType.cod = parameters.contractType.cod;
              contractType.description = parameters.contractType.description;
              request.contrato = contractType;
            }

            if (parameters.jobServiceTime != null) {
              request.antiguidade = parseInt(parameters.jobServiceTime);
            }

            request.codigoIRS = parameters.irsCode;

            if (parameters.grossIncome != null) {
              request.rendimentoBruto = parseInt(parameters.grossIncome);
            }

            if (parameters.netIncome != null) {
              request.rendimentoLiquido = parseInt(parameters.netIncome);
            }

            if (parameters.monthlyExpenses != null) {
              request.encargosMensais = parseInt(parameters.monthlyExpenses);
            }

            if (parameters.householdExpenses != null) {
              request.despesasFamiliares = parseInt(parameters.householdExpenses);
            }

            if (parameters.householdMembers != null) {
              request.nrAgregado = parseInt(parameters.householdMembers);
            }

            request.prestacao = parameters.installment;
            request.defaultSimulation = parameters.defaultSimulation;
            return request;
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return SimulatePersonalLoan;
      }();
      /***/

    },

    /***/
    "P3RZ": function P3RZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimulateCardAdhesion", function () {
        return SimulateCardAdhesion;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var src_app_models_operation_request_cards_CardRequestRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/operation/request/cards/CardRequestRequest */
      "cnaj");

      var SimulateCardAdhesion = /*#__PURE__*/function () {
        function SimulateCardAdhesion(request, responseFactory, requestFactory) {
          _classCallCheck(this, SimulateCardAdhesion);

          this.request = request;
          this.responseFactory = responseFactory;
          this.requestFactory = requestFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", String.raw(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["^body.(operationId|operationStatus|scheduling|invalidAccountIntervenLei83|safeMessageAdhesion|normalAdherenceErrorMsg)$"], ["^body\\.(operationId|operationStatus|scheduling|invalidAccountIntervenLei83|safeMessageAdhesion|normalAdherenceErrorMsg)$"])))];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(SimulateCardAdhesion, [{
          key: "execute",
          value: function execute(service) {
            var _this43 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            return service.simulateCardAdhesion(headers, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this43.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this43.createErrorResponse(error);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_cards_CardRequestRequest__WEBPACK_IMPORTED_MODULE_3__["CardRequestRequest"]();

            if (parameters.operationId != null) {
              request.operationId = parseInt(parameters.operationId);
            }

            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.scheduling = this.requestFactory.createScheduling(parameters);
            request.fullAccountKey = parameters.fullAccountKey;
            request.productCode = parameters.productCode;
            request.cardPaymentMode = parameters.cardPaymentMode;

            if (parameters.paymentPercentage != null) {
              request.paymentPercentage = parseInt(parameters.paymentPercentage);
            }

            request.paymentFixedValue = parameters.paymentFixedValue;
            request.nameToPrintOnCard = parameters.nameToPrintOnCard;

            if (parameters.statementEmissionDay != null) {
              request.statementEmissionDay = parseInt(parameters.statementEmissionDay);
            }

            request.postalAddress = parameters.postalAddress;
            request.creditLimit = parameters.creditLimit;

            if (parameters.checkForCredit != null) {
              request.checkForCredit = this.requestFactory.parseBool(parameters.checkForCredit);
            }

            if (parameters.onlineAdherence != null) {
              request.onlineAdherence = this.requestFactory.parseBool(parameters.onlineAdherence);
            }

            if (parameters.safeMessageAdhesion != null) {
              request.safeMessageAdhesion = this.requestFactory.parseBool(parameters.safeMessageAdhesion);
            }

            return request;
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return SimulateCardAdhesion;
      }();
      /***/

    },

    /***/
    "P4gV": function P4gV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GenericKeyValue", function () {
        return GenericKeyValue;
      });

      var GenericKeyValue = function GenericKeyValue(key, value) {
        _classCallCheck(this, GenericKeyValue);

        this.key = "";
        this.value = "";
        this.key = key;
        this.value = value;
      };
      /***/

    },

    /***/
    "PZoT": function PZoT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentifaiCommandType", function () {
        return AgentifaiCommandType;
      });

      var AgentifaiCommandType;

      (function (AgentifaiCommandType) {
        AgentifaiCommandType["GetAccounts"] = "GET_ACCOUNTS";
        AgentifaiCommandType["GetAccountBalances"] = "GET_ACCOUNT_BALANCES";
        AgentifaiCommandType["GetTransactions"] = "GET_TRANSACTIONS";
        AgentifaiCommandType["GetPaymentsEntity"] = "GET_PAYMENTS_ENTITY";
        AgentifaiCommandType["GetPaymentsGeneralData"] = "GET_PAYMENTS_GENERAL_DATA";
        AgentifaiCommandType["GetFrequentServicePayment"] = "GET_FREQUENT_SERVICES_PAYMENT";
        AgentifaiCommandType["SimulateServicePayment"] = "SIMULATE_SERVICE_PAYMENT";
        AgentifaiCommandType["ExecuteServicePayment"] = "EXECUTE_SERVICE_PAYMENT";
        AgentifaiCommandType["GetTelecommunicationConfigurations"] = "GET_TELECOMMUNICATIONS_CONFIGURATIONS";
        AgentifaiCommandType["SimulateTelecommunicationPayment"] = "SIMULATE_TELECOMMUNICATIONS_PAYMENT";
        AgentifaiCommandType["ExecuteTelecommunicationPayment"] = "EXECUTE_TELECOMMUNICATIONS_PAYMENT";
        AgentifaiCommandType["GetFrequentTelecommunicationPayment"] = "GET_FREQUENT_TELECOMMUNICATIONS_PAYMENT";
        AgentifaiCommandType["GetCurrentCustomerContacts"] = "GET_CURRENT_CUSTOMER_CONTACTS";
        AgentifaiCommandType["GetOperationProof"] = "GET_OPERATION_PROOF";
        AgentifaiCommandType["SendOperationProof"] = "SEND_OPERATION_PROOF";
        AgentifaiCommandType["SimulateInternalTransfer"] = "SIMULATE_INTERNAL_TRANSFER";
        AgentifaiCommandType["ExecuteInternalTransfer"] = "EXECUTE_INTERNAL_TRANSFER";
        AgentifaiCommandType["SimulateSEPATransfer"] = "SIMULATE_SEPA_TRANSFER";
        AgentifaiCommandType["ExecuteSEPATransfer"] = "EXECUTE_SEPA_TRANSFER";
        AgentifaiCommandType["SimulateImmediateTransfer"] = "SIMULATE_IMMEDIATE_TRANSFER";
        AgentifaiCommandType["ExecuteImmediateTransfer"] = "EXECUTE_IMMEDIATE_TRANSFER";
        AgentifaiCommandType["GetTransferTypeValidation"] = "GET_TRANSFER_TYPE_VALIDATION";
        AgentifaiCommandType["GetClientStatus"] = "GET_CLIENT_STATUS";
        AgentifaiCommandType["GetTransferCalendarRestrictions"] = "GET_TRANSFER_CALENDAR_RESTRICTIONS";
        AgentifaiCommandType["GetTransfersGeneralData"] = "GET_TRANSFERS_GENERAL_DATA";
        AgentifaiCommandType["GetFrequentInternalTransfer"] = "GET_FREQUENT_INTERNAL_TRANSFER";
        AgentifaiCommandType["GetFrequentSEPATransfer"] = "GET_FREQUENT_SEPA_TRANSFER";
        AgentifaiCommandType["GetCredentialUnlockQuestions"] = "GET_CREDENTIAL_UNLOCK_QUESTIONS";
        AgentifaiCommandType["UnlockCredentials"] = "UNLOCK_CREDENTIALS";
        AgentifaiCommandType["GetContractNumberUnlockQuestions"] = "GET_CONTRACT_NUMBER_UNLOCK_QUESTIONS";
        AgentifaiCommandType["UnlockContractNumber"] = "UNLOCK_CONTRACT_NUMBER";
        AgentifaiCommandType["GetTermsAndConditionsConsent"] = "GET_TERMS_AND_CONDITIONS_CONSENT";
        AgentifaiCommandType["ConsentTermsAndConditions"] = "CONSENT_TERMS_AND_CONDITIONS";
        AgentifaiCommandType["GetMBWayCards"] = "GET_MBWAY_CARDS";
        AgentifaiCommandType["GetImmediateTransferPhoneNumbers"] = "GET_IMMEDIATE_TRANSFER_PHONE_NUMBERS";
        AgentifaiCommandType["GetImmediateTransferAccounts"] = "GET_IMMEDIATE_TRANSFER_ACCOUNTS";
        AgentifaiCommandType["SimulateMBWayAdhesion"] = "SIMULATE_MBWAY_ADHESION";
        AgentifaiCommandType["ExecuteMBWayAdhesion"] = "EXECUTE_MBWAY_ADHESION";
        AgentifaiCommandType["UpdateTransferConsentForCgdAccount"] = "UPDATE_TRANSFER_ACCOUNT_CONSENT";
        AgentifaiCommandType["GetPaymentCards"] = "GET_PAYMENT_CARDS";
        AgentifaiCommandType["GetCardsGeneralData"] = "GET_CARDS_GENERAL_DATA";
        AgentifaiCommandType["GetCardAccountTransactions"] = "GET_CARD_ACCOUNT_TRANSACTIONS";
        AgentifaiCommandType["SimulateCardPayment"] = "SIMULATE_CARD_PAYMENT";
        AgentifaiCommandType["ExecuteCardPayment"] = "EXECUTE_CARD_PAYMENT";
        AgentifaiCommandType["ActivateCard"] = "ACTIVATE_CARD";
        AgentifaiCommandType["GetSmsTokenPhoneNumber"] = "GET_SMS_TOKEN_PHONE_NUMBER";
        AgentifaiCommandType["GetCustomerManager"] = "GET_CUSTOMER_MANAGER";
        AgentifaiCommandType["GetManagerCallbackConfig"] = "GET_MANAGER_CALLBACK_CONFIG";
        AgentifaiCommandType["GetManagerAvailableTime"] = "GET_MANAGER_AVAILABLE_TIME";
        AgentifaiCommandType["SetCallback"] = "SET_CALLBACK";
        AgentifaiCommandType["SimulatePersonalLoan"] = "SIMULATE_PERSONAL_LOAN";
        AgentifaiCommandType["GetPersonalLoanGeneralData"] = "GET_PERSONAL_LOAN_GENERAL_DATA";
        AgentifaiCommandType["SimulatePersonalLoanAdhesion"] = "SIMULATE_PERSONAL_LOAN_ADHESION";
        AgentifaiCommandType["ExecutePersonalLoanAdhesion"] = "EXECUTE_PERSONAL_LOAN_ADHESION";
        AgentifaiCommandType["GetPrivateContent"] = "GET_PRIVATE_CONTENT";
        AgentifaiCommandType["DisableBannerPage"] = "DISABLE_BANNER_PAGE";
        AgentifaiCommandType["GetShowcaseCards"] = "GET_CARDS_SHOWCASE";
        AgentifaiCommandType["GetShowcaseCharacteristics"] = "GET_PRODUCT_CHARACTERISTICS";
        AgentifaiCommandType["GetShowcaseProductDocument"] = "GET_PRODUCT_DOCUMENT";
        AgentifaiCommandType["GetCardAdhesionAccounts"] = "GET_CARD_ADHESION_ACCOUNTS";
        AgentifaiCommandType["GetCardAdhesionConfigurations"] = "GET_CARD_ADHESION_CONFIGURATIONS";
        AgentifaiCommandType["SimulateCardAdhesion"] = "SIMULATE_CARD_ADHESION";
        AgentifaiCommandType["InitNewCreditCard"] = "INIT_NEW_CREDIT_CARD";
        AgentifaiCommandType["ExecuteCardAdhesion"] = "EXECUTE_CARD_ADHESION";
        AgentifaiCommandType["GetUpdateClientInformationAddress"] = "GET_UPDATE_CLIENT_INFORMATION_ADDRESS";
        AgentifaiCommandType["GetUpdateClientInformationPersonal"] = "GET_UPDATE_CLIENT_INFORMATION_PERSONAL";
        AgentifaiCommandType["GetUpdateClientInformationProfessional"] = "GET_UPDATE_CLIENT_INFORMATION_PROFESSIONAL";
        AgentifaiCommandType["GetUpdateClientInformationValidity"] = "GET_UPDATE_CLIENT_INFORMATION_VALIDITY";
        AgentifaiCommandType["GetUpdateClientInformationList"] = "GET_UPDATE_CLIENT_INFORMATION_LIST";
        AgentifaiCommandType["SimulateUpdateClientInformation"] = "SIMULATE_UPDATE_CLIENT_INFORMATION";
        AgentifaiCommandType["ExecuteUpdateClientInformation"] = "EXECUTE_UPDATE_CLIENT_INFORMATION";
        AgentifaiCommandType["GetCredentialsManagement"] = "GET_CREDENTIALS_MANAGEMENT";
        AgentifaiCommandType["GetMatrixConfig"] = "GET_MATRIX_CONFIG";
        AgentifaiCommandType["SimulateMatrixRequisition"] = "SIMULATE_MATRIX_REQUISITION";
        AgentifaiCommandType["ExecuteMatrixRequisition"] = "EXECUTE_MATRIX_REQUISITION";
        AgentifaiCommandType["SimulateActivateMatrix"] = "SIMULATE_ACTIVATE_MATRIX";
        AgentifaiCommandType["ExecuteActivateMatrix"] = "EXECUTE_ACTIVATE_MATRIX";
      })(AgentifaiCommandType || (AgentifaiCommandType = {}));

      ;
      /***/
    },

    /***/
    "QzTv": function QzTv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TelecommunicationsPaymentRequest", function () {
        return TelecommunicationsPaymentRequest;
      });
      /* harmony import */


      var _GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../GenericOperationRequest */
      "AwYQ");

      var TelecommunicationsPaymentRequest = /*#__PURE__*/function (_GenericOperationRequ2) {
        _inherits(TelecommunicationsPaymentRequest, _GenericOperationRequ2);

        var _super6 = _createSuper(TelecommunicationsPaymentRequest);

        function TelecommunicationsPaymentRequest() {
          _classCallCheck(this, TelecommunicationsPaymentRequest);

          return _super6.call(this);
        }

        return TelecommunicationsPaymentRequest;
      }(_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"]);
      /***/

    },

    /***/
    "R5IS": function R5IS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetUpdateClientInformationValidity", function () {
        return GetUpdateClientInformationValidity;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetUpdateClientInformationValidity = /*#__PURE__*/function () {
        function GetUpdateClientInformationValidity(request, responseFactory) {
          _classCallCheck(this, GetUpdateClientInformationValidity);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", "body.*"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetUpdateClientInformationValidity, [{
          key: "execute",
          value: function execute(service) {
            var _this44 = this;

            var headers = this.request.getHeaders();
            return service.getUpdateClientInfoValidity(headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this44.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this44.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetUpdateClientInformationValidity;
      }();
      /***/

    },

    /***/
    "R97l": function R97l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivateCardCommand", function () {
        return ActivateCardCommand;
      });
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ActivateCardCommand = /*#__PURE__*/function () {
        function ActivateCardCommand(request, responseFactory) {
          _classCallCheck(this, ActivateCardCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexesPathsSuccess = ["headers.+", "status", String.raw(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["^body.(success|failureReason)$"], ["^body\\.(success|failureReason)$"])))];
          this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_0__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(ActivateCardCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this45 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var cardNumber = parameters["cardNumber"];
            var cardValidityDate = parameters["cardValidatyDate"];
            return service.activateCard(headers, cardNumber, cardValidityDate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
              return _this45.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (resp) {
              return _this45.createErrorResponse(resp);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
          }
        }]);

        return ActivateCardCommand;
      }();
      /***/

    },

    /***/
    "RgOd": function RgOd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetManagerCallbackConfig", function () {
        return GetManagerCallbackConfig;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetManagerCallbackConfig = /*#__PURE__*/function () {
        function GetManagerCallbackConfig(request, responseFactory) {
          _classCallCheck(this, GetManagerCallbackConfig);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", String.raw(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["^body.(callbackDestinations.d.periods.d|minDate|maxDate)$"], ["^body\\.(callbackDestinations\\.\\d\\.periods\\.\\d|minDate|maxDate)$"])))];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetManagerCallbackConfig, [{
          key: "execute",
          value: function execute(service) {
            var _this46 = this;

            var headers = this.request.getHeaders();
            return service.getManagerCallbackConfig(headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this46.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this46.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetManagerCallbackConfig;
      }();
      /***/

    },

    /***/
    "Rkud": function Rkud(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetFrequentTelecommunicationPaymentCommand", function () {
        return GetFrequentTelecommunicationPaymentCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetFrequentTelecommunicationPaymentCommand = /*#__PURE__*/function () {
        function GetFrequentTelecommunicationPaymentCommand(request, responseFactory) {
          _classCallCheck(this, GetFrequentTelecommunicationPaymentCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", "body\.(operationName|operationId|amount|paymentConfigurationCode|parentPaymentConfigurationCode)(?:$|\W)"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetFrequentTelecommunicationPaymentCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this47 = this;

            var headers = this.request.getHeaders();
            var idFrequentOperation = this.request.getParameters()["idFrequentOperation"];
            return service.getFrequentTelecomPaymentDetail(headers, String(idFrequentOperation)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this47.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this47.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetFrequentTelecommunicationPaymentCommand;
      }();
      /***/

    },

    /***/
    "RpFj": function RpFj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExecuteActivateMatrix", function () {
        return ExecuteActivateMatrix;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var _credentials_management_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../credentials-management-utils */
      "G8L4");

      var ExecuteActivateMatrix = /*#__PURE__*/function () {
        function ExecuteActivateMatrix(request, responseFactory, requestFactory) {
          _classCallCheck(this, ExecuteActivateMatrix);

          this.request = request;
          this.responseFactory = responseFactory;
          this.requestFactory = requestFactory;
          this.nonAnonymizableRegexPathsSuccess = ['headers.+', 'status', "body.(operationId|operationStatus|customerMessage|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(ExecuteActivateMatrix, [{
          key: "execute",
          value: function execute(service) {
            var _this48 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            var credential = this.createCredentials(parameters);
            return service.executeActivateMatrix(headers, request, credential).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
              return _this48.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
              return _this48.createErrorResponse(error);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            return _credentials_management_utils__WEBPACK_IMPORTED_MODULE_3__["CredentialsManagementUtils"].createMatrixActivateSimExe(parameters, this.requestFactory);
          }
        }, {
          key: "createCredentials",
          value: function createCredentials(parameters) {
            return this.requestFactory.createCredentials(parameters);
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return ExecuteActivateMatrix;
      }();
      /***/

    },

    /***/
    "S3cc": function S3cc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetShowcaseCharacteristics", function () {
        return GetShowcaseCharacteristics;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetShowcaseCharacteristics = /*#__PURE__*/function () {
        function GetShowcaseCharacteristics(request, responseFactory) {
          _classCallCheck(this, GetShowcaseCharacteristics);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", String.raw(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["^body.productCharacteristicsList.[0-9]+.(title|description)$"], ["^body\\.productCharacteristicsList\\.[0-9]+\\.(title|description)$"])))];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetShowcaseCharacteristics, [{
          key: "execute",
          value: function execute(service) {
            var _this49 = this;

            var headers = this.request.getHeaders();
            var characteristicsId = this.request.getParameters().characteristicsId;
            return service.getShowcaseCharacteristics(headers, characteristicsId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this49.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this49.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetShowcaseCharacteristics;
      }();
      /***/

    },

    /***/
    "Sy1n": function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
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


      var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/api/api.service */
      "oZWX");
      /* harmony import */


      var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/storage/storage.service */
      "E2f4");
      /* harmony import */


      var src_app_services_assistant_utils_assistant_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/assistant-utils/assistant-utils.service */
      "pTIB");
      /* harmony import */


      var src_app_internal_internal_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/internal/internal-utils */
      "kajc");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, api, agentifaiController, storage, assistantUtils) {
          var _this50 = this;

          _classCallCheck(this, AppComponent);

          this.api = api;
          this.agentifaiController = agentifaiController;
          this.storage = storage;
          this.assistantUtils = assistantUtils;
          platform.ready().then(function () {
            _this50.initializeAssistant();

            _this50.setConfigurations();
          });
        }

        _createClass(AppComponent, [{
          key: "setConfigurations",
          value: function setConfigurations() {
            var _this51 = this;

            var headers = this.api.getHeadersAlice();
            var headersKeysMapping = this.api.HEADERS_KEYS_MAPPING_ALICE;
            var endpoints = src_app_internal_internal_utils__WEBPACK_IMPORTED_MODULE_9__["InternalUtils"].getEndpointsWhitelist();
            var endpointUrl = src_app_internal_internal_utils__WEBPACK_IMPORTED_MODULE_9__["InternalUtils"].endpoints[0].baseUrl;
            this.storage.getbaseUrl().then(function (result) {
              if (result != null) endpointUrl = result.baseUrl;

              _this51.agentifaiController.setConfigurations({
                url: endpointUrl,
                headers: headers,
                headersKeysMapping: headersKeysMapping,
                endpoints: endpoints
              });
            }, function (error) {
              _this51.agentifaiController.setConfigurations({
                url: endpointUrl,
                headers: headers,
                headersKeysMapping: headersKeysMapping,
                endpoints: endpoints
              });
            });
          }
        }, {
          key: "initializeAssistant",
          value: function initializeAssistant() {
            var _this52 = this;

            this.assistantUtils.getConfig().then(function (config) {
              _this52.agentifaiController.initializeWithConfig(config[0], config[1], config[2]);
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_6__["Api"]
        }, {
          type: src_app_services_agentifai_agentifai_plugin_controller_service__WEBPACK_IMPORTED_MODULE_5__["AgentifaiPluginControllerService"]
        }, {
          type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
        }, {
          type: src_app_services_assistant_utils_assistant_utils_service__WEBPACK_IMPORTED_MODULE_8__["AssistantUtilsService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "TiZ7": function TiZ7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateClientInfoRequest", function () {
        return UpdateClientInfoRequest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateClientAttachment", function () {
        return UpdateClientAttachment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateClientAddress", function () {
        return UpdateClientAddress;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateClientPersonal", function () {
        return UpdateClientPersonal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateClientProfessional", function () {
        return UpdateClientProfessional;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateClientPolitical", function () {
        return UpdateClientPolitical;
      });
      /* harmony import */


      var _operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../operation/request/GenericOperationRequest */
      "AwYQ");

      var UpdateClientInfoRequest = /*#__PURE__*/function (_operation_request_Ge2) {
        _inherits(UpdateClientInfoRequest, _operation_request_Ge2);

        var _super7 = _createSuper(UpdateClientInfoRequest);

        function UpdateClientInfoRequest() {
          var _this53;

          _classCallCheck(this, UpdateClientInfoRequest);

          _this53 = _super7.call(this);
          _this53.attachments = [];
          _this53.personal = null;
          _this53.professional = null;
          _this53.address = null;
          _this53.political = null;
          return _this53;
        }

        return UpdateClientInfoRequest;
      }(_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"]);

      var UpdateClientAttachment = function UpdateClientAttachment() {
        _classCallCheck(this, UpdateClientAttachment);
      };

      var UpdateClientAddress = function UpdateClientAddress() {
        _classCallCheck(this, UpdateClientAddress);
      };

      var UpdateClientPersonal = function UpdateClientPersonal() {
        _classCallCheck(this, UpdateClientPersonal);
      };

      var UpdateClientProfessional = function UpdateClientProfessional() {
        _classCallCheck(this, UpdateClientProfessional);
      };

      var UpdateClientPolitical = function UpdateClientPolitical() {
        _classCallCheck(this, UpdateClientPolitical);
      };
      /***/

    },

    /***/
    "U4TL": function U4TL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExecuteInternalTransferCommand", function () {
        return ExecuteInternalTransferCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_models_operation_request_transfers_TransferInternalRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/operation/request/transfers/TransferInternalRequest */
      "Gowj");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var ExecuteInternalTransferCommand = /*#__PURE__*/function () {
        function ExecuteInternalTransferCommand(request, responseFactory, requestFactory) {
          _classCallCheck(this, ExecuteInternalTransferCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.requestFactory = requestFactory;
          this.nonAnonymizableRegexesPathsSuccess = ["headers.+", "status", "body.(operationId|operationStatus|charges[.].*|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].scheduling(), ")")];
          this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(ExecuteInternalTransferCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this54 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            var credential = this.createCredentials(parameters);
            return service.executeInternalTransfer(headers, request, credential).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this54.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (resp) {
              return _this54.createErrorResponse(resp);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_transfers_TransferInternalRequest__WEBPACK_IMPORTED_MODULE_1__["TransferInternalRequest"]();
            request.operationId = parameters.operationId;
            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.sourceAccount = parameters.sourceAccount;
            request.destinationAccount = parameters.destinationAccount;
            request.amount = parameters.amount;
            request.currency = parameters.currency;
            request.descriptionForSourceAccount = parameters.descriptionForSourceAccount;
            request.descriptionForDestinationAccount = parameters.descriptionForDestinationAccount;
            request.scheduling = this.requestFactory.createScheduling(parameters);
            return request;
          }
        }, {
          key: "createCredentials",
          value: function createCredentials(parameters) {
            return this.requestFactory.createCredentials(parameters);
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
          }
        }]);

        return ExecuteInternalTransferCommand;
      }();
      /***/

    },

    /***/
    "UKJ5": function UKJ5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetCardAccountTransactions", function () {
        return GetCardAccountTransactions;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/commands/cards/cards-utils */
      "lw/H");
      /* harmony import */


      var src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/agentifai-utils */
      "EZ/N");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetCardAccountTransactions = /*#__PURE__*/function () {
        function GetCardAccountTransactions(request, responseFactory, transformer) {
          _classCallCheck(this, GetCardAccountTransactions);

          this.request = request;
          this.responseFactory = responseFactory;
          this.transformer = transformer;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", "body.(" + "cards.[^.]+.(".concat(src_app_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_2__["CardsUtils"].nonAnonymizedCardProperties, ")") + "|" + "cardAccountTransactions.transactions.[^.]+.(".concat(src_app_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_2__["CardsUtils"].nonAnonymizedCardTransactionProperties, ")") + ")"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetCardAccountTransactions, [{
          key: "execute",
          value: function execute(service) {
            var _this55 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var cardAccountId = parameters["cardAccountId"];
            var statementDate = parameters["statementDate"];
            return service.getCardStatementTransactions(headers, cardAccountId, statementDate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this55.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this55.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            var transformedResponse = this.transformResponse(response);
            return this.createResponse(transformedResponse, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }, {
          key: "transformResponse",
          value: function transformResponse(response) {
            var data = src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__["AgentifaiUtils"].mapFromString(response.data);
            var cards = data.cards;

            if (cards != null) {
              cards = this.transformer.addNewCardProperties(cards);
              data.cards = cards;
            }

            response.data = data;
            return response;
          }
        }]);

        return GetCardAccountTransactions;
      }();
      /***/

    },

    /***/
    "UR4D": function UR4D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetTransactions", function () {
        return GetTransactions;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetTransactions = /*#__PURE__*/function () {
        function GetTransactions(request, responseFactory) {
          _classCallCheck(this, GetTransactions);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexesPathsuccess = ["headers.+", "status"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetTransactions, [{
          key: "execute",
          value: function execute(service) {
            var _this56 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var transactionsRequest = this.createTransactionRequest(parameters);
            return service.getTransactions(headers, transactionsRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this56.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this56.createErrorResponse(error);
            }));
          }
        }, {
          key: "createTransactionRequest",
          value: function createTransactionRequest(parameteres) {
            var transactionsRequest = {};
            transactionsRequest.sourceAccount = parameteres.fullAccountKey;
            transactionsRequest.minimumDate = parameteres.fromBookDate;
            transactionsRequest.maximumDate = parameteres.toBookDate;
            transactionsRequest.nextPageKeys = parameteres.pageKey;
            return transactionsRequest;
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexesPathsuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetTransactions;
      }();
      /***/

    },

    /***/
    "Vd28": function Vd28(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetClientStatus", function () {
        return GetClientStatus;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var src_app_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/commands/cards/cards-utils */
      "lw/H");

      var GetClientStatus = /*#__PURE__*/function () {
        function GetClientStatus(request, responseFactory) {
          _classCallCheck(this, GetClientStatus);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", "body.(cards.[^.]+.(".concat(src_app_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__["CardsUtils"].nonAnonymizedCardProperties, ")|clientMBWay)")];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetClientStatus, [{
          key: "execute",
          value: function execute(service) {
            var _this57 = this;

            var headers = this.request.getHeaders();
            return service.getMbwayPartnerClientStatus(headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this57.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this57.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetClientStatus;
      }();
      /***/

    },

    /***/
    "Vwa5": function Vwa5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnlockContractNumber", function () {
        return UnlockContractNumber;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var src_app_models_operation_request_customers_GetContractNumberAnswersRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/operation/request/customers/GetContractNumberAnswersRequest */
      "Cx/3");

      var UnlockContractNumber = /*#__PURE__*/function () {
        function UnlockContractNumber(request, responseFactory) {
          _classCallCheck(this, UnlockContractNumber);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexesPathsSuccess = ["headers.+", "status", "body\.result"];
          this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(UnlockContractNumber, [{
          key: "execute",
          value: function execute(service) {
            var _this58 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            return service.getContractNumberAnswers(headers, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this58.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (resp) {
              return _this58.createErrorResponse(resp);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_customers_GetContractNumberAnswersRequest__WEBPACK_IMPORTED_MODULE_3__["GetContractNumberAnswersRequest"]();
            request.respostasUser = parameters.answers;
            request.nif = parameters.nif;
            return request;
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
          }
        }]);

        return UnlockContractNumber;
      }();
      /***/

    },

    /***/
    "VzVu": function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "WQQq": function WQQq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimulateSEPATransferCommand", function () {
        return SimulateSEPATransferCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_models_operation_request_transfers_TransferSEPARequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/operation/request/transfers/TransferSEPARequest */
      "vHy2");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var SimulateSEPATransferCommand = /*#__PURE__*/function () {
        function SimulateSEPATransferCommand(request, responseFactory, requestFactory) {
          _classCallCheck(this, SimulateSEPATransferCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.requestFactory = requestFactory;
          this.nonAnonymizableRegexesPathsSuccess = ["headers.+", "status", "body.(operationId|operationStatus|charges[.].*|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].scheduling(), ")")];
          this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(SimulateSEPATransferCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this59 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            return service.simulateSepaTransfer(headers, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this59.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (resp) {
              return _this59.createErrorResponse(resp);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_transfers_TransferSEPARequest__WEBPACK_IMPORTED_MODULE_2__["TransferSEPARequest"]();
            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.sourceAccount = parameters.sourceAccount;
            request.destinationAccount = parameters.destinationAccount;
            request.amount = parameters.amount;
            request.currency = parameters.currency;
            request.description = parameters.description;
            request.destinationName = parameters.destinationName;
            request.urgent = parameters.urgent;
            request.scheduling = this.requestFactory.createScheduling(parameters);
            return request;
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
          }
        }]);

        return SimulateSEPATransferCommand;
      }();
      /***/

    },

    /***/
    "XSvm": function XSvm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MBWayPartnerRequest", function () {
        return MBWayPartnerRequest;
      });
      /* harmony import */


      var src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/operation/request/GenericOperationRequest */
      "AwYQ");

      var MBWayPartnerRequest = /*#__PURE__*/function (_src_app_models_opera4) {
        _inherits(MBWayPartnerRequest, _src_app_models_opera4);

        var _super8 = _createSuper(MBWayPartnerRequest);

        function MBWayPartnerRequest() {
          var _this60;

          _classCallCheck(this, MBWayPartnerRequest);

          _this60 = _super8.apply(this, arguments);
          _this60.acceptedTransferCGD = true;
          return _this60;
        }

        return MBWayPartnerRequest;
      }(src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"]);
      /***/

    },

    /***/
    "Xntl": function Xntl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Anonymization", function () {
        return Anonymization;
      });

      var Anonymization = /*#__PURE__*/function () {
        function Anonymization() {
          _classCallCheck(this, Anonymization);
        }

        _createClass(Anonymization, null, [{
          key: "scheduling",
          value: function scheduling() {
            return "scheduling\.*";
          }
        }]);

        return Anonymization;
      }();

      Anonymization.NonAnonymizablePathRegexDefault = ["headers.+", "status", "body.*"];
      /***/
    },

    /***/
    "YARR": function YARR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExecuteTelecommunicationPaymentCommand", function () {
        return ExecuteTelecommunicationPaymentCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var src_app_models_operation_request_payments_TelecommunicationsPaymentRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/operation/request/payments/TelecommunicationsPaymentRequest */
      "QzTv");

      var ExecuteTelecommunicationPaymentCommand = /*#__PURE__*/function () {
        function ExecuteTelecommunicationPaymentCommand(request, requestFactory, responseFactory) {
          _classCallCheck(this, ExecuteTelecommunicationPaymentCommand);

          this.request = request;
          this.requestFactory = requestFactory;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexesPathsSuccess = ["headers.+", "status", "body.(operationId|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")];
          this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(ExecuteTelecommunicationPaymentCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this61 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            var credential = this.createCredentials(parameters);
            return service.executeTelecomPayment(headers, request, credential).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this61.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (resp) {
              return _this61.createErrorResponse(resp);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_payments_TelecommunicationsPaymentRequest__WEBPACK_IMPORTED_MODULE_3__["TelecommunicationsPaymentRequest"]();
            request.operationId = parameters.operationId;
            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.scheduling = this.requestFactory.createScheduling(parameters);
            request.sourceAccount = parameters.sourceAccount;
            request.reference = parameters.reference;
            request.amount = parameters.amount;
            request.paymentConfigurationCode = parseInt(parameters.paymentConfigurationCode);
            request.parentPaymentConfigurationCode = parseInt(parameters.parentPaymentConfigurationCode);
            request.taxPayerNumber = parameters.taxPayerNumber;
            return request;
          }
        }, {
          key: "createCredentials",
          value: function createCredentials(parameters) {
            return this.requestFactory.createCredentials(parameters);
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
          }
        }]);

        return ExecuteTelecommunicationPaymentCommand;
      }();
      /***/

    },

    /***/
    "Ys4l": function Ys4l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetCardAdhesionConfigurations", function () {
        return GetCardAdhesionConfigurations;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetCardAdhesionConfigurations = /*#__PURE__*/function () {
        function GetCardAdhesionConfigurations(request, responseFactory) {
          _classCallCheck(this, GetCardAdhesionConfigurations);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", String.raw(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["^body.(paymentPercentages.[^.]+|statementEmissionDays.[^.]+|showCheckForCredit|onlineAdherence|creditLimitIncrementValue|minProductCreditLimit|maxProductCreditLimit)$"], ["^body\\.(paymentPercentages\\.[^.]+|statementEmissionDays\\.[^.]+|showCheckForCredit|onlineAdherence|creditLimitIncrementValue|minProductCreditLimit|maxProductCreditLimit)$"])))];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetCardAdhesionConfigurations, [{
          key: "execute",
          value: function execute(service) {
            var _this62 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var fullAccountKey = parameters.fullAccountKey;
            var productCode = parameters.productCode;
            return service.getCardAdhesionConfigurations(headers, fullAccountKey, productCode).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this62.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this62.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetCardAdhesionConfigurations;
      }();
      /***/

    },

    /***/
    "ZAI4": function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "XSEc");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "a+bK": function aBK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetTransferCalendarRestrictions", function () {
        return GetTransferCalendarRestrictions;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetTransferCalendarRestrictions = /*#__PURE__*/function () {
        function GetTransferCalendarRestrictions(request, responseFactory) {
          _classCallCheck(this, GetTransferCalendarRestrictions);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizablePathRegex = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetTransferCalendarRestrictions, [{
          key: "execute",
          value: function execute(service) {
            var _this63 = this;

            var headers = this.request.getHeaders();
            return service.getCalendarToAllTranfers(headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this63.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this63.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizablePathRegex);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegex));
          }
        }]);

        return GetTransferCalendarRestrictions;
      }();
      /***/

    },

    /***/
    "aTnY": function aTnY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetFrequentInternalTransfer", function () {
        return GetFrequentInternalTransfer;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetFrequentInternalTransfer = /*#__PURE__*/function () {
        function GetFrequentInternalTransfer(request, responseFactory) {
          _classCallCheck(this, GetFrequentInternalTransfer);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", "body\.(operationName|operationId|amount)(?:$|\W)"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetFrequentInternalTransfer, [{
          key: "execute",
          value: function execute(service) {
            var _this64 = this;

            var headers = this.request.getHeaders();
            var idFrequentOperation = Number(this.request.getParameters()["idFrequentOperation"]);
            return service.getFrequentINTERNALoperation(headers, idFrequentOperation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this64.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this64.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetFrequentInternalTransfer;
      }();
      /***/

    },

    /***/
    "apfW": function apfW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExecuteCardAdhesion", function () {
        return ExecuteCardAdhesion;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var src_app_models_operation_request_cards_CardRequestRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/operation/request/cards/CardRequestRequest */
      "cnaj");

      var ExecuteCardAdhesion = /*#__PURE__*/function () {
        function ExecuteCardAdhesion(request, responseFactory, requestFactory) {
          _classCallCheck(this, ExecuteCardAdhesion);

          this.request = request;
          this.responseFactory = responseFactory;
          this.requestFactory = requestFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", String.raw(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["^body.(operationId|operationStatus|scheduling|invalidAccountIntervenLei83|safeMessageAdhesion|normalAdherenceErrorMsg)$"], ["^body\\.(operationId|operationStatus|scheduling|invalidAccountIntervenLei83|safeMessageAdhesion|normalAdherenceErrorMsg)$"])))];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(ExecuteCardAdhesion, [{
          key: "execute",
          value: function execute(service) {
            var _this65 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            var credential = this.createCredentials(parameters);
            return service.executeCardAdhesion(headers, request, credential).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this65.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this65.createErrorResponse(error);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_cards_CardRequestRequest__WEBPACK_IMPORTED_MODULE_3__["CardRequestRequest"]();

            if (parameters.operationId != null) {
              request.operationId = parseInt(parameters.operationId);
            }

            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.scheduling = this.requestFactory.createScheduling(parameters);
            request.fullAccountKey = parameters.fullAccountKey;
            request.productCode = parameters.productCode;
            request.cardPaymentMode = parameters.cardPaymentMode;

            if (parameters.paymentPercentage != null) {
              request.paymentPercentage = parseInt(parameters.paymentPercentage);
            }

            request.paymentFixedValue = parameters.paymentFixedValue;
            request.nameToPrintOnCard = parameters.nameToPrintOnCard;

            if (parameters.statementEmissionDay != null) {
              request.statementEmissionDay = parseInt(parameters.statementEmissionDay);
            }

            request.postalAddress = parameters.postalAddress;
            request.creditLimit = parameters.creditLimit;

            if (parameters.checkForCredit != null) {
              request.checkForCredit = this.requestFactory.parseBool(parameters.checkForCredit);
            }

            if (parameters.onlineAdherence != null) {
              request.onlineAdherence = this.requestFactory.parseBool(parameters.onlineAdherence);
            }

            if (parameters.safeMessageAdhesion != null) {
              request.safeMessageAdhesion = this.requestFactory.parseBool(parameters.safeMessageAdhesion);
            }

            return request;
          }
        }, {
          key: "createCredentials",
          value: function createCredentials(parameters) {
            return this.requestFactory.createCredentials(parameters);
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return ExecuteCardAdhesion;
      }();
      /***/

    },

    /***/
    "bkYj": function bkYj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetPaymentsEntityCommand", function () {
        return GetPaymentsEntityCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetPaymentsEntityCommand = /*#__PURE__*/function () {
        function GetPaymentsEntityCommand(request, responseFactory) {
          _classCallCheck(this, GetPaymentsEntityCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetPaymentsEntityCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this66 = this;

            var headers = this.request.getHeaders();
            var entityNumber = this.request.getParameters()["entityNumber"];
            return service.getPaymentsEntity(headers, entityNumber).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this66.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this66.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetPaymentsEntityCommand;
      }();
      /***/

    },

    /***/
    "bt0b": function bt0b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetPaymentsGeneralData", function () {
        return GetPaymentsGeneralData;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/commands/accounts/accounts-utils */
      "il6X");
      /* harmony import */


      var src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/agentifai-utils */
      "EZ/N");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetPaymentsGeneralData = /*#__PURE__*/function () {
        function GetPaymentsGeneralData(request, responseFactory, accountsTransformer) {
          _classCallCheck(this, GetPaymentsGeneralData);

          this.request = request;
          this.responseFactory = responseFactory;
          this.accountsTransformer = accountsTransformer;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", "body\.(" + "frequentOperations\.[^.]+\." + "(operationName|operationType|operationId|amount)" + "|accounts\.[^.]+\." + "(".concat(src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_2__["AccountsUtils"].nonAnonymizedAccountsProperties, ")") + ")(?:$|\W)"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetPaymentsGeneralData, [{
          key: "execute",
          value: function execute(service) {
            var _this67 = this;

            var headers = this.request.getHeaders();
            return service.getPaymentsPageData(headers, false).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this67.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this67.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            var transformedResponse = this.transformResponse(response);
            return this.createResponse(transformedResponse, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }, {
          key: "transformResponse",
          value: function transformResponse(response) {
            var data = src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__["AgentifaiUtils"].mapFromString(response.data);

            if (data.accounts != null) {
              data.accounts = this.accountsTransformer.transformAccounts(data.accounts);
              response.data = data;
            }

            return response;
          }
        }]);

        return GetPaymentsGeneralData;
      }();
      /***/

    },

    /***/
    "c1BC": function c1BC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoiceTreatmentConsentRequest", function () {
        return VoiceTreatmentConsentRequest;
      });
      /* harmony import */


      var _GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../GenericOperationRequest */
      "AwYQ");

      var VoiceTreatmentConsentRequest = /*#__PURE__*/function (_GenericOperationRequ3) {
        _inherits(VoiceTreatmentConsentRequest, _GenericOperationRequ3);

        var _super9 = _createSuper(VoiceTreatmentConsentRequest);

        function VoiceTreatmentConsentRequest() {
          _classCallCheck(this, VoiceTreatmentConsentRequest);

          return _super9.call(this);
        }

        return VoiceTreatmentConsentRequest;
      }(_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"]);
      /***/

    },

    /***/
    "cIA/": function cIA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatrixRequisitionSimExe", function () {
        return MatrixRequisitionSimExe;
      });
      /* harmony import */


      var _operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../operation/request/GenericOperationRequest */
      "AwYQ");

      var MatrixRequisitionSimExe = /*#__PURE__*/function (_operation_request_Ge3) {
        _inherits(MatrixRequisitionSimExe, _operation_request_Ge3);

        var _super10 = _createSuper(MatrixRequisitionSimExe);

        function MatrixRequisitionSimExe() {
          var _this68;

          _classCallCheck(this, MatrixRequisitionSimExe);

          _this68 = _super10.call(this);
          _this68.adressSequenceNumber = null;
          _this68.motive = null;
          return _this68;
        }

        return MatrixRequisitionSimExe;
      }(_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"]);
      /***/

    },

    /***/
    "cnaj": function cnaj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardRequestRequest", function () {
        return CardRequestRequest;
      });
      /* harmony import */


      var _GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../GenericOperationRequest */
      "AwYQ");

      var CardRequestRequest = /*#__PURE__*/function (_GenericOperationRequ4) {
        _inherits(CardRequestRequest, _GenericOperationRequ4);

        var _super11 = _createSuper(CardRequestRequest);

        function CardRequestRequest() {
          _classCallCheck(this, CardRequestRequest);

          return _super11.call(this);
        }

        return CardRequestRequest;
      }(_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"]);
      /***/

    },

    /***/
    "eFPC": function eFPC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExecutePersonalLoanAdhesion", function () {
        return ExecutePersonalLoanAdhesion;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var src_app_models_operation_request_loans_ConsumerLoanAdhesionRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/operation/request/loans/ConsumerLoanAdhesionRequest */
      "4Rlb");
      /* harmony import */


      var src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/operation/request/loans/GenericPersonalCreditWorkElement */
      "3ZgE");

      var ExecutePersonalLoanAdhesion = /*#__PURE__*/function () {
        function ExecutePersonalLoanAdhesion(request, requestFactory, responseFactory) {
          _classCallCheck(this, ExecutePersonalLoanAdhesion);

          this.request = request;
          this.requestFactory = requestFactory;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", String.raw(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["^body.(operationId|operationStatus)$"], ["^body\\.(operationId|operationStatus)$"])))];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(ExecutePersonalLoanAdhesion, [{
          key: "execute",
          value: function execute(service) {
            var _this69 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            var credential = this.createCredentials(parameters);
            return service.executeLoanRequest(headers, request, credential).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this69.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this69.createErrorResponse(error);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_loans_ConsumerLoanAdhesionRequest__WEBPACK_IMPORTED_MODULE_3__["ConsumerLoanAdhesionRequest"]();

            if (parameters.operationId != null) {
              request.operationId = parseInt(parameters.operationId);
            }

            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.scheduling = this.requestFactory.createScheduling(parameters);
            request.currency = parameters.currency;
            request.targetAmount = parseInt(parameters.targetAmount);
            request.periodMonths = parseInt(parameters.periodMonths);
            request.includeDocuments = parameters.includeDocuments;
            request.fullKeyToAccount = parameters.fullKeyToAccount;

            if (parameters.profession != null) {
              var profession = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
              profession.cod = parameters.profession.cod;
              profession.description = parameters.profession.description;
              request.profissao = profession;
            }

            if (parameters.jobSector != null) {
              var jobSector = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
              jobSector.cod = parameters.jobSector.cod;
              jobSector.description = parameters.jobSector.description;
              request.sector = jobSector;
            }

            if (parameters.jobType != null) {
              var jobType = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
              jobType.cod = parameters.jobType.cod;
              jobType.description = parameters.jobType.description;
              request.trabalho = jobType;
            }

            if (parameters.contractType != null) {
              var contractType = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
              contractType.cod = parameters.contractType.cod;
              contractType.description = parameters.contractType.description;
              request.contrato = contractType;
            }

            if (parameters.jobServiceTime != null) {
              request.antiguidade = parseInt(parameters.jobServiceTime);
            }

            request.codigoIRS = parameters.irsCode;

            if (parameters.grossIncome != null) {
              request.rendimentoBruto = parseInt(parameters.grossIncome);
            }

            if (parameters.netIncome != null) {
              request.rendimentoLiquido = parseInt(parameters.netIncome);
            }

            if (parameters.monthlyExpenses != null) {
              request.encargosMensais = parseInt(parameters.monthlyExpenses);
            }

            if (parameters.householdExpenses != null) {
              request.despesasFamiliares = parseInt(parameters.householdExpenses);
            }

            if (parameters.householdMembers != null) {
              request.nrAgregado = parseInt(parameters.householdMembers);
            }

            request.prestacao = parameters.installment;
            request.receiptsVenc = parameters.salaryDocuments;
            request.irs = parameters.irsDocuments;
            request.laboralVinc = parameters.employmentDocuments;
            request.professionDoc = parameters.professionDocuments;
            request.addressDoc = parameters.addressDocuments;
            request.citzeanCardDoc = parameters.identificationDocuments;

            if (parameters.ral != null) {
              request.ral = this.requestFactory.parseBool(parameters.ral);
            }

            request.questions = parameters.questions;
            request.defaultSimulation = parameters.defaultSimulation;
            return request;
          }
        }, {
          key: "createCredentials",
          value: function createCredentials(parameters) {
            return this.requestFactory.createCredentials(parameters);
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return ExecutePersonalLoanAdhesion;
      }();
      /***/

    },

    /***/
    "ekNZ": function ekNZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentifaiRequestFactoryService", function () {
        return AgentifaiRequestFactoryService;
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


      var src_app_models_GenericKeyValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/GenericKeyValue */
      "P4gV");
      /* harmony import */


      var src_app_models_operation_Credential__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/operation/Credential */
      "+OAk");
      /* harmony import */


      var src_app_models_operation_Scheduling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/operation/Scheduling */
      "sd8+");

      var AgentifaiRequestFactoryService = /*#__PURE__*/function () {
        function AgentifaiRequestFactoryService() {
          _classCallCheck(this, AgentifaiRequestFactoryService);
        }

        _createClass(AgentifaiRequestFactoryService, [{
          key: "createCredentials",
          value: function createCredentials(parameters) {
            var credentialJson = parameters.credential;

            if (credentialJson) {
              var credential = new src_app_models_operation_Credential__WEBPACK_IMPORTED_MODULE_3__["Credential"]();
              credential.type = credentialJson.type;
              credential.value = credentialJson.value;
              return credential;
            }
          }
        }, {
          key: "createScheduling",
          value: function createScheduling(parameters) {
            var schedulingParams = parameters.scheduling;
            var scheduling = new src_app_models_operation_Scheduling__WEBPACK_IMPORTED_MODULE_4__["Scheduling"]();
            scheduling.startDate = schedulingParams.startDate;
            scheduling.endDate = schedulingParams.endDate || "";
            return scheduling;
          }
        }, {
          key: "parseBool",
          value: function parseBool(val) {
            return !!JSON.parse(String(val).toLowerCase());
          }
        }, {
          key: "createGenericKeyValue",
          value: function createGenericKeyValue(parameters) {
            return new src_app_models_GenericKeyValue__WEBPACK_IMPORTED_MODULE_2__["GenericKeyValue"](parameters.key, parameters.value);
          }
        }, {
          key: "createGenericKeyValueList",
          value: function createGenericKeyValueList(parameters) {
            return parameters.map(function (item) {
              return new src_app_models_GenericKeyValue__WEBPACK_IMPORTED_MODULE_2__["GenericKeyValue"](item.key, item.value);
            });
          }
        }]);

        return AgentifaiRequestFactoryService;
      }();

      AgentifaiRequestFactoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AgentifaiRequestFactoryService);
      /***/
    },

    /***/
    "g2f/": function g2f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetPaymentCards", function () {
        return GetPaymentCards;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/agentifai-utils */
      "EZ/N");
      /* harmony import */


      var src_app_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/commands/cards/cards-utils */
      "lw/H");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetPaymentCards = /*#__PURE__*/function () {
        function GetPaymentCards(request, responseFactory, transformer) {
          _classCallCheck(this, GetPaymentCards);

          this.request = request;
          this.responseFactory = responseFactory;
          this.transformer = transformer;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", "body.[^.]+.(".concat(src_app_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__["CardsUtils"].nonAnonymizedCardProperties, ")")];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetPaymentCards, [{
          key: "execute",
          value: function execute(service) {
            var _this70 = this;

            var headers = this.request.getHeaders();
            return service.getCardsPaymentData(headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this70.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this70.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            var transformedResponse = this.transformResponse(response);
            return this.createResponse(transformedResponse, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }, {
          key: "transformResponse",
          value: function transformResponse(response) {
            var data = src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_2__["AgentifaiUtils"].mapFromString(response.data);

            if (data != null) {
              data = this.transformer.addNewCardProperties(data);
            }

            response.data = data;
            return response;
          }
        }]);

        return GetPaymentCards;
      }();
      /***/

    },

    /***/
    "gASa": function gASa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetImmediateTransferPhoneNumbersCommand", function () {
        return GetImmediateTransferPhoneNumbersCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetImmediateTransferPhoneNumbersCommand = /*#__PURE__*/function () {
        function GetImmediateTransferPhoneNumbersCommand(request, responseFactory) {
          _classCallCheck(this, GetImmediateTransferPhoneNumbersCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetImmediateTransferPhoneNumbersCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this71 = this;

            var headers = this.request.getHeaders();
            return service.getPhoneNumbersForImmediateTransfers(headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this71.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this71.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetImmediateTransferPhoneNumbersCommand;
      }();
      /***/

    },

    /***/
    "gI+7": function gI7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExecuteImmediateTransferCommand", function () {
        return ExecuteImmediateTransferCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_models_operation_request_transfers_TransferImmediateRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/operation/request/transfers/TransferImmediateRequest */
      "lKfG");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var ExecuteImmediateTransferCommand = /*#__PURE__*/function () {
        function ExecuteImmediateTransferCommand(request, responseFactory, requestFactory) {
          _classCallCheck(this, ExecuteImmediateTransferCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.requestFactory = requestFactory;
          this.nonAnonymizableRegexesPathsSuccess = ["headers.+", "status", "body.(operationId|destinationType|operationCharge|operationStatus|transferState|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].scheduling(), ")")];
          this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(ExecuteImmediateTransferCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this72 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            var credential = this.createCredentials(parameters);
            return service.executeImmediateTransfer(headers, request, credential).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this72.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (resp) {
              return _this72.createErrorResponse(resp);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_transfers_TransferImmediateRequest__WEBPACK_IMPORTED_MODULE_2__["TransferImmediateRequest"]();
            request.operationId = parameters.operationId;
            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.amount = parameters.amount;
            request.message = parameters.message;
            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.destinationPhone = parameters.destinationPhone;
            request.cardNumberMasked = parameters.cardNumberMasked;
            request.useMbwayPartner = parameters.useMbwayPartner;
            request.scheduling = null;
            return request;
          }
        }, {
          key: "createCredentials",
          value: function createCredentials(parameters) {
            return this.requestFactory.createCredentials(parameters);
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
          }
        }]);

        return ExecuteImmediateTransferCommand;
      }();
      /***/

    },

    /***/
    "il6X": function il6X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountsUtils", function () {
        return AccountsUtils;
      });

      var AccountsUtils = function AccountsUtils() {
        _classCallCheck(this, AccountsUtils);
      };

      AccountsUtils.nonAnonymizedAccountsProperties = "alias|accountType|accountName|activeCDForAllHolders|multipleHoldersInfoType|description";
      /***/
    },

    /***/
    "iy9M": function iy9M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetManagerAvailableTime", function () {
        return GetManagerAvailableTime;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetManagerAvailableTime = /*#__PURE__*/function () {
        function GetManagerAvailableTime(request, responseFactory) {
          _classCallCheck(this, GetManagerAvailableTime);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", String.raw(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["^body.d$"], ["^body\\.\\d$"])))];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetManagerAvailableTime, [{
          key: "execute",
          value: function execute(service) {
            var _this73 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var destinationType = parameters["destinationType"];
            var date = parameters["date"];
            return service.getManagerAvailableTime(headers, destinationType, date).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this73.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this73.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetManagerAvailableTime;
      }();
      /***/

    },

    /***/
    "kLfG": function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "kajc": function kajc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InternalUtils", function () {
        return InternalUtils;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/agentifai/commands/accounts/accounts-utils */
      "il6X");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var _agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../agentifai/commands/cards/cards-utils */
      "lw/H");

      var InternalUtils = /*#__PURE__*/function () {
        function InternalUtils() {
          _classCallCheck(this, InternalUtils);
        }

        _createClass(InternalUtils, null, [{
          key: "getBaseUrl",
          value: function getBaseUrl() {
            if (this.baseUrl.length > 0) {
              return this.baseUrl;
            } else {
              return this.endpoints[0];
            }
          }
        }, {
          key: "getEndpointsWhitelist",
          value: function getEndpointsWhitelist() {
            return [{
              "endpoint": "business\/accounts($|[?].+?$)",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body\.(" + "defaultAccount.(".concat(src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_1__["AccountsUtils"].nonAnonymizedAccountsProperties, ")") + "|accounts.[^.]+.(".concat(src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_1__["AccountsUtils"].nonAnonymizedAccountsProperties, ")") + ")(?:$|\W)"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/accounts\/[^\/]+\/transactions($|[?].+?$)",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/accounts\/[^\/]+\/balances$",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body\.(accountCurrency|accountBalancesList\.[^.]+\.currency)(?:$|\W)"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/payments\/service\/executions",
              "httpMethod": "POST",
              "successWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault,
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/payments\/service\/simulations",
              "httpMethod": "POST",
              "successWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault,
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/payments\/generaldataforpayments\?.+",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body\.(" + "frequentOperations\.[^.]+\." + "(operationName|operationType|operationId|amount)" + "|accounts\.[^.]+\." + "(".concat(src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_1__["AccountsUtils"].nonAnonymizedAccountsProperties, ")") + ")(?:$|\W)"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/payments\/entities",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/payments\/service\/frequent",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body\.(operationName|operationId|amount)(?:$|\W)"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/payments\/telecommunications\/configurations",
              "httpMethod": "GET",
              "successWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault,
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/payments\/telecommunications\/simulations",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.(operationId|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/payments\/telecommunications\/executions",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.(operationId|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/payments\/telecommunications\/frequent",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body\.(operationName|operationId|amount|paymentConfigurationCode|parentPaymentConfigurationCode)(?:$|\W)"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/operations\/.+\/proofs\/emails",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/operations\/.+\/proof",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/transfers\/internal\/simulations",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.(operationId|operationStatus|charges[.].*|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/transfers\/internal\/executions",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.(operationId|operationStatus|charges[.].*|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/transfers\/internal\/frequent",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body\.(operationName|operationId|amount)(?:$|\W)"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/transfers\/generaldatafortransfers",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body\.(" + "frequentOperations\.[^.]+\." + "(operationName|operationType|operationId|amount)" + "|accounts\.[^.]+\." + "(".concat(src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_1__["AccountsUtils"].nonAnonymizedAccountsProperties, ")") + ")(?:$|\W)"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/transfers\/types\/validate\?targetAccount=.+",
              "httpMethod": "GET",
              "successWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault,
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/transfers\/calendarrestrictions\?transferTypeFilter=.+",
              "httpMethod": "GET",
              "successWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault,
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/transfers\/sepa\/simulations",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.(operationId|operationStatus|charges[.].*|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/transfers\/sepa\/executions",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.(operationId|operationStatus|charges[.].*|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/transfers\/sepa\/frequent",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body\.(operationName|operationId|amount)(?:$|\W)"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/transfers\/immediate\/simulations",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.(operationId|destinationType|operationCharge|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/transfers\/immediate\/executions",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.(operationId|destinationType|operationCharge|operationStatus|transferState|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/transfers\/immediate\/registration\/contacts",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/cards\/mbwaypartner\/clientStatus",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.(cards.[^.]+.(".concat(_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__["CardsUtils"].nonAnonymizedCardProperties, ")|clientMBWay)")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/cards\/mbwaypartner\/cards",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.[^.]+.(".concat(_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__["CardsUtils"].nonAnonymizedCardProperties, ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/cards\/mbwaypartner\/adhesion\/simulationsv2",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.(operationId|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/cards\/mbwaypartner\/adhesion\/executionsv2",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.(operationId|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/cards\/mbwaypartner\/acceptTransferCGD",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.(operationId|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/customers\/current\/contacts",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body\.contacts\.[^.]+\.(communicationMeans|contactType)(?:$|\W)"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/customers\/contracts\/credencialUnlockQuestions",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body\.(operationId|questions\.*|passwordRegeneration|forceDuplicateOperation)"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/customers\/contracts\/credencialUnlockAnswers",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body\.(operationId|success)"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/customers\/contracts\/contractUnlockQuestions",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body\.(questions\.*)"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/customers\/contracts\/contractUnlockAnswers",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body\.result"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/consent\/voiceTreatment",
              "httpMethod": "GET",
              "successWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault,
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/consent\/voiceTreatment",
              "httpMethod": "POST",
              "successWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault,
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/cards\/customercarddata",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body\.(" + "((cardAccounts\.[^.]+)|defaultCardAccount)\.(" + "currency|type|cardCodeType|statementIssueDateDescription|" + "statementPaymentLimitDescription|productImageUrl|" + "cards.[^.]+.(".concat(_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__["CardsUtils"].nonAnonymizedCardProperties, "))") + "|defaultCardAccountBalances\.availableCredit)"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/cards\/accounts\/.+\/transactions",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.(" + "cards.[^.]+.(".concat(_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__["CardsUtils"].nonAnonymizedCardProperties, ")") + "|" + "cardAccountTransactions.transactions.[^.]+.(".concat(_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__["CardsUtils"].nonAnonymizedCardTransactionProperties, ")") + ")"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/cards\?targetCardOperationType=.+",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.[^.]+.(".concat(_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__["CardsUtils"].nonAnonymizedCardProperties, ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/cards\/payments\/simulations",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.(operationId|operationStatus|charges.*|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/cards\/payments\/executions",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.(operationId|operationStatus|charges.*|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/cards\/activation\/.+\/.+\/activateCard",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", String.raw(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["^body.(success|failureReason)$"], ["^body\\.(success|failureReason)$"])))],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/cards\/phoneNumber",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/customers\/manager",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", String.raw(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["^body.serviceModel$"], ["^body\\.serviceModel$"])))],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/customers\/manager\/callback\/configuration",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", String.raw(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["^body.(callbackDestinations.d.periods.d|minDate|maxDate)$"], ["^body\\.(callbackDestinations\\.\\d\\.periods\\.\\d|minDate|maxDate)$"])))],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/customers\/manager\/callback\/availabletime",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", String.raw(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["^body.d$"], ["^body\\.\\d$"])))],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/customers\/manager\/callback",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/loans\/consumer\/calculatorV2",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", String.raw(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["^body.(operationId|success|errorMessage|simulationDate|amountMin|amountMax)$"], ["^body\\.(operationId|success|errorMessage|simulationDate|amountMin|amountMax)$"])))],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/loans\/consumer\/adhesionGeneralDataV2",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", String.raw(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["^body.(pedidoExistenteMes|validClient|client95_96|professionalInformation..+|accounts.[^.]+.(", "))$"], ["^body\\.(pedidoExistenteMes|validClient|client95_96|professionalInformation\\..+|accounts\\.[^.]+\\.(", "))$"])), src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_1__["AccountsUtils"].nonAnonymizedAccountsProperties)],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/loans\/consumer\/adhesionSimulationV2",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", String.raw(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["^body.(operationId|success|errorMessage|simulationDate|amountMin|amountMax)$"], ["^body\\.(operationId|success|errorMessage|simulationDate|amountMin|amountMax)$"])))],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/loans\/consumer\/adhesionExecutionV2",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", String.raw(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["^body.(operationId|operationStatus)$"], ["^body\\.(operationId|operationStatus)$"])))],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/content\/privateContent\/features\/.+",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/content\/privateContent\/landingPage\/banner\/disable",
              "httpMethod": "PUT",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/showcase\/cards",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", String.raw(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["(name|descriptionHtml|otherInfo)$"])))],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/showcase\/characteristics\?characteristicsId=.+",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", String.raw(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["^body.productCharacteristicsList.[0-9]+.(title|description)$"], ["^body\\.productCharacteristicsList\\.[0-9]+\\.(title|description)$"])))],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/showcase\/productdocument\?productCode=.+\&docType=.+",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/accounts\?targetOperationType=NEW_CARD_REQUEST",
              "httpMethod": "GET",
              "successWhitelist": ['headers.(?!Set-Cookie).+', 'status'],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/cards\/requests\/configurations\?fullAccountKey=.+\&productCode=.+",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", String.raw(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["^body.(paymentPercentages.[^.]+|statementEmissionDays.[^.]+|showCheckForCredit|onlineAdherence|creditLimitIncrementValue|minProductCreditLimit|maxProductCreditLimit)$"], ["^body\\.(paymentPercentages\\.[^.]+|statementEmissionDays\\.[^.]+|showCheckForCredit|onlineAdherence|creditLimitIncrementValue|minProductCreditLimit|maxProductCreditLimit)$"])))],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/cards\/requests\/simulations",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", String.raw(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["^body.(operationId|operationStatus|scheduling|invalidAccountIntervenLei83|safeMessageAdhesion|normalAdherenceErrorMsg)$"], ["^body\\.(operationId|operationStatus|scheduling|invalidAccountIntervenLei83|safeMessageAdhesion|normalAdherenceErrorMsg)$"])))],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/cards\/requests\/initNewCreditCard",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", String.raw(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["^body.(operationId|showCardCreditDocuments)$"], ["^body\\.(operationId|showCardCreditDocuments)$"])))],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/cards\/requests\/executions",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", String.raw(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["^body.(operationId|operationStatus|scheduling|invalidAccountIntervenLei83|safeMessageAdhesion|normalAdherenceErrorMsg)$"], ["^body\\.(operationId|operationStatus|scheduling|invalidAccountIntervenLei83|safeMessageAdhesion|normalAdherenceErrorMsg)$"])))],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/customers\/updateClientInformation\/validity",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.*"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/customers\/updateClientInformation\/address",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.expirado"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/customers\/updateClientInformation\/personal",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.expirado"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/customers\/updateClientInformation\/professional",
              "httpMethod": "GET",
              "successWhitelist": ['headers.(?!Set-Cookie).+', 'status', String.raw(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["^body.(expirado|trabalharPorContaDoutrem|empregadoCgd)$"], ["^body\\.(expirado|trabalharPorContaDoutrem|empregadoCgd)$"])))],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/customers\/updateClientInformation\/list\/\d*",
              "httpMethod": "GET",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.*"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/customers\/updateClientInformation\/simulation",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.(operationId|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/customers\/updateClientInformation\/execution",
              "httpMethod": "POST",
              "successWhitelist": ["headers.(?!Set-Cookie).+", "status", "body.(operationId|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/credentialsmanagement\/credentials\/\d*",
              "httpMethod": "GET",
              "successWhitelist": ['headers.(?!Set-Cookie).+', 'status', String.raw(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["body.credentials.[^.]+.status"], ["body\\.credentials\\.[^.]+\\.status"])))],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/credentialsmanagement\/matrixrequisition\/config",
              "httpMethod": "GET",
              "successWhitelist": ['headers.(?!Set-Cookie).+', 'status', String.raw(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["body.((adressList.[^.]+.adressSequenceNumber)|motiveList.[^.]+)"], ["body\\.((adressList\\.[^.]+\\.adressSequenceNumber)|motiveList\\.[^.]+)"])))],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/credentialsmanagement\/matrixrequisition\/simulations",
              "httpMethod": "POST",
              "successWhitelist": ['headers.(?!Set-Cookie).+', 'status', "body.(operationId|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/credentialsmanagement\/matrixrequisition\/executions",
              "httpMethod": "POST",
              "successWhitelist": ['headers.(?!Set-Cookie).+', 'status', "body.(operationId|operationStatus|customerMessage|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/credentialsmanagement\/matrixactivation\/simulations",
              "httpMethod": "POST",
              "successWhitelist": ['headers.(?!Set-Cookie).+', 'status', "body.(operationId|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/credentialsmanagement\/matrixactivation\/executions",
              "httpMethod": "POST",
              "successWhitelist": ['headers.(?!Set-Cookie).+', 'status', "body.(operationId|operationStatus|customerMessage|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/cards\/cashadvance\/simulations$",
              "httpMethod": "POST",
              "successWhitelist": ['headers.(?!Set-Cookie).+', "status", "body.(operationId|operationStatus|operationCost|commissions|tax|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/cards\/cashadvance\/executions$",
              "httpMethod": "POST",
              "successWhitelist": ['headers.(?!Set-Cookie).+', "status", "body.(operationId|operationStatus|operationCost|commissions|tax|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/directdebits\/detail($|[?].+?$)",
              "httpMethod": "GET",
              "successWhitelist": ['headers.(?!Set-Cookie).+', "status", String.raw(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["^body.(validToChange|limitDate|maxAmount|lastUpdateDate|situation|creationDate)$"], ["^body\\.(validToChange|limitDate|maxAmount|lastUpdateDate|situation|creationDate)$"])))],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/directdebits($|[?].+?$)",
              "httpMethod": "GET",
              "successWhitelist": ['headers.(?!Set-Cookie).+', "status", String.raw(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["^body.directDebits.[^.]+.(creationDate|situation)$"], ["^body\\.directDebits\\.[^.]+\\.(creationDate|situation)$"])))],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/directdebits\/config\/simulations$",
              "httpMethod": "POST",
              "successWhitelist": ['headers.(?!Set-Cookie).+', "status", "body.(operationId|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/directdebits\/config\/executions$",
              "httpMethod": "POST",
              "successWhitelist": ['headers.(?!Set-Cookie).+', "status", "body.(operationId|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/directdebits\/revoke$",
              "httpMethod": "POST",
              "successWhitelist": ['headers.(?!Set-Cookie).+', "status", "body.(" + "operationId|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()) + "|" + "directDebit.[^.]+.(creationDate|creditorEntity|situation|directDebitTransaction.[^.]+.(date|amount|revog|type))" + ")"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/directdebits\/revoke\/simulations$",
              "httpMethod": "POST",
              "successWhitelist": ['headers.(?!Set-Cookie).+', "status", "body.(operationId|operationStatus|success|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/directdebits\/revoke\/executions$",
              "httpMethod": "POST",
              "successWhitelist": ['headers.(?!Set-Cookie).+', "status", "body.(operationId|operationStatus|success|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/customers\/nif\/tooltip\/info.*",
              "httpMethod": "GET",
              "successWhitelist": ['headers.(?!Set-Cookie).+', "status", "body.tooltipInfoText"],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/directdebits\/changestate\/*",
              "httpMethod": "POST",
              "successWhitelist": ['headers.(?!Set-Cookie).+', "status", "body.(operationId|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/directdebits\/transactions($|[?].+?$)",
              "httpMethod": "GET",
              "successWhitelist": ['headers.(?!Set-Cookie).+', 'status', String.raw(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["^body.directDebitTransaction.[^.]+.(date|type|revog|nsLote|nsRegLote)$"], ["^body\\.directDebitTransaction\\.[^.]+\\.(date|type|revog|nsLote|nsRegLote)$"])))],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }, {
              "endpoint": "business\/accounts\/[^\/]+\/getIbanPdf$",
              "httpMethod": "GET",
              "successWhitelist": ['headers.(?!Set-Cookie).+', 'status'],
              "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }];
          }
        }]);

        return InternalUtils;
      }();

      InternalUtils.endpointKey = "baseEndpointKey";
      InternalUtils.baseUrl = "";
      InternalUtils.endpoints = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoints;
      /***/
    },

    /***/
    "lKfG": function lKfG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransferImmediateRequest", function () {
        return TransferImmediateRequest;
      });
      /* harmony import */


      var src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/operation/request/GenericOperationRequest */
      "AwYQ");

      var TransferImmediateRequest = /*#__PURE__*/function (_src_app_models_opera5) {
        _inherits(TransferImmediateRequest, _src_app_models_opera5);

        var _super12 = _createSuper(TransferImmediateRequest);

        function TransferImmediateRequest() {
          var _this74;

          _classCallCheck(this, TransferImmediateRequest);

          _this74 = _super12.call(this);
          _this74.amount = '';
          _this74.message = '';
          _this74.destinationPhone = '';
          _this74.cardNumberMasked = '';
          _this74.useMbwayPartner = false;
          return _this74;
        }

        return TransferImmediateRequest;
      }(src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"]);
      /***/

    },

    /***/
    "lw/H": function lwH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardsUtils", function () {
        return CardsUtils;
      });

      var CardsUtils = function CardsUtils() {
        _classCallCheck(this, CardsUtils);
      };

      CardsUtils.nonAnonymizedCardProperties = "cardAlias|cardName|cardAccountCurrency|prePaidCard|prePaidDualCreditCard|active|cancelled|virtualCard|(transactions.[^.]+.(creditAmount|debitAmount))";
      CardsUtils.nonAnonymizedCardTransactionProperties = "creditAmount|debitAmount";
      /***/
    },

    /***/
    "mxeL": function mxeL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimulateImmediateTransferCommand", function () {
        return SimulateImmediateTransferCommand;
      });
      /* harmony import */


      var src_app_models_operation_request_transfers_TransferImmediateRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/operation/request/transfers/TransferImmediateRequest */
      "lKfG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var SimulateImmediateTransferCommand = /*#__PURE__*/function () {
        function SimulateImmediateTransferCommand(request, responseFactory) {
          _classCallCheck(this, SimulateImmediateTransferCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexesPathsSuccess = ["headers.+", "status", "body.(operationId|destinationType|operationCharge|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].scheduling(), ")")];
          this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(SimulateImmediateTransferCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this75 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            return service.simulateImmediateTransfer(headers, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
              return _this75.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (resp) {
              return _this75.createErrorResponse(resp);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_transfers_TransferImmediateRequest__WEBPACK_IMPORTED_MODULE_0__["TransferImmediateRequest"]();
            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.amount = parameters.amount;
            request.message = parameters.message;
            request.destinationPhone = parameters.destinationPhone;
            request.cardNumberMasked = parameters.cardNumberMasked;
            request.useMbwayPartner = parameters.useMbwayPartner;
            request.scheduling = null;
            return request;
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
          }
        }]);

        return SimulateImmediateTransferCommand;
      }();
      /***/

    },

    /***/
    "n/kK": function nKK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimulateTelecommunicationPaymentCommand", function () {
        return SimulateTelecommunicationPaymentCommand;
      });
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_models_operation_request_payments_TelecommunicationsPaymentRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/operation/request/payments/TelecommunicationsPaymentRequest */
      "QzTv");

      var SimulateTelecommunicationPaymentCommand = /*#__PURE__*/function () {
        function SimulateTelecommunicationPaymentCommand(request, requestFactory, responseFactory) {
          _classCallCheck(this, SimulateTelecommunicationPaymentCommand);

          this.request = request;
          this.requestFactory = requestFactory;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexesPathsSuccess = ["headers.+", "status", "body.(operationId|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_0__["Anonymization"].scheduling(), ")")];
          this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_0__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(SimulateTelecommunicationPaymentCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this76 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            return service.simulateTelecomPayment(headers, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
              return _this76.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (resp) {
              return _this76.createErrorResponse(resp);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_payments_TelecommunicationsPaymentRequest__WEBPACK_IMPORTED_MODULE_3__["TelecommunicationsPaymentRequest"]();
            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.scheduling = this.requestFactory.createScheduling(parameters);
            request.sourceAccount = parameters.sourceAccount;
            request.reference = parameters.reference;
            request.amount = parameters.amount;
            request.paymentConfigurationCode = parseInt(parameters.paymentConfigurationCode);
            request.parentPaymentConfigurationCode = parseInt(parameters.parentPaymentConfigurationCode);
            request.taxPayerNumber = parameters.taxPayerNumber;
            return request;
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
          }
        }]);

        return SimulateTelecommunicationPaymentCommand;
      }();
      /***/

    },

    /***/
    "nYpB": function nYpB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentifaiRequest", function () {
        return AgentifaiRequest;
      });

      var AgentifaiRequest = /*#__PURE__*/function () {
        function AgentifaiRequest(id, data) {
          _classCallCheck(this, AgentifaiRequest);

          this.id = id;
          this.data = data;
        }

        _createClass(AgentifaiRequest, [{
          key: "getParameters",
          value: function getParameters() {
            return this.data["parameters"];
          }
        }, {
          key: "getHeaders",
          value: function getHeaders() {
            return this.data["headers"];
          }
        }]);

        return AgentifaiRequest;
      }();
      /***/

    },

    /***/
    "oUY6": function oUY6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ENVS", function () {
        return ENVS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnvironmentService", function () {
        return EnvironmentService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var ENVS;

      (function (ENVS) {
        ENVS[ENVS["BROWSER"] = 0] = "BROWSER";
        ENVS[ENVS["DEV"] = 1] = "DEV";
        ENVS[ENVS["DEV2"] = 2] = "DEV2";
        ENVS[ENVS["TI"] = 3] = "TI";
        ENVS[ENVS["CQ"] = 4] = "CQ";
        ENVS[ENVS["PROD"] = 5] = "PROD";
      })(ENVS || (ENVS = {}));

      var EnvironmentService = /*#__PURE__*/function () {
        function EnvironmentService(platform) {
          var _this77 = this;

          _classCallCheck(this, EnvironmentService);

          this.platform = platform;
          this.DEVELOPMENT_MODE = true;
          this.ENV_URLS = ['http://localhost:8100/pceApi/rest/v1/', 'http://10.52.33.69:8080/pceApi/rest/v1/', 'http://10.52.3.80:28080/pceApi/rest/v1/', 'http://ti-app.cgd.pt/pceApi/rest/v1/', 'https://app.cqcgd.pt/pceApi/rest/v1/', 'https://qoba.cgd.pt/pceApi/rest/v1/', 'https://app.cgd.pt/pceApi/rest/v1/'];
          this.ENVS_CODES = {
            "ANDROID": {
              "platform": "android",
              "codeSmartPhone": "as2",
              "codeTablet": "at2"
            },
            "IOS_SMARTPHONE": {
              "platform": "iphone",
              "code": "is2"
            },
            "IOS_TABLET": {
              "platform": "ipad",
              "code": "it2"
            }
          };
          this.LANG_PT = 'pt-PT';
          this.LANG_EN = 'en-US'; //locale on services PCE

          this.DEFAULT_ENV = ENVS.DEV;
          this.DEFAULT_LANG = this.LANG_PT;
          this.DEFAULT_DEVICE_TYPE = 'NA';
          this.DEFAULT_APPVERSION = 'NA';
          this.APPNAME = 'APP_CAIXADIRECTA';
          this.isBrowser = false;
          this.reloadBanners = false;
          this.iPhoneModelsWithNotch = ['iPhone10,3', 'iPhone10,6', 'iPhone11,2', 'iPhone11,4', 'iPhone11,6', 'iPhone11,8', 'iPhone12,1', 'iPhone12,3', 'iPhone12,5'];

          this.aliceStateChangeCallback = function () {};

          this.isAgentifaiLoggerEnabled = true;
          this.ENVS_AUX = ENVS;

          this.isIPhone = function () {
            if (this.deviceType == this.ENVS_CODES.IOS_SMARTPHONE.code || this.deviceType == this.ENVS_CODES.IOS_TABLET.code) {
              return true;
            } else {
              return false;
            }
          };

          this.isAndroid = function () {
            if (this.deviceType == this.ENVS_CODES.ANDROID.codeSmartPhone || this.deviceType == this.ENVS_CODES.ANDROID.codeTablet) {
              return true;
            } else {
              return false;
            }
          };

          this.isTablet = function () {
            if (this.deviceType == this.ENVS_CODES.IOS_TABLET.code || this.deviceType == this.ENVS_CODES.ANDROID.codeTablet) {
              return true;
            } else {
              return false;
            }
          };

          this.changeEnvironment = function () {
            //if (this.ENVS_AUX.BROWSER === this.SELECTED_ENV) {
            //    this.SELECTED_ENV = this.ENVS_AUX.DEV;
            //    this.baseUrl = this.ENV[this.SELECTED_ENV];
            //} else
            if (this.ENVS_AUX.DEV === this.SELECTED_ENV) {
              this.SELECTED_ENV = this.ENVS_AUX.DEV2;
              this.baseUrl = this.ENV[this.SELECTED_ENV];
            } else if (this.ENVS_AUX.DEV2 === this.SELECTED_ENV) {
              this.SELECTED_ENV = this.ENVS_AUX.TI;
              this.baseUrl = this.ENV[this.SELECTED_ENV];
            } else if (this.ENVS_AUX.TI === this.SELECTED_ENV) {
              this.SELECTED_ENV = this.ENVS_AUX.CQ;
              this.baseUrl = this.ENV[this.SELECTED_ENV];
            } else if (this.ENVS_AUX.CQ === this.SELECTED_ENV) {
              this.SELECTED_ENV = this.ENVS_AUX.PROD;
              this.baseUrl = this.ENV[this.SELECTED_ENV];
            } else if (this.ENVS_AUX.PROD === this.SELECTED_ENV) {
              this.SELECTED_ENV = this.ENVS_AUX.DEV;
              this.baseUrl = this.ENV[this.SELECTED_ENV];
            } else {
              this.SELECTED_ENV = this.ENVS_AUX.BROWSER;
              this.baseUrl = this.ENV[this.SELECTED_ENV];
            }

            if (this.DEVELOPMENT_MODE) {
              console.log("new url :" + this.baseUrl);
            }
          };

          if (!this.DEVELOPMENT_MODE) {
            this.DEFAULT_ENV = ENVS.PROD;
          }

          this.SELECTED_ENV = this.DEFAULT_ENV;
          this.pceVersion = "NA";
          this.languageCode = this.DEFAULT_LANG;
          this.deviceType = this.DEFAULT_DEVICE_TYPE;
          this.appVersion = this.DEFAULT_APPVERSION;
          this.isDeviceRooted = false;
          this.aliceActive = false;

          if (platform && platform.is("cordova")) {
            console.log(platform);
            this.appVersion = "3.10.0";

            if (platform) {
              if (platform.is('android')) {
                if (platform.is("tablet")) {
                  this.deviceType = this.ENVS_CODES.ANDROID.codeTablet;
                } else {
                  this.deviceType = this.ENVS_CODES.ANDROID.codeSmartPhone;
                }
              } else if (platform.is('iphone')) {
                this.deviceType = this.ENVS_CODES.IOS_SMARTPHONE.code;
              } else if (platform.is('ipad')) {
                this.deviceType = this.ENVS_CODES.IOS_TABLET.code;
              }
            }

            this.baseUrl = this.ENV_URLS[this.DEFAULT_ENV];
          } else {
            console.log("BROWSER");
            this.baseUrl = this.ENV_URLS[ENVS.BROWSER];
            this.SELECTED_ENV = ENVS.BROWSER;
            this.isBrowser = true;
            this.appVersion = "1.0.0";
            this.deviceType = this.ENVS_CODES.ANDROID.codeSmartPhone;
          }

          this.platform.ready().then(function () {
            if (_this77.platform && _this77.platform.is("cordova")) {
              IRoot.isRooted(function (result) {
                _this77.isDeviceRooted = result;
              }, function (error) {
                console.log("error checking if device rooted: " + error);
              });
            }
          });
          console.log("url :" + this.baseUrl);
        }
        /***** Alice methods *****/


        _createClass(EnvironmentService, [{
          key: "isAliceActive",
          value: function isAliceActive() {
            return this.aliceActive;
          }
        }, {
          key: "openAlice",
          value: function openAlice() {
            this.aliceActive = true;
          }
        }, {
          key: "closeAlice",
          value: function closeAlice() {
            this.aliceActive = false;
          }
        }, {
          key: "getAgentifaiConfiguration",
          value: function getAgentifaiConfiguration() {
            return {
              apiUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].assistantConfiguration.apiUrl,
              apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].assistantConfiguration.apiKey
            };
          }
        }]);

        return EnvironmentService;
      }();

      EnvironmentService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };

      EnvironmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EnvironmentService);
      /***/
    },

    /***/
    "oZWX": function oZWX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Api", function () {
        return Api;
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


      var src_app_services_environment_service_environment_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/environment-service/environment-service.service */
      "oUY6");
      /* harmony import */


      var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/utils/utils.service */
      "HPR3");
      /* harmony import */


      var src_app_internal_internal_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/internal/internal-utils */
      "kajc");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "XSEc");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var Api = /*#__PURE__*/function () {
        function Api(http, env, utils) {
          _classCallCheck(this, Api);

          this.http = http;
          this.env = env;
          this.utils = utils;
          this.developmentMode = true;
          this.HEADERS_KEYS_MAPPING_ALICE = {
            "language": "X-CGD-APP-LANGUAGE",
            "requestId": "X-CGD-APP-Bot-Request-Id"
          };

          this.getHeaders = function (fromAgentifai, agentifaiHeaders) {
            var headers = {
              "X-CGD-APP-Device": this.env.deviceType,
              "X-CGD-APP-Version": this.env.appVersion,
              "X-CGD-APP-LANGUAGE": this.env.languageCode,
              "X-CGD-APP-Name": this.env.APPNAME
            };

            if (this.env.isDeviceRooted) {
              headers["X-CGD-APP-Possibly-Rooted"] = this.env.isDeviceRooted.toString();
            }

            if (fromAgentifai) {
              headers["X-CGD-APP-Bot"] = fromAgentifai.toString();

              if (agentifaiHeaders != null) {
                if (agentifaiHeaders['requestId']) {
                  headers["X-CGD-APP-Bot-Request-Id"] = agentifaiHeaders['requestId'];
                }

                if (agentifaiHeaders["language"]) {
                  headers["X-CGD-APP-LANGUAGE"] = agentifaiHeaders['language'];
                }
              }
            }

            return headers;
          };

          this.getHeadersAuthorization = function (value, fromAgentifai, agentifaiHeaders) {
            var headers = this.getHeaders(fromAgentifai, agentifaiHeaders);
            headers["Authorization"] = value;
            return headers;
          };

          this.getHeadersAlice = function () {
            return this.getHeaders(true);
          };
        } //////////////////////////
        ///// PUBLIC METHODS /////
        //////////////////////////
        ///// LOGIN /////


        _createClass(Api, [{
          key: "postLogin",
          value: function postLogin(auth, serviceUrl, isFingerPrint, loyaltyCode) {
            var _this78 = this;

            var headers = this.getHeadersAuthorization("Basic " + auth, false, null);

            if (loyaltyCode) {
              headers["X-CGD-APP-LOYALTY-CODE"] = loyaltyCode;
            }

            var endpoint = this.createUrl(serviceUrl);

            if (this.developmentMode) {
              console.log("POST " + endpoint);
              console.log("HEADERS: " + JSON.stringify(headers));
            }

            this.http.clearCookies();
            this.http.setDataSerializer("json");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.http.post(endpoint, {}, headers).then(function (resp) {
              if (resp && resp.data) {
                var data = JSON.parse(resp.data);
                return {
                  headers: resp.headers,
                  data: data
                };
              } else {
                return resp;
              }
            }, function (err) {
              if (isFingerPrint) {
                _this78.utils.handleError({
                  error: {
                    error: err,
                    isLogin: true,
                    isFingerPrint: true
                  }
                });

                throw err;
              } else {
                _this78.utils.handleError({
                  error: {
                    error: err,
                    isLogin: true
                  }
                });

                throw err;
              }
            }));
          } ///// PUBLIC GET /////

        }, {
          key: "genericGetMethod",
          value: function genericGetMethod(serviceUrl, notEncodeUrl) {
            return this.genericGetMethodInternal(serviceUrl, false, null, notEncodeUrl);
          }
        }, {
          key: "genericGetMethodAgentifai",
          value: function genericGetMethodAgentifai(serviceUrl, agentifaiHeaders, notEncodeUrl) {
            return this.genericGetMethodInternal(serviceUrl, true, agentifaiHeaders, notEncodeUrl);
          }
        }, {
          key: "genericGetMethodInternal",
          value: function genericGetMethodInternal(serviceUrl, fromAgentifai, agentifaiHeaders, notEncodeUrl) {
            var _this79 = this;

            var url = encodeURI(serviceUrl);

            if (notEncodeUrl) {
              url = serviceUrl;
            }

            var headers = this.getHeaders(fromAgentifai, agentifaiHeaders);
            var endpoint = this.createUrl(url);

            if (this.developmentMode) {
              console.log("GET " + endpoint);
              console.log("HEADERS: " + JSON.stringify(headers));
            }

            this.http.setDataSerializer("json");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.http.get(endpoint, null, headers).then(function (resp) {
              if (resp && resp.data && !fromAgentifai) {
                return JSON.parse(resp.data);
              } else {
                return resp;
              }
            }, function (err) {
              _this79.utils.handleError({
                error: {
                  error: err
                }
              });

              throw err;
            }));
          } ///// PUBLIC GET WITH SPECIFIC LANGUAGE /////

        }, {
          key: "genericGetMethodWithLanguage",
          value: function genericGetMethodWithLanguage(serviceUrl, languageCode, notEncodeUrl) {
            var _this80 = this;

            var url = encodeURI(serviceUrl);

            if (notEncodeUrl) {
              url = serviceUrl;
            }

            var headers = this.getHeaders(false, null); // force language header with value received

            headers["X-CGD-APP-LANGUAGE"] = languageCode;
            var endpoint = this.createUrl(url);

            if (this.developmentMode) {
              console.log("GET " + endpoint);
              console.log("HEADERS: " + JSON.stringify(headers));
            }

            this.http.setDataSerializer("json");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.http.get(endpoint, null, headers).then(function (resp) {
              if (resp && resp.data) {
                return JSON.parse(resp.data);
              } else {
                return resp;
              }
            }, function (err) {
              _this80.utils.handleError({
                error: {
                  error: err
                }
              });

              throw err;
            }));
          } ///// PUBLIC POST WITH INPUT /////

        }, {
          key: "genericPostMethodWithInput",
          value: function genericPostMethodWithInput(input, serviceUrl) {
            return this.genericPostMethodWithInputInternal(input, serviceUrl, false, null);
          }
        }, {
          key: "genericPostMethodWithInputAgentifai",
          value: function genericPostMethodWithInputAgentifai(input, serviceUrl, agentifaiHeaders) {
            return this.genericPostMethodWithInputInternal(input, serviceUrl, true, agentifaiHeaders);
          }
        }, {
          key: "genericPostMethodWithInputInternal",
          value: function genericPostMethodWithInputInternal(input, serviceUrl, fromAgentifai, agentifaiHeaders) {
            var _this81 = this;

            var headers = this.getHeaders(fromAgentifai, agentifaiHeaders);
            var payload = input != null ? input : {};
            var endpoint = this.createUrl(serviceUrl);

            if (this.developmentMode) {
              console.log("POST " + endpoint);
              console.log("HEADERS: " + JSON.stringify(headers));
              console.log("BODY: " + JSON.stringify(payload));
            }

            this.http.setDataSerializer("json");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.http.post(endpoint, payload, headers).then(function (resp) {
              _this81.utils.APPSetTimeout();

              if (resp && resp.data && !fromAgentifai) {
                return JSON.parse(resp.data);
              } else {
                return resp;
              }
            }, function (err) {
              _this81.utils.handleError({
                error: {
                  error: err
                }
              });

              throw err;
            }));
          } /////////////////////////////////
          ///// AUTHENTICATED METHODS /////
          /////////////////////////////////
          ///// AUTHENTICATED GET /////

        }, {
          key: "genericGetAuthenticatedMethod",
          value: function genericGetAuthenticatedMethod(serviceUrl, notEncodeUrl, credential) {
            return this.genericGetAuthenticatedMethodInternal(serviceUrl, false, null, notEncodeUrl, credential);
          }
        }, {
          key: "genericGetAuthenticatedMethodAgentifai",
          value: function genericGetAuthenticatedMethodAgentifai(serviceUrl, agentifaiHeaders, notEncodeUrl, credential) {
            return this.genericGetAuthenticatedMethodInternal(serviceUrl, true, agentifaiHeaders, notEncodeUrl, credential);
          }
        }, {
          key: "genericGetAuthenticatedMethodInternal",
          value: function genericGetAuthenticatedMethodInternal(serviceUrl, fromAgentifai, agentifaiHeaders, notEncodeUrl, credential) {
            var _this82 = this;

            if (credential == null) {
              this.utils.resetCredentials();
            }

            var url = encodeURI(serviceUrl);

            if (notEncodeUrl) {
              url = serviceUrl;
            }

            var headers = null;

            if (credential && credential.type) {
              headers = this.getHeadersAuthorization(credential.type + " " + credential.value, fromAgentifai, agentifaiHeaders);
            } else {
              headers = this.getHeaders(fromAgentifai, agentifaiHeaders);
            }

            var endpoint = this.createUrl(url);

            if (this.developmentMode) {
              console.log("GET " + endpoint);
              console.log("HEADERS: " + JSON.stringify(headers));
            }

            this.http.setDataSerializer("json");
            this.http.setRequestTimeout(300000);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.http.get(endpoint, {}, headers).then(function (resp) {
              _this82.utils.APPSetTimeout();

              if (resp && resp.data && !fromAgentifai) {
                return JSON.parse(resp.data);
              } else {
                return resp;
              }
            }, function (err) {
              _this82.utils.handleError({
                error: {
                  error: err
                }
              });

              throw err;
            }));
          } ///// AUTHENTICATED POST /////

        }, {
          key: "genericPostAuthenticatedMethod",
          value: function genericPostAuthenticatedMethod(serviceUrl) {
            return this.genericPostAuthenticatedMethodInternal(serviceUrl, false, null);
          }
        }, {
          key: "genericPostAuthenticatedMethodAgentifai",
          value: function genericPostAuthenticatedMethodAgentifai(serviceUrl, agentifaiHeaders) {
            return this.genericPostAuthenticatedMethodInternal(serviceUrl, true, agentifaiHeaders);
          }
        }, {
          key: "genericPostAuthenticatedMethodInternal",
          value: function genericPostAuthenticatedMethodInternal(serviceUrl, fromAgentifai, agentifaiHeaders) {
            var _this83 = this;

            var headers = this.getHeaders(fromAgentifai, agentifaiHeaders);
            var endpoint = this.createUrl(serviceUrl);

            if (this.developmentMode) {
              console.log("POST " + endpoint);
              console.log("HEADERS: " + JSON.stringify(headers));
            }

            this.http.setDataSerializer("json");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.http.post(endpoint, {}, headers).then(function (resp) {
              _this83.utils.APPSetTimeout();

              if (resp && resp.data && !fromAgentifai) {
                return JSON.parse(resp.data);
              } else {
                return resp;
              }
            }, function (err) {
              _this83.utils.handleError({
                error: {
                  error: err
                }
              });

              throw err;
            }));
          } ///// AUTHENTICATED POST WITH INPUT /////

        }, {
          key: "genericPostAuthenticatedMethodWithInput",
          value: function genericPostAuthenticatedMethodWithInput(input, serviceUrl, credential) {
            return this.genericPostAuthenticatedMethodWithInputInternal(input, serviceUrl, false, null, credential);
          }
        }, {
          key: "genericPostAuthenticatedMethodWithInputAgentifai",
          value: function genericPostAuthenticatedMethodWithInputAgentifai(input, serviceUrl, agentifaiHeaders, credential) {
            return this.genericPostAuthenticatedMethodWithInputInternal(input, serviceUrl, true, agentifaiHeaders, credential);
          }
        }, {
          key: "genericPostAuthenticatedMethodWithInputInternal",
          value: function genericPostAuthenticatedMethodWithInputInternal(input, serviceUrl, fromAgentifai, agentifaiHeaders, credential) {
            var _this84 = this;

            if (credential == null) {
              this.utils.resetCredentials();
            }

            var headers = null;

            if (credential && credential.type) {
              headers = this.getHeadersAuthorization(credential.type + " " + credential.value, fromAgentifai, agentifaiHeaders);
            } else {
              headers = this.getHeaders(fromAgentifai, agentifaiHeaders);
            }

            var payload = input != null ? input : {};
            var endpoint = this.createUrl(serviceUrl);

            if (this.developmentMode) {
              console.log("POST " + endpoint);
              console.log("HEADERS: " + JSON.stringify(headers));
              console.log("BODY: " + JSON.stringify(payload));
            }

            this.http.setDataSerializer("json");
            this.http.setRequestTimeout(300000);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.http.post(endpoint, payload, headers).then(function (resp) {
              _this84.utils.APPSetTimeout();

              if (resp && resp.data && !fromAgentifai) {
                return JSON.parse(resp.data);
              } else {
                return resp;
              }
            }, function (err) {
              _this84.utils.handleError({
                error: {
                  error: err
                }
              });

              throw err;
            }));
          } ///// AUTHENTICATED PUT /////

        }, {
          key: "genericPutAuthenticatedMethod",
          value: function genericPutAuthenticatedMethod(serviceUrl) {
            return this.genericPutAuthenticatedMethodInternal(serviceUrl, false, null);
          }
        }, {
          key: "genericPutAuthenticatedMethodAgentifai",
          value: function genericPutAuthenticatedMethodAgentifai(serviceUrl, agentifaiHeaders) {
            return this.genericPutAuthenticatedMethodInternal(serviceUrl, true, agentifaiHeaders);
          }
        }, {
          key: "genericPutAuthenticatedMethodInternal",
          value: function genericPutAuthenticatedMethodInternal(serviceUrl, fromAgentifai, agentifaiHeaders) {
            var _this85 = this;

            var headers = this.getHeaders(fromAgentifai, agentifaiHeaders);
            var endpoint = this.createUrl(serviceUrl);

            if (this.developmentMode) {
              console.log("PUT " + endpoint);
              console.log("HEADERS: " + JSON.stringify(headers));
            }

            this.http.setDataSerializer("json");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.http.put(endpoint, {}, headers).then(function (resp) {
              _this85.utils.APPSetTimeout();

              if (resp && resp.data && !fromAgentifai) {
                return JSON.parse(resp.data);
              } else {
                return resp;
              }
            }, function (err) {
              _this85.utils.handleError({
                error: {
                  error: err
                }
              });

              throw err;
            }));
          } ///// AUTHENTICATED PUT WITH INPUT /////

        }, {
          key: "genericPutAuthenticatedMethodWithInput",
          value: function genericPutAuthenticatedMethodWithInput(input, serviceUrl) {
            return this.genericPutAuthenticatedMethodWithInputInternal(input, serviceUrl, false, null);
          }
        }, {
          key: "genericPutAuthenticatedMethodWithInputAgentifai",
          value: function genericPutAuthenticatedMethodWithInputAgentifai(input, serviceUrl, agentifaiHeaders) {
            return this.genericPutAuthenticatedMethodWithInputInternal(input, serviceUrl, true, agentifaiHeaders);
          }
        }, {
          key: "genericPutAuthenticatedMethodWithInputInternal",
          value: function genericPutAuthenticatedMethodWithInputInternal(input, serviceUrl, fromAgentifai, agentifaiHeaders) {
            var _this86 = this;

            var headers = this.getHeaders(fromAgentifai, agentifaiHeaders);
            var payload = input != null ? input : {};
            var endpoint = this.createUrl(serviceUrl);

            if (this.developmentMode) {
              console.log("PUT " + endpoint);
              console.log("HEADERS: " + JSON.stringify(headers));
              console.log("BODY: " + JSON.stringify(payload));
            }

            this.http.setDataSerializer("json");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.http.put(endpoint, payload, headers).then(function (resp) {
              _this86.utils.APPSetTimeout();

              if (resp && resp.data && !fromAgentifai) {
                return JSON.parse(resp.data);
              } else {
                return resp;
              }
            }, function (err) {
              _this86.utils.handleError({
                error: {
                  error: err
                }
              });

              throw err;
            }));
          } ///// AUTHENTICATED DELETE /////

        }, {
          key: "genericDeleteAuthenticatedMethod",
          value: function genericDeleteAuthenticatedMethod(serviceUrl) {
            return this.genericDeleteAuthenticatedMethodInternal(serviceUrl, false, null);
          }
        }, {
          key: "genericDeleteAuthenticatedMethodAgentifai",
          value: function genericDeleteAuthenticatedMethodAgentifai(serviceUrl, agentifaiHeaders) {
            return this.genericDeleteAuthenticatedMethodInternal(serviceUrl, true, agentifaiHeaders);
          }
        }, {
          key: "genericDeleteAuthenticatedMethodInternal",
          value: function genericDeleteAuthenticatedMethodInternal(serviceUrl, fromAgentifai, agentifaiHeaders) {
            var _this87 = this;

            var headers = this.getHeaders(fromAgentifai, agentifaiHeaders);
            var endpoint = this.createUrl(serviceUrl);

            if (this.developmentMode) {
              console.log("DELETE " + endpoint);
              console.log("HEADERS: " + JSON.stringify(headers));
            }

            this.http.setDataSerializer("json");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.http["delete"](endpoint, null, headers).then(function (resp) {
              _this87.utils.APPSetTimeout();

              if (resp && resp.data && !fromAgentifai) {
                return JSON.parse(resp.data);
              } else {
                return resp;
              }
            }, function (err) {
              _this87.utils.handleError({
                error: {
                  error: err
                }
              });

              throw err;
            }));
          } ///// LOGOUT /////

        }, {
          key: "deleteLogout",
          value: function deleteLogout(serviceUrl) {
            return this.deleteLogoutInternal(serviceUrl, false, null);
          }
        }, {
          key: "deleteLogoutAgentifai",
          value: function deleteLogoutAgentifai(serviceUrl, agentifaiHeaders) {
            return this.deleteLogoutInternal(serviceUrl, true, agentifaiHeaders);
          }
        }, {
          key: "deleteLogoutInternal",
          value: function deleteLogoutInternal(serviceUrl, fromAgentifai, agentifaiHeaders) {
            var _this88 = this;

            var headers = this.getHeaders(fromAgentifai, agentifaiHeaders);
            var endpoint = this.createUrl(serviceUrl);

            if (this.developmentMode) {
              console.log("DELETE " + endpoint);
              console.log("HEADERS: " + JSON.stringify(headers));
            }

            this.http.setDataSerializer("json");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.http["delete"](endpoint, null, headers).then(function (resp) {
              if (resp && resp.data && !fromAgentifai) {
                return JSON.parse(resp.data);
              } else {
                return resp;
              }
            }, function (err) {
              _this88.utils.handleError({
                error: {
                  error: err
                }
              });

              throw err;
            }));
          }
        }, {
          key: "genericClearCookies",
          value: function genericClearCookies() {
            this.utils.APPClearTimeout();

            if (!this.env.isBrowser) {
              this.http.clearCookies();
            }
          }
        }, {
          key: "createUrl",
          value: function createUrl(endpoint) {
            return src_app_internal_internal_utils__WEBPACK_IMPORTED_MODULE_4__["InternalUtils"].getBaseUrl() + endpoint;
          }
        }]);

        return Api;
      }();

      Api.ctorParameters = function () {
        return [{
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]
        }, {
          type: src_app_services_environment_service_environment_service_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"]
        }, {
          type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]
        }];
      };

      Api = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], Api);
      /***/
    },

    /***/
    "ovxX": function ovxX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetCurrentCustomerContactsCommand", function () {
        return GetCurrentCustomerContactsCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetCurrentCustomerContactsCommand = /*#__PURE__*/function () {
        function GetCurrentCustomerContactsCommand(request, responseFactory) {
          _classCallCheck(this, GetCurrentCustomerContactsCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", "body\.contacts\.[^.]+\.(communicationMeans|contactType)(?:$|\W)"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetCurrentCustomerContactsCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this89 = this;

            var headers = this.request.getHeaders();
            return service.getCustomerContacts(headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this89.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this89.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetCurrentCustomerContactsCommand;
      }();
      /***/

    },

    /***/
    "pLv3": function pLv3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentifaiResponse", function () {
        return AgentifaiResponse;
      });

      var AgentifaiResponse = function AgentifaiResponse(requestId, success, result) {
        _classCallCheck(this, AgentifaiResponse);

        this.requestId = requestId;
        this.success = success;
        this.result = result;
      };
      /***/

    },

    /***/
    "pTIB": function pTIB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssistantUtilsService", function () {
        return AssistantUtilsService;
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


      var src_app_services_environment_service_environment_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/environment-service/environment-service.service */
      "oUY6");
      /* harmony import */


      var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/storage/storage.service */
      "E2f4");

      var AssistantUtilsService = /*#__PURE__*/function () {
        function AssistantUtilsService(environment, storage) {
          _classCallCheck(this, AssistantUtilsService);

          this.environment = environment;
          this.storage = storage;
        }

        _createClass(AssistantUtilsService, [{
          key: "resetDefaultConfig",
          value: function resetDefaultConfig() {
            var config = this.getDefaultAssistantConfig();
            return this.setConfig(config.apiUrl, config.apiKey, config.settings);
          }
        }, {
          key: "getConfig",
          value: function getConfig() {
            var apiUrl = this.getApiUrl();
            var apiKey = this.getApiKey();
            var settings = this.getSettings();
            return Promise.all([apiUrl, apiKey, settings]);
          }
        }, {
          key: "setConfig",
          value: function setConfig(apiUrl, apiKey, settings) {
            return Promise.all([this.storage.setApiUrl(apiUrl), this.storage.setApiKey(apiKey), this.storage.setSettings(settings)]);
          }
        }, {
          key: "getApiUrl",
          value: function getApiUrl() {
            var _this90 = this;

            var defaultApiUrl = this.getDefaultAssistantConfig().apiUrl;
            return new Promise(function (resolve, _) {
              _this90.storage.getApiUrl().then(function (result) {
                if (result != null) {
                  resolve(result);
                } else {
                  resolve(defaultApiUrl);
                }
              })["catch"](function () {
                resolve(defaultApiUrl);
              });
            });
          }
        }, {
          key: "getApiKey",
          value: function getApiKey() {
            var _this91 = this;

            var defaultApiKey = this.getDefaultAssistantConfig().apiKey;
            return new Promise(function (resolve, _) {
              _this91.storage.getApiKey().then(function (result) {
                if (result != null) {
                  resolve(result);
                } else {
                  resolve(defaultApiKey);
                }
              })["catch"](function () {
                resolve(defaultApiKey);
              });
            });
          }
        }, {
          key: "getSettings",
          value: function getSettings() {
            var _this92 = this;

            var defaultSettings = this.getDefaultSettings();
            return new Promise(function (resolve, _) {
              _this92.storage.getSettings().then(function (result) {
                if (result != null) {
                  resolve(result);
                } else {
                  resolve(defaultSettings);
                }
              })["catch"](function () {
                resolve(defaultSettings);
              });
            });
          }
        }, {
          key: "getDefaultAssistantConfig",
          value: function getDefaultAssistantConfig() {
            return this.environment.getAgentifaiConfiguration();
          }
        }, {
          key: "getDefaultSettings",
          value: function getDefaultSettings() {
            return {
              defaultTheme: "light",
              themes: {
                light: "AssistantConfiguration.json",
                dark: "AssistantConfigurationDark.json"
              }
            };
          }
        }]);

        return AssistantUtilsService;
      }();

      AssistantUtilsService.ctorParameters = function () {
        return [{
          type: src_app_services_environment_service_environment_service_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"]
        }, {
          type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
        }];
      };

      AssistantUtilsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AssistantUtilsService);
      /***/
    },

    /***/
    "rqpB": function rqpB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetFrequentSEPATransfer", function () {
        return GetFrequentSEPATransfer;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetFrequentSEPATransfer = /*#__PURE__*/function () {
        function GetFrequentSEPATransfer(request, responseFactory) {
          _classCallCheck(this, GetFrequentSEPATransfer);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", "body\.(operationName|operationId|amount)(?:$|\W)"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetFrequentSEPATransfer, [{
          key: "execute",
          value: function execute(service) {
            var _this93 = this;

            var headers = this.request.getHeaders();
            var idFrequentOperation = this.request.getParameters()["idFrequentOperation"];
            return service.getFrequentSEPAoperation(headers, idFrequentOperation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this93.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this93.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetFrequentSEPATransfer;
      }();
      /***/

    },

    /***/
    "s94i": function s94i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetCallback", function () {
        return SetCallback;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var src_app_models_operation_request_customers_CallbackSolicitationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/operation/request/customers/CallbackSolicitationRequest */
      "96wc");

      var SetCallback = /*#__PURE__*/function () {
        function SetCallback(request, responseFactory) {
          _classCallCheck(this, SetCallback);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(SetCallback, [{
          key: "execute",
          value: function execute(service) {
            var _this94 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            return service.setCallback(headers, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this94.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this94.createErrorResponse(error);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_customers_CallbackSolicitationRequest__WEBPACK_IMPORTED_MODULE_3__["CallbackSolicitationRequest"]();
            request.availableDate = parameters.availableDate;
            request.availableTime = parameters.availableTime;
            request.coments = parameters.comments;
            request.destinationTelephone = parameters.destinationTelephone;
            request.destinationType = parameters.destinationType;
            request.period = parameters.period;
            request.subject = parameters.subject;
            request.subjectKey = parameters.subjectKey;

            if (parameters.subjectId) {
              request.subjectId = parameters.subjectId;
            }

            return request;
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return SetCallback;
      }();
      /***/

    },

    /***/
    "sd8+": function sd8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Scheduling", function () {
        return Scheduling;
      });

      var Scheduling = function Scheduling() {
        _classCallCheck(this, Scheduling);

        this.startDate = '';
        this.endDate = '';
        this.frequencyType = null;
        this.numberOfOperations = null;
      };
      /***/

    },

    /***/
    "sqgU": function sqgU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateTransferConsentForCgdAccountCommand", function () {
        return UpdateTransferConsentForCgdAccountCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_models_operation_request_cards_MBWayPartnerAcceptTransferCGDAccountRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/operation/request/cards/MBWayPartnerAcceptTransferCGDAccountRequest */
      "GIPb");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var UpdateTransferConsentForCgdAccountCommand = /*#__PURE__*/function () {
        function UpdateTransferConsentForCgdAccountCommand(request, responseFactory, requestFactory) {
          _classCallCheck(this, UpdateTransferConsentForCgdAccountCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.requestFactory = requestFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", "body.(operationId|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].scheduling(), ")")];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(UpdateTransferConsentForCgdAccountCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this95 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            return service.acceptTransferCGD(headers, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this95.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this95.createErrorResponse(error);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_cards_MBWayPartnerAcceptTransferCGDAccountRequest__WEBPACK_IMPORTED_MODULE_2__["MBWayPartnerAcceptTransferCGDAccountRequest"]();
            request.operationId = parseInt(parameters.operationId);
            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.acceptedTransferCGD = parameters.acceptedTransferCGD;
            request.scheduling = this.requestFactory.createScheduling(parameters);
            return request;
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return UpdateTransferConsentForCgdAccountCommand;
      }();
      /***/

    },

    /***/
    "tHMQ": function tHMQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetTermsAndConditionsConsentCommand", function () {
        return GetTermsAndConditionsConsentCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetTermsAndConditionsConsentCommand = /*#__PURE__*/function () {
        function GetTermsAndConditionsConsentCommand(request, responseFactory) {
          _classCallCheck(this, GetTermsAndConditionsConsentCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizablePathRegex = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetTermsAndConditionsConsentCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this96 = this;

            var headers = this.request.getHeaders();
            return service.getVoiceTreatmentConsent(headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this96.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this96.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizablePathRegex);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegex));
          }
        }]);

        return GetTermsAndConditionsConsentCommand;
      }();
      /***/

    },

    /***/
    "uTo4": function uTo4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CredentialUnlockAnswersRequest", function () {
        return CredentialUnlockAnswersRequest;
      });
      /* harmony import */


      var _GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../GenericOperationRequest */
      "AwYQ");

      var CredentialUnlockAnswersRequest = /*#__PURE__*/function (_GenericOperationRequ5) {
        _inherits(CredentialUnlockAnswersRequest, _GenericOperationRequ5);

        var _super13 = _createSuper(CredentialUnlockAnswersRequest);

        function CredentialUnlockAnswersRequest() {
          var _this97;

          _classCallCheck(this, CredentialUnlockAnswersRequest);

          _this97 = _super13.call(this);
          _this97.answers = [];
          _this97.contractNumber = "";
          return _this97;
        }

        return CredentialUnlockAnswersRequest;
      }(_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"]);
      /***/

    },

    /***/
    "vEtZ": function vEtZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetCardsGeneralData", function () {
        return GetCardsGeneralData;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/agentifai-utils */
      "EZ/N");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var src_app_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/agentifai/commands/cards/cards-utils */
      "lw/H");

      var GetCardsGeneralData = /*#__PURE__*/function () {
        function GetCardsGeneralData(request, responseFactory, transformer) {
          _classCallCheck(this, GetCardsGeneralData);

          this.request = request;
          this.responseFactory = responseFactory;
          this.transformer = transformer;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", "body\.(" + "((cardAccounts\.[^.]+)|defaultCardAccount)\.(" + "currency|type|cardCodeType|statementIssueDateDescription|" + "statementPaymentLimitDescription|productImageUrl|" + "cards.[^.]+.(".concat(src_app_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_4__["CardsUtils"].nonAnonymizedCardProperties, "))") + "|defaultCardAccountBalances\.availableCredit)"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetCardsGeneralData, [{
          key: "execute",
          value: function execute(service) {
            var _this98 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var cardAccountId = parameters["cardAccountId"];
            var targetCardOperationType = parameters["targetCardOperationType"];
            var omitTransactionsInResponse = parameters["omitTransactionsInResponse"];
            return service.getCardsGeneralData(headers, cardAccountId, targetCardOperationType, omitTransactionsInResponse).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this98.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this98.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            var transformedResponse = this.transformResponse(response);
            return this.createResponse(transformedResponse, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }, {
          key: "transformResponse",
          value: function transformResponse(response) {
            var data = src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_2__["AgentifaiUtils"].mapFromString(response.data);

            if (data != null) {
              data = this.transformer.addCardsGeneralDataProperties(data);
            }

            response.data = data;
            return response;
          }
        }]);

        return GetCardsGeneralData;
      }();
      /***/

    },

    /***/
    "vHy2": function vHy2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransferSEPARequest", function () {
        return TransferSEPARequest;
      });
      /* harmony import */


      var src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models/operation/request/GenericOperationRequest */
      "AwYQ");
      /* harmony import */


      var src_app_models_operation_Charges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/operation/Charges */
      "1wiW");

      var TransferSEPARequest = /*#__PURE__*/function (_src_app_models_opera6) {
        _inherits(TransferSEPARequest, _src_app_models_opera6);

        var _super14 = _createSuper(TransferSEPARequest);

        function TransferSEPARequest() {
          var _this99;

          _classCallCheck(this, TransferSEPARequest);

          _this99 = _super14.call(this);
          _this99.charges = [new src_app_models_operation_Charges__WEBPACK_IMPORTED_MODULE_1__["Charges"]()];
          _this99.sourceAccount = '';
          _this99.destinationAccount = '';
          _this99.amount = '';
          _this99.currency = '';
          _this99.description = '';
          _this99.additionalInfo = '';
          _this99.destinationName = '';
          _this99.finality = '';
          _this99.comment = '';
          _this99.urgent = false;
          _this99.commissionFee = null;
          _this99.stampDuty = null;
          _this99.warningCharge = null;
          _this99.warningVAT = null;
          _this99.chargesSum = null;
          _this99.chargesSumCurrency = '';
          return _this99;
        }

        _createClass(TransferSEPARequest, [{
          key: "getSourceAccount",
          get: function get() {
            return this.sourceAccount;
          }
        }, {
          key: "setSourceAccount",
          set: function set(sourceAccount) {
            this.sourceAccount = sourceAccount;
          }
        }, {
          key: "getDestinationAccount",
          get: function get() {
            return this.destinationAccount;
          }
        }, {
          key: "setDestinationAccount",
          set: function set(destinationAccount) {
            this.destinationAccount = destinationAccount;
          }
        }, {
          key: "getAmount",
          get: function get() {
            return this.amount;
          }
        }, {
          key: "setAmount",
          set: function set(amount) {
            this.amount = amount;
          }
        }, {
          key: "getCurrency",
          get: function get() {
            return this.currency;
          }
        }, {
          key: "setCurrency",
          set: function set(currency) {
            this.currency = currency;
          }
        }, {
          key: "getDescription",
          get: function get() {
            return this.description;
          }
        }, {
          key: "setDescription",
          set: function set(description) {
            this.description = description;
          }
        }, {
          key: "getAdditionalInfo",
          get: function get() {
            return this.additionalInfo;
          }
        }, {
          key: "setAdditionalInfo",
          set: function set(additionalInfo) {
            this.additionalInfo = additionalInfo;
          }
        }, {
          key: "getDestinationName",
          get: function get() {
            return this.destinationName;
          }
        }, {
          key: "setDestinationName",
          set: function set(destinationName) {
            this.destinationName = destinationName;
          }
        }, {
          key: "getFinality",
          get: function get() {
            return this.finality;
          }
        }, {
          key: "setFinality",
          set: function set(finality) {
            this.finality = finality;
          }
        }, {
          key: "getComment",
          get: function get() {
            return this.comment;
          }
        }, {
          key: "setComment",
          set: function set(comment) {
            this.comment = comment;
          }
        }, {
          key: "getUrgent",
          get: function get() {
            return this.urgent;
          }
        }, {
          key: "setUrgent",
          set: function set(urgent) {
            this.urgent = urgent;
          }
        }, {
          key: "getCommissionFee",
          get: function get() {
            return this.commissionFee;
          }
        }, {
          key: "setCommissionFee",
          set: function set(commissionFee) {
            this.commissionFee = commissionFee;
          }
        }, {
          key: "getStampDuty",
          get: function get() {
            return this.stampDuty;
          }
        }, {
          key: "setStampDuty",
          set: function set(stampDuty) {
            this.stampDuty = stampDuty;
          }
        }, {
          key: "getWarningCharge",
          get: function get() {
            return this.warningCharge;
          }
        }, {
          key: "setWarningCharge",
          set: function set(warningCharge) {
            this.warningCharge = warningCharge;
          }
        }, {
          key: "getWarningVAT",
          get: function get() {
            return this.warningVAT;
          }
        }, {
          key: "setWarningVAT",
          set: function set(warningVAT) {
            this.warningVAT = warningVAT;
          }
        }, {
          key: "getChargesSum",
          get: function get() {
            return this.chargesSum;
          }
        }, {
          key: "setChargesSum",
          set: function set(chargesSum) {
            this.chargesSum = chargesSum;
          }
        }, {
          key: "getChargesSumCurrency",
          get: function get() {
            return this.chargesSumCurrency;
          }
        }, {
          key: "setChargesSumCurrency",
          set: function set(chargesSumCurrency) {
            this.chargesSumCurrency = chargesSumCurrency;
          }
        }]);

        return TransferSEPARequest;
      }(src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"]);
      /***/

    },

    /***/
    "vVt6": function vVt6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetSmsTokenPhoneNumber", function () {
        return GetSmsTokenPhoneNumber;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetSmsTokenPhoneNumber = /*#__PURE__*/function () {
        function GetSmsTokenPhoneNumber(request, responseFactory) {
          _classCallCheck(this, GetSmsTokenPhoneNumber);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetSmsTokenPhoneNumber, [{
          key: "execute",
          value: function execute(service) {
            var _this100 = this;

            var headers = this.request.getHeaders();
            return service.getContactSmsToken(headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this100.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this100.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetSmsTokenPhoneNumber;
      }();
      /***/

    },

    /***/
    "vY5A": function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-home-module */
          "home-home-module").then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "ct+p")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'second-page',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | second-page-second-page-module */
          "second-page-second-page-module").then(__webpack_require__.bind(null,
          /*! ./second-page/second-page.module */
          "I8nY")).then(function (m) {
            return m.SecondPagePageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "vh/R": function vhR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardPaymentRequest", function () {
        return CardPaymentRequest;
      });
      /* harmony import */


      var _GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../GenericOperationRequest */
      "AwYQ");

      var CardPaymentRequest = /*#__PURE__*/function (_GenericOperationRequ6) {
        _inherits(CardPaymentRequest, _GenericOperationRequ6);

        var _super15 = _createSuper(CardPaymentRequest);

        function CardPaymentRequest() {
          _classCallCheck(this, CardPaymentRequest);

          return _super15.call(this);
        }

        return CardPaymentRequest;
      }(_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"]);
      /***/

    },

    /***/
    "vzdz": function vzdz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimulateMBWayAdhesionCommand", function () {
        return SimulateMBWayAdhesionCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_models_operation_request_cards_MBWayPartnerRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/operation/request/cards/MBWayPartnerRequest */
      "XSvm");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var SimulateMBWayAdhesionCommand = /*#__PURE__*/function () {
        function SimulateMBWayAdhesionCommand(request, responseFactory, requestFactory) {
          _classCallCheck(this, SimulateMBWayAdhesionCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.requestFactory = requestFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", "body.(operationId|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].scheduling(), ")")];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(SimulateMBWayAdhesionCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this101 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            return service.simulateAdhesionMbway(headers, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this101.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this101.createErrorResponse(error);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_cards_MBWayPartnerRequest__WEBPACK_IMPORTED_MODULE_2__["MBWayPartnerRequest"]();
            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.phoneNumber = parameters.phoneNumber;
            request.cardNumberMasked = parameters.cardNumberMasked;
            request.amount = parameters.amount;
            request.acceptedTransferCGD = parameters.acceptedTransferCGD;
            request.scheduling = this.requestFactory.createScheduling(parameters);
            return request;
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return SimulateMBWayAdhesionCommand;
      }();
      /***/

    },

    /***/
    "x5Zr": function x5Zr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetTransfersGeneralData", function () {
        return GetTransfersGeneralData;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/commands/accounts/accounts-utils */
      "il6X");
      /* harmony import */


      var src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/agentifai-utils */
      "EZ/N");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetTransfersGeneralData = /*#__PURE__*/function () {
        function GetTransfersGeneralData(request, responseFactory, accountsTransformer) {
          _classCallCheck(this, GetTransfersGeneralData);

          this.request = request;
          this.responseFactory = responseFactory;
          this.accountsTransformer = accountsTransformer;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", "body\.(" + "frequentOperations\.[^.]+\." + "(operationName|operationType|operationId|amount)" + "|accounts\.[^.]+\." + "(".concat(src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_2__["AccountsUtils"].nonAnonymizedAccountsProperties, ")") + ")(?:$|\W)"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetTransfersGeneralData, [{
          key: "execute",
          value: function execute(service) {
            var _this102 = this;

            var headers = this.request.getHeaders();
            return service.getTransferPageData(headers, false).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this102.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this102.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            var transformedResponse = this.transformResponse(response);
            return this.createResponse(transformedResponse, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }, {
          key: "transformResponse",
          value: function transformResponse(response) {
            var data = src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__["AgentifaiUtils"].mapFromString(response.data);

            if (data.accounts != null) {
              data.accounts = this.accountsTransformer.transformAccounts(data.accounts);
              response.data = data;
            }

            return response;
          }
        }]);

        return GetTransfersGeneralData;
      }();
      /***/

    },

    /***/
    "xvKO": function xvKO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimulateUpdateClientInformation", function () {
        return SimulateUpdateClientInformation;
      });
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_models_customers_updateClientInfo_UpdateClientInfoRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/customers/updateClientInfo/UpdateClientInfoRequest */
      "TiZ7");
      /* harmony import */


      var _update_client_information_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./update-client-information-utils */
      "ARNw");

      var SimulateUpdateClientInformation = /*#__PURE__*/function () {
        function SimulateUpdateClientInformation(request, requestFactory, responseFactory) {
          _classCallCheck(this, SimulateUpdateClientInformation);

          this.request = request;
          this.requestFactory = requestFactory;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexesPathsSuccess = ["headers.+", "status", "body.(operationId|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_0__["Anonymization"].scheduling(), ")")];
          this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_0__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(SimulateUpdateClientInformation, [{
          key: "execute",
          value: function execute(service) {
            var _this103 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            return service.simulateUpdateClientInfo(headers, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
              return _this103.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (resp) {
              return _this103.createErrorResponse(resp);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_customers_updateClientInfo_UpdateClientInfoRequest__WEBPACK_IMPORTED_MODULE_3__["UpdateClientInfoRequest"]();
            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.finalityQAList = this.requestFactory.createGenericKeyValueList(parameters.finalityQAList);

            if (parameters.address) {
              request.address = _update_client_information_utils__WEBPACK_IMPORTED_MODULE_4__["UpdateClientInformationUtils"].createAddress(parameters.address);
            }

            if (parameters.personal) {
              request.personal = _update_client_information_utils__WEBPACK_IMPORTED_MODULE_4__["UpdateClientInformationUtils"].createPersonal(parameters.personal);
            }

            if (parameters.attachments) {
              request.attachments = _update_client_information_utils__WEBPACK_IMPORTED_MODULE_4__["UpdateClientInformationUtils"].createAttachments(parameters.attachments);
            }

            if (parameters.professional) {
              request.professional = _update_client_information_utils__WEBPACK_IMPORTED_MODULE_4__["UpdateClientInformationUtils"].createProfessional(parameters.professional);
            }

            if (parameters.scheduling) {
              request.scheduling = this.requestFactory.createScheduling(parameters);
            }

            return request;
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
          }
        }]);

        return SimulateUpdateClientInformation;
      }();
      /***/

    },

    /***/
    "y8zl": function y8zl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExecuteUpdateClientInformation", function () {
        return ExecuteUpdateClientInformation;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var src_app_models_customers_updateClientInfo_UpdateClientInfoRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/customers/updateClientInfo/UpdateClientInfoRequest */
      "TiZ7");
      /* harmony import */


      var _update_client_information_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./update-client-information-utils */
      "ARNw");

      var ExecuteUpdateClientInformation = /*#__PURE__*/function () {
        function ExecuteUpdateClientInformation(request, requestFactory, responseFactory) {
          _classCallCheck(this, ExecuteUpdateClientInformation);

          this.request = request;
          this.requestFactory = requestFactory;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexesPathsSuccess = ["headers.+", "status", "body.(operationId|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling(), ")")];
          this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(ExecuteUpdateClientInformation, [{
          key: "execute",
          value: function execute(service) {
            var _this104 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            var credential = this.createCredentials(parameters);
            return service.executeUpdateClientInfo(headers, request, credential).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this104.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (resp) {
              return _this104.createErrorResponse(resp);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_customers_updateClientInfo_UpdateClientInfoRequest__WEBPACK_IMPORTED_MODULE_3__["UpdateClientInfoRequest"]();
            request.operationId = parameters.operationId;
            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.finalityQAList = this.requestFactory.createGenericKeyValueList(parameters.finalityQAList);

            if (parameters.address) {
              request.address = _update_client_information_utils__WEBPACK_IMPORTED_MODULE_4__["UpdateClientInformationUtils"].createAddress(parameters.address);
            }

            if (parameters.personal) {
              request.personal = _update_client_information_utils__WEBPACK_IMPORTED_MODULE_4__["UpdateClientInformationUtils"].createPersonal(parameters.personal);
            }

            if (parameters.attachments) {
              request.attachments = _update_client_information_utils__WEBPACK_IMPORTED_MODULE_4__["UpdateClientInformationUtils"].createAttachments(parameters.attachments);
            }

            if (parameters.professional) {
              request.professional = _update_client_information_utils__WEBPACK_IMPORTED_MODULE_4__["UpdateClientInformationUtils"].createProfessional(parameters.professional);
            }

            if (parameters.scheduling) {
              request.scheduling = this.requestFactory.createScheduling(parameters);
            }

            if (parameters.scheduling) {
              request.scheduling = this.requestFactory.createScheduling(parameters);
            }

            return request;
          }
        }, {
          key: "createCredentials",
          value: function createCredentials(parameters) {
            return this.requestFactory.createCredentials(parameters);
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
          }
        }]);

        return ExecuteUpdateClientInformation;
      }();
      /***/

    },

    /***/
    "ynWL": function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "z/oj": function zOj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExecuteMBWayAdhesionCommand", function () {
        return ExecuteMBWayAdhesionCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_models_operation_request_cards_MBWayPartnerRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/operation/request/cards/MBWayPartnerRequest */
      "XSvm");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var ExecuteMBWayAdhesionCommand = /*#__PURE__*/function () {
        function ExecuteMBWayAdhesionCommand(request, responseFactory, requestFactory) {
          _classCallCheck(this, ExecuteMBWayAdhesionCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.requestFactory = requestFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", "body.(operationId|operationStatus|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].scheduling(), ")")];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(ExecuteMBWayAdhesionCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this105 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            var credential = this.createCredentials(parameters);
            return service.executeAdhesionMbway(headers, request, credential).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this105.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this105.createErrorResponse(error);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_cards_MBWayPartnerRequest__WEBPACK_IMPORTED_MODULE_2__["MBWayPartnerRequest"]();
            request.operationId = parseInt(parameters.operationId);
            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.phoneNumber = parameters.phoneNumber;
            request.cardNumberMasked = parameters.cardNumberMasked;
            request.amount = parameters.amount;
            request.acceptedTransferCGD = parameters.acceptedTransferCGD;
            request.scheduling = this.requestFactory.createScheduling(parameters);
            return request;
          }
        }, {
          key: "createCredentials",
          value: function createCredentials(parameters) {
            return this.requestFactory.createCredentials(parameters);
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return ExecuteMBWayAdhesionCommand;
      }();
      /***/

    },

    /***/
    "zJBa": function zJBa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WidgetResponse", function () {
        return WidgetResponse;
      });

      var WidgetResponse = function WidgetResponse(data, nonAnonymizableRegexPaths) {
        _classCallCheck(this, WidgetResponse);

        this.data = data;
        this.nonAnonymizableRegexPaths = nonAnonymizableRegexPaths;
      };
      /***/

    },

    /***/
    "zQ9Q": function zQ9Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimulatePersonalLoanAdhesion", function () {
        return SimulatePersonalLoanAdhesion;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");
      /* harmony import */


      var src_app_models_operation_request_loans_ConsumerLoanAdhesionRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/operation/request/loans/ConsumerLoanAdhesionRequest */
      "4Rlb");
      /* harmony import */


      var src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/operation/request/loans/GenericPersonalCreditWorkElement */
      "3ZgE");

      var SimulatePersonalLoanAdhesion = /*#__PURE__*/function () {
        function SimulatePersonalLoanAdhesion(request, requestFactory, responseFactory) {
          _classCallCheck(this, SimulatePersonalLoanAdhesion);

          this.request = request;
          this.requestFactory = requestFactory;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", String.raw(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["^body.(operationId|success|errorMessage|simulationDate|amountMin|amountMax)$"], ["^body\\.(operationId|success|errorMessage|simulationDate|amountMin|amountMax)$"])))];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(SimulatePersonalLoanAdhesion, [{
          key: "execute",
          value: function execute(service) {
            var _this106 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            return service.simulateLoanRequest(headers, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this106.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this106.createErrorResponse(error);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_loans_ConsumerLoanAdhesionRequest__WEBPACK_IMPORTED_MODULE_3__["ConsumerLoanAdhesionRequest"]();

            if (parameters.operationId != null) {
              request.operationId = parseInt(parameters.operationId);
            }

            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.scheduling = this.requestFactory.createScheduling(parameters);
            request.currency = parameters.currency;
            request.targetAmount = parseInt(parameters.targetAmount);
            request.periodMonths = parseInt(parameters.periodMonths);
            request.includeDocuments = parameters.includeDocuments;
            request.fullKeyToAccount = parameters.fullKeyToAccount;

            if (parameters.profession != null) {
              var profession = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
              profession.cod = parameters.profession.cod;
              profession.description = parameters.profession.description;
              request.profissao = profession;
            }

            if (parameters.jobSector != null) {
              var jobSector = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
              jobSector.cod = parameters.jobSector.cod;
              jobSector.description = parameters.jobSector.description;
              request.sector = jobSector;
            }

            if (parameters.jobType != null) {
              var jobType = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
              jobType.cod = parameters.jobType.cod;
              jobType.description = parameters.jobType.description;
              request.trabalho = jobType;
            }

            if (parameters.contractType != null) {
              var contractType = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
              contractType.cod = parameters.contractType.cod;
              contractType.description = parameters.contractType.description;
              request.contrato = contractType;
            }

            if (parameters.jobServiceTime != null) {
              request.antiguidade = parseInt(parameters.jobServiceTime);
            }

            request.codigoIRS = parameters.irsCode;

            if (parameters.grossIncome != null) {
              request.rendimentoBruto = parseInt(parameters.grossIncome);
            }

            if (parameters.netIncome != null) {
              request.rendimentoLiquido = parseInt(parameters.netIncome);
            }

            if (parameters.monthlyExpenses != null) {
              request.encargosMensais = parseInt(parameters.monthlyExpenses);
            }

            if (parameters.householdExpenses != null) {
              request.despesasFamiliares = parseInt(parameters.householdExpenses);
            }

            if (parameters.householdMembers != null) {
              request.nrAgregado = parseInt(parameters.householdMembers);
            }

            request.prestacao = parameters.installment;
            request.defaultSimulation = parameters.defaultSimulation;
            return request;
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return SimulatePersonalLoanAdhesion;
      }();
      /***/

    },

    /***/
    "zS/o": function zSO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExecuteSEPATransferCommand", function () {
        return ExecuteSEPATransferCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_models_operation_request_transfers_TransferSEPARequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/operation/request/transfers/TransferSEPARequest */
      "vHy2");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var ExecuteSEPATransferCommand = /*#__PURE__*/function () {
        function ExecuteSEPATransferCommand(request, responseFactory, requestFactory) {
          _classCallCheck(this, ExecuteSEPATransferCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.requestFactory = requestFactory;
          this.nonAnonymizableRegexesPathsSuccess = ["headers.+", "status", "body.(operationId|operationStatus|charges[.].*|".concat(src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].scheduling(), ")")];
          this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(ExecuteSEPATransferCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this107 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var request = this.createRequest(parameters);
            var credential = this.createCredentials(parameters);
            return service.executeSepaTransfer(headers, request, credential).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this107.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (resp) {
              return _this107.createErrorResponse(resp);
            }));
          }
        }, {
          key: "createRequest",
          value: function createRequest(parameters) {
            var request = new src_app_models_operation_request_transfers_TransferSEPARequest__WEBPACK_IMPORTED_MODULE_2__["TransferSEPARequest"]();
            request.operationId = parameters.operationId;
            request.forceDuplicateOperation = parameters.forceDuplicateOperation;
            request.sourceAccount = parameters.sourceAccount;
            request.destinationAccount = parameters.destinationAccount;
            request.amount = parameters.amount;
            request.currency = parameters.currency;
            request.description = parameters.description;
            request.destinationName = parameters.destinationName;
            request.urgent = parameters.urgent;
            request.charges = parameters.charges;
            request.commissionFee = parseInt(parameters.commissionFee);
            request.stampDuty = parseInt(parameters.stampDuty);
            request.warningCharge = parseInt(parameters.warningCharge);
            request.warningVAT = parseInt(parameters.warningVAT);
            request.chargesSum = parseInt(parameters.chargesSum);
            request.scheduling = this.requestFactory.createScheduling(parameters);
            return request;
          }
        }, {
          key: "createCredentials",
          value: function createCredentials(parameters) {
            return this.requestFactory.createCredentials(parameters);
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
          }
        }]);

        return ExecuteSEPATransferCommand;
      }();
      /***/

    },

    /***/
    "zUnb": function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zZvH": function zZvH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SendOperationProofCommand", function () {
        return SendOperationProofCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_models_operation_OperationProofByEmailRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/operation/OperationProofByEmailRequest */
      "LT4J");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var SendOperationProofCommand = /*#__PURE__*/function () {
        function SendOperationProofCommand(request, responseFactory) {
          _classCallCheck(this, SendOperationProofCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(SendOperationProofCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this108 = this;

            var headers = this.request.getHeaders();
            var parameters = this.request.getParameters();
            var operationId = Number(parameters["operationId"]);
            var proofRequest = this.createOperationProofRequest(parameters);
            return service.sendOperationProofByEmail(headers, operationId, proofRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this108.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this108.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }, {
          key: "createOperationProofRequest",
          value: function createOperationProofRequest(parameters) {
            var proofRequest = new src_app_models_operation_OperationProofByEmailRequest__WEBPACK_IMPORTED_MODULE_2__["OperationProofByEmailRequest"]();
            proofRequest.targetEmail = parameters.targetEmail;
            proofRequest.targetCCEmail = parameters.targetCCEmail;
            proofRequest.emailSubject = parameters.emailSubject;
            return proofRequest;
          }
        }]);

        return SendOperationProofCommand;
      }();
      /***/

    },

    /***/
    "zjHV": function zjHV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetShowcaseCards", function () {
        return GetShowcaseCards;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetShowcaseCards = /*#__PURE__*/function () {
        function GetShowcaseCards(request, responseFactory) {
          _classCallCheck(this, GetShowcaseCards);

          this.request = request;
          this.responseFactory = responseFactory;
          this.nonAnonymizableRegexPathsSuccess = ["headers.+", "status", String.raw(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["(name|descriptionHtml|otherInfo)$"])))];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetShowcaseCards, [{
          key: "execute",
          value: function execute(service) {
            var _this109 = this;

            var headers = this.request.getHeaders();
            return service.getShowcaseCards(headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this109.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this109.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }]);

        return GetShowcaseCards;
      }();
      /***/

    },

    /***/
    "zn8P": function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "zw4M": function zw4M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetImmediateTransferAccountsCommand", function () {
        return GetImmediateTransferAccountsCommand;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/agentifai/commands/accounts/accounts-utils */
      "il6X");
      /* harmony import */


      var src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/agentifai/utils/agentifai-utils */
      "EZ/N");
      /* harmony import */


      var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/agentifai/utils/anonymization-utils */
      "Xntl");

      var GetImmediateTransferAccountsCommand = /*#__PURE__*/function () {
        function GetImmediateTransferAccountsCommand(request, responseFactory, transformer) {
          _classCallCheck(this, GetImmediateTransferAccountsCommand);

          this.request = request;
          this.responseFactory = responseFactory;
          this.transformer = transformer;
          this.nonAnonymizableRegexesPathsuccess = ["headers.+", "status", "body\.(" + "defaultAccount.(".concat(src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_2__["AccountsUtils"].nonAnonymizedAccountsProperties, ")") + "|accounts.[^.]+.(".concat(src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_2__["AccountsUtils"].nonAnonymizedAccountsProperties, ")") + ")(?:$|\W)"];
          this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__["Anonymization"].NonAnonymizablePathRegexDefault;
        }

        _createClass(GetImmediateTransferAccountsCommand, [{
          key: "execute",
          value: function execute(service) {
            var _this110 = this;

            var headers = this.request.getHeaders();
            return service.getAccountsForImmediateTransfers(headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) {
              return _this110.createSuccessResponse(resp);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              return _this110.createErrorResponse(error);
            }));
          }
        }, {
          key: "createResponse",
          value: function createResponse(response, success, nonAnonymizableRegexesPaths) {
            return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
          }
        }, {
          key: "createSuccessResponse",
          value: function createSuccessResponse(response) {
            var transformedResponse = this.transformResponse(response);
            return this.createResponse(transformedResponse, true, this.nonAnonymizableRegexesPathsuccess);
          }
        }, {
          key: "createErrorResponse",
          value: function createErrorResponse(errorResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
          }
        }, {
          key: "transformResponse",
          value: function transformResponse(response) {
            var data = src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__["AgentifaiUtils"].mapFromString(response.data);

            if (data.defaultAccount != null && data.accounts != null) {
              data.accounts = this.transformer.transformAccounts(data.accounts);
              data.defaultAccount = this.transformer.transformAccount(data.defaultAccount);
              response.data = data;
            }

            return response;
          }
        }]);

        return GetImmediateTransferAccountsCommand;
      }();
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map