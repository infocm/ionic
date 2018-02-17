import { NotePage } from './../note/note';
import { VardanPage } from './../vardan/vardan';
import { SwamanPage } from './../swaman/swaman';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MurliPage } from './../murli/murli';
// import { SaarPage } from './../saar/saar';
import { HomeWorkPage } from './../home-work/home-work';


@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  public murliDate: any;
  tab1Root: any = MurliPage;
  // tab2Root: any = SaarPage;
  tab3Root: any = HomeWorkPage;
  tab4Root: any = SwamanPage;
  tab5Root: any = VardanPage;
  tab6Root: any = NotePage;
  constructor(public navCtrl: NavController, public params: NavParams) {
    this.murliDate = params.get('params');
    //console.log("👉 Tab :" + this.murliDate);
  }
}
