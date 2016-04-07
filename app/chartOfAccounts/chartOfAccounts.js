System.register(['angular2/core', 'angular2/router', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input', '../chartOfAccounts/chartOfAccountsTabs', '../chartOfAccounts/chartOfAccountsTab', '../chartOfAccounts/ChartOfAccountsService'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1, wjNg2FlexGrid, wjNg2Input, chartOfAccountsTabs_1, chartOfAccountsTab_1, ChartOfAccountsService_1;
    var ChartOfAccountsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (wjNg2FlexGrid_1) {
                wjNg2FlexGrid = wjNg2FlexGrid_1;
            },
            function (wjNg2Input_1) {
                wjNg2Input = wjNg2Input_1;
            },
            function (chartOfAccountsTabs_1_1) {
                chartOfAccountsTabs_1 = chartOfAccountsTabs_1_1;
            },
            function (chartOfAccountsTab_1_1) {
                chartOfAccountsTab_1 = chartOfAccountsTab_1_1;
            },
            function (ChartOfAccountsService_1_1) {
                ChartOfAccountsService_1 = ChartOfAccountsService_1_1;
            }],
        execute: function() {
            ChartOfAccountsComponent = (function () {
                function ChartOfAccountsComponent(_router, _chartOfAccountsService) {
                    this.router = _router;
                    this.chartOfAccountsService = _chartOfAccountsService;
                }
                ChartOfAccountsComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                        this.router.navigate(['Login']);
                    }
                    else {
                        this.dataAccount = new wijmo.collections.CollectionView(this.chartOfAccountsService.getAccounts());
                        this.dataAccount.pageSize = 10;
                        this.dataAccount.trackChanges = true;
                        this.dataAccountType = new wijmo.collections.CollectionView(this.chartOfAccountsService.getAccountTypes());
                        this.dataAccountType.pageSize = 10;
                        this.dataAccountType.trackChanges = true;
                        this.dataAccountCategory = new wijmo.collections.CollectionView(this.chartOfAccountsService.getAccountCategories());
                        this.dataAccountCategory.pageSize = 10;
                        this.dataAccountCategory.trackChanges = true;
                        this.dataAccountCashFlow = new wijmo.collections.CollectionView(this.chartOfAccountsService.getAccountCashFlow());
                        this.dataAccountCashFlow.pageSize = 10;
                        this.dataAccountCashFlow.trackChanges = true;
                    }
                };
                ChartOfAccountsComponent.prototype.refresh = function () {
                    this.dataAccount.refresh();
                    this.dataAccountType.refresh();
                    this.dataAccountCategory.refresh();
                    this.dataAccountCashFlow.refresh();
                };
                // ACCOUNT
                ChartOfAccountsComponent.prototype.openAccountModal = function (add) {
                    document.getElementById("openAccountModal").click();
                    if (add == true) {
                        this.accountCodeMem1 = "";
                        this.accountMem1 = "";
                    }
                    else {
                        this.accountCodeMem1 = this.dataAccount.currentItem.accountCode;
                        this.accountMem1 = this.dataAccount.currentItem.account;
                        this.dataAccountType.moveCurrentToFirst();
                        this.dataAccountCashFlow.moveCurrentToFirst();
                    }
                };
                ChartOfAccountsComponent.prototype.delAccount = function () {
                    document.getElementById("openDelAccountModal").click();
                    this.accountMem1 = this.dataAccount.currentItem.account;
                };
                // ACCOUNT TYPE
                ChartOfAccountsComponent.prototype.openAccountTypeModal = function (add) {
                    document.getElementById("openAccountTypeModal").click();
                    if (add == true) {
                        this.accountTypeCodeMem3 = "";
                        this.accountTypeMem3 = "";
                        this.subCategoryDescriptionMem3 = "";
                    }
                    else {
                        this.accountTypeCodeMem3 = this.dataAccountType.currentItem.accountTypeCode;
                        this.accountTypeMem3 = this.dataAccountType.currentItem.accountType;
                        this.subCategoryDescriptionMem3 = this.dataAccountType.currentItem.subCategoryDescription;
                        this.dataAccountCategory.moveCurrentToFirst();
                    }
                };
                ChartOfAccountsComponent.prototype.delAccountType = function () {
                    document.getElementById("openDelAccountTypeModal").click();
                    this.accountTypeMem3 = this.dataAccountType.currentItem.accountType;
                };
                // ACCOUNT CATEGORY
                ChartOfAccountsComponent.prototype.openAccountCategoryModal = function (add) {
                    document.getElementById("openAccountCategoryModal").click();
                    if (add == true) {
                        this.accountCategoryCodeMem2 = "";
                        this.accountCategoryMem2 = "";
                    }
                    else {
                        this.accountCategoryCodeMem2 = this.dataAccountCategory.currentItem.accountCategoryCode;
                        this.accountCategoryMem2 = this.dataAccountCategory.currentItem.accountCategory;
                    }
                };
                ChartOfAccountsComponent.prototype.delAccountCategory = function () {
                    document.getElementById("openDelAccountCategoryModal").click();
                    this.accountCategoryMem2 = this.dataAccountCategory.currentItem.accountCategory;
                };
                // CASH FLOW 
                ChartOfAccountsComponent.prototype.openAccountCashFlowModal = function (add) {
                    document.getElementById("openAccountCashFlowModal").click();
                    if (add == true) {
                        this.accountCashFlowCodeMem4 = "";
                        this.accountCashFlowMem4 = "";
                    }
                    else {
                        this.accountCashFlowCodeMem4 = this.dataAccountCashFlow.currentItem.accountCashFlowCode;
                        this.accountCashFlowMem4 = this.dataAccountCashFlow.currentItem.accountCashFlow;
                    }
                };
                ChartOfAccountsComponent.prototype.delAccountCashFlow = function () {
                    document.getElementById("openDelAccountCashFlowModal").click();
                    this.accountCashFlowMem4 = this.dataAccountCashFlow.currentItem.accountCashFlow;
                };
                ChartOfAccountsComponent = __decorate([
                    core_1.Component({
                        selector: 'chartOfAccounts',
                        templateUrl: 'app/chartOfAccounts/chartOfAccounts.html',
                        directives: [wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjComboBox,
                            chartOfAccountsTabs_1.ChartOfAccountsTabs,
                            chartOfAccountsTab_1.ChartOfAccountsTab],
                        providers: [ChartOfAccountsService_1.ChartOfAccountsService]
                    }),
                    __param(1, core_1.Inject(ChartOfAccountsService_1.ChartOfAccountsService)), 
                    __metadata('design:paramtypes', [router_1.Router, ChartOfAccountsService_1.ChartOfAccountsService])
                ], ChartOfAccountsComponent);
                return ChartOfAccountsComponent;
            }());
            exports_1("ChartOfAccountsComponent", ChartOfAccountsComponent);
        }
    }
});
//# sourceMappingURL=chartOfAccounts.js.map