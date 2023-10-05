import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Prenda } from 'src/app/models/prenda';
import { PrendaService } from 'src/app/shared/prenda.service';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.css']
})
export class ModalEditarComponent {
 @Input() imageUrl: string
 @Output() closeModalEvent = new EventEmitter();

  constructor(private prendaService: PrendaService){}
  closeModal() {
    this.closeModalEvent.emit(); // Emite un evento para cerrar el modal en el componente padre
  }
  updateImage(photo:string) {
    if(this.prendaService.prendafotoid == 1){
      this.prendaService.prenda.photo1 = photo
    } 
    if(this.prendaService.prendafotoid == 2){
      this.prendaService.prenda.photo2 = photo
    } 
    if(this.prendaService.prendafotoid == 3){
      this.prendaService.prenda.photo3 = photo
    }
    if(this.prendaService.prendafotoid == 4){
      this.prendaService.prenda.photo4 = photo
    } 
    

    this.closeModal()
  }




 
}
