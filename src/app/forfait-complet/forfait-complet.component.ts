import { Component, OnInit, Input } from '@angular/core';
import { Etablissement } from '../etablissement';
import { Forfait } from '../forfait';



@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})
export class ForfaitCompletComponent implements OnInit {
  @Input() forfait?: Forfait;
  @Input() etablissement?: Etablissement;  

  constructor() { }

  ngOnInit(): void {
  }

}
