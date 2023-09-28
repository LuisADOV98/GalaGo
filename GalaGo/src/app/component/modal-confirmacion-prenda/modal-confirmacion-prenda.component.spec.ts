import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmacionPrendaComponent } from './modal-confirmacion-prenda.component';

describe('ModalConfirmacionPrendaComponent', () => {
  let component: ModalConfirmacionPrendaComponent;
  let fixture: ComponentFixture<ModalConfirmacionPrendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalConfirmacionPrendaComponent]
    });
    fixture = TestBed.createComponent(ModalConfirmacionPrendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
