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
  public user: User;
  public elUserConQuienQuieroHablar: any;
  public idPrenda: any;
  public prenda: any;


// constructor(private authService:AuthService){}

//Detecta el cambio de mensaje que te indica los setTimeout
constructor(private cdRef: ChangeDetectorRef, 
    private route: ActivatedRoute,
    private location: Location,
    private router: ActivatedRoute,
    private conversacionService: ConversacionChatService,
    public  detalleprendaService: DetalleprendaService,
    public userService: UserService){

      

    // console.log(this.prenda)
    this.iduser = this.route.snapshot.paramMap.get("iduser");
    console.log("ID:", this.iduser)
    // Llama al servicio para obtener los detalles de la prenda por su ID
    /* this.conversacionService.obtenerConversacion(this.iduser).subscribe(
      (data:Respuesta) => { */
        // Maneja la respuesta y asigna los detalles de la prenda a 'prenda'
       /*  this.mensaje = data.res_chat[0];
        console.log("Detalle de la conversación",this.mensaje)
      },
    ); */

  }


ngOnInit(): void {
  console.log(this.mensajeData);

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

}

// Boton de enviar (input de mensaje)
enviarMensajeNew(msg: string){
  this.mensajes.push({iduser:1,message:msg})

}



}

