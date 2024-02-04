import { Component, Inject } from '@angular/core';
import { ManagerService } from '../../../service/manager/manager.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-manager',
  templateUrl: './edit-manager.component.html',
  styleUrl: './edit-manager.component.css'
})
export class EditManagerComponent {
  constructor(private managerService:ManagerService,
    public dialogRef: MatDialogRef<EditManagerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar,
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
  submitManager():void{
    this.managerService.editManager(this.managerForm,this.data.id).subscribe((res)=>{
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
}
