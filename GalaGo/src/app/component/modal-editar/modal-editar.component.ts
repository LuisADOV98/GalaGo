import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Prenda } from 'src/app/models/prenda';
import { FotosService } from 'src/app/shared/fotos.service';
@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.css']
})
export class ModalEditarComponent {
public imagenEdit: string
  @Output() result = new EventEmitter<boolean>();
  @Output() imagenEditada = new EventEmitter<{url:string}>
  constructor(private fotosService:FotosService){}

  ngOnInit(){
    this.fotosService.getImagenEdit().subscribe(url => {
      this.imagenEdit = url
    })
  }


  enviar(){
    this.result.emit(true);
    
  }

  enviarFalse(){
    this.result.emit(false);
  }
}
