import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee/employee.service';
import { Data } from '@angular/router';

export interface EmployeeElement {
  id: number;
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  phnNumber: string;
  email: string;
  hireDate: string;
  jobTitle: string;
  departmentId: number;
  addressId: number;
  salary: number;
  managerId: number;
  empStatus: string;
  emergencyContactName: string;
  emergencyContactRelationship: string;
  emergencyContactPhoneNumber: string;
  photoURL: string | null;
  createTime: string;
}
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{
  dataList:Data[]=[];
  constructor(private employeeService:EmployeeService){
  }
  ngOnInit():void{
    this.employeeList();
  }
  employeeList():void{
    this.employeeService.employeeList().subscribe(
      (data:Data[])=>{
      this.dataList=data;
      console.log(this.dataList);
    },
    (err:any)=>{
      console.log(err);
    });
  };
}
