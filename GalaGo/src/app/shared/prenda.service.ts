import { Injectable } from '@angular/core';
import { Prenda } from '../models/prenda';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PrendaService {
  public prenda: Prenda
  private url:string = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  public getPrenda():Observable<Object> {
   
    return this.http.get(`${this.url}/landing-page`)
   }

  public editarPrenda(editPrenda:Prenda):Observable<Object>{
    return this.http.put(this.url + "/editar-prenda", editPrenda)
  }
}
