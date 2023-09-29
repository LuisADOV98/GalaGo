import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prenda } from 'src/app/models/prenda';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { DetalleprendaService } from 'src/app/shared/detalleprenda.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-detalle-prenda',
  templateUrl: './detalle-prenda.component.html',
  styleUrls: ['./detalle-prenda.component.css']
})
export class DetallePrendaComponent implements OnInit {

  idprenda:any;
  prenda:Prenda;
  propietario: string;
  // router: any;
  constructor(private route: ActivatedRoute,
    private location: Location,
    private router: Router, 
    private detalleService: DetalleprendaService){

  }
  ngOnInit(): void {


    this.idprenda = this.route.snapshot.paramMap.get("idprenda");
    this.propietario = this.route.snapshot.paramMap.get('propietario');
    console.log(this.idprenda);

  


    // petición al servidor getPrendaById



  }

//para ir para atrás
  public navegarAtras():void {
    this.location.back();
  }


  public irChat(): void{
    this.router.navigate(["/conversacion-chat"])
  }

  public irEditar(): void{
    this.router.navigate(["/editar-prenda"])
  }

}
