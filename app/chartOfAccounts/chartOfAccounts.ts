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
    
    public dataAccountCategory : wijmo.collections.ObservableArray;
    public dataAccountCashFlow : wijmo.collections.ObservableArray;
    public dataAccountType : wijmo.collections.ObservableArray;
    public dataAccount : wijmo.collections.ObservableArray;
    
    public dataAccountType_Index : number;
    public dataAccountCashFlow_Index : number;
    public dataAccountCategory_Index : number;
    
    public collectionAccountCategory : wijmo.collections.CollectionView;
    public collectionAccountCashFlow : wijmo.collections.CollectionView;
    public collectionAccountType : wijmo.collections.CollectionView;
    public collectionAccount : wijmo.collections.CollectionView;
    
    public accountIdMem1 : number;
    public accountCodeMem1 : string;
    public accountMem1 : string;
    public accountTypeMem1 : string;
    public accountTypeCodeMem1 : string;
    public accountCashFlowMem1 : string;
    public accountCashFlowCodeMem1 : string;
    
    public accountCategoryIdMem2 : number; 
    public accountCategoryCodeMem2 : string;
    public accountCategoryMem2 : string;
        
    public accountTypeIdMem3 : number;    
    public accountTypeCodeMem3 : string;
    public accountTypeMem3 : string;        
    public subCategoryDescriptionMem3 : string;    
    public accountCategoryMem3 : string;
    public accountCategoryCodeMem3 : string;    
    
    public accountCashFlowIdMem4 : number;
    public accountCashFlowCodeMem4 : string;
    public accountCashFlowMem4 : string;        
            
    public router : Router;
    public toastr : ToastsManager;
    
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
            this.createAccountCollection();
            this.createAccountTypeCollection();
            this.createAccountCategoryCollection();
            this.createAccountCashFlowCollection();        
        }
    } 
    
    public createAccountCollection() : void {
        this.dataAccount = this.chartOfAccountsService.getAccounts(this);
        this.collectionAccount = new wijmo.collections.CollectionView(this.dataAccount);
        this.collectionAccount.pageSize = 10; 
        this.collectionAccount.trackChanges = true;          
    }
    
    public createAccountTypeCollection() : void {
        this.dataAccountType = this.chartOfAccountsService.getAccountTypes(this);       
        this.dataAccountType_Index = 0;            
        this.collectionAccountType = new wijmo.collections.CollectionView(this.dataAccountType);
        this.collectionAccountType.pageSize = 10; 
        this.collectionAccountType.trackChanges = true;        
    }
    
    public createAccountCategoryCollection() : void {
        this.dataAccountCategory = this.chartOfAccountsService.getAccountCategories(this);  
        this.dataAccountCategory_Index = 0;                     
        this.collectionAccountCategory = new wijmo.collections.CollectionView(this.dataAccountCategory);
        this.collectionAccountCategory.pageSize = 10; 
        this.collectionAccountCategory.trackChanges = true;       
    }    
    
    public createAccountCashFlowCollection() : void {
        this.dataAccountCashFlow = this.chartOfAccountsService.getAccountCashFlow(this);
        this.dataAccountCashFlow_Index = 0;    
        this.collectionAccountCashFlow = new wijmo.collections.CollectionView(this.dataAccountCashFlow);
        this.collectionAccountCashFlow.pageSize = 10; 
        this.collectionAccountCashFlow.trackChanges = true;    
    }  
        
    refresh() {
        this.collectionAccount.refresh();
        this.collectionAccountType.refresh();
        this.collectionAccountCategory.refresh();
        this.collectionAccountCashFlow.refresh();
    }
    
    dataAccountType_Index_Update() {
        if(this.dataAccountType_Index >= 0) {
            this.accountTypeCodeMem1 = this.dataAccountType[this.dataAccountType_Index].accountTypeCode;
            this.accountTypeMem1 = this.dataAccountType[this.dataAccountType_Index].accountType; 
        }
    }
    
    dataAccountCashFlow_Index_Update() {
        if(this.dataAccountCashFlow_Index >= 0){
            this.accountCashFlowCodeMem1 = this.dataAccountCashFlow[this.dataAccountCashFlow_Index].accountCashFlowCode;
            this.accountCashFlowMem1 = this.dataAccountCashFlow[this.dataAccountCashFlow_Index].accountCashFlow;        
        }
    }    

    dataAccountCategory_Index_Update() {
        if(this.dataAccountCategory_Index >= 0) {
            this.accountCategoryCodeMem3 = this.dataAccountCategory[this.dataAccountCategory_Index].accountCategoryCode;
            this.accountCategoryMem3 = this.dataAccountCategory[this.dataAccountCategory_Index].accountCategory;      
        }
    }     
    
    // =======
    // ACCOUNT
    // =======
    
    openAccountModal(add) {
        document.getElementById("openAccountModal").click();
        if(add==true) {
            this.accountIdMem1 = 0;
            this.accountCodeMem1 = "";
            this.accountMem1 = "";
            this.accountTypeMem1 = "";
            this.accountTypeCodeMem1 = "";
            this.dataAccountType_Index = 0;
            this.accountCashFlowMem1 = "";
            this.accountCashFlowCodeMem1 = "";
            this.dataAccountCashFlow_Index = 0;            
        } else {
            this.accountIdMem1 = this.collectionAccount.currentItem.id;
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
        
        this.accountIdMem1 = this.collectionAccount.currentItem.id;
        this.accountMem1 = this.collectionAccount.currentItem.account;          
    }    
    
    delAccount() {
        this.chartOfAccountsService.deleteAccount(this.collectionAccount.currentItem,this);
        document.getElementById("closeDelAccountModal").click();
    }  
    
    saveAccount() {
        var data = {
            Id: this.accountIdMem1,
            AccountCode: this.accountCodeMem1,
            Account: this.accountMem1,
            AccountTypeId: this.dataAccountType[this.dataAccountType_Index].id,
            AccountType: this.accountTypeMem1,
            AccountCashFlowId: this.dataAccountCashFlow[this.dataAccountCashFlow_Index].id,
            AccountCashFlow: this.accountCashFlowCodeMem1,
            IsLocked: true,
            CreatedById: 0,
            CreatedDateTime: new Date(),
            UpdatedById: 0,
            UpdatedDateTime: new Date()        
        };

        if(this.accountIdMem1 == 0) {
            this.chartOfAccountsService.addAccount(data,this);
        } else {
            this.chartOfAccountsService.updateAccount(data,this);
        }
                
        document.getElementById("closeAccountModal").click();
    }
    
    // ============
    // ACCOUNT TYPE
    // ============
    
    openAccountTypeModal(add) {
        document.getElementById("openAccountTypeModal").click();
        if(add==true) {
            this.accountTypeIdMem3 = 0;
            this.accountTypeCodeMem3 = "";
            this.accountTypeMem3 = "";
            this.subCategoryDescriptionMem3 = ""
            this.accountCategoryMem3 = "";
            this.accountCategoryCodeMem3 = "";
            this.dataAccountCategory_Index = 0;  
        } else {
            this.accountTypeIdMem3 = this.collectionAccountType.currentItem.id;
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
        this.chartOfAccountsService.deleteAccountType(this.collectionAccountType.currentItem,this);
    }  
    
    saveAccountType() {
        var data = {
            Id: this.accountTypeIdMem3,
            AccountTypeCode: this.accountTypeCodeMem3,
            AccountType: this.accountTypeMem3,
            AccountCategoryId: this.dataAccountCategory[this.dataAccountCategory_Index].id,    
            AccountCategory: this.accountCategoryMem3,
            SubCategoryDescription: this.subCategoryDescriptionMem3,
            IsLocked: true,
            CreatedById: 0,
            CreatedDateTime: new Date(),
            UpdatedById: 0,
            UpdatedDateTime: new Date()        
        };

        if(this.accountTypeIdMem3 == 0) {
            this.chartOfAccountsService.addAccountType(data,this);
        } else {
            this.chartOfAccountsService.updateAccountType(data,this);
        }
                
        document.getElementById("closeAccountTypeModal").click();
    }       
    
    // ================
    // ACCOUNT CATEGORY
    // ================
         
    openAccountCategoryModal(add) {
        document.getElementById("openAccountCategoryModal").click();
        if(add==true) {
            this.accountCategoryIdMem2 = 0;
            this.accountCategoryCodeMem2 = "";
            this.accountCategoryMem2 = "";
        } else {
            this.accountCategoryIdMem2 = this.collectionAccountCategory.currentItem.id;
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
        this.chartOfAccountsService.deleteAccountCategory(this.collectionAccountCategory.currentItem,this);
    }  
    
    saveAccountCategory() {
       var data = {
            Id: this.accountCategoryIdMem2,
            AccountCategoryCode: this.accountCategoryMem2,
            AccountCategory: this.accountCategoryMem2,
            IsLocked: true,
            CreatedById: 0,
            CreatedDateTime: new Date(),
            UpdatedById: 0,
            UpdatedDateTime: new Date()        
        };

        if(this.accountCategoryIdMem2 == 0) {
            this.chartOfAccountsService.addAccountCategory(data,this);
        } else {
            this.chartOfAccountsService.updateAccountCategory(data,this);
        }

        document.getElementById("closeAccountCategoryModal").click();
    }     
    
    // =========
    // CASH FLOW 
    // =========
        
    openAccountCashFlowModal(add) {
        document.getElementById("openAccountCashFlowModal").click();
        if(add==true) {
            this.accountCashFlowIdMem4 = 0;
            this.accountCashFlowCodeMem4 = "";
            this.accountCashFlowMem4 = "";
        } else {
            this.accountCashFlowIdMem4 = this.collectionAccountCashFlow.currentItem.id;
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
        this.chartOfAccountsService.deleteAccountCashFlow(this.collectionAccountCashFlow.currentItem,this);
    }  
    
    saveAccountCashFlow() {
       var data = {
            Id: this.accountCashFlowIdMem4,
            AccountCashFlowCode: this.accountCashFlowMem4,
            AccountCashFlow: this.accountCashFlowMem4,
            IsLocked: true,
            CreatedById: 0,
            CreatedDateTime: new Date(),
            UpdatedById: 0,
            UpdatedDateTime: new Date()        
        };

        if(this.accountCashFlowIdMem4 == 0) {
            this.chartOfAccountsService.addAccountCashFlow(data,this);
        } else {
            this.chartOfAccountsService.updateAccountCashFlow(data,this);
        }

        document.getElementById("closeAccountCashFlowModal").click();
    }  
      
}