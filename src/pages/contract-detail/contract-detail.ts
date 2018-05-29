import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
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

  contracts: any = {};
  contract: any = {};
  blackbox: any = {};
  insurer: any = {};
  user: any = {};
  incident: any = {};
  insuredObject: any = {};
    
     accept =
    {
      "$class": "org.minsurance.project.Accept",
      "contract": "resource:org.minsurance.project.Contract#contract333"
    }

  report =
    {
      "$class": "org.minsurance.project.Report",
      "contract": "resource:org.minsurance.project.Contract#"
    }


  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.id = this.navParams.get("item");
    this.inbox = this.navParams.get("inbox");
      this.loadData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractDetailPage');
    console.log(this.id);
    console.log(this.inbox);
  }

  loadData() {

    this.restProvider.getContracts()
      .then(data => {
        this.filterData(data);

      });
  }
    
    filterData(data){
        this.contract = {};
      for(let obj of data){
           if(obj.contractID == this.id){
              this.contract = obj;
               console.log(this.contract);
          }
      }
    }
    
     acceptProposal() {
       let accept = {
      "$class": "org.minsurance.project.Accept",
      "contract": "resource:org.minsurance.project.Contract#" + this.contract.contractID
    }
    this.restProvider.acceptProposal(accept).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }
    
    reportContract() {
    let    report =
    {
      "$class": "org.minsurance.project.Report",
      "contract": "resource:org.minsurance.project.Contract#" + this.contract.contractID
    }
    this.restProvider.reportContract(report).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }
}
