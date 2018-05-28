import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import {ContractDetailPage} from "../contract-detail/contract-detail";
import { RestProvider } from '../../providers/rest/rest';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;    
    
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public restProvider: RestProvider) {
    
      console.log(this.getUsers());
      console.log(this.getContracts());

 
  }
    
    
    getUsers() {
        this.restProvider.getUsers()
        .then(data => {
          this.users = data;
          console.log(this.users);
        });
      }
    
    getContracts() {
        this.restProvider.getContracts()
        .then(data => {
          this.users = data;
          console.log(this.users);
        });
      }

    
  openModal() {
    let modalPage = this.modalCtrl.create('ContractCreationModal');
    modalPage.present();
  }

  itemTapped(event, item) {
    this.navCtrl.push(ContractDetailPage, {
      item: item
    });
  }

}
