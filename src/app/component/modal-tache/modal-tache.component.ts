import { Component, OnInit,Input  } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Tache} from '../../models/tache';

@Component({
  selector: 'app-modal-tache',
  templateUrl: './modal-tache.component.html',
  styleUrls: ['./modal-tache.component.css']
})
export class ModalTacheComponent {

  @Input() tache: Tache;

  constructor(public activeModal: NgbActiveModal) {
  }

}
