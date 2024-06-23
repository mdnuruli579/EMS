import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'employee', loadChildren:()=>import('./employee/employee-routing.module').then(m=>m.EmployeeRoutingModule),
  },
  {
    path: 'department', loadChildren:()=>import('./department/department-routing.module').then(m=>m.DepartmentRoutingModule),
  },
  {
    path: 'manager', loadChildren:()=>import('./manager/manager-routing.module').then(m=>m.ManagerRoutingModule),
  },
  {
    path: 'address', loadChildren:()=>import('./address/address-routing.module').then(m=>m.AddressRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
