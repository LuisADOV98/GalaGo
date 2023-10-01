import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prenda } from 'src/app/models/prenda';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { Respuesta } from 'src/app/models/respuesta';
import { DetalleprendaService } from 'src/app/shared/detalleprenda.service';

@Component({
  selector: 'app-detalle-prenda',
  templateUrl: './detalle-prenda.component.html',
  styleUrls: ['./detalle-prenda.component.css']
})
export class DetallePrendaComponent implements OnInit {
 @Input() prendaData:any;


  prenda: any


  idprenda:any;
  propietario: string;
  // router: any;
  constructor(private route: ActivatedRoute,
    private location: Location,
    private router: Router, 
    private detalleService: DetalleprendaService){
       // console.log(this.prenda)
    this.idprenda = this.route.snapshot.paramMap.get("idprenda");
    console.log("ID:", this.idprenda)
    // Llama al servicio para obtener los detalles de la prenda por su ID
    this.detalleService.obtenerDetalle(this.idprenda).subscribe(
      (data:Respuesta) => {
        // Maneja la respuesta y asigna los detalles de la prenda a 'prenda'
        this.prenda = data.dataPrenda[0];
        console.log("Detalle de la prenda",this.prenda)
      },
    );

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

  public irEditar(): void{
    this.router.navigate(["/editar-prenda"])
  }

}
