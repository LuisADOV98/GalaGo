import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Respuesta } from 'src/app/models/respuesta';
import { ToastComponent } from 'src/app/component/toast/toast.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  public user: User;

  // TOAST
  public titleToast: string = "";
  public message: string = ""; 
  public activeToast: boolean = false;

  constructor(private route: Router, public userServie: UserService) {
    this.user = new User("", "", "", "", "", "")
  }
  onSubmit(form: NgForm) {


    this.userServie.loginUser(this.user).subscribe((data: Respuesta) => {
      if (!data.error) {
        this.userServie.user = data.dataUser;
        console.log(this.userServie.user);
        //TOAST
        this.message = "Ha iniciado sesión correctamente"
        this.titleToast = "Inicio de sesión"
        this.activeToast = true //toast para funcion changeStateToast

        //TARDA UNOS SEGUNDOS EN SALIR DE LA PAGINA PARA QUE SE VEA EL TOAST
        setTimeout(() => {
          this.route.navigate(["/home"]);
        }, ToastComponent.TOAST_TIME);   
        this.userServie.logueado = true

        console.log(data.dataUser);

      }
      else {
        console.log("error al iniciar");
        this.userServie.logueado = false
        this.message = "No se ha podido iniciar sesión"
        this.titleToast = "ERROR"
        this.activeToast = true //toast para funcion changeStateToast
      }
    })
  }
}



