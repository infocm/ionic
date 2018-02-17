import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import  getsy from 'getsy';

@Component({
  selector: 'page-home-work',
  templateUrl: 'home-work.html'
})
export class HomeWorkPage {
  title: any;
  homework:any;
  loadUrl(date){
    getsy('http://www.babamurli.com/01.%20Daily%20Murli/01.%20Hindi/22.%20Murli%20Chart%20-%20Htm/'+date+'-MurliChart.htm', {corsProxy:'', iframe: true })
      .then(myGetsy => {
        
        this.title = myGetsy.getMe('.MsoNormal').eq(1).text();
        this.homework = myGetsy.getMe('div').eq(0).text();
        
        //console.log("👉"+ this.homework);
        //console.log("👉"+this.homework);
      })
  }


  constructor(public navCtrl: NavController, public murliDate: NavParams, public loadingCtrl: LoadingController) {
    let loader = this.loadingCtrl.create({
      content: 'Getting Homework...',
    });

    loader.present().then(() => {
      this.loadUrl(murliDate.data);
      loader.dismiss();
    });
  }  
}
