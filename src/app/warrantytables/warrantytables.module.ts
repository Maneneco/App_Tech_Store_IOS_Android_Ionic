import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarrantytablesPageRoutingModule } from './warrantytables-routing.module';

import { WarrantytablesPage } from './warrantytables.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WarrantytablesPageRoutingModule
  ],
  declarations: [WarrantytablesPage]
})
export class WarrantytablesPageModule {}
