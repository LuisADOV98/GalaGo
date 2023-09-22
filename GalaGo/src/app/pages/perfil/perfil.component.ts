import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  isMisPrendasActive: boolean = true; // Inicialmente, Mis Prendas está activo
  isFavoritosActive: boolean = false;
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
