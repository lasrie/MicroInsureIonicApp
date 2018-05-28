import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractCreationModal } from './contract-creation-modal';
import { RestProvider } from '../../providers/rest/rest';


@NgModule({
  declarations: [
    ContractCreationModal,
  ],
  imports: [
    IonicPageModule.forChild(ContractCreationModal),
  ],
})
export class ContractCreationModalModule {}
