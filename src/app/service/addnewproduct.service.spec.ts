import { TestBed } from '@angular/core/testing';

import { AddnewproductService } from './addnewproduct.service';

describe('AddnewproductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddnewproductService = TestBed.get(AddnewproductService);
    expect(service).toBeTruthy();
  });
});
