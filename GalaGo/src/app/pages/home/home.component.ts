import { Component } from '@angular/core';
import { Prenda } from 'src/app/models/prenda';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public filtrado = false;
  public mujerActive = false;
  public prendas: Prenda[];

  constructor(){
    this.prendas = [
      new Prenda("Uno", 10, "Descip", "Alc", "Nuevo","xs","Boda","Mujer"),
      new Prenda("Dos", 20, "Descip", "Mdr", "Nuevo","xs","Boda","Hombre"),
      new Prenda("Tres", 30, "Descip", "Val", "Nuevo","xs","Boda","Accesorio")
    ]
    console.log("filterMujer:",this.mujerActive);
  }

  filterMujer():void{
    this.mujerActive = !this.mujerActive;
    console.log("filterMujer:",this.mujerActive);

  }
}



