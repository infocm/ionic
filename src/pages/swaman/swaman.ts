import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-swaman',
  templateUrl: 'swaman.html',
})
export class SwamanPage {
  swamanUrl: any;
  constructor(public navCtrl: NavController, public murliDate: NavParams, public loadingCtrl: LoadingController) {
    let loader = this.loadingCtrl.create({
      content: 'Getting Swaman...',
    });

    loader.present().then(() => {
      this.swamanUrl = "http://www.babamurli.com/01.%20Daily%20Murli/01.%20Hindi/27.%20Murli%20Swaman%20-%20jpg/"+murliDate.data+"-Swa.jpg";
      loader.dismiss();
    });
  }
}
