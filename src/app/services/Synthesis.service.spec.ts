/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SynthesisService } from './Synthesis.service';

describe('Service: Synthesis', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SynthesisService]
    });
  });

  it('should ...', inject([SynthesisService], (service: SynthesisService) => {
    expect(service).toBeTruthy();
  }));
});
