import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from 'src/app/models/chat';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { ConversacionChatService } from 'src/app/shared/conversacion-chat.service';

@Component({
  selector: 'app-tarjeta-chat',
  templateUrl: './tarjeta-chat.component.html',
  styleUrls: ['./tarjeta-chat.component.css']
})
export class TarjetaChatComponent {
 //Para la comunicación PADRE-HIJO los decoradores @Input
 @Input() chat: Chat; 
 @Input() user:User;
 @Input() chatData:any;
 public propietarioPrenda : User;
 
 constructor(private userService:UserService,
             private router: Router,
             private conversacionChatService: ConversacionChatService){ }

 ngOnInit():void{}
 public irMensajes(): void{
  let propietarioPrenda = new User(this.chatData.firstname,this.chatData.surname,"","","",this.chatData.photo,0);
  this.conversacionChatService.propietarioPrenda= propietarioPrenda;
  this.conversacionChatService.idchat =this.chatData.idchat;
console.log(this.conversacionChatService.propietarioPrenda)
  this.router.navigate(["/conversacion-chat"]);
}



}
