import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RequisicaoService } from 'service/requisicao.service';

@Component({
  selector: 'app-perfil-exemplo',
  templateUrl: './perfil-exemplo.page.html',
  styleUrls: ['./perfil-exemplo.page.scss'],
})
export class PerfilExemploPage implements OnInit {

  public agendamentos: Array<any> = [];

  constructor(
    public requisicao_service: RequisicaoService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.listar();
  }

  async listar() {
    const loading = await this.loadingCtrl.create({
      message: 'Carregando a manivela, aguarde.'
    });
    await loading.present();

    this.requisicao_service.get({
      controller: 'listaagendamentos'
    }).subscribe(
      (_res: any) => {
        loading.dismiss();

        // Verifica se há resultados e se dataHora é válida
        if (_res && Array.isArray(_res)) {
          this.agendamentos = _res
            .map((e: any) => {
              if (e.dataHora) {
                e.data_formatada = this.formatarData(e.dataHora);
                e.data = new Date(e.dataHora); // Transformar data para ordenação
              }
              return e;
            })
            .filter(e => e.data instanceof Date && !isNaN(e.data.getTime())) // Filtra datas inválidas
            .sort((a, b) => b.data.getTime() - a.data.getTime()); // Ordena por data mais recente
        } else {
          console.warn('Nenhum agendamento encontrado.');
          this.agendamentos = [];
        }
      },
      (error) => {
        loading.dismiss();
        console.error('Erro ao carregar agendamentos:', error);
      }
    );
  }

  formatarData(dataIso: any): string {
    const data = new Date(dataIso);
    if (isNaN(data.getTime())) return ''; // Retorna vazio se a data for inválida

    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  // Método para adicionar um novo agendamento e colocá-lo no topo da lista
  adicionarAgendamento(novoAgendamento: any) {
    if (novoAgendamento && novoAgendamento.dataHora) {
      novoAgendamento.data_formatada = this.formatarData(novoAgendamento.dataHora);
      novoAgendamento.data = new Date(novoAgendamento.dataHora);

      // Adiciona o novo agendamento no topo da lista
      this.agendamentos.unshift(novoAgendamento);
      
      // Reordena a lista caso seja necessário manter a ordem geral do mais recente para o mais antigo
      this.agendamentos.sort((a, b) => b.data.getTime() - a.data.getTime());
    }
  }
}
