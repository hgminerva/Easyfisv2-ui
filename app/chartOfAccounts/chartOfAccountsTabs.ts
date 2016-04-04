import {Component, ContentChildren, QueryList, AfterContentInit, Inject } from 'angular2/core';
import {ChartOfAccountsTab} from '../chartOfAccounts/chartOfAccountsTab';
import {ChartOfAccountsComponent} from '../chartOfAccounts/chartOfAccounts';

@Component({
  selector: 'tabs',
  templateUrl: 'app/chartOfAccounts/chartOfAccountsTabs.html'
})
export class ChartOfAccountsTabs implements AfterContentInit {
    @ContentChildren(ChartOfAccountsTab) tabs: QueryList<ChartOfAccountsTab>; 
        
    ngAfterContentInit() {
        if(!_hasActiveTab(this.tabs)){
            this.selectTab(this.tabs.first);
        }
    
        function _hasActiveTab(tabs: QueryList<ChartOfAccountsTab>) {
            let activeTabs = tabs.filter((tab)=>tab.active);
            return Boolean(activeTabs.length);
        }  
    }
    
    selectTab(tab: ChartOfAccountsTab) {
        _deactivateAllTabs(this.tabs.toArray());
        tab.active = true;
    
        function _deactivateAllTabs(tabs: ChartOfAccountsTab[])    {
            tabs.forEach((tab)=>tab.active = false);
        }
    }  
    
}