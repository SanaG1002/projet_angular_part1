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
import { EtablissementPropsComponent } from './etablissement-props/etablissement-props.component';
import { CoordonneesPropsComponent } from './coordonnees-props/coordonnees-props.component';
import { AvisPropsComponent } from './avis-props/avis-props.component';

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
    EtablissementPropsComponent,
    CoordonneesPropsComponent,
    AvisPropsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
