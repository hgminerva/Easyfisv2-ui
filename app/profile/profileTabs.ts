import {Component, ContentChildren, QueryList, AfterContentInit, Inject } from 'angular2/core';
import {ProfileTab} from '../profile/profileTab';
import {ProfileComponent} from '../profile/profile';

@Component({
  selector: 'tabs',
  templateUrl: 'app/profile/profileTabs.html'
})
export class ProfileTabs implements AfterContentInit {
    @ContentChildren(ProfileTab) tabs: QueryList<ProfileTab>; 
        
    ngAfterContentInit() {
        if(!_hasActiveTab(this.tabs)){
            this.selectTab(this.tabs.first);
        }
    
        function _hasActiveTab(tabs: QueryList<ProfileTab>) {
            let activeTabs = tabs.filter((tab)=>tab.active);
            return Boolean(activeTabs.length);
        }  
    }
    
    selectTab(tab: ProfileTab) {
        _deactivateAllTabs(this.tabs.toArray());
        tab.active = true;
    
        function _deactivateAllTabs(tabs: ProfileTab[])    {
            tabs.forEach((tab)=>tab.active = false);
        }
    }  
    
}