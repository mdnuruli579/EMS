import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedKey = 'isAuthenticated';
  constructor() { }
  setAuthenticationStatus(isAuthenticated: boolean): void {
    localStorage.setItem(this.isAuthenticatedKey, isAuthenticated.toString());
  }
  isLoggedIn(): boolean {
    const isAuthenticated = localStorage.getItem(this.isAuthenticatedKey);
    return isAuthenticated ? JSON.parse(isAuthenticated) : false;
  }
}
