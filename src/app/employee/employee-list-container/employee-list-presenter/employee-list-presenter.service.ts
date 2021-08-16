import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { EmployeeService } from '../../employee.service';

@Injectable()
export class EmployeeListPresenterService {
  //declare variable as Subject
  public empListId: Subject<any> = new Subject();

  //declare subject variable as Observable
  public empListId$!: Observable<any>;

  employee : any = [];

  //Injecting user service and Observe the userList
  constructor(private empService: EmployeeService) {
    this.empListId$ = this.empListId.asObservable();
  }

  //Bind Formgroup
  public bindForm() {
    return new FormGroup({
      id: new FormControl(),
      fname: new FormControl(),
      lname: new FormControl(),
      birthdate: new FormControl(),
      gender: new FormControl(),
      department: new FormControl(),
      enabled: new FormControl(),
    })
  }

  //Loads the Employee details
  public loadEmployeeDetail() {
    return this.empService.getEmployeeDetail().subscribe(data => {
      this.employee = data;

    })
  }

  //Get Employee details by Id
  public getEmployeeDetailById(id: number) {
    return this.empService.getEmployeeDetailbyId(id).subscribe(data => {
      this.employee = data;
    })
  }

  //Delete Employee By Id
  public deleteEmployeeDetail(id: number) {
    if(window.confirm('Are you sure you want to delete this employee'))
    {
      this.empService.deleteEmployeeDetail(id).subscribe(data => {
        this.employee = data;
        this.empService.getEmployeeDetail();
      })
    }
    
  }

}
