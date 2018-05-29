import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

apiUrl = 'http://localhost:3000';

    
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
    
    
    getLenders() {
      return new Promise(resolve => {
        this.http.get(this.apiUrl+'/api/Lender').subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
    }
    
    getBorrowers() {
      return new Promise(resolve => {
        this.http.get(this.apiUrl+'/api/Borrower').subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
    }
    
    
    getBlackbox() {
      return new Promise(resolve => {
        this.http.get(this.apiUrl+'/api/Blackbox').subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
    }
    
    getProposals() {
      return new Promise(resolve => {
        this.http.get(this.apiUrl+'/api/Proposal').subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
    }
    
    getAccepts() {
      return new Promise(resolve => {
        this.http.get(this.apiUrl+'/api/Accept').subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
    }
    
    getReports() {
      return new Promise(resolve => {
        this.http.get(this.apiUrl+'/api/Report').subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
    }
    
    
    createProposal(data) {
      return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl+'/api/Proposal', data)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }
    
    acceptProposal(data) {
      return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl+'/api/Accept', data)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }
    
    reportContract(data) {
      return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl+'/api/Report', data)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }
    
    
    
    //needHeaders?
//    this.http.post(this.apiUrl+'/users', JSON.stringify(data), {
//        headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
//        params: new HttpParams().set('id', '3'),
//      })
//      .subscribe(res => {
//        resolve(res);
//      }, (err) => {
//        reject(err);
//      });

}
