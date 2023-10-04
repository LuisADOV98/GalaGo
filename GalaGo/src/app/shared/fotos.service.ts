import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FotosService {
  private imagenEdit = new BehaviorSubject<string>('');
  constructor() { }

  setImagenEdit(urlfoto: string){
    this.imagenEdit.next(urlfoto);
  }

  getImagenEdit(){
    return this.imagenEdit.asObservable();
  }
}
