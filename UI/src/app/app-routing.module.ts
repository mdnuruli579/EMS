import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { DepartmentComponent } from './components/department/department.component';
import { ManagerComponent } from './components/manager/manager.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';

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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
