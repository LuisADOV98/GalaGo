import { Injectable } from '@angular/core';
import { Mensaje } from '../models/mensaje';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversacionChatService {
public mensaje:Mensaje
private url: string ="http://localhost:3000"
  constructor(private http: HttpClient) { }

public obtenerConversacion(iduser1:number, iduser2:number):Observable<Object>{
  // const params = new HttpParams()
  //   .set('iduser1', iduser1.toString())
  //   .set('iduser2', iduser2.toString());
  //es el endpoint /conversacion del API
  // console.log(params);
  return this.http.get(this.url+`/conversacion?iduser1=${iduser1}&iduser2=${iduser2}`);
  // return this.http.get(this.url+"/conversacion", { params:params });
  
}

public crearConversacion(iduser1:number,iduser2:number):Observable<Object>{
  let parametro = {iduser1:iduser1, iduser2:iduser2}
  console.log(parametro);
return this.http.post(this.url+"/chat",parametro);
}

}
