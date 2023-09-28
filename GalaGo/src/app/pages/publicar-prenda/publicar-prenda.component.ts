import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Prenda } from 'src/app/models/prenda';
import { Router } from '@angular/router';
import { PrendaService } from 'src/app/shared/prenda.service';
import { UserService } from 'src/app/shared/user.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-publicar-prenda',
  templateUrl: './publicar-prenda.component.html',
  styleUrls: ['./publicar-prenda.component.css']
})
export class PublicarPrendaComponent {
  public prendas:Prenda[]
  public arrTipo: string[];
  public arrTalla: string[] = ["Unica","S","M","L","XL","XXL"]
  public arrEvento: string[] = ["Bodas","Comuniones","Noche vieja","Disfraces"]
  public arrEstado:string[] = ["Nuevo", "Semi nuevo","Usado"]
  public arrUbicacion:string[] = ['Andalucia', 'Aragon', 'Canarias', 'Cantabria', 'Castilla-La Mancha', 'Castilla y Leon', 'Cataluña', 'Comunidad de Madrid', 'Comunidad Valenciana', 'Extremadura', 'Galicia', 'Islas Baleares', 'La Rioja', 'Murcia', 'Comunidad Foral de Navarra', 'Principado de Asturias', 'Pais Vasco', 'Ceuta', 'Melilla']
  public prenda: Prenda 
  constructor(public router: Router, public prendaService:PrendaService, public userService:UserService){
    this.prendas = []
    console.log(this.arrTipo);
    
    this.arrTipo = ["Accesorio", "Mujer", "Hombre"]
    
  }

  public addPrenda(titulo:string,precio:number,descripcion:string,tipo:string,talla:string,evento:string,estado:string,photo1:string,photo2:string,photo3:string,photo4:string){
    let newPrenda:Prenda = new Prenda(titulo,precio,descripcion,estado,talla,evento,tipo,photo1,photo2,photo3,photo4)
    
    this.prendaService.addPrenda(newPrenda).subscribe((data:Respuesta) =>{
      this.prendas = data.data

      if (!data.error){
        alert("Se ha añadido tu prenda")
      } else
      alert("Algo ha salido mal")
    })
    console.log(this.prendas);
    // this.router.navigate(["/perfil"]);
    
  }

    irHome(){
      this.router.navigate(["/home"]);
    }

} 

