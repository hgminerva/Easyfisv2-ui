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
    var JVService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            JVService = (function () {
                function JVService(_http) {
                    this.http = _http;
                }
                JVService.prototype.convertDateToString = function (date) {
                    var yyyy = date.getFullYear().toString();
                    var mm = (date.getMonth() + 1).toString();
                    var dd = date.getDate().toString();
                    return yyyy + '-' + (mm[1] ? mm : "0" + mm[0]) + '-' + (dd[1] ? dd : "0" + dd[0]);
                };
                JVService.prototype.getJVList = function (component) {
                    var _this = this;
                    var branchId = localStorage.getItem('branchId');
                    var data = new wijmo.collections.ObservableArray();
                    var url = "http://api.accountico.io/api/TrnJournalVoucher/List?startDate=" + this.convertDateToString(component.startDate) + "&" +
                        "endDate=" + this.convertDateToString(component.endDate) + "&" +
                        "branchId=" + branchId;
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.get(url, options)
                        .subscribe(function (response) {
                        for (var key in response.json()) {
                            if (response.json().hasOwnProperty(key)) {
                                data.push({
                                    id: response.json()[key].Id,
                                    branchId: response.json()[key].BranchId,
                                    branch: response.json()[key].Branch,
                                    jvNumber: response.json()[key].JVNumber,
                                    jvDate: response.json()[key].JVDate,
                                    jvDateToString: _this.convertDateToString(new Date(response.json()[key].JVDate)),
                                    particulars: response.json()[key].Particulars,
                                    manualJVNumber: response.json()[key].ManualJVNumber,
                                    preparedById: response.json()[key].PreparedById,
                                    preparedBy: response.json()[key].PreparedBy,
                                    checkedById: response.json()[key].CheckedById,
                                    checkedBy: response.json()[key].CheckedBy,
                                    approvedById: response.json()[key].ApprovedById,
                                    approvedBy: response.json()[key].ApprovedBy,
                                    isLocked: response.json()[key].IsLocked,
                                    createdById: response.json()[key].CreatedById,
                                    createdDateTime: response.json()[key].CreatedDateTime,
                                    updatedById: response.json()[key].UpdatedById,
                                    updatedDateTime: response.json()[key].UpdatedDateTime
                                });
                            }
                        }
                    }, function (error) {
                        component._toastr.error('Get Error', '');
                    });
                    return data;
                };
                JVService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], JVService);
                return JVService;
            }());
            exports_1("JVService", JVService);
        }
    }
});
//# sourceMappingURL=jvService.js.map