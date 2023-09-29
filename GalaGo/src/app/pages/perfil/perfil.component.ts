import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Prenda } from 'src/app/models/prenda';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
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
  public misFavoritas: Prenda[];
  public prenda:Prenda
  public user: User;

  constructor(userService: UserService, public prendaService:PrendaService, public router: Router){
    this.user = userService.user;
    
    console.log(this.user);
    
    this.prendaService.getMisPrendas(this.user.iduser).subscribe((data:Respuesta) =>{
      this.misPrendas = data.data
      console.log(this.misPrendas);
      
    })

    this.prendaService.getMisFavs(this.user.iduser).subscribe((data:Respuesta) =>{
      this.misFavoritas= data.data
    })
  }
  ed_perfil(updateUser:User){
    this.user = updateUser;
  }

  editarPrenda2(prenda:Prenda){
    console.log(this.prenda.idprenda,"perfil");
    console.log(prenda, "parametro");
    this.prendaService.prenda = prenda;
    console.log("perfil:");
    console.log(prenda);
    
    
    
    
  
  }

  mostrarMisPrendas(){
    this.isMisPrendasActive = true;
    this.isFavoritosActive = false;
  }

  mostrarFavoritos(){
    this.isFavoritosActive = true;
    this.isMisPrendasActive = false;
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
}
