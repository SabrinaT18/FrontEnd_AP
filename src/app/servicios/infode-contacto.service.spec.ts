import { TestBed } from '@angular/core/testing';

import { InfodeContactoService } from './infode-contacto.service';

describe('InfodeContactoService', () => {
  let service: InfodeContactoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfodeContactoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
