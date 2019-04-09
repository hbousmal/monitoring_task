import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {TACHES_DATA} from '../../../assets/data/mock-taches';
import {Tache} from '../../models/tache';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ModalTacheComponent} from '../modal-tache/modal-tache.component';
import {TacheServiceService} from '../../shared/services/tache-service.service';

@Component({
  selector: 'app-liste-tache',
  templateUrl: './liste-tache.component.html',
  styleUrls: ['./liste-tache.component.css']
})
export class ListeTacheComponent implements OnInit {

  listeTache: Tache[];

  tacheSelected: Tache;

  constructor(private modalService: NgbModal, private tacheServiceService: TacheServiceService) { }

  ngOnInit() {
      this.getTaches();
  }

  onRemove(id: number) {
    this.listeTache.splice(id, 1);
  }

  onEdit(tache: Tache) {
    this.tacheSelected = tache;
    const modalRef = this.modalService.open(ModalTacheComponent);
    modalRef.componentInstance.tache = this.tacheSelected;
  }

  getTaches(): void {
    this.tacheServiceService.getTaches()
      .subscribe(taches => this.listeTache = taches);
  }
}
