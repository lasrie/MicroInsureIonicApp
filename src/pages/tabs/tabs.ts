import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {ProfilePage} from '../profile/profile';
import {ContractInboxPage} from "../contract-inbox/contract-inbox";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContractInboxPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
