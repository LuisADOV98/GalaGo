import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Prenda } from 'src/app/models/prenda';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {

  public user: User
  // public register: User
  public ubicacionString: string = "Ubicacion"
  // public prendas:Prenda[]
  public ubicacion: string
  public myForm: FormGroup
  public arrUbicacion:string[]
  public selectedUbicacion: string;
  // public prenda:Prenda

  constructor(private formBuilder: FormBuilder, private route: Router){
    this.buildForm();
    // this.prendas = []
    // this.prenda = new Prenda("",0,"","","","","","")1
    this.user = new User()
    this.arrUbicacion = ["Madrid","Barcelona","Badajoz","avila"] 
    this.selectedUbicacion = "";

  }
  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  //   console.log(this.register);
  // }
  public register(ubicacion:string,confirmPassword:string, password:string, email:string, last_name:string, first_name:string, photo:string){
    console.log(ubicacion);
    console.log(confirmPassword);
    console.log(password);
    console.log(email);
    console.log(last_name);
    console.log(first_name);
    console.log(photo);

    let newUser = new User(0, first_name, last_name, ubicacion, email, password, photo)
    console.log(newUser);
    
    
    
    // this.route.navigate(['/login']);
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
      ubicacion:[,Validators.required]

    })
  }
  private checkPassword(control: AbstractControl){
    let resultado = {matchPassword: true};


    if (control.parent?.value.password == control.value)
    resultado = null;
  return resultado;
  }
  onSubmit(form:NgForm){
      
    console.log(form.value);
    console.log(this.user);

  }

  ubicacionInfo(ubicacion:string):void{
    this.selectedUbicacion = ubicacion;
    console.log("selectedUbicacion:",this.selectedUbicacion);
  }
}