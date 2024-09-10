import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { ActivatedRoute, Router  } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-admusuarios',
  templateUrl: './lista-usuario.page.html',
  styleUrls: ['./lista-usuario.page.scss'],
})
export class ListaUsuarioPage implements OnInit {

  constructor(
    public requisicao_service:RequisicaoService,
    public router:Router,
    private loadingCtrl: LoadingController
  ) { }

  public usuarios:Array<any> = [];

  ngOnInit() {
    this.listar();
  }

   async listar(){

    const loading = await this.loadingCtrl.create({
      message: 'Carregando a manivela, aguarde.'
    });
    loading.present();

  
    this.requisicao_service.get({
      controller:'listarusuario'
    })
    .subscribe((_res:any) => {
        loading.dismiss();
        this.usuarios = _res; 
   });
   }
  }