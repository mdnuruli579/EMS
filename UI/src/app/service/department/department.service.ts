import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  addDepartment(data:any): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/department/add`, data,{ headers });
  }
  deleteDepartment(id:number): Observable<any> {
    console.log(id); 
    const apiUrl = `${this.apiUrl}/department/delete/${id}`;
    return this.http.delete<any>(apiUrl);
  }
  viewDepartment(id:string):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/department/detail/${id}`);
  }
  editDepartment(data:any,id:string): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(`${this.apiUrl}/department/update/${id}`,data,{headers});
  }
}
