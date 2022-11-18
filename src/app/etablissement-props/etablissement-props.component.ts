import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-etablissement-props',
  templateUrl: './etablissement-props.component.html',
  styleUrls: ['./etablissement-props.component.css']
})
export class EtablissementPropsComponent implements OnInit {
  
  @Input() nomEtablissement? = ''; 
  @Input() descriptionEtablissement? = '';

  constructor() { }

  ngOnInit(): void {
  }

}
