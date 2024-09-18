import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from './requisicao.service';


@Component({
  selector: 'app-agendamentomanutencao',
  templateUrl: './agendamentomanutencao.page.html',
  styleUrls: ['.agendamentomanutecao']
})
export class agendamentomanutencao implements OnInit {

  public descricao:string = '';

  constructor(
    public rs:RequisicaoService
  ) {}

ngOnInit() { 
}
salvar(){
  const fd = new FormData();
  fd.append('controller', 'lampada');
  fd.append('op', 'salvar');
  fd.append('descricao',this.descricao);

  this.rs.post(fd)
  .subscribe();
}
}
