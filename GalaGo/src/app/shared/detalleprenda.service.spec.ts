import { TestBed } from '@angular/core/testing';

import { DetalleprendaService } from './detalleprenda.service';

describe('DetalleprendaService', () => {
  let service: DetalleprendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleprendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
