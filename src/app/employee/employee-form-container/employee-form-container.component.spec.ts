import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormContainerComponent } from './employee-form-container.component';

describe('EmployeeFormContainerComponent', () => {
  let component: EmployeeFormContainerComponent;
  let fixture: ComponentFixture<EmployeeFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
