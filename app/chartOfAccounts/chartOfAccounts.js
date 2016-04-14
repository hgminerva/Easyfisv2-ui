System.register(['angular2/core', 'angular2/router', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input', '../chartOfAccounts/chartOfAccountsTabs', '../chartOfAccounts/chartOfAccountsTab', '../chartOfAccounts/ChartOfAccountsService', 'ng2-toastr/ng2-toastr'], function(exports_1, context_1) {
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
    var core_1, router_1, wjNg2FlexGrid, wjNg2Input, chartOfAccountsTabs_1, chartOfAccountsTab_1, ChartOfAccountsService_1, ng2_toastr_1;
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
            },
            function (ng2_toastr_1_1) {
                ng2_toastr_1 = ng2_toastr_1_1;
            }],
        execute: function() {
            ChartOfAccountsComponent = (function () {
                function ChartOfAccountsComponent(_router, _toastr, _chartOfAccountsService) {
                    this.router = _router;
                    this.chartOfAccountsService = _chartOfAccountsService;
                    this.toastr = _toastr;
                }
                ChartOfAccountsComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                        this.router.navigate(['Login']);
                    }
                    else {
                        this.createAccountCollection();
                        this.createAccountTypeCollection();
                        this.createAccountCategoryCollection();
                        this.createAccountCashFlowCollection();
                    }
                };
                ChartOfAccountsComponent.prototype.createAccountCollection = function () {
                    this.dataAccount = this.chartOfAccountsService.getAccounts(this);
                    this.collectionAccount = new wijmo.collections.CollectionView(this.dataAccount);
                    this.collectionAccount.pageSize = 10;
                    this.collectionAccount.trackChanges = true;
                };
                ChartOfAccountsComponent.prototype.createAccountTypeCollection = function () {
                    this.dataAccountType = this.chartOfAccountsService.getAccountTypes(this);
                    this.dataAccountType_Index = 0;
                    this.collectionAccountType = new wijmo.collections.CollectionView(this.dataAccountType);
                    this.collectionAccountType.pageSize = 10;
                    this.collectionAccountType.trackChanges = true;
                };
                ChartOfAccountsComponent.prototype.createAccountCategoryCollection = function () {
                    this.dataAccountCategory = this.chartOfAccountsService.getAccountCategories(this);
                    this.dataAccountCategory_Index = 0;
                    this.collectionAccountCategory = new wijmo.collections.CollectionView(this.dataAccountCategory);
                    this.collectionAccountCategory.pageSize = 10;
                    this.collectionAccountCategory.trackChanges = true;
                };
                ChartOfAccountsComponent.prototype.createAccountCashFlowCollection = function () {
                    this.dataAccountCashFlow = this.chartOfAccountsService.getAccountCashFlow(this);
                    this.dataAccountCashFlow_Index = 0;
                    this.collectionAccountCashFlow = new wijmo.collections.CollectionView(this.dataAccountCashFlow);
                    this.collectionAccountCashFlow.pageSize = 10;
                    this.collectionAccountCashFlow.trackChanges = true;
                };
                ChartOfAccountsComponent.prototype.refresh = function () {
                    this.collectionAccount.refresh();
                    this.collectionAccountType.refresh();
                    this.collectionAccountCategory.refresh();
                    this.collectionAccountCashFlow.refresh();
                };
                ChartOfAccountsComponent.prototype.dataAccountType_Index_Update = function () {
                    if (this.dataAccountType_Index >= 0) {
                        this.accountTypeCodeMem1 = this.dataAccountType[this.dataAccountType_Index].accountTypeCode;
                        this.accountTypeMem1 = this.dataAccountType[this.dataAccountType_Index].accountType;
                    }
                };
                ChartOfAccountsComponent.prototype.dataAccountCashFlow_Index_Update = function () {
                    if (this.dataAccountCashFlow_Index >= 0) {
                        this.accountCashFlowCodeMem1 = this.dataAccountCashFlow[this.dataAccountCashFlow_Index].accountCashFlowCode;
                        this.accountCashFlowMem1 = this.dataAccountCashFlow[this.dataAccountCashFlow_Index].accountCashFlow;
                    }
                };
                ChartOfAccountsComponent.prototype.dataAccountCategory_Index_Update = function () {
                    if (this.dataAccountCategory_Index >= 0) {
                        this.accountCategoryCodeMem3 = this.dataAccountCategory[this.dataAccountCategory_Index].accountCategoryCode;
                        this.accountCategoryMem3 = this.dataAccountCategory[this.dataAccountCategory_Index].accountCategory;
                    }
                };
                // =======
                // ACCOUNT
                // =======
                ChartOfAccountsComponent.prototype.openAccountModal = function (add) {
                    document.getElementById("openAccountModal").click();
                    if (add == true) {
                        this.accountIdMem1 = 0;
                        this.accountCodeMem1 = "";
                        this.accountMem1 = "";
                        this.accountTypeMem1 = "";
                        this.accountTypeCodeMem1 = "";
                        this.dataAccountType_Index = 0;
                        this.accountCashFlowMem1 = "";
                        this.accountCashFlowCodeMem1 = "";
                        this.dataAccountCashFlow_Index = 0;
                    }
                    else {
                        this.accountIdMem1 = this.collectionAccount.currentItem.id;
                        this.accountCodeMem1 = this.collectionAccount.currentItem.accountCode;
                        this.accountMem1 = this.collectionAccount.currentItem.account;
                        for (var i = 0; i < this.dataAccountType.length; i++) {
                            if (this.dataAccountType[i].id == this.collectionAccount.currentItem.accountTypeId) {
                                this.accountTypeCodeMem1 = this.dataAccountType[i].accountTypeCode;
                                this.accountTypeMem1 = this.dataAccountType[i].accountType;
                                this.dataAccountType_Index = i;
                                break;
                            }
                        }
                        for (var i = 0; i < this.dataAccountCashFlow.length; i++) {
                            if (this.dataAccountCashFlow[i].id == this.collectionAccount.currentItem.accountCashFlowId) {
                                this.accountCashFlowCodeMem1 = this.dataAccountCashFlow[i].accountCashFlowCode;
                                this.accountCashFlowMem1 = this.dataAccountCashFlow[i].accountCashFlow;
                                this.dataAccountCashFlow_Index = i;
                                break;
                            }
                        }
                    }
                };
                ChartOfAccountsComponent.prototype.openDelAccountModal = function () {
                    document.getElementById("openDelAccountModal").click();
                    this.accountIdMem1 = this.collectionAccount.currentItem.id;
                    this.accountMem1 = this.collectionAccount.currentItem.account;
                };
                ChartOfAccountsComponent.prototype.delAccount = function () {
                    this.chartOfAccountsService.deleteAccount(this.collectionAccount.currentItem, this);
                    document.getElementById("closeDelAccountModal").click();
                };
                ChartOfAccountsComponent.prototype.saveAccount = function () {
                    var data = {
                        Id: this.accountIdMem1,
                        AccountCode: this.accountCodeMem1,
                        Account: this.accountMem1,
                        AccountTypeId: this.dataAccountType[this.dataAccountType_Index].id,
                        AccountType: this.accountTypeMem1,
                        AccountCashFlowId: this.dataAccountCashFlow[this.dataAccountCashFlow_Index].id,
                        AccountCashFlow: this.accountCashFlowCodeMem1,
                        IsLocked: true,
                        CreatedById: 0,
                        CreatedDateTime: new Date(),
                        UpdatedById: 0,
                        UpdatedDateTime: new Date()
                    };
                    if (this.accountIdMem1 == 0) {
                        this.chartOfAccountsService.addAccount(data, this);
                    }
                    else {
                        this.chartOfAccountsService.updateAccount(data, this);
                    }
                    document.getElementById("closeAccountModal").click();
                };
                // ============
                // ACCOUNT TYPE
                // ============
                ChartOfAccountsComponent.prototype.openAccountTypeModal = function (add) {
                    document.getElementById("openAccountTypeModal").click();
                    if (add == true) {
                        this.accountTypeIdMem3 = 0;
                        this.accountTypeCodeMem3 = "";
                        this.accountTypeMem3 = "";
                        this.subCategoryDescriptionMem3 = "";
                        this.accountCategoryMem3 = "";
                        this.accountCategoryCodeMem3 = "";
                        this.dataAccountCategory_Index = 0;
                    }
                    else {
                        this.accountTypeIdMem3 = this.collectionAccountType.currentItem.id;
                        this.accountTypeCodeMem3 = this.collectionAccountType.currentItem.accountTypeCode;
                        this.accountTypeMem3 = this.collectionAccountType.currentItem.accountType;
                        this.subCategoryDescriptionMem3 = this.collectionAccountType.currentItem.subCategoryDescription;
                        for (var i = 0; i < this.dataAccountCategory.length; i++) {
                            if (this.dataAccountCategory[i].id == this.collectionAccountType.currentItem.accountCategoryId) {
                                this.accountCategoryCodeMem3 = this.dataAccountCategory[i].accountCategoryCode;
                                this.accountCategoryMem3 = this.dataAccountCategory[i].accountCategory;
                                this.dataAccountCategory_Index = i;
                                break;
                            }
                        }
                    }
                };
                ChartOfAccountsComponent.prototype.openDelAccountTypeModal = function () {
                    document.getElementById("openDelAccountTypeModal").click();
                    this.accountTypeMem3 = this.collectionAccountType.currentItem.accountType;
                };
                ChartOfAccountsComponent.prototype.delAccountType = function () {
                    document.getElementById("closeDelAccountTypeModal").click();
                    this.chartOfAccountsService.deleteAccountType(this.collectionAccountType.currentItem, this);
                };
                ChartOfAccountsComponent.prototype.saveAccountType = function () {
                    var data = {
                        Id: this.accountTypeIdMem3,
                        AccountTypeCode: this.accountTypeCodeMem3,
                        AccountType: this.accountTypeMem3,
                        AccountCategoryId: this.dataAccountCategory[this.dataAccountCategory_Index].id,
                        AccountCategory: this.accountCategoryMem3,
                        SubCategoryDescription: this.subCategoryDescriptionMem3,
                        IsLocked: true,
                        CreatedById: 0,
                        CreatedDateTime: new Date(),
                        UpdatedById: 0,
                        UpdatedDateTime: new Date()
                    };
                    if (this.accountTypeIdMem3 == 0) {
                        this.chartOfAccountsService.addAccountType(data, this);
                    }
                    else {
                        this.chartOfAccountsService.updateAccountType(data, this);
                    }
                    document.getElementById("closeAccountTypeModal").click();
                };
                // ================
                // ACCOUNT CATEGORY
                // ================
                ChartOfAccountsComponent.prototype.openAccountCategoryModal = function (add) {
                    document.getElementById("openAccountCategoryModal").click();
                    if (add == true) {
                        this.accountCategoryIdMem2 = 0;
                        this.accountCategoryCodeMem2 = "";
                        this.accountCategoryMem2 = "";
                    }
                    else {
                        this.accountCategoryIdMem2 = this.collectionAccountCategory.currentItem.id;
                        this.accountCategoryCodeMem2 = this.collectionAccountCategory.currentItem.accountCategoryCode;
                        this.accountCategoryMem2 = this.collectionAccountCategory.currentItem.accountCategory;
                    }
                };
                ChartOfAccountsComponent.prototype.openDelAccountCategoryModal = function () {
                    document.getElementById("openDelAccountCategoryModal").click();
                    this.accountCategoryMem2 = this.collectionAccountCategory.currentItem.accountCategory;
                };
                ChartOfAccountsComponent.prototype.delAccountCategory = function () {
                    document.getElementById("closeDelAccountCategoryModal").click();
                    this.chartOfAccountsService.deleteAccountCategory(this.collectionAccountCategory.currentItem, this);
                };
                ChartOfAccountsComponent.prototype.saveAccountCategory = function () {
                    var data = {
                        Id: this.accountCategoryIdMem2,
                        AccountCategoryCode: this.accountCategoryMem2,
                        AccountCategory: this.accountCategoryMem2,
                        IsLocked: true,
                        CreatedById: 0,
                        CreatedDateTime: new Date(),
                        UpdatedById: 0,
                        UpdatedDateTime: new Date()
                    };
                    if (this.accountCategoryIdMem2 == 0) {
                        this.chartOfAccountsService.addAccountCategory(data, this);
                    }
                    else {
                        this.chartOfAccountsService.updateAccountCategory(data, this);
                    }
                    document.getElementById("closeAccountCategoryModal").click();
                };
                // =========
                // CASH FLOW 
                // =========
                ChartOfAccountsComponent.prototype.openAccountCashFlowModal = function (add) {
                    document.getElementById("openAccountCashFlowModal").click();
                    if (add == true) {
                        this.accountCashFlowIdMem4 = 0;
                        this.accountCashFlowCodeMem4 = "";
                        this.accountCashFlowMem4 = "";
                    }
                    else {
                        this.accountCashFlowIdMem4 = this.collectionAccountCashFlow.currentItem.id;
                        this.accountCashFlowCodeMem4 = this.collectionAccountCashFlow.currentItem.accountCashFlowCode;
                        this.accountCashFlowMem4 = this.collectionAccountCashFlow.currentItem.accountCashFlow;
                    }
                };
                ChartOfAccountsComponent.prototype.openDelAccountCashFlowModal = function () {
                    document.getElementById("openDelAccountCashFlowModal").click();
                    this.accountCashFlowMem4 = this.collectionAccountCashFlow.currentItem.accountCashFlow;
                };
                ChartOfAccountsComponent.prototype.delAccountCashFlow = function () {
                    document.getElementById("closeDelAccountCashFlowModal").click();
                    this.chartOfAccountsService.deleteAccountCashFlow(this.collectionAccountCashFlow.currentItem, this);
                };
                ChartOfAccountsComponent.prototype.saveAccountCashFlow = function () {
                    var data = {
                        Id: this.accountCashFlowIdMem4,
                        AccountCashFlowCode: this.accountCashFlowMem4,
                        AccountCashFlow: this.accountCashFlowMem4,
                        IsLocked: true,
                        CreatedById: 0,
                        CreatedDateTime: new Date(),
                        UpdatedById: 0,
                        UpdatedDateTime: new Date()
                    };
                    if (this.accountCashFlowIdMem4 == 0) {
                        this.chartOfAccountsService.addAccountCashFlow(data, this);
                    }
                    else {
                        this.chartOfAccountsService.updateAccountCashFlow(data, this);
                    }
                    document.getElementById("closeAccountCashFlowModal").click();
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
                        providers: [ChartOfAccountsService_1.ChartOfAccountsService, ng2_toastr_1.ToastsManager]
                    }),
                    __param(2, core_1.Inject(ChartOfAccountsService_1.ChartOfAccountsService)), 
                    __metadata('design:paramtypes', [router_1.Router, ng2_toastr_1.ToastsManager, ChartOfAccountsService_1.ChartOfAccountsService])
                ], ChartOfAccountsComponent);
                return ChartOfAccountsComponent;
            }());
            exports_1("ChartOfAccountsComponent", ChartOfAccountsComponent);
        }
    }
});
//# sourceMappingURL=chartOfAccounts.js.map