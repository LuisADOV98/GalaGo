import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-confirmacion-prenda',
  templateUrl: './modal-confirmacion-prenda.component.html',
  styleUrls: ['./modal-confirmacion-prenda.component.css']
})
export class ModalConfirmacionPrendaComponent {
  @Output() result = new EventEmitter<boolean>();

  enviarTrue(){
    this.result.emit(true);
  }

  enviarFalse(){
    this.result.emit(false);
  }

}

