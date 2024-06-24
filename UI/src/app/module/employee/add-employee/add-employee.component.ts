import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { EmployeeService } from "../../../service/employee/employee.service";
import { UtilityService } from "../../../service/utility.service";
import { CommonModule } from "@angular/common";
import { DepartmentService } from "../../../service/department/department.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router, RouterLink } from "@angular/router";


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
  imports:[ReactiveFormsModule,CommonModule,RouterLink],
  standalone:true
})
export class AddEmployeeComponent implements OnInit{
  addEmpForm!:FormGroup;
  departments!:any;
  constructor(private fb:FormBuilder,
    private employeeService:EmployeeService,
    private util:UtilityService,
    private deptService:DepartmentService,
    private snackBar: MatSnackBar,
    private router: Router,

  ){}
  ngOnInit(): void {
      this.addEmpForm=this.fb.group({
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
        assignedManager:['']
      })
      this.getdeptList();
  }
  onSubmit():void{
    if(this.addEmpForm.valid){
      const dob=this.addEmpForm.get('dob')?.value;
      const hrdt=this.addEmpForm.get('hireDate')?.value;
      this.addEmpForm.patchValue({
        dob:this.util.dateToNum(dob),
        hireDate:this.util.dateToNum(hrdt)
      })
      console.log(this.addEmpForm.value);
      this.employeeService.addEmployee(this.addEmpForm.value)
      .subscribe((res:any)=>{
        if(res.status==200){
          this.snackBar.open(res.msg, 'Cancel', {
            duration: 5000,
            panelClass: ['snackBarColor'],
          });
          this.addEmpForm.reset();
          this.router.navigate(['employee']);
        }else{
          this.snackBar.open(res.msg, 'Cancel', {
            duration: 5000,
            panelClass: ['snackBarColor'],
          });
          this.addEmpForm.patchValue({
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
