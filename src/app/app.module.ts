import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeForfaitComponent } from './liste-forfait/liste-forfait.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { FormRechercheComponent } from './form-recherche/form-recherche.component';
import { PetitForfaitComponent } from './petit-forfait/petit-forfait.component';
import { PrixComponent } from './prix/prix.component';
import { InfosForfaitComponent } from './infos-forfait/infos-forfait.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormAvisComponent } from './form-avis/form-avis.component';
import { PremiumListeForfaitComponent } from './premium-liste-forfait/premium-liste-forfait.component';

import { MatCardModule } from '@angular/material/card';
import { EtablissementComponent } from './etablissement/etablissement.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormulaireContactComponent } from './formulaire-contact/formulaire-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ForfaitService } from './forfait.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PageAProposComponent } from './page-a-propos/page-a-propos.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PageForfaitVoyageComponent } from './page-forfait-voyage/page-forfait-voyage.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { TableauForfaitsComponent } from './tableau-forfaits/tableau-forfaits.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';


import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatTableModule } from '@angular/material/table';
import { PageForfaitDerniereChanceComponent } from './page-forfait-derniere-chance/page-forfait-derniere-chance.component';
import { Graphique1Component } from './graphique1/graphique1.component';

import { NgChartsModule } from 'ng2-charts';
import { Graphique2Component } from './graphique2/graphique2.component';



@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitComponent,
    ForfaitCompletComponent,
    FormRechercheComponent,
    PetitForfaitComponent,
    PrixComponent,
    InfosForfaitComponent,
    EtablissementComponent,
    FormAvisComponent,
    FormulaireContactComponent,
    PremiumListeForfaitComponent,
    MenuComponent,
    PageAProposComponent,
    AccueilComponent,
    PageForfaitVoyageComponent,
    PageAdminComponent,
    TableauForfaitsComponent,
    FormulaireForfaitComponent,
    PageForfaitDerniereChanceComponent,
    Graphique1Component,
    Graphique2Component
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatSliderModule,
    MatNativeDateModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    NgChartsModule

  
  ],
  providers: [ForfaitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
