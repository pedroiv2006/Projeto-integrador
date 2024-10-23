import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage {
  constructor(private router: Router) {}

  logout() {
    // Lógica de logout: Limpar dados da sessão, token de autenticação, etc.
    // Exemplo: localStorage.removeItem('token');
    
    // Redirecionar para a página de login ou outra página desejada
    this.router.navigate(['/login']);
  }
}
