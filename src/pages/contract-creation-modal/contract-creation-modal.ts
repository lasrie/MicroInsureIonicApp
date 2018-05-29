import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


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

   proposal= 
    {
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
        }
    
    accept= 
    {
      "$class": "org.minsurance.project.Accept",
      "contract": "resource:org.minsurance.project.Contract#contract333"
    }
    
    report=
    {
      "$class": "org.minsurance.project.Report",
      "contract": "resource:org.minsurance.project.Contract#contract333"
    }
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, public restProvider: RestProvider ) {
    
      
  }
    
    
    createProposal() {
      this.restProvider.createProposal(this.proposal).then((result) => {
        console.log(result);
      }, (err) => {
        console.log(err);
      });
    }
    
    acceptProposal() {
      this.restProvider.acceptProposal(this.accept).then((result) => {
        console.log(result);
      }, (err) => {
        console.log(err);
      });
    }
    
    reportContract() {
      this.restProvider.reportContract(this.report).then((result) => {
        console.log(result);
      }, (err) => {
        console.log(err);
      });
    }
    

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractCreationModal');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }
}
