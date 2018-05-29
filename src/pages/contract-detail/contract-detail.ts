import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";

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

  contracts: any;
  contract: any;
  blackbox: any;
  insurer: any;
  user: any;
  incident: any;
  insuredObject: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.id = this.navParams.get("item");
    this.inbox = this.navParams.get("inbox");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractDetailPage');
    console.log(this.id);
    console.log(this.inbox);
  }

  loadData(){

    this.restProvider.getProposals()
      .then(data => {
        this.contracts = data;
        console.log(this.contracts);

      });

    this.restProvider.getBlackbox()
      .then(data => {
        this.incident = data;
        console.log(this.incident);
      });
  }
}
