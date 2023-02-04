import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeForfaitComponent } from './liste-forfait/liste-forfait.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { FormGestionForfaitComponent } from './form-gestion-forfait/form-gestion-forfait.component';
import { FormRechercheComponent } from './form-recherche/form-recherche.component';
import { PetitForfaitComponent } from './petit-forfait/petit-forfait.component';
import { PrixComponent } from './prix/prix.component';
import { ImageComponent } from './image/image.component';
import { InfosForfaitComponent } from './infos-forfait/infos-forfait.component';
import { premiumListeForfaitComponent } from './premium-liste-forfait/premium-liste-forfait.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormAvisComponent } from './form-avis/form-avis.component';

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
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitComponent,
    ForfaitCompletComponent,
    FormGestionForfaitComponent,
    FormRechercheComponent,
    PetitForfaitComponent,
    PrixComponent,
    ImageComponent,
    InfosForfaitComponent,
    premiumListeForfaitComponent,
    EtablissementComponent,
    FormAvisComponent,
    FormulaireContactComponent
   
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
    MatAutocompleteModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
