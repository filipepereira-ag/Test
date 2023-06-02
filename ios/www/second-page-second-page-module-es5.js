(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["second-page-second-page-module"], {
    /***/
    "I8nY": function I8nY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SecondPagePageModule", function () {
        return SecondPagePageModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _second_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./second-page-routing.module */
      "nh3Z");
      /* harmony import */


      var _second_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./second-page.page */
      "ftuh");

      var SecondPagePageModule = function SecondPagePageModule() {
        _classCallCheck(this, SecondPagePageModule);
      };

      SecondPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _second_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["SecondPagePageRoutingModule"]],
        declarations: [_second_page_page__WEBPACK_IMPORTED_MODULE_6__["SecondPagePage"]]
      })], SecondPagePageModule);
      /***/
    },

    /***/
    "ftuh": function ftuh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SecondPagePage", function () {
        return SecondPagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_second_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./second-page.page.html */
      "kSMm");
      /* harmony import */


      var _second_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./second-page.page.scss */
      "vI7w");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_agentifai_agentifai_plugin_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/agentifai/agentifai-plugin-controller.service */
      "Noh+");

      var SecondPagePage = /*#__PURE__*/function () {
        function SecondPagePage(agentifaiController) {
          _classCallCheck(this, SecondPagePage);

          this.agentifaiController = agentifaiController;
        }

        _createClass(SecondPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.agentifaiController.showWidget();
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.agentifaiController.hideWidget();
          }
        }]);

        return SecondPagePage;
      }();

      SecondPagePage.ctorParameters = function () {
        return [{
          type: src_app_services_agentifai_agentifai_plugin_controller_service__WEBPACK_IMPORTED_MODULE_4__["AgentifaiPluginControllerService"]
        }];
      };

      SecondPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-second-page',
        template: _raw_loader_second_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_second_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SecondPagePage);
      /***/
    },

    /***/
    "kSMm": function kSMm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>SecondPage</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "nh3Z": function nh3Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SecondPagePageRoutingModule", function () {
        return SecondPagePageRoutingModule;
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


      var _second_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./second-page.page */
      "ftuh");

      var routes = [{
        path: '',
        component: _second_page_page__WEBPACK_IMPORTED_MODULE_3__["SecondPagePage"]
      }];

      var SecondPagePageRoutingModule = function SecondPagePageRoutingModule() {
        _classCallCheck(this, SecondPagePageRoutingModule);
      };

      SecondPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SecondPagePageRoutingModule);
      /***/
    },

    /***/
    "vI7w": function vI7w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWNvbmQtcGFnZS5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=second-page-second-page-module-es5.js.map