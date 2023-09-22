import { Component, Input} from '@angular/core';
import { Chat } from 'src/app/models/chat';

@Component({
  selector: 'app-tarjeta-chat',
  templateUrl: './tarjeta-chat.component.html',
  styleUrls: ['./tarjeta-chat.component.css']
})
export class TarjetaChatComponent {
 //Para la comunicación PADRE-HIJO los decoradores @Input
 @Input() chat: Chat; 
 public leido = false;
 

 ngOnInit():void{}
}
