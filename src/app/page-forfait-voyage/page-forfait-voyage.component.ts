import { Component, OnInit } from '@angular/core';


import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-page-forfait-voyage',
  templateUrl: './page-forfait-voyage.component.html',
  styleUrls: ['./page-forfait-voyage.component.css']
})
export class PageForfaitVoyageComponent implements OnInit {
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
