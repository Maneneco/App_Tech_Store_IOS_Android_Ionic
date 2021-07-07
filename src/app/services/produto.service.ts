import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produtos: any;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) { }

  getProdutos() {
    return new Observable (Observer =>{
      fetch('./assets/data/produtos.json')
      .then(resposta => resposta.json())
      .then(json=>{
              this.produtos = json;
              Observer.next(this.produtos);
              Observer.complete();
      });
    })
  }

  goRota(rota: string, id: string) {
    const extras: NavigationExtras = {
      state: {
        produto: this.produtos[id]
      }
    }

    this.router.navigate([rota], extras);

  }

  getInfoProduto() {
    return new Observable (observador => {
      this.rotaAtiva.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          const infoProduto: any = this.router.getCurrentNavigation().extras.state.produto;
          observador.next(infoProduto);
          observador.complete();
        }
      });
    });
  }
}
