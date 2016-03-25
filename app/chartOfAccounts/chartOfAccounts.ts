import {Component, OnInit, Inject} from 'angular2/core';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';

import {AccountCategoryService} from '../chartOfAccounts/accountCategoryService';

@Component({
    selector: 'chartOfAccounts',
    templateUrl: 'app/chartOfAccounts/chartOfAccounts.html',
    directives: [wjNg2FlexGrid.WjFlexGrid, wjNg2FlexGrid.WjFlexGridColumn],
    providers: [AccountCategoryService]
})
export class ChartOfAccountsComponent implements OnInit {
    protected accountCategoryService: AccountCategoryService; 
    private data : wijmo.collections.CollectionView;
    private router : Router;
    
    constructor (_router: Router, 
                 @Inject(AccountCategoryService) _accountCategoryService: AccountCategoryService) {
        this.router = _router;
        this.accountCategoryService = _accountCategoryService;
    }    
    
    ngOnInit() {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['Login']);
        } else {
            this.data = new wijmo.collections.CollectionView(this.accountCategoryService.getAccountCategories());
        }
    }
}