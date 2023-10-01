import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-favoritos',
  templateUrl: './modal-favoritos.component.html',
  styleUrls: ['./modal-favoritos.component.css']
})
export class ModalFavoritosComponent {
  @Output() result = new EventEmitter<boolean>();

  enviarTrue(){
    this.result.emit(true);
  }

  enviarFalse(){
    this.result.emit(false);
  }

}

