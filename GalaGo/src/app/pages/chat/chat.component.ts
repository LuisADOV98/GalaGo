import { Component } from '@angular/core';
import { Chat } from 'src/app/models/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  public chats: Chat[];
  constructor(){
    this.chats = [
                new Chat("../../../assets/imageneschat/userAlberto.png",'Alberto','Traje boda',new Date(2023, 8, 19)),
                new Chat("../../../assets/imageneschat/userMarta.png",'Marta','Traje boda',new Date(2023, 8, 19)),
                new Chat("../../../assets/imageneschat/userIrene.png",'Irene','Traje boda',new Date(2023, 8, 19)),
                new Chat("../../../assets/imageneschat/userLorena.png",'Lorena','Traje boda',new Date(2023, 8, 19)),
              ]
}

}

