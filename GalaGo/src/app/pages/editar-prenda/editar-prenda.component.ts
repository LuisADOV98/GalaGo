import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Prenda } from 'src/app/models/prenda';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { PrendaService } from 'src/app/shared/prenda.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-editar-prenda',
  templateUrl: './editar-prenda.component.html',
  styleUrls: ['./editar-prenda.component.css']
})
export class EditarPrendaComponent {
  public prendas:Prenda[]
  public arrTipo: string[];
  public arrTalla: string[] 
  public arrEvento: string[] 
  public arrEstado:string[] 
  public arrUbicacion:string[]
  public prenda:Prenda
  public user:User
  constructor(public router: Router, public prendaService:PrendaService, public userService:UserService){
    this.prenda = this.prendaService.prenda
    this.user = this.userService.user
    console.log(this.prendaService.prenda);
    
      //Option de tipo de prendaService desde la api
      this.prendaService.enumType().subscribe((data:Respuesta)=>{
       
        this.arrTipo = data.dataEnum;
      
        
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


  public editar(title:string,price:number,description:string,type:string,size:string,event:string,state:string,location,photo1:string,photo2:string,photo3:string,photo4:string){
    
    let newPrenda: Prenda = new Prenda(title,price,description,state,size,event,type,photo1,photo2,photo3,photo4,location,this.prendaService.prenda.idprenda)
    // newPrenda = this.prendaService.prenda
    // console.log(newPrenda);
    
  console.log(newPrenda);
  
    
   
    if (title === "") {
      newPrenda.title = null
    }
    if (price == 0) {
      newPrenda.price = null
    }  
    if (description === "") {
      newPrenda.description = null
    }
    if (type === "") {
      newPrenda.tipo = null
    }
    if (state === "") {
      newPrenda.state = null
    }
    if (event === "") {
      newPrenda.evento = null
    }
  
    if (size === "") {
      newPrenda.size = null
    }
    if (photo1 === "") {
      newPrenda.photo1 = null
    }
    if (photo2 === "") {
      newPrenda.photo2 = null
    }
    if (photo3 === "") {
      newPrenda.photo3 = null
    }
    if (photo4 === "") {
      newPrenda.photo4 = null
    }

    this.prendaService.editarPrenda(newPrenda).subscribe((data: Respuesta) =>{
    
    console.log(data.data);
    
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

