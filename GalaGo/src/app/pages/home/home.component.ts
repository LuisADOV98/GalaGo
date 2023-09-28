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
  public arrTipo: String[];
  public arrTalla: String[];
  public arrEvento: String[];
  public arrEstado: String[];
  public arrUbicacion: String[];
  
  public selectedTallaMujer: String = "";
  public selectedTallaHombre: String = "";
  public selectedEvento: String = "";
  public selectedUbicacion: string = "";
  public valorRango: number = 0;
  // public valorGlobo: number = 0;
  // public ubicacion: string
  
  @ViewChild('sliderValue') sliderValue: ElementRef; // Referencia al elemento <span>
  @ViewChild('sliderInput') sliderInput: ElementRef; // Referencia al elemento <input>

  constructor(public router: Router, public prendaService: PrendaService, public userService: UserService){
    this.prendas = []
    this.prendaService.getPrendaHome().subscribe((data:Respuesta) =>{
      this.prendas = data.data;
    });

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

  //-------- ACTIVAN O DESACTIVAN EL FILTRO (ICONO REDONDO CAMBIA DE COLOR A ROSA) --------//
  
  // ----- TIPO MUJER ------ //
  // Cambia el filtro de color (activa o desactiva) y aparece el input de TALLA
  filterMujer():void{
    this.mujerActive = !this.mujerActive;
    console.log("filterMujer:",this.mujerActive);
  }
  // Recoge el valor del selector de la talla 
  /* Por referencia se pasa el valor elegido en el desplegable, en el html se 
  recoge como (change)="tallaMujer(talla.value)" y se asigna al atributo public*/
  tallaMujer(tallaValue:string):void{
    this.selectedTallaMujer = tallaValue;
    console.log("selectedTallaMujer:",this.selectedTallaMujer);
  }

  // ----- TIPO HOMBRE ------ //
  // Cambia el filtro de color (activa o desactiva) y aparece el input de TALLA
  filterHombre():void{
    this.hombreActive = !this.hombreActive;    
    console.log("hombre",this.hombreActive);    
  }
  // Recoge el valor del selector de la talla 
  tallaHombre(tallaValue:string):void{
    this.selectedTallaHombre = tallaValue;
    console.log("selectedTallaHombre:",this.selectedTallaHombre);
  }

  // ----- TIPO ACCESPRIO ------ //
  // Cambia el filtro de color (activa o desactiva) y en este caso no aparece ningún filtro
  filterAccesorio():void{
    this.accesorioActive = !this.accesorioActive;
    console.log("accesorio",this.accesorioActive);    
  }


  // ----- SELECCIONA EL PRECIO MÁXIMO ------ //
  // Cambia el filtro de color (activa o desactiva) y aparece el input de PRECIO, no neceista otra función para recoger el valor, lo hace con [(ngModel)]
  filterPrecio():void{
    this.precioActive = !this.precioActive;
    console.log("valor rango precio: ",this.valorRango);
    console.log("precio",this.precioActive);    
  }


  // ----- SELECCIONA EL PRECIO MÁXIMO ------ //
  // Cambia el filtro de color (activa o desactiva) y aparece el input de EVENTO
  filterEvento():void{
    this.eventoActive = !this.eventoActive;
    console.log("evento",this.eventoActive);    
  } 
  // Recoge el valor del selector del evento 
  eventoInfo(evento:string):void{
    this.selectedEvento = evento;
    console.log("selectedEvento:",this.selectedEvento);
  }


  // ----- SELECCIONA EL PRECIO MÁXIMO ------ //
  // Cambia el filtro de color (activa o desactiva) y aparece el input de UBICACIÓN
  filterUbicacion():void{
    this.ubicacionActive = !this.ubicacionActive;
    console.log("ubicacion",this.ubicacionActive);    
  }
  // Recoge el valor del selector de la ubicacioón 
  ubicacionInfo(ubicacion:string):void{
    this.selectedUbicacion = ubicacion;
    console.log("selectedUbicacion:",this.selectedUbicacion);
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