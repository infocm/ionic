import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, PopoverController, LoadingController, AlertController} from 'ionic-angular';
import  getsy from 'getsy';

@Component({
  template: `
    <ion-list>
      <ion-list-header color="danger">
        <h2 ion-text>Settings</h2>
      </ion-list-header>
      <ion-item-group>
        <ion-item-divider color="danger">Reading text size</ion-item-divider>
        <ion-item on-click="changeFontSize('larger')">
          A++
        </ion-item>
      </ion-item-group>
      <ion-item-group>
        <ion-item-divider color="danger">Reading background color</ion-item-divider>
        <ion-item on-click="changeBackground('white')">
          white
        </ion-item>
        <ion-item on-click="changeBackground('tan')">
          tan
        </ion-item>
        <ion-item on-click="changeBackground('grey')">
          grey
        </ion-item>
        <ion-item on-click="changeBackground('black')">
          black
        </ion-item>
      </ion-item-group>
    </ion-list>
  `
})
export class PopoverPage {
  background: string;
  contentEle: any;
  textEle: any;
  fontFamily;

  colors = {
    'white': {
      'bg': 'rgb(255, 255, 255)',
      'fg': 'rgb(0, 0, 0)'
    },
    'tan': {
      'bg': 'rgb(249, 241, 228)',
      'fg': 'rgb(0, 0, 0)'
    },
    'grey': {
      'bg': 'rgb(76, 75, 80)',
      'fg': 'rgb(255, 255, 255)'
    },
    'black': {
      'bg': 'rgb(0, 0, 0)',
      'fg': 'rgb(255, 255, 255)'
    },
  };

  constructor(private navParams: NavParams) {

  }

  ngOnInit() {
    if (this.navParams.data) {
      this.contentEle = this.navParams.data.contentEle;
      this.textEle = this.navParams.data.textEle;

      this.background = this.getColorName(this.contentEle.style.backgroundColor);
      this.setFontFamily();
    }
  }

  getColorName(background) {
    let colorName = 'white';

    if (!background) return 'white';

    for (var key in this.colors) {
      if (this.colors[key].bg == background) {
        colorName = key;
      }
    }

    return colorName;
  }

  setFontFamily() {
    if (this.textEle.style.fontFamily) {
      this.fontFamily = this.textEle.style.fontFamily.replace(/'/g, "");
    }
  }

  changeBackground(color) {
    this.background = color;
    this.contentEle.style.backgroundColor = this.colors[color].bg;
    this.textEle.style.color = this.colors[color].fg;
  }

  changeFontSize(direction) {
    this.textEle.style.fontSize = direction;
  }

  changeFontFamily() {
    if (this.fontFamily) this.textEle.style.fontFamily = this.fontFamily;
  }
}


@Component({
  selector: 'page-murli',
  templateUrl: 'murli.html'
})
export class MurliPage {
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

  title: any;
  header: any;
  lists: any[];
  loadUrl(date){
    getsy('http://www.babamurli.com/01.%20Daily%20Murli/01.%20Hindi/01.%20Hindi%20Murli%20-%20Htm/'+date+'-H.htm', {corsProxy:'', iframe: true }) 
    .then(myGetsy => {
        this.title = myGetsy.getMe('.MsoNormal').eq(0).text().slice(0,32);
        this.header = myGetsy.getMe('.MsoNormal').eq(2).text();
        this.lists = [];
        for(var i = 2; i<myGetsy.getMe('.MsoNormal').length; i++){
          this.lists.push(myGetsy.getMe('.MsoNormal').eq(i).text())
        }
        //console.log("👉"+ this.title);
        //console.log("👉"+ this.lists);
      })
      .catch(myGetsy =>{
        let alert = this.alertCtrl.create({
          title: 'Murli Not Found!',
          subTitle: myGetsy.text(),
          buttons: ['OK']
        });
        alert.present();
      })
  }


  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public popoverCtrl: PopoverController, public murliDate: NavParams, public loadingCtrl: LoadingController) 
  {
    //onsole.log("👉 MurliPage :" + this.date);
    //var d = new Date();
    // var datestring = ("0" + d.getDate()).slice(-2) + "." + ("0"+(d.getMonth()+1)).slice(-2) + "." +
    // ("0"+d.getFullYear()).slice(-2);
    // this.date = datestring;
    //console.log("👉 Const "+ this.date);
    let loader = this.loadingCtrl.create({
      content: 'Getting Murli...',
    });

    loader.present().then(() => {
      this.loadUrl(murliDate.data);
      loader.dismiss();
    });
  }

  presentPopover(ev) {

    let popover = this.popoverCtrl.create(PopoverPage, {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement
    });

    popover.present({
      ev: ev
    });
  }

}
