'use strict';

import {Component,Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class ChartOfAccountsService {
    private http : Http;
    
    constructor (_http: Http) {
        this.http = _http;
    }      
    
    // =======
    // ACCOUNT
    // =======
        
    getAccounts(component : Object) : wijmo.collections.ObservableArray {
        let data = new wijmo.collections.ObservableArray();
        let url = "http://api.accountico.io/api/MstAccount";  
        let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });        
        let options = new RequestOptions({ headers: headers }); 
        
        this.http.get(url, options)
            .subscribe(
                response => {
                    for (var key in response.json()) {
                        if (response.json().hasOwnProperty(key)) {
                            data.push({
                                id: response.json()[key].Id,
                                accountCode: response.json()[key].AccountCode,
                                account: response.json()[key].Account,
                                accountTypeId: response.json()[key].AccountTypeId, 
                                accountType: response.json()[key].AccountType,   
                                accountCashFlowId: response.json()[key].AccountCashFlowId 
                                accountCashFlow: response.json()[key].AccountCashFlow      
                            });                            
                        }
                    }                              
                },
                error => {
                    component.toastr.error('Get Error', '');
                }                
            );
            
        return data;
    }
    
    addAccount(data : Object, component : Object) : void {
        let url = "http://api.accountico.io/api/MstAccount";        
         
        let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });        
        headers.append('Content-Type', 'application/json'); 
        
        let options = new RequestOptions({ headers: headers });         
        
        this.http.post(url, JSON.stringify(data), options)
            .subscribe(response => {
                if(response.status == 200) {
                    component.createAccountCollection();
                    component.toastr.success('Save Successfull', '');
                } 
                else {
                    component.toastr.error('Save Error', '');
                }
            })
        );        
    }
    
    updateAccount(data : Object, component : Object) : void {
        let url = "http://api.accountico.io/api/MstAccount/" + data.Id;  
        
        let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });        
        headers.append('Content-Type', 'application/json'); 
        
        let options = new RequestOptions({ headers: headers }); 
        
        this.http.put(url,JSON.stringify(data),options)
            .subscribe(response => {
                if(response.status == 200) {
                    component.createAccountCollection();
                    component.toastr.success('Update Successfull', '');
                } 
                else {
                    component.toastr.error('Update Error', '');
                }
            })
        );            
    }    
    
    deleteAccount(data : Object, dataCollections : Object, toastr : Object) : void {
        let id = data.id;
        
        let url = "http://api.accountico.io/api/MstAccount/" + id;  
        let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });        
        let options = new RequestOptions({ headers: headers }); 
        
        this.http.delete(url,options)
            .subscribe(response => {
                if(response.status == 200) {
                    dataCollections.remove(data);
                    toastr.success('Delete Successfull', '');
                } 
                else {
                    toastr.error('Delete Error', '');
                }
            })
        );             
    }    
    
    // ============
    // ACCOUNT TYPE
    // ============
        
    getAccountTypes() : wijmo.collections.ObservableArray {
        var data = new wijmo.collections.ObservableArray();
        
        let url = "http://api.accountico.io/api/MstAccountType";  
        let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });        
        let options = new RequestOptions({ headers: headers }); 
        
        this.http.get(url, options)
            .subscribe(
                response => {
                    for (var key in response.json()) {
                        if (response.json().hasOwnProperty(key)) {
                            data.push({
                                id: response.json()[key].Id,
                                accountTypeCode: response.json()[key].AccountTypeCode,
                                accountType: response.json()[key].AccountType,
                                accountCategoryId: response.json()[key].AccountCategoryId    
                                accountCategory: response.json()[key].AccountCategory,
                                subCategoryDescription: response.json()[key].SubCategoryDescription
                            });                            
                        }
                    }                              
                },
                error => {
                    alert(error.text());
                    console.log(error.text());
                }                
            );
            
        return data;
    }
            
    // ================
    // ACCOUNT CATEGORY
    // ================            
            
    getAccountCategories() : wijmo.collections.ObservableArray {
        var data = new wijmo.collections.ObservableArray();
        
        let url = "http://api.accountico.io/api/MstAccountCategory";  
        let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });        
        let options = new RequestOptions({ headers: headers }); 
        
        this.http.get(url, options)
            .subscribe(
                response => {
                    for (var key in response.json()) {
                        if (response.json().hasOwnProperty(key)) {
                            data.push({
                                id: response.json()[key].Id,
                                accountCategoryCode: response.json()[key].AccountCategoryCode,
                                accountCategory: response.json()[key].AccountCategory                      
                            });                            
                        }
                    }                              
                },
                error => {
                    alert(error.text());
                    console.log(error.text());
                }                
            );
            
        return data;
    }
    
    // =========
    // CASH FLOW 
    // =========
        
    getAccountCashFlow() : wijmo.collections.ObservableArray {
        var data = new wijmo.collections.ObservableArray();
        
        let url = "http://api.accountico.io/api/MstAccountCashFlow"; 
        let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });        
        let options = new RequestOptions({ headers: headers }); 
        
        this.http.get(url, options)
            .subscribe(
                response => {
                    for (var key in response.json()) {
                        if (response.json().hasOwnProperty(key)) {
                            data.push({
                                id: response.json()[key].Id,
                                accountCashFlowCode: response.json()[key].AccountCashFlowCode,
                                accountCashFlow: response.json()[key].AccountCashFlow                      
                            });                            
                        }
                    }                              
                },
                error => {
                    alert(error.text());
                    console.log(error.text());
                }                
            );
            
        return data;
    }    
}