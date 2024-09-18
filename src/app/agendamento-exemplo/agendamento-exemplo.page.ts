import { Component, OnInit } from '@angular/core';  // Importar OnInit corretamente

@Component({
  selector: 'app-agendamento-exemplo',
  templateUrl: './agendamento-exemplo.page.html',
  styleUrls: ['./agendamento-exemplo.page.scss'],
})
export class AgendamentoExemploPage implements OnInit {

  selectedDate: string = '';  // Inicializa a variável com uma string vazia
  motivoProblema: string = '';  // Inicializa a variável com uma string vazia

  constructor() { }

  ngOnInit() {
    // Lógica que deve ser executada ao inicializar o componente
  }

  // Função chamada quando a data é selecionada
  onDateChange(event: any) {
    this.selectedDate = event.detail.value;  // Atualiza a data selecionada
    console.log('Data selecionada:', this.selectedDate);
  }

  // Função chamada quando o usuário clica em "Salvar Agendamento"
  salvarAgendamento() {
    if (this.selectedDate && this.motivoProblema) {
      console.log('Agendamento salvo com sucesso!');
      console.log('Data:', this.selectedDate);
      console.log('Motivo do problema:', this.motivoProblema);
      // Lógica para salvar os dados, como enviar para um servidor
    } else {
      console.error('Por favor, preencha todos os campos antes de salvar.');
    }
  }
}

