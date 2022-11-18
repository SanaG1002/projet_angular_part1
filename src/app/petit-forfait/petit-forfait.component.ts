import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../forfait';

import { EtablissementProps } from '../etablissementProps';

@Component({
  selector: 'app-petit-forfait',
  templateUrl: './petit-forfait.component.html',
  styleUrls: ['./petit-forfait.component.css']
})
export class PetitForfaitComponent implements OnInit {

  @Input() forfait?: Forfait;
  @Input() etablissementProps?: EtablissementProps;

  constructor() { }

  ngOnInit(): void {
  }

}
