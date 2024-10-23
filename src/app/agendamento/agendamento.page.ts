import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {
  public nome: string = ''; // Nome do cliente
  public endereco: string = ''; // Endereço do cliente
  public dataHora: string = ''; // Data e hora do agendamento no formato ISO
  public motivoProblema: string = ''; // O motivo descrito pelo usuário
  public observacao: string = ''; // Observações adicionais (opcional)
  public minDate: string = ''; // Data mínima permitida para seleção
  public maxDate: string = ''; // Data máxima permitida para seleção
  public mensagemErro: string = ''; // Mensagem de erro para validação

  constructor(
    public rs: RequisicaoService,
    private router: Router
  ) {
    // Define as datas mínima e máxima
    this.minDate = '2024-01-01';
    this.maxDate = '2025-12-31';
  }

  ngOnInit() {}

  salvarAgendamento() {
    // Validação: Verificar se os campos obrigatórios estão preenchidos
    if (!this.nome.trim() || !this.endereco.trim() || !this.dataHora || !this.motivoProblema.trim()) {
      this.mensagemErro = 'Por favor, preencha todos os campos obrigatórios.';
      return;
    }

    this.mensagemErro = ''; // Limpar mensagem de erro, se os dados estiverem corretos

    const fd = new FormData();
    fd.append('controller', 'agendamento');
    fd.append('op', 'salvar');
    fd.append('nome', this.nome);
    fd.append('endereco', this.endereco);
    fd.append('dataHora', this.dataHora);
    fd.append('motivoProblema', this.motivoProblema);
    fd.append('observacao', this.observacao); // Observação é opcional

    // Envia os dados para o backend
    this.rs.post(fd).subscribe(() => {
      // Redireciona para a página de confirmação ou lista de agendamentos
      this.router.navigate(['/confirmacaoagendamento']);
    });
  }
}
