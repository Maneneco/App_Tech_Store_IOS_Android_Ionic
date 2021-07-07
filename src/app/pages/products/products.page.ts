import { Component, OnInit } from '@angular/core';
import {DatabaseService, DEV} from "../../services/database.service";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: DEV [] = [];

  product = {};

  constructor(private db: DatabaseService, private menu: MenuController) { }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(ready=>{
      if(ready){
        this.db.getDevs().subscribe(devs=>{
          console.log('devs chnaged', devs);
          this.products = devs;
        });
      }
      });
  }

  addProduct() {
    this.db.addProduct(this.product['type'], this.product['purchaseDate'], this.product['expiringDate'],this.product['model'],this.product['img'])
      .then(_ => {
       this.product = {};
      });
  }

  menuFilters() {
    this.menu.enable(true, 'menuFilters');
    this.menu.open('menuFilters');
  }
  closemenu() {
    this.menu.close();
  }
  filter(){
    this.menu.close();
  }
  reset(){
    console.log('Values reset');
  }
}
