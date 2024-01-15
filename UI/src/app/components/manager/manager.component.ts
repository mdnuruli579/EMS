import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { ManagerService } from '../../service/manager/manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {
  dataList:Data[]=[];
  constructor(private managerService:ManagerService){
  }
  ngOnInit():void{
    this.managerList();
  }
  managerList():void{
    this.managerService.managerList().subscribe(
      (data:Data[])=>{
      this.dataList=data;
      console.log(this.dataList);
    },
    (err:any)=>{
      console.log(err);
    });
  };
}
