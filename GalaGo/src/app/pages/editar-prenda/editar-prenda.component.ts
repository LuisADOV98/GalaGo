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
  public prenda:Prenda
  constructor(public router: Router){
    this.prendas = []
    this.prenda = new Prenda("",0,"","","","","","")
  }
  public editar(titulo:string,precio:number,descripcion:string,tipo:string,talla:string,evento:string,estado:string,ubicacion:string){
    console.log(this.prenda);
    
    this.prenda.titulo = titulo;
    this.prenda.precio = precio;
    this.prenda.descripcion = descripcion;
    this.prenda.tipo = tipo;
    this.prenda.talla = talla;
    this.prenda.evento = evento;
    this.prenda.estado = estado;
    this.prenda.ubicacion = ubicacion;
    this.router.navigate(["/perfil"]);
    console.log(this.prendas);
}
  
} 

