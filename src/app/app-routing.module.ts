import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'', component:LoginComponent},
  { path: 'employee', canActivate: [AuthenticationGuard],
  loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
