import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { DepartmentService } from '../../service/department/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  dataList:Data[]=[];
  constructor(private departmentService:DepartmentService){
  }
  ngOnInit():void{
    this.departmentList();
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
