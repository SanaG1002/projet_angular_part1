import { Component, OnInit } from '@angular/core';

import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-page-forfait-derniere-chance',
  templateUrl: './page-forfait-derniere-chance.component.html',
  styleUrls: ['./page-forfait-derniere-chance.component.css']
})
export class PageForfaitDerniereChanceComponent implements OnInit {
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
