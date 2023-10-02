import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    public myForm: FormGroup
    constructor(public router: Router, public userService: UserService, private formBuilder: FormBuilder){
      // this.user = new User (1,"Luisa", "Martinez", "Alicante", "luisita@gmail.com", "12345678", "../../../assets/imgRegister/portada-foto-perfil-redes-sociales-consejos 1.png");
      this.user = this.userService.user;
      this.buildForm();
      
    }
    ngOnInit(){}
private buildForm(){
    const minPassLength = 8;
    this.myForm = this.formBuilder.group({
      firstname: [, Validators.required],
      surname: [, Validators.required],
      email: [, [Validators.required, Validators.email]],
      url: [, Validators.required],
      password: [, [Validators.required, Validators.minLength(minPassLength)]],
      password2: [, [Validators.required, this.checkPassword]],
      location:[,Validators.required]

    })
  }
  //Comprueba que la segunda password es igual que la primera
  private checkPassword(control: AbstractControl){
    let resultado = {matchPassword: true};

    if (control.parent?.value.password == control.value)
    resultado = null;

  return resultado;
  }
    modificarUser(edPhoto: string,
           edName: string,
           edLastName: string,
           edUbicacion: string,
           edEmail: string,
           edPassword: string){
           
      if(edPhoto != "") this.user.photo = edPhoto;
      if(edName != "") this.user.firstname = edName;
      if(edLastName != "") this.user.surname = edLastName;
      if(edUbicacion != "") this.user.location = edUbicacion;
      if(edEmail != "") this.user.email = edEmail;
      if(edPassword != "") this.user.password = edPassword;
      
      console.log("userEd:",this.user);
      //Verificar misma contraseña 
      
      //Actualiza el usuario del perfil CUANDO HAYA USER-SERVICE
      this.userService.user = this.user;
      console.log("user:", this.userService);
      this.userService.editUser(this.user).subscribe(
        (response) => {
          // Manejar la respuesta exitosa 
          console.log("Perfil actualizado correctamente.", response);
          // Redirige al usuario nuevamente a la página de perfil después de guardar
          this.router.navigate(["/perfil"]);
        },
        (error) => {
          // Manejar errores (por ejemplo, mostrar un mensaje de error)
          console.error("Error al actualizar el perfil.", error);
        }
      );
      
     
      // Redirige al usuario nuevamente a la página de perfil después de guardar
      this.router.navigate(["/perfil"]);
      }

      cancelar(){
        this.router.navigate(["/perfil"]);
      }

     
}
