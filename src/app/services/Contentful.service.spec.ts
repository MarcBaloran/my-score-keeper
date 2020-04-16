/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContentfulService } from './Contentful.service';

describe('Service: Contentful', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentfulService]
    });
  });

  it('should ...', inject([ContentfulService], (service: ContentfulService) => {
    expect(service).toBeTruthy();
  }));
});
