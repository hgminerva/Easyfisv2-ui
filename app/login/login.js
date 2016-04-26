System.register(['angular2/core', 'angular2/http', 'angular2/router', 'ng2-toastr/ng2-toastr'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, ng2_toastr_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_toastr_1_1) {
                ng2_toastr_1 = ng2_toastr_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_router, _http, _toastr) {
                    this._router = _router;
                    this._http = _http;
                    this._toastr = _toastr;
                    this.title = 'Login';
                }
                LoginComponent.prototype.login = function (event, username, password) {
                    var _this = this;
                    event.preventDefault();
                    var url = "http://api.accountico.io/token";
                    var body = "username=" + username + "&password=" + password + "&grant_type=password";
                    var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this._http.post(url, body, options).subscribe(function (response) {
                        localStorage.setItem('access_token', response.json().access_token);
                        localStorage.setItem('expires_in', response.json().expires_in);
                        localStorage.setItem('token_type', response.json().token_type);
                        localStorage.setItem('userName', response.json().userName);
                        _this.setSystemDefaults(response.json().userName);
                    }, function (error) {
                        _this._toastr.error(error.json().error_description);
                        console.log(error.json().error_description);
                    });
                };
                LoginComponent.prototype.setSystemDefaults = function (username) {
                    var _this = this;
                    var data = new wijmo.collections.ObservableArray();
                    var url = "http://api.accountico.io/api/MstUser/Defaults?username=" + username;
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this._http.get(url, options)
                        .subscribe(function (response) {
                        localStorage.setItem('incomeAccountId', response.json().IncomeAccountId);
                        localStorage.setItem('branchId', response.json().BranchId);
                        localStorage.setItem('branch', response.json().Branch);
                        localStorage.setItem('company', response.json().Company);
                        window.location.replace('/dashboard');
                    }, function (error) {
                        _this._toastr.error(error.json().error_description);
                        console.log(error.json().error_description);
                    });
                    return data;
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'app/login/login.html',
                        providers: [
                            http_1.HTTP_PROVIDERS, ng2_toastr_1.ToastsManager
                        ]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http, ng2_toastr_1.ToastsManager])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.js.map