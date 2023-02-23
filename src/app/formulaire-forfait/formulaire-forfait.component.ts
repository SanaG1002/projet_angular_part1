import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';

import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css']
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
    dateDebut: '',
    dateFin: '',
    prix: 0,
    nouveauPrix: 0,
    premium: 1
  };

  minDate: Date;
  maxDate: Date;
  
  constructor(private forfaitService: ForfaitService,
    public dialogRef: MatDialogRef<FormulaireForfaitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Forfait){ 
      
      if (data) { 
        this.newForfait = data;
      }

      const currentYear = new Date().getFullYear();
      this.minDate = new Date(currentYear - 20, 0, 1);
      this.maxDate = new Date(currentYear + 1, 11, 31);
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
