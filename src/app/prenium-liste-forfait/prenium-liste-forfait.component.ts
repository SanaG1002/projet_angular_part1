import { Component, OnInit } from '@angular/core';

import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-prenium-liste-forfait',
  templateUrl: './prenium-liste-forfait.component.html',
  styleUrls: ['./prenium-liste-forfait.component.css']
})
export class PreniumListeForfaitComponent implements OnInit {
  forfaits = FORFAITS
  constructor() { }

  ngOnInit(): void {
  }

}
