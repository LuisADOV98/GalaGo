import { ChangeDetectorRef, Component,OnInit,Input } from '@angular/core';
import { Mensaje } from 'src/app/models/mensaje';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/models/respuesta';
import { ConversacionChatService } from 'src/app/shared/conversacion-chat.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-conversacion-chat',
  templateUrl: './conversacion-chat.component.html',
  styleUrls: ['./conversacion-chat.component.css']
})
export class ConversacionChatComponent implements OnInit {
  @Input() mensajeData:any;
  mensaje: any
  iduser:any;
  public mensajes: Mensaje[] = [];
  public user: User


// constructor(private authService:AuthService){}

//Detecta el cambio de mensaje que te indica los setTimeout
constructor(private cdRef: ChangeDetectorRef, private route: ActivatedRoute,
  private location: Location,   private router: Router,private conversacionService: ConversacionChatService ){

    // console.log(this.prenda)
    this.iduser = this.route.snapshot.paramMap.get("iduser");
    console.log("ID:", this.iduser)
    // Llama al servicio para obtener los detalles de la prenda por su ID
    this.conversacionService.obtenerConversacion(this.iduser).subscribe(
      (data:Respuesta) => {
        // Maneja la respuesta y asigna los detalles de la prenda a 'prenda'
        this.mensaje = data.res_chat[0];
        console.log("Detalle de la conversación",this.mensaje)
      },
    );

  }


ngOnInit(): void {
  // console.log("TEST ONINIT")
// this.authService.getUserLogged().suscribe(usuario=>{
//   this.usuarioLogueado = usuario;
// });


  // HAGO UNA PETICIÓN A LA BASE DE DATOS CADA X TIEMPO
  // EN LA QUE RECIBO EL MENSAJE DE SOPORTE TIPO:
  // {emisor: "Soporte", contenido: "HOLA"}
  // CUANDO RECIBO ESE MENSAJE LO PUSHEO EN 
  // this.mensajes.push
 
//   setTimeout(() => {
//     this.mensajerecibido.push({receptor:"Alberto", contenido_recibido: "Hola, si digame?"})
//     this.cdRef.detectChanges();
//   }, 100);

//   setTimeout(() => {
//     this.mensajerecibido.push({receptor:"Alberto", contenido_recibido: "claro, para que fecha lo necesita?"})
//     this.cdRef.detectChanges();
//   }, 10000);

//   setTimeout(() => {
//     this.mensajerecibido.push({receptor:"Alberto", contenido_recibido: "perfecto,podemos coordinar el pago"})
//     this.cdRef.detectChanges();
//   }, 20000);
}

// Boton de enviar (input de mensaje)
enviarMensajeNew(msg: string){
  this.mensajes.push({iduser:1,message:msg})

}

// enviarMensajeSOPORTENew(msg: string){
//   this.mensajes.push({emisor: "Alberto", contenido: "Hola, si digame?"});

// }


}

