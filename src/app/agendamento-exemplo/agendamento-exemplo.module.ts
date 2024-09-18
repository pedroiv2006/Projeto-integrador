import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendamentoExemploPageRoutingModule } from './agendamento-exemplo-routing.module';
import { AgendamentoExemploPage } from './agendamento-exemplo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Necessário para usar ngModel e formulários
    IonicModule,
    AgendamentoExemploPageRoutingModule
  ],
  declarations: [AgendamentoExemploPage]
})
export class AgendamentoExemploPageModule {}

