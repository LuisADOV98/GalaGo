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
      new Prenda("Uno", 10, "descip", "Alc", "nuevo","boda", false, false, true),
      new Prenda("Dos", 20, "descip", "Mdr", "nuevo","boda", true, false, false),
      new Prenda("Tres", 30, "descip", "Val", "nuevo","boda", false, true, false)
    ]
    console.log("filterMujer:",this.mujerActive);
  }

  filterMujer():void{
    this.mujerActive = !this.mujerActive;
    console.log("filterMujer:",this.mujerActive);

  }
}



