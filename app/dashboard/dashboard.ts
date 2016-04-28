import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.html'
})
export class DashboardComponent implements OnInit {
    constructor(private _router: Router) {
    }    
    
    ngOnInit() {
        if (!localStorage.getItem('access_token')) {
            this._router.navigate(['Login']);
        }
    }
    
    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('token_type');
        localStorage.removeItem('userName');
        localStorage.removeItem('incomeAccountId');  
        localStorage.removeItem('branchId');
        localStorage.removeItem('branch');
        localStorage.removeItem('company');
        
        window.location.replace('/');
    }     
    
    chartOfAccounts() {
        this._router.navigate(['ChartOfAccounts']);
    }
    
    journalVoucher() {
        this._router.navigate(['JV']);
    }
}