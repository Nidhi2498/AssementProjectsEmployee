import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  public baseURL = "http://localhost:3000/";
  constructor(private httpClient: HttpClient) { }

  //Add the user
  public addEmployee(data:Employee):Observable<Employee>{
    return this.httpClient.post<Employee>(`${this.baseURL}employee`, data);
  }

  //Get user details
  public getEmployeeDetail():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}employee`)
  }

  //Get user detail by Id
  public getEmployeeDetailbyId(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}employee/${id}`)
  }
  
  //Update the user
  public updateEmployeeDetail(data:Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.baseURL}employee/${data.id}`,data)
  }

  //Delete the user
  public deleteEmployeeDetail(id:number):Observable<number>{
    return this.httpClient.delete<number>(`${this.baseURL}employee/${id}`)
  } 

}
