import { TestBed, inject } from '@angular/core/testing';

import { Guide } from './guide';

describe('GuideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuideService]
    });
  });

  it('should be created', inject([GuideService], (service: GuideService) => {
    expect(service).toBeTruthy();
  }));
});
