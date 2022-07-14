import { TestBed } from '@angular/core/testing';

import { GenericInterceptorInterceptor } from './generic-interceptor.interceptor';

describe('GenericInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GenericInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: GenericInterceptorInterceptor = TestBed.inject(GenericInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
