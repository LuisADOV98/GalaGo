import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Prenda } from 'src/app/models/prenda';

@Component({
  selector: 'app-editar-prenda',
  templateUrl: './editar-prenda.component.html',
  styleUrls: ['./editar-prenda.component.css']
})
export class EditarPrendaComponent {
  public prendas:Prenda[]
  public arrTipo: string[] = ["Accesorio", "Mujer", "Hombre"];
  public arrTalla: string[] = ["Unica","S","M","L","XL","XXL"]
  public arrEvento: string[] = ["Bodas","Comuniones","Nochevieja","Disfraces"]
  public arrEstado:string[] = ["Nuevo", "Semi nuevo","Usado"]
  public arrUbicacion:string[] = ["Madrid","Barcelona","Badajoz","avila"]
  public titulo: string
  public precio: number
  public descripcion:string
  public prenda1:Prenda
  constructor(public router: Router){
    this.prendas = []
    this.prenda1 = new Prenda()
  console.log(this.prenda1);}


  public editar(titulo:string,precio:number,descripcion:string,tipo:string,talla:string,evento:string,estado:string,ubicacion:string,foto1:string){
    
    
    this.prenda1.title = titulo;
    this.prenda1.price = precio;
    this.prenda1.description = descripcion;
    this.prenda1.type = tipo;
    this.prenda1.size = talla;
    this.prenda1.event = evento;
    this.prenda1.state = estado;
    this.prenda1.location = ubicacion;
    this.prenda1.photo1 = foto1;

    // this.router.navigate(["/perfil"]);
    console.log(this.prenda1);
}
  
public irPerfil(){
  this.router.navigate(["/perfil"]);
}

} 

