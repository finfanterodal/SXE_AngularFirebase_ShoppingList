import {TestBed} from '@angular/core/testing';

import {ServicioDeAutentService} from './servicio-de-autent.service';

describe('ServicioDeAutentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioDeAutentService = TestBed.get(ServicioDeAutentService);
    expect(service).toBeTruthy();
  });
});
