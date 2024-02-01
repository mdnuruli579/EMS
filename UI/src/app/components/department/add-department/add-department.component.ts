import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DepartmentService } from '../../../service/department/department.service';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {
  department: any = {};

  constructor(public dialogRef: MatDialogRef<AddDepartmentComponent>,
    private departmentService:DepartmentService) { }

  ngOnInit(): void {
  }

  addDepartment(): void {
    this.departmentService.addDepartment(this.department)
      .pipe(
        catchError((err) => {
          console.log('Error:', err);
          this.cancelPopup();
          throw err; 
        })
      )
      .subscribe((res) => {
        if (res) {
          console.log('Response:', res);
        } else {
          console.log('Empty response');
        }
        this.cancelPopup();
      });
  }
  
  cancelPopup(): void {
    this.dialogRef.close();
  }
}
