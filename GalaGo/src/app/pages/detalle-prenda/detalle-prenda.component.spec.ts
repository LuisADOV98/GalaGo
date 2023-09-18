import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePrendaComponent } from './detalle-prenda.component';

describe('DetallePrendaComponent', () => {
  let component: DetallePrendaComponent;
  let fixture: ComponentFixture<DetallePrendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePrendaComponent]
    });
    fixture = TestBed.createComponent(DetallePrendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
