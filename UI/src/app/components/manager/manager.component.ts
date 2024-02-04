import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { ManagerService } from '../../service/manager/manager.service';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewManagerComponent } from './view-manager/view-manager.component';
import { EditManagerComponent } from './edit-manager/edit-manager.component';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {
  dataList:Data[]=[];
  constructor(private managerService:ManagerService,
    private snackBar: MatSnackBar
    ,private dialog: MatDialog){
  }
  ngOnInit():void{
    this.managerList();
  }
  addManagerForm(): void {
    const dialogRef = this.dialog.open(AddManagerComponent, {
      width: '500px',
      height:'400px',
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log('Form submitted:', result);
      }
    });
  }
  viewManagerForm(id:string): void {
    const dialogRef = this.dialog.open(ViewManagerComponent, {
      width: '500px',
      height:'400px',
      data: { id: id }
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log('Form submitted:', result);
      }
    });
  }
  editManagerForm(id:string): void {
    const dialogRef = this.dialog.open(EditManagerComponent, {
      width: '500px',
      height:'400px',
      data: { id: id }
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log('Form submitted:', result);
      }
    });
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
  deleteManager(id: number) {
    Swal.fire({
      title: 'Warning!',
      text: 'Are You Sure Want To Delete ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.managerService.deleteManager(id).subscribe((res:any)=>{
          this.snackBar.open(res.msg, 'Cancel', {
            duration: 5000,
            panelClass: ['snackBarColor'],
          });
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
  };
}
