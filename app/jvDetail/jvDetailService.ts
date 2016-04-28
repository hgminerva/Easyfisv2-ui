'use strict';

import {Component,Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';

import {JVDetailComponent} from '../jvDetail/jvDetail';

@Injectable()
export class JVDetailService {
    private http : Http;
    
    constructor (_http: Http) {
        this.http = _http;
    } 
    
    getJV(component : JVDetailComponent) : Object {
        let data : Object;
        let url : string = "http://api.accountico.io/api/TrnJournalVoucher/" + component.id;
        let headers : Headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });        
        let options : RequestOptions = new RequestOptions({ headers: headers });       
        
        this.http.get(url, options)
            .subscribe(
                response => {
                    for (var key in response.json()) {
                        if (response.json().hasOwnProperty(key)) {
                            data = {
                                id: response.json()[key].Id,
                                branchId: response.json()[key].BranchId,
                                branch: response.json()[key].Branch,
                                jvNumber: response.json()[key].JVNumber,
                                jvDate: response.json()[key].JVDate,
                                particulars: response.json()[key].Particulars,
                                manualJVNumber: response.json()[key].ManualJVNumber,
                                preparedById: response.json()[key].PreparedById,
                                preparedBy: response.json()[key].PreparedBy,
                                checkedById: response.json()[key].CheckedById,
                                checkedBy: response.json()[key].CheckedBy,
                                approvedById: response.json()[key].ApprovedById,
                                approvedBy: response.json()[key].ApprovedBy,
                                isLocked: response.json()[key].IsLocked,
                                createdById: response.json()[key].CreatedById,
                                createdDateTime: response.json()[key].CreatedDateTime,
                                updatedById: response.json()[key].UpdatedById,
                                updatedDateTime: response.json()[key].UpdatedDateTime
                            };                            
                        }
                    }                          
                },
                error => {
                    component._toastr.error('Get Error', '');
                }                
            );
            
        return data;
        
    }
}