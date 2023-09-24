import { Component } from '@angular/core';
import { Prenda } from 'src/app/models/prenda';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  isMisPrendasActive: boolean = true; // Inicialmente, Mis Prendas está activo
  isFavoritosActive: boolean = false;
  public prendas: Prenda[];

  constructor(){
    this.prendas = [   
       new Prenda ("Vestidin rosa",40,"Prenda muy bonita", "Alicante", "Nuevo", "S", "Boda", "Mujer", "https://img.freepik.com/foto-gratis/mujer-rubia-sorprendida-pelos-ventosos-posando-pared-rosa-hermosa-modelo-emociones-extaticas_273443-1824.jpg?w=1800&t=st=1695554151~exp=1695554751~hmac=8e67fb0c7d36456f7894194b16f3dd34def3b68fb9edd78285b3dd39c151d2de",2)
  ]
  }
  toggleTab(tab: string) {
    if (tab === 'mis-prendas') {
      this.isMisPrendasActive = true;
      this.isFavoritosActive = false;
    } else if (tab === 'favoritos') {
      this.isMisPrendasActive = false;
      this.isFavoritosActive = true;
    }


  }
  // ngOnInit(): void {
  //   this.verTodas();
  // }
}
