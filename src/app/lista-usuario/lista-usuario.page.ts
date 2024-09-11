import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.page.html',
  styleUrls: ['./lista-usuario.page.scss'],
})
export class ListaUsuarioPage implements OnInit {
  usuarios = [
    {
      nome: 'João Silva',
      email: 'joao.silva@example.com',
      avatar: 'https://via.placeholder.com/150'
    },
    {
      nome: 'Maria Souza',
      email: 'maria.souza@example.com',
      avatar: 'https://via.placeholder.com/150'
    },
    // Adicione mais usuários aqui
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  detalhesUsuario(usuario: any) {
    console.log('Detalhes do usuário', usuario);
    // Implementar a lógica de navegação para a página de detalhes
  }

  criarUsuario() {
    // Redireciona para a página de cadastro de usuário
    this.router.navigate(['/cadastro-usuario']);
  }
}
