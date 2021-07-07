import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public produtos: any;

      constructor(private produtoServ: ProdutoService, private menu: MenuController) {}

      ngOnInit() {
        this.produtoServ.getProdutos().subscribe( produtos => {
          this.produtos = produtos;
        });

      }

      verProduto(rota: string, id:string){
        this.produtoServ.goRota(rota, id);
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
