import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentdonePageRoutingModule } from './paymentdone-routing.module';

import { PaymentdonePage } from './paymentdone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentdonePageRoutingModule
  ],
  declarations: [PaymentdonePage]
})
export class PaymentdonePageModule {}
