import { ChangeDetectorRef, Component,OnInit,Input } from '@angular/core';
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
  propietarioprenda:Propietarioprenda


// constructor(private authService:AuthService){}

//Detecta el cambio de mensaje que te indica los setTimeout
constructor(private cdRef: ChangeDetectorRef, 
           // private route: ActivatedRoute,
          private location: Location,
          private activatedRoute: ActivatedRoute,
          private conversacionService: ConversacionChatService,
          public  detalleService: DetalleprendaService,
          public userService: UserService,
          public chatService: ChatService,
           ){

   //la variable this.user se esta guardando en this.userService.user esto hace que se muestre el user en el componente conversacion-chat   
   this.user =this.userService.user;
  //  this.
    
    this.iduser2 = this.activatedRoute.snapshot.paramMap.get("iduser2");
    

    this.detalleService.obtenerPropietario(this.iduser2).subscribe((resp:any) =>
    {
      //this.propietarioprenda = data1
      console.log("THIs is a test============")
      console.log(resp)
      this.propietarioprenda = resp[0]
    })
   
    // console.log(this.iduser2)
    console.log("Usuario logueado:",this.userService.user.iduser)
    
    // Llama al servicio para obtener los detalles de la prenda por su ID
    this.conversacionService.obtenerConversacion(this.userService.user.iduser,this.iduser2).subscribe(
      (data:any) => { 
        // Maneja la respuesta y asigna los detalles de la prenda a 'prenda'
       this.messages = data;
      //  this.messages = data.res_chat[0];
       console.log(this.messages)
        
      },
    );

  }


// ngOnInit(): void {
//   console.log(this.mensajeData);

  /*this.activatedRouter.queryParams.subscribe(params =>{
    this.idPrenda = params['idprenda'];
   
   
    //console.log("ESTOY EN CONVERSACION: "+ idprenda)
    //console.log(this.iduser); 
    this.detalleprendaService.obtenerDetalle(this.idPrenda).subscribe((resp:any) => {
      this.prenda = resp.dataPrenda[0];
      this.elUserConQuienQuieroHablar = this.prenda.iduser;

      // PETICION DE conversacion
      this.conversacionService.obtenerConversacion(this.userService.user.iduser, this.elUserConQuienQuieroHablar).subscribe(resp=>{
        console.log(resp);
      })
    })
    
  })*/
  // this.router.queryParams.subscribe(params =>{
  //   this.idPrenda = params['idprenda'];
  //  /*  console.log("ESTOY EN CONVERSACION: "+ idprenda)
  //   console.log(this.iduser); */
  //   this.detalleprendaService.obtenerDetalle(this.idPrenda).subscribe((resp:any) => {
  //     this.prenda = resp.dataPrenda[0];
  //     this.elUserConQuienQuieroHablar = this.prenda.iduser;

  //     /* PETICION DE conversacion */
  //     this.conversacionService.obtenerConversacion(this.userService.user.iduser, this.elUserConQuienQuieroHablar).subscribe(resp=>{
  //       console.log(resp);
  //     })
  //   })
    
  // })


  

// }
ngOnInit():void {
    // console.log(this.mensajeData);
}




// // Boton de enviar (input de mensaje)
enviarMensajeNew(msg: string){
  this.mensajes.push({iduser:1,message:msg})

}



}

