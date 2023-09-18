import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaChatComponent } from './tarjeta-chat.component';

describe('TarjetaChatComponent', () => {
  let component: TarjetaChatComponent;
  let fixture: ComponentFixture<TarjetaChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetaChatComponent]
    });
    fixture = TestBed.createComponent(TarjetaChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
