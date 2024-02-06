import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../service/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilityService } from '../../service/utility.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit{
  registerForm!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<CreateUserComponent>,
    private userService:UserService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private utilityService:UtilityService
  ){}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(11)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cnfPassword: ['', Validators.required],
    }, { validators: this.passwordMatchValidator });
  }
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const cnfPassword = group.get('cnfPassword')?.value;

    return password === cnfPassword ? null : { mismatch: true };
  }
  userRegister():void{
    const formData=this.utilityService.getFormValuesAsJSON(this.registerForm);
    this.userService.addUser(formData).subscribe((response:any)=>{
      if(response.status==200){
        this.snackBar.open(response.msg, 'Cancel', {
          duration: 5000,
          panelClass: ['snackBarColor'],
        });
        this.cancelPopup();
      }
      else{
        this.snackBar.open(response.msg, 'Cancel', {
          panelClass: ['snackBarColor'],
        });
      }
    },
    (err)=>{
      console.log(err);
    });
  }
  cancelPopup(): void {
    this.dialogRef.close();
  }
}
