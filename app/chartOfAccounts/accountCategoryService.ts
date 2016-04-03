'use strict';

import {Component,Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class AccountCategoryService {
    private http : Http;
    
    constructor (_http: Http) {
        this.http = _http;
    }      
    
    getAccountCategories() : wijmo.collections.ObservableArray {
        var data = new wijmo.collections.ObservableArray();
        
        let url = "http://api.accountico.io/api/AccountCategory";  
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
                                accountCategory: response.json()[key].AccountCategoryDescription                      
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