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

const routes: Routes = [
  {
    path:'',
    component:EmployeeComponent,
    pathMatch:"full"
  },
{
  path:'department',
  component:DepartmentComponent,
  pathMatch:"full"
},
{
  path:'manager',
  component:ManagerComponent,
  pathMatch:"full"
},
{
  path:'add-employee',
  component:AddEmployeeComponent,
  pathMatch:"full"
},
{
  path:'view-employee/:id',
  component:ViewEmployeeComponent,
  pathMatch:"full"
},
{
  path:'edit-employee/:id',
  component:EditEmployeeComponent,
  pathMatch:"full"
},
{
  path:'add-department',
  component:AddEmployeeComponent,
  pathMatch:"full"
},
{
  path:'view-department/:id',
  component:ViewDepartmentComponent,
  pathMatch:"full"
},
{
  path:'edit-department/:id',
  component:EditDepartmentComponent,
  pathMatch:"full"
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
