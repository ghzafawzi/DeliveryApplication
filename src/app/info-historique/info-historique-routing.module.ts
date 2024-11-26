import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoHistoriquePage } from './info-historique.page';

const routes: Routes = [
  {
    path: '',
    component: InfoHistoriquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoHistoriquePageRoutingModule {}
