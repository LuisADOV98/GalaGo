import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prenda } from 'src/app/models/prenda';
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-detalle-prenda',
  templateUrl: './detalle-prenda.component.html',
  styleUrls: ['./detalle-prenda.component.css']
})
export class DetallePrendaComponent implements OnInit {

  id:any;
  prenda:Prenda;
  propietario: string;
  // router: any;
  constructor(private route: ActivatedRoute,
    private location: Location,
    private router: Router){

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.propietario = this.route.snapshot.paramMap.get('propietario');
    console.log(this.id);

    // petición al servidor getPrendaById

    //servicio te devuleve una prenda 
    //prenda = prendaService 
   switch(this.id){
      case "1":
    this.prenda = {
      title: "Traje boda",
      price: 20,
      description: "Vestido corto verde de tirantes con lentejuelas. Como nuevo.",
      size: "S",
      photo1: "../../../assets/cards/chica_azul_detalle.png",
    }
        break;
      case "2":
        this.prenda = {
          title: "Traje boda",
          price: 20,
          description: "Vestido rosa de tirantes con volantes en el escote.",
          size: "S",
          photo1: "../../../assets/cards/chica_morado_detalle.png",
        }
        break;
      case "3":
        this.prenda = {
          title: "Traje boda",
          price: 20,
          description: "Vestido naranja ceñido. Tiene la manga izquierda larga y la otra descubierta. Tiene volantes por toda la manga, hasta el pecho.",
          size: "S",
          photo1: "../../../assets/cards/chica_rosa_detalle.png",
        }
        break;
        
      case "4":
        this.prenda = {
          title: "Traje boda",
          price: 20,
          description: "Cuello con solapa, manga larga acabada en puño con detalles botones. Bolsillo en pecho. Cierre frontal con botones. Color Negro",
          size: "S",
          photo1: "../../../assets/cards/chico_blanco_detalle.png",
        }
        break; 


   }


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
