import {Component} from 'angular2/core';
import {Http, Headers, RequestOptions, HTTP_PROVIDERS} from 'angular2/http';
import {Router} from 'angular2/router';

@Component({
    selector: 'login',
    templateUrl: 'app/login/login.html',
    providers: [
        HTTP_PROVIDERS
    ]    
})
export class LoginComponent {
    private title = 'Login';

    constructor(private _router: Router,  private _http: Http) {
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
                this._router.navigate(['Dashboard']);
            },
            error => {
                alert(error.text());
                console.log(error.text());
            }
        );
    }    
}