import { Component, Input, OnInit } from '@angular/core';

import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-premium-liste-forfait',
  templateUrl: './premium-liste-forfait.component.html',
  styleUrls: ['./premium-liste-forfait.component.css']
})
export class premiumListeForfaitComponent implements OnInit {
  forfaits = FORFAITS
  constructor() { }

  ngOnInit(): void {
  }

}
