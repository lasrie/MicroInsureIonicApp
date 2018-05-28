import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ContractInboxPage} from './contract-inbox';

@NgModule({
  declarations: [
    ContractInboxPage,
  ],
  imports: [
    IonicPageModule.forChild(ContractInboxPage),
  ],
})
export class ContractInboxPageModule {
}
