import {Component, OnInit, Inject} from 'angular2/core';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import {JournalVoucherService} from '../journalVoucher/journalVoucherService';

@Component({
  selector: 'journalVoucher',
  templateUrl: 'app/journalVoucher/journalVoucher.html',
  directives: [ wjNg2FlexGrid.WjFlexGrid, 
                wjNg2FlexGrid.WjFlexGridColumn, 
                wjNg2FlexGrid.WjFlexGridCellTemplate,
                wjNg2Input.WjInputDate],
   providers: [ToastsManager,JournalVoucherService]
})
export class JournalVoucherComponent implements OnInit {
    public startDate : Date;
    public endDate : Date;
    
    public dataJournalVoucher : wijmo.collections.ObservableArray;
    public collectionJournalVoucher : wijmo.collections.CollectionView;
    
    constructor (private _router: Router, 
                 private _toastr: ToastsManager,
                 @Inject(JournalVoucherService) private _journalVoucherService: JournalVoucherService) {
    }     
    
    ngOnInit() {
        if (!localStorage.getItem('access_token')) {
            this._router.navigate(['Login']);
        } else {     
            this.startDate = new Date();
            this.endDate = new Date();
            this.createJournalVoucher();
        }
    } 
    
    createJournalVoucher() {
        this.dataJournalVoucher = this._journalVoucherService.getJournalVoucherList(this);
        this.collectionJournalVoucher = new wijmo.collections.CollectionView(this.dataJournalVoucher);
        this.collectionJournalVoucher.pageSize = 10; 
        this.collectionJournalVoucher.trackChanges = true;  
    }
}