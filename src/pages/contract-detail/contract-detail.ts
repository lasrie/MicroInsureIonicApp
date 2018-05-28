import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContractDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-detail',
  templateUrl: 'contract-detail.html',
})
export class ContractDetailPage {
  id: string;
  inbox: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get("item");
    this.inbox = this.navParams.get("inbox");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractDetailPage');
    console.log(this.id);
    console.log(this.inbox);
  }

}
