import { Injectable } from '@angular/core';
import { Prenda } from '../models/prenda';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PrendaService {
  public prenda: Prenda;
  public prendas: Prenda[]
  private url:string = "http://localhost:3000"
  constructor(private http: HttpClient) { 

     
     
  }

 
  
  //  ------ IMPRIMIR PRENDAS ------ //
  public getPrenda():Observable<Object> {
    return this.http.get(`${this.url}/landingpage`)
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
    console.log(newPrenda);
    
    return this.http.post(this.url + "/prenda", newPrenda )
  }
  // `
  //  ------ PUBLICAR PRENDA
  public editarPrenda(prenda:Prenda):Observable<Object>{
    
    return this.http.put(this.url + "/prenda",prenda)
  }

  public getMisPrendas(iduser:number):Observable<Object>{
    return this.http.get(`${this.url}/perfil?iduser=${iduser}`  )
  }

  public getMisFavs(iduser:number):Observable<Object>{
    return this.http.get(`${this.url}/favoritos?iduser=${iduser}`)
  }


    // ---- FILTROS HOME ---- //
    public filtroTipo(tipo:string, size:string, price:number, evento:string, state:string):Observable<Object>{
      console.log("datos por parametro", tipo, size, price, evento, state);
      let endPoint: Observable<Object>;
      if((tipo === undefined) && (size === undefined) && (price === undefined) && (evento === undefined) && (state === undefined)){
          endPoint = this.http.get(`${this.url}/home`);
          console.log("endpoint: ", `${this.url}/home`);
      }else{
        let queryParams = [];
        if(tipo !== undefined) queryParams.push(`tipo=${tipo}`);
        if(size !== undefined) queryParams.push(`size=${size}`);
        if(price !== undefined || price !== 0) queryParams.push(`price<=${price}`);
        if(evento !== undefined) queryParams.push(`evento=${evento}`);
        if(state !== undefined) queryParams.push(`state=${state}`);

        endPoint = this.http.get(`${this.url}/home?${queryParams.join('&')}`)
        console.log("endpoint: ", `${this.url}/home?${queryParams.join('&')}`);
      }
      return endPoint;
    } 
}
