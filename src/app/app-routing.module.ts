import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'apresentacao',
    loadChildren: () => import('./apresentacao/apresentacao.module').then( m => m.ApresentacaoPageModule)
  },  {
    path: 'cadastro-usuario',
    loadChildren: () => import('./cadastro-usuario/cadastro-usuario.module').then( m => m.CadastroUsuarioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'lista-usuario',
    loadChildren: () => import('./lista-usuario/lista-usuario.module').then( m => m.ListaUsuarioPageModule)
  },
  {
    path: 'tela-cadastro',
    loadChildren: () => import('./tela-cadastro/tela-cadastro.module').then( m => m.TelaCadastroPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'grafico-exemplo',
    loadChildren: () => import('./grafico-exemplo/grafico-exemplo.module').then( m => m.GraficoExemploPageModule)
  },
  {
    path: 'card-exemplo',
    loadChildren: () => import('./card-exemplo/card-exemplo.module').then( m => m.CardExemploPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'agendamento-exemplo',
    loadChildren: () => import('./agendamento-exemplo/agendamento-exemplo.module').then( m => m.AgendamentoExemploPageModule)
  },
  {
    path: 'perfil-exemplo',
    loadChildren: () => import('./perfil-exemplo/perfil-exemplo.module').then( m => m.PerfilExemploPageModule)
  },
  {
    path: 'feedback-exemplo',
    loadChildren: () => import('./feedback-exemplo/feedback-exemplo.module').then( m => m.FeedbackExemploPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
