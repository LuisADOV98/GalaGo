import { Component, Input } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { ChatService } from 'src/app/shared/chat.service';
import { CommonModule, DatePipe } from '@angular/common';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [DatePipe],
})
export class ChatComponent {
  public chats: Chat[];
  public user: User;

  
  constructor(public chatService: ChatService, public userService: UserService){
    // this.chats = [
    //             new Chat("../../../assets/imageneschat/userAlberto.png",'Alberto','Traje boda',new Date(2023, 8, 19)),
    //             new Chat("../../../assets/imageneschat/userMarta.png",'Marta','Traje boda',new Date(2023, 8, 19)),
    //             new Chat("../../../assets/imageneschat/userIrene.png",'Irene','Traje boda',new Date(2023, 8, 19)),
    //             new Chat("../../../assets/imageneschat/userLorena.png",'Lorena','Traje boda',new Date(2023, 8, 19)),
    //           ]
    this.user = this.userService.user;
    // this.obtenerTodosLosChats();
}
ngOnInit(): void{
  this.obtenerTodosLosChats();
}
 
obtenerTodosLosChats(){

  // 1 ¿Como averiguaro el chat en el que estoy?
  // esto tiene que veniros la id del chat que 
  // se ha abierto

  // hacer una query con sa id y que me de todos los dados
 
  // const iduser1 = this.userService.user.id_user; // ¿El usuario que esta logueado?
  console.log("user logged");
console.log(this.userService.user);

//this.userService.user.iduser está obteniendo la propiedad iduser de un objeto almacenado en el servicio userService es necesario NO se usa chatService?
  this.chatService.getAllChat(this.userService.user?.iduser).subscribe((res:any)=>{
    console.log(res);
    
    // this.books = res.result;
    this.chats = res;
    
    })
}
}