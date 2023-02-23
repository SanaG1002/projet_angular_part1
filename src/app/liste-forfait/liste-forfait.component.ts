import { Component, OnInit, Input } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';

import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-liste-forfait',
  templateUrl: './liste-forfait.component.html',
  styleUrls: ['./liste-forfait.component.css']
})

export class ListeForfaitComponent implements OnInit {
  forfaits : Forfait[] = [];
  
  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
    .subscribe(resultat => this.forfaits = resultat);
  }

}
