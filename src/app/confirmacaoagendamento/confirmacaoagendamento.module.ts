import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacaoagendamentoPageRoutingModule } from './confirmacaoagendamento-routing.module';

import { ConfirmacaoagendamentoPage } from './confirmacaoagendamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacaoagendamentoPageRoutingModule
  ],
  declarations: [ConfirmacaoagendamentoPage]
})
export class ConfirmacaoagendamentoPageModule {}
