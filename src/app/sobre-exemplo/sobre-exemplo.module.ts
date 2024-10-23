import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobreExemploPageRoutingModule } from './sobre-exemplo-routing.module';

import { SobreExemploPage } from './sobre-exemplo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobreExemploPageRoutingModule
  ],
  declarations: [SobreExemploPage]
})
export class SobreExemploPageModule {}
