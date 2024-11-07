import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-exemplo',
  templateUrl: './grafico-exemplo.page.html',
  styleUrls: ['./grafico-exemplo.page.scss'],
})
export class GraficoExemploPage implements OnInit {
public data: any;
  constructor() { }

  ngOnInit() {
    this.data = {
      labels: ['A','B'],
      datasets:[
        {
          data: [1,26,11,]
        }
      ]
    }
  }

}
