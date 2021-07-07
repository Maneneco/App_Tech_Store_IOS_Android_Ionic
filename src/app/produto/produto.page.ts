import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  public produto: any;

  constructor(private produtoServ: ProdutoService, private router: Router) { }

  ngOnInit() {
    this.produtoServ.getInfoProduto().subscribe(infoProduto=>{
      this.produto=infoProduto;
    })
  }

  cartProduto(){
    this.router.navigate(['/cart'])
  }


}

