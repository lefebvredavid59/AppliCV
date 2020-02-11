import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealisationsPageRoutingModule } from './realisations-routing.module';

import { RealisationsPage } from './realisations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealisationsPageRoutingModule
  ],
  declarations: [RealisationsPage]
})
export class RealisationsPageModule {}
