import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }
  employeeList(): Observable<Data[]> {
    const apiUrl = `${this.apiUrl}/employee/list`;
    return this.http.get<Data[]>(apiUrl);
  }
}
