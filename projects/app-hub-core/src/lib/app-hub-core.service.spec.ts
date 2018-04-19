import { TestBed, inject } from '@angular/core/testing';

import { AppHubCoreService } from './app-hub-core.service';

describe('AppHubCoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppHubCoreService]
    });
  });

  it('should be created', inject([AppHubCoreService], (service: AppHubCoreService) => {
    expect(service).toBeTruthy();
  }));
});
