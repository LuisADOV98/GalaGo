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

  //  ------ IMPRIMIR PRENDAS ------ //
  public getPrenda():Observable<Object> {
    return this.http.get(`${this.url}/landing-page`)
   }

   public getPrendaHome():Observable<Object> {
    return this.http.get(`${this.url}/home`)
   }

  //  ------ ENUM DE LAS COLUMNAS PARA SELECTORES ------ //
  public enumType():Observable<Object>{
    return this.http.get(this.url+"/tipo")
  }

  public enumSize():Observable<Object>{
    return this.http.get(this.url+"/talla")
  }

  public enumEvent():Observable<Object>{
    return this.http.get(this.url+"/evento")
  }

  public enumState():Observable<Object>{
    return this.http.get(this.url+"/estado")
  }

    //  ------ EDITAR PRENDA ------ //
  public addPrenda(newPrenda):Observable<Object>{
    return this.http.post(this.url + "/publicar-prenda", newPrenda )
  }

  //  ------ PUBLICAR PRENDA ------ //
  public editarPrenda(editPrenda:Prenda):Observable<Object>{
    return this.http.put(this.url + "/editar-prenda", editPrenda)
  }
}
