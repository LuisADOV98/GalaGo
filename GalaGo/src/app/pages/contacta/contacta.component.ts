import { Component } from '@angular/core';

@Component({
  selector: 'app-contacta',
  templateUrl: './contacta.component.html',
  styleUrls: ['./contacta.component.css']
})
export class ContactaComponent {
  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  enviarMensaje() {
    console.log('Mensaje enviado:');
    console.log('Nombre:', this.nombre);
    console.log('Email:', this.email);
    console.log('Mensaje:', this.mensaje);
  }
}
