import { Component, OnInit } from '@angular/core';

import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-graphique1',
  templateUrl: './graphique1.component.html',
  styleUrls: ['./graphique1.component.css']
})
export class Graphique1Component implements OnInit {
  public monGraphique = {
    type: <ChartType>'bar',
    legende: true,
    plugins:[],
    options: { responsive: true, maintainAspectRatio: false }
  };

  public mesDonnees: ChartData<'bar', number[], string | string[]> = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
   
    datasets: [
      { data: [65, 59, 80, 55, 40], label: 'Forfait classique', backgroundColor: '#405C77' },
      { data: [28, 48, 40, 19, 86], label: 'Forfait premium', backgroundColor: '#537D74' } 
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
