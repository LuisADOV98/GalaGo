import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent {
    public user: User;

    constructor(public router: Router, public userService: UserService){
      // this.user = new User (1,"Luisa", "Martinez", "Alicante", "luisita@gmail.com", "12345678", "../../../assets/imgRegister/portada-foto-perfil-redes-sociales-consejos 1.png");
      this.user = this.userService.user;
    }
    ngOnInit(){}

    modificarUser(edPhoto: string,
           edName: string,
           edLastName: string,
           edUbicacion: string,
           edEmail: string,
           edPassword: string){
           
      if(edPhoto != "") this.user.photo = edPhoto;
      if(edName != "") this.user.firstname = edName;
      if(edLastName != "") this.user.surname = edLastName;
      if(edUbicacion != "") this.user.ubicacion = edUbicacion;
      if(edEmail != "") this.user.email = edEmail;
      if(edPassword != "") this.user.password = edPassword;
      
      console.log("userEd:",this.user);
      //Verificar misma contraseña 
      
      //Actualiza el usuario del perfil CUANDO HAYA USER-SERVICE
      this.userService.user = this.user;
      console.log("user:", this.userService);
      
     
      // Redirige al usuario nuevamente a la página de perfil después de guardar
      this.router.navigate(["/perfil"]);
      }

     
}
