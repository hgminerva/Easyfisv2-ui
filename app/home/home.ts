import {Component} from 'angular2/core';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.html'
})
export class HomeComponent {
    private access_token : string = localStorage.getItem('access_token');
    private expires_in : string = localStorage.getItem('expires_in');
    private token_type : string = localStorage.getItem('token_type');
    private userName : string = localStorage.getItem('userName');     
    private incomeAccountId : number = localStorage.getItem('incomeAccountId');
    private branchId : number = localStorage.getItem('branchId'); 
    private branch : string = localStorage.getItem('branch'); 
    private company : string = localStorage.getItem('company'); 
}