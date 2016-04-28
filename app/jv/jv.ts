import {Component, OnInit, Inject} from 'angular2/core';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import {JVService} from '../jv/jvService';

@Component({
  selector: 'jv',
  templateUrl: 'app/jv/jv.html',
  directives: [ wjNg2FlexGrid.WjFlexGrid, 
                wjNg2FlexGrid.WjFlexGridColumn, 
                wjNg2FlexGrid.WjFlexGridCellTemplate,
                wjNg2Input.WjInputDate],
   providers: [ToastsManager,JVService]
})
export class JVComponent implements OnInit {
    public startDate : Date;
    public endDate : Date;
    
    public dataJV : wijmo.collections.ObservableArray;
    public collectionJV : wijmo.collections.CollectionView;
    
    constructor (public _router: Router, 
                 public _toastr: ToastsManager,
                 @Inject(JVService) private _jvService: JVService) {         
    }     
    
    ngOnInit() {
        if (!localStorage.getItem('access_token')) {
            this._router.navigate(['Login']);
        } else {     
            this.startDate = new Date();
            this.endDate = new Date();
            this.createJV();
        }
    } 
    
    createJV() {
        this.dataJV = this._jvService.getJVList(this);
        this.collectionJV = new wijmo.collections.CollectionView(this.dataJV);
        this.collectionJV.pageSize = 10; 
        this.collectionJV.trackChanges = true;  
    }
    
    openJVDetail(add : boolean) {
        if(add == true) {
            this._router.navigate(['JVDetail', { id: 0 }]);
        } else {
            this._router.navigate(['JVDetail', { id: this.collectionJV.currentItem.id }]);
        }
    }
    
    openDelJVModal() {
            
    }
}