import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  public login: User
  constructor(){
    this.login =new User()
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    console.log(this.login);
    
  }
    }
