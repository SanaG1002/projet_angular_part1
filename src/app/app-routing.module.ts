import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageAProposComponent } from './page-a-propos/page-a-propos.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PageForfaitVoyageComponent } from './page-forfait-voyage/page-forfait-voyage.component';
import { PageForfaitDerniereChanceComponent } from './page-forfait-derniere-chance/page-forfait-derniere-chance.component';
import { PageAdminComponent } from './page-admin/page-admin.component';

const routes: Routes = [
  { path: '', component: AccueilComponent, },
  { path: 'page-a-propos', component: PageAProposComponent },
  { path: 'page-forfait-voyage', component: PageForfaitVoyageComponent },
  { path: 'page-forfait-derniere-chance', component: PageForfaitDerniereChanceComponent },
  { path: 'page-admin', component: PageAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }


