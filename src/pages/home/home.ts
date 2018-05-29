import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ModalController} from 'ionic-angular';
import {ContractDetailPage} from "../contract-detail/contract-detail";
import {RestProvider} from '../../providers/rest/rest';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any = {};
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
  },{
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

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public restProvider: RestProvider) {

    console.log(this.contracts);
  }


  openModal() {
    let modalPage = this.modalCtrl.create('ContractCreationModal');
    modalPage.present();
  }

  itemTapped(event, item) {
    this.navCtrl.push(ContractDetailPage, {
      item: item,
      inbox: false
    });
  }

  filterData(refresher, data){

    refresher.complete();
  }

  loadData(refresher) {
    this.restProvider.getContracts()
      .then(data => {
        if(data == null){
          refresher.complete();
        }else {
          this.filterData(refresher, data);
        }
      });
  }

}
