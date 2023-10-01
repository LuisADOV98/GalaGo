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
  const params = new HttpParams()
    .set('iduser1', iduser1.toString())
    .set('iduser2', iduser2.toString());
  
  return this.http.get(this.url+"/conversacion", { params:params });
}


}
