import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Prenda } from 'src/app/models/prenda';
import { Respuesta } from 'src/app/models/respuesta';
import { PrendaService } from 'src/app/shared/prenda.service';

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
  public arrEstado:string[] = ["Nuevo", "Como nuevo","Usado"]
  public arrUbicacion:string[] = ['Andalucia', 'Aragon', 'Canarias', 'Cantabria', 'Castilla-La Mancha', 'Castilla y Leon', 'Cataluña', 'Comunidad de Madrid', 'Comunidad Valenciana', 'Extremadura', 'Galicia', 'Islas Baleares', 'La Rioja', 'Murcia', 'Comunidad Foral de Navarra', 'Principado de Asturias', 'Pais Vasco', 'Ceuta', 'Melilla']
  
  public prenda:Prenda
  constructor(public router: Router, public prendaService:PrendaService){
  this.prenda = new Prenda()
  
  console.log(this.prenda);}


  public editar(title:string,price:number,description:string,type:string,size:string,event:string,state:string,location:string,photo1:string,photo2:string,photo3:string,photo4:string){
    
    this.prenda = new Prenda(title,price,description,location,state,size,event,type,photo1,photo2,photo3,photo4)
    
   
    if (title === "") {
      this.prenda.title = null
    }
    if (price == 0) {
      this.prenda.price = null
    }  
    if (description === "") {
      this.prenda.description = null
    }
    if (type === "") {
      this.prenda.tipo = null
    }
    if (state === "") {
      this.prenda.state = null
    }
    if (event === "") {
      this.prenda.evento = null
    }
    if (location === "") {
      this.prenda.location = null
    }
    if (size === "") {
      this.prenda.size = null
    }
    if (photo1 === "") {
      this.prenda.photo1 = null
    }
    if (photo2 === "") {
      this.prenda.photo2 = null
    }
    if (photo3 === "") {
      this.prenda.photo3 = null
    }
    if (photo4 === "") {
      this.prenda.photo4 = null
    }

    this.prendaService.editarPrenda(this.prenda).subscribe((data: Respuesta) =>{
      this.prenda = data.dataPrenda
      if (!data.error)
      {
        alert("Has editado una Prenda");
        
      } 
      else
      alert("Algo ha salido mal");
  
    })

    // this.router.navigate(["/perfil"]);
}
  
public irPerfil(){
  this.router.navigate(["/perfil"]);
}

} 

