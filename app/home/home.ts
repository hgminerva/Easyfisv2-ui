import {Component} from 'angular2/core';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.html'
})
export class HomeComponent {
    private access_token = localStorage.getItem('access_token');
    private expires_in = localStorage.getItem('expires_in');
    private token_type = localStorage.getItem('token_type');
    private userName = localStorage.getItem('userName');     
}