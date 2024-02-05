import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DepartmentService } from '../../../service/department/department.service';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrl: './view-department.component.css'
})
export class ViewDepartmentComponent {
  department={
    departmentName:'',
    location:'',
  }
  constructor(public dialogRef: MatDialogRef<ViewDepartmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private deptService:DepartmentService
    ){}
  ngOnInit():void{
    this.viewDepartment(this.data.id);
  }
  viewDepartment(id:string):void{
    this.deptService.viewDepartment(id).subscribe((res)=>{
      if(res){
        this.department=res;
      }
  },(err)=>{
    console.log(err);
  })
  }
  cancelPopup(): void {
    this.dialogRef.close();
  }
}
