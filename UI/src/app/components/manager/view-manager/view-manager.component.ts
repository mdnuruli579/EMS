import { Component, Inject } from '@angular/core';
import { ManagerService } from '../../../service/manager/manager.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-manager',
  templateUrl: './view-manager.component.html',
  styleUrl: './view-manager.component.css'
})
export class ViewManagerComponent {
  constructor(private managerService:ManagerService,
    public dialogRef: MatDialogRef<ViewManagerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog){
  }
  managerForm={
    managerName:'',
    email:'',
    phoneNumber:'',
  }
  ngOnInit():void{
    this.viewManager(this.data.id);
  }
  viewManager(mid:string):void{
    this.managerService.viewManager(mid).subscribe((res)=>{
        if(res){
          this.managerForm=res;
        }
    },(err)=>{
      console.log(err);
    })
  }
  cancelPopup():void{
    this.dialogRef.close();
  }
}
