import { Injectable } from '@angular/core';
import { User } from '../models/user';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private url:string = "http://localhost:3000";
  private url:string = "https://api-rest-gala-go.vercel.app"
  public user:User;
  public logueado: boolean;
  
  // constructor(private http: HttpClient) {
  constructor(private http: HttpClient) { 
    this.logueado = false;
    console.log(this.user);
    
  }

//   public registerUser(user:User):Observable<Object>{
//     return this.http.post(this.url+"/registro", user); //users
// }

//Función que se usa en el componente header para saber si el usuario está logeado
  isLoggedIn(){
    return this.logueado;
  }
  public loginUser(newUser: User):Observable<Object>{
    return this.http.post(this.url+"/login", newUser);
  }

   //Post register
   public registro(newUser: User):Observable<Object>{
    return this.http.post(this.url+"/registro",newUser)
  }

  public editUser(user: User):Observable<Object>{
    return this.http.put(this.url+"/editar-perfil",user);
  }
  
  // EXTRAER LOS VALORES DE LOS ENUM EN ARRAYS
  //Array de location
  public enumLocation():Observable<Object>{
    return this.http.get(this.url+"/locations");
  }


  // public editUser(user: User):Observable<Object>{
  //   return this.http.put(this.url+"/user", user);
  // }
  
}