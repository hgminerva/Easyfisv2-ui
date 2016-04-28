System.register(['angular2/core', 'angular2/router', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input', 'ng2-toastr/ng2-toastr', '../jv/jvService'], function(exports_1, context_1) {
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
    var core_1, router_1, wjNg2FlexGrid, wjNg2Input, ng2_toastr_1, jvService_1;
    var JVComponent;
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
            function (ng2_toastr_1_1) {
                ng2_toastr_1 = ng2_toastr_1_1;
            },
            function (jvService_1_1) {
                jvService_1 = jvService_1_1;
            }],
        execute: function() {
            JVComponent = (function () {
                function JVComponent(_router, _toastr, _jvService) {
                    this._router = _router;
                    this._toastr = _toastr;
                    this._jvService = _jvService;
                }
                JVComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                        this._router.navigate(['Login']);
                    }
                    else {
                        this.startDate = new Date();
                        this.endDate = new Date();
                        this.createJV();
                    }
                };
                JVComponent.prototype.createJV = function () {
                    this.dataJV = this._jvService.getJVList(this);
                    this.collectionJV = new wijmo.collections.CollectionView(this.dataJV);
                    this.collectionJV.pageSize = 10;
                    this.collectionJV.trackChanges = true;
                };
                JVComponent.prototype.openJVDetail = function (add) {
                    if (add == true) {
                        this._router.navigate(['JVDetail', { id: 0 }]);
                    }
                    else {
                        this._router.navigate(['JVDetail', { id: this.collectionJV.currentItem.id }]);
                    }
                };
                JVComponent.prototype.openDelJVModal = function () {
                };
                JVComponent = __decorate([
                    core_1.Component({
                        selector: 'jv',
                        templateUrl: 'app/jv/jv.html',
                        directives: [wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjInputDate],
                        providers: [ng2_toastr_1.ToastsManager, jvService_1.JVService]
                    }),
                    __param(2, core_1.Inject(jvService_1.JVService)), 
                    __metadata('design:paramtypes', [router_1.Router, ng2_toastr_1.ToastsManager, jvService_1.JVService])
                ], JVComponent);
                return JVComponent;
            }());
            exports_1("JVComponent", JVComponent);
        }
    }
});
//# sourceMappingURL=jv.js.map