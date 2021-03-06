function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homepage-pages-websockets-websockets-module"], {
  /***/
  "./src/app/homepage/pages/websockets/adapter/adapter.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/homepage/pages/websockets/adapter/adapter.component.ts ***!
    \************************************************************************/

  /*! exports provided: AdapterComponent */

  /***/
  function srcAppHomepagePagesWebsocketsAdapterAdapterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdapterComponent", function () {
      return AdapterComponent;
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

    var AdapterComponent =
    /*#__PURE__*/
    function (_page_page_component_) {
      _inherits(AdapterComponent, _page_page_component_);

      function AdapterComponent() {
        _classCallCheck(this, AdapterComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(AdapterComponent).apply(this, arguments));
      }

      return AdapterComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    AdapterComponent.??fac = function AdapterComponent_Factory(t) {
      return ??AdapterComponent_BaseFactory(t || AdapterComponent);
    };

    AdapterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AdapterComponent,
      selectors: [["app-adapter"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 163,
      vars: 8,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/websockets/adapter.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "adapters"], ["appAnchor", "", "id", "extend-socketio"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/socketio/socket.io"], [1, "language-bash"], [1, "language-typescript"], ["appAnchor", "", "id", "ws-library"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/websockets/ws"], [1, "info"], ["appAnchor", "", "id", "advanced-custom-adapter"], [1, "filename"], ["app4981da21b1f520b10f1abd7b0691882c87175194", ""], ["app8a14c0909208113b7c88c9e204dfe479871bd271", ""], ["appAnchor", "", "id", "example"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/nest/tree/master/sample/16-gateways-ws"]],
      template: function AdapterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Adapters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "The WebSockets module is platform-agnostic, hence, you can bring your own library (or even a native implementation) by making use of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "WebSocketAdapter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " interface. This interface forces to implement few methods described in the following table:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Creates a socket instance based on passed arguments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "bindClientConnect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Binds the client connection event");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "bindClientDisconnect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Binds the client disconnection event (optional*)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "bindMessageHandlers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Binds the incoming message to the corresponding message handler");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Terminates a server instance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Extend socket.io");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "socket.io");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " package is wrapped in an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "IoAdapter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " class. What if you would like to enhance the basic functionality of the adapter? For instance, your technical requirements require a capability to broadcast events across multiple load-balanced instances of your web service. For this, you can extend ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "IoAdapter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " and override a single method which responsibility is to instantiate new socket.io servers. But first of all, let's install the required package.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "\n$ npm i --save socket.io-redis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Once the package is installed, we can create a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "RedisIoAdapter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " class.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "\nimport { IoAdapter } from '@nestjs/platform-socket.io';\nimport * as redisIoAdapter from 'socket.io-redis';\n\nconst redisAdapter = redisIoAdapter({ host: 'localhost', port: 6379 });\n\nexport class RedisIoAdapter extends IoAdapter {\n  createIOServer(port: number, options?: any): any {\n    const server = super.createIOServer(port, options);\n    server.adapter(redisAdapter);\n    return server;\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Afterward, simply switch to your newly created Redis adapter.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "\nconst app = await NestFactory.create(ApplicationModule);\napp.useWebSocketAdapter(new RedisIoAdapter(app));");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Ws library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Another available adapter is a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "WsAdapter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " which in turn acts like a proxy between the framework and integrate blazing fast and thoroughly tested ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "ws");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, " library. This adapter is fully compatible with native browser WebSockets and is far faster than socket.io package. Unluckily, it has significantly fewer functionalities available out-of-the-box. In some cases, you may just don't necessarily need them though.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "In order to use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "ws");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, ", we firstly have to install the required package:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "\n$ npm i --save @nestjs/platform-ws");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Once the package is installed, we can switch an adapter:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "\nconst app = await NestFactory.create(ApplicationModule);\napp.useWebSocketAdapter(new WsAdapter(app));");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "blockquote", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, " The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "WsAdapter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, " is imported from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "@nestjs/platform-ws");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, ".\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Advanced (custom adapter)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "For demonstration purposes, we are going to integrate the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "ws");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, " library manually. As mentioned, the adapter for this library is already created and is exposed from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "@nestjs/platform-ws");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, " package as a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "WsAdapter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, " class. Here is how the simplified implementation could potentially look like:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](123, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](124, "app-tabs", null, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "\nimport * as WebSocket from 'ws';\nimport { WebSocketAdapter, INestApplicationContext } from '@nestjs/common';\nimport { MessageMappingProperties } from '@nestjs/websockets';\nimport { Observable, fromEvent, EMPTY } from 'rxjs';\nimport { mergeMap, filter } from 'rxjs/operators';\n\nexport class WsAdapter implements WebSocketAdapter {\n  constructor(private readonly app: INestApplicationContext) {}\n\n  create(port: number, options: any = {}): any {\n    return new ws.Server({ port, ...options });\n  }\n\n  bindClientConnect(server, callback: Function) {\n    server.on('connection', callback);\n  }\n\n  bindMessageHandlers(\n    client: WebSocket,\n    handlers: MessageMappingProperties[],\n    process: (data: any) => Observable<any>,\n  ) {\n    fromEvent(client, 'message')\n      .pipe(\n        mergeMap(data => this.bindMessageHandler(data, handlers, process)),\n        filter(result => result),\n      )\n      .subscribe(response => client.send(JSON.stringify(response)));\n  }\n\n  bindMessageHandler(\n    buffer,\n    handlers: MessageMappingProperties[],\n    process: (data: any) => Observable<any>,\n  ): Observable<any> {\n    const message = JSON.parse(buffer.data);\n    const messageHandler = handlers.find(\n      handler => handler.message === message.event,\n    );\n    if (!messageHandler) {\n      return EMPTY;\n    }\n    return process(messageHandler.callback(message.data));\n  }\n\n  close(server) {\n    server.close();\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "blockquote", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, " When you want to take advantage of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "ws");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, " library, use built-in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "WsAdapter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, " instead of creating your own one.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Then, we can set up a custom adapter using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "useWebSocketAdapter()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, " method:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](146, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "app-tabs", null, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "\nconst app = await NestFactory.create(ApplicationModule);\napp.useWebSocketAdapter(new WsAdapter(app));");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "h4", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "Example");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "A working example that uses ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "WsAdapter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, " is available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](125);

          var _r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](123, 2, "ws-adapter", _r239.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](146, 5, "main", _r240.isJsActive), "\n");
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"]],
      pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_4__["ExtensionPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??AdapterComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](AdapterComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AdapterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-adapter',
          templateUrl: './adapter.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/websockets/exception-filters/exception-filters.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/homepage/pages/websockets/exception-filters/exception-filters.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: WsExceptionFiltersComponent */

  /***/
  function srcAppHomepagePagesWebsocketsExceptionFiltersExceptionFiltersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WsExceptionFiltersComponent", function () {
      return WsExceptionFiltersComponent;
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

    var WsExceptionFiltersComponent =
    /*#__PURE__*/
    function (_page_page_component_2) {
      _inherits(WsExceptionFiltersComponent, _page_page_component_2);

      function WsExceptionFiltersComponent() {
        _classCallCheck(this, WsExceptionFiltersComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(WsExceptionFiltersComponent).apply(this, arguments));
      }

      return WsExceptionFiltersComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    WsExceptionFiltersComponent.??fac = function WsExceptionFiltersComponent_Factory(t) {
      return ??WsExceptionFiltersComponent_BaseFactory(t || WsExceptionFiltersComponent);
    };

    WsExceptionFiltersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: WsExceptionFiltersComponent,
      selectors: [["app-exception-filters"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 80,
      vars: 4,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/websockets/exception-filters.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "exception-filters"], ["routerLink", "/exception-filters"], [1, "language-typescript"], [1, "info"], ["appAnchor", "", "id", "filters"], ["appAnchor", "", "id", "inheritance"], [1, "filename"], ["appd3c4a5cf593d2076b1004339492886b868137383", ""]],
      template: function WsExceptionFiltersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Exception filters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "The only difference between the HTTP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "exception filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " layer and the corresponding web sockets layer is that instead of throwing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "HttpException");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, ", you should instead use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "WsException");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "code", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\nthrow new WsException('Invalid credentials.');");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "blockquote", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "WsException");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " class is imported from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "@nestjs/websockets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " package.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "With the sample above, Nest will handle the thrown exception and emit the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "exception");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " message with the following structure:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "code", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "\n{\n  status: 'error',\n  message: 'Invalid credentials.'\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Filters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Web sockets exception filters behave equivalently to HTTP exception filters. The following example uses a manually instantiated method-scoped filter. Just as with HTTP based applications, you can also use gateway-scoped filters (i.e., prefix the gateway class with a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "@UseFilters()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " decorator).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "code", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "\n@UseFilters(new WsExceptionFilter())\n@SubscribeMessage('events')\nonEvent(client, data: any): WsResponse<any> {\n  const event = 'events';\n  return { event, data };\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Inheritance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Typically, you'll create fully customized exception filters crafted to fulfill your application requirements. However, there might be use-cases when you would like to simply extend the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "core exception filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, ", and override the behavior based on certain factors.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "In order to delegate exception processing to the base filter, you need to extend ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "BaseWsExceptionFilter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " and call the inherited ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "catch()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " method.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "app-tabs", null, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "code", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "\nimport { Catch, ArgumentsHost } from '@nestjs/common';\nimport { BaseWsExceptionFilter } from '@nestjs/websockets';\n\n@Catch()\nexport class AllExceptionsFilter extends BaseWsExceptionFilter {\n  catch(exception: unknown, host: ArgumentsHost) {\n    super.catch(exception, host);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "code", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "\nimport { Catch } from '@nestjs/common';\nimport { BaseWsExceptionFilter } from '@nestjs/websockets';\n\n@Catch()\nexport class AllExceptionsFilter extends BaseWsExceptionFilter {\n  catch(exception, host) {\n    super.catch(exception, host);\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "The above implementation is just a shell demonstrating the approach. Your implementation of the extended exception filter would include your tailored ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "business logic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, " (e.g., handling various conditions).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r242.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r242.isJsActive);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??WsExceptionFiltersComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](WsExceptionFiltersComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WsExceptionFiltersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-exception-filters',
          templateUrl: './exception-filters.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/websockets/gateways/gateways.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/homepage/pages/websockets/gateways/gateways.component.ts ***!
    \**************************************************************************/

  /*! exports provided: GatewaysComponent */

  /***/
  function srcAppHomepagePagesWebsocketsGatewaysGatewaysComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GatewaysComponent", function () {
      return GatewaysComponent;
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


    var _shared_components_banner_enterprise_banner_enterprise_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/components/banner-enterprise/banner-enterprise.component */
    "./src/app/shared/components/banner-enterprise/banner-enterprise.component.ts");
    /* harmony import */


    var _shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/pipes/extension.pipe */
    "./src/app/shared/pipes/extension.pipe.ts");

    var GatewaysComponent =
    /*#__PURE__*/
    function (_page_page_component_3) {
      _inherits(GatewaysComponent, _page_page_component_3);

      function GatewaysComponent() {
        _classCallCheck(this, GatewaysComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(GatewaysComponent).apply(this, arguments));
      }

      return GatewaysComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    GatewaysComponent.??fac = function GatewaysComponent_Factory(t) {
      return ??GatewaysComponent_BaseFactory(t || GatewaysComponent);
    };

    GatewaysComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: GatewaysComponent,
      selectors: [["app-gateways"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 334,
      vars: 44,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/websockets/gateways.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "gateways"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/socketio/socket.io"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/websockets/ws"], ["routerLink", "/websockets/adapter"], ["src", "/assets/Gateways_1.png"], [1, "info"], ["routerLink", "/providers"], ["appAnchor", "", "id", "installation"], [1, "filename"], ["app2bb75d6d50760ea627fc72db8496834a3bdb68bf", ""], [1, "language-typescript"], ["appAnchor", "", "id", "overview"], ["rel", "nofollow", "target", "_blank", "href", "https://socket.io/docs/rooms-and-namespaces/"], [1, ""], ["rel", "nofollow", "target", "_blank", "href", "https://socket.io/docs/server-api/"], ["app7e0cba6f095d587e3f47e5cf38dca172c948f4f9", ""], ["app7a3b135f8342be2f7cb80a3f09700ab020fe834a", ""], ["rel", "nofollow", "target", "_blank", "href", "https://socket.io/docs/server-api/#socket"], ["appf21e93b9c4c106a1f6dcc84d834c61fad8328dc3", ""], ["appAnchor", "", "id", "multiple-responses"], ["appb6a2bf010df9bccf399a114e6707def1417f263f", ""], ["appAnchor", "", "id", "asynchronous-responses"], ["app0dea23640a96d3c42e36dd72cbef37ddef5961f9", ""], ["appAnchor", "", "id", "lifecycle-hooks"], ["appAnchor", "", "id", "server"], [1, "warning"], ["appAnchor", "", "id", "example"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/nest/tree/master/sample/02-gateways"]],
      template: function GatewaysComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Gateways");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Most of the concepts discussed elsewhere in this documentation, such as dependency injection, decorators, exception filters, pipes, guards and interceptors, apply equally to gateways. Wherever possible, Nest abstracts implementation details so that the same components can run across HTTP-based platforms, WebSockets, and Microservices. This section covers the aspects of Nest that are specific to WebSockets.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "In Nest, a gateway is simply a class annotated with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "@WebSocketGateway()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " decorator. Technically, gateways are platform-agnostic which makes them compatible with any WebSockets library once an adapter is created. There are two WS platforms supported out-of-the-box: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "socket.io");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "ws");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, ". You can choose the one that best suits your needs. Also, you can build your own adapter by following this ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "guide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "blockquote", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Gateways can be treated as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "; this means they can inject dependencies through the class constructor. Also, gateways can be injected by other classes (providers and controllers) as well.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Installation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "To start building WebSockets-based applications, first install the required package:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "app-tabs", null, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "\n$ npm i --save @nestjs/websockets @nestjs/platform-socket.io\n$ npm i --save-dev @types/socket.io");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "\n$ npm i --save @nestjs/websockets @nestjs/platform-socket.io");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "In general, each gateway is listening on the same port as the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "HTTP server");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, ", unless your app is not a web application, or you have changed the port manually. This default behavior can be modified by passing an argument to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "@WebSocketGateway(80)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " decorator where ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "80");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " is a chosen port number. You can also set a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "namespace");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " used by the gateway using the following construction:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "\n@WebSocketGateway(80, { namespace: 'events' })");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "blockquote", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " Gateways aren't instantiated until they are referenced in the providers array of an existing module.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "You can pass any supported ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " to the socket constructor with the second argument to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "@WebSocketGateway()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, " decorator, as shown below:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "\n@WebSocketGateway(81, { transports: ['websocket'] })");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "The gateway is now listening, but we have not yet subscribed to any incoming messages. Let's create a handler that will subscribe to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, " messages and respond to the user with the exact same data.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](88, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "app-tabs", null, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "\n@SubscribeMessage('events')\nhandleEvent(@MessageBody() data: string): string {\n  return data;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "\n@Bind(MessageBody())\n@SubscribeMessage('events')\nhandleEvent(data) {\n  return data;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "blockquote", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "@SubscribeMessage()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "@MessageBody()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, " decorators are imported from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "@nestjs/websockets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, " package.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "If you would prefer not to use decorators, the following code is functionally equivalent:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](113, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "app-tabs", null, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "\n@SubscribeMessage('events')\nhandleEvent(client: Socket, data: string): string {\n  return data;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "\n@SubscribeMessage('events')\nhandleEvent(client, data) {\n  return data;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "In the example above, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "handleEvent()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, " function takes two arguments. The first one is a platform-specific ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "socket instance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, ", while the second one is the data received from the client. This approach is not recommended though, because it requires mocking the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "socket");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, " instance in each unit test.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Once the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, " message is received, the handler sends an acknowledgment with the same data that was sent over the network. In addition, it's possible to emit messages using a library-specific approach, for example, by making use of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "client.emit()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, " method. In order to access a connected socket instance, use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "@ConnectedSocket()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, " decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](146, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "app-tabs", null, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "\n@SubscribeMessage('events')\nhandleEvent(\n  @MessageBody() data: string,\n  @ConnectedSocket() client: Socket,\n): string {\n  return data;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "\n@Bind(MessageBody(), ConnectedSocket())\n@SubscribeMessage('events')\nhandleEvent(data, client) {\n  return data;\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "blockquote", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "@ConnectedSocket()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, " decorator is imported from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "@nestjs/websockets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, " package.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "However, in this case, you won't be able to leverage interceptors. If you don't want to respond to the user, you can simple skip the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "return");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, " statement (or explicitly return \"falsy\" value, e.g. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "undefined");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, ").");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "Now when a client emits the message as follows:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "\nsocket.emit('events', { name: 'Nest' });");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "handleEvent()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, " method will be executed. In order to listen for messages emitted from within the above handler, the client has to attach a corresponding acknowledgment listener:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "\nsocket.emit('events', { name: 'Nest' }, data => console.log(data));");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "h4", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "Multiple responses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "The acknowledgment is dispatched only once. Furthermore, it is not supported by native WebSockets implementation. To solve this limitation, you may return an object which consist of two properties. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "event");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, " which is a name of the emitted event and the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, " that has to be forwarded to the client.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](198, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](199, "app-tabs", null, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "\n@SubscribeMessage('events')\nhandleEvent(@MessageBody() data: unknown): WsResponse<unknown> {\n  const event = 'events';\n  return { event, data };\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "\n@Bind(MessageBody())\n@SubscribeMessage('events')\nhandleEvent(data) {\n  const event = 'events';\n  return { event, data };\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "blockquote", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, " The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "WsResponse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, " interface is imported from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, "@nestjs/websockets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, " package.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "In order to listen for the incoming response(s), the client has to apply another event listener.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "\nsocket.on('events', data => console.log(data));");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "Asynchronous responses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, "Message handlers are able to respond either synchronously or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, "asynchronously");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, ". Hence, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, " methods are supported. A message handler is also able to return an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, "Observable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, ", in which case the result values will be emitted until the stream is completed.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](238, "extension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](239, "app-tabs", null, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, "\n@SubscribeMessage('events')\nonEvent(@MessageBody() data: unknown): Observable<WsResponse<number>> {\n  const event = 'events';\n  const response = [1, 2, 3];\n\n  return from(response).pipe(\n    map(data => ({ event, data })),\n  );\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, "\n@Bind(MessageBody())\n@SubscribeMessage('events')\nonEvent(data) {\n  const event = 'events';\n  const response = [1, 2, 3];\n\n  return from(response).pipe(\n    map(data => ({ event, data })),\n  );\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "In the example above, the message handler will respond ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "3 times");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, " (with each item from the array).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "h4", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "Lifecycle hooks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, "There are 3 useful lifecycle hooks available. All of them have corresponding interfaces and are described in the following table:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, "OnGatewayInit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, " Forces to implement the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "afterInit()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, " method. Takes library-specific server instance as an argument (and spreads the rest if required). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "OnGatewayConnection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, " Forces to implement the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "handleConnection()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275, " method. Takes library-specific client socket instance as an argument. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "OnGatewayDisconnect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, " Forces to implement the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](283, "handleDisconnect()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, " method. Takes library-specific client socket instance as an argument. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "blockquote", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288, " Each lifecycle interface is exposed from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](290, "@nestjs/websockets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, " package.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "h4", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, "Server");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](296, "Occasionally, you may want to have a direct access to the native, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](298, "platform-specific");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](299, " server instance. The reference to this object is passed as an argument to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, "afterInit()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](302, " method (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](304, "OnGatewayInit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, " interface). Another option is to use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "@WebSocketServer()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, " decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](311, "\n@WebSocketServer()\nserver: Server;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "blockquote", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](314, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315, " The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](317, "@WebSocketServer()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](318, " decorator is imported from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](320, "@nestjs/websockets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](321, " package.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, "Nest will automatically assign the server instance to this property once it is ready to use.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](325, "app-banner-enterprise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "h4", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](328, "Example");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](330, "A working example is available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](332, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](39);

          var _r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](90);

          var _r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](115);

          var _r247 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](148);

          var _r248 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](200);

          var _r249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](240);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r244.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r244.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](88, 29, "events.gateway", _r245.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r245.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r245.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](113, 32, "events.gateway", _r246.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r246.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r246.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](146, 35, "events.gateway", _r247.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r247.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r247.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](198, 38, "events.gateway", _r248.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r248.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r248.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](238, 41, "events.gateway", _r249.isJsActive), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r249.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r249.isJsActive);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"], _shared_components_banner_enterprise_banner_enterprise_component__WEBPACK_IMPORTED_MODULE_5__["BannerEnterpriseComponent"]],
      pipes: [_shared_pipes_extension_pipe__WEBPACK_IMPORTED_MODULE_6__["ExtensionPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??GatewaysComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](GatewaysComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GatewaysComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gateways',
          templateUrl: './gateways.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/websockets/guards/guards.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/homepage/pages/websockets/guards/guards.component.ts ***!
    \**********************************************************************/

  /*! exports provided: WsGuardsComponent */

  /***/
  function srcAppHomepagePagesWebsocketsGuardsGuardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WsGuardsComponent", function () {
      return WsGuardsComponent;
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

    var WsGuardsComponent =
    /*#__PURE__*/
    function (_page_page_component_4) {
      _inherits(WsGuardsComponent, _page_page_component_4);

      function WsGuardsComponent() {
        _classCallCheck(this, WsGuardsComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(WsGuardsComponent).apply(this, arguments));
      }

      return WsGuardsComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    WsGuardsComponent.??fac = function WsGuardsComponent_Factory(t) {
      return ??WsGuardsComponent_BaseFactory(t || WsGuardsComponent);
    };

    WsGuardsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: WsGuardsComponent,
      selectors: [["app-guards"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 45,
      vars: 4,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/websockets/guards.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "guards"], ["routerLink", "/guards"], [1, "info"], ["appAnchor", "", "id", "binding-guards"], [1, "filename"], ["appbabd0e461f39a64359ef8ed2a88a21c933b5d3c8", ""], [1, "language-typescript"]],
      template: function WsGuardsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Guards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "There is no fundamental difference between web sockets guards and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "regular HTTP application guards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, ". The only difference is that instead of throwing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "HttpException");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, ", you should use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "WsException");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "blockquote", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "WsException");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " class is exposed from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "@nestjs/websockets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " package.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Binding guards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "The following example uses a method-scoped guard. Just as with HTTP based applications, you can also use gateway-scoped guards (i.e., prefix the gateway class with a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "@UseGuards()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " decorator).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "app-tabs", null, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "\n@UseGuards(AuthGuard)\n@SubscribeMessage('events')\nhandleEvent(client: Client, data: unknown): WsResponse<unknown> {\n  const event = 'events';\n  return { event, data };\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "\n@UseGuards(AuthGuard)\n@SubscribeMessage('events')\nhandleEvent(client, data) {\n  const event = 'events';\n  return { event, data };\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r251.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r251.isJsActive);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??WsGuardsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](WsGuardsComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WsGuardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-guards',
          templateUrl: './guards.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/websockets/interceptors/interceptors.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/homepage/pages/websockets/interceptors/interceptors.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: WsInterceptorsComponent */

  /***/
  function srcAppHomepagePagesWebsocketsInterceptorsInterceptorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WsInterceptorsComponent", function () {
      return WsInterceptorsComponent;
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


    var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/components/tabs/tabs.component */
    "./src/app/shared/components/tabs/tabs.component.ts");

    var WsInterceptorsComponent =
    /*#__PURE__*/
    function (_page_page_component_5) {
      _inherits(WsInterceptorsComponent, _page_page_component_5);

      function WsInterceptorsComponent() {
        _classCallCheck(this, WsInterceptorsComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(WsInterceptorsComponent).apply(this, arguments));
      }

      return WsInterceptorsComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    WsInterceptorsComponent.??fac = function WsInterceptorsComponent_Factory(t) {
      return ??WsInterceptorsComponent_BaseFactory(t || WsInterceptorsComponent);
    };

    WsInterceptorsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: WsInterceptorsComponent,
      selectors: [["app-interceptors"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 24,
      vars: 4,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/websockets/interceptors.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "interceptors"], ["routerLink", "/interceptors"], [1, "filename"], ["apped4c1218aa80549c8a886c1159b2ea7d2e5bc6d3", ""], [1, "language-typescript"]],
      template: function WsInterceptorsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Interceptors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "There is no difference between ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "regular interceptors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " and web sockets interceptors. The following example uses a manually instantiated method-scoped interceptor. Just as with HTTP based applications, you can also use gateway-scoped interceptors (i.e., prefix the gateway class with a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "@UseInterceptors()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " decorator).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "app-tabs", null, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\n@UseInterceptors(new TransformInterceptor())\n@SubscribeMessage('events')\nhandleEvent(client: Client, data: unknown): WsResponse<unknown> {\n  const event = 'events';\n  return { event, data };\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "\n@UseInterceptors(new TransformInterceptor())\n@SubscribeMessage('events')\nhandleEvent(client, data) {\n  const event = 'events';\n  return { event, data };\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r253.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r253.isJsActive);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??WsInterceptorsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](WsInterceptorsComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WsInterceptorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-interceptors',
          templateUrl: './interceptors.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/websockets/pipes/pipes.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/homepage/pages/websockets/pipes/pipes.component.ts ***!
    \********************************************************************/

  /*! exports provided: WsPipesComponent */

  /***/
  function srcAppHomepagePagesWebsocketsPipesPipesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WsPipesComponent", function () {
      return WsPipesComponent;
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

    var WsPipesComponent =
    /*#__PURE__*/
    function (_page_page_component_6) {
      _inherits(WsPipesComponent, _page_page_component_6);

      function WsPipesComponent() {
        _classCallCheck(this, WsPipesComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(WsPipesComponent).apply(this, arguments));
      }

      return WsPipesComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    WsPipesComponent.??fac = function WsPipesComponent_Factory(t) {
      return ??WsPipesComponent_BaseFactory(t || WsPipesComponent);
    };

    WsPipesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: WsPipesComponent,
      selectors: [["app-pipes"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 51,
      vars: 4,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/websockets/pipes.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "pipes"], ["routerLink", "/pipes"], [1, "info"], ["appAnchor", "", "id", "binding-pipes"], [1, "filename"], ["appabbef2671ddcc8d1e16a381578e8236583006df7", ""], [1, "language-typescript"]],
      template: function WsPipesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Pipes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "There is no fundamental difference between ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "regular pipes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " and microservices pipes. The only difference is that instead of throwing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "HttpException");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, ", you should use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "WsException");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, ". In addition, all pipes will be only applied to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " parameter (because validating or transforming ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " instance is useless).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "blockquote", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "WsException");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " class is exposed from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "@nestjs/websockets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " package.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Binding pipes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "The following example uses a manually instantiated method-scoped pipe. Just as with HTTP based applications, you can also use gateway-scoped pipes (i.e., prefix the gateway class with a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "@UsePipes()");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " decorator).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "app-tabs", null, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "\n@UsePipes(new ValidationPipe())\n@SubscribeMessage('events')\nhandleEvent(client: Client, data: unknown): WsResponse<unknown> {\n  const event = 'events';\n  return { event, data };\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "\n@UsePipes(new ValidationPipe())\n@SubscribeMessage('events')\nhandleEvent(client, data) {\n  const event = 'events';\n  return { event, data };\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r255.isJsActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r255.isJsActive);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??WsPipesComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](WsPipesComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WsPipesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pipes',
          templateUrl: './pipes.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/websockets/websockets.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/homepage/pages/websockets/websockets.module.ts ***!
    \****************************************************************/

  /*! exports provided: WebsocketsModule */

  /***/
  function srcAppHomepagePagesWebsocketsWebsocketsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebsocketsModule", function () {
      return WebsocketsModule;
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


    var _adapter_adapter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./adapter/adapter.component */
    "./src/app/homepage/pages/websockets/adapter/adapter.component.ts");
    /* harmony import */


    var _exception_filters_exception_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./exception-filters/exception-filters.component */
    "./src/app/homepage/pages/websockets/exception-filters/exception-filters.component.ts");
    /* harmony import */


    var _gateways_gateways_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./gateways/gateways.component */
    "./src/app/homepage/pages/websockets/gateways/gateways.component.ts");
    /* harmony import */


    var _guards_guards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./guards/guards.component */
    "./src/app/homepage/pages/websockets/guards/guards.component.ts");
    /* harmony import */


    var _interceptors_interceptors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./interceptors/interceptors.component */
    "./src/app/homepage/pages/websockets/interceptors/interceptors.component.ts");
    /* harmony import */


    var _pipes_pipes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pipes/pipes.component */
    "./src/app/homepage/pages/websockets/pipes/pipes.component.ts");

    var routes = [{
      path: 'gateways',
      component: _gateways_gateways_component__WEBPACK_IMPORTED_MODULE_6__["GatewaysComponent"],
      data: {
        title: 'Gateways'
      }
    }, {
      path: 'pipes',
      component: _pipes_pipes_component__WEBPACK_IMPORTED_MODULE_9__["WsPipesComponent"],
      data: {
        title: 'Pipes - Gateways'
      }
    }, {
      path: 'exception-filters',
      component: _exception_filters_exception_filters_component__WEBPACK_IMPORTED_MODULE_5__["WsExceptionFiltersComponent"],
      data: {
        title: 'Exception Filters - Gateways'
      }
    }, {
      path: 'guards',
      component: _guards_guards_component__WEBPACK_IMPORTED_MODULE_7__["WsGuardsComponent"],
      data: {
        title: 'Guards - Gateways'
      }
    }, {
      path: 'interceptors',
      component: _interceptors_interceptors_component__WEBPACK_IMPORTED_MODULE_8__["WsInterceptorsComponent"],
      data: {
        title: 'Interceptors - Gateways'
      }
    }, {
      path: 'adapter',
      component: _adapter_adapter_component__WEBPACK_IMPORTED_MODULE_4__["AdapterComponent"],
      data: {
        title: 'Adapter - Gateways'
      }
    }];

    var WebsocketsModule = function WebsocketsModule() {
      _classCallCheck(this, WebsocketsModule);
    };

    WebsocketsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: WebsocketsModule
    });
    WebsocketsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function WebsocketsModule_Factory(t) {
        return new (t || WebsocketsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](WebsocketsModule, {
        declarations: [_gateways_gateways_component__WEBPACK_IMPORTED_MODULE_6__["GatewaysComponent"], _adapter_adapter_component__WEBPACK_IMPORTED_MODULE_4__["AdapterComponent"], _pipes_pipes_component__WEBPACK_IMPORTED_MODULE_9__["WsPipesComponent"], _interceptors_interceptors_component__WEBPACK_IMPORTED_MODULE_8__["WsInterceptorsComponent"], _guards_guards_component__WEBPACK_IMPORTED_MODULE_7__["WsGuardsComponent"], _exception_filters_exception_filters_component__WEBPACK_IMPORTED_MODULE_5__["WsExceptionFiltersComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](WebsocketsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          declarations: [_gateways_gateways_component__WEBPACK_IMPORTED_MODULE_6__["GatewaysComponent"], _adapter_adapter_component__WEBPACK_IMPORTED_MODULE_4__["AdapterComponent"], _pipes_pipes_component__WEBPACK_IMPORTED_MODULE_9__["WsPipesComponent"], _interceptors_interceptors_component__WEBPACK_IMPORTED_MODULE_8__["WsInterceptorsComponent"], _guards_guards_component__WEBPACK_IMPORTED_MODULE_7__["WsGuardsComponent"], _exception_filters_exception_filters_component__WEBPACK_IMPORTED_MODULE_5__["WsExceptionFiltersComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=homepage-pages-websockets-websockets-module-es5.js.map