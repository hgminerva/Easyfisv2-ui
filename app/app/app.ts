import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Http } from 'angular2/http';

import { HomeComponent } from '../home/home';
import { LoginComponent } from '../login/login';
import { DashboardComponent } from '../dashboard/dashboard';
import { ChartOfAccountsComponent } from '../chartOfAccounts/chartOfAccounts';

@Component({
  selector: 'app',
  templateUrl: 'app/app/app.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: '/chartOfAccounts',
    name: 'ChartOfAccounts',
    component: ChartOfAccountsComponent
  }  
])
export class App {
    title = 'App';
}