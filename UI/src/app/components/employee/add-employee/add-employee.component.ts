import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EmployeeService } from '../../../service/employee/employee.service';
import { UtilityService } from '../../../service/utility.service';
import { DepartmentService } from '../../../service/department/department.service';
import { Data, Router } from '@angular/router';
import { ManagerService } from '../../../service/manager/manager.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  deptList:Data[]=[];
  mngrList:Data[]=[];
  selectedImagePath: string='';
  imgSizeError=false
  constructor(private employeeservice:EmployeeService,private depServ:DepartmentService,
    private mngrService:ManagerService,
    private utilityService:UtilityService,
    private router: Router,
    private snackBar: MatSnackBar){
      
  }
  ngOnInit():void{
    this.departmentList();
    this.managerList();
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
    imageFile:''
  };
  onFileSelected(): void {
    const fileInput: any = document.getElementById('file');
    const file = fileInput.files[0];
    const filesize=(file.size)/1024;
    if(filesize>200){
      this.imgSizeError=true;
    }else{
      this.imgSizeError=false;
    }
    this.selectedImagePath = file.name;
    if (file) {
      this.formData.imageFile=file;
    } else {
      console.error('No file selected.');
    }
  }
  submitForm(){
    this.formData.dob=this.utilityService.dateFormate(new Date(this.formData.dob));
    this.formData.hireDate=this.utilityService.dateFormate(new Date(this.formData.hireDate));
    this.employeeservice.addEmployee(this.formData).subscribe((response:any)=>{
      if(response.status==200){
        this.snackBar.open(response.msg, 'Cancel', {
          duration: 5000,
          panelClass: ['snackBarColor'],
        });
        this.router.navigate(['']);  
      }
      else{
        this.snackBar.open(response.msg, 'Cancel', {
          panelClass: ['snackBarColor'],
        });
      }
    },
    (err)=>{
      this.snackBar.open(err.error.msg, 'Cancel', {
        panelClass: ['snackBarColor'],
      });
      console.log(err);
    });
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
