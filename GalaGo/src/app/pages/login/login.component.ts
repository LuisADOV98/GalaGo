import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Respuesta } from 'src/app/models/respuesta';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  public user: User

  constructor(private route: Router, public userServie: UserService) {
    this.user = new User("", "", "", "", "", "")
  }
  onSubmit(form: NgForm) {


    this.userServie.loginUser(this.user).subscribe((data: Respuesta) => {
      if (!data.error) {
        this.userServie.user = data.dataUser;
        console.log(this.userServie.user);

        this.route.navigate(["/home"]);
        this.userServie.logueado = true

        console.log(data.dataUser);

      }
      else {
        console.log("error al iniciar");
        this.userServie.logueado = false
        alert("Credenciales incorrectas")
      }
    })
  }
}



