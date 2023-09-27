import { Component } from '@angular/core';
import { Desarrolladores } from 'src/app/models/desarrolladores';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent {
  public tarjetas: Desarrolladores[];
  constructor(){

    this.tarjetas = [
                      new Desarrolladores("Janet Rojas", "Full Stack Developer", "../../../assets/quienesSomos/janet.png", "../../../assets/quienesSomos/github-512 2.png"),
                      new Desarrolladores("Mabel San Román", "Full Stack Developer", "../../../assets/quienesSomos/mabel.jpeg", "../../../assets/quienesSomos/github-512 2.png"),
                      new Desarrolladores("Luis De Oliveira", "Full Stack Developer", "../../../assets/quienesSomos/luis 2.jpg", "../../../assets/quienesSomos/github-512 2.png"),
                      new Desarrolladores("Cristina Muñoz", "Full Stack Developer", "../../../assets/quienesSomos/cristina.jpg", "../../../assets/quienesSomos/github-512 2.png"),
                      new Desarrolladores("Juan Ángel", "Full Stack Developer", "../../../assets/quienesSomos/juanA.jpg", "../../../assets/quienesSomos/github-512 2.png"),

    ]


}




}