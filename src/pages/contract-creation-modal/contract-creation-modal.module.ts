import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractCreationModal } from './contract-creation-modal';

@NgModule({
  declarations: [
    ContractCreationModal,
  ],
  imports: [
    IonicPageModule.forChild(ContractCreationModal),
  ],
})
export class ContractCreationModalModule {}
