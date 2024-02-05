import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee/employee.service';
import { Data } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  constructor(private employeeService:EmployeeService,private snackBar: MatSnackBar){
  }
  ngOnInit():void{
    this.employeeList();
  }
  deleteEmployee(id: number) {
    Swal.fire({
      title: 'Warning!',
      text: 'Are You Sure Want To Delete ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeService.deleteEmployee(id).subscribe((res:any)=>{
          console.log(res);
          this.snackBar.open(res.msg, 'Cancel', {
            duration: 5000,
            panelClass: ['snackBarColor'],
          });
          this.employeeList();
        },(err)=>{
          console.log(err);
        });
      } else {
        this.snackBar.open('Record Not Deleted', 'Cancel', {
          duration: 5000,
          panelClass: ['snackBarColor'],
        });
      }
    });
  };
  employeeList():void{
    this.employeeService.employeeList().subscribe(
      (data:Data[])=>{
      this.dataList=data;
    },
    (err:any)=>{
      console.log(err);
    });
  };
}

