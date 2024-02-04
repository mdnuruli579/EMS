import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateUserComponent>
  ){}
  cancelPopup(): void {
    this.dialogRef.close();
  }
}
