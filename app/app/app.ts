import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Http, Headers, RequestOptions, HTTP_PROVIDERS } from 'angular2/http';
import { NgIf } from 'angular2/common';

import { HomeComponent } from '../home/home';
import { LoginComponent } from '../login/login';
import { LogoutComponent } from '../logout/logout';
import { DashboardComponent } from '../dashboard/dashboard';
import { ChartOfAccountsComponent } from '../chartOfAccounts/chartOfAccounts';
import { ProfileComponent } from '../profile/profile';
import { JVComponent } from '../jv/jv';
import { JVDetailComponent } from '../jvDetail/jvDetail';

@Component({
  selector: 'app',
  templateUrl: 'app/app/app.html',
  directives: [
      ROUTER_DIRECTIVES,
      NgIf
  ],
  providers: [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS
  ]
})
@RouteConfig([{ path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
              { path: '/login', name: 'Login', component: LoginComponent },
              { path: '/logout', name: 'Logout', component: LogoutComponent },
              { path: '/dashboard', name: 'Dashboard', component: DashboardComponent },
              { path: '/chartOfAccounts', name: 'ChartOfAccounts', component: ChartOfAccountsComponent },  
              { path: '/profile', name: 'Profile', component: ProfileComponent },
              { path: '/jv', name: 'JV', component: JVComponent },
              { path: '/jvDetail/:id', name: 'JVDetail', component: JVDetailComponent} 
])
export class App {
    public profile : string;
    public login : boolean;
    
    constructor (_http: Http) {
        if (!localStorage.getItem('access_token')) {
            this.profile = " "
            this.login = false;
        } else {
            this.profile = localStorage.getItem('company').toUpperCase() + " - " + 
                           localStorage.getItem('branch').toUpperCase() + " - " + 
                           localStorage.getItem('userName').toUpperCase();
            this.login = true;        
        }    
    }
}