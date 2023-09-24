import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Prenda } from 'src/app/models/prenda';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicar-prenda',
  templateUrl: './publicar-prenda.component.html',
  styleUrls: ['./publicar-prenda.component.css']
})
export class PublicarPrendaComponent {
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

  public recogerInfo(titulo:string,precio:number,descripcion:string,tipo:string,talla:string,evento:string,estado:string,ubicacion:string,imagen:string ){
    let newPrenda:Prenda = new Prenda(titulo,precio,descripcion,ubicacion,estado,talla,evento,tipo,imagen)
    this.prendas.push(newPrenda)
    console.log(this.prendas);
    this.router.navigate(["/perfil"]);
    return this.prendas
  }

    irHome(){
      this.router.navigate(["/home"]);
    }
    onSubmit(prendaForm:NgForm){
      
      console.log(prendaForm.value);
      console.log(this.prenda);
      this.router.navigate(["/perfil"]);
    }
} 

