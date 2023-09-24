import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  public login: User
  public myForm: FormGroup
  constructor(private route: Router){
    this.login =new User()
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    console.log(this.login);
    
  }
  public loginHome(){
    this.route.navigate(['/home']);
  }
    }
