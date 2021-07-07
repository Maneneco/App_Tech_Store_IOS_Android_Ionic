import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarrantydonePageRoutingModule } from './warrantydone-routing.module';

import { WarrantydonePage } from './warrantydone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WarrantydonePageRoutingModule
  ],
  declarations: [WarrantydonePage]
})
export class WarrantydonePageModule {}
