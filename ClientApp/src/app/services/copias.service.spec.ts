import { TestBed, inject } from '@angular/core/testing';

import { CopiasService } from './copias.service';

describe('CopiasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CopiasService]
    });
  });

  it('should be created', inject([CopiasService], (service: CopiasService) => {
    expect(service).toBeTruthy();
  }));
});
