(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product-list/product-list.component */ "./src/app/product/product-list/product-list.component.ts");
/* harmony import */ var _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/product-detail/product-detail.component */ "./src/app/product/product-detail/product-detail.component.ts");
/* harmony import */ var _invalid_path_invalid_path_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invalid-path/invalid-path.component */ "./src/app/invalid-path/invalid-path.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");








var routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"] },
    { path: 'product/:pid', component: _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"], },
    { path: 'cart/:pid', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"], },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__["CheckoutComponent"] },
    { path: '**', component: _invalid_path_invalid_path_component__WEBPACK_IMPORTED_MODULE_5__["InvalidPathComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\r\n    flex: 1 0 auto;\r\n    -webkit-flex: 1 0 auto;\r\n    min-height: 200px;\r\n\r\n }\r\n \r\n #myFooter{\r\n    flex: 0 0 auto;\r\n    -webkit-flex: 0 0 auto;\r\n }\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGlCQUFpQjs7Q0FFcEI7O0NBRUE7SUFDRyxjQUFjO0lBQ2Qsc0JBQXNCO0NBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAgLXdlYmtpdC1mbGV4OiAxIDAgYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG5cclxuIH1cclxuIFxyXG4gI215Rm9vdGVye1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAtd2Via2l0LWZsZXg6IDAgMCBhdXRvO1xyXG4gfVxyXG5cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- header -->\n<app-header></app-header>\n<!-- header -->\n\n<router-outlet></router-outlet>\n\n<!--FOOTER-->\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ecommerce';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product-list/product-list.component */ "./src/app/product/product-list/product-list.component.ts");
/* harmony import */ var _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product-detail/product-detail.component */ "./src/app/product/product-detail/product-detail.component.ts");
/* harmony import */ var _invalid_path_invalid_path_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./invalid-path/invalid-path.component */ "./src/app/invalid-path/invalid-path.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _filters_searchproduct_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filters/searchproduct.pipe */ "./src/app/filters/searchproduct.pipe.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"],
                _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailComponent"],
                _invalid_path_invalid_path_component__WEBPACK_IMPORTED_MODULE_10__["InvalidPathComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"],
                _filters_searchproduct_pipe__WEBPACK_IMPORTED_MODULE_12__["SearchproductPipe"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__["CheckoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                angular_alert_module__WEBPACK_IMPORTED_MODULE_14__["AlertsModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".changeQuantityButton{\r\n    width:auto;\r\n}\r\n\r\n\r\nth,td{\r\n    min-width: 5vw;\r\n    text-align: center;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYW5nZVF1YW50aXR5QnV0dG9ue1xyXG4gICAgd2lkdGg6YXV0bztcclxufVxyXG5cclxuXHJcbnRoLHRke1xyXG4gICAgbWluLXdpZHRoOiA1dnc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover table-responsive-sm\"> \n  <thead>\n    <tr class=\"table-info\">\n      <th scope=\"col\">Sr. No.</th>\n      <th scope=\"col\">Product Name</th>\n      <th scope=\"col\">Quantity</th>\n      <th scope=\"col\">Unit Price</th>\n      <th scope=\"col\">Total</th> \n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let cart of cartProducts; let index=index\">\n      <th scope=\"row\">{{index+1}}</th>\n      <td>{{cart.productName}}</td>\n      <td>\n        \n            <button type=\"button\" class=\"btn btn-success btn-sm changeQuantityButton\" (click)=\"increaseQuantity(index)\">+</button>\n            {{cart.quantity}}\n            <button type=\"button\" class=\"btn btn-danger btn-sm changeQuantityButton\" (click)=\"decreaseQuantity(index)\">-</button>\n     \n      </td>\n      <td>{{cart.rate | currency}}</td>\n      <td>{{cart.quantity * cart.rate}}</td>\n    </tr>\n    <tr class=\"table-info\">\n      <th scope=\"col\">TOTAL</th>\n      <th scope=\"col\"></th>\n      <th scope=\"col\">{{totalQuantity}}</th>\n      <th scope=\"col\"></th>\n      <th scope=\"col\">{{totalAmount | currency}}</th>\n    </tr>\n    <tr >\n        \n    </tr>\n  </tbody>\n</table>\n<div class=\"d-flex justify-content-center\" >\n    <button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['../checkout']\">Checkout</button>\n</div>\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_productService_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/productService/product.service */ "./src/app/model/productService/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CartComponent = /** @class */ (function () {
    function CartComponent(route, router, productService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        if (window.localStorage.getItem("cart")) {
            this.cartProducts = JSON.parse(window.localStorage.getItem("cart"));
        }
        else {
            this.cartProducts = [];
            //this.totalAmount = 0;
            //this.totalQuantity = 0;
        }
        this.addProduct();
    }
    CartComponent.prototype.addProduct = function () {
        var productId = this.route.snapshot.params['pid'];
        this.product = this.productService.getProduct(productId);
        if (productId != 'undefined' && this.product.pid) { // 2nd arg check if product actuallu exists
            console.log(this.product);
            var productNotInCart = 1;
            for (var index = 0; index < this.cartProducts.length; index++) {
                if (this.cartProducts[index].productID == productId) {
                    this.cartProducts[index].quantity = this.cartProducts[index].quantity + 1;
                    // Update flag
                    productNotInCart = 0;
                    break;
                }
            }
            if (productNotInCart == 1) {
                this.cartProducts.push({
                    productID: productId,
                    productName: this.product.name,
                    quantity: 1,
                    rate: this.product.rate
                });
            }
            this.updateLocalStorage();
            // update local storage
            //window.localStorage.setItem("cart",JSON.stringify(this.cartProducts));
        }
        else {
            //window.location.href ="/cart";
        }
        this.updateTotal();
    };
    CartComponent.prototype.updateTotal = function () {
        this.totalQuantity = 0;
        this.totalAmount = 0;
        for (var index = 0; index < this.cartProducts.length; index++) {
            this.totalQuantity = this.totalQuantity + this.cartProducts[index].quantity;
            this.totalAmount = this.totalAmount + this.cartProducts[index].quantity * this.cartProducts[index].rate;
        }
    };
    CartComponent.prototype.increaseQuantity = function (index) {
        this.cartProducts[index].quantity++;
        this.updateTotal();
        this.updateLocalStorage();
    };
    CartComponent.prototype.decreaseQuantity = function (index) {
        this.cartProducts[index].quantity--;
        if (this.cartProducts[index].quantity == 0) {
            this.cartProducts.splice(index, 1);
        }
        this.updateTotal();
        this.updateLocalStorage();
    };
    CartComponent.prototype.updateLocalStorage = function () {
        window.localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    };
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            providers: [_model_productService_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]],
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _model_productService_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th,td{\r\n    min-width: 5vw;\r\n    text-align: center;\r\n}\r\n\r\n#main{\r\n    width: 75%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGgsdGR7XHJcbiAgICBtaW4td2lkdGg6IDV2dztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI21haW57XHJcbiAgICB3aWR0aDogNzUlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"apiIntegration.js\"> </script>\n<div id=\"main\" class=\"container p-3 mb-2\">\n    <table class=\"table table-hover table-responsive-sm\"> \n        <thead>\n          <tr class=\"table-danger\">\n            <th scope=\"col\">Sr. No.</th>\n            <th scope=\"col\">Product Name</th>\n            <th scope=\"col\">Quantity</th>\n            <th scope=\"col\">Unit Price</th>\n            <th scope=\"col\">Total</th> \n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let cart of cartProducts; let index=index\">\n            <th scope=\"row\">{{index+1}}</th>\n            <td>{{cart.productName}}</td>\n            <td>{{cart.quantity}}</td>\n            <td>{{cart.rate | currency}}</td>\n            <td>{{cart.quantity * cart.rate}}</td>\n          </tr>\n          <tr class=\"table-danger\">\n            <th scope=\"col\">TOTAL</th>\n            <th scope=\"col\"></th>\n            <th scope=\"col\">{{totalQuantity}}</th>\n            <th scope=\"col\"></th>\n            <th scope=\"col\">{{totalAmount | currency}}</th>\n          </tr>\n        </tbody>\n      </table>\n    \n                 <!-- ...............BILLING ADDRESS.................. -->\n    <div class=\"col-auto\">\n        <h4> Billing Address</h4>\n    </div>\n    <form>\n    <div class=\"row form-group col-auto\">\n      <div class=\"col\">\n          <label>First Name</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"First name\">\n      </div>\n      <div class=\"col\">\n          <label>Last Name</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Last name\">\n      </div>\n    </div>\n    \n    <div class=\"form-group col-auto\">\n      <label>Username</label>\n      <div class=\"input-group mb-2\">\n          <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">@</div>\n          </div>\n          <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Username\">\n      </div>\n    </div>\n    \n    <div class=\"form-group col-auto\">\n      <label>Email</label><label class=\"text-muted\">(Optional)</label>\n      <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n      \n    </div>\n    \n    <div class=\"form-group col-auto\">\n      <label>Address</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"1234 Main St\" #address1>\n    </div>\n    <div class=\"form-group col-auto\">\n      <label>Address 2 </label><label class=\"text-muted\">(Optional)</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"Apartment, studio, or floor\" #address2>\n    </div>\n    \n    <div class=\"form-row col-auto\">\n      <div class=\"form-group col-md-6\">\n          <label>City</label>\n          <input type=\"text\" class=\"form-control\" id=\"city\" #city>\n      </div>\n      <div class=\"form-group col-md-4\">\n          <label>State</label>\n          <input type=\"text\" class=\"form-control\" id=\"state\" #state>\n      </div>\n      <div class=\"form-group col-md-2\">\n          <label>Zip</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputZip\" #zipcode>\n      </div>\n    </div>\n    \n    <div class=\"form-group col-auto\">\n      <hr>\n    </div>\n    \n    <div class=\"form-group col-auto\">\n        <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck1\">\n            <label class=\"form-check-label\">\n                Shipping address is same as my billing address\n            </label>\n        </div>\n        <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck2\">\n            <label class=\"form-check-label\">\n                Save this information for next time\n            </label>\n        </div>\n    </div>\n    \n    \n    <div class=\"form-group col-auto\">\n          <hr>\n    </div>\n        \n    <!-- ...............PAYMENT.................. -->\n    <div class=\"col-auto\">\n          <h4>Payment</h4>\n    </div>\n    \n    <div class=\"form-group col-auto form-check\">\n    \n        <div class=\"custom-control custom-radio\">\n            <input type=\"radio\" class=\"custom-control-input\" id=\"defaultChecked\" name=\"defaultExampleRadios\" checked>\n            <label class=\"custom-control-label\">Credit Card</label>\n        </div>\n    \n        <div class=\"custom-control custom-radio\">\n            <input type=\"radio\" class=\"custom-control-input\" id=\"defaultUnchecked1\" name=\"defaultExampleRadios\">\n            <label class=\"custom-control-label\">Debit Card</label>\n        </div>\n    \n        <div class=\"custom-control custom-radio\">\n            <input type=\"radio\" class=\"custom-control-input\" id=\"defaultUnchecked\" name=\"defaultExampleRadios\">\n            <label class=\"custom-control-label\">Cash On Delivery</label>\n        </div>\n    \n    </div>\n    \n    <div class=\"row form-group col-auto\">\n        <div class=\"col\">\n            <label>Name on card</label>\n            <input type=\"text\" class=\"form-control\">\n            <small id=\"emailHelp\" class=\"form-text text-muted\">Full name as displayed on the card</small>\n        </div>\n        <div class=\"col\">\n            <label>Credit card number</label>\n            <input type=\"text\" class=\"form-control\">\n        </div>\n    </div>\n    \n    <div class=\"row form-group col-auto\">\n        <div class=\"col-md-2\">\n            <label>Expiration</label>\n            <input type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"col-md-2\">\n            <label>CVV</label>\n            <input type=\"text\" class=\"form-control\">\n        </div>\n    </div>\n    \n    <div class=\"form-group col-auto\">\n        <hr>\n    </div>\n    <div class=\"form-group col-auto\"> \n        <button (click)=\"finalPay(address1.value, address2.value, city.value, state.value, zipcode.value)\" type=\"button\" class=\"btn btn-primary btn-lg btn-block ml-auto p-2 \" style=\"width: fit-content\">Submit</button>\n    </div>\n    </form>\n    \n    \n    \n    \n</div>\n"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_productService_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/productService/product.service */ "./src/app/model/productService/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");





var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(route, router, productService, alerts) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.alerts = alerts;
        if (window.localStorage.getItem("cart")) {
            this.cartProducts = JSON.parse(window.localStorage.getItem("cart"));
        }
        else {
            this.cartProducts = [];
            //this.totalAmount = 0;
            //this.totalQuantity = 0;
        }
        this.updateTotal();
        this.alerts.setMessage('Error: Address Not found', 'error');
    }
    CheckoutComponent.prototype.updateTotal = function () {
        this.totalQuantity = 0;
        this.totalAmount = 0;
        for (var index = 0; index < this.cartProducts.length; index++) {
            this.totalQuantity = this.totalQuantity + this.cartProducts[index].quantity;
            this.totalAmount = this.totalAmount + this.cartProducts[index].quantity * this.cartProducts[index].rate;
        }
    };
    CheckoutComponent.prototype.finalPay = function (address1, address2, city, state, zipcode) {
        var _this = this;
        console.log("okay");
        var userid = '261BOSTO6362';
        var xml = "<ZipCodeLookupRequest USERID='" + userid + "'><Revision>1</Revision><Address ID='0'><FirmName></FirmName><Address1>" + address1 + "</Address1><Address2>" + address2 + "</Address2><City>" + city + "</City><State>" + state + "</State></Address></ZipCodeLookupRequest>";
        var url = "http://production.shippingapis.com/ShippingAPI.dll?API=ZipCodeLookup&XML=" + xml;
        var myRequest = new Request(url);
        fetch(myRequest)
            .then(function (response) {
            response.text().then(function (text) {
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(text, "text/html");
                if (xmlDoc.getElementsByTagName("ReturnText") && xmlDoc.getElementsByTagName("ReturnText").length > 0) {
                    console.log(_this.getNodeValue(xmlDoc, "ReturnText"), "ZipCode:", _this.getNodeValue(xmlDoc, "Zip5"));
                    _this.alerts.setMessage('Address error', 'error');
                }
                else {
                    if (xmlDoc.getElementsByTagName("Zip5") && xmlDoc.getElementsByTagName("Zip5").length > 0) {
                        console.log("ZipCode:", _this.getNodeValue(xmlDoc, "Zip5"));
                        _this.alerts.setMessage('Zipcode wrong', 'warn');
                    }
                    else {
                        console.log("Error: Address Not found");
                        _this.alerts.setMessage('Error: Address Not found', 'error');
                    }
                }
            });
        });
    };
    CheckoutComponent.prototype.getNodeValue = function (xmlDoc, tagName) {
        return tagName ? xmlDoc.getElementsByTagName(tagName)[0].childNodes[0].nodeValue : null;
    };
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            providers: [_model_productService_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]],
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _model_productService_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            angular_alert_module__WEBPACK_IMPORTED_MODULE_4__["AlertsService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/filters/searchproduct.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/filters/searchproduct.pipe.ts ***!
  \***********************************************/
/*! exports provided: SearchproductPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchproductPipe", function() { return SearchproductPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_productService_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/productService/product.service */ "./src/app/model/productService/product.service.ts");



var SearchproductPipe = /** @class */ (function () {
    function SearchproductPipe(productService) {
        this.productService = productService;
    }
    SearchproductPipe.prototype.transform = function (value, args) {
        var p = this.productService.searchProduct(value);
        return p;
    };
    SearchproductPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'searchproduct'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_model_productService_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], SearchproductPipe);
    return SearchproductPipe;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myFooter {\r\n    background-color: #3c3d41;\r\n    color: white;\r\n    padding-top: 30px;\r\n\r\n}\r\n\r\n#myFooter .footer-copyright {\r\n    background-color: #333333;\r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n    text-align: center;\r\n}\r\n\r\n#myFooter .row {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n#myFooter .navbar-brand {\r\n    margin-top: 45px;\r\n    height: 65px;\r\n}\r\n\r\n#myFooter .footer-copyright p {\r\n    margin: 10px;\r\n    color: #ccc;\r\n}\r\n\r\n#myFooter ul {\r\n    list-style-type: none;\r\n    padding-left: 0;\r\n    line-height: 1.7;\r\n}\r\n\r\n#myFooter h5 {\r\n    font-size: 18px;\r\n    color: white;\r\n    font-weight: bold;\r\n    margin-top: 15px;\r\n}\r\n\r\n#myFooter h2 a{\r\n    font-size: 50px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n#myFooter a {\r\n    color: #d2d1d1;\r\n    text-decoration: none;\r\n}\r\n\r\n#myFooter a:hover,\r\n#myFooter a:focus {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\n#myFooter .social-networks {\r\n    text-align: center;\r\n    padding-top: 30px;\r\n    padding-bottom: 16px;\r\n}\r\n\r\n#myFooter .social-networks a {\r\n    font-size: 32px;\r\n    color: #f9f9f9;\r\n    padding: 10px;\r\n    transition: 0.2s;\r\n}\r\n\r\n#myFooter .social-networks a:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n#myFooter .facebook:hover {\r\n    color: #0077e2;\r\n}\r\n\r\n#myFooter .google:hover {\r\n    color: #ef1a1a;\r\n}\r\n\r\n#myFooter .twitter:hover {\r\n    color: #00aced;\r\n}\r\n\r\n#myFooter .btn {\r\n    color: white;\r\n    background-color: #d84b6b;\r\n    border-radius: 20px;\r\n    border: none;\r\n    width: 150px;\r\n    display: block;\r\n    margin: 0 auto;\r\n    margin-top: 10px;\r\n    line-height: 25px;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    #myFooter {\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n/* CSS used for positioning the footers at the bottom of the page. */\r\n\r\n/* You can remove this. */\r\n\r\nhtml{\r\n    height: 100%;\r\n}\r\n\r\nbody{\r\n    display: flex;\r\n    display: -webkit-flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\n.content{\r\n   flex: 1 0 auto;\r\n   -webkit-flex: 1 0 auto;\r\n   min-height: 200px;\r\n}\r\n\r\n#myFooter{\r\n   flex: 0 0 auto;\r\n   -webkit-flex: 0 0 auto;\r\n   \r\n}\r\n\r\n/* Added by me to keep footer at bottom */\r\n\r\nfooter{\r\n    margin-top: 5%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFHQSxvRUFBb0U7O0FBQ3BFLHlCQUF5Qjs7QUFDekI7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFFdEIsWUFBWTtBQUNoQjs7QUFFQTtHQUNHLGNBQWM7R0FDZCxzQkFBc0I7R0FDdEIsaUJBQWlCO0FBQ3BCOztBQUVBO0dBQ0csY0FBYztHQUNkLHNCQUFzQjs7QUFFekI7O0FBRUEseUNBQXlDOztBQUN6QztJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbXlGb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNjM2Q0MTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG5cclxufVxyXG5cclxuI215Rm9vdGVyIC5mb290ZXItY29weXJpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI215Rm9vdGVyIC5yb3cge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuI215Rm9vdGVyIC5uYXZiYXItYnJhbmQge1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxuICAgIGhlaWdodDogNjVweDtcclxufVxyXG5cclxuI215Rm9vdGVyIC5mb290ZXItY29weXJpZ2h0IHAge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbiNteUZvb3RlciB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS43O1xyXG59XHJcblxyXG4jbXlGb290ZXIgaDUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4jbXlGb290ZXIgaDIgYXtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jbXlGb290ZXIgYSB7XHJcbiAgICBjb2xvcjogI2QyZDFkMTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI215Rm9vdGVyIGE6aG92ZXIsXHJcbiNteUZvb3RlciBhOmZvY3VzIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI215Rm9vdGVyIC5zb2NpYWwtbmV0d29ya3Mge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuI215Rm9vdGVyIC5zb2NpYWwtbmV0d29ya3MgYSB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBjb2xvcjogI2Y5ZjlmOTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG59XHJcblxyXG4jbXlGb290ZXIgLnNvY2lhbC1uZXR3b3JrcyBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI215Rm9vdGVyIC5mYWNlYm9vazpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwNzdlMjtcclxufVxyXG5cclxuI215Rm9vdGVyIC5nb29nbGU6aG92ZXIge1xyXG4gICAgY29sb3I6ICNlZjFhMWE7XHJcbn1cclxuXHJcbiNteUZvb3RlciAudHdpdHRlcjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwYWNlZDtcclxufVxyXG5cclxuI215Rm9vdGVyIC5idG4ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4NGI2YjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgI215Rm9vdGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBDU1MgdXNlZCBmb3IgcG9zaXRpb25pbmcgdGhlIGZvb3RlcnMgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZS4gKi9cclxuLyogWW91IGNhbiByZW1vdmUgdGhpcy4gKi9cclxuaHRtbHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICAgZmxleDogMSAwIGF1dG87XHJcbiAgIC13ZWJraXQtZmxleDogMSAwIGF1dG87XHJcbiAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4jbXlGb290ZXJ7XHJcbiAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAtd2Via2l0LWZsZXg6IDAgMCBhdXRvO1xyXG4gICBcclxufVxyXG5cclxuLyogQWRkZWQgYnkgbWUgdG8ga2VlcCBmb290ZXIgYXQgYm90dG9tICovXHJcbmZvb3RlcntcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"myFooter\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-3\">\n                    <h2 class=\"logo\"><a href=\"#\"> LOGO </a></h2>\n                </div>\n                <div class=\"col-sm-2\">\n                    <h5>Get started</h5>\n                    <ul>\n                        <li><a href=\"#\">Home</a></li>\n                        <li><a href=\"#\">Sign up</a></li>\n                        <li><a href=\"#\">Downloads</a></li>\n                    </ul>\n                </div>\n                <div class=\"col-sm-2\">\n                    <h5>About us</h5>\n                    <ul>\n                        <li><a href=\"#\">Company Information</a></li>\n                        <li><a href=\"#\">Contact us</a></li>\n                        <li><a href=\"#\">Reviews</a></li>\n                    </ul>\n                </div>\n                <div class=\"col-sm-2\">\n                    <h5>Support</h5>\n                    <ul>\n                        <li><a href=\"#\">FAQ</a></li>\n                        <li><a href=\"#\">Help desk</a></li>\n                        <li><a href=\"#\">Forums</a></li>\n                    </ul>\n                </div>\n                <div class=\"col-sm-3\">\n                    <div class=\"social-networks\">\n                        <a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\n                        <a href=\"#\" class=\"google\"><i class=\"fa fa-google-plus\"></i></a>\n                    </div>\n                    <button type=\"button\" class=\"btn btn-default\">Contact us</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"footer-copyright\">\n            <p>© 2019 Copyright </p>\n        </div>\n    </footer>\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n    <script src=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">WindowSTOP</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n      <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\" routerLink='/products'>Product <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n   \n      <div class=\"dropdown row show\">\n          <input class=\"form-control col-8 \" type=\"text\" placeholder=\"Search\" [(ngModel)]='inputvalue' (focus)=\"cleardiv()\" >\n          <a class=\"btn btn-outline-success col-4 dropdown-toggle\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Search\n          </a>\n          <div class=\"dropdown-menu show\" id=\"clear\" aria-labelledby=\"dropdownMenuLink\" *ngFor=\"let product of (inputvalue | searchproduct)\">\n            <a class=\"dropdown-item\" [routerLink]=\"['../product', product.pid]\"> {{ product.name }} </a>\n          </div>\n      </div>\n     \n      <ul class=\"navbar-nav ml-auto mt-2 mt-lg-0\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['cart']\">Cart <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">MyAccount <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_productService_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/productService/product.service */ "./src/app/model/productService/product.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(productService) {
        this.productService = productService;
        this.products = this.productService.getProducts();
    }
    HeaderComponent.prototype.cleardiv = function () {
        console.log("clear");
        console.log(window.document.getElementById("clear"));
        window.document.getElementById("clear").innerHTML = "";
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            providers: [src_app_model_productService_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]],
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_model_productService_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/invalid-path/invalid-path.component.css":
/*!*********************************************************!*\
  !*** ./src/app/invalid-path/invalid-path.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmFsaWQtcGF0aC9pbnZhbGlkLXBhdGguY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/invalid-path/invalid-path.component.html":
/*!**********************************************************!*\
  !*** ./src/app/invalid-path/invalid-path.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  invalid-path works!\n</p>\n"

/***/ }),

/***/ "./src/app/invalid-path/invalid-path.component.ts":
/*!********************************************************!*\
  !*** ./src/app/invalid-path/invalid-path.component.ts ***!
  \********************************************************/
/*! exports provided: InvalidPathComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidPathComponent", function() { return InvalidPathComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InvalidPathComponent = /** @class */ (function () {
    function InvalidPathComponent() {
    }
    InvalidPathComponent.prototype.ngOnInit = function () {
    };
    InvalidPathComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invalid-path',
            template: __webpack_require__(/*! ./invalid-path.component.html */ "./src/app/invalid-path/invalid-path.component.html"),
            styles: [__webpack_require__(/*! ./invalid-path.component.css */ "./src/app/invalid-path/invalid-path.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InvalidPathComponent);
    return InvalidPathComponent;
}());



/***/ }),

/***/ "./src/app/model/productService/product.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/model/productService/product.service.ts ***!
  \*********************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-list */ "./src/app/model/productService/products-list.ts");



var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        return _products_list__WEBPACK_IMPORTED_MODULE_2__["PRODUCTS"];
    };
    ProductService.prototype.getProduct = function (pid) {
        var products = this.getProducts();
        var product = products.find(function (p) { return p.pid == pid; });
        return Object.assign({}, product); // creating a copy
    };
    ProductService.prototype.searchProduct = function (s) {
        console.log();
        var products = this.getProducts();
        var matchproduct = [];
        if (s == undefined) {
            return matchproduct;
        }
        else {
            for (var i = 0; i < products.length; i++) {
                if (products[i].name.toLowerCase().includes(s.toLowerCase())) {
                    matchproduct.push(products[i]);
                }
            }
            return matchproduct;
        }
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/model/productService/products-list.ts":
/*!*******************************************************!*\
  !*** ./src/app/model/productService/products-list.ts ***!
  \*******************************************************/
/*! exports provided: PRODUCTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS", function() { return PRODUCTS; });
var PRODUCTS = [
    {
        "pid": "p01",
        "name": "Apple AirPods",
        "rate": 160,
        "detail": "Automatically on, automatically connected | Easy setup for all your Apple devices | Quick access to Siri by saying Hey Siri | Double-tap to play or skip forward | New Apple H1 headphone chip delivers faster wireless connection to your devices | Charges quickly in the case | Case can be charged using the Lightning connector",
        "cid": "electronics"
    },
    {
        "pid": "p02",
        "name": "BassPods",
        "rate": 100,
        "detail": "Compatible with all iPhones and Android phones High quality sound w/ Bluetooth capabilities | Professionally designed and trimmed to perfection Impress & amaze your friends and family | Fits in your ear perfectly and securely | Answer Calls With The Touch Of A Button | Charging case (with the design) & charging cable are included",
        "cid": "electronics"
    },
    {
        "pid": "p03",
        "name": "Doritos",
        "rate": 5,
        "detail": "Hungryyyyy",
        "cid": "food"
    },
    {
        "pid": "p04",
        "name": "Tostitos Salsa",
        "rate": 7.99,
        "detail": "Hungryyyyy",
        "cid": "food"
    },
    {
        "pid": "p05",
        "name": "Web Development Book",
        "rate": 70,
        "detail": "Let's learn",
        "cid": "book"
    },
    {
        "pid": "p06",
        "name": "Scissors",
        "rate": 3.45,
        "detail": "Used to cut",
        "cid": "home"
    }
];


/***/ }),

/***/ "./src/app/product/product-detail/product-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/product/product-detail/product-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 479px) {\r\n    /* start of phone styles */\r\n    /* It's possible to hide the image if the screen becomes too small */\r\n    .img-responsive {\r\n        height: 70vw;\r\n        width: 50vw;\r\n        \r\n    }\r\n\r\n    .col-in-mobile{\r\n        width: 100vw;\r\n    }\r\n\r\n    .row-in-mobile{\r\n        justify-content: center;\r\n    }\r\n\r\n    .for-mobile{\r\n       \r\n        visibility: visible;\r\n    }\r\n}\r\n\r\n.for-mobile{\r\n    visibility: hidden;\r\n}\r\n\r\n.card-image{\r\n    height: 15vw;\r\n    width: 15vw;\r\n}\r\n\r\n.edit-main-card{\r\n    margin-top: 2vh;\r\n    margin-left: 20vw;\r\n    margin-right: 20vw;\r\n    border-width: medium;\r\n}\r\n\r\n.product-name{\r\n    padding:1%; \r\n    align-self: center;\r\n    margin-bottom: 0.2vh;\r\n}\r\n\r\n.product-detail{\r\n    padding: 1%;\r\n}\r\n\r\n.edit-button{\r\n    min-width: 10vw;\r\n    margin: 2vh;\r\n}\r\n\r\n.card-body{\r\n    padding: 0.5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLG9FQUFvRTtJQUNwRTtRQUNJLFlBQVk7UUFDWixXQUFXOztJQUVmOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLHVCQUF1QjtJQUMzQjs7SUFFQTs7UUFFSSxtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcclxuICAgIC8qIHN0YXJ0IG9mIHBob25lIHN0eWxlcyAqL1xyXG4gICAgLyogSXQncyBwb3NzaWJsZSB0byBoaWRlIHRoZSBpbWFnZSBpZiB0aGUgc2NyZWVuIGJlY29tZXMgdG9vIHNtYWxsICovXHJcbiAgICAuaW1nLXJlc3BvbnNpdmUge1xyXG4gICAgICAgIGhlaWdodDogNzB2dztcclxuICAgICAgICB3aWR0aDogNTB2dztcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuY29sLWluLW1vYmlsZXtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICB9XHJcblxyXG4gICAgLnJvdy1pbi1tb2JpbGV7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvci1tb2JpbGV7XHJcbiAgICAgICBcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZm9yLW1vYmlsZXtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufSBcclxuXHJcbi5jYXJkLWltYWdle1xyXG4gICAgaGVpZ2h0OiAxNXZ3O1xyXG4gICAgd2lkdGg6IDE1dnc7XHJcbn1cclxuXHJcbi5lZGl0LW1haW4tY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHZ3O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHZ3O1xyXG4gICAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XHJcbn1cclxuXHJcbi5wcm9kdWN0LW5hbWV7XHJcbiAgICBwYWRkaW5nOjElOyBcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMnZoO1xyXG59XHJcblxyXG4ucHJvZHVjdC1kZXRhaWx7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxufVxyXG5cclxuLmVkaXQtYnV0dG9ue1xyXG4gICAgbWluLXdpZHRoOiAxMHZ3O1xyXG4gICAgbWFyZ2luOiAydmg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHl7XHJcbiAgICBwYWRkaW5nOiAwLjUlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/product/product-detail/product-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/product/product-detail/product-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card border-dark mb-3 text-center edit-main-card\"  *ngIf=\"product\">\n  <div class=\"card-header bg-transparent border-dark \">\n      <div class=\"row row-in-mobile\">\n          <div class=\"col-6 col-in-mobile\">\n              <img src=\"../../../assets/images/{{product.pid}}.jpeg\" class=\"card-img-top img-fluid card-image img-responsive\" alt=\"loading..\">\n          </div>\n          <div class=\"col d-flex flex-column align-self-center col-in-mobile\">\n              <div class=\"row justify-content-around\">\n                  <button type=\"button\" class=\"btn btn-success edit-button\">{{product.rate | currency}}</button>\n              </div>\n              <div class=\"row justify-content-around\">\n                  <button type=\"button\" class=\"btn btn-dark edit-button\" [routerLink]=\"['../../cart', product.pid]\">Add To Cart</button>\n              </div>\n              <div class=\"row justify-content-around\">\n                  <button type=\"button\" class=\"btn btn-light edit-button for-mobile\">Back To Products</button>\n              </div>\n          </div>\n      </div>\n  </div>\n  \n  <div class=\"card-body text-center text-success\">\n    <h5 class=\"card-title text-white bg-danger product-name\">\n      {{product.name | uppercase}}\n    </h5>\n  </div>\n  \n  <div class=\"card-footer bg-transparent border-dark text-center\">\n      <p class=\"card-text bg-info text-white product-detail\">{{product.detail}}</p>\n  </div>\n</div>\n<!--\n  <div class=\"card border-dark mb-3 text-center edit-card\"  *ngIf=\"product\">\n  <div class=\"card-header bg-transparent border-dark \">\n    \n    <img src=\"../../../assets/images/{{product.pid}}.jpeg\" class=\"card-img-top card-image\" alt=\"loading..\">\n  </div>\n  \n  <div class=\"card-body text-center text-success\">\n    <h5 class=\"card-title text-white bg-danger product-name\">\n      {{product.name | uppercase}}\n    </h5>\n    <p class=\"card-text bg-info text-white product-detail\">{{product.detail}}</p>\n  </div>\n  <div class=\"card-footer bg-transparent border-dark text-center\">\n      <div class=\"row\">\n          <div class=\"col text-right\">\n              <button type=\"button\" class=\"btn btn-success min-button-width\">{{product.rate | currency}}</button>\n          </div>\n          <div class=\"col text-left\">\n              <button type=\"button\" class=\"btn btn-dark min-button-width\" [routerLink]=\"['../../cart', product.pid]\">Add To Cart</button>\n          </div>\n      </div>\n  </div>\n</div>\n-->\n  <!--\n    <div *ngIf=\"product\">\n    <p>\n        product-detail works!\n      \n        {{product.pid}}\n        {{product.name}}\n        \n      </p>\n</div>\n  -->"

/***/ }),

/***/ "./src/app/product/product-detail/product-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/product/product-detail/product-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_productService_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/productService/product.service */ "./src/app/model/productService/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, productService) {
        this.route = route;
        this.productService = productService;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var productId = params['pid'];
            _this.product = _this.productService.getProduct(productId);
        });
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/product/product-detail/product-detail.component.html"),
            providers: [src_app_model_productService_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]],
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/product/product-detail/product-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_model_productService_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product/product-list/product-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 479px) {\r\n    /* start of phone styles */\r\n    .cardSize{\r\n        width: 40vw;\r\n        height: 45vh;\r\n        width: -webkit-max-content;\r\n        width: -moz-max-content;\r\n        width: max-content;\r\n\r\n    }\r\n}\r\n\r\n.cardSize{\r\n    margin-left: 5vw;\r\n    margin-top: 3vh;\r\n    margin-bottom: 3vh;\r\n    width: 20vw;\r\n    \r\n}\r\n\r\n.cardImage{\r\n    height: 15vw;\r\n    width: 15vw;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUI7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLDBCQUFrQjtRQUFsQix1QkFBa0I7UUFBbEIsa0JBQWtCOztJQUV0QjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7XHJcbiAgICAvKiBzdGFydCBvZiBwaG9uZSBzdHlsZXMgKi9cclxuICAgIC5jYXJkU2l6ZXtcclxuICAgICAgICB3aWR0aDogNDB2dztcclxuICAgICAgICBoZWlnaHQ6IDQ1dmg7XHJcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuLmNhcmRTaXple1xyXG4gICAgbWFyZ2luLWxlZnQ6IDV2dztcclxuICAgIG1hcmdpbi10b3A6IDN2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDN2aDtcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgXHJcbn1cclxuXHJcbi5jYXJkSW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDE1dnc7XHJcbiAgICB3aWR0aDogMTV2dztcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"card-deck \" *ngFor=\"let product of products\">\n            <div class=\"card cardSize  d-flex align-items-center\" >\n                    <img src=\"../../../assets/images/{{product.pid}}.jpeg\" class=\"card-img-top cardImage \" alt=\"loading..\">\n                    <div class=\"card-body text-center\">\n                        <h5 class=\"card-title\"><a [routerLink]=\"['../product', product.pid]\">{{product.name}}</a></h5>\n                        <h5 class=\"card-title\">{{product.rate | currency}}</h5>\n                        <a class=\"btn btn-primary\"  [routerLink]=\"['../cart', product.pid]\">Add To Cart</a>\n                    </div>\n            </div>\n    </div>\n</div>\n<!--\ncol-sm-3\n<div class=\"col-sm-6\">\n        <router-outlet></router-outlet>\n</div>\n-->\n"

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_productService_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/productService/product.service */ "./src/app/model/productService/product.service.ts");



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.products = this.productService.getProducts();
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product/product-list/product-list.component.html"),
            providers: [src_app_model_productService_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]],
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product/product-list/product-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_model_productService_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Practice Projects\CS 701 Rich App Dev\ecommerce\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map