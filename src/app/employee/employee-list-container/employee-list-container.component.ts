import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { EmployeeService } from '../employee.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.component.html',
  styleUrls: ['./employee-list-container.component.css']
})
export class EmployeeListContainerComponent implements OnInit {
  //declare variable as Observable
  public empList$: Observable<any>;

  constructor(private empService: EmployeeService, private location: Location) {
    this.empList$ = this.empService.getEmployeeDetail();
   }

  ngOnInit(): void {
  }


  //This method to delete Employee by Id
  public onDeleteEmpID(id:number){
    this.empService.deleteEmployeeDetail(id);
    this.location.back();
  }
}
