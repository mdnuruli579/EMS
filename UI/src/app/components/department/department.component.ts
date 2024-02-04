import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { DepartmentService } from '../../service/department/department.service';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  dataList:Data[]=[];
  constructor(private departmentService:DepartmentService,
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
    this.departmentService.deleteDepartment(id).subscribe(()=>{
      console.log('deleted sucessfully');
    },(err)=>{
      console.log('something wrong',err);
    })
  }
  departmentList():void{
    this.departmentService.departmentList().subscribe(
      (data:Data[])=>{
      this.dataList=data;
      console.log(this.dataList);
    },
    (err:any)=>{
      console.log(err);
    });
  };
}
