System.register(['angular2/core', '../profile/profileTab'], function(exports_1, context_1) {
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
    var core_1, profileTab_1;
    var ProfileTabs;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profileTab_1_1) {
                profileTab_1 = profileTab_1_1;
            }],
        execute: function() {
            ProfileTabs = (function () {
                function ProfileTabs() {
                }
                ProfileTabs.prototype.ngAfterContentInit = function () {
                    if (!_hasActiveTab(this.tabs)) {
                        this.selectTab(this.tabs.first);
                    }
                    function _hasActiveTab(tabs) {
                        var activeTabs = tabs.filter(function (tab) { return tab.active; });
                        return Boolean(activeTabs.length);
                    }
                };
                ProfileTabs.prototype.selectTab = function (tab) {
                    _deactivateAllTabs(this.tabs.toArray());
                    tab.active = true;
                    function _deactivateAllTabs(tabs) {
                        tabs.forEach(function (tab) { return tab.active = false; });
                    }
                };
                __decorate([
                    core_1.ContentChildren(profileTab_1.ProfileTab), 
                    __metadata('design:type', core_1.QueryList)
                ], ProfileTabs.prototype, "tabs", void 0);
                ProfileTabs = __decorate([
                    core_1.Component({
                        selector: 'tabs',
                        templateUrl: 'app/profile/profileTabs.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProfileTabs);
                return ProfileTabs;
            }());
            exports_1("ProfileTabs", ProfileTabs);
        }
    }
});
//# sourceMappingURL=profileTabs.js.map