import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFavoritosComponent } from './modal-favoritos.component';

describe('ModalFavoritosComponent', () => {
  let component: ModalFavoritosComponent;
  let fixture: ComponentFixture<ModalFavoritosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFavoritosComponent]
    });
    fixture = TestBed.createComponent(ModalFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
