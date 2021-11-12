import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl='';
  httpHeaders = new HttpHeaders({'Content-Type' : "application/json"});
  constructor(private http:HttpClient) { }
  registerUser(username:any,email:any,password1:any,password2:any):Observable<any>{
    const body = {username,email,password1,password2}
    return this.http.post(this.baseurl + 'user_registration/', body);
  }
  loginUser(username:any,password:any):Observable<any>{
    const body = {username,password}
    return this.http.post(this.baseurl + 'login/', body);
  }
  getAllUsers(accessToken:any):Observable<any>{
    return this.http.get(this.baseurl + 'api/users/',
    {
      headers:{
        Authorization:'Bearer ' + accessToken,
      },
    });
  }
  
}