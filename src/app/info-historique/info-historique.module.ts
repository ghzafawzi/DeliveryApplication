import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoHistoriquePageRoutingModule } from './info-historique-routing.module';

import { InfoHistoriquePage } from './info-historique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoHistoriquePageRoutingModule
  ],
  declarations: [InfoHistoriquePage]
})
export class InfoHistoriquePageModule {}
