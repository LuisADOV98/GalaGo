import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked, ElementRef } from '@angular/core';
import { OutletContext, Router } from '@angular/router';
import { Prenda } from 'src/app/models/prenda';
import { Respuesta } from 'src/app/models/respuesta';
import { DetallePrendaComponent } from 'src/app/pages/detalle-prenda/detalle-prenda.component';
import { PerfilComponent } from 'src/app/pages/perfil/perfil.component';
import { DetalleprendaService } from 'src/app/shared/detalleprenda.service';
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
  @Output() editarboton = new EventEmitter<Prenda>();
  @Output() mostrarModalPadre: EventEmitter<any> = new EventEmitter<any>();
  @Output() idFavAEliminar: EventEmitter<any> = new EventEmitter<any>();
  
  
  mostrarCorazon: boolean = true; //para que salga el corazon en las cards, 
  //x defecto true (LANDING = FALSE)
  mostrarModal = false;
  mostrarNoFavorito = true; //corazon vacio
  mostrarFavorito= false; //corazon lleno

  favoritoTrue:any;
  favoritoFalse:any;
  susFavoritos:any;
  
  /*cogemos la tabla relacion user/favorito */
  relacionUserFavoritos:any;

  public prendaDetalle: Prenda;

   constructor(private router: Router, 
    private elRef: ElementRef,
    private favoritosService: FavoritosService,
    private prendaService: PrendaService,
    private userService: UserService,
    private detalleService: DetalleprendaService){
      this.prenda = this.prendaService.prenda;
      this.prendaDetalle = this.detalleService.prenda;

      
    
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

        /* MOSTRAMOS EL MODAL */
        this.mostrarModal = true;
      }
      
    }


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
    
    if(valor){
      this.isFavoritosActive = false;
      this.idFavAEliminar.emit(this.prenda.idprenda);
      this.prendaService.deleteFav(this.userService.user.iduser, this.prenda.idprenda).subscribe((resp=>{
        console.log("se ha eliminado de favoritos"+ this.prenda);
        console.log(resp)
      }))
    } 
    
  }

  verDetallePrenda(id:number, propietario :boolean){
    /* detalle-prenda */
    console.log(id);
    this.detalleService.obtenerDetalle(id).subscribe(
      (data:Respuesta) => {
        // Maneja la respuesta y asigna los detalles de la prenda a 'prenda'
        this.detalleService.prenda = data.dataPrenda[0];

        console.log("Detalle de la prenda",this.detalleService.prenda)
      },
    );
    if (!this.editable && (this.router.url === '/landing-page' || this.router.url === '/')) {
      // Si estás en la página de inicio y la tarjeta no es editable,
      // redirige a login
      this.router.navigate(['/login']);
    } else {
      // si no, redirecciona a detalle prenda
      this.router.navigate(['/detalle-prenda']);
    }
  }



  redirigir(prenda:Prenda){
  
    if(this.editable){
      //  this.editarboton.emit(this.prenda);
        this.prendaService.prenda = prenda;
       this.router.navigate(["/editar-prenda"]);
       console.log(prenda);
       
    }
  }
}

