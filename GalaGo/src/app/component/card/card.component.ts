import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked, ElementRef } from '@angular/core';
import { OutletContext, Router } from '@angular/router';
import { Prenda } from 'src/app/models/prenda';
import { PerfilComponent } from 'src/app/pages/perfil/perfil.component';
import { FavoritosService } from 'src/app/shared/favoritos.service';
import { PrendaService } from 'src/app/shared/prenda.service';
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  //usamos el input para recibir datos de 1 prenda desde home
  @Input() prenda: Prenda;
  //usamos el input para recibir datos de 1 prenda desde perfil/mis prendas
  @Input() editable: Boolean;
  @Input() isFavoritosActive: Boolean;

  @Output() mostrarModalPadre: EventEmitter<any> = new EventEmitter<any>();
  mostrarCorazon: boolean = true; //para que salga el corazon en las cards, 
  //x defecto true (LANDING = FALSE)
  mostrarModal = false;
  mostrarNoFavorito = true; //corazon vacio
  mostrarFavorito= false; //corazon lleno


  // @Input() cardData: Prenda;

  //output para enviar info a mis favs
  // @Output() agregarFavorito = new EventEmitter<Prenda>();
  
  /* logueado = true; */
  
 
//   respuesta:Prenda[] = [];

//   groupedItems = [];

  favoritoTrue:any;
  favoritoFalse:any;
  susFavoritos:any;
  
  /* 1 cogemos la tabla relacion user/favorito */
  relacionUserFavoritos:any;


   constructor(private router: Router, 
    private elRef: ElementRef,
    private favoritosService: FavoritosService,
    private prendaService: PrendaService,
    private userService: UserService){

    
    }


    addToFavorites(){
      
      // SI ESO ES TRUE ESTOY EN LA VISTA FAVORITO 
      // ME LA CARGO DEL ARRAY Y DE BD
  
      if(!this.isFavoritosActive){
        this.isFavoritosActive = true;

        const data = {
          iduser: this.userService.user.iduser,
          idprenda: this.prenda.idprenda
        }

        this.prendaService.postFav(data).subscribe(resp=> {
          console.log(resp);
        })


        let isFavorito = this.susFavoritos.includes(this.prenda.idprenda);

        if (isFavorito === true) { //isfavorito hace referencia a todos usuarios(?) MAL
          // La prenda ya está en favoritos, se muestra el modal
          this.mostrarModal = true;
          this.mostrarFavorito = true; //corazon lleno
          this.mostrarNoFavorito = false; //corazon vacio
        } else {
          // Si la prenda no es editable y no está en favoritos, se añade
          if(!this.editable && !isFavorito){
          this.susFavoritos.push(this.prenda.idprenda);
          this.favoritosService.addArrayFavorite(this.prenda);
      
          // Cambia el estado del corazon (el corazon se ve lleno)
          this.mostrarFavorito = true;
          this.mostrarNoFavorito = false;
  
          //si prenda es editable, te lleva a editar prenda
          } else{
            this.router.navigate(["/editar-prenda"])
          }
        }
      } else {
        this.isFavoritosActive = false;
        const data = {
          iduser: this.userService.user.iduser,
          idprenda: this.prenda.idprenda
        }

        this.prendaService.deleteFav(data.iduser, data.idprenda).subscribe(resp=> {
          console.log(resp);
        })
/*         this.susFavoritos.filter(id => id!== this.prenda.idprenda)
        this.mostrarModal = true; */
      }
      
    }
        /* this.mostrarModalPadre.emit(true);
        
        let index = -1;

        for (let i = 0; i < this.favoritosService.favorites.length; i++) {
          
          if(this.favoritosService.favorites[i].id === this.prenda.id){
            index = i;
            break;
          }
          
        }

        if(index != -1){
          this.favoritosService.favorites.splice(index,1);
        } */



      /* this.mostrarFavorito = !this.mostrarFavorito;
      this.mostrarNoFavorito = !this.mostrarNoFavorito; */
   /*  console.log(this.prenda);
    console.log("entra: addToFavorites")

    if(this.favoritoFalse.style.display === "block"){
      console.log("entra: vacio")
      this.favoritoTrue.style.display = "block";
      this.favoritoFalse.style.display = "none";
    } else {
      console.log("entra: lleno")

      this.favoritoTrue.style.display = "none";     
      this.favoritoFalse.style.display = "block";
    } */
    


  ngOnInit(): void {

    if(this.isFavoritosActive){
      this.mostrarFavorito = true;
      this.mostrarNoFavorito = false;
    }

    // cogemos del servicio todas las id
    // de las prendas favoritas 
    this.susFavoritos = [];

    if(!this.editable && this.susFavoritos.includes(this.prenda.idprenda)){
      this.mostrarFavorito = true;
      this.mostrarNoFavorito = false;
    } 
  }

  manejadorRespuestaModal(valor: boolean){
    
    this.mostrarModal = false;

    if(this.isFavoritosActive && valor === true){
      /* this.mostrarModalPadre.emit(true); */
        
      let index = -1;

      for (let i = 0; i < this.favoritosService.favorites.length; i++) {
        
        if(this.favoritosService.favorites[i].idprenda === this.prenda.idprenda){
          index = i;
          break;
        }
        
      }

      if(index != -1){
        this.favoritosService.favorites.splice(index,1);
      }
      
    } else if(valor && !this.editable){
      // elimino la prenda del server
      //(o hago otra petición al server
      // con los favoritos)
      // (o lo borro tmb del array la prenda)
      //this.susFavoritos 
      //this.prenda.id
      this.susFavoritos = this.susFavoritos.filter(item => item !== this.prenda.idprenda)
    
      this.mostrarFavorito = false;
      this.mostrarNoFavorito = true;

      this.favoritosService.removeArrayFavorite(this.prenda);
    } 
  }

  verDetallePrenda(id:number, propietario :boolean){
    /* detalle-prenda */
    if (!this.editable && (this.router.url === '/landing-page' || this.router.url === '/')) {
      // Si estás en la página de inicio y la tarjeta no es editable,
      // redirige a login
      this.router.navigate(['/login']);
    } else {
      // si no, redirecciona a detalle prenda
      this.router.navigate(['/detalle-prenda', id, propietario]);
    }
  }

}

//Si card es editable, redirige a editar (desde perfil)
  //  redirigir(id:number){
  //   if(this.editable){
  //       this.router.navigate(["/editar-prenda"])
  //   }
  //       console.log(id);
  // }
    // } else {
    //   this.router.navigate(['/detalle-prenda'])
    // }
    //     console.log(id);
    // }

    // agregarFavorito(){
    //   // console.log(this.prenda);
    //   this.favoritosService.disparadorDeFavs.emit({data: this.prenda})
      
    //   // this.favoritosService.disparadorDeFavs.emit(this.prenda);
    // }

    // marcarComoFavorita(id:number) {
    //   console.log(id);
      
    //   this.marcarFavorita.emit(this.prenda);
    // }

    // verSoloFavoritos(){
          //¿Qué id tiene el usuario? normalmente se guarda en localhost
          // hacer una petición al servidor sobre que favoritos tiene
          // con todas las ids de las prendas favoritas me las guardo en 
          // borro respuesta y meto los favoritos en respuesta
          
          // borro esto
         /*  this.respuesta = [];
          this.groupedItems = []; */
          // meto todas sus prendas favoritas aqui:
         /*  this.respuesta = []; */
      
         /*  for(let i = 0; i < this.respuesta.length; i +=2){
            this.groupedItems.push(this.respuesta.slice(i, i+2))
           } */
          
        // }


//   ngOnInit(): void {
//     this.verTodas();
//   }

//   addFavoritos(id:number){
//     console.log(id);
//   }

//   verSoloFavoritos(){
//     //¿Qué id tiene el usuario? normalmente se guarda en localhost
//     // hacer una petición al servidor sobre que favoritos tiene
//     // con todas las ids de las prendas favoritas me las guardo en 
//     // borro respuesta y meto los favoritos en respuesta
    
//     // borro esto
//     this.respuesta = [];
//     this.groupedItems = [];
//     // meto todas sus prendas favoritas aqui:
//     this.respuesta = [];

//     for(let i = 0; i < this.respuesta.length; i +=2){
//       this.groupedItems.push(this.respuesta.slice(i, i+2))
//      }
    
//   }


//      /* this.groupedItems = []; */
//     // meto todas sus prendas aqui:
//     /* this.respuesta = []; */
//     for(let i = 0; i < this.respuesta.length; i +=2){
//       this.groupedItems.push(this.respuesta.slice(i, i+2))
//      }
//   }


// //PARA DETALLE-CARD
//   verDetallePrenda(id:number){
//     /* detalle-prenda */
//     this.router.navigate(['/detalle-prenda', id]);
//   }
// }

///////////////////////////////////////////////////////////////////////////////////////

  // agregarAFavoritos(){
    // this.perfil.favoritos.push(this);
    //ENTRAMOS EN PERFIL (PERFILCOMPONENT CONSTRUCTOR) 
    //Y DESPUES EN FAVORITOS(TS DE PERFIL, EL ARRAY DONDE SE GUARDAN LAS CARDS FAVS)
    //HACEMOS .PUSH PARA AÑADIR LAS CARDS AL ARRAY
  // }
  
