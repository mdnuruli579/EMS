import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ManagerService } from '../../../service/manager/manager.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrl: './add-manager.component.css'
})
export class AddManagerComponent {
  managerForm={
    managerName:'',
    email:'',
    phoneNumber:''
  }
  constructor(public dialogRef: MatDialogRef<AddManagerComponent>,
    private mngrService:ManagerService,
    private snackBar: MatSnackBar
    ) { }
  cancelPopup(): void {
    this.dialogRef.close();
  }
  addManager():void{
    this.mngrService.addManager(this.managerForm).subscribe((response)=>{
      if(response.status==200){
        this.snackBar.open(response.msg, 'Cancel', {
          duration: 5000,
          panelClass: ['snackBarColor'],
        });
      }
      else{
        this.snackBar.open(response.msg, 'Cancel', {
          panelClass: ['snackBarColor'],
        });
      }
    },(err)=>{
      console.log(err);
    });
    this.cancelPopup();
  }
}
