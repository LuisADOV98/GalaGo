import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent {
  @Output() result1 = new EventEmitter<boolean>();

  enviarTrue(){
    this.result1.emit(true);
  }

  enviarFalse(){
    this.result1.emit(false);
  }

}


