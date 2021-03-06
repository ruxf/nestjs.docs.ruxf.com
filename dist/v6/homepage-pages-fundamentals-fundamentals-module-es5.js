function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homepage-pages-fundamentals-fundamentals-module"], {
  /***/
  "./src/app/homepage/pages/fundamentals/async-components/async-components.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/homepage/pages/fundamentals/async-components/async-components.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: AsyncComponentsComponent */

  /***/
  function srcAppHomepagePagesFundamentalsAsyncComponentsAsyncComponentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsyncComponentsComponent", function () {
      return AsyncComponentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _shared_components_banner_enterprise_banner_enterprise_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/components/banner-enterprise/banner-enterprise.component */
    "./src/app/shared/components/banner-enterprise/banner-enterprise.component.ts");

    var AsyncComponentsComponent =
    /*#__PURE__*/
    function (_page_page_component_) {
      _inherits(AsyncComponentsComponent, _page_page_component_);

      function AsyncComponentsComponent() {
        _classCallCheck(this, AsyncComponentsComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(AsyncComponentsComponent).apply(this, arguments));
      }

      return AsyncComponentsComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    AsyncComponentsComponent.??fac = function AsyncComponentsComponent_Factory(t) {
      return ??AsyncComponentsComponent_BaseFactory(t || AsyncComponentsComponent);
    };

    AsyncComponentsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AsyncComponentsComponent,
      selectors: [["app-async-components"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 56,
      vars: 0,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/fundamentals/async-components.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "asynchronous-providers"], [1, "language-typescript"], [1, "info"], ["routerLink", "/fundamentals/custom-providers"], ["appAnchor", "", "id", "injection"], ["appAnchor", "", "id", "example"], ["routerLink", "/recipes/sql-typeorm"]],
      template: function AsyncComponentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Asynchronous providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "At times, the application start should be delayed until one or more ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "asynchronous tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " are completed. For example, you may not want to start accepting requests until the connection with the database has been established. You can achieve this using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "asynchronous providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "The syntax for this is to use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "async/await");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "useFactory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " syntax. The factory returns a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Promise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, ", and the factory function can ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "await");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " asynchronous tasks. Nest will await resolution of the promise before instantiating any class that depends on (injects) such a provider.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "code", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "\n{\n  provide: 'ASYNC_CONNECTION',\n  useFactory: async () => {\n    const connection = await createConnection(options);\n    return connection;\n  },\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "blockquote", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " Learn more about custom provider syntax ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Injection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Asynchronous providers are injected to other components by their tokens, like any other provider. In the example above, you would use the construct ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "@Inject('ASYNC_CONNECTION')");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "app-banner-enterprise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Example");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "The TypeORM recipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " has a more substantial example of an asynchronous provider.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__["HeaderAnchorDirective"], _shared_components_banner_enterprise_banner_enterprise_component__WEBPACK_IMPORTED_MODULE_4__["BannerEnterpriseComponent"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??AsyncComponentsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](AsyncComponentsComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AsyncComponentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-async-components',
          templateUrl: './async-components.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/fundamentals/circular-dependency/circular-dependency.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/homepage/pages/fundamentals/circular-dependency/circular-dependency.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: CircularDependencyComponent */

  /***/
  function srcAppHomepagePagesFundamentalsCircularDependencyCircularDependencyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CircularDependencyComponent", function () {
      return CircularDependencyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/components/tabs/tabs.component */
    "./src/app/shared/components/tabs/tabs.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/pipes/extension.pipe */
    "./src/app/shared/pipes/extension.pipe.ts");

    var CircularDependencyComponent =
    /*#__PURE__*/
    function (_page_page_component_2) {
      _inherits(CircularDependencyComponent, _page_page_component_2);

      function CircularDependencyComponent() {
        _classCallCheck(this, CircularDependencyComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(CircularDependencyComponent).apply(this, arguments));
      }

      return CircularDependencyComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    CircularDependencyComponent.??fac = function CircularDependencyComponent_Factory(t) {
      return ??CircularDependencyComponent_BaseFactory(t || CircularDependencyComponent);
    };

    CircularDependencyComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CircularDependencyComponent,
      selectors: [["app-circular-dependency"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 116,
      vars: 20,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/fundamentals/circular-dependency.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "circular-dependency"], ["appAnchor", "", "id", "forward-reference"], [1, "filename"], ["app9a830432745dcca57a1bd14175f6f4ab1bded1fa", ""], [1, "language-typescript"], [1, "info"], ["app4131b3781c2800f64fde01a866fdf5d9e0897ae9", ""], [1, "warning"], ["appAnchor", "", "id", "moduleref-class-alternative"], ["routerLink", "/fundamentals/module-ref"], ["appAnchor", "", "id", "module-forward-reference"], ["app75cfc43193cbf94ebbe286a0ce2f3009d1cd96e3", ""]],
      template: function CircularDependencyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Circular dependency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "A circular dependency occurs when two classes depend on each other. For example, class A needs class B, and class B also needs class A. Circular dependencies can arise in Nest between modules and between providers.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "While circular dependencies should be avoided where possible, you can't always do so. In such cases, Nest enables resolving circular dependencies between providers in two ways. In this chapter, we describe using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "forward referencing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " as one technique, and using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "ModuleRef");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " class to retrieve a provider instance from the DI container as another.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "We also describe resolving circular dependencies between modules.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Forward reference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "forward reference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " allows Nest to reference classes which aren't yet defined using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "forwardRef()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " utility function. For example, if ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "CommonService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " depend on each other, both sides of the relationship can use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "@Inject()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " and the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "forwardRef()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " utility to resolve the circular dependency. Otherwise Nest won't instantiate them because all of the essential metadata won't be available. Here's an example:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](44, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "app-tabs", null, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "\n@Injectable()\nexport class CatsService {\n  constructor(\n    @Inject(forwardRef(() => CommonService))\n    private readonly commonService: CommonService,\n  ) {}\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "\n@Injectable()\n@Dependencies(forwardRef(() => CommonService))\nexport class CatsService {\n  constructor(commonService) {\n    this.commonService = commonService;\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "blockquote", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "forwardRef()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " function is imported from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "@nestjs/common");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " package.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "That covers one side of the relationship. Now let's do the same with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "CommonService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](70, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "app-tabs", null, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "\n@Injectable()\nexport class CommonService {\n  constructor(\n    @Inject(forwardRef(() => CatsService))\n    private readonly catsService: CatsService,\n  ) {}\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "\n@Injectable()\n@Dependencies(forwardRef(() => CatsService))\nexport class CommonService {\n  constructor(catsService) {\n    this.catsService = catsService;\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "blockquote", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, " The order of instantiation is indeterminate. Make sure your code does not depend on which constructor is called first.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "ModuleRef class alternative");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "An alternative to using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "forwardRef()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, " is to refactor your code and use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "ModuleRef");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, " class to retrieve a provider on one side of the (otherwise) circular relationship. Learn more about the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "ModuleRef");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, " utility class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Module forward reference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "In order to resolve circular dependencies between modules, use the same ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "forwardRef()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, " utility function on both sides of the modules association. For example:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](110, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "app-tabs", null, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "\n@Module({\n  imports: [forwardRef(() => CatsModule)],\n})\nexport class CommonModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](46);

          var _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](72);

          var _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](44, 11, "cats.service", _r108.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r108.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r108.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](70, 14, "common.service", _r109.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r109.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r109.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](110, 17, "common.module", _r110.isJsActive), "\n");
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__["ExtensionPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??CircularDependencyComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](CircularDependencyComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CircularDependencyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-circular-dependency',
          templateUrl: './circular-dependency.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/fundamentals/dependency-injection/dependency-injection.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/homepage/pages/fundamentals/dependency-injection/dependency-injection.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: DependencyInjectionComponent */

  /***/
  function srcAppHomepagePagesFundamentalsDependencyInjectionDependencyInjectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DependencyInjectionComponent", function () {
      return DependencyInjectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/components/tabs/tabs.component */
    "./src/app/shared/components/tabs/tabs.component.ts");
    /* harmony import */


    var _shared_components_banner_courses_banner_courses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/components/banner-courses/banner-courses.component */
    "./src/app/shared/components/banner-courses/banner-courses.component.ts");
    /* harmony import */


    var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/pipes/extension.pipe */
    "./src/app/shared/pipes/extension.pipe.ts");

    var DependencyInjectionComponent =
    /*#__PURE__*/
    function (_page_page_component_3) {
      _inherits(DependencyInjectionComponent, _page_page_component_3);

      function DependencyInjectionComponent() {
        _classCallCheck(this, DependencyInjectionComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(DependencyInjectionComponent).apply(this, arguments));
      }

      return DependencyInjectionComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    DependencyInjectionComponent.??fac = function DependencyInjectionComponent_Factory(t) {
      return ??DependencyInjectionComponent_BaseFactory(t || DependencyInjectionComponent);
    };

    DependencyInjectionComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: DependencyInjectionComponent,
      selectors: [["app-dependency-injection"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 459,
      vars: 36,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/fundamentals/dependency-injection.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "custom-providers"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/providers#dependency-injection"], ["appAnchor", "", "id", "di-fundamentals"], ["rel", "nofollow", "target", "_blank", "href", "https://en.wikipedia.org/wiki/Inversion_of_control"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/providers"], [1, "filename"], ["app31a558f8de73cffc192e7a173b21650e09299547", ""], [1, "language-typescript"], ["appdfceb0199d862c23bc74bf888d8ac8d21153a13a", ""], ["apped35441ce9b0394d8b5b62f8e292638348521fdc", ""], ["start", "3"], ["href", "/fundamentals/custom-providers#standard-providers"], ["appAnchor", "", "id", "standard-providers"], ["appAnchor", "", "id", "custom-providers-1"], ["appAnchor", "", "id", "value-providers-usevalue"], ["rel", "nofollow", "target", "_blank", "href", "https://www.typescriptlang.org/docs/handbook/type-compatibility.html"], ["appAnchor", "", "id", "non-class-based-provider-tokens"], ["href", "/fundamentals/custom-providers#di-fundamentals"], [1, "warning"], ["rel", "nofollow", "target", "_blank", "href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol"], ["app84eb17565408b01f2567d0af90c99f621c79b5ea", ""], [1, "info"], ["appAnchor", "", "id", "class-providers-useclass"], ["appAnchor", "", "id", "factory-providers-usefactory"], ["app30a00f6437cc5961c2165d49cc2070d60e20dd3f", ""], ["appAnchor", "", "id", "alias-providers-useexisting"], ["appAnchor", "", "id", "non-service-based-providers"], ["appAnchor", "", "id", "export-custom-provider"], ["appabfd55360a48df0985676d364cd881b403f46362", ""], ["app30e657423660426caf5f0f886260b22b72244049", ""]],
      template: function DependencyInjectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Custom providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "In earlier chapters, we touched on various aspects of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Dependency Injection (DI)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " and how it is used in Nest. One example of this is the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "constructor based");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " dependency injection used to inject instances (often service providers) into classes. You won't be surprised to learn that Dependency Injection is built in to the Nest core in a fundamental way. So far, we've only explored one main pattern. As your application grows more complex, you may need to take advantage of the full features of the DI system, so let's explore them in more detail.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "DI fundamentals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Dependency injection is an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "inversion of control (IoC)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " technique wherein you delegate instantiation of dependencies to the IoC container (in our case, the NestJS runtime system), instead of doing it in your own code imperatively. Let's examine what's happening in this example from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Providers chapter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "First, we define a provider. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "@Injectable()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " decorator marks the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " class as a provider.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](36, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "app-tabs", null, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "\nimport { Injectable } from '@nestjs/common';\nimport { Cat } from './interfaces/cat.interface';\n\n@Injectable()\nexport class CatsService {\n  private readonly cats: Cat[] = [];\n\n  findAll(): Cat[] {\n    return this.cats;\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "\nimport { Injectable } from '@nestjs/common';\n\n@Injectable()\nexport class CatsService {\n  constructor() {\n    this.cats = [];\n  }\n\n  findAll() {\n    return this.cats;\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Then we request that Nest inject the provider into our controller class:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](49, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "app-tabs", null, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "\nimport { Controller, Get } from '@nestjs/common';\nimport { CatsService } from './cats.service';\nimport { Cat } from './interfaces/cat.interface';\n\n@Controller('cats')\nexport class CatsController {\n  constructor(private readonly catsService: CatsService) {}\n\n  @Get()\n  async findAll(): Promise<Cat[]> {\n    return this.catsService.findAll();\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "\nimport { Controller, Get, Bind, Dependencies } from '@nestjs/common';\nimport { CatsService } from './cats.service';\n\n@Controller('cats')\n@Dependencies(CatsService)\nexport class CatsController {\n  constructor(catsService) {\n    this.catsService = catsService;\n  }\n\n  @Get()\n  async findAll() {\n    return this.catsService.findAll();\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Finally, we register the provider with the Nest IoC container:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](62, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "app-tabs", null, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "\nimport { Module } from '@nestjs/common';\nimport { CatsController } from './cats/cats.controller';\nimport { CatsService } from './cats/cats.service';\n\n@Module({\n  controllers: [CatsController],\n  providers: [CatsService],\n})\nexport class AppModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "What exactly is happening under the covers to make this work? There are three key steps in the process:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "In ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "cats.service.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, ", the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "@Injectable()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, " decorator declares the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, " class as a class that can be managed by the Nest IoC container.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "In ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "cats.controller.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "CatsController");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, " declares a dependency on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, " token with constructor injection:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "\n  constructor(private readonly catsService: CatsService)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "ol", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "In ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "app.module.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, ", we associate the token ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, " with the class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, " from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "cats.service.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, " file. We'll ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "see below");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, " exactly how this association (also called ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, ") occurs.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "When the Nest IoC container instantiates a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "CatsController");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, ", it first looks for any dependencies*. When it finds the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, " dependency, it performs a lookup on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, " token, which returns the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, " class, per the registration step (#3 above). Assuming ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "SINGLETON");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, " scope (the default behavior), Nest will then either create an instance of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, ", cache it, and return it, or if one is already cached, return the existing instance.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "*This explanation is a bit simplified to illustrate the point. One important area we glossed over is that the process of analyzing the code for dependencies is very sophisticated, and happens during application bootstrapping. One key feature is that dependency analysis (or \"creating the dependency graph\"), is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "transitive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, ". In the above example, if the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, " itself had dependencies, those too would be resolved. The dependency graph ensures that dependencies are resolved in the correct order - essentially \"bottom up\". This mechanism relieves the developer from having to manage such complex dependency graphs.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](148, "app-banner-courses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "h4", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Standard providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Let's take a closer look at the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "@Module()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, " decorator. In ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "app.module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, ", we declare:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "\n@Module({\n  controllers: [CatsController],\n  providers: [CatsService],\n})");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, " property takes an array of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, ". So far, we've supplied those providers via a list of class names. In fact, the syntax ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "providers: [CatsService]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, " is short-hand for the more complete syntax:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "\nproviders: [\n  {\n    provide: CatsService,\n    useClass: CatsService,\n  },\n];");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "Now that we see this explicit construction, we can understand the registration process. Here, we are clearly associating the token ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, " with the class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, ". The short-hand notation is merely a convenience to simplify the most common use-case, where the token is used to request an instance of a class by the same name.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "Custom providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "What happens when your requirements go beyond those offered by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "Standard providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "? Here are a few examples:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "You want to create a custom instance instead of having Nest instantiate (or return a cached instance of) a class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "You want to re-use an existing class in a second dependency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "You want to override a class with a mock version for testing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "Nest allows you to define Custom providers to handle these cases. It provides several ways to define custom providers. Let's walk through them.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "h4", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "Value providers: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "useValue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "useValue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, " syntax is useful for injecting a constant value, putting an external library into the Nest container, or replacing a real implementation with a mock object. Let's say you'd like to force Nest to use a mock ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, " for testing purposes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "\nimport { CatsService } from './cats.service';\n\nconst mockCatsService = {\n  /* mock implementation\n  ...\n  */\n};\n\n@Module({\n  imports: [CatsModule],\n  providers: [\n    {\n      provide: CatsService,\n      useValue: mockCatsService,\n    },\n  ],\n})\nexport class AppModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "In this example, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, " token will resolve to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "mockCatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, " mock object. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "useValue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, " requires a value - in this case a literal object that has the same interface as the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, " class it is replacing. Because of TypeScript's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "structural typing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, ", you can use any object that has a compatible interface, including a literal object or a class instance instantiated with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "h4", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "Non-class-based provider tokens");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "So far, we've used class names as our provider tokens (the value of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "provide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, " property in a provider listed in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, " array). This is matched by the standard pattern used with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "constructor based injection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, ", where the token is also a class name. (Refer back to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, "DI Fundamentals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, " for a refresher on tokens if this concept isn't entirely clear). Sometimes, we may want the flexibility to use strings or symbols as the DI token. For example:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "\nimport { connection } from './connection';\n\n@Module({\n  providers: [\n    {\n      provide: 'CONNECTION',\n      useValue: connection,\n    },\n  ],\n})\nexport class AppModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, "In this example, we are associating a string-valued token (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, "'CONNECTION'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, ") with a pre-existing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264, "connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, " object we've imported from an external file.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "blockquote", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, " In addition to using strings as token values, you can also use JavaScript ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, "symbols");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "We've previously seen how to inject a provider using the standard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "constructor based injection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, " pattern. This pattern ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "requires");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, " that the dependency be declared with a class name. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "'CONNECTION'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](283, " custom provider uses a string-valued token. Let's see how to inject such a provider. To do so, we use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "@Inject()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](286, " decorator. This decorator takes a single argument - the token.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](288, "app-tabs", null, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, "\n@Injectable()\nexport class CatsRepository {\n  constructor(@Inject('CONNECTION') connection: Connection) {}\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "\n@Injectable()\n@Dependencies('CONNECTION')\nexport class CatsRepository {\n  constructor(connection) {}\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "blockquote", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](298, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](299, " The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, "@Inject()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](302, " decorator is imported from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](304, "@nestjs/common");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, " package.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "While we directly use the string ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](309, "'CONNECTION'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, " in the above examples for illustration purposes, for clean code organization, it's best practice to define tokens in a separate file, such as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](312, "constants.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, ". Treat them much as you would symbols or enums that are defined in their own file and imported where needed.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "h4", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, "Class providers: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](318, "useClass");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](320, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](322, "useClass");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, " syntax allows you to dynamically determine a class that a token should resolve to. For example, suppose we have an abstract (or default) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](325, "ConfigService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, " class. Depending on the current environment, we want Nest to provide a different implementation of the configuration service. The following code implements such a strategy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, "\nconst configServiceProvider = {\n  provide: ConfigService,\n  useClass:\n    process.env.NODE_ENV === 'development'\n      ? DevelopmentConfigService\n      : ProductionConfigService,\n};\n\n@Module({\n  providers: [configServiceProvider],\n})\nexport class AppModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](331, "Let's look at a couple of details in this code sample. You'll notice that we define ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, "configServiceProvider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](334, " with a literal object first, then pass it in the module decorator's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](336, "providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](337, " property. This is just a bit of code organization, but is functionally equivalent to the examples we've used thus far in this chapter.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](339, "Also, we have used the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](341, "ConfigService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](342, " class name as our token. For any class that depends on ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](344, "ConfigService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](345, ", Nest will inject an instance of the provided class (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, "DevelopmentConfigService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](348, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](350, "ProductionConfigService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](351, ") overriding any default implementation that may have been declared elsewhere (e.g., a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](353, "ConfigService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](354, " declared with an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](356, "@Injectable()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](357, " decorator).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "h4", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](360, "Factory providers: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](362, "useFactory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](364, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](366, "useFactory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](367, " syntax allows for creating providers ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](369, "dynamically");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](370, ". The actual provider will be supplied by the value returned from a factory function. The factory function can be as simple or complex as needed. A simple factory may not depend on any other providers. A more complex factory can itself inject other providers it needs to compute its result. For the latter case, the factory provider syntax has a pair of related mechanisms:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](373, "The factory function can accept (optional) arguments.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](375, "The (optional) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, "inject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](378, " property accepts an array of providers that Nest will resolve and pass as arguments to the factory function during the instantiation process. The two lists should be correlated: Nest will pass instances from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](380, "inject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](381, " list as arguments to the factory function in the same order.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](383, "The example below demonstrates this.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](385, "app-tabs", null, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](389, "\nconst connectionFactory = {\n  provide: 'CONNECTION',\n  useFactory: (optionsProvider: OptionsProvider) => {\n    const options = optionsProvider.get();\n    return new DatabaseConnection(options);\n  },\n  inject: [OptionsProvider],\n};\n\n@Module({\n  providers: [connectionFactory],\n})\nexport class AppModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](392, "\nconst connectionFactory = {\n  provide: 'CONNECTION',\n  useFactory: (optionsProvider) => {\n    const options = optionsProvider.get();\n    return new DatabaseConnection(options);\n  },\n  inject: [OptionsProvider],\n};\n\n@Module({\n  providers: [connectionFactory],\n})\nexport class AppModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](395, "Alias providers: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](397, "useExisting");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](399, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](401, "useExisting");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](402, " syntax allows you to create aliases for existing providers. This creates two ways to access the same provider. In the example below, the (string-based) token ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](404, "'AliasedLoggerService'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](405, " is an alias for the (class-based) token ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](407, "LoggerService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](408, ". Assume we have two different dependencies, one for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](409, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](410, "'AlilasedLoggerService'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](411, " and one for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](413, "LoggerService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](414, ". If both dependencies are specified with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](415, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](416, "SINGLETON");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](417, " scope, they'll both resolve to the same instance.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](418, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](420, "\n@Injectable()\nclass LoggerService {\n  /* implementation details */\n}\n\nconst loggerAliasProvider = {\n  provide: 'AliasedLoggerService',\n  useExisting: LoggerService,\n};\n\n@Module({\n  providers: [LoggerService, loggerAliasProvider],\n})\nexport class AppModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](421, "h4", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](422, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](423, "Non-service based providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](425, "While providers often supply services, they are not limited to that usage. A provider can supply ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](426, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](427, "any");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](428, " value. For example, a provider may supply an array of configuration objects based on the current environment, as shown below:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](429, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](430, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](431, "\nconst configFactory = {\n  provide: 'CONFIG',\n  useFactory: () => {\n    return process.env.NODE_ENV === 'development' ? devConfig : prodConfig;\n  },\n};\n\n@Module({\n  providers: [configFactory],\n})\nexport class AppModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](432, "h4", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](434, "Export custom provider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](435, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](436, "Like any provider, a custom provider is scoped to its declaring module. To make it visible to other modules, it must be exported. To export a custom provider, we can either use its token or the full provider object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](437, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](438, "The following example shows exporting using the token:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](439, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](440, "app-tabs", null, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](442, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](443, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](444, "\nconst connectionFactory = {\n  provide: 'CONNECTION',\n  useFactory: (optionsProvider: OptionsProvider) => {\n    const options = optionsProvider.get();\n    return new DatabaseConnection(options);\n  },\n  inject: [OptionsProvider],\n};\n\n@Module({\n  providers: [connectionFactory],\n  exports: ['CONNECTION'],\n})\nexport class AppModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](445, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](446, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](447, "\nconst connectionFactory = {\n  provide: 'CONNECTION',\n  useFactory: (optionsProvider) => {\n    const options = optionsProvider.get();\n    return new DatabaseConnection(options);\n  },\n  inject: [OptionsProvider],\n};\n\n@Module({\n  providers: [connectionFactory],\n  exports: ['CONNECTION'],\n})\nexport class AppModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](449, "Alternatively, export with the full provider object:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](450, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](451, "app-tabs", null, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](453, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](454, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](455, "\nconst connectionFactory = {\n  provide: 'CONNECTION',\n  useFactory: (optionsProvider: OptionsProvider) => {\n    const options = optionsProvider.get();\n    return new DatabaseConnection(options);\n  },\n  inject: [OptionsProvider],\n};\n\n@Module({\n  providers: [connectionFactory],\n  exports: [connectionFactory],\n})\nexport class AppModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](457, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](458, "\nconst connectionFactory = {\n  provide: 'CONNECTION',\n  useFactory: (optionsProvider) => {\n    const options = optionsProvider.get();\n    return new DatabaseConnection(options);\n  },\n  inject: [OptionsProvider],\n};\n\n@Module({\n  providers: [connectionFactory],\n  exports: [connectionFactory],\n})\nexport class AppModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](38);

          var _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](51);

          var _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](64);

          var _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](289);

          var _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](386);

          var _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](441);

          var _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](452);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](36, 27, "cats.service", _r112.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r112.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r112.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](49, 30, "cats.controller", _r113.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r113.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r113.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](62, 33, "app.module", _r114.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r115.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r115.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r116.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r116.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r117.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r117.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r118.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r118.isJsActive);
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"], _shared_components_banner_courses_banner_courses_component__WEBPACK_IMPORTED_MODULE_4__["BannerCoursesComponent"]],
      pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__["ExtensionPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??DependencyInjectionComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](DependencyInjectionComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DependencyInjectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dependency-injection',
          templateUrl: './dependency-injection.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/fundamentals/dynamic-modules/dynamic-modules.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/homepage/pages/fundamentals/dynamic-modules/dynamic-modules.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: DynamicModulesComponent */

  /***/
  function srcAppHomepagePagesFundamentalsDynamicModulesDynamicModulesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicModulesComponent", function () {
      return DynamicModulesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _shared_components_banner_shop_banner_shop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/components/banner-shop/banner-shop.component */
    "./src/app/shared/components/banner-shop/banner-shop.component.ts");

    var DynamicModulesComponent =
    /*#__PURE__*/
    function (_page_page_component_4) {
      _inherits(DynamicModulesComponent, _page_page_component_4);

      function DynamicModulesComponent() {
        _classCallCheck(this, DynamicModulesComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(DynamicModulesComponent).apply(this, arguments));
      }

      return DynamicModulesComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    DynamicModulesComponent.??fac = function DynamicModulesComponent_Factory(t) {
      return ??DynamicModulesComponent_BaseFactory(t || DynamicModulesComponent);
    };

    DynamicModulesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: DynamicModulesComponent,
      selectors: [["app-dynamic-modules"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 544,
      vars: 0,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/fundamentals/dynamic-modules.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "dynamic-modules"], ["routerLink", "/modules"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/modules#dynamic-modules"], ["appAnchor", "", "id", "introduction"], ["routerLink", "/providers"], ["routerLink", "/controllers"], [1, "language-typescript"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/fundamentals/custom-providers"], ["appAnchor", "", "id", "dynamic-module-use-case"], ["appAnchor", "", "id", "config-module-example"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/techniques/configuration#service"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/nest/tree/master/sample/25-dynamic-modules"], [1, "info"], ["id", "module-configuration"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/fundamentals/custom-providers#non-service-based-providers"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/fundamentals/custom-providers#non-class-based-provider-tokens"], ["id", "example"]],
      template: function DynamicModulesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Dynamic modules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Modules chapter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " covers the basics of Nest modules, and includes a brief introduction to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "dynamic modules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, ". This chapter expands on the subject of dynamic modules. Upon completion, you should have a good grasp of what they are and how and when to use them.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Introduction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Most application code examples in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " section of the documentation make use of regular, or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "static");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, ", modules. Modules define groups of components like ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "controllers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " that fit together as a modular part of an overall application. They provide an execution context, or scope, for these components. For example, providers defined in a module are visible to other members of the module without the need to export them. When a provider needs to be visible outside of a module, it is first ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "exported");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " from its host module, and then ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "imported");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " into its consuming module.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Let's walk through a familiar example.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "First, we'll define a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "UsersModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " to provide and export a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "UsersService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "UsersModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " is the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "host");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " module for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "UsersService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "\nimport { Module } from '@nestjs/common';\nimport { UsersService } from './users.service';\n\n@Module({\n  providers: [UsersService],\n  exports: [UsersService],\n})\nexport class UsersModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Next, we'll define an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "AuthModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, ", which imports ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "UsersModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, ", making ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "UsersModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "'s exported providers available inside ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "AuthModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "\nimport { Module } from '@nestjs/common';\nimport { AuthService } from './auth.service';\nimport { UsersModule } from '../users/users.module';\n\n@Module({\n  imports: [UsersModule],\n  providers: [AuthService],\n  exports: [AuthService],\n})\nexport class AuthModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "These constructs allow us to inject ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "UsersService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " in, for example, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "AuthService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, " that is hosted in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "AuthModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "\nimport { Injectable } from '@nestjs/common';\nimport { UsersService } from '../users/users.service';\n\n@Injectable()\nexport class AuthService {\n  constructor(private readonly usersService: UsersService) {}\n  /*\n    Implementation that makes use of this.usersService\n  */\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "We'll refer to this as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "static");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, " module binding. All the information Nest needs to wire together the modules has already been declared in the host and consuming modules. Let's unpack what's happening during this process. Nest makes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "UsersService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, " available inside ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "AuthModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, " by:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Instantiating ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "UsersModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, ", including transitively importing other modules that ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "UsersModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, " itself consumes, and transitively resolving any dependencies (see ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Custom providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, ").");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Instantiating ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "AuthModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, ", and making ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "UsersModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "'s exported providers available to components in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "AuthModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, " (just as if they had been declared in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "AuthModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, ").");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Injecting an instance of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "UsersService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, " in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "AuthService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Dynamic module use case");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "With static module binding, there's no opportunity for the consuming module to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "influence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, " how providers from the host module are configured. Why does this matter? Consider the case where we have a general purpose module that needs to behave differently in different use cases. This is analogous to the concept of a \"plugin\" in many systems, where a generic facility requires some configuration before it can be used by a consumer.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "A good example with Nest is a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "configuration module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, ". Many applications find it useful to externalize configuration details by using a configuration module. This makes it easy to dynamically change the application settings in different deployments: e.g., a development database for developers, a staging database for the staging/testing environment, etc. By delegating the management of configuration parameters to a configuration module, the application source code remains independent of configuration parameters.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "The challenge is that the configuration module itself, since it's generic (similar to a \"plugin\"), needs to be customized by its consuming module. This is where ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "dynamic modules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, " come into play. Using dynamic module features, we can make our configuration module ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "dynamic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, " so that the consuming module can use an API to control how the configuration module is customized at the time it is imported.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "In other words, dynamic modules provide an API for importing one module into another, and customizing the properties and behavior of that module when it is imported, as opposed to using the static bindings we've seen so far.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](160, "app-banner-shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "h4", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "Config module example");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "We'll be using the basic version of the example code from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "configuration chapter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, " for this section. The completed version as of the end of this chapter is available as a working ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "example here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "Our requirement is to make ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "ConfigModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, " accept an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, " object to customize it. Here's the feature we want to support. The basic sample hard-codes the location of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, ".env");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, " file to be in the project root folder. Let's suppose we want to make that configurable, such that you can manage your ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, ".env");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, " files in any folder of your choosing. For example, imagine you want to store your various ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, ".env");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, " files in a folder under the project root called ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "config");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, " (i.e., a sibling folder to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "src");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "). You'd like to be able to choose different folders when using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "ConfigModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, " in different projects.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "Dynamic modules give us the ability to pass parameters into the module being imported so we can change its behavior. Let's see how this works. It's helpful if we start from the end-goal of how this might look from the consuming module's perspective, and then work backwards. First, let's quickly review the example of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "statically");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, " importing the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "ConfigModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, " (i.e., an approach which has no ability to influence the behavior of the imported module). Pay close attention to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "imports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, " array in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "@Module()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, " decorator:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "\nimport { Module } from '@nestjs/common';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { ConfigModule } from './config/config.module';\n\n@Module({\n  imports: [ConfigModule],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "Let's consider what a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "dynamic module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, " import, where we're passing in a configuration object, might look like. Compare the difference in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "imports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, " array between these two examples:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, "\nimport { Module } from '@nestjs/common';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { ConfigModule } from './config/config.module';\n\n@Module({\n  imports: [ConfigModule.register({ folder: './config' })],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "Let's see what's happening in the dynamic example above. What are the moving parts?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "ConfigModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, " is a normal class, so we can infer that it must have a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, "static method");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, " called ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "register()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, ". We know it's static because we're calling it on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "ConfigModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, " class, not on an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, "instance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, " of the class. Note: this method, which we will create soon, can have any arbitrary name, but by convention we should call it either ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, "forRoot()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, "register()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "register()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, " method is defined by us, so we can accept any input arguments we like. In this case, we're going to accept a simple ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, " object with suitable properties, which is the typical case.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, "We can infer that the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "register()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, " method must return something like a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, " since its return value appears in the familiar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "imports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, " list, which we've seen so far includes a list of modules.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, "In fact, what our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](273, "register()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, " method will return is a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "DynamicModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, ". A dynamic module is nothing more than a module created at run-time, with the same exact properties as a static module, plus one additional property called ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, ". Let's quickly review a sample static module declaration, paying close attention to the module options passed in to the decorator:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](283, "\n@Module({\n  imports: [DogsService],\n  controllers: [CatsController],\n  providers: [CatsService],\n  exports: [CatsService]\n})");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "Dynamic modules must return an object with the exact same interface, plus one additional property called ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288, ". The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](290, "module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, " property serves as the name of the module, and should be the same as the class name of the module, as shown in the example below.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "blockquote", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, " For a dynamic module, all properties of the module options object are optional ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "except");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](299, "module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](302, "What about the static ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](304, "register()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, " method? We can now see that its job is to return an object that has the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "DynamicModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, " interface. When we call it, we are effectively providing a module to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, "imports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](311, " list, similar to the way we would do so in the static case by listing a module class name. In other words, the dynamic module API simply returns a module, but rather than fix the properties in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, "@Modules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](314, " decorator, we specify them programmatically.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, "There are still a couple of details to cover to help make the picture complete:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](319, "We can now state that the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](321, "@Module()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](322, " decorator's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](324, "imports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](325, " property can take not only a module class name (e.g., ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](327, "imports: [UsersModule]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](328, "), but also a function ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](330, "returning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](331, " a dynamic module (e.g., ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, "imports: [ConfigModule.register(...)]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](334, ").");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](336, "A dynamic module can itself import other modules. We won't do so in this example, but if the dynamic module depends on providers from other modules, you would import them using the optional ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](338, "imports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](339, " property. Again, this is exactly analogous to the way you'd declare metadata for a static module using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](341, "@Module()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](342, " decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](344, "Armed with this understanding, we can now look at what our dynamic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](346, "ConfigModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, " declaration must look like. Let's take a crack at it.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](350, "\nimport { DynamicModule, Module } from '@nestjs/common';\nimport { ConfigService } from './config.service';\n\n@Module({})\nexport class ConfigModule {\n  static register(): DynamicModule {\n    return {\n      module: ConfigModule,\n      providers: [ConfigService],\n      exports: [ConfigService],\n    };\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](352, "It should now be clear how the pieces tie together. Calling ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](354, "ConfigModule.register(...)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](355, " returns a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](357, "DynamicModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](358, " object with properties which are essentially the same as those that, until now, we've provided as metadata via the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](360, "@Module()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](361, " decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "blockquote", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](364, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](365, " Import ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](367, "DynamicModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](368, " from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](370, "@nestjs/common");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](371, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](373, "Our dynamic module isn't very interesting yet, however, as we haven't introduced any capability to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](375, "configure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](376, " it as we said we would like to do. Let's address that next.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](377, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](378, "Module configuration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](380, "The obvious solution for customizing the behavior of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](382, "ConfigModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](383, " is to pass it an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](385, "options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](386, " object in the static ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](388, "register()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](389, " method, as we guessed above. Let's look once again at our consuming module's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](391, "imports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](392, " property:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](395, "\nimport { Module } from '@nestjs/common';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { ConfigModule } from './config/config.module';\n\n@Module({\n  imports: [ConfigModule.register({ folder: './config' })],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](397, "That nicely handles passing an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](399, "options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](400, " object to our dynamic module. How do we then use that ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](401, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](402, "options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](403, " object in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](405, "ConfigModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](406, "? Let's consider that for a minute. We know that our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](407, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](408, "ConfigModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](409, " is basically a host for providing and exporting an injectable service - the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](411, "ConfigService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](412, " - for use by other providers. It's actually our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](413, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](414, "ConfigService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](415, " that needs to read the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](417, "options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](418, " object to customize its behavior. Let's assume for the moment that we know how to somehow get the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](420, "options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](421, " from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](422, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](423, "register()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](424, " method into the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](425, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](426, "ConfigService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](427, ". With that assumption, we can make a few changes to the service to customize its behavior based on the properties from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](428, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](429, "options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](430, " object. (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](431, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](432, "Note");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](433, ": for the time being, since we ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](434, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](435, "haven't");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](436, " actually determined how to pass it in, we'll just hard-code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](437, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](438, "options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](439, ". We'll fix this in a minute).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](440, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](442, "\nimport { Injectable } from '@nestjs/common';\nimport * as dotenv from 'dotenv';\nimport * as fs from 'fs';\nimport { EnvConfig } from './interfaces';\n\n@Injectable()\nexport class ConfigService {\n  private readonly envConfig: EnvConfig;\n\n  constructor() {\n    const options = { folder: './config' };\n\n    const filePath = `${process.env.NODE_ENV || 'development'}.env`;\n    const envFile = path.resolve(__dirname, '../../', options.folder, filePath);\n    this.envConfig = dotenv.parse(fs.readFileSync(envFile));\n  }\n\n  get(key: string): string {\n    return this.envConfig[key];\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](443, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](444, "Now our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](445, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](446, "ConfigService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](447, " knows how to find the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](449, ".env");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](450, " file in the folder we've specified in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](451, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](452, "options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](453, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](454, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](455, "Our remaining task is to somehow inject the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](457, "options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](458, " object from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](459, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](460, "register()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](461, " step into our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](462, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](463, "ConfigService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](464, ". And of course, we'll use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](465, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](466, "dependency injection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](467, " to do it. This is a key point, so make sure you understand it. Our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](468, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](469, "ConfigModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](470, " is providing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](471, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](472, "ConfigService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](473, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](474, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](475, "ConfigService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](476, " in turn depends on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](477, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](478, "options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](479, " object that is only supplied at run-time. So, at run-time, we'll need to first bind the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](480, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](481, "options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](482, " object to the Nest IoC container, and then have Nest inject it into our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](484, "ConfigService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](485, ". Remember from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](486, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](487, "Custom providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](488, " chapter that providers can ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](489, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](490, "include any value");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](491, " not just services, so we're fine using dependency injection to handle a simple ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](492, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](493, "options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](494, " object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](495, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](496, "Let's tackle binding the options object to the IoC container first. We do this in our static ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](497, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](498, "register()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](499, " method. Remember that we are dynamically constructing a module, and one of the properties of a module is its list of providers. So what we need to do is define our options object as a provider. This will make it injectable into the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](500, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](501, "ConfigService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](502, ", which we'll take advantage of in the next step. In the code below, pay attention to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](503, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](504, "providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](505, " array:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](506, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](507, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](508, "\nimport { DynamicModule, Module } from '@nestjs/common';\n\nimport { ConfigService } from './config.service';\n\n@Module({})\nexport class ConfigModule {\n  static register(options): DynamicModule {\n    return {\n      module: ConfigModule,\n      providers: [\n        {\n          provide: 'CONFIG_OPTIONS',\n          useValue: options,\n        },\n        ConfigService,\n      ],\n      exports: [ConfigService],\n    };\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](509, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](510, "Now we can complete the process by injecting the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](511, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](512, "'CONFIG_OPTIONS'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](513, " provider into the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](514, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](515, "ConfigService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](516, ". Recall that when we define a provider using a non-class token we need to use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](517, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](518, "@Inject()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](519, " decorator ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](520, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](521, "as described here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](522, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](523, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](524, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](525, "\nimport { Injectable, Inject } from '@nestjs/common';\n\nimport * as dotenv from 'dotenv';\nimport * as fs from 'fs';\n\nimport { EnvConfig } from './interfaces';\n\n@Injectable()\nexport class ConfigService {\n  private readonly envConfig: EnvConfig;\n\n  constructor(@Inject('CONFIG_OPTIONS') private options) {\n    const filePath = `${process.env.NODE_ENV || 'development'}.env`;\n    const envFile = path.resolve(__dirname, '../../', options.folder, filePath);\n    this.envConfig = dotenv.parse(fs.readFileSync(envFile));\n  }\n\n  get(key: string): string {\n    return this.envConfig[key];\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](526, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](527, "One final note: for simplicity we used a string-based injection token (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](528, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](529, "'CONFIG_OPTIONS'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](530, ") above, but best practice is to define it as a constant (or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](531, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](532, "Symbol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](533, ") in a separate file, and import that file. For example:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](534, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](535, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](536, "\nexport const CONFIG_OPTIONS = 'CONFIG_OPTIONS';");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](537, "h3", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](538, "Example");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](539, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](540, "A full example of the code in this chapter can be found ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](541, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](542, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](543, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__["HeaderAnchorDirective"], _shared_components_banner_shop_banner_shop_component__WEBPACK_IMPORTED_MODULE_4__["BannerShopComponent"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??DynamicModulesComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](DynamicModulesComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DynamicModulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dynamic-modules',
          templateUrl: './dynamic-modules.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/fundamentals/execution-context/execution-context.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/homepage/pages/fundamentals/execution-context/execution-context.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: ExecutionContextComponent */

  /***/
  function srcAppHomepagePagesFundamentalsExecutionContextExecutionContextComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExecutionContextComponent", function () {
      return ExecutionContextComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _shared_components_banner_enterprise_banner_enterprise_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/components/banner-enterprise/banner-enterprise.component */
    "./src/app/shared/components/banner-enterprise/banner-enterprise.component.ts");
    /* harmony import */


    var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/components/tabs/tabs.component */
    "./src/app/shared/components/tabs/tabs.component.ts");
    /* harmony import */


    var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/pipes/extension.pipe */
    "./src/app/shared/pipes/extension.pipe.ts");

    var ExecutionContextComponent =
    /*#__PURE__*/
    function (_page_page_component_5) {
      _inherits(ExecutionContextComponent, _page_page_component_5);

      function ExecutionContextComponent() {
        _classCallCheck(this, ExecutionContextComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(ExecutionContextComponent).apply(this, arguments));
      }

      return ExecutionContextComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    ExecutionContextComponent.??fac = function ExecutionContextComponent_Factory(t) {
      return ??ExecutionContextComponent_BaseFactory(t || ExecutionContextComponent);
    };

    ExecutionContextComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ExecutionContextComponent,
      selectors: [["app-execution-context"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 499,
      vars: 56,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/fundamentals/execution-context.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "execution-context"], ["routerLink", "/guards"], ["routerLink", "/exception-filters"], ["routerLink", "/interceptors"], ["appAnchor", "", "id", "argumentshost-class"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/exception-filters#arguments-host"], ["routerLink", "/graphql/quick-start"], ["appAnchor", "", "id", "current-application-context"], [1, "language-typescript"], ["appAnchor", "", "id", "host-handler-arguments"], ["appAnchor", "", "id", "executioncontext-class"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/guards#execution-context"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/interceptors#execution-context"], ["appAnchor", "", "id", "reflection-and-metadata"], [1, "filename"], ["appe465fe9ba5bacf3c9bb10a69288c722bff4952f3", ""], [1, "info"], ["appecc356d5e4a01be0940f138bc3ce213c580cc801", ""], ["appeebe3b5c87a8282235b426de7d960ab3a178748d", ""], ["appc1dbf2040ad438cf656729288dfa97029e3bc072", ""], ["app067e26f79a96b42c1d3f8b5517289238726effec", ""], ["appda321d618a7af810e80072882013bbfd1e8abfef", ""], ["app0df307feca254dc9086ca7b50a9f4291249b4757", ""]],
      template: function ExecutionContextComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Execution context");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Nest provides several utility classes that help make it easy to write applications that function across multiple application contexts (e.g., Nest HTTP server-based, microservices and WebSockets application contexts). These utilities provide information about the current execution context which can be used to build generic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "guards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "filters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, ", and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "interceptors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " that can work across a broad set of controllers, methods, and execution contexts.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "We cover two such classes in this chapter: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "ArgumentsHost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "ExecutionContext");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "ArgumentsHost class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "ArgumentsHost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " class provides methods for retrieving the arguments being passed to a handler. It allows choosing the appropriate context (e.g., HTTP, RPC (microservice), or WebSockets) to retrieve the arguments from. The framework provides an instance of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "ArgumentsHost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, ", typically referenced as a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "host");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " parameter, in places where you may want to access it. For example, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "catch()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " method of an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "exception filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " is called with an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "ArgumentsHost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "instance.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "ArgumentsHost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " simply acts as an abstraction over a handler's arguments. For example, for HTTP server applications (when ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "@nestjs/platform-express");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " is being used), the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "host");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " object encapsulates Express's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "[request, response, next]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, " array, where ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "request");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " is the request object, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "response");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, " is the response object, and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " is a function that controls the application's request-response cycle. On the other hand, for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "GraphQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, " applications, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "host");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, " object contains the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "[root, args, context, info]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, " array.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Current application context");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "When building generic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "guards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "filters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, ", and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "interceptors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, " which are meant to run across multiple application contexts, we need a way to determine the type of application that our method is currently running in. Do this with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "getType()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, " method of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "ArgumentsHost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "\nconst type = host.getType();\nif (type === 'http') {\n  // HTTP application\n} else if (type === 'rpc') {\n  // Microservice\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "With the application type available, we can write more generic components, as shown below.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "h4", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Host handler arguments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "To retrieve the array of arguments being passed to the handler, one approach is to use the host object's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "getArgs()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, " method.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "\nconst [req, res, next] = host.getArgs();");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "You can pluck a particular argument by index using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "getArgByIndex()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, " method:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "\nconst request = host.getArgByIndex(0);\nconst response = host.getArgByIndex(1);");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "In these examples we retrieved the request and response objects by index, which is not typically recommended as it couples the application to a particular execution context. Instead, you can make your code more robust and reusable by using one of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "host");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, " object's utility methods to switch to the appropriate application context for your application. The context switch utility methods are shown below.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "\n/**\n * Switch context to RPC.\n */\nswitchToRpc(): RpcArgumentsHost;\n/**\n * Switch context to HTTP.\n */\nswitchToHttp(): HttpArgumentsHost;\n/**\n * Switch context to WebSockets.\n */\nswitchToWs(): WsArgumentsHost;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Let's rewrite the previous example using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "switchToHttp()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, " method. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "host.switchToHttp()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, " helper call returns an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "HttpArgumentsHost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, " object that is appropriate for the HTTP application context. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "HttpArgumentsHost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, " object has two useful methods we can use to extract the desired objects. We also use the Express type assertions in this case to return native Express typed objects:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "\nconst ctx = host.switchToHttp();\nconst request = ctx.getRequest<Request>();\nconst response = ctx.getResponse<Response>();");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "Similarly ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "WsArgumentsHost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "RpcArgumentsHost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, " have methods to return appropriate objects in the microservices and WebSockets contexts. Here are the methods for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "WsArgumentsHost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "\nexport interface WsArgumentsHost {\n  /**\n   * Returns the data object.\n   */\n  getData<T>(): T;\n  /**\n   * Returns the client object.\n   */\n  getClient<T>(): T;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "Following are the methods for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "RpcArgumentsHost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "\nexport interface RpcArgumentsHost {\n  /**\n   * Returns the data object.\n   */\n  getData<T>(): T;\n\n  /**\n   * Returns the context object.\n   */\n  getContext<T>(): T;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "ExecutionContext class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "ExecutionContext");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, " extends ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "ArgumentsHost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, ", providing additional details about the current execution process. Like ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "ArgumentsHost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, ", Nest provides an instance of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "ExecutionContext");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, " in places you may need it, such as in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "canActivate()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, " method of a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "guard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, " and the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "intercept()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, " method of an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "interceptor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, ". It provides the following methods:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "\nexport interface ExecutionContext extends ArgumentsHost {\n  /**\n   * Returns the type of the controller class which the current handler belongs to.\n   */\n  getClass<T>(): Type<T>;\n  /**\n   * Returns a reference to the handler (method) that will be invoked next in the\n   * request pipeline.\n   */\n  getHandler(): Function;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, "getHandler()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, " method returns a reference to the handler about to be invoked. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "getClass()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, " method returns the type of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, "Controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, " class which this particular handler belongs to. For example, in an HTTP context, if the currently processed request is a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "POST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, " request, bound to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "create()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, " method on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "CatsController");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "getHandler()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, " returns a reference to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, "create()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, " method and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "getClass()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, " returns the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, "CatsController");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, "type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, " (not instance).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "\nconst methodKey = ctx.getHandler().name; // \"create\"\nconst className = ctx.getClass().name; // \"CatsController\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "The ability to access references to both the current class and handler method provides great flexibility. Most importantly, it gives us the opportunity to access the metadata set through the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "@SetMetadata()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, " decorator from within guards or interceptors. We cover this use case below.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](245, "app-banner-enterprise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "Reflection and metadata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "Nest provides the ability to attach ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "custom metadata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, " to route handlers through the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "@SetMetadata()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, " decorator. We can then access this metadata from within our class to make certain decisions.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](259, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](260, "app-tabs", null, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264, "\n@Post()\n@SetMetadata('roles', ['admin'])\nasync create(@Body() createCatDto: CreateCatDto) {\n  this.catsService.create(createCatDto);\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "\n@Post()\n@SetMetadata('roles', ['admin'])\n@Bind(Body())\nasync create(createCatDto) {\n  this.catsService.create(createCatDto);\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "blockquote", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, " The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](273, "@SetMetadata()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, " decorator is imported from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "@nestjs/common");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, " package.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "With the construction above, we attached the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, "roles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, " metadata (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "roles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, " is a metadata key and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "['admin']");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288, " is the associated value) to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](290, "create()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, " method. While this works, it's not good practice to use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, "@SetMetadata()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, " directly in your routes. Instead, create your own decorators, as shown below:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](296);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](297, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](298, "app-tabs", null, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](302, "\nimport { SetMetadata } from '@nestjs/common';\n\nexport const Roles = (...roles: string[]) => SetMetadata('roles', roles);");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, "\nimport { SetMetadata } from '@nestjs/common';\n\nexport const Roles = (...roles) => SetMetadata('roles', roles);");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "This approach is much cleaner and more readable, and is strongly typed. Now that we have a custom ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](309, "@Roles()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, " decorator, we can use it to decorate the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](312, "create()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, " method.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](316, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](317, "app-tabs", null, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](321, "\n@Post()\n@Roles('admin')\nasync create(@Body() createCatDto: CreateCatDto) {\n  this.catsService.create(createCatDto);\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](324, "\n@Post()\n@Roles('admin')\n@Bind(Body())\nasync create(createCatDto) {\n  this.catsService.create(createCatDto);\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, "To access the route's role(s) (custom metadata), we'll use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](328, "Reflector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, " helper class, which is provided out of the box by the framework and exposed from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](331, "@nestjs/core");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](332, " package. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](334, "Reflector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](335, " can be injected into a class in the normal way:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](337);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](338, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](339, "app-tabs", null, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](343, "\n@Injectable()\nexport class RolesGuard {\n  constructor(private readonly reflector: Reflector) {}\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](346, "\n@Injectable()\n@Dependencies(Reflector)\nexport class CatsService {\n  constructor(reflector) {\n    this.reflector = reflector;\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "blockquote", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](349, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](350, " The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](352, "Reflector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](353, " class is imported from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](355, "@nestjs/core");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](356, " package.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](358, "Now, to read the handler metadata, use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](360, "get()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](361, " method.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](364, "\nconst roles = this.reflector.get<string[]>('roles', context.getHandler());");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](366, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](368, "Reflector#get");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](369, " method allows us to easily access the metadata by passing in two arguments: a metadata ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](370, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](371, "key");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](372, " and a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](374, "context");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](375, " (decorator target) to retrieve the metadata from. In this example, the specified ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, "key");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](378, " is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](380, "'roles'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](381, " (refer back to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](383, "roles.decorator.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](384, " file above and the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](386, "SetMetadata()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](387, " call made there). The context is provided by the call to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](389, "context.getHandler()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](390, ", which results in extracting the metadata for the currently processed route handler. Remember, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](392, "getHandler()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](393, " gives us a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](395, "reference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](396, " to the route handler function.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](398, "Alternatively, we may organize our controller by applying metadata at the controller level, applying to all routes in the controller class.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](400);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](401, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](402, "app-tabs", null, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](406, "\n@Roles('admin')\n@Controller('cats')\nexport class CatsController {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](407, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](409, "\n@Roles('admin')\n@Controller('cats')\nexport class CatsController {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](411, "In this case, to extract controller metadata, we pass ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](413, "context.getClass()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](414, " as the second argument (to provide the controller class as the context for metadata extraction) instead of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](415, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](416, "context.getHandler()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](417, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](418, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](419);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](420, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](421, "app-tabs", null, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](423, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](425, "\nconst roles = this.reflector.get<string[]>('roles', context.getClass());");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](426, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](427, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](428, "\nconst roles = this.reflector.get('roles', context.getClass());");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](429, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](430, "Given the ability to provide metadata at multiple levels, you may need to extract and merge metadata from several contexts. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](431, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](432, "Reflector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](433, " class provides two utility methods used to help with this. These methods extract ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](434, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](435, "both");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](436, " controller and method metadata at once, and combine them in different ways.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](437, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](438, "Consider the following scenario, where you've supplied ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](439, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](440, "'roles'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](441, " metadata at both levels.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](442, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](443);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](444, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](445, "app-tabs", null, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](447, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](449, "\n@Roles('user')\n@Controller('cats')\nexport class CatsController {\n  @Post()\n  @Roles('admin')\n  async create(@Body() createCatDto: CreateCatDto) {\n    this.catsService.create(createCatDto);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](450, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](451, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](452, "\n@Roles('user')\n@Controller('cats')\nexport class CatsController {}\n  @Post()\n  @Roles('admin')\n  @Bind(Body())\n  async create(createCatDto) {\n    this.catsService.create(createCatDto);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](453, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](454, "If your intent is to specify ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](455, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](456, "'user'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](457, " as the default role, and override it selectively for certain methods, you would probably use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](458, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](459, "getAllAndOverride()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](460, " method.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](461, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](462, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](463, "\nconst roles = this.reflector.getAllAndOverride<string[]>('roles', [\n  context.getHandler(),\n  context.getClass(),\n]);");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](464, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](465, "A guard with this code, running in the context of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](466, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](467, "create()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](468, " method, with the above metadata, would result in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](469, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](470, "roles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](471, " containing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](473, "['admin']");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](474, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](475, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](476, "To get metadata for both and merge it (this method merges both arrays and objects), use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](477, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](478, "getAllAndMerge()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](479, " method:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](480, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](481, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](482, "\nconst roles = this.reflector.getAllAndMerge<string[]>('roles', [\n  context.getHandler(),\n  context.getClass(),\n]);");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](484, "This would result in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](485, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](486, "roles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](487, " containing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](488, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](489, "['user', 'admin']");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](490, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](491, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](492, "For both of these merge methods, you pass the metadata key as the first argument, and an array of metadata target contexts (i.e., calls to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](493, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](494, "getHandler()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](495, " and/or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](496, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](497, "getClass())");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](498, " methods) as the second argument.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](261);

          var _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](299);

          var _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](318);

          var _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](340);

          var _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](403);

          var _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](422);

          var _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](446);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](258);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](259, 35, "cats.controller", _r133.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r133.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r133.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](297, 38, "roles.decorator", _r134.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r134.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r134.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](316, 41, "cats.controller", _r135.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r135.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r135.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](338, 44, "roles.guard", _r136.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r136.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r136.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](401, 47, "cats.controller", _r137.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r137.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r137.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](420, 50, "roles.guard", _r138.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r138.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r138.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](444, 53, "cats.controller", _r139.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r139.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r139.isJsActive);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__["HeaderAnchorDirective"], _shared_components_banner_enterprise_banner_enterprise_component__WEBPACK_IMPORTED_MODULE_4__["BannerEnterpriseComponent"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_5__["TabsComponent"]],
      pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_6__["ExtensionPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??ExecutionContextComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](ExecutionContextComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ExecutionContextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-execution-context',
          templateUrl: './execution-context.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/fundamentals/fundamentals.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/homepage/pages/fundamentals/fundamentals.module.ts ***!
    \********************************************************************/

  /*! exports provided: FundamentalsModule */

  /***/
  function srcAppHomepagePagesFundamentalsFundamentalsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FundamentalsModule", function () {
      return FundamentalsModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _async_components_async_components_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./async-components/async-components.component */
    "./src/app/homepage/pages/fundamentals/async-components/async-components.component.ts");
    /* harmony import */


    var _circular_dependency_circular_dependency_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./circular-dependency/circular-dependency.component */
    "./src/app/homepage/pages/fundamentals/circular-dependency/circular-dependency.component.ts");
    /* harmony import */


    var _dependency_injection_dependency_injection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dependency-injection/dependency-injection.component */
    "./src/app/homepage/pages/fundamentals/dependency-injection/dependency-injection.component.ts");
    /* harmony import */


    var _dynamic_modules_dynamic_modules_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dynamic-modules/dynamic-modules.component */
    "./src/app/homepage/pages/fundamentals/dynamic-modules/dynamic-modules.component.ts");
    /* harmony import */


    var _lifecycle_events_lifecycle_events_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./lifecycle-events/lifecycle-events.component */
    "./src/app/homepage/pages/fundamentals/lifecycle-events/lifecycle-events.component.ts");
    /* harmony import */


    var _module_reference_module_reference_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./module-reference/module-reference.component */
    "./src/app/homepage/pages/fundamentals/module-reference/module-reference.component.ts");
    /* harmony import */


    var _execution_context_execution_context_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./execution-context/execution-context.component */
    "./src/app/homepage/pages/fundamentals/execution-context/execution-context.component.ts");
    /* harmony import */


    var _platform_agnosticism_platform_agnosticism_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./platform-agnosticism/platform-agnosticism.component */
    "./src/app/homepage/pages/fundamentals/platform-agnosticism/platform-agnosticism.component.ts");
    /* harmony import */


    var _provider_scopes_provider_scopes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./provider-scopes/provider-scopes.component */
    "./src/app/homepage/pages/fundamentals/provider-scopes/provider-scopes.component.ts");
    /* harmony import */


    var _unit_testing_unit_testing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./unit-testing/unit-testing.component */
    "./src/app/homepage/pages/fundamentals/unit-testing/unit-testing.component.ts");

    var routes = [{
      path: 'dynamic-modules',
      component: _dynamic_modules_dynamic_modules_component__WEBPACK_IMPORTED_MODULE_7__["DynamicModulesComponent"],
      data: {
        title: 'Dynamic modules'
      }
    }, {
      path: 'dependency-injection',
      redirectTo: 'custom-providers'
    }, {
      path: 'custom-providers',
      component: _dependency_injection_dependency_injection_component__WEBPACK_IMPORTED_MODULE_6__["DependencyInjectionComponent"],
      data: {
        title: 'Custom providers'
      }
    }, {
      path: 'platform-agnosticism',
      component: _platform_agnosticism_platform_agnosticism_component__WEBPACK_IMPORTED_MODULE_11__["PlatformAgnosticismComponent"],
      data: {
        title: 'Platform agnosticism'
      }
    }, {
      path: 'async-components',
      redirectTo: 'async-providers'
    }, {
      path: 'async-providers',
      component: _async_components_async_components_component__WEBPACK_IMPORTED_MODULE_4__["AsyncComponentsComponent"],
      data: {
        title: 'Async providers'
      }
    }, {
      path: 'module-ref',
      component: _module_reference_module_reference_component__WEBPACK_IMPORTED_MODULE_9__["ModuleRefComponent"],
      data: {
        title: 'Module reference'
      }
    }, {
      path: 'unit-testing',
      redirectTo: 'testing'
    }, {
      path: 'e2e-testing',
      redirectTo: 'testing'
    }, {
      path: 'testing',
      component: _unit_testing_unit_testing_component__WEBPACK_IMPORTED_MODULE_13__["UnitTestingComponent"],
      data: {
        title: 'Testing'
      }
    }, {
      path: 'injection-scopes',
      component: _provider_scopes_provider_scopes_component__WEBPACK_IMPORTED_MODULE_12__["ProviderScopesComponent"],
      data: {
        title: 'Injection scopes'
      }
    }, {
      path: 'execution-context',
      component: _execution_context_execution_context_component__WEBPACK_IMPORTED_MODULE_10__["ExecutionContextComponent"],
      data: {
        title: 'Execution context'
      }
    }, {
      path: 'lifecycle-events',
      component: _lifecycle_events_lifecycle_events_component__WEBPACK_IMPORTED_MODULE_8__["LifecycleEventsComponent"],
      data: {
        title: 'Lifecycle events'
      }
    }, {
      path: 'circular-dependency',
      component: _circular_dependency_circular_dependency_component__WEBPACK_IMPORTED_MODULE_5__["CircularDependencyComponent"],
      data: {
        title: 'Circular Dependency'
      }
    }];

    var FundamentalsModule = function FundamentalsModule() {
      _classCallCheck(this, FundamentalsModule);
    };

    FundamentalsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: FundamentalsModule
    });
    FundamentalsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function FundamentalsModule_Factory(t) {
        return new (t || FundamentalsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](FundamentalsModule, {
        declarations: [_async_components_async_components_component__WEBPACK_IMPORTED_MODULE_4__["AsyncComponentsComponent"], _platform_agnosticism_platform_agnosticism_component__WEBPACK_IMPORTED_MODULE_11__["PlatformAgnosticismComponent"], _dependency_injection_dependency_injection_component__WEBPACK_IMPORTED_MODULE_6__["DependencyInjectionComponent"], _dynamic_modules_dynamic_modules_component__WEBPACK_IMPORTED_MODULE_7__["DynamicModulesComponent"], _unit_testing_unit_testing_component__WEBPACK_IMPORTED_MODULE_13__["UnitTestingComponent"], _circular_dependency_circular_dependency_component__WEBPACK_IMPORTED_MODULE_5__["CircularDependencyComponent"], _execution_context_execution_context_component__WEBPACK_IMPORTED_MODULE_10__["ExecutionContextComponent"], _provider_scopes_provider_scopes_component__WEBPACK_IMPORTED_MODULE_12__["ProviderScopesComponent"], _lifecycle_events_lifecycle_events_component__WEBPACK_IMPORTED_MODULE_8__["LifecycleEventsComponent"], _module_reference_module_reference_component__WEBPACK_IMPORTED_MODULE_9__["ModuleRefComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](FundamentalsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          declarations: [_async_components_async_components_component__WEBPACK_IMPORTED_MODULE_4__["AsyncComponentsComponent"], _platform_agnosticism_platform_agnosticism_component__WEBPACK_IMPORTED_MODULE_11__["PlatformAgnosticismComponent"], _dependency_injection_dependency_injection_component__WEBPACK_IMPORTED_MODULE_6__["DependencyInjectionComponent"], _dynamic_modules_dynamic_modules_component__WEBPACK_IMPORTED_MODULE_7__["DynamicModulesComponent"], _unit_testing_unit_testing_component__WEBPACK_IMPORTED_MODULE_13__["UnitTestingComponent"], _circular_dependency_circular_dependency_component__WEBPACK_IMPORTED_MODULE_5__["CircularDependencyComponent"], _execution_context_execution_context_component__WEBPACK_IMPORTED_MODULE_10__["ExecutionContextComponent"], _provider_scopes_provider_scopes_component__WEBPACK_IMPORTED_MODULE_12__["ProviderScopesComponent"], _lifecycle_events_lifecycle_events_component__WEBPACK_IMPORTED_MODULE_8__["LifecycleEventsComponent"], _module_reference_module_reference_component__WEBPACK_IMPORTED_MODULE_9__["ModuleRefComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/fundamentals/lifecycle-events/lifecycle-events.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/homepage/pages/fundamentals/lifecycle-events/lifecycle-events.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: LifecycleEventsComponent */

  /***/
  function srcAppHomepagePagesFundamentalsLifecycleEventsLifecycleEventsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LifecycleEventsComponent", function () {
      return LifecycleEventsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/components/tabs/tabs.component */
    "./src/app/shared/components/tabs/tabs.component.ts");

    var LifecycleEventsComponent =
    /*#__PURE__*/
    function (_page_page_component_6) {
      _inherits(LifecycleEventsComponent, _page_page_component_6);

      function LifecycleEventsComponent() {
        _classCallCheck(this, LifecycleEventsComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(LifecycleEventsComponent).apply(this, arguments));
      }

      return LifecycleEventsComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    LifecycleEventsComponent.??fac = function LifecycleEventsComponent_Factory(t) {
      return ??LifecycleEventsComponent_BaseFactory(t || LifecycleEventsComponent);
    };

    LifecycleEventsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: LifecycleEventsComponent,
      selectors: [["app-lifecycle-events"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 204,
      vars: 12,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/fundamentals/lifecycle-events.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "lifecycle-events"], ["appAnchor", "", "id", "lifecycle-sequence"], ["src", "/assets/lifecycle-events.png"], [2, "clear", "both"], ["appAnchor", "", "id", "lifecycle-events-1"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/fundamentals/lifecycle-events#application-shutdown"], ["appAnchor", "", "id", "usage"], [1, "filename"], ["appc96c161e4e28cd50d1f82aa8c1bab2fdd569f286", ""], [1, "language-typescript"], ["appAnchor", "", "id", "asynchronous-initialization"], ["appee9073b345801b80c060aeb058760d6911ffe6a6", ""], ["appAnchor", "", "id", "application-shutdown"], ["rel", "nofollow", "target", "_blank", "href", "https://kubernetes.io/"], ["rel", "nofollow", "target", "_blank", "href", "https://www.heroku.com/"], ["appfb6d3ff89638312f80da2dd522a86281a910f296", ""]],
      template: function LifecycleEventsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Lifecycle Events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "A Nest application, as well as every application element, has a lifecycle managed by Nest. Nest provides ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "lifecycle hooks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " that give visibility into key lifecycle events, and the ability to act (run registered code on your ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "injectable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, ") when they occur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Lifecycle sequence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "The following diagram depicts the sequence of key application lifecycle events, from the time the application is bootstrapped until the node process exits. We can divide the overall lifecycle into three phases: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "initializing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "running");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "terminating");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, ". Using this lifecycle, you can plan for appropriate initialization of modules and services, manage active connections, and gracefully shutdown your application when it receives a termination signal.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Lifecycle events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Lifecycle events happen during application bootstrapping and shutdown. Nest calls registered lifecycle hook methods on ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "modules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "injectables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "controllers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " at each of the following lifecycle events (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "shutdown hooks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " need to be enabled first, as described ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "below");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "). As shown in the diagram above, Nest also calls the appropriate underlying methods to begin listening for connections, and to stop listening for connections.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Lifecycle hook method");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Lifecycle event triggering the hook method call");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "onModuleInit()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Called once the host module's dependencies have been resolved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "onApplicationBootstrap()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Called once all modules have been initialized, but before listening for connections.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "onModuleDestroy()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Called after a termination signal (e.g., ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "SIGTERM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, ") has been received.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "beforeApplicationShutdown()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Called after all ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "onModuleDestroy()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, " handlers have completed (Promises resolved or rejected);");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "once complete (Promises resolved or rejected), all existing connections will be closed (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "app.close()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, " called).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "onApplicationShutdown()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Called after connections close (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "app.close()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, " resolves).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Usage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Each lifecycle hook is represented by an interface. Interfaces are technically optional because they do not exist after TypeScript compilation. Nonetheless, it's good practice to use them in order to benefit from strong typing and editor tooling. To register a lifecycle hook, implement the appropriate interface. For example, to register a method to be called during module initialization on a particular class (e.g., Controller, Provider or Module), implement the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "OnModuleInit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, " interface by supplying an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "onModuleInit()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, " method, as shown below:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](122, "app-tabs", null, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "code", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "\nimport { Injectable, OnModuleInit } from '@nestjs/common';\n\n@Injectable()\nexport class UsersService implements OnModuleInit {\n  onModuleInit() {\n    console.log(`The module has been initialized.`);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "code", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "\nimport { Injectable } from '@nestjs/common';\n\n@Injectable()\nexport class UsersService {\n  onModuleInit() {\n    console.log(`The module has been initialized.`);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Asynchronous initialization");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Both the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "OnModuleInit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "OnApplicationBootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, " hooks allow you to defer the application initialization process (return a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Promise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, " or mark the method as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "await");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, " an asynchronous method completion in the method body).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](151, "app-tabs", null, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "code", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "\nasync onModuleInit(): Promise<void> {\n  await this.fetch();\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "code", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "\nasync onModuleInit() {\n  await this.fetch();\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "h4", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "Application shutdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "beforeApplicationShutdown()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "onApplicationShutdown()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, " hooks are called in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "terminating");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, " phase (in response to system signals such as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "SIGTERM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "). This feature is often used with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "Kubernetes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "Heroku");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, " or similar services.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "To use these hooks you must activate a listener which listens to shutdown signals.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "code", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "\nimport { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  // Starts listening for shutdown hooks\n  app.enableShutdownHooks();\n  await app.listen(3000);\n}\nbootstrap();");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "When the application receives a termination signal it will call any registered ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "beforeApplicationShutdown()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, ", then ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "onApplicationShutdown()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, " methods (in the sequence described above) with the corresponding signal as the first parameter. If a registered function awaits an asynchronous call (returns a promise), Nest will not continue in the sequence until the promise is resolved or rejected.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](196, "app-tabs", null, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "code", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "\n@Injectable()\nclass UsersService implements OnApplicationShutdown {\n  onApplicationShutdown(signal: string) {\n    console.log(signal); // e.g. \"SIGINT\"\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "code", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "\n@Injectable()\nclass UsersService implements OnApplicationShutdown {\n  onApplicationShutdown(signal) {\n    console.log(signal); // e.g. \"SIGINT\"\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](123);

          var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](152);

          var _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](197);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r121.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r121.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r122.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r122.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r123.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r123.isJsActive);
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??LifecycleEventsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](LifecycleEventsComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LifecycleEventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lifecycle-events',
          templateUrl: './lifecycle-events.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/fundamentals/module-reference/module-reference.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/homepage/pages/fundamentals/module-reference/module-reference.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: ModuleRefComponent */

  /***/
  function srcAppHomepagePagesFundamentalsModuleReferenceModuleReferenceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModuleRefComponent", function () {
      return ModuleRefComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/components/tabs/tabs.component */
    "./src/app/shared/components/tabs/tabs.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_banner_shop_banner_shop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/components/banner-shop/banner-shop.component */
    "./src/app/shared/components/banner-shop/banner-shop.component.ts");
    /* harmony import */


    var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/pipes/extension.pipe */
    "./src/app/shared/pipes/extension.pipe.ts");

    var ModuleRefComponent =
    /*#__PURE__*/
    function (_page_page_component_7) {
      _inherits(ModuleRefComponent, _page_page_component_7);

      function ModuleRefComponent() {
        _classCallCheck(this, ModuleRefComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(ModuleRefComponent).apply(this, arguments));
      }

      return ModuleRefComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    ModuleRefComponent.??fac = function ModuleRefComponent_Factory(t) {
      return ??ModuleRefComponent_BaseFactory(t || ModuleRefComponent);
    };

    ModuleRefComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ModuleRefComponent,
      selectors: [["app-module-ref"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 242,
      vars: 58,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/fundamentals/module-reference.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "module-reference"], [1, "filename"], ["app1392a58b3bd945185652876f6d6359af1c6b7e59", ""], [1, "language-typescript"], [1, "info"], ["appAnchor", "", "id", "retrieving-instances"], ["app75e3d972b4e6da1defa60c23b1b708bcdab92d43", ""], [1, "warning"], ["href", "https://docs.nestjs.com/fundamentals/module-ref#resolving-scoped-providers"], ["routerLink", "/fundamentals/injection-scopes"], ["appAnchor", "", "id", "resolving-scoped-providers"], ["app18230a88ffbd8e43f339ec019a7f465dc55fb8cb", ""], ["app3234a7e0035d25d135e04d3cd869fbe742dbf486", ""], ["appb4b805dbdd39d1e6c0405081595af13f992d6518", ""], ["appAnchor", "", "id", "getting-current-sub-tree"], ["app29dc0d5515fad20b62f1cfa01c1c3a53e8020b2d", ""], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/fundamentals/injection-scopes#request-provider"], ["appAnchor", "", "id", "instantiating-classes-dynamically"], ["app9798f0a4fb03c95dddf5f45ad04c7dded88709e3", ""]],
      template: function ModuleRefComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Module reference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Nest provides the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "ModuleRef");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " class to navigate the internal list of providers and obtain a reference to any provider using its injection token as a lookup key. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "ModuleRef");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " class also provides a way to dynamically instantiate both static and scoped providers. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "ModuleRef");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " can be injected into a class in the normal way:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](20, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "app-tabs", null, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "\n@Injectable()\nexport class CatsService {\n  constructor(private readonly moduleRef: ModuleRef) {}\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "\n@Injectable()\n@Dependencies(ModuleRef)\nexport class CatsService {\n  constructor(moduleRef) {\n    this.moduleRef = moduleRef;\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "blockquote", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "ModuleRef");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " class is imported from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "@nestjs/core");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " package.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Retrieving instances");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "ModuleRef");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " instance (hereafter we'll refer to it as the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "module reference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, ") has a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "get()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " method. This method retrieve a provider, controller, or injectable (e.g., guard, interceptor, etc.) that exists (has been instantiated) in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "current");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " module using its injection token/class name.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](58, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "app-tabs", null, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "\n@Injectable()\nexport class CatsService implements OnModuleInit {\n  private service: Service;\n  constructor(private readonly moduleRef: ModuleRef) {}\n\n  onModuleInit() {\n    this.service = this.moduleRef.get(Service);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "\n@Injectable()\n@Dependencies(ModuleRef)\nexport class CatsService {\n  constructor(moduleRef) {\n    this.moduleRef = moduleRef;\n  }\n\n  onModuleInit() {\n    this.service = this.moduleRef.get(Service);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "blockquote", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " You can't retrieve scoped providers (transient or request-scoped) with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "get()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, " method. Instead, use the technique described ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "below");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, ". Learn how to control scopes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "To retrieve a provider from the global context (for example, if the provider has been injected in a different module), pass the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, " option as a second argument to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "get()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "\nthis.moduleRef.get(Service, { strict: false });");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Resolving scoped providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "To dynamically resolve a scoped provider (transient or request-scoped), use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "resolve()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, " method, passing the provider's injection token as an argument.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](101, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "app-tabs", null, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "\n@Injectable()\nexport class CatsService implements OnModuleInit {\n  private transientService: TransientService;\n  constructor(private readonly moduleRef: ModuleRef) {}\n\n  async onModuleInit() {\n    this.transientService = await this.moduleRef.resolve(TransientService);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "\n@Injectable()\n@Dependencies(ModuleRef)\nexport class CatsService {\n  constructor(moduleRef) {\n    this.moduleRef = moduleRef;\n  }\n\n  async onModuleInit() {\n    this.transientService = await this.moduleRef.resolve(TransientService);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "resolve()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, " method returns a unique instance of the provider, from its own ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "DI container sub-tree");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, ". Each sub-tree has a unique ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "context identifier");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, ". Thus, if you call this method more than once and compare instance references, you will see that they are not equal.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](123, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](124, "app-tabs", null, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "\n@Injectable()\nexport class CatsService implements OnModuleInit {\n  constructor(private readonly moduleRef: ModuleRef) {}\n\n  async onModuleInit() {\n    const transientServices = await Promise.all([\n      this.moduleRef.resolve(TransientService),\n      this.moduleRef.resolve(TransientService),\n    ]);\n    console.log(transientServices[0] === transientServices[1]); // false\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "\n@Injectable()\n@Dependencies(ModuleRef)\nexport class CatsService {\n  constructor(moduleRef) {\n    this.moduleRef = moduleRef;\n  }\n\n  async onModuleInit() {\n    const transientServices = await Promise.all([\n      this.moduleRef.resolve(TransientService),\n      this.moduleRef.resolve(TransientService),\n    ]);\n    console.log(transientServices[0] === transientServices[1]); // false\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "To generate a single instance across multiple ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "resolve()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, " calls, and ensure they share the same generated DI container sub-tree, you can pass a context identifier to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "resolve()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, " method. Use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "ContextIdFactory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, " class to generate a context identifier. This class provides a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "create()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, " method that returns an appropriate unique identifier.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](148, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](149, "app-tabs", null, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "\n@Injectable()\nexport class CatsService implements OnModuleInit {\n  constructor(private readonly moduleRef: ModuleRef) {}\n\n  async onModuleInit() {\n    const contextId = ContextIdFactory.create();\n    const transientServices = await Promise.all([\n      this.moduleRef.resolve(TransientService, contextId),\n      this.moduleRef.resolve(TransientService, contextId),\n    ]);\n    console.log(transientServices[0] === transientServices[1]); // true\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "\n@Injectable()\n@Dependencies(ModuleRef)\nexport class CatsService {\n  constructor(moduleRef) {\n    this.moduleRef = moduleRef;\n  }\n\n  async onModuleInit() {\n    const contextId = ContextIdFactory.create();\n    const transientServices = await Promise.all([\n      this.moduleRef.resolve(TransientService, contextId),\n      this.moduleRef.resolve(TransientService, contextId),\n    ]);\n    console.log(transientServices[0] === transientServices[1]); // true\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "blockquote", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, " The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "ContextIdFactory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, " class is imported from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "@nestjs/core");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, " package.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "h4", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "Getting current sub-tree");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "Occasionally, you may want to resolve an instance of a request-scoped provider within a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "request context");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, ". Let's say that ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, " is request-scoped and you want to resolve the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "CatsRepository");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, " instance which is also marked as a request-scoped provider. In order to share the same DI container sub-tree, you must obtain the current context identifier instead of generating a new one (e.g., with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "ContextIdFactory.create()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, " function, as shown above). To obtain the current context identifier, start by injecting the request object using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "@Inject()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, " decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](189, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](190, "app-tabs", null, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "\n@Injectable()\nexport class CatsService {\n  constructor(\n    @Inject(REQUEST) private readonly request: Record<string, unknown>,\n  ) {}\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "\n@Injectable()\n@Dependencies(REQUEST)\nexport class CatsService {\n  constructor(request) {\n    this.request = request;\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "blockquote", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, " Learn more about the request provider ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "Now, use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "getByRequest()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, " method of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, "ContextIdFactory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, " class to create a context id based on the request object, and pass this to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "resolve()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, " call:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "\nconst contextId = ContextIdFactory.getByRequest(this.request);\nconst catsRepository = await this.moduleRef.resolve(CatsRepository, contextId);");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "h4", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "Instantiating classes dynamically");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "To dynamically instantiate a class that wasn't previously registered as a provider, use the module reference's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, "create()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, " method.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](229, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](230, "app-tabs", null, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, "\n@Injectable()\nexport class CatsService implements OnModuleInit {\n  private catsFactory: CatsFactory;\n  constructor(private readonly moduleRef: ModuleRef) {}\n\n  async onModuleInit() {\n    this.catsFactory = await this.moduleRef.create(CatsFactory);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "\n@Injectable()\n@Dependencies(ModuleRef)\nexport class CatsService {\n  constructor(moduleRef) {\n    this.moduleRef = moduleRef;\n  }\n\n  async onModuleInit() {\n    this.catsFactory = await this.moduleRef.create(CatsFactory);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "This technique enables you to conditionally instantiate different classes outside of the framework container.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](241, "app-banner-shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

          var _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](60);

          var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](103);

          var _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](125);

          var _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](150);

          var _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](191);

          var _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](231);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](20, 37, "cats.service", _r125.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r125.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r125.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](58, 40, "cats.service", _r126.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r126.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r126.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", "{", " strict: false ", "}", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](101, 43, "cats.service", _r127.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r127.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r127.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](123, 46, "cats.service", _r128.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r128.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r128.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](148, 49, "cats.service", _r129.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r129.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r129.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](189, 52, "cats.service", _r130.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r130.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r130.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](229, 55, "cats.service", _r131.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r131.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r131.isJsActive);
        }
      },
      directives: [_shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__["HeaderAnchorDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _shared_components_banner_shop_banner_shop_component__WEBPACK_IMPORTED_MODULE_5__["BannerShopComponent"]],
      pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_6__["ExtensionPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??ModuleRefComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](ModuleRefComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ModuleRefComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-module-ref',
          templateUrl: './module-reference.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/fundamentals/platform-agnosticism/platform-agnosticism.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/homepage/pages/fundamentals/platform-agnosticism/platform-agnosticism.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: PlatformAgnosticismComponent */

  /***/
  function srcAppHomepagePagesFundamentalsPlatformAgnosticismPlatformAgnosticismComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlatformAgnosticismComponent", function () {
      return PlatformAgnosticismComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PlatformAgnosticismComponent =
    /*#__PURE__*/
    function (_page_page_component_8) {
      _inherits(PlatformAgnosticismComponent, _page_page_component_8);

      function PlatformAgnosticismComponent() {
        _classCallCheck(this, PlatformAgnosticismComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(PlatformAgnosticismComponent).apply(this, arguments));
      }

      return PlatformAgnosticismComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    PlatformAgnosticismComponent.??fac = function PlatformAgnosticismComponent_Factory(t) {
      return ??PlatformAgnosticismComponent_BaseFactory(t || PlatformAgnosticismComponent);
    };

    PlatformAgnosticismComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: PlatformAgnosticismComponent,
      selectors: [["app-platform-agnosticism"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 41,
      vars: 0,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/fundamentals/platform-agnosticism.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "platform-agnosticism"], ["appAnchor", "", "id", "build-once-use-everywhere"], ["routerLink", "/microservices/basics"], ["routerLink", "/websockets/gateways"], ["routerLink", "/graphql/quick-start"], ["routerLink", "/application-context"]],
      template: function PlatformAgnosticismComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Platform agnosticism");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Nest is a platform-agnostic framework. This means you can develop ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "reusable logical parts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " that can be used across different types of applications. For example, most components can be re-used without change across different underlying HTTP server frameworks (e.g., Express and Fastify), and even across different ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "types");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " of applications (e.g., HTTP server frameworks, Microservices with different transport layers, and Web Sockets).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Build once, use everywhere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " section of the documentation primarily shows coding techniques using HTTP server frameworks (e.g., apps providing a REST API or providing an MVC-style server-side rendered app). However, all those building blocks can be used on top of different transport layers (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "microservices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "websockets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, ").");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Furthermore, Nest comes with a dedicated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "GraphQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " module. You can use GraphQL as your API layer interchangeably with providing a REST API.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "In addition, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "application context");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " feature helps to create any kind of Node.js application - including things like CRON jobs and CLI apps - on top of Nest.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Nest aspires to be a full-fledged platform for Node.js apps that brings a higher-level of modularity and reusability to your applications. Build once, use everywhere!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??PlatformAgnosticismComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](PlatformAgnosticismComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PlatformAgnosticismComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-platform-agnosticism',
          templateUrl: './platform-agnosticism.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/fundamentals/provider-scopes/provider-scopes.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/homepage/pages/fundamentals/provider-scopes/provider-scopes.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: ProviderScopesComponent */

  /***/
  function srcAppHomepagePagesFundamentalsProviderScopesProviderScopesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProviderScopesComponent", function () {
      return ProviderScopesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_banner_courses_banner_courses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/components/banner-courses/banner-courses.component */
    "./src/app/shared/components/banner-courses/banner-courses.component.ts");

    var ProviderScopesComponent =
    /*#__PURE__*/
    function (_page_page_component_9) {
      _inherits(ProviderScopesComponent, _page_page_component_9);

      function ProviderScopesComponent() {
        _classCallCheck(this, ProviderScopesComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(ProviderScopesComponent).apply(this, arguments));
      }

      return ProviderScopesComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    ProviderScopesComponent.??fac = function ProviderScopesComponent_Factory(t) {
      return ??ProviderScopesComponent_BaseFactory(t || ProviderScopesComponent);
    };

    ProviderScopesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ProviderScopesComponent,
      selectors: [["app-provider-scopes"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 178,
      vars: 0,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/fundamentals/provider-scopes.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "injection-scopes"], ["appAnchor", "", "id", "provider-scope"], [1, "info"], ["appAnchor", "", "id", "usage"], [1, "language-typescript"], ["routerLink", "/fundamentals/custom-providers"], [1, "warning"], ["appAnchor", "", "id", "controller-scope"], ["appAnchor", "", "id", "scope-hierarchy"], ["appAnchor", "", "id", "request-provider"], ["routerLink", "/graphql/quick-start"], ["appAnchor", "", "id", "performance"]],
      template: function ProviderScopesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Injection scopes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "For people coming from different programming language backgrounds, it might be unexpected to learn that in Nest, almost everything is shared across incoming requests. We have a connection pool to the database, singleton services with global state, etc. Remember that Node.js doesn't follow the request/response Multi-Threaded Stateless Model in which every request is processed by a separate thread. Hence, using singleton instances is fully ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "safe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " for our applications.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "However, there are edge-cases when request-based lifetime may be the desired behavior, for instance per-request caching in GraphQL applications, request tracking, and multi-tenancy. Injection scopes provide a mechanism to obtain the desired provider lifetime behavior.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Provider scope");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "A provider can have any of the following scopes:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "SINGLETON");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "A single instance of the provider is shared across the entire application. The instance lifetime is tied directly to the application lifecycle. Once the application has bootstrapped, all singleton providers have been instantiated. Singleton scope is used by default.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "REQUEST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "A new instance of the provider is created exclusively for each incoming ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "request");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, ". The instance is garbage-collected after the request has completed processing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "TRANSIENT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Transient providers are not shared across consumers. Each consumer that injects a transient provider will receive a new, dedicated instance.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "blockquote", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " Using singleton scope is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "recommended");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " for most use cases. Sharing providers across consumers and across requests means that an instance can be cached and its initialization occurs only once, during application startup.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Usage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Specify injection scope by passing the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "scope");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " property to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "@Injectable()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " decorator options object:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "\nimport { Injectable, Scope } from '@nestjs/common';\n\n@Injectable({ scope: Scope.REQUEST })\nexport class CatsService {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Similarly, for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "custom providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, ", set the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "scope");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " property in the long-hand form for a provider registration:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "\n{\n  provide: 'CACHE_MANAGER',\n  useClass: CacheManager,\n  scope: Scope.TRANSIENT,\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "blockquote", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, " Import the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Scope");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, " enum from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "@nestjs/common");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "blockquote", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, " Gateways should not use request-scoped providers because they must act as singletons. Each gateway encapsulates a real socket and cannot be instantiated multiple times.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Singleton scope is used by default, and need not be declared. If you do want to declare a provider as singleton scoped, use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Scope.DEFAULT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, " value for the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "scope");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, " property.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Controller scope");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Controllers can also have scope, which applies to all request method handlers declared in that controller. Like provider scope, the scope of a controller declares its lifetime. For a request-scoped controller, a new instance is created for each inbound request, and garbage-collected when the request has completed processing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Declare controller scope with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "scope");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, " property of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "ControllerOptions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, " object:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "\n@Controller({\n  path: 'cats',\n  scope: Scope.REQUEST,\n})\nexport class CatsController {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Scope hierarchy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Scope bubbles up the injection chain. A controller that depends on a request-scoped provider will, itself, be request-scoped.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Imagine the following dependency graph: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "CatsController <- CatsService <- CatsRepository");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, ". If ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, " is request-scoped (and the others are default singletons), the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "CatsController");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, " will become request-scoped as it is dependent on the injected service. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "CatsRepository");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, ", which is not dependent, would remain singleton-scoped.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "app-banner-courses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "h4", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Request provider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "In an HTTP server-based application (e.g., using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "@nestjs/platform-express");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "@nestjs/platform-fastify");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "), you may want to access a reference to the original request object when using request-scoped providers. You can do this by injecting the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "REQUEST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, " object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "\nimport { Injectable, Scope, Inject } from '@nestjs/common';\nimport { REQUEST } from '@nestjs/core';\nimport { Request } from 'express';\n\n@Injectable({ scope: Scope.REQUEST })\nexport class CatsService {\n  constructor(@Inject(REQUEST) private readonly request: Request) {}\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Because of underlying platform/protocol differences, you access the inbound request slightly differently for Microservice or GraphQL applications. In ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "GraphQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, " applications, you inject ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "CONTEXT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, " instead of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "REQUEST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "\nimport { Injectable, Scope, Inject } from '@nestjs/common';\nimport { CONTEXT } from '@nestjs/graphql';\n\n@Injectable({ scope: Scope.REQUEST })\nexport class CatsService {\n  constructor(@Inject(CONTEXT) private readonly context) {}\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "You then configure your ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "context");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, " value (in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "GraphQLModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, ") to contain ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "request");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, " as its property.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "Performance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "Using request-scoped providers will have an impact on application performance. While Nest tries to cache as much metadata as possible, it will still have to create an instance of your class on each request. Hence, it will slow down your average response time and overall benchmarking result. Unless a provider must be request-scoped, it is strongly recommended that you use the default singleton scope.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _shared_components_banner_courses_banner_courses_component__WEBPACK_IMPORTED_MODULE_4__["BannerCoursesComponent"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??ProviderScopesComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](ProviderScopesComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProviderScopesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-provider-scopes',
          templateUrl: './provider-scopes.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/fundamentals/unit-testing/unit-testing.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/homepage/pages/fundamentals/unit-testing/unit-testing.component.ts ***!
    \************************************************************************************/

  /*! exports provided: UnitTestingComponent */

  /***/
  function srcAppHomepagePagesFundamentalsUnitTestingUnitTestingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitTestingComponent", function () {
      return UnitTestingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/components/tabs/tabs.component */
    "./src/app/shared/components/tabs/tabs.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_banner_courses_banner_courses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/components/banner-courses/banner-courses.component */
    "./src/app/shared/components/banner-courses/banner-courses.component.ts");
    /* harmony import */


    var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/pipes/extension.pipe */
    "./src/app/shared/pipes/extension.pipe.ts");

    var UnitTestingComponent =
    /*#__PURE__*/
    function (_page_page_component_10) {
      _inherits(UnitTestingComponent, _page_page_component_10);

      function UnitTestingComponent() {
        _classCallCheck(this, UnitTestingComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(UnitTestingComponent).apply(this, arguments));
      }

      return UnitTestingComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    UnitTestingComponent.??fac = function UnitTestingComponent_Factory(t) {
      return ??UnitTestingComponent_BaseFactory(t || UnitTestingComponent);
    };

    UnitTestingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: UnitTestingComponent,
      selectors: [["app-unit-testing"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 400,
      vars: 24,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/fundamentals/unit-testing.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "testing"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/facebook/jest"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/visionmedia/supertest"], ["appAnchor", "", "id", "installation"], [1, "language-bash"], ["appAnchor", "", "id", "unit-testing"], [1, "filename"], ["appd49f06ec06050771fd076fbd36e7e763dbde668f", ""], [1, "language-typescript"], [1, "info"], ["appAnchor", "", "id", "testing-utilities"], ["appc3bc0039563369cab864ade7846d81d8245094ac", ""], ["routerLink", "/fundamentals/module-ref"], [1, "warning"], ["routerLink", "/fundamentals/custom-providers"], ["appAnchor", "", "id", "end-to-end-testing"], ["app9887b2199d27c3723e885eeff6515bd321fd3f9f", ""], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/fundamentals/custom-providers"], ["rel", "nofollow", "target", "_blank", "href", "https://en.wikipedia.org/wiki/Fluent_interface"], ["href", "/fundamentals/module-ref"], ["appAnchor", "", "id", "testing-request-scoped-instances"], ["routerLink", "/fundamentals/injection-scopes"], ["href", "https://docs.nestjs/com/fundamentals/module-ref#resolving-scoped-providers"]],
      template: function UnitTestingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Testing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Automated testing is considered an essential part of any serious software development effort. Automation makes it easy to repeat individual tests or test suites quickly and easily during development. This helps ensure that releases meet quality and performance goals. Automation helps increase coverage and provides a faster feedback loop to developers. Automation both increases the productivity of individual developers and ensures that tests are run at critical development lifecycle junctures, such as source code control check-in, feature integration, and version release.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Such tests often span a variety of types, including unit tests, end-to-end (e2e) tests, integration tests, and so on. While the benefits are unquestionable, it can be tedious to set them up. Nest strives to promote development best practices, including effective testing, so it includes features such as the following to help developers and teams build and automate tests. Nest:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "automatically scaffolds default unit tests for components and e2e tests for applications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "provides default tooling (such as a test runner that builds an isolated module/application loader)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "provides integration with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Jest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Supertest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " out-of-the-box, while remaining agnostic to testing tools");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "makes the Nest dependency injection system available in the testing environment for easily mocking components");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "As mentioned, you can use any ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "testing framework");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " that you like, as Nest doesn't force any specific tooling. Simply replace the elements needed (such as the test runner), and you will still enjoy the benefits of Nest's ready-made testing facilities.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Installation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "To get started, first install the required package:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "\n$ npm i --save-dev @nestjs/testing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Unit testing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "In the following example, we test two classes: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "CatsController");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, ". As mentioned, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Jest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " is provided as the default testing framework. It serves as a test-runner and also provides assert functions and test-double utilities that help with mocking, spying, etc. In the following basic test, we manually instantiate these classes, and ensure that the controller and service fulfill their API contract.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](55, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "app-tabs", null, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "\nimport { CatsController } from './cats.controller';\nimport { CatsService } from './cats.service';\n\ndescribe('CatsController', () => {\n  let catsController: CatsController;\n  let catsService: CatsService;\n\n  beforeEach(() => {\n    catsService = new CatsService();\n    catsController = new CatsController(catsService);\n  });\n\n  describe('findAll', () => {\n    it('should return an array of cats', async () => {\n      const result = ['test'];\n      jest.spyOn(catsService, 'findAll').mockImplementation(() => result);\n\n      expect(await catsController.findAll()).toBe(result);\n    });\n  });\n});");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "\nimport { CatsController } from './cats.controller';\nimport { CatsService } from './cats.service';\n\ndescribe('CatsController', () => {\n  let catsController;\n  let catsService;\n\n  beforeEach(() => {\n    catsService = new CatsService();\n    catsController = new CatsController(catsService);\n  });\n\n  describe('findAll', () => {\n    it('should return an array of cats', async () => {\n      const result = ['test'];\n      jest.spyOn(catsService, 'findAll').mockImplementation(() => result);\n\n      expect(await catsController.findAll()).toBe(result);\n    });\n  });\n});");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "blockquote", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, " Keep your test files located near the classes they test. Testing files should have a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, ".spec");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, ".test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, " suffix.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Because the above sample is trivial, we aren't really testing anything Nest-specific. Indeed, we aren't even using dependency injection (notice that we pass an instance of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, " to our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "catsController");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "). This form of testing - where we manually instantiate the classes being tested - is often called ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "isolated testing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, " as it is independent from the framework. Let's introduce some more advanced capabilities that help you test applications that make more extensive use of Nest features.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Testing utilities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "@nestjs/testing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, " package provides a set of utilities that enable a more robust testing process. Let's rewrite the previous example using the built-in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, " class:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](98, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "app-tabs", null, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "\nimport { Test } from '@nestjs/testing';\nimport { CatsController } from './cats.controller';\nimport { CatsService } from './cats.service';\n\ndescribe('CatsController', () => {\n  let catsController: CatsController;\n  let catsService: CatsService;\n\n  beforeEach(async () => {\n    const moduleRef = await Test.createTestingModule({\n        controllers: [CatsController],\n        providers: [CatsService],\n      }).compile();\n\n    catsService = moduleRef.get<CatsService>(CatsService);\n    catsController = moduleRef.get<CatsController>(CatsController);\n  });\n\n  describe('findAll', () => {\n    it('should return an array of cats', async () => {\n      const result = ['test'];\n      jest.spyOn(catsService, 'findAll').mockImplementation(() => result);\n\n      expect(await catsController.findAll()).toBe(result);\n    });\n  });\n});");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "\nimport { Test } from '@nestjs/testing';\nimport { CatsController } from './cats.controller';\nimport { CatsService } from './cats.service';\n\ndescribe('CatsController', () => {\n  let catsController;\n  let catsService;\n\n  beforeEach(async () => {\n    const moduleRef = await Test.createTestingModule({\n        controllers: [CatsController],\n        providers: [CatsService],\n      }).compile();\n\n    catsService = moduleRef.get(CatsService);\n    catsController = moduleRef.get(CatsController);\n  });\n\n  describe('findAll', () => {\n    it('should return an array of cats', async () => {\n      const result = ['test'];\n      jest.spyOn(catsService, 'findAll').mockImplementation(() => result);\n\n      expect(await catsController.findAll()).toBe(result);\n    });\n  });\n});");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, " class is useful for providing an application execution context that essentially mocks the full Nest runtime, but gives you hooks that make it easy to manage class instances, including mocking and overriding. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, " class has a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "createTestingModule()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, " method that takes a module metadata object as its argument (the same object you pass to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "@Module()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, " decorator). This method returns a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "TestingModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, " instance which in turn provides a few methods. For unit tests, the important one is the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "compile()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, " method. This method bootstraps a module with its dependencies (similar to the way an application is bootstrapped in the conventional ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "main.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, " file using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "NestFactory.create()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "), and returns a module that is ready for testing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "blockquote", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, " The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "compile()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, " method is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "asynchronous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, " and therefore has to be awaited. Once the module is compiled you can retrieve any ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "static");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, " instance it declares (controllers and providers) using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "get()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, " method.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "TestingModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, " inherits from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "module reference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, " class, and therefore its ability to dynamically resolve scoped providers (transient or request-scoped). Do this with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "resolve()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, " method (the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "get()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, " method can only retrieve static instances).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "\nconst moduleRef = await Test.createTestingModule({\n  controllers: [CatsController],\n  providers: [CatsService],\n}).compile();\n\ncatsService = await moduleRef.resolve(CatsService);");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "blockquote", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, " The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "resolve()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, " method returns a unique instance of the provider, from its own ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "DI container sub-tree");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, ". Each sub-tree has a unique context identifier. Thus, if you call this method more than once and compare instance references, you will see that they are not equal.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "blockquote", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, " Learn more about the module reference features ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "Instead of using the production version of any provider, you can override it with a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "custom provider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, " for testing purposes. For example, you can mock a database service instead of connecting to a live database. We'll cover overrides in the next section, but they're available for unit tests as well.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](188, "app-banner-courses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "End-to-end testing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "Unlike unit testing, which focuses on individual modules and classes, end-to-end (e2e) testing covers the interaction of classes and modules at a more aggregate level -- closer to the kind of interaction that end-users will have with the production system. As an application grows, it becomes hard to manually test the end-to-end behavior of each API endpoint. Automated end-to-end tests help us ensure that the overall behavior of the system is correct and meets project requirements. To perform e2e tests we use a similar configuration to the one we just covered in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "unit testing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, ". In addition, Nest makes it easy to use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "Supertest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, " library to simulate HTTP requests.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](202, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](203, "app-tabs", null, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "\nimport * as request from 'supertest';\nimport { Test } from '@nestjs/testing';\nimport { CatsModule } from '../../src/cats/cats.module';\nimport { CatsService } from '../../src/cats/cats.service';\nimport { INestApplication } from '@nestjs/common';\n\ndescribe('Cats', () => {\n  let app: INestApplication;\n  let catsService = { findAll: () => ['test'] };\n\n  beforeAll(async () => {\n    const moduleRef = await Test.createTestingModule({\n      imports: [CatsModule],\n    })\n      .overrideProvider(CatsService)\n      .useValue(catsService)\n      .compile();\n\n    app = moduleRef.createNestApplication();\n    await app.init();\n  });\n\n  it(`/GET cats`, () => {\n    return request(app.getHttpServer())\n      .get('/cats')\n      .expect(200)\n      .expect({\n        data: catsService.findAll(),\n      });\n  });\n\n  afterAll(async () => {\n    await app.close();\n  });\n});");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "\nimport * as request from 'supertest';\nimport { Test } from '@nestjs/testing';\nimport { CatsModule } from '../../src/cats/cats.module';\nimport { CatsService } from '../../src/cats/cats.service';\nimport { INestApplication } from '@nestjs/common';\n\ndescribe('Cats', () => {\n  let app: INestApplication;\n  let catsService = { findAll: () => ['test'] };\n\n  beforeAll(async () => {\n    const moduleRef = await Test.createTestingModule({\n      imports: [CatsModule],\n    })\n      .overrideProvider(CatsService)\n      .useValue(catsService)\n      .compile();\n\n    app = moduleRef.createNestApplication();\n    await app.init();\n  });\n\n  it(`/GET cats`, () => {\n    return request(app.getHttpServer())\n      .get('/cats')\n      .expect(200)\n      .expect({\n        data: catsService.findAll(),\n      });\n  });\n\n  afterAll(async () => {\n    await app.close();\n  });\n});");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "In this example, we build on some of the concepts described earlier. In addition to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "compile()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, " method we used earlier, we now use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "createNestApplication()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, " method to instantiate a full Nest runtime environment. We save a reference to the running app in our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, " variable so we can use it to simulate HTTP requests.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "We simulate HTTP tests using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, "request()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, " function from Supertest. We want these HTTP requests to route to our running Nest app, so we pass the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, "request()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, " function a reference to the HTTP listener that underlies Nest (which, in turn, may be provided by the Express platform). Hence the construction ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "request(app.getHttpServer())");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, ". The call to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, "request()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, " hands us a wrapped HTTP Server, now connected to the Nest app, which exposes methods to simulate an actual HTTP request. For example, using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "request(...).get('/cats')");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, " will initiate a request to the Nest app that is identical to an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "actual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, " HTTP request like ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, "get '/cats'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, " coming in over the network.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, "In this example, we also provide an alternate (test-double) implementation of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, " which simply returns a hard-coded value that we can test for. Use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "overrideProvider()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, " to provide such an alternate implementation. Similarly, Nest provides methods to override guards, interceptors, filters and pipes with the");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "overrideGuard()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "overrideInterceptor()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, "overrideFilter()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, ", and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, "overridePipe()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264, " methods respectively.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, "Each of the override methods returns an object with 3 different methods that mirror those described for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "custom providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](273, "useClass");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, ": you supply a class that will be instantiated to provide the instance to override the object (provider, guard, etc.).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, "useValue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](278, ": you supply an instance that will override the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, "useFactory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, ": you supply a function that returns an instance that will override the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "Each of the override method types, in turn, returns the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](286, "TestingModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, " instance, and can thus be chained with other methods in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](289, "fluent style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](290, ". You should use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, "compile()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, " at the end of such a chain to cause Nest to instantiate and initialize the module.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "The compiled module has several useful methods, as described in the following table:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, "createNestApplication()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](302, " Creates and returns a Nest application (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](304, "INestApplication");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, " instance) based on the given module. Note that you must manually initialize the application using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "init()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, " method. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](312, "createNestMicroservice()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](314, " Creates and returns a Nest microservice (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, "INestMicroservice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](317, " instance) based on the given module. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](321, "get()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, " Retrieves a static instance of a controller or provider (including guards, filters, etc.) available in the application context. Inherited from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](325, "module reference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, " class. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](330, "resolve()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](332, " Retrieves a dynamically created scoped instance (request or transient) of a controller or provider (including guards, filters, etc.) available in the application context. Inherited from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](334, "module reference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](335, " class. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](339, "select()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](341, " Navigates through the module's dependency graph; can be used to retrieve a specific instance from the selected module (used along with strict mode (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](343, "strict: true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](344, ") in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](346, "get()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, " method). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "blockquote", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](350, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](351, " Keep your e2e test files inside the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](353, "e2e");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](354, " directory. The testing files should have a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](356, ".e2e-spec");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](357, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](359, ".e2e-test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](360, " suffix.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "h4", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](363, "Testing request-scoped instances");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](366, "Request-scoped");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](367, " providers are created uniquely for each incoming ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](369, "request");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](370, ". The instance is garbage-collected after the request has completed processing. This poses a problem, because we can't access a dependency injection sub-tree generated specifically for a tested request.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](372, "We know (based on the sections above) that the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](374, "resolve()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](375, " method can be used to retrieve a dynamically instantiated class. Also, as described ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](378, ", we know we can pass a unique context identifier to control the lifecycle of a DI container sub-tree. How do we leverage this in a testing context?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](380, "The strategy is to generate a context identifier beforehand and force Nest to use this particular ID to create a sub-tree for all incoming requests. In this way we'll be able to retrieve instances created for a tested request.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](382, "To accomplish this, use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](384, "jest.spyOn()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](385, " on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](387, "ContextIdFactory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](388, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](391, "\nconst contextId = ContextIdFactory.create();\njest\n  .spyOn(ContextIdFactory, 'getByRequest')\n  .mockImplementation(() => contextId);");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](393, "Now we can use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](395, "contextId");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](396, " to access a single generated DI container sub-tree for any subsequent request.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](399, "\ncatsService = await moduleRef.resolve(CatsService, contextId);");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](57);

          var _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](100);

          var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](204);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](55, 15, "cats.controller.spec", _r143.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r143.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r143.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](98, 18, "cats.controller.spec", _r144.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r144.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r144.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](202, 21, "cats.e2e-spec", _r145.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r145.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r145.isJsActive);
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _shared_components_banner_courses_banner_courses_component__WEBPACK_IMPORTED_MODULE_5__["BannerCoursesComponent"]],
      pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_6__["ExtensionPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??UnitTestingComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](UnitTestingComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UnitTestingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-unit-testing',
          templateUrl: './unit-testing.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=homepage-pages-fundamentals-fundamentals-module-es5.js.map