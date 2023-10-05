import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CardComponent } from 'src/app/component/card/card.component';
import { Prenda } from 'src/app/models/prenda';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { FavoritosService } from 'src/app/shared/favoritos.service';
import { PrendaService } from 'src/app/shared/prenda.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  isMisPrendasActive: boolean = true; // Inicialmente, Mis Prendas está activo
  isFavoritosActive: boolean = false;

  public misPrendas: Prenda[];
  public misFavoritas: Prenda[]; //favoriteCards
  public prenda: Prenda;

  public user: User;
  public mostrarModal = false;
  mostrarModal1 = false
  idsFavoritasParaEsteUsuario: Prenda[] = [];

  todasLasPrenas: any;

  @ViewChild('refHijo') hijo: CardComponent

  constructor(public userService: UserService, public prendaService: PrendaService, public router: Router,
    public favoritosService: FavoritosService,
    public prendasService: PrendaService) {
    this.user = userService.user;    

    //salen las prendas favs del 1 solamente en home!!!!!!!!!!!!!(por esto lo del corazon marcado en home)
    const iduser = this.userService.user.iduser;
    this.prendasService.getMisFavs(iduser).subscribe((resp: any) => {
      /* console.log(resp); */
      this.idsFavoritasParaEsteUsuario = resp.data.map(item => item.idprenda)
    })

    console.log(this.user);

    this.prendaService.getMisPrendas(this.user.iduser).subscribe((data: Respuesta) => {
      this.misPrendas = data.data
      console.log(this.misPrendas);
    })

    this.prendasService.getPrenda().subscribe((resp:any) =>{
      //this.misFavoritas = resp.data;
      const todasLasPrendas = resp.data;
      // FILTRO
      this.misFavoritas = todasLasPrendas.filter(obj => this.idsFavoritasParaEsteUsuario.includes(obj.idprenda));
    })

    // this.prendaService.getMisFavs(this.user.iduser).subscribe((data:Respuesta) =>{
    //   this.misFavoritas= data.data
    // })
  }


  deletePrenda(idprenda:number){
    this.prendaService.delete(idprenda).subscribe((data:Respuesta)=>{
      console.log(idprenda);
      
      if (data.error == false) {
       
        this.misPrendas = this.misPrendas.filter(prenda => prenda.idprenda != idprenda);
          console.log(data);
        
      }
    })
  }
  

  isFavorito(id:any){
    /* console.log(this.idsFavoritasParaEsteUsuario.includes(id)) */
/*     console.log("ES FAVORITO?"+ id);
    console.log(this.idsFavoritasParaEsteUsuario.indexOf(id))
    console.log(this.idsFavoritasParaEsteUsuario.indexOf(id) !== -1) */
    return this.idsFavoritasParaEsteUsuario.indexOf(id) !== -1;
  }
  ngOnInit() {
    /* this.misFavoritas = this.favoritosService.getFavorites();
    console.log(this.misFavoritas); */
    this.prendasService.getPrenda().subscribe((resp:any) =>{
      //this.misFavoritas = resp.data;
      const todasLasPrendas = resp.data;
      // FILTRO
      this.misFavoritas = todasLasPrendas.filter(obj => this.idsFavoritasParaEsteUsuario.includes(obj.idprenda));
    })
  }

  ed_perfil(updateUser: User) {
    this.user = updateUser;
  }

  editarPrenda2(prenda: Prenda) {
    console.log(this.prenda.idprenda, "perfil");
    console.log(prenda, "parametro");
    this.prendaService.prenda = prenda;
    console.log("perfil:");
    console.log(prenda);
  }

  mostrarMisPrendas() {
    this.isMisPrendasActive = true;
    this.isFavoritosActive = false;
  }

  mostrarFavoritos() {

    console.log("IDS FAV ESTE USER: "+this.idsFavoritasParaEsteUsuario);

    this.isFavoritosActive = true;
    this.isMisPrendasActive = false;
  }


  recibirDatos(mostrarModalPadre: any) {
    console.log(mostrarModalPadre)
    this.mostrarModal = mostrarModalPadre;
  }

  manejadorRespuestaModal(valor: boolean) {
    this.mostrarModal = false;
  }

  manejadorRespuestaModalDLT(valor: boolean) {
    this.mostrarModal1 = true;
  }
  // toggleTab(tab: string) {
  //   if (tab === 'mis-prendas') {
  //     this.isMisPrendasActive = true;
  //     this.isFavoritosActive = false;
  //   } else if (tab === 'favoritos') {
  //     this.isMisPrendasActive = false;
  //     this.isFavoritosActive = true;
  //   }

  // }
  // ngOnInit(): void {
  //   this.verTodas();
  // }

  public borrarFav(event){
    console.log("VAMOS A ELIMINAR: "+ event);
    console.log("DE:" + this.misFavoritas)
    this.misFavoritas = this.misFavoritas.filter( prenda => prenda.idprenda !== event);
  }
  
  public eliminar(event){
    console.log("VAMOS A ELIMINAR: "+ event);
    console.log("DE:" + this.misPrendas)
    this.misPrendas = this.misPrendas.filter( prenda => prenda.idprenda !== event);
  }
}
