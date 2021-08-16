import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListPresentationComponent } from './employee-list-presentation.component';

describe('EmployeeListPresentationComponent', () => {
  let component: EmployeeListPresentationComponent;
  let fixture: ComponentFixture<EmployeeListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
