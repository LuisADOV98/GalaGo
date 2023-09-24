import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent {
    public user: User;

    constructor(){
      this.user = new User(1,"Luisa", "Martinez","Madrid", "luisa@gmail.com","12345678","../../../assets/imgRegister/portada-foto-perfil-redes-sociales-consejos 1.png")
    }

    enviar(edPhoto: HTMLInputElement,
           edName: HTMLInputElement,
           edLastName: HTMLInputElement,
           edUbicacion: HTMLInputElement,
           edEmail: HTMLInputElement,
           edPassword: HTMLInputElement){

      if(edPhoto.value != "") this.user.photo = edPhoto.value;
      if(edName.value != "") this.user.name = edName.value;
      if(edLastName.value != "") this.user.last_name = edLastName.value;
      if(edUbicacion.value != "") this.user.ubicacion = edUbicacion.value;
      if(edEmail.value != "") this.user.email = edEmail.value;
      if(edPassword.value != "") this.user.password = edPassword.value;

      console.log(this.user);
      
      }
}
