import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Prenda } from 'src/app/models/prenda';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  public prendas:Prenda[]
  constructor(public router: Router){
     this.prendas = [
      new Prenda("Traje boda",20,"vestido azul","madrid","usado","s","Boda","Mujer","../../../assets/cards/chica_azul.jpg",1),
      new Prenda("Traje boda",20,"vestido morado","madrid","usado","s","Boda","Mujer","../../../assets/cards/chica_morado.png",2),
     
    ]
  }

  public irLogin(){
    this.router.navigate(["/login"]);
  }

  
}
