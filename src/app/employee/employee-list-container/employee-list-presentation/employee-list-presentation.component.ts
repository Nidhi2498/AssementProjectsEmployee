import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../employee.model';
import { EmployeeService } from '../../employee.service';
import { EmployeeListPresenterService } from '../employee-list-presenter/employee-list-presenter.service';

@Component({
  selector: 'app-employee-list-presentation',
  templateUrl: './employee-list-presentation.component.html',
  styleUrls: ['./employee-list-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [EmployeeListPresenterService]
})
export class EmployeeListPresentationComponent implements OnInit {

  //declare varibale for pagination
  public page = 1;
  public pageSize = 5
  
  //declare variable for searching 
  searchText!: string;

  //declare variable as Employee type
  private _employeeData: Employee[] = [];

  //declare variable as FormGroup
  public employeeGroup!: FormGroup;

  //decalre variable for display message in bulk delete
  public msg!: string;
	public clss!: string;

  //Set the value of user
  @Input() public set employeeData(value: Employee[]) {
    if (value) {
      this._employeeData = value
    }
  }

  //Get the value of user
  public get employeeData(): Employee[] {
    return this._employeeData
  }

  //Call and emit the Id which is deleted
  @Output() public deleteEmpById: EventEmitter<any> = new EventEmitter();


  constructor(private employeePresenterService: EmployeeListPresenterService,
    public _router: Router, private empService: EmployeeService, private http: HttpClient,
    private route: ActivatedRoute) {
    this.employeeData = [];
    this.employeeGroup = this.employeePresenterService.bindForm();
    this.getEmployeedata();
  }

  ngOnInit(): void {
    this.employeePresenterService.empListId$.subscribe((empListId: any) => {
      this.deleteEmpById.emit(empListId);
    })

    this.route.paramMap.subscribe((params: any) => {
      const userId = +params.get('id');
      if (userId) {
        this.getEmployeedata();
      }
    })
  }

  //Call User from User presenter service
  public getUserById(id: number) {
    this._router.navigate([`../employee/add/${id}`,]);
  }

  //Call this method from User presenter service
  public deleteUserDetail(id: number) {
    this.employeePresenterService.deleteEmployeeDetail(id);
    this.getEmployeedata();
  }

  data = [];
  public getEmployeedata() {
    this.empService.getEmployeeDetail().subscribe(
      (data: any) => { this.data = data }
    )
  }

  //Check all checkbox
  public checkAllCheckBox(ev:any) {
		this.employeeData.forEach(x => x.checked = ev.target.checked)
	}


  //To check whether checkbox is checked or not
	public isAllCheckBoxChecked() {
		return this.employeeData.every(p => p.checked);
	}

  
  //Bulk delete method
  public deleteProducts(): void {
		const selectedEmp:any = this.employeeData.filter(employee => employee.checked).map(p => p.id);
		
		if(selectedEmp && selectedEmp.length > 0) {
      
			this.empService.deleteEmployeeDetail(selectedEmp)
				.subscribe(res => {
					this.clss = 'grn';
					alert('Employee deleted successfully')
					}, err => {
                        this.clss = 'rd';
						alert('Something went wrong during deleting employee');
                    }
                );
		} else {
			this.clss = 'rd';
			alert('You must select at least one employee');
		}
	}

  
}
