import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private apiUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }
  managerList(): Observable<Data[]> {
    const apiUrl = `${this.apiUrl}/manager/list`;
    return this.http.get<Data[]>(apiUrl);
  }
}
