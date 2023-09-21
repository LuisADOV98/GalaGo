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
  router: any;
  constructor(private route: ActivatedRoute,
    private location: Location){

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    // petición al servidor getPrendaById

   switch(this.id){
      case "1":
    this.prenda = {
      titulo: "Traje boda",
      precio: 20,
      descripcion: "Vestido corto verde de tirantes con lentejuelas. Como nuevo.",
      talla: "S",
      imagen: "../../../assets/cards/chica_azul_detalle.png",
    }
        break;
      case "2":
        this.prenda = {
          titulo: "Traje boda",
          precio: 20,
          descripcion: "Vestido rosa de tirantes con volantes en el escote.",
          talla: "S",
          imagen: "../../../assets/cards/chica_morado_detalle.png",
        }
        break;
      case "3":
        this.prenda = {
          titulo: "Traje boda",
          precio: 20,
          descripcion: "Vestido naranja ceñido. Tiene la manga izquierda larga y la otra descubierta. Tiene volantes por toda la manga, hasta el pecho.",
          talla: "S",
          imagen: "../../../assets/cards/chica_rosa_detalle.png",
        }
        break;
        
      case "4":
        this.prenda = {
          titulo: "Traje boda",
          precio: 20,
          descripcion: "Cuello con solapa, manga larga acabada en puño con detalles botones. Bolsillo en pecho. Cierre frontal con botones. Color Negro",
          talla: "S",
          imagen: "../../../assets/cards/chico_blanco_detalle.png",
        }
        break; 


   }


  }

//para ir para atrás
  navegarAtras():void {
    this.location.back();
  }


  public irChat(){
    this.router.navigate(["/conversacion-chat"]);
  }

}
