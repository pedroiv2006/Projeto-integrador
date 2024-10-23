import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacaoagendamentoPage } from './confirmacaoagendamento.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacaoagendamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacaoagendamentoPageRoutingModule {}
