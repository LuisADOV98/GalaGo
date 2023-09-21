import { Injectable } from '@angular/core';
import { User } from '../models/user';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private url:string = "http://localhost:3000";
  public user:User;
  public logueado: boolean;
  
  // constructor(private http: HttpClient) {
  constructor() { 
    // this.url = 'http://localhost:3000/';
    this.logueado = false;
  }

//   public registerUser(user:User):Observable<Object>{
//     return this.http.post(this.url+"/registro", user); //users
// }

  // public loginUser(newUser: User):Observable<Object>{
  //   return this.http.post(this.url+"/login", newUser);
  // }
  // public editUser(user: User):Observable<Object>{
  //   return this.http.put(this.url+"/user", user);
  // }
  
}