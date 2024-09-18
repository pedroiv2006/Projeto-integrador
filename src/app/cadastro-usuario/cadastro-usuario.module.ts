import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CadastroUsuarioPage } from './cadastro-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroUsuarioPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CadastroUsuarioPage],
})
export class CadastroUsuarioPageModule {}
