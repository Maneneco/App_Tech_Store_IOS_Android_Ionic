import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddinformationPageRoutingModule } from './addinformation-routing.module';

import { AddinformationPage } from './addinformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddinformationPageRoutingModule
  ],
  declarations: [AddinformationPage]
})
export class AddinformationPageModule {}
