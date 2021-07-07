import { Component, OnInit } from '@angular/core';
import { DatabaseService, DEV } from '../../services/database.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Location } from "@angular/common";
import Swal from "sweetalert2";

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

product: DEV = null;
  constructor(private location: Location,private route: ActivatedRoute, private db: DatabaseService, private router: Router, private toast: ToastController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let devId = params.get('id');

      this.db.getProduct(devId).then(data => {
        this.product = data;
      });
    });
  }

delete() {
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
            });
          this.db.deleteProduct(this.product.id).then(() => {
            this.location.back();
          });
        }
    });
}

addInformation(){
  this.router.navigate(['/addinformation']);
}


}
