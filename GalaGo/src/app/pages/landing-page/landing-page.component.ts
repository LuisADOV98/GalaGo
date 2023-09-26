import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Prenda } from 'src/app/models/prenda';
import { Respuesta } from 'src/app/models/respuesta';
import { PrendaService } from 'src/app/shared/prenda.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  public prendas:Prenda[] = []

  constructor(public router: Router, public prendaService: PrendaService){
    
     this.prendaService.getPrenda().subscribe((data:Respuesta) =>{
      this.prendas = data.data;
      console.log(data.data);
      
     })
  }

  public irLogin(){
    this.router.navigate(["/login"]);
  }

  
}
