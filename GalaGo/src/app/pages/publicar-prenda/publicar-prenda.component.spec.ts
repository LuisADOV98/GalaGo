import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarPrendaComponent } from './publicar-prenda.component';

describe('PublicarPrendaComponent', () => {
  let component: PublicarPrendaComponent;
  let fixture: ComponentFixture<PublicarPrendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicarPrendaComponent]
    });
    fixture = TestBed.createComponent(PublicarPrendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
