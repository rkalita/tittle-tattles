/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RumorsServiceService } from './rumors-service.service';

describe('RumorsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RumorsServiceService]
    });
  });

  it('should ...', inject([RumorsServiceService], (service: RumorsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
