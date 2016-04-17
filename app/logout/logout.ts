import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'logout',
    templateUrl: 'app/logout/logout.html'
})
export class LogoutComponent implements OnInit {
    ngOnInit() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('token_type');
        localStorage.removeItem('userName');
        
        window.location.replace('/');
    }     
}