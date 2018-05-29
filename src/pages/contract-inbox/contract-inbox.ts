import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ContractDetailPage} from "../contract-detail/contract-detail";
import {RestProvider} from "../../providers/rest/rest";

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

  proposals: any;
  myUserID = '222';

  contracts: any = [{
    "$class": "org.minsurance.project.Proposal",
    "contract": "resource:org.minsurance.project.Contract#3172",
    "contractID": "contract333",
    "beginDate": "2018-05-29T07:27:07.335Z",
    "endDate": "2018-05-29T07:27:07.335Z",
    "description": "fas",
    "objectID": "object111",
    "lenderID": "222",
    "borrowerID": "111",
    "insuranceID": "i111",
    "blackBoxID": "black111",
    "status": "accepted",
    "price": 500,
    "insuranceSum": 10,
    "futureHolder": {
      "$class": "org.minsurance.project.User",
      "persoNmb": "2705",
      "firstName": "dqw",
      "lastName": "qwd",
      "email": "dqw",
      "phoneNmb": "fsa",
      "birthDate": "asf",
      "avatarUrl": "fas",
      "address": {
        "$class": "org.minsurance.project.Address",
        "street": "asf",
        "city": "fas",
        "zipCode": 0,
        "country": "Germany"
      }
    }
  }, {
    "$class": "org.minsurance.project.Proposal",
    "contract": "resource:org.minsurance.project.Contract#3172",
    "contractID": "contract333",
    "beginDate": "2018-05-29T07:27:07.335Z",
    "endDate": "2018-05-29T07:27:07.335Z",
    "description": "fas",
    "objectID": "object111",
    "lenderID": "222",
    "borrowerID": "111",
    "insuranceID": "i111",
    "blackBoxID": "black111",
    "status": "opened",
    "price": 500,
    "insuranceSum": 10
  }, {
    "$class": "org.minsurance.project.Proposal",
    "contract": "resource:org.minsurance.project.Contract#3172",
    "contractID": "contract333",
    "beginDate": "2018-05-29T07:27:07.335Z",
    "endDate": "2018-05-29T07:27:07.335Z",
    "description": "fas",
    "objectID": "object111",
    "lenderID": "222",
    "borrowerID": "111",
    "insuranceID": "i111",
    "blackBoxID": "black111",
    "status": "reported",
    "price": 500,
    "insuranceSum": 10,
    "futureHolder": {
      "$class": "org.minsurance.project.User",
      "persoNmb": "2705",
      "firstName": "dqw",
      "lastName": "qwd",
      "email": "dqw",
      "phoneNmb": "fsa",
      "birthDate": "asf",
      "avatarUrl": "fas",
      "address": {
        "$class": "org.minsurance.project.Address",
        "street": "asf",
        "city": "fas",
        "zipCode": 0,
        "country": "Germany"
      }
    }
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
      this.loadDataNoRefresher();
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

  filterData(refresher, data){
      console.log(data);
      this.proposals = [];
      for(let obj of data){
           if(obj.borrowerID == "111"  && obj.status == "proposed"){
              this.proposals.push(obj);
          }
      }
    refresher.complete();
  }

  loadData(refresher) {
    this.restProvider.getContracts()
      .then(data => {
        if (data == null) {
          refresher.complete();
        } else {
          this.filterData(refresher, data);
        }
      });
  }
    
     loadDataNoRefresher() {
    this.restProvider.getContracts()
      .then(data => {
        if(data == null){
        }else {
          this.filterDataNoRefresher(data);
        }
      });
  }
    
    filterDataNoRefresher( data){
      console.log(data);
     this.proposals = [];
      for(let obj of data){
           if(obj.borrowerID == "111" && obj.status == "proposed" ){
              this.proposals.push(obj);
          }
      }
  }
}
