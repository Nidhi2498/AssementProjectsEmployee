import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeFormContainerComponent } from './employee-form-container/employee-form-container.component';
import { EmployeeListContainerComponent } from './employee-list-container/employee-list-container.component';
import { EmployeeFormPresentationComponent } from './employee-form-container/employee-form-presentation/employee-form-presentation.component';
import { EmployeeListPresentationComponent } from './employee-list-container/employee-list-presentation/employee-list-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { GenderpipePipe } from './pipe/genderpipe.pipe';
import { SearchPipe } from './pipe/search.pipe';
import { SortPipe } from './pipe/sort.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeFormContainerComponent,
    EmployeeListContainerComponent,
    EmployeeFormPresentationComponent,
    EmployeeListPresentationComponent,
    GenderpipePipe,
    SearchPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BsDatepickerModule
  ],
  providers: [EmployeeService ]
})
export class EmployeeModule { }
