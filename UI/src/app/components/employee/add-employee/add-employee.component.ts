import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EmployeeService } from '../../../service/employee/employee.service';
import { UtilityService } from '../../../service/utility.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  constructor(private employeeservice:EmployeeService,
    private utilityService:UtilityService,private snackBar: MatSnackBar){

  }
  formData={
    firstName:'',
    lastName:'',
    dob:'',
    gender:'',
    phnNumber:'',
    email:'',
    hireDate:'',
    jobTitle:'',
    departmentId:'',
    addressId:'',
    salary:'',
    managerId:'',
    empStatus:'',
    emergencyContactName:'',
    emergencyContactRelationship:'',
    emergencyContactPhoneNumber:'',
    photoURL:''
  };
  submitForm(){
    this.formData.dob=this.utilityService.dateFormate(new Date(this.formData.dob));
    this.formData.hireDate=this.utilityService.dateFormate(new Date(this.formData.hireDate));
    this.employeeservice.addEmployee(this.formData).subscribe((response)=>{
      this.snackBar.open("Employee Added Sucessfully");
    },
    (err)=>{
      console.log(err);
    });
  }


}
