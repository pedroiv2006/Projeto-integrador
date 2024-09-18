import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback-exemplo',
  templateUrl: './feedback-exemplo.page.html',
  styleUrls: ['./feedback-exemplo.page.scss'],
})
export class FeedbackExemploPage {

  rating = 0;  // Variável que armazena a avaliação com estrelas
  stars = [1, 2, 3, 4, 5];  // Representa as estrelas
  comment: string = '';  // Variável para o comentário do usuário

  constructor() {}

  rate(star: number): void {
    this.rating = star;  // Define a avaliação baseada no clique
  }

  submitFeedback(): void {
    // Lógica para enviar o feedback (pode ser um console.log ou uma integração com backend)
    console.log('Avaliação: ', this.rating);
    console.log('Comentário: ', this.comment);
  }
}


