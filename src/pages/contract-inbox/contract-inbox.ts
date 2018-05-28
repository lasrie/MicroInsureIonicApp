import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ContractDetailPage} from "../contract-detail/contract-detail";

/**
 * Generated class for the ContractInboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-inbox',
  templateUrl: 'contract-inbox.html',
})
export class ContractInboxPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractInboxPage');
  }

  itemTapped(event, item) {
    this.navCtrl.push(ContractDetailPage, {
      item: item,
      inbox: true
    });
  }
}
