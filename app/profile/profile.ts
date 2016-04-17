import {Component, OnInit, Inject} from 'angular2/core';
import {Router} from 'angular2/router';

import {ProfileTabs} from '../profile/profileTabs';
import {ProfileTab} from '../profile/profileTab';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'profile',
  templateUrl: 'app/profile/profile.html',
  directives: [ ProfileTabs, 
                ProfileTab ],
   providers: [ToastsManager]
})
export class ProfileComponent implements OnInit {
    
    public router : Router;
    public toastr : ToastsManager;
    
    constructor (_router: Router, 
                 _toastr: ToastsManager) {
        this.router = _router;
        this.toastr = _toastr;
    }   
    
    ngOnInit() {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['Login']);
        } else {
                 
        }
    }     
    
    refresh() {

    }       
    
}