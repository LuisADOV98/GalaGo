import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Prenda } from 'src/app/models/prenda';
import { Router } from '@angular/router';
import { PrendaService } from 'src/app/shared/prenda.service';
import { UserService } from 'src/app/shared/user.service';
import { Respuesta } from 'src/app/models/respuesta';
import { Location } from '@angular/common';
@Component({
  selector: 'app-publicar-prenda',
  templateUrl: './publicar-prenda.component.html',
  styleUrls: ['./publicar-prenda.component.css']
})
export class PublicarPrendaComponent {
  public prendas:Prenda[]
  public arrTipo: string[];
  public arrTalla: string[] 
  public arrEvento: string[] 
  public arrEstado:string[] 
  public arrUbicacion:string[]
  public prenda: Prenda 

  constructor(public router: Router, public prendaService:PrendaService, public userService:UserService, private location: Location){

    console.log(this.userService.user);
    console.log(this.userService.user.iduser);
    
    
    //Option de tipo de prendaService desde la api
    this.prendaService.enumType().subscribe((data:Respuesta)=>{
      console.log(data);
      console.log(data.dataEnum);
      this.arrTipo = data.dataEnum;
      console.log(this.arrTipo);
      
    });

    //Option de talla de prendaService desde la api
    this.prendaService.enumSize().subscribe((data:Respuesta)=>{
      this.arrTalla = data.dataEnum;
    });

    //Optios de evento de prendaService desde la api
    this.arrEvento = [];
    this.prendaService.enumEvent().subscribe((data:Respuesta)=>{
      this.arrEvento = data.dataEnum;
    });

    //Optios de estado de prendaService desde la api
    this.arrEstado = [];
    this.prendaService.enumState().subscribe((data:Respuesta)=>{
      this.arrEstado = data.dataEnum;
    });
    
    this.arrUbicacion = [];
    this.userService.enumLocation().subscribe((data:Respuesta)=>{
      this.arrUbicacion = data.dataEnum;
    });
  }

  


  public addPrenda(titulo:string,precio:number,descripcion:string,tipo:string,talla:string,evento:string,estado:string,photo1:string,photo2:string,photo3:string,photo4:string){
   
    let newPrenda:Prenda = new Prenda(titulo,precio,descripcion,estado,talla,evento,tipo,photo1,photo2,photo3,photo4,0,this.userService.user.iduser)
    console.log(newPrenda);
    
    this.prendaService.addPrenda(newPrenda).subscribe((data:Respuesta) =>{
      this.prendas = data.data

      if (!data.error){
        alert("Se ha añadido tu prenda")
      } else
      alert("Algo ha salido mal")
    })
   
    this.router.navigate(["/home"]);
    
  }

    goBack(){
      this.location.back();
    }

} 

