import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chat } from '../models/chat';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url:string = "http://localhost:3000";
  // public chat:Chat;
  constructor(private http: HttpClient) { }


getAllChat(id_chat:number):Observable<Object>{
  return this.http.get(this.url+"/chat"+ id_chat);
}
}
