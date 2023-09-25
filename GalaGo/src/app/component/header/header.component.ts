import { Component, OnInit } from '@angular/core';
// import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  verSubMenu = false;

  //cuando esta registrado/logueado en true//
  esUsuarioRegistrado = false;
 //cuando NO esta registrado/logueado en FALSE/
// esUsuarioRegistrado = false;

  // constructor(public userService: UserService){
  // }

  constructor(){

  }
  ngOnInit(): void {
    // Comprobar si el usuario está 
    // registrado
    // esUsuarioRegistrado = false;
  }

  mostrarOcultarMenu(){
    this.verSubMenu = !this.verSubMenu;
  }

}
