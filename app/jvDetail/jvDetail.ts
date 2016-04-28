import {Component, OnInit, Inject} from 'angular2/core';
import {Router,RouteParams,Location} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import {JVDetailService} from '../jvDetail/jvDetailService';

@Component({
  selector: 'jvDetail',
  templateUrl: 'app/jvDetail/jvDetail.html',
  directives: [ wjNg2FlexGrid.WjFlexGrid, 
                wjNg2FlexGrid.WjFlexGridColumn, 
                wjNg2FlexGrid.WjFlexGridCellTemplate,
                wjNg2Input.WjInputDate],
   providers: [ToastsManager,JVDetailService]
})
export class JVDetailComponent implements OnInit {
    public idMem1 : number;
    public branchIdMem1 : string;
    public branchMem1 : string;
    public jvNumberMem1 : string;
    public jvDateMem1 : Date;
    public particularsMem1 : string;
    public manualJVNumberMem1 : string;
    public preparedByIdMem1 : number;
    public preparedByMem1 : string;
    public checkedByIdMem1 : number
    public checkedByMem1 : string;
    public approvedByIdMem1 : number;
    public approvedByMem1 : string;
    public isLockedMem1 : boolean;
    public createdByIdMem1 : number;
    public createdDateTimeMem1 : Date;
    public updatedByIdMem1 : number;
    public updatedDateTimeMem1 : Date;
    
    public dataJV : wijmo.collections.ObservableArray;
    public collectionJV : wijmo.collections.CollectionView;
    
    public id : string;
    
    constructor (public _router: Router, 
                 public _location: Location,
                 public _toastr: ToastsManager,
                 @Inject(JVDetailService) private _jvDetailService: JVDetailService,
                 private _routerParams: RouteParams) {
        this.id = _routerParams.get('id');
    }     
    
    ngOnInit() {
        if (!localStorage.getItem('access_token')) {
            this._router.navigate(['Login']);
        } else {     
            this.initJVDetail();
        }
    } 
    
    initJVDetail() {
        this.jvDateMem1 = new Date();
    }
    
    closeJVDetail() {
        this._router.navigate(['JV']);
    }
}