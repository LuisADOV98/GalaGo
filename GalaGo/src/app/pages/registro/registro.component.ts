import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastComponent } from 'src/app/component/toast/toast.component';
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

    // TOAST
    public titleToast: string = "";
    public message: string = ""; 
    public activeToast: boolean = false;
  

  constructor(private formBuilder: FormBuilder, private route: Router, private userService: UserService){
    this.buildForm();
    this.prendas = []

    this.prenda = new Prenda("",0,"","","","","","","","","")

    
    //Optios de ubicacion de userService desde la api
    this.arrUbicacion = [];
    this.selectedUbicacion = "";
    this.userService.enumLocation().subscribe((data:Respuesta)=>{
      this.arrUbicacion = data.dataEnum;
    });   

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
        this.message = "Lo siento, se ha producido un error al registrarse"
        this.titleToast = "ERROR"
        this.activeToast = true //toast para funcion changeStateToast

      }else{
        newUser = data.dataUser;
        console.log("this.arrayUser",newUser);
        this.message = "Se ha registrado correctamente"
        this.titleToast = "Registro exitoso"
        this.activeToast = true //toast para funcion changeStateToast        
      }
    });
    //TARDA UNOS SEGUNDOS EN SALIR DE LA PAGINA PARA QUE SE VEA EL TOAST
    setTimeout(() => {
    this.route.navigate(['/login']);
    }, ToastComponent.TOAST_TIME);   

  }

  //Cambia el estado TOAST para que toast se muestre
  changeStateToast(state: boolean) {
    this.activeToast = state;
    console.log("changeStateToast",state);
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