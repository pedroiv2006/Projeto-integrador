import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuarioPage } from './lista-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: ListaUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaUsuarioPageRoutingModule {}

