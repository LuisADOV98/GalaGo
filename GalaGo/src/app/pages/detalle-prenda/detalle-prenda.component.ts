import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prenda } from 'src/app/models/prenda';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { Respuesta } from 'src/app/models/respuesta';
import { DetalleprendaService } from 'src/app/shared/detalleprenda.service';
import { PrendaService } from 'src/app/shared/prenda.service';
import { User } from 'src/app/models/user';
import { Propietarioprenda } from 'src/app/models/propietarioprenda';
import { ConversacionChatComponent } from '../conversacion-chat/conversacion-chat.component';
import { ConversacionChatService } from 'src/app/shared/conversacion-chat.service';
import { RespuestaPropietario } from 'src/app/models/respuesta-propietario';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-detalle-prenda',
  templateUrl: './detalle-prenda.component.html',
  styleUrls: ['./detalle-prenda.component.css']
})
export class DetallePrendaComponent implements OnInit {
 @Input() prendaData:any;
 public prenda: Prenda

  public idprenda:any;

  public iduser1:any;
  public iduser2:any;
  public firstname:User;
  public photo:User;
  public locationUser: string;
  public user:User;


  public propietario: boolean;
  public currentImageIndex = 0;

  // Definir un índice actual para la imagen
  currentIndex: number = 0;
  
  propietarioprenda:Propietarioprenda
  constructor(private route: ActivatedRoute,
              private location: Location,
              private router: Router, 
              public detalleService: DetalleprendaService,
              private conversacionChatService: ConversacionChatService,
              private prendaService: PrendaService,
              private userService: UserService){
      
      this.user = this.userService.user;
      console.log(this.user);
      console.log(this.detalleService.prenda);
      
      
  }
  ngOnInit(): void {
  }

  navegarAdelante() {
    // Avanzar al siguiente índice de imagen, circular al principio si llegamos al final
    this.currentIndex = (this.currentIndex + 1) % 4; // 4 es el número total de imágenes
  }

  cambiarImagenAtras() {
    // Retroceder al índice de imagen anterior, circular al final si estamos en el principio
    this.currentIndex = (this.currentIndex - 1 + 4) % 4; // 4 es el número total de imágenes
  }


//para ir para atrás
  public navegarAtras():void {
    this.location.back();
  }


  public irChat(): void{

    /* TODO: Tenemos que mandar enla url la id
    de la prenda */
    console.log("IDPRENDA DEL PROPIETARIO:"+ this.idprenda)
    // this.router.navigate(["/conversacion-chat"], { queryParams: {idprenda: this.idprenda}});
    // this.router.navigate(["/conversacion-chat/:iduser2"], { queryParams: {idprenda: this.idprenda}});
    
    this.conversacionChatService.crearConversacion(this.iduser1,this.iduser2).subscribe(
      (data:RespuestaPropietario)=> {
        // Maneja la respuesta y asigna los detalles de la prenda a 'prenda'
          this.propietarioprenda = data.dataPropietario[0];
      }
    )

    this.router.navigate(["conversacion-chat", this.prenda.iduser]);

  }

  public irEditar(prenda:Prenda): void{
    this.prendaService.prenda = prenda;
    this.router.navigate(["/editar-prenda"])
  }

}
