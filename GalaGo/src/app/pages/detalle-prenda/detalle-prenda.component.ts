import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prenda } from 'src/app/models/prenda';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { Respuesta } from 'src/app/models/respuesta';
import { DetalleprendaService } from 'src/app/shared/detalleprenda.service';
import { User } from 'src/app/models/user';
import { Propietarioprenda } from 'src/app/models/propietarioprenda';
import { ConversacionChatComponent } from '../conversacion-chat/conversacion-chat.component';
import { ConversacionChatService } from 'src/app/shared/conversacion-chat.service';
import { RespuestaPropietario } from 'src/app/models/respuesta-propietario';


@Component({
  selector: 'app-detalle-prenda',
  templateUrl: './detalle-prenda.component.html',
  styleUrls: ['./detalle-prenda.component.css']
})
export class DetallePrendaComponent implements OnInit {
 @Input() prendaData:any;
  prenda: Prenda
  propietario:any;
  idprenda:any;

  iduser1:any;
  iduser2:any
  firstname:User;
  photo:User
  
  propietarioprenda:Propietarioprenda
  constructor(private route: ActivatedRoute,
              private location: Location,
              private router: Router, 
              private detalleService: DetalleprendaService,
              private conversacionChatService: ConversacionChatService){
              
    
                // console.log(this.prenda)
    this.idprenda = this.route.snapshot.paramMap.get("idprenda");
    console.log("ID:", this.idprenda)
    // Llama al servicio para obtener los detalles de la prenda por su ID
    this.detalleService.obtenerDetalle(this.idprenda, this.propietario).subscribe(
      (data:Respuesta) => {
    // Maneja la respuesta y asigna los detalles de la prenda a 'prenda'
      this.prenda = data.dataPrenda[0];
      
      console.log(data);
      console.log(data.dataPrenda);
      console.log("Detalle de la prenda",this.prenda);
      //aquí obtengo el ID del propietario prenda
      console.log("EL PROPIETARIO PRENDA:",this.prenda.iduser)

     
      }
    );

  }


  ngOnInit(): void {}

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
    this.router.navigate(["conversacion-chat", this.prenda.iduser]);
    this.conversacionChatService.crearConversacion(this.iduser1,this.iduser2).subscribe(
      (data:RespuestaPropietario)=> {
        // Maneja la respuesta y asigna los detalles de la prenda a 'prenda'
          this.propietarioprenda = data.dataPropietario[0];
      }
    )

  }

  

  public irEditar(): void{
    this.router.navigate(["/editar-prenda"])
  }




}
