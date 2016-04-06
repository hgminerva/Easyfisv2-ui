'use strict';

import {Component,Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class ChartOfAccountsService {
    private http : Http;
    
    constructor (_http: Http) {
        this.http = _http;
    }      
    
    getAccounts() : wijmo.collections.ObservableArray {
        var data = new wijmo.collections.ObservableArray();
        
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
                                accountType: response.json()[key].AccountType,   
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