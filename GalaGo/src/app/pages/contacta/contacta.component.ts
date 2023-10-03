import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacta',
  templateUrl: './contacta.component.html',
  styleUrls: ['./contacta.component.css']
})
export class ContactaComponent {
  // nombre: string = '';
  // email: string = '';
  // mensaje: string = '';
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
      
    })


    // console.log('Mensaje enviado:');
    // console.log('Nombre:', this.nombre);
    // console.log('Email:', this.email);
    // console.log('Mensaje:', this.mensaje);
  }
}
