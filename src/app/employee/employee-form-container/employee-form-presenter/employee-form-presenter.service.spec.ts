import { TestBed } from '@angular/core/testing';

import { EmployeeFormPresenterService } from './employee-form-presenter.service';

describe('EmployeeFormPresenterService', () => {
  let service: EmployeeFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
