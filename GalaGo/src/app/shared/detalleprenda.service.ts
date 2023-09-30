import { Injectable } from '@angular/core';
import { Prenda } from '../models/prenda';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DetalleprendaService {
  public prenda: Prenda
  private url:string = "http://localhost:3000"
  constructor(private http: HttpClient) { 
    
  }
  public obtenerDetalle(idprenda: number): Observable<Object> {
    return this.http.get(`${this.url}/prendaId/${idprenda}`)
   }
}
