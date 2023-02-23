
import { Component, OnInit, ViewChild } from '@angular/core';

import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';
import { FormulaireForfaitComponent } from '../formulaire-forfait/formulaire-forfait.component';


import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-tableau-forfaits',
  templateUrl: './tableau-forfaits.component.html',
  styleUrls: ['./tableau-forfaits.component.css']
})

export class TableauForfaitsComponent implements OnInit {
  newforfait: Forfait[] = [];
  dataSourceForfaits: MatTableDataSource<Forfait> = new MatTableDataSource();
  columnsToDisplay = [
    'nom',
    'code',
    'nomEtablissement',
    'siteWebEtablissement',
    'dateDebut',
    'dateFin', 
    'prix',
    'nouveauPrix',
    'premium',
    'actions'
    ];

  newForfait : Forfait = {
    nom: '',
    code: '',
    etablissement: {
      nomEtablissement: '',
      adresseEtablissement: '',
      villeEtablissement: '',
      telephoneEtablissement: '',
      courrielEtablissement: '',
      siteWebEtablissement: '',
      descriptionEtablissement: '',
    },
    dateDebut: '',
    dateFin: '',
    prix: 0,
    nouveauPrix: 0,
    premium: 1,
    description: ''
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) tableForfaits!: MatTable<Forfait>;

  constructor(private forfaitService: ForfaitService, private _snackBar: MatSnackBar,  public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits() { 
    this.forfaitService.getForfaits().subscribe(
      resultat => {
        console.log(resultat);
        this.dataSourceForfaits = new MatTableDataSource(resultat);
        this.dataSourceForfaits.paginator = this.paginator;
        this.dataSourceForfaits.sort = this.sort;
        this.tableForfaits.renderRows();
      }
    );
  }

  openDialog(forfaits?: Forfait) { 
    console.log(forfaits);
    const dialogRef = this.dialog.open(FormulaireForfaitComponent, {
        data: forfaits
      });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('Le dialog du formulaire forfait a été fermé');
      this._snackBar.open(result, undefined, {
        duration: 2000
      });
      this.getForfaits();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceForfaits.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceForfaits.paginator) {
      this.dataSourceForfaits.paginator.firstPage();
    }
  }

  deleteForfait(id:number) { 
    this.forfaitService.deleteForfait(id).subscribe(
      _ => {
        this.getForfaits();
      }
    );
  }

}
