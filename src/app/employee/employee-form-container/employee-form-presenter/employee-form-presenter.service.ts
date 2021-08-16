import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()

export class EmployeeFormPresenterService {

  //declare variable as Subject 
  public empDetail: Subject<any> = new Subject();
  public empDetail$!: Observable<any>;

  constructor() {
    this.empDetail$ = this.empDetail.asObservable();
  }

 //Binding Formgroup
 public bindForm() {
  return new FormGroup({
    id: new FormControl(),
    fname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    lname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    birthdate: new FormControl(),
    gender: new FormControl('male'),
    department: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    enabled: new FormControl(),
  })
}

  //Check form is valid or not
  public empDetailData(employeeForm: FormGroup) {
    if (employeeForm.valid) {
      this.empDetail.next(employeeForm.value)
    } else { }
  }
}
