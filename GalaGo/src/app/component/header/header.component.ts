import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  public verSubMenu = false;

  constructor(public userService: UserService, private el: ElementRef, public route: Router){
    
  }

  get isLoggedIn():boolean{
    return this.userService.logueado;
  }

  @HostListener('document:click', ['$event'])
    onClick(event: Event): void {
  // Compruba si el menú está abierto y si se ha clicado fuera de el
      if (this.verSubMenu && !this.el.nativeElement.contains(event.target)) {
        this.mostrarOcultarMenu();
    }
  }

  home(){
    this.route.navigate(['/home']);
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
