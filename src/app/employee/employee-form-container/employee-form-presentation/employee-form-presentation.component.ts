import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../employee.model';
import { EmployeeService } from '../../employee.service';
import { EmployeeFormPresenterService } from '../employee-form-presenter/employee-form-presenter.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-form-presentation',
  templateUrl: './employee-form-presentation.component.html',
  styleUrls: ['./employee-form-presentation.component.css'],
  viewProviders: [EmployeeFormPresenterService]
})
export class EmployeeFormPresentationComponent implements OnInit {
  submitted = false;
  model: any;

  @Output() employeeList: EventEmitter<any> = new EventEmitter();

  //Bind the form in form group
  public employeeForm: FormGroup = this.empPresenterService.bindForm();

  //Injecting the services and class
  constructor(private empPresenterService: EmployeeFormPresenterService,
    private route: ActivatedRoute, private empService: EmployeeService, private _router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.empPresenterService.empDetail$.subscribe((empData: string) => {
      this.employeeList.emit(empData)
    })

    //match Id with route
    this.route.paramMap.subscribe((params: any) => {
      const empId = +params.get('id');
      if (empId) {
        this.getEmployeeByID(empId)
      }
    })
  }

  //Get detail by Id
  public getEmployeeByID(id: number) {
    this.empService.getEmployeeDetailbyId(id).subscribe(
      (empId: Employee) => this.editEmployee(empId),
      (err: string) => console.log(err)
    )
  }

  //patch the user 
  public editEmployee(emp: Employee) {
    this.employeeForm.patchValue(emp)
  }

  //Get form controls
  get employeeDetailFormControl() {
    return this.employeeForm.controls;
  }


  //Save and edit the Employee details
  public onSubmit() {
    if (this.employeeForm.value != null) {
      this.submitted = true;
    }

    if (this.employeeForm.value.id != '' && this.employeeForm.value.id) {
      this.updateEmployeeDetail(this.employeeForm.value)
    } else {
      this.empPresenterService.empDetailData(this.employeeForm)
    }
  }

  //Update the employee detail
  public updateEmployeeDetail(id: any) {
    return this.empService.updateEmployeeDetail(id).subscribe((data: Employee) => {
      alert("Employee updated successfully");
      this.location.back();
    })
  }

}
