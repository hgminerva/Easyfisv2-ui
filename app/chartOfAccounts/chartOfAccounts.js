System.register(['angular2/core', 'angular2/common', 'angular2/router', 'wijmo/wijmo.angular2.grid', '../chartOfAccounts/accountCategoryService'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, wjNg2FlexGrid, accountCategoryService_1;
    var ChartOfAccountsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (wjNg2FlexGrid_1) {
                wjNg2FlexGrid = wjNg2FlexGrid_1;
            },
            function (accountCategoryService_1_1) {
                accountCategoryService_1 = accountCategoryService_1_1;
            }],
        execute: function() {
            ChartOfAccountsComponent = (function () {
                function ChartOfAccountsComponent(_router, _accountCategoryService) {
                    this.tab = [false, false, false, false];
                    this.router = _router;
                    this.accountCategoryService = _accountCategoryService;
                }
                ChartOfAccountsComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                        this.router.navigate(['Login']);
                    }
                    else {
                        this.selectTab(2);
                        this.dataAccountCategory = new wijmo.collections.CollectionView(this.accountCategoryService.getAccountCategories());
                        this.dataAccountCategory.pageSize = 15;
                        this.dataAccountCategory.trackChanges = true;
                    }
                };
                ChartOfAccountsComponent.prototype.selectTab = function (n) {
                    for (var i = 0; i < this.tab.length; i++) {
                        this.tab[n] = false;
                    }
                    this.tab[n] = true;
                };
                ChartOfAccountsComponent.prototype.openAccountCategoryModal = function (add) {
                    if (add == true) {
                        alert("Add");
                    }
                    else {
                        alert("Edit: " + this.dataAccountCategory.currentItem.id);
                    }
                };
                ChartOfAccountsComponent.prototype.delAccountCategory = function () {
                    alert("Delete: " + this.dataAccountCategory.currentItem.id);
                };
                ChartOfAccountsComponent = __decorate([
                    core_1.Component({
                        selector: 'chartOfAccounts',
                        templateUrl: 'app/chartOfAccounts/chartOfAccounts.html',
                        directives: [wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            common_1.NgClass],
                        providers: [accountCategoryService_1.AccountCategoryService]
                    }),
                    __param(1, core_1.Inject(accountCategoryService_1.AccountCategoryService)), 
                    __metadata('design:paramtypes', [router_1.Router, accountCategoryService_1.AccountCategoryService])
                ], ChartOfAccountsComponent);
                return ChartOfAccountsComponent;
            }());
            exports_1("ChartOfAccountsComponent", ChartOfAccountsComponent);
        }
    }
});
//# sourceMappingURL=chartOfAccounts.js.map