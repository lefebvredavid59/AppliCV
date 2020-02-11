import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealisationsPage } from './realisations.page';

const routes: Routes = [
  {
    path: '',
    component: RealisationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealisationsPageRoutingModule {}
