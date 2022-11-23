import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prix',
  templateUrl: './prix.component.html',
  styleUrls: ['./prix.component.css']
})
export class PrixComponent implements OnInit {

  @Input() prix? = 0 ;
  @Input() nouveauPrix? = 0 ;


  constructor() { }

  ngOnInit(): void {
  }

}
