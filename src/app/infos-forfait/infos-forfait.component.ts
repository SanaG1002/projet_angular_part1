import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-infos-forfait',
  templateUrl: './infos-forfait.component.html',
  styleUrls: ['./infos-forfait.component.css']
})
export class InfosForfaitComponent implements OnInit {

  @Input() nom? = ''; 
  @Input() description? = '';
  @Input() code? = ''; 
  @Input() categorie? = '';
  @Input() dateDebut? = '';
  @Input() dateFin? = ''; 
  @Input() premium? = 1; 
  


  
  
  constructor() { }

  ngOnInit(): void {
  }

}

