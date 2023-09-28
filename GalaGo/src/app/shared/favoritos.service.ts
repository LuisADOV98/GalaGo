import { EventEmitter, Injectable, Output } from '@angular/core';
import { Prenda } from '../models/prenda';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  // @Output() disparadorDeFavs: EventEmitter<any> = new EventEmitter();
  // private favoritos: Prenda[] = [];

  public favorites: Prenda[] = [];




  addArrayFavorite(prenda:Prenda){
    // console.log(prenda);

    this.favorites.push(prenda)
  }

  getFavorites(){
    // console.log(this.favorites);
    
    return this.favorites;
  }

  removeArrayFavorite(prenda: any) {
    const index = this.favorites.findIndex(item => item === prenda.id);
    if (index !== -1) {
      this.favorites.splice(index, 1); // Eliminar la prenda de favoritos si está en la lista
    }
  }

  constructor() {}

  // // Agregar una prenda a la lista de favoritos
  // agregarPrendaFavorita(prenda: Prenda) {
  //   if (!this.favoritos.includes(prenda)) {
  //     this.favoritos.push(prenda);
  //   }
  // }

  // // Obtener la lista de prendas favoritas
  // obtenerPrendasFavoritas() {
  //   return this.favoritos;
  // }

  // // Eliminar una prenda de la lista de favoritos
  // eliminarPrendaFavorita(prenda: Prenda) {
  //   const index = this.favoritos.indexOf(prenda);
  //   if (index !== -1) {
  //     this.favoritos.splice(index, 1);
  //   }
  // }
}

