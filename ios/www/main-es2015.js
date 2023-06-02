(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+OAk":
/*!************************************************!*\
  !*** ./src/app/models/operation/Credential.ts ***!
  \************************************************/
/*! exports provided: Credential */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Credential", function() { return Credential; });
class Credential {
}


/***/ }),

/***/ "+n3k":
/*!**************************************************************************!*\
  !*** ./src/app/agentifai/commands/cards/payment/execute-card-payment.ts ***!
  \**************************************************************************/
/*! exports provided: ExecuteCardPaymentCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuteCardPaymentCommand", function() { return ExecuteCardPaymentCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var src_app_models_operation_request_cards_CardPaymentRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/operation/request/cards/CardPaymentRequest */ "vh/R");




class ExecuteCardPaymentCommand {
    constructor(request, requestFactory, responseFactory) {
        this.request = request;
        this.requestFactory = requestFactory;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexesPathsSuccess = [
            "headers.+",
            "status",
            `body\.(operationId|operationStatus|charges.*|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
        ];
        this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        const credential = this.createCredentials(parameters);
        return service.executeCardPayment(headers, request, credential)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(resp => this.createErrorResponse(resp)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_cards_CardPaymentRequest__WEBPACK_IMPORTED_MODULE_3__["CardPaymentRequest"]();
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
    createCredentials(parameters) {
        return this.requestFactory.createCredentials(parameters);
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
    }
}


/***/ }),

/***/ "/Lgg":
/*!******************************************************************************!*\
  !*** ./src/app/agentifai/commands/cards/acquisition/init-new-credit-card.ts ***!
  \******************************************************************************/
/*! exports provided: InitNewCreditCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitNewCreditCard", function() { return InitNewCreditCard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var src_app_models_operation_request_cards_CardRequestRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/operation/request/cards/CardRequestRequest */ "cnaj");




class InitNewCreditCard {
    constructor(request, responseFactory, requestFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.requestFactory = requestFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            String.raw `^body\.(operationId|showCardCreditDocuments)$`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        return service.initNewCreditCard(headers, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_cards_CardRequestRequest__WEBPACK_IMPORTED_MODULE_3__["CardRequestRequest"]();
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
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "/gT+":
/*!*****************************************************************!*\
  !*** ./src/app/services/agentifai/agentifai-manager.service.ts ***!
  \*****************************************************************/
/*! exports provided: AgentifaiManagerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentifaiManagerProvider", function() { return AgentifaiManagerProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_agentifai_models_agentifai_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/models/agentifai-response */ "pLv3");
/* harmony import */ var src_app_agentifai_models_agentifai_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/models/agentifai-request */ "nYpB");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/agentifai/utils/agentifai-utils */ "EZ/N");
/* harmony import */ var src_app_services_agentifai_agentifai_command_factory_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/agentifai/agentifai-command-factory.service */ "HTOI");
/* harmony import */ var src_app_services_agentifai_agentifai_services_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/agentifai/agentifai-services.service */ "JxHx");
var AgentifaiManagerProvider_1;









let AgentifaiManagerProvider = AgentifaiManagerProvider_1 = class AgentifaiManagerProvider {
    constructor(service, commandsFactory) {
        this.service = service;
        this.commandsFactory = commandsFactory;
    }
    executeWidgetRequest(data) {
        const request = this.createRequest(data);
        const commandValue = request.data[AgentifaiManagerProvider_1.commandKey];
        const commandType = commandValue;
        const command = this.commandsFactory.createCommand(commandType, request);
        try {
            return this.executeCommand(command, request.id);
        }
        catch (error) {
            return this.handleError(request.id, error.toString());
        }
    }
    executeCommand(command, requestId) {
        return command.execute(this.service)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(result => this.createSuccessResponse(requestId, result)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => this.handleError(requestId, error)));
    }
    createSuccessResponse(requestId, response) {
        const json = src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_6__["AgentifaiUtils"].mapFromAny(response);
        return new src_app_agentifai_models_agentifai_response__WEBPACK_IMPORTED_MODULE_2__["AgentifaiResponse"](requestId, true, json);
    }
    createFailedResponse(requestId, errorResponse) {
        const json = src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_6__["AgentifaiUtils"].mapFromAny(errorResponse);
        return new src_app_agentifai_models_agentifai_response__WEBPACK_IMPORTED_MODULE_2__["AgentifaiResponse"](requestId, false, json);
    }
    handleError(requestId, error) {
        const errorResponse = this.createFailedResponse(requestId, error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorResponse);
    }
    createRequest(data) {
        const id = data["requestId"];
        delete data["requestId"];
        return new src_app_agentifai_models_agentifai_request__WEBPACK_IMPORTED_MODULE_3__["AgentifaiRequest"](id, data);
    }
};
AgentifaiManagerProvider.commandKey = "requestType";
AgentifaiManagerProvider.ctorParameters = () => [
    { type: src_app_services_agentifai_agentifai_services_service__WEBPACK_IMPORTED_MODULE_8__["AgentifaiServicesProvider"] },
    { type: src_app_services_agentifai_agentifai_command_factory_service__WEBPACK_IMPORTED_MODULE_7__["AgentifaiCommandFactoryService"] }
];
AgentifaiManagerProvider = AgentifaiManagerProvider_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AgentifaiManagerProvider);



/***/ }),

/***/ "/tM9":
/*!*****************************************************************************************!*\
  !*** ./src/app/agentifai/commands/terms-and-conditions/consent-terms-and-conditions.ts ***!
  \*****************************************************************************************/
/*! exports provided: ConsentTermsAndConditionsCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsentTermsAndConditionsCommand", function() { return ConsentTermsAndConditionsCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_models_operation_request_devices_VoiceTreatmentConsentRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/operation/request/devices/VoiceTreatmentConsentRequest */ "c1BC");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");




class ConsentTermsAndConditionsCommand {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizablePathRegex = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const request = new src_app_models_operation_request_devices_VoiceTreatmentConsentRequest__WEBPACK_IMPORTED_MODULE_2__["VoiceTreatmentConsentRequest"]();
        return service.addVoiceTreatmentConsent(headers, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizablePathRegex);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegex));
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/filipepereira/Agentifai/projects/mobile/ionic/client-assistant-integration-app/projects/cgd/src/main.ts */"zUnb");


/***/ }),

/***/ "0K33":
/*!****************************************************************************!*\
  !*** ./src/app/agentifai/commands/loans/get-personal-loan-general-data.ts ***!
  \****************************************************************************/
/*! exports provided: GetPersonalLoanGeneralData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPersonalLoanGeneralData", function() { return GetPersonalLoanGeneralData; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/agentifai-utils */ "EZ/N");
/* harmony import */ var src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/agentifai/commands/accounts/accounts-utils */ "il6X");





class GetPersonalLoanGeneralData {
    constructor(request, responseFactory, transformer) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.transformer = transformer;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            String.raw `^body\.(pedidoExistenteMes|validClient|client95_96|professionalInformation\..+|accounts\.[^.]+\.(${src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_4__["AccountsUtils"].nonAnonymizedAccountsProperties}))$`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        return service.getConsumerLoanAdhesionGeneralData(headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        var transformedResponse = this.transformResponse(response);
        return this.createResponse(transformedResponse, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
    transformResponse(response) {
        const data = src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__["AgentifaiUtils"].mapFromString(response.data);
        if (data.accounts != null) {
            data.accounts = this.transformer.transformAccounts(data.accounts);
            response.data = data;
        }
        return response;
    }
}


/***/ }),

/***/ "0xVn":
/*!*******************************************************************************************************!*\
  !*** ./src/app/agentifai/commands/credentialsmanagement/matrixactivation/simulate-activate-matrix.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SimulateActivateMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulateActivateMatrix", function() { return SimulateActivateMatrix; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var _credentials_management_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../credentials-management-utils */ "G8L4");




class SimulateActivateMatrix {
    constructor(request, responseFactory, requestFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.requestFactory = requestFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            'headers.+',
            'status',
            `body\.(operationId|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        return service.simulateActivateMatrix(headers, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => this.createErrorResponse(error)));
    }
    createRequest(parameters) {
        return _credentials_management_utils__WEBPACK_IMPORTED_MODULE_3__["CredentialsManagementUtils"].createMatrixActivateSimExe(parameters, this.requestFactory);
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "13TP":
/*!****************************************************************************!*\
  !*** ./src/app/models/operation/request/payments/ServicePaymentRequest.ts ***!
  \****************************************************************************/
/*! exports provided: ServicePaymentRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePaymentRequest", function() { return ServicePaymentRequest; });
/* harmony import */ var src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/operation/request/GenericOperationRequest */ "AwYQ");

class ServicePaymentRequest extends src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"] {
    constructor() {
        super();
    }
}


/***/ }),

/***/ "1Orp":
/*!*********************************************************************!*\
  !*** ./src/app/agentifai/commands/accounts/get-account-balances.ts ***!
  \*********************************************************************/
/*! exports provided: GetAccountBalance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAccountBalance", function() { return GetAccountBalance; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetAccountBalance {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            "body\.(accountCurrency|accountBalancesList\.[^.]+\.currency)(?:$|\W)"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const fullAccountKey = this.request.getParameters()["fullAccountKey"];
        return service.getAccountBalance(headers, fullAccountKey)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "1wiW":
/*!*********************************************!*\
  !*** ./src/app/models/operation/Charges.ts ***!
  \*********************************************/
/*! exports provided: Charges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Charges", function() { return Charges; });
class Charges {
    constructor() {
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
    }
}


/***/ }),

/***/ "3ZgE":
/*!************************************************************************************!*\
  !*** ./src/app/models/operation/request/loans/GenericPersonalCreditWorkElement.ts ***!
  \************************************************************************************/
/*! exports provided: GenericPersonalCreditWorkElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericPersonalCreditWorkElement", function() { return GenericPersonalCreditWorkElement; });
class GenericPersonalCreditWorkElement {
    constructor() {
        this.cod = "",
            this.description = "";
    }
}


/***/ }),

/***/ "3hTJ":
/*!*********************************************************************!*\
  !*** ./src/app/agentifai/commands/callback/get-customer-manager.ts ***!
  \*********************************************************************/
/*! exports provided: GetCustomerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCustomerManager", function() { return GetCustomerManager; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetCustomerManager {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            String.raw `^body\.serviceModel$`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        return service.getCustomerManager(headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "3zAc":
/*!************************************************************************************!*\
  !*** ./src/app/agentifai/commands/cards/acquisition/get-card-adhesion-accounts.ts ***!
  \************************************************************************************/
/*! exports provided: GetCardAdhesionAccounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCardAdhesionAccounts", function() { return GetCardAdhesionAccounts; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/agentifai-utils */ "EZ/N");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");




class GetCardAdhesionAccounts {
    constructor(request, responseFactory, transformer) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.transformer = transformer;
        this.nonAnonymizableRegexPathsSuccess = [
            'headers.+',
            'status'
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        return service.getCardAdhesionAccounts(headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        const transformedResponse = this.transformResponse(response);
        return this.createResponse(transformedResponse, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
    transformResponse(response) {
        const data = src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_2__["AgentifaiUtils"].mapFromString(response.data);
        if (data.defaultAccount != null && data.accounts != null) {
            data.accounts = this.transformer.transformAccounts(data.accounts);
            data.defaultAccount = this.transformer.transformAccount(data.defaultAccount);
            response.data = data;
        }
        return response;
    }
}


/***/ }),

/***/ "4+i+":
/*!**************************************************************************************************************!*\
  !*** ./src/app/agentifai/commands/customers/update-client-information/get-update-client-information-list.ts ***!
  \**************************************************************************************************************/
/*! exports provided: GetUpdateClientInformationList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUpdateClientInformationList", function() { return GetUpdateClientInformationList; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetUpdateClientInformationList {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            "body.*"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const id = this.request.getParameters().id;
        return service.getUpdateClientListField(headers, id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "4OU7":
/*!*********************************************************************************!*\
  !*** ./src/app/agentifai/commands/payments/services/execute-service-payment.ts ***!
  \*********************************************************************************/
/*! exports provided: ExecuteServicePaymentCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuteServicePaymentCommand", function() { return ExecuteServicePaymentCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_models_operation_request_payments_ServicePaymentRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/operation/request/payments/ServicePaymentRequest */ "13TP");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");




class ExecuteServicePaymentCommand {
    constructor(request, responseFactory, requestFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.requestFactory = requestFactory;
        this.nonAnonymizablePathRegex = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        const credential = this.createCredentials(parameters);
        return service.executeServicePayment(headers, request, credential)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(resp => this.createErrorResponse(resp)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_payments_ServicePaymentRequest__WEBPACK_IMPORTED_MODULE_2__["ServicePaymentRequest"]();
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
    createCredentials(parameters) {
        return this.requestFactory.createCredentials(parameters);
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizablePathRegex);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegex));
    }
}


/***/ }),

/***/ "4Rlb":
/*!*******************************************************************************!*\
  !*** ./src/app/models/operation/request/loans/ConsumerLoanAdhesionRequest.ts ***!
  \*******************************************************************************/
/*! exports provided: ConsumerLoanAdhesionRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumerLoanAdhesionRequest", function() { return ConsumerLoanAdhesionRequest; });
/* harmony import */ var _GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GenericOperationRequest */ "AwYQ");

class ConsumerLoanAdhesionRequest extends _GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"] {
}


/***/ }),

/***/ "65CJ":
/*!***************************************************************************************!*\
  !*** ./src/app/agentifai/commands/cards/acquisition/get-showcase-product-document.ts ***!
  \***************************************************************************************/
/*! exports provided: GetShowcaseProductDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetShowcaseProductDocument", function() { return GetShowcaseProductDocument; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetShowcaseProductDocument {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const productCode = parameters.productCode;
        const docType = parameters.docType;
        return service.getShowcaseProductDocument(headers, productCode, docType)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "6SY+":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/agentifai/commands/customers/update-client-information/get-update-client-information-address.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: GetUpdateClientInformationAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUpdateClientInformationAddress", function() { return GetUpdateClientInformationAddress; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetUpdateClientInformationAddress {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            "body.expirado"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        return service.getUpdateClientInfoAddress(headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "7WAv":
/*!***********************************************************!*\
  !*** ./src/app/models/cardMatrix/MatrixActivateSimExe.ts ***!
  \***********************************************************/
/*! exports provided: MatrixActivateSimExe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixActivateSimExe", function() { return MatrixActivateSimExe; });
/* harmony import */ var _operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../operation/request/GenericOperationRequest */ "AwYQ");

class MatrixActivateSimExe extends _operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"] {
    constructor() {
        super();
        this.matrixReferenceNumber = '';
        this.hasNifCreds = false;
    }
}


/***/ }),

/***/ "7gY9":
/*!*****************************************************************************************!*\
  !*** ./src/app/models/operation/request/customers/GetContractNumberQuestionsRequest.ts ***!
  \*****************************************************************************************/
/*! exports provided: GetContractNumberQuestionsRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetContractNumberQuestionsRequest", function() { return GetContractNumberQuestionsRequest; });
class GetContractNumberQuestionsRequest {
    constructor() {
        this.nif = "";
        this.phoneNumber = "";
    }
}


/***/ }),

/***/ "8EHu":
/*!***************************************************************************!*\
  !*** ./src/app/agentifai/commands/cards/payment/simulate-card-payment.ts ***!
  \***************************************************************************/
/*! exports provided: SimulateCardPaymentCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulateCardPaymentCommand", function() { return SimulateCardPaymentCommand; });
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_models_operation_request_cards_CardPaymentRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/operation/request/cards/CardPaymentRequest */ "vh/R");




class SimulateCardPaymentCommand {
    constructor(request, requestFactory, responseFactory) {
        this.request = request;
        this.requestFactory = requestFactory;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexesPathsSuccess = [
            "headers.+",
            "status",
            `body\.(operationId|operationStatus|charges.*|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_0__["Anonymization"].scheduling()})`
        ];
        this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_0__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        return service.simulateCardPayment(headers, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(resp => this.createErrorResponse(resp)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_cards_CardPaymentRequest__WEBPACK_IMPORTED_MODULE_3__["CardPaymentRequest"]();
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
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
    }
}


/***/ }),

/***/ "8l7Y":
/*!*****************************************************************************!*\
  !*** ./src/app/agentifai/commands/unlock-credentials/unlock-credentials.ts ***!
  \*****************************************************************************/
/*! exports provided: UnlockCredentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnlockCredentials", function() { return UnlockCredentials; });
/* harmony import */ var src_app_models_operation_request_customers_CredentialUnlockAnswersRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/operation/request/customers/CredentialUnlockAnswersRequest */ "uTo4");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");




class UnlockCredentials {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexesPathsSuccess = [
            "headers.+",
            "status",
            "body\.(operationId|success)"
        ];
        this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        return service.credentialUnlockAnswers(headers, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(resp => this.createErrorResponse(resp)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_customers_CredentialUnlockAnswersRequest__WEBPACK_IMPORTED_MODULE_0__["CredentialUnlockAnswersRequest"]();
        request.answers = parameters.answers;
        request.contractNumber = parameters.contractNumber;
        request.operationId = parameters.operationId;
        return request;
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
    }
}


/***/ }),

/***/ "96wc":
/*!***********************************************************************************!*\
  !*** ./src/app/models/operation/request/customers/CallbackSolicitationRequest.ts ***!
  \***********************************************************************************/
/*! exports provided: CallbackSolicitationRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackSolicitationRequest", function() { return CallbackSolicitationRequest; });
class CallbackSolicitationRequest {
}


/***/ }),

/***/ "9Ygl":
/*!**************************************************************!*\
  !*** ./src/app/agentifai/models/agentifai-response-event.ts ***!
  \**************************************************************/
/*! exports provided: ResponseEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseEvent", function() { return ResponseEvent; });
class ResponseEvent {
    constructor(headers, status, body) {
        this.headers = headers;
        this.status = status;
        this.body = body;
    }
}


/***/ }),

/***/ "9p9f":
/*!**************************************************************************************!*\
  !*** ./src/app/agentifai/commands/payments/services/get-frequent-service-payment.ts ***!
  \**************************************************************************************/
/*! exports provided: GetFrequentServicePaymentCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFrequentServicePaymentCommand", function() { return GetFrequentServicePaymentCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetFrequentServicePaymentCommand {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            "body\.(operationName|operationId|amount)(?:$|\W)"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const idFrequentOperation = this.request.getParameters()["idFrequentOperation"];
        return service.getFrequentPaymentDetail(headers, String(idFrequentOperation))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "ANQa":
/*!******************************************************************************!*\
  !*** ./src/app/agentifai/commands/transfers/get-transfer-type-validation.ts ***!
  \******************************************************************************/
/*! exports provided: GetTransferTypeValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTransferTypeValidation", function() { return GetTransferTypeValidation; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetTransferTypeValidation {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPaths = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const targetAccount = this.request.getParameters()["targetAccount"];
        return service.getTransferType(headers, targetAccount)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPaths);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexPaths));
    }
}


/***/ }),

/***/ "ARNw":
/*!***********************************************************************************************************!*\
  !*** ./src/app/agentifai/commands/customers/update-client-information/update-client-information-utils.ts ***!
  \***********************************************************************************************************/
/*! exports provided: UpdateClientInformationUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateClientInformationUtils", function() { return UpdateClientInformationUtils; });
/* harmony import */ var src_app_models_customers_updateClientInfo_UpdateClientInfoRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/customers/updateClientInfo/UpdateClientInfoRequest */ "TiZ7");

class UpdateClientInformationUtils {
    static createAddress(parameters) {
        const address = new src_app_models_customers_updateClientInfo_UpdateClientInfoRequest__WEBPACK_IMPORTED_MODULE_0__["UpdateClientAddress"]();
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
    static createAttachments(parameters) {
        return parameters.map(object => {
            const attachment = new src_app_models_customers_updateClientInfo_UpdateClientInfoRequest__WEBPACK_IMPORTED_MODULE_0__["UpdateClientAttachment"]();
            attachment.name = object.name;
            attachment.document = object.document;
            attachment.extension = object.extension;
            return attachment;
        });
    }
    static createPersonal(parameters) {
        const personal = new src_app_models_customers_updateClientInfo_UpdateClientInfoRequest__WEBPACK_IMPORTED_MODULE_0__["UpdateClientPersonal"]();
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
    static createProfessional(parameters) {
        const professional = new src_app_models_customers_updateClientInfo_UpdateClientInfoRequest__WEBPACK_IMPORTED_MODULE_0__["UpdateClientProfessional"]();
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
}


/***/ }),

/***/ "AwYQ":
/*!*********************************************************************!*\
  !*** ./src/app/models/operation/request/GenericOperationRequest.ts ***!
  \*********************************************************************/
/*! exports provided: GenericOperationRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericOperationRequest", function() { return GenericOperationRequest; });
/* harmony import */ var src_app_models_operation_Scheduling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/operation/Scheduling */ "sd8+");

class GenericOperationRequest {
    constructor() {
        this.operationId = null;
        this.operationName = '';
        this.forceDuplicateOperation = false;
        this.scheduling = new src_app_models_operation_Scheduling__WEBPACK_IMPORTED_MODULE_0__["Scheduling"]();
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    assistantConfiguration: {
        apiUrl: "https://development.agentifai.com/widget-setup-data",
        apiKey: "eyJ0ZW5hbnRJZCI6ICJjZ2QiLCAiY2hhbm5lbElkIjogIkNnZFdpZGdldCJ9"
    },
    assistantConfigurationEnabled: true,
    endpoints: [
        { label: "development", baseUrl: "https://dev.agentifai.com:23007/" },
        { label: "staging-agentifai", baseUrl: "https://cgd-staging-client.agentifai.com:23007/" },
        { label: "cq-cgd", baseUrl: "https://qoba.cgd.pt/pceApi/rest/v1/" },
        { label: "production", baseUrl: "https://app.cgd.pt/pceApi/rest/v1/" }
    ]
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BoZz":
/*!***************************************************************************************************!*\
  !*** ./src/app/agentifai/commands/unlock-contract-number/get-contract-number-unlock-questions.ts ***!
  \***************************************************************************************************/
/*! exports provided: GetContractNumberUnlockQuestions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetContractNumberUnlockQuestions", function() { return GetContractNumberUnlockQuestions; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var src_app_models_operation_request_customers_GetContractNumberQuestionsRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/operation/request/customers/GetContractNumberQuestionsRequest */ "7gY9");




class GetContractNumberUnlockQuestions {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            "body\.(questions\.*)"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        return service.getContractNumberQuestions(headers, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_customers_GetContractNumberQuestionsRequest__WEBPACK_IMPORTED_MODULE_3__["GetContractNumberQuestionsRequest"]();
        request.nif = parameters.nif;
        request.phoneNumber = parameters.phoneNumber;
        return request;
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "C8/L":
/*!**********************************************************************************!*\
  !*** ./src/app/agentifai/commands/payments/services/simulate-service-payment.ts ***!
  \**********************************************************************************/
/*! exports provided: SimulateServicePaymentCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulateServicePaymentCommand", function() { return SimulateServicePaymentCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_models_operation_request_payments_ServicePaymentRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/operation/request/payments/ServicePaymentRequest */ "13TP");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");




class SimulateServicePaymentCommand {
    constructor(request, responseFactory, requestFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.requestFactory = requestFactory;
        this.nonAnonymizableRegexesPaths = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const request = this.createServicePaymentRequest();
        return service.simulateServicePayment(headers, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(resp => this.createErrorResponse(resp)));
    }
    createServicePaymentRequest() {
        const parameters = this.request.getParameters();
        let request = new src_app_models_operation_request_payments_ServicePaymentRequest__WEBPACK_IMPORTED_MODULE_2__["ServicePaymentRequest"]();
        request.sourceAccount = parameters.sourceAccount;
        request.entity = parameters.entity;
        request.reference = parameters.reference;
        request.amount = parameters.amount;
        request.operationName = "";
        request.forceDuplicateOperation = parameters.forceDuplicateOperation;
        request.scheduling = this.requestFactory.createScheduling(parameters);
        return request;
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexesPaths);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPaths));
    }
}


/***/ }),

/***/ "Cx/3":
/*!***************************************************************************************!*\
  !*** ./src/app/models/operation/request/customers/GetContractNumberAnswersRequest.ts ***!
  \***************************************************************************************/
/*! exports provided: GetContractNumberAnswersRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetContractNumberAnswersRequest", function() { return GetContractNumberAnswersRequest; });
class GetContractNumberAnswersRequest {
    constructor() {
        this.respostasUser = [];
        this.nif = "";
    }
}


/***/ }),

/***/ "DEGM":
/*!******************************************************************************************************************!*\
  !*** ./src/app/agentifai/commands/customers/update-client-information/get-update-client-information-personal.ts ***!
  \******************************************************************************************************************/
/*! exports provided: GetUpdateClientInformationPersonal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUpdateClientInformationPersonal", function() { return GetUpdateClientInformationPersonal; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetUpdateClientInformationPersonal {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            "body.expirado"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        return service.getUpdateClientInfoIdentification(headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "E2f4":
/*!*****************************************************!*\
  !*** ./src/app/services/storage/storage.service.ts ***!
  \*****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "e8h1");



let StorageService = class StorageService {
    constructor(storage) {
        this.storage = storage;
        this.apiUrlKey = "apiUrl";
        this.apiKeyKey = "apiKey";
        this.baseUrlKey = "baseUrl";
        this.settingsKey = "settings";
    }
    getApiUrl() {
        return this.get(this.apiUrlKey);
    }
    setApiUrl(apiUrl) {
        return this.set(this.apiUrlKey, apiUrl);
    }
    getApiKey() {
        return this.get(this.apiKeyKey);
    }
    setApiKey(apiKey) {
        return this.set(this.apiKeyKey, apiKey);
    }
    getbaseUrl() {
        return this.get(this.baseUrlKey);
    }
    setBaseUrl(baseUrl) {
        return this.set(this.baseUrlKey, baseUrl);
    }
    getSettings() {
        return this.get(this.settingsKey);
    }
    setSettings(settings) {
        return this.set(this.settingsKey, settings);
    }
    get(key) {
        return this.ready()
            .then(() => this.storage.get(key));
    }
    set(key, value) {
        return this.ready()
            .then(() => this.storage.set(key, value));
    }
    ready() {
        return this.storage.ready();
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ "EUKi":
/*!******************************************************************************************!*\
  !*** ./src/app/agentifai/commands/unlock-credentials/get-credential-unlock-questions.ts ***!
  \******************************************************************************************/
/*! exports provided: GetCredentialsUnlockQuestions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCredentialsUnlockQuestions", function() { return GetCredentialsUnlockQuestions; });
/* harmony import */ var src_app_models_operation_request_customers_CredentialUnlockQuestionsRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/operation/request/customers/CredentialUnlockQuestionsRequest */ "Fzy9");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");




class GetCredentialsUnlockQuestions {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            "body\.(operationId|questions\.*|passwordRegeneration|forceDuplicateOperation)"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        return service.getCredentialUnlockQuestions(headers, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => this.createErrorResponse(error)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_customers_CredentialUnlockQuestionsRequest__WEBPACK_IMPORTED_MODULE_0__["CredentialUnlockQuestionsRequest"]();
        request.contractNumber = parameters.contractNumber;
        request.phoneNumber = parameters.phoneNumber;
        return request;
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "EZ/N":
/*!****************************************************!*\
  !*** ./src/app/agentifai/utils/agentifai-utils.ts ***!
  \****************************************************/
/*! exports provided: AgentifaiUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentifaiUtils", function() { return AgentifaiUtils; });
class AgentifaiUtils {
    static mapFromString(data) {
        var json;
        try {
            json = JSON.parse(data);
        }
        catch (error) {
            json = this.mapFromAny(data);
        }
        return json;
    }
    static mapFromAny(data) {
        const dataStr = JSON.stringify(data);
        return JSON.parse(dataStr);
    }
    static convertToApiFormat(detectedValue) {
        const detectedValueWithDots = detectedValue.replace(",", ".");
        const result = parseFloat(detectedValueWithDots);
        const resultInCents = (result * 100).toFixed(0);
        const resultInApiFormat = resultInCents.toString();
        return resultInApiFormat;
    }
}


/***/ }),

/***/ "EpBD":
/*!*********************************************************************************************************!*\
  !*** ./src/app/agentifai/commands/payments/telecommunications/get-telecommunicaition-configurations.ts ***!
  \*********************************************************************************************************/
/*! exports provided: GetTelecommunicationConfigurationsCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTelecommunicationConfigurationsCommand", function() { return GetTelecommunicationConfigurationsCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetTelecommunicationConfigurationsCommand {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPaths = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        return service.getTelecomConfigurations(headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPaths);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexPaths));
    }
}


/***/ }),

/***/ "FcPO":
/*!***************************************************************************!*\
  !*** ./src/app/services/agentifai/agentifai-cards-transformer.service.ts ***!
  \***************************************************************************/
/*! exports provided: AgentifaiCardsTransformerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentifaiCardsTransformerService", function() { return AgentifaiCardsTransformerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let AgentifaiCardsTransformerService = class AgentifaiCardsTransformerService {
    addNewCardProperties(cards) {
        if (cards != null) {
            cards.forEach(card => {
                card.cardName = card.description != null ? card.description.split(" - ").reverse()[0] : null;
            });
        }
        return cards;
    }
    addCardsGeneralDataProperties(data) {
        var cardAccounts = data.cardAccounts;
        cardAccounts = this.addCardAccountsCardProperties(cardAccounts);
        var defaultCardAccount = data.defaultCardAccount;
        if (defaultCardAccount != null) {
            defaultCardAccount = this.addNewCardProperties(defaultCardAccount.cards);
        }
        return data;
    }
    addCardAccountsCardProperties(accounts) {
        accounts.forEach(account => {
            var cards = account.cards;
            account.cards = this.addNewCardProperties(cards);
        });
        return accounts;
    }
};
AgentifaiCardsTransformerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AgentifaiCardsTransformerService);



/***/ }),

/***/ "Fzy9":
/*!****************************************************************************************!*\
  !*** ./src/app/models/operation/request/customers/CredentialUnlockQuestionsRequest.ts ***!
  \****************************************************************************************/
/*! exports provided: CredentialUnlockQuestionsRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialUnlockQuestionsRequest", function() { return CredentialUnlockQuestionsRequest; });
class CredentialUnlockQuestionsRequest {
    constructor() {
        this.contractNumber = "";
        this.phoneNumber = "";
    }
}


/***/ }),

/***/ "G8L4":
/*!******************************************************************************************!*\
  !*** ./src/app/agentifai/commands/credentialsmanagement/credentials-management-utils.ts ***!
  \******************************************************************************************/
/*! exports provided: CredentialsManagementUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialsManagementUtils", function() { return CredentialsManagementUtils; });
/* harmony import */ var src_app_models_cardMatrix_MatrixActivateSimExe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/cardMatrix/MatrixActivateSimExe */ "7WAv");
/* harmony import */ var src_app_models_cardMatrix_MatrixRequisitionSimExe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/cardMatrix/MatrixRequisitionSimExe */ "cIA/");


class CredentialsManagementUtils {
    static createMatrixRequisitionSimExe(parameters, requestFactory) {
        const request = new src_app_models_cardMatrix_MatrixRequisitionSimExe__WEBPACK_IMPORTED_MODULE_1__["MatrixRequisitionSimExe"]();
        request.operationId = parseInt(parameters.operationId);
        request.forceDuplicateOperation = parameters.forceDuplicateOperation;
        request.operationName = '';
        request.scheduling = requestFactory.createScheduling(parameters);
        request.adressSequenceNumber = parseInt(parameters.addressSequenceNumber);
        request.motive = requestFactory.createGenericKeyValue(parameters["motive"]);
        return request;
    }
    static createMatrixActivateSimExe(parameters, requestFactory) {
        const request = new src_app_models_cardMatrix_MatrixActivateSimExe__WEBPACK_IMPORTED_MODULE_0__["MatrixActivateSimExe"]();
        request.operationId = parseInt(parameters.operationId);
        request.forceDuplicateOperation = parameters.forceDuplicateOperation;
        request.operationName = '';
        request.scheduling = requestFactory.createScheduling(parameters);
        request.matrixReferenceNumber = parameters.matrixReferenceNumber;
        request.hasNifCreds = parameters.hasNifCreds;
        return request;
    }
}


/***/ }),

/***/ "GI5K":
/*!*************************************************************************************************!*\
  !*** ./src/app/agentifai/commands/credentialsmanagement/matrixrequisition/get-matrix-config.ts ***!
  \*************************************************************************************************/
/*! exports provided: GetMatrixConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMatrixConfig", function() { return GetMatrixConfig; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetMatrixConfig {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            'headers.+',
            'status',
            String.raw `body\.((adressList\.[^.]+\.adressSequenceNumber)|motiveList\.[^.]+)`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        return service.matrixConfig(headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "GIPb":
/*!***********************************************************************************************!*\
  !*** ./src/app/models/operation/request/cards/MBWayPartnerAcceptTransferCGDAccountRequest.ts ***!
  \***********************************************************************************************/
/*! exports provided: MBWayPartnerAcceptTransferCGDAccountRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MBWayPartnerAcceptTransferCGDAccountRequest", function() { return MBWayPartnerAcceptTransferCGDAccountRequest; });
/* harmony import */ var src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/operation/request/GenericOperationRequest */ "AwYQ");

class MBWayPartnerAcceptTransferCGDAccountRequest extends src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"] {
}


/***/ }),

/***/ "Gowj":
/*!*******************************************************************************!*\
  !*** ./src/app/models/operation/request/transfers/TransferInternalRequest.ts ***!
  \*******************************************************************************/
/*! exports provided: TransferInternalRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferInternalRequest", function() { return TransferInternalRequest; });
/* harmony import */ var src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/operation/request/GenericOperationRequest */ "AwYQ");
/* harmony import */ var src_app_models_operation_Charges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/operation/Charges */ "1wiW");


class TransferInternalRequest extends src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"] {
    constructor() {
        super();
        this.charges = [new src_app_models_operation_Charges__WEBPACK_IMPORTED_MODULE_1__["Charges"]()];
        this.sourceAccount = '';
        this.destinationAccount = '';
        this.destinationAccountCurrency = '';
        this.amount = '';
        this.currency = '';
        this.descriptionForSourceAccount = '';
        this.descriptionForDestinationAccount = '';
        this.finality = '';
        this.comment = '';
    }
    get getSourceAccount() {
        return this.sourceAccount;
    }
    set setSourceAccount(sourceAccount) {
        this.sourceAccount = sourceAccount;
    }
    get getDestinationAccountAccount() {
        return this.destinationAccount;
    }
    set setDestinationAccountAccount(destinationAccount) {
        this.destinationAccount = destinationAccount;
    }
    get getDestinationAccountCurrency() {
        return this.destinationAccountCurrency;
    }
    set setDestinationAccountCurrency(destinationAccountCurrency) {
        this.destinationAccountCurrency = destinationAccountCurrency;
    }
    get getAmount() {
        return this.amount;
    }
    set setAmount(amount) {
        this.amount = amount;
    }
    get getCurrency() {
        return this.currency;
    }
    set setCurrency(currency) {
        this.currency = currency;
    }
    get getDescriptionForSourceAccount() {
        return this.descriptionForSourceAccount;
    }
    set setDescriptionForSourceAccount(descriptionForSourceAccount) {
        this.descriptionForSourceAccount = descriptionForSourceAccount;
    }
    get getdescriptionForDestinationAccount() {
        return this.descriptionForDestinationAccount;
    }
    set setdescriptionForDestinationAccount(descriptionForDestinationAccount) {
        this.descriptionForDestinationAccount = descriptionForDestinationAccount;
    }
    get getFinality() {
        return this.finality;
    }
    set setFinality(finality) {
        this.finality = finality;
    }
    get getComment() {
        return this.comment;
    }
    set setComment(comment) {
        this.comment = comment;
    }
}


/***/ }),

/***/ "GvD3":
/*!*******************************************************************!*\
  !*** ./src/app/agentifai/commands/content/disable-banner-page.ts ***!
  \*******************************************************************/
/*! exports provided: DisableBannerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisableBannerPage", function() { return DisableBannerPage; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class DisableBannerPage {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const pageName = parameters.pageName;
        return service.disableLandingPageBanner(headers, pageName)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "HPR3":
/*!*************************************************!*\
  !*** ./src/app/services/utils/utils.service.ts ***!
  \*************************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let UtilsService = class UtilsService {
    handleError({ error, isLogin = null, isFingerPrint = null }) { }
    APPSetTimeout() { }
    APPClearTimeout() { }
    resetCredentials() { }
};
UtilsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UtilsService);



/***/ }),

/***/ "HTOI":
/*!*************************************************************************!*\
  !*** ./src/app/services/agentifai/agentifai-command-factory.service.ts ***!
  \*************************************************************************/
/*! exports provided: AgentifaiCommandFactoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentifaiCommandFactoryService", function() { return AgentifaiCommandFactoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_agentifai_commands_commom_agentifai_command_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/commands/commom/agentifai-command-type */ "PZoT");
/* harmony import */ var src_app_agentifai_commands_payments_services_execute_service_payment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/commands/payments/services/execute-service-payment */ "4OU7");
/* harmony import */ var src_app_agentifai_commands_accounts_get_accounts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/agentifai/commands/accounts/get-accounts */ "Lx10");
/* harmony import */ var src_app_services_agentifai_agentifai_response_factory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/agentifai/agentifai-response-factory.service */ "LCUH");
/* harmony import */ var src_app_agentifai_commands_payments_services_get_frequent_service_payment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/agentifai/commands/payments/services/get-frequent-service-payment */ "9p9f");
/* harmony import */ var src_app_agentifai_commands_payments_get_payments_general_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/agentifai/commands/payments/get-payments-general-data */ "bt0b");
/* harmony import */ var src_app_agentifai_commands_operation_proof_get_operation_proof__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/agentifai/commands/operation-proof/get-operation-proof */ "Jrio");
/* harmony import */ var src_app_agentifai_commands_get_current_customer_contacts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/agentifai/commands/get-current-customer-contacts */ "ovxX");
/* harmony import */ var src_app_agentifai_commands_operation_proof_send_operation_proof__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/agentifai/commands/operation-proof/send-operation-proof */ "zZvH");
/* harmony import */ var src_app_agentifai_commands_payments_services_simulate_service_payment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/agentifai/commands/payments/services/simulate-service-payment */ "C8/L");
/* harmony import */ var src_app_agentifai_commands_payments_get_payments_entity__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/agentifai/commands/payments/get-payments-entity */ "bkYj");
/* harmony import */ var src_app_agentifai_commands_accounts_get_account_balances__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/agentifai/commands/accounts/get-account-balances */ "1Orp");
/* harmony import */ var src_app_agentifai_commands_accounts_get_transactions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/agentifai/commands/accounts/get-transactions */ "UR4D");
/* harmony import */ var src_app_agentifai_commands_transfers_internal_simulate_internal_transfer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/agentifai/commands/transfers/internal/simulate-internal-transfer */ "MBy1");
/* harmony import */ var src_app_services_agentifai_agentifai_request_factory_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/agentifai/agentifai-request-factory.service */ "ekNZ");
/* harmony import */ var src_app_agentifai_commands_transfers_internal_execute_internal_transfer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/agentifai/commands/transfers/internal/execute-internal-transfer */ "U4TL");
/* harmony import */ var src_app_agentifai_commands_transfers_sepa_execute_sepa_transfer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/agentifai/commands/transfers/sepa/execute-sepa-transfer */ "zS/o");
/* harmony import */ var src_app_agentifai_commands_transfers_sepa_simulate_sepa_transfer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/agentifai/commands/transfers/sepa/simulate-sepa-transfer */ "WQQq");
/* harmony import */ var src_app_agentifai_commands_transfers_immediate_execute_immediate_transfer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/agentifai/commands/transfers/immediate/execute-immediate-transfer */ "gI+7");
/* harmony import */ var src_app_agentifai_commands_transfers_immediate_simulate_immediate_transfer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/agentifai/commands/transfers/immediate/simulate-immediate-transfer */ "mxeL");
/* harmony import */ var src_app_agentifai_commands_transfers_get_transfer_type_validation__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/agentifai/commands/transfers/get-transfer-type-validation */ "ANQa");
/* harmony import */ var src_app_agentifai_commands_transfers_get_client_status__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/agentifai/commands/transfers/get-client-status */ "Vd28");
/* harmony import */ var src_app_agentifai_commands_transfers_get_transfer_calendar_restrictions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/agentifai/commands/transfers/get-transfer-calendar-restrictions */ "a+bK");
/* harmony import */ var src_app_agentifai_commands_transfers_get_transfers_general_data__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/agentifai/commands/transfers/get-transfers-general-data */ "x5Zr");
/* harmony import */ var src_app_agentifai_commands_transfers_internal_get_frequent_internal_transfer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/agentifai/commands/transfers/internal/get-frequent-internal-transfer */ "aTnY");
/* harmony import */ var src_app_agentifai_commands_transfers_sepa_get_frequent_sepa_transfer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/agentifai/commands/transfers/sepa/get-frequent-sepa-transfer */ "rqpB");
/* harmony import */ var src_app_agentifai_commands_unlock_credentials_get_credential_unlock_questions__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/agentifai/commands/unlock-credentials/get-credential-unlock-questions */ "EUKi");
/* harmony import */ var src_app_agentifai_commands_unlock_credentials_unlock_credentials__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/agentifai/commands/unlock-credentials/unlock-credentials */ "8l7Y");
/* harmony import */ var src_app_agentifai_commands_terms_and_conditions_get_terms_and_conditions_consent__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/app/agentifai/commands/terms-and-conditions/get-terms-and-conditions-consent */ "tHMQ");
/* harmony import */ var src_app_agentifai_commands_terms_and_conditions_consent_terms_and_conditions__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! src/app/agentifai/commands/terms-and-conditions/consent-terms-and-conditions */ "/tM9");
/* harmony import */ var src_app_services_agentifai_agentifai_accounts_transformer_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! src/app/services/agentifai/agentifai-accounts-transformer.service */ "MCMW");
/* harmony import */ var src_app_agentifai_commands_payments_telecommunications_get_telecommunicaition_configurations__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! src/app/agentifai/commands/payments/telecommunications/get-telecommunicaition-configurations */ "EpBD");
/* harmony import */ var src_app_agentifai_commands_payments_telecommunications_simulate_telecommunication_payment__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! src/app/agentifai/commands/payments/telecommunications/simulate-telecommunication-payment */ "n/kK");
/* harmony import */ var src_app_agentifai_commands_payments_telecommunications_execute_telecommunication_payment__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! src/app/agentifai/commands/payments/telecommunications/execute-telecommunication-payment */ "YARR");
/* harmony import */ var src_app_agentifai_commands_payments_telecommunications_get_frequent_telecommunication_payment__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! src/app/agentifai/commands/payments/telecommunications/get-frequent-telecommunication-payment */ "Rkud");
/* harmony import */ var src_app_agentifai_commands_mbway_get_mbway_cards__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! src/app/agentifai/commands/mbway/get-mbway-cards */ "HyTs");
/* harmony import */ var src_app_agentifai_commands_mbway_simulate_mbway_adhesion__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! src/app/agentifai/commands/mbway/simulate-mbway-adhesion */ "vzdz");
/* harmony import */ var src_app_agentifai_commands_mbway_execute_mbway_adhesion__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! src/app/agentifai/commands/mbway/execute-mbway-adhesion */ "z/oj");
/* harmony import */ var src_app_agentifai_commands_mbway_update_transfer_consent_for_cgd_account__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! src/app/agentifai/commands/mbway/update-transfer-consent-for-cgd-account */ "sqgU");
/* harmony import */ var src_app_agentifai_commands_transfers_immediate_get_immediate_transfer_phone_numbers__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! src/app/agentifai/commands/transfers/immediate/get-immediate-transfer-phone-numbers */ "gASa");
/* harmony import */ var src_app_agentifai_commands_transfers_immediate_get_immediate_transfer_accounts__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! src/app/agentifai/commands/transfers/immediate/get-immediate-transfer-accounts */ "zw4M");
/* harmony import */ var src_app_agentifai_commands_cards_get_payment_cards__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! src/app/agentifai/commands/cards/get-payment-cards */ "g2f/");
/* harmony import */ var src_app_agentifai_commands_cards_get_cards_general_data__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! src/app/agentifai/commands/cards/get-cards-general-data */ "vEtZ");
/* harmony import */ var src_app_agentifai_commands_cards_get_card_account_transactions__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! src/app/agentifai/commands/cards/get-card-account-transactions */ "UKJ5");
/* harmony import */ var src_app_services_agentifai_agentifai_cards_transformer_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! src/app/services/agentifai/agentifai-cards-transformer.service */ "FcPO");
/* harmony import */ var src_app_agentifai_commands_cards_payment_execute_card_payment__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! src/app/agentifai/commands/cards/payment/execute-card-payment */ "+n3k");
/* harmony import */ var src_app_agentifai_commands_cards_payment_simulate_card_payment__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! src/app/agentifai/commands/cards/payment/simulate-card-payment */ "8EHu");
/* harmony import */ var src_app_agentifai_commands_cards_get_sms_token_phone_number__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! src/app/agentifai/commands/cards/get-sms-token-phone-number */ "vVt6");
/* harmony import */ var src_app_agentifai_commands_cards_activation_activate_card__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! src/app/agentifai/commands/cards/activation/activate-card */ "R97l");
/* harmony import */ var src_app_agentifai_commands_callback_get_customer_manager__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! src/app/agentifai/commands/callback/get-customer-manager */ "3hTJ");
/* harmony import */ var src_app_agentifai_commands_callback_get_manager_callback_config__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! src/app/agentifai/commands/callback/get-manager-callback-config */ "RgOd");
/* harmony import */ var src_app_agentifai_commands_callback_get_manager_available_time__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! src/app/agentifai/commands/callback/get-manager-available-time */ "iy9M");
/* harmony import */ var src_app_agentifai_commands_callback_set_callback__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! src/app/agentifai/commands/callback/set-callback */ "s94i");
/* harmony import */ var src_app_agentifai_commands_loans_simulate_personal_loan__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! src/app/agentifai/commands/loans/simulate-personal-loan */ "OQS7");
/* harmony import */ var src_app_agentifai_commands_loans_get_personal_loan_general_data__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! src/app/agentifai/commands/loans/get-personal-loan-general-data */ "0K33");
/* harmony import */ var src_app_agentifai_commands_loans_simulate_personal_loan_adhesion__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! src/app/agentifai/commands/loans/simulate-personal-loan-adhesion */ "zQ9Q");
/* harmony import */ var src_app_agentifai_commands_loans_execute_personal_loan_adhesion__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! src/app/agentifai/commands/loans/execute-personal-loan-adhesion */ "eFPC");
/* harmony import */ var src_app_agentifai_commands_content_get_private_content__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! src/app/agentifai/commands/content/get-private-content */ "IqUE");
/* harmony import */ var src_app_agentifai_commands_content_disable_banner_page__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! src/app/agentifai/commands/content/disable-banner-page */ "GvD3");
/* harmony import */ var src_app_agentifai_commands_cards_acquisition_get_showcase_cards__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! src/app/agentifai/commands/cards/acquisition/get-showcase-cards */ "zjHV");
/* harmony import */ var src_app_agentifai_commands_cards_acquisition_get_showcase_product_document__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! src/app/agentifai/commands/cards/acquisition/get-showcase-product-document */ "65CJ");
/* harmony import */ var src_app_agentifai_commands_cards_acquisition_get_card_adhesion_accounts__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! src/app/agentifai/commands/cards/acquisition/get-card-adhesion-accounts */ "3zAc");
/* harmony import */ var src_app_agentifai_commands_cards_acquisition_get_card_adhesion_configurations__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! src/app/agentifai/commands/cards/acquisition/get-card-adhesion-configurations */ "Ys4l");
/* harmony import */ var src_app_agentifai_commands_cards_acquisition_simulate_card_adhesion__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! src/app/agentifai/commands/cards/acquisition/simulate-card-adhesion */ "P3RZ");
/* harmony import */ var src_app_agentifai_commands_cards_acquisition_init_new_credit_card__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! src/app/agentifai/commands/cards/acquisition/init-new-credit-card */ "/Lgg");
/* harmony import */ var src_app_agentifai_commands_cards_acquisition_execute_card_adhesion__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! src/app/agentifai/commands/cards/acquisition/execute-card-adhesion */ "apfW");
/* harmony import */ var src_app_agentifai_commands_cards_acquisition_get_showcase_characteristics__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! src/app/agentifai/commands/cards/acquisition/get-showcase-characteristics */ "S3cc");
/* harmony import */ var src_app_agentifai_commands_unlock_contract_number_unlock_contract_number__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! src/app/agentifai/commands/unlock-contract-number/unlock-contract-number */ "Vwa5");
/* harmony import */ var src_app_agentifai_commands_unlock_contract_number_get_contract_number_unlock_questions__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! src/app/agentifai/commands/unlock-contract-number/get-contract-number-unlock-questions */ "BoZz");
/* harmony import */ var src_app_agentifai_commands_customers_update_client_information_get_update_client_information_address__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! src/app/agentifai/commands/customers/update-client-information/get-update-client-information-address */ "6SY+");
/* harmony import */ var src_app_agentifai_commands_customers_update_client_information_get_update_client_information_list__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! src/app/agentifai/commands/customers/update-client-information/get-update-client-information-list */ "4+i+");
/* harmony import */ var src_app_agentifai_commands_customers_update_client_information_simulate_update_client_information__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! src/app/agentifai/commands/customers/update-client-information/simulate-update-client-information */ "xvKO");
/* harmony import */ var src_app_agentifai_commands_customers_update_client_information_execute_update_client_information__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! src/app/agentifai/commands/customers/update-client-information/execute-update-client-information */ "y8zl");
/* harmony import */ var src_app_agentifai_commands_customers_update_client_information_get_update_client_information_validity__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! src/app/agentifai/commands/customers/update-client-information/get-update-client-information-validity */ "R5IS");
/* harmony import */ var src_app_agentifai_commands_customers_update_client_information_get_update_client_information_professional__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! src/app/agentifai/commands/customers/update-client-information/get-update-client-information-professional */ "K9C8");
/* harmony import */ var src_app_agentifai_commands_customers_update_client_information_get_update_client_information_personal__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! src/app/agentifai/commands/customers/update-client-information/get-update-client-information-personal */ "DEGM");
/* harmony import */ var src_app_agentifai_commands_credentialsmanagement_get_credentials_management__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! src/app/agentifai/commands/credentialsmanagement/get-credentials-management */ "MjQc");
/* harmony import */ var src_app_agentifai_commands_credentialsmanagement_matrixrequisition_get_matrix_config__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! src/app/agentifai/commands/credentialsmanagement/matrixrequisition/get-matrix-config */ "GI5K");
/* harmony import */ var src_app_agentifai_commands_credentialsmanagement_matrixrequisition_simulate_matrix_requisition__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! src/app/agentifai/commands/credentialsmanagement/matrixrequisition/simulate-matrix-requisition */ "HXFE");
/* harmony import */ var src_app_agentifai_commands_credentialsmanagement_matrixrequisition_execute_matrix_requisition__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! src/app/agentifai/commands/credentialsmanagement/matrixrequisition/execute-matrix-requisition */ "K+8N");
/* harmony import */ var src_app_agentifai_commands_credentialsmanagement_matrixactivation_simulate_activate_matrix__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! src/app/agentifai/commands/credentialsmanagement/matrixactivation/simulate-activate-matrix */ "0xVn");
/* harmony import */ var src_app_agentifai_commands_credentialsmanagement_matrixactivation_execute_activate_matrix__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! src/app/agentifai/commands/credentialsmanagement/matrixactivation/execute-activate-matrix */ "RpFj");




















































































let AgentifaiCommandFactoryService = class AgentifaiCommandFactoryService {
    constructor(responseFactory, requestFactory, accountsTranformer, cardsTransformer) {
        this.responseFactory = responseFactory;
        this.requestFactory = requestFactory;
        this.accountsTranformer = accountsTranformer;
        this.cardsTransformer = cardsTransformer;
    }
    createCommand(commandType, request) {
        let command;
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
    }
    //Accounts
    createGetAccounts(request) {
        return new src_app_agentifai_commands_accounts_get_accounts__WEBPACK_IMPORTED_MODULE_4__["GetAccountsCommand"](request, this.responseFactory, this.accountsTranformer);
    }
    createGetAccountBalances(request) {
        return new src_app_agentifai_commands_accounts_get_account_balances__WEBPACK_IMPORTED_MODULE_13__["GetAccountBalance"](request, this.responseFactory);
    }
    createGetTransactions(request) {
        return new src_app_agentifai_commands_accounts_get_transactions__WEBPACK_IMPORTED_MODULE_14__["GetTransactions"](request, this.responseFactory);
    }
    //Services Payment
    createGetPaymentsEntity(request) {
        return new src_app_agentifai_commands_payments_get_payments_entity__WEBPACK_IMPORTED_MODULE_12__["GetPaymentsEntityCommand"](request, this.responseFactory);
    }
    createGetPaymentsGeneralData(request) {
        return new src_app_agentifai_commands_payments_get_payments_general_data__WEBPACK_IMPORTED_MODULE_7__["GetPaymentsGeneralData"](request, this.responseFactory, this.accountsTranformer);
    }
    createGetFrequentServicePayment(request) {
        return new src_app_agentifai_commands_payments_services_get_frequent_service_payment__WEBPACK_IMPORTED_MODULE_6__["GetFrequentServicePaymentCommand"](request, this.responseFactory);
    }
    createSimulateServicePayment(request) {
        return new src_app_agentifai_commands_payments_services_simulate_service_payment__WEBPACK_IMPORTED_MODULE_11__["SimulateServicePaymentCommand"](request, this.responseFactory, this.requestFactory);
    }
    createExecuteService(request) {
        return new src_app_agentifai_commands_payments_services_execute_service_payment__WEBPACK_IMPORTED_MODULE_3__["ExecuteServicePaymentCommand"](request, this.responseFactory, this.requestFactory);
    }
    createGetCurrentCustomerContacts(request) {
        return new src_app_agentifai_commands_get_current_customer_contacts__WEBPACK_IMPORTED_MODULE_9__["GetCurrentCustomerContactsCommand"](request, this.responseFactory);
    }
    //Telecommunications Payment
    createGetTelecommunicationConfigurations(request) {
        return new src_app_agentifai_commands_payments_telecommunications_get_telecommunicaition_configurations__WEBPACK_IMPORTED_MODULE_33__["GetTelecommunicationConfigurationsCommand"](request, this.responseFactory);
    }
    createSimulateTelecommunicationPayment(request) {
        return new src_app_agentifai_commands_payments_telecommunications_simulate_telecommunication_payment__WEBPACK_IMPORTED_MODULE_34__["SimulateTelecommunicationPaymentCommand"](request, this.requestFactory, this.responseFactory);
    }
    createExecuteTelecommunicationPayment(request) {
        return new src_app_agentifai_commands_payments_telecommunications_execute_telecommunication_payment__WEBPACK_IMPORTED_MODULE_35__["ExecuteTelecommunicationPaymentCommand"](request, this.requestFactory, this.responseFactory);
    }
    createGetFrequentTelecommunicationPayment(request) {
        return new src_app_agentifai_commands_payments_telecommunications_get_frequent_telecommunication_payment__WEBPACK_IMPORTED_MODULE_36__["GetFrequentTelecommunicationPaymentCommand"](request, this.responseFactory);
    }
    //Proofs
    createGetOperationProof(request) {
        return new src_app_agentifai_commands_operation_proof_get_operation_proof__WEBPACK_IMPORTED_MODULE_8__["GetOperationProofCommand"](request, this.responseFactory);
    }
    createSendOperationProof(request) {
        return new src_app_agentifai_commands_operation_proof_send_operation_proof__WEBPACK_IMPORTED_MODULE_10__["SendOperationProofCommand"](request, this.responseFactory);
    }
    //Transfers
    createSimulateInternalTransfer(request) {
        return new src_app_agentifai_commands_transfers_internal_simulate_internal_transfer__WEBPACK_IMPORTED_MODULE_15__["SimulateInternalTransferCommand"](request, this.responseFactory, this.requestFactory);
    }
    createExecuteInternalTransfer(request) {
        return new src_app_agentifai_commands_transfers_internal_execute_internal_transfer__WEBPACK_IMPORTED_MODULE_17__["ExecuteInternalTransferCommand"](request, this.responseFactory, this.requestFactory);
    }
    createSimulateSEPATransfer(request) {
        return new src_app_agentifai_commands_transfers_sepa_simulate_sepa_transfer__WEBPACK_IMPORTED_MODULE_19__["SimulateSEPATransferCommand"](request, this.responseFactory, this.requestFactory);
    }
    createExecuteSEPATransfer(request) {
        return new src_app_agentifai_commands_transfers_sepa_execute_sepa_transfer__WEBPACK_IMPORTED_MODULE_18__["ExecuteSEPATransferCommand"](request, this.responseFactory, this.requestFactory);
    }
    createSimulateImmediateTransferCommand(request) {
        return new src_app_agentifai_commands_transfers_immediate_simulate_immediate_transfer__WEBPACK_IMPORTED_MODULE_21__["SimulateImmediateTransferCommand"](request, this.responseFactory);
    }
    createExecuteImmediateTransferCommand(request) {
        return new src_app_agentifai_commands_transfers_immediate_execute_immediate_transfer__WEBPACK_IMPORTED_MODULE_20__["ExecuteImmediateTransferCommand"](request, this.responseFactory, this.requestFactory);
    }
    createGetTransferTypeValidation(request) {
        return new src_app_agentifai_commands_transfers_get_transfer_type_validation__WEBPACK_IMPORTED_MODULE_22__["GetTransferTypeValidation"](request, this.responseFactory);
    }
    createGeTransferCalendarRestrictions(request) {
        return new src_app_agentifai_commands_transfers_get_transfer_calendar_restrictions__WEBPACK_IMPORTED_MODULE_24__["GetTransferCalendarRestrictions"](request, this.responseFactory);
    }
    createGetClientStatus(request) {
        return new src_app_agentifai_commands_transfers_get_client_status__WEBPACK_IMPORTED_MODULE_23__["GetClientStatus"](request, this.responseFactory);
    }
    createGetTransfersGeneralData(request) {
        return new src_app_agentifai_commands_transfers_get_transfers_general_data__WEBPACK_IMPORTED_MODULE_25__["GetTransfersGeneralData"](request, this.responseFactory, this.accountsTranformer);
    }
    createGetFrequentInternalTransfer(request) {
        return new src_app_agentifai_commands_transfers_internal_get_frequent_internal_transfer__WEBPACK_IMPORTED_MODULE_26__["GetFrequentInternalTransfer"](request, this.responseFactory);
    }
    createGetFrequentSEPATransfer(request) {
        return new src_app_agentifai_commands_transfers_sepa_get_frequent_sepa_transfer__WEBPACK_IMPORTED_MODULE_27__["GetFrequentSEPATransfer"](request, this.responseFactory);
    }
    createGetImmediateTransferPhoneNumbers(request) {
        return new src_app_agentifai_commands_transfers_immediate_get_immediate_transfer_phone_numbers__WEBPACK_IMPORTED_MODULE_41__["GetImmediateTransferPhoneNumbersCommand"](request, this.responseFactory);
    }
    createGetImmediateTransferAccounts(request) {
        return new src_app_agentifai_commands_transfers_immediate_get_immediate_transfer_accounts__WEBPACK_IMPORTED_MODULE_42__["GetImmediateTransferAccountsCommand"](request, this.responseFactory, this.accountsTranformer);
    }
    //Terms and Conditions
    createGetTermsAndConditionsConsent(request) {
        return new src_app_agentifai_commands_terms_and_conditions_get_terms_and_conditions_consent__WEBPACK_IMPORTED_MODULE_30__["GetTermsAndConditionsConsentCommand"](request, this.responseFactory);
    }
    createConsentTermsAndConditions(request) {
        return new src_app_agentifai_commands_terms_and_conditions_consent_terms_and_conditions__WEBPACK_IMPORTED_MODULE_31__["ConsentTermsAndConditionsCommand"](request, this.responseFactory);
    }
    //Unlock Contract
    createGetCredentialUnlockQuestions(request) {
        return new src_app_agentifai_commands_unlock_credentials_get_credential_unlock_questions__WEBPACK_IMPORTED_MODULE_28__["GetCredentialsUnlockQuestions"](request, this.responseFactory);
    }
    createUnlockQuestions(request) {
        return new src_app_agentifai_commands_unlock_credentials_unlock_credentials__WEBPACK_IMPORTED_MODULE_29__["UnlockCredentials"](request, this.responseFactory);
    }
    //Unlock Contract Number
    createGetContractNumberUnlockQuestions(request) {
        return new src_app_agentifai_commands_unlock_contract_number_get_contract_number_unlock_questions__WEBPACK_IMPORTED_MODULE_70__["GetContractNumberUnlockQuestions"](request, this.responseFactory);
    }
    createUnlockContractNumber(request) {
        return new src_app_agentifai_commands_unlock_contract_number_unlock_contract_number__WEBPACK_IMPORTED_MODULE_69__["UnlockContractNumber"](request, this.responseFactory);
    }
    // MBWAY
    createGetMBWayCards(request) {
        return new src_app_agentifai_commands_mbway_get_mbway_cards__WEBPACK_IMPORTED_MODULE_37__["GetMBWayCardsCommand"](request, this.responseFactory);
    }
    createSimulateMBWayAdhesion(request) {
        return new src_app_agentifai_commands_mbway_simulate_mbway_adhesion__WEBPACK_IMPORTED_MODULE_38__["SimulateMBWayAdhesionCommand"](request, this.responseFactory, this.requestFactory);
    }
    createExecuteMBWayAdhesion(request) {
        return new src_app_agentifai_commands_mbway_execute_mbway_adhesion__WEBPACK_IMPORTED_MODULE_39__["ExecuteMBWayAdhesionCommand"](request, this.responseFactory, this.requestFactory);
    }
    createUpdateTransferConsentForCgdAccounts(request) {
        return new src_app_agentifai_commands_mbway_update_transfer_consent_for_cgd_account__WEBPACK_IMPORTED_MODULE_40__["UpdateTransferConsentForCgdAccountCommand"](request, this.responseFactory, this.requestFactory);
    }
    // Cards
    createGetPaymentCards(request) {
        return new src_app_agentifai_commands_cards_get_payment_cards__WEBPACK_IMPORTED_MODULE_43__["GetPaymentCards"](request, this.responseFactory, this.cardsTransformer);
    }
    createGetCardsGeneralData(request) {
        return new src_app_agentifai_commands_cards_get_cards_general_data__WEBPACK_IMPORTED_MODULE_44__["GetCardsGeneralData"](request, this.responseFactory, this.cardsTransformer);
    }
    createGetCardAccountTransactions(request) {
        return new src_app_agentifai_commands_cards_get_card_account_transactions__WEBPACK_IMPORTED_MODULE_45__["GetCardAccountTransactions"](request, this.responseFactory, this.cardsTransformer);
    }
    createSimulateCardPayment(request) {
        return new src_app_agentifai_commands_cards_payment_simulate_card_payment__WEBPACK_IMPORTED_MODULE_48__["SimulateCardPaymentCommand"](request, this.requestFactory, this.responseFactory);
    }
    createExecuteCardPayment(request) {
        return new src_app_agentifai_commands_cards_payment_execute_card_payment__WEBPACK_IMPORTED_MODULE_47__["ExecuteCardPaymentCommand"](request, this.requestFactory, this.responseFactory);
    }
    createActivateCard(request) {
        return new src_app_agentifai_commands_cards_activation_activate_card__WEBPACK_IMPORTED_MODULE_50__["ActivateCardCommand"](request, this.responseFactory);
    }
    createGetSmsTokenPhoneNumber(request) {
        return new src_app_agentifai_commands_cards_get_sms_token_phone_number__WEBPACK_IMPORTED_MODULE_49__["GetSmsTokenPhoneNumber"](request, this.responseFactory);
    }
    // Callback
    createGetCustomerManager(request) {
        return new src_app_agentifai_commands_callback_get_customer_manager__WEBPACK_IMPORTED_MODULE_51__["GetCustomerManager"](request, this.responseFactory);
    }
    createGetManagerCallbackConfig(request) {
        return new src_app_agentifai_commands_callback_get_manager_callback_config__WEBPACK_IMPORTED_MODULE_52__["GetManagerCallbackConfig"](request, this.responseFactory);
    }
    createGetManagerAvailableTime(request) {
        return new src_app_agentifai_commands_callback_get_manager_available_time__WEBPACK_IMPORTED_MODULE_53__["GetManagerAvailableTime"](request, this.responseFactory);
    }
    createSetCallback(request) {
        return new src_app_agentifai_commands_callback_set_callback__WEBPACK_IMPORTED_MODULE_54__["SetCallback"](request, this.responseFactory);
    }
    // Loans
    createSimulatePersonalLoan(request) {
        return new src_app_agentifai_commands_loans_simulate_personal_loan__WEBPACK_IMPORTED_MODULE_55__["SimulatePersonalLoan"](request, this.requestFactory, this.responseFactory);
    }
    createGetPersonalLoanGeneralData(request) {
        return new src_app_agentifai_commands_loans_get_personal_loan_general_data__WEBPACK_IMPORTED_MODULE_56__["GetPersonalLoanGeneralData"](request, this.responseFactory, this.accountsTranformer);
    }
    createSimulatePersonalLoanAdhesion(request) {
        return new src_app_agentifai_commands_loans_simulate_personal_loan_adhesion__WEBPACK_IMPORTED_MODULE_57__["SimulatePersonalLoanAdhesion"](request, this.requestFactory, this.responseFactory);
    }
    createExecutePersonalLoanAdhesion(request) {
        return new src_app_agentifai_commands_loans_execute_personal_loan_adhesion__WEBPACK_IMPORTED_MODULE_58__["ExecutePersonalLoanAdhesion"](request, this.requestFactory, this.responseFactory);
    }
    createGetPrivateContent(request) {
        return new src_app_agentifai_commands_content_get_private_content__WEBPACK_IMPORTED_MODULE_59__["GetPrivateContent"](request, this.responseFactory);
    }
    // Moratorium Form
    createDisableBannerPage(request) {
        return new src_app_agentifai_commands_content_disable_banner_page__WEBPACK_IMPORTED_MODULE_60__["DisableBannerPage"](request, this.responseFactory);
    }
    // Card acquisition
    createGetShowcaseCards(request) {
        return new src_app_agentifai_commands_cards_acquisition_get_showcase_cards__WEBPACK_IMPORTED_MODULE_61__["GetShowcaseCards"](request, this.responseFactory);
    }
    createGetShowcaseCharacteristics(request) {
        return new src_app_agentifai_commands_cards_acquisition_get_showcase_characteristics__WEBPACK_IMPORTED_MODULE_68__["GetShowcaseCharacteristics"](request, this.responseFactory);
    }
    createGetShowcaseProductDocument(request) {
        return new src_app_agentifai_commands_cards_acquisition_get_showcase_product_document__WEBPACK_IMPORTED_MODULE_62__["GetShowcaseProductDocument"](request, this.responseFactory);
    }
    createGetCardAdhesionAccounts(request) {
        return new src_app_agentifai_commands_cards_acquisition_get_card_adhesion_accounts__WEBPACK_IMPORTED_MODULE_63__["GetCardAdhesionAccounts"](request, this.responseFactory, this.accountsTranformer);
    }
    createGetCardAdhesionConfigurations(request) {
        return new src_app_agentifai_commands_cards_acquisition_get_card_adhesion_configurations__WEBPACK_IMPORTED_MODULE_64__["GetCardAdhesionConfigurations"](request, this.responseFactory);
    }
    createSimulateCardAdhesion(request) {
        return new src_app_agentifai_commands_cards_acquisition_simulate_card_adhesion__WEBPACK_IMPORTED_MODULE_65__["SimulateCardAdhesion"](request, this.responseFactory, this.requestFactory);
    }
    createInitNewCreditCard(request) {
        return new src_app_agentifai_commands_cards_acquisition_init_new_credit_card__WEBPACK_IMPORTED_MODULE_66__["InitNewCreditCard"](request, this.responseFactory, this.requestFactory);
    }
    createExecuteCardAdhesion(request) {
        return new src_app_agentifai_commands_cards_acquisition_execute_card_adhesion__WEBPACK_IMPORTED_MODULE_67__["ExecuteCardAdhesion"](request, this.responseFactory, this.requestFactory);
    }
    //Update Client Information
    createGetUpdateClientInformationAddress(request) {
        return new src_app_agentifai_commands_customers_update_client_information_get_update_client_information_address__WEBPACK_IMPORTED_MODULE_71__["GetUpdateClientInformationAddress"](request, this.responseFactory);
    }
    createGetUpdateClientInformationPersonal(request) {
        return new src_app_agentifai_commands_customers_update_client_information_get_update_client_information_personal__WEBPACK_IMPORTED_MODULE_77__["GetUpdateClientInformationPersonal"](request, this.responseFactory);
    }
    createGetUpdateClientInformationProfessional(request) {
        return new src_app_agentifai_commands_customers_update_client_information_get_update_client_information_professional__WEBPACK_IMPORTED_MODULE_76__["GetUpdateClientInformationProfessional"](request, this.responseFactory);
    }
    createGetUpdateClientInformationValidity(request) {
        return new src_app_agentifai_commands_customers_update_client_information_get_update_client_information_validity__WEBPACK_IMPORTED_MODULE_75__["GetUpdateClientInformationValidity"](request, this.responseFactory);
    }
    createGetUpdateClientInformationList(request) {
        return new src_app_agentifai_commands_customers_update_client_information_get_update_client_information_list__WEBPACK_IMPORTED_MODULE_72__["GetUpdateClientInformationList"](request, this.responseFactory);
    }
    createSimulateUpdateClientInformation(request) {
        return new src_app_agentifai_commands_customers_update_client_information_simulate_update_client_information__WEBPACK_IMPORTED_MODULE_73__["SimulateUpdateClientInformation"](request, this.requestFactory, this.responseFactory);
    }
    createExecuteUpdateClientInformation(request) {
        return new src_app_agentifai_commands_customers_update_client_information_execute_update_client_information__WEBPACK_IMPORTED_MODULE_74__["ExecuteUpdateClientInformation"](request, this.requestFactory, this.responseFactory);
    }
    createGetCredentialsManagement(request) {
        return new src_app_agentifai_commands_credentialsmanagement_get_credentials_management__WEBPACK_IMPORTED_MODULE_78__["GetCredentialsManagement"](request, this.responseFactory);
    }
    createGetMatrixConfig(request) {
        return new src_app_agentifai_commands_credentialsmanagement_matrixrequisition_get_matrix_config__WEBPACK_IMPORTED_MODULE_79__["GetMatrixConfig"](request, this.responseFactory);
    }
    createSimulateMatrixRequistion(request) {
        return new src_app_agentifai_commands_credentialsmanagement_matrixrequisition_simulate_matrix_requisition__WEBPACK_IMPORTED_MODULE_80__["SimulateMatrixRequisition"](request, this.responseFactory, this.requestFactory);
    }
    createExecuteMatrixRequisition(request) {
        return new src_app_agentifai_commands_credentialsmanagement_matrixrequisition_execute_matrix_requisition__WEBPACK_IMPORTED_MODULE_81__["ExecuteMatrixRequisition"](request, this.responseFactory, this.requestFactory);
    }
    createSimulateActivateMatrix(request) {
        return new src_app_agentifai_commands_credentialsmanagement_matrixactivation_simulate_activate_matrix__WEBPACK_IMPORTED_MODULE_82__["SimulateActivateMatrix"](request, this.responseFactory, this.requestFactory);
    }
    createExecuteActivateMatrix(request) {
        return new src_app_agentifai_commands_credentialsmanagement_matrixactivation_execute_activate_matrix__WEBPACK_IMPORTED_MODULE_83__["ExecuteActivateMatrix"](request, this.responseFactory, this.requestFactory);
    }
};
AgentifaiCommandFactoryService.ctorParameters = () => [
    { type: src_app_services_agentifai_agentifai_response_factory_service__WEBPACK_IMPORTED_MODULE_5__["AgentifaiResponseFactoryService"] },
    { type: src_app_services_agentifai_agentifai_request_factory_service__WEBPACK_IMPORTED_MODULE_16__["AgentifaiRequestFactoryService"] },
    { type: src_app_services_agentifai_agentifai_accounts_transformer_service__WEBPACK_IMPORTED_MODULE_32__["AgentifaiAccountsTransformerService"] },
    { type: src_app_services_agentifai_agentifai_cards_transformer_service__WEBPACK_IMPORTED_MODULE_46__["AgentifaiCardsTransformerService"] }
];
AgentifaiCommandFactoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AgentifaiCommandFactoryService);



/***/ }),

/***/ "HXFE":
/*!***********************************************************************************************************!*\
  !*** ./src/app/agentifai/commands/credentialsmanagement/matrixrequisition/simulate-matrix-requisition.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SimulateMatrixRequisition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulateMatrixRequisition", function() { return SimulateMatrixRequisition; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var _credentials_management_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../credentials-management-utils */ "G8L4");




class SimulateMatrixRequisition {
    constructor(request, responseFactory, requestFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.requestFactory = requestFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            'headers.+',
            'status',
            `body\.(operationId|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        return service.simulateMatrixRequisition(headers, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => this.createErrorResponse(error)));
    }
    createRequest(parameters) {
        return _credentials_management_utils__WEBPACK_IMPORTED_MODULE_3__["CredentialsManagementUtils"].createMatrixRequisitionSimExe(parameters, this.requestFactory);
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "HyTs":
/*!*************************************************************!*\
  !*** ./src/app/agentifai/commands/mbway/get-mbway-cards.ts ***!
  \*************************************************************/
/*! exports provided: GetMBWayCardsCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMBWayCardsCommand", function() { return GetMBWayCardsCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var src_app_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/commands/cards/cards-utils */ "lw/H");




class GetMBWayCardsCommand {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            `body\.[^.]+\.(${src_app_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__["CardsUtils"].nonAnonymizedCardProperties})`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const fullAccountKey = this.request.getParameters()["fullAccountKey"];
        return service.getCardsForMbwayAssociation(headers, fullAccountKey)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "IqUE":
/*!*******************************************************************!*\
  !*** ./src/app/agentifai/commands/content/get-private-content.ts ***!
  \*******************************************************************/
/*! exports provided: GetPrivateContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPrivateContent", function() { return GetPrivateContent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetPrivateContent {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const featureId = parameters.featureId;
        return service.getPrivateContent(headers, featureId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "Jrio":
/*!***************************************************************************!*\
  !*** ./src/app/agentifai/commands/operation-proof/get-operation-proof.ts ***!
  \***************************************************************************/
/*! exports provided: GetOperationProofCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOperationProofCommand", function() { return GetOperationProofCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetOperationProofCommand {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const operationId = Number(this.request.getParameters()["operationId"]);
        return service.getOperationProof(headers, operationId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "JxHx":
/*!******************************************************************!*\
  !*** ./src/app/services/agentifai/agentifai-services.service.ts ***!
  \******************************************************************/
/*! exports provided: AgentifaiServicesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentifaiServicesProvider", function() { return AgentifaiServicesProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ "oZWX");



let AgentifaiServicesProvider = class AgentifaiServicesProvider {
    constructor(api) {
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
        this.LOAN_ADHESION_EXECUTION = "business/loans/consumer/adhesionExecutionV2";
        //contents
        this.CONTENT_PRIVATE_CONTENT = "business/content/privateContent/features/#FEATUREID#";
        this.CONTENT_PRIVATE_CONTENT_LANDING_BANNER_DISABLE = "business/content/privateContent/landingPage/banner/disable";
        this.SHOWCASE_CARDS = "business/showcase/cards";
        this.SHOWCASE_CHARACTERISTICS = "business/showcase/characteristics?characteristicsId=#CHARACTERISTICSID#";
        this.SHOWCASE_PRODUCT_DOCUMENT = "business/showcase/productdocument?productCode=#PRODUCTCODE#&docType=#DOCTYPE#";
        this.CARD_ADHESION_ACCOUNTS = "business/accounts?targetOperationType=NEW_CARD_REQUEST";
        this.CARD_ADHESION_CONFIGURATIONS = "business/cards/requests/configurations?fullAccountKey=#ACCOUNT#&productCode=#PRODUCTCODE#";
        this.CARD_ADHESION_SIMULATE = "business/cards/requests/simulations";
        this.CARD_ADHESION_INIT = "business/cards/requests/initNewCreditCard";
        this.CARD_ADHESION_EXECUTE = "business/cards/requests/executions";
        // Update client personal data
        this.UPDATE_CLIENT_INFO_VALIDITY = "business/customers/updateClientInformation/validity";
        this.UPDATE_CLIENT_INFO_ADDRESS = "business/customers/updateClientInformation/address";
        this.UPDATE_CLIENT_INFO_PERSONAL = "business/customers/updateClientInformation/personal";
        this.UPDATE_CLIENT_INFO_PROFESSIONAL = "business/customers/updateClientInformation/professional";
        this.UPDATE_CLIENT_MARTIAL_STATUS = "business/customers/updateClientInformation/list/#ID#";
        this.UPDATE_CLIENT_SIMULATION = "business/customers/updateClientInformation/simulation";
        this.UPDATE_CLIENT_EXECUTION = "business/customers/updateClientInformation/execution";
        //CREDENTIALS_MANAGEMENT
        this.GET_CREDENTIALS = "business/credentialsmanagement/credentials/#CREDENTIALTYPE#";
        // MATRIX CARD
        this.MATRIX_CONFIG = "business/credentialsmanagement/matrixrequisition/config";
        this.MATRIX_REQUISITION_SIMULATION = "business/credentialsmanagement/matrixrequisition/simulations";
        this.MATRIX_REQUISITION_EXECUTION = "business/credentialsmanagement/matrixrequisition/executions";
        this.MATRIX_ACTIVE_SIMULATION = "business/credentialsmanagement/matrixactivation/simulations";
        this.MATRIX_ACTIVE_EXECUTION = "business/credentialsmanagement/matrixactivation/executions";
        // parametros de servicos
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
    logout() {
        let obs = this.api.deleteLogoutAgentifai(this.LOGOUT_SERVICE, null);
        this.api.genericClearCookies();
        return obs;
    }
    /* obter a listagem de contas para os saldos e movimentos de conta */
    getBalancesAndTransactionsAccountList(headers, onlyDeposit = false) {
        if (onlyDeposit == true) {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.ACCOUNTS_FOR_BALANCES_AND_TRANSACTIONS_DEPOSITSONLY, headers);
        }
        else {
            return this.api.genericGetAuthenticatedMethodAgentifai(this.ACCOUNTS_FOR_BALANCES_AND_TRANSACTIONS, headers);
        }
    }
    /* obtem os detalhes de saldo e movimentos da conta no formato label/value standard da app */
    getDebitAccountBalancesAndMovements(headers, sourceAccount, minimumDate, maximumDate) {
        let url = this.ACCOUNT_BALANCES_AND_TRANSACTIONS.replace(this.ACCOUNT_PARAM, sourceAccount)
            .replace(this.FROM_DATE_PARAM, minimumDate)
            .replace(this.TO_DATE_PARAM, maximumDate);
        return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
    }
    /* lista de movimentos de uma conta DO */
    getTransactions(headers, request) {
        let url = this.ACCOUNT_TRANSACTIONS.replace(this.ACCOUNT_PARAM, request.sourceAccount)
            .replace(this.FROM_DATE_PARAM, request.minimumDate)
            .replace(this.TO_DATE_PARAM, request.maximumDate);
        if (request.nextPageKeys && request.nextPageKeys != "") {
            url += "&pageKey=" + request.nextPageKeys;
        }
        return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
    }
    /* obtem os detalhes de saldo da conta */
    getAccountBalance(headers, fullAccountKey) {
        let url = this.ACCOUNT_BALANCES.replace(this.ACCOUNT_PARAM, fullAccountKey);
        return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
    }
    //SERVICES PAYMENT
    /* dados para a pagina de pagamentos */
    getPaymentsPageData(headers, includeFrequentOperationImages) {
        var url = this.PAYMENTS_PAGE_DATA_SERVICE;
        if (includeFrequentOperationImages) {
            url += "&includeFrequentOperationsImages=true";
        }
        return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
    }
    /* obter calendario de pagamentos */
    getCalendarToPayment(headers) {
        return this.api.genericGetAuthenticatedMethodAgentifai(this.PAYMENT_CALENDAR_SERVICE, headers);
    }
    /* obter nome da entidade */
    getPaymentsEntity(headers, entityNumber) {
        var url = this.GET_ENTITY + "/" + entityNumber;
        return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
    }
    /* simular pagamento de servicos */
    simulateServicePayment(headers, request) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.SIMULATE_SERVICE_PAYMENT, headers);
    }
    /* executar pagamento de servicos */
    executeServicePayment(headers, request, credential) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.EXECUTE_SERVICE_PAYMENT, headers, credential);
    }
    /* dados para a pagina de pagamento de telecomunicacoes */
    getTelecomConfigurations(headers) {
        return this.api.genericGetAuthenticatedMethodAgentifai(this.TELECOM_CONFIGURATIONS, headers);
    }
    /* simular pagamento de telecomunicacoes */
    simulateTelecomPayment(headers, request) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.SIMULATE_TELECOM_PAYMENT, headers);
    }
    /* executar pagamento de telecomunicacoes */
    executeTelecomPayment(headers, request, credential) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.EXECUTE_TELECOM_PAYMENT, headers, credential);
    }
    //OPERATIONS PROOF
    /* send email to user with document of operation */
    sendOperationProofByEmail(headers, operationId, request) {
        const url = this.BUSINESS_OPERATIONS + `/${operationId}/` + this.PROOFS_EMAILS;
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, url, headers);
    }
    getOperationProof(headers, operationId) {
        let url = this.BUSINESS_OPERATIONS + `/${operationId}/` + "proof";
        return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
    }
    //Frequent Operations
    getFrequentPaymentDetail(headers, operationId) {
        let url = this.GET_FREQUENT_SERVICE_PAYMENT_DETAIL + "?idFrequentOperation=" + operationId;
        return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
    }
    getFrequentTelecomPaymentDetail(headers, operationId) {
        let url = this.GET_FREQUENT_TELECOM_PAYMENT_DETAIL + "?idFrequentOperation=" + operationId;
        return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
    }
    //Contacts
    getCustomerContacts(headers) {
        return this.api.genericGetAuthenticatedMethodAgentifai(this.CUSTOMER_CONTACTS, headers);
    }
    /********************************/
    /******** Transferências ********/
    /********************************/
    /* dados para a pagina de transferencias */
    getTransferPageData(headers, includeFrequentOperationImages, account) {
        let url = this.TRANSFER_PAGE_DATA_SERVICE + "?transferOperationsFilter=INTERNAL_TRANSFER";
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
    getTransferType(headers, account) {
        return this.api.genericGetAuthenticatedMethodAgentifai(this.TRANSFER_TYPE_SERVICE + account, headers);
    }
    getCalendarToAllTranfers(headers) {
        return this.api.genericGetAuthenticatedMethodAgentifai(this.ALL_TRANSFERS_CALENDAR_SERVICE, headers);
    }
    /***** Transferências internas *****/
    /* simular transferencia interna */
    simulateInternalTransfer(headers, request) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.INTERNAL_TRANSFER_SIMULATION_SERVICE, headers);
    }
    /* executar transferencia interna */
    executeInternalTransfer(headers, request, credential) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.INTERNAL_TRANSFER_EXECUTION_SERVICE, headers, credential);
    }
    /* obter dados de uma transferencia frequente interna */
    getFrequentINTERNALoperation(headers, operationId) {
        let url = this.INTERNAL_TRANSFER_FREQUENT_SERVICE + "?idFrequentOperation=" + operationId;
        return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
    }
    /***** Transferências SEPA *****/
    /* validacao do nome do beneficiario nas transferencias SEPA */
    validateSepaBeneficiaryName(headers, beneficiaryName) {
        var url = this.SEPA_TRANSFER_VALIDATE_BENEFICIARY + beneficiaryName;
        return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
    }
    /* simular transferencia SEPA */
    simulateSepaTransfer(headers, request) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.SEPA_TRANSFER_SIMULATION_SERVICE, headers);
    }
    /* executar transferencia SEPA */
    executeSepaTransfer(headers, request, credential) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.SEPA_TRANSFER_EXECUTION_SERVICE, headers, credential);
    }
    /* obter dados de uma transferencia frequente SEPA */
    getFrequentSEPAoperation(headers, operationId) {
        let url = this.SEPA_TRANSFER_GET_FREQUENT_OPERATION + "?idFrequentOperation=" + operationId;
        return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
    }
    /***** Transferências imediatas *****/
    /* simular transferencia imediata - para contacto */
    simulateImmediateTransfer(headers, request) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.IMMEDIATE_TRANSFER_SIMULATION_SERVICE, headers);
    }
    /* executar transferencia imediata - para contacto */
    executeImmediateTransfer(headers, request, credential) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.IMMEDIATE_TRANSFER_EXECUTION_SERVICE, headers, credential);
    }
    /* obter a lista de contas elegíveis para uma transferencia imediata */
    getAccountsForImmediateTransfers(headers) {
        return this.api.genericGetAuthenticatedMethodAgentifai(this.ACCOUNTS_FOR_IMMEDIATE_TRANSFER_REGISTRATION, headers);
    }
    /* obter a lista de numeros disponíveis para uma transferencia imediata */
    getPhoneNumbersForImmediateTransfers(headers) {
        return this.api.genericGetAuthenticatedMethodAgentifai(this.PHONE_NUMBERS_FOR_IMMEDIATE_TRANSFER_REGISTRATION, headers);
    }
    getMbwayPartnerClientStatus(headers) {
        return this.api.genericGetAuthenticatedMethodAgentifai(this.MBWAY_PARTNER_CLIENT_STATUS, headers);
    }
    /* Obtém lista de cartões possíveis para associar para uma dada conta */
    getCardsForMbwayAssociation(headers, fullAccountKey) {
        let url = this.MBWAY_PARTNER_CARDS_LIST;
        url += '?onlyCardsWithoutMBWAY=true&fullAccountKey=' + fullAccountKey;
        return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
    }
    simulateAdhesionMbway(headers, request) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.WITHDRAWAL_SIMULATE_ADHESION_MBWAY, headers);
    }
    executeAdhesionMbway(headers, request, credential) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.WITHDRAWAL_EXECUTE_ADHESION_MBWAY, headers, credential);
    }
    /* Após concluída a adesão deve ser perguntado ao cliente se pretende receber sempre as transferências MBWay na conta da Caixa
        este serviço serve para registar a resposta do cliente */
    acceptTransferCGD(headers, request) {
        return this.api.genericPutAuthenticatedMethodWithInputAgentifai(request, this.MBWAY_ACCEPT_TRANSFERS_CGD, headers);
    }
    /***** Termos e condições *****/
    getVoiceTreatmentConsent(headers) {
        return this.api.genericGetAuthenticatedMethodAgentifai(this.VOICE_TREATMENT_CONSENT, headers);
    }
    addVoiceTreatmentConsent(headers, request) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.VOICE_TREATMENT_CONSENT, headers);
    }
    deleteVoiceTreatmentConsent(headers) {
        return this.api.genericDeleteAuthenticatedMethodAgentifai(this.VOICE_TREATMENT_CONSENT, headers);
    }
    /***** Desbloqueio de Contrato *****/
    /* obter questões para desbloquear contrato */
    getCredentialUnlockQuestions(headers, request) {
        let url = this.CREDENTIAL_UNLOCK_QUESTIONS
            + "?contractNumber=" + request.contractNumber
            + "&phoneNumber=" + request.phoneNumber;
        return this.api.genericGetMethodAgentifai(url, headers);
    }
    /* enviar respostas para desbloqueio do contrato */
    credentialUnlockAnswers(headers, request) {
        return this.api.genericPostMethodWithInputAgentifai(request, this.CREDENTIAL_UNLOCK_ANSWERS, headers);
    }
    /***** Obter numero de Contrato *****/
    /* obter questões para obter numero de contrato */
    getContractNumberQuestions(headers, request) {
        let url = this.GET_CONTRACT_NUMBER_QUESTIONS
            + "?nif=" + request.nif
            + "&phoneNumber=" + request.phoneNumber;
        return this.api.genericGetMethodAgentifai(url, headers);
    }
    /* enviar respostas para obter numero de contrato */
    getContractNumberAnswers(headers, request) {
        return this.api.genericPostMethodWithInputAgentifai(request, this.GET_CONTRACT_NUMBER_ANSWERS, headers);
    }
    /***** Cartões *****/
    getCardsGeneralData(headers, cardAccountId, targetCardOperationType, omitTransactionsInResponse) {
        if (!targetCardOperationType) {
            targetCardOperationType = 'BALANCES_AND_TRANSACTIONS';
        }
        let url = this.GENERAL_CARD_DATA + "?targetCardOperationType=" + targetCardOperationType;
        if (cardAccountId) {
            url += "&cardAccountId=" + cardAccountId + "&omitAccountsInResponse=true";
        }
        if (omitTransactionsInResponse) {
            url += "&omitTransactionsInResponse=true";
        }
        return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
    }
    getCardStatementTransactions(headers, cardAccountId, statementDate) {
        let url = this.CARD_ACCOUNT_TRANSACTIONS.replace(this.CARD_ACCOUNT_PARAM, cardAccountId);
        if (statementDate) {
            url = url + "?statementDate=" + statementDate;
        }
        return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
    }
    getCardsPaymentData(headers) {
        return this.api.genericGetAuthenticatedMethodAgentifai(this.CARD_PAYMENT_DATA, headers);
    }
    simulateCardPayment(headers, request) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.SIMULATE_CARD_PAYMENT, headers);
    }
    executeCardPayment(headers, request, credential) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.EXECUTE_CARD_PAYMENT, headers, credential);
    }
    activateCard(headers, cardNumber, cardValidityDate) {
        return this.api.genericPostAuthenticatedMethodAgentifai(this.CARD_ACTIVATION.replace(this.CARD_NUMBER, cardNumber).replace(this.CARD_VALIDITY_DATE, cardValidityDate), headers);
    }
    getContactSmsToken(headers) {
        return this.api.genericGetAuthenticatedMethodAgentifai(this.GET_SMS_TOKEN, headers);
    }
    /***** Callback *****/
    getCustomerManager(headers) {
        return this.api.genericGetAuthenticatedMethodAgentifai(this.CUSTOMER_MANAGER, headers);
    }
    getManagerCallbackConfig(headers) {
        return this.api.genericGetAuthenticatedMethodAgentifai(this.MANAGER_CALLBACK_CONFIG, headers);
    }
    getManagerAvailableTime(headers, destinationType, date) {
        let url = this.MANAGER_CALLBACK_AVAILABLETIME;
        url += '?destinationType=' + destinationType.toString();
        url += '&date=' + date;
        return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
    }
    setCallback(headers, request) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.CUSTOMER_CALLBACK, headers);
    }
    /***** LOANS *****/
    getConsumerLoanCalculatorResult(headers, request) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.LOANS_CONSUMER_CALCULATOR, headers);
    }
    getConsumerLoanAdhesionGeneralData(headers) {
        return this.api.genericGetAuthenticatedMethodAgentifai(this.CONSULT_LOAN_ADHESION_GENERAL_DATA, headers);
    }
    simulateLoanRequest(headers, request) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.LOAN_ADHESION_SIMULATION, headers);
    }
    executeLoanRequest(headers, request, credential) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.LOAN_ADHESION_EXECUTION, headers, credential);
    }
    getPrivateContent(headers, featureId) {
        let url = this.CONTENT_PRIVATE_CONTENT.replace(this.FEATUREID, featureId);
        return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
    }
    disableLandingPageBanner(headers, pageName) {
        let url = this.CONTENT_PRIVATE_CONTENT_LANDING_BANNER_DISABLE + "?pageName=" + pageName;
        return this.api.genericPutAuthenticatedMethodAgentifai(url, headers);
    }
    /***** CARD ACQUISITION *****/
    getShowcaseCards(headers) {
        return this.api.genericGetAuthenticatedMethodAgentifai(this.SHOWCASE_CARDS, headers);
    }
    getShowcaseCharacteristics(headers, characteristicsId) {
        let url = this.SHOWCASE_CHARACTERISTICS.replace(this.CHARACTERISTICSID_PARAM, characteristicsId);
        return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
    }
    getShowcaseProductDocument(headers, productCode, docType) {
        let url = this.SHOWCASE_PRODUCT_DOCUMENT.replace(this.PRODUCTCODE_PARAM, productCode).replace(this.DOCTYPE_PARAM, docType);
        return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
    }
    getCardAdhesionAccounts(headers) {
        return this.api.genericGetAuthenticatedMethodAgentifai(this.CARD_ADHESION_ACCOUNTS, headers);
    }
    getCardAdhesionConfigurations(headers, fullAccountKey, productCode) {
        let url = this.CARD_ADHESION_CONFIGURATIONS.replace(this.ACCOUNT_PARAM, fullAccountKey).replace(this.PRODUCTCODE_PARAM, productCode);
        return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
    }
    simulateCardAdhesion(headers, request) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.CARD_ADHESION_SIMULATE, headers);
    }
    initNewCreditCard(headers, request) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.CARD_ADHESION_INIT, headers);
    }
    executeCardAdhesion(headers, request, credential) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.CARD_ADHESION_EXECUTE, headers, credential);
    }
    /***** UPDATE CLIENT INFO *****/
    getUpdateClientInfoValidity(headers) {
        return this.api.genericGetAuthenticatedMethodAgentifai(this.UPDATE_CLIENT_INFO_VALIDITY, headers);
    }
    getUpdateClientInfoAddress(headers) {
        return this.api.genericGetAuthenticatedMethodAgentifai(this.UPDATE_CLIENT_INFO_ADDRESS, headers);
    }
    getUpdateClientInfoIdentification(headers) {
        return this.api.genericGetAuthenticatedMethodAgentifai(this.UPDATE_CLIENT_INFO_PERSONAL, headers);
    }
    getUpdateClientInfoOccupation(headers) {
        return this.api.genericGetAuthenticatedMethodAgentifai(this.UPDATE_CLIENT_INFO_PROFESSIONAL, headers);
    }
    /**
       *
       * @param id 0/1/2
       * @returns Estado Civil/Paises/Profissoes
       */
    getUpdateClientListField(headers, id) {
        let url = this.UPDATE_CLIENT_MARTIAL_STATUS.replace(this.ID, id);
        return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
    }
    simulateUpdateClientInfo(headers, request) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.UPDATE_CLIENT_SIMULATION, headers);
    }
    executeUpdateClientInfo(headers, request, credential) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.UPDATE_CLIENT_EXECUTION, headers, credential);
    }
    /***** CREDENTIALS_MANAGEMENT *****/
    getCredentials(headers, credentialType) {
        var url = this.GET_CREDENTIALS.replace(this.CREDENTIAL_PARAM, credentialType);
        return this.api.genericGetAuthenticatedMethodAgentifai(url, headers);
    }
    /***** MATRIX *****/
    matrixConfig(headers) {
        return this.api.genericGetAuthenticatedMethodAgentifai(this.MATRIX_CONFIG, headers);
    }
    simulateMatrixRequisition(headers, request) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.MATRIX_REQUISITION_SIMULATION, headers);
    }
    executeMatrixRequisition(headers, request, credential) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.MATRIX_REQUISITION_EXECUTION, headers, credential);
    }
    simulateActivateMatrix(headers, request) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.MATRIX_ACTIVE_SIMULATION, headers);
    }
    executeActivateMatrix(headers, request, credential) {
        return this.api.genericPostAuthenticatedMethodWithInputAgentifai(request, this.MATRIX_ACTIVE_EXECUTION, headers, credential);
    }
};
AgentifaiServicesProvider.ctorParameters = () => [
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["Api"] }
];
AgentifaiServicesProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AgentifaiServicesProvider);



/***/ }),

/***/ "K+8N":
/*!**********************************************************************************************************!*\
  !*** ./src/app/agentifai/commands/credentialsmanagement/matrixrequisition/execute-matrix-requisition.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ExecuteMatrixRequisition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuteMatrixRequisition", function() { return ExecuteMatrixRequisition; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var _credentials_management_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../credentials-management-utils */ "G8L4");




class ExecuteMatrixRequisition {
    constructor(request, responseFactory, requestFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.requestFactory = requestFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            'headers.+',
            'status',
            `body\.(operationId|operationStatus|customerMessage|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        const credential = this.createCredentials(parameters);
        return service.executeMatrixRequisition(headers, request, credential)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => this.createErrorResponse(error)));
    }
    createRequest(parameters) {
        return _credentials_management_utils__WEBPACK_IMPORTED_MODULE_3__["CredentialsManagementUtils"].createMatrixRequisitionSimExe(parameters, this.requestFactory);
    }
    createCredentials(parameters) {
        return this.requestFactory.createCredentials(parameters);
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "K9C8":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/agentifai/commands/customers/update-client-information/get-update-client-information-professional.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: GetUpdateClientInformationProfessional */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUpdateClientInformationProfessional", function() { return GetUpdateClientInformationProfessional; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetUpdateClientInformationProfessional {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            'headers.+',
            'status',
            String.raw `^body\.(expirado|trabalharPorContaDoutrem|empregadoCgd|tipoDependencia)$`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        return service.getUpdateClientInfoOccupation(headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "LCUH":
/*!**************************************************************************!*\
  !*** ./src/app/services/agentifai/agentifai-response-factory.service.ts ***!
  \**************************************************************************/
/*! exports provided: AgentifaiResponseFactoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentifaiResponseFactoryService", function() { return AgentifaiResponseFactoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_agentifai_models_agentifai_response_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/models/agentifai-response-event */ "9Ygl");
/* harmony import */ var src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/agentifai-utils */ "EZ/N");
/* harmony import */ var src_app_agentifai_models_agentifai_widget_response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/agentifai/models/agentifai-widget-response */ "zJBa");





let AgentifaiResponseFactoryService = class AgentifaiResponseFactoryService {
    createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths) {
        const event = success ? this.createResponseEventFromRestApi(response) : this.createErrorResponseEventFromRestApi(response);
        return new src_app_agentifai_models_agentifai_widget_response__WEBPACK_IMPORTED_MODULE_4__["WidgetResponse"](event, nonAnonymizableRegexesPaths);
    }
    //Create ResponseEvent Factory
    createResponseEventFromRestApi(response) {
        return this.createResponseEvent(response.headers, response.status, src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__["AgentifaiUtils"].mapFromString(response.data));
    }
    createErrorResponseEventFromRestApi(response) {
        return this.createResponseEvent(response.headers, response.status, src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__["AgentifaiUtils"].mapFromString(response.error));
    }
    createResponseEvent(headers, status, body) {
        return new src_app_agentifai_models_agentifai_response_event__WEBPACK_IMPORTED_MODULE_2__["ResponseEvent"](headers, status, body);
    }
};
AgentifaiResponseFactoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AgentifaiResponseFactoryService);



/***/ }),

/***/ "LT4J":
/*!******************************************************************!*\
  !*** ./src/app/models/operation/OperationProofByEmailRequest.ts ***!
  \******************************************************************/
/*! exports provided: OperationProofByEmailRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationProofByEmailRequest", function() { return OperationProofByEmailRequest; });
class OperationProofByEmailRequest {
}


/***/ }),

/***/ "Lx10":
/*!*************************************************************!*\
  !*** ./src/app/agentifai/commands/accounts/get-accounts.ts ***!
  \*************************************************************/
/*! exports provided: GetAccountsCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAccountsCommand", function() { return GetAccountsCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/agentifai-utils */ "EZ/N");
/* harmony import */ var src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/commands/accounts/accounts-utils */ "il6X");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");





class GetAccountsCommand {
    constructor(request, responseFactory, transformer) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.transformer = transformer;
        this.nonAnonymizableRegexesPathsuccess = [
            "headers.+",
            "status",
            "body\.("
                + `defaultAccount\.(${src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_3__["AccountsUtils"].nonAnonymizedAccountsProperties})`
                + `|accounts\.[^.]+\.(${src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_3__["AccountsUtils"].nonAnonymizedAccountsProperties})`
                + ")(?:$|\W)"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        return service.getBalancesAndTransactionsAccountList(headers, false)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        var transformedResponse = this.transformResponse(response);
        return this.createResponse(transformedResponse, true, this.nonAnonymizableRegexesPathsuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
    transformResponse(response) {
        const data = src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_2__["AgentifaiUtils"].mapFromString(response.data);
        if (data.defaultAccount != null && data.accounts != null) {
            data.accounts = this.transformer.transformAccounts(data.accounts);
            data.defaultAccount = this.transformer.transformAccount(data.defaultAccount);
            response.data = data;
        }
        return response;
    }
}


/***/ }),

/***/ "MBy1":
/*!*************************************************************************************!*\
  !*** ./src/app/agentifai/commands/transfers/internal/simulate-internal-transfer.ts ***!
  \*************************************************************************************/
/*! exports provided: SimulateInternalTransferCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulateInternalTransferCommand", function() { return SimulateInternalTransferCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_models_operation_request_transfers_TransferInternalRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/operation/request/transfers/TransferInternalRequest */ "Gowj");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");




class SimulateInternalTransferCommand {
    constructor(request, responseFactory, requestFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.requestFactory = requestFactory;
        this.nonAnonymizableRegexesPathsSuccess = [
            "headers.+",
            "status",
            `body\.(operationId|operationStatus|charges[.].*|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].scheduling()})`
        ];
        this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        return service.simulateInternalTransfer(headers, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(resp => this.createErrorResponse(resp)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_transfers_TransferInternalRequest__WEBPACK_IMPORTED_MODULE_1__["TransferInternalRequest"]();
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
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
    }
}


/***/ }),

/***/ "MCMW":
/*!******************************************************************************!*\
  !*** ./src/app/services/agentifai/agentifai-accounts-transformer.service.ts ***!
  \******************************************************************************/
/*! exports provided: AgentifaiAccountsTransformerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentifaiAccountsTransformerService", function() { return AgentifaiAccountsTransformerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let AgentifaiAccountsTransformerService = class AgentifaiAccountsTransformerService {
    transformAccount(account) {
        return this.transform(account);
    }
    transformAccounts(accounts) {
        var accounts = accounts;
        accounts.forEach(account => {
            account = this.transform(account);
        });
        return accounts;
    }
    transform(account) {
        return this.addNewAccountProperties(account);
    }
    addNewAccountProperties(account) {
        account.accountName = account.description != null ? account.description.split(" - ").reverse()[0] : null;
        return account;
    }
};
AgentifaiAccountsTransformerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AgentifaiAccountsTransformerService);



/***/ }),

/***/ "MjQc":
/*!****************************************************************************************!*\
  !*** ./src/app/agentifai/commands/credentialsmanagement/get-credentials-management.ts ***!
  \****************************************************************************************/
/*! exports provided: GetCredentialsManagement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCredentialsManagement", function() { return GetCredentialsManagement; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/anonymization-utils */ "Xntl");



class GetCredentialsManagement {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            'headers.+',
            'status',
            String.raw `body\.credentials\.[^.]+\.status`
        ];
        this.nonAnonymizablePathRegexError = _utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const credentialType = this.request.getParameters().credentialType;
        return service.getCredentials(headers, credentialType)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "Noh+":
/*!***************************************************************************!*\
  !*** ./src/app/services/agentifai/agentifai-plugin-controller.service.ts ***!
  \***************************************************************************/
/*! exports provided: AgentifaiPluginControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentifaiPluginControllerService", function() { return AgentifaiPluginControllerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_agentifai_agentifai_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/agentifai/agentifai-manager.service */ "/gT+");
/* harmony import */ var src_app_services_environment_service_environment_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/environment-service/environment-service.service */ "oUY6");




let AgentifaiPluginControllerService = class AgentifaiPluginControllerService {
    constructor(agentifaiManager, env) {
        this.agentifaiManager = agentifaiManager;
        this.env = env;
    }
    initialize() {
        if (agentifai) {
            const config = this.env.getAgentifaiConfiguration();
            this.initializeWithConfig(config.apiUrl, config.apiKey, config.settings);
        }
    }
    initializeWithConfig(apiUrl, apiKey, settings) {
        if (agentifai) {
            this.addCallback();
            agentifai.initialize(apiUrl, apiKey, settings);
        }
    }
    stop() {
        if (agentifai) {
            agentifai.stop();
        }
    }
    setConfigurations(configurations) {
        if (agentifai) {
            agentifai.setConfigurations(configurations);
        }
    }
    showWidget() {
        if (agentifai) {
            agentifai.setWidgetVisibility(true);
        }
    }
    hideWidget() {
        if (agentifai) {
            agentifai.setWidgetVisibility(false);
        }
    }
    showApp(intent = null) {
        if (agentifai) {
            agentifai.openApplication(intent);
        }
    }
    hideApp() {
        if (agentifai) {
            agentifai.closeApplication();
        }
    }
    registerUser(id, name, token, authHeaders) {
        if (agentifai) {
            const user = { "id": id, "name": name, "token": token };
            agentifai.registerUser(user, authHeaders);
        }
    }
    unregisterUser() {
        if (agentifai) {
            agentifai.unregisterUser();
        }
    }
    addCallback() {
        if (agentifai) {
            agentifai.addClientCallback(data => {
                this.processAgentifaiEvent(data);
            }, () => { });
        }
    }
    setWidgetDimensions(dimensions) {
        if (agentifai) {
            agentifai.setWidgetDimensions(dimensions);
        }
    }
    setTheme(theme) {
        if (agentifai) {
            agentifai.setTheme(theme);
        }
    }
    processAgentifaiEvent(data) {
        const eventType = data["type"];
        if (eventType == "applicationStatus") {
            this.processApplicationStatusEvent(data);
        }
        else if (eventType == "request") {
            this.executeAgentifaiRequest(data);
        }
    }
    processApplicationStatusEvent(data) {
        const isOpened = data["isOpened"];
        if (isOpened) {
            this.env.openAlice();
        }
        else {
            this.env.closeAlice();
        }
    }
    executeAgentifaiRequest(data) {
        console.log("REQUEST:" + JSON.stringify(data));
        this.agentifaiManager.executeWidgetRequest(data)
            .subscribe(resp => {
            this.sendResponseOfRequest(resp);
        }, error => {
            this.sendResponseOfRequest(error);
        });
    }
    sendResponseOfRequest(response) {
        console.log("RESPONSE: " + JSON.stringify(response));
        agentifai.requestResult(response.requestId, response.success, response.result);
    }
};
AgentifaiPluginControllerService.ctorParameters = () => [
    { type: src_app_services_agentifai_agentifai_manager_service__WEBPACK_IMPORTED_MODULE_2__["AgentifaiManagerProvider"] },
    { type: src_app_services_environment_service_environment_service_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"] }
];
AgentifaiPluginControllerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AgentifaiPluginControllerService);



/***/ }),

/***/ "OQS7":
/*!********************************************************************!*\
  !*** ./src/app/agentifai/commands/loans/simulate-personal-loan.ts ***!
  \********************************************************************/
/*! exports provided: SimulatePersonalLoan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulatePersonalLoan", function() { return SimulatePersonalLoan; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var src_app_models_operation_request_loans_ConsumerLoanAdhesionRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/operation/request/loans/ConsumerLoanAdhesionRequest */ "4Rlb");
/* harmony import */ var src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/operation/request/loans/GenericPersonalCreditWorkElement */ "3ZgE");





class SimulatePersonalLoan {
    constructor(request, requestFactory, responseFactory) {
        this.request = request;
        this.requestFactory = requestFactory;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            String.raw `^body\.(operationId|success|errorMessage|simulationDate|amountMin|amountMax)$`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        return service.getConsumerLoanCalculatorResult(headers, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_loans_ConsumerLoanAdhesionRequest__WEBPACK_IMPORTED_MODULE_3__["ConsumerLoanAdhesionRequest"]();
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
            const profession = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
            profession.cod = parameters.profession.cod;
            profession.description = parameters.profession.description;
            request.profissao = profession;
        }
        if (parameters.jobSector != null) {
            const jobSector = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
            jobSector.cod = parameters.jobSector.cod;
            jobSector.description = parameters.jobSector.description;
            request.sector = jobSector;
        }
        if (parameters.jobType != null) {
            const jobType = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
            jobType.cod = parameters.jobType.cod;
            jobType.description = parameters.jobType.description;
            request.trabalho = jobType;
        }
        if (parameters.contractType != null) {
            const contractType = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
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
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "P3RZ":
/*!********************************************************************************!*\
  !*** ./src/app/agentifai/commands/cards/acquisition/simulate-card-adhesion.ts ***!
  \********************************************************************************/
/*! exports provided: SimulateCardAdhesion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulateCardAdhesion", function() { return SimulateCardAdhesion; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var src_app_models_operation_request_cards_CardRequestRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/operation/request/cards/CardRequestRequest */ "cnaj");




class SimulateCardAdhesion {
    constructor(request, responseFactory, requestFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.requestFactory = requestFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            String.raw `^body\.(operationId|operationStatus|scheduling|invalidAccountIntervenLei83|safeMessageAdhesion|normalAdherenceErrorMsg)$`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        return service.simulateCardAdhesion(headers, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_cards_CardRequestRequest__WEBPACK_IMPORTED_MODULE_3__["CardRequestRequest"]();
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
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "P4gV":
/*!*******************************************!*\
  !*** ./src/app/models/GenericKeyValue.ts ***!
  \*******************************************/
/*! exports provided: GenericKeyValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericKeyValue", function() { return GenericKeyValue; });
class GenericKeyValue {
    constructor(key, value) {
        this.key = "";
        this.value = "";
        this.key = key;
        this.value = value;
    }
}


/***/ }),

/***/ "PZoT":
/*!*********************************************************************!*\
  !*** ./src/app/agentifai/commands/commom/agentifai-command-type.ts ***!
  \*********************************************************************/
/*! exports provided: AgentifaiCommandType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentifaiCommandType", function() { return AgentifaiCommandType; });
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


/***/ }),

/***/ "QzTv":
/*!***************************************************************************************!*\
  !*** ./src/app/models/operation/request/payments/TelecommunicationsPaymentRequest.ts ***!
  \***************************************************************************************/
/*! exports provided: TelecommunicationsPaymentRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelecommunicationsPaymentRequest", function() { return TelecommunicationsPaymentRequest; });
/* harmony import */ var _GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GenericOperationRequest */ "AwYQ");

class TelecommunicationsPaymentRequest extends _GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"] {
    constructor() {
        super();
    }
}


/***/ }),

/***/ "R5IS":
/*!******************************************************************************************************************!*\
  !*** ./src/app/agentifai/commands/customers/update-client-information/get-update-client-information-validity.ts ***!
  \******************************************************************************************************************/
/*! exports provided: GetUpdateClientInformationValidity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUpdateClientInformationValidity", function() { return GetUpdateClientInformationValidity; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetUpdateClientInformationValidity {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            "body.*"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        return service.getUpdateClientInfoValidity(headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "R97l":
/*!**********************************************************************!*\
  !*** ./src/app/agentifai/commands/cards/activation/activate-card.ts ***!
  \**********************************************************************/
/*! exports provided: ActivateCardCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateCardCommand", function() { return ActivateCardCommand; });
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



class ActivateCardCommand {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexesPathsSuccess = [
            "headers.+",
            "status",
            String.raw `^body\.(success|failureReason)$`
        ];
        this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_0__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const cardNumber = parameters["cardNumber"];
        const cardValidityDate = parameters["cardValidatyDate"];
        return service.activateCard(headers, cardNumber, cardValidityDate)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(resp => this.createErrorResponse(resp)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
    }
}


/***/ }),

/***/ "RgOd":
/*!****************************************************************************!*\
  !*** ./src/app/agentifai/commands/callback/get-manager-callback-config.ts ***!
  \****************************************************************************/
/*! exports provided: GetManagerCallbackConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetManagerCallbackConfig", function() { return GetManagerCallbackConfig; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetManagerCallbackConfig {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            String.raw `^body\.(callbackDestinations\.\d\.periods\.\d|minDate|maxDate)$`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        return service.getManagerCallbackConfig(headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "Rkud":
/*!**********************************************************************************************************!*\
  !*** ./src/app/agentifai/commands/payments/telecommunications/get-frequent-telecommunication-payment.ts ***!
  \**********************************************************************************************************/
/*! exports provided: GetFrequentTelecommunicationPaymentCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFrequentTelecommunicationPaymentCommand", function() { return GetFrequentTelecommunicationPaymentCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetFrequentTelecommunicationPaymentCommand {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            "body\.(operationName|operationId|amount|paymentConfigurationCode|parentPaymentConfigurationCode)(?:$|\W)"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const idFrequentOperation = this.request.getParameters()["idFrequentOperation"];
        return service.getFrequentTelecomPaymentDetail(headers, String(idFrequentOperation))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "RpFj":
/*!******************************************************************************************************!*\
  !*** ./src/app/agentifai/commands/credentialsmanagement/matrixactivation/execute-activate-matrix.ts ***!
  \******************************************************************************************************/
/*! exports provided: ExecuteActivateMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuteActivateMatrix", function() { return ExecuteActivateMatrix; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var _credentials_management_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../credentials-management-utils */ "G8L4");




class ExecuteActivateMatrix {
    constructor(request, responseFactory, requestFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.requestFactory = requestFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            'headers.+',
            'status',
            `body\.(operationId|operationStatus|customerMessage|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        const credential = this.createCredentials(parameters);
        return service.executeActivateMatrix(headers, request, credential)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => this.createErrorResponse(error)));
    }
    createRequest(parameters) {
        return _credentials_management_utils__WEBPACK_IMPORTED_MODULE_3__["CredentialsManagementUtils"].createMatrixActivateSimExe(parameters, this.requestFactory);
    }
    createCredentials(parameters) {
        return this.requestFactory.createCredentials(parameters);
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "S3cc":
/*!**************************************************************************************!*\
  !*** ./src/app/agentifai/commands/cards/acquisition/get-showcase-characteristics.ts ***!
  \**************************************************************************************/
/*! exports provided: GetShowcaseCharacteristics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetShowcaseCharacteristics", function() { return GetShowcaseCharacteristics; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetShowcaseCharacteristics {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            String.raw `^body\.productCharacteristicsList\.[0-9]+\.(title|description)$`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const characteristicsId = this.request.getParameters().characteristicsId;
        return service.getShowcaseCharacteristics(headers, characteristicsId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_agentifai_agentifai_plugin_controller_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/agentifai/agentifai-plugin-controller.service */ "Noh+");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api/api.service */ "oZWX");
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/storage/storage.service */ "E2f4");
/* harmony import */ var src_app_services_assistant_utils_assistant_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/assistant-utils/assistant-utils.service */ "pTIB");
/* harmony import */ var src_app_internal_internal_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/internal/internal-utils */ "kajc");










let AppComponent = class AppComponent {
    constructor(platform, api, agentifaiController, storage, assistantUtils) {
        this.api = api;
        this.agentifaiController = agentifaiController;
        this.storage = storage;
        this.assistantUtils = assistantUtils;
        platform.ready().then(() => {
            this.initializeAssistant();
            this.setConfigurations();
        });
    }
    setConfigurations() {
        let headers = this.api.getHeadersAlice();
        let headersKeysMapping = this.api.HEADERS_KEYS_MAPPING_ALICE;
        let endpoints = src_app_internal_internal_utils__WEBPACK_IMPORTED_MODULE_9__["InternalUtils"].getEndpointsWhitelist();
        var endpointUrl = src_app_internal_internal_utils__WEBPACK_IMPORTED_MODULE_9__["InternalUtils"].endpoints[0].baseUrl;
        this.storage.getbaseUrl().then(result => {
            if (result != null)
                endpointUrl = result.baseUrl;
            this.agentifaiController.setConfigurations({ url: endpointUrl, headers: headers, headersKeysMapping: headersKeysMapping, endpoints: endpoints });
        }, error => {
            this.agentifaiController.setConfigurations({ url: endpointUrl, headers: headers, headersKeysMapping: headersKeysMapping, endpoints: endpoints });
        });
    }
    initializeAssistant() {
        this.assistantUtils.getConfig()
            .then(config => {
            this.agentifaiController.initializeWithConfig(config[0], config[1], config[2]);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_6__["Api"] },
    { type: src_app_services_agentifai_agentifai_plugin_controller_service__WEBPACK_IMPORTED_MODULE_5__["AgentifaiPluginControllerService"] },
    { type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: src_app_services_assistant_utils_assistant_utils_service__WEBPACK_IMPORTED_MODULE_8__["AssistantUtilsService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "TiZ7":
/*!******************************************************************************!*\
  !*** ./src/app/models/customers/updateClientInfo/UpdateClientInfoRequest.ts ***!
  \******************************************************************************/
/*! exports provided: UpdateClientInfoRequest, UpdateClientAttachment, UpdateClientAddress, UpdateClientPersonal, UpdateClientProfessional, UpdateClientPolitical */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateClientInfoRequest", function() { return UpdateClientInfoRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateClientAttachment", function() { return UpdateClientAttachment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateClientAddress", function() { return UpdateClientAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateClientPersonal", function() { return UpdateClientPersonal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateClientProfessional", function() { return UpdateClientProfessional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateClientPolitical", function() { return UpdateClientPolitical; });
/* harmony import */ var _operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../operation/request/GenericOperationRequest */ "AwYQ");

class UpdateClientInfoRequest extends _operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"] {
    constructor() {
        super();
        this.attachments = [];
        this.personal = null;
        this.professional = null;
        this.address = null;
        this.political = null;
    }
}
class UpdateClientAttachment {
    constructor() {
    }
}
class UpdateClientAddress {
    constructor() {
    }
}
class UpdateClientPersonal {
    constructor() {
    }
}
class UpdateClientProfessional {
    constructor() {
    }
}
class UpdateClientPolitical {
    constructor() {
    }
}


/***/ }),

/***/ "U4TL":
/*!************************************************************************************!*\
  !*** ./src/app/agentifai/commands/transfers/internal/execute-internal-transfer.ts ***!
  \************************************************************************************/
/*! exports provided: ExecuteInternalTransferCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuteInternalTransferCommand", function() { return ExecuteInternalTransferCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_models_operation_request_transfers_TransferInternalRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/operation/request/transfers/TransferInternalRequest */ "Gowj");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");




class ExecuteInternalTransferCommand {
    constructor(request, responseFactory, requestFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.requestFactory = requestFactory;
        this.nonAnonymizableRegexesPathsSuccess = [
            "headers.+",
            "status",
            `body\.(operationId|operationStatus|charges[.].*|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].scheduling()})`
        ];
        this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        const credential = this.createCredentials(parameters);
        return service.executeInternalTransfer(headers, request, credential)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(resp => this.createErrorResponse(resp)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_transfers_TransferInternalRequest__WEBPACK_IMPORTED_MODULE_1__["TransferInternalRequest"]();
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
    createCredentials(parameters) {
        return this.requestFactory.createCredentials(parameters);
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
    }
}


/***/ }),

/***/ "UKJ5":
/*!***************************************************************************!*\
  !*** ./src/app/agentifai/commands/cards/get-card-account-transactions.ts ***!
  \***************************************************************************/
/*! exports provided: GetCardAccountTransactions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCardAccountTransactions", function() { return GetCardAccountTransactions; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/commands/cards/cards-utils */ "lw/H");
/* harmony import */ var src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/agentifai-utils */ "EZ/N");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");





class GetCardAccountTransactions {
    constructor(request, responseFactory, transformer) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.transformer = transformer;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            `body\.(`
                + `cards\.[^.]+\.(${src_app_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_2__["CardsUtils"].nonAnonymizedCardProperties})`
                + `|`
                + `cardAccountTransactions.transactions.[^.]+.(${src_app_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_2__["CardsUtils"].nonAnonymizedCardTransactionProperties})`
                + `)`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const cardAccountId = parameters["cardAccountId"];
        const statementDate = parameters["statementDate"];
        return service.getCardStatementTransactions(headers, cardAccountId, statementDate)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        var transformedResponse = this.transformResponse(response);
        return this.createResponse(transformedResponse, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
    transformResponse(response) {
        var data = src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__["AgentifaiUtils"].mapFromString(response.data);
        var cards = data.cards;
        if (cards != null) {
            cards = this.transformer.addNewCardProperties(cards);
            data.cards = cards;
        }
        response.data = data;
        return response;
    }
}


/***/ }),

/***/ "UR4D":
/*!*****************************************************************!*\
  !*** ./src/app/agentifai/commands/accounts/get-transactions.ts ***!
  \*****************************************************************/
/*! exports provided: GetTransactions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTransactions", function() { return GetTransactions; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetTransactions {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexesPathsuccess = [
            "headers.+",
            "status"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const transactionsRequest = this.createTransactionRequest(parameters);
        return service.getTransactions(headers, transactionsRequest)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createTransactionRequest(parameteres) {
        var transactionsRequest = {};
        transactionsRequest.sourceAccount = parameteres.fullAccountKey;
        transactionsRequest.minimumDate = parameteres.fromBookDate;
        transactionsRequest.maximumDate = parameteres.toBookDate;
        transactionsRequest.nextPageKeys = parameteres.pageKey;
        return transactionsRequest;
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexesPathsuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "Vd28":
/*!*******************************************************************!*\
  !*** ./src/app/agentifai/commands/transfers/get-client-status.ts ***!
  \*******************************************************************/
/*! exports provided: GetClientStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetClientStatus", function() { return GetClientStatus; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var src_app_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/commands/cards/cards-utils */ "lw/H");




class GetClientStatus {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            `body\.(cards\.[^.]+\.(${src_app_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__["CardsUtils"].nonAnonymizedCardProperties})|clientMBWay)`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        return service.getMbwayPartnerClientStatus(headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "Vwa5":
/*!*************************************************************************************!*\
  !*** ./src/app/agentifai/commands/unlock-contract-number/unlock-contract-number.ts ***!
  \*************************************************************************************/
/*! exports provided: UnlockContractNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnlockContractNumber", function() { return UnlockContractNumber; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var src_app_models_operation_request_customers_GetContractNumberAnswersRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/operation/request/customers/GetContractNumberAnswersRequest */ "Cx/3");




class UnlockContractNumber {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexesPathsSuccess = [
            "headers.+",
            "status",
            "body\.result"
        ];
        this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        return service.getContractNumberAnswers(headers, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(resp => this.createErrorResponse(resp)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_customers_GetContractNumberAnswersRequest__WEBPACK_IMPORTED_MODULE_3__["GetContractNumberAnswersRequest"]();
        request.respostasUser = parameters.answers;
        request.nif = parameters.nif;
        return request;
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
    }
}


/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "WQQq":
/*!*****************************************************************************!*\
  !*** ./src/app/agentifai/commands/transfers/sepa/simulate-sepa-transfer.ts ***!
  \*****************************************************************************/
/*! exports provided: SimulateSEPATransferCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulateSEPATransferCommand", function() { return SimulateSEPATransferCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_models_operation_request_transfers_TransferSEPARequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/operation/request/transfers/TransferSEPARequest */ "vHy2");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");




class SimulateSEPATransferCommand {
    constructor(request, responseFactory, requestFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.requestFactory = requestFactory;
        this.nonAnonymizableRegexesPathsSuccess = [
            "headers.+",
            "status",
            `body\.(operationId|operationStatus|charges[.].*|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].scheduling()})`
        ];
        this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        return service.simulateSepaTransfer(headers, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(resp => this.createErrorResponse(resp)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_transfers_TransferSEPARequest__WEBPACK_IMPORTED_MODULE_2__["TransferSEPARequest"]();
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
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
    }
}


/***/ }),

/***/ "XSvm":
/*!***********************************************************************!*\
  !*** ./src/app/models/operation/request/cards/MBWayPartnerRequest.ts ***!
  \***********************************************************************/
/*! exports provided: MBWayPartnerRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MBWayPartnerRequest", function() { return MBWayPartnerRequest; });
/* harmony import */ var src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/operation/request/GenericOperationRequest */ "AwYQ");

class MBWayPartnerRequest extends src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"] {
    constructor() {
        super(...arguments);
        this.acceptedTransferCGD = true;
    }
}


/***/ }),

/***/ "Xntl":
/*!********************************************************!*\
  !*** ./src/app/agentifai/utils/anonymization-utils.ts ***!
  \********************************************************/
/*! exports provided: Anonymization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Anonymization", function() { return Anonymization; });
class Anonymization {
    static scheduling() {
        return "scheduling\.*";
    }
}
Anonymization.NonAnonymizablePathRegexDefault = [
    "headers.+",
    "status",
    "body.*"
];


/***/ }),

/***/ "YARR":
/*!*****************************************************************************************************!*\
  !*** ./src/app/agentifai/commands/payments/telecommunications/execute-telecommunication-payment.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ExecuteTelecommunicationPaymentCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuteTelecommunicationPaymentCommand", function() { return ExecuteTelecommunicationPaymentCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var src_app_models_operation_request_payments_TelecommunicationsPaymentRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/operation/request/payments/TelecommunicationsPaymentRequest */ "QzTv");




class ExecuteTelecommunicationPaymentCommand {
    constructor(request, requestFactory, responseFactory) {
        this.request = request;
        this.requestFactory = requestFactory;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexesPathsSuccess = [
            "headers.+",
            "status",
            `body\.(operationId|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
        ];
        this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        const credential = this.createCredentials(parameters);
        return service.executeTelecomPayment(headers, request, credential)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(resp => this.createErrorResponse(resp)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_payments_TelecommunicationsPaymentRequest__WEBPACK_IMPORTED_MODULE_3__["TelecommunicationsPaymentRequest"]();
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
    createCredentials(parameters) {
        return this.requestFactory.createCredentials(parameters);
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
    }
}


/***/ }),

/***/ "Ys4l":
/*!******************************************************************************************!*\
  !*** ./src/app/agentifai/commands/cards/acquisition/get-card-adhesion-configurations.ts ***!
  \******************************************************************************************/
/*! exports provided: GetCardAdhesionConfigurations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCardAdhesionConfigurations", function() { return GetCardAdhesionConfigurations; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetCardAdhesionConfigurations {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            String.raw `^body\.(paymentPercentages\.[^.]+|statementEmissionDays\.[^.]+|showCheckForCredit|onlineAdherence|creditLimitIncrementValue|minProductCreditLimit|maxProductCreditLimit)$`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const fullAccountKey = parameters.fullAccountKey;
        const productCode = parameters.productCode;
        return service.getCardAdhesionConfigurations(headers, fullAccountKey, productCode)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "e8h1");









let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "a+bK":
/*!************************************************************************************!*\
  !*** ./src/app/agentifai/commands/transfers/get-transfer-calendar-restrictions.ts ***!
  \************************************************************************************/
/*! exports provided: GetTransferCalendarRestrictions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTransferCalendarRestrictions", function() { return GetTransferCalendarRestrictions; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetTransferCalendarRestrictions {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizablePathRegex = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        return service.getCalendarToAllTranfers(headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizablePathRegex);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegex));
    }
}


/***/ }),

/***/ "aTnY":
/*!*****************************************************************************************!*\
  !*** ./src/app/agentifai/commands/transfers/internal/get-frequent-internal-transfer.ts ***!
  \*****************************************************************************************/
/*! exports provided: GetFrequentInternalTransfer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFrequentInternalTransfer", function() { return GetFrequentInternalTransfer; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetFrequentInternalTransfer {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            "body\.(operationName|operationId|amount)(?:$|\W)"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const idFrequentOperation = Number(this.request.getParameters()["idFrequentOperation"]);
        return service.getFrequentINTERNALoperation(headers, idFrequentOperation)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "apfW":
/*!*******************************************************************************!*\
  !*** ./src/app/agentifai/commands/cards/acquisition/execute-card-adhesion.ts ***!
  \*******************************************************************************/
/*! exports provided: ExecuteCardAdhesion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuteCardAdhesion", function() { return ExecuteCardAdhesion; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var src_app_models_operation_request_cards_CardRequestRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/operation/request/cards/CardRequestRequest */ "cnaj");




class ExecuteCardAdhesion {
    constructor(request, responseFactory, requestFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.requestFactory = requestFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            String.raw `^body\.(operationId|operationStatus|scheduling|invalidAccountIntervenLei83|safeMessageAdhesion|normalAdherenceErrorMsg)$`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        const credential = this.createCredentials(parameters);
        return service.executeCardAdhesion(headers, request, credential)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_cards_CardRequestRequest__WEBPACK_IMPORTED_MODULE_3__["CardRequestRequest"]();
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
    createCredentials(parameters) {
        return this.requestFactory.createCredentials(parameters);
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "bkYj":
/*!********************************************************************!*\
  !*** ./src/app/agentifai/commands/payments/get-payments-entity.ts ***!
  \********************************************************************/
/*! exports provided: GetPaymentsEntityCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPaymentsEntityCommand", function() { return GetPaymentsEntityCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetPaymentsEntityCommand {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const entityNumber = this.request.getParameters()["entityNumber"];
        return service.getPaymentsEntity(headers, entityNumber)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "bt0b":
/*!**************************************************************************!*\
  !*** ./src/app/agentifai/commands/payments/get-payments-general-data.ts ***!
  \**************************************************************************/
/*! exports provided: GetPaymentsGeneralData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPaymentsGeneralData", function() { return GetPaymentsGeneralData; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/commands/accounts/accounts-utils */ "il6X");
/* harmony import */ var src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/agentifai-utils */ "EZ/N");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");





class GetPaymentsGeneralData {
    constructor(request, responseFactory, accountsTransformer) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.accountsTransformer = accountsTransformer;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            "body\.("
                + "frequentOperations\.[^.]+\."
                + "(operationName|operationType|operationId|amount)"
                + "|accounts\.[^.]+\."
                + `(${src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_2__["AccountsUtils"].nonAnonymizedAccountsProperties})`
                + ")(?:$|\W)"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        return service.getPaymentsPageData(headers, false)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        var transformedResponse = this.transformResponse(response);
        return this.createResponse(transformedResponse, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
    transformResponse(response) {
        const data = src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__["AgentifaiUtils"].mapFromString(response.data);
        if (data.accounts != null) {
            data.accounts = this.accountsTransformer.transformAccounts(data.accounts);
            response.data = data;
        }
        return response;
    }
}


/***/ }),

/***/ "c1BC":
/*!**********************************************************************************!*\
  !*** ./src/app/models/operation/request/devices/VoiceTreatmentConsentRequest.ts ***!
  \**********************************************************************************/
/*! exports provided: VoiceTreatmentConsentRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceTreatmentConsentRequest", function() { return VoiceTreatmentConsentRequest; });
/* harmony import */ var _GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GenericOperationRequest */ "AwYQ");

class VoiceTreatmentConsentRequest extends _GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"] {
    constructor() {
        super();
    }
}


/***/ }),

/***/ "cIA/":
/*!**************************************************************!*\
  !*** ./src/app/models/cardMatrix/MatrixRequisitionSimExe.ts ***!
  \**************************************************************/
/*! exports provided: MatrixRequisitionSimExe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixRequisitionSimExe", function() { return MatrixRequisitionSimExe; });
/* harmony import */ var _operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../operation/request/GenericOperationRequest */ "AwYQ");

class MatrixRequisitionSimExe extends _operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"] {
    constructor() {
        super();
        this.adressSequenceNumber = null;
        this.motive = null;
    }
}


/***/ }),

/***/ "cnaj":
/*!**********************************************************************!*\
  !*** ./src/app/models/operation/request/cards/CardRequestRequest.ts ***!
  \**********************************************************************/
/*! exports provided: CardRequestRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardRequestRequest", function() { return CardRequestRequest; });
/* harmony import */ var _GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GenericOperationRequest */ "AwYQ");

class CardRequestRequest extends _GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"] {
    constructor() {
        super();
    }
}


/***/ }),

/***/ "eFPC":
/*!****************************************************************************!*\
  !*** ./src/app/agentifai/commands/loans/execute-personal-loan-adhesion.ts ***!
  \****************************************************************************/
/*! exports provided: ExecutePersonalLoanAdhesion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecutePersonalLoanAdhesion", function() { return ExecutePersonalLoanAdhesion; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var src_app_models_operation_request_loans_ConsumerLoanAdhesionRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/operation/request/loans/ConsumerLoanAdhesionRequest */ "4Rlb");
/* harmony import */ var src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/operation/request/loans/GenericPersonalCreditWorkElement */ "3ZgE");





class ExecutePersonalLoanAdhesion {
    constructor(request, requestFactory, responseFactory) {
        this.request = request;
        this.requestFactory = requestFactory;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            String.raw `^body\.(operationId|operationStatus)$`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        const credential = this.createCredentials(parameters);
        return service.executeLoanRequest(headers, request, credential)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_loans_ConsumerLoanAdhesionRequest__WEBPACK_IMPORTED_MODULE_3__["ConsumerLoanAdhesionRequest"]();
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
            const profession = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
            profession.cod = parameters.profession.cod;
            profession.description = parameters.profession.description;
            request.profissao = profession;
        }
        if (parameters.jobSector != null) {
            const jobSector = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
            jobSector.cod = parameters.jobSector.cod;
            jobSector.description = parameters.jobSector.description;
            request.sector = jobSector;
        }
        if (parameters.jobType != null) {
            const jobType = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
            jobType.cod = parameters.jobType.cod;
            jobType.description = parameters.jobType.description;
            request.trabalho = jobType;
        }
        if (parameters.contractType != null) {
            const contractType = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
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
    createCredentials(parameters) {
        return this.requestFactory.createCredentials(parameters);
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "ekNZ":
/*!*************************************************************************!*\
  !*** ./src/app/services/agentifai/agentifai-request-factory.service.ts ***!
  \*************************************************************************/
/*! exports provided: AgentifaiRequestFactoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentifaiRequestFactoryService", function() { return AgentifaiRequestFactoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_GenericKeyValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/GenericKeyValue */ "P4gV");
/* harmony import */ var src_app_models_operation_Credential__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/operation/Credential */ "+OAk");
/* harmony import */ var src_app_models_operation_Scheduling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/operation/Scheduling */ "sd8+");





let AgentifaiRequestFactoryService = class AgentifaiRequestFactoryService {
    createCredentials(parameters) {
        const credentialJson = parameters.credential;
        if (credentialJson) {
            const credential = new src_app_models_operation_Credential__WEBPACK_IMPORTED_MODULE_3__["Credential"]();
            credential.type = credentialJson.type;
            credential.value = credentialJson.value;
            return credential;
        }
    }
    createScheduling(parameters) {
        const schedulingParams = parameters.scheduling;
        const scheduling = new src_app_models_operation_Scheduling__WEBPACK_IMPORTED_MODULE_4__["Scheduling"]();
        scheduling.startDate = schedulingParams.startDate;
        scheduling.endDate = schedulingParams.endDate || "";
        return scheduling;
    }
    parseBool(val) {
        return !!JSON.parse(String(val).toLowerCase());
    }
    createGenericKeyValue(parameters) {
        return new src_app_models_GenericKeyValue__WEBPACK_IMPORTED_MODULE_2__["GenericKeyValue"](parameters.key, parameters.value);
    }
    createGenericKeyValueList(parameters) {
        return parameters.map(item => {
            return new src_app_models_GenericKeyValue__WEBPACK_IMPORTED_MODULE_2__["GenericKeyValue"](item.key, item.value);
        });
    }
};
AgentifaiRequestFactoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AgentifaiRequestFactoryService);



/***/ }),

/***/ "g2f/":
/*!***************************************************************!*\
  !*** ./src/app/agentifai/commands/cards/get-payment-cards.ts ***!
  \***************************************************************/
/*! exports provided: GetPaymentCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPaymentCards", function() { return GetPaymentCards; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/agentifai-utils */ "EZ/N");
/* harmony import */ var src_app_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/commands/cards/cards-utils */ "lw/H");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");





class GetPaymentCards {
    constructor(request, responseFactory, transformer) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.transformer = transformer;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            `body\.[^.]+\.(${src_app_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__["CardsUtils"].nonAnonymizedCardProperties})`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        return service.getCardsPaymentData(headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        var transformedResponse = this.transformResponse(response);
        return this.createResponse(transformedResponse, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
    transformResponse(response) {
        var data = src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_2__["AgentifaiUtils"].mapFromString(response.data);
        if (data != null) {
            data = this.transformer.addNewCardProperties(data);
        }
        response.data = data;
        return response;
    }
}


/***/ }),

/***/ "gASa":
/*!************************************************************************************************!*\
  !*** ./src/app/agentifai/commands/transfers/immediate/get-immediate-transfer-phone-numbers.ts ***!
  \************************************************************************************************/
/*! exports provided: GetImmediateTransferPhoneNumbersCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetImmediateTransferPhoneNumbersCommand", function() { return GetImmediateTransferPhoneNumbersCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetImmediateTransferPhoneNumbersCommand {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        return service.getPhoneNumbersForImmediateTransfers(headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "gI+7":
/*!**************************************************************************************!*\
  !*** ./src/app/agentifai/commands/transfers/immediate/execute-immediate-transfer.ts ***!
  \**************************************************************************************/
/*! exports provided: ExecuteImmediateTransferCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuteImmediateTransferCommand", function() { return ExecuteImmediateTransferCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_models_operation_request_transfers_TransferImmediateRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/operation/request/transfers/TransferImmediateRequest */ "lKfG");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");




class ExecuteImmediateTransferCommand {
    constructor(request, responseFactory, requestFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.requestFactory = requestFactory;
        this.nonAnonymizableRegexesPathsSuccess = [
            "headers.+",
            "status",
            `body\.(operationId|destinationType|operationCharge|operationStatus|transferState|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].scheduling()})`
        ];
        this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        const credential = this.createCredentials(parameters);
        return service.executeImmediateTransfer(headers, request, credential)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(resp => this.createErrorResponse(resp)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_transfers_TransferImmediateRequest__WEBPACK_IMPORTED_MODULE_2__["TransferImmediateRequest"]();
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
    createCredentials(parameters) {
        return this.requestFactory.createCredentials(parameters);
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
    }
}


/***/ }),

/***/ "il6X":
/*!***************************************************************!*\
  !*** ./src/app/agentifai/commands/accounts/accounts-utils.ts ***!
  \***************************************************************/
/*! exports provided: AccountsUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsUtils", function() { return AccountsUtils; });
class AccountsUtils {
}
AccountsUtils.nonAnonymizedAccountsProperties = "alias|accountType|accountName|activeCDForAllHolders|multipleHoldersInfoType|description";


/***/ }),

/***/ "iy9M":
/*!***************************************************************************!*\
  !*** ./src/app/agentifai/commands/callback/get-manager-available-time.ts ***!
  \***************************************************************************/
/*! exports provided: GetManagerAvailableTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetManagerAvailableTime", function() { return GetManagerAvailableTime; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetManagerAvailableTime {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            String.raw `^body\.\d$`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const destinationType = parameters["destinationType"];
        const date = parameters["date"];
        return service.getManagerAvailableTime(headers, destinationType, date)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "kajc":
/*!********************************************!*\
  !*** ./src/app/internal/internal-utils.ts ***!
  \********************************************/
/*! exports provided: InternalUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalUtils", function() { return InternalUtils; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/agentifai/commands/accounts/accounts-utils */ "il6X");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var _agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../agentifai/commands/cards/cards-utils */ "lw/H");




class InternalUtils {
    static getBaseUrl() {
        if (this.baseUrl.length > 0) {
            return this.baseUrl;
        }
        else {
            return this.endpoints[0];
        }
    }
    static getEndpointsWhitelist() {
        return [
            {
                "endpoint": "business\/accounts($|[?].+?$)",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    "body\.("
                        + `defaultAccount\.(${src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_1__["AccountsUtils"].nonAnonymizedAccountsProperties})`
                        + `|accounts\.[^.]+\.(${src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_1__["AccountsUtils"].nonAnonymizedAccountsProperties})`
                        + ")(?:$|\W)"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/accounts\/[^\/]+\/transactions($|[?].+?$)",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/accounts\/[^\/]+\/balances$",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    "body\.(accountCurrency|accountBalancesList\.[^.]+\.currency)(?:$|\W)"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/payments\/service\/executions",
                "httpMethod": "POST",
                "successWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault,
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/payments\/service\/simulations",
                "httpMethod": "POST",
                "successWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault,
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/payments\/generaldataforpayments\?.+",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    "body\.("
                        + "frequentOperations\.[^.]+\."
                        + "(operationName|operationType|operationId|amount)"
                        + "|accounts\.[^.]+\."
                        + `(${src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_1__["AccountsUtils"].nonAnonymizedAccountsProperties})`
                        + ")(?:$|\W)"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/payments\/entities",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/payments\/service\/frequent",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    "body\.(operationName|operationId|amount)(?:$|\W)"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/payments\/telecommunications\/configurations",
                "httpMethod": "GET",
                "successWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault,
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/payments\/telecommunications\/simulations",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    `body\.(operationId|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/payments\/telecommunications\/executions",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    `body\.(operationId|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/payments\/telecommunications\/frequent",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    "body\.(operationName|operationId|amount|paymentConfigurationCode|parentPaymentConfigurationCode)(?:$|\W)"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/operations\/.+\/proofs\/emails",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/operations\/.+\/proof",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/transfers\/internal\/simulations",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    `body\.(operationId|operationStatus|charges[.].*|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/transfers\/internal\/executions",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    `body\.(operationId|operationStatus|charges[.].*|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/transfers\/internal\/frequent",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    "body\.(operationName|operationId|amount)(?:$|\W)"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/transfers\/generaldatafortransfers",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    "body\.("
                        + "frequentOperations\.[^.]+\."
                        + "(operationName|operationType|operationId|amount)"
                        + "|accounts\.[^.]+\."
                        + `(${src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_1__["AccountsUtils"].nonAnonymizedAccountsProperties})`
                        + ")(?:$|\W)"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/transfers\/types\/validate\?targetAccount=.+",
                "httpMethod": "GET",
                "successWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault,
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/transfers\/calendarrestrictions\?transferTypeFilter=.+",
                "httpMethod": "GET",
                "successWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault,
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/transfers\/sepa\/simulations",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    `body\.(operationId|operationStatus|charges[.].*|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/transfers\/sepa\/executions",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    `body\.(operationId|operationStatus|charges[.].*|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/transfers\/sepa\/frequent",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    "body\.(operationName|operationId|amount)(?:$|\W)"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/transfers\/immediate\/simulations",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    `body\.(operationId|destinationType|operationCharge|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/transfers\/immediate\/executions",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    `body\.(operationId|destinationType|operationCharge|operationStatus|transferState|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/transfers\/immediate\/registration\/contacts",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/cards\/mbwaypartner\/clientStatus",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    `body\.(cards\.[^.]+\.(${_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__["CardsUtils"].nonAnonymizedCardProperties})|clientMBWay)`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/cards\/mbwaypartner\/cards",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    `body\.[^.]+\.(${_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__["CardsUtils"].nonAnonymizedCardProperties})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/cards\/mbwaypartner\/adhesion\/simulationsv2",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    `body\.(operationId|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/cards\/mbwaypartner\/adhesion\/executionsv2",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    `body\.(operationId|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/cards\/mbwaypartner\/acceptTransferCGD",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    `body\.(operationId|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/customers\/current\/contacts",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    "body\.contacts\.[^.]+\.(communicationMeans|contactType)(?:$|\W)"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/customers\/contracts\/credencialUnlockQuestions",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    "body\.(operationId|questions\.*|passwordRegeneration|forceDuplicateOperation)"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/customers\/contracts\/credencialUnlockAnswers",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    "body\.(operationId|success)"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/customers\/contracts\/contractUnlockQuestions",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    "body\.(questions\.*)"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/customers\/contracts\/contractUnlockAnswers",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    "body\.result"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/consent\/voiceTreatment",
                "httpMethod": "GET",
                "successWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault,
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/consent\/voiceTreatment",
                "httpMethod": "POST",
                "successWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault,
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/cards\/customercarddata",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    "body\.("
                        + "((cardAccounts\.[^.]+)|defaultCardAccount)\.("
                        + "currency|type|cardCodeType|statementIssueDateDescription|"
                        + "statementPaymentLimitDescription|productImageUrl|"
                        + `cards\.[^.]+\.(${_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__["CardsUtils"].nonAnonymizedCardProperties}))`
                        + "|defaultCardAccountBalances\.availableCredit)"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/cards\/accounts\/.+\/transactions",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    `body\.(`
                        + `cards\.[^.]+\.(${_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__["CardsUtils"].nonAnonymizedCardProperties})`
                        + `|`
                        + `cardAccountTransactions.transactions.[^.]+.(${_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__["CardsUtils"].nonAnonymizedCardTransactionProperties})`
                        + `)`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/cards\?targetCardOperationType=.+",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    `body\.[^.]+\.(${_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_3__["CardsUtils"].nonAnonymizedCardProperties})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/cards\/payments\/simulations",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    `body\.(operationId|operationStatus|charges.*|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/cards\/payments\/executions",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    `body\.(operationId|operationStatus|charges.*|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/cards\/activation\/.+\/.+\/activateCard",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    String.raw `^body\.(success|failureReason)$`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/cards\/phoneNumber",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/customers\/manager",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    String.raw `^body\.serviceModel$`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/customers\/manager\/callback\/configuration",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    String.raw `^body\.(callbackDestinations\.\d\.periods\.\d|minDate|maxDate)$`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/customers\/manager\/callback\/availabletime",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    String.raw `^body\.\d$`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/customers\/manager\/callback",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/loans\/consumer\/calculatorV2",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    String.raw `^body\.(operationId|success|errorMessage|simulationDate|amountMin|amountMax)$`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/loans\/consumer\/adhesionGeneralDataV2",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    String.raw `^body\.(pedidoExistenteMes|validClient|client95_96|professionalInformation\..+|accounts\.[^.]+\.(${src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_1__["AccountsUtils"].nonAnonymizedAccountsProperties}))$`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/loans\/consumer\/adhesionSimulationV2",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    String.raw `^body\.(operationId|success|errorMessage|simulationDate|amountMin|amountMax)$`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/loans\/consumer\/adhesionExecutionV2",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    String.raw `^body\.(operationId|operationStatus)$`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/content\/privateContent\/features\/.+",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/content\/privateContent\/landingPage\/banner\/disable",
                "httpMethod": "PUT",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/showcase\/cards",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    String.raw `(name|descriptionHtml|otherInfo)$`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/showcase\/characteristics\?characteristicsId=.+",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    String.raw `^body\.productCharacteristicsList\.[0-9]+\.(title|description)$`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/showcase\/productdocument\?productCode=.+\&docType=.+",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/accounts\?targetOperationType=NEW_CARD_REQUEST",
                "httpMethod": "GET",
                "successWhitelist": [
                    'headers.(?!Set-Cookie).+',
                    'status'
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/cards\/requests\/configurations\?fullAccountKey=.+\&productCode=.+",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    String.raw `^body\.(paymentPercentages\.[^.]+|statementEmissionDays\.[^.]+|showCheckForCredit|onlineAdherence|creditLimitIncrementValue|minProductCreditLimit|maxProductCreditLimit)$`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/cards\/requests\/simulations",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    String.raw `^body\.(operationId|operationStatus|scheduling|invalidAccountIntervenLei83|safeMessageAdhesion|normalAdherenceErrorMsg)$`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/cards\/requests\/initNewCreditCard",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    String.raw `^body\.(operationId|showCardCreditDocuments)$`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/cards\/requests\/executions",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    String.raw `^body\.(operationId|operationStatus|scheduling|invalidAccountIntervenLei83|safeMessageAdhesion|normalAdherenceErrorMsg)$`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/customers\/updateClientInformation\/validity",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    "body.*"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/customers\/updateClientInformation\/address",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    "body.expirado"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/customers\/updateClientInformation\/personal",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    "body.expirado"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/customers\/updateClientInformation\/professional",
                "httpMethod": "GET",
                "successWhitelist": [
                    'headers.(?!Set-Cookie).+',
                    'status',
                    String.raw `^body\.(expirado|trabalharPorContaDoutrem|empregadoCgd)$`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/customers\/updateClientInformation\/list\/\d*",
                "httpMethod": "GET",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    "body.*"
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/customers\/updateClientInformation\/simulation",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    `body\.(operationId|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/customers\/updateClientInformation\/execution",
                "httpMethod": "POST",
                "successWhitelist": [
                    "headers.(?!Set-Cookie).+",
                    "status",
                    `body\.(operationId|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/credentialsmanagement\/credentials\/\d*",
                "httpMethod": "GET",
                "successWhitelist": [
                    'headers.(?!Set-Cookie).+',
                    'status',
                    String.raw `body\.credentials\.[^.]+\.status`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/credentialsmanagement\/matrixrequisition\/config",
                "httpMethod": "GET",
                "successWhitelist": [
                    'headers.(?!Set-Cookie).+',
                    'status',
                    String.raw `body\.((adressList\.[^.]+\.adressSequenceNumber)|motiveList\.[^.]+)`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/credentialsmanagement\/matrixrequisition\/simulations",
                "httpMethod": "POST",
                "successWhitelist": [
                    'headers.(?!Set-Cookie).+',
                    'status',
                    `body\.(operationId|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/credentialsmanagement\/matrixrequisition\/executions",
                "httpMethod": "POST",
                "successWhitelist": [
                    'headers.(?!Set-Cookie).+',
                    'status',
                    `body\.(operationId|operationStatus|customerMessage|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/credentialsmanagement\/matrixactivation\/simulations",
                "httpMethod": "POST",
                "successWhitelist": [
                    'headers.(?!Set-Cookie).+',
                    'status',
                    `body\.(operationId|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/credentialsmanagement\/matrixactivation\/executions",
                "httpMethod": "POST",
                "successWhitelist": [
                    'headers.(?!Set-Cookie).+',
                    'status',
                    `body\.(operationId|operationStatus|customerMessage|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/cards\/cashadvance\/simulations$",
                "httpMethod": "POST",
                "successWhitelist": [
                    'headers.(?!Set-Cookie).+',
                    "status",
                    `body\.(operationId|operationStatus|operationCost|commissions|tax|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/cards\/cashadvance\/executions$",
                "httpMethod": "POST",
                "successWhitelist": [
                    'headers.(?!Set-Cookie).+',
                    "status",
                    `body\.(operationId|operationStatus|operationCost|commissions|tax|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/directdebits\/detail($|[?].+?$)",
                "httpMethod": "GET",
                "successWhitelist": [
                    'headers.(?!Set-Cookie).+',
                    "status",
                    String.raw `^body\.(validToChange|limitDate|maxAmount|lastUpdateDate|situation|creationDate)$`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/directdebits($|[?].+?$)",
                "httpMethod": "GET",
                "successWhitelist": [
                    'headers.(?!Set-Cookie).+',
                    "status",
                    String.raw `^body\.directDebits\.[^.]+\.(creationDate|situation)$`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/directdebits\/config\/simulations$",
                "httpMethod": "POST",
                "successWhitelist": [
                    'headers.(?!Set-Cookie).+',
                    "status",
                    `body\.(operationId|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/directdebits\/config\/executions$",
                "httpMethod": "POST",
                "successWhitelist": [
                    'headers.(?!Set-Cookie).+',
                    "status",
                    `body\.(operationId|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/directdebits\/revoke$",
                "httpMethod": "POST",
                "successWhitelist": [
                    'headers.(?!Set-Cookie).+',
                    "status",
                    `body\.(`
                        + `operationId|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()}`
                        + `|`
                        + `directDebit\.[^.]+\.(creationDate|creditorEntity|situation|directDebitTransaction\.[^.]+\.(date|amount|revog|type))`
                        + `)`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/directdebits\/revoke\/simulations$",
                "httpMethod": "POST",
                "successWhitelist": [
                    'headers.(?!Set-Cookie).+',
                    "status",
                    `body\.(operationId|operationStatus|success|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/directdebits\/revoke\/executions$",
                "httpMethod": "POST",
                "successWhitelist": [
                    'headers.(?!Set-Cookie).+',
                    "status",
                    `body\.(operationId|operationStatus|success|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/customers\/nif\/tooltip\/info.*",
                "httpMethod": "GET",
                "successWhitelist": [
                    'headers.(?!Set-Cookie).+',
                    "status",
                    `body\.tooltipInfoText`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/directdebits\/changestate\/*",
                "httpMethod": "POST",
                "successWhitelist": [
                    'headers.(?!Set-Cookie).+',
                    "status",
                    `body\.(operationId|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/directdebits\/transactions($|[?].+?$)",
                "httpMethod": "GET",
                "successWhitelist": [
                    'headers.(?!Set-Cookie).+',
                    'status',
                    String.raw `^body\.directDebitTransaction\.[^.]+\.(date|type|revog|nsLote|nsRegLote)$`
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            },
            {
                "endpoint": "business\/accounts\/[^\/]+\/getIbanPdf$",
                "httpMethod": "GET",
                "successWhitelist": [
                    'headers.(?!Set-Cookie).+',
                    'status'
                ],
                "failureWhitelist": src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault
            }
        ];
    }
}
InternalUtils.endpointKey = "baseEndpointKey";
InternalUtils.baseUrl = "";
InternalUtils.endpoints = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoints;


/***/ }),

/***/ "lKfG":
/*!********************************************************************************!*\
  !*** ./src/app/models/operation/request/transfers/TransferImmediateRequest.ts ***!
  \********************************************************************************/
/*! exports provided: TransferImmediateRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferImmediateRequest", function() { return TransferImmediateRequest; });
/* harmony import */ var src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/operation/request/GenericOperationRequest */ "AwYQ");

class TransferImmediateRequest extends src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"] {
    constructor() {
        super();
        this.amount = '';
        this.message = '';
        this.destinationPhone = '';
        this.cardNumberMasked = '';
        this.useMbwayPartner = false;
    }
}


/***/ }),

/***/ "lw/H":
/*!*********************************************************!*\
  !*** ./src/app/agentifai/commands/cards/cards-utils.ts ***!
  \*********************************************************/
/*! exports provided: CardsUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsUtils", function() { return CardsUtils; });
class CardsUtils {
}
CardsUtils.nonAnonymizedCardProperties = `cardAlias|cardName|cardAccountCurrency|prePaidCard|prePaidDualCreditCard|active|cancelled|virtualCard|(transactions.[^.]+.(creditAmount|debitAmount))`;
CardsUtils.nonAnonymizedCardTransactionProperties = "creditAmount|debitAmount";


/***/ }),

/***/ "mxeL":
/*!***************************************************************************************!*\
  !*** ./src/app/agentifai/commands/transfers/immediate/simulate-immediate-transfer.ts ***!
  \***************************************************************************************/
/*! exports provided: SimulateImmediateTransferCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulateImmediateTransferCommand", function() { return SimulateImmediateTransferCommand; });
/* harmony import */ var src_app_models_operation_request_transfers_TransferImmediateRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/operation/request/transfers/TransferImmediateRequest */ "lKfG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");




class SimulateImmediateTransferCommand {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexesPathsSuccess = [
            "headers.+",
            "status",
            `body\.(operationId|destinationType|operationCharge|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].scheduling()})`
        ];
        this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        return service.simulateImmediateTransfer(headers, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(resp => this.createErrorResponse(resp)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_transfers_TransferImmediateRequest__WEBPACK_IMPORTED_MODULE_0__["TransferImmediateRequest"]();
        request.forceDuplicateOperation = parameters.forceDuplicateOperation;
        request.amount = parameters.amount;
        request.message = parameters.message;
        request.destinationPhone = parameters.destinationPhone;
        request.cardNumberMasked = parameters.cardNumberMasked;
        request.useMbwayPartner = parameters.useMbwayPartner;
        request.scheduling = null;
        return request;
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
    }
}


/***/ }),

/***/ "n/kK":
/*!******************************************************************************************************!*\
  !*** ./src/app/agentifai/commands/payments/telecommunications/simulate-telecommunication-payment.ts ***!
  \******************************************************************************************************/
/*! exports provided: SimulateTelecommunicationPaymentCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulateTelecommunicationPaymentCommand", function() { return SimulateTelecommunicationPaymentCommand; });
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_models_operation_request_payments_TelecommunicationsPaymentRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/operation/request/payments/TelecommunicationsPaymentRequest */ "QzTv");




class SimulateTelecommunicationPaymentCommand {
    constructor(request, requestFactory, responseFactory) {
        this.request = request;
        this.requestFactory = requestFactory;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexesPathsSuccess = [
            "headers.+",
            "status",
            `body\.(operationId|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_0__["Anonymization"].scheduling()})`
        ];
        this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_0__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        return service.simulateTelecomPayment(headers, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(resp => this.createErrorResponse(resp)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_payments_TelecommunicationsPaymentRequest__WEBPACK_IMPORTED_MODULE_3__["TelecommunicationsPaymentRequest"]();
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
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
    }
}


/***/ }),

/***/ "nYpB":
/*!*******************************************************!*\
  !*** ./src/app/agentifai/models/agentifai-request.ts ***!
  \*******************************************************/
/*! exports provided: AgentifaiRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentifaiRequest", function() { return AgentifaiRequest; });
class AgentifaiRequest {
    constructor(id, data) {
        this.id = id;
        this.data = data;
    }
    getParameters() {
        return this.data["parameters"];
    }
    getHeaders() {
        return this.data["headers"];
    }
}


/***/ }),

/***/ "oUY6":
/*!*****************************************************************************!*\
  !*** ./src/app/services/environment-service/environment-service.service.ts ***!
  \*****************************************************************************/
/*! exports provided: ENVS, EnvironmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENVS", function() { return ENVS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentService", function() { return EnvironmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




var ENVS;
(function (ENVS) {
    ENVS[ENVS["BROWSER"] = 0] = "BROWSER";
    ENVS[ENVS["DEV"] = 1] = "DEV";
    ENVS[ENVS["DEV2"] = 2] = "DEV2";
    ENVS[ENVS["TI"] = 3] = "TI";
    ENVS[ENVS["CQ"] = 4] = "CQ";
    ENVS[ENVS["PROD"] = 5] = "PROD";
})(ENVS || (ENVS = {}));
let EnvironmentService = class EnvironmentService {
    constructor(platform) {
        this.platform = platform;
        this.DEVELOPMENT_MODE = true;
        this.ENV_URLS = [
            'http://localhost:8100/pceApi/rest/v1/',
            'http://10.52.33.69:8080/pceApi/rest/v1/',
            'http://10.52.3.80:28080/pceApi/rest/v1/',
            'http://ti-app.cgd.pt/pceApi/rest/v1/',
            'https://app.cqcgd.pt/pceApi/rest/v1/',
            'https://qoba.cgd.pt/pceApi/rest/v1/',
            'https://app.cgd.pt/pceApi/rest/v1/'
        ];
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
        this.aliceStateChangeCallback = () => { };
        this.isAgentifaiLoggerEnabled = true;
        this.ENVS_AUX = ENVS;
        this.isIPhone = function () {
            if (this.deviceType == this.ENVS_CODES.IOS_SMARTPHONE.code || this.deviceType == this.ENVS_CODES.IOS_TABLET.code) {
                return true;
            }
            else {
                return false;
            }
        };
        this.isAndroid = function () {
            if (this.deviceType == this.ENVS_CODES.ANDROID.codeSmartPhone || this.deviceType == this.ENVS_CODES.ANDROID.codeTablet) {
                return true;
            }
            else {
                return false;
            }
        };
        this.isTablet = function () {
            if (this.deviceType == this.ENVS_CODES.IOS_TABLET.code || this.deviceType == this.ENVS_CODES.ANDROID.codeTablet) {
                return true;
            }
            else {
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
            }
            else if (this.ENVS_AUX.DEV2 === this.SELECTED_ENV) {
                this.SELECTED_ENV = this.ENVS_AUX.TI;
                this.baseUrl = this.ENV[this.SELECTED_ENV];
            }
            else if (this.ENVS_AUX.TI === this.SELECTED_ENV) {
                this.SELECTED_ENV = this.ENVS_AUX.CQ;
                this.baseUrl = this.ENV[this.SELECTED_ENV];
            }
            else if (this.ENVS_AUX.CQ === this.SELECTED_ENV) {
                this.SELECTED_ENV = this.ENVS_AUX.PROD;
                this.baseUrl = this.ENV[this.SELECTED_ENV];
            }
            else if (this.ENVS_AUX.PROD === this.SELECTED_ENV) {
                this.SELECTED_ENV = this.ENVS_AUX.DEV;
                this.baseUrl = this.ENV[this.SELECTED_ENV];
            }
            else {
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
                    }
                    else {
                        this.deviceType = this.ENVS_CODES.ANDROID.codeSmartPhone;
                    }
                }
                else if (platform.is('iphone')) {
                    this.deviceType = this.ENVS_CODES.IOS_SMARTPHONE.code;
                }
                else if (platform.is('ipad')) {
                    this.deviceType = this.ENVS_CODES.IOS_TABLET.code;
                }
            }
            this.baseUrl = this.ENV_URLS[this.DEFAULT_ENV];
        }
        else {
            console.log("BROWSER");
            this.baseUrl = this.ENV_URLS[ENVS.BROWSER];
            this.SELECTED_ENV = ENVS.BROWSER;
            this.isBrowser = true;
            this.appVersion = "1.0.0";
            this.deviceType = this.ENVS_CODES.ANDROID.codeSmartPhone;
        }
        this.platform.ready().then(() => {
            if (this.platform && this.platform.is("cordova")) {
                IRoot.isRooted((result) => {
                    this.isDeviceRooted = result;
                }, (error) => {
                    console.log("error checking if device rooted: " + error);
                });
            }
        });
        console.log("url :" + this.baseUrl);
    }
    /***** Alice methods *****/
    isAliceActive() {
        return this.aliceActive;
    }
    openAlice() {
        this.aliceActive = true;
    }
    closeAlice() {
        this.aliceActive = false;
    }
    getAgentifaiConfiguration() {
        return {
            apiUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].assistantConfiguration.apiUrl,
            apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].assistantConfiguration.apiKey
        };
    }
};
EnvironmentService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
EnvironmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EnvironmentService);



/***/ }),

/***/ "oZWX":
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/*! exports provided: Api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_environment_service_environment_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/environment-service/environment-service.service */ "oUY6");
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils/utils.service */ "HPR3");
/* harmony import */ var src_app_internal_internal_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/internal/internal-utils */ "kajc");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");







let Api = class Api {
    constructor(http, env, utils) {
        this.http = http;
        this.env = env;
        this.utils = utils;
        this.developmentMode = true;
        this.HEADERS_KEYS_MAPPING_ALICE = {
            "language": "X-CGD-APP-LANGUAGE",
            "requestId": "X-CGD-APP-Bot-Request-Id"
        };
        this.getHeaders = function (fromAgentifai, agentifaiHeaders) {
            let headers = {
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
            let headers = this.getHeaders(fromAgentifai, agentifaiHeaders);
            headers["Authorization"] = value;
            return headers;
        };
        this.getHeadersAlice = function () {
            return this.getHeaders(true);
        };
    }
    //////////////////////////
    ///// PUBLIC METHODS /////
    //////////////////////////
    ///// LOGIN /////
    postLogin(auth, serviceUrl, isFingerPrint, loyaltyCode) {
        let headers = this.getHeadersAuthorization("Basic " + auth, false, null);
        if (loyaltyCode) {
            headers["X-CGD-APP-LOYALTY-CODE"] = loyaltyCode;
        }
        let endpoint = this.createUrl(serviceUrl);
        if (this.developmentMode) {
            console.log("POST " + endpoint);
            console.log("HEADERS: " + JSON.stringify(headers));
        }
        this.http.clearCookies();
        this.http.setDataSerializer("json");
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.http.post(endpoint, {}, headers).then((resp) => {
            if (resp && resp.data) {
                let data = JSON.parse(resp.data);
                return { headers: resp.headers, data: data };
            }
            else {
                return resp;
            }
        }, (err) => {
            if (isFingerPrint) {
                this.utils.handleError({ error: { error: err, isLogin: true, isFingerPrint: true } });
                throw err;
            }
            else {
                this.utils.handleError({ error: { error: err, isLogin: true } });
                throw err;
            }
        }));
    }
    ///// PUBLIC GET /////
    genericGetMethod(serviceUrl, notEncodeUrl) {
        return this.genericGetMethodInternal(serviceUrl, false, null, notEncodeUrl);
    }
    genericGetMethodAgentifai(serviceUrl, agentifaiHeaders, notEncodeUrl) {
        return this.genericGetMethodInternal(serviceUrl, true, agentifaiHeaders, notEncodeUrl);
    }
    genericGetMethodInternal(serviceUrl, fromAgentifai, agentifaiHeaders, notEncodeUrl) {
        let url = encodeURI(serviceUrl);
        if (notEncodeUrl) {
            url = serviceUrl;
        }
        let headers = this.getHeaders(fromAgentifai, agentifaiHeaders);
        let endpoint = this.createUrl(url);
        if (this.developmentMode) {
            console.log("GET " + endpoint);
            console.log("HEADERS: " + JSON.stringify(headers));
        }
        this.http.setDataSerializer("json");
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.http.get(endpoint, null, headers).then(resp => {
            if (resp && resp.data && !fromAgentifai) {
                return JSON.parse(resp.data);
            }
            else {
                return resp;
            }
        }, (err) => {
            this.utils.handleError({ error: { error: err } });
            throw err;
        }));
    }
    ///// PUBLIC GET WITH SPECIFIC LANGUAGE /////
    genericGetMethodWithLanguage(serviceUrl, languageCode, notEncodeUrl) {
        let url = encodeURI(serviceUrl);
        if (notEncodeUrl) {
            url = serviceUrl;
        }
        let headers = this.getHeaders(false, null);
        // force language header with value received
        headers["X-CGD-APP-LANGUAGE"] = languageCode;
        let endpoint = this.createUrl(url);
        if (this.developmentMode) {
            console.log("GET " + endpoint);
            console.log("HEADERS: " + JSON.stringify(headers));
        }
        this.http.setDataSerializer("json");
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.http.get(endpoint, null, headers).then(resp => {
            if (resp && resp.data) {
                return JSON.parse(resp.data);
            }
            else {
                return resp;
            }
        }, (err) => {
            this.utils.handleError({ error: { error: err } });
            throw err;
        }));
    }
    ///// PUBLIC POST WITH INPUT /////
    genericPostMethodWithInput(input, serviceUrl) {
        return this.genericPostMethodWithInputInternal(input, serviceUrl, false, null);
    }
    genericPostMethodWithInputAgentifai(input, serviceUrl, agentifaiHeaders) {
        return this.genericPostMethodWithInputInternal(input, serviceUrl, true, agentifaiHeaders);
    }
    genericPostMethodWithInputInternal(input, serviceUrl, fromAgentifai, agentifaiHeaders) {
        let headers = this.getHeaders(fromAgentifai, agentifaiHeaders);
        var payload = input != null ? input : {};
        let endpoint = this.createUrl(serviceUrl);
        if (this.developmentMode) {
            console.log("POST " + endpoint);
            console.log("HEADERS: " + JSON.stringify(headers));
            console.log("BODY: " + JSON.stringify(payload));
        }
        this.http.setDataSerializer("json");
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.http.post(endpoint, payload, headers).then(resp => {
            this.utils.APPSetTimeout();
            if (resp && resp.data && !fromAgentifai) {
                return JSON.parse(resp.data);
            }
            else {
                return resp;
            }
        }, (err) => {
            this.utils.handleError({ error: { error: err } });
            throw err;
        }));
    }
    /////////////////////////////////
    ///// AUTHENTICATED METHODS /////
    /////////////////////////////////
    ///// AUTHENTICATED GET /////
    genericGetAuthenticatedMethod(serviceUrl, notEncodeUrl, credential) {
        return this.genericGetAuthenticatedMethodInternal(serviceUrl, false, null, notEncodeUrl, credential);
    }
    genericGetAuthenticatedMethodAgentifai(serviceUrl, agentifaiHeaders, notEncodeUrl, credential) {
        return this.genericGetAuthenticatedMethodInternal(serviceUrl, true, agentifaiHeaders, notEncodeUrl, credential);
    }
    genericGetAuthenticatedMethodInternal(serviceUrl, fromAgentifai, agentifaiHeaders, notEncodeUrl, credential) {
        if (credential == null) {
            this.utils.resetCredentials();
        }
        let url = encodeURI(serviceUrl);
        if (notEncodeUrl) {
            url = serviceUrl;
        }
        let headers = null;
        if (credential && credential.type) {
            headers = this.getHeadersAuthorization(credential.type + " " + credential.value, fromAgentifai, agentifaiHeaders);
        }
        else {
            headers = this.getHeaders(fromAgentifai, agentifaiHeaders);
        }
        let endpoint = this.createUrl(url);
        if (this.developmentMode) {
            console.log("GET " + endpoint);
            console.log("HEADERS: " + JSON.stringify(headers));
        }
        this.http.setDataSerializer("json");
        this.http.setRequestTimeout(300000);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.http.get(endpoint, {}, headers).then(resp => {
            this.utils.APPSetTimeout();
            if (resp && resp.data && !fromAgentifai) {
                return JSON.parse(resp.data);
            }
            else {
                return resp;
            }
        }, (err) => {
            this.utils.handleError({ error: { error: err } });
            throw err;
        }));
    }
    ///// AUTHENTICATED POST /////
    genericPostAuthenticatedMethod(serviceUrl) {
        return this.genericPostAuthenticatedMethodInternal(serviceUrl, false, null);
    }
    genericPostAuthenticatedMethodAgentifai(serviceUrl, agentifaiHeaders) {
        return this.genericPostAuthenticatedMethodInternal(serviceUrl, true, agentifaiHeaders);
    }
    genericPostAuthenticatedMethodInternal(serviceUrl, fromAgentifai, agentifaiHeaders) {
        let headers = this.getHeaders(fromAgentifai, agentifaiHeaders);
        let endpoint = this.createUrl(serviceUrl);
        if (this.developmentMode) {
            console.log("POST " + endpoint);
            console.log("HEADERS: " + JSON.stringify(headers));
        }
        this.http.setDataSerializer("json");
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.http.post(endpoint, {}, headers).then(resp => {
            this.utils.APPSetTimeout();
            if (resp && resp.data && !fromAgentifai) {
                return JSON.parse(resp.data);
            }
            else {
                return resp;
            }
        }, (err) => {
            this.utils.handleError({ error: { error: err } });
            throw err;
        }));
    }
    ///// AUTHENTICATED POST WITH INPUT /////
    genericPostAuthenticatedMethodWithInput(input, serviceUrl, credential) {
        return this.genericPostAuthenticatedMethodWithInputInternal(input, serviceUrl, false, null, credential);
    }
    genericPostAuthenticatedMethodWithInputAgentifai(input, serviceUrl, agentifaiHeaders, credential) {
        return this.genericPostAuthenticatedMethodWithInputInternal(input, serviceUrl, true, agentifaiHeaders, credential);
    }
    genericPostAuthenticatedMethodWithInputInternal(input, serviceUrl, fromAgentifai, agentifaiHeaders, credential) {
        if (credential == null) {
            this.utils.resetCredentials();
        }
        let headers = null;
        if (credential && credential.type) {
            headers = this.getHeadersAuthorization(credential.type + " " + credential.value, fromAgentifai, agentifaiHeaders);
        }
        else {
            headers = this.getHeaders(fromAgentifai, agentifaiHeaders);
        }
        var payload = input != null ? input : {};
        let endpoint = this.createUrl(serviceUrl);
        if (this.developmentMode) {
            console.log("POST " + endpoint);
            console.log("HEADERS: " + JSON.stringify(headers));
            console.log("BODY: " + JSON.stringify(payload));
        }
        this.http.setDataSerializer("json");
        this.http.setRequestTimeout(300000);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.http.post(endpoint, payload, headers)
            .then(resp => {
            this.utils.APPSetTimeout();
            if (resp && resp.data && !fromAgentifai) {
                return JSON.parse(resp.data);
            }
            else {
                return resp;
            }
        }, (err) => {
            this.utils.handleError({ error: { error: err } });
            throw err;
        }));
    }
    ///// AUTHENTICATED PUT /////
    genericPutAuthenticatedMethod(serviceUrl) {
        return this.genericPutAuthenticatedMethodInternal(serviceUrl, false, null);
    }
    genericPutAuthenticatedMethodAgentifai(serviceUrl, agentifaiHeaders) {
        return this.genericPutAuthenticatedMethodInternal(serviceUrl, true, agentifaiHeaders);
    }
    genericPutAuthenticatedMethodInternal(serviceUrl, fromAgentifai, agentifaiHeaders) {
        let headers = this.getHeaders(fromAgentifai, agentifaiHeaders);
        let endpoint = this.createUrl(serviceUrl);
        if (this.developmentMode) {
            console.log("PUT " + endpoint);
            console.log("HEADERS: " + JSON.stringify(headers));
        }
        this.http.setDataSerializer("json");
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.http.put(endpoint, {}, headers).then(resp => {
            this.utils.APPSetTimeout();
            if (resp && resp.data && !fromAgentifai) {
                return JSON.parse(resp.data);
            }
            else {
                return resp;
            }
        }, (err) => {
            this.utils.handleError({ error: { error: err } });
            throw err;
        }));
    }
    ///// AUTHENTICATED PUT WITH INPUT /////
    genericPutAuthenticatedMethodWithInput(input, serviceUrl) {
        return this.genericPutAuthenticatedMethodWithInputInternal(input, serviceUrl, false, null);
    }
    genericPutAuthenticatedMethodWithInputAgentifai(input, serviceUrl, agentifaiHeaders) {
        return this.genericPutAuthenticatedMethodWithInputInternal(input, serviceUrl, true, agentifaiHeaders);
    }
    genericPutAuthenticatedMethodWithInputInternal(input, serviceUrl, fromAgentifai, agentifaiHeaders) {
        let headers = this.getHeaders(fromAgentifai, agentifaiHeaders);
        var payload = input != null ? input : {};
        let endpoint = this.createUrl(serviceUrl);
        if (this.developmentMode) {
            console.log("PUT " + endpoint);
            console.log("HEADERS: " + JSON.stringify(headers));
            console.log("BODY: " + JSON.stringify(payload));
        }
        this.http.setDataSerializer("json");
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.http.put(endpoint, payload, headers).then(resp => {
            this.utils.APPSetTimeout();
            if (resp && resp.data && !fromAgentifai) {
                return JSON.parse(resp.data);
            }
            else {
                return resp;
            }
        }, (err) => {
            this.utils.handleError({ error: { error: err } });
            throw err;
        }));
    }
    ///// AUTHENTICATED DELETE /////
    genericDeleteAuthenticatedMethod(serviceUrl) {
        return this.genericDeleteAuthenticatedMethodInternal(serviceUrl, false, null);
    }
    genericDeleteAuthenticatedMethodAgentifai(serviceUrl, agentifaiHeaders) {
        return this.genericDeleteAuthenticatedMethodInternal(serviceUrl, true, agentifaiHeaders);
    }
    genericDeleteAuthenticatedMethodInternal(serviceUrl, fromAgentifai, agentifaiHeaders) {
        let headers = this.getHeaders(fromAgentifai, agentifaiHeaders);
        let endpoint = this.createUrl(serviceUrl);
        if (this.developmentMode) {
            console.log("DELETE " + endpoint);
            console.log("HEADERS: " + JSON.stringify(headers));
        }
        this.http.setDataSerializer("json");
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.http.delete(endpoint, null, headers).then(resp => {
            this.utils.APPSetTimeout();
            if (resp && resp.data && !fromAgentifai) {
                return JSON.parse(resp.data);
            }
            else {
                return resp;
            }
        }, (err) => {
            this.utils.handleError({ error: { error: err } });
            throw err;
        }));
    }
    ///// LOGOUT /////
    deleteLogout(serviceUrl) {
        return this.deleteLogoutInternal(serviceUrl, false, null);
    }
    deleteLogoutAgentifai(serviceUrl, agentifaiHeaders) {
        return this.deleteLogoutInternal(serviceUrl, true, agentifaiHeaders);
    }
    deleteLogoutInternal(serviceUrl, fromAgentifai, agentifaiHeaders) {
        let headers = this.getHeaders(fromAgentifai, agentifaiHeaders);
        let endpoint = this.createUrl(serviceUrl);
        if (this.developmentMode) {
            console.log("DELETE " + endpoint);
            console.log("HEADERS: " + JSON.stringify(headers));
        }
        this.http.setDataSerializer("json");
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.http.delete(endpoint, null, headers).then(resp => {
            if (resp && resp.data && !fromAgentifai) {
                return JSON.parse(resp.data);
            }
            else {
                return resp;
            }
        }, (err) => {
            this.utils.handleError({ error: { error: err } });
            throw err;
        }));
    }
    genericClearCookies() {
        this.utils.APPClearTimeout();
        if (!this.env.isBrowser) {
            this.http.clearCookies();
        }
    }
    createUrl(endpoint) {
        return src_app_internal_internal_utils__WEBPACK_IMPORTED_MODULE_4__["InternalUtils"].getBaseUrl() + endpoint;
    }
};
Api.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"] },
    { type: src_app_services_environment_service_environment_service_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"] },
    { type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"] }
];
Api = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], Api);



/***/ }),

/***/ "ovxX":
/*!*********************************************************************!*\
  !*** ./src/app/agentifai/commands/get-current-customer-contacts.ts ***!
  \*********************************************************************/
/*! exports provided: GetCurrentCustomerContactsCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentCustomerContactsCommand", function() { return GetCurrentCustomerContactsCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetCurrentCustomerContactsCommand {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            "body\.contacts\.[^.]+\.(communicationMeans|contactType)(?:$|\W)"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        return service.getCustomerContacts(headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "pLv3":
/*!********************************************************!*\
  !*** ./src/app/agentifai/models/agentifai-response.ts ***!
  \********************************************************/
/*! exports provided: AgentifaiResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentifaiResponse", function() { return AgentifaiResponse; });
class AgentifaiResponse {
    constructor(requestId, success, result) {
        this.requestId = requestId;
        this.success = success;
        this.result = result;
    }
}


/***/ }),

/***/ "pTIB":
/*!*********************************************************************!*\
  !*** ./src/app/services/assistant-utils/assistant-utils.service.ts ***!
  \*********************************************************************/
/*! exports provided: AssistantUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistantUtilsService", function() { return AssistantUtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_environment_service_environment_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/environment-service/environment-service.service */ "oUY6");
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage/storage.service */ "E2f4");




let AssistantUtilsService = class AssistantUtilsService {
    constructor(environment, storage) {
        this.environment = environment;
        this.storage = storage;
    }
    resetDefaultConfig() {
        const config = this.getDefaultAssistantConfig();
        return this.setConfig(config.apiUrl, config.apiKey, config.settings);
    }
    getConfig() {
        const apiUrl = this.getApiUrl();
        const apiKey = this.getApiKey();
        const settings = this.getSettings();
        return Promise.all([apiUrl, apiKey, settings]);
    }
    setConfig(apiUrl, apiKey, settings) {
        return Promise.all([
            this.storage.setApiUrl(apiUrl),
            this.storage.setApiKey(apiKey),
            this.storage.setSettings(settings)
        ]);
    }
    getApiUrl() {
        const defaultApiUrl = this.getDefaultAssistantConfig().apiUrl;
        return new Promise((resolve, _) => {
            this.storage.getApiUrl()
                .then(result => {
                if (result != null) {
                    resolve(result);
                }
                else {
                    resolve(defaultApiUrl);
                }
            })
                .catch(() => {
                resolve(defaultApiUrl);
            });
        });
    }
    getApiKey() {
        const defaultApiKey = this.getDefaultAssistantConfig().apiKey;
        return new Promise((resolve, _) => {
            this.storage.getApiKey()
                .then(result => {
                if (result != null) {
                    resolve(result);
                }
                else {
                    resolve(defaultApiKey);
                }
            })
                .catch(() => {
                resolve(defaultApiKey);
            });
        });
    }
    getSettings() {
        const defaultSettings = this.getDefaultSettings();
        return new Promise((resolve, _) => {
            this.storage.getSettings()
                .then(result => {
                if (result != null) {
                    resolve(result);
                }
                else {
                    resolve(defaultSettings);
                }
            })
                .catch(() => {
                resolve(defaultSettings);
            });
        });
    }
    getDefaultAssistantConfig() {
        return this.environment.getAgentifaiConfiguration();
    }
    getDefaultSettings() {
        return {
            defaultTheme: "light",
            themes: {
                light: "AssistantConfiguration.json",
                dark: "AssistantConfigurationDark.json"
            }
        };
    }
};
AssistantUtilsService.ctorParameters = () => [
    { type: src_app_services_environment_service_environment_service_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"] },
    { type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
];
AssistantUtilsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AssistantUtilsService);



/***/ }),

/***/ "rqpB":
/*!*********************************************************************************!*\
  !*** ./src/app/agentifai/commands/transfers/sepa/get-frequent-sepa-transfer.ts ***!
  \*********************************************************************************/
/*! exports provided: GetFrequentSEPATransfer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFrequentSEPATransfer", function() { return GetFrequentSEPATransfer; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetFrequentSEPATransfer {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            "body\.(operationName|operationId|amount)(?:$|\W)"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const idFrequentOperation = this.request.getParameters()["idFrequentOperation"];
        return service.getFrequentSEPAoperation(headers, idFrequentOperation)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "s94i":
/*!*************************************************************!*\
  !*** ./src/app/agentifai/commands/callback/set-callback.ts ***!
  \*************************************************************/
/*! exports provided: SetCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCallback", function() { return SetCallback; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var src_app_models_operation_request_customers_CallbackSolicitationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/operation/request/customers/CallbackSolicitationRequest */ "96wc");




class SetCallback {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        return service.setCallback(headers, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_customers_CallbackSolicitationRequest__WEBPACK_IMPORTED_MODULE_3__["CallbackSolicitationRequest"]();
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
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "sd8+":
/*!************************************************!*\
  !*** ./src/app/models/operation/Scheduling.ts ***!
  \************************************************/
/*! exports provided: Scheduling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scheduling", function() { return Scheduling; });
class Scheduling {
    constructor() {
        this.startDate = '';
        this.endDate = '';
        this.frequencyType = null;
        this.numberOfOperations = null;
    }
}


/***/ }),

/***/ "sqgU":
/*!*************************************************************************************!*\
  !*** ./src/app/agentifai/commands/mbway/update-transfer-consent-for-cgd-account.ts ***!
  \*************************************************************************************/
/*! exports provided: UpdateTransferConsentForCgdAccountCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTransferConsentForCgdAccountCommand", function() { return UpdateTransferConsentForCgdAccountCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_models_operation_request_cards_MBWayPartnerAcceptTransferCGDAccountRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/operation/request/cards/MBWayPartnerAcceptTransferCGDAccountRequest */ "GIPb");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");




class UpdateTransferConsentForCgdAccountCommand {
    constructor(request, responseFactory, requestFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.requestFactory = requestFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            `body\.(operationId|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].scheduling()})`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        return service.acceptTransferCGD(headers, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_cards_MBWayPartnerAcceptTransferCGDAccountRequest__WEBPACK_IMPORTED_MODULE_2__["MBWayPartnerAcceptTransferCGDAccountRequest"]();
        request.operationId = parseInt(parameters.operationId);
        request.forceDuplicateOperation = parameters.forceDuplicateOperation;
        request.acceptedTransferCGD = parameters.acceptedTransferCGD;
        request.scheduling = this.requestFactory.createScheduling(parameters);
        return request;
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "tHMQ":
/*!*********************************************************************************************!*\
  !*** ./src/app/agentifai/commands/terms-and-conditions/get-terms-and-conditions-consent.ts ***!
  \*********************************************************************************************/
/*! exports provided: GetTermsAndConditionsConsentCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTermsAndConditionsConsentCommand", function() { return GetTermsAndConditionsConsentCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetTermsAndConditionsConsentCommand {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizablePathRegex = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        return service.getVoiceTreatmentConsent(headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizablePathRegex);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegex));
    }
}


/***/ }),

/***/ "uTo4":
/*!**************************************************************************************!*\
  !*** ./src/app/models/operation/request/customers/CredentialUnlockAnswersRequest.ts ***!
  \**************************************************************************************/
/*! exports provided: CredentialUnlockAnswersRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialUnlockAnswersRequest", function() { return CredentialUnlockAnswersRequest; });
/* harmony import */ var _GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GenericOperationRequest */ "AwYQ");

class CredentialUnlockAnswersRequest extends _GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"] {
    constructor() {
        super();
        this.answers = [];
        this.contractNumber = "";
    }
}


/***/ }),

/***/ "vEtZ":
/*!********************************************************************!*\
  !*** ./src/app/agentifai/commands/cards/get-cards-general-data.ts ***!
  \********************************************************************/
/*! exports provided: GetCardsGeneralData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCardsGeneralData", function() { return GetCardsGeneralData; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/agentifai-utils */ "EZ/N");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var src_app_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/agentifai/commands/cards/cards-utils */ "lw/H");





class GetCardsGeneralData {
    constructor(request, responseFactory, transformer) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.transformer = transformer;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            "body\.("
                + "((cardAccounts\.[^.]+)|defaultCardAccount)\.("
                + "currency|type|cardCodeType|statementIssueDateDescription|"
                + "statementPaymentLimitDescription|productImageUrl|"
                + `cards\.[^.]+\.(${src_app_agentifai_commands_cards_cards_utils__WEBPACK_IMPORTED_MODULE_4__["CardsUtils"].nonAnonymizedCardProperties}))`
                + "|defaultCardAccountBalances\.availableCredit)"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const cardAccountId = parameters["cardAccountId"];
        const targetCardOperationType = parameters["targetCardOperationType"];
        const omitTransactionsInResponse = parameters["omitTransactionsInResponse"];
        return service.getCardsGeneralData(headers, cardAccountId, targetCardOperationType, omitTransactionsInResponse)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        var transformedResponse = this.transformResponse(response);
        return this.createResponse(transformedResponse, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
    transformResponse(response) {
        var data = src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_2__["AgentifaiUtils"].mapFromString(response.data);
        if (data != null) {
            data = this.transformer.addCardsGeneralDataProperties(data);
        }
        response.data = data;
        return response;
    }
}


/***/ }),

/***/ "vHy2":
/*!***************************************************************************!*\
  !*** ./src/app/models/operation/request/transfers/TransferSEPARequest.ts ***!
  \***************************************************************************/
/*! exports provided: TransferSEPARequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferSEPARequest", function() { return TransferSEPARequest; });
/* harmony import */ var src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/operation/request/GenericOperationRequest */ "AwYQ");
/* harmony import */ var src_app_models_operation_Charges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/operation/Charges */ "1wiW");


class TransferSEPARequest extends src_app_models_operation_request_GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"] {
    constructor() {
        super();
        this.charges = [new src_app_models_operation_Charges__WEBPACK_IMPORTED_MODULE_1__["Charges"]()];
        this.sourceAccount = '';
        this.destinationAccount = '';
        this.amount = '';
        this.currency = '';
        this.description = '';
        this.additionalInfo = '';
        this.destinationName = '';
        this.finality = '';
        this.comment = '';
        this.urgent = false;
        this.commissionFee = null;
        this.stampDuty = null;
        this.warningCharge = null;
        this.warningVAT = null;
        this.chargesSum = null;
        this.chargesSumCurrency = '';
    }
    get getSourceAccount() {
        return this.sourceAccount;
    }
    set setSourceAccount(sourceAccount) {
        this.sourceAccount = sourceAccount;
    }
    get getDestinationAccount() {
        return this.destinationAccount;
    }
    set setDestinationAccount(destinationAccount) {
        this.destinationAccount = destinationAccount;
    }
    get getAmount() {
        return this.amount;
    }
    set setAmount(amount) {
        this.amount = amount;
    }
    get getCurrency() {
        return this.currency;
    }
    set setCurrency(currency) {
        this.currency = currency;
    }
    get getDescription() {
        return this.description;
    }
    set setDescription(description) {
        this.description = description;
    }
    get getAdditionalInfo() {
        return this.additionalInfo;
    }
    set setAdditionalInfo(additionalInfo) {
        this.additionalInfo = additionalInfo;
    }
    get getDestinationName() {
        return this.destinationName;
    }
    set setDestinationName(destinationName) {
        this.destinationName = destinationName;
    }
    get getFinality() {
        return this.finality;
    }
    set setFinality(finality) {
        this.finality = finality;
    }
    get getComment() {
        return this.comment;
    }
    set setComment(comment) {
        this.comment = comment;
    }
    get getUrgent() {
        return this.urgent;
    }
    set setUrgent(urgent) {
        this.urgent = urgent;
    }
    get getCommissionFee() {
        return this.commissionFee;
    }
    set setCommissionFee(commissionFee) {
        this.commissionFee = commissionFee;
    }
    get getStampDuty() {
        return this.stampDuty;
    }
    set setStampDuty(stampDuty) {
        this.stampDuty = stampDuty;
    }
    get getWarningCharge() {
        return this.warningCharge;
    }
    set setWarningCharge(warningCharge) {
        this.warningCharge = warningCharge;
    }
    get getWarningVAT() {
        return this.warningVAT;
    }
    set setWarningVAT(warningVAT) {
        this.warningVAT = warningVAT;
    }
    get getChargesSum() {
        return this.chargesSum;
    }
    set setChargesSum(chargesSum) {
        this.chargesSum = chargesSum;
    }
    get getChargesSumCurrency() {
        return this.chargesSumCurrency;
    }
    set setChargesSumCurrency(chargesSumCurrency) {
        this.chargesSumCurrency = chargesSumCurrency;
    }
}


/***/ }),

/***/ "vVt6":
/*!************************************************************************!*\
  !*** ./src/app/agentifai/commands/cards/get-sms-token-phone-number.ts ***!
  \************************************************************************/
/*! exports provided: GetSmsTokenPhoneNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSmsTokenPhoneNumber", function() { return GetSmsTokenPhoneNumber; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetSmsTokenPhoneNumber {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        return service.getContactSmsToken(headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'second-page',
        loadChildren: () => __webpack_require__.e(/*! import() | second-page-second-page-module */ "second-page-second-page-module").then(__webpack_require__.bind(null, /*! ./second-page/second-page.module */ "I8nY")).then(m => m.SecondPagePageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vh/R":
/*!**********************************************************************!*\
  !*** ./src/app/models/operation/request/cards/CardPaymentRequest.ts ***!
  \**********************************************************************/
/*! exports provided: CardPaymentRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPaymentRequest", function() { return CardPaymentRequest; });
/* harmony import */ var _GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GenericOperationRequest */ "AwYQ");

class CardPaymentRequest extends _GenericOperationRequest__WEBPACK_IMPORTED_MODULE_0__["GenericOperationRequest"] {
    constructor() {
        super();
    }
}


/***/ }),

/***/ "vzdz":
/*!*********************************************************************!*\
  !*** ./src/app/agentifai/commands/mbway/simulate-mbway-adhesion.ts ***!
  \*********************************************************************/
/*! exports provided: SimulateMBWayAdhesionCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulateMBWayAdhesionCommand", function() { return SimulateMBWayAdhesionCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_models_operation_request_cards_MBWayPartnerRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/operation/request/cards/MBWayPartnerRequest */ "XSvm");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");




class SimulateMBWayAdhesionCommand {
    constructor(request, responseFactory, requestFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.requestFactory = requestFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            `body\.(operationId|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].scheduling()})`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        return service.simulateAdhesionMbway(headers, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_cards_MBWayPartnerRequest__WEBPACK_IMPORTED_MODULE_2__["MBWayPartnerRequest"]();
        request.forceDuplicateOperation = parameters.forceDuplicateOperation;
        request.phoneNumber = parameters.phoneNumber;
        request.cardNumberMasked = parameters.cardNumberMasked;
        request.amount = parameters.amount;
        request.acceptedTransferCGD = parameters.acceptedTransferCGD;
        request.scheduling = this.requestFactory.createScheduling(parameters);
        return request;
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "x5Zr":
/*!****************************************************************************!*\
  !*** ./src/app/agentifai/commands/transfers/get-transfers-general-data.ts ***!
  \****************************************************************************/
/*! exports provided: GetTransfersGeneralData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTransfersGeneralData", function() { return GetTransfersGeneralData; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/commands/accounts/accounts-utils */ "il6X");
/* harmony import */ var src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/agentifai-utils */ "EZ/N");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");





class GetTransfersGeneralData {
    constructor(request, responseFactory, accountsTransformer) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.accountsTransformer = accountsTransformer;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            "body\.("
                + "frequentOperations\.[^.]+\."
                + "(operationName|operationType|operationId|amount)"
                + "|accounts\.[^.]+\."
                + `(${src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_2__["AccountsUtils"].nonAnonymizedAccountsProperties})`
                + ")(?:$|\W)"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        return service.getTransferPageData(headers, false)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        var transformedResponse = this.transformResponse(response);
        return this.createResponse(transformedResponse, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
    transformResponse(response) {
        const data = src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__["AgentifaiUtils"].mapFromString(response.data);
        if (data.accounts != null) {
            data.accounts = this.accountsTransformer.transformAccounts(data.accounts);
            response.data = data;
        }
        return response;
    }
}


/***/ }),

/***/ "xvKO":
/*!**************************************************************************************************************!*\
  !*** ./src/app/agentifai/commands/customers/update-client-information/simulate-update-client-information.ts ***!
  \**************************************************************************************************************/
/*! exports provided: SimulateUpdateClientInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulateUpdateClientInformation", function() { return SimulateUpdateClientInformation; });
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_models_customers_updateClientInfo_UpdateClientInfoRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/customers/updateClientInfo/UpdateClientInfoRequest */ "TiZ7");
/* harmony import */ var _update_client_information_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-client-information-utils */ "ARNw");





class SimulateUpdateClientInformation {
    constructor(request, requestFactory, responseFactory) {
        this.request = request;
        this.requestFactory = requestFactory;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexesPathsSuccess = [
            "headers.+",
            "status",
            `body\.(operationId|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_0__["Anonymization"].scheduling()})`
        ];
        this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_0__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        return service.simulateUpdateClientInfo(headers, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(resp => this.createErrorResponse(resp)));
    }
    createRequest(parameters) {
        const request = new src_app_models_customers_updateClientInfo_UpdateClientInfoRequest__WEBPACK_IMPORTED_MODULE_3__["UpdateClientInfoRequest"]();
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
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
    }
}


/***/ }),

/***/ "y8zl":
/*!*************************************************************************************************************!*\
  !*** ./src/app/agentifai/commands/customers/update-client-information/execute-update-client-information.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ExecuteUpdateClientInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuteUpdateClientInformation", function() { return ExecuteUpdateClientInformation; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var src_app_models_customers_updateClientInfo_UpdateClientInfoRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/customers/updateClientInfo/UpdateClientInfoRequest */ "TiZ7");
/* harmony import */ var _update_client_information_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-client-information-utils */ "ARNw");





class ExecuteUpdateClientInformation {
    constructor(request, requestFactory, responseFactory) {
        this.request = request;
        this.requestFactory = requestFactory;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexesPathsSuccess = [
            "headers.+",
            "status",
            `body\.(operationId|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].scheduling()})`
        ];
        this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        const credential = this.createCredentials(parameters);
        return service.executeUpdateClientInfo(headers, request, credential)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(resp => this.createErrorResponse(resp)));
    }
    createRequest(parameters) {
        const request = new src_app_models_customers_updateClientInfo_UpdateClientInfoRequest__WEBPACK_IMPORTED_MODULE_3__["UpdateClientInfoRequest"]();
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
    createCredentials(parameters) {
        return this.requestFactory.createCredentials(parameters);
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
    }
}


/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "z/oj":
/*!********************************************************************!*\
  !*** ./src/app/agentifai/commands/mbway/execute-mbway-adhesion.ts ***!
  \********************************************************************/
/*! exports provided: ExecuteMBWayAdhesionCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuteMBWayAdhesionCommand", function() { return ExecuteMBWayAdhesionCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_models_operation_request_cards_MBWayPartnerRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/operation/request/cards/MBWayPartnerRequest */ "XSvm");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");




class ExecuteMBWayAdhesionCommand {
    constructor(request, responseFactory, requestFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.requestFactory = requestFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            `body\.(operationId|operationStatus|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].scheduling()})`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        const credential = this.createCredentials(parameters);
        return service.executeAdhesionMbway(headers, request, credential)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_cards_MBWayPartnerRequest__WEBPACK_IMPORTED_MODULE_2__["MBWayPartnerRequest"]();
        request.operationId = parseInt(parameters.operationId);
        request.forceDuplicateOperation = parameters.forceDuplicateOperation;
        request.phoneNumber = parameters.phoneNumber;
        request.cardNumberMasked = parameters.cardNumberMasked;
        request.amount = parameters.amount;
        request.acceptedTransferCGD = parameters.acceptedTransferCGD;
        request.scheduling = this.requestFactory.createScheduling(parameters);
        return request;
    }
    createCredentials(parameters) {
        return this.requestFactory.createCredentials(parameters);
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "zJBa":
/*!***************************************************************!*\
  !*** ./src/app/agentifai/models/agentifai-widget-response.ts ***!
  \***************************************************************/
/*! exports provided: WidgetResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetResponse", function() { return WidgetResponse; });
class WidgetResponse {
    constructor(data, nonAnonymizableRegexPaths) {
        this.data = data;
        this.nonAnonymizableRegexPaths = nonAnonymizableRegexPaths;
    }
}


/***/ }),

/***/ "zQ9Q":
/*!*****************************************************************************!*\
  !*** ./src/app/agentifai/commands/loans/simulate-personal-loan-adhesion.ts ***!
  \*****************************************************************************/
/*! exports provided: SimulatePersonalLoanAdhesion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulatePersonalLoanAdhesion", function() { return SimulatePersonalLoanAdhesion; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");
/* harmony import */ var src_app_models_operation_request_loans_ConsumerLoanAdhesionRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/operation/request/loans/ConsumerLoanAdhesionRequest */ "4Rlb");
/* harmony import */ var src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/operation/request/loans/GenericPersonalCreditWorkElement */ "3ZgE");





class SimulatePersonalLoanAdhesion {
    constructor(request, requestFactory, responseFactory) {
        this.request = request;
        this.requestFactory = requestFactory;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            String.raw `^body\.(operationId|success|errorMessage|simulationDate|amountMin|amountMax)$`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        return service.simulateLoanRequest(headers, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_loans_ConsumerLoanAdhesionRequest__WEBPACK_IMPORTED_MODULE_3__["ConsumerLoanAdhesionRequest"]();
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
            const profession = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
            profession.cod = parameters.profession.cod;
            profession.description = parameters.profession.description;
            request.profissao = profession;
        }
        if (parameters.jobSector != null) {
            const jobSector = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
            jobSector.cod = parameters.jobSector.cod;
            jobSector.description = parameters.jobSector.description;
            request.sector = jobSector;
        }
        if (parameters.jobType != null) {
            const jobType = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
            jobType.cod = parameters.jobType.cod;
            jobType.description = parameters.jobType.description;
            request.trabalho = jobType;
        }
        if (parameters.contractType != null) {
            const contractType = new src_app_models_operation_request_loans_GenericPersonalCreditWorkElement__WEBPACK_IMPORTED_MODULE_4__["GenericPersonalCreditWorkElement"]();
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
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "zS/o":
/*!****************************************************************************!*\
  !*** ./src/app/agentifai/commands/transfers/sepa/execute-sepa-transfer.ts ***!
  \****************************************************************************/
/*! exports provided: ExecuteSEPATransferCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuteSEPATransferCommand", function() { return ExecuteSEPATransferCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_models_operation_request_transfers_TransferSEPARequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/operation/request/transfers/TransferSEPARequest */ "vHy2");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");




class ExecuteSEPATransferCommand {
    constructor(request, responseFactory, requestFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.requestFactory = requestFactory;
        this.nonAnonymizableRegexesPathsSuccess = [
            "headers.+",
            "status",
            `body\.(operationId|operationStatus|charges[.].*|${src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].scheduling()})`
        ];
        this.nonAnonymizableRegexesPathsError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const request = this.createRequest(parameters);
        const credential = this.createCredentials(parameters);
        return service.executeSepaTransfer(headers, request, credential)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(resp => this.createErrorResponse(resp)));
    }
    createRequest(parameters) {
        const request = new src_app_models_operation_request_transfers_TransferSEPARequest__WEBPACK_IMPORTED_MODULE_2__["TransferSEPARequest"]();
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
    createCredentials(parameters) {
        return this.requestFactory.createCredentials(parameters);
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexesPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizableRegexesPathsError));
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zZvH":
/*!****************************************************************************!*\
  !*** ./src/app/agentifai/commands/operation-proof/send-operation-proof.ts ***!
  \****************************************************************************/
/*! exports provided: SendOperationProofCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendOperationProofCommand", function() { return SendOperationProofCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_models_operation_OperationProofByEmailRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/operation/OperationProofByEmailRequest */ "LT4J");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");




class SendOperationProofCommand {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_3__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        const parameters = this.request.getParameters();
        const operationId = Number(parameters["operationId"]);
        const proofRequest = this.createOperationProofRequest(parameters);
        return service.sendOperationProofByEmail(headers, operationId, proofRequest)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
    createOperationProofRequest(parameters) {
        const proofRequest = new src_app_models_operation_OperationProofByEmailRequest__WEBPACK_IMPORTED_MODULE_2__["OperationProofByEmailRequest"]();
        proofRequest.targetEmail = parameters.targetEmail;
        proofRequest.targetCCEmail = parameters.targetCCEmail;
        proofRequest.emailSubject = parameters.emailSubject;
        return proofRequest;
    }
}


/***/ }),

/***/ "zjHV":
/*!****************************************************************************!*\
  !*** ./src/app/agentifai/commands/cards/acquisition/get-showcase-cards.ts ***!
  \****************************************************************************/
/*! exports provided: GetShowcaseCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetShowcaseCards", function() { return GetShowcaseCards; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");



class GetShowcaseCards {
    constructor(request, responseFactory) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.nonAnonymizableRegexPathsSuccess = [
            "headers.+",
            "status",
            String.raw `(name|descriptionHtml|otherInfo)$`
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_2__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        return service.getShowcaseCards(headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        return this.createResponse(response, true, this.nonAnonymizableRegexPathsSuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
}


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zw4M":
/*!*******************************************************************************************!*\
  !*** ./src/app/agentifai/commands/transfers/immediate/get-immediate-transfer-accounts.ts ***!
  \*******************************************************************************************/
/*! exports provided: GetImmediateTransferAccountsCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetImmediateTransferAccountsCommand", function() { return GetImmediateTransferAccountsCommand; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/agentifai/commands/accounts/accounts-utils */ "il6X");
/* harmony import */ var src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/agentifai/utils/agentifai-utils */ "EZ/N");
/* harmony import */ var src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/agentifai/utils/anonymization-utils */ "Xntl");





class GetImmediateTransferAccountsCommand {
    constructor(request, responseFactory, transformer) {
        this.request = request;
        this.responseFactory = responseFactory;
        this.transformer = transformer;
        this.nonAnonymizableRegexesPathsuccess = [
            "headers.+",
            "status",
            "body\.("
                + `defaultAccount\.(${src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_2__["AccountsUtils"].nonAnonymizedAccountsProperties})`
                + `|accounts\.[^.]+\.(${src_app_agentifai_commands_accounts_accounts_utils__WEBPACK_IMPORTED_MODULE_2__["AccountsUtils"].nonAnonymizedAccountsProperties})`
                + ")(?:$|\W)"
        ];
        this.nonAnonymizablePathRegexError = src_app_agentifai_utils_anonymization_utils__WEBPACK_IMPORTED_MODULE_4__["Anonymization"].NonAnonymizablePathRegexDefault;
    }
    execute(service) {
        const headers = this.request.getHeaders();
        return service.getAccountsForImmediateTransfers(headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => this.createSuccessResponse(resp)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => this.createErrorResponse(error)));
    }
    createResponse(response, success, nonAnonymizableRegexesPaths) {
        return this.responseFactory.createResponseFromRestApi(response, success, nonAnonymizableRegexesPaths);
    }
    createSuccessResponse(response) {
        var transformedResponse = this.transformResponse(response);
        return this.createResponse(transformedResponse, true, this.nonAnonymizableRegexesPathsuccess);
    }
    createErrorResponse(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.createResponse(errorResponse, false, this.nonAnonymizablePathRegexError));
    }
    transformResponse(response) {
        const data = src_app_agentifai_utils_agentifai_utils__WEBPACK_IMPORTED_MODULE_3__["AgentifaiUtils"].mapFromString(response.data);
        if (data.defaultAccount != null && data.accounts != null) {
            data.accounts = this.transformer.transformAccounts(data.accounts);
            data.defaultAccount = this.transformer.transformAccount(data.defaultAccount);
            response.data = data;
        }
        return response;
    }
}


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map