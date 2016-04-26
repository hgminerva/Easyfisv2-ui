System.register(['angular2/core', 'angular2/router', 'angular2/http', 'angular2/common', '../home/home', '../login/login', '../logout/logout', '../dashboard/dashboard', '../chartOfAccounts/chartOfAccounts', '../profile/profile', '../journalVoucher/journalVoucher'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, common_1, home_1, login_1, logout_1, dashboard_1, chartOfAccounts_1, profile_1, journalVoucher_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (logout_1_1) {
                logout_1 = logout_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            },
            function (chartOfAccounts_1_1) {
                chartOfAccounts_1 = chartOfAccounts_1_1;
            },
            function (profile_1_1) {
                profile_1 = profile_1_1;
            },
            function (journalVoucher_1_1) {
                journalVoucher_1 = journalVoucher_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(_http) {
                    if (!localStorage.getItem('access_token')) {
                        this.profile = " ";
                        this.login = false;
                    }
                    else {
                        this.profile = localStorage.getItem('company').toUpperCase() + " - " +
                            localStorage.getItem('branch').toUpperCase() + " - " +
                            localStorage.getItem('userName').toUpperCase();
                        this.login = true;
                    }
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/app/app.html',
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            common_1.NgIf
                        ],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            http_1.HTTP_PROVIDERS
                        ]
                    }),
                    router_1.RouteConfig([{ path: '/home', name: 'Home', component: home_1.HomeComponent, useAsDefault: true },
                        { path: '/login', name: 'Login', component: login_1.LoginComponent },
                        { path: '/logout', name: 'Logout', component: logout_1.LogoutComponent },
                        { path: '/dashboard', name: 'Dashboard', component: dashboard_1.DashboardComponent },
                        { path: '/chartOfAccounts', name: 'ChartOfAccounts', component: chartOfAccounts_1.ChartOfAccountsComponent },
                        { path: '/profile', name: 'Profile', component: profile_1.ProfileComponent },
                        { path: '/journalVoucher', name: 'JournalVoucher', component: journalVoucher_1.JournalVoucherComponent }
                    ]), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map