import {Component} from 'angular2/core';
import {Http, Headers, RequestOptions, HTTP_PROVIDERS} from 'angular2/http';
import {Router} from 'angular2/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'login',
    templateUrl: 'app/login/login.html',
    providers: [
        HTTP_PROVIDERS, ToastsManager
    ]    
})
export class LoginComponent {
    private title = 'Login';

    constructor(private _router: Router,  private _http: Http, private _toastr: ToastsManager) {
    }   
      
    login(event, username, password) {
        event.preventDefault();
        
        let url = "http://api.accountico.io/token";
        let body = "username=" + username + "&password=" + password + "&grant_type=password";
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });        
        
        this._http.post(url, body, options).subscribe(
            response => {
                localStorage.setItem('access_token', response.json().access_token);
                localStorage.setItem('expires_in', response.json().expires_in);
                localStorage.setItem('token_type', response.json().token_type);
                localStorage.setItem('userName', response.json().userName);
                
                this.setSystemDefaults(response.json().userName);
            },
            error => {
                this._toastr.error(error.json().error_description);
                console.log(error.json().error_description);
            }
        );
    }    
    
    setSystemDefaults(username) {
        var data = new wijmo.collections.ObservableArray();
        
        let url = "http://api.accountico.io/api/MstUser/Defaults?username=" + username
        let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });        
        let options = new RequestOptions({ headers: headers }); 
        
        this._http.get(url, options)
            .subscribe(
                response => {
                    localStorage.setItem('incomeAccountId', response.json().IncomeAccountId);
                    localStorage.setItem('branchId', response.json().BranchId);   
                    localStorage.setItem('branch', response.json().Branch);
                    localStorage.setItem('company', response.json().Company);   
                    
                    window.location.replace('/dashboard');                     
                },
                error => {
                    this._toastr.error(error.json().error_description);
                    console.log(error.json().error_description);
                }                
            );
            
        return data;
    }
    
}