import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastComponent } from 'src/app/component/toast/toast.component';

@Component({
  selector: 'app-contacta',
  templateUrl: './contacta.component.html',
  styleUrls: ['./contacta.component.css']
})
export class ContactaComponent {
  // toast
  public titleToast: string = "";
  public message: string = ""; 
  public activeToast: boolean = false;
  datos: FormGroup
  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder){
    this.datos = this.formBuilder.group({
      firstname: [, Validators.required],
      email: [, [Validators.required, Validators.email]],
      mensaje:[,Validators.required]

    })
  }
  enviarMensaje() {
    let params = {
      firstname:this.datos.value.firstname,
      email:this.datos.value.email,
      mensaje:this.datos.value.mensaje

    }
    console.log(params);
    this.httpClient.post("http://localhost:3000/envio", params).subscribe(resp =>{
      console.log(resp);
      console.log('emtro');
      this.message = "Gracias por contactar con nosotros"
      this.titleToast = "Email enviado "
      this.activeToast = true //toast para funcion changeStateToast
      //TARDA UNOS SEGUNDOS EN SALIR DE LA PAGINA PARA QUE SE VEA EL TOAST
      setTimeout(() => {
      }, ToastComponent.TOAST_TIME); 
      
    });
  }
    //Cambia el estado TOAST para que toast se muestre
    changeStateToast(state: boolean) {
      this.activeToast = state;
      console.log("changeStateToast",state);
    }
}
