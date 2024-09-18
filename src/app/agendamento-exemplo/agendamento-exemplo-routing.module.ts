import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendamentoExemploPage } from './agendamento-exemplo.page';

const routes: Routes = [
  {
    path: '',
    component: AgendamentoExemploPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendamentoExemploPageRoutingModule {}

