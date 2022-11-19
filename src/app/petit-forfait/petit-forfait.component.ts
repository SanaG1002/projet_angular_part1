import { Component, OnInit, Input } from '@angular/core';
import { Etablissement } from '../etablissement';
import { Forfait } from '../forfait';


@Component({
  selector: 'app-petit-forfait',
  templateUrl: './petit-forfait.component.html',
  styleUrls: ['./petit-forfait.component.css']
})
export class PetitForfaitComponent implements OnInit {

  @Input() forfait?: Forfait;
  @Input() etablissement?: Etablissement;

  constructor() { }

  ngOnInit(): void {
  }

}
