import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ViewController} from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';


/**
 * Generated class for the ContractCreationModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-creation-modal',
  templateUrl: 'contract-creation-modal.html',
})
export class ContractCreationModal {

 

  startDate: string;
  endDate: string;
  insuranceSum: number;
  insuranceObject: string;
  borrowerID: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public restProvider: RestProvider) {

  }

  createProposal() {
      let d = new Date();
      let time = d.getTime();
      let proposal = 
         {
      "$class": "org.minsurance.project.Proposal",
      "contract": "resource:org.minsurance.project.Contract#3172",
      "contractID": time,
      "beginDate": this.startDate,
      "endDate": this.endDate,
      "description": "fas",
      "objectID": this.insuranceSum,
      "lenderID": "222",
      "borrowerID": this.borrowerID,
      "insuranceID": "i111",
      "blackBoxID": "black111",
      "price": 500,
      "insuranceSum": this.insuranceSum,
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
    
 
      }
      
      
    this.restProvider.createProposal(proposal).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

 

  


  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractCreationModal');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
