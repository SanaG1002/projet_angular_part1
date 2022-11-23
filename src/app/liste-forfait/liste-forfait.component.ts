import { Component, OnInit, Input } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-liste-forfait',
  templateUrl: './liste-forfait.component.html',
  styleUrls: ['./liste-forfait.component.css']
})
export class ListeForfaitComponent implements OnInit {
  forfaits = FORFAITS


  constructor() { }

  ngOnInit(): void {
  }

}
