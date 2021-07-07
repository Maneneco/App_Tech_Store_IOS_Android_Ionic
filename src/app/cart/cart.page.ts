import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  public cartproduto: any;

  constructor(private produtoServ: ProdutoService, private router: Router) {}

  ngOnInit(){
    this.produtoServ.getProdutos().subscribe ( produtos => {
      this.cartproduto = produtos;
    });
  }
  //navigate to payment
  payment(){
    this.router.navigate(['/payment']);
  }
  //remove from cart
  remove(){
    //Remove button
    Swal.fire({
      heightAuto: false,
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove!'
    }).then((result) => {
      if (result.isConfirmed) {

        Swal.fire({
            heightAuto: false,
            title: 'Deleted!',
            html: 'Your file has been deleted.',
            icon: 'success'
          }
        );
      }
    });
  }
}
