import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, LoadingController } from 'ionic-angular';
//import  himalaya  from 'himalaya';
import  getsy from 'getsy';
import moment from 'moment';
//import 'rxjs/add/operator/map';
import { TabsControllerPage } from './../tabs-controller/tabs-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: any;
  post: any;
  date: any;
  sDate: any[];
  selectDate:any;
  dd:any = "DD";
  loadUrl(date){
    getsy('http://www.babamurli.com/01.%20Daily%20Murli/01.%20Hindi/01.%20Hindi%20Murli%20-%20Htm/'+date+'-H.htm', {corsProxy:'', iframe: true })
      .then(myGetsy => { 
        this.title = myGetsy.getMe('.MsoNormal').eq(0).text().slice(8,50);
        //this.post = myGetsy.getMe('.MsoNormal').text();
        // for(var i=0; i<myGetsy.getMe('.MsoNormal').length;i++){
        //   this.posts.push({ id: i,  
        //                value: myGetsy.getMe('.MsoNormal').eq(i).text()
        //   });
        // }
        //console.log("👉loadUrl :"+ this.title);
        //console.log("👉loadUrl :"+ this.post);
        //this.posts = myGetsy.content;
        //var json = himalaya.parse(this.posts);
        //console.log('👉 Step2 :', json);

        //myGetsy.showFrame() // Show the frame?
        //console.log(myGetsy.getMe('.MsoNormal').text() + ' MsoNormal.') //length + ' MsoNormal.')
        
        //this.posts = myGetsy.getMe('.MsoNormal').text()


        // myGetsy.scroll(10).then(({ succesfulTimes, totalRetries }) => {
        //   console.log('New content loaded ' + succesfulTimes + ' times with ' + totalRetries + ' total retries.')

        //   console.log(myGetsy.getMe('.box1').length + ' boxes.') // More content!
          
        //   myGetsy.hideFrame()
        // })
      })
  }

  // loadMainUrl(){
  //   getsy('http://www.babamurli.com/00.%20Htm/01.%20Hindi.html', { iframe: true })
  //     .then(myGetsy => { 
  //       this.title = myGetsy.getMe('table').text();
  //       this.post = myGetsy.getMe('.MsoNormal').eq(2).text();
  //       //console.log("👉"+ this.title);
  //       //console.log("👉"+ this.post);
  //     })
  // }

  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController) {
    this.sDate = [];
    this.date = moment().format('DD.MM.YY');
    for(var i=1; i<6; i++){
      this.sDate.push(moment().subtract('day', i).format('DD.MM.YY'));
      }
    //console.log("👉 Const "+ this.date)
    //console.log("👉 Const "+ this.sDate)
    //this.date = this.dd+'.'+this.mm+'.'+this.yy;
    //console.log("👉 Const "+ datestring);
    let loader = this.loadingCtrl.create({
      content: 'Getting Murli...',
    });

    loader.present().then(() => {
      this.loadUrl(this.date);
      loader.dismiss();
    });
    //this.loadMainUrl();
    //console.log("👉 Step1");
    

    // this.http.get('http://www.babamurli.com/01.%20Daily%20Murli/01.%20Hindi/01.%20Hindi%20Murli%20-%20Htm/12.07.17-H.htm')
    //   .map(res => res.text())
    //   .subscribe(
    //   data => {
    //     console.log("👉 Step2 :" + data);
    //     this.htmlposts = data;
    //   },
    //   err => {
    //     console.log("Oops! " + err);
    //   }
    // );

    //var html = "<div>Hello world</div>";
    

  }

  loadMurliselectDate(){
    this.selectDate = this.dd.replace(/\s/g, "");
    //console.log("👉 loadMurliselectDate :" + this.selectDate);
    this.goToMurli(this.selectDate);
  }

  goToMurli(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage, {
      params: params});
    //console.log("👉Home params :" + params);  
    //this.navCtrl.setRoot(TabsControllerPage);
  }
}

  