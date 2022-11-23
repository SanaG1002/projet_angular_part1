import { Component, OnInit } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-form-avis',
  templateUrl: './form-avis.component.html',
  styleUrls: ['./form-avis.component.css']
})
export class FormAvisComponent implements OnInit {
  forfaits = FORFAITS
  constructor() { }

  ngOnInit(): void {
  }
}
