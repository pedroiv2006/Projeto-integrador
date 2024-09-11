import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListaUsuarioPage } from './lista-usuario.page';
import { ListaUsuarioPageRoutingModule } from './lista-usuario-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaUsuarioPageRoutingModule
  ],
  declarations: [ListaUsuarioPage]
})
export class ListaUsuarioPageModule {}

