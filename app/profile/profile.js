System.register(['angular2/core', 'angular2/router', '../profile/profileTabs', '../profile/profileTab', 'ng2-toastr/ng2-toastr'], function(exports_1, context_1) {
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
    var core_1, router_1, profileTabs_1, profileTab_1, ng2_toastr_1;
    var ProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (profileTabs_1_1) {
                profileTabs_1 = profileTabs_1_1;
            },
            function (profileTab_1_1) {
                profileTab_1 = profileTab_1_1;
            },
            function (ng2_toastr_1_1) {
                ng2_toastr_1 = ng2_toastr_1_1;
            }],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent(_router, _toastr) {
                    this.router = _router;
                    this.toastr = _toastr;
                }
                ProfileComponent.prototype.ngOnInit = function () {
                    if (!localStorage.getItem('access_token')) {
                        this.router.navigate(['Login']);
                    }
                    else {
                    }
                };
                ProfileComponent.prototype.refresh = function () {
                };
                ProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'profile',
                        templateUrl: 'app/profile/profile.html',
                        directives: [profileTabs_1.ProfileTabs,
                            profileTab_1.ProfileTab],
                        providers: [ng2_toastr_1.ToastsManager]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, ng2_toastr_1.ToastsManager])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});
//# sourceMappingURL=profile.js.map