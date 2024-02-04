import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../service/employee/employee.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Data, ParamMap } from '@angular/router';
import { DepartmentService } from '../../../service/department/department.service';
import { ManagerService } from '../../../service/manager/manager.service';
import { UtilityService } from '../../../service/utility.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit{
  deptList:Data[]=[];
  mngrList:Data[]=[];
  constructor(private employeeService:EmployeeService,
    private depServ:DepartmentService,
    private mngrService:ManagerService,
    private utilityService:UtilityService,private snackBar: MatSnackBar,
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
      this.formData=res;
      this.departmentList();
      this.managerList();
    },(err)=>{
      console.log(err);
    })
  }
  submitEditForm():void{
    this.formData.dob=this.utilityService.dateFormate(new Date(this.formData.dob));
    this.formData.hireDate=this.utilityService.dateFormate(new Date(this.formData.hireDate));
    this.employeeService.editEmployee(this.formData,this.formData.id).subscribe((response)=>{
      if(response.status==200){
        this.snackBar.open(response.msg, 'Cancel', {
          duration: 5000,
          panelClass: ['snackBarColor'],
        });
      }
      else{
        this.snackBar.open(response.msg, 'Cancel', {
          panelClass: ['snackBarColor'],
        });
      }
    },(err)=>{
      console.log(err);
    })
  }
  departmentList():void{
    this.depServ.departmentList().subscribe((data:Data[])=>{
      this.deptList=data;
    },(err:any)=>{
      console.log(err);
    });
  }
  managerList():void{
    this.mngrService.managerList().subscribe((data:Data[])=>{
      this.mngrList=data;
    },(err)=>{
      console.log(err);
    })
  }

}
