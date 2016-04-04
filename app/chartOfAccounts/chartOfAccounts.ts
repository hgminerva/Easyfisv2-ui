import {Component, OnInit, Inject} from 'angular2/core';
import {Router} from 'angular2/router';
import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';

import {ChartOfAccountsTabs} from '../chartOfAccounts/chartOfAccountsTabs';
import {ChartOfAccountsTab} from '../chartOfAccounts/chartOfAccountsTab';
import {ChartOfAccountsService} from '../chartOfAccounts/ChartOfAccountsService';

@Component({
  selector: 'chartOfAccounts',
  templateUrl: 'app/chartOfAccounts/chartOfAccounts.html',
  directives: [ wjNg2FlexGrid.WjFlexGrid, 
                wjNg2FlexGrid.WjFlexGridColumn, 
                wjNg2FlexGrid.WjFlexGridCellTemplate,
                ChartOfAccountsTabs, 
                ChartOfAccountsTab ],
   providers: [ChartOfAccountsService]
})
export class ChartOfAccountsComponent implements OnInit {
    protected chartOfAccountsService: ChartOfAccountsService; 
    
    private dataAccountCategory : wijmo.collections.CollectionView;
    private dataAccount : wijmo.collections.CollectionView;
    
    private router : Router;
    
    constructor (_router: Router, 
                 @Inject(ChartOfAccountsService) _chartOfAccountsService: ChartOfAccountsService) {
        this.router = _router;
        this.chartOfAccountsService = _chartOfAccountsService;
    }     
    
    ngOnInit() {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['Login']);
        } else {
            this.dataAccount = new wijmo.collections.CollectionView(this.chartOfAccountsService.getAccounts());
            this.dataAccount.pageSize = 10; 
            this.dataAccount.trackChanges = true;  
                        
            this.dataAccountCategory = new wijmo.collections.CollectionView(this.chartOfAccountsService.getAccountCategories());
            this.dataAccountCategory.pageSize = 10; 
            this.dataAccountCategory.trackChanges = true;              
        }
    } 
    
    refresh() {
        this.dataAccount.refresh();
        this.dataAccountCategory.refresh();
    }
    
    openAccountModal(add) {
        if(add==true) {
            alert("Add");
        } else {
            alert("Edit: " + this.dataAccount.currentItem.id);
        }
    }
    
    delAccount() {
        alert("Delete: " + this.dataAccount.currentItem.id);
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