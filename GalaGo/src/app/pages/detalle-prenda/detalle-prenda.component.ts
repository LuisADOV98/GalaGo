import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prenda } from 'src/app/models/prenda';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-detalle-prenda',
  templateUrl: './detalle-prenda.component.html',
  styleUrls: ['./detalle-prenda.component.css']
})
export class DetallePrendaComponent implements OnInit {

  id:any;
  prenda:Prenda;
  propietario: string;
  mostrarFavorito:boolean;
  mostrarNoFavorito:boolean;
  esFavoritaEstaPrendaParaEsteUsuario: boolean;
  // router: any;
  constructor(private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private userService: UserService){

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.propietario = this.route.snapshot.paramMap.get('propietario');
    console.log(this.id);

    //TODO: cuando recibas en la base de datos
    // los detalles de la prenda 


    //TODO: petición al servidor get esteUser/susfavoritos
    this.esFavoritaEstaPrendaParaEsteUsuario= true;
    console.log(this.propietario)
    if(this.esFavoritaEstaPrendaParaEsteUsuario){
     this.mostrarFavorito = true;
      this.mostrarNoFavorito =false;
    } else {
      this.mostrarFavorito = false;
      this.mostrarNoFavorito=true;
    }

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
  public navegarAtras():void {
    this.location.back();
  }


  public irChat(): void{
    this.router.navigate(["/conversacion-chat"])
  }

  public irEditar(): void{
    this.router.navigate(["/editar-prenda"])
  }

  addToFavorites(){
    console.log(this.userService.user.id_user)
    console.log(this.id);
    //TODO:  llamar al ser
    this.esFavoritaEstaPrendaParaEsteUsuario = !this.esFavoritaEstaPrendaParaEsteUsuario;
    this.mostrarFavorito = !this.mostrarFavorito;
    this.mostrarNoFavorito = !this.mostrarNoFavorito;
  }

}
