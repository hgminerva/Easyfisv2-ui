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
                // =======
                // ACCOUNT
                // =======
                ChartOfAccountsService.prototype.getAccounts = function (component) {
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
                                    account: response.json()[key].Account,
                                    accountTypeId: response.json()[key].AccountTypeId,
                                    accountType: response.json()[key].AccountType,
                                    accountCashFlowId: response.json()[key].AccountCashFlowId,
                                    accountCashFlow: response.json()[key].AccountCashFlow
                                });
                            }
                        }
                    }, function (error) {
                        component.toastr.error('Get Error', '');
                    });
                    return data;
                };
                ChartOfAccountsService.prototype.addAccount = function (data, component) {
                    var url = "http://api.accountico.io/api/MstAccount";
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    headers.append('Content-Type', 'application/json');
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.post(url, JSON.stringify(data), options)
                        .subscribe(function (response) {
                        if (response.status == 200) {
                            component.createAccountCollection();
                            component.toastr.success('Save Successfull', '');
                        }
                        else {
                            component.toastr.error('Save Error', '');
                        }
                    });
                    ;
                };
                ChartOfAccountsService.prototype.updateAccount = function (data, component) {
                    var url = "http://api.accountico.io/api/MstAccount/" + data.Id;
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    headers.append('Content-Type', 'application/json');
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.put(url, JSON.stringify(data), options)
                        .subscribe(function (response) {
                        if (response.status == 200) {
                            component.createAccountCollection();
                            component.toastr.success('Update Successfull', '');
                        }
                        else {
                            component.toastr.error('Update Error', '');
                        }
                    });
                    ;
                };
                ChartOfAccountsService.prototype.deleteAccount = function (data, component) {
                    var id = data.id;
                    var url = "http://api.accountico.io/api/MstAccount/" + id;
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.delete(url, options)
                        .subscribe(function (response) {
                        if (response.status == 200) {
                            component.collectionAccount.remove(data);
                            component.toastr.success('Delete Successfull', '');
                        }
                        else {
                            component.toastr.error('Delete Error', '');
                        }
                    });
                    ;
                };
                // ============
                // ACCOUNT TYPE
                // ============
                ChartOfAccountsService.prototype.getAccountTypes = function (component) {
                    var data = new wijmo.collections.ObservableArray();
                    var url = "http://api.accountico.io/api/MstAccountType";
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.get(url, options)
                        .subscribe(function (response) {
                        for (var key in response.json()) {
                            if (response.json().hasOwnProperty(key)) {
                                data.push({
                                    id: response.json()[key].Id,
                                    accountTypeCode: response.json()[key].AccountTypeCode,
                                    accountType: response.json()[key].AccountType,
                                    accountCategoryId: response.json()[key].AccountCategoryId,
                                    accountCategory: response.json()[key].AccountCategory,
                                    subCategoryDescription: response.json()[key].SubCategoryDescription
                                });
                            }
                        }
                    }, function (error) {
                        component.toastr.error('Get Error', '');
                    });
                    return data;
                };
                ChartOfAccountsService.prototype.addAccountType = function (data, component) {
                    var url = "http://api.accountico.io/api/MstAccountType";
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    headers.append('Content-Type', 'application/json');
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.post(url, JSON.stringify(data), options)
                        .subscribe(function (response) {
                        if (response.status == 200) {
                            component.createAccountTypeCollection();
                            component.toastr.success('Save Successfull', '');
                        }
                        else {
                            component.toastr.error('Save Error', '');
                        }
                    });
                    ;
                };
                ChartOfAccountsService.prototype.updateAccountType = function (data, component) {
                    var url = "http://api.accountico.io/api/MstAccountType/" + data.Id;
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    headers.append('Content-Type', 'application/json');
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.put(url, JSON.stringify(data), options)
                        .subscribe(function (response) {
                        if (response.status == 200) {
                            component.createAccountTypeCollection();
                            component.toastr.success('Update Successfull', '');
                        }
                        else {
                            component.toastr.error('Update Error', '');
                        }
                    });
                    ;
                };
                ChartOfAccountsService.prototype.deleteAccountType = function (data, component) {
                    var id = data.id;
                    var url = "http://api.accountico.io/api/MstAccountType/" + id;
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.delete(url, options)
                        .subscribe(function (response) {
                        if (response.status == 200) {
                            component.collectionAccountType.remove(data);
                            component.toastr.success('Delete Successfull', '');
                        }
                        else {
                            component.toastr.error('Delete Error', '');
                        }
                    });
                    ;
                };
                // ================
                // ACCOUNT CATEGORY
                // ================            
                ChartOfAccountsService.prototype.getAccountCategories = function (component) {
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
                        component.toastr.error('Get Error', '');
                    });
                    return data;
                };
                ChartOfAccountsService.prototype.addAccountCategory = function (data, component) {
                    var url = "http://api.accountico.io/api/MstAccountCategory";
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    headers.append('Content-Type', 'application/json');
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.post(url, JSON.stringify(data), options)
                        .subscribe(function (response) {
                        if (response.status == 200) {
                            component.createAccountCategoryCollection();
                            component.toastr.success('Save Successfull', '');
                        }
                        else {
                            component.toastr.error('Save Error', '');
                        }
                    });
                    ;
                };
                ChartOfAccountsService.prototype.updateAccountCategory = function (data, component) {
                    var url = "http://api.accountico.io/api/MstAccountCategory/" + data.Id;
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    headers.append('Content-Type', 'application/json');
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.put(url, JSON.stringify(data), options)
                        .subscribe(function (response) {
                        if (response.status == 200) {
                            component.createAccountCategoryCollection();
                            component.toastr.success('Update Successfull', '');
                        }
                        else {
                            component.toastr.error('Update Error', '');
                        }
                    });
                    ;
                };
                ChartOfAccountsService.prototype.deleteAccountCategory = function (data, component) {
                    var id = data.id;
                    var url = "http://api.accountico.io/api/MstAccountCategory/" + id;
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.delete(url, options)
                        .subscribe(function (response) {
                        if (response.status == 200) {
                            component.collectionAccountCategory.remove(data);
                            component.toastr.success('Delete Successfull', '');
                        }
                        else {
                            component.toastr.error('Delete Error', '');
                        }
                    });
                    ;
                };
                // =========
                // CASH FLOW 
                // =========
                ChartOfAccountsService.prototype.getAccountCashFlow = function (component) {
                    var data = new wijmo.collections.ObservableArray();
                    var url = "http://api.accountico.io/api/MstAccountCashFlow";
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.get(url, options)
                        .subscribe(function (response) {
                        for (var key in response.json()) {
                            if (response.json().hasOwnProperty(key)) {
                                data.push({
                                    id: response.json()[key].Id,
                                    accountCashFlowCode: response.json()[key].AccountCashFlowCode,
                                    accountCashFlow: response.json()[key].AccountCashFlow
                                });
                            }
                        }
                    }, function (error) {
                        component.toastr.error('Get Error', '');
                    });
                    return data;
                };
                ChartOfAccountsService.prototype.addAccountCashFlow = function (data, component) {
                    var url = "http://api.accountico.io/api/MstAccountCashFlow";
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    headers.append('Content-Type', 'application/json');
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.post(url, JSON.stringify(data), options)
                        .subscribe(function (response) {
                        if (response.status == 200) {
                            component.createAccountCashFlowCollection();
                            component.toastr.success('Save Successfull', '');
                        }
                        else {
                            component.toastr.error('Save Error', '');
                        }
                    });
                    ;
                };
                ChartOfAccountsService.prototype.updateAccountCashFlow = function (data, component) {
                    var url = "http://api.accountico.io/api/MstAccountCashFlow/" + data.Id;
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    headers.append('Content-Type', 'application/json');
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.put(url, JSON.stringify(data), options)
                        .subscribe(function (response) {
                        if (response.status == 200) {
                            component.createAccountCashFlowCollection();
                            component.toastr.success('Update Successfull', '');
                        }
                        else {
                            component.toastr.error('Update Error', '');
                        }
                    });
                    ;
                };
                ChartOfAccountsService.prototype.deleteAccountCashFlow = function (data, component) {
                    var id = data.id;
                    var url = "http://api.accountico.io/api/MstAccountCashFlow/" + id;
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.delete(url, options)
                        .subscribe(function (response) {
                        if (response.status == 200) {
                            component.collectionAccountCashFlow.remove(data);
                            component.toastr.success('Delete Successfull', '');
                        }
                        else {
                            component.toastr.error('Delete Error', '');
                        }
                    });
                    ;
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