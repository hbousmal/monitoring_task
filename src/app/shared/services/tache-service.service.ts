import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Tache} from '../../models/tache';
import {TACHES_DATA} from '../../../assets/data/mock-taches';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class TacheServiceService {

  constructor() { }

  getTaches(): Observable<Tache[]> {
    return of(TACHES_DATA);
  }

  addTache(tache: Tache): Observable<Tache[]> {
    let listeTache: Tache[];
    this.getTaches()
      .subscribe(taches => listeTache = taches);
    tache.id = listeTache.length + 1;
    listeTache.push(tache);
    return of(listeTache);
  }
}
