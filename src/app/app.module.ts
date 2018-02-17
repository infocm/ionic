import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
//import { Storage } from '@ionic/storage';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MurliPage, PopoverPage as PopoverContentPage } from '../pages/murli/murli';
// import { SaarPage } from '../pages/saar/saar';
import { HomeWorkPage } from '../pages/home-work/home-work';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { SwamanPage } from '../pages/swaman/swaman';
import { VardanPage } from '../pages/vardan/vardan';
import { NotePage } from '../pages/note/note';
import { AddItemPage } from '../pages/add-item/add-item';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Data } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    MurliPage,
    PopoverContentPage,
    // SaarPage,
    HomeWorkPage,
    TabsControllerPage,
    HomePage,
    AboutPage,
    SwamanPage,
    VardanPage,
    NotePage,
    AddItemPage,
    ItemDetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      statusbarPadding: true,
     },
     {
       links: [
        { component: PopoverContentPage, name: 'PopoverContentPage', segment: 'popover-content' },]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MurliPage,
    PopoverContentPage,
    // SaarPage,
    HomeWorkPage,
    TabsControllerPage,
    HomePage,
    AboutPage,
    SwamanPage,
    VardanPage,
    NotePage,
    AddItemPage,
    ItemDetailPage 
  ],
  providers: [
    StatusBar,
    //Storage,
    SplashScreen,
    Data, {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}