import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackExemploPage } from './feedback-exemplo.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbackExemploPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackExemploPageRoutingModule {}


