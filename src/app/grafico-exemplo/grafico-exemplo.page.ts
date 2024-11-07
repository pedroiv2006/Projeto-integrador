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
      labels: ['Novembro','Outubro' ],
      datasets:[
        {
          data: [6,11]
        }
      ]
    }
  }

}
