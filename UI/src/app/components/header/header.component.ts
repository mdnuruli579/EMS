import { Component } from '@angular/core';
import { AuthService } from '../../service/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
      islogin:boolean=false;
      constructor(
        private autservice:AuthService,
        private router: Router
        ){
      }
      ngOnInit():void{
        this.islogin=this.autservice.isLoggedIn();
      }
      logout():void{
        this.autservice.setAuthenticationStatus(false);
        this.islogin=this.autservice.isLoggedIn();
        this.router.navigate(['/login']);
      }
}
