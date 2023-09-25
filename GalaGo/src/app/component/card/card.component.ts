import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OutletContext, Router } from '@angular/router';
import { Prenda } from 'src/app/models/prenda';
import { PerfilComponent } from 'src/app/pages/perfil/perfil.component';

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
  mostrarCorazon: boolean = true; //para que salga el corazon en las cards, 
                      //x defecto true (LANDING = FALSE)

  //output para enviar info a mis favs
  @Output() marcarFavorita = new EventEmitter<Prenda>();
  
  /* logueado = true; */
  
 
//   respuesta:Prenda[] = [];

//   groupedItems = [];

   constructor(private router: Router){ 
   }

  ngOnInit(): void {
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

//Si card es editable, redirige a editar (desde perfil)
   redirigir(id:number){
    if(this.editable){
        this.router.navigate(["/editar-prenda"])
    }
        console.log(id);
  }
    // } else {
    //   this.router.navigate(['/detalle-prenda'])
    // }
    //     console.log(id);
    // }

    marcarComoFavorita(id:number) {
      console.log(id);
      
      this.marcarFavorita.emit(this.prenda);
    }

    verSoloFavoritos(){
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
          
        }

  }
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

//   verTodas(){
//     this.respuesta = [
//       {
//         id: 1,
//         titulo: "Traje boda",
//         imagen: "../../../assets/cards/chica_azul.jpg",
//         precio: 20
//       },
//       {
//         id: 2,
//         titulo: "Traje boda",
//         imagen: "../../../assets/cards/chica_morado.png",
//         precio: 20
//       },
//       {
//         id: 3,
//         titulo: "Traje boda",
//         imagen: "../../../assets/cards/chica_rosa.png",
//         precio: 20
//       },
//       {
//         id: 4,
//         titulo: "Traje boda",
//         imagen: "../../../assets/cards/chico_blanco.png",
//         precio: 20
//       },
  
//     ];
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

    //PODEMOS COMPROBAR SI HAN PEDIDO SOLO FAVORITOS
    // O HAN PEDIDO TODOS 


    // EJEMPLO SI ES SOLO MOSTRAR LOS FAVORITOS DEL USER
    // 1 hago una petición para saber las ids de todos sus
    // favoritos 
    // hago las peticiones getbyid de prenda de todas las prendas
    // y las peto en respuesta

   /* La llamada al servidor para que te de la respuesta 
   
   this.backservice.getRespuesta().suscribe((resp:any)=>{
    for(let i = 0; i < this.resp.length; i +=2){
    this.groupedItems.push(this.respuesta.slice(i, i+2))
   }
    
    */

 /*   for(let i = 0; i < this.respuesta.length; i +=2){
    this.groupedItems.push(this.respuesta.slice(i, i+2))
   } */



  // constructor(public perfil: PerfilComponent) {}

  // agregarAFavoritos(){
    // this.perfil.favoritos.push(this);
    //ENTRAMOS EN PERFIL (PERFILCOMPONENT CONSTRUCTOR) 
    //Y DESPUES EN FAVORITOS(TS DE PERFIL, EL ARRAY DONDE SE GUARDAN LAS CARDS FAVS)
    //HACEMOS .PUSH PARA AÑADIR LAS CARDS AL ARRAY
  // }
