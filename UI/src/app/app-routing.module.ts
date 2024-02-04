import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { DepartmentComponent } from './components/department/department.component';
import { ManagerComponent } from './components/manager/manager.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './components/employee/view-employee/view-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { ViewDepartmentComponent } from './components/department/view-department/view-department.component';
import { EditDepartmentComponent } from './components/department/edit-department/edit-department.component';
import { AddressComponent } from './components/address/address.component';
import { AddManagerComponent } from './components/manager/add-manager/add-manager.component';
import { AuthGuardService } from './service/Auth/auth-guard.service';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  //employee section
  {
    path:'',
    component:EmployeeComponent,
    canActivate: [AuthGuardService],
    pathMatch:"full"
  },
  {
    path:'add-employee',
    component:AddEmployeeComponent,
    canActivate: [AuthGuardService],
    pathMatch:"full"
  },
  {
    path:'view-employee/:id',
    component:ViewEmployeeComponent,
    canActivate: [AuthGuardService],
    pathMatch:"full"
  },
  {
    path:'edit-employee/:id',
    component:EditEmployeeComponent,
    canActivate: [AuthGuardService],
    pathMatch:"full"
  },
  //department section
{
  path:'department',
  component:DepartmentComponent,
  canActivate: [AuthGuardService],
  pathMatch:"full"
},
{
  path:'add-department',
  component:AddEmployeeComponent,
  canActivate: [AuthGuardService],
  pathMatch:"full"
},
{
  path:'view-department/:id',
  component:ViewDepartmentComponent,
  canActivate: [AuthGuardService],
  pathMatch:"full"
},
{
  path:'edit-department/:id',
  component:EditDepartmentComponent,
  canActivate: [AuthGuardService],
  pathMatch:"full"
},
//manager section
{
  path:'manager',
  component:ManagerComponent,
  canActivate: [AuthGuardService],
  pathMatch:"full"
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
