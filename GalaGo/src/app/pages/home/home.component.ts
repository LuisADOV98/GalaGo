import { AfterViewInit, Component } from '@angular/core';
import { Prenda } from 'src/app/models/prenda';
import { CommonModule } from '@angular/common';
import { ElementRef, Renderer2, ViewChild } from '@angular/core';

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
  public selectedUbicacion: String = ""; 
  public valorRango: number = 0;
  public valorGlobo: number = 0;
  
  @ViewChild('sliderValue') sliderValue: ElementRef; // Referencia al elemento <span>
  @ViewChild('sliderInput') sliderInput: ElementRef; // Referencia al elemento <input>

  constructor(){
    this.prendas = [
      new Prenda("Uno", 10, "Descip", "Alc", "Nuevo","xs","Boda","Mujer"),
      new Prenda("Dos", 20, "Descip", "Mdr", "Nuevo","xs","Boda","Hombre"),
      new Prenda("Tres", 30, "Descip", "Val", "Nuevo","xs","Boda","Accesorio")
    ]
    this.arrTipo = ["Accesorio", "Mujer", "Hombre"];
    this.arrTalla = ["Unica","S","M","L","XL","XXL"];
    this.arrEvento = ["Bodas","Comuniones","Nochevieja","Disfraces"];
    this.arrEstado = ["Nuevo", "Semi nuevo","Usado"]
    this.arrUbicacion = ["Madrid","Barcelona","Badajoz","Ávila"]
    
  }

  filterMujer():void{
    this.mujerActive = !this.mujerActive;
    console.log("filterMujer:",this.mujerActive);
  }
  filterHombre():void{
    this.hombreActive = !this.hombreActive;
    console.log("hombre",this.hombreActive);    
  }

  filterAccesorio():void{
    this.accesorioActive = !this.accesorioActive;
    console.log("accesorio",this.accesorioActive);    
  }

  filterPrecio():void{
    this.precioActive = !this.precioActive;
    console.log("precio",this.precioActive);    
  }

  filterEvento():void{
    this.eventoActive = !this.eventoActive;
    console.log("evento",this.eventoActive);    
  }

  filterUbicacion():void{
    this.ubicacionActive = !this.ubicacionActive;
    console.log("ubicacion",this.ubicacionActive);    
  }

  //SELECCION DE FILTROS 
  /* Por referencia se pasa el valor elegido en el desplegable, en el html se 
  recoge como (change)="tallaMujer(talla.value)" y se asigna al atributo public*/
  
  tallaMujer(tallaValue:string):void{
    this.selectedTallaMujer = tallaValue;
    console.log("selectedTallaMujer:",this.selectedTallaMujer);
  }
  
  tallaHombre(tallaValue:string):void{
    this.selectedTallaHombre = tallaValue;
    console.log("selectedTallaHombre:",this.selectedTallaHombre);
  }

  evento(evento:string):void{
    this.selectedEvento = evento;
    console.log("selectedEvento:",this.selectedEvento);
  }

  ubicacion(ubicacion:string):void{
    this.selectedUbicacion = ubicacion;
    console.log("selectedUbicacion:",this.selectedUbicacion);
  }

  actualizarValor() {

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