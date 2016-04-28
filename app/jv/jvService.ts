'use strict';

import {Component,Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';

import {JVComponent} from '../jv/jv';

@Injectable()
export class JVService {
    private http : Http;
    
    constructor (_http: Http) {
        this.http = _http;
    }  

    convertDateToString(date : Date) : string {
        let yyyy : string = date.getFullYear().toString();                                    
        let mm : string = (date.getMonth()+1).toString();        
        let dd  : string = date.getDate().toString();             
                            
        return yyyy + '-' + (mm[1] ? mm : "0"+mm[0]) + '-' + (dd[1] ? dd : "0"+dd[0]);    
    }

    
    getJVList(component : JVComponent) : wijmo.collections.ObservableArray {
        let branchId : number = localStorage.getItem('branchId');
        let data : wijmo.collections.ObservableArray = new wijmo.collections.ObservableArray();
        let url : string = "http://api.accountico.io/api/TrnJournalVoucher/List?startDate=" + this.convertDateToString(component.startDate) + "&" +
                                                                               "endDate=" + this.convertDateToString(component.endDate) + "&" +
                                                                               "branchId=" + branchId;        
        let headers : Headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });        
        let options : RequestOptions = new RequestOptions({ headers: headers }); 
        
        this.http.get(url, options)
            .subscribe(
                response => {
                    for (var key in response.json()) {
                        if (response.json().hasOwnProperty(key)) {
                            data.push({
                                id: response.json()[key].Id,
                                branchId: response.json()[key].BranchId,
                                branch: response.json()[key].Branch,
                                jvNumber: response.json()[key].JVNumber,
                                jvDate: response.json()[key].JVDate,
                                jvDateToString: this.convertDateToString(new Date(response.json()[key].JVDate)),
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
                            });                            
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