import { Component, Input} from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

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
 public leido = false;
 
 constructor(private userService:UserService){ }

 ngOnInit():void{}
}
