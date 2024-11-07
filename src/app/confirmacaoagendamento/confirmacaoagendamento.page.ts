import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmacaoagendamento',
  templateUrl: './confirmacaoagendamento.page.html',
  styleUrls: ['./confirmacaoagendamento.page.scss'],
})
export class ConfirmacaoagendamentoPage implements OnInit {

  constructor() { }

  go(rota:string){
    window.location.href=rota;
  }

  ngOnInit() {
  }

}
