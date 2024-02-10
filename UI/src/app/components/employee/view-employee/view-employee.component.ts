import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../service/employee/employee.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { DepartmentService } from '../../../service/department/department.service';
import { ManagerService } from '../../../service/manager/manager.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent implements OnInit{
       id:any;
      managerDetail={
        id:'',
        managerName:'',
        phoneNumber:''
      };
      department={
        departmentName:'',
        id:'',
        location:'',
      }
  spinner: boolean=false;
      constructor(private employeeService:EmployeeService,
        private deptService:DepartmentService,private managerService:ManagerService,
        private route: ActivatedRoute){}
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
        image:''
      };
      ngOnInit():void{
        this.route.paramMap.pipe(
          switchMap((params: ParamMap) => {
             this.id = params.get('id');
            this.viewEmployee(this.id);
            return Observable.toString();
          })
          ).subscribe();
         
      }
      managerDetails():void{
        this.managerService.viewManager(this.formData.managerId).subscribe((res)=>{
          this.managerDetail=res;
        },(err)=>{
          console.log(err);
        })
      }
      departmentDetails():void{
        this.deptService.viewDepartment(this.formData.departmentId).subscribe((res)=>{
          this.department=res;
        },(err)=>{
          console.log(err);
        })
      }
      getImageUrl(): string {
        return 'data:image/jpeg;base64,' + this.formData.image;
      }
      viewEmployee(id:any):void{
        this.employeeService.viewEmployee(id).subscribe((res)=>{
          if(res){
            setTimeout(()=>{
              this.spinner=false;
            },1000)
            this.formData=res;
          }
          this.managerDetails();
          this.departmentDetails();
          this.spinner=true;
        },(err)=>{
          console.log(err);
        })
      }
}
