import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  addEmployee(data:any): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/employee/add`, data,{ headers });
  }
  deleteEmployee(id:number): Observable<any> {
    console.log(id); 
    const apiUrl = `${this.apiUrl}/employee/delete/${id}`;
    return this.http.delete<any>(apiUrl);
  }
  viewEmployee(id:number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/employee/detail/${id}`);
  }
  editEmployee(data:any,id:string): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(`${this.apiUrl}/employee/update/${id}`,data,{headers});
  }
}
