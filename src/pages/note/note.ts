import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddItemPage } from './../add-item/add-item'
import { ItemDetailPage } from './../item-detail/item-detail';
import { Data } from '../../providers/data/data';
/**
 * Generated class for the NotePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})
export class NotePage {

public items = [];
 
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
 
    this.dataService.getData().then((todos) => {
 
      if(todos){
        this.items = JSON.parse(todos); 
      }
 
    });
 
  }
 
  ionViewDidLoad(){
 
  }
 
  addItem(){
 
    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }

  removeItem(item){
    
    for(var i = 0; i < this.items.length; i++) {
      if(this.items[i] == item){
        this.items.splice(i, 1);
      }
    }
    this.dataService.save(this.items);
  }
 
  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }
 
  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
 
}