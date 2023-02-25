import { Component, ViewEncapsulation, Inject, OnInit, Output } from '@angular/core';

import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class FormulaireForfaitComponent implements OnInit {

  newForfait: Forfait = {
    nom: '',
    description: '',
    code: '',
    etablissement: {
      nomEtablissement: '',
      adresseEtablissement: '',
      villeEtablissement: '',
      telephoneEtablissement: '',
      courrielEtablissement: '',
      siteWebEtablissement: '',
      descriptionEtablissement:'',
    },
    dateDebut: 'DD-MM-YYYY',
    dateFin: 'DD-MM-YYYY',
    prix: 0,
    nouveauPrix: 0,
    premium: 1,
    image: '',
    pays: ''
  };

  
  constructor(private forfaitService: ForfaitService,
    public dialogRef: MatDialogRef<FormulaireForfaitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Forfait){ 
      
      if (data) { 
        this.newForfait = data;
      }
    }

    ngOnInit(): void {}

    addForfait(forfaitFormAjout: NgForm) {
      if (forfaitFormAjout.valid) {
        this.forfaitService.addForfait(this.newForfait).subscribe(
          _ => {
            forfaitFormAjout.resetForm();
            this.dialogRef.close("Forfait ajouté!");
          }
        );
      }
    }

    updateForfait(forfaitFormAjout: NgForm) {
      if (forfaitFormAjout.valid) {
        this.forfaitService.updateForfait(this.newForfait).subscribe(
          _ => {
            forfaitFormAjout.resetForm();
            this.dialogRef.close("Forfait modifié!");
          }
        );
      }
    }

    annuler() { 
      this.dialogRef.close();
    }
}
