import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.page.html',
  styleUrls: ['./notificacoes.page.scss'],
})
export class NotificacoesPage implements OnInit {
  notificacoes = [
    {
      titulo: 'Agendamento Confirmado',
      mensagem: 'Seu agendamento para o dia 25 de setembro foi confirmado.',
      data: new Date()  // Data atual para exemplo
    },
    {
      titulo: 'Lembrete de Agendamento',
      mensagem: 'Seu agendamento para o dia 30 de setembro está se aproximando.',
      data: new Date()  // Data atual para exemplo
    }
    // Adicione mais notificações conforme necessário
  ];

  constructor() { }

  ngOnInit() {
  }
}
