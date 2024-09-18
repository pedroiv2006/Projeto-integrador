import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilExemploPage } from './perfil-exemplo.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilExemploPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Importa RouterModule configurado com as rotas filhas
  exports: [RouterModule]  // Exporta RouterModule para uso em outros módulos
})
export class PerfilExemploPageRoutingModule {}

