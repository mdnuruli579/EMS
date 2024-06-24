import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EmployeeService } from "../../../service/employee/employee.service";
import { UtilityService } from "../../../service/utility.service";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DepartmentService } from "../../../service/department/department.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css',
  imports:[ReactiveFormsModule,RouterLink,CommonModule,FormsModule],
  standalone:true
})
export class EditEmployeeComponent implements OnInit{
  editEmpForm!:FormGroup;
  departments!:any;
  constructor(private fb:FormBuilder,
    private employeeService:EmployeeService,
    private util:UtilityService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router,
    private deptService:DepartmentService,
  ){}
  ngOnInit(): void {
    this.editEmpForm=this.fb.group({
      id:[''],
      firstName:[''],
      lastName:[''],
      dob:[''],
      gender:[''],
      phnNumber:[''],
      email:[''],
      hireDate:[''],
      jobTitle:[''],
      salary:[''],
      emergencyContactName:[''],
      emergencyContactRelationship:[''],
      emergencyContactPhoneNumber:[''],
      departmentName:[''],
      assignedManager:[''],
      userName:['']
    })
    const id = +this.route.snapshot.params['id'];
    this.getEmpDetail(id);
    this.getdeptList();
  }
  getEmpDetail(id:number):void{
    this.employeeService.viewEmployee(id).subscribe((res:any)=>{
      if(res){
        const data=res;
        this.editEmpForm.patchValue({
          id:data.id,
          firstName:data.firstName,
          lastName:data.lastName,
          dob:this.util.dateToStr(data.dob),
          gender:data.gender,
          phnNumber:data.phnNumber,
          email:data.email,
          hireDate:this.util.dateToStr(data.hireDate),
          jobTitle:data.jobTitle,
          salary:data.salary,
          emergencyContactName:data.emergencyContactName,
          emergencyContactRelationship:data.emergencyContactRelationship,
          emergencyContactPhoneNumber:data.emergencyContactPhoneNumber,
          departmentName:data.departmentName,
          assignedManager:data.assignedManager,
          userName:data.userName
        })
      }else{
        this.snackBar.open("Data Not Found", 'Cancel', {
          duration: 5000,
          panelClass: ['snackBarColor'],
        });
      }
      //console.log(this.editEmpForm.value);
    })
  }
  onSubmit():void{
    if(this.editEmpForm.valid){
      const dob=this.editEmpForm.get('dob')?.value;
      const hrdt=this.editEmpForm.get('hireDate')?.value;
      this.editEmpForm.patchValue({
        dob:this.util.dateToNum(dob),
        hireDate:this.util.dateToNum(hrdt)
      })
      this.employeeService.editEmployee(this.editEmpForm.value)
      .subscribe((res:any)=>{
        if(res.status==200){
          this.snackBar.open(res.msg, 'Cancel', {
            duration: 5000,
            panelClass: ['snackBarColor'],
          });
          this.editEmpForm.reset();
          this.router.navigate(['employee']);
        }else{
          this.snackBar.open(res.msg, 'Cancel', {
            duration: 5000,
            panelClass: ['snackBarColor'],
          });
          this.editEmpForm.patchValue({
            dob:dob,
            hireDate:hrdt
          })
        }
      })
    }
  }
  getdeptList(){
    this.deptService.departmentList().subscribe((res:any)=>{
      this.departments=res;
    })
  }
  onCancel(): void {
    window.history.back();
  }

}
