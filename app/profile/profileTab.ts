import { Component } from 'angular2/core';

@Component({
  selector: 'tab',
  inputs: [
    'title:tabTitle',
    'active'
  ],
  template: `
        <div [hidden]="!active" class="pane">
            <ng-content></ng-content>
        </div>
  `
})
export class ProfileTab {
    title: string;
    active = this.active || false;
}