import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../service/employee/employee.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent implements OnInit{
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
        photoURL:''
      };
      ngOnInit():void{
        this.route.paramMap.pipe(
          switchMap((params: ParamMap) => {
            const id = params.get('id');
            this.viewEmployee(id);
            return Observable.toString();
          })
          ).subscribe();
      }
      viewEmployee(id:any):void{
        this.employeeService.viewEmployee(id).subscribe((res)=>{
          this.formData=res;
        },(err)=>{
          console.log(err);
        })
      }
}
