import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Prenda } from 'src/app/models/prenda';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {
  // public register: User
  public user: User;
  public myForm: FormGroup

  public prendas:Prenda[]
  public prenda:Prenda


  public arrUbicacion:string[] = ["Madrid","Barcelona","Badajoz","avila"]
  

  constructor(private formBuilder: FormBuilder, private route: Router, private userService: UserService){
    this.buildForm();
    this.prendas = []

    this.prenda = new Prenda(0,"",0,"","","","","","","")

  }
  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  //   console.log(this.register);
  // }

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
  private checkPassword(control: AbstractControl){
    let resultado = {matchPassword: true};


    if (control.parent?.value.password == control.value)
    resultado = null;
  return resultado;
  }


  public register(){
    console.log("entra en register");
    
    this.user = this.myForm.value;
    console.log(this.user);

    this.user.firstname = this.myForm.get('firstname').value;
    this.user.surname = this.myForm.get('surname').value;
    this.user.email = this.myForm.get('email').value;
    this.user.location = this.myForm.get('location').value;
    this.user.password = this.myForm.get('password').value;
    this.user.photo = this.myForm.get('url').value;


    //Llama a la función registro
    this.userService.registro(this.user).subscribe((data:Respuesta)=>{
      if(data.error){
        console.log("Error en user");
      }else{
        this.user = data.dataUser;
        console.log("this.arrayUser",this.user);
        
      }
    });

    this.route.navigate(['/login']);
  }
  
}