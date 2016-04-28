System.register(['angular2/core', 'angular2/router', 'wijmo/wijmo.angular2.grid', 'wijmo/wijmo.angular2.input', 'ng2-toastr/ng2-toastr', '../jvDetail/jvDetailService'], function(exports_1, context_1) {
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
    var core_1, router_1, wjNg2FlexGrid, wjNg2Input, ng2_toastr_1, jvDetailService_1;
    var JVDetailComponent;
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
            function (jvDetailService_1_1) {
                jvDetailService_1 = jvDetailService_1_1;
            }],
        execute: function() {
            JVDetailComponent = (function () {
                function JVDetailComponent(_router, _location, _toastr, _jvDetailService, _routerParams) {
                    this._router = _router;
                    this._location = _location;
                    this._toastr = _toastr;
                    this._jvDetailService = _jvDetailService;
                    this._routerParams = _routerParams;
                    this.id = _routerParams.get('id');
                }
                JVDetailComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                        this._router.navigate(['Login']);
                    }
                    else {
                        this.initJVDetail();
                    }
                };
                JVDetailComponent.prototype.initJVDetail = function () {
                    this.jvDateMem1 = new Date();
                };
                JVDetailComponent.prototype.closeJVDetail = function () {
                    this._router.navigate(['JV']);
                };
                JVDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'jvDetail',
                        templateUrl: 'app/jvDetail/jvDetail.html',
                        directives: [wjNg2FlexGrid.WjFlexGrid,
                            wjNg2FlexGrid.WjFlexGridColumn,
                            wjNg2FlexGrid.WjFlexGridCellTemplate,
                            wjNg2Input.WjInputDate],
                        providers: [ng2_toastr_1.ToastsManager, jvDetailService_1.JVDetailService]
                    }),
                    __param(3, core_1.Inject(jvDetailService_1.JVDetailService)), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.Location, ng2_toastr_1.ToastsManager, jvDetailService_1.JVDetailService, router_1.RouteParams])
                ], JVDetailComponent);
                return JVDetailComponent;
            }());
            exports_1("JVDetailComponent", JVDetailComponent);
        }
    }
});
//# sourceMappingURL=jvDetail.js.map