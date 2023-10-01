import { TestBed } from '@angular/core/testing';

import { ConversacionChatService } from './conversacion-chat.service';

describe('ConversacionChatService', () => {
  let service: ConversacionChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversacionChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
