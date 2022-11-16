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

@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitComponent,
    ForfaitCompletComponent,
    FormGestionForfaitComponent,
    FormRechercheComponent,
    PetitForfaitComponent,
    PrixComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
