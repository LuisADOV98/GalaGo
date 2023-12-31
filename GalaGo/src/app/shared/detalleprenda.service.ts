import { Injectable } from '@angular/core';
import { Prenda } from '../models/prenda';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Propietarioprenda } from '../models/propietarioprenda';

@Injectable({
  providedIn: 'root'
})
export class DetalleprendaService {
  // private url:string = "http://localhost:3000"
  private url:string = "https://api-rest-gala-go.vercel.app"
  public prenda: Prenda;
  public iduser: Propietarioprenda;
  public images: string[] = [];
  constructor(private http: HttpClient) { 
    
  }
  public obtenerDetalle(idprenda: number): Observable<Object> {
    return this.http.get(`${this.url}/prendaId?idprenda=${idprenda}`)
   }

   public obtenerPropietario(iduser: number): Observable<Object> {
    // return this.http.get(`${this.url}/conversacionuser2?iduser2=${iduser}`)
    console.log("en obtenerpropietario servicio")
    console.log(`${this.url}/conversacionId/${iduser}`)
    return this.http.get(`${this.url}/conversacionPropietarioPrenda/${iduser}`)

   }

  //  public crearChat(iduser1:number,iduser2:number):Observable<Object>{
  //   return this.http.post(`${this.url}/chat${iduser1}`)
  //  }
}
