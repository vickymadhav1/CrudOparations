webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    margin: 0;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n  }\r\n  \r\n  .topnav {\r\n    overflow: hidden;\r\n    background-color: #333;\r\n  }\r\n  \r\n  .topnav a {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n  \r\n  .topnav a:hover {\r\n    background-color: #ddd;\r\n    color: rgb(8, 123, 218);\r\n  }\r\n  \r\n  .topnav a.active {\r\n    background-color: rgb(176, 218, 25);\r\n    color: white;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"topnav\">\r\n    <a routerLink='api/signup'>SignUp</a>\r\n    <a routerLink='api/signin'>SignIn</a>\r\n  </div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signin_signin_component__ = __webpack_require__("../../../../../src/app/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__getdata_getdata_component__ = __webpack_require__("../../../../../src/app/getdata/getdata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_6__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_7__getdata_getdata_component__["a" /* GetdataComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot([{ path: 'api/signup', component: __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */] },
                    { path: 'api/signin', component: __WEBPACK_IMPORTED_MODULE_6__signin_signin_component__["a" /* SigninComponent */] },
                    { path: 'api/data', component: __WEBPACK_IMPORTED_MODULE_7__getdata_getdata_component__["a" /* GetdataComponent */] }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/getdata/getdata.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/getdata/getdata.component.html":
/***/ (function(module, exports) {

module.exports = "  <html>\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n</head>\n<body>\n<div class=\"container\">\n  <div *ngIf=\"update\" >\n    <input type=\"text\" name=\"name\" [(ngModel)]=datatobeedited.name >\n    <input type=\"text\" name=\"email\" [(ngModel)]=datatobeedited.email ngModel>\n    \n    <button (click)='saveUpdate(datatobeedited)' type=\"button\" class=\"btn btn-sm btn-info\">save</button>\n  </div>\n\n\n\n\n<br>\n  <br>\n  <table class=\"table\" bgcolor=\"#9932CC\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Email</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor='let i of test; let in=index'  class=\"success\">\n        <td>{{i.name}}</td>\n        <td>{{i.email}}</td><button (click)='deleteData(i.name,in)' type=\"button\" class=\"btn btn-large btn-danger\">Delete</button>\n        <!-- <button type=\"submit\" (click)='editData(i,in)'>Edit</button> -->\n        <button (click)='editData(i,in)' type=\"button\" class=\"btn btn-large btn-info\">Edit</button>\n \n      </tr>\n    </tbody>\n  </table>\n</div>\n\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/getdata/getdata.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetdataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mydata_service__ = __webpack_require__("../../../../../src/app/mydata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetdataComponent = /** @class */ (function () {
    function GetdataComponent(_mydataService, _http) {
        this._mydataService = _mydataService;
        this._http = _http;
        this.update = false;
    }
    GetdataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._mydataService.getData().subscribe(function (testData) { return _this.test = testData; });
    };
    GetdataComponent.prototype.deleteData = function (name, x) {
        var _this = this;
        console.log(name);
        this._mydataService.deleteData(name).subscribe(function (testData) { return _this.test = testData; });
    };
    GetdataComponent.prototype.editData = function (i) {
        this.update = true;
        this.datatobeedited = i;
        console.log("obj is" + this.datatobeedited.name);
    };
    GetdataComponent.prototype.saveUpdate = function (datatobesaved) {
        console.log("datatobesaved" + datatobesaved.name);
        console.log("datatobesaved" + datatobesaved.name + '' +
            ' ' + datatobesaved.email);
        var _url = "http://localhost:3000/api/data" + "/" + datatobesaved._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this._http.put(_url, datatobesaved, options)
            .subscribe(function (data) {
            alert('saved Successfully');
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    GetdataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-getdata',
            template: __webpack_require__("../../../../../src/app/getdata/getdata.component.html"),
            styles: [__webpack_require__("../../../../../src/app/getdata/getdata.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__mydata_service__["a" /* MydataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__mydata_service__["a" /* MydataService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], GetdataComponent);
    return GetdataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mydata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MydataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MydataService = /** @class */ (function () {
    function MydataService(_http) {
        this._http = _http;
        this.url1 = "http://localhost:3000/api/data";
        this._url = "http://localhost:3000/api/data";
    }
    MydataService.prototype.getData = function () {
        return this._http.get(this._url)
            .map(function (response) { return response.json(); });
    };
    MydataService.prototype.deleteData = function (name) {
        return this._http.delete(this.url1 + "/" + name)
            .map(function (response) { {
            return response.json();
        } });
    };
    MydataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MydataService);
    return MydataService;
}());



/***/ }),

/***/ "../../../../../src/app/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Bordered form */\r\nform {\r\n    border: 3px solid #f1f1f1;\r\n    background-color: #ff99cc;\r\n}\r\n/* Full-width inputs */\r\ninput[type=text], input[type=password] {\r\n    width: 30%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n/* Set a style for all buttons */\r\ninput[type=submit]{\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 30%;\r\n}\r\n/* Add a hover effect for buttons */\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n/* Extra style for the cancel button (red) */\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n/* Center the avatar image inside this container */\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n/* Avatar image */\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n/* Add padding to containers */\r\n.container {\r\n    padding: 16px;\r\n}\r\n/* The \"Forgot password\" text */\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n        display: block;\r\n        float: none;\r\n    }\r\n    .cancelbtn {\r\n        width: 10%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "  <form align=\"center\" #formRef='ngForm' (ngSubmit)='onSubmit(formRef.value)'>\n    <div class=\"container\">\n      <label for=\"username\"><b>Username</b></label>\n      <input type=\"text\" placeholder=\"Enter Username\" #usernameRef='ngModel' name=\"username\" required ngModel><br>\n  \n      <label for=\"password\"><b>Password</b></label>\n      <input type=\"password\" placeholder=\"Enter Password\" #passwordRef='ngModel' name=\"password\" required ngModel>\n  <br>\n        <pre>          <input type=\"submit\" value='SignIn'></pre>\n     \n    </div>\n  \n    \n  </form>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = /** @class */ (function () {
    function SigninComponent(_http, router) {
        this._http = _http;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSubmit = function (a) {
        var _this = this;
        this.username = a.username;
        this.password = a.password;
        console.log(this.username + "   " + this.password);
        // console.log(a);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this._http.post('/api/signin', a, options)
            .subscribe(function (data) {
            alert("success");
            _this.router.navigate(['api/data']);
        }, function (error) {
            alert("invalid user");
            // console.log(JSON.stringify(error.json()));
        });
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {font-family: Arial, Helvetica, sans-serif;\r\n    \r\n    background-color: #ff99cc;\r\n    }\r\n* {-webkit-box-sizing: border-box;box-sizing: border-box}\r\n/* Full-width input fields */\r\ninput[type=text], input[type=password] {\r\n    width: 30%;\r\n    padding: 15px;\r\n    margin: 5px 0 22px 0;\r\n    display: inline-block;\r\n    border: none;\r\n    background: #f1f1f1;\r\n}\r\ninput[type=text]:focus, input[type=password]:focus {\r\n    background-color: #ddd;\r\n    outline: none;\r\n}\r\nhr {\r\n    border: 1px solid #f1f1f1;\r\n    margin-bottom: 25px;\r\n}\r\n/* Set a style for all buttons */\r\ninput[type=submit] {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 30%;\r\n    opacity: 0.9;\r\n}\r\nbutton:hover {\r\n    opacity:1;\r\n}\r\n/* Extra styles for the cancel button */\r\n.cancelbtn {\r\n    padding: 14px 20px;\r\n    background-color: #f44336;\r\n}\r\n/* Float cancel and signup buttons and add an equal width */\r\n.cancelbtn, .signupbtn {\r\n  float: left;\r\n  width: 50%;\r\n}\r\n/* Add padding to container elements */\r\n.container {\r\n    padding: 16px;\r\n}\r\n/* Clear floats */\r\n.clearfix::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    .cancelbtn, .signupbtn {\r\n       width: 10%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<form align =\"center\">\n<body>\n<form #formRef='ngForm' (ngSubmit)='onSubmit(formRef.value)' style=\"border:1px solid #ccc\" >\n  <div class=\"container\">\n    <h1>Sign Up</h1>\n    <p>Please fill in this form to create an account.</p>\n    <hr>\n    <label for=\"email\"><b>Name</b></label><br>\n    <input type=\"text\" placeholder=\"Enter Name\" #nameRef='ngModel' name=\"name\" required ngModel>\n<br>\n    <label for=\"email\"><b>Email</b></label><br>\n    <input type=\"text\" placeholder=\"Enter Email\" #emailRef='ngModel' name=\"email\" required ngModel>\n    <br>\n    <label for=\"email\"><b>Username</b></label><br>\n    <input type=\"text\" placeholder=\"Enter Username\" #emailRef='ngModel' name=\"username\" required ngModel>\n    <br>\n    <label for=\"password\"><b>Password</b></label><br>\n    <input type=\"password\" placeholder=\"Enter Password\" name=\"password\"required ngModel>\n   <br>\n    <p>By creating an account you agree to our <a href=\"#\" style=\"color:dodgerblue\">Terms & Privacy</a>.</p>\n\n    <div class=\"clearfix\">\n     <br>\n      <input type=\"submit\" class=\"signupbtn\" value='Sign Up'>\n    </div>\n  </div>\n</form>\n</body>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(_http, router) {
        this._http = _http;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSubmit = function (a) {
        var _this = this;
        this.name = a.name;
        this.email = a.email;
        this.username = a.username;
        this.password = a.password;
        console.log(this.name);
        console.log(a);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this._http.post('/api/signup', a, options)
            .subscribe(function (data) {
            alert('Registered Successfully');
            _this.router.navigate(['/api/signin']);
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map