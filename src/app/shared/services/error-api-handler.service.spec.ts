import { TestBed } from '@angular/core/testing';

import { ErrorApiHandlerService } from './error-api-handler.service';

describe('ErrorApiHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorApiHandlerService = TestBed.get(ErrorApiHandlerService);
    expect(service).toBeTruthy();
  });
});
