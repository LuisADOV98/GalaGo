import { ChangeDetectorRef, Component,OnInit } from '@angular/core';
import { Mensaje } from 'src/app/models/mensaje';
import { Mensajerecibido } from 'src/app/models/mensajerecibido';
// interface Mensaje {
//   emisor: string,
//   contenido: string,
// };

@Component({
  selector: 'app-conversacion-chat',
  templateUrl: './conversacion-chat.component.html',
  styleUrls: ['./conversacion-chat.component.css']
})
export class ConversacionChatComponent implements OnInit {
  public mensajes: Mensaje[] = [];
  public mensajerecibido: Mensajerecibido[] =[];
  
  // public usuarioLogueado: any;
  // public nuevoMensaje: string="";
// mensajes = [
//   { id: 1, contenido: 'Mensaje 1', leido: false },
//   { id: 2, contenido: 'Mensaje 2', leido: true },
//   { id: 3, contenido: 'Mensaje 3', leido: false },
// ];



// constructor(private authService:AuthService){}

//Detecta el cambio de mensaje que te indica los setTimeout
constructor(private cdRef: ChangeDetectorRef){}
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
 
  setTimeout(() => {
    this.mensajerecibido.push({receptor:"Alberto", contenido_recibido: "Hola, si digame?"})
    this.cdRef.detectChanges();
  }, 100);

  setTimeout(() => {
    this.mensajerecibido.push({receptor:"Alberto", contenido_recibido: "claro, para que fecha lo necesita?"})
    this.cdRef.detectChanges();
  }, 10000);

  setTimeout(() => {
    this.mensajerecibido.push({receptor:"Alberto", contenido_recibido: "perfecto,podemos coordinar el pago"})
    this.cdRef.detectChanges();
  }, 20000);
}

// Boton de enviar (input de mensaje)
enviarMensajeNew(msg: string){
  this.mensajes.push({emisor: "Yo", contenido: msg});

}

// enviarMensajeSOPORTENew(msg: string){
//   this.mensajes.push({emisor: "Alberto", contenido: "Hola, si digame?"});

// }

// enviarMensaje(){
//   console.log(this.nuevoMensaje);
//   this.nuevoMensaje="";
// }

// marcarComoNoLeido(mensajeId: number) {
//   const mensaje = this.mensajes.find((m) => m.id === mensajeId);
//   if (mensaje) {
//     mensaje.leido = false;
//   }
// }
}

