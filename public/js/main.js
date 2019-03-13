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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <span>Projeto: Laravel + Angular</span>\r\n</mat-toolbar>\r\n\r\n<mat-divider></mat-divider>\r\n\r\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"space-around stretch\"> \r\n    <app-post *ngFor=\"let p of posts\" [post]=\"p\"></app-post>\r\n</div>\r\n\r\n<button mat-fab color=\"primary\" class=\"float-button\" (click)=\"openDialog()\">\r\n\t<mat-icon>add</mat-icon>\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".float-button {\n  position: fixed;\n  bottom: 40px;\n  right: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtdXJpbFxcRG9jdW1lbnRzXFxFU1RVRE9cXExBUkFWRUxcXGxhcl9hbmd1bGFyXFxyZXNvdXJjZXNcXGFzc2V0c1xcbWV1YXBwL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbG9hdC1idXR0b24ge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRib3R0b206IDQwcHg7XHJcblx0cmlnaHQ6IDQwcHg7XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-dialog/post-dialog.component */ "./src/app/post-dialog/post-dialog.component.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post.service */ "./src/app/post.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(dialog, postService) {
        this.dialog = dialog;
        this.postService = postService;
        this.title = 'meuapp';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.posts = this.postService.posts;
    };
    AppComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_3__["PostDialogComponent"], {
            width: '600px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.postService.salvar(result.post, result.arquivo);
            }
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./post-dialog/post-dialog.component */ "./src/app/post-dialog/post-dialog.component.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./post.service */ "./src/app/post.service.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_18__["PostComponent"],
                _post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_19__["PostDialogComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__["MatBadgeModule"],
            ],
            providers: [
                _post_service__WEBPACK_IMPORTED_MODULE_20__["PostService"]
            ],
            entryComponents: [
                _post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_19__["PostDialogComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/post-dialog/post-dialog.component.html":
/*!********************************************************!*\
  !*** ./src/app/post-dialog/post-dialog.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-around left\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n    <mat-form-field fxFlex=\"50\">\n      <input matInput placeholder=\"Seu nome\" [(ngModel)]=\"dados.post.nome\">\n      <mat-hint>Digite aqui seu nome</mat-hint>\n    </mat-form-field> \n\n    <mat-form-field fxFlex=\"40\">\n      <input matInput placeholder=\"Seu E-mail\" [(ngModel)]=\"dados.post.email\">\n      <mat-hint>Digite aqui seu E-mail</mat-hint>\n    </mat-form-field> \n  </div>\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n    <mat-form-field fxFlex=\"50\">\n      <input matInput placeholder=\"Titulo da mensagem\" [(ngModel)]=\"dados.post.titulo\">\n    </mat-form-field> \n\n    <mat-form-field fxFlex=\"40\">\n      <input matInput placeholder=\"Subtitulo da mensagem\" [(ngModel)]=\"dados.post.subtitulo\">\n    </mat-form-field> \n  </div>\n  <mat-form-field>\n    <textarea matInput placeholder=\"Deixe aqui sua mensagem\" [(ngModel)]=\"dados.post.mensagem\"></textarea>\n  </mat-form-field>\n</div>\n\n<input type=\"file\" style=\"display: none;\" \n  (change)=\"mudouarquivo($event)\" #fileinput>\n\n<button mat-stroked-button color=\"primary\" (click)=\"fileinput.click()\">\n  <mat-icon>add_a_photo</mat-icon>\n  Adicionar uma foto\n</button>\n\n<p *ngIf=\"nomearquivo!=''\"><strong>Arquivo: </strong>{{nomearquivo}}\n  <mat-icon color=\"primary\">done</mat-icon>\n</p>\n\n<div style=\"text-align: center;\">\n  <button mat-button color=\"primary\" (click)=\"salvar()\">Ok</button>\n  <button mat-button color=\"warn\" (click)=\"cancelar()\">Cancelar</button>\n</div>"

/***/ }),

/***/ "./src/app/post-dialog/post-dialog.component.scss":
/*!********************************************************!*\
  !*** ./src/app/post-dialog/post-dialog.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtZGlhbG9nL3Bvc3QtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/post-dialog/post-dialog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/post-dialog/post-dialog.component.ts ***!
  \******************************************************/
/*! exports provided: PostDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDialogComponent", function() { return PostDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post */ "./src/app/post.ts");




var PostDialogComponent = /** @class */ (function () {
    function PostDialogComponent(dialogref) {
        this.dialogref = dialogref;
        this.nomearquivo = '';
        this.dados = {
            post: new _post__WEBPACK_IMPORTED_MODULE_3__["Post"]("", "", "", "", "", ""),
            arquivo: null
        };
    }
    PostDialogComponent.prototype.ngOnInit = function () {
    };
    PostDialogComponent.prototype.mudouarquivo = function (event) {
        //console.log(event.target.files[0]);
        this.nomearquivo = event.target.files[0].name;
        this.dados.arquivo = event.target.files[0];
    };
    PostDialogComponent.prototype.salvar = function () {
        this.dialogref.close(this.dados);
    };
    PostDialogComponent.prototype.cancelar = function () {
        this.dialogref.close(null);
    };
    PostDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-dialog',
            template: __webpack_require__(/*! ./post-dialog.component.html */ "./src/app/post-dialog/post-dialog.component.html"),
            styles: [__webpack_require__(/*! ./post-dialog.component.scss */ "./src/app/post-dialog/post-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], PostDialogComponent);
    return PostDialogComponent;
}());



/***/ }),

/***/ "./src/app/post.service.ts":
/*!*********************************!*\
  !*** ./src/app/post.service.ts ***!
  \*********************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./src/app/post.ts");




var PostService = /** @class */ (function () {
    function PostService(http) {
        var _this = this;
        this.http = http;
        this.posts = [
            new _post__WEBPACK_IMPORTED_MODULE_3__["Post"]("joao", "Meu post", "Sub joao", "Joao@gmail.com", "minha mensagem"),
            new _post__WEBPACK_IMPORTED_MODULE_3__["Post"]("joao", "Meu post", "Sub joao", "Joao@gmail.com", "minha mensagem"),
            new _post__WEBPACK_IMPORTED_MODULE_3__["Post"]("joao", "Meu post", "Sub joao", "Joao@gmail.com", "minha mensagem"),
            new _post__WEBPACK_IMPORTED_MODULE_3__["Post"]("joao", "Meu post", "Sub joao", "Joao@gmail.com", "minha mensagem"),
            new _post__WEBPACK_IMPORTED_MODULE_3__["Post"]("joao", "Meu post", "Sub joao", "Joao@gmail.com", "minha mensagem"),
            new _post__WEBPACK_IMPORTED_MODULE_3__["Post"]("joao", "Meu post", "Sub joao", "Joao@gmail.com", "minha mensagem"),
            new _post__WEBPACK_IMPORTED_MODULE_3__["Post"]("joao", "Meu post", "Sub joao", "Joao@gmail.com", "minha mensagem"),
            new _post__WEBPACK_IMPORTED_MODULE_3__["Post"]("joao", "Meu post", "Sub joao", "Joao@gmail.com", "minha mensagem"),
        ];
        this.http.get("/api/").subscribe(function (posts) {
            for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
                var p = posts_1[_i];
                _this.posts.push(new _post__WEBPACK_IMPORTED_MODULE_3__["Post"](p.nome, p.titulo, p.subtitulo, p.email, p.mensagem, p.arquivo, p.id, p.likes));
            }
        });
    }
    PostService.prototype.salvar = function (post, file) {
        var uploadData = new FormData();
        uploadData.append('nome', post.nome);
        uploadData.append('email', post.email);
        uploadData.append('titulo', post.titulo);
        uploadData.append('subtitulo', post.subtitulo);
        uploadData.append('mensagem', post.mensagem);
        uploadData.append('arquivo', post.arquivo);
        this.http.post("/api", uploadData, { reportProgress: true, observe: 'events' })
            .subscribe(function (event) {
            if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response) {
                console.log(event);
            }
            if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                console.log('UploadProgress');
                console.log(event);
            }
        });
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/post.ts":
/*!*************************!*\
  !*** ./src/app/post.ts ***!
  \*************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    function Post(nome, titulo, subtitulo, email, mensagem, arquivo, id, likes) {
        this.nome = nome;
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.email = email;
        this.mensagem = mensagem;
        this.arquivo = arquivo;
        this.id = id;
        this.likes = likes;
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\n  <mat-card-header>\n    <div mat-card-avatar></div>\n    <mat-card-title>{{post.titulo}}</mat-card-title>\n    <mat-card-subtitle>{{post.subtitulo}}</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      {{post.mensagem}}\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/post/post.component.scss":
/*!******************************************!*\
  !*** ./src/app/post/post.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  max-width: 300px;\n  margin: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9DOlxcVXNlcnNcXG11cmlsXFxEb2N1bWVudHNcXEVTVFVET1xcTEFSQVZFTFxcbGFyX2FuZ3VsYXJcXHJlc291cmNlc1xcYXNzZXRzXFxtZXVhcHAvc3JjXFxhcHBcXHBvc3RcXHBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogMTJweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post */ "./src/app/post.ts");



var PostComponent = /** @class */ (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _post__WEBPACK_IMPORTED_MODULE_2__["Post"])
    ], PostComponent.prototype, "post", void 0);
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.scss */ "./src/app/post/post.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
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

module.exports = __webpack_require__(/*! C:\Users\muril\Documents\ESTUDO\LARAVEL\lar_angular\resources\assets\meuapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map