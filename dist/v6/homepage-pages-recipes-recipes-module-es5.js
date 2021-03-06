function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homepage-pages-recipes-recipes-module"], {
  /***/
  "./src/app/homepage/pages/recipes/cqrs/cqrs.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/homepage/pages/recipes/cqrs/cqrs.component.ts ***!
    \***************************************************************/

  /*! exports provided: CqrsComponent */

  /***/
  function srcAppHomepagePagesRecipesCqrsCqrsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CqrsComponent", function () {
      return CqrsComponent;
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


    var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/pipes/extension.pipe */
    "./src/app/shared/pipes/extension.pipe.ts");

    var CqrsComponent =
    /*#__PURE__*/
    function (_page_page_component_) {
      _inherits(CqrsComponent, _page_page_component_);

      function CqrsComponent() {
        _classCallCheck(this, CqrsComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(CqrsComponent).apply(this, arguments));
      }

      return CqrsComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    CqrsComponent.??fac = function CqrsComponent_Factory(t) {
      return ??CqrsComponent_BaseFactory(t || CqrsComponent);
    };

    CqrsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CqrsComponent,
      selectors: [["app-cqrs"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 326,
      vars: 64,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/cqrs.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "cqrs"], ["rel", "nofollow", "target", "_blank", "href", "https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/cqrs"], ["appAnchor", "", "id", "installation"], [1, "language-bash"], ["appAnchor", "", "id", "commands"], [1, "filename"], ["app6379e3514852d43c413c0a634462f10c6dec0c22", ""], [1, "language-typescript"], ["appe6a11388b1abbebcdea5b0c8f9bd1113d71b90c3", ""], ["appeb761b4bf3076b44210a8dde510cc95caf6bf8e2", ""], ["appAnchor", "", "id", "events"], ["appe64290052e25d9f529c459bb1f69d47e1f256c36", ""], ["app410422a7061c4015f882f8d0c95a431bda322dde", ""], ["app07ed862eb6c822f37dc1cc6ffe2196c79ca313f8", ""], [1, "info"], ["appa42f47a23aa5b7d261148b3f6f9f7ed102779fb9", ""], ["appAnchor", "", "id", "sagas"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/ReactiveX/rxjs"], ["app5b793365e757e109bcaf64547159035527a6266d", ""], ["appAnchor", "", "id", "queries"], ["appAnchor", "", "id", "setup"], ["app78205e48545e27179d30fb0fcded91a78a25521e", ""], ["appAnchor", "", "id", "summary"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/kamilmysliwiec/nest-cqrs-example"]],
      template: function CqrsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "CQRS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "The flow of simple ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "CRUD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " (Create, Read, Update and Delete) applications can be described using the following steps:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "controllers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " layer handles HTTP requests and delegates tasks to the services layer.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "services layer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " is where most of the business logic lives.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Services uses ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "repositories / DAOs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " to change / persist entities.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Entities act as containers for the values, with setters and getters.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "In most cases, for small and medium-sized applications, this pattern is sufficient. However, when our requirements become more complex, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "CQRS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " model may be more appropriate and scalable. To facilitate that model, Nest provides a lightweight ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "CQRS module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, ". This chapter describes how to use it.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Installation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "First install the required package:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "\n$ npm install --save @nestjs/cqrs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Commands");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "In this model, each action is called a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Command");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, ". When a command is dispatched, the application reacts to it. Commands can be dispatched from the services layer, or directly from controllers/gateways. Commands are consumed by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Command Handlers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](59, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "app-tabs", null, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "\n@Injectable()\nexport class HeroesGameService {\n  constructor(private readonly commandBus: CommandBus) {}\n\n  async killDragon(heroId: string, killDragonDto: KillDragonDto) {\n    return this.commandBus.execute(\n      new KillDragonCommand(heroId, killDragonDto.dragonId)\n    );\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "\n@Injectable()\n@Dependencies(CommandBus)\nexport class HeroesGameService {\n  constructor(commandBus) {\n    this.commandBus = commandBus;\n  }\n\n  async killDragon(heroId, killDragonDto) {\n    return this.commandBus.execute(\n      new KillDragonCommand(heroId, killDragonDto.dragonId)\n    );\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Here's a sample service that dispatches ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "KillDragonCommand");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, ". Let's see how the command looks:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](75, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "app-tabs", null, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "\nexport class KillDragonCommand {\n  constructor(\n    public readonly heroId: string,\n    public readonly dragonId: string,\n  ) {}\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "\nexport class KillDragonCommand {\n  constructor(heroId, dragonId) {\n    this.heroId = heroId;\n    this.dragonId = dragonId;\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "CommandBus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, " is a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "stream");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, " of commands. It delegates commands to the equivalent handlers. Each command must have a corresponding ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Command Handler");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](97, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "app-tabs", null, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "\n@CommandHandler(KillDragonCommand)\nexport class KillDragonHandler implements ICommandHandler<KillDragonCommand> {\n  constructor(private readonly repository: HeroRepository) {}\n\n  async execute(command: KillDragonCommand) {\n    const { heroId, dragonId } = command;\n    const hero = this.repository.findOneById(+heroId);\n\n    hero.killEnemy(dragonId);\n    await this.repository.persist(hero);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "\n@CommandHandler(KillDragonCommand)\n@Dependencies(HeroRepository)\nexport class KillDragonHandler {\n  constructor(repository) {\n    this.repository = repository;\n  }\n\n  async execute(command) {\n    const { heroId, dragonId } = command;\n    const hero = this.repository.findOneById(+heroId);\n\n    hero.killEnemy(dragonId);\n    await this.repository.persist(hero);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "With this approach, every application state change is driven by the occurrence of a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Command");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, ". The logic is encapsulated in handlers. With this approach, we can simply add behavior like logging or persisting commands in the database (e.g., for diagnostics purposes).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Command handlers neatly encapsulate logic. While beneficial, the application structure is still not flexible enough, not ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "reactive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, ". To remedy this, we also introduce ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](124, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "app-tabs", null, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "\nexport class HeroKilledDragonEvent {\n  constructor(\n    public readonly heroId: string,\n    public readonly dragonId: string,\n  ) {}\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "\nexport class HeroKilledDragonEvent {\n  constructor(heroId, dragonId) {\n    this.heroId = heroId;\n    this.dragonId = dragonId;\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Events are asynchronous. They are dispatched either by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "models");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, " or directly using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "EventBus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, ". In order to dispatch events, models have to extend the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "AggregateRoot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, " class.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](146, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "app-tabs", null, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "\nexport class Hero extends AggregateRoot {\n  constructor(private readonly id: string) {\n    super();\n  }\n\n  killEnemy(enemyId: string) {\n    // logic\n    this.apply(new HeroKilledDragonEvent(this.id, enemyId));\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "\nexport class Hero extends AggregateRoot {\n  constructor(id) {\n    super();\n    this.id = id;\n  }\n\n  killEnemy(enemyId) {\n    // logic\n    this.apply(new HeroKilledDragonEvent(this.id, enemyId));\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "apply()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, " method does not dispatch events yet because there's no relationship between the model and the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "EventPublisher");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, " class. How do we associate the model and the publisher? By using a publisher ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "mergeObjectContext()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, " method inside our command handler.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](168, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](169, "app-tabs", null, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "\n@CommandHandler(KillDragonCommand)\nexport class KillDragonHandler implements ICommandHandler<KillDragonCommand> {\n  constructor(\n    private readonly repository: HeroRepository,\n    private readonly publisher: EventPublisher,\n  ) {}\n\n  async execute(command: KillDragonCommand) {\n    const { heroId, dragonId } = command;\n    const hero = this.publisher.mergeObjectContext(\n      await this.repository.findOneById(+heroId),\n    );\n    hero.killEnemy(dragonId);\n    hero.commit();\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "\n@CommandHandler(KillDragonCommand)\n@Dependencies(HeroRepository, EventPublisher)\nexport class KillDragonHandler {\n  constructor(repository, publisher) {\n    this.repository = repository;\n    this.publisher = publisher;\n  }\n\n  async execute(command) {\n    const { heroId, dragonId } = command;\n    const hero = this.publisher.mergeObjectContext(\n      await this.repository.findOneById(+heroId),\n    );\n    hero.killEnemy(dragonId);\n    hero.commit();\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "Now everything works as expected. Notice that we need to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "commit()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, " events since they're not being dispatched immediately. Obviously, an object doesn't have to exist up front. We can easily merge type context as well:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "\nconst HeroModel = this.publisher.mergeContext(Hero);\nnew HeroModel('id');");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "Now the model has the ability to publish events. Additionally, we can emit events manually using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "EventBus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "\nthis.eventBus.publish(new HeroKilledDragonEvent());");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "blockquote", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, " The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "EventBus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, " is an injectable class.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "Each event can have multiple ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "Event Handlers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](207, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](208, "app-tabs", null, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "\n@EventsHandler(HeroKilledDragonEvent)\nexport class HeroKilledDragonHandler implements IEventHandler<HeroKilledDragonEvent> {\n  constructor(private readonly repository: HeroRepository) {}\n\n  handle(event: HeroKilledDragonEvent) {\n    // logic\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "Now we can move the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "write logic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, " into the event handlers.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "h4", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "Sagas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "This type of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "Event-Driven Architecture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, " improves application ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "reactiveness and scalability");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, ". Now, when we have events, we can simply react to them in various ways. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "Sagas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, " are the final building block from an architectural point of view.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "Sagas are an extremely powerful feature. A single saga may listen for 1..* events. Using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "RxJS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, " library, it can combine, merge, filter or apply other ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "RxJS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, " operators on the event stream. Each saga returns an Observable which contains a command. This command is dispatched ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "asynchronously");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](245, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](246, "app-tabs", null, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "\n@Injectable()\nexport class HeroesGameSagas {\n  @Saga()\n  dragonKilled = (events$: Observable<any>): Observable<ICommand> => {\n    return events$.pipe(\n      ofType(HeroKilledDragonEvent),\n      map((event) => new DropAncientItemCommand(event.heroId, fakeItemID)),\n    );\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, "\n@Injectable()\nexport class HeroesGameSagas {\n  @Saga()\n  dragonKilled = (events$) => {\n    return events$.pipe(\n      ofType(HeroKilledDragonEvent),\n      map((event) => new DropAncientItemCommand(event.heroId, fakeItemID)),\n    );\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "blockquote", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, " The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, "ofType");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, " operator is exported from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "@nestjs/cqrs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, " package.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "We declared a rule - when any hero kills the dragon, the ancient item should be dropped. With this in place, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "DropAncientItemCommand");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, " will be dispatched and processed by the appropriate handler.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "h4", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, "Queries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](273, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275, "CqrsModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, " can also be used for handling queries. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](278, "QueryBus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, " follows the same pattern as the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, "CommandsBus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, ". Query handlers should implement the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "IQueryHandler");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, " interface and be marked with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "@QueryHandler()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288, " decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, "Setup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, "Finally, let's look at how to set up the whole CQRS mechanism.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](296, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](297, "app-tabs", null, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, "\nexport const CommandHandlers = [KillDragonHandler, DropAncientItemHandler];\nexport const EventHandlers =  [HeroKilledDragonHandler, HeroFoundItemHandler];\n\n@Module({\n  imports: [CqrsModule],\n  controllers: [HeroesGameController],\n  providers: [\n    HeroesGameService,\n    HeroesGameSagas,\n    ...CommandHandlers,\n    ...EventHandlers,\n    HeroRepository,\n  ]\n})\nexport class HeroesGameModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "h4", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](304, "Summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "CommandBus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, "QueryBus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](311, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, "EventBus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](314, " are ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, "Observables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](317, ". This means that you can easily subscribe to the whole stream and enrich your application with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](319, "Event Sourcing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](320, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](322, "A working example is available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](324, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](325, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r315 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](61);

          var _r316 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](77);

          var _r317 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](99);

          var _r318 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](126);

          var _r319 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](148);

          var _r320 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](170);

          var _r321 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](209);

          var _r322 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](247);

          var _r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](298);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](59, 37, "heroes-game.service", _r315.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r315.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r315.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](75, 40, "kill-dragon.command", _r316.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r316.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r316.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](97, 43, "kill-dragon.handler", _r317.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r317.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r317.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](124, 46, "hero-killed-dragon.event", _r318.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r318.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r318.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](146, 49, "hero.model", _r319.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r319.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r319.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](168, 52, "kill-dragon.handler", _r320.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r320.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r320.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](207, 55, "hero-killed-dragon.handler", _r321.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](245, 58, "heroes-game.saga", _r322.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r322.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r322.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](296, 61, "heroes-game.module", _r323.isJsActive), "\n");
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"]],
      pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__["ExtensionPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??CqrsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](CqrsComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CqrsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cqrs',
          templateUrl: './cqrs.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/recipes/crud/crud.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/homepage/pages/recipes/crud/crud.component.ts ***!
    \***************************************************************/

  /*! exports provided: CrudComponent */

  /***/
  function srcAppHomepagePagesRecipesCrudCrudComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrudComponent", function () {
      return CrudComponent;
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


    var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/components/tabs/tabs.component */
    "./src/app/shared/components/tabs/tabs.component.ts");
    /* harmony import */


    var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/pipes/extension.pipe */
    "./src/app/shared/pipes/extension.pipe.ts");

    var CrudComponent =
    /*#__PURE__*/
    function (_page_page_component_2) {
      _inherits(CrudComponent, _page_page_component_2);

      function CrudComponent() {
        _classCallCheck(this, CrudComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(CrudComponent).apply(this, arguments));
      }

      return CrudComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    CrudComponent.??fac = function CrudComponent_Factory(t) {
      return ??CrudComponent_BaseFactory(t || CrudComponent);
    };

    CrudComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CrudComponent,
      selectors: [["app-crud"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 363,
      vars: 20,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/crud.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "crud-utilities"], [1, "warning"], ["appAnchor", "", "id", "overview"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjsx/crud"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjsx/crud/wiki/Home"], ["routerLink", "/techniques/sql"], ["appAnchor", "", "id", "getting-started"], [1, "language-bash"], [1, "filename"], ["appdeaa58ba9ea856d96991601c1c1acf7fa3904b34", ""], [1, "language-typescript"], ["app4b2d757ea05b814c150341ae676cc403217ba7eb", ""], ["app4b2cff7647090ff5aa319b360879feee3c88be36", ""], ["appd161c1627e86a8c37f17cc6bd1af63d347fc5207", ""], ["appAnchor", "", "id", "filtering-and-pagination"], [1, "language-json"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjsx/crud/wiki/Requests"], ["appAnchor", "", "id", "relations"], [1, "info"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjsx/crud/wiki/Controllers#join"], ["appAnchor", "", "id", "path-params-validation"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjsx/crud/wiki/Controllers#params"], ["appAnchor", "", "id", "request-body-validation"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/typestack/class-validator#validation-groups"], ["appc71fdf9489e94f330cc084c28bb6947b8e1ccb8e", ""], ["appAnchor", "", "id", "routes-options"], ["appAnchor", "", "id", "documentation"]],
      template: function CrudComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "CRUD utilities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "blockquote", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " This chapter applies only to TypeScript.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "CRUD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " is a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "community package");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "@nestjsx/crud");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, ") that helps you create database-centric Create/Read/Update/Delete (CRUD) controllers and services with ease, and provides a rich set of features for your RESTful API out-of-the-box:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Database agnostic extendable CRUD controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Query string parsing with filtering, pagination, sorting, relations, nested relations, cache, etc.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Framework agnostic package with query builder for frontend usage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Query, path params and DTO validation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Overriding controller methods with ease");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Tiny but powerful configuration (including global configuration)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Additional helper decorators");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Swagger documentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "blockquote", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " Currently ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "@nestjsx/crud");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " only supports ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "TypeORM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, ". Other ORMs like ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Sequelize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Mongoose");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " will be included in the near future.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "In this chapter, you'll get an overview of how to create CRUD controllers and services using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "TypeORM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, ". Complete documentation is available at the project's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "wiki");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, ". We assume that you have already successfully installed and set up the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "@nestjs/typeorm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, " package. To learn more, see ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Getting started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Start by installing all required dependencies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "\nnpm i --save @nestjsx/crud @nestjsx/crud-typeorm typeorm class-transformer class-validator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Assuming that you already have some ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "entities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, " in your project:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](86, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "app-tabs", null, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "\nimport { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';\n\n@Entity()\nexport class Hero {\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  name: string;\n\n  @Column({ type: 'number' })\n  power: number;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "The first step is to create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](99, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "app-tabs", null, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "\nimport { Injectable } from '@nestjs/common';\nimport { InjectRepository } from '@nestjs/typeorm';\nimport { TypeOrmCrudService } from '@nestjsx/crud-typeorm';\nimport { Hero } from './hero.entity';\n\n@Injectable()\nexport class HeroesService extends TypeOrmCrudService<Hero> {\n  constructor(@InjectRepository(Hero) repo) {\n    super(repo);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "The next step is to create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](112, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](113, "app-tabs", null, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "\nimport { Controller } from '@nestjs/common';\nimport { Crud } from '@nestjsx/crud';\nimport { Hero } from './hero.entity';\nimport { HeroesService } from './heroes.service';\n\n@Crud({\n  model: {\n    type: Hero,\n  },\n})\n@Controller('heroes')\nexport class HeroesController {\n  constructor(public service: HeroesService) {}\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "And finally, we need to wire up everything in our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](125, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "app-tabs", null, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "\nimport { Module } from '@nestjs/common';\nimport { TypeOrmModule } from '@nestjs/typeorm';\n\nimport { Hero } from './hero.entity';\nimport { HeroesService } from './heroes.service';\nimport { HeroesController } from './heroes.controller';\n\n@Module({\n  imports: [TypeOrmModule.forFeature([Hero])],\n  providers: [HeroesService],\n  controllers: [HeroesController],\n})\nexport class HeroesModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "blockquote", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, " Do not forget to import the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "HeroesModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, " into the root ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "ApplicationModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "At this point, your application will have these newly created endpoints:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "GET /heroes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, " - get many heroes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "GET /heroes/:id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, " - get one hero.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "POST /heroes/bulk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, " - create many heroes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "POST /heroes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, " - create one hero.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "PATCH /heroes/:id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, " - update one hero.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "PUT /heroes/:id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, " - replace one hero.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "DELETE /heroes/:id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, " - delete one hero.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "h4", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "Filtering and pagination");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "CRUD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, " provides rich tools for filtering and pagination. Here's a sample HTTP REST request:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "code", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "\nGET /heroes?select=name&filter=power||gt||90&sort=name,ASC&page=1&limit=3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "In this example, we:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "requested the list of heroes and selected only the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, " attribute");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "filtered the list to include heroes with a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "power");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, " greater than 90");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "limited the result set to 3 within page 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "sorted by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, " in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "ASC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, " order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "The response object would look like this:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "code", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "\n{\n  \"data\": [\n    {\n      \"id\": 2,\n      \"name\": \"Batman\"\n    },\n    {\n      \"id\": 4,\n      \"name\": \"Flash\"\n    },\n    {\n      \"id\": 3,\n      \"name\": \"Superman\"\n    }\n  ],\n  \"count\": 3,\n  \"total\": 14,\n  \"page\": 1,\n  \"pageCount\": 5\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "blockquote", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, " Primary columns persist in the resource response object whether they were requested or not. In our example, this is the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, "id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, " column.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "The complete list of query params and filter operators can be found in the project's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "Wiki");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "h4", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "Relations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "Relations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, " is another powerful feature. In your CRUD controller, you can specify the list of an entity's relations which are allowed to fetch within your API calls:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "\n@Crud({\n  model: {\n    type: Hero,\n  },\n  join: {\n    profile: {\n      exclude: ['secret'],\n    },\n    faction: {\n      eager: true,\n      only: ['name'],\n    },\n  },\n})\n@Controller('heroes')\nexport class HeroesController {\n  constructor(public service: HeroesService) {}\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "After specifying allowed relations in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "@Crud()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, " decorator options, you can make the following request:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "blockquote", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "Request");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, " GET /heroes/25?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "join");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, "=profile||address,bio\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "The response will contain a hero object with a joined profile which includes the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "bio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, " columns.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, "The response will also contain a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "faction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, " object with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, "name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, " column selected because it was set to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, "eager: true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, " (and thus persists in every response).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264, "You can find more information about relations in the project's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, "WiKi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "h4", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "Path params validation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "By default, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "CRUD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275, " creates a slug with the name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, "id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](278, " and validates it as a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, ". You can modify this behavior if desired. Assume, your entity has a primary column ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](283, "_id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, " - a UUID string - and you need to use it as a slug for your endpoints. This can be done with the following options:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "\n@Crud({\n  model: {\n    type: Hero,\n  },\n  params: {\n    _id: {\n      field: '_id',\n      type: 'uuid',\n      primary: true,\n    },\n  },\n})\n@Controller('heroes')\nexport class HeroesController {\n  constructor(public service: HeroesService) {}\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](289, "For more params options please see the project's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, "Wiki");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "h4", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "Request body validation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "Request body validation is performed out-of-the-box by applying the standard Nest ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](299, "ValidationPipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, " on each POST, PUT or PATCH request. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](302, "model.type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, " from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, "@Crud()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](306, " decorator options is used as a DTO that describes validation rules.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, "To do that properly we use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, "validation groups");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](311, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](314, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](315, "app-tabs", null, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](319, "\nimport { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';\nimport { IsOptional, IsDefined, IsString, IsNumber } from 'class-validator';\nimport { CrudValidationGroups } from '@nestjsx/crud';\n\nconst { CREATE, UPDATE } = CrudValidationGroups;\n\n@Entity()\nexport class Hero {\n  @IsOptional({ always: true })\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @IsOptional({ groups: [UPDATE] })\n  @IsDefined({ groups: [CREATE] })\n  @IsString({ always: true })\n  @Column()\n  name: string;\n\n  @IsOptional({ groups: [UPDATE] })\n  @IsDefined({ groups: [CREATE] })\n  @IsNumber({}, { always: true })\n  @Column({ type: 'number' })\n  power: number;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "blockquote", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](322, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, " Full support of separate DTO classes for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](325, "create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](328, "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, " actions is one of the main priorities for the next ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](331, "CRUD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](332, " release.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](335, "Routes options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](337, "You can disable or enable generation of specific routes by passing the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](339, "routes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, " options property to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](342, "@Crud()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](343, " decorator:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](346, "\n@Crud({\n  model: {\n    type: Hero,\n  },\n  routes: {\n    only: ['getManyBase'],\n    getManyBase: {\n      decorators: [UseGuards(HeroAuthGuard)],\n    },\n  },\n})\n@Controller('heroes')\nexport class HeroesController {\n  constructor(public service: HeroesService) {}\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](348, "You can apply any method decorators by passing them to the specific route ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](350, "decorators");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](351, " array. This is convenient when you want to add some decorators without overriding base methods.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "h4", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](354, "Documentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](356, "The examples in this chapter cover only some of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](358, "CRUD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](359, " features. You can find complete documentation on the project's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](361, "Wiki");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](362, " page.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r325 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](88);

          var _r326 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](101);

          var _r327 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](114);

          var _r328 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](127);

          var _r329 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](316);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](86, 5, "hero.entity", _r325.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](99, 8, "heroes.service", _r326.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](112, 11, "heroes.controller", _r327.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](125, 14, "heroes.module", _r328.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](189);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](314, 17, "hero.entity", _r329.isJsActive), "\n");
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"]],
      pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__["ExtensionPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??CrudComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](CrudComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CrudComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-crud',
          templateUrl: './crud.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/recipes/documentation/documentation.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/homepage/pages/recipes/documentation/documentation.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: DocumentationComponent */

  /***/
  function srcAppHomepagePagesRecipesDocumentationDocumentationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function () {
      return DocumentationComponent;
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

    var DocumentationComponent =
    /*#__PURE__*/
    function (_page_page_component_3) {
      _inherits(DocumentationComponent, _page_page_component_3);

      function DocumentationComponent() {
        _classCallCheck(this, DocumentationComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(DocumentationComponent).apply(this, arguments));
      }

      return DocumentationComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    DocumentationComponent.??fac = function DocumentationComponent_Factory(t) {
      return ??DocumentationComponent_BaseFactory(t || DocumentationComponent);
    };

    DocumentationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: DocumentationComponent,
      selectors: [["app-documentation"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 53,
      vars: 0,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/documentation.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "documentation"], ["appAnchor", "", "id", "setup"], [1, "language-bash"], ["appAnchor", "", "id", "generation"], ["rel", "nofollow", "target", "_blank", "href", "https://compodoc.app/guides/usage.html"], ["rel", "nofollow", "target", "_blank", "href", "http://localhost:8080"], ["src", "/assets/documentation-compodoc-1.jpg"], ["src", "/assets/documentation-compodoc-2.jpg"], ["appAnchor", "", "id", "contribute"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/compodoc/compodoc"]],
      template: function DocumentationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Documentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Compodoc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " is a documentation tool for Angular applications. Since Nest and Angular share similar project and code structures, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Compodoc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " works with Nest applications as well.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Setup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Setting up Compodoc inside an existing Nest project is very simple. Start by adding the dev-dependency with the following command in your OS terminal:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "code", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "\n$ npm i -D @compodoc/compodoc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Generation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Generate project documentation using the following command (npm 6 is required for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "npx");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " support). See ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "the official documentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " for more options.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "code", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "\n$ npx compodoc -p tsconfig.json -s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Open your browser and navigate to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "http://localhost:8080");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, ". You should see an initial Nest CLI project:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Contribute");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "You can participate and contribute to the Compodoc project ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??DocumentationComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](DocumentationComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DocumentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-documentation',
          templateUrl: './documentation.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/recipes/hot-reload/hot-reload.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/homepage/pages/recipes/hot-reload/hot-reload.component.ts ***!
    \***************************************************************************/

  /*! exports provided: HotReloadComponent */

  /***/
  function srcAppHomepagePagesRecipesHotReloadHotReloadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotReloadComponent", function () {
      return HotReloadComponent;
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

    var HotReloadComponent =
    /*#__PURE__*/
    function (_page_page_component_4) {
      _inherits(HotReloadComponent, _page_page_component_4);

      function HotReloadComponent() {
        _classCallCheck(this, HotReloadComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(HotReloadComponent).apply(this, arguments));
      }

      return HotReloadComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    HotReloadComponent.??fac = function HotReloadComponent_Factory(t) {
      return ??HotReloadComponent_BaseFactory(t || HotReloadComponent);
    };

    HotReloadComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HotReloadComponent,
      selectors: [["app-hot-reload"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 164,
      vars: 0,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/hot-reload.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "hot-reload"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/webpack/webpack"], [1, "warning"], ["id", "with-cli"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/cli/overview"], ["appAnchor", "", "id", "installation"], [1, "language-bash"], ["appAnchor", "", "id", "configuration"], [1, "language-typescript"], ["appAnchor", "", "id", "hot-module-replacement"], [1, "language-json"], ["id", "without-cli"], ["appAnchor", "", "id", "installation-1"], ["appAnchor", "", "id", "configuration-1"], ["appAnchor", "", "id", "hot-module-replacement-1"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/nest/tree/master/sample/08-webpack"]],
      template: function HotReloadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Hot Reload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "The highest impact on your application's bootstrapping process is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "TypeScript compilation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, ". Fortunately, with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "webpack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " HMR (Hot-Module Replacement), we don't need to recompile the entire project each time a change occurs. This significantly decreases the amount of time necessary to instantiate your application, and makes iterative development a lot easier.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "blockquote", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Note that ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "webpack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " won't automatically copy your assets (e.g. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " files) to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "dist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " folder. Similarly, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "webpack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " is not compatible with glob static paths (e.g., the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "entities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " property in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "TypeOrmModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, ").\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "With CLI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "If you are using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Nest CLI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, ", the configuration process is pretty straightforward. The CLI wraps ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "webpack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, ", which allows use of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "HotModuleReplacementPlugin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Installation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "First install the required packages:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "\n$ npm i --save-dev webpack-node-externals start-server-webpack-plugin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Configuration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Once the installation is complete, create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "webpack-hmr.config.js");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " file in the root directory of your application.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "\nconst webpack = require('webpack');\nconst nodeExternals = require('webpack-node-externals');\nconst StartServerPlugin = require('start-server-webpack-plugin');\n\nmodule.exports = function(options) {\n  return {\n    ...options,\n    entry: ['webpack/hot/poll?100', './src/main.ts'],\n    watch: true,\n    externals: [\n      nodeExternals({\n        whitelist: ['webpack/hot/poll?100'],\n      }),\n    ],\n    plugins: [\n      ...options.plugins,\n      new webpack.HotModuleReplacementPlugin(),\n      new webpack.WatchIgnorePlugin([/\\.js$/, /\\.d\\.ts$/]),\n      new StartServerPlugin({ name: 'main.js' }),\n    ],\n  };\n};");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "This function takes the original object containing the default webpack configuration and returns a modified one with an applied ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "HotModuleReplacementPlugin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, " plugin.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "h4", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Hot-Module Replacement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "To enable ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "HMR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, ", open the application entry file (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "main.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, ") and add the following webpack-related instructions:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "\ndeclare const module: any;\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  await app.listen(3000);\n\n  if (module.hot) {\n    module.hot.accept();\n    module.hot.dispose(() => app.close());\n  }\n}\nbootstrap();");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "To simplify the execution process, add a script to your ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "package.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, " file.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "\n\"start:dev\": \"nest build --watch --webpack --webpackPath webpack-hmr.config.js\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Now simply open your command line and run the following command:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "\n$ npm run start:dev");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Without CLI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "If you are not using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Nest CLI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, ", the configuration will be slightly more complex (will require more manual steps).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "h4", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Installation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "First install the required packages:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "\n$ npm i --save-dev webpack webpack-cli webpack-node-externals ts-loader start-server-webpack-plugin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Configuration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Once the installation is complete, create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "webpack.config.js");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, " file in the root directory of your application.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "\nconst webpack = require('webpack');\nconst path = require('path');\nconst nodeExternals = require('webpack-node-externals');\nconst StartServerPlugin = require('start-server-webpack-plugin');\n\nmodule.exports = {\n  entry: ['webpack/hot/poll?100', './src/main.ts'],\n  watch: true,\n  target: 'node',\n  externals: [\n    nodeExternals({\n      whitelist: ['webpack/hot/poll?100'],\n    }),\n  ],\n  module: {\n    rules: [\n      {\n        test: /.tsx?$/,\n        use: 'ts-loader',\n        exclude: /node_modules/,\n      },\n    ],\n  },\n  mode: 'development',\n  resolve: {\n    extensions: ['.tsx', '.ts', '.js'],\n  },\n  plugins: [\n    new webpack.HotModuleReplacementPlugin(),\n    new StartServerPlugin({ name: 'server.js' }),\n  ],\n  output: {\n    path: path.join(__dirname, 'dist'),\n    filename: 'server.js',\n  },\n};");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "This configuration tells webpack a few essential things about your application: location of the entry file, which directory should be used to hold ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "compiled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, " files, and what kind of loader we want to use to compile source files. Generally, you should be able to use this file as-is, even if you don't fully understand all of the options.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "h4", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Hot-Module Replacement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "To enable ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "HMR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, ", open the application entry file (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "main.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, ") and add the following webpack-related instructions:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "\ndeclare const module: any;\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  await app.listen(3000);\n\n  if (module.hot) {\n    module.hot.accept();\n    module.hot.dispose(() => app.close());\n  }\n}\nbootstrap();");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "To simplify the execution process, add a script to your ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "package.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, " file.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "\n\"start:dev\": \"webpack --config webpack.config.js\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Now simply open your command line and run the following command:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "\n$ npm run start:dev");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "A working example is available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??HotReloadComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](HotReloadComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HotReloadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hot-reload',
          templateUrl: './hot-reload.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/recipes/mongodb/mongodb.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/homepage/pages/recipes/mongodb/mongodb.component.ts ***!
    \*********************************************************************/

  /*! exports provided: MongodbComponent */

  /***/
  function srcAppHomepagePagesRecipesMongodbMongodbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MongodbComponent", function () {
      return MongodbComponent;
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


    var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/components/tabs/tabs.component */
    "./src/app/shared/components/tabs/tabs.component.ts");
    /* harmony import */


    var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/pipes/extension.pipe */
    "./src/app/shared/pipes/extension.pipe.ts");

    var MongodbComponent =
    /*#__PURE__*/
    function (_page_page_component_5) {
      _inherits(MongodbComponent, _page_page_component_5);

      function MongodbComponent() {
        _classCallCheck(this, MongodbComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(MongodbComponent).apply(this, arguments));
      }

      return MongodbComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    MongodbComponent.??fac = function MongodbComponent_Factory(t) {
      return ??MongodbComponent_BaseFactory(t || MongodbComponent);
    };

    MongodbComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MongodbComponent,
      selectors: [["app-mongodb"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 232,
      vars: 40,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/mongodb.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "mongodb-mongoose"], [1, ""], ["routerLink", "/techniques/mongodb"], ["rel", "nofollow", "target", "_blank", "href", "http://mongoosejs.com"], ["rel", "nofollow", "target", "_blank", "href", "https://www.mongodb.org/"], ["appAnchor", "", "id", "getting-started"], [1, "filename"], ["app4d37149deaa0a6b42a693e76292fe278b06f58f5", ""], [1, "language-typescript"], ["routerLink", "/fundamentals/async-components"], ["app3dfc07faac8f137ac900471f754d6c67158a13b4", ""], [1, "info"], ["app6d74c25a66154f33a13c77930f994a8f52908837", ""], ["appAnchor", "", "id", "model-injection"], ["rel", "nofollow", "target", "_blank", "href", "http://mongoosejs.com/docs/guide.html"], ["appd480a93c8965756ae3c9975a66bde50d3d72fd01", ""], ["appf7375d018349b7f6c1a065419f08ec0ee2e92108", ""], ["app2a3643ad0ff2b7de870d462e925d45cdfb882891", ""], ["appc095cdb746d4ff99cba3ed5e4eb6cb4316fd426e", ""], [1, "warning"]],
      template: function MongodbComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "MongoDB (Mongoose)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "blockquote", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " In this article, you'll learn how to create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "DatabaseModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " based on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Mongoose");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " package from scratch using custom components. As a consequence, this solution contains a lot of overhead that you can omit using ready to use and available out-of-the-box dedicated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "@nestjs/mongoose");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " package. To learn more, see ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Mongoose");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " is the most popular ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "MongoDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " object modeling tool.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Getting started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "To start the adventure with this library we have to install all required dependencies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "app-tabs", null, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "\n$ npm install --save mongoose\n$ npm install --save-dev @types/mongoose");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "\n$ npm install --save mongoose");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "The first step we need to do is to establish the connection with our database using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "connect()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " function. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "connect()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " function returns a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Promise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, ", and therefore we have to create an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "async provider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](60, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "app-tabs", null, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "\nimport * as mongoose from 'mongoose';\n\nexport const databaseProviders = [\n  {\n    provide: 'DATABASE_CONNECTION',\n    useFactory: (): Promise<typeof mongoose> =>\n      mongoose.connect('mongodb://localhost/nest'),\n  },\n];");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "\nimport * as mongoose from 'mongoose';\n\nexport const databaseProviders = [\n  {\n    provide: 'DATABASE_CONNECTION',\n    useFactory: () => mongoose.connect('mongodb://localhost/nest'),\n  },\n];");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "blockquote", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " Following best practices, we declared the custom provider in the separated file which has a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "*.providers.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, " suffix.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Then, we need to export these providers to make them ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "accessible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " for the rest part of the application.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](83, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "app-tabs", null, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "\nimport { Module } from '@nestjs/common';\nimport { databaseProviders } from './database.providers';\n\n@Module({\n  providers: [...databaseProviders],\n  exports: [...databaseProviders],\n})\nexport class DatabaseModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Now we can inject the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, " object using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "@Inject()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, " decorator. Each class that would depend on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, " async provider will wait until a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Promise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, " is resolved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Model injection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "With Mongoose, everything is derived from a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Schema");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, ". Let's define the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "CatSchema");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](116, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "app-tabs", null, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "\nimport * as mongoose from 'mongoose';\n\nexport const CatSchema = new mongoose.Schema({\n  name: String,\n  age: Number,\n  breed: String,\n});");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "CatsSchema");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, " belongs to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "cats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, " directory. This directory represents the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "CatsModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Now it's time to create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, " provider:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](140, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](141, "app-tabs", null, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "\nimport { Connection } from 'mongoose';\nimport { CatSchema } from './schemas/cat.schema';\n\nexport const catsProviders = [\n  {\n    provide: 'CAT_MODEL',\n    useFactory: (connection: Connection) => connection.model('Cat', CatSchema),\n    inject: ['DATABASE_CONNECTION'],\n  },\n];");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "\nimport { CatSchema } from './schemas/cat.schema';\n\nexport const catsProviders = [\n  {\n    provide: 'CAT_MODEL',\n    useFactory: (connection) => connection.model('Cat', CatSchema),\n    inject: ['DATABASE_CONNECTION'],\n  },\n];");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "blockquote", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, " In the real-world applications you should avoid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "magic strings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, ". Both ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "CAT_MODEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "DATABASE_CONNECTION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, " should be kept in the separated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "constants.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, " file.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Now we can inject the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "CAT_MODEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, " to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, " using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "@Inject()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, " decorator:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](178, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](179, "app-tabs", null, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "\nimport { Model } from 'mongoose';\nimport { Injectable, Inject } from '@nestjs/common';\nimport { Cat } from './interfaces/cat.interface';\nimport { CreateCatDto } from './dto/create-cat.dto';\n\n@Injectable()\nexport class CatsService {\n  constructor(\n    @Inject('CAT_MODEL')\n    private readonly catModel: Model<Cat>,\n  ) {}\n\n  async create(createCatDto: CreateCatDto): Promise<Cat> {\n    const createdCat = new this.catModel(createCatDto);\n    return createdCat.save();\n  }\n\n  async findAll(): Promise<Cat[]> {\n    return this.catModel.find().exec();\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "\nimport { Injectable, Dependencies } from '@nestjs/common';\n\n@Injectable()\n@Dependencies('CAT_MODEL')\nexport class CatsService {\n  constructor(catModel) {\n    this.catModel = catModel;\n  }\n\n  async create(createCatDto) {\n    const createdCat = new this.catModel(createCatDto);\n    return createdCat.save();\n  }\n\n  async findAll() {\n    return this.catModel.find().exec();\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "In the above example we have used the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "Cat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, " interface. This interface extends the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "Document");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, " from the mongoose package:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "\nimport { Document } from 'mongoose';\n\nexport interface Cat extends Document {\n  readonly name: string;\n  readonly age: number;\n  readonly breed: string;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "The database connection is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "asynchronous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, ", but Nest makes this process completely invisible for the end-user. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "CatModel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, " class is waiting for the db connection, and the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, " is delayed until model is ready to use. The entire application can start when each class is instantiated.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "Here is a final ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "CatsModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](216, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](217, "app-tabs", null, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "\nimport { Module } from '@nestjs/common';\nimport { CatsController } from './cats.controller';\nimport { CatsService } from './cats.service';\nimport { catsProviders } from './cats.providers';\nimport { DatabaseModule } from '../database/database.module';\n\n@Module({\n  imports: [DatabaseModule],\n  controllers: [CatsController],\n  providers: [\n    CatsService,\n    ...catsProviders,\n  ],\n})\nexport class CatsModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "blockquote", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, " Do not forget to import the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "CatsModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, " into the root ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "ApplicationModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r333 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](37);

          var _r334 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](62);

          var _r335 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](85);

          var _r336 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](118);

          var _r337 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](142);

          var _r338 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](180);

          var _r339 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](218);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r333.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r333.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](60, 22, "database.providers", _r334.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r334.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r334.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](83, 25, "database.module", _r335.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](116, 28, "schemas/cat.schema", _r336.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](140, 31, "cats.providers", _r337.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r337.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r337.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](178, 34, "cats.service", _r338.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r338.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r338.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](216, 37, "cats.module", _r339.isJsActive), "\n");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"]],
      pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__["ExtensionPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??MongodbComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](MongodbComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MongodbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mongodb',
          templateUrl: './mongodb.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/recipes/prisma/prisma.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/homepage/pages/recipes/prisma/prisma.component.ts ***!
    \*******************************************************************/

  /*! exports provided: PrismaComponent */

  /***/
  function srcAppHomepagePagesRecipesPrismaPrismaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrismaComponent", function () {
      return PrismaComponent;
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

    var PrismaComponent =
    /*#__PURE__*/
    function (_page_page_component_6) {
      _inherits(PrismaComponent, _page_page_component_6);

      function PrismaComponent() {
        _classCallCheck(this, PrismaComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(PrismaComponent).apply(this, arguments));
      }

      return PrismaComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    PrismaComponent.??fac = function PrismaComponent_Factory(t) {
      return ??PrismaComponent_BaseFactory(t || PrismaComponent);
    };

    PrismaComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: PrismaComponent,
      selectors: [["app-prisma"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 210,
      vars: 16,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/prisma.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "prisma"], ["rel", "nofollow", "target", "_blank", "href", "https://www.prisma.io/"], ["rel", "nofollow", "target", "_blank", "href", "https://www.prisma.io/features/"], [1, "warning"], ["appAnchor", "", "id", "dependencies"], [1, "language-bash"], ["appAnchor", "", "id", "setup-prisma"], ["rel", "nofollow", "target", "_blank", "href", "https://www.prisma.io/cloud/"], ["rel", "nofollow", "target", "_blank", "href", "https://www.prisma.io/docs/quickstart/"], [1, "language-yaml"], [1, "language-graphql"], ["rel", "nofollow", "target", "_blank", "href", "https://www.prisma.io/features/data-modeling/"], ["appAnchor", "", "id", "create-the-client"], ["rel", "nofollow", "target", "_blank", "href", "https://www.npmjs.com/package/graphql-cli"], ["appAnchor", "", "id", "integration"], [1, "filename"], ["app7df270afba2a475f0298af801d3f1f05c4a75083", ""], [1, "language-typescript"], ["appdb8e2d7c357ba4f1df852f262f2f0d13706f2b6f", ""], [1, "info"], ["routerLink", "/cli/overview"], ["appAnchor", "", "id", "usage"], ["appef26848d71854a61e38026effc0559f37e849522", ""], ["appca2231f0e9d5376b1b9f3e4aa3db809301d92eba", ""], ["appAnchor", "", "id", "example"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/nest/tree/master/sample/22-graphql-prisma"]],
      template: function PrismaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Prisma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Prisma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " turns your database into a GraphQL API and enables the use of GraphQL as a universal query language for all databases. Instead of writing SQL or using a NoSQL API, you can query your database with GraphQL. In this chapter we won't go into details about Prisma, so head over to their website and have a look what ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " are available.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "blockquote", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " In this article, you'll learn how to integrate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Prisma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " into the Nest framework. We assume that you are already familiar with the GraphQL concepts and the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "@nestjs/graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " module.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Dependencies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Firstly, we need to install the required packages:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "\n$ npm install --save prisma-binding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Setup Prisma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "While working with Prisma you can either host your own instance or use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Prisma Cloud");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, ". In this introduction we are going to use the demo server provided by Prisma.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Install the Prisma CLI ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "npm install -g prisma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Create a new service ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "prisma init");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, ", choose the demo server and follow the instructions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Deploy your service ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "prisma deploy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "If you find yourself in trouble jump over to their ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Quick Start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " section for further details. Eventually you should see two new files in your project directory, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "prisma.yaml");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, " configuration file:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "code", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "\nendpoint: https://us1.prisma.sh/nest-f6ec12/prisma/dev\ndatamodel: datamodel.graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "and automatically created data model, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "datamodel.graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "\ntype User {\n  id: ID! @unique\n  name: String!\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "blockquote", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, " In the real-world applications you will create more complex data models. For more information about data modeling in Prisma click ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "By typing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "prisma playground");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, " you can open the Prisma GraphQL playground.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "h4", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Create the client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "There are a couple of ways to integrate a GraphQL API. We are going to use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "GraphQL CLI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, ", a command line tool for common GraphQL development workflows. To install the GraphQL CLI use the following command:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "\n$ npm install -g graphql-cli");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Next, create your ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, ".graphqlconfig");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, " in the root directory of the your Nest application:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "\n$ touch .graphqlconfig.yml");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Put the following content into it:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "code", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "\nprojects:\n  database:\n    schemaPath: src/prisma/prisma-types.graphql\n    extensions:\n      endpoints:\n        default: https://us1.prisma.sh/nest-f6ec12/prisma/dev\n      codegen:\n        - generator: prisma-binding\n          language: typescript\n          output:\n            binding: src/prisma/prisma.binding.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "To download your Prisma GraphQL schema to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "prisma/prisma-types.graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, " and create your Prisma client under ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "prisma/prisma.binding.graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, ", run the following commands in your terminal:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "\n$ graphql get-schema --project database\n$ graphql codegen --project database");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "h4", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Integration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Almost done. Now, let's create a module for our Prisma integration.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](127, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](128, "app-tabs", null, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "code", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "\nimport { Injectable } from '@nestjs/common';\nimport { Prisma } from './prisma.binding';\n\n@Injectable()\nexport class PrismaService extends Prisma {\n  constructor() {\n    super({\n      endpoint: 'https://us1.prisma.sh/nest-f6ec12/prisma/dev',\n      debug: false,\n    });\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Once ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "PrismaService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, " is ready, we need to create a corresponding module.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](140, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](141, "app-tabs", null, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "code", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "\nimport { Module } from '@nestjs/common';\nimport { PrismaService } from './prisma.service';\n\n@Module({\n  providers: [PrismaService],\n  exports: [PrismaService],\n})\nexport class PrismaModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "blockquote", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, " To create new modules and services in no time we can make use of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Nest CLI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, ". To create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "PrismaModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, " type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "nest g module prisma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, " and for the service ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "nest g service prisma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "Usage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "To use your new service we are going to import the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "PrismaModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, " and inject the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "PrismaService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, " into ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "UsersResolver");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](177, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](178, "app-tabs", null, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "code", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "\nimport { Module } from '@nestjs/common';\nimport { UsersResolver } from './users.resolver';\nimport { PrismaModule } from '../prisma/prisma.module';\n\n@Module({\n  imports: [PrismaModule],\n  providers: [UsersResolver],\n})\nexport class UsersModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "Importing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "PrismaModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, " makes exported ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "PrismaService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, " available in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "UsersModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, " context.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](196, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](197, "app-tabs", null, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "code", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "\nimport { Query, Resolver, Args, Info } from '@nestjs/graphql';\nimport { PrismaService } from '../prisma/prisma.service';\nimport { User } from '../graphql.schema';\n\n@Resolver()\nexport class UsersResolver {\n  constructor(private readonly prisma: PrismaService) {}\n\n  @Query('users')\n  async getUsers(@Args() args, @Info() info): Promise<User[]> {\n    return this.prisma.query.users(args, info);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "h4", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "Example");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "A slightly modified example is available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r341 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](129);

          var _r342 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](142);

          var _r343 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](179);

          var _r344 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](198);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](127, 4, "prisma.service", _r341.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](140, 7, "prisma.module", _r342.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](177, 10, "users.module", _r343.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](196, 13, "users.resolver", _r344.isJsActive), "\n");
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__["ExtensionPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??PrismaComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](PrismaComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PrismaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-prisma',
          templateUrl: './prisma.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/recipes/recipes.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/homepage/pages/recipes/recipes.module.ts ***!
    \**********************************************************/

  /*! exports provided: RecipesModule */

  /***/
  function srcAppHomepagePagesRecipesRecipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipesModule", function () {
      return RecipesModule;
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


    var _cqrs_cqrs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cqrs/cqrs.component */
    "./src/app/homepage/pages/recipes/cqrs/cqrs.component.ts");
    /* harmony import */


    var _crud_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./crud/crud.component */
    "./src/app/homepage/pages/recipes/crud/crud.component.ts");
    /* harmony import */


    var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./documentation/documentation.component */
    "./src/app/homepage/pages/recipes/documentation/documentation.component.ts");
    /* harmony import */


    var _hot_reload_hot_reload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./hot-reload/hot-reload.component */
    "./src/app/homepage/pages/recipes/hot-reload/hot-reload.component.ts");
    /* harmony import */


    var _mongodb_mongodb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./mongodb/mongodb.component */
    "./src/app/homepage/pages/recipes/mongodb/mongodb.component.ts");
    /* harmony import */


    var _prisma_prisma_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./prisma/prisma.component */
    "./src/app/homepage/pages/recipes/prisma/prisma.component.ts");
    /* harmony import */


    var _serve_static_serve_static_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./serve-static/serve-static.component */
    "./src/app/homepage/pages/recipes/serve-static/serve-static.component.ts");
    /* harmony import */


    var _sql_sequelize_sql_sequelize_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./sql-sequelize/sql-sequelize.component */
    "./src/app/homepage/pages/recipes/sql-sequelize/sql-sequelize.component.ts");
    /* harmony import */


    var _sql_typeorm_sql_typeorm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./sql-typeorm/sql-typeorm.component */
    "./src/app/homepage/pages/recipes/sql-typeorm/sql-typeorm.component.ts");
    /* harmony import */


    var _swagger_swagger_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./swagger/swagger.component */
    "./src/app/homepage/pages/recipes/swagger/swagger.component.ts");
    /* harmony import */


    var _terminus_terminus_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./terminus/terminus.component */
    "./src/app/homepage/pages/recipes/terminus/terminus.component.ts");

    var routes = [{
      path: 'sql-typeorm',
      component: _sql_typeorm_sql_typeorm_component__WEBPACK_IMPORTED_MODULE_12__["SqlTypeormComponent"],
      data: {
        title: 'SQL (TypeORM)'
      }
    }, {
      path: 'mongodb',
      component: _mongodb_mongodb_component__WEBPACK_IMPORTED_MODULE_8__["MongodbComponent"],
      data: {
        title: 'MongoDB (Mongoose)'
      }
    }, {
      path: 'sql-sequelize',
      component: _sql_sequelize_sql_sequelize_component__WEBPACK_IMPORTED_MODULE_11__["SqlSequelizeComponent"],
      data: {
        title: 'SQL (Sequelize)'
      }
    }, {
      path: 'cqrs',
      component: _cqrs_cqrs_component__WEBPACK_IMPORTED_MODULE_4__["CqrsComponent"],
      data: {
        title: 'CQRS'
      }
    }, {
      path: 'swagger',
      component: _swagger_swagger_component__WEBPACK_IMPORTED_MODULE_13__["SwaggerComponent"],
      data: {
        title: 'OpenAPI (Swagger)'
      }
    }, {
      path: 'prisma',
      component: _prisma_prisma_component__WEBPACK_IMPORTED_MODULE_9__["PrismaComponent"],
      data: {
        title: 'Prisma'
      }
    }, {
      path: 'terminus',
      component: _terminus_terminus_component__WEBPACK_IMPORTED_MODULE_14__["TerminusComponent"],
      data: {
        title: 'Health checks (Terminus)'
      }
    }, {
      path: 'documentation',
      component: _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__["DocumentationComponent"],
      data: {
        title: 'Documentation (Compodoc)'
      }
    }, {
      path: 'crud-utilities',
      redirectTo: '/controllers'
    }, {
      path: 'crud',
      redirectTo: '/controllers'
    }, {
      path: 'hot-reload',
      component: _hot_reload_hot_reload_component__WEBPACK_IMPORTED_MODULE_7__["HotReloadComponent"],
      data: {
        title: 'Hot reload'
      }
    }, {
      path: 'serve-static',
      component: _serve_static_serve_static_component__WEBPACK_IMPORTED_MODULE_10__["ServeStaticComponent"],
      data: {
        title: 'Serve Static'
      }
    }];

    var RecipesModule = function RecipesModule() {
      _classCallCheck(this, RecipesModule);
    };

    RecipesModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: RecipesModule
    });
    RecipesModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function RecipesModule_Factory(t) {
        return new (t || RecipesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](RecipesModule, {
        declarations: [_sql_typeorm_sql_typeorm_component__WEBPACK_IMPORTED_MODULE_12__["SqlTypeormComponent"], _sql_sequelize_sql_sequelize_component__WEBPACK_IMPORTED_MODULE_11__["SqlSequelizeComponent"], _mongodb_mongodb_component__WEBPACK_IMPORTED_MODULE_8__["MongodbComponent"], _swagger_swagger_component__WEBPACK_IMPORTED_MODULE_13__["SwaggerComponent"], _prisma_prisma_component__WEBPACK_IMPORTED_MODULE_9__["PrismaComponent"], _cqrs_cqrs_component__WEBPACK_IMPORTED_MODULE_4__["CqrsComponent"], _hot_reload_hot_reload_component__WEBPACK_IMPORTED_MODULE_7__["HotReloadComponent"], _terminus_terminus_component__WEBPACK_IMPORTED_MODULE_14__["TerminusComponent"], _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__["DocumentationComponent"], _crud_crud_component__WEBPACK_IMPORTED_MODULE_5__["CrudComponent"], _serve_static_serve_static_component__WEBPACK_IMPORTED_MODULE_10__["ServeStaticComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](RecipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          declarations: [_sql_typeorm_sql_typeorm_component__WEBPACK_IMPORTED_MODULE_12__["SqlTypeormComponent"], _sql_sequelize_sql_sequelize_component__WEBPACK_IMPORTED_MODULE_11__["SqlSequelizeComponent"], _mongodb_mongodb_component__WEBPACK_IMPORTED_MODULE_8__["MongodbComponent"], _swagger_swagger_component__WEBPACK_IMPORTED_MODULE_13__["SwaggerComponent"], _prisma_prisma_component__WEBPACK_IMPORTED_MODULE_9__["PrismaComponent"], _cqrs_cqrs_component__WEBPACK_IMPORTED_MODULE_4__["CqrsComponent"], _hot_reload_hot_reload_component__WEBPACK_IMPORTED_MODULE_7__["HotReloadComponent"], _terminus_terminus_component__WEBPACK_IMPORTED_MODULE_14__["TerminusComponent"], _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_6__["DocumentationComponent"], _crud_crud_component__WEBPACK_IMPORTED_MODULE_5__["CrudComponent"], _serve_static_serve_static_component__WEBPACK_IMPORTED_MODULE_10__["ServeStaticComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/recipes/serve-static/serve-static.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/homepage/pages/recipes/serve-static/serve-static.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ServeStaticComponent */

  /***/
  function srcAppHomepagePagesRecipesServeStaticServeStaticComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServeStaticComponent", function () {
      return ServeStaticComponent;
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

    var ServeStaticComponent =
    /*#__PURE__*/
    function (_page_page_component_7) {
      _inherits(ServeStaticComponent, _page_page_component_7);

      function ServeStaticComponent() {
        _classCallCheck(this, ServeStaticComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(ServeStaticComponent).apply(this, arguments));
      }

      return ServeStaticComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    ServeStaticComponent.??fac = function ServeStaticComponent_Factory(t) {
      return ??ServeStaticComponent_BaseFactory(t || ServeStaticComponent);
    };

    ServeStaticComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ServeStaticComponent,
      selectors: [["app-serve-static"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 53,
      vars: 0,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/serve-static.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "serve-static"], ["appAnchor", "", "id", "installation"], [1, "language-bash"], ["appAnchor", "", "id", "bootstrap"], [1, "language-typescript"], ["appAnchor", "", "id", "summary"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/nest/tree/master/sample/24-serve-static"]],
      template: function ServeStaticComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Serve Static");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "In order to serve static content like a Single Page Application (SPA) we can use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "ServeStaticModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "@nestjs/serve-static");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " package.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Installation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "First we need to install the required package:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "code", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\n$ npm install --save @nestjs/serve-static");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Once the installation process is done, we can import the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "ServeStaticModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " into the root ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "AppModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " and configure it by passing in a configuration object to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "forRoot()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " method.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "\nimport { Module } from '@nestjs/common';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { ServeStaticModule } from '@nestjs/serve-static';\nimport { join } from 'path';\n\n@Module({\n  imports: [\n    ServeStaticModule.forRoot({\n      rootPath: join(__dirname, '..', 'client'),\n    }),\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "With this in place, build the static website and place its content in the location specified by the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "rootPath");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " property.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "A working example is available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??ServeStaticComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](ServeStaticComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ServeStaticComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-serve-static',
          templateUrl: './serve-static.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/recipes/sql-sequelize/sql-sequelize.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/homepage/pages/recipes/sql-sequelize/sql-sequelize.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: SqlSequelizeComponent */

  /***/
  function srcAppHomepagePagesRecipesSqlSequelizeSqlSequelizeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SqlSequelizeComponent", function () {
      return SqlSequelizeComponent;
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


    var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/pipes/extension.pipe */
    "./src/app/shared/pipes/extension.pipe.ts");

    var SqlSequelizeComponent =
    /*#__PURE__*/
    function (_page_page_component_8) {
      _inherits(SqlSequelizeComponent, _page_page_component_8);

      function SqlSequelizeComponent() {
        _classCallCheck(this, SqlSequelizeComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(SqlSequelizeComponent).apply(this, arguments));
      }

      return SqlSequelizeComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    SqlSequelizeComponent.??fac = function SqlSequelizeComponent_Factory(t) {
      return ??SqlSequelizeComponent_BaseFactory(t || SqlSequelizeComponent);
    };

    SqlSequelizeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: SqlSequelizeComponent,
      selectors: [["app-sql-sequelize"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 187,
      vars: 20,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/sql-sequelize.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "sql-sequelize"], ["id", "this-chapter-applies-only-to-typescript"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/sequelize/sequelize"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/RobinBuschmann/sequelize-typescript"], ["appAnchor", "", "id", "getting-started"], [1, "language-bash"], [1, "filename"], ["appfe13b18ee73ec8d18767aa3f83e878f9a7d73c36", ""], [1, "language-typescript"], [1, "warning"], ["appAnchor", "", "id", "model-injection"], ["app66d98cc4864883cc691f4425ea4d2d186f3255a3", ""], ["app7b6f4cbf5473ab557bc10e1347224f2a384ced43", ""], [1, ""], ["appa8b84f9749ab38c84d16e855f09a7fc5b843af04", ""], ["app5eaafd28f38154e5790128addba8e570c44151d1", ""]],
      template: function SqlSequelizeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "SQL (Sequelize)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "This chapter applies only to TypeScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Sequelize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " is a popular Object Relational Mapper (ORM) written in a vanilla JavaScript, but there is a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "sequelize-typescript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " TypeScript wrapper which provides a set of decorators and other extras for the base sequelize.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Getting started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "To start the adventure with this library we have to install the following dependencies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "\n$ npm install --save sequelize sequelize-typescript mysql2\n$ npm install --save-dev @types/sequelize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "The first step we need to do is create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Sequelize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " instance with an options object passed into the constructor. Also, we need to add all models (the alternative is to use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "modelPaths");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " property) and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "sync()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " our database tables.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](37, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "app-tabs", null, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "\nimport { Sequelize } from 'sequelize-typescript';\nimport { Cat } from '../cats/cat.entity';\n\nexport const databaseProviders = [\n  {\n    provide: 'SEQUELIZE',\n    useFactory: async () => {\n      const sequelize = new Sequelize({\n        dialect: 'mysql',\n        host: 'localhost',\n        port: 3306,\n        username: 'root',\n        password: 'password',\n        database: 'nest',\n      });\n      sequelize.addModels([Cat]);\n      await sequelize.sync();\n      return sequelize;\n    },\n  },\n];");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "blockquote", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " Following best practices, we declared the custom provider in the separated file which has a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "*.providers.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, " suffix.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Then, we need to export these providers to make them ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "accessible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " for the rest part of the application.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "\nimport { Module } from '@nestjs/common';\nimport { databaseProviders } from './database.providers';\n\n@Module({\n  providers: [...databaseProviders],\n  exports: [...databaseProviders],\n})\nexport class DatabaseModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Now we can inject the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Sequelize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " object using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "@Inject()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " decorator. Each class that would depend on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Sequelize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " async provider will wait until a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Promise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, " is resolved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Model injection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "In ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Sequelize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, " the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, " defines a table in the database. Instances of this class represent a database row. Firstly, we need at least one entity:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](85, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "app-tabs", null, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "\nimport { Table, Column, Model } from 'sequelize-typescript';\n\n@Table\nexport class Cat extends Model<Cat> {\n  @Column\n  name: string;\n\n  @Column\n  age: number;\n\n  @Column\n  breed: string;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Cat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, " entity belongs to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "cats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, " directory. This directory represents the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "CatsModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, ". Now it's time to create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Repository");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, " provider:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](107, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "app-tabs", null, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "\nimport { Cat } from './cat.entity';\n\nexport const catsProviders = [\n  {\n    provide: 'CATS_REPOSITORY',\n    useValue: Cat,\n  },\n];");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "blockquote", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, " In the real-world applications you should avoid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "magic strings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, ". Both ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "CATS_REPOSITORY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "SEQUELIZE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, " should be kept in the separated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "constants.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, " file.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "In Sequelize, we use static methods to manipulate the data, and thus we created an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "alias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, " here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Now we can inject the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "CATS_REPOSITORY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, " to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, " using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "@Inject()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, " decorator:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](147, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](148, "app-tabs", null, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "\nimport { Injectable, Inject } from '@nestjs/common';\nimport { CreateCatDto } from './dto/create-cat.dto';\nimport { Cat } from './cat.entity';\n\n@Injectable()\nexport class CatsService {\n  constructor(\n    @Inject('CATS_REPOSITORY') private readonly catsRepository: typeof Cat) {}\n\n  async findAll(): Promise<Cat[]> {\n    return this.catsRepository.findAll<Cat>();\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "The database connection is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "asynchronous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, ", but Nest makes this process completely invisible for the end-user. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "CATS_REPOSITORY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, " provider is waiting for the db connection, and the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "CatsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, " is delayed until repository is ready to use. The entire application can start when each class is instantiated.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Here is a final ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "CatsModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](171, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](172, "app-tabs", null, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "code", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "\nimport { Module } from '@nestjs/common';\nimport { CatsController } from './cats.controller';\nimport { CatsService } from './cats.service';\nimport { catsProviders } from './cats.providers';\nimport { DatabaseModule } from '../database/database.module';\n\n@Module({\n  imports: [DatabaseModule],\n  controllers: [CatsController],\n  providers: [\n    CatsService,\n    ...catsProviders,\n  ],\n})\nexport class CatsModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "blockquote", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, " Do not forget to import the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "CatsModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, " into the root ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "ApplicationModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r347 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](39);

          var _r348 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](87);

          var _r349 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](109);

          var _r350 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](149);

          var _r351 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](37, 5, "database.providers", _r347.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](85, 8, "cat.entity", _r348.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](107, 11, "cats.providers", _r349.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](147, 14, "cats.service", _r350.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](171, 17, "cats.module", _r351.isJsActive), "\n");
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"]],
      pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__["ExtensionPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??SqlSequelizeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](SqlSequelizeComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SqlSequelizeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sql-sequelize',
          templateUrl: './sql-sequelize.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/recipes/sql-typeorm/sql-typeorm.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/homepage/pages/recipes/sql-typeorm/sql-typeorm.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: SqlTypeormComponent */

  /***/
  function srcAppHomepagePagesRecipesSqlTypeormSqlTypeormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SqlTypeormComponent", function () {
      return SqlTypeormComponent;
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


    var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/components/tabs/tabs.component */
    "./src/app/shared/components/tabs/tabs.component.ts");
    /* harmony import */


    var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/pipes/extension.pipe */
    "./src/app/shared/pipes/extension.pipe.ts");

    var SqlTypeormComponent =
    /*#__PURE__*/
    function (_page_page_component_9) {
      _inherits(SqlTypeormComponent, _page_page_component_9);

      function SqlTypeormComponent() {
        _classCallCheck(this, SqlTypeormComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(SqlTypeormComponent).apply(this, arguments));
      }

      return SqlTypeormComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    SqlTypeormComponent.??fac = function SqlTypeormComponent_Factory(t) {
      return ??SqlTypeormComponent_BaseFactory(t || SqlTypeormComponent);
    };

    SqlTypeormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: SqlTypeormComponent,
      selectors: [["app-sql-typeorm"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 208,
      vars: 24,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/sql-typeorm.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "sql-typeorm"], ["id", "this-chapter-applies-only-to-typescript"], [1, ""], ["routerLink", "/techniques/sql"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/typeorm/typeorm"], ["appAnchor", "", "id", "getting-started"], [1, "language-bash"], ["routerLink", "/fundamentals/async-components"], [1, "filename"], ["app535b76866fa1db98a28e54a18ff3b91f4d2dabba", ""], [1, "language-typescript"], [1, "warning"], ["app65e8da154e1b5e2e14f2a39fef212fa2556e7ca7", ""], ["appAnchor", "", "id", "repository-pattern"], ["app5e06b386596932c790cfb6a7bcb07d00322667d2", ""], ["appa0646c9248a851c1ddc4973a78510c6799ddd3ae", ""], ["app966de46010505708c35655c4bf9b06bc66b8ef5c", ""], ["app987076725ec524f6efa168917a42d07d41af33e2", ""]],
      template: function SqlTypeormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "SQL (TypeORM)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "This chapter applies only to TypeScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "blockquote", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " In this article, you'll learn how to create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "DatabaseModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " based on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "TypeORM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " package from scratch using custom providers mechanism. As a consequence, this solution contains a lot of overhead that you can omit using ready to use and available out-of-the-box dedicated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "@nestjs/typeorm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " package. To learn more, see ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "TypeORM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " is definitely the most mature Object Relational Mapper (ORM) available in the node.js world. Since it's written in TypeScript, it works pretty well with the Nest framework.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Getting started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "To start the adventure with this library we have to install all required dependencies:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "\n$ npm install --save typeorm mysql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "The first step we need to do is to establish the connection with our database using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "createConnection()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " function imported from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "typeorm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " package. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "createConnection()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " function returns a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Promise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, ", and therefore we have to create an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "async provider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](56, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "app-tabs", null, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "\nimport { createConnection } from 'typeorm';\n\nexport const databaseProviders = [\n  {\n    provide: 'DATABASE_CONNECTION',\n    useFactory: async () => await createConnection({\n      type: 'mysql',\n      host: 'localhost',\n      port: 3306,\n      username: 'root',\n      password: 'root',\n      database: 'test',\n      entities: [\n          __dirname + '/../**/*.entity{.ts,.js}',\n      ],\n      synchronize: true,\n    }),\n  },\n];");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "blockquote", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " Following best practices, we declared the custom provider in the separated file which has a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "*.providers.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " suffix.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Then, we need to export these providers to make them ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "accessible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, " for the rest of the application.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](76, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "app-tabs", null, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "\nimport { Module } from '@nestjs/common';\nimport { databaseProviders } from './database.providers';\n\n@Module({\n  providers: [...databaseProviders],\n  exports: [...databaseProviders],\n})\nexport class DatabaseModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Now we can inject the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, " object using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "@Inject()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, " decorator. Each class that would depend on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, " async provider will wait until a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Promise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, " is resolved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Repository pattern");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "TypeORM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, " supports the repository design pattern, thus each entity has its own Repository. These repositories can be obtained from the database connection.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "But firstly, we need at least one entity. We are going to reuse the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, " entity from the official documentation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](111, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "app-tabs", null, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "\nimport { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class Photo {\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ length: 500 })\n  name: string;\n\n  @Column('text')\n  description: string;\n\n  @Column()\n  filename: string;\n\n  @Column('int')\n  views: number;\n\n  @Column()\n  isPublished: boolean;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, " entity belongs to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, " directory. This directory represents the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "PhotoModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, ". Now, let's create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Repository");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, " provider:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](133, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](134, "app-tabs", null, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "\nimport { Connection, Repository } from 'typeorm';\nimport { Photo } from './photo.entity';\n\nexport const photoProviders = [\n  {\n    provide: 'PHOTO_REPOSITORY',\n    useFactory: (connection: Connection) => connection.getRepository(Photo),\n    inject: ['DATABASE_CONNECTION'],\n  },\n];");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "blockquote", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, " In the real-world applications you should avoid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "magic strings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, ". Both ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "PHOTO_REPOSITORY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "DATABASE_CONNECTION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, " should be kept in the separated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "constants.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, " file.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "Now we can inject the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "Repository<Photo>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, " to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "PhotoService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, " using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "@Inject()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, " decorator:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](168, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](169, "app-tabs", null, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "\nimport { Injectable, Inject } from '@nestjs/common';\nimport { Repository } from 'typeorm';\nimport { Photo } from './photo.entity';\n\n@Injectable()\nexport class PhotoService {\n  constructor(\n    @Inject('PHOTO_REPOSITORY')\n    private readonly photoRepository: Repository<Photo>,\n  ) {}\n\n  async findAll(): Promise<Photo[]> {\n    return this.photoRepository.find();\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "The database connection is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "asynchronous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, ", but Nest makes this process completely invisible for the end-user. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "PhotoRepository");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, " is waiting for the db connection, and the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "PhotoService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, " is delayed until repository is ready to use. The entire application can start when each class is instantiated.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "Here is a final ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "PhotoModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](192, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](193, "app-tabs", null, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "\nimport { Module } from '@nestjs/common';\nimport { DatabaseModule } from '../database/database.module';\nimport { photoProviders } from './photo.providers';\nimport { PhotoService } from './photo.service';\n\n@Module({\n  imports: [DatabaseModule],\n  providers: [\n    ...photoProviders,\n    PhotoService,\n  ],\n})\nexport class PhotoModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "blockquote", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, " Do not forget to import the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "PhotoModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, " into the root ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "ApplicationModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r353 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](58);

          var _r354 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](78);

          var _r355 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](113);

          var _r356 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](135);

          var _r357 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](170);

          var _r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](194);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](56, 6, "database.providers", _r353.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](76, 9, "database.module", _r354.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](111, 12, "photo.entity", _r355.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](133, 15, "photo.providers", _r356.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](168, 18, "photo.service", _r357.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](192, 21, "photo.module", _r358.isJsActive), "\n");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"]],
      pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_5__["ExtensionPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??SqlTypeormComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](SqlTypeormComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SqlTypeormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sql-typeorm',
          templateUrl: './sql-typeorm.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/recipes/swagger/swagger.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/homepage/pages/recipes/swagger/swagger.component.ts ***!
    \*********************************************************************/

  /*! exports provided: SwaggerComponent */

  /***/
  function srcAppHomepagePagesRecipesSwaggerSwaggerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwaggerComponent", function () {
      return SwaggerComponent;
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


    var _shared_components_banner_enterprise_banner_enterprise_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/components/banner-enterprise/banner-enterprise.component */
    "./src/app/shared/components/banner-enterprise/banner-enterprise.component.ts");
    /* harmony import */


    var _shared_components_banner_courses_banner_courses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/components/banner-courses/banner-courses.component */
    "./src/app/shared/components/banner-courses/banner-courses.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_banner_shop_banner_shop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/components/banner-shop/banner-shop.component */
    "./src/app/shared/components/banner-shop/banner-shop.component.ts");

    var SwaggerComponent =
    /*#__PURE__*/
    function (_page_page_component_10) {
      _inherits(SwaggerComponent, _page_page_component_10);

      function SwaggerComponent() {
        _classCallCheck(this, SwaggerComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(SwaggerComponent).apply(this, arguments));
      }

      return SwaggerComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    SwaggerComponent.??fac = function SwaggerComponent_Factory(t) {
      return ??SwaggerComponent_BaseFactory(t || SwaggerComponent);
    };

    SwaggerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: SwaggerComponent,
      selectors: [["app-swagger"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 1213,
      vars: 5,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/swagger.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "openapi-swagger"], ["rel", "nofollow", "target", "_blank", "href", "https://swagger.io/specification/"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/swagger"], ["appAnchor", "", "id", "installation"], [1, "language-bash"], ["appAnchor", "", "id", "bootstrap"], [1, "language-typescript"], ["src", "/assets/swagger1.png"], [1, "info"], ["appAnchor", "", "id", "route-parameters"], ["src", "/assets/swagger-dto.png"], ["href", "/recipes/swagger#plugin"], ["src", "/assets/swagger-dto2.png"], ["rel", "nofollow", "target", "_blank", "href", "https://swagger.io/specification/#schemaObject"], ["appAnchor", "", "id", "enums"], ["src", "/assets/enum_query.gif"], ["src", "/assets/enum_query_array.gif"], ["appAnchor", "", "id", "enums-schema"], ["rel", "nofollow", "target", "_blank", "href", "https://swagger.io/docs/specification/data-models/enums/"], [1, "language-yaml"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/RicoSuter/NSwag"], ["appAnchor", "", "id", "arrays"], ["appAnchor", "", "id", "circular-dependencies"], ["appAnchor", "", "id", "generics-and-interfaces"], ["appAnchor", "", "id", "raw-definitions"], ["appAnchor", "", "id", "extra-models"], ["appAnchor", "", "id", "oneof-anyof-allof"], ["rel", "nofollow", "target", "_blank", "href", "https://swagger.io/docs/specification/data-models/oneof-anyof-allof-not/"], ["appAnchor", "", "id", "multiple-specifications"], ["src", "/assets/swagger-cats.png"], ["src", "/assets/swagger-dogs.png"], ["appAnchor", "", "id", "tags"], ["appAnchor", "", "id", "headers"], ["appAnchor", "", "id", "responses"], ["src", "/assets/swagger-response-type.png"], ["appAnchor", "", "id", "global-prefix"], ["appAnchor", "", "id", "security"], ["appAnchor", "", "id", "basic-authentication"], ["appAnchor", "", "id", "bearer-authentication"], ["appAnchor", "", "id", "oauth2-authentication"], ["appAnchor", "", "id", "file-upload"], ["routerLink", "/techniques/file-upload"], ["appAnchor", "", "id", "extensions"], ["appAnchor", "", "id", "decorators"], ["appAnchor", "", "id", "plugin"], [1, "warning"], ["routerLink", "/cli/overview"], [1, "language-javascript"], ["appAnchor", "", "id", "migration-to-40"], ["appAnchor", "", "id", "example"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/nest/tree/master/sample/11-swagger"]],
      template: function SwaggerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "OpenAPI (Swagger)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "OpenAPI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " specification is a language-agnostic definition format used to describe RESTful APIs. Nest provides a dedicated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " which allows generating such a specification by leveraging decorators.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Installation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "To begin using it, we first install the required dependencies.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\n$ npm install --save @nestjs/swagger swagger-ui-express");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "If you use fastify, install ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "fastify-swagger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " instead of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "swagger-ui-express");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "\n$ npm install --save @nestjs/swagger fastify-swagger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Once the installation process is complete, open the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "main.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " file and initialize Swagger using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "SwaggerModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " class:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "\nimport { NestFactory } from '@nestjs/core';\nimport { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';\nimport { AppModule } from './app.module';\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n\n  const options = new DocumentBuilder()\n    .setTitle('Cats example')\n    .setDescription('The cats API description')\n    .setVersion('1.0')\n    .addTag('cats')\n    .build();\n  const document = SwaggerModule.createDocument(app, options);\n  SwaggerModule.setup('api', app, document);\n\n  await app.listen(3000);\n}\nbootstrap();");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "DocumentBuilder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " helps to structure a base document that conforms to the OpenAPI Specification. It provides several methods that allow setting such properties as title, description, version, etc. In order to create a full document (with all HTTP routes defined) we use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "createDocument()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " method of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "SwaggerModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " class. This method takes two arguments, an application instance and a Swagger options object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Once we create a document, we can call ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "setup()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, " method. It accepts:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "the path to mount the Swagger UI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "an application instance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "the document object instantiated above");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Now you can run the following command to start the HTTP server:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "\n$ npm run start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "While the application is running, open your browser and navigate to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "http://localhost:3000/api");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, ". You should see the Swagger UI.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "SwaggerModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, " automatically reflects all of your endpoints. Also, in order to display the Swagger UI, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "@nestjs/swagger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, " makes use of either ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "swagger-ui-express");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "fastify-swagger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, " depending on the platform.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, " To generate and download a Swagger JSON file, navigate to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "http://localhost:3000/api-json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, " in your browser (assuming that your Swagger documentation is available under ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "http://localhost:3000/api");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, ").\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "h4", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Route parameters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "SwaggerModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, " searches for all ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "@Body()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "@Query()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, ", and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "@Param()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, " decorators in route handlers to generate the API document. It also creates corresponding model definitions by taking advantage of reflection. Consider the following code:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "\n@Post()\nasync create(@Body() createCatDto: CreateCatDto) {\n  this.catsService.create(createCatDto);\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, " To explicitly set the body definition use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "@ApiBody()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, " decorator (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "@nestjs/swagger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, " package).\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Based on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "CreateCatDto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, ", the module definition will be created:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](143, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "As you can see, the definition is empty although the class has a few declared properties. In order to make the class properties visible to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "SwaggerModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, ", we have to either annotate them with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "@ApiProperty()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, " decorator or use a CLI plugin (read more in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Plugin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, " section) which will do it automatically:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "\nimport { ApiProperty } from '@nestjs/swagger';\n\nexport class CreateCatDto {\n  @ApiProperty()\n  name: string;\n\n  @ApiProperty()\n  age: number;\n\n  @ApiProperty()\n  breed: string;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, " Consider using the Swagger plugin (see ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "Plugin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, " section) which will automatically do it for you.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Let's open the browser and verify the generated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "CreateCatDto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, " model:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](171, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "In addition, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "@ApiProperty()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, " decorator allows setting various ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "Schema Object");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, " properties:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "\n@ApiProperty({\n  description: 'The age of a cat',\n  min: 1,\n  default: 1,\n})\nage: number;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, " Instead of explicitly typing the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, " you can use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "@ApiPropertyOptional()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, " short-hand decorator.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "In order to explicitly set the type of the property, use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, " key:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "\n@ApiProperty({\n  type: Number,\n})\nage: number;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "h4", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "Enums");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, "To identify an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "enum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, ", we must manually set the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "enum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, " property on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "@ApiProperty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, " with an array of values.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "\n@ApiProperty({ enum: ['Admin', 'Moderator', 'User']})\nrole: UserRole;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "Alternatively, define an actual TypeScript enum as follows:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "\nexport enum UserRole {\n  Admin = 'Admin',\n  Moderator = 'Moderator',\n  User = 'User',\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "You can then use the enum directly with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, "@Query()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, " parameter decorator in combination with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "@ApiQuery()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, " decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "\n@ApiQuery({ name: 'role', enum: UserRole })\nasync filterByRole(@Query('role') role: UserRole = UserRole.User) {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](235, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "With ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "isArray");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, " set to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, ", the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "enum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, " can be selected as a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "multi-select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](251, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "h4", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "Enums schema");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, "By default, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, "enum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, " property will add a raw definition of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, "Enum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, " on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264, "parameter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "code", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "\nCatDetail:\n  type: 'object'\n  properties:\n    ...\n    - breed:\n        type: 'string'\n        enum:\n          - Persian\n          - Tabby\n          - Siamese");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "The above specification works fine for most cases. However, if you are utilizing a tool that takes the specification as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](273, " and generates ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275, "client-side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, " code, you might run into a problem with the generated code containing duplicated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](278, "enums");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, ". Consider the following code snippet: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "\n// generated client-side code\nexport class CatDetail {\n   breed: CatDetailEnum;\n}\n\nexport class CatInformation {\n  breed: CatInformationEnum;\n}\n\nexport enum CatDetailEnum {\n  Persian = 'Persian',\n  Tabby = 'Tabby',\n  Siamese = 'Siamese'\n}\n\nexport enum CatInformationEnum {\n  Persian = 'Persian',\n  Tabby = 'Tabby',\n  Siamese = 'Siamese'\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](286, " The above snippet is generated using a tool called ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288, "NSwag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](289, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, "You can see that now you have two ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, "enums");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, " that are exactly the same. To address this issue, you can pass an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](296, "enumName");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, " next to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](299, "enum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, " property in your decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, "\nexport class CatDetail {\n   @ApiProperty({ enum: CatBreed, enumName: 'CatBreed' })\n   breed: CatBreed;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](306, "enumName");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, " enables ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](309, "nestjs/swagger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, " to turn ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](312, "CatBreed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, " into its own ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315, "schema");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, " which in turns makes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](318, "CatBreed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](319, " reusable. The specification will look like the following:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "code", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](322, "\nCatDetail:\n  type: 'object'\n  properties:\n    ...\n    - breed:\n        schema:\n          $ref: '#/components/schemas/CatBreed'\nCatBreed:\n  type: string\n  enum:\n    - Persian\n    - Tabby\n    - Siamese");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](325, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, " Any ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](328, "decorator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, " that takes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](331, "enum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](332, " as a property will also take ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](334, "enumName");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](335, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](338, "Arrays");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, "When the property is an array, we must manually indicate the array type as shown below:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](343, "\n@ApiProperty({ type: [String] })\nnames: string[];");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](346, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, " Consider using the Swagger plugin (see ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](349, "Plugin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](350, " section) which will automatically detect arrays.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](352, "Either include the type as the first element of an array (as shown above) or set the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](354, "isArray");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](355, " property to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](357, "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](358, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](360, "app-banner-enterprise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "h4", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](363, "Circular dependencies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](365, "When you have circular dependencies between classes, use a lazy function to provide the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](367, "SwaggerModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](368, " with type information:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](370, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](371, "\n@ApiProperty({ type: () => Node })\nnode: Node;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](374, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](375, " Consider using the Swagger plugin (see ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, "Plugin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](378, " section) which will automatically detect circular dependencies.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "h4", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](381, "Generics and interfaces");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](383, "Since TypeScript does not store metadata about generics or interfaces, when you use them in your DTOs, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](385, "SwaggerModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](386, " may not be able to properly generate model definitions at runtime. For instance, below code won't be correctly inspected by the Swagger module:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](389, "\ncreateBulk(@Body() usersDto: CreateUserDto[])");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](391, "In order to overcome this limitation, you can set the type explicitly:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](394, "\n@ApiBody({ type: [CreateUserDto] })\ncreateBulk(@Body() usersDto: CreateUserDto[])");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](395, "h4", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](397, "Raw definitions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](399, "In some specific scenarios (e.g. deeply nested arrays, matrices), you may want to describe your type by hand.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](401, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](402, "\n@ApiProperty({\n  type: 'array',\n  items: {\n    type: 'array',\n    items: {\n      type: 'number',\n    },\n  },\n})\ncoords: number[][];");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](404, "Likewise, in order to define your input/output content manually in controller classes, use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](406, "schema");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](407, " property:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](409, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](410, "\n@ApiBody({\n  schema: {\n    type: 'array',\n    items: {\n      type: 'array',\n      items: {\n        type: 'number',\n      },\n    },\n  },\n})\nasync create(@Body() coords: number[][]) {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](411, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](413, "Extra models");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](414, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](415, "In order to define additional models that should be inspected by Swagger module, use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](417, "@ApiExtraModels()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](418, " decorator:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](420, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](421, "\n@ApiExtraModels(ExtraModel)\nexport class CreateCatDto {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](422, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](423, "Then, you can get the reference (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](425, "$ref");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](426, ") to your model using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](427, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](428, "getSchemaPath(ExtraModel)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](429, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](430, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](431, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](432, "\n'application/vnd.api+json': {\n   schema: { $ref: getSchemaPath(ExtraModel) },\n},");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "h4", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](434, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](435, "oneOf, anyOf, allOf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](436, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](437, "In order to combine schemas, you can use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](438, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](439, "oneOf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](440, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](442, "anyOf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](443, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](445, "allOf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](446, " keywords (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](447, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](448, "read more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](449, ").");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](450, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](451, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](452, "\n@ApiProperty({\n  oneOf: [\n    { $ref: getSchemaPath(Cat) },\n    { $ref: getSchemaPath(Dog) },\n  ],\n})\npet: Cat | Dog;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](453, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](454, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](455, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](457, "getSchemaPath()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](458, " function is imported from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](459, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](460, "@nestjs/swagger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](461, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](462, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](463, "Both ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](464, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](465, "Cat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](466, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](467, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](468, "Dog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](469, " must be defined as extra models using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](470, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](471, "@ApiExtraModels()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](472, " decorator (at the class-level).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](473, "h4", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](474, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](475, "Multiple specifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](476, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](477, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](478, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](479, "SwaggerModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](480, " provides a way to support multiple specifications. In other words, you can serve different documentation, with different UIs, on different endpoints.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](481, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](482, "To support multiple specifications, your application must be written with a modular approach. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](484, "createDocument()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](485, " method takes in a 3rd argument, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](486, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](487, "extraOptions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](488, ", which is an object with a the property ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](489, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](490, "include");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](491, ". The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](492, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](493, "include");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](494, " property has a value which is an array of modules.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](495, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](496, "You can setup multiple specifications support as shown below:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](497, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](498, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](499, "\nimport { NestFactory } from '@nestjs/core';\nimport { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';\nimport { AppModule } from './app.module';\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n\n  /**\n   * createDocument(application, configurationOptions, extraOptions);\n   *\n   * createDocument method takes in an optional 3rd argument \"extraOptions\"\n   * which is an object with \"include\" property where you can pass an Array\n   * of Modules that you want to include in that Swagger Specification\n   * E.g: CatsModule and DogsModule will have two separate Swagger Specifications which\n   * will be exposed on two different SwaggerUI with two different endpoints.\n   */\n\n  const options = new DocumentBuilder()\n    .setTitle('Cats example')\n    .setDescription('The cats API description')\n    .setVersion('1.0')\n    .addTag('cats')\n    .build();\n\n  const catDocument = SwaggerModule.createDocument(app, options, {\n    include: [CatsModule],\n  });\n  SwaggerModule.setup('api/cats', app, catDocument);\n\n  const secondOptions = new DocumentBuilder()\n    .setTitle('Dogs example')\n    .setDescription('The dogs API description')\n    .setVersion('1.0')\n    .addTag('dogs')\n    .build();\n\n  const dogDocument = SwaggerModule.createDocument(app, secondOptions, {\n    include: [DogsModule],\n  });\n  SwaggerModule.setup('api/dogs', app, dogDocument);\n\n  await app.listen(3000);\n}\nbootstrap();");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](500, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](501, "Now you can start your server with the following command:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](502, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](503, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](504, "\n$ npm run start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](505, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](506, "Navigate to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](507, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](508, "http://localhost:3000/api/cats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](509, " to see the Swagger UI for cats:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](510, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](511, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](512, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](513, "In turn, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](514, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](515, "http://localhost:3000/api/dogs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](516, " will expose the Swagger UI for dogs:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](517, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](518, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](519, "h4", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](520, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](521, "Tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](522, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](523, "To attach a controller to a specific tag, use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](524, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](525, "@ApiTags(...tags)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](526, " decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](527, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](528, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](529, "\n@ApiTags('cats')\n@Controller('cats')\nexport class CatsController {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](530, "h4", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](531, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](532, "Headers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](533, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](534, "To define custom headers that are expected as part of the request, use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](535, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](536, "@ApiHeader()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](537, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](538, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](539, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](540, "\n@ApiHeader({\n  name: 'X-MyHeader',\n  description: 'Custom header',\n})\n@Controller('cats')\nexport class CatsController {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](541, "h4", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](542, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](543, "Responses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](544, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](545, "To define a custom HTTP response, we use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](546, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](547, "@ApiResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](548, " decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](549, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](550, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](551, "\n@Post()\n@ApiResponse({ status: 201, description: 'The record has been successfully created.'})\n@ApiResponse({ status: 403, description: 'Forbidden.'})\nasync create(@Body() createCatDto: CreateCatDto) {\n  this.catsService.create(createCatDto);\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](552, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](553, "Nest provides a set of short-hand ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](554, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](555, "API response");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](556, " decorators that inherit from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](557, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](558, "@ApiResponse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](559, " decorator:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](560, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](561, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](562, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](563, "@ApiOkResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](564, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](565, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](566, "@ApiCreatedResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](567, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](568, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](569, "@ApiBadRequestResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](570, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](571, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](572, "@ApiUnauthorizedResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](573, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](574, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](575, "@ApiNotFoundResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](576, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](577, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](578, "@ApiForbiddenResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](579, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](580, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](581, "@ApiMethodNotAllowedResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](582, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](583, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](584, "@ApiNotAcceptableResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](585, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](586, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](587, "@ApiRequestTimeoutResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](588, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](589, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](590, "@ApiConflictResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](591, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](592, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](593, "@ApiGoneResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](594, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](595, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](596, "@ApiPayloadTooLargeResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](597, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](598, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](599, "@ApiUnsupportedMediaTypeResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](600, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](601, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](602, "@ApiUnprocessableEntityResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](603, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](604, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](605, "@ApiInternalServerErrorResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](606, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](607, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](608, "@ApiNotImplementedResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](609, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](610, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](611, "@ApiBadGatewayResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](612, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](613, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](614, "@ApiServiceUnavailableResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](615, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](616, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](617, "@ApiGatewayTimeoutResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](618, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](619, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](620, "@ApiDefaultResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](621, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](622, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](623, "\n@Post()\n@ApiCreatedResponse({ description: 'The record has been successfully created.'})\n@ApiForbiddenResponse({ description: 'Forbidden.'})\nasync create(@Body() createCatDto: CreateCatDto) {\n  this.catsService.create(createCatDto);\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](624, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](625, "To specify a return model for a request, we must create a class and annotate all properties with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](626, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](627, "@ApiProperty()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](628, " decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](629, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](630, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](631, "\nexport class Cat {\n  @ApiProperty()\n  id: number;\n\n  @ApiProperty()\n  name: string;\n\n  @ApiProperty()\n  age: number;\n\n  @ApiProperty()\n  breed: string;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](632, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](633, "Then, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](634, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](635, "Cat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](636, " model must be used in combination with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](637, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](638, "type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](639, " property of the response decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](640, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](641, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](642, "\n@ApiTags('cats')\n@Controller('cats')\nexport class CatsController {\n  @Post()\n  @ApiCreatedResponse({\n    description: 'The record has been successfully created.',\n    type: Cat,\n  })\n  async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {\n    return this.catsService.create(createCatDto);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](643, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](644, "Let's open the browser and verify the generated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](645, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](646, "Cat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](647, " model:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](648, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](649, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](650, "h4", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](651, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](652, "Global prefix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](653, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](654, "To ignore a global prefix for routes set through ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](655, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](656, "setGlobalPrefix()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](657, ", use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](658, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](659, "ignoreGlobalPrefix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](660, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](661, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](662, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](663, "\nconst document = SwaggerModule.createDocument(app, options, {\n  ignoreGlobalPrefix: true,\n});");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](664, "h4", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](665, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](666, "Security");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](667, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](668, "To define which security mechanisms should be used for a specific operation, use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](669, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](670, "@ApiSecurity()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](671, " decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](672, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](673, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](674, "\n@ApiSecurity('basic')\n@Controller('cats')\nexport class CatsController {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](675, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](676, "Before you run your application, remember to add the security definition to your base document using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](677, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](678, "DocumentBuilder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](679, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](680, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](681, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](682, "\nconst options = new DocumentBuilder().addSecurity('basic', {\n  type: 'http',\n  scheme: 'basic',\n});");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](683, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](684, "Some of the most popular authentication techniques are predefined (e.g. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](685, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](686, "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](687, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](688, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](689, "bearer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](690, ") and therefore you don't have to define security mechanisms manually as shown above.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](691, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](692, "app-banner-courses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](693, "h4", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](694, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](695, "Basic authentication");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](696, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](697, "To enable basic authentication, use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](698, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](699, "@ApiBasicAuth()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](700, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](701, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](702, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](703, "\n@ApiBasicAuth()\n@Controller('cats')\nexport class CatsController {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](704, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](705, "Before you run your application, remember to add the security definition to your base document using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](706, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](707, "DocumentBuilder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](708, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](709, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](710, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](711, "\nconst options = new DocumentBuilder().addBasicAuth();");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](712, "h4", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](713, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](714, "Bearer authentication");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](715, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](716, "To enable bearer authentication, use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](717, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](718, "@ApiBearerAuth()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](719, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](720, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](721, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](722, "\n@ApiBearerAuth()\n@Controller('cats')\nexport class CatsController {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](723, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](724, "Before you run your application, remember to add the security definition to your base document using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](725, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](726, "DocumentBuilder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](727, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](728, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](729, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](730, "\nconst options = new DocumentBuilder().addBearerAuth();");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](731, "h4", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](732, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](733, "OAuth2 authentication");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](734, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](735, "To enable OAuth2, use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](736, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](737, "@ApiOAuth2()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](738, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](739, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](740, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](741, "\n@ApiOAuth2(['pets:write'])\n@Controller('cats')\nexport class CatsController {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](742, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](743, "Before you run your application, remember to add the security definition to your base document using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](744, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](745, "DocumentBuilder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](746, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](747, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](748, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](749, "\nconst options = new DocumentBuilder().addOAuth2();");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](750, "h4", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](751, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](752, "File upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](753, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](754, "You can enable file upload for a specific method with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](755, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](756, "@ApiBody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](757, " decorator together with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](758, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](759, "@ApiConsumes()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](760, ". Here's a full example using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](761, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](762, "File Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](763, " technique:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](764, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](765, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](766, "\n@UseInterceptors(FileInterceptor('file'))\n@ApiConsumes('multipart/form-data')\n@ApiBody({\n  description: 'List of cats',\n  type: FileUploadDto,\n})\nuploadFile(@UploadedFile() file) {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](767, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](768, "Where ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](769, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](770, "FileUploadDto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](771, " is defined as follows:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](772, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](773, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](774, "\nclass FileUploadDto {\n  @ApiProperty({ type: 'string', format: 'binary' })\n  file: any;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](775, "h4", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](776, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](777, "Extensions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](778, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](779, "To add an Extension to a request use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](780, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](781, "@ApiExtension()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](782, " decorator. The extension name must be prefixed with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](783, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](784, "x-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](785, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](786, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](787, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](788, "\n@ApiExtension('x-foo', { hello: 'world' })");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](789, "h4", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](790, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](791, "Decorators");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](792, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](793, "All of the available OpenAPI decorators have an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](794, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](795, "Api");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](796, " prefix to distinguish them from the core decorators. Below is a full list of the exported decorators along with a designation of the level at which the decorator may be applied.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](797, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](798, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](799, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](800, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](801, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](802, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](803, "@ApiOperation()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](804, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](805, "Method");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](806, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](807, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](808, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](809, "@ApiResponse()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](810, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](811, "Method / Controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](812, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](813, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](814, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](815, "@ApiProduces()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](816, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](817, "Method / Controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](818, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](819, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](820, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](821, "@ApiConsumes()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](822, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](823, "Method / Controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](824, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](825, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](826, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](827, "@ApiBearerAuth()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](828, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](829, "Method / Controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](830, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](831, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](832, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](833, "@ApiOAuth2()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](834, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](835, "Method / Controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](836, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](837, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](838, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](839, "@ApiBasicAuth()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](840, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](841, "Method / Controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](842, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](843, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](844, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](845, "@ApiSecurity()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](846, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](847, "Method / Controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](848, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](849, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](850, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](851, "@ApiExtraModels()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](852, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](853, "Method / Controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](854, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](855, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](856, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](857, "@ApiBody()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](858, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](859, "Method");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](860, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](861, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](862, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](863, "@ApiParam()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](864, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](865, "Method");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](866, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](867, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](868, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](869, "@ApiQuery()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](870, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](871, "Method");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](872, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](873, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](874, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](875, "@ApiHeader()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](876, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](877, "Method / Controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](878, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](879, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](880, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](881, "@ApiExcludeEndpoint()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](882, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](883, "Method");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](884, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](885, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](886, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](887, "@ApiTags()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](888, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](889, "Method / Controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](890, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](891, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](892, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](893, "@ApiProperty()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](894, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](895, "Model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](896, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](897, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](898, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](899, "@ApiPropertyOptional()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](900, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](901, "Model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](902, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](903, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](904, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](905, "@ApiHideProperty()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](906, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](907, "Model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](908, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](909, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](910, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](911, "@ApiExtension()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](912, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](913, "Method");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](914, "h4", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](915, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](916, "Plugin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](917, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](918, "TypeScript's metadata reflection system has several limitations which make it impossible to, for instance, determine what properties a class consists of or recognize whether a given property is optional or required. However, some of these constraints can be addressed at compilation time. Nest provides a plugin that enhances the TypeScript compilation process to reduce the amount of boilerplate code required.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](919, "blockquote", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](920, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](921, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](922, " This plugin is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](923, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](924, "opt-in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](925, ". If you prefer, you can declare all decorators manually, or only specific decorators where you need them.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](926, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](927, "The Swagger plugin will automatically:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](928, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](929, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](930, "annotate all DTO properties with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](931, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](932, "@ApiProperty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](933, " unless ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](934, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](935, "@ApiHideProperty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](936, " is used");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](937, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](938, "set the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](939, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](940, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](941, " property depending on the question mark (e.g. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](942, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](943, "name?: string");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](944, " will set ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](945, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](946, "required: false");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](947, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](948, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](949, "set the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](950, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](951, "type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](952, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](953, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](954, "enum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](955, " property depending on the type (supports arrays as well)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](956, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](957, "set the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](958, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](959, "default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](960, " property based on the assigned default value");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](961, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](962, "set several validation rules based on ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](963, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](964, "class-validator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](965, " decorators (if ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](966, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](967, "classValidatorShim");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](968, " set to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](969, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](970, "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](971, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](972, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](973, "add a response decorator to every endpoint with a proper status and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](974, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](975, "type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](976, " (response model)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](977, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](978, "Previously, if you wanted to provide an interactive experience with the Swagger UI,\nyou had to duplicate a lot of code to let the package knows how your models/components should be declared in the specification. For example, you could define a simple ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](979, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](980, "CreateUserDto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](981, " class as follows:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](982, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](983, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](984, "\nexport class CreateUserDto {\n  @ApiProperty()\n  email: string;\n\n  @ApiProperty()\n  password: string;\n\n  @ApiProperty({ enum: RoleEnum, default: [], isArray: true })\n  roles: RoleEnum[] = [];\n\n  @ApiProperty({ required: false, default: true })\n  isEnabled?: boolean = true;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](985, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](986, "While it's not a big deal with medium-sized projects, it becomes pretty verbose & clunky once you have a large set of classes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](987, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](988, "Now, with the Swagger plugin enabled, the above class definition can be declared simply:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](989, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](990, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](991, "\nexport class CreateUserDto {\n  email: string;\n  password: string;\n  roles: RoleEnum[] = [];\n  isEnabled?: boolean = true;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](992, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](993, "The plugin adds appropriate decorators on the fly based on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](994, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](995, "Abstract Syntax Tree");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](996, ". Hence, you no longer have to struggle with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](997, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](998, "@ApiProperty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](999, " decorators scattered throughout the entire project.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1000, "blockquote", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1001, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1002, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1003, " The plugin will automatically generate any missing swagger properties, but if you need to override them, you simply set them explicitly via ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1004, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1005, "@ApiProperty()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1006, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1007, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1008, "In order to enable the plugin, simply open ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1009, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1010, "nest-cli.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1011, " (if you use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1012, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1013, "Nest CLI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1014, ") and add the following ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1015, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1016, "plugins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1017, " configuration:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1018, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1019, "code", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1020, "\n{\n  \"collection\": \"@nestjs/schematics\",\n  \"sourceRoot\": \"src\",\n  \"compilerOptions\": {\n    \"plugins\": [\"@nestjs/swagger/plugin\"]\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1021, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1022, "You can use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1023, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1024, "options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1025, " property to customize the behavior of the plugin.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1026, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1027, "code", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1028, "\n\"plugins\": [\n  {\n    \"name\": \"@nestjs/swagger/plugin\",\n    \"options\": {\n      \"classValidatorShim\": false\n    }\n  }\n]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1029, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1030, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1031, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1032, "options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1033, " property has to fulfill the following interface:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1034, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1035, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1036, "\nexport interface PluginOptions {\n  dtoFileNameSuffix?: string[];\n  controllerFileNameSuffix?: string[];\n  classValidatorShim?: boolean;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1037, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1038, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1039, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1040, "Option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1041, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1042, "Default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1043, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1044, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1045, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1046, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1047, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1048, "dtoFileNameSuffix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1049, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1050, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1051, "['.dto.ts', '.entity.ts']");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1052, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1053, "DTO (Data Transfer Object) files suffix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1054, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1055, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1056, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1057, "controllerFileNameSuffix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1058, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1059, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1060, ".controller.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1061, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1062, "Controller files suffix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1063, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1064, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1065, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1066, "classValidatorShim");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1067, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1068, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1069, "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1070, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1071, "If set to true, the module will reuse ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1072, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1073, "class-validator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1074, " validation decorators (e.g. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1075, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1076, "@Max(10)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1077, " will add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1078, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1079, "max: 10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1080, " to schema definition) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1081, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1082, "If you don't use the CLI but instead have a custom ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1083, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1084, "webpack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1085, " configuration, you can use this plugin in combination with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1086, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1087, "ts-loader");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1088, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1089, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1090, "code", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1091, "\ngetCustomTransformers: (program: any) => ({\n  before: [require('@nestjs/swagger/plugin').before({}, program)]\n}),");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1092, "h4", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1093, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1094, "Migration to 4.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1095, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1096, "If you're currently using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1097, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1098, "@nestjs/swagger@3.*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1099, ", note the following breaking/API changes in version 4.0.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1100, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1101, "The following decorators have been changed/renamed:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1102, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1103, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1104, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1105, "@ApiModelProperty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1106, " is now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1107, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1108, "@ApiProperty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1109, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1110, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1111, "@ApiModelPropertyOptional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1112, " is now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1113, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1114, "@ApiPropertyOptional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1115, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1116, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1117, "@ApiResponseModelProperty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1118, " is now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1119, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1120, "@ApiResponseProperty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1121, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1122, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1123, "@ApiImplicitQuery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1124, " is now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1125, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1126, "@ApiQuery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1127, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1128, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1129, "@ApiImplicitParam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1130, " is now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1131, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1132, "@ApiParam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1133, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1134, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1135, "@ApiImplicitBody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1136, " is now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1137, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1138, "@ApiBody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1139, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1140, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1141, "@ApiImplicitHeader");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1142, " is now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1143, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1144, "@ApiHeader");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1145, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1146, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1148, " is now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1149, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1151, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1152, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1153, "@ApiUseTags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1154, " is now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1155, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1156, "@ApiTags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1157, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1158, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1159, "DocumentBuilder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1160, " breaking changes (updated method signatures):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1161, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1162, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1163, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1164, "addTag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1165, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1166, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1167, "addBearerAuth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1168, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1169, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1170, "addOAuth2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1171, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1172, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1173, "setContactEmail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1174, " is now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1175, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1176, "setContact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1177, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1178, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1179, "setHost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1180, " has been removed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1181, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1182, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1183, "setSchemes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1184, " has been removed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1185, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1186, "The following methods have been added:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1187, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1188, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1189, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1190, "addServer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1191, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1192, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1193, "addApiKey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1194, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1195, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1196, "addBasicAuth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1197, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1198, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1199, "addSecurity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1200, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1201, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1202, "addSecurityRequirements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1203, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1204, "app-banner-shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1205, "h4", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1206, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1207, "Example");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1208, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1209, "A working example is available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1210, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1211, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1212, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](188);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"]("@ApiProperty({ required: false })");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](959);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("@ApiOperation(", "{", " title: 'test' ", "}", ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("@ApiOperation(", "{", " summary: 'test' ", "}", ")");
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_banner_enterprise_banner_enterprise_component__WEBPACK_IMPORTED_MODULE_3__["BannerEnterpriseComponent"], _shared_components_banner_courses_banner_courses_component__WEBPACK_IMPORTED_MODULE_4__["BannerCoursesComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _shared_components_banner_shop_banner_shop_component__WEBPACK_IMPORTED_MODULE_6__["BannerShopComponent"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??SwaggerComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](SwaggerComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SwaggerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-swagger',
          templateUrl: './swagger.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/recipes/terminus/terminus.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/homepage/pages/recipes/terminus/terminus.component.ts ***!
    \***********************************************************************/

  /*! exports provided: TerminusComponent */

  /***/
  function srcAppHomepagePagesRecipesTerminusTerminusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerminusComponent", function () {
      return TerminusComponent;
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


    var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/pipes/extension.pipe */
    "./src/app/shared/pipes/extension.pipe.ts");

    var TerminusComponent =
    /*#__PURE__*/
    function (_page_page_component_11) {
      _inherits(TerminusComponent, _page_page_component_11);

      function TerminusComponent() {
        _classCallCheck(this, TerminusComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(TerminusComponent).apply(this, arguments));
      }

      return TerminusComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    TerminusComponent.??fac = function TerminusComponent_Factory(t) {
      return ??TerminusComponent_BaseFactory(t || TerminusComponent);
    };

    TerminusComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: TerminusComponent,
      selectors: [["app-terminus"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 242,
      vars: 32,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/recipes/terminus.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "health-checks-terminus"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/godaddy/terminus"], ["rel", "nofollow", "target", "_blank", "href", "https://kubernetes.io/"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/terminus"], ["appAnchor", "", "id", "getting-started"], [1, "language-bash"], ["appAnchor", "", "id", "setting-up-a-health-check"], ["appAnchor", "", "id", "dns-health-check"], [1, "filename"], ["app3be3eb7af278581c52f0d0e60f0ce746b67eca1c", ""], [1, "language-typescript"], ["app1b754fe7e4d3f08376fef96c843f741682f7ade0", ""], [1, "info"], ["appAnchor", "", "id", "custom-health-indicator"], ["appc6e5d23e6cc193ab0cc9ae28719ace5f4868061b", ""], ["app3678e842ad498d2869ce6ba92dba38d58be2fffd", ""], ["appc40f025258fbf277ef87dfcd113ce927c9f681ec", ""], [1, "language-json"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/terminus/tree/master/sample"], ["appAnchor", "", "id", "custom-logger"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/techniques/logger"]],
      template: function TerminusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Health checks (Terminus)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "terminus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " offers hooks to react on graceful shutdowns and supports you creating proper ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Kubernetes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " readiness / liveness checks for any HTTP application. The module ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "@nestjs/terminus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " integrates the terminus library with the Nest ecosystem.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Getting started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "To get started with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "@nestjs/terminus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " we need to install the required dependencies.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "\n$ npm install --save @nestjs/terminus @godaddy/terminus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Setting up a health check");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "A health check represents a summary of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "health indicators");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, ". A health indicator executes a check of a service, whether it is in a healthy state or not. A health check is positive, if all the assigned health indicators are up and running. Because a lot of applications will need similar health indicators, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "@nestjs/terminus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " provides a set of predefined health indicators, such as:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "DNSHealthIndicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "TypeOrmHealthIndicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "MongooseHealthIndicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "MicroserviceHealthIndicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "MemoryHealthIndicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "DiskHealthIndicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "DNS Health Check");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "The first step to get started with our first health check, is to setup a service which will associate health indicators to an endpoint.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](66, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "app-tabs", null, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "\nimport {\n  TerminusEndpoint,\n  TerminusOptionsFactory,\n  DNSHealthIndicator,\n  TerminusModuleOptions\n} from '@nestjs/terminus';\nimport { Injectable } from '@nestjs/common';\n\n@Injectable()\nexport class TerminusOptionsService implements TerminusOptionsFactory {\n  constructor(\n    private readonly dns: DNSHealthIndicator,\n  ) {}\n\n  createTerminusOptions(): TerminusModuleOptions {\n    const healthEndpoint: TerminusEndpoint = {\n      url: '/health',\n      healthIndicators: [\n        async () => this.dns.pingCheck('google', 'https://google.com'),\n      ],\n    };\n    return {\n      endpoints: [healthEndpoint],\n    };\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "\nimport { Injectable, Dependencies } from '@nestjs/common';\nimport { DNSHealthIndicator } from '@nestjs/terminus';\n\n@Injectable()\n@Dependencies(DNSHealthIndicator)\nexport class TerminusOptionsService {\n  constructor(dns) {\n    this.dns = dns;\n  }\n\n  createTerminusOptions() {\n    const healthEndpoint = {\n      url: '/health',\n      healthIndicators: [\n        async () => this.dns.pingCheck('google', 'https://google.com'),\n      ],\n    };\n    return {\n      endpoints: [healthEndpoint],\n    };\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Once we have set up our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "TerminusOptionsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, ", we can import the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "TerminusModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, " into the root ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "ApplicationModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, ". The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "TerminusOptionsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, " will provide the settings, which in turn will be used by the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "TerminusModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](94, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "app-tabs", null, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "\nimport { Module } from '@nestjs/common';\nimport { TerminusModule } from '@nestjs/terminus';\nimport { TerminusOptionsService } from './terminus-options.service';\n\n@Module({\n  imports: [\n    TerminusModule.forRootAsync({\n      useClass: TerminusOptionsService,\n    }),\n  ],\n})\nexport class ApplicationModule { }");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "blockquote", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, " If done correctly, Nest will expose the defined health check(s), which are reachable through a GET request to the defined route. For example ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "curl -X GET 'http://localhost:3000/health'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Custom health indicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "In some cases, the predefined health indicators provided by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "@nestjs/terminus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, " do not cover all of your health check requirements. In this case you can set up a custom health indicator according to your needs.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Let's get started by creating a service which will represent our custom health indicator. To get a basic understanding how a health indicator is structured, we will create an example ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "DogHealthIndicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, ". This health indicator should have the state \"up\", if every ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Dog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, " object has the type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "goodboy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, ", otherwise it will throw an error, which then the health indicator will be seen as \"down\".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](127, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](128, "app-tabs", null, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "\nimport { Injectable } from '@nestjs/common';\nimport { HealthCheckError } from '@godaddy/terminus';\nimport { HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';\n\nexport interface Dog {\n  name: string;\n  type: string;\n}\n\n@Injectable()\nexport class DogHealthIndicator extends HealthIndicator {\n  private readonly dogs: Dog[] = [\n    { name: 'Fido', type: 'goodboy' },\n    { name: 'Rex', type: 'badboy' },\n  ];\n\n  async isHealthy(key: string): Promise<HealthIndicatorResult> {\n    const badboys = this.dogs.filter(dog => dog.type === 'badboy');\n    const isHealthy = badboys.length === 0;\n    const result = this.getStatus(key, isHealthy, { badboys: badboys.length });\n\n    if (isHealthy) {\n      return result;\n    }\n    throw new HealthCheckError('Dogcheck failed', result);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "\nimport { Injectable } from '@nestjs/common';\nimport { HealthCheckError } from '@godaddy/terminus';\n\n@Injectable()\nexport class DogHealthIndicator extends HealthIndicator {\n  dogs = [\n    { name: 'Fido', type: 'goodboy' },\n    { name: 'Rex', type: 'badboy' },\n  ];\n\n  async isHealthy(key) {\n    const badboys = this.dogs.filter(dog => dog.type === 'badboy');\n    const isHealthy = badboys.length === 0;\n    const result = this.getStatus(key, isHealthy, { badboys: badboys.length });\n\n    if (isHealthy) {\n      return result;\n    }\n    throw new HealthCheckError('Dogcheck failed', result);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "The next thing we need to do is registering the health indicator as a provider.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](140, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](141, "app-tabs", null, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "\nimport { Module } from '@nestjs/common';\nimport { TerminusModule } from '@nestjs/terminus';\nimport { TerminusOptionsService } from './terminus-options.service';\nimport { DogHealthIndicator } from './dog.health';\n\n@Module({\n  imports: [\n    TerminusModule.forRootAsync({\n      imports: [ApplicationModule],\n      useClass: TerminusOptionsService,\n    }),\n  ],\n  providers: [DogHealthIndicator],\n  exports: [DogHealthIndicator],\n})\nexport class ApplicationModule { }");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "blockquote", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, " In a real world application the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "DogHealthIndicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, " should be provided in a separate module, for example ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "DogsModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, ", which then will be imported by the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "ApplicationModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, ". But keep in mind to add the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "DogHealthIndicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, " to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "exports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, " array of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "DogModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, " and add the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "DogModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, " in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "imports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, " array of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "TerminusModule.forRootAsync()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, " parameter object.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "The last required thing to do is to add the now available health indicator in the required health check endpoint. For that we go back to our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "TerminusOptionsService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, " and implement it to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "/health");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, " endpoint.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](187, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](188, "app-tabs", null, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "\nimport {\n  TerminusEndpoint,\n  TerminusOptionsFactory,\n  DNSHealthIndicator,\n  TerminusModuleOptions\n} from '@nestjs/terminus';\nimport { Injectable } from '@nestjs/common';\nimport { DogHealthIndicator } from './dog.health';\n\n@Injectable()\nexport class TerminusOptionsService implements TerminusOptionsFactory {\n  constructor(\n    private readonly dogHealthIndicator: DogHealthIndicator\n  ) {}\n\n  createTerminusOptions(): TerminusModuleOptions {\n    const healthEndpoint: TerminusEndpoint = {\n      url: '/health',\n      healthIndicators: [\n        async () => this.dogHealthIndicator.isHealthy('dog'),\n      ],\n    };\n    return {\n      endpoints: [healthEndpoint],\n    };\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "\nimport { DogHealthIndicator } from './dog.health';\nimport { Injectable, Dependencies } from '@nestjs/common';\n\n@Injectable()\n@Dependencies(DogHealthIndicator)\nexport class TerminusOptionsService {\n  constructor(dogHealthIndicator) {\n    this.dogHealthIndicator = dogHealthIndicator;\n  }\n\n  createTerminusOptions() {\n    const healthEndpoint = {\n      url: '/health',\n      healthIndicators: [\n        async () => this.dogHealthIndicator.isHealthy('dog'),\n      ],\n    };\n    return {\n      endpoints: [healthEndpoint],\n    };\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "If everything has been done correctly, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "/health");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, " endpoint should respond with a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, "503");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, " response code and the following data.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "code", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "\n{\n  \"status\": \"error\",\n  \"error\": {\n    \"dog\": {\n      \"status\": \"down\",\n      \"badboys\": 1\n    }\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "You can view working examples in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "@nestjs/terminus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "repository");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "h4", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "Custom Logger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "Terminus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, " module automatically logs every error during a health check request. By default, it will use the globally defined Nest logger.\nYou can read more about the global logger in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "Logger chapter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, ".\nIn some cases, you want to handle the logs of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, "Terminus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, " explicitly. In this case, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "TerminusModule.forRoot[Async]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, " function offers an option\nfor a custom logger.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "\n\nTerminusModule.forRootAsync({\n  logger: (message: string, error: Error) => console.error(message, error),\n  endpoints: [\n    ...\n  ]\n})\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "The logger can also be disabled by setting the logger option to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "null");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "\n\nTerminusModule.forRootAsync({\n  logger: null,\n  endpoints: [\n    ...\n  ]\n})\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r361 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](68);

          var _r362 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](96);

          var _r363 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](129);

          var _r364 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](142);

          var _r365 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](189);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](66, 17, "terminus-options.service", _r361.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r361.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r361.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](94, 20, "app.module", _r362.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](127, 23, "dog.health", _r363.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r363.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r363.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](140, 26, "app.module", _r364.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](187, 29, "terminus-options.service", _r365.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r365.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r365.isJsActive);
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"]],
      pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__["ExtensionPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??TerminusComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](TerminusComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TerminusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-terminus',
          templateUrl: './terminus.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=homepage-pages-recipes-recipes-module-es5.js.map