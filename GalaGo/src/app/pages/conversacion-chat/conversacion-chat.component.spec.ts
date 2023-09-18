import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversacionChatComponent } from './conversacion-chat.component';

describe('ConversacionChatComponent', () => {
  let component: ConversacionChatComponent;
  let fixture: ComponentFixture<ConversacionChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConversacionChatComponent]
    });
    fixture = TestBed.createComponent(ConversacionChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
