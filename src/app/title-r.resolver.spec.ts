import { TestBed } from '@angular/core/testing';

import { TitleRResolver } from './title-r.resolver';

describe('TitleRResolver', () => {
  let resolver: TitleRResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TitleRResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
