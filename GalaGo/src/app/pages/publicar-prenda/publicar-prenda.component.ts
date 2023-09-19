import { Component } from '@angular/core';
import { Prenda } from 'src/app/models/prenda';

@Component({
  selector: 'app-publicar-prenda',
  templateUrl: './publicar-prenda.component.html',
  styleUrls: ['./publicar-prenda.component.css']
})
export class PublicarPrendaComponent {
  public prendas:Prenda[]
  public arrTipo: String[]
  public arrTalla: String[]
  public arrEvento: String[]
  public arrEstado:String[]
  public arrUbicacion:String[]
  constructor(){
    this.arrTipo = ["Accesorio", "Mujer", "Hombre"];
    this.arrTalla = ["Unica","S","M","L","XL","XXL"];
    this.arrEvento = ["Bodas","Comuniones","Nochevieja","Disfraces"];
    this.arrEstado = ["Nuevo", "Semi nuevo","Usado"]
    this.arrUbicacion = ["Madrid","Barcelona","Badajoz","avila"]
    this.prendas = []
  }

  public recogerInfo(titulo:String,precio:number,descripcion:String,tipo:String,talla:String,evento:String,estado:String,ubicacion:String){
    let newPrenda:Prenda = new Prenda(titulo,precio,descripcion,ubicacion,estado,talla,evento,tipo)
    this.prendas.push(newPrenda)
    console.log(this.prendas);
    return this.prendas
   
    
  }
} 

