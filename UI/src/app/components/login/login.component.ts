import { Component } from '@angular/core';
import { AuthService } from '../../service/Auth/auth.service';
import { Router } from '@angular/router';
import { CreateUserComponent } from '../create-user/create-user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm={
    username:'',
    password:''
  }
  constructor(
    private authservice:AuthService,
    private router: Router,
    private dialog: MatDialog
    ){}

  userPopup():void{
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '400px',
      height:'400px',
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log('Form submitted:', result);
      }
    });
  }
  UserLogin():void{
    this.authservice.setAuthenticationStatus(true);
    this.router.navigate(['']);
    console.log(this.loginForm)
  }
}
