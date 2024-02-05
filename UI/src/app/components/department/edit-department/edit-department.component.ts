import { Component, Inject } from '@angular/core';
import { DepartmentService } from '../../../service/department/department.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrl: './edit-department.component.css'
})
export class EditDepartmentComponent {
  department={
    departmentName:'',
    location:''
  }
  constructor(private deptService:DepartmentService,
    public dialogRef: MatDialogRef<EditDepartmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
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
  editDepartment():void{
    this.deptService.editDepartment(this.department,this.data.id).subscribe((res)=>{
      if(res.status==200){
        this.snackBar.open(res.msg, 'Cancel', {
          duration: 5000,
          panelClass: ['snackBarColor'],
        });
      }else{
          this.snackBar.open(res.msg, 'Cancel', {
            panelClass: ['snackBarColor'],
          });
      } 
    },(err)=>{
      console.log(err);
    });
    this.cancelPopup();
  }
  cancelPopup():void{
    this.dialogRef.close();
  }
}
