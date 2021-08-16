import { TestBed } from '@angular/core/testing';

import { EmployeeListPresenterService } from './employee-list-presenter.service';

describe('EmployeeListPresenterService', () => {
  let service: EmployeeListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
