import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarrantydonePage } from './warrantydone.page';

const routes: Routes = [
  {
    path: '',
    component: WarrantydonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarrantydonePageRoutingModule {}
