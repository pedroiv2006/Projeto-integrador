

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ApresentacaoPageRoutingModule } from "src/app/apresentacao/apresentacao-routing.module";
import { CommonModule } from "@angular/common";
import { Etapa1Page } from "src/app/apresentacao/etapa1/etapa1.page";
import { ApresentacaoPage } from "src/app/apresentacao/apresentacao.page";

    @NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ApresentacaoPageRoutingModule,
        ],
         declarations: [ApresentacaoPage,Etapa1Page],
         schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    export class ApresentacaoPageModule{}