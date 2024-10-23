import { Component, OnInit } from '@angular/core';  // Importar OnInit corretamente

@Component({
  selector: 'app-agendamento-exemplo',
  templateUrl: './agendamento-exemplo.page.html',
  styleUrls: ['./agendamento-exemplo.page.scss'],
})
export class AgendamentoExemploPage implements OnInit {

  selectedDate: string = ''; 
  motivoProblema: string = '';  

  constructor() { }

  ngOnInit() {
    
  }


  onDateChange(event: any) {
    this.selectedDate = event.detail.value; 
    console.log('Data selecionada:', this.selectedDate);
  }


  salvarAgendamento() {
    if (this.selectedDate && this.motivoProblema) {
      console.log('Agendamento salvo com sucesso!');
      console.log('Data:', this.selectedDate);
      console.log('Motivo do problema:', this.motivoProblema);

    } else {
      console.error('Por favor, preencha todos os campos antes de salvar.');
    }
  }
}

