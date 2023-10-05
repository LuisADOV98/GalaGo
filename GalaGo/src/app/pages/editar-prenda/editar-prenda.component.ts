import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Prenda } from 'src/app/models/prenda';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';

import { PrendaService } from 'src/app/shared/prenda.service';
import { UserService } from 'src/app/shared/user.service';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editar-prenda',
  templateUrl: './editar-prenda.component.html',
  styleUrls: ['./editar-prenda.component.css']
})
export class EditarPrendaComponent {
  modalInfo: string
  // toast
  public title: string;
  public message: string;
  public activeToast: boolean = false;
  // 
  @Output() mostrarModalPadre: EventEmitter<any> = new EventEmitter<any>();
  public modalOpen: Boolean = false
  urlImage: string;
  public prendas:Prenda[]
  public arrTipo: string[];
  public arrTalla: string[] 
  public arrEvento: string[] 
  public arrEstado:string[] 
  public arrUbicacion:string[]
  public prenda:Prenda
  public user:User

  //le asignamos valor desde el html en la funcion photo...
  public photo1:string ;
  public photo2:string = "";
  public photo3:string = "";
  public photo4:string = "";
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

//recoge info del modal
newPhoto(valor:string){
  this.photo1 = valor;
  this.photo2 = valor;
  this.photo3 = valor;
  this.photo4 = valor;

let arrPhotos = [this.photo1,this.photo2,this.photo3,this.photo4]
  return arrPhotos
}

openModal(idprenda:number){

this.modalOpen = true;
this.prendaService.prendafotoid = idprenda;
}
closeModal(){
  this.modalOpen = false;
}
confirmar(){

this.closeModal()
}




  public editar(title:string,price:number,description:string,type:string,size:string,event:string,state:string){
    
    let newPrenda: Prenda = new Prenda(title,price,description,state,size,event,type,this.prendaService.prenda.photo1,this.prendaService.prenda.photo2,this.prendaService.prenda.photo3,this.prendaService.prenda.photo4,this.prendaService.prenda.idprenda)
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
    if (this.photo1 === "") {
      newPrenda.photo1 = null
    }
    if (this.photo2 === "") {
      newPrenda.photo2 = null
    }
    if (this.photo3 === "") {
      newPrenda.photo3 = null
    }
    if (this.photo4 === "") {
      newPrenda.photo4 = null
    }

    this.prendaService.editarPrenda(newPrenda).subscribe((data: Respuesta) =>{
    
    console.log(data.data);
    
      if (!data.error)
      {
        console.log('emtro');
         this.message = "Se ha editado tu articulo"
        this.title = "Editado"
        this.activeToast = true
      } 
      else
      console.log('salgp');
      
      this.message = "No se ha editado tu articulo"
        this.title = "Articulo no editado"
        this.activeToast = true
    })

    this.router.navigate(["/perfil"]);
}
  
public irPerfil(){
  this.router.navigate(["/perfil"]);
}


public changeStateToast(state: boolean) {
  this.activeToast = state;
}
}
