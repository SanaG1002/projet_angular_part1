import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../forfait';
import { EtablissementProps } from '../etablissementProps';



@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})
export class ForfaitCompletComponent implements OnInit {
  @Input() forfait?: Forfait;
  @Input() etablissementProps?: EtablissementProps;
  

  constructor() { }

  ngOnInit(): void {
  }

}
