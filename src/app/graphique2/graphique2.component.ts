import { Component, ViewChild, OnInit  } from '@angular/core';

import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graphique2',
  templateUrl: './graphique2.component.html',
  styleUrls: ['./graphique2.component.css']
})

export class Graphique2Component implements OnInit{
  public monGraphique = {
    type: <ChartType>'pie',
    legende: true,
    plugins:[],
    options: { responsive: true, maintainAspectRatio: false }
  };

  public mesDonnees: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
    datasets: [ {
      data: [ 300, 500, 100 ]
    } ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
