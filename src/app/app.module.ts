import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeForfaitComponent } from './liste-forfait/liste-forfait.component';
import { ForfaitComponent } from './forfait/forfait.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitComponent,
    ForfaitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
