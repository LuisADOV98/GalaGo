import { AfterViewInit, Component } from '@angular/core';
import { Prenda } from 'src/app/models/prenda';
import { CommonModule } from '@angular/common';
import { ElementRef, Renderer2, ViewChild } from '@angular/core';
import { PrendaService } from 'src/app/shared/prenda.service';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/models/respuesta';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  public filtrado = false;
  public mujerActive = false;
  public hombreActive = false;
  public accesorioActive = false;
  public precioActive = false;
  public eventoActive = false;
  public ubicacionActive = false;
  
  public prendas: Prenda[];
  public arrTipo: string[];
  public arrTalla: string[];
  public arrEvento: string[];
  public arrEstado: string[];
  public arrUbicacion: string[];
  
  public selectedTallaMujer: string = "";
  public selectedTallaHombre: string = "";
  public selectedEvento: string = "";
  public selectedUbicacion: string = "";
  public valorRango: number;
  // public valorGlobo: number = 0;
  // public ubicacion: string
  idsFavoritasParaEsteUsuario: any;
  
  @ViewChild('sliderValue') sliderValue: ElementRef; // Referencia al elemento <span>
  @ViewChild('sliderInput') sliderInput: ElementRef; // Referencia al elemento <input>

  constructor(public router: Router,
     public prendaService: PrendaService,
      public userService: UserService, 
      public prendasService: PrendaService){
    this.prendas = [];
    this.valorRango = 250;
    this.filtros2();

    //salen las prendas favs del 1 solamente!!!!!!!!!!!!!(por esto lo del corazon marcado en home)
    this.prendasService.getMisFavs(1).subscribe((resp:any) => {
      /* console.log(resp); */
      this.idsFavoritasParaEsteUsuario = resp.data.map(item => item.idprenda)
    })


    // this.prendaService.filtroTipo().subscribe((data:Respuesta) =>{
    //   this.prendas = data.data;
    // });

    //-------- ENUM DE LA API PARA SELECTORES --------//

    //Optios de tipo de prendaService desde la api
    this.arrTipo = [];
    this.prendaService.enumType().subscribe((data:Respuesta)=>{
      this.arrTipo = data.dataEnum;
    });

    //Optios de talla de prendaService desde la api
    this.arrTalla = [];
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

    //Optios de ubicacion de userService desde la api
    this.arrUbicacion = [];
    this.userService.enumLocation().subscribe((data:Respuesta)=>{
      this.arrUbicacion = data.dataEnum;
    });
  }


  isFavorito(id:any){
    /* console.log(this.idsFavoritasParaEsteUsuario.includes(id)) */
    return this.idsFavoritasParaEsteUsuario.includes(id);
  }
  //-------- ACTIVAN O DESACTIVAN EL FILTRO (ICONO REDONDO CAMBIA DE COLOR A ROSA) --------//
  
  // ----- TIPO MUJER ------ //
  // Cambia el filtro de color (activa o desactiva) y aparece el input de TALLA
  filterMujer():void{
    this.mujerActive = !this.mujerActive;
    this.filtros2();
  }
  // Recoge el valor del selector de la talla 
  /* Por referencia se pasa el valor elegido en el desplegable, en el html se 
  recoge como (change)="tallaMujer(talla.value)" y se asigna al atributo public*/
  tallaMujer(tallaValue:string):void{
    this.selectedTallaMujer = tallaValue;
    this.filtros2();
  }

  // ----- TIPO HOMBRE ------ //
  // Cambia el filtro de color (activa o desactiva) y aparece el input de TALLA
  filterHombre():void{
    this.hombreActive = !this.hombreActive;
    this.filtros2();    
  }
  // Recoge el valor del selector de la talla 
  tallaHombre(tallaValue:string):void{
    this.selectedTallaHombre = tallaValue;
    this.filtros2();
  }

  // ----- TIPO ACCESPRIO ------ //
  // Cambia el filtro de color (activa o desactiva) y en este caso no aparece ningún filtro
  filterAccesorio():void{
    this.accesorioActive = !this.accesorioActive;
    this.filtros2();
  }


  // ----- SELECCIONA EL PRECIO MÁXIMO ------ //
  // Cambia el filtro de color (activa o desactiva) y aparece el input de PRECIO, no neceista otra función para recoger el valor, lo hace con [(ngModel)]
  filterPrecio():void{
    this.precioActive = !this.precioActive;
    this.filtros2();
  }

  // ----- SELECCIONA EL PRECIO MÁXIMO ------ //
  // Cambia el filtro de color (activa o desactiva) y aparece el input de EVENTO
  filterEvento():void{
    this.eventoActive = !this.eventoActive;
    this.filtros2();
  } 
  // Recoge el valor del selector del evento 
  eventoInfo(evento:string):void{
    this.selectedEvento = evento;
    this.filtros2();
  }

  // ----- SELECCIONA EL PRECIO MÁXIMO ------ //
  // Cambia el filtro de color (activa o desactiva) y aparece el input de UBICACIÓN
  filterUbicacion():void{
    this.ubicacionActive = !this.ubicacionActive;
    this.filtros2();
  }
  // Recoge el valor del selector de la ubicacioón 
  ubicacionInfo(ubicacion:string):void{
    this.selectedUbicacion = ubicacion;
    this.filtros2();
  }


  // ------- FILTROS ------ // 
  filtros2(){
    console.log("this.filtros2()");
    
    let tipo = undefined;
    console.log(tipo);

    let size = undefined; 
    let price = undefined;
    let event = undefined;
    let state = undefined;
    let location = undefined;

    //Asignar el tipo y la talla MUJER
    if(this.mujerActive){
      tipo = "Mujer";              
      if(this.selectedTallaMujer){
        size = `${this.selectedTallaMujer}`;
      }

    //Asignar el tipo y la talla HOMBRE
    }else if(this.hombreActive){
      tipo = "Hombre";        
      if(this.selectedTallaHombre){
        size = `${this.selectedTallaHombre}`;
        console.log(size);
      }

    //Asignar el tipo y la talla ACCESORIO
    }else if(this.accesorioActive){
      tipo = "Accesorio";

    //Si ninguno está activo es undefined
    }else{
      tipo = undefined;
    }
    
    //Asignar el precio 
    if(this.precioActive){
      price = this.valorRango;
      console.log(price);
    }else{
      price = undefined;
    }

    //Asignar evento
    if(this.eventoActive){
      if(this.selectedEvento){
        event = `${this.selectedEvento}`;        
      }
      console.log(event);
    }else{
      event = undefined;
    }

    //Asignar ubicación
    if(this.ubicacionActive){
      location = `${this.selectedUbicacion}`;
      console.log(location);
    }else{
      location = undefined;
    }
    console.log(tipo,size,price,event,state);
    

    //  Acceso al servicio de filtro para que sólo aparezcan tarjetas tipo = "Mujer" 
    console.log("datos por parametro home: ", tipo, size, price, event, state);    
    this.prendaService.filtroTipo(tipo,size,price,event,state).subscribe((data:Respuesta)=>{
      this.prendas = data.data;
      console.log("desde api en angular this.prendas: ",this.prendas);
    })
  }

  // -------- FIN -------- // 








  // Para poner el globo encima del input de la barra del precio 
  actualizarValor() {

    console.log(this.valorRango);
    
      // Establece la propiedad 'left' del elemento <span>
// -------------------------------------------------------------------------- //
    //   const inputElement = this.sliderInput.nativeElement as HTMLInputElement;
    //   const spanElement = this.sliderValue.nativeElement as HTMLSpanElement;  
    //   const rangeValue = parseInt(inputElement.value);
    //   const minValue = parseInt(inputElement.min);
    //   const maxValue = parseInt(inputElement.max);
      
    //   inputElement.addEventListener('input', () => {

    //     const leftValue = ((this.valorRango)/5) + '%';

    //     const leftValue = ((rangeValue - minValue) / (maxValue - minValue)) * 100 + '%';
    //     spanElement.style.left = leftValue;
    // });
    
  }

  onBlur() {
    this.sliderValue.nativeElement.classList.remove("show");
  }
  
}