import { Component, Input, OnInit } from '@angular/core';

import { FORFAITS } from '../mock-forfaits';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';


@Component({
  selector: 'app-premium-liste-forfait',
  templateUrl: './premium-liste-forfait.component.html',
  styleUrls: ['./premium-liste-forfait.component.css']
})
export class PremiumListeForfaitComponent implements OnInit {
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

