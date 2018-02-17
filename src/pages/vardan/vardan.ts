import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-vardan',
  templateUrl: 'vardan.html',
})
export class VardanPage {
  vardanUrl: any;
  constructor(public navCtrl: NavController, public murliDate: NavParams, public loadingCtrl: LoadingController) {
    let loader = this.loadingCtrl.create({
      content: 'Getting Murli...',
    });

    loader.present().then(() => {  
      this.vardanUrl = "http://www.babamurli.com/01.%20Daily%20Murli/01.%20Hindi/21.%20Murli%20Vardan%20-%20jpg/"+murliDate.data+"-Var.jpg";
      loader.dismiss();
    });  
  }
}
