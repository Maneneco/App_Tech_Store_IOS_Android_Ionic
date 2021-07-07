import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentdonePage } from './paymentdone.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentdonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentdonePageRoutingModule {}
