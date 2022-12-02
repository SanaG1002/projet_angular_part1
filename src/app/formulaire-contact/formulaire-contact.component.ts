import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-formulaire-contact',
  templateUrl: './formulaire-contact.component.html',
  styleUrls: ['./formulaire-contact.component.css']
})
export class FormulaireContactComponent implements OnInit {
  profileForm !: FormGroup;
 
  
  constructor() { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
   
      prenom: new FormControl(''),
      nom: new FormControl(''),
      telephone: new FormControl(''),
      courriel: new FormControl('',  [Validators.required, Validators.email]),
      communication: new FormControl(''),
      motif: new FormControl(''),
      message: new FormControl(''),
      reponse: new FormControl(''),
      aProposDeNous: new FormControl(''),
      infolettre: new FormControl(''),
     
    });
  }
  matcher = new MyErrorStateMatcher();
}
