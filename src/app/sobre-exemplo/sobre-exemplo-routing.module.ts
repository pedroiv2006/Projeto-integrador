import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobreExemploPage } from './sobre-exemplo.page';

const routes: Routes = [
  {
    path: '',
    component: SobreExemploPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobreExemploPageRoutingModule {}
