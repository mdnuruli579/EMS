import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../../service/user/user.service';

@Injectable()
export class authInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userName=localStorage.getItem('userName');
    const clonedRequest = req.clone({
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'userName': `${userName}`
      })
    });

    return next.handle(clonedRequest);
  }
}
