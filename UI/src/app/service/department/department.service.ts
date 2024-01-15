import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }
  departmentList(): Observable<Data[]> {
    const apiUrl = `${this.apiUrl}/department/list`;
    return this.http.get<Data[]>(apiUrl);
  }
}
