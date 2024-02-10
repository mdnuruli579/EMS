import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { DepartmentService } from '../../service/department/department.service';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewDepartmentComponent } from './view-department/view-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  dataList:Data[]=[];
  spinner: boolean=false;
  constructor(private departmentService:DepartmentService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog){

  }
  ngOnInit():void{
    this.departmentList();
  }
  openDepartmentForm(): void {
    const dialogRef = this.dialog.open(AddDepartmentComponent, {
      width: '400px',
      height:'400px',
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log('Form submitted:', result);
      }
    });
  }
  deleteDepartment(id:number) {
    Swal.fire({
      title: 'Warning!',
      text: 'Are You Sure Want To Delete ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.departmentService.deleteDepartment(id).subscribe((res:any)=>{
          console.log(res);
          this.snackBar.open(res.msg, 'Cancel', {
            duration: 5000,
            panelClass: ['snackBarColor'],
          });
          this.departmentList();
        },(err)=>{
          console.log(err);
        });
      } else {
        this.snackBar.open('Record Not Deleted', 'Cancel', {
          duration: 5000,
          panelClass: ['snackBarColor'],
        });
      }
    });
  }
  departmentList():void{
    this.departmentService.departmentList().subscribe(
      (data:Data[])=>{
      if(data!=null){
        this.spinner=true;
        setTimeout(()=>{
          this.spinner=false;
        },1000)
      this.dataList=data;
      }
    },
    (err:any)=>{
      console.log(err);
    });
  };
  viewDepartment(id:string):void{
    const dialogRef = this.dialog.open(ViewDepartmentComponent, {
      width: '400px',
      height:'400px',
      data: { id: id }
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log('Form submitted:', result);
      }
    });
  }
  editDepartment(id:string):void{
    const dialogRef = this.dialog.open(EditDepartmentComponent, {
      width: '400px',
      height:'400px',
      data: { id: id }
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log('Form submitted:', result);
      }
    });
  }
}
