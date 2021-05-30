import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarrantytablesPage } from './warrantytables.page';

const routes: Routes = [
  {
    path: '',
    component: WarrantytablesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarrantytablesPageRoutingModule {}
