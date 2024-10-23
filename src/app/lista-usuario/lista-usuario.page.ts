import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RequisicaoService } from 'service/requisicao.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.page.html',
  styleUrls: ['./lista-usuario.page.scss'],
})
export class ListaUsuarioPage {
  constructor(
    public requisicao_service: RequisicaoService,
    public router: Router,
    private loadingCtrl: LoadingController
  ) { }

  public usuarios: Array<any> = [];
  
  editar(id: number) {
    this.router.navigateByUrl('/cadastro-usuario/' + id);
  }

  excluir(id: number) {
    this.requisicao_service.get({
      controller: 'usuario-excluir',
      id: id
    }).subscribe(
      (_res: any) => {
        this.listar();
      }
    );
  }

  ngOnInit() {
    this.listar();
  }

  async listar() {
    const loading = await this.loadingCtrl.create({
      message: 'Carregando a manivela, aguarde.'
    });
    loading.present();

    this.requisicao_service.get({
      controller: 'listausuario'
    }).subscribe(
      (_res: any) => {
        loading.dismiss();
        this.usuarios = _res;
      }
    );
  }
  go(rota:string){
    window.location.href = rota;
  }
}