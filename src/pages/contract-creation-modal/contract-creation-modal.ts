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

        
    testContract = {
              $class: 'org.example.microinsurance.SampleAsset',
              'assetId': 'aaa',
              'owner': '111',
              'value': 'Testvalueaaa'
            };  
    
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, public restProvider: RestProvider ) {
    
      
  }
    
    
    saveContract() {
      this.restProvider.saveContract(this.testContract).then((result) => {
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
