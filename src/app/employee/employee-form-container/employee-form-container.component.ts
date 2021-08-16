import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.component.html',
  styleUrls: ['./employee-form-container.component.css']
})
export class EmployeeFormContainerComponent implements OnInit {

  //Set default value to each field
  @Input() userList = {id:0, fname:'', lname:'', birthdate:'', gender:'', department:''};
  
  //Injecting Services
  constructor(private empService: EmployeeService,
              private location:Location 
    ) { }

  ngOnInit(): void {
  }

  //Call method from Employee service
  public addEmpDetail(emp: Employee){
    this.empService.addEmployee(emp).subscribe((data:Employee)=>{
      this.empService.getEmployeeDetail();
      this.location.back();
    })
  }

  //Update the Employee detail
  public updateEmpDetail(user: Employee){
    this.empService.updateEmployeeDetail(user).subscribe((data:Employee)=>{
      this.empService.getEmployeeDetail();
      this.location.back();
    })
  }

}
