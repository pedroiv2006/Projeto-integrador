import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaCadastroPageRoutingModule } from './tela-cadastro-routing.module';

import { TelaCadastroPage } from './tela-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaCadastroPageRoutingModule
  ],
  declarations: [TelaCadastroPage]
})
export class TelaCadastroPageModule {}
