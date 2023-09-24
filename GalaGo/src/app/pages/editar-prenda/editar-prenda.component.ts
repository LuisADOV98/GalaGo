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
    this.prenda1 = new Prenda("Traje boda",10,"usado una vez","Madrid","Semi nuevo","S","Comuniones","Hombre","xs",3)
  console.log(this.prenda1);}


  public editar(titulo:string,precio:number,descripcion:string,tipo:string,talla:string,evento:string,estado:string,ubicacion:string,imagen:string){
    
    
    this.prenda1.titulo = titulo;
    this.prenda1.precio = precio;
    this.prenda1.descripcion = descripcion;
    this.prenda1.tipo = tipo;
    this.prenda1.talla = talla;
    this.prenda1.evento = evento;
    this.prenda1.estado = estado;
    this.prenda1.ubicacion = ubicacion;
    this.prenda1.imagen = imagen;

    // this.router.navigate(["/perfil"]);
    console.log(this.prenda1);
}
  
public irPerfil(){
  this.router.navigate(["/perfil"]);
}

} 

