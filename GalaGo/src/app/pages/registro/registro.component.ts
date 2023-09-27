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
  public user: User;
  public myForm: FormGroup

  public prendas:Prenda[]
  public prenda:Prenda

  public ubicacionString: string = "Ubicacion"
  public ubicacion: string
  public arrUbicacion:string[]
  public selectedUbicacion: string;
  

  constructor(private formBuilder: FormBuilder, private route: Router, private userService: UserService){
    this.buildForm();
    this.prendas = []

    this.prenda = new Prenda("",0,"","","","","","","","","","",0)

    
    this.arrUbicacion = ["Madrid","Barcelona","Badajoz","avila"] 
    this.selectedUbicacion = "";

  }

  //Recoge los datos del html y los asigna al newUser que se crea 
  public register(ubicacion:string,confirmPassword:string, password:string, email:string, last_name:string, first_name:string, photo:string){
    console.log("entra en register");
    // console.log(ubicacion);
    // console.log(confirmPassword);
    // console.log(password);
    // console.log(email);
    // console.log(last_name);
    // console.log(first_name);
    // console.log(photo);

    let newUser = new User(first_name, last_name, ubicacion, email, password, photo)
    console.log(newUser);

    //Llama a la función registro con el userService, envia el newUser y asigna en el else la respuesta al newUser
    this.userService.registro(newUser).subscribe((data:Respuesta)=>{
      if(data.error){
        console.log("Error en user");
      }else{
        newUser = data.dataUser;
        console.log("this.arrayUser",newUser);
        
      }
    });

    this.route.navigate(['/login']);
    // this.route.navigate(['/login']);
  }
  //Valida los datos del formulario html
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

  onSubmit(form:NgForm){
      
    console.log(form.value);
    console.log(this.user);
  }

  ubicacionInfo(ubicacion:string):void{
    this.selectedUbicacion = ubicacion;
    console.log("selectedUbicacion:",this.selectedUbicacion);
  }
}