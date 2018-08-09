import { TestBed, inject } from '@angular/core/testing';

import { ModelApiService } from './model-api.service';

describe('ModelApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModelApiService]
    });
  });

  it('should be created', inject([ModelApiService], (service: ModelApiService) => {
    expect(service).toBeTruthy();
  }));
});
