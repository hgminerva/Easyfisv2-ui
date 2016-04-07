import {Component, OnInit, Inject} from 'angular2/core';
import {Router} from 'angular2/router';
import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import {ChartOfAccountsTabs} from '../chartOfAccounts/chartOfAccountsTabs';
import {ChartOfAccountsTab} from '../chartOfAccounts/chartOfAccountsTab';
import {ChartOfAccountsService} from '../chartOfAccounts/ChartOfAccountsService';

@Component({
  selector: 'chartOfAccounts',
  templateUrl: 'app/chartOfAccounts/chartOfAccounts.html',
  directives: [ wjNg2FlexGrid.WjFlexGrid, 
                wjNg2FlexGrid.WjFlexGridColumn, 
                wjNg2FlexGrid.WjFlexGridCellTemplate,
                wjNg2Input.WjComboBox,
                ChartOfAccountsTabs, 
                ChartOfAccountsTab ],
   providers: [ChartOfAccountsService]
})
export class ChartOfAccountsComponent implements OnInit {
    protected chartOfAccountsService: ChartOfAccountsService; 
    
    private dataAccountCategory : wijmo.collections.CollectionView;
    private dataAccountCashFlow : wijmo.collections.CollectionView;
    private dataAccountType : wijmo.collections.CollectionView;
    private dataAccount : wijmo.collections.CollectionView;
    
    private accountCodeMem1 : string;
    private accountMem1 : string;
    
    private accountCategoryCodeMem2 : string;
    private accountCategoryMem2 : string;
        
    private accountTypeCodeMem3 : string;
    private accountTypeMem3 : string;        
    private subCategoryDescriptionMem3 : string;    
    
    private accountCashFlowCodeMem4 : string;
    private accountCashFlowMem4 : string;        
            
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
                        
            this.dataAccountType = new wijmo.collections.CollectionView(this.chartOfAccountsService.getAccountTypes());
            this.dataAccountType.pageSize = 10; 
            this.dataAccountType.trackChanges = true;    
                                    
            this.dataAccountCategory = new wijmo.collections.CollectionView(this.chartOfAccountsService.getAccountCategories());
            this.dataAccountCategory.pageSize = 10; 
            this.dataAccountCategory.trackChanges = true;     
            
            this.dataAccountCashFlow = new wijmo.collections.CollectionView(this.chartOfAccountsService.getAccountCashFlow());
            this.dataAccountCashFlow.pageSize = 10; 
            this.dataAccountCashFlow.trackChanges = true;                       
        }
    } 
    
    refresh() {
        this.dataAccount.refresh();
        this.dataAccountType.refresh();
        this.dataAccountCategory.refresh();
        this.dataAccountCashFlow.refresh();
    }
    
    // ACCOUNT
    
    openAccountModal(add) {
        document.getElementById("openAccountModal").click();
        if(add==true) {
            this.accountCodeMem1 = "";
            this.accountMem1 = "";
        } else {
            this.accountCodeMem1 = this.dataAccount.currentItem.accountCode;
            this.accountMem1 = this.dataAccount.currentItem.account;  
            
            this.dataAccountType.moveCurrentToFirst();
            this.dataAccountCashFlow.moveCurrentToFirst();
        }
    }
    
    delAccount() {
        document.getElementById("openDelAccountModal").click();
        this.accountMem1 = this.dataAccount.currentItem.account;  
    }  
    
    // ACCOUNT TYPE
    
    openAccountTypeModal(add) {
        document.getElementById("openAccountTypeModal").click();
        if(add==true) {
            this.accountTypeCodeMem3 = "";
            this.accountTypeMem3 = "";
            this.subCategoryDescriptionMem3 = ""
        } else {
            this.accountTypeCodeMem3 = this.dataAccountType.currentItem.accountTypeCode;
            this.accountTypeMem3 = this.dataAccountType.currentItem.accountType;
            this.subCategoryDescriptionMem3 = this.dataAccountType.currentItem.subCategoryDescription;          

            this.dataAccountCategory.moveCurrentToFirst();
        }
    }
    
    delAccountType() {
        document.getElementById("openDelAccountTypeModal").click();
        this.accountTypeMem3 = this.dataAccountType.currentItem.accountType;  
    }      
    
    // ACCOUNT CATEGORY
         
    openAccountCategoryModal(add) {
        document.getElementById("openAccountCategoryModal").click();
        if(add==true) {
            this.accountCategoryCodeMem2 = "";
            this.accountCategoryMem2 = "";
        } else {
            this.accountCategoryCodeMem2 = this.dataAccountCategory.currentItem.accountCategoryCode;
            this.accountCategoryMem2 = this.dataAccountCategory.currentItem.accountCategory;
        }
    }
    
    delAccountCategory() {
        document.getElementById("openDelAccountCategoryModal").click();
        this.accountCategoryMem2 = this.dataAccountCategory.currentItem.accountCategory;  
    }    
    
    // CASH FLOW 
        
    openAccountCashFlowModal(add) {
        document.getElementById("openAccountCashFlowModal").click();
        if(add==true) {
            this.accountCashFlowCodeMem4 = "";
            this.accountCashFlowMem4 = "";
        } else {
            this.accountCashFlowCodeMem4 = this.dataAccountCashFlow.currentItem.accountCashFlowCode;
            this.accountCashFlowMem4 = this.dataAccountCashFlow.currentItem.accountCashFlow;
        }
    }
    
    delAccountCashFlow() {
        document.getElementById("openDelAccountCashFlowModal").click();
        this.accountCashFlowMem4 = this.dataAccountCashFlow.currentItem.accountCashFlow;  
    }    
}