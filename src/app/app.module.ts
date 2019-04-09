import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListeTacheComponent } from './component/liste-tache/liste-tache.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalTacheComponent } from './component/modal-tache/modal-tache.component';
import { AjoutTacheComponent } from './component/ajout-tache/ajout-tache.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListeTacheComponent,
    ModalTacheComponent,
    AjoutTacheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule
  ],
  exports: [ ModalTacheComponent ],
  providers: [],
  entryComponents: [ModalTacheComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
