System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
    'use strict';
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
    var core_1, http_1;
    var ChartOfAccountsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ChartOfAccountsService = (function () {
                function ChartOfAccountsService(_http) {
                    this.http = _http;
                }
                ChartOfAccountsService.prototype.getAccounts = function () {
                    var data = new wijmo.collections.ObservableArray();
                    var url = "http://api.accountico.io/api/MstAccount";
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.get(url, options)
                        .subscribe(function (response) {
                        for (var key in response.json()) {
                            if (response.json().hasOwnProperty(key)) {
                                data.push({
                                    id: response.json()[key].Id,
                                    accountCode: response.json()[key].AccountCode,
                                    account: response.json()[key].Account
                                });
                            }
                        }
                    }, function (error) {
                        alert(error.text());
                        console.log(error.text());
                    });
                    return data;
                };
                ChartOfAccountsService.prototype.getAccountCategories = function () {
                    var data = new wijmo.collections.ObservableArray();
                    var url = "http://api.accountico.io/api/MstAccountCategory";
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.get(url, options)
                        .subscribe(function (response) {
                        for (var key in response.json()) {
                            if (response.json().hasOwnProperty(key)) {
                                data.push({
                                    id: response.json()[key].Id,
                                    accountCategoryCode: response.json()[key].AccountCategoryCode,
                                    accountCategory: response.json()[key].AccountCategory
                                });
                            }
                        }
                    }, function (error) {
                        alert(error.text());
                        console.log(error.text());
                    });
                    return data;
                };
                ChartOfAccountsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ChartOfAccountsService);
                return ChartOfAccountsService;
            }());
            exports_1("ChartOfAccountsService", ChartOfAccountsService);
        }
    }
});
//# sourceMappingURL=ChartOfAccountsService.js.map