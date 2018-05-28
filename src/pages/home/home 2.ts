import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ModalController} from 'ionic-angular';
import {ContractDetailPage} from "../contract-detail/contract-detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

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
