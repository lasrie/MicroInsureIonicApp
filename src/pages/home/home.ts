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
    
      console.log(this.getLenders());
      console.log(this.getBorrowers());
      console.log(this.getBlackbox());
      console.log(this.getProposals());
      console.log(this.getAccepts());
      console.log(this.getReports());



 
  }
    
    
    getLenders() {
        this.restProvider.getLenders()
        .then(data => {
          this.users = data;
          console.log(this.users);
        });
      }
    
    getBorrowers() {
        this.restProvider.getBorrowers()
        .then(data => {
          this.users = data;
          console.log(this.users);
        });
      }
    
    getBlackbox() {
        this.restProvider.getBlackbox()
        .then(data => {
          this.users = data;
          console.log(this.users);
        });
      }
    
    getProposals() {
        this.restProvider.getProposals()
        .then(data => {
          this.users = data;
          console.log(this.users);
        });
      }
    
    getAccepts() {
        this.restProvider.getAccepts()
        .then(data => {
          this.users = data;
          console.log(this.users);
        });
      }
    
    getReports() {
        this.restProvider.getReports()
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
