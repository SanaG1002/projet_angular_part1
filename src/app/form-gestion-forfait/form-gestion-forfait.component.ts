import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-gestion-forfait',
  templateUrl: './form-gestion-forfait.component.html',
  styleUrls: ['./form-gestion-forfait.component.css']
})
export class FormGestionForfaitComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  constructor() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
   }

  ngOnInit(): void {
  }
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
}
