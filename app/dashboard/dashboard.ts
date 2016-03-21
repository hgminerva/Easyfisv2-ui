import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.html'
})
export class DashboardComponent implements OnInit {
    private parentRouter: Router;
    
    ngOnInit() {
        if (!localStorage.getItem('access_token')) {
            //this.parentRouter.navigate(['Login']);
        }
    }
      
}