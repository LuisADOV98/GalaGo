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

  public postFav(data: { iduser:number, idprenda:number}): Observable<any>{
      const url = `${this.url}/favoritos`;
      return this.http.post(url, data);
  }

  public deleteFav(iduser: number, idprenda: number): Observable<any> {
    const url = `${this.url}/favoritos/${iduser}/${idprenda}`;
    return this.http.delete(url);
  }


    // ---- FILTROS HOME ---- //
    public filtroTipo(tipo:string, size:string, price:number, evento:string, state:string, location:string):Observable<Object>{
      console.log("datos por parametro: ");
      console.log(tipo, size, price, evento, state, location);
      
      let endPoint: Observable<Object>;
      if((tipo === undefined) && (size === undefined) && (price === undefined) && (evento === undefined) && (state === undefined) && (location === undefined)){
          endPoint = this.http.get(`${this.url}/home`);
          console.log("endpoint: ", `${this.url}/home`);
      }else{
        let queryParams = [];
        if(tipo !== undefined) queryParams.push(`tipo=${tipo}`);
        if(size !== undefined) queryParams.push(`size=${size}`);
        if(price !== undefined) queryParams.push(`price<=${price}`);
        if(evento !== undefined) queryParams.push(`evento=${evento}`);
        if(state !== undefined) queryParams.push(`state=${state}`);
        if(location !== undefined) queryParams.push(`location=${location}`);

        endPoint = this.http.get(`${this.url}/home?${queryParams.join('&')}`)
        console.log("endpoint: ", `${this.url}/home?${queryParams.join('&')}`);
      }
      return endPoint;
    } 

    // funcion para eliminar prendas del usuario
    public delete(idprenda:number){
      return this.http.request('delete', this.url + "/prenda",{body:{idprenda:idprenda}});

    }
}
