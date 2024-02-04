import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  viewManager(id:string):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/manager/detail/${id}`);
  }
  addManager(data:any): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/manager/add`, data,{ headers });
  }
  editManager(data:any,id:string): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(`${this.apiUrl}/manager/update/${id}`,data,{headers});
  }
  deleteManager(id:number): Observable<any> { 
    const apiUrl = `${this.apiUrl}/manager/delete/${id}`;
    return this.http.delete<any>(apiUrl);
  }
}
