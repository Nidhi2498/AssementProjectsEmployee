import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormPresentationComponent } from './employee-form-presentation.component';

describe('EmployeeFormPresentationComponent', () => {
  let component: EmployeeFormPresentationComponent;
  let fixture: ComponentFixture<EmployeeFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFormPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
