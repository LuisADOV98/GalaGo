import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPrendaComponent } from './editar-prenda.component';

describe('EditarPrendaComponent', () => {
  let component: EditarPrendaComponent;
  let fixture: ComponentFixture<EditarPrendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPrendaComponent]
    });
    fixture = TestBed.createComponent(EditarPrendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
