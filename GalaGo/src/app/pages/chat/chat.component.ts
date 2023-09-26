import { Component } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { User } from 'src/app/models/user';
import { ChatService } from 'src/app/shared/chat.service';
import { UserService } from 'src/app/shared/user.service';
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
  
  constructor(public chatService: ChatService, public userService: UserService){
    // this.chats = [
    //             new Chat("../../../assets/imageneschat/userAlberto.png",'Alberto','Traje boda',new Date(2023, 8, 19)),
    //             new Chat("../../../assets/imageneschat/userMarta.png",'Marta','Traje boda',new Date(2023, 8, 19)),
    //             new Chat("../../../assets/imageneschat/userIrene.png",'Irene','Traje boda',new Date(2023, 8, 19)),
    //             new Chat("../../../assets/imageneschat/userLorena.png",'Lorena','Traje boda',new Date(2023, 8, 19)),
    //           ]

    this.obtenerTodosLosChats();
}
ngOnInit(): void{}
 
obtenerTodosLosChats(){
 
  this.chatService.getAllChat(this.userService.user.id_user).subscribe((res:Respuesta)=>{
    console.log(res);
    
    this.chats = res.result;
    
    })
}
}

