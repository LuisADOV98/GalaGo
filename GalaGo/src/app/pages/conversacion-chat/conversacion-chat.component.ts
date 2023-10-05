import { Component,OnInit,Input } from '@angular/core';
import { Mensaje } from 'src/app/models/mensaje';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/models/respuesta';
import { ConversacionChatService } from 'src/app/shared/conversacion-chat.service';
import { User } from 'src/app/models/user';
import { DetalleprendaService } from 'src/app/shared/detalleprenda.service';
import { UserService } from 'src/app/shared/user.service';
import { ChatService } from 'src/app/shared/chat.service';
import { Propietarioprenda } from 'src/app/models/propietarioprenda';


@Component({
  selector: 'app-conversacion-chat',
  templateUrl: './conversacion-chat.component.html',
  styleUrls: ['./conversacion-chat.component.css']
})
export class ConversacionChatComponent implements OnInit {
  @Input() mensajeData:any;
  // mensaje: any
  // iduser1:any;
  iduser2:any;
  public messages: [];
  public user: User;
  public idPrenda: any;
  public prenda: any;
  mensajes:Mensaje[];
  propietarioPrenda:Propietarioprenda


//Detecta el cambio de mensaje que te indica los setTimeout
constructor(
           
          private location: Location,
          private activatedRoute: ActivatedRoute,
          public conversacionChatService: ConversacionChatService,
          public  detalleService: DetalleprendaService,
          public userService: UserService,
          public chatService: ChatService,
           ){

   //la variable this.user se esta guardando en this.userService.user esto hace que se muestre el user en el componente conversacion-chat   
   this.user =this.userService.user;
  //  this.
    
    this.iduser2 = this.activatedRoute.snapshot.paramMap.get("iduser2");
    

    this.propietarioPrenda = this.conversacionChatService.propietarioPrenda;
    // console.log(this.iduser2)
    
    // Llama al servicio para obtener el iduser del usuario logueadoo y el iduser2 del propietario prenda
    this.conversacionChatService.obtenerConversacion(this.conversacionChatService.idchat).subscribe(
      (data:any) => { 
        
       this.messages = data;
       console.log(this.messages)
        
      },
    );

  }


ngOnInit():void {
    // console.log(this.mensajeData);
}




// // Boton de enviar (input de mensaje)
enviarMensajeNew(msg: string){
  const mensaje = msg;
  const iduser1 = this.user.iduser;
  /* const iduser2 = this.iduser2; */
  // idChat


  // guardar el mensaje en base de datos

  // volver a leer la tabla de sus mensajes y mostrarla

  /* this.conversacionService.crearMensaje() */

  this.mensajes.push({iduser:1,message:msg})

}



}

