import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';



export interface DEV {
  id: number,
  type: string,
  purchaseDate: string,
  expiringDate: string,
  model: string,
  img: string,
}

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  products = new BehaviorSubject([]);

  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean>=new BehaviorSubject(false);

  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.sqlite.create({
                            name:'Intech.db',
                            location:'default'
      })
      .then((db:SQLiteObject) => {
        this.database = db;
        this.seedDatabase();
      });
    });
  }

  seedDatabase(){
    this.http.get('assets/seedData.sql', {responseType: 'text'})
      .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(_ => {
            this.loadProducts();
            this.dbReady.next(true);
          })
          .catch(e => console.error(e));
      })
  }
  getDatabaseState(){
    return this.dbReady.asObservable()
  }

  getDevs(): Observable<DEV[]> {
    return this.products.asObservable();
  }

  loadProducts(){
    return this.database.executeSql('SELECT * From product', []).then(data => {
      let products: DEV[] = [];

      if (data.rows.length >0) {
        for (var i = 0; i< data.rows.length; i++){
           products.push({
             id: data.rows.item(i).id,
             type: data.rows.item(i).type,
             purchaseDate: data.rows.item(i).purchaseDate,
             expiringDate: data.rows.item(i).expiringDate,
             model: data.rows.item(i).model,
             img: data.rows.item(i).img
           });
        }
      }
      this.products.next(products);
    });
  }

  addProduct(type, purchaseDate, expiringDate, model, img){
    return this.database.executeSql('INSERT INTO product (type, purchaseDate, expiringDate, model, img) VALUES (?, ?, ?, ?, ?)').then(data=>{
      this.loadProducts();
    });
  }

  getProduct(id): Promise<DEV> {
    return this.database.executeSql('SELECT * FROM product WHERE id = ?', [id]).then(data => {
      return {
        id: data.rows.item(0).id,
        type: data.rows.item(0).type,
        purchaseDate: data.rows.item(0).purchaseDate,
        expiringDate: data.rows.item(0).expiringDate,
        model: data.rows.item(0).model,
        img: data.rows.item(0).img
      }
    });
  }

    deleteProduct(id) {
      return this.database.executeSql('DELETE FROM product WHERE id = ?', [id]).then(_ => {
        this.loadProducts();
      });
    }
  }

