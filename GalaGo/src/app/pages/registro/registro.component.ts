import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {
  public register: User
constructor(){
  this.register =new User()
}
  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(this.register);
  }
}