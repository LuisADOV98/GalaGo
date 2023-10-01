import { Injectable } from '@angular/core';
import { Mensaje } from '../models/mensaje';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversacionChatService {
public mensaje:Mensaje
private url: string ="http://localhost:3000"
  constructor(private http: HttpClient) { }

public obtenerConversacion(iduser:number):Observable<Object>{
  return this.http.get(this.url+"/conversacion?iduser="+iduser);
}


}
