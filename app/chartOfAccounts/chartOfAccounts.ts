import {Component, OnInit, Inject, ViewChild} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';

import {AccountCategoryService} from '../chartOfAccounts/accountCategoryService';

@Component({
    selector: 'chartOfAccounts',
    templateUrl: 'app/chartOfAccounts/chartOfAccounts.html',
    directives: [wjNg2FlexGrid.WjFlexGrid, 
                 wjNg2FlexGrid.WjFlexGridColumn, 
                 wjNg2FlexGrid.WjFlexGridCellTemplate,
                 NgClass],
    providers: [AccountCategoryService]
})
export class ChartOfAccountsComponent implements OnInit {
    protected accountCategoryService: AccountCategoryService; 
    private dataAccountCategory : wijmo.collections.CollectionView;
    private router : Router;
    private tabIndex : number;
    private tab : boolean[] = [false,false,false,false];

    constructor (_router: Router, 
                 @Inject(AccountCategoryService) _accountCategoryService: AccountCategoryService) {
        this.router = _router;
        this.accountCategoryService = _accountCategoryService;
    }    
    
    ngOnInit() {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['Login']);
        } else {
            this.selectTab(2);
            this.dataAccountCategory = new wijmo.collections.CollectionView(this.accountCategoryService.getAccountCategories());
            this.dataAccountCategory.pageSize = 15; 
            this.dataAccountCategory.trackChanges = true;                
        }
    }
    
    selectTab(n) {
        for (var i = 0; i < this.tab.length; i++) {
            this.tab[n] = false;
        }        
        this.tab[n] = true;
    }
    
    openAccountCategoryModal(add) {
        if(add==true) {
            alert("Add");
        } else {
            alert("Edit: " + this.dataAccountCategory.currentItem.id);
        }
    }
    
    delAccountCategory() {
        alert("Delete: " + this.dataAccountCategory.currentItem.id);
    }
    
}