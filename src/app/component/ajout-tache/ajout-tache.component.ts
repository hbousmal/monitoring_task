import {Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';

import {Tache} from '../../models/tache';
import {TACHES_DATA} from '../../../assets/data/mock-taches';
import {TacheServiceService} from '../../shared/services/tache-service.service';

@Component({
  selector: 'app-ajout-tache',
  templateUrl: './ajout-tache.component.html',
  styleUrls: ['./ajout-tache.component.css']
})
export class AjoutTacheComponent implements OnInit {

  public tache: Tache;
  constructor(private location: Location, private tacheServiceService: TacheServiceService) {
    this.tache = new Tache();
  }

  ngOnInit() {
  }

  retour(): void {
    this.location.back();
  }

  save() {
    this.tacheServiceService.addTache(this.tache);
    this.location.back();
  }

}
