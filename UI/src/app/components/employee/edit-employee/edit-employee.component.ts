import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../service/employee/employee.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Data, ParamMap } from '@angular/router';
import { DepartmentService } from '../../../service/department/department.service';
import { ManagerService } from '../../../service/manager/manager.service';
import { UtilityService } from '../../../service/utility.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as base64 from 'base64-js';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit{
  deptList:Data[]=[];
  mngrList:Data[]=[];
  srcResult: any;
  selectedImagePath: string='';
  imgSizeError=false
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
    salary:'',
    managerId:'',
    empStatus:'',
    emergencyContactName:'',
    emergencyContactRelationship:'',
    emergencyContactPhoneNumber:'',
    imageFile:'',
    id:'',
    image:'',
    addressId:'1'
  };
  spinner:boolean=false
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get('id');
        this.editEmployee(id);
        return Observable.toString();
      })
      ).subscribe();
  }
  onFileSelected(): void {
    const fileInput: any = document.getElementById('file');
    const file = fileInput.files[0];
    this.selectedImagePath = file.name;
    const filesize=(file.size)/1024;
    if(filesize>200){
      this.imgSizeError=true;
    }else{
      this.imgSizeError=false;
    }
    if (file) {
      this.formData.imageFile = file;
    } else {
      console.error('No file selected.');
    }
  }
  editEmployee(id:any):void{
    this.employeeService.viewEmployee(id).subscribe((res)=>{
      this.spinner=true;
      setTimeout(()=>{
        this.spinner=false;
      },1000)
      this.formData=res;
      console.log(this.formData);
      this.departmentList();
      this.managerList();
    },(err)=>{
      console.log(err);
    })
  }
  getImageUrl(): string {
    return 'data:image/jpeg;base64,' + this.formData.image;
  }
  submitEditForm():void{
    this.formData.dob=this.utilityService.dateFormate(new Date(this.formData.dob));
    this.formData.hireDate=this.utilityService.dateFormate(new Date(this.formData.hireDate));
    this.formData.addressId="1";
    this.formData.imageFile = this.formData.image;
    this.employeeService.editEmployee(this.formData,this.formData.id).subscribe((response)=>{
      console.log(response);
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
      this.snackBar.open(err.error.error, 'Cancel', {
        panelClass: ['snackBarColor'],
      });
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
