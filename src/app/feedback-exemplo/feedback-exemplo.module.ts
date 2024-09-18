import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Certifique-se de que FormsModule está importado
import { IonicModule } from '@ionic/angular';

import { FeedbackExemploPageRoutingModule } from './feedback-exemplo-routing.module';
import { FeedbackExemploPage } from './feedback-exemplo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // FormsModule é necessário para o two-way binding [(ngModel)]
    IonicModule,
    FeedbackExemploPageRoutingModule
  ],
  declarations: [FeedbackExemploPage],
})
export class FeedbackExemploPageModule {}

