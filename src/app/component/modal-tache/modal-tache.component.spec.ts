import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTacheComponent } from './modal-tache.component';

describe('ModalTacheComponent', () => {
  let component: ModalTacheComponent;
  let fixture: ComponentFixture<ModalTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
