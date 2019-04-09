import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListeTacheComponent} from './component/liste-tache/liste-tache.component';
import {AjoutTacheComponent} from './component/ajout-tache/ajout-tache.component';

const routes: Routes = [
  { path: '', redirectTo: '/listeTache', pathMatch: 'full' },
  { path: 'listeTache', component: ListeTacheComponent },
  { path: 'ajoutTache', component: AjoutTacheComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
