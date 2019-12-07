import { TestBed, inject } from '@angular/core/testing';

import { DevolucionService } from './devolucion.service';

describe('DevolucionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevolucionService]
    });
  });

  it('should be created', inject([DevolucionService], (service: DevolucionService) => {
    expect(service).toBeTruthy();
  }));
});
