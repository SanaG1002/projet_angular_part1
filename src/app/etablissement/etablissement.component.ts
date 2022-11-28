import { Component, OnInit, Input } from '@angular/core';
import { Etablissement } from '../etablissement';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent implements OnInit {

  @Input() etablissement?: Etablissement;
  @Input() adresseEtablissement? = '';
  @Input() villeEtablissement? = ''; 
  @Input() telephoneEtablissement? = '';
  @Input() courrielEtablissement? = '';
  @Input() siteWebEtablissement? = ''; 
  constructor() { }

  ngOnInit(): void {
  }

}
