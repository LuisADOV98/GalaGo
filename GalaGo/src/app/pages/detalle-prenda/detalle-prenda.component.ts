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



  // router: any;
  constructor(private route: ActivatedRoute,
    private location: Location,
    private router: Router, 
    private detalleService: DetalleprendaService,
    private prendaService: PrendaService,
    private userService: UserService){
      
      this.user = this.userService.user;
      console.log(this.user);
      

      this.prenda = this.detalleService.prenda;
      console.log(this.prenda);

      // console.log(this.prenda.idprenda);
      




      
       // Condicional para que salga editar/contactar dependiendo de si eres propietario o no
      // if(this.prenda.iduser === this.user.iduser){
      //   this.propietario = true;
      //   console.log(this.propietario);
        
        
      // }else{
      //   this.propietario = false;
      //   console.log(this.propietario);
      // }




    // Llama al servicio para obtener los detalles de la prenda por su ID
    // this.detalleService.obtenerDetalle(this.detalleService.prenda.idprenda).subscribe(
    //   (data:Respuesta) => {
    //     // Maneja la respuesta y asigna los detalles de la prenda a 'prenda'
    //     this.prenda = data.dataPrenda[0];

    //     console.log("Detalle de la prenda",this.prenda)
    //   },
    // );
    // console.log(this.detalleService.prenda);
    

  }
  ngOnInit(): void {
   
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
