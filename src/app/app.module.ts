import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ContractDetailPage} from "../pages/contract-detail/contract-detail";
import {ContractInboxPage} from "../pages/contract-inbox/contract-inbox";
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    TabsPage,
    ContractDetailPage,
    ContractInboxPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    TabsPage,
    ContractDetailPage,
    ContractInboxPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
