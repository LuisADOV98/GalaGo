import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {
  // public register: User
  public myForm: FormGroup
  constructor(private formBuilder: FormBuilder, private route: Router){
    this.buildForm();
  }
  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  //   console.log(this.register);
  // }
  public register(){
    const user =this.myForm.value;
    console.log(user);
    this.route.navigate(['/login']);
  }
  private buildForm(){
    const minPassLength = 8;
    this.myForm = this.formBuilder.group({
      nombre: [, Validators.required],
      apellido: [, Validators.required],
      email: [, [Validators.required, Validators.email]],
      url: [, Validators.required],
      password: [, [Validators.required, Validators.minLength(minPassLength)]],
      password2: [, [Validators.required, this.checkPassword]],

    })
  }
  private checkPassword(control: AbstractControl){
    let resultado = {matchPassword: true};


    if (control.parent?.value.password == control.value)
    resultado = null;
  return resultado;
  }
}