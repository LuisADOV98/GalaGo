import { Injectable } from '@angular/core';
import { Mensaje } from '../models/mensaje';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ConversacionChatService {
public mensaje:Mensaje;
public propietarioPrenda : User;
public idchat:number;
// private url: string ="http://localhost:3000"
private url:string = "https://apirestgalago.vercel.app"
  constructor(private http: HttpClient) { }

//obtiene chat para ver la conversación
public obtenerConversacion(idchat:number):Observable<Object>{
  return this.http.get(this.url+`/conversacion?idchat=${idchat}`);
}

public crearConversacion(iduser1:number,iduser2:number):Observable<Object>{
  let parametro = {iduser1:iduser1, iduser2:iduser2}
  console.log(parametro);
  return this.http.post(this.url+"/chat",parametro);
}

public crearMensaje(message:string,iduser:number,idchat:number):Observable<Object>{
  let paramsMensaje ={message:message,iduser:iduser,idchat:idchat}
  console.log(paramsMensaje);
  return this.http.post(this.url+"/conversacion",paramsMensaje);
}

public mostrarMensajes(idchat:number):Observable<Object>{
  return this.http.get(this.url+`/conversacion?idchat=${idchat}`);
}
}

