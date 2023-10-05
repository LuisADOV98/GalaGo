import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prenda } from 'src/app/models/prenda';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { Respuesta } from 'src/app/models/respuesta';
import { DetalleprendaService } from 'src/app/shared/detalleprenda.service';
import { PrendaService } from 'src/app/shared/prenda.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-detalle-prenda',
  templateUrl: './detalle-prenda.component.html',
  styleUrls: ['./detalle-prenda.component.css']
})
export class DetallePrendaComponent implements OnInit {
  
  @Input() prendaData:any;
  public prenda:Prenda;

  public user:User;


  public idprenda:any;
  public propietario: boolean;
  public currentImageIndex = 0;

  // Definir un índice actual para la imagen
  currentIndex: number = 0;



  // router: any;
  constructor(private route: ActivatedRoute,
    private location: Location,
    private router: Router, 
    public detalleService: DetalleprendaService,
    private prendaService: PrendaService,
    private userService: UserService){
      
      this.user = this.userService.user;
      console.log(this.user);
      
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
/*     console.log("QUIEROHABLAR CON EL PROPIETARIO DE ESTO:"+ this.idprenda) */
    this.router.navigate(["/conversacion-chat"], { queryParams: {idprenda: this.idprenda}});
  }

  public irEditar(prenda:Prenda): void{
    this.prendaService.prenda = prenda;
    this.router.navigate(["/editar-prenda"])
  }

}
