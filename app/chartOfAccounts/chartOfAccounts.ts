import {Component, OnInit, Inject} from 'angular2/core';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import {ChartOfAccountsTabs} from '../chartOfAccounts/chartOfAccountsTabs';
import {ChartOfAccountsTab} from '../chartOfAccounts/chartOfAccountsTab';
import {ChartOfAccountsService} from '../chartOfAccounts/ChartOfAccountsService';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'chartOfAccounts',
  templateUrl: 'app/chartOfAccounts/chartOfAccounts.html',
  directives: [ wjNg2FlexGrid.WjFlexGrid, 
                wjNg2FlexGrid.WjFlexGridColumn, 
                wjNg2FlexGrid.WjFlexGridCellTemplate,
                wjNg2Input.WjComboBox,
                ChartOfAccountsTabs, 
                ChartOfAccountsTab ],
   providers: [ChartOfAccountsService, ToastsManager]
})
export class ChartOfAccountsComponent implements OnInit {
    protected chartOfAccountsService: ChartOfAccountsService; 
    
    private dataAccountCategory : wijmo.collections.ObservableArray;
    private dataAccountCashFlow : wijmo.collections.ObservableArray;
    private dataAccountType : wijmo.collections.ObservableArray;
    private dataAccount : wijmo.collections.ObservableArray;
    
    private dataAccountType_Index : number;
    private dataAccountCashFlow_Index : number;
    private dataAccountCategory_Index : number;
    
    private collectionAccountCategory : wijmo.collections.CollectionView;
    private collectionAccountCashFlow : wijmo.collections.CollectionView;
    private collectionAccountType : wijmo.collections.CollectionView;
    private collectionAccount : wijmo.collections.CollectionView;
    
    private accountCodeMem1 : string;
    private accountMem1 : string;
    private accountTypeMem1 : string;
    private accountTypeCodeMem1 : string;
    private accountCashFlowMem1 : string;
    private accountCashFlowCodeMem1 : string;
    
    private accountCategoryCodeMem2 : string;
    private accountCategoryMem2 : string;
        
    private accountTypeCodeMem3 : string;
    private accountTypeMem3 : string;        
    private subCategoryDescriptionMem3 : string;    
    private accountCategoryMem3 : string;
    private accountCategoryCodeMem3 : string;    
    
    private accountCashFlowCodeMem4 : string;
    private accountCashFlowMem4 : string;        
            
    private router : Router;
    private toastr : ToastsManager;
    
    constructor (_router: Router, 
                 _toastr: ToastsManager,
                 @Inject(ChartOfAccountsService) _chartOfAccountsService: ChartOfAccountsService) {
        this.router = _router;
        this.chartOfAccountsService = _chartOfAccountsService;
        this.toastr = _toastr;
    }     
    
    ngOnInit() {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['Login']);
        } else {
            this.dataAccount = this.chartOfAccountsService.getAccounts();
            this.collectionAccount = new wijmo.collections.CollectionView(this.dataAccount);
            this.collectionAccount.pageSize = 10; 
            this.collectionAccount.trackChanges = true;  
            
            this.dataAccountType = this.chartOfAccountsService.getAccountTypes();       
            this.dataAccountType_Index = 0;            
            this.collectionAccountType = new wijmo.collections.CollectionView(this.dataAccountType);
            this.collectionAccountType.pageSize = 10; 
            this.collectionAccountType.trackChanges = true;    
                               
            this.dataAccountCategory = this.chartOfAccountsService.getAccountCategories();  
            this.dataAccountCategory_Index = 0;                     
            this.collectionAccountCategory = new wijmo.collections.CollectionView(this.dataAccountCategory);
            this.collectionAccountCategory.pageSize = 10; 
            this.collectionAccountCategory.trackChanges = true;     
            
            this.dataAccountCashFlow = this.chartOfAccountsService.getAccountCashFlow();
            this.dataAccountCashFlow_Index = 0;    
            this.collectionAccountCashFlow = new wijmo.collections.CollectionView(this.dataAccountCashFlow);
            this.collectionAccountCashFlow.pageSize = 10; 
            this.collectionAccountCashFlow.trackChanges = true;                       
        }
    } 
    
    refresh() {
        this.collectionAccount.refresh();
        this.collectionAccountType.refresh();
        this.collectionAccountCategory.refresh();
        this.collectionAccountCashFlow.refresh();
    }
    
    dataAccountType_Index_Update() {
        this.accountTypeCodeMem1 = this.dataAccountType[this.dataAccountType_Index].accountTypeCode;
        this.accountTypeMem1 = this.dataAccountType[this.dataAccountType_Index].accountType;        
    }
    
    dataAccountCashFlow_Index_Update() {
        this.accountCashFlowCodeMem1 = this.dataAccountCashFlow[this.dataAccountCashFlow_Index].accountCashFlowCode;
        this.accountCashFlowMem1 = this.dataAccountCashFlow[this.dataAccountCashFlow_Index].accountCashFlow;        
    }    

    dataAccountCategory_Index_Update() {
        this.accountCategoryCodeMem3 = this.dataAccountCategory[this.dataAccountCategory_Index].accountCategoryCode;
        this.accountCategoryMem3 = this.dataAccountCategory[this.dataAccountCategory_Index].accountCategory;        
    }     
    
    // ACCOUNT
    
    openAccountModal(add) {
        document.getElementById("openAccountModal").click();
        if(add==true) {
            this.accountCodeMem1 = "";
            this.accountMem1 = "";
            this.accountTypeMem1 = "";
            this.accountTypeCodeMem1 = "";
            this.dataAccountType_Index = 0;
            this.accountCashFlowMem1 = "";
            this.accountCashFlowCodeMem1 = "";
            this.dataAccountCashFlow_Index = 0;            
        } else {
            this.accountCodeMem1 = this.collectionAccount.currentItem.accountCode;
            this.accountMem1 = this.collectionAccount.currentItem.account;  
            for(var i = 0; i < this.dataAccountType.length; i++) {
                if(this.dataAccountType[i].id == this.collectionAccount.currentItem.accountTypeId) {
                     this.accountTypeCodeMem1 = this.dataAccountType[i].accountTypeCode;
                     this.accountTypeMem1 = this.dataAccountType[i].accountType;
                     this.dataAccountType_Index = i;
                     break;
                }
            }
            for(var i = 0; i < this.dataAccountCashFlow.length; i++) {
                if(this.dataAccountCashFlow[i].id == this.collectionAccount.currentItem.accountCashFlowId) {
                     this.accountCashFlowCodeMem1 = this.dataAccountCashFlow[i].accountCashFlowCode;
                     this.accountCashFlowMem1 = this.dataAccountCashFlow[i].accountCashFlow;
                     this.dataAccountCashFlow_Index = i;
                     break;
                }
            }            
        }
    }
    
    openDelAccountModal() {
        document.getElementById("openDelAccountModal").click();
        this.accountMem1 = this.collectionAccount.currentItem.account;          
    }    
    
    delAccount() {
        document.getElementById("closeDelAccountModal").click();
        this.toastr.success('Delete Successfull', '');
    }  
    
    saveAccount() {
        document.getElementById("closeAccountModal").click();
        this.toastr.success('Save Successfull', '');
    }
    
    // ACCOUNT TYPE
    
    openAccountTypeModal(add) {
        document.getElementById("openAccountTypeModal").click();
        if(add==true) {
            this.accountTypeCodeMem3 = "";
            this.accountTypeMem3 = "";
            this.subCategoryDescriptionMem3 = ""
            this.accountCategoryMem3 = "";
            this.accountCategoryCodeMem3 = "";
            this.dataAccountCategory_Index = 0;  
        } else {
            this.accountTypeCodeMem3 = this.collectionAccountType.currentItem.accountTypeCode;
            this.accountTypeMem3 = this.collectionAccountType.currentItem.accountType;
            this.subCategoryDescriptionMem3 = this.collectionAccountType.currentItem.subCategoryDescription;     
            for(var i = 0; i < this.dataAccountCategory.length; i++) {
                if(this.dataAccountCategory[i].id == this.collectionAccountType.currentItem.accountCategoryId) {
                     this.accountCategoryCodeMem3 = this.dataAccountCategory[i].accountCategoryCode;
                     this.accountCategoryMem3 = this.dataAccountCategory[i].accountCategory;
                     this.dataAccountCategory_Index = i;
                     break;
                }
            }     
        }
    }
    
    openDelAccountTypeModal() {
        document.getElementById("openDelAccountTypeModal").click();
        this.accountTypeMem3 = this.collectionAccountType.currentItem.accountType;          
    }    
    
    delAccountType() {
        document.getElementById("closeDelAccountTypeModal").click();
        this.toastr.success('Delete Successfull', '');
    }  
    
    saveAccountType() {
        document.getElementById("closeAccountTypeModal").click();
        this.toastr.success('Save Successfull', '');
    }       
    
    // ACCOUNT CATEGORY
         
    openAccountCategoryModal(add) {
        document.getElementById("openAccountCategoryModal").click();
        if(add==true) {
            this.accountCategoryCodeMem2 = "";
            this.accountCategoryMem2 = "";
        } else {
            this.accountCategoryCodeMem2 = this.collectionAccountCategory.currentItem.accountCategoryCode;
            this.accountCategoryMem2 = this.collectionAccountCategory.currentItem.accountCategory;
        }
    }
    
    openDelAccountCategoryModal() {
        document.getElementById("openDelAccountCategoryModal").click();
        this.accountCategoryMem2 = this.collectionAccountCategory.currentItem.accountCategory;          
    }    
    
    delAccountCategory() {
        document.getElementById("closeDelAccountCategoryModal").click();
        this.toastr.success('Delete Successfull', '');
    }  
    
    saveAccountCategory() {
        document.getElementById("closeAccountCategoryModal").click();
        this.toastr.success('Save Successfull', '');
    }     
    
    // CASH FLOW 
        
    openAccountCashFlowModal(add) {
        document.getElementById("openAccountCashFlowModal").click();
        if(add==true) {
            this.accountCashFlowCodeMem4 = "";
            this.accountCashFlowMem4 = "";
        } else {
            this.accountCashFlowCodeMem4 = this.collectionAccountCashFlow.currentItem.accountCashFlowCode;
            this.accountCashFlowMem4 = this.collectionAccountCashFlow.currentItem.accountCashFlow;
        }
    }
    
    openDelAccountCashFlowModal() {
        document.getElementById("openDelAccountCashFlowModal").click();
        this.accountCashFlowMem4 = this.collectionAccountCashFlow.currentItem.accountCashFlow;          
    }    
    
    delAccountCashFlow() {
        document.getElementById("closeDelAccountCashFlowModal").click();
        this.toastr.success('Delete Successfull', '');
    }  
    
    saveAccountCashFlow() {
        document.getElementById("closeAccountCashFlowModal").click();
        this.toastr.success('Save Successfull', '');
    }  
      
}