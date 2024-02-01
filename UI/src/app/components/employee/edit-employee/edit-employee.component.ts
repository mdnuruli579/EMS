import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../service/employee/employee.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit{
  constructor(private employeeService:EmployeeService,private route: ActivatedRoute){}
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
    photoURL:'',
    id:''
  };
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get('id');
        this.editEmployee(id);
        return Observable.toString();
      })
      ).subscribe();
  }
  editEmployee(id:any):void{
    this.employeeService.viewEmployee(id).subscribe((res)=>{
      res.addressId=res.addressId.toString();
      res.departmentId=res.departmentId.toString();
      res.managerId=res.managerId.toString();
      this.formData=res;
      console.log(this.formData);
    },(err)=>{
      console.log(err);
    })
  }
  submitEditForm():void{
    this.employeeService.editEmployee(this.formData,this.formData.id).subscribe((res)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    })
  }

}
