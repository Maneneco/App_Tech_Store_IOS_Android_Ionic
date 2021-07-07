import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddinformationPage } from './addinformation.page';

const routes: Routes = [
  {
    path: '',
    component: AddinformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddinformationPageRoutingModule {}
