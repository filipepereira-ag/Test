(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "+S68":
/*!*******************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/env.js ***!
  \*******************************************************/
/*! exports provided: isCloudflareWorkers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCloudflareWorkers", function() { return isCloudflareWorkers; });
function isCloudflareWorkers() {
    return typeof WebSocketPair === 'function';
}


/***/ }),

/***/ "/D05":
/*!***************************************************************!*\
  !*** ./node_modules/jose/dist/browser/jwe/general/encrypt.js ***!
  \***************************************************************/
/*! exports provided: GeneralEncrypt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralEncrypt", function() { return GeneralEncrypt; });
/* harmony import */ var _flattened_encrypt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../flattened/encrypt.js */ "Dk7m");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/errors.js */ "StPg");
/* harmony import */ var _lib_cek_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/cek.js */ "qW6o");
/* harmony import */ var _lib_is_disjoint_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/is_disjoint.js */ "yopU");
/* harmony import */ var _lib_encrypt_key_management_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/encrypt_key_management.js */ "NP3A");
/* harmony import */ var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../runtime/base64url.js */ "KjJ5");
/* harmony import */ var _lib_validate_crit_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/validate_crit.js */ "ElMP");







class IndividualRecipient {
    constructor(enc, key, options) {
        this.parent = enc;
        this.key = key;
        this.options = options;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this.unprotectedHeader) {
            throw new TypeError('setUnprotectedHeader can only be called once');
        }
        this.unprotectedHeader = unprotectedHeader;
        return this;
    }
    addRecipient(...args) {
        return this.parent.addRecipient(...args);
    }
    encrypt(...args) {
        return this.parent.encrypt(...args);
    }
    done() {
        return this.parent;
    }
}
class GeneralEncrypt {
    constructor(plaintext) {
        this._recipients = [];
        this._plaintext = plaintext;
    }
    addRecipient(key, options) {
        const recipient = new IndividualRecipient(this, key, { crit: options === null || options === void 0 ? void 0 : options.crit });
        this._recipients.push(recipient);
        return recipient;
    }
    setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
            throw new TypeError('setProtectedHeader can only be called once');
        }
        this._protectedHeader = protectedHeader;
        return this;
    }
    setSharedUnprotectedHeader(sharedUnprotectedHeader) {
        if (this._unprotectedHeader) {
            throw new TypeError('setSharedUnprotectedHeader can only be called once');
        }
        this._unprotectedHeader = sharedUnprotectedHeader;
        return this;
    }
    setAdditionalAuthenticatedData(aad) {
        this._aad = aad;
        return this;
    }
    async encrypt(options) {
        var _a, _b, _c;
        if (!this._recipients.length) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('at least one recipient must be added');
        }
        options = { deflateRaw: options === null || options === void 0 ? void 0 : options.deflateRaw };
        if (this._recipients.length === 1) {
            const [recipient] = this._recipients;
            const flattened = await new _flattened_encrypt_js__WEBPACK_IMPORTED_MODULE_0__["FlattenedEncrypt"](this._plaintext)
                .setAdditionalAuthenticatedData(this._aad)
                .setProtectedHeader(this._protectedHeader)
                .setSharedUnprotectedHeader(this._unprotectedHeader)
                .setUnprotectedHeader(recipient.unprotectedHeader)
                .encrypt(recipient.key, { ...recipient.options, ...options });
            let jwe = {
                ciphertext: flattened.ciphertext,
                iv: flattened.iv,
                recipients: [{}],
                tag: flattened.tag,
            };
            if (flattened.aad)
                jwe.aad = flattened.aad;
            if (flattened.protected)
                jwe.protected = flattened.protected;
            if (flattened.unprotected)
                jwe.unprotected = flattened.unprotected;
            if (flattened.encrypted_key)
                jwe.recipients[0].encrypted_key = flattened.encrypted_key;
            if (flattened.header)
                jwe.recipients[0].header = flattened.header;
            return jwe;
        }
        let enc;
        for (let i = 0; i < this._recipients.length; i++) {
            const recipient = this._recipients[i];
            if (!Object(_lib_is_disjoint_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._protectedHeader, this._unprotectedHeader, recipient.unprotectedHeader)) {
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint');
            }
            const joseHeader = {
                ...this._protectedHeader,
                ...this._unprotectedHeader,
                ...recipient.unprotectedHeader,
            };
            const { alg } = joseHeader;
            if (typeof alg !== 'string' || !alg) {
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('JWE "alg" (Algorithm) Header Parameter missing or invalid');
            }
            if (alg === 'dir' || alg === 'ECDH-ES') {
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('"dir" and "ECDH-ES" alg may only be used with a single recipient');
            }
            if (typeof joseHeader.enc !== 'string' || !joseHeader.enc) {
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
            }
            if (!enc) {
                enc = joseHeader.enc;
            }
            else if (enc !== joseHeader.enc) {
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('JWE "enc" (Encryption Algorithm) Header Parameter must be the same for all recipients');
            }
            Object(_lib_validate_crit_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"], new Map(), recipient.options.crit, this._protectedHeader, joseHeader);
            if (joseHeader.zip !== undefined) {
                if (!this._protectedHeader || !this._protectedHeader.zip) {
                    throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
                }
            }
        }
        const cek = Object(_lib_cek_js__WEBPACK_IMPORTED_MODULE_2__["default"])(enc);
        let jwe = {
            ciphertext: '',
            iv: '',
            recipients: [],
            tag: '',
        };
        for (let i = 0; i < this._recipients.length; i++) {
            const recipient = this._recipients[i];
            const target = {};
            jwe.recipients.push(target);
            const joseHeader = {
                ...this._protectedHeader,
                ...this._unprotectedHeader,
                ...recipient.unprotectedHeader,
            };
            const p2c = joseHeader.alg.startsWith('PBES2') ? 2048 + i : undefined;
            if (i === 0) {
                const flattened = await new _flattened_encrypt_js__WEBPACK_IMPORTED_MODULE_0__["FlattenedEncrypt"](this._plaintext)
                    .setAdditionalAuthenticatedData(this._aad)
                    .setContentEncryptionKey(cek)
                    .setProtectedHeader(this._protectedHeader)
                    .setSharedUnprotectedHeader(this._unprotectedHeader)
                    .setUnprotectedHeader(recipient.unprotectedHeader)
                    .setKeyManagementParameters({ p2c })
                    .encrypt(recipient.key, {
                    ...recipient.options,
                    ...options,
                    [_flattened_encrypt_js__WEBPACK_IMPORTED_MODULE_0__["unprotected"]]: true,
                });
                jwe.ciphertext = flattened.ciphertext;
                jwe.iv = flattened.iv;
                jwe.tag = flattened.tag;
                if (flattened.aad)
                    jwe.aad = flattened.aad;
                if (flattened.protected)
                    jwe.protected = flattened.protected;
                if (flattened.unprotected)
                    jwe.unprotected = flattened.unprotected;
                target.encrypted_key = flattened.encrypted_key;
                if (flattened.header)
                    target.header = flattened.header;
                continue;
            }
            const { encryptedKey, parameters } = await Object(_lib_encrypt_key_management_js__WEBPACK_IMPORTED_MODULE_4__["default"])(((_a = recipient.unprotectedHeader) === null || _a === void 0 ? void 0 : _a.alg) ||
                ((_b = this._protectedHeader) === null || _b === void 0 ? void 0 : _b.alg) ||
                ((_c = this._unprotectedHeader) === null || _c === void 0 ? void 0 : _c.alg), enc, recipient.key, cek, { p2c });
            target.encrypted_key = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_5__["encode"])(encryptedKey);
            if (recipient.unprotectedHeader || parameters)
                target.header = { ...recipient.unprotectedHeader, ...parameters };
        }
        return jwe;
    }
}


/***/ }),

/***/ "/cEr":
/*!****************************************************!*\
  !*** ./node_modules/jose/dist/browser/jwt/sign.js ***!
  \****************************************************/
/*! exports provided: SignJWT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignJWT", function() { return SignJWT; });
/* harmony import */ var _jws_compact_sign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jws/compact/sign.js */ "iEOA");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/errors.js */ "StPg");
/* harmony import */ var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/buffer_utils.js */ "xpfA");
/* harmony import */ var _produce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./produce.js */ "Wcb1");




class SignJWT extends _produce_js__WEBPACK_IMPORTED_MODULE_3__["ProduceJWT"] {
    setProtectedHeader(protectedHeader) {
        this._protectedHeader = protectedHeader;
        return this;
    }
    async sign(key, options) {
        var _a;
        const sig = new _jws_compact_sign_js__WEBPACK_IMPORTED_MODULE_0__["CompactSign"](_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_2__["encoder"].encode(JSON.stringify(this._payload)));
        sig.setProtectedHeader(this._protectedHeader);
        if (Array.isArray((_a = this._protectedHeader) === null || _a === void 0 ? void 0 : _a.crit) &&
            this._protectedHeader.crit.includes('b64') &&
            this._protectedHeader.b64 === false) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWTInvalid"]('JWTs MUST NOT use unencoded payload');
        }
        return sig.sign(key, options);
    }
}


/***/ }),

/***/ "/xMJ":
/*!**************************************************************!*\
  !*** ./node_modules/jose/dist/browser/jws/general/verify.js ***!
  \**************************************************************/
/*! exports provided: generalVerify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalVerify", function() { return generalVerify; });
/* harmony import */ var _flattened_verify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../flattened/verify.js */ "n8OJ");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/errors.js */ "StPg");
/* harmony import */ var _lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/is_object.js */ "2fVw");



async function generalVerify(jws, key, options) {
    if (!Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__["default"])(jws)) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWSInvalid"]('General JWS must be an object');
    }
    if (!Array.isArray(jws.signatures) || !jws.signatures.every(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__["default"])) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWSInvalid"]('JWS Signatures missing or incorrect type');
    }
    for (const signature of jws.signatures) {
        try {
            return await Object(_flattened_verify_js__WEBPACK_IMPORTED_MODULE_0__["flattenedVerify"])({
                header: signature.header,
                payload: jws.payload,
                protected: signature.protected,
                signature: signature.signature,
            }, key, options);
        }
        catch (_a) {
        }
    }
    throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWSSignatureVerificationFailed"]();
}


/***/ }),

/***/ "18mX":
/*!**********************************************************!*\
  !*** ./node_modules/jose/dist/browser/jwk/thumbprint.js ***!
  \**********************************************************/
/*! exports provided: calculateJwkThumbprint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateJwkThumbprint", function() { return calculateJwkThumbprint; });
/* harmony import */ var _runtime_digest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime/digest.js */ "DsUi");
/* harmony import */ var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../runtime/base64url.js */ "KjJ5");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/errors.js */ "StPg");
/* harmony import */ var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/buffer_utils.js */ "xpfA");
/* harmony import */ var _lib_is_object_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/is_object.js */ "2fVw");





const check = (value, description) => {
    if (typeof value !== 'string' || !value) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWKInvalid"](`${description} missing or invalid`);
    }
};
async function calculateJwkThumbprint(jwk, digestAlgorithm = 'sha256') {
    if (!Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_4__["default"])(jwk)) {
        throw new TypeError('JWK must be an object');
    }
    if (digestAlgorithm !== 'sha256' &&
        digestAlgorithm !== 'sha384' &&
        digestAlgorithm !== 'sha512') {
        throw new TypeError('digestAlgorithm must one of "sha256", "sha384", or "sha512"');
    }
    let components;
    switch (jwk.kty) {
        case 'EC':
            check(jwk.crv, '"crv" (Curve) Parameter');
            check(jwk.x, '"x" (X Coordinate) Parameter');
            check(jwk.y, '"y" (Y Coordinate) Parameter');
            components = { crv: jwk.crv, kty: jwk.kty, x: jwk.x, y: jwk.y };
            break;
        case 'OKP':
            check(jwk.crv, '"crv" (Subtype of Key Pair) Parameter');
            check(jwk.x, '"x" (Public Key) Parameter');
            components = { crv: jwk.crv, kty: jwk.kty, x: jwk.x };
            break;
        case 'RSA':
            check(jwk.e, '"e" (Exponent) Parameter');
            check(jwk.n, '"n" (Modulus) Parameter');
            components = { e: jwk.e, kty: jwk.kty, n: jwk.n };
            break;
        case 'oct':
            check(jwk.k, '"k" (Key Value) Parameter');
            components = { k: jwk.k, kty: jwk.kty };
            break;
        default:
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSENotSupported"]('"kty" (Key Type) Parameter missing or unsupported');
    }
    const data = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_3__["encoder"].encode(JSON.stringify(components));
    return Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_1__["encode"])(await Object(_runtime_digest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(digestAlgorithm, data));
}


/***/ }),

/***/ "1qei":
/*!**************************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/fetch_jwks.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/errors.js */ "StPg");

const fetchJwks = async (url, timeout, options) => {
    let controller;
    let id;
    let timedOut = false;
    if (typeof AbortController === 'function') {
        controller = new AbortController();
        id = setTimeout(() => {
            timedOut = true;
            controller.abort();
        }, timeout);
    }
    const response = await fetch(url.href, {
        signal: controller ? controller.signal : undefined,
        redirect: 'manual',
        headers: options.headers,
    }).catch((err) => {
        if (timedOut)
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWKSTimeout"]();
        throw err;
    });
    if (id !== undefined)
        clearTimeout(id);
    if (response.status !== 200) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JOSEError"]('Expected 200 OK from the JSON Web Key Set HTTP response');
    }
    try {
        return await response.json();
    }
    catch (_a) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JOSEError"]('Failed to parse the JSON Web Key Set HTTP response as JSON');
    }
};
/* harmony default export */ __webpack_exports__["default"] = (fetchJwks);


/***/ }),

/***/ "1uat":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha512.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./x64-core */ "MlIO"));
	}
	else {}
}(this, function (CryptoJS) {

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
	    }

	    // Constants
	    var K = [
	        X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
	        X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
	        X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
	        X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
	        X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
	        X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
	        X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
	        X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
	        X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
	        X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
	        X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
	        X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
	        X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
	        X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
	        X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
	        X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
	        X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
	        X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
	        X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
	        X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
	        X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
	        X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
	        X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
	        X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
	        X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
	        X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
	        X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
	        X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
	        X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
	        X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
	        X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
	        X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
	        X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
	        X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
	        X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
	        X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
	        X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
	        X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
	        X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
	        X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
	    ];

	    // Reusable objects
	    var W = [];
	    (function () {
	        for (var i = 0; i < 80; i++) {
	            W[i] = X64Word_create();
	        }
	    }());

	    /**
	     * SHA-512 hash algorithm.
	     */
	    var SHA512 = C_algo.SHA512 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
	                new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
	                new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
	                new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
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
	            var H7l = H7.low;

	            // Working variables
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
	            var hl = H7l;

	            // Rounds
	            for (var i = 0; i < 80; i++) {
	                var Wil;
	                var Wih;

	                // Shortcut
	                var Wi = W[i];

	                // Extend message
	                if (i < 16) {
	                    Wih = Wi.high = M[offset + i * 2]     | 0;
	                    Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
	                } else {
	                    // Gamma0
	                    var gamma0x  = W[i - 15];
	                    var gamma0xh = gamma0x.high;
	                    var gamma0xl = gamma0x.low;
	                    var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
	                    var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

	                    // Gamma1
	                    var gamma1x  = W[i - 2];
	                    var gamma1xh = gamma1x.high;
	                    var gamma1xl = gamma1x.low;
	                    var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
	                    var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

	                    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	                    var Wi7  = W[i - 7];
	                    var Wi7h = Wi7.high;
	                    var Wi7l = Wi7.low;

	                    var Wi16  = W[i - 16];
	                    var Wi16h = Wi16.high;
	                    var Wi16l = Wi16.low;

	                    Wil = gamma0l + Wi7l;
	                    Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
	                    Wil = Wil + gamma1l;
	                    Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
	                    Wil = Wil + Wi16l;
	                    Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

	                    Wi.high = Wih;
	                    Wi.low  = Wil;
	                }

	                var chh  = (eh & fh) ^ (~eh & gh);
	                var chl  = (el & fl) ^ (~el & gl);
	                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
	                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

	                var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
	                var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
	                var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
	                var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));

	                // t1 = h + sigma1 + ch + K[i] + W[i]
	                var Ki  = K[i];
	                var Kih = Ki.high;
	                var Kil = Ki.low;

	                var t1l = hl + sigma1l;
	                var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
	                var t1l = t1l + chl;
	                var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
	                var t1l = t1l + Kil;
	                var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
	                var t1l = t1l + Wil;
	                var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

	                // t2 = sigma0 + maj
	                var t2l = sigma0l + majl;
	                var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

	                // Update working variables
	                hh = gh;
	                hl = gl;
	                gh = fh;
	                gl = fl;
	                fh = eh;
	                fl = el;
	                el = (dl + t1l) | 0;
	                eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
	                dh = ch;
	                dl = cl;
	                ch = bh;
	                cl = bl;
	                bh = ah;
	                bl = al;
	                al = (t1l + t2l) | 0;
	                ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
	            }

	            // Intermediate hash value
	            H0l = H0.low  = (H0l + al);
	            H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
	            H1l = H1.low  = (H1l + bl);
	            H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
	            H2l = H2.low  = (H2l + cl);
	            H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
	            H3l = H3.low  = (H3l + dl);
	            H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
	            H4l = H4.low  = (H4l + el);
	            H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
	            H5l = H5.low  = (H5l + fl);
	            H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
	            H6l = H6.low  = (H6l + gl);
	            H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
	            H7l = H7.low  = (H7l + hl);
	            H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Convert hash to 32-bit word array before returning
	            var hash = this._hash.toX32();

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        },

	        blockSize: 1024/32
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
	}());


	return CryptoJS.SHA512;

}));

/***/ }),

/***/ "2fVw":
/*!*********************************************************!*\
  !*** ./node_modules/jose/dist/browser/lib/is_object.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isObject; });
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
    let proto = input;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(input) === proto;
}


/***/ }),

/***/ "3Qup":
/*!**********************************************************************************************************************************!*\
  !*** /Users/filipepereira/Agentifai/projects/mobile/ionic/client-assistant-integration-app/dist/login-lib/fesm2015/login-lib.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: Endpoint, Intent, LoginLibComponent, LoginLibModule, LoginLibService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Endpoint", function() { return Endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intent", function() { return Intent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLibComponent", function() { return LoginLibComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLibModule", function() { return LoginLibModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLibService", function() { return LoginLibService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class LoginLibService {
}
LoginLibService.ɵfac = function LoginLibService_Factory(t) { return new (t || LoginLibService)(); };
LoginLibService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ token: LoginLibService, factory: LoginLibService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(LoginLibService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

function LoginLibComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "ion-button", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_div_44_Template_ion_button_click_1_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r4); const item_r2 = ctx.$implicit; const ctx_r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r3.openIntentAction(item_r2); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", item_r2.label, " ");
} }
function LoginLibComponent_ion_select_option_51_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "ion-select-option", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const endpoint_r5 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("value", endpoint_r5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(endpoint_r5.label);
} }
class LoginLibComponent {
    constructor() {
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
    loginAction() {
        if (this.username && this.password) {
            this.login.emit({
                username: this.username,
                password: this.password
            });
        }
    }
    fakeTokenLoginAction() {
        if (this.username && this.password) {
            this.fakeTokenLogin.emit({
                username: this.username,
                password: this.password
            });
        }
    }
    logoutAction() {
        this.logout.emit();
    }
    endpointChangeAction() {
        this.endpoint.emit(this.endpointSelected);
    }
    removeVoiceConsentAction() {
        this.removeConsents.emit();
    }
    initializeAction() {
        this.initialize.emit();
    }
    showWidgetAction() {
        this.showWidget.emit();
    }
    hideWidgetAction() {
        this.hideWidget.emit();
    }
    openAppAction() {
        this.openApp.emit();
    }
    setWidgetDimensionsAction() {
        this.setWidgetDimensions.emit();
    }
    registerUserAction() {
        this.registerUser.emit({
            id: '123456789',
            name: this.name
        });
    }
    unregisterUserAction() {
        this.unregisterUser.emit();
    }
    openIntentAction(event) {
        this.openIntent.emit(event.value);
    }
}
LoginLibComponent.ɵfac = function LoginLibComponent_Factory(t) { return new (t || LoginLibComponent)(); };
LoginLibComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: LoginLibComponent, selectors: [["login-login-lib"]], inputs: { toolbarTitle: "toolbarTitle", usernameLabel: "usernameLabel", passwordLabel: "passwordLabel", endpoints: "endpoints", intents: "intents" }, outputs: { login: "login", fakeTokenLogin: "fakeTokenLogin", logout: "logout", endpoint: "endpoint", removeConsents: "removeConsents", initialize: "initialize", showWidget: "showWidget", hideWidget: "hideWidget", openApp: "openApp", registerUser: "registerUser", unregisterUser: "unregisterUser", setWidgetDimensions: "setWidgetDimensions", openIntent: "openIntent" }, decls: 52, vars: 10, consts: [[3, "translucent"], [1, "ion-padding"], ["position", "floating"], ["inputmode", "text", "id", "name", 3, "ngModel", "ngModelChange"], ["inputmode", "numeric", "id", "username", 3, "ngModel", "ngModelChange"], ["type", "password", "inputmode", "password", "id", "password", "show-hide-input", "", 3, "ngModel", "ngModelChange"], [3, "click"], [4, "ngFor", "ngForOf"], ["okText", "confirm", "cancelText", "cancel", 3, "ngModel", "ngModelChange", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function LoginLibComponent_Template(rf, ctx) { if (rf & 1) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ngModelChange", function LoginLibComponent_Template_ion_input_ngModelChange_8_listener($event) { return ctx.name = $event; });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(9, "ion-item");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(10, "ion-label", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(11);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(12, "ion-input", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ngModelChange", function LoginLibComponent_Template_ion_input_ngModelChange_12_listener($event) { return ctx.username = $event; });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(13, "ion-item");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(14, "ion-label", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(15);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(16, "ion-input", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ngModelChange", function LoginLibComponent_Template_ion_input_ngModelChange_16_listener($event) { return ctx.password = $event; });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(17, "div");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(18, "ion-button", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_Template_ion_button_click_18_listener() { return ctx.loginAction(); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(19, " Login ");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(20, "ion-button", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_Template_ion_button_click_20_listener() { return ctx.fakeTokenLoginAction(); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(21, " Fake Token Login ");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(22, "ion-button", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_Template_ion_button_click_22_listener() { return ctx.logoutAction(); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(23, " Logout ");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(24, "div");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(25, "ion-button", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_Template_ion_button_click_25_listener() { return ctx.initializeAction(); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(26, " Initialize ");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(27, "div");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(28, "ion-button", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_Template_ion_button_click_28_listener() { return ctx.showWidgetAction(); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(29, " Show Widget ");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(30, "ion-button", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_Template_ion_button_click_30_listener() { return ctx.hideWidgetAction(); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(31, " Hide Widget ");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(32, "ion-button", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_Template_ion_button_click_32_listener() { return ctx.openAppAction(); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(33, " open Assistant ");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(34, "div");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(35, "ion-button", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_Template_ion_button_click_35_listener() { return ctx.registerUserAction(); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(36, " Register User ");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(37, "ion-button", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_Template_ion_button_click_37_listener() { return ctx.unregisterUserAction(); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(38, " Unregister User ");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(39, "ion-button", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_Template_ion_button_click_39_listener() { return ctx.removeVoiceConsentAction(); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(40, " Remove Voice Consent ");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(41, "div");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(42, "ion-button", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LoginLibComponent_Template_ion_button_click_42_listener() { return ctx.setWidgetDimensionsAction(); });
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ngModelChange", function LoginLibComponent_Template_ion_select_ngModelChange_50_listener($event) { return ctx.endpointSelected = $event; })("ionChange", function LoginLibComponent_Template_ion_select_ionChange_50_listener() { return ctx.endpointChangeAction(); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(51, LoginLibComponent_ion_select_option_51_Template, 2, 2, "ion-select-option", 9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
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
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSelectOption"]], styles: [""] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(LoginLibComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'login-login-lib',
                templateUrl: 'login-lib.component.html',
                styleUrls: ['login-lib.component.scss']
            }]
    }], null, { toolbarTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], usernameLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], passwordLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], endpoints: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], intents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], login: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], fakeTokenLogin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], logout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], endpoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], removeConsents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], initialize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], showWidget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], hideWidget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], openApp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], registerUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], unregisterUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], setWidgetDimensions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], openIntent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();

class LoginLibModule {
}
LoginLibModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: LoginLibModule });
LoginLibModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function LoginLibModule_Factory(t) { return new (t || LoginLibModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(LoginLibModule, { declarations: [LoginLibComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"]], exports: [LoginLibComponent] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(LoginLibModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [LoginLibComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"]
                ],
                exports: [LoginLibComponent]
            }]
    }], null, null); })();

class Endpoint {
    constructor(label, value) {
        this.label = label;
        this.value = value;
    }
}

class Intent {
    constructor(label, value) {
        this.label = label;
        this.value = value;
    }
}

/*
 * Public API Surface of login-lib
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=login-lib.js.map


/***/ }),

/***/ "3y9D":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/sha1.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-1 hash algorithm.
	     */
	    var SHA1 = C_algo.SHA1 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476,
	                0xc3d2e1f0
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];

	            // Computation
	            for (var i = 0; i < 80; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
	                    W[i] = (n << 1) | (n >>> 31);
	                }

	                var t = ((a << 5) | (a >>> 27)) + e + W[i];
	                if (i < 20) {
	                    t += ((b & c) | (~b & d)) + 0x5a827999;
	                } else if (i < 40) {
	                    t += (b ^ c ^ d) + 0x6ed9eba1;
	                } else if (i < 60) {
	                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
	                } else /* if (i < 80) */ {
	                    t += (b ^ c ^ d) - 0x359d3e2a;
	                }

	                e = d;
	                d = c;
	                c = (b << 30) | (b >>> 2);
	                b = a;
	                a = t;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
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
	}());


	return CryptoJS.SHA1;

}));

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "4+qi":
/*!*********************************************************!*\
  !*** ./node_modules/jose/dist/browser/lib/check_p2s.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkP2s; });
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/errors.js */ "StPg");

function checkP2s(p2s) {
    if (!(p2s instanceof Uint8Array) || p2s.length < 8) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWEInvalid"]('PBES2 Salt Input must be 8 or more octets');
    }
}


/***/ }),

/***/ "4TUK":
/*!******************************************************!*\
  !*** ./node_modules/jose/dist/browser/jwks/local.js ***!
  \******************************************************/
/*! exports provided: isJWKSLike, LocalJWKSet, createLocalJWKSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJWKSLike", function() { return isJWKSLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalJWKSet", function() { return LocalJWKSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocalJWKSet", function() { return createLocalJWKSet; });
/* harmony import */ var _key_import_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../key/import.js */ "Qtqc");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/errors.js */ "StPg");
/* harmony import */ var _lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/is_object.js */ "2fVw");



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
    return (jwks &&
        typeof jwks === 'object' &&
        Array.isArray(jwks.keys) &&
        jwks.keys.every(isJWKLike));
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
class LocalJWKSet {
    constructor(jwks) {
        this._cached = new WeakMap();
        if (!isJWKSLike(jwks)) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWKSInvalid"]('JSON Web Key Set malformed');
        }
        this._jwks = clone(jwks);
    }
    async getKey(protectedHeader, token) {
        const { alg, kid } = { ...protectedHeader, ...token.header };
        const kty = getKtyFromAlg(alg);
        const candidates = this._jwks.keys.filter((jwk) => {
            let candidate = kty === jwk.kty;
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
        const { 0: jwk, length } = candidates;
        if (length === 0) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWKSNoMatchingKey"]();
        }
        else if (length !== 1) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWKSMultipleMatchingKeys"]();
        }
        const cached = this._cached.get(jwk) || this._cached.set(jwk, {}).get(jwk);
        if (cached[alg] === undefined) {
            const keyObject = await Object(_key_import_js__WEBPACK_IMPORTED_MODULE_0__["importJWK"])({ ...jwk, ext: true }, alg);
            if (keyObject instanceof Uint8Array || keyObject.type !== 'public') {
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWKSInvalid"]('JSON Web Key Set members must be public keys');
            }
            cached[alg] = keyObject;
        }
        return cached[alg];
    }
}
function createLocalJWKSet(jwks) {
    return LocalJWKSet.prototype.getKey.bind(new LocalJWKSet(jwks));
}


/***/ }),

/***/ "4VJ3":
/*!********************************************************!*\
  !*** ./node_modules/jose/dist/browser/jwk/embedded.js ***!
  \********************************************************/
/*! exports provided: EmbeddedJWK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddedJWK", function() { return EmbeddedJWK; });
/* harmony import */ var _key_import_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../key/import.js */ "Qtqc");
/* harmony import */ var _lib_is_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/is_object.js */ "2fVw");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/errors.js */ "StPg");



async function EmbeddedJWK(protectedHeader, token) {
    const joseHeader = {
        ...protectedHeader,
        ...token.header,
    };
    if (!Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_1__["default"])(joseHeader.jwk)) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('"jwk" (JSON Web Key) Header Parameter must be a JSON object');
    }
    const key = await Object(_key_import_js__WEBPACK_IMPORTED_MODULE_0__["importJWK"])({ ...joseHeader.jwk, ext: true }, joseHeader.alg, true);
    if (key instanceof Uint8Array || key.type !== 'public') {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('"jwk" (JSON Web Key) Header Parameter must be a public key');
    }
    return key;
}


/***/ }),

/***/ "4inf":
/*!**********************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/verify.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subtle_dsa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subtle_dsa.js */ "D2oy");
/* harmony import */ var _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webcrypto.js */ "hqmz");
/* harmony import */ var _check_key_length_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check_key_length.js */ "hKMt");
/* harmony import */ var _get_sign_verify_key_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get_sign_verify_key.js */ "Rg9p");




const verify = async (alg, key, signature, data) => {
    const cryptoKey = await Object(_get_sign_verify_key_js__WEBPACK_IMPORTED_MODULE_3__["default"])(alg, key, 'verify');
    Object(_check_key_length_js__WEBPACK_IMPORTED_MODULE_2__["default"])(alg, cryptoKey);
    const algorithm = Object(_subtle_dsa_js__WEBPACK_IMPORTED_MODULE_0__["default"])(alg, cryptoKey.algorithm);
    try {
        return await _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.verify(algorithm, cryptoKey, signature, data);
    }
    catch (_a) {
        return false;
    }
};
/* harmony default export */ __webpack_exports__["default"] = (verify);


/***/ }),

/***/ "4xNZ":
/*!**************************************************************!*\
  !*** ./node_modules/jose/dist/browser/jws/flattened/sign.js ***!
  \**************************************************************/
/*! exports provided: FlattenedSign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlattenedSign", function() { return FlattenedSign; });
/* harmony import */ var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../runtime/base64url.js */ "KjJ5");
/* harmony import */ var _runtime_sign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../runtime/sign.js */ "eNpK");
/* harmony import */ var _lib_is_disjoint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/is_disjoint.js */ "yopU");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/errors.js */ "StPg");
/* harmony import */ var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/buffer_utils.js */ "xpfA");
/* harmony import */ var _lib_check_key_type_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/check_key_type.js */ "ceW5");
/* harmony import */ var _lib_validate_crit_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/validate_crit.js */ "ElMP");







class FlattenedSign {
    constructor(payload) {
        if (!(payload instanceof Uint8Array)) {
            throw new TypeError('payload must be an instance of Uint8Array');
        }
        this._payload = payload;
    }
    setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
            throw new TypeError('setProtectedHeader can only be called once');
        }
        this._protectedHeader = protectedHeader;
        return this;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
            throw new TypeError('setUnprotectedHeader can only be called once');
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
    }
    async sign(key, options) {
        if (!this._protectedHeader && !this._unprotectedHeader) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWSInvalid"]('either setProtectedHeader or setUnprotectedHeader must be called before #sign()');
        }
        if (!Object(_lib_is_disjoint_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this._protectedHeader, this._unprotectedHeader)) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWSInvalid"]('JWS Protected and JWS Unprotected Header Parameter names must be disjoint');
        }
        const joseHeader = {
            ...this._protectedHeader,
            ...this._unprotectedHeader,
        };
        const extensions = Object(_lib_validate_crit_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWSInvalid"], new Map([['b64', true]]), options === null || options === void 0 ? void 0 : options.crit, this._protectedHeader, joseHeader);
        let b64 = true;
        if (extensions.has('b64')) {
            b64 = this._protectedHeader.b64;
            if (typeof b64 !== 'boolean') {
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWSInvalid"]('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
            }
        }
        const { alg } = joseHeader;
        if (typeof alg !== 'string' || !alg) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWSInvalid"]('JWS "alg" (Algorithm) Header Parameter missing or invalid');
        }
        Object(_lib_check_key_type_js__WEBPACK_IMPORTED_MODULE_5__["default"])(alg, key, 'sign');
        let payload = this._payload;
        if (b64) {
            payload = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_4__["encoder"].encode(Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"])(payload));
        }
        let protectedHeader;
        if (this._protectedHeader) {
            protectedHeader = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_4__["encoder"].encode(Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"])(JSON.stringify(this._protectedHeader)));
        }
        else {
            protectedHeader = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_4__["encoder"].encode('');
        }
        const data = Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_4__["concat"])(protectedHeader, _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_4__["encoder"].encode('.'), payload);
        const signature = await Object(_runtime_sign_js__WEBPACK_IMPORTED_MODULE_1__["default"])(alg, key, data);
        const jws = {
            signature: Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"])(signature),
            payload: '',
        };
        if (b64) {
            jws.payload = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_4__["decoder"].decode(payload);
        }
        if (this._unprotectedHeader) {
            jws.header = this._unprotectedHeader;
        }
        if (this._protectedHeader) {
            jws.protected = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_4__["decoder"].decode(protectedHeader);
        }
        return jws;
    }
}


/***/ }),

/***/ "5hvy":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/sha3.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./x64-core */ "MlIO"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var C_algo = C.algo;

	    // Constants tables
	    var RHO_OFFSETS = [];
	    var PI_INDEXES  = [];
	    var ROUND_CONSTANTS = [];

	    // Compute Constants
	    (function () {
	        // Compute rho offset constants
	        var x = 1, y = 0;
	        for (var t = 0; t < 24; t++) {
	            RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;

	            var newX = y % 5;
	            var newY = (2 * x + 3 * y) % 5;
	            x = newX;
	            y = newY;
	        }

	        // Compute pi index constants
	        for (var x = 0; x < 5; x++) {
	            for (var y = 0; y < 5; y++) {
	                PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
	            }
	        }

	        // Compute round constants
	        var LFSR = 0x01;
	        for (var i = 0; i < 24; i++) {
	            var roundConstantMsw = 0;
	            var roundConstantLsw = 0;

	            for (var j = 0; j < 7; j++) {
	                if (LFSR & 0x01) {
	                    var bitPosition = (1 << j) - 1;
	                    if (bitPosition < 32) {
	                        roundConstantLsw ^= 1 << bitPosition;
	                    } else /* if (bitPosition >= 32) */ {
	                        roundConstantMsw ^= 1 << (bitPosition - 32);
	                    }
	                }

	                // Compute next LFSR
	                if (LFSR & 0x80) {
	                    // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
	                    LFSR = (LFSR << 1) ^ 0x71;
	                } else {
	                    LFSR <<= 1;
	                }
	            }

	            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
	        }
	    }());

	    // Reusable objects for temporary values
	    var T = [];
	    (function () {
	        for (var i = 0; i < 25; i++) {
	            T[i] = X64Word.create();
	        }
	    }());

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

	        _doReset: function () {
	            var state = this._state = []
	            for (var i = 0; i < 25; i++) {
	                state[i] = new X64Word.init();
	            }

	            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var state = this._state;
	            var nBlockSizeLanes = this.blockSize / 2;

	            // Absorb
	            for (var i = 0; i < nBlockSizeLanes; i++) {
	                // Shortcuts
	                var M2i  = M[offset + 2 * i];
	                var M2i1 = M[offset + 2 * i + 1];

	                // Swap endian
	                M2i = (
	                    (((M2i << 8)  | (M2i >>> 24)) & 0x00ff00ff) |
	                    (((M2i << 24) | (M2i >>> 8))  & 0xff00ff00)
	                );
	                M2i1 = (
	                    (((M2i1 << 8)  | (M2i1 >>> 24)) & 0x00ff00ff) |
	                    (((M2i1 << 24) | (M2i1 >>> 8))  & 0xff00ff00)
	                );

	                // Absorb message into state
	                var lane = state[i];
	                lane.high ^= M2i1;
	                lane.low  ^= M2i;
	            }

	            // Rounds
	            for (var round = 0; round < 24; round++) {
	                // Theta
	                for (var x = 0; x < 5; x++) {
	                    // Mix column lanes
	                    var tMsw = 0, tLsw = 0;
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        tMsw ^= lane.high;
	                        tLsw ^= lane.low;
	                    }

	                    // Temporary values
	                    var Tx = T[x];
	                    Tx.high = tMsw;
	                    Tx.low  = tLsw;
	                }
	                for (var x = 0; x < 5; x++) {
	                    // Shortcuts
	                    var Tx4 = T[(x + 4) % 5];
	                    var Tx1 = T[(x + 1) % 5];
	                    var Tx1Msw = Tx1.high;
	                    var Tx1Lsw = Tx1.low;

	                    // Mix surrounding columns
	                    var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
	                    var tLsw = Tx4.low  ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        lane.high ^= tMsw;
	                        lane.low  ^= tLsw;
	                    }
	                }

	                // Rho Pi
	                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
	                    var tMsw;
	                    var tLsw;

	                    // Shortcuts
	                    var lane = state[laneIndex];
	                    var laneMsw = lane.high;
	                    var laneLsw = lane.low;
	                    var rhoOffset = RHO_OFFSETS[laneIndex];

	                    // Rotate lanes
	                    if (rhoOffset < 32) {
	                        tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
	                        tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
	                    } else /* if (rhoOffset >= 32) */ {
	                        tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
	                        tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
	                    }

	                    // Transpose lanes
	                    var TPiLane = T[PI_INDEXES[laneIndex]];
	                    TPiLane.high = tMsw;
	                    TPiLane.low  = tLsw;
	                }

	                // Rho pi at x = y = 0
	                var T0 = T[0];
	                var state0 = state[0];
	                T0.high = state0.high;
	                T0.low  = state0.low;

	                // Chi
	                for (var x = 0; x < 5; x++) {
	                    for (var y = 0; y < 5; y++) {
	                        // Shortcuts
	                        var laneIndex = x + 5 * y;
	                        var lane = state[laneIndex];
	                        var TLane = T[laneIndex];
	                        var Tx1Lane = T[((x + 1) % 5) + 5 * y];
	                        var Tx2Lane = T[((x + 2) % 5) + 5 * y];

	                        // Mix rows
	                        lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
	                        lane.low  = TLane.low  ^ (~Tx1Lane.low  & Tx2Lane.low);
	                    }
	                }

	                // Iota
	                var lane = state[0];
	                var roundConstant = ROUND_CONSTANTS[round];
	                lane.high ^= roundConstant.high;
	                lane.low  ^= roundConstant.low;
	            }
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;
	            var blockSizeBits = this.blockSize * 32;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
	            dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var state = this._state;
	            var outputLengthBytes = this.cfg.outputLength / 8;
	            var outputLengthLanes = outputLengthBytes / 8;

	            // Squeeze
	            var hashWords = [];
	            for (var i = 0; i < outputLengthLanes; i++) {
	                // Shortcuts
	                var lane = state[i];
	                var laneMsw = lane.high;
	                var laneLsw = lane.low;

	                // Swap endian
	                laneMsw = (
	                    (((laneMsw << 8)  | (laneMsw >>> 24)) & 0x00ff00ff) |
	                    (((laneMsw << 24) | (laneMsw >>> 8))  & 0xff00ff00)
	                );
	                laneLsw = (
	                    (((laneLsw << 8)  | (laneLsw >>> 24)) & 0x00ff00ff) |
	                    (((laneLsw << 24) | (laneLsw >>> 8))  & 0xff00ff00)
	                );

	                // Squeeze state to retrieve hash
	                hashWords.push(laneLsw);
	                hashWords.push(laneMsw);
	            }

	            // Return final computed hash
	            return new WordArray.init(hashWords, outputLengthBytes);
	        },

	        clone: function () {
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
	}(Math));


	return CryptoJS.SHA3;

}));

/***/ }),

/***/ "7SCF":
/*!*****************************************************!*\
  !*** ./node_modules/jose/dist/browser/lib/epoch.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((date) => Math.floor(date.getTime() / 1000));


/***/ }),

/***/ "8s3D":
/*!************************************************************************!*\
  !*** ./node_modules/jose/dist/browser/util/decode_protected_header.js ***!
  \************************************************************************/
/*! exports provided: decodeProtectedHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeProtectedHeader", function() { return decodeProtectedHeader; });
/* harmony import */ var _base64url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base64url.js */ "JeaE");
/* harmony import */ var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/buffer_utils.js */ "xpfA");
/* harmony import */ var _lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/is_object.js */ "2fVw");



function decodeProtectedHeader(token) {
    let protectedB64u;
    if (typeof token === 'string') {
        const parts = token.split('.');
        if (parts.length === 3 || parts.length === 5) {
            ;
            [protectedB64u] = parts;
        }
    }
    else if (typeof token === 'object' && token) {
        if ('protected' in token) {
            protectedB64u = token.protected;
        }
        else {
            throw new TypeError('Token does not contain a Protected Header');
        }
    }
    try {
        if (typeof protectedB64u !== 'string' || !protectedB64u) {
            throw new Error();
        }
        const result = JSON.parse(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__["decoder"].decode(Object(_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(protectedB64u)));
        if (!Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__["default"])(result)) {
            throw new Error();
        }
        return result;
    }
    catch (_a) {
        throw new TypeError('Invalid Token or Protected Header formatting');
    }
}


/***/ }),

/***/ "9CFX":
/*!*************************************************!*\
  !*** ./node_modules/jose/dist/browser/index.js ***!
  \*************************************************/
/*! exports provided: compactDecrypt, flattenedDecrypt, generalDecrypt, GeneralEncrypt, compactVerify, flattenedVerify, generalVerify, jwtVerify, jwtDecrypt, CompactEncrypt, FlattenedEncrypt, CompactSign, FlattenedSign, GeneralSign, SignJWT, EncryptJWT, calculateJwkThumbprint, EmbeddedJWK, createLocalJWKSet, createRemoteJWKSet, UnsecuredJWT, exportPKCS8, exportSPKI, exportJWK, importSPKI, importPKCS8, importX509, importJWK, decodeProtectedHeader, decodeJwt, errors, generateKeyPair, generateSecret, base64url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jwe_compact_decrypt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwe/compact/decrypt.js */ "xhLL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compactDecrypt", function() { return _jwe_compact_decrypt_js__WEBPACK_IMPORTED_MODULE_0__["compactDecrypt"]; });

/* harmony import */ var _jwe_flattened_decrypt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwe/flattened/decrypt.js */ "xHgm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flattenedDecrypt", function() { return _jwe_flattened_decrypt_js__WEBPACK_IMPORTED_MODULE_1__["flattenedDecrypt"]; });

/* harmony import */ var _jwe_general_decrypt_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwe/general/decrypt.js */ "aaL6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generalDecrypt", function() { return _jwe_general_decrypt_js__WEBPACK_IMPORTED_MODULE_2__["generalDecrypt"]; });

/* harmony import */ var _jwe_general_encrypt_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwe/general/encrypt.js */ "/D05");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeneralEncrypt", function() { return _jwe_general_encrypt_js__WEBPACK_IMPORTED_MODULE_3__["GeneralEncrypt"]; });

/* harmony import */ var _jws_compact_verify_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jws/compact/verify.js */ "e4TT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compactVerify", function() { return _jws_compact_verify_js__WEBPACK_IMPORTED_MODULE_4__["compactVerify"]; });

/* harmony import */ var _jws_flattened_verify_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jws/flattened/verify.js */ "n8OJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flattenedVerify", function() { return _jws_flattened_verify_js__WEBPACK_IMPORTED_MODULE_5__["flattenedVerify"]; });

/* harmony import */ var _jws_general_verify_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jws/general/verify.js */ "/xMJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generalVerify", function() { return _jws_general_verify_js__WEBPACK_IMPORTED_MODULE_6__["generalVerify"]; });

/* harmony import */ var _jwt_verify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jwt/verify.js */ "m2FS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jwtVerify", function() { return _jwt_verify_js__WEBPACK_IMPORTED_MODULE_7__["jwtVerify"]; });

/* harmony import */ var _jwt_decrypt_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jwt/decrypt.js */ "tOAC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jwtDecrypt", function() { return _jwt_decrypt_js__WEBPACK_IMPORTED_MODULE_8__["jwtDecrypt"]; });

/* harmony import */ var _jwe_compact_encrypt_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./jwe/compact/encrypt.js */ "xwey");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompactEncrypt", function() { return _jwe_compact_encrypt_js__WEBPACK_IMPORTED_MODULE_9__["CompactEncrypt"]; });

/* harmony import */ var _jwe_flattened_encrypt_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./jwe/flattened/encrypt.js */ "Dk7m");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlattenedEncrypt", function() { return _jwe_flattened_encrypt_js__WEBPACK_IMPORTED_MODULE_10__["FlattenedEncrypt"]; });

/* harmony import */ var _jws_compact_sign_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./jws/compact/sign.js */ "iEOA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompactSign", function() { return _jws_compact_sign_js__WEBPACK_IMPORTED_MODULE_11__["CompactSign"]; });

/* harmony import */ var _jws_flattened_sign_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./jws/flattened/sign.js */ "4xNZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlattenedSign", function() { return _jws_flattened_sign_js__WEBPACK_IMPORTED_MODULE_12__["FlattenedSign"]; });

/* harmony import */ var _jws_general_sign_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./jws/general/sign.js */ "NSDb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeneralSign", function() { return _jws_general_sign_js__WEBPACK_IMPORTED_MODULE_13__["GeneralSign"]; });

/* harmony import */ var _jwt_sign_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./jwt/sign.js */ "/cEr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignJWT", function() { return _jwt_sign_js__WEBPACK_IMPORTED_MODULE_14__["SignJWT"]; });

/* harmony import */ var _jwt_encrypt_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./jwt/encrypt.js */ "c9hL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EncryptJWT", function() { return _jwt_encrypt_js__WEBPACK_IMPORTED_MODULE_15__["EncryptJWT"]; });

/* harmony import */ var _jwk_thumbprint_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./jwk/thumbprint.js */ "18mX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculateJwkThumbprint", function() { return _jwk_thumbprint_js__WEBPACK_IMPORTED_MODULE_16__["calculateJwkThumbprint"]; });

/* harmony import */ var _jwk_embedded_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./jwk/embedded.js */ "4VJ3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddedJWK", function() { return _jwk_embedded_js__WEBPACK_IMPORTED_MODULE_17__["EmbeddedJWK"]; });

/* harmony import */ var _jwks_local_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./jwks/local.js */ "4TUK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLocalJWKSet", function() { return _jwks_local_js__WEBPACK_IMPORTED_MODULE_18__["createLocalJWKSet"]; });

/* harmony import */ var _jwks_remote_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./jwks/remote.js */ "OvXJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRemoteJWKSet", function() { return _jwks_remote_js__WEBPACK_IMPORTED_MODULE_19__["createRemoteJWKSet"]; });

/* harmony import */ var _jwt_unsecured_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./jwt/unsecured.js */ "xXIV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnsecuredJWT", function() { return _jwt_unsecured_js__WEBPACK_IMPORTED_MODULE_20__["UnsecuredJWT"]; });

/* harmony import */ var _key_export_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./key/export.js */ "k303");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exportPKCS8", function() { return _key_export_js__WEBPACK_IMPORTED_MODULE_21__["exportPKCS8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exportSPKI", function() { return _key_export_js__WEBPACK_IMPORTED_MODULE_21__["exportSPKI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exportJWK", function() { return _key_export_js__WEBPACK_IMPORTED_MODULE_21__["exportJWK"]; });

/* harmony import */ var _key_import_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./key/import.js */ "Qtqc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "importSPKI", function() { return _key_import_js__WEBPACK_IMPORTED_MODULE_22__["importSPKI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "importPKCS8", function() { return _key_import_js__WEBPACK_IMPORTED_MODULE_22__["importPKCS8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "importX509", function() { return _key_import_js__WEBPACK_IMPORTED_MODULE_22__["importX509"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "importJWK", function() { return _key_import_js__WEBPACK_IMPORTED_MODULE_22__["importJWK"]; });

/* harmony import */ var _util_decode_protected_header_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./util/decode_protected_header.js */ "8s3D");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decodeProtectedHeader", function() { return _util_decode_protected_header_js__WEBPACK_IMPORTED_MODULE_23__["decodeProtectedHeader"]; });

/* harmony import */ var _util_decode_jwt_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./util/decode_jwt.js */ "IeVz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decodeJwt", function() { return _util_decode_jwt_js__WEBPACK_IMPORTED_MODULE_24__["decodeJwt"]; });

/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./util/errors.js */ "StPg");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return _util_errors_js__WEBPACK_IMPORTED_MODULE_25__; });
/* harmony import */ var _key_generate_key_pair_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./key/generate_key_pair.js */ "j2Dr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateKeyPair", function() { return _key_generate_key_pair_js__WEBPACK_IMPORTED_MODULE_26__["generateKeyPair"]; });

/* harmony import */ var _key_generate_secret_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./key/generate_secret.js */ "KJfr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateSecret", function() { return _key_generate_secret_js__WEBPACK_IMPORTED_MODULE_27__["generateSecret"]; });

/* harmony import */ var _util_base64url_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./util/base64url.js */ "JeaE");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "base64url", function() { return _util_base64url_js__WEBPACK_IMPORTED_MODULE_28__; });

































/***/ }),

/***/ "9OqN":
/*!********************************************!*\
  !*** ./node_modules/crypto-js/mode-ctr.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./cipher-core */ "OLod"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Counter block mode.
	 */
	CryptoJS.mode.CTR = (function () {
	    var CTR = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = CTR.Encryptor = CTR.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Increment counter
	            counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTR.Decryptor = Encryptor;

	    return CTR;
	}());


	return CryptoJS.mode.CTR;

}));

/***/ }),

/***/ "9kcE":
/*!**********************************************************************************!*\
  !*** ./src/app/agentifai/models/widget-config/agentifai-horizontal-alignment.ts ***!
  \**********************************************************************************/
/*! exports provided: AgentifaiHorizontalAlignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentifaiHorizontalAlignment", function() { return AgentifaiHorizontalAlignment; });
var AgentifaiHorizontalAlignment;
(function (AgentifaiHorizontalAlignment) {
    AgentifaiHorizontalAlignment["Left"] = "LEFT";
    AgentifaiHorizontalAlignment["Right"] = "RIGHT";
    AgentifaiHorizontalAlignment["Center"] = "CENTER";
})(AgentifaiHorizontalAlignment || (AgentifaiHorizontalAlignment = {}));
;


/***/ }),

/***/ "9yED":
/*!********************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/zlib.js ***!
  \********************************************************/
/*! exports provided: inflate, deflate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inflate", function() { return inflate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deflate", function() { return deflate; });
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/errors.js */ "StPg");

const inflate = async () => {
    throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JOSENotSupported"]('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `inflateRaw` decrypt option to provide Inflate Raw implementation.');
};
const deflate = async () => {
    throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JOSENotSupported"]('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `deflateRaw` encrypt option to provide Deflate Raw implementation.');
};


/***/ }),

/***/ "A/hn":
/*!********************************************************************************!*\
  !*** ./src/app/agentifai/models/widget-config/agentifai-vertical-alignment.ts ***!
  \********************************************************************************/
/*! exports provided: AgentifaiVerticalAlignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentifaiVerticalAlignment", function() { return AgentifaiVerticalAlignment; });
var AgentifaiVerticalAlignment;
(function (AgentifaiVerticalAlignment) {
    AgentifaiVerticalAlignment["Top"] = "TOP";
    AgentifaiVerticalAlignment["Bottom"] = "BOTTOM";
    AgentifaiVerticalAlignment["Center"] = "CENTER";
})(AgentifaiVerticalAlignment || (AgentifaiVerticalAlignment = {}));
;


/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "ALsQ":
/*!********************************************!*\
  !*** ./node_modules/crypto-js/mode-cfb.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./cipher-core */ "OLod"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Cipher Feedback block mode.
	 */
	CryptoJS.mode.CFB = (function () {
	    var CFB = CryptoJS.lib.BlockCipherMode.extend();

	    CFB.Encryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // Remember this block to use with next block
	            this._prevBlock = words.slice(offset, offset + blockSize);
	        }
	    });

	    CFB.Decryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            // Remember this block to use with next block
	            var thisBlock = words.slice(offset, offset + blockSize);

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // This block becomes the previous block
	            this._prevBlock = thisBlock;
	        }
	    });

	    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
	        var keystream;

	        // Shortcut
	        var iv = this._iv;

	        // Generate keystream
	        if (iv) {
	            keystream = iv.slice(0);

	            // Remove IV for subsequent blocks
	            this._iv = undefined;
	        } else {
	            keystream = this._prevBlock;
	        }
	        cipher.encryptBlock(keystream, 0);

	        // Encrypt
	        for (var i = 0; i < blockSize; i++) {
	            words[offset + i] ^= keystream[i];
	        }
	    }

	    return CFB;
	}());


	return CryptoJS.mode.CFB;

}));

/***/ }),

/***/ "AQ7b":
/*!**********************************************************************!*\
  !*** ./node_modules/jose/dist/browser/lib/decrypt_key_management.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _runtime_aeskw_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime/aeskw.js */ "Qm1j");
/* harmony import */ var _runtime_ecdhes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../runtime/ecdhes.js */ "qIkZ");
/* harmony import */ var _runtime_pbes2kw_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime/pbes2kw.js */ "Oe4d");
/* harmony import */ var _runtime_rsaes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../runtime/rsaes.js */ "WR06");
/* harmony import */ var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../runtime/base64url.js */ "KjJ5");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/errors.js */ "StPg");
/* harmony import */ var _lib_cek_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/cek.js */ "qW6o");
/* harmony import */ var _key_import_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../key/import.js */ "Qtqc");
/* harmony import */ var _check_key_type_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./check_key_type.js */ "ceW5");
/* harmony import */ var _is_object_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./is_object.js */ "2fVw");
/* harmony import */ var _aesgcmkw_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./aesgcmkw.js */ "aAVB");











async function decryptKeyManagement(alg, key, encryptedKey, joseHeader) {
    Object(_check_key_type_js__WEBPACK_IMPORTED_MODULE_8__["default"])(alg, key, 'decrypt');
    switch (alg) {
        case 'dir': {
            if (encryptedKey !== undefined)
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('Encountered unexpected JWE Encrypted Key');
            return key;
        }
        case 'ECDH-ES':
            if (encryptedKey !== undefined)
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('Encountered unexpected JWE Encrypted Key');
        case 'ECDH-ES+A128KW':
        case 'ECDH-ES+A192KW':
        case 'ECDH-ES+A256KW': {
            if (!Object(_is_object_js__WEBPACK_IMPORTED_MODULE_9__["default"])(joseHeader.epk))
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"](`JOSE Header "epk" (Ephemeral Public Key) missing or invalid`);
            if (!_runtime_ecdhes_js__WEBPACK_IMPORTED_MODULE_1__["ecdhAllowed"](key))
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JOSENotSupported"]('ECDH with the provided key is not allowed or not supported by your javascript runtime');
            const epk = await Object(_key_import_js__WEBPACK_IMPORTED_MODULE_7__["importJWK"])(joseHeader.epk, alg);
            let partyUInfo;
            let partyVInfo;
            if (joseHeader.apu !== undefined) {
                if (typeof joseHeader.apu !== 'string')
                    throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"](`JOSE Header "apu" (Agreement PartyUInfo) invalid`);
                partyUInfo = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_4__["decode"])(joseHeader.apu);
            }
            if (joseHeader.apv !== undefined) {
                if (typeof joseHeader.apv !== 'string')
                    throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"](`JOSE Header "apv" (Agreement PartyVInfo) invalid`);
                partyVInfo = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_4__["decode"])(joseHeader.apv);
            }
            const sharedSecret = await _runtime_ecdhes_js__WEBPACK_IMPORTED_MODULE_1__["deriveKey"](epk, key, alg === 'ECDH-ES' ? joseHeader.enc : alg, alg === 'ECDH-ES' ? Object(_lib_cek_js__WEBPACK_IMPORTED_MODULE_6__["bitLength"])(joseHeader.enc) : parseInt(alg.slice(-5, -2), 10), partyUInfo, partyVInfo);
            if (alg === 'ECDH-ES')
                return sharedSecret;
            if (encryptedKey === undefined)
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('JWE Encrypted Key missing');
            return Object(_runtime_aeskw_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(alg.slice(-6), sharedSecret, encryptedKey);
        }
        case 'RSA1_5':
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512': {
            if (encryptedKey === undefined)
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('JWE Encrypted Key missing');
            return Object(_runtime_rsaes_js__WEBPACK_IMPORTED_MODULE_3__["decrypt"])(alg, key, encryptedKey);
        }
        case 'PBES2-HS256+A128KW':
        case 'PBES2-HS384+A192KW':
        case 'PBES2-HS512+A256KW': {
            if (encryptedKey === undefined)
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('JWE Encrypted Key missing');
            if (typeof joseHeader.p2c !== 'number')
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"](`JOSE Header "p2c" (PBES2 Count) missing or invalid`);
            if (typeof joseHeader.p2s !== 'string')
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"](`JOSE Header "p2s" (PBES2 Salt) missing or invalid`);
            return Object(_runtime_pbes2kw_js__WEBPACK_IMPORTED_MODULE_2__["decrypt"])(alg, key, encryptedKey, joseHeader.p2c, Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_4__["decode"])(joseHeader.p2s));
        }
        case 'A128KW':
        case 'A192KW':
        case 'A256KW': {
            if (encryptedKey === undefined)
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('JWE Encrypted Key missing');
            return Object(_runtime_aeskw_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(alg, key, encryptedKey);
        }
        case 'A128GCMKW':
        case 'A192GCMKW':
        case 'A256GCMKW': {
            if (encryptedKey === undefined)
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('JWE Encrypted Key missing');
            if (typeof joseHeader.iv !== 'string')
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"](`JOSE Header "iv" (Initialization Vector) missing or invalid`);
            if (typeof joseHeader.tag !== 'string')
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"](`JOSE Header "tag" (Authentication Tag) missing or invalid`);
            const iv = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_4__["decode"])(joseHeader.iv);
            const tag = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_4__["decode"])(joseHeader.tag);
            return Object(_aesgcmkw_js__WEBPACK_IMPORTED_MODULE_10__["unwrap"])(alg, key, encryptedKey, iv, tag);
        }
        default: {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JOSENotSupported"]('Invalid or unsupported "alg" (JWE Algorithm) header value');
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (decryptKeyManagement);


/***/ }),

/***/ "D2oy":
/*!**************************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/subtle_dsa.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return subtleDsa; });
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env.js */ "+S68");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/errors.js */ "StPg");


function subtleDsa(alg, algorithm) {
    const hash = `SHA-${alg.slice(-3)}`;
    switch (alg) {
        case 'HS256':
        case 'HS384':
        case 'HS512':
            return { hash, name: 'HMAC' };
        case 'PS256':
        case 'PS384':
        case 'PS512':
            return { hash, name: 'RSA-PSS', saltLength: alg.slice(-3) >> 3 };
        case 'RS256':
        case 'RS384':
        case 'RS512':
            return { hash, name: 'RSASSA-PKCS1-v1_5' };
        case 'ES256':
        case 'ES384':
        case 'ES512':
            return { hash, name: 'ECDSA', namedCurve: algorithm.namedCurve };
        case Object(_env_js__WEBPACK_IMPORTED_MODULE_0__["isCloudflareWorkers"])() && 'EdDSA':
            const { namedCurve } = algorithm;
            return { name: namedCurve, namedCurve };
        default:
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JOSENotSupported"](`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
}


/***/ }),

/***/ "D3C9":
/*!**********************************************************!*\
  !*** ./node_modules/jose/dist/browser/lib/crypto_key.js ***!
  \**********************************************************/
/*! exports provided: checkSigCryptoKey, checkEncCryptoKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSigCryptoKey", function() { return checkSigCryptoKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkEncCryptoKey", function() { return checkEncCryptoKey; });
/* harmony import */ var _runtime_env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime/env.js */ "+S68");

function unusable(name, prop = 'algorithm.name') {
    return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
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
    if (usages.length && !usages.some((expected) => key.usages.includes(expected))) {
        let msg = 'CryptoKey does not support this operation, its usages must include ';
        if (usages.length > 2) {
            const last = usages.pop();
            msg += `one of ${usages.join(', ')}, or ${last}.`;
        }
        else if (usages.length === 2) {
            msg += `one of ${usages[0]} or ${usages[1]}.`;
        }
        else {
            msg += `${usages[0]}.`;
        }
        throw new TypeError(msg);
    }
}
function checkSigCryptoKey(key, alg, ...usages) {
    switch (alg) {
        case 'HS256':
        case 'HS384':
        case 'HS512': {
            if (!isAlgorithm(key.algorithm, 'HMAC'))
                throw unusable('HMAC');
            const expected = parseInt(alg.slice(2), 10);
            const actual = getHashLength(key.algorithm.hash);
            if (actual !== expected)
                throw unusable(`SHA-${expected}`, 'algorithm.hash');
            break;
        }
        case 'RS256':
        case 'RS384':
        case 'RS512': {
            if (!isAlgorithm(key.algorithm, 'RSASSA-PKCS1-v1_5'))
                throw unusable('RSASSA-PKCS1-v1_5');
            const expected = parseInt(alg.slice(2), 10);
            const actual = getHashLength(key.algorithm.hash);
            if (actual !== expected)
                throw unusable(`SHA-${expected}`, 'algorithm.hash');
            break;
        }
        case 'PS256':
        case 'PS384':
        case 'PS512': {
            if (!isAlgorithm(key.algorithm, 'RSA-PSS'))
                throw unusable('RSA-PSS');
            const expected = parseInt(alg.slice(2), 10);
            const actual = getHashLength(key.algorithm.hash);
            if (actual !== expected)
                throw unusable(`SHA-${expected}`, 'algorithm.hash');
            break;
        }
        case Object(_runtime_env_js__WEBPACK_IMPORTED_MODULE_0__["isCloudflareWorkers"])() && 'EdDSA': {
            if (!isAlgorithm(key.algorithm, 'NODE-ED25519'))
                throw unusable('NODE-ED25519');
            break;
        }
        case 'ES256':
        case 'ES384':
        case 'ES512': {
            if (!isAlgorithm(key.algorithm, 'ECDSA'))
                throw unusable('ECDSA');
            const expected = getNamedCurve(alg);
            const actual = key.algorithm.namedCurve;
            if (actual !== expected)
                throw unusable(expected, 'algorithm.namedCurve');
            break;
        }
        default:
            throw new TypeError('CryptoKey does not support this operation');
    }
    checkUsage(key, usages);
}
function checkEncCryptoKey(key, alg, ...usages) {
    switch (alg) {
        case 'A128GCM':
        case 'A192GCM':
        case 'A256GCM': {
            if (!isAlgorithm(key.algorithm, 'AES-GCM'))
                throw unusable('AES-GCM');
            const expected = parseInt(alg.slice(1, 4), 10);
            const actual = key.algorithm.length;
            if (actual !== expected)
                throw unusable(expected, 'algorithm.length');
            break;
        }
        case 'A128KW':
        case 'A192KW':
        case 'A256KW': {
            if (!isAlgorithm(key.algorithm, 'AES-KW'))
                throw unusable('AES-KW');
            const expected = parseInt(alg.slice(1, 4), 10);
            const actual = key.algorithm.length;
            if (actual !== expected)
                throw unusable(expected, 'algorithm.length');
            break;
        }
        case 'ECDH':
            if (!isAlgorithm(key.algorithm, 'ECDH'))
                throw unusable('ECDH');
            break;
        case 'PBES2-HS256+A128KW':
        case 'PBES2-HS384+A192KW':
        case 'PBES2-HS512+A256KW':
            if (!isAlgorithm(key.algorithm, 'PBKDF2'))
                throw unusable('PBKDF2');
            break;
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512': {
            if (!isAlgorithm(key.algorithm, 'RSA-OAEP'))
                throw unusable('RSA-OAEP');
            const expected = parseInt(alg.slice(9), 10) || 1;
            const actual = getHashLength(key.algorithm.hash);
            if (actual !== expected)
                throw unusable(`SHA-${expected}`, 'algorithm.hash');
            break;
        }
        default:
            throw new TypeError('CryptoKey does not support this operation');
    }
    checkUsage(key, usages);
}


/***/ }),

/***/ "Dk7m":
/*!*****************************************************************!*\
  !*** ./node_modules/jose/dist/browser/jwe/flattened/encrypt.js ***!
  \*****************************************************************/
/*! exports provided: unprotected, FlattenedEncrypt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unprotected", function() { return unprotected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlattenedEncrypt", function() { return FlattenedEncrypt; });
/* harmony import */ var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../runtime/base64url.js */ "KjJ5");
/* harmony import */ var _runtime_encrypt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../runtime/encrypt.js */ "Ninj");
/* harmony import */ var _runtime_zlib_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../runtime/zlib.js */ "9yED");
/* harmony import */ var _lib_iv_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/iv.js */ "spAk");
/* harmony import */ var _lib_encrypt_key_management_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/encrypt_key_management.js */ "NP3A");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/errors.js */ "StPg");
/* harmony import */ var _lib_is_disjoint_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/is_disjoint.js */ "yopU");
/* harmony import */ var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/buffer_utils.js */ "xpfA");
/* harmony import */ var _lib_validate_crit_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/validate_crit.js */ "ElMP");









const unprotected = Symbol();
class FlattenedEncrypt {
    constructor(plaintext) {
        if (!(plaintext instanceof Uint8Array)) {
            throw new TypeError('plaintext must be an instance of Uint8Array');
        }
        this._plaintext = plaintext;
    }
    setKeyManagementParameters(parameters) {
        if (this._keyManagementParameters) {
            throw new TypeError('setKeyManagementParameters can only be called once');
        }
        this._keyManagementParameters = parameters;
        return this;
    }
    setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
            throw new TypeError('setProtectedHeader can only be called once');
        }
        this._protectedHeader = protectedHeader;
        return this;
    }
    setSharedUnprotectedHeader(sharedUnprotectedHeader) {
        if (this._sharedUnprotectedHeader) {
            throw new TypeError('setSharedUnprotectedHeader can only be called once');
        }
        this._sharedUnprotectedHeader = sharedUnprotectedHeader;
        return this;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
            throw new TypeError('setUnprotectedHeader can only be called once');
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
    }
    setAdditionalAuthenticatedData(aad) {
        this._aad = aad;
        return this;
    }
    setContentEncryptionKey(cek) {
        if (this._cek) {
            throw new TypeError('setContentEncryptionKey can only be called once');
        }
        this._cek = cek;
        return this;
    }
    setInitializationVector(iv) {
        if (this._iv) {
            throw new TypeError('setInitializationVector can only be called once');
        }
        this._iv = iv;
        return this;
    }
    async encrypt(key, options) {
        if (!this._protectedHeader && !this._unprotectedHeader && !this._sharedUnprotectedHeader) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()');
        }
        if (!Object(_lib_is_disjoint_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this._protectedHeader, this._unprotectedHeader, this._sharedUnprotectedHeader)) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint');
        }
        const joseHeader = {
            ...this._protectedHeader,
            ...this._unprotectedHeader,
            ...this._sharedUnprotectedHeader,
        };
        Object(_lib_validate_crit_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"], new Map(), options === null || options === void 0 ? void 0 : options.crit, this._protectedHeader, joseHeader);
        if (joseHeader.zip !== undefined) {
            if (!this._protectedHeader || !this._protectedHeader.zip) {
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
            }
            if (joseHeader.zip !== 'DEF') {
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JOSENotSupported"]('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value');
            }
        }
        const { alg, enc } = joseHeader;
        if (typeof alg !== 'string' || !alg) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('JWE "alg" (Algorithm) Header Parameter missing or invalid');
        }
        if (typeof enc !== 'string' || !enc) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JWEInvalid"]('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
        }
        let encryptedKey;
        if (alg === 'dir') {
            if (this._cek) {
                throw new TypeError('setContentEncryptionKey cannot be called when using Direct Encryption');
            }
        }
        else if (alg === 'ECDH-ES') {
            if (this._cek) {
                throw new TypeError('setContentEncryptionKey cannot be called when using Direct Key Agreement');
            }
        }
        let cek;
        {
            let parameters;
            ({ cek, encryptedKey, parameters } = await Object(_lib_encrypt_key_management_js__WEBPACK_IMPORTED_MODULE_4__["default"])(alg, enc, key, this._cek, this._keyManagementParameters));
            if (parameters) {
                if (options && unprotected in options) {
                    if (!this._unprotectedHeader) {
                        this.setUnprotectedHeader(parameters);
                    }
                    else {
                        this._unprotectedHeader = { ...this._unprotectedHeader, ...parameters };
                    }
                }
                else {
                    if (!this._protectedHeader) {
                        this.setProtectedHeader(parameters);
                    }
                    else {
                        this._protectedHeader = { ...this._protectedHeader, ...parameters };
                    }
                }
            }
        }
        this._iv || (this._iv = Object(_lib_iv_js__WEBPACK_IMPORTED_MODULE_3__["default"])(enc));
        let additionalData;
        let protectedHeader;
        let aadMember;
        if (this._protectedHeader) {
            protectedHeader = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__["encoder"].encode(Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"])(JSON.stringify(this._protectedHeader)));
        }
        else {
            protectedHeader = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__["encoder"].encode('');
        }
        if (this._aad) {
            aadMember = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"])(this._aad);
            additionalData = Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__["concat"])(protectedHeader, _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__["encoder"].encode('.'), _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__["encoder"].encode(aadMember));
        }
        else {
            additionalData = protectedHeader;
        }
        let ciphertext;
        let tag;
        if (joseHeader.zip === 'DEF') {
            const deflated = await ((options === null || options === void 0 ? void 0 : options.deflateRaw) || _runtime_zlib_js__WEBPACK_IMPORTED_MODULE_2__["deflate"])(this._plaintext);
            ({ ciphertext, tag } = await Object(_runtime_encrypt_js__WEBPACK_IMPORTED_MODULE_1__["default"])(enc, deflated, cek, this._iv, additionalData));
        }
        else {
            ;
            ({ ciphertext, tag } = await Object(_runtime_encrypt_js__WEBPACK_IMPORTED_MODULE_1__["default"])(enc, this._plaintext, cek, this._iv, additionalData));
        }
        const jwe = {
            ciphertext: Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"])(ciphertext),
            iv: Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"])(this._iv),
            tag: Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"])(tag),
        };
        if (encryptedKey) {
            jwe.encrypted_key = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"])(encryptedKey);
        }
        if (aadMember) {
            jwe.aad = aadMember;
        }
        if (this._protectedHeader) {
            jwe.protected = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__["decoder"].decode(protectedHeader);
        }
        if (this._sharedUnprotectedHeader) {
            jwe.unprotected = this._sharedUnprotectedHeader;
        }
        if (this._unprotectedHeader) {
            jwe.header = this._unprotectedHeader;
        }
        return jwe;
    }
}


/***/ }),

/***/ "DsUi":
/*!**********************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/digest.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webcrypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webcrypto.js */ "hqmz");

const digest = async (algorithm, data) => {
    const subtleDigest = `SHA-${algorithm.slice(-3)}`;
    return new Uint8Array(await _webcrypto_js__WEBPACK_IMPORTED_MODULE_0__["default"].subtle.digest(subtleDigest, data));
};
/* harmony default export */ __webpack_exports__["default"] = (digest);


/***/ }),

/***/ "E4JC":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/rabbit.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./enc-base64 */ "ETIr"), __webpack_require__(/*! ./md5 */ "cv67"), __webpack_require__(/*! ./evpkdf */ "K3mO"), __webpack_require__(/*! ./cipher-core */ "OLod"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm
	     */
	    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                K[i] = (((K[i] << 8)  | (K[i] >>> 24)) & 0x00ff00ff) |
	                       (((K[i] << 24) | (K[i] >>> 8))  & 0xff00ff00);
	            }

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
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
	}());


	return CryptoJS.Rabbit;

}));

/***/ }),

/***/ "ELcG":
/*!*********************************************!*\
  !*** ./node_modules/crypto-js/ripemd160.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"));
	}
	else {}
}(this, function (CryptoJS) {

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
	    var C_algo = C.algo;

	    // Constants table
	    var _zl = WordArray.create([
	        0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
	        7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
	        3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
	        1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
	        4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13]);
	    var _zr = WordArray.create([
	        5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
	        6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
	        15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
	        8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
	        12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11]);
	    var _sl = WordArray.create([
	         11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
	        7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
	        11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
	          11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
	        9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ]);
	    var _sr = WordArray.create([
	        8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
	        9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
	        9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
	        15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
	        8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ]);

	    var _hl =  WordArray.create([ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
	    var _hr =  WordArray.create([ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

	    /**
	     * RIPEMD160 hash algorithm.
	     */
	    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
	        _doReset: function () {
	            this._hash  = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
	        },

	        _doProcessBlock: function (M, offset) {

	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                // Swap
	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }
	            // Shortcut
	            var H  = this._hash.words;
	            var hl = _hl.words;
	            var hr = _hr.words;
	            var zl = _zl.words;
	            var zr = _zr.words;
	            var sl = _sl.words;
	            var sr = _sr.words;

	            // Working variables
	            var al, bl, cl, dl, el;
	            var ar, br, cr, dr, er;

	            ar = al = H[0];
	            br = bl = H[1];
	            cr = cl = H[2];
	            dr = dl = H[3];
	            er = el = H[4];
	            // Computation
	            var t;
	            for (var i = 0; i < 80; i += 1) {
	                t = (al +  M[offset+zl[i]])|0;
	                if (i<16){
		            t +=  f1(bl,cl,dl) + hl[0];
	                } else if (i<32) {
		            t +=  f2(bl,cl,dl) + hl[1];
	                } else if (i<48) {
		            t +=  f3(bl,cl,dl) + hl[2];
	                } else if (i<64) {
		            t +=  f4(bl,cl,dl) + hl[3];
	                } else {// if (i<80) {
		            t +=  f5(bl,cl,dl) + hl[4];
	                }
	                t = t|0;
	                t =  rotl(t,sl[i]);
	                t = (t+el)|0;
	                al = el;
	                el = dl;
	                dl = rotl(cl, 10);
	                cl = bl;
	                bl = t;

	                t = (ar + M[offset+zr[i]])|0;
	                if (i<16){
		            t +=  f5(br,cr,dr) + hr[0];
	                } else if (i<32) {
		            t +=  f4(br,cr,dr) + hr[1];
	                } else if (i<48) {
		            t +=  f3(br,cr,dr) + hr[2];
	                } else if (i<64) {
		            t +=  f2(br,cr,dr) + hr[3];
	                } else {// if (i<80) {
		            t +=  f1(br,cr,dr) + hr[4];
	                }
	                t = t|0;
	                t =  rotl(t,sr[i]) ;
	                t = (t+er)|0;
	                ar = er;
	                er = dr;
	                dr = rotl(cr, 10);
	                cr = br;
	                br = t;
	            }
	            // Intermediate hash value
	            t    = (H[1] + cl + dr)|0;
	            H[1] = (H[2] + dl + er)|0;
	            H[2] = (H[3] + el + ar)|0;
	            H[3] = (H[4] + al + br)|0;
	            H[4] = (H[0] + bl + cr)|0;
	            H[0] =  t;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
	            );
	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 5; i++) {
	                // Shortcut
	                var H_i = H[i];

	                // Swap
	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });


	    function f1(x, y, z) {
	        return ((x) ^ (y) ^ (z));

	    }

	    function f2(x, y, z) {
	        return (((x)&(y)) | ((~x)&(z)));
	    }

	    function f3(x, y, z) {
	        return (((x) | (~(y))) ^ (z));
	    }

	    function f4(x, y, z) {
	        return (((x) & (z)) | ((y)&(~(z))));
	    }

	    function f5(x, y, z) {
	        return ((x) ^ ((y) |(~(z))));

	    }

	    function rotl(x,n) {
	        return (x<<n) | (x>>>(32-n));
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
	}(Math));


	return CryptoJS.RIPEMD160;

}));

/***/ }),

/***/ "ETIr":
/*!**********************************************!*\
  !*** ./node_modules/crypto-js/enc-base64.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"));
	}
	else {}
}(this, function (CryptoJS) {

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
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
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
	        parse: function (base64Str) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                    reverseMap = this._reverseMap = [];
	                    for (var j = 0; j < map.length; j++) {
	                        reverseMap[map.charCodeAt(j)] = j;
	                    }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	      var words = [];
	      var nBytes = 0;
	      for (var i = 0; i < base64StrLength; i++) {
	          if (i % 4) {
	              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	              var bitsCombined = bits1 | bits2;
	              words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
	              nBytes++;
	          }
	      }
	      return WordArray.create(words, nBytes);
	    }
	}());


	return CryptoJS.enc.Base64;

}));

/***/ }),

/***/ "ElMP":
/*!*************************************************************!*\
  !*** ./node_modules/jose/dist/browser/lib/validate_crit.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/errors.js */ "StPg");

function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
    if (joseHeader.crit !== undefined && protectedHeader.crit === undefined) {
        throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
    }
    if (!protectedHeader || protectedHeader.crit === undefined) {
        return new Set();
    }
    if (!Array.isArray(protectedHeader.crit) ||
        protectedHeader.crit.length === 0 ||
        protectedHeader.crit.some((input) => typeof input !== 'string' || input.length === 0)) {
        throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
    }
    let recognized;
    if (recognizedOption !== undefined) {
        recognized = new Map([...Object.entries(recognizedOption), ...recognizedDefault.entries()]);
    }
    else {
        recognized = recognizedDefault;
    }
    for (const parameter of protectedHeader.crit) {
        if (!recognized.has(parameter)) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JOSENotSupported"](`Extension Header Parameter "${parameter}" is not recognized`);
        }
        if (joseHeader[parameter] === undefined) {
            throw new Err(`Extension Header Parameter "${parameter}" is missing`);
        }
        else if (recognized.get(parameter) && protectedHeader[parameter] === undefined) {
            throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
        }
    }
    return new Set(protectedHeader.crit);
}
/* harmony default export */ __webpack_exports__["default"] = (validateCrit);


/***/ }),

/***/ "F+F2":
/*!***************************************************!*\
  !*** ./node_modules/crypto-js/lib-typedarrays.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Check if typed arrays are supported
	    if (typeof ArrayBuffer != 'function') {
	        return;
	    }

	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;

	    // Reference original init
	    var superInit = WordArray.init;

	    // Augment WordArray.init to handle typed arrays
	    var subInit = WordArray.init = function (typedArray) {
	        // Convert buffers to uint8
	        if (typedArray instanceof ArrayBuffer) {
	            typedArray = new Uint8Array(typedArray);
	        }

	        // Convert other array views to uint8
	        if (
	            typedArray instanceof Int8Array ||
	            (typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) ||
	            typedArray instanceof Int16Array ||
	            typedArray instanceof Uint16Array ||
	            typedArray instanceof Int32Array ||
	            typedArray instanceof Uint32Array ||
	            typedArray instanceof Float32Array ||
	            typedArray instanceof Float64Array
	        ) {
	            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
	        }

	        // Handle Uint8Array
	        if (typedArray instanceof Uint8Array) {
	            // Shortcut
	            var typedArrayByteLength = typedArray.byteLength;

	            // Extract bytes
	            var words = [];
	            for (var i = 0; i < typedArrayByteLength; i++) {
	                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
	            }

	            // Initialize this word array
	            superInit.call(this, words, typedArrayByteLength);
	        } else {
	            // Else call normal init
	            superInit.apply(this, arguments);
	        }
	    };

	    subInit.prototype = WordArray;
	}());


	return CryptoJS.lib.WordArray;

}));

/***/ }),

/***/ "GRuw":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha224.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./sha256 */ "lPiR"));
	}
	else {}
}(this, function (CryptoJS) {

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
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
	                0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
	            ]);
	        },

	        _doFinalize: function () {
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
	}());


	return CryptoJS.SHA224;

}));

/***/ }),

/***/ "H/EN":
/*!***************************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/is_key_like.js ***!
  \***************************************************************/
/*! exports provided: default, types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return types; });
/* harmony import */ var _webcrypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webcrypto.js */ "hqmz");

/* harmony default export */ __webpack_exports__["default"] = ((key) => {
    return Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_0__["isCryptoKey"])(key);
});
const types = ['CryptoKey'];


/***/ }),

/***/ "HFAi":
/*!****************************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/subtle_rsaes.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return subtleRsaEs; });
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/errors.js */ "StPg");

function subtleRsaEs(alg) {
    switch (alg) {
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
            return 'RSA-OAEP';
        default:
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JOSENotSupported"](`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
}


/***/ }),

/***/ "Ib8C":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/core.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/*globals window, global, require*/

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {

	    var crypto;

	    // Native crypto from window (Browser)
	    if (typeof window !== 'undefined' && window.crypto) {
	        crypto = window.crypto;
	    }

	    // Native crypto in web worker (Browser)
	    if (typeof self !== 'undefined' && self.crypto) {
	        crypto = self.crypto;
	    }

	    // Native crypto from worker
	    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
	        crypto = globalThis.crypto;
	    }

	    // Native (experimental IE 11) crypto from window (Browser)
	    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
	        crypto = window.msCrypto;
	    }

	    // Native crypto from global (NodeJS)
	    if (!crypto && typeof global !== 'undefined' && global.crypto) {
	        crypto = global.crypto;
	    }

	    // Native crypto import via require (NodeJS)
	    if (!crypto && "function" === 'function') {
	        try {
	            crypto = __webpack_require__(/*! crypto */ 4);
	        } catch (err) {}
	    }

	    /*
	     * Cryptographically secure pseudorandom number generator
	     *
	     * As Math.random() is cryptographically not safe to use
	     */
	    var cryptoSecureRandomInt = function () {
	        if (crypto) {
	            // Use getRandomValues method (Browser)
	            if (typeof crypto.getRandomValues === 'function') {
	                try {
	                    return crypto.getRandomValues(new Uint32Array(1))[0];
	                } catch (err) {}
	            }

	            // Use randomBytes method (NodeJS)
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
	    var create = Object.create || (function () {
	        function F() {}

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }());

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
	    var Base = C_lib.Base = (function () {


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
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
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
	            create: function () {
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
	            init: function () {
	            },

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
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
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
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

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
	        init: function (words, sigBytes) {
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
	        toString: function (encoder) {
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
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var j = 0; j < thatSigBytes; j += 4) {
	                    thisWords[(thisSigBytes + j) >>> 2] = thatWords[j >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
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
	        clone: function () {
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
	        random: function (nBytes) {
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
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
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
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
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
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
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
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
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
	        stringify: function (wordArray) {
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
	        parse: function (utf8Str) {
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
	        reset: function () {
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
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
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
	        _process: function (doFlush) {
	            var processedWords;

	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
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
	        clone: function () {
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
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
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
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
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
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

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
	        _createHelper: function (hasher) {
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
	        _createHmacHelper: function (hasher) {
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
	}(Math));


	return CryptoJS;

}));

/***/ }),

/***/ "IeVz":
/*!***********************************************************!*\
  !*** ./node_modules/jose/dist/browser/util/decode_jwt.js ***!
  \***********************************************************/
/*! exports provided: decodeJwt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeJwt", function() { return decodeJwt; });
/* harmony import */ var _base64url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base64url.js */ "JeaE");
/* harmony import */ var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/buffer_utils.js */ "xpfA");
/* harmony import */ var _lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/is_object.js */ "2fVw");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors.js */ "StPg");




function decodeJwt(jwt) {
    if (typeof jwt !== 'string')
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_3__["JWTInvalid"]('JWTs must use Compact JWS serialization, JWT must be a string');
    const { 1: payload, length } = jwt.split('.');
    if (length === 5)
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_3__["JWTInvalid"]('Only JWTs using Compact JWS serialization can be decoded');
    if (length !== 3)
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_3__["JWTInvalid"]('Invalid JWT');
    if (!payload)
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_3__["JWTInvalid"]('JWTs must contain a payload');
    let decoded;
    try {
        decoded = Object(_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(payload);
    }
    catch (_a) {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_3__["JWTInvalid"]('Failed to parse the base64url encoded payload');
    }
    let result;
    try {
        result = JSON.parse(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__["decoder"].decode(decoded));
    }
    catch (_b) {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_3__["JWTInvalid"]('Failed to parse the decoded payload as JSON');
    }
    if (!Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__["default"])(result))
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_3__["JWTInvalid"]('Invalid JWT Claims Set');
    return result;
}


/***/ }),

/***/ "IpBm":
/*!********************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/asn1.js ***!
  \********************************************************/
/*! exports provided: toSPKI, toPKCS8, fromPKCS8, fromSPKI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSPKI", function() { return toSPKI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPKCS8", function() { return toPKCS8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPKCS8", function() { return fromPKCS8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromSPKI", function() { return fromSPKI; });
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env.js */ "+S68");
/* harmony import */ var _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webcrypto.js */ "hqmz");
/* harmony import */ var _lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/invalid_key_input.js */ "wZa+");
/* harmony import */ var _base64url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base64url.js */ "KjJ5");
/* harmony import */ var _lib_format_pem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/format_pem.js */ "aMKJ");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/errors.js */ "StPg");
/* harmony import */ var _is_key_like_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./is_key_like.js */ "H/EN");







const genericExport = async (keyType, keyFormat, key) => {
    if (!Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["isCryptoKey"])(key)) {
        throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_2__["default"])(key, ..._is_key_like_js__WEBPACK_IMPORTED_MODULE_6__["types"]));
    }
    if (!key.extractable) {
        throw new TypeError('CryptoKey is not extractable');
    }
    if (key.type !== keyType) {
        throw new TypeError(`key is not a ${keyType} key`);
    }
    return Object(_lib_format_pem_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_base64url_js__WEBPACK_IMPORTED_MODULE_3__["encodeBase64"])(new Uint8Array(await _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.exportKey(keyFormat, key))), `${keyType.toUpperCase()} KEY`);
};
const toSPKI = (key) => {
    return genericExport('public', 'spki', key);
};
const toPKCS8 = (key) => {
    return genericExport('private', 'pkcs8', key);
};
const findOid = (keyData, oid, from = 0) => {
    if (from === 0) {
        oid.unshift(oid.length);
        oid.unshift(0x06);
    }
    let i = keyData.indexOf(oid[0], from);
    if (i === -1)
        return false;
    const sub = keyData.subarray(i, i + oid.length);
    if (sub.length !== oid.length)
        return false;
    return sub.every((value, index) => value === oid[index]) || findOid(keyData, oid, i + 1);
};
const getNamedCurve = (keyData) => {
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
const genericImport = async (replace, keyFormat, pem, alg, options) => {
    var _a;
    let algorithm;
    let keyUsages;
    const keyData = new Uint8Array(atob(pem.replace(replace, ''))
        .split('')
        .map((c) => c.charCodeAt(0)));
    const isPublic = keyFormat === 'spki';
    switch (alg) {
        case 'PS256':
        case 'PS384':
        case 'PS512':
            algorithm = { name: 'RSA-PSS', hash: `SHA-${alg.slice(-3)}` };
            keyUsages = isPublic ? ['verify'] : ['sign'];
            break;
        case 'RS256':
        case 'RS384':
        case 'RS512':
            algorithm = { name: 'RSASSA-PKCS1-v1_5', hash: `SHA-${alg.slice(-3)}` };
            keyUsages = isPublic ? ['verify'] : ['sign'];
            break;
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
            algorithm = {
                name: 'RSA-OAEP',
                hash: `SHA-${parseInt(alg.slice(-3), 10) || 1}`,
            };
            keyUsages = isPublic ? ['encrypt', 'wrapKey'] : ['decrypt', 'unwrapKey'];
            break;
        case 'ES256':
            algorithm = { name: 'ECDSA', namedCurve: 'P-256' };
            keyUsages = isPublic ? ['verify'] : ['sign'];
            break;
        case 'ES384':
            algorithm = { name: 'ECDSA', namedCurve: 'P-384' };
            keyUsages = isPublic ? ['verify'] : ['sign'];
            break;
        case 'ES512':
            algorithm = { name: 'ECDSA', namedCurve: 'P-521' };
            keyUsages = isPublic ? ['verify'] : ['sign'];
            break;
        case 'ECDH-ES':
        case 'ECDH-ES+A128KW':
        case 'ECDH-ES+A192KW':
        case 'ECDH-ES+A256KW':
            algorithm = { name: 'ECDH', namedCurve: getNamedCurve(keyData) };
            keyUsages = isPublic ? [] : ['deriveBits'];
            break;
        case Object(_env_js__WEBPACK_IMPORTED_MODULE_0__["isCloudflareWorkers"])() && 'EdDSA':
            const namedCurve = getNamedCurve(keyData).toUpperCase();
            algorithm = { name: `NODE-${namedCurve}`, namedCurve: `NODE-${namedCurve}` };
            keyUsages = isPublic ? ['verify'] : ['sign'];
            break;
        default:
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_5__["JOSENotSupported"]('Invalid or unsupported "alg" (Algorithm) value');
    }
    return _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.importKey(keyFormat, keyData, algorithm, (_a = options === null || options === void 0 ? void 0 : options.extractable) !== null && _a !== void 0 ? _a : false, keyUsages);
};
const fromPKCS8 = (pem, alg, options) => {
    return genericImport(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, 'pkcs8', pem, alg, options);
};
const fromSPKI = (pem, alg, options) => {
    return genericImport(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, 'spki', pem, alg, options);
};


/***/ }),

/***/ "JeaE":
/*!**********************************************************!*\
  !*** ./node_modules/jose/dist/browser/util/base64url.js ***!
  \**********************************************************/
/*! exports provided: encode, decode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encode", function() { return encode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return decode; });
/* harmony import */ var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime/base64url.js */ "KjJ5");

const encode = _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"];
const decode = _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"];


/***/ }),

/***/ "JnDH":
/*!*******************************************************************!*\
  !*** ./node_modules/jose/dist/browser/lib/validate_algorithms.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const validateAlgorithms = (option, algorithms) => {
    if (algorithms !== undefined &&
        (!Array.isArray(algorithms) || algorithms.some((s) => typeof s !== 'string'))) {
        throw new TypeError(`"${option}" option must be an array of strings`);
    }
    if (!algorithms) {
        return undefined;
    }
    return new Set(algorithms);
};
/* harmony default export */ __webpack_exports__["default"] = (validateAlgorithms);


/***/ }),

/***/ "K3mO":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/evpkdf.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./sha1 */ "3y9D"), __webpack_require__(/*! ./hmac */ "WYAk"));
	}
	else {}
}(this, function (CryptoJS) {

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
	            keySize: 128/32,
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
	        init: function (cfg) {
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
	        compute: function (password, salt) {
	            var block;

	            // Shortcut
	            var cfg = this.cfg;

	            // Init hasher
	            var hasher = cfg.hasher.create();

	            // Initial values
	            var derivedKey = WordArray.create();

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                if (block) {
	                    hasher.update(block);
	                }
	                block = hasher.update(password).finalize(salt);
	                hasher.reset();

	                // Iterations
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
	}());


	return CryptoJS.EvpKDF;

}));

/***/ }),

/***/ "KJfr":
/*!***************************************************************!*\
  !*** ./node_modules/jose/dist/browser/key/generate_secret.js ***!
  \***************************************************************/
/*! exports provided: generateSecret */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSecret", function() { return generateSecret; });
/* harmony import */ var _runtime_generate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime/generate.js */ "QaxS");

async function generateSecret(alg, options) {
    return Object(_runtime_generate_js__WEBPACK_IMPORTED_MODULE_0__["generateSecret"])(alg, options);
}


/***/ }),

/***/ "KMcw":
/*!********************************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/check_cek_length.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/errors.js */ "StPg");

const checkCekLength = (cek, expected) => {
    if (cek.length << 3 !== expected) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWEInvalid"]('Invalid Content Encryption Key length');
    }
};
/* harmony default export */ __webpack_exports__["default"] = (checkCekLength);


/***/ }),

/***/ "KjJ5":
/*!*************************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/base64url.js ***!
  \*************************************************************/
/*! exports provided: encodeBase64, encode, decodeBase64, decode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeBase64", function() { return encodeBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encode", function() { return encode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeBase64", function() { return decodeBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return decode; });
/* harmony import */ var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/buffer_utils.js */ "xpfA");

const encodeBase64 = (input) => {
    let unencoded = input;
    if (typeof unencoded === 'string') {
        unencoded = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["encoder"].encode(unencoded);
    }
    const CHUNK_SIZE = 0x8000;
    const arr = [];
    for (let i = 0; i < unencoded.length; i += CHUNK_SIZE) {
        arr.push(String.fromCharCode.apply(null, unencoded.subarray(i, i + CHUNK_SIZE)));
    }
    return btoa(arr.join(''));
};
const encode = (input) => {
    return encodeBase64(input).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
};
const decodeBase64 = (encoded) => {
    const binary = atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
};
const decode = (input) => {
    let encoded = input;
    if (encoded instanceof Uint8Array) {
        encoded = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["decoder"].decode(encoded);
    }
    encoded = encoded.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
    try {
        return decodeBase64(encoded);
    }
    catch (_a) {
        throw new TypeError('The input to be decoded is not correctly encoded.');
    }
};


/***/ }),

/***/ "KmYQ":
/*!***************************************************!*\
  !*** ./node_modules/crypto-js/pad-zeropadding.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./cipher-core */ "OLod"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Zero padding strategy.
	 */
	CryptoJS.pad.ZeroPadding = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Pad
	        data.clamp();
	        data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
	    },

	    unpad: function (data) {
	        // Shortcut
	        var dataWords = data.words;

	        // Unpad
	        var i = data.sigBytes - 1;
	        for (var i = data.sigBytes - 1; i >= 0; i--) {
	            if (((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
	                data.sigBytes = i + 1;
	                break;
	            }
	        }
	    }
	};


	return CryptoJS.pad.ZeroPadding;

}));

/***/ }),

/***/ "LuQ+":
/*!**************************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/jwk_to_key.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env.js */ "+S68");
/* harmony import */ var _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webcrypto.js */ "hqmz");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/errors.js */ "StPg");
/* harmony import */ var _base64url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base64url.js */ "KjJ5");




function subtleMapping(jwk) {
    let algorithm;
    let keyUsages;
    switch (jwk.kty) {
        case 'oct': {
            switch (jwk.alg) {
                case 'HS256':
                case 'HS384':
                case 'HS512':
                    algorithm = { name: 'HMAC', hash: `SHA-${jwk.alg.slice(-3)}` };
                    keyUsages = ['sign', 'verify'];
                    break;
                case 'A128CBC-HS256':
                case 'A192CBC-HS384':
                case 'A256CBC-HS512':
                    throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSENotSupported"](`${jwk.alg} keys cannot be imported as CryptoKey instances`);
                case 'A128GCM':
                case 'A192GCM':
                case 'A256GCM':
                case 'A128GCMKW':
                case 'A192GCMKW':
                case 'A256GCMKW':
                    algorithm = { name: 'AES-GCM' };
                    keyUsages = ['encrypt', 'decrypt'];
                    break;
                case 'A128KW':
                case 'A192KW':
                case 'A256KW':
                    algorithm = { name: 'AES-KW' };
                    keyUsages = ['wrapKey', 'unwrapKey'];
                    break;
                case 'PBES2-HS256+A128KW':
                case 'PBES2-HS384+A192KW':
                case 'PBES2-HS512+A256KW':
                    algorithm = { name: 'PBKDF2' };
                    keyUsages = ['deriveBits'];
                    break;
                default:
                    throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSENotSupported"]('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
            }
            break;
        }
        case 'RSA': {
            switch (jwk.alg) {
                case 'PS256':
                case 'PS384':
                case 'PS512':
                    algorithm = { name: 'RSA-PSS', hash: `SHA-${jwk.alg.slice(-3)}` };
                    keyUsages = jwk.d ? ['sign'] : ['verify'];
                    break;
                case 'RS256':
                case 'RS384':
                case 'RS512':
                    algorithm = { name: 'RSASSA-PKCS1-v1_5', hash: `SHA-${jwk.alg.slice(-3)}` };
                    keyUsages = jwk.d ? ['sign'] : ['verify'];
                    break;
                case 'RSA-OAEP':
                case 'RSA-OAEP-256':
                case 'RSA-OAEP-384':
                case 'RSA-OAEP-512':
                    algorithm = {
                        name: 'RSA-OAEP',
                        hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`,
                    };
                    keyUsages = jwk.d ? ['decrypt', 'unwrapKey'] : ['encrypt', 'wrapKey'];
                    break;
                default:
                    throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSENotSupported"]('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
            }
            break;
        }
        case 'EC': {
            switch (jwk.alg) {
                case 'ES256':
                    algorithm = { name: 'ECDSA', namedCurve: 'P-256' };
                    keyUsages = jwk.d ? ['sign'] : ['verify'];
                    break;
                case 'ES384':
                    algorithm = { name: 'ECDSA', namedCurve: 'P-384' };
                    keyUsages = jwk.d ? ['sign'] : ['verify'];
                    break;
                case 'ES512':
                    algorithm = { name: 'ECDSA', namedCurve: 'P-521' };
                    keyUsages = jwk.d ? ['sign'] : ['verify'];
                    break;
                case 'ECDH-ES':
                case 'ECDH-ES+A128KW':
                case 'ECDH-ES+A192KW':
                case 'ECDH-ES+A256KW':
                    algorithm = { name: 'ECDH', namedCurve: jwk.crv };
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
                    algorithm = { name: 'NODE-ED25519', namedCurve: 'NODE-ED25519' };
                    keyUsages = jwk.d ? ['sign'] : ['verify'];
                    break;
                default:
                    throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSENotSupported"]('Invalid or unsupported JWK "crv" (Subtype of Key Pair) Parameter value');
            }
            break;
        default:
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSENotSupported"]('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
    }
    return { algorithm, keyUsages };
}
const parse = async (jwk) => {
    var _a, _b;
    const { algorithm, keyUsages } = subtleMapping(jwk);
    const rest = [
        algorithm,
        (_a = jwk.ext) !== null && _a !== void 0 ? _a : false,
        (_b = jwk.key_ops) !== null && _b !== void 0 ? _b : keyUsages,
    ];
    if (algorithm.name === 'PBKDF2') {
        return _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.importKey('raw', Object(_base64url_js__WEBPACK_IMPORTED_MODULE_3__["decode"])(jwk.k), ...rest);
    }
    const keyData = { ...jwk };
    delete keyData.alg;
    return _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.importKey('jwk', keyData, ...rest);
};
/* harmony default export */ __webpack_exports__["default"] = (parse);


/***/ }),

/***/ "MlIO":
/*!********************************************!*\
  !*** ./node_modules/crypto-js/x64-core.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"));
	}
	else {}
}(this, function (CryptoJS) {

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
	        init: function (high, low) {
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
	        init: function (words, sigBytes) {
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
	        toX32: function () {
	            // Shortcuts
	            var x64Words = this.words;
	            var x64WordsLength = x64Words.length;

	            // Convert
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
	        clone: function () {
	            var clone = Base.clone.call(this);

	            // Clone "words" array
	            var words = clone.words = this.words.slice(0);

	            // Clone each X64Word object
	            var wordsLength = words.length;
	            for (var i = 0; i < wordsLength; i++) {
	                words[i] = words[i].clone();
	            }

	            return clone;
	        }
	    });
	}());


	return CryptoJS;

}));

/***/ }),

/***/ "NFKh":
/*!*****************************************!*\
  !*** ./node_modules/crypto-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./x64-core */ "MlIO"), __webpack_require__(/*! ./lib-typedarrays */ "F+F2"), __webpack_require__(/*! ./enc-utf16 */ "qM6L"), __webpack_require__(/*! ./enc-base64 */ "ETIr"), __webpack_require__(/*! ./enc-base64url */ "wbyO"), __webpack_require__(/*! ./md5 */ "cv67"), __webpack_require__(/*! ./sha1 */ "3y9D"), __webpack_require__(/*! ./sha256 */ "lPiR"), __webpack_require__(/*! ./sha224 */ "GRuw"), __webpack_require__(/*! ./sha512 */ "1uat"), __webpack_require__(/*! ./sha384 */ "uGsb"), __webpack_require__(/*! ./sha3 */ "5hvy"), __webpack_require__(/*! ./ripemd160 */ "ELcG"), __webpack_require__(/*! ./hmac */ "WYAk"), __webpack_require__(/*! ./pbkdf2 */ "e7zE"), __webpack_require__(/*! ./evpkdf */ "K3mO"), __webpack_require__(/*! ./cipher-core */ "OLod"), __webpack_require__(/*! ./mode-cfb */ "ALsQ"), __webpack_require__(/*! ./mode-ctr */ "9OqN"), __webpack_require__(/*! ./mode-ctr-gladman */ "qu8F"), __webpack_require__(/*! ./mode-ofb */ "S6kV"), __webpack_require__(/*! ./mode-ecb */ "gb/T"), __webpack_require__(/*! ./pad-ansix923 */ "qBft"), __webpack_require__(/*! ./pad-iso10126 */ "oRuE"), __webpack_require__(/*! ./pad-iso97971 */ "jO9C"), __webpack_require__(/*! ./pad-zeropadding */ "KmYQ"), __webpack_require__(/*! ./pad-nopadding */ "uGxW"), __webpack_require__(/*! ./format-hex */ "bQjk"), __webpack_require__(/*! ./aes */ "wZgz"), __webpack_require__(/*! ./tripledes */ "pA7S"), __webpack_require__(/*! ./rc4 */ "w7YG"), __webpack_require__(/*! ./rabbit */ "E4JC"), __webpack_require__(/*! ./rabbit-legacy */ "PVpz"));
	}
	else {}
}(this, function (CryptoJS) {

	return CryptoJS;

}));

/***/ }),

/***/ "NP3A":
/*!**********************************************************************!*\
  !*** ./node_modules/jose/dist/browser/lib/encrypt_key_management.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _runtime_aeskw_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime/aeskw.js */ "Qm1j");
/* harmony import */ var _runtime_ecdhes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../runtime/ecdhes.js */ "qIkZ");
/* harmony import */ var _runtime_pbes2kw_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime/pbes2kw.js */ "Oe4d");
/* harmony import */ var _runtime_rsaes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../runtime/rsaes.js */ "WR06");
/* harmony import */ var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../runtime/base64url.js */ "KjJ5");
/* harmony import */ var _lib_cek_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/cek.js */ "qW6o");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/errors.js */ "StPg");
/* harmony import */ var _key_export_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../key/export.js */ "k303");
/* harmony import */ var _check_key_type_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./check_key_type.js */ "ceW5");
/* harmony import */ var _aesgcmkw_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aesgcmkw.js */ "aAVB");










async function encryptKeyManagement(alg, enc, key, providedCek, providedParameters = {}) {
    let encryptedKey;
    let parameters;
    let cek;
    Object(_check_key_type_js__WEBPACK_IMPORTED_MODULE_8__["default"])(alg, key, 'encrypt');
    switch (alg) {
        case 'dir': {
            cek = key;
            break;
        }
        case 'ECDH-ES':
        case 'ECDH-ES+A128KW':
        case 'ECDH-ES+A192KW':
        case 'ECDH-ES+A256KW': {
            if (!_runtime_ecdhes_js__WEBPACK_IMPORTED_MODULE_1__["ecdhAllowed"](key)) {
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_6__["JOSENotSupported"]('ECDH with the provided key is not allowed or not supported by your javascript runtime');
            }
            const { apu, apv } = providedParameters;
            let { epk: ephemeralKey } = providedParameters;
            ephemeralKey || (ephemeralKey = (await _runtime_ecdhes_js__WEBPACK_IMPORTED_MODULE_1__["generateEpk"](key)).privateKey);
            const { x, y, crv, kty } = await Object(_key_export_js__WEBPACK_IMPORTED_MODULE_7__["exportJWK"])(ephemeralKey);
            const sharedSecret = await _runtime_ecdhes_js__WEBPACK_IMPORTED_MODULE_1__["deriveKey"](key, ephemeralKey, alg === 'ECDH-ES' ? enc : alg, alg === 'ECDH-ES' ? Object(_lib_cek_js__WEBPACK_IMPORTED_MODULE_5__["bitLength"])(enc) : parseInt(alg.slice(-5, -2), 10), apu, apv);
            parameters = { epk: { x, crv, kty } };
            if (kty === 'EC')
                parameters.epk.y = y;
            if (apu)
                parameters.apu = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_4__["encode"])(apu);
            if (apv)
                parameters.apv = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_4__["encode"])(apv);
            if (alg === 'ECDH-ES') {
                cek = sharedSecret;
                break;
            }
            cek = providedCek || Object(_lib_cek_js__WEBPACK_IMPORTED_MODULE_5__["default"])(enc);
            const kwAlg = alg.slice(-6);
            encryptedKey = await Object(_runtime_aeskw_js__WEBPACK_IMPORTED_MODULE_0__["wrap"])(kwAlg, sharedSecret, cek);
            break;
        }
        case 'RSA1_5':
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512': {
            cek = providedCek || Object(_lib_cek_js__WEBPACK_IMPORTED_MODULE_5__["default"])(enc);
            encryptedKey = await Object(_runtime_rsaes_js__WEBPACK_IMPORTED_MODULE_3__["encrypt"])(alg, key, cek);
            break;
        }
        case 'PBES2-HS256+A128KW':
        case 'PBES2-HS384+A192KW':
        case 'PBES2-HS512+A256KW': {
            cek = providedCek || Object(_lib_cek_js__WEBPACK_IMPORTED_MODULE_5__["default"])(enc);
            const { p2c, p2s } = providedParameters;
            ({ encryptedKey, ...parameters } = await Object(_runtime_pbes2kw_js__WEBPACK_IMPORTED_MODULE_2__["encrypt"])(alg, key, cek, p2c, p2s));
            break;
        }
        case 'A128KW':
        case 'A192KW':
        case 'A256KW': {
            cek = providedCek || Object(_lib_cek_js__WEBPACK_IMPORTED_MODULE_5__["default"])(enc);
            encryptedKey = await Object(_runtime_aeskw_js__WEBPACK_IMPORTED_MODULE_0__["wrap"])(alg, key, cek);
            break;
        }
        case 'A128GCMKW':
        case 'A192GCMKW':
        case 'A256GCMKW': {
            cek = providedCek || Object(_lib_cek_js__WEBPACK_IMPORTED_MODULE_5__["default"])(enc);
            const { iv } = providedParameters;
            ({ encryptedKey, ...parameters } = await Object(_aesgcmkw_js__WEBPACK_IMPORTED_MODULE_9__["wrap"])(alg, key, cek, iv));
            break;
        }
        default: {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_6__["JOSENotSupported"]('Invalid or unsupported "alg" (JWE Algorithm) header value');
        }
    }
    return { cek, encryptedKey, parameters };
}
/* harmony default export */ __webpack_exports__["default"] = (encryptKeyManagement);


/***/ }),

/***/ "NSDb":
/*!************************************************************!*\
  !*** ./node_modules/jose/dist/browser/jws/general/sign.js ***!
  \************************************************************/
/*! exports provided: GeneralSign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSign", function() { return GeneralSign; });
/* harmony import */ var _flattened_sign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../flattened/sign.js */ "4xNZ");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/errors.js */ "StPg");


class IndividualSignature {
    constructor(sig, key, options) {
        this.parent = sig;
        this.key = key;
        this.options = options;
    }
    setProtectedHeader(protectedHeader) {
        if (this.protectedHeader) {
            throw new TypeError('setProtectedHeader can only be called once');
        }
        this.protectedHeader = protectedHeader;
        return this;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this.unprotectedHeader) {
            throw new TypeError('setUnprotectedHeader can only be called once');
        }
        this.unprotectedHeader = unprotectedHeader;
        return this;
    }
    addSignature(...args) {
        return this.parent.addSignature(...args);
    }
    sign(...args) {
        return this.parent.sign(...args);
    }
    done() {
        return this.parent;
    }
}
class GeneralSign {
    constructor(payload) {
        this._signatures = [];
        this._payload = payload;
    }
    addSignature(key, options) {
        const signature = new IndividualSignature(this, key, options);
        this._signatures.push(signature);
        return signature;
    }
    async sign() {
        if (!this._signatures.length) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWSInvalid"]('at least one signature must be added');
        }
        const jws = {
            signatures: [],
            payload: '',
        };
        for (let i = 0; i < this._signatures.length; i++) {
            const signature = this._signatures[i];
            const flattened = new _flattened_sign_js__WEBPACK_IMPORTED_MODULE_0__["FlattenedSign"](this._payload);
            flattened.setProtectedHeader(signature.protectedHeader);
            flattened.setUnprotectedHeader(signature.unprotectedHeader);
            const { payload, ...rest } = await flattened.sign(signature.key, signature.options);
            if (i === 0) {
                jws.payload = payload;
            }
            else if (jws.payload !== payload) {
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWSInvalid"]('inconsistent use of JWS Unencoded Payload Option (RFC7797)');
            }
            jws.signatures.push(rest);
        }
        return jws;
    }
}


/***/ }),

/***/ "Ninj":
/*!***********************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/encrypt.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/buffer_utils.js */ "xpfA");
/* harmony import */ var _lib_check_iv_length_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/check_iv_length.js */ "g1Po");
/* harmony import */ var _check_cek_length_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check_cek_length.js */ "KMcw");
/* harmony import */ var _webcrypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webcrypto.js */ "hqmz");
/* harmony import */ var _lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/crypto_key.js */ "D3C9");
/* harmony import */ var _lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/invalid_key_input.js */ "wZa+");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/errors.js */ "StPg");
/* harmony import */ var _is_key_like_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./is_key_like.js */ "H/EN");








async function cbcEncrypt(enc, plaintext, cek, iv, aad) {
    if (!(cek instanceof Uint8Array)) {
        throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_5__["default"])(cek, 'Uint8Array'));
    }
    const keySize = parseInt(enc.slice(1, 4), 10);
    const encKey = await _webcrypto_js__WEBPACK_IMPORTED_MODULE_3__["default"].subtle.importKey('raw', cek.subarray(keySize >> 3), 'AES-CBC', false, ['encrypt']);
    const macKey = await _webcrypto_js__WEBPACK_IMPORTED_MODULE_3__["default"].subtle.importKey('raw', cek.subarray(0, keySize >> 3), {
        hash: `SHA-${keySize << 1}`,
        name: 'HMAC',
    }, false, ['sign']);
    const ciphertext = new Uint8Array(await _webcrypto_js__WEBPACK_IMPORTED_MODULE_3__["default"].subtle.encrypt({
        iv,
        name: 'AES-CBC',
    }, encKey, plaintext));
    const macData = Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["concat"])(aad, iv, ciphertext, Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["uint64be"])(aad.length << 3));
    const tag = new Uint8Array((await _webcrypto_js__WEBPACK_IMPORTED_MODULE_3__["default"].subtle.sign('HMAC', macKey, macData)).slice(0, keySize >> 3));
    return { ciphertext, tag };
}
async function gcmEncrypt(enc, plaintext, cek, iv, aad) {
    let encKey;
    if (cek instanceof Uint8Array) {
        encKey = await _webcrypto_js__WEBPACK_IMPORTED_MODULE_3__["default"].subtle.importKey('raw', cek, 'AES-GCM', false, ['encrypt']);
    }
    else {
        Object(_lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_4__["checkEncCryptoKey"])(cek, enc, 'encrypt');
        encKey = cek;
    }
    const encrypted = new Uint8Array(await _webcrypto_js__WEBPACK_IMPORTED_MODULE_3__["default"].subtle.encrypt({
        additionalData: aad,
        iv,
        name: 'AES-GCM',
        tagLength: 128,
    }, encKey, plaintext));
    const tag = encrypted.slice(-16);
    const ciphertext = encrypted.slice(0, -16);
    return { ciphertext, tag };
}
const encrypt = async (enc, plaintext, cek, iv, aad) => {
    if (!Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_3__["isCryptoKey"])(cek) && !(cek instanceof Uint8Array)) {
        throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_5__["default"])(cek, ..._is_key_like_js__WEBPACK_IMPORTED_MODULE_7__["types"], 'Uint8Array'));
    }
    Object(_lib_check_iv_length_js__WEBPACK_IMPORTED_MODULE_1__["default"])(enc, iv);
    switch (enc) {
        case 'A128CBC-HS256':
        case 'A192CBC-HS384':
        case 'A256CBC-HS512':
            if (cek instanceof Uint8Array)
                Object(_check_cek_length_js__WEBPACK_IMPORTED_MODULE_2__["default"])(cek, parseInt(enc.slice(-3), 10));
            return cbcEncrypt(enc, plaintext, cek, iv, aad);
        case 'A128GCM':
        case 'A192GCM':
        case 'A256GCM':
            if (cek instanceof Uint8Array)
                Object(_check_cek_length_js__WEBPACK_IMPORTED_MODULE_2__["default"])(cek, parseInt(enc.slice(1, 4), 10));
            return gcmEncrypt(enc, plaintext, cek, iv, aad);
        default:
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_6__["JOSENotSupported"]('Unsupported JWE Content Encryption Algorithm');
    }
};
/* harmony default export */ __webpack_exports__["default"] = (encrypt);


/***/ }),

/***/ "OLod":
/*!***********************************************!*\
  !*** ./node_modules/crypto-js/cipher-core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./evpkdf */ "K3mO"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Cipher core components.
	 */
	CryptoJS.lib.Cipher || (function (undefined) {
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
	        createEncryptor: function (key, cfg) {
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
	        createDecryptor: function (key, cfg) {
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
	        init: function (xformMode, key, cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Store transform mode and key
	            this._xformMode = xformMode;
	            this._key = key;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this cipher to its initial state.
	         *
	         * @example
	         *
	         *     cipher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-cipher logic
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
	        process: function (dataUpdate) {
	            // Append
	            this._append(dataUpdate);

	            // Process available blocks
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
	        finalize: function (dataUpdate) {
	            // Final data update
	            if (dataUpdate) {
	                this._append(dataUpdate);
	            }

	            // Perform concrete-cipher logic
	            var finalProcessedData = this._doFinalize();

	            return finalProcessedData;
	        },

	        keySize: 128/32,

	        ivSize: 128/32,

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
	        _createHelper: (function () {
	            function selectCipherStrategy(key) {
	                if (typeof key == 'string') {
	                    return PasswordBasedCipher;
	                } else {
	                    return SerializableCipher;
	                }
	            }

	            return function (cipher) {
	                return {
	                    encrypt: function (message, key, cfg) {
	                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
	                    },

	                    decrypt: function (ciphertext, key, cfg) {
	                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
	                    }
	                };
	            };
	        }())
	    });

	    /**
	     * Abstract base stream cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
	     */
	    var StreamCipher = C_lib.StreamCipher = Cipher.extend({
	        _doFinalize: function () {
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
	        createEncryptor: function (cipher, iv) {
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
	        createDecryptor: function (cipher, iv) {
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
	        init: function (cipher, iv) {
	            this._cipher = cipher;
	            this._iv = iv;
	        }
	    });

	    /**
	     * Cipher Block Chaining mode.
	     */
	    var CBC = C_mode.CBC = (function () {
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
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // XOR and encrypt
	                xorBlock.call(this, words, offset, blockSize);
	                cipher.encryptBlock(words, offset);

	                // Remember this block to use with next block
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
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // Remember this block to use with next block
	                var thisBlock = words.slice(offset, offset + blockSize);

	                // Decrypt and XOR
	                cipher.decryptBlock(words, offset);
	                xorBlock.call(this, words, offset, blockSize);

	                // This block becomes the previous block
	                this._prevBlock = thisBlock;
	            }
	        });

	        function xorBlock(words, offset, blockSize) {
	            var block;

	            // Shortcut
	            var iv = this._iv;

	            // Choose mixing block
	            if (iv) {
	                block = iv;

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            } else {
	                block = this._prevBlock;
	            }

	            // XOR blocks
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= block[i];
	            }
	        }

	        return CBC;
	    }());

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
	        pad: function (data, blockSize) {
	            // Shortcut
	            var blockSizeBytes = blockSize * 4;

	            // Count padding bytes
	            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	            // Create padding word
	            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

	            // Create padding
	            var paddingWords = [];
	            for (var i = 0; i < nPaddingBytes; i += 4) {
	                paddingWords.push(paddingWord);
	            }
	            var padding = WordArray.create(paddingWords, nPaddingBytes);

	            // Add padding
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
	        unpad: function (data) {
	            // Get number of padding bytes from last byte
	            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	            // Remove padding
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

	        reset: function () {
	            var modeCreator;

	            // Reset cipher
	            Cipher.reset.call(this);

	            // Shortcuts
	            var cfg = this.cfg;
	            var iv = cfg.iv;
	            var mode = cfg.mode;

	            // Reset block mode
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                modeCreator = mode.createEncryptor;
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                modeCreator = mode.createDecryptor;
	                // Keep at least one block in the buffer for unpadding
	                this._minBufferSize = 1;
	            }

	            if (this._mode && this._mode.__creator == modeCreator) {
	                this._mode.init(this, iv && iv.words);
	            } else {
	                this._mode = modeCreator.call(mode, this, iv && iv.words);
	                this._mode.__creator = modeCreator;
	            }
	        },

	        _doProcessBlock: function (words, offset) {
	            this._mode.processBlock(words, offset);
	        },

	        _doFinalize: function () {
	            var finalProcessedBlocks;

	            // Shortcut
	            var padding = this.cfg.padding;

	            // Finalize
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                // Pad data
	                padding.pad(this._data, this.blockSize);

	                // Process final blocks
	                finalProcessedBlocks = this._process(!!'flush');
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                // Process final blocks
	                finalProcessedBlocks = this._process(!!'flush');

	                // Unpad data
	                padding.unpad(finalProcessedBlocks);
	            }

	            return finalProcessedBlocks;
	        },

	        blockSize: 128/32
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
	        init: function (cipherParams) {
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
	        toString: function (formatter) {
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
	        stringify: function (cipherParams) {
	            var wordArray;

	            // Shortcuts
	            var ciphertext = cipherParams.ciphertext;
	            var salt = cipherParams.salt;

	            // Format
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
	        parse: function (openSSLStr) {
	            var salt;

	            // Parse base64
	            var ciphertext = Base64.parse(openSSLStr);

	            // Shortcut
	            var ciphertextWords = ciphertext.words;

	            // Test for salt
	            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
	                // Extract salt
	                salt = WordArray.create(ciphertextWords.slice(2, 4));

	                // Remove salt from ciphertext
	                ciphertextWords.splice(0, 4);
	                ciphertext.sigBytes -= 16;
	            }

	            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
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
	        encrypt: function (cipher, message, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Encrypt
	            var encryptor = cipher.createEncryptor(key, cfg);
	            var ciphertext = encryptor.finalize(message);

	            // Shortcut
	            var cipherCfg = encryptor.cfg;

	            // Create and return serializable cipher params
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
	        decrypt: function (cipher, ciphertext, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Decrypt
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
	        _parse: function (ciphertext, format) {
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
	        execute: function (password, keySize, ivSize, salt) {
	            // Generate random salt
	            if (!salt) {
	                salt = WordArray.random(64/8);
	            }

	            // Derive key and IV
	            var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);

	            // Separate key and IV
	            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
	            key.sigBytes = keySize * 4;

	            // Return params
	            return CipherParams.create({ key: key, iv: iv, salt: salt });
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
	        encrypt: function (cipher, message, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Encrypt
	            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

	            // Mix in derived params
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
	        decrypt: function (cipher, ciphertext, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Decrypt
	            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

	            return plaintext;
	        }
	    });
	}());


}));

/***/ }),

/***/ "Oe4d":
/*!***********************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/pbes2kw.js ***!
  \***********************************************************/
/*! exports provided: encrypt, decrypt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encrypt", function() { return encrypt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrypt", function() { return decrypt; });
/* harmony import */ var _random_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random.js */ "kIlW");
/* harmony import */ var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/buffer_utils.js */ "xpfA");
/* harmony import */ var _base64url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base64url.js */ "KjJ5");
/* harmony import */ var _aeskw_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aeskw.js */ "Qm1j");
/* harmony import */ var _lib_check_p2s_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/check_p2s.js */ "4+qi");
/* harmony import */ var _webcrypto_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webcrypto.js */ "hqmz");
/* harmony import */ var _lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/crypto_key.js */ "D3C9");
/* harmony import */ var _lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/invalid_key_input.js */ "wZa+");
/* harmony import */ var _is_key_like_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./is_key_like.js */ "H/EN");









function getCryptoKey(key, alg) {
    if (key instanceof Uint8Array) {
        return _webcrypto_js__WEBPACK_IMPORTED_MODULE_5__["default"].subtle.importKey('raw', key, 'PBKDF2', false, ['deriveBits']);
    }
    if (Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_5__["isCryptoKey"])(key)) {
        Object(_lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_6__["checkEncCryptoKey"])(key, alg, 'deriveBits', 'deriveKey');
        return key;
    }
    throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_7__["default"])(key, ..._is_key_like_js__WEBPACK_IMPORTED_MODULE_8__["types"], 'Uint8Array'));
}
async function deriveKey(p2s, alg, p2c, key) {
    Object(_lib_check_p2s_js__WEBPACK_IMPORTED_MODULE_4__["default"])(p2s);
    const salt = Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__["p2s"])(alg, p2s);
    const keylen = parseInt(alg.slice(13, 16), 10);
    const subtleAlg = {
        hash: `SHA-${alg.slice(8, 11)}`,
        iterations: p2c,
        name: 'PBKDF2',
        salt,
    };
    const wrapAlg = {
        length: keylen,
        name: 'AES-KW',
    };
    const cryptoKey = await getCryptoKey(key, alg);
    if (cryptoKey.usages.includes('deriveBits')) {
        return new Uint8Array(await _webcrypto_js__WEBPACK_IMPORTED_MODULE_5__["default"].subtle.deriveBits(subtleAlg, cryptoKey, keylen));
    }
    if (cryptoKey.usages.includes('deriveKey')) {
        return _webcrypto_js__WEBPACK_IMPORTED_MODULE_5__["default"].subtle.deriveKey(subtleAlg, cryptoKey, wrapAlg, false, ['wrapKey', 'unwrapKey']);
    }
    throw new TypeError('PBKDF2 key "usages" must include "deriveBits" or "deriveKey"');
}
const encrypt = async (alg, key, cek, p2c = 2048, p2s = Object(_random_js__WEBPACK_IMPORTED_MODULE_0__["default"])(new Uint8Array(16))) => {
    const derived = await deriveKey(p2s, alg, p2c, key);
    const encryptedKey = await Object(_aeskw_js__WEBPACK_IMPORTED_MODULE_3__["wrap"])(alg.slice(-6), derived, cek);
    return { encryptedKey, p2c, p2s: Object(_base64url_js__WEBPACK_IMPORTED_MODULE_2__["encode"])(p2s) };
};
const decrypt = async (alg, key, encryptedKey, p2c, p2s) => {
    const derived = await deriveKey(p2s, alg, p2c, key);
    return Object(_aeskw_js__WEBPACK_IMPORTED_MODULE_3__["unwrap"])(alg.slice(-6), derived, encryptedKey);
};


/***/ }),

/***/ "OvXJ":
/*!*******************************************************!*\
  !*** ./node_modules/jose/dist/browser/jwks/remote.js ***!
  \*******************************************************/
/*! exports provided: createRemoteJWKSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRemoteJWKSet", function() { return createRemoteJWKSet; });
/* harmony import */ var _runtime_fetch_jwks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime/fetch_jwks.js */ "1qei");
/* harmony import */ var _runtime_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../runtime/env.js */ "+S68");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/errors.js */ "StPg");
/* harmony import */ var _local_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local.js */ "4TUK");




class RemoteJWKSet extends _local_js__WEBPACK_IMPORTED_MODULE_3__["LocalJWKSet"] {
    constructor(url, options) {
        super({ keys: [] });
        this._jwks = undefined;
        if (!(url instanceof URL)) {
            throw new TypeError('url must be an instance of URL');
        }
        this._url = new URL(url.href);
        this._options = { agent: options === null || options === void 0 ? void 0 : options.agent, headers: options === null || options === void 0 ? void 0 : options.headers };
        this._timeoutDuration =
            typeof (options === null || options === void 0 ? void 0 : options.timeoutDuration) === 'number' ? options === null || options === void 0 ? void 0 : options.timeoutDuration : 5000;
        this._cooldownDuration =
            typeof (options === null || options === void 0 ? void 0 : options.cooldownDuration) === 'number' ? options === null || options === void 0 ? void 0 : options.cooldownDuration : 30000;
        this._cacheMaxAge = typeof (options === null || options === void 0 ? void 0 : options.cacheMaxAge) === 'number' ? options === null || options === void 0 ? void 0 : options.cacheMaxAge : 600000;
    }
    coolingDown() {
        return typeof this._jwksTimestamp === 'number'
            ? Date.now() < this._jwksTimestamp + this._cooldownDuration
            : false;
    }
    fresh() {
        return typeof this._jwksTimestamp === 'number'
            ? Date.now() < this._jwksTimestamp + this._cacheMaxAge
            : false;
    }
    async getKey(protectedHeader, token) {
        if (!this._jwks || !this.fresh()) {
            await this.reload();
        }
        try {
            return await super.getKey(protectedHeader, token);
        }
        catch (err) {
            if (err instanceof _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWKSNoMatchingKey"]) {
                if (this.coolingDown() === false) {
                    await this.reload();
                    return super.getKey(protectedHeader, token);
                }
            }
            throw err;
        }
    }
    async reload() {
        if (this._pendingFetch && Object(_runtime_env_js__WEBPACK_IMPORTED_MODULE_1__["isCloudflareWorkers"])()) {
            return new Promise((resolve) => {
                const isDone = () => {
                    if (this._pendingFetch === undefined) {
                        resolve();
                    }
                    else {
                        setTimeout(isDone, 5);
                    }
                };
                isDone();
            });
        }
        if (!this._pendingFetch) {
            this._pendingFetch = Object(_runtime_fetch_jwks_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this._url, this._timeoutDuration, this._options)
                .then((json) => {
                if (!Object(_local_js__WEBPACK_IMPORTED_MODULE_3__["isJWKSLike"])(json)) {
                    throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWKSInvalid"]('JSON Web Key Set malformed');
                }
                this._jwks = { keys: json.keys };
                this._jwksTimestamp = Date.now();
                this._pendingFetch = undefined;
            })
                .catch((err) => {
                this._pendingFetch = undefined;
                throw err;
            });
        }
        await this._pendingFetch;
    }
}
function createRemoteJWKSet(url, options) {
    return RemoteJWKSet.prototype.getKey.bind(new RemoteJWKSet(url, options));
}


/***/ }),

/***/ "PVpz":
/*!*************************************************!*\
  !*** ./node_modules/crypto-js/rabbit-legacy.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./enc-base64 */ "ETIr"), __webpack_require__(/*! ./md5 */ "cv67"), __webpack_require__(/*! ./evpkdf */ "K3mO"), __webpack_require__(/*! ./cipher-core */ "OLod"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm.
	     *
	     * This is a legacy version that neglected to convert the key to little-endian.
	     * This error doesn't affect the cipher's security,
	     * but it does affect its compatibility with other implementations.
	     */
	    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
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
	}());


	return CryptoJS.RabbitLegacy;

}));

/***/ }),

/***/ "QaxS":
/*!************************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/generate.js ***!
  \************************************************************/
/*! exports provided: generateSecret, generateKeyPair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSecret", function() { return generateSecret; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateKeyPair", function() { return generateKeyPair; });
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env.js */ "+S68");
/* harmony import */ var _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webcrypto.js */ "hqmz");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/errors.js */ "StPg");
/* harmony import */ var _random_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./random.js */ "kIlW");




async function generateSecret(alg, options) {
    var _a;
    let length;
    let algorithm;
    let keyUsages;
    switch (alg) {
        case 'HS256':
        case 'HS384':
        case 'HS512':
            length = parseInt(alg.slice(-3), 10);
            algorithm = { name: 'HMAC', hash: `SHA-${length}`, length };
            keyUsages = ['sign', 'verify'];
            break;
        case 'A128CBC-HS256':
        case 'A192CBC-HS384':
        case 'A256CBC-HS512':
            length = parseInt(alg.slice(-3), 10);
            return Object(_random_js__WEBPACK_IMPORTED_MODULE_3__["default"])(new Uint8Array(length >> 3));
        case 'A128KW':
        case 'A192KW':
        case 'A256KW':
            length = parseInt(alg.slice(1, 4), 10);
            algorithm = { name: 'AES-KW', length };
            keyUsages = ['wrapKey', 'unwrapKey'];
            break;
        case 'A128GCMKW':
        case 'A192GCMKW':
        case 'A256GCMKW':
        case 'A128GCM':
        case 'A192GCM':
        case 'A256GCM':
            length = parseInt(alg.slice(1, 4), 10);
            algorithm = { name: 'AES-GCM', length };
            keyUsages = ['encrypt', 'decrypt'];
            break;
        default:
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSENotSupported"]('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
    }
    return _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.generateKey(algorithm, (_a = options === null || options === void 0 ? void 0 : options.extractable) !== null && _a !== void 0 ? _a : false, keyUsages);
}
function getModulusLengthOption(options) {
    var _a;
    const modulusLength = (_a = options === null || options === void 0 ? void 0 : options.modulusLength) !== null && _a !== void 0 ? _a : 2048;
    if (typeof modulusLength !== 'number' || modulusLength < 2048) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSENotSupported"]('Invalid or unsupported modulusLength option provided, 2048 bits or larger keys must be used');
    }
    return modulusLength;
}
async function generateKeyPair(alg, options) {
    var _a, _b;
    let algorithm;
    let keyUsages;
    switch (alg) {
        case 'PS256':
        case 'PS384':
        case 'PS512':
            algorithm = {
                name: 'RSA-PSS',
                hash: `SHA-${alg.slice(-3)}`,
                publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
                modulusLength: getModulusLengthOption(options),
            };
            keyUsages = ['sign', 'verify'];
            break;
        case 'RS256':
        case 'RS384':
        case 'RS512':
            algorithm = {
                name: 'RSASSA-PKCS1-v1_5',
                hash: `SHA-${alg.slice(-3)}`,
                publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
                modulusLength: getModulusLengthOption(options),
            };
            keyUsages = ['sign', 'verify'];
            break;
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
            algorithm = {
                name: 'RSA-OAEP',
                hash: `SHA-${parseInt(alg.slice(-3), 10) || 1}`,
                publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
                modulusLength: getModulusLengthOption(options),
            };
            keyUsages = ['decrypt', 'unwrapKey', 'encrypt', 'wrapKey'];
            break;
        case 'ES256':
            algorithm = { name: 'ECDSA', namedCurve: 'P-256' };
            keyUsages = ['sign', 'verify'];
            break;
        case 'ES384':
            algorithm = { name: 'ECDSA', namedCurve: 'P-384' };
            keyUsages = ['sign', 'verify'];
            break;
        case 'ES512':
            algorithm = { name: 'ECDSA', namedCurve: 'P-521' };
            keyUsages = ['sign', 'verify'];
            break;
        case Object(_env_js__WEBPACK_IMPORTED_MODULE_0__["isCloudflareWorkers"])() && 'EdDSA':
            switch (options === null || options === void 0 ? void 0 : options.crv) {
                case undefined:
                case 'Ed25519':
                    algorithm = { name: 'NODE-ED25519', namedCurve: 'NODE-ED25519' };
                    keyUsages = ['sign', 'verify'];
                    break;
                default:
                    throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSENotSupported"]('Invalid or unsupported crv option provided');
            }
            break;
        case 'ECDH-ES':
        case 'ECDH-ES+A128KW':
        case 'ECDH-ES+A192KW':
        case 'ECDH-ES+A256KW':
            algorithm = { name: 'ECDH', namedCurve: (_a = options === null || options === void 0 ? void 0 : options.crv) !== null && _a !== void 0 ? _a : 'P-256' };
            keyUsages = ['deriveKey', 'deriveBits'];
            break;
        default:
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSENotSupported"]('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
    }
    return (_webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.generateKey(algorithm, (_b = options === null || options === void 0 ? void 0 : options.extractable) !== null && _b !== void 0 ? _b : false, keyUsages));
}


/***/ }),

/***/ "Qm1j":
/*!*********************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/aeskw.js ***!
  \*********************************************************/
/*! exports provided: wrap, unwrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwrap", function() { return unwrap; });
/* harmony import */ var _bogus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bogus.js */ "tj0O");
/* harmony import */ var _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webcrypto.js */ "hqmz");
/* harmony import */ var _lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/crypto_key.js */ "D3C9");
/* harmony import */ var _lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/invalid_key_input.js */ "wZa+");
/* harmony import */ var _is_key_like_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is_key_like.js */ "H/EN");





function checkKeySize(key, alg) {
    if (key.algorithm.length !== parseInt(alg.slice(1, 4), 10)) {
        throw new TypeError(`Invalid key size for alg: ${alg}`);
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
    throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_3__["default"])(key, ..._is_key_like_js__WEBPACK_IMPORTED_MODULE_4__["types"], 'Uint8Array'));
}
const wrap = async (alg, key, cek) => {
    const cryptoKey = await getCryptoKey(key, alg, 'wrapKey');
    checkKeySize(cryptoKey, alg);
    const cryptoKeyCek = await _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.importKey('raw', cek, ..._bogus_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    return new Uint8Array(await _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.wrapKey('raw', cryptoKeyCek, cryptoKey, 'AES-KW'));
};
const unwrap = async (alg, key, encryptedKey) => {
    const cryptoKey = await getCryptoKey(key, alg, 'unwrapKey');
    checkKeySize(cryptoKey, alg);
    const cryptoKeyCek = await _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.unwrapKey('raw', encryptedKey, cryptoKey, 'AES-KW', ..._bogus_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    return new Uint8Array(await _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.exportKey('raw', cryptoKeyCek));
};


/***/ }),

/***/ "Qtqc":
/*!******************************************************!*\
  !*** ./node_modules/jose/dist/browser/key/import.js ***!
  \******************************************************/
/*! exports provided: importSPKI, importX509, importPKCS8, importJWK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importSPKI", function() { return importSPKI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importX509", function() { return importX509; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importPKCS8", function() { return importPKCS8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importJWK", function() { return importJWK; });
/* harmony import */ var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime/base64url.js */ "KjJ5");
/* harmony import */ var _runtime_asn1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../runtime/asn1.js */ "IpBm");
/* harmony import */ var _runtime_jwk_to_key_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime/jwk_to_key.js */ "LuQ+");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/errors.js */ "StPg");
/* harmony import */ var _lib_format_pem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/format_pem.js */ "aMKJ");
/* harmony import */ var _lib_is_object_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/is_object.js */ "2fVw");







function getElement(seq) {
    let result = [];
    let next = 0;
    while (next < seq.length) {
        let nextPart = parseElement(seq.subarray(next));
        result.push(nextPart);
        next += nextPart.byteLength;
    }
    return result;
}
function parseElement(bytes) {
    let position = 0;
    let tag = bytes[0] & 0x1f;
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
    let length = 0;
    if (bytes[position] < 0x80) {
        length = bytes[position];
        position++;
    }
    else {
        let numberOfDigits = bytes[position] & 0x7f;
        position++;
        length = 0;
        for (let i = 0; i < numberOfDigits; i++) {
            length = length * 256 + bytes[position];
            position++;
        }
    }
    if (length === 0x80) {
        length = 0;
        while (bytes[position + length] !== 0 || bytes[position + length + 1] !== 0) {
            length++;
        }
        const byteLength = position + length + 2;
        return {
            byteLength,
            contents: bytes.subarray(position, position + length),
            raw: bytes.subarray(0, byteLength),
        };
    }
    const byteLength = position + length;
    return {
        byteLength,
        contents: bytes.subarray(position, byteLength),
        raw: bytes.subarray(0, byteLength),
    };
}
function spkiFromX509(buf) {
    const tbsCertificate = getElement(getElement(parseElement(buf).contents)[0].contents);
    return Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encodeBase64"])(tbsCertificate[tbsCertificate[0].raw[0] === 0xa0 ? 6 : 5].raw);
}
function getSPKI(x509) {
    const pem = x509.replace(/(?:-----(?:BEGIN|END) CERTIFICATE-----|\s)/g, '');
    const raw = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decodeBase64"])(pem);
    return Object(_lib_format_pem_js__WEBPACK_IMPORTED_MODULE_4__["default"])(spkiFromX509(raw), 'PUBLIC KEY');
}
async function importSPKI(spki, alg, options) {
    if (typeof spki !== 'string' || spki.indexOf('-----BEGIN PUBLIC KEY-----') !== 0) {
        throw new TypeError('"spki" must be SPKI formatted string');
    }
    return Object(_runtime_asn1_js__WEBPACK_IMPORTED_MODULE_1__["fromSPKI"])(spki, alg, options);
}
async function importX509(x509, alg, options) {
    if (typeof x509 !== 'string' || x509.indexOf('-----BEGIN CERTIFICATE-----') !== 0) {
        throw new TypeError('"x509" must be X.509 formatted string');
    }
    const spki = getSPKI(x509);
    return Object(_runtime_asn1_js__WEBPACK_IMPORTED_MODULE_1__["fromSPKI"])(spki, alg, options);
}
async function importPKCS8(pkcs8, alg, options) {
    if (typeof pkcs8 !== 'string' || pkcs8.indexOf('-----BEGIN PRIVATE KEY-----') !== 0) {
        throw new TypeError('"pkcs8" must be PCKS8 formatted string');
    }
    return Object(_runtime_asn1_js__WEBPACK_IMPORTED_MODULE_1__["fromPKCS8"])(pkcs8, alg, options);
}
async function importJWK(jwk, alg, octAsKeyObject) {
    if (!Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_5__["default"])(jwk)) {
        throw new TypeError('JWK must be an object');
    }
    alg || (alg = jwk.alg);
    if (typeof alg !== 'string' || !alg) {
        throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
    }
    switch (jwk.kty) {
        case 'oct':
            if (typeof jwk.k !== 'string' || !jwk.k) {
                throw new TypeError('missing "k" (Key Value) Parameter value');
            }
            octAsKeyObject !== null && octAsKeyObject !== void 0 ? octAsKeyObject : (octAsKeyObject = jwk.ext !== true);
            if (octAsKeyObject) {
                return Object(_runtime_jwk_to_key_js__WEBPACK_IMPORTED_MODULE_2__["default"])({ ...jwk, alg, ext: false });
            }
            return Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(jwk.k);
        case 'RSA':
            if (jwk.oth !== undefined) {
                throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JOSENotSupported"]('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
            }
        case 'EC':
        case 'OKP':
            return Object(_runtime_jwk_to_key_js__WEBPACK_IMPORTED_MODULE_2__["default"])({ ...jwk, alg });
        default:
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JOSENotSupported"]('Unsupported "kty" (Key Type) Parameter value');
    }
}


/***/ }),

/***/ "Rg9p":
/*!***********************************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/get_sign_verify_key.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getCryptoKey; });
/* harmony import */ var _webcrypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webcrypto.js */ "hqmz");
/* harmony import */ var _lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/crypto_key.js */ "D3C9");
/* harmony import */ var _lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/invalid_key_input.js */ "wZa+");
/* harmony import */ var _is_key_like_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is_key_like.js */ "H/EN");




function getCryptoKey(alg, key, usage) {
    if (Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_0__["isCryptoKey"])(key)) {
        Object(_lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_1__["checkSigCryptoKey"])(key, alg, usage);
        return key;
    }
    if (key instanceof Uint8Array) {
        if (!alg.startsWith('HS')) {
            throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_2__["default"])(key, ..._is_key_like_js__WEBPACK_IMPORTED_MODULE_3__["types"]));
        }
        return _webcrypto_js__WEBPACK_IMPORTED_MODULE_0__["default"].subtle.importKey('raw', key, { hash: `SHA-${alg.slice(-3)}`, name: 'HMAC' }, false, [usage]);
    }
    throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_2__["default"])(key, ..._is_key_like_js__WEBPACK_IMPORTED_MODULE_3__["types"], 'Uint8Array'));
}


/***/ }),

/***/ "S6kV":
/*!********************************************!*\
  !*** ./node_modules/crypto-js/mode-ofb.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./cipher-core */ "OLod"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Output Feedback block mode.
	 */
	CryptoJS.mode.OFB = (function () {
	    var OFB = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = OFB.Encryptor = OFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var keystream = this._keystream;

	            // Generate keystream
	            if (iv) {
	                keystream = this._keystream = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    OFB.Decryptor = Encryptor;

	    return OFB;
	}());


	return CryptoJS.mode.OFB;

}));

/***/ }),

/***/ "Sblm":
/*!****************************************************!*\
  !*** ./node_modules/jose/dist/browser/lib/secs.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const minute = 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
const year = day * 365.25;
const REGEX = /^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i;
/* harmony default export */ __webpack_exports__["default"] = ((str) => {
    const matched = REGEX.exec(str);
    if (!matched) {
        throw new TypeError('Invalid time period format');
    }
    const value = parseFloat(matched[1]);
    const unit = matched[2].toLowerCase();
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
});


/***/ }),

/***/ "StPg":
/*!*******************************************************!*\
  !*** ./node_modules/jose/dist/browser/util/errors.js ***!
  \*******************************************************/
/*! exports provided: JOSEError, JWTClaimValidationFailed, JWTExpired, JOSEAlgNotAllowed, JOSENotSupported, JWEDecryptionFailed, JWEInvalid, JWSInvalid, JWTInvalid, JWKInvalid, JWKSInvalid, JWKSNoMatchingKey, JWKSMultipleMatchingKeys, JWKSTimeout, JWSSignatureVerificationFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOSEError", function() { return JOSEError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWTClaimValidationFailed", function() { return JWTClaimValidationFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWTExpired", function() { return JWTExpired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOSEAlgNotAllowed", function() { return JOSEAlgNotAllowed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOSENotSupported", function() { return JOSENotSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWEDecryptionFailed", function() { return JWEDecryptionFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWEInvalid", function() { return JWEInvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWSInvalid", function() { return JWSInvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWTInvalid", function() { return JWTInvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWKInvalid", function() { return JWKInvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWKSInvalid", function() { return JWKSInvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWKSNoMatchingKey", function() { return JWKSNoMatchingKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWKSMultipleMatchingKeys", function() { return JWKSMultipleMatchingKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWKSTimeout", function() { return JWKSTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWSSignatureVerificationFailed", function() { return JWSSignatureVerificationFailed; });
class JOSEError extends Error {
    constructor(message) {
        var _a;
        super(message);
        this.code = 'ERR_JOSE_GENERIC';
        this.name = this.constructor.name;
        (_a = Error.captureStackTrace) === null || _a === void 0 ? void 0 : _a.call(Error, this, this.constructor);
    }
    static get code() {
        return 'ERR_JOSE_GENERIC';
    }
}
class JWTClaimValidationFailed extends JOSEError {
    constructor(message, claim = 'unspecified', reason = 'unspecified') {
        super(message);
        this.code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
        this.claim = claim;
        this.reason = reason;
    }
    static get code() {
        return 'ERR_JWT_CLAIM_VALIDATION_FAILED';
    }
}
class JWTExpired extends JOSEError {
    constructor(message, claim = 'unspecified', reason = 'unspecified') {
        super(message);
        this.code = 'ERR_JWT_EXPIRED';
        this.claim = claim;
        this.reason = reason;
    }
    static get code() {
        return 'ERR_JWT_EXPIRED';
    }
}
class JOSEAlgNotAllowed extends JOSEError {
    constructor() {
        super(...arguments);
        this.code = 'ERR_JOSE_ALG_NOT_ALLOWED';
    }
    static get code() {
        return 'ERR_JOSE_ALG_NOT_ALLOWED';
    }
}
class JOSENotSupported extends JOSEError {
    constructor() {
        super(...arguments);
        this.code = 'ERR_JOSE_NOT_SUPPORTED';
    }
    static get code() {
        return 'ERR_JOSE_NOT_SUPPORTED';
    }
}
class JWEDecryptionFailed extends JOSEError {
    constructor() {
        super(...arguments);
        this.code = 'ERR_JWE_DECRYPTION_FAILED';
        this.message = 'decryption operation failed';
    }
    static get code() {
        return 'ERR_JWE_DECRYPTION_FAILED';
    }
}
class JWEInvalid extends JOSEError {
    constructor() {
        super(...arguments);
        this.code = 'ERR_JWE_INVALID';
    }
    static get code() {
        return 'ERR_JWE_INVALID';
    }
}
class JWSInvalid extends JOSEError {
    constructor() {
        super(...arguments);
        this.code = 'ERR_JWS_INVALID';
    }
    static get code() {
        return 'ERR_JWS_INVALID';
    }
}
class JWTInvalid extends JOSEError {
    constructor() {
        super(...arguments);
        this.code = 'ERR_JWT_INVALID';
    }
    static get code() {
        return 'ERR_JWT_INVALID';
    }
}
class JWKInvalid extends JOSEError {
    constructor() {
        super(...arguments);
        this.code = 'ERR_JWK_INVALID';
    }
    static get code() {
        return 'ERR_JWK_INVALID';
    }
}
class JWKSInvalid extends JOSEError {
    constructor() {
        super(...arguments);
        this.code = 'ERR_JWKS_INVALID';
    }
    static get code() {
        return 'ERR_JWKS_INVALID';
    }
}
class JWKSNoMatchingKey extends JOSEError {
    constructor() {
        super(...arguments);
        this.code = 'ERR_JWKS_NO_MATCHING_KEY';
        this.message = 'no applicable key found in the JSON Web Key Set';
    }
    static get code() {
        return 'ERR_JWKS_NO_MATCHING_KEY';
    }
}
class JWKSMultipleMatchingKeys extends JOSEError {
    constructor() {
        super(...arguments);
        this.code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
        this.message = 'multiple matching keys found in the JSON Web Key Set';
    }
    static get code() {
        return 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
    }
}
class JWKSTimeout extends JOSEError {
    constructor() {
        super(...arguments);
        this.code = 'ERR_JWKS_TIMEOUT';
        this.message = 'request timed out';
    }
    static get code() {
        return 'ERR_JWKS_TIMEOUT';
    }
}
class JWSSignatureVerificationFailed extends JOSEError {
    constructor() {
        super(...arguments);
        this.code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
        this.message = 'signature verification failed';
    }
    static get code() {
        return 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
    }
}


/***/ }),

/***/ "WR06":
/*!*********************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/rsaes.js ***!
  \*********************************************************/
/*! exports provided: encrypt, decrypt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encrypt", function() { return encrypt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrypt", function() { return decrypt; });
/* harmony import */ var _subtle_rsaes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subtle_rsaes.js */ "HFAi");
/* harmony import */ var _bogus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bogus.js */ "tj0O");
/* harmony import */ var _webcrypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webcrypto.js */ "hqmz");
/* harmony import */ var _lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/crypto_key.js */ "D3C9");
/* harmony import */ var _check_key_length_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./check_key_length.js */ "hKMt");
/* harmony import */ var _lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/invalid_key_input.js */ "wZa+");
/* harmony import */ var _is_key_like_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./is_key_like.js */ "H/EN");







const encrypt = async (alg, key, cek) => {
    if (!Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_2__["isCryptoKey"])(key)) {
        throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_5__["default"])(key, ..._is_key_like_js__WEBPACK_IMPORTED_MODULE_6__["types"]));
    }
    Object(_lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_3__["checkEncCryptoKey"])(key, alg, 'encrypt', 'wrapKey');
    Object(_check_key_length_js__WEBPACK_IMPORTED_MODULE_4__["default"])(alg, key);
    if (key.usages.includes('encrypt')) {
        return new Uint8Array(await _webcrypto_js__WEBPACK_IMPORTED_MODULE_2__["default"].subtle.encrypt(Object(_subtle_rsaes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(alg), key, cek));
    }
    if (key.usages.includes('wrapKey')) {
        const cryptoKeyCek = await _webcrypto_js__WEBPACK_IMPORTED_MODULE_2__["default"].subtle.importKey('raw', cek, ..._bogus_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
        return new Uint8Array(await _webcrypto_js__WEBPACK_IMPORTED_MODULE_2__["default"].subtle.wrapKey('raw', cryptoKeyCek, key, Object(_subtle_rsaes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(alg)));
    }
    throw new TypeError('RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation');
};
const decrypt = async (alg, key, encryptedKey) => {
    if (!Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_2__["isCryptoKey"])(key)) {
        throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_5__["default"])(key, ..._is_key_like_js__WEBPACK_IMPORTED_MODULE_6__["types"]));
    }
    Object(_lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_3__["checkEncCryptoKey"])(key, alg, 'decrypt', 'unwrapKey');
    Object(_check_key_length_js__WEBPACK_IMPORTED_MODULE_4__["default"])(alg, key);
    if (key.usages.includes('decrypt')) {
        return new Uint8Array(await _webcrypto_js__WEBPACK_IMPORTED_MODULE_2__["default"].subtle.decrypt(Object(_subtle_rsaes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(alg), key, encryptedKey));
    }
    if (key.usages.includes('unwrapKey')) {
        const cryptoKeyCek = await _webcrypto_js__WEBPACK_IMPORTED_MODULE_2__["default"].subtle.unwrapKey('raw', encryptedKey, key, Object(_subtle_rsaes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(alg), ..._bogus_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
        return new Uint8Array(await _webcrypto_js__WEBPACK_IMPORTED_MODULE_2__["default"].subtle.exportKey('raw', cryptoKeyCek));
    }
    throw new TypeError('RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation');
};


/***/ }),

/***/ "WYAk":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/hmac.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"));
	}
	else {}
}(this, function (CryptoJS) {

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
	        init: function (hasher, key) {
	            // Init hasher
	            hasher = this._hasher = new hasher.init();

	            // Convert string to WordArray, else assume WordArray already
	            if (typeof key == 'string') {
	                key = Utf8.parse(key);
	            }

	            // Shortcuts
	            var hasherBlockSize = hasher.blockSize;
	            var hasherBlockSizeBytes = hasherBlockSize * 4;

	            // Allow arbitrary length keys
	            if (key.sigBytes > hasherBlockSizeBytes) {
	                key = hasher.finalize(key);
	            }

	            // Clamp excess bits
	            key.clamp();

	            // Clone key for inner and outer pads
	            var oKey = this._oKey = key.clone();
	            var iKey = this._iKey = key.clone();

	            // Shortcuts
	            var oKeyWords = oKey.words;
	            var iKeyWords = iKey.words;

	            // XOR keys with pad constants
	            for (var i = 0; i < hasherBlockSize; i++) {
	                oKeyWords[i] ^= 0x5c5c5c5c;
	                iKeyWords[i] ^= 0x36363636;
	            }
	            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this HMAC to its initial state.
	         *
	         * @example
	         *
	         *     hmacHasher.reset();
	         */
	        reset: function () {
	            // Shortcut
	            var hasher = this._hasher;

	            // Reset
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
	        update: function (messageUpdate) {
	            this._hasher.update(messageUpdate);

	            // Chainable
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
	        finalize: function (messageUpdate) {
	            // Shortcut
	            var hasher = this._hasher;

	            // Compute HMAC
	            var innerHash = hasher.finalize(messageUpdate);
	            hasher.reset();
	            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

	            return hmac;
	        }
	    });
	}());


}));

/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n\n  <login-login-lib\n    toolbarTitle=\"Agentifai\"\n    usernameLabel=\"ID Number\" \n    passwordLabel=\"Access Code\" \n    [intents]=\"intents\"\n    [endpoints]=\"endpoints\"\n    (endpoint)=\"endpoint($event)\"\n    (removeConsents)=\"removeVoiceConsent()\"\n    (login)=\"login($event)\"\n    (fakeTokenLogin)=\"fakeTokenLogin($event)\"\n    (logout)=\"logout()\"\n    (initialize)=\"initializeAction()\"\n    (registerUser)=\"registerUser($event)\"\n    (unregisterUser)=\"unregisterUser()\"\n    (setWidgetDimensions)=\"setWidgetDimensionsAction()\"\n    (openApp)=\"showAppAction()\"\n    (showWidget)=\"showWidgetAction()\"\n    (hideWidget)=\"hideWidgetAction()\"\n    (openIntent)=\"openIntent($event)\">\n  </login-login-lib>\n\n  <div class=\"ion-padding\">\n    <ion-button (click)=\"showNewPage()\">\n      Show New Page\n    </ion-button>\n  \n    <ion-button (click)=\"showFingerprint()\">\n      Show Fingerprint\n    </ion-button>\n  </div>\n\n  <div class=\"ion-padding\" *ngIf=\"assistantConfigsEnabled\"> \n    <ion-item>\n      <ion-label position=\"floating\">Api Url</ion-label>\n      <ion-input inputmode=\"text\" [(ngModel)]=\"apiUrl\" id=\"apiUrl\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Tenant Id</ion-label>\n      <ion-input inputmode=\"text\" [(ngModel)]=\"tenantId\" id=\"tenantId\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Channel Id</ion-label>\n      <ion-input inputmode=\"text\" [(ngModel)]=\"channelId\" id=\"channelId\"></ion-input>\n    </ion-item>\n    <ion-button (click)=\"setupNewTenant()\">\n      Setup New Tenant\n    </ion-button>\n    <ion-button (click)=\"resetDefaultTenant()\">\n      Reset Default Tenant\n    </ion-button>\n  </div>\n\n  <div class=\"ion-padding\">\n    <ion-item>\n      <ion-label>Theme</ion-label>\n      <ion-select okText=\"confirm\" cancelText=\"cancel\" [(ngModel)]=\"themeSelected\" (ionChange)=\"setTheme(themeSelected)\">\n        <ion-select-option *ngFor=\"let theme of themes\" value=\"{{theme}}\">{{theme}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </div>\n\n</ion-content>\n\n\n\n");

/***/ }),

/***/ "Wcb1":
/*!*******************************************************!*\
  !*** ./node_modules/jose/dist/browser/jwt/produce.js ***!
  \*******************************************************/
/*! exports provided: ProduceJWT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduceJWT", function() { return ProduceJWT; });
/* harmony import */ var _lib_epoch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/epoch.js */ "7SCF");
/* harmony import */ var _lib_is_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/is_object.js */ "2fVw");
/* harmony import */ var _lib_secs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/secs.js */ "Sblm");



class ProduceJWT {
    constructor(payload) {
        if (!Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_1__["default"])(payload)) {
            throw new TypeError('JWT Claims Set MUST be an object');
        }
        this._payload = payload;
    }
    setIssuer(issuer) {
        this._payload = { ...this._payload, iss: issuer };
        return this;
    }
    setSubject(subject) {
        this._payload = { ...this._payload, sub: subject };
        return this;
    }
    setAudience(audience) {
        this._payload = { ...this._payload, aud: audience };
        return this;
    }
    setJti(jwtId) {
        this._payload = { ...this._payload, jti: jwtId };
        return this;
    }
    setNotBefore(input) {
        if (typeof input === 'number') {
            this._payload = { ...this._payload, nbf: input };
        }
        else {
            this._payload = { ...this._payload, nbf: Object(_lib_epoch_js__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date()) + Object(_lib_secs_js__WEBPACK_IMPORTED_MODULE_2__["default"])(input) };
        }
        return this;
    }
    setExpirationTime(input) {
        if (typeof input === 'number') {
            this._payload = { ...this._payload, exp: input };
        }
        else {
            this._payload = { ...this._payload, exp: Object(_lib_epoch_js__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date()) + Object(_lib_secs_js__WEBPACK_IMPORTED_MODULE_2__["default"])(input) };
        }
        return this;
    }
    setIssuedAt(input) {
        if (typeof input === 'undefined') {
            this._payload = { ...this._payload, iat: Object(_lib_epoch_js__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date()) };
        }
        else {
            this._payload = { ...this._payload, iat: input };
        }
        return this;
    }
}


/***/ }),

/***/ "aAVB":
/*!********************************************************!*\
  !*** ./node_modules/jose/dist/browser/lib/aesgcmkw.js ***!
  \********************************************************/
/*! exports provided: wrap, unwrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwrap", function() { return unwrap; });
/* harmony import */ var _runtime_encrypt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime/encrypt.js */ "Ninj");
/* harmony import */ var _runtime_decrypt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../runtime/decrypt.js */ "v9/r");
/* harmony import */ var _iv_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iv.js */ "spAk");
/* harmony import */ var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../runtime/base64url.js */ "KjJ5");




async function wrap(alg, key, cek, iv) {
    const jweAlgorithm = alg.slice(0, 7);
    iv || (iv = Object(_iv_js__WEBPACK_IMPORTED_MODULE_2__["default"])(jweAlgorithm));
    const { ciphertext: encryptedKey, tag } = await Object(_runtime_encrypt_js__WEBPACK_IMPORTED_MODULE_0__["default"])(jweAlgorithm, cek, key, iv, new Uint8Array(0));
    return { encryptedKey, iv: Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_3__["encode"])(iv), tag: Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_3__["encode"])(tag) };
}
async function unwrap(alg, key, encryptedKey, iv, tag) {
    const jweAlgorithm = alg.slice(0, 7);
    return Object(_runtime_decrypt_js__WEBPACK_IMPORTED_MODULE_1__["default"])(jweAlgorithm, key, encryptedKey, iv, tag, new Uint8Array(0));
}


/***/ }),

/***/ "aMKJ":
/*!**********************************************************!*\
  !*** ./node_modules/jose/dist/browser/lib/format_pem.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((b64, descriptor) => {
    const newlined = (b64.match(/.{1,64}/g) || []).join('\n');
    return `-----BEGIN ${descriptor}-----\n${newlined}\n-----END ${descriptor}-----`;
});


/***/ }),

/***/ "aaL6":
/*!***************************************************************!*\
  !*** ./node_modules/jose/dist/browser/jwe/general/decrypt.js ***!
  \***************************************************************/
/*! exports provided: generalDecrypt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalDecrypt", function() { return generalDecrypt; });
/* harmony import */ var _flattened_decrypt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../flattened/decrypt.js */ "xHgm");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/errors.js */ "StPg");
/* harmony import */ var _lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/is_object.js */ "2fVw");



async function generalDecrypt(jwe, key, options) {
    if (!Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__["default"])(jwe)) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('General JWE must be an object');
    }
    if (!Array.isArray(jwe.recipients) || !jwe.recipients.every(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_2__["default"])) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('JWE Recipients missing or incorrect type');
    }
    if (!jwe.recipients.length) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('JWE Recipients has no members');
    }
    for (const recipient of jwe.recipients) {
        try {
            return await Object(_flattened_decrypt_js__WEBPACK_IMPORTED_MODULE_0__["flattenedDecrypt"])({
                aad: jwe.aad,
                ciphertext: jwe.ciphertext,
                encrypted_key: recipient.encrypted_key,
                header: recipient.header,
                iv: jwe.iv,
                protected: jwe.protected,
                tag: jwe.tag,
                unprotected: jwe.unprotected,
            }, key, options);
        }
        catch (_a) {
        }
    }
    throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEDecryptionFailed"]();
}


/***/ }),

/***/ "bQjk":
/*!**********************************************!*\
  !*** ./node_modules/crypto-js/format-hex.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./cipher-core */ "OLod"));
	}
	else {}
}(this, function (CryptoJS) {

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
	        stringify: function (cipherParams) {
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
	        parse: function (input) {
	            var ciphertext = Hex.parse(input);
	            return CipherParams.create({ ciphertext: ciphertext });
	        }
	    };
	}());


	return CryptoJS.format.Hex;

}));

/***/ }),

/***/ "c9hL":
/*!*******************************************************!*\
  !*** ./node_modules/jose/dist/browser/jwt/encrypt.js ***!
  \*******************************************************/
/*! exports provided: EncryptJWT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncryptJWT", function() { return EncryptJWT; });
/* harmony import */ var _jwe_compact_encrypt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jwe/compact/encrypt.js */ "xwey");
/* harmony import */ var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/buffer_utils.js */ "xpfA");
/* harmony import */ var _produce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./produce.js */ "Wcb1");



class EncryptJWT extends _produce_js__WEBPACK_IMPORTED_MODULE_2__["ProduceJWT"] {
    setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
            throw new TypeError('setProtectedHeader can only be called once');
        }
        this._protectedHeader = protectedHeader;
        return this;
    }
    setKeyManagementParameters(parameters) {
        if (this._keyManagementParameters) {
            throw new TypeError('setKeyManagementParameters can only be called once');
        }
        this._keyManagementParameters = parameters;
        return this;
    }
    setContentEncryptionKey(cek) {
        if (this._cek) {
            throw new TypeError('setContentEncryptionKey can only be called once');
        }
        this._cek = cek;
        return this;
    }
    setInitializationVector(iv) {
        if (this._iv) {
            throw new TypeError('setInitializationVector can only be called once');
        }
        this._iv = iv;
        return this;
    }
    replicateIssuerAsHeader() {
        this._replicateIssuerAsHeader = true;
        return this;
    }
    replicateSubjectAsHeader() {
        this._replicateSubjectAsHeader = true;
        return this;
    }
    replicateAudienceAsHeader() {
        this._replicateAudienceAsHeader = true;
        return this;
    }
    async encrypt(key, options) {
        const enc = new _jwe_compact_encrypt_js__WEBPACK_IMPORTED_MODULE_0__["CompactEncrypt"](_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__["encoder"].encode(JSON.stringify(this._payload)));
        if (this._replicateIssuerAsHeader) {
            this._protectedHeader = { ...this._protectedHeader, iss: this._payload.iss };
        }
        if (this._replicateSubjectAsHeader) {
            this._protectedHeader = { ...this._protectedHeader, sub: this._payload.sub };
        }
        if (this._replicateAudienceAsHeader) {
            this._protectedHeader = { ...this._protectedHeader, aud: this._payload.aud };
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
        return enc.encrypt(key, options);
    }
}


/***/ }),

/***/ "ceW5":
/*!**************************************************************!*\
  !*** ./node_modules/jose/dist/browser/lib/check_key_type.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invalid_key_input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invalid_key_input.js */ "wZa+");
/* harmony import */ var _runtime_is_key_like_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../runtime/is_key_like.js */ "H/EN");


const symmetricTypeCheck = (key) => {
    if (key instanceof Uint8Array)
        return;
    if (!Object(_runtime_is_key_like_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key)) {
        throw new TypeError(Object(_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key, ..._runtime_is_key_like_js__WEBPACK_IMPORTED_MODULE_1__["types"], 'Uint8Array'));
    }
    if (key.type !== 'secret') {
        throw new TypeError(`${_runtime_is_key_like_js__WEBPACK_IMPORTED_MODULE_1__["types"].join(' or ')} instances for symmetric algorithms must be of type "secret"`);
    }
};
const asymmetricTypeCheck = (key, usage) => {
    if (!Object(_runtime_is_key_like_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key)) {
        throw new TypeError(Object(_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key, ..._runtime_is_key_like_js__WEBPACK_IMPORTED_MODULE_1__["types"]));
    }
    if (key.type === 'secret') {
        throw new TypeError(`${_runtime_is_key_like_js__WEBPACK_IMPORTED_MODULE_1__["types"].join(' or ')} instances for asymmetric algorithms must not be of type "secret"`);
    }
    if (usage === 'sign' && key.type === 'public') {
        throw new TypeError(`${_runtime_is_key_like_js__WEBPACK_IMPORTED_MODULE_1__["types"].join(' or ')} instances for asymmetric algorithm signing must be of type "private"`);
    }
    if (usage === 'decrypt' && key.type === 'public') {
        throw new TypeError(`${_runtime_is_key_like_js__WEBPACK_IMPORTED_MODULE_1__["types"].join(' or ')} instances for asymmetric algorithm decryption must be of type "private"`);
    }
    if (key.algorithm && usage === 'verify' && key.type === 'private') {
        throw new TypeError(`${_runtime_is_key_like_js__WEBPACK_IMPORTED_MODULE_1__["types"].join(' or ')} instances for asymmetric algorithm verifying must be of type "public"`);
    }
    if (key.algorithm && usage === 'encrypt' && key.type === 'private') {
        throw new TypeError(`${_runtime_is_key_like_js__WEBPACK_IMPORTED_MODULE_1__["types"].join(' or ')} instances for asymmetric algorithm encryption must be of type "public"`);
    }
};
const checkKeyType = (alg, key, usage) => {
    const symmetric = alg.startsWith('HS') ||
        alg === 'dir' ||
        alg.startsWith('PBES2') ||
        /^A\d{3}(?:GCM)?KW$/.test(alg);
    if (symmetric) {
        symmetricTypeCheck(key);
    }
    else {
        asymmetricTypeCheck(key, usage);
    }
};
/* harmony default export */ __webpack_exports__["default"] = (checkKeyType);


/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var login_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! login-lib */ "3Qup");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            login_lib__WEBPACK_IMPORTED_MODULE_7__["LoginLibModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "cv67":
/*!***************************************!*\
  !*** ./node_modules/crypto-js/md5.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var T = [];

	    // Compute constants
	    (function () {
	        for (var i = 0; i < 64; i++) {
	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
	        }
	    }());

	    /**
	     * MD5 hash algorithm.
	     */
	    var MD5 = C_algo.MD5 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }

	            // Shortcuts
	            var H = this._hash.words;

	            var M_offset_0  = M[offset + 0];
	            var M_offset_1  = M[offset + 1];
	            var M_offset_2  = M[offset + 2];
	            var M_offset_3  = M[offset + 3];
	            var M_offset_4  = M[offset + 4];
	            var M_offset_5  = M[offset + 5];
	            var M_offset_6  = M[offset + 6];
	            var M_offset_7  = M[offset + 7];
	            var M_offset_8  = M[offset + 8];
	            var M_offset_9  = M[offset + 9];
	            var M_offset_10 = M[offset + 10];
	            var M_offset_11 = M[offset + 11];
	            var M_offset_12 = M[offset + 12];
	            var M_offset_13 = M[offset + 13];
	            var M_offset_14 = M[offset + 14];
	            var M_offset_15 = M[offset + 15];

	            // Working varialbes
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];

	            // Computation
	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
	            var nBitsTotalL = nBitsTotal;
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
	            );
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
	            );

	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                // Shortcut
	                var H_i = H[i];

	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    function FF(a, b, c, d, x, s, t) {
	        var n = a + ((b & c) | (~b & d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function GG(a, b, c, d, x, s, t) {
	        var n = a + ((b & d) | (c & ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function HH(a, b, c, d, x, s, t) {
	        var n = a + (b ^ c ^ d) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function II(a, b, c, d, x, s, t) {
	        var n = a + (c ^ (b | ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
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
	}(Math));


	return CryptoJS.MD5;

}));

/***/ }),

/***/ "e4TT":
/*!**************************************************************!*\
  !*** ./node_modules/jose/dist/browser/jws/compact/verify.js ***!
  \**************************************************************/
/*! exports provided: compactVerify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compactVerify", function() { return compactVerify; });
/* harmony import */ var _flattened_verify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../flattened/verify.js */ "n8OJ");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/errors.js */ "StPg");
/* harmony import */ var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/buffer_utils.js */ "xpfA");



async function compactVerify(jws, key, options) {
    if (jws instanceof Uint8Array) {
        jws = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_2__["decoder"].decode(jws);
    }
    if (typeof jws !== 'string') {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWSInvalid"]('Compact JWS must be a string or Uint8Array');
    }
    const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split('.');
    if (length !== 3) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWSInvalid"]('Invalid Compact JWS');
    }
    const verified = await Object(_flattened_verify_js__WEBPACK_IMPORTED_MODULE_0__["flattenedVerify"])({ payload, protected: protectedHeader, signature }, key, options);
    const result = { payload: verified.payload, protectedHeader: verified.protectedHeader };
    if (typeof key === 'function') {
        return { ...result, key: verified.key };
    }
    return result;
}


/***/ }),

/***/ "e7zE":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/pbkdf2.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./sha1 */ "3y9D"), __webpack_require__(/*! ./hmac */ "WYAk"));
	}
	else {}
}(this, function (CryptoJS) {

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
	            keySize: 128/32,
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
	        init: function (cfg) {
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
	        compute: function (password, salt) {
	            // Shortcut
	            var cfg = this.cfg;

	            // Init HMAC
	            var hmac = HMAC.create(cfg.hasher, password);

	            // Initial values
	            var derivedKey = WordArray.create();
	            var blockIndex = WordArray.create([0x00000001]);

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var blockIndexWords = blockIndex.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                var block = hmac.update(salt).finalize(blockIndex);
	                hmac.reset();

	                // Shortcuts
	                var blockWords = block.words;
	                var blockWordsLength = blockWords.length;

	                // Iterations
	                var intermediate = block;
	                for (var i = 1; i < iterations; i++) {
	                    intermediate = hmac.finalize(intermediate);
	                    hmac.reset();

	                    // Shortcut
	                    var intermediateWords = intermediate.words;

	                    // XOR intermediate with block
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
	}());


	return CryptoJS.PBKDF2;

}));

/***/ }),

/***/ "eNpK":
/*!********************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/sign.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subtle_dsa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subtle_dsa.js */ "D2oy");
/* harmony import */ var _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webcrypto.js */ "hqmz");
/* harmony import */ var _check_key_length_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check_key_length.js */ "hKMt");
/* harmony import */ var _get_sign_verify_key_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get_sign_verify_key.js */ "Rg9p");




const sign = async (alg, key, data) => {
    const cryptoKey = await Object(_get_sign_verify_key_js__WEBPACK_IMPORTED_MODULE_3__["default"])(alg, key, 'sign');
    Object(_check_key_length_js__WEBPACK_IMPORTED_MODULE_2__["default"])(alg, cryptoKey);
    const signature = await _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.sign(Object(_subtle_dsa_js__WEBPACK_IMPORTED_MODULE_0__["default"])(alg, cryptoKey.algorithm), cryptoKey, data);
    return new Uint8Array(signature);
};
/* harmony default export */ __webpack_exports__["default"] = (sign);


/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "g1Po":
/*!***************************************************************!*\
  !*** ./node_modules/jose/dist/browser/lib/check_iv_length.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/errors.js */ "StPg");
/* harmony import */ var _iv_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iv.js */ "spAk");


const checkIvLength = (enc, iv) => {
    if (iv.length << 3 !== Object(_iv_js__WEBPACK_IMPORTED_MODULE_1__["bitLength"])(enc)) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWEInvalid"]('Invalid Initialization Vector length');
    }
};
/* harmony default export */ __webpack_exports__["default"] = (checkIvLength);


/***/ }),

/***/ "gb/T":
/*!********************************************!*\
  !*** ./node_modules/crypto-js/mode-ecb.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./cipher-core */ "OLod"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Electronic Codebook block mode.
	 */
	CryptoJS.mode.ECB = (function () {
	    var ECB = CryptoJS.lib.BlockCipherMode.extend();

	    ECB.Encryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.encryptBlock(words, offset);
	        }
	    });

	    ECB.Decryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.decryptBlock(words, offset);
	        }
	    });

	    return ECB;
	}());


	return CryptoJS.mode.ECB;

}));

/***/ }),

/***/ "hKMt":
/*!********************************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/check_key_length.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((alg, key) => {
    if (alg.startsWith('RS') || alg.startsWith('PS')) {
        const { modulusLength } = key.algorithm;
        if (typeof modulusLength !== 'number' || modulusLength < 2048) {
            throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
        }
    }
});


/***/ }),

/***/ "hqmz":
/*!*************************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/webcrypto.js ***!
  \*************************************************************/
/*! exports provided: default, isCryptoKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCryptoKey", function() { return isCryptoKey; });
/* harmony default export */ __webpack_exports__["default"] = (crypto);
const isCryptoKey = (key) => key instanceof CryptoKey;


/***/ }),

/***/ "iEOA":
/*!************************************************************!*\
  !*** ./node_modules/jose/dist/browser/jws/compact/sign.js ***!
  \************************************************************/
/*! exports provided: CompactSign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompactSign", function() { return CompactSign; });
/* harmony import */ var _flattened_sign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../flattened/sign.js */ "4xNZ");

class CompactSign {
    constructor(payload) {
        this._flattened = new _flattened_sign_js__WEBPACK_IMPORTED_MODULE_0__["FlattenedSign"](payload);
    }
    setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
    }
    async sign(key, options) {
        const jws = await this._flattened.sign(key, options);
        if (jws.payload === undefined) {
            throw new TypeError('use the flattened module for creating JWS with b64: false');
        }
        return `${jws.protected}.${jws.payload}.${jws.signature}`;
    }
}


/***/ }),

/***/ "j2Dr":
/*!*****************************************************************!*\
  !*** ./node_modules/jose/dist/browser/key/generate_key_pair.js ***!
  \*****************************************************************/
/*! exports provided: generateKeyPair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateKeyPair", function() { return generateKeyPair; });
/* harmony import */ var _runtime_generate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime/generate.js */ "QaxS");

async function generateKeyPair(alg, options) {
    return Object(_runtime_generate_js__WEBPACK_IMPORTED_MODULE_0__["generateKeyPair"])(alg, options);
}


/***/ }),

/***/ "jO9C":
/*!************************************************!*\
  !*** ./node_modules/crypto-js/pad-iso97971.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./cipher-core */ "OLod"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * ISO/IEC 9797-1 Padding Method 2.
	 */
	CryptoJS.pad.Iso97971 = {
	    pad: function (data, blockSize) {
	        // Add 0x80 byte
	        data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

	        // Zero pad the rest
	        CryptoJS.pad.ZeroPadding.pad(data, blockSize);
	    },

	    unpad: function (data) {
	        // Remove zero padding
	        CryptoJS.pad.ZeroPadding.unpad(data);

	        // Remove one more byte -- the 0x80 byte
	        data.sigBytes--;
	    }
	};


	return CryptoJS.pad.Iso97971;

}));

/***/ }),

/***/ "k303":
/*!******************************************************!*\
  !*** ./node_modules/jose/dist/browser/key/export.js ***!
  \******************************************************/
/*! exports provided: exportSPKI, exportPKCS8, exportJWK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportSPKI", function() { return exportSPKI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportPKCS8", function() { return exportPKCS8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportJWK", function() { return exportJWK; });
/* harmony import */ var _runtime_asn1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime/asn1.js */ "IpBm");
/* harmony import */ var _runtime_key_to_jwk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../runtime/key_to_jwk.js */ "n/1e");



async function exportSPKI(key) {
    return Object(_runtime_asn1_js__WEBPACK_IMPORTED_MODULE_0__["toSPKI"])(key);
}
async function exportPKCS8(key) {
    return Object(_runtime_asn1_js__WEBPACK_IMPORTED_MODULE_0__["toPKCS8"])(key);
}
async function exportJWK(key) {
    return Object(_runtime_key_to_jwk_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key);
}


/***/ }),

/***/ "kIlW":
/*!**********************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/random.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webcrypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webcrypto.js */ "hqmz");

/* harmony default export */ __webpack_exports__["default"] = (_webcrypto_js__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomValues.bind(_webcrypto_js__WEBPACK_IMPORTED_MODULE_0__["default"]));


/***/ }),

/***/ "kf/P":
/*!************************************************!*\
  !*** ./src/app/agentifai/open-alice-intent.ts ***!
  \************************************************/
/*! exports provided: OpenAliceIntent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenAliceIntent", function() { return OpenAliceIntent; });
var OpenAliceIntent;
(function (OpenAliceIntent) {
    OpenAliceIntent["UnlockContract"] = "UNLOCK_CONTRACT";
    OpenAliceIntent["MoratoriumForm"] = "MORATORIUM_FORM";
})(OpenAliceIntent || (OpenAliceIntent = {}));


/***/ }),

/***/ "lPiR":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha256.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
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
	            return ((n - (n | 0)) * 0x100000000) | 0;
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
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
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
	}(Math));


	return CryptoJS.SHA256;

}));

/***/ }),

/***/ "lpQU":
/*!***************************************************!*\
  !*** ./src/app/services/public/public.service.ts ***!
  \***************************************************/
/*! exports provided: PublicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicService", function() { return PublicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ "oZWX");



let PublicService = class PublicService {
    constructor(api) {
        this.api = api;
        this.LOGIN_SERVICE = "system/security/authentications/basic";
    }
    login(username, password, withFingerprint, deviceToken) {
        let auth;
        if (withFingerprint) {
            auth = btoa(username + ":" + password + ":" + deviceToken);
        }
        else {
            auth = btoa(username + ":" + password);
        }
        return this.api.postLogin(auth, this.LOGIN_SERVICE + "?u=" + username + "&includeAccountsInResponse=" + "false", withFingerprint);
    }
};
PublicService.ctorParameters = () => [
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["Api"] }
];
PublicService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PublicService);



/***/ }),

/***/ "m2FS":
/*!******************************************************!*\
  !*** ./node_modules/jose/dist/browser/jwt/verify.js ***!
  \******************************************************/
/*! exports provided: jwtVerify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtVerify", function() { return jwtVerify; });
/* harmony import */ var _jws_compact_verify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jws/compact/verify.js */ "e4TT");
/* harmony import */ var _lib_jwt_claims_set_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/jwt_claims_set.js */ "rCIK");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/errors.js */ "StPg");



async function jwtVerify(jwt, key, options) {
    var _a;
    const verified = await Object(_jws_compact_verify_js__WEBPACK_IMPORTED_MODULE_0__["compactVerify"])(jwt, key, options);
    if (((_a = verified.protectedHeader.crit) === null || _a === void 0 ? void 0 : _a.includes('b64')) && verified.protectedHeader.b64 === false) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWTInvalid"]('JWTs MUST NOT use unencoded payload');
    }
    const payload = Object(_lib_jwt_claims_set_js__WEBPACK_IMPORTED_MODULE_1__["default"])(verified.protectedHeader, verified.payload, options);
    const result = { payload, protectedHeader: verified.protectedHeader };
    if (typeof key === 'function') {
        return { ...result, key: verified.key };
    }
    return result;
}


/***/ }),

/***/ "n/1e":
/*!**************************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/key_to_jwk.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webcrypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webcrypto.js */ "hqmz");
/* harmony import */ var _lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/invalid_key_input.js */ "wZa+");
/* harmony import */ var _base64url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base64url.js */ "KjJ5");
/* harmony import */ var _is_key_like_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is_key_like.js */ "H/EN");




const keyToJWK = async (key) => {
    if (key instanceof Uint8Array) {
        return {
            kty: 'oct',
            k: Object(_base64url_js__WEBPACK_IMPORTED_MODULE_2__["encode"])(key),
        };
    }
    if (!Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_0__["isCryptoKey"])(key)) {
        throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key, ..._is_key_like_js__WEBPACK_IMPORTED_MODULE_3__["types"], 'Uint8Array'));
    }
    if (!key.extractable) {
        throw new TypeError('non-extractable CryptoKey cannot be exported as a JWK');
    }
    const { ext, key_ops, alg, use, ...jwk } = await _webcrypto_js__WEBPACK_IMPORTED_MODULE_0__["default"].subtle.exportKey('jwk', key);
    return jwk;
};
/* harmony default export */ __webpack_exports__["default"] = (keyToJWK);


/***/ }),

/***/ "n8OJ":
/*!****************************************************************!*\
  !*** ./node_modules/jose/dist/browser/jws/flattened/verify.js ***!
  \****************************************************************/
/*! exports provided: flattenedVerify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenedVerify", function() { return flattenedVerify; });
/* harmony import */ var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../runtime/base64url.js */ "KjJ5");
/* harmony import */ var _runtime_verify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../runtime/verify.js */ "4inf");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/errors.js */ "StPg");
/* harmony import */ var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/buffer_utils.js */ "xpfA");
/* harmony import */ var _lib_is_disjoint_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/is_disjoint.js */ "yopU");
/* harmony import */ var _lib_is_object_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/is_object.js */ "2fVw");
/* harmony import */ var _lib_check_key_type_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/check_key_type.js */ "ceW5");
/* harmony import */ var _lib_validate_crit_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/validate_crit.js */ "ElMP");
/* harmony import */ var _lib_validate_algorithms_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/validate_algorithms.js */ "JnDH");









async function flattenedVerify(jws, key, options) {
    var _a;
    if (!Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_5__["default"])(jws)) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('Flattened JWS must be an object');
    }
    if (jws.protected === undefined && jws.header === undefined) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('Flattened JWS must have either of the "protected" or "header" members');
    }
    if (jws.protected !== undefined && typeof jws.protected !== 'string') {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('JWS Protected Header incorrect type');
    }
    if (jws.payload === undefined) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('JWS Payload missing');
    }
    if (typeof jws.signature !== 'string') {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('JWS Signature missing or incorrect type');
    }
    if (jws.header !== undefined && !Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_5__["default"])(jws.header)) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('JWS Unprotected Header incorrect type');
    }
    let parsedProt = {};
    if (jws.protected) {
        const protectedHeader = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(jws.protected);
        try {
            parsedProt = JSON.parse(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_3__["decoder"].decode(protectedHeader));
        }
        catch (_b) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('JWS Protected Header is invalid');
        }
    }
    if (!Object(_lib_is_disjoint_js__WEBPACK_IMPORTED_MODULE_4__["default"])(parsedProt, jws.header)) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('JWS Protected and JWS Unprotected Header Parameter names must be disjoint');
    }
    const joseHeader = {
        ...parsedProt,
        ...jws.header,
    };
    const extensions = Object(_lib_validate_crit_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"], new Map([['b64', true]]), options === null || options === void 0 ? void 0 : options.crit, parsedProt, joseHeader);
    let b64 = true;
    if (extensions.has('b64')) {
        b64 = parsedProt.b64;
        if (typeof b64 !== 'boolean') {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
        }
    }
    const { alg } = joseHeader;
    if (typeof alg !== 'string' || !alg) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    }
    const algorithms = options && Object(_lib_validate_algorithms_js__WEBPACK_IMPORTED_MODULE_8__["default"])('algorithms', options.algorithms);
    if (algorithms && !algorithms.has(alg)) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JOSEAlgNotAllowed"]('"alg" (Algorithm) Header Parameter not allowed');
    }
    if (b64) {
        if (typeof jws.payload !== 'string') {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('JWS Payload must be a string');
        }
    }
    else if (typeof jws.payload !== 'string' && !(jws.payload instanceof Uint8Array)) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSInvalid"]('JWS Payload must be a string or an Uint8Array instance');
    }
    let resolvedKey = false;
    if (typeof key === 'function') {
        key = await key(parsedProt, jws);
        resolvedKey = true;
    }
    Object(_lib_check_key_type_js__WEBPACK_IMPORTED_MODULE_6__["default"])(alg, key, 'verify');
    const data = Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_3__["concat"])(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_3__["encoder"].encode((_a = jws.protected) !== null && _a !== void 0 ? _a : ''), _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_3__["encoder"].encode('.'), typeof jws.payload === 'string' ? _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_3__["encoder"].encode(jws.payload) : jws.payload);
    const signature = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(jws.signature);
    const verified = await Object(_runtime_verify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(alg, key, signature, data);
    if (!verified) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWSSignatureVerificationFailed"]();
    }
    let payload;
    if (b64) {
        payload = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(jws.payload);
    }
    else if (typeof jws.payload === 'string') {
        payload = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_3__["encoder"].encode(jws.payload);
    }
    else {
        payload = jws.payload;
    }
    const result = { payload };
    if (jws.protected !== undefined) {
        result.protectedHeader = parsedProt;
    }
    if (jws.header !== undefined) {
        result.unprotectedHeader = jws.header;
    }
    if (resolvedKey) {
        return { ...result, key };
    }
    return result;
}


/***/ }),

/***/ "ncFE":
/*!*******************************************************************************!*\
  !*** ./src/app/agentifai/models/widget-config/agentifai-widget-dimensions.ts ***!
  \*******************************************************************************/
/*! exports provided: AgentifaiWidgetDimensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentifaiWidgetDimensions", function() { return AgentifaiWidgetDimensions; });
class AgentifaiWidgetDimensions {
    constructor(horizontalAlignment, horizontalMargin, verticalAlignment, verticalMargin, size) {
        this.horizontalAlignment = horizontalAlignment;
        this.horizontalMargin = horizontalMargin;
        this.verticalAlignment = verticalAlignment;
        this.verticalMargin = verticalMargin;
        this.size = size;
    }
}


/***/ }),

/***/ "oRuE":
/*!************************************************!*\
  !*** ./node_modules/crypto-js/pad-iso10126.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./cipher-core */ "OLod"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * ISO 10126 padding strategy.
	 */
	CryptoJS.pad.Iso10126 = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	        // Pad
	        data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
	             concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	return CryptoJS.pad.Iso10126;

}));

/***/ }),

/***/ "oZgo":
/*!*********************************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/timing_safe_equal.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const timingSafeEqual = (a, b) => {
    if (!(a instanceof Uint8Array)) {
        throw new TypeError('First argument must be a buffer');
    }
    if (!(b instanceof Uint8Array)) {
        throw new TypeError('Second argument must be a buffer');
    }
    if (a.length !== b.length) {
        throw new TypeError('Input buffers must have the same length');
    }
    const len = a.length;
    let out = 0;
    let i = -1;
    while (++i < len) {
        out |= a[i] ^ b[i];
    }
    return out === 0;
};
/* harmony default export */ __webpack_exports__["default"] = (timingSafeEqual);


/***/ }),

/***/ "pA7S":
/*!*********************************************!*\
  !*** ./node_modules/crypto-js/tripledes.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./enc-base64 */ "ETIr"), __webpack_require__(/*! ./md5 */ "cv67"), __webpack_require__(/*! ./evpkdf */ "K3mO"), __webpack_require__(/*! ./cipher-core */ "OLod"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Permuted Choice 1 constants
	    var PC1 = [
	        57, 49, 41, 33, 25, 17, 9,  1,
	        58, 50, 42, 34, 26, 18, 10, 2,
	        59, 51, 43, 35, 27, 19, 11, 3,
	        60, 52, 44, 36, 63, 55, 47, 39,
	        31, 23, 15, 7,  62, 54, 46, 38,
	        30, 22, 14, 6,  61, 53, 45, 37,
	        29, 21, 13, 5,  28, 20, 12, 4
	    ];

	    // Permuted Choice 2 constants
	    var PC2 = [
	        14, 17, 11, 24, 1,  5,
	        3,  28, 15, 6,  21, 10,
	        23, 19, 12, 4,  26, 8,
	        16, 7,  27, 20, 13, 2,
	        41, 52, 31, 37, 47, 55,
	        30, 40, 51, 45, 33, 48,
	        44, 49, 39, 56, 34, 53,
	        46, 42, 50, 36, 29, 32
	    ];

	    // Cumulative bit shift constants
	    var BIT_SHIFTS = [1,  2,  4,  6,  8,  10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

	    // SBOXes and round permutation constants
	    var SBOX_P = [
	        {
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
	        },
	        {
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
	        },
	        {
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
	        },
	        {
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
	        },
	        {
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
	        },
	        {
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
	        },
	        {
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
	        },
	        {
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
	        }
	    ];

	    // Masks that select the SBOX input
	    var SBOX_MASK = [
	        0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
	        0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f
	    ];

	    /**
	     * DES block cipher algorithm.
	     */
	    var DES = C_algo.DES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;

	            // Select 56 bits according to PC1
	            var keyBits = [];
	            for (var i = 0; i < 56; i++) {
	                var keyBitPos = PC1[i] - 1;
	                keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - keyBitPos % 32)) & 1;
	            }

	            // Assemble 16 subkeys
	            var subKeys = this._subKeys = [];
	            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
	                // Create subkey
	                var subKey = subKeys[nSubKey] = [];

	                // Shortcut
	                var bitShift = BIT_SHIFTS[nSubKey];

	                // Select 48 bits according to PC2
	                for (var i = 0; i < 24; i++) {
	                    // Select from the left 28 key bits
	                    subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - i % 6);

	                    // Select from the right 28 key bits
	                    subKey[4 + ((i / 6) | 0)] |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)] << (31 - i % 6);
	                }

	                // Since each subkey is applied to an expanded 32-bit input,
	                // the subkey can be broken into 8 values scaled to 32-bits,
	                // which allows the key to be used without expansion
	                subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
	                for (var i = 1; i < 7; i++) {
	                    subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
	                }
	                subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
	            }

	            // Compute inverse subkeys
	            var invSubKeys = this._invSubKeys = [];
	            for (var i = 0; i < 16; i++) {
	                invSubKeys[i] = subKeys[15 - i];
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._subKeys);
	        },

	        decryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._invSubKeys);
	        },

	        _doCryptBlock: function (M, offset, subKeys) {
	            // Get input
	            this._lBlock = M[offset];
	            this._rBlock = M[offset + 1];

	            // Initial permutation
	            exchangeLR.call(this, 4,  0x0f0f0f0f);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeLR.call(this, 1,  0x55555555);

	            // Rounds
	            for (var round = 0; round < 16; round++) {
	                // Shortcuts
	                var subKey = subKeys[round];
	                var lBlock = this._lBlock;
	                var rBlock = this._rBlock;

	                // Feistel function
	                var f = 0;
	                for (var i = 0; i < 8; i++) {
	                    f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
	                }
	                this._lBlock = rBlock;
	                this._rBlock = lBlock ^ f;
	            }

	            // Undo swap from last round
	            var t = this._lBlock;
	            this._lBlock = this._rBlock;
	            this._rBlock = t;

	            // Final permutation
	            exchangeLR.call(this, 1,  0x55555555);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeLR.call(this, 4,  0x0f0f0f0f);

	            // Set output
	            M[offset] = this._lBlock;
	            M[offset + 1] = this._rBlock;
	        },

	        keySize: 64/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    // Swap bits across the left and right words
	    function exchangeLR(offset, mask) {
	        var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
	        this._rBlock ^= t;
	        this._lBlock ^= t << offset;
	    }

	    function exchangeRL(offset, mask) {
	        var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
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
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;
	            // Make sure the key length is valid (64, 128 or >= 192 bit)
	            if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
	                throw new Error('Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.');
	            }

	            // Extend the key according to the keying options defined in 3DES standard
	            var key1 = keyWords.slice(0, 2);
	            var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
	            var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);

	            // Create DES instances
	            this._des1 = DES.createEncryptor(WordArray.create(key1));
	            this._des2 = DES.createEncryptor(WordArray.create(key2));
	            this._des3 = DES.createEncryptor(WordArray.create(key3));
	        },

	        encryptBlock: function (M, offset) {
	            this._des1.encryptBlock(M, offset);
	            this._des2.decryptBlock(M, offset);
	            this._des3.encryptBlock(M, offset);
	        },

	        decryptBlock: function (M, offset) {
	            this._des3.decryptBlock(M, offset);
	            this._des2.encryptBlock(M, offset);
	            this._des1.decryptBlock(M, offset);
	        },

	        keySize: 192/32,

	        ivSize: 64/32,

	        blockSize: 64/32
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
	}());


	return CryptoJS.TripleDES;

}));

/***/ }),

/***/ "qBft":
/*!************************************************!*\
  !*** ./node_modules/crypto-js/pad-ansix923.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./cipher-core */ "OLod"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * ANSI X.923 padding strategy.
	 */
	CryptoJS.pad.AnsiX923 = {
	    pad: function (data, blockSize) {
	        // Shortcuts
	        var dataSigBytes = data.sigBytes;
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

	        // Compute last byte position
	        var lastBytePos = dataSigBytes + nPaddingBytes - 1;

	        // Pad
	        data.clamp();
	        data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
	        data.sigBytes += nPaddingBytes;
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	return CryptoJS.pad.Ansix923;

}));

/***/ }),

/***/ "qIkZ":
/*!**********************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/ecdhes.js ***!
  \**********************************************************/
/*! exports provided: deriveKey, generateEpk, ecdhAllowed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deriveKey", function() { return deriveKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateEpk", function() { return generateEpk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ecdhAllowed", function() { return ecdhAllowed; });
/* harmony import */ var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/buffer_utils.js */ "xpfA");
/* harmony import */ var _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webcrypto.js */ "hqmz");
/* harmony import */ var _lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/crypto_key.js */ "D3C9");
/* harmony import */ var _lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/invalid_key_input.js */ "wZa+");
/* harmony import */ var _is_key_like_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is_key_like.js */ "H/EN");





async function deriveKey(publicKey, privateKey, algorithm, keyLength, apu = new Uint8Array(0), apv = new Uint8Array(0)) {
    if (!Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["isCryptoKey"])(publicKey)) {
        throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_3__["default"])(publicKey, ..._is_key_like_js__WEBPACK_IMPORTED_MODULE_4__["types"]));
    }
    Object(_lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_2__["checkEncCryptoKey"])(publicKey, 'ECDH');
    if (!Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["isCryptoKey"])(privateKey)) {
        throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_3__["default"])(privateKey, ..._is_key_like_js__WEBPACK_IMPORTED_MODULE_4__["types"]));
    }
    Object(_lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_2__["checkEncCryptoKey"])(privateKey, 'ECDH', 'deriveBits');
    const value = Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["concat"])(Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["lengthAndInput"])(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["encoder"].encode(algorithm)), Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["lengthAndInput"])(apu), Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["lengthAndInput"])(apv), Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["uint32be"])(keyLength));
    const sharedSecret = new Uint8Array(await _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.deriveBits({
        name: 'ECDH',
        public: publicKey,
    }, privateKey, Math.ceil(parseInt(privateKey.algorithm.namedCurve.slice(-3), 10) / 8) << 3));
    return Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["concatKdf"])(sharedSecret, keyLength, value);
}
async function generateEpk(key) {
    if (!Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["isCryptoKey"])(key)) {
        throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_3__["default"])(key, ..._is_key_like_js__WEBPACK_IMPORTED_MODULE_4__["types"]));
    }
    return _webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["default"].subtle.generateKey(key.algorithm, true, ['deriveBits']);
}
function ecdhAllowed(key) {
    if (!Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_1__["isCryptoKey"])(key)) {
        throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_3__["default"])(key, ..._is_key_like_js__WEBPACK_IMPORTED_MODULE_4__["types"]));
    }
    return ['P-256', 'P-384', 'P-521'].includes(key.algorithm.namedCurve);
}


/***/ }),

/***/ "qM6L":
/*!*********************************************!*\
  !*** ./node_modules/crypto-js/enc-utf16.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"));
	}
	else {}
}(this, function (CryptoJS) {

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
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
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
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
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
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
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
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    function swapEndian(word) {
	        return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
	    }
	}());


	return CryptoJS.enc.Utf16;

}));

/***/ }),

/***/ "qW6o":
/*!***************************************************!*\
  !*** ./node_modules/jose/dist/browser/lib/cek.js ***!
  \***************************************************/
/*! exports provided: bitLength, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bitLength", function() { return bitLength; });
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/errors.js */ "StPg");
/* harmony import */ var _runtime_random_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../runtime/random.js */ "kIlW");


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
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JOSENotSupported"](`Unsupported JWE Algorithm: ${alg}`);
    }
}
/* harmony default export */ __webpack_exports__["default"] = ((alg) => Object(_runtime_random_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new Uint8Array(bitLength(alg) >> 3)));


/***/ }),

/***/ "qu8F":
/*!****************************************************!*\
  !*** ./node_modules/crypto-js/mode-ctr-gladman.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./cipher-core */ "OLod"));
	}
	else {}
}(this, function (CryptoJS) {

	/** @preserve
	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
	 * derived from CryptoJS.mode.CTR
	 * Jan Hruby jhruby.web@gmail.com
	 */
	CryptoJS.mode.CTRGladman = (function () {
	    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

		function incWord(word)
		{
			if (((word >> 24) & 0xff) === 0xff) { //overflow
			var b1 = (word >> 16)&0xff;
			var b2 = (word >> 8)&0xff;
			var b3 = word & 0xff;

			if (b1 === 0xff) // overflow b1
			{
			b1 = 0;
			if (b2 === 0xff)
			{
				b2 = 0;
				if (b3 === 0xff)
				{
					b3 = 0;
				}
				else
				{
					++b3;
				}
			}
			else
			{
				++b2;
			}
			}
			else
			{
			++b1;
			}

			word = 0;
			word += (b1 << 16);
			word += (b2 << 8);
			word += b3;
			}
			else
			{
			word += (0x01 << 24);
			}
			return word;
		}

		function incCounter(counter)
		{
			if ((counter[0] = incWord(counter[0])) === 0)
			{
				// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
				counter[1] = incWord(counter[1]);
			}
			return counter;
		}

	    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }

				incCounter(counter);

				var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTRGladman.Decryptor = Encryptor;

	    return CTRGladman;
	}());




	return CryptoJS.mode.CTRGladman;

}));

/***/ }),

/***/ "rCIK":
/*!**************************************************************!*\
  !*** ./node_modules/jose/dist/browser/lib/jwt_claims_set.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/errors.js */ "StPg");
/* harmony import */ var _buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffer_utils.js */ "xpfA");
/* harmony import */ var _epoch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./epoch.js */ "7SCF");
/* harmony import */ var _secs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./secs.js */ "Sblm");
/* harmony import */ var _is_object_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is_object.js */ "2fVw");





const normalizeTyp = (value) => value.toLowerCase().replace(/^application\//, '');
const checkAudiencePresence = (audPayload, audOption) => {
    if (typeof audPayload === 'string') {
        return audOption.includes(audPayload);
    }
    if (Array.isArray(audPayload)) {
        return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
    }
    return false;
};
/* harmony default export */ __webpack_exports__["default"] = ((protectedHeader, encodedPayload, options = {}) => {
    const { typ } = options;
    if (typ &&
        (typeof protectedHeader.typ !== 'string' ||
            normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWTClaimValidationFailed"]('unexpected "typ" JWT header value', 'typ', 'check_failed');
    }
    let payload;
    try {
        payload = JSON.parse(_buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__["decoder"].decode(encodedPayload));
    }
    catch (_a) {
    }
    if (!Object(_is_object_js__WEBPACK_IMPORTED_MODULE_4__["default"])(payload)) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWTInvalid"]('JWT Claims Set must be a top-level JSON object');
    }
    const { issuer } = options;
    if (issuer && !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWTClaimValidationFailed"]('unexpected "iss" claim value', 'iss', 'check_failed');
    }
    const { subject } = options;
    if (subject && payload.sub !== subject) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWTClaimValidationFailed"]('unexpected "sub" claim value', 'sub', 'check_failed');
    }
    const { audience } = options;
    if (audience &&
        !checkAudiencePresence(payload.aud, typeof audience === 'string' ? [audience] : audience)) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWTClaimValidationFailed"]('unexpected "aud" claim value', 'aud', 'check_failed');
    }
    let tolerance;
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
    const { currentDate } = options;
    const now = Object(_epoch_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentDate || new Date());
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
        const age = now - payload.iat;
        const max = typeof options.maxTokenAge === 'number' ? options.maxTokenAge : Object(_secs_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options.maxTokenAge);
        if (age - tolerance > max) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWTExpired"]('"iat" claim timestamp check failed (too far in the past)', 'iat', 'check_failed');
        }
        if (age < 0 - tolerance) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JWTClaimValidationFailed"]('"iat" claim timestamp check failed (it should be in the past)', 'iat', 'check_failed');
        }
    }
    return payload;
});


/***/ }),

/***/ "spAk":
/*!**************************************************!*\
  !*** ./node_modules/jose/dist/browser/lib/iv.js ***!
  \**************************************************/
/*! exports provided: bitLength, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bitLength", function() { return bitLength; });
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/errors.js */ "StPg");
/* harmony import */ var _runtime_random_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../runtime/random.js */ "kIlW");


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
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_0__["JOSENotSupported"](`Unsupported JWE Algorithm: ${alg}`);
    }
}
/* harmony default export */ __webpack_exports__["default"] = ((alg) => Object(_runtime_random_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new Uint8Array(bitLength(alg) >> 3)));


/***/ }),

/***/ "tOAC":
/*!*******************************************************!*\
  !*** ./node_modules/jose/dist/browser/jwt/decrypt.js ***!
  \*******************************************************/
/*! exports provided: jwtDecrypt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtDecrypt", function() { return jwtDecrypt; });
/* harmony import */ var _jwe_compact_decrypt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jwe/compact/decrypt.js */ "xhLL");
/* harmony import */ var _lib_jwt_claims_set_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/jwt_claims_set.js */ "rCIK");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/errors.js */ "StPg");



async function jwtDecrypt(jwt, key, options) {
    const decrypted = await Object(_jwe_compact_decrypt_js__WEBPACK_IMPORTED_MODULE_0__["compactDecrypt"])(jwt, key, options);
    const payload = Object(_lib_jwt_claims_set_js__WEBPACK_IMPORTED_MODULE_1__["default"])(decrypted.protectedHeader, decrypted.plaintext, options);
    const { protectedHeader } = decrypted;
    if (protectedHeader.iss !== undefined && protectedHeader.iss !== payload.iss) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWTClaimValidationFailed"]('replicated "iss" claim header parameter mismatch', 'iss', 'mismatch');
    }
    if (protectedHeader.sub !== undefined && protectedHeader.sub !== payload.sub) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWTClaimValidationFailed"]('replicated "sub" claim header parameter mismatch', 'sub', 'mismatch');
    }
    if (protectedHeader.aud !== undefined &&
        JSON.stringify(protectedHeader.aud) !== JSON.stringify(payload.aud)) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWTClaimValidationFailed"]('replicated "aud" claim header parameter mismatch', 'aud', 'mismatch');
    }
    const result = { payload, protectedHeader };
    if (typeof key === 'function') {
        return { ...result, key: decrypted.key };
    }
    return result;
}


/***/ }),

/***/ "tj0O":
/*!*********************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/bogus.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const bogusWebCrypto = [
    { hash: 'SHA-256', name: 'HMAC' },
    true,
    ['sign'],
];
/* harmony default export */ __webpack_exports__["default"] = (bogusWebCrypto);


/***/ }),

/***/ "uGsb":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha384.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./x64-core */ "MlIO"), __webpack_require__(/*! ./sha512 */ "1uat"));
	}
	else {}
}(this, function (CryptoJS) {

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
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
	                new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
	                new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
	                new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)
	            ]);
	        },

	        _doFinalize: function () {
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
	}());


	return CryptoJS.SHA384;

}));

/***/ }),

/***/ "uGxW":
/*!*************************************************!*\
  !*** ./node_modules/crypto-js/pad-nopadding.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./cipher-core */ "OLod"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * A noop padding strategy.
	 */
	CryptoJS.pad.NoPadding = {
	    pad: function () {
	    },

	    unpad: function () {
	    }
	};


	return CryptoJS.pad.NoPadding;

}));

/***/ }),

/***/ "v9/r":
/*!***********************************************************!*\
  !*** ./node_modules/jose/dist/browser/runtime/decrypt.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/buffer_utils.js */ "xpfA");
/* harmony import */ var _lib_check_iv_length_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/check_iv_length.js */ "g1Po");
/* harmony import */ var _check_cek_length_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check_cek_length.js */ "KMcw");
/* harmony import */ var _timing_safe_equal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timing_safe_equal.js */ "oZgo");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/errors.js */ "StPg");
/* harmony import */ var _webcrypto_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webcrypto.js */ "hqmz");
/* harmony import */ var _lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/crypto_key.js */ "D3C9");
/* harmony import */ var _lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/invalid_key_input.js */ "wZa+");
/* harmony import */ var _is_key_like_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./is_key_like.js */ "H/EN");









async function cbcDecrypt(enc, cek, ciphertext, iv, tag, aad) {
    if (!(cek instanceof Uint8Array)) {
        throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_7__["default"])(cek, 'Uint8Array'));
    }
    const keySize = parseInt(enc.slice(1, 4), 10);
    const encKey = await _webcrypto_js__WEBPACK_IMPORTED_MODULE_5__["default"].subtle.importKey('raw', cek.subarray(keySize >> 3), 'AES-CBC', false, ['decrypt']);
    const macKey = await _webcrypto_js__WEBPACK_IMPORTED_MODULE_5__["default"].subtle.importKey('raw', cek.subarray(0, keySize >> 3), {
        hash: `SHA-${keySize << 1}`,
        name: 'HMAC',
    }, false, ['sign']);
    const macData = Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["concat"])(aad, iv, ciphertext, Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["uint64be"])(aad.length << 3));
    const expectedTag = new Uint8Array((await _webcrypto_js__WEBPACK_IMPORTED_MODULE_5__["default"].subtle.sign('HMAC', macKey, macData)).slice(0, keySize >> 3));
    let macCheckPassed;
    try {
        macCheckPassed = Object(_timing_safe_equal_js__WEBPACK_IMPORTED_MODULE_3__["default"])(tag, expectedTag);
    }
    catch (_a) {
    }
    if (!macCheckPassed) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_4__["JWEDecryptionFailed"]();
    }
    let plaintext;
    try {
        plaintext = new Uint8Array(await _webcrypto_js__WEBPACK_IMPORTED_MODULE_5__["default"].subtle.decrypt({ iv, name: 'AES-CBC' }, encKey, ciphertext));
    }
    catch (_b) {
    }
    if (!plaintext) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_4__["JWEDecryptionFailed"]();
    }
    return plaintext;
}
async function gcmDecrypt(enc, cek, ciphertext, iv, tag, aad) {
    let encKey;
    if (cek instanceof Uint8Array) {
        encKey = await _webcrypto_js__WEBPACK_IMPORTED_MODULE_5__["default"].subtle.importKey('raw', cek, 'AES-GCM', false, ['decrypt']);
    }
    else {
        Object(_lib_crypto_key_js__WEBPACK_IMPORTED_MODULE_6__["checkEncCryptoKey"])(cek, enc, 'decrypt');
        encKey = cek;
    }
    try {
        return new Uint8Array(await _webcrypto_js__WEBPACK_IMPORTED_MODULE_5__["default"].subtle.decrypt({
            additionalData: aad,
            iv,
            name: 'AES-GCM',
            tagLength: 128,
        }, encKey, Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_0__["concat"])(ciphertext, tag)));
    }
    catch (_a) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_4__["JWEDecryptionFailed"]();
    }
}
const decrypt = async (enc, cek, ciphertext, iv, tag, aad) => {
    if (!Object(_webcrypto_js__WEBPACK_IMPORTED_MODULE_5__["isCryptoKey"])(cek) && !(cek instanceof Uint8Array)) {
        throw new TypeError(Object(_lib_invalid_key_input_js__WEBPACK_IMPORTED_MODULE_7__["default"])(cek, ..._is_key_like_js__WEBPACK_IMPORTED_MODULE_8__["types"], 'Uint8Array'));
    }
    Object(_lib_check_iv_length_js__WEBPACK_IMPORTED_MODULE_1__["default"])(enc, iv);
    switch (enc) {
        case 'A128CBC-HS256':
        case 'A192CBC-HS384':
        case 'A256CBC-HS512':
            if (cek instanceof Uint8Array)
                Object(_check_cek_length_js__WEBPACK_IMPORTED_MODULE_2__["default"])(cek, parseInt(enc.slice(-3), 10));
            return cbcDecrypt(enc, cek, ciphertext, iv, tag, aad);
        case 'A128GCM':
        case 'A192GCM':
        case 'A256GCM':
            if (cek instanceof Uint8Array)
                Object(_check_cek_length_js__WEBPACK_IMPORTED_MODULE_2__["default"])(cek, parseInt(enc.slice(1, 4), 10));
            return gcmDecrypt(enc, cek, ciphertext, iv, tag, aad);
        default:
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_4__["JOSENotSupported"]('Unsupported JWE Content Encryption Algorithm');
    }
};
/* harmony default export */ __webpack_exports__["default"] = (decrypt);


/***/ }),

/***/ "w7YG":
/*!***************************************!*\
  !*** ./node_modules/crypto-js/rc4.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./enc-base64 */ "ETIr"), __webpack_require__(/*! ./md5 */ "cv67"), __webpack_require__(/*! ./evpkdf */ "K3mO"), __webpack_require__(/*! ./cipher-core */ "OLod"));
	}
	else {}
}(this, function (CryptoJS) {

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
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;
	            var keySigBytes = key.sigBytes;

	            // Init sbox
	            var S = this._S = [];
	            for (var i = 0; i < 256; i++) {
	                S[i] = i;
	            }

	            // Key setup
	            for (var i = 0, j = 0; i < 256; i++) {
	                var keyByteIndex = i % keySigBytes;
	                var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

	                j = (j + S[i] + keyByte) % 256;

	                // Swap
	                var t = S[i];
	                S[i] = S[j];
	                S[j] = t;
	            }

	            // Counters
	            this._i = this._j = 0;
	        },

	        _doProcessBlock: function (M, offset) {
	            M[offset] ^= generateKeystreamWord.call(this);
	        },

	        keySize: 256/32,

	        ivSize: 0
	    });

	    function generateKeystreamWord() {
	        // Shortcuts
	        var S = this._S;
	        var i = this._i;
	        var j = this._j;

	        // Generate keystream word
	        var keystreamWord = 0;
	        for (var n = 0; n < 4; n++) {
	            i = (i + 1) % 256;
	            j = (j + S[i]) % 256;

	            // Swap
	            var t = S[i];
	            S[i] = S[j];
	            S[j] = t;

	            keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
	        }

	        // Update counters
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

	        _doReset: function () {
	            RC4._doReset.call(this);

	            // Drop
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
	}());


	return CryptoJS.RC4;

}));

/***/ }),

/***/ "wZa+":
/*!*****************************************************************!*\
  !*** ./node_modules/jose/dist/browser/lib/invalid_key_input.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((actual, ...types) => {
    let msg = 'Key must be ';
    if (types.length > 2) {
        const last = types.pop();
        msg += `one of type ${types.join(', ')}, or ${last}.`;
    }
    else if (types.length === 2) {
        msg += `one of type ${types[0]} or ${types[1]}.`;
    }
    else {
        msg += `of type ${types[0]}.`;
    }
    if (actual == null) {
        msg += ` Received ${actual}`;
    }
    else if (typeof actual === 'function' && actual.name) {
        msg += ` Received function ${actual.name}`;
    }
    else if (typeof actual === 'object' && actual != null) {
        if (actual.constructor && actual.constructor.name) {
            msg += ` Received an instance of ${actual.constructor.name}`;
        }
    }
    return msg;
});


/***/ }),

/***/ "wZgz":
/*!***************************************!*\
  !*** ./node_modules/crypto-js/aes.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"), __webpack_require__(/*! ./enc-base64 */ "ETIr"), __webpack_require__(/*! ./md5 */ "cv67"), __webpack_require__(/*! ./evpkdf */ "K3mO"), __webpack_require__(/*! ./cipher-core */ "OLod"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Lookup tables
	    var SBOX = [];
	    var INV_SBOX = [];
	    var SUB_MIX_0 = [];
	    var SUB_MIX_1 = [];
	    var SUB_MIX_2 = [];
	    var SUB_MIX_3 = [];
	    var INV_SUB_MIX_0 = [];
	    var INV_SUB_MIX_1 = [];
	    var INV_SUB_MIX_2 = [];
	    var INV_SUB_MIX_3 = [];

	    // Compute lookup tables
	    (function () {
	        // Compute double table
	        var d = [];
	        for (var i = 0; i < 256; i++) {
	            if (i < 128) {
	                d[i] = i << 1;
	            } else {
	                d[i] = (i << 1) ^ 0x11b;
	            }
	        }

	        // Walk GF(2^8)
	        var x = 0;
	        var xi = 0;
	        for (var i = 0; i < 256; i++) {
	            // Compute sbox
	            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
	            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
	            SBOX[x] = sx;
	            INV_SBOX[sx] = x;

	            // Compute multiplication
	            var x2 = d[x];
	            var x4 = d[x2];
	            var x8 = d[x4];

	            // Compute sub bytes, mix columns tables
	            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
	            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
	            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
	            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
	            SUB_MIX_3[x] = t;

	            // Compute inv sub bytes, inv mix columns tables
	            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
	            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
	            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
	            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
	            INV_SUB_MIX_3[sx] = t;

	            // Compute next counter
	            if (!x) {
	                x = xi = 1;
	            } else {
	                x = x2 ^ d[d[d[x8 ^ x2]]];
	                xi ^= d[d[xi]];
	            }
	        }
	    }());

	    // Precomputed Rcon lookup
	    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

	    /**
	     * AES block cipher algorithm.
	     */
	    var AES = C_algo.AES = BlockCipher.extend({
	        _doReset: function () {
	            var t;

	            // Skip reset of nRounds has been set before and key did not change
	            if (this._nRounds && this._keyPriorReset === this._key) {
	                return;
	            }

	            // Shortcuts
	            var key = this._keyPriorReset = this._key;
	            var keyWords = key.words;
	            var keySize = key.sigBytes / 4;

	            // Compute number of rounds
	            var nRounds = this._nRounds = keySize + 6;

	            // Compute number of key schedule rows
	            var ksRows = (nRounds + 1) * 4;

	            // Compute key schedule
	            var keySchedule = this._keySchedule = [];
	            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
	                if (ksRow < keySize) {
	                    keySchedule[ksRow] = keyWords[ksRow];
	                } else {
	                    t = keySchedule[ksRow - 1];

	                    if (!(ksRow % keySize)) {
	                        // Rot word
	                        t = (t << 8) | (t >>> 24);

	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

	                        // Mix Rcon
	                        t ^= RCON[(ksRow / keySize) | 0] << 24;
	                    } else if (keySize > 6 && ksRow % keySize == 4) {
	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
	                    }

	                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
	                }
	            }

	            // Compute inv key schedule
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
	                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
	                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
	                }
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
	        },

	        decryptBlock: function (M, offset) {
	            // Swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;

	            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

	            // Inv swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;
	        },

	        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
	            // Shortcut
	            var nRounds = this._nRounds;

	            // Get input, add round key
	            var s0 = M[offset]     ^ keySchedule[0];
	            var s1 = M[offset + 1] ^ keySchedule[1];
	            var s2 = M[offset + 2] ^ keySchedule[2];
	            var s3 = M[offset + 3] ^ keySchedule[3];

	            // Key schedule row counter
	            var ksRow = 4;

	            // Rounds
	            for (var round = 1; round < nRounds; round++) {
	                // Shift rows, sub bytes, mix columns, add round key
	                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
	                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
	                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
	                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

	                // Update state
	                s0 = t0;
	                s1 = t1;
	                s2 = t2;
	                s3 = t3;
	            }

	            // Shift rows, sub bytes, add round key
	            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
	            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
	            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
	            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

	            // Set output
	            M[offset]     = t0;
	            M[offset + 1] = t1;
	            M[offset + 2] = t2;
	            M[offset + 3] = t3;
	        },

	        keySize: 256/32
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
	}());


	return CryptoJS.AES;

}));

/***/ }),

/***/ "wbyO":
/*!*************************************************!*\
  !*** ./node_modules/crypto-js/enc-base64url.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "Ib8C"));
	}
	else {}
}(this, function (CryptoJS) {

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
	        stringify: function (wordArray, urlSafe=true) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = urlSafe ? this._safe_map : this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
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
	        parse: function (base64Str, urlSafe=true) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = urlSafe ? this._safe_map : this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                reverseMap = this._reverseMap = [];
	                for (var j = 0; j < map.length; j++) {
	                    reverseMap[map.charCodeAt(j)] = j;
	                }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
	        _safe_map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	        var words = [];
	        var nBytes = 0;
	        for (var i = 0; i < base64StrLength; i++) {
	            if (i % 4) {
	                var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	                var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	                var bitsCombined = bits1 | bits2;
	                words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
	                nBytes++;
	            }
	        }
	        return WordArray.create(words, nBytes);
	    }
	}());

	return CryptoJS.enc.Base64url;

}));

/***/ }),

/***/ "xHgm":
/*!*****************************************************************!*\
  !*** ./node_modules/jose/dist/browser/jwe/flattened/decrypt.js ***!
  \*****************************************************************/
/*! exports provided: flattenedDecrypt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenedDecrypt", function() { return flattenedDecrypt; });
/* harmony import */ var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../runtime/base64url.js */ "KjJ5");
/* harmony import */ var _runtime_decrypt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../runtime/decrypt.js */ "v9/r");
/* harmony import */ var _runtime_zlib_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../runtime/zlib.js */ "9yED");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/errors.js */ "StPg");
/* harmony import */ var _lib_is_disjoint_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/is_disjoint.js */ "yopU");
/* harmony import */ var _lib_is_object_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/is_object.js */ "2fVw");
/* harmony import */ var _lib_decrypt_key_management_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/decrypt_key_management.js */ "AQ7b");
/* harmony import */ var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/buffer_utils.js */ "xpfA");
/* harmony import */ var _lib_cek_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/cek.js */ "qW6o");
/* harmony import */ var _lib_validate_crit_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/validate_crit.js */ "ElMP");
/* harmony import */ var _lib_validate_algorithms_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/validate_algorithms.js */ "JnDH");











async function flattenedDecrypt(jwe, key, options) {
    var _a;
    if (!Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_5__["default"])(jwe)) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('Flattened JWE must be an object');
    }
    if (jwe.protected === undefined && jwe.header === undefined && jwe.unprotected === undefined) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JOSE Header missing');
    }
    if (typeof jwe.iv !== 'string') {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JWE Initialization Vector missing or incorrect type');
    }
    if (typeof jwe.ciphertext !== 'string') {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JWE Ciphertext missing or incorrect type');
    }
    if (typeof jwe.tag !== 'string') {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JWE Authentication Tag missing or incorrect type');
    }
    if (jwe.protected !== undefined && typeof jwe.protected !== 'string') {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JWE Protected Header incorrect type');
    }
    if (jwe.encrypted_key !== undefined && typeof jwe.encrypted_key !== 'string') {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JWE Encrypted Key incorrect type');
    }
    if (jwe.aad !== undefined && typeof jwe.aad !== 'string') {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JWE AAD incorrect type');
    }
    if (jwe.header !== undefined && !Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_5__["default"])(jwe.header)) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JWE Shared Unprotected Header incorrect type');
    }
    if (jwe.unprotected !== undefined && !Object(_lib_is_object_js__WEBPACK_IMPORTED_MODULE_5__["default"])(jwe.unprotected)) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JWE Per-Recipient Unprotected Header incorrect type');
    }
    let parsedProt;
    if (jwe.protected) {
        const protectedHeader = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(jwe.protected);
        try {
            parsedProt = JSON.parse(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__["decoder"].decode(protectedHeader));
        }
        catch (_b) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JWE Protected Header is invalid');
        }
    }
    if (!Object(_lib_is_disjoint_js__WEBPACK_IMPORTED_MODULE_4__["default"])(parsedProt, jwe.header, jwe.unprotected)) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint');
    }
    const joseHeader = {
        ...parsedProt,
        ...jwe.header,
        ...jwe.unprotected,
    };
    Object(_lib_validate_crit_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"], new Map(), options === null || options === void 0 ? void 0 : options.crit, parsedProt, joseHeader);
    if (joseHeader.zip !== undefined) {
        if (!parsedProt || !parsedProt.zip) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
        }
        if (joseHeader.zip !== 'DEF') {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JOSENotSupported"]('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value');
        }
    }
    const { alg, enc } = joseHeader;
    if (typeof alg !== 'string' || !alg) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('missing JWE Algorithm (alg) in JWE Header');
    }
    if (typeof enc !== 'string' || !enc) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JWEInvalid"]('missing JWE Encryption Algorithm (enc) in JWE Header');
    }
    const keyManagementAlgorithms = options && Object(_lib_validate_algorithms_js__WEBPACK_IMPORTED_MODULE_10__["default"])('keyManagementAlgorithms', options.keyManagementAlgorithms);
    const contentEncryptionAlgorithms = options &&
        Object(_lib_validate_algorithms_js__WEBPACK_IMPORTED_MODULE_10__["default"])('contentEncryptionAlgorithms', options.contentEncryptionAlgorithms);
    if (keyManagementAlgorithms && !keyManagementAlgorithms.has(alg)) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JOSEAlgNotAllowed"]('"alg" (Algorithm) Header Parameter not allowed');
    }
    if (contentEncryptionAlgorithms && !contentEncryptionAlgorithms.has(enc)) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_3__["JOSEAlgNotAllowed"]('"enc" (Encryption Algorithm) Header Parameter not allowed');
    }
    let encryptedKey;
    if (jwe.encrypted_key !== undefined) {
        encryptedKey = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(jwe.encrypted_key);
    }
    let resolvedKey = false;
    if (typeof key === 'function') {
        key = await key(parsedProt, jwe);
        resolvedKey = true;
    }
    let cek;
    try {
        cek = await Object(_lib_decrypt_key_management_js__WEBPACK_IMPORTED_MODULE_6__["default"])(alg, key, encryptedKey, joseHeader);
    }
    catch (err) {
        if (err instanceof TypeError) {
            throw err;
        }
        cek = Object(_lib_cek_js__WEBPACK_IMPORTED_MODULE_8__["default"])(enc);
    }
    const iv = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(jwe.iv);
    const tag = Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(jwe.tag);
    const protectedHeader = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__["encoder"].encode((_a = jwe.protected) !== null && _a !== void 0 ? _a : '');
    let additionalData;
    if (jwe.aad !== undefined) {
        additionalData = Object(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__["concat"])(protectedHeader, _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__["encoder"].encode('.'), _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_7__["encoder"].encode(jwe.aad));
    }
    else {
        additionalData = protectedHeader;
    }
    let plaintext = await Object(_runtime_decrypt_js__WEBPACK_IMPORTED_MODULE_1__["default"])(enc, cek, Object(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"])(jwe.ciphertext), iv, tag, additionalData);
    if (joseHeader.zip === 'DEF') {
        plaintext = await ((options === null || options === void 0 ? void 0 : options.inflateRaw) || _runtime_zlib_js__WEBPACK_IMPORTED_MODULE_2__["inflate"])(plaintext);
    }
    const result = { plaintext };
    if (jwe.protected !== undefined) {
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
    if (resolvedKey) {
        return { ...result, key };
    }
    return result;
}


/***/ }),

/***/ "xXIV":
/*!*********************************************************!*\
  !*** ./node_modules/jose/dist/browser/jwt/unsecured.js ***!
  \*********************************************************/
/*! exports provided: UnsecuredJWT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsecuredJWT", function() { return UnsecuredJWT; });
/* harmony import */ var _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime/base64url.js */ "KjJ5");
/* harmony import */ var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/buffer_utils.js */ "xpfA");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/errors.js */ "StPg");
/* harmony import */ var _lib_jwt_claims_set_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/jwt_claims_set.js */ "rCIK");
/* harmony import */ var _produce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./produce.js */ "Wcb1");





class UnsecuredJWT extends _produce_js__WEBPACK_IMPORTED_MODULE_4__["ProduceJWT"] {
    encode() {
        const header = _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"](JSON.stringify({ alg: 'none' }));
        const payload = _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["encode"](JSON.stringify(this._payload));
        return `${header}.${payload}.`;
    }
    static decode(jwt, options) {
        if (typeof jwt !== 'string') {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWTInvalid"]('Unsecured JWT must be a string');
        }
        const { 0: encodedHeader, 1: encodedPayload, 2: signature, length } = jwt.split('.');
        if (length !== 3 || signature !== '') {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWTInvalid"]('Invalid Unsecured JWT');
        }
        let header;
        try {
            header = JSON.parse(_lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_1__["decoder"].decode(_runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"](encodedHeader)));
            if (header.alg !== 'none')
                throw new Error();
        }
        catch (_a) {
            throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_2__["JWTInvalid"]('Invalid Unsecured JWT');
        }
        const payload = Object(_lib_jwt_claims_set_js__WEBPACK_IMPORTED_MODULE_3__["default"])(header, _runtime_base64url_js__WEBPACK_IMPORTED_MODULE_0__["decode"](encodedPayload), options);
        return { payload, header };
    }
}


/***/ }),

/***/ "xhLL":
/*!***************************************************************!*\
  !*** ./node_modules/jose/dist/browser/jwe/compact/decrypt.js ***!
  \***************************************************************/
/*! exports provided: compactDecrypt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compactDecrypt", function() { return compactDecrypt; });
/* harmony import */ var _flattened_decrypt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../flattened/decrypt.js */ "xHgm");
/* harmony import */ var _util_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/errors.js */ "StPg");
/* harmony import */ var _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/buffer_utils.js */ "xpfA");



async function compactDecrypt(jwe, key, options) {
    if (jwe instanceof Uint8Array) {
        jwe = _lib_buffer_utils_js__WEBPACK_IMPORTED_MODULE_2__["decoder"].decode(jwe);
    }
    if (typeof jwe !== 'string') {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('Compact JWE must be a string or Uint8Array');
    }
    const { 0: protectedHeader, 1: encryptedKey, 2: iv, 3: ciphertext, 4: tag, length, } = jwe.split('.');
    if (length !== 5) {
        throw new _util_errors_js__WEBPACK_IMPORTED_MODULE_1__["JWEInvalid"]('Invalid Compact JWE');
    }
    const decrypted = await Object(_flattened_decrypt_js__WEBPACK_IMPORTED_MODULE_0__["flattenedDecrypt"])({
        ciphertext,
        iv: (iv || undefined),
        protected: protectedHeader || undefined,
        tag: (tag || undefined),
        encrypted_key: encryptedKey || undefined,
    }, key, options);
    const result = { plaintext: decrypted.plaintext, protectedHeader: decrypted.protectedHeader };
    if (typeof key === 'function') {
        return { ...result, key: decrypted.key };
    }
    return result;
}


/***/ }),

/***/ "xpfA":
/*!************************************************************!*\
  !*** ./node_modules/jose/dist/browser/lib/buffer_utils.js ***!
  \************************************************************/
/*! exports provided: encoder, decoder, concat, p2s, uint64be, uint32be, lengthAndInput, concatKdf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encoder", function() { return encoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decoder", function() { return decoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p2s", function() { return p2s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uint64be", function() { return uint64be; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uint32be", function() { return uint32be; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lengthAndInput", function() { return lengthAndInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatKdf", function() { return concatKdf; });
/* harmony import */ var _runtime_digest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../runtime/digest.js */ "DsUi");

const encoder = new TextEncoder();
const decoder = new TextDecoder();
const MAX_INT32 = 2 ** 32;
function concat(...buffers) {
    const size = buffers.reduce((acc, { length }) => acc + length, 0);
    const buf = new Uint8Array(size);
    let i = 0;
    buffers.forEach((buffer) => {
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
        throw new RangeError(`value must be >= 0 and <= ${MAX_INT32 - 1}. Received ${value}`);
    }
    buf.set([value >>> 24, value >>> 16, value >>> 8, value & 0xff], offset);
}
function uint64be(value) {
    const high = Math.floor(value / MAX_INT32);
    const low = value % MAX_INT32;
    const buf = new Uint8Array(8);
    writeUInt32BE(buf, high, 0);
    writeUInt32BE(buf, low, 4);
    return buf;
}
function uint32be(value) {
    const buf = new Uint8Array(4);
    writeUInt32BE(buf, value);
    return buf;
}
function lengthAndInput(input) {
    return concat(uint32be(input.length), input);
}
async function concatKdf(secret, bits, value) {
    const iterations = Math.ceil((bits >> 3) / 32);
    const res = new Uint8Array(iterations * 32);
    for (let iter = 0; iter < iterations; iter++) {
        const buf = new Uint8Array(4 + secret.length + value.length);
        buf.set(uint32be(iter + 1));
        buf.set(secret, 4);
        buf.set(value, 4 + secret.length);
        res.set(await Object(_runtime_digest_js__WEBPACK_IMPORTED_MODULE_0__["default"])('sha256', buf), iter * 32);
    }
    return res.slice(0, bits >> 3);
}


/***/ }),

/***/ "xwey":
/*!***************************************************************!*\
  !*** ./node_modules/jose/dist/browser/jwe/compact/encrypt.js ***!
  \***************************************************************/
/*! exports provided: CompactEncrypt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompactEncrypt", function() { return CompactEncrypt; });
/* harmony import */ var _flattened_encrypt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../flattened/encrypt.js */ "Dk7m");

class CompactEncrypt {
    constructor(plaintext) {
        this._flattened = new _flattened_encrypt_js__WEBPACK_IMPORTED_MODULE_0__["FlattenedEncrypt"](plaintext);
    }
    setContentEncryptionKey(cek) {
        this._flattened.setContentEncryptionKey(cek);
        return this;
    }
    setInitializationVector(iv) {
        this._flattened.setInitializationVector(iv);
        return this;
    }
    setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
    }
    setKeyManagementParameters(parameters) {
        this._flattened.setKeyManagementParameters(parameters);
        return this;
    }
    async encrypt(key, options) {
        const jwe = await this._flattened.encrypt(key, options);
        return [jwe.protected, jwe.encrypted_key, jwe.iv, jwe.ciphertext, jwe.tag].join('.');
    }
}


/***/ }),

/***/ "yopU":
/*!***********************************************************!*\
  !*** ./node_modules/jose/dist/browser/lib/is_disjoint.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isDisjoint = (...headers) => {
    const sources = headers.filter(Boolean);
    if (sources.length === 0 || sources.length === 1) {
        return true;
    }
    let acc;
    for (const header of sources) {
        const parameters = Object.keys(header);
        if (!acc || acc.size === 0) {
            acc = new Set(parameters);
            continue;
        }
        for (const parameter of parameters) {
            if (acc.has(parameter)) {
                return false;
            }
            acc.add(parameter);
        }
    }
    return true;
};
/* harmony default export */ __webpack_exports__["default"] = (isDisjoint);


/***/ }),

/***/ "zR7b":
/*!*********************************************************!*\
  !*** ./src/app/services/encryptor/encryptor.service.ts ***!
  \*********************************************************/
/*! exports provided: EncryptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncryptorService", function() { return EncryptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jose */ "9CFX");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





let EncryptorService = class EncryptorService {
    encryptRx(userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.encrypt(userId)
            .then(token => {
            return token;
        }, error => {
            throw error;
        }));
    }
    encrypt(userId) {
        let signingKey = '3BRfetbNKmtDYPQaw3UmWyvejxyVJnLF';
        let encryptionKey = 'gFtEPgLL1A6svXHrfz5kdnrDxzevHxnK';
        let initializationVector = 'JRhLdHeVsHGkv5cB';
        let userIdHashSalt = 'lVlTqJg95TeRIIRG';
        let userIdEncryption = this.aesEncrypt(userId, encryptionKey, initializationVector);
        let userIdHash = this.computeSha256Hash(userId, userIdHashSalt);
        console.log('userIdEncryption:', userIdEncryption);
        console.log('userIdHash:', userIdHash);
        return new jose__WEBPACK_IMPORTED_MODULE_3__["SignJWT"]({
            userIdHash: userIdHash,
            userIdEncryption: userIdEncryption
        })
            .setProtectedHeader({ alg: 'HS256' })
            .sign(new TextEncoder().encode(signingKey));
    }
    aesEncrypt(text, key, initializationVector) {
        let encondedKey = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8.parse(key);
        let iv = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8.parse(initializationVector);
        let encryptedText = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].encrypt(text, encondedKey, { iv: iv }).toString();
        return encryptedText;
    }
    computeSha256Hash(plainText, salt) {
        return new crypto_js__WEBPACK_IMPORTED_MODULE_2__["SHA256"](plainText + salt).toString();
    }
};
EncryptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EncryptorService);



/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_agentifai_agentifai_plugin_controller_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/agentifai/agentifai-plugin-controller.service */ "Noh+");
/* harmony import */ var src_app_services_public_public_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/public/public.service */ "lpQU");
/* harmony import */ var src_app_agentifai_open_alice_intent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/agentifai/open-alice-intent */ "kf/P");
/* harmony import */ var src_app_internal_internal_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/internal/internal-utils */ "kajc");
/* harmony import */ var src_app_agentifai_models_widget_config_agentifai_widget_dimensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/agentifai/models/widget-config/agentifai-widget-dimensions */ "ncFE");
/* harmony import */ var src_app_agentifai_models_widget_config_agentifai_horizontal_alignment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/agentifai/models/widget-config/agentifai-horizontal-alignment */ "9kcE");
/* harmony import */ var src_app_agentifai_models_widget_config_agentifai_vertical_alignment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/agentifai/models/widget-config/agentifai-vertical-alignment */ "A/hn");
/* harmony import */ var src_app_services_agentifai_agentifai_services_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/agentifai/agentifai-services.service */ "JxHx");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/api/api.service */ "oZWX");
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/storage/storage.service */ "E2f4");
/* harmony import */ var src_app_services_assistant_utils_assistant_utils_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/assistant-utils/assistant-utils.service */ "pTIB");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_services_encryptor_encryptor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/encryptor/encryptor.service */ "zR7b");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ "qCKp");




















let HomePage = class HomePage {
    constructor(navCtrl, alertCtrl, loadingController, agentifaiController, publicApi, services, platform, api, storage, assistantUtils, encryptor) {
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
        this.intents = [
            { label: 'Unlock Contract', value: src_app_agentifai_open_alice_intent__WEBPACK_IMPORTED_MODULE_7__["OpenAliceIntent"].UnlockContract },
            { label: 'Moratorium Form', value: src_app_agentifai_open_alice_intent__WEBPACK_IMPORTED_MODULE_7__["OpenAliceIntent"].MoratoriumForm }
        ];
        this.platform.ready().then(() => {
            this.readEndpoint();
            this.readAssistantConfigs();
        });
    }
    initializeAction() {
        this.assistantUtils.getConfig()
            .then(config => {
            this.agentifaiController.initializeWithConfig(config[0], config[1], config[2]);
        });
    }
    showWidgetAction() {
        this.agentifaiController.showWidget();
    }
    hideWidgetAction() {
        this.agentifaiController.hideWidget();
    }
    showAppAction() {
        this.agentifaiController.showApp();
    }
    openIntent(intent) {
        this.agentifaiController.showApp(intent);
    }
    setWidgetDimensionsAction() {
        const horizontalMargin = 0;
        const verticalMargin = 30;
        const size = 60;
        const dimensions = new src_app_agentifai_models_widget_config_agentifai_widget_dimensions__WEBPACK_IMPORTED_MODULE_9__["AgentifaiWidgetDimensions"](src_app_agentifai_models_widget_config_agentifai_horizontal_alignment__WEBPACK_IMPORTED_MODULE_10__["AgentifaiHorizontalAlignment"].Center, horizontalMargin, src_app_agentifai_models_widget_config_agentifai_vertical_alignment__WEBPACK_IMPORTED_MODULE_11__["AgentifaiVerticalAlignment"].Bottom, verticalMargin, size);
        this.agentifaiController.setWidgetDimensions(dimensions);
    }
    registerUser(user) {
        this.agentifaiController.registerUser(user.id, user.name, null, {});
    }
    unregisterUser() {
        this.agentifaiController.unregisterUser();
    }
    login(event) {
        const contractNumber = event.username;
        const accessCode = event.password;
        this.loginService(contractNumber, accessCode);
    }
    fakeTokenLogin(event) {
        const contractNumber = event.username;
        const accessCode = event.password;
        this.loginService(contractNumber, accessCode, true);
    }
    logout() {
        this.logoutService();
    }
    endpoint(event) {
        const endpoint = event;
        this.writeEnpoint(endpoint);
        this.setConfigurations(endpoint.baseUrl);
    }
    removeVoiceConsent() {
        this.services.deleteVoiceTreatmentConsent(null)
            .subscribe(resp => {
            this.showAlert("SUCCESS", "Voice consent removed");
        }, error => {
            this.showAlert("FAILED", String(error));
        });
    }
    showNewPage() {
        this.showSecondPage();
    }
    showFingerprint() {
        Fingerprint.show({
            description: "Some biometric description"
        }, () => {
            this.showSecondPage();
        }, error => {
            alert("Authentication invalid " + error.message);
        });
    }
    setupNewTenant() {
        const apiKey = this.encodeApiKey(this.tenantId, this.channelId);
        this.assistantUtils.setConfig(this.apiUrl, apiKey, this.settings)
            .then(() => {
            this.agentifaiController.stop();
            this.initializeAction();
        });
    }
    resetDefaultTenant() {
        this.assistantUtils.resetDefaultConfig()
            .then(config => this.setupAssistantConfig(config[0], config[1], config[2]))
            .then(() => this.setupNewTenant());
    }
    setTheme(theme) {
        this.agentifaiController.setTheme(theme);
    }
    showSecondPage() {
        this.navCtrl.navigateForward('second-page');
    }
    writeEnpoint(endpoint) {
        this.storage.setBaseUrl(endpoint);
        this.setupBaseUrl(endpoint);
    }
    createEndpointDefault() {
        this.writeEnpoint(this.endpoints[0]);
    }
    readEndpoint() {
        this.storage.getbaseUrl().then(result => {
            if (result != null) {
                this.setupBaseUrl(result);
            }
            else {
                this.createEndpointDefault();
            }
        }, error => {
            this.createEndpointDefault();
        });
    }
    setupBaseUrl(endpoint) {
        src_app_internal_internal_utils__WEBPACK_IMPORTED_MODULE_8__["InternalUtils"].baseUrl = endpoint.baseUrl;
    }
    showAlert(title, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: title,
                message: message,
                buttons: ['Dismiss']
            });
            yield alert.present();
        });
    }
    loginService(contractNumber, accessCode, generateFakeToken = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = (yield this.getLoading());
            loading.present();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_19__["combineLatest"])([
                this.publicApi.login(contractNumber, accessCode, false),
                this.encryptor.encryptRx(contractNumber)
            ])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])(results => ({ response: results[0], token: results[1] })))
                .subscribe((resp) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(resp);
                let cookie = resp.response.headers['set-cookie'];
                var authHeaders = {};
                if (cookie != null) {
                    authHeaders = { Cookie: cookie };
                }
                let login = resp.response.data;
                let token = generateFakeToken ? resp.token : login.jwt;
                var subTitle = "Olá ";
                var name = "";
                if (login.customerName != undefined || login.customerName != null) {
                    subTitle += login.customerName;
                    name = login.customerName;
                }
                else {
                    subTitle += contractNumber;
                }
                yield this.showAlert("SUCCESS", subTitle);
                loading.dismiss();
                this.agentifaiController.registerUser(contractNumber, name, token, authHeaders);
            }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(error);
                loading.dismiss();
                yield this.showAlert("FAILED", error.error);
            }));
        });
    }
    logoutService() {
        this.services.logout().subscribe((resp) => {
            this.showAlert("SUCCESS", "logout");
            this.unregisterUser();
        }, (error) => {
            this.showAlert("FAILED", error.error);
        });
    }
    setConfigurations(endpointUrl) {
        let headers = this.api.getHeadersAlice();
        let headersKeysMapping = this.api.HEADERS_KEYS_MAPPING_ALICE;
        let endpoints = src_app_internal_internal_utils__WEBPACK_IMPORTED_MODULE_8__["InternalUtils"].getEndpointsWhitelist();
        this.agentifaiController.setConfigurations({
            url: endpointUrl,
            headers: headers,
            headersKeysMapping: headersKeysMapping,
            endpoints: endpoints
        });
    }
    readAssistantConfigs() {
        return this.assistantUtils.getConfig()
            .then(config => this.setupAssistantConfig(config[0], config[1], config[2]));
    }
    setupAssistantConfig(apiUrl, apiKey, settings) {
        this.apiUrl = apiUrl;
        this.settings = settings;
        this.themes = Object.keys(settings["themes"]);
        const decodedApiKey = this.decodeApiKey(apiKey);
        this.tenantId = decodedApiKey.tenantId;
        this.channelId = decodedApiKey.channelId;
    }
    encodeApiKey(tenantId, channelId) {
        const data = {
            "tenantId": tenantId,
            "channelId": channelId
        };
        return btoa(JSON.stringify(data));
    }
    decodeApiKey(apiKey) {
        return JSON.parse(atob(apiKey));
    }
    getLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                backdropDismiss: true,
                duration: 5000
            });
            return loading;
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_services_agentifai_agentifai_plugin_controller_service__WEBPACK_IMPORTED_MODULE_5__["AgentifaiPluginControllerService"] },
    { type: src_app_services_public_public_service__WEBPACK_IMPORTED_MODULE_6__["PublicService"] },
    { type: src_app_services_agentifai_agentifai_services_service__WEBPACK_IMPORTED_MODULE_12__["AgentifaiServicesProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_13__["Api"] },
    { type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_14__["StorageService"] },
    { type: src_app_services_assistant_utils_assistant_utils_service__WEBPACK_IMPORTED_MODULE_15__["AssistantUtilsService"] },
    { type: src_app_services_encryptor_encryptor_service__WEBPACK_IMPORTED_MODULE_17__["EncryptorService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map