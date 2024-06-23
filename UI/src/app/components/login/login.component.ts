import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../service/Auth/auth.service';
import { Router } from '@angular/router';
import { CreateUserComponent } from '../create-user/create-user.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../service/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm={
    username:'',
    password:''
  }
  msg!:string
  isloginerr!:boolean
  constructor(
    private authservice:AuthService,
    private router: Router,
    private dialog: MatDialog,
    private usrService:UserService,
    private snackBar: MatSnackBar,
    ){
      this.isloginerr=false;
      this.msg="";
    }
  ngOnInit(): void {
    //console.log('loading')
  }
    
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
    this.usrService.userLogin(this.loginForm).subscribe((response:any)=>{
      //console.log(response);
      if(response.status==200){
        this.snackBar.open(response.msg, 'Cancel', {
          duration: 5000,
          panelClass: ['snackBarColor'],
        });
        this.isloginerr=false;
        localStorage.setItem('islogin','Y');
        localStorage.setItem('userName',response.userName);
        this.router.navigate(['employee']);
      }
      else{
        this.msg=response.msg;
        this.isloginerr=true;
        this.snackBar.open(response.msg, 'Cancel', {
          panelClass: ['snackBarColor'],
        });
      }
    },(err)=>{
      console.log(err);
      this.isloginerr=true;
      this.msg=err.error.msg;
      this.snackBar.open(this.msg, 'Cancel', {
        duration: 5000,
        panelClass: ['snackBarColor'],
      });
    })
  }
}
