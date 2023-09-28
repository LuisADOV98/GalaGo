import { Component, Input } from '@angular/core';
import { Prenda } from 'src/app/models/prenda';
import { User } from 'src/app/models/user';
import { FavoritosService } from 'src/app/shared/favoritos.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  isMisPrendasActive: boolean = true; // Inicialmente, Mis Prendas está activo
  isFavoritosActive: boolean = false;

  public misPrendas: Prenda[];
  public favoriteCards: Prenda[] = []; /////////

  public user: User;

  // @Input() prendasFavoritas: Prenda[];

  constructor(userService: UserService, public favoritosService: FavoritosService){
    this.user = userService.user;

    // this.misFavoritas = this.favoritosService.obtenerPrendasFavoritas()

    this.misPrendas = [   
      new Prenda ("Vestidin rosa",40,"Prenda muy bonita", "Alicante", "Nuevo", "S", "Boda", "Mujer", "https://img.freepik.com/foto-gratis/mujer-rubia-sorprendida-pelos-ventosos-posando-pared-rosa-hermosa-modelo-emociones-extaticas_273443-1824.jpg?w=1800&t=st=1695554151~exp=1695554751~hmac=8e67fb0c7d36456f7894194b16f3dd34def3b68fb9edd78285b3dd39c151d2de",2),
      new Prenda ("Vestidin rosa",40,"Prenda muy bonita", "Alicante", "Nuevo", "S", "Boda", "Mujer", "https://img.freepik.com/foto-gratis/mujer-rubia-sorprendida-pelos-ventosos-posando-pared-rosa-hermosa-modelo-emociones-extaticas_273443-1824.jpg?w=1800&t=st=1695554151~exp=1695554751~hmac=8e67fb0c7d36456f7894194b16f3dd34def3b68fb9edd78285b3dd39c151d2de",2),
      new Prenda ("Vestidin rosa",40,"Prenda muy bonita", "Alicante", "Nuevo", "S", "Boda", "Mujer", "https://img.freepik.com/foto-gratis/mujer-rubia-sorprendida-pelos-ventosos-posando-pared-rosa-hermosa-modelo-emociones-extaticas_273443-1824.jpg?w=1800&t=st=1695554151~exp=1695554751~hmac=8e67fb0c7d36456f7894194b16f3dd34def3b68fb9edd78285b3dd39c151d2de",2),
      new Prenda ("Vestidin rosa",40,"Prenda muy bonita", "Alicante", "Nuevo", "S", "Boda", "Mujer", "https://img.freepik.com/foto-gratis/mujer-rubia-sorprendida-pelos-ventosos-posando-pared-rosa-hermosa-modelo-emociones-extaticas_273443-1824.jpg?w=1800&t=st=1695554151~exp=1695554751~hmac=8e67fb0c7d36456f7894194b16f3dd34def3b68fb9edd78285b3dd39c151d2de",2),
      new Prenda ("Vestidin rosa",40,"Prenda muy bonita", "Alicante", "Nuevo", "S", "Boda", "Mujer", "https://img.freepik.com/foto-gratis/mujer-rubia-sorprendida-pelos-ventosos-posando-pared-rosa-hermosa-modelo-emociones-extaticas_273443-1824.jpg?w=1800&t=st=1695554151~exp=1695554751~hmac=8e67fb0c7d36456f7894194b16f3dd34def3b68fb9edd78285b3dd39c151d2de",2),
      new Prenda ("Vestidin rosa",40,"Prenda muy bonita", "Alicante", "Nuevo", "S", "Boda", "Mujer", "https://img.freepik.com/foto-gratis/mujer-rubia-sorprendida-pelos-ventosos-posando-pared-rosa-hermosa-modelo-emociones-extaticas_273443-1824.jpg?w=1800&t=st=1695554151~exp=1695554751~hmac=8e67fb0c7d36456f7894194b16f3dd34def3b68fb9edd78285b3dd39c151d2de",2)
    ]

    // this.misFavoritas = [   
      // new Prenda ("Vestidin rosa",40,"Prenda muy bonita", "Alicante", "Nuevo", "S", "Boda", "Mujer", "https://img.freepik.com/foto-gratis/chica-atractiva-traje-largo-festivo-lanzando-confeti-retrato-mujer-rubia-vestido-plateado-posando-felizmente-sobre-fondo-purpura_197531-29161.jpg?w=1800&t=st=1695588922~exp=1695589522~hmac=ef02c7a19022b2ec64641ad33a3b841382b082b8fd1c3eccc885c762f81cdc24",2),
      // new Prenda ("Vestidin rosa",40,"Prenda muy bonita", "Alicante", "Nuevo", "S", "Boda", "Mujer", "https://img.freepik.com/foto-gratis/chica-atractiva-traje-largo-festivo-lanzando-confeti-retrato-mujer-rubia-vestido-plateado-posando-felizmente-sobre-fondo-purpura_197531-29161.jpg?w=1800&t=st=1695588922~exp=1695589522~hmac=ef02c7a19022b2ec64641ad33a3b841382b082b8fd1c3eccc885c762f81cdc24",2),
      // new Prenda ("Vestidin rosa",40,"Prenda muy bonita", "Alicante", "Nuevo", "S", "Boda", "Mujer", "https://img.freepik.com/foto-gratis/chica-atractiva-traje-largo-festivo-lanzando-confeti-retrato-mujer-rubia-vestido-plateado-posando-felizmente-sobre-fondo-purpura_197531-29161.jpg?w=1800&t=st=1695588922~exp=1695589522~hmac=ef02c7a19022b2ec64641ad33a3b841382b082b8fd1c3eccc885c762f81cdc24",2),
      // new Prenda ("Vestidin rosa",40,"Prenda muy bonita", "Alicante", "Nuevo", "S", "Boda", "Mujer", "https://img.freepik.com/foto-gratis/chica-atractiva-traje-largo-festivo-lanzando-confeti-retrato-mujer-rubia-vestido-plateado-posando-felizmente-sobre-fondo-purpura_197531-29161.jpg?w=1800&t=st=1695588922~exp=1695589522~hmac=ef02c7a19022b2ec64641ad33a3b841382b082b8fd1c3eccc885c762f81cdc24",2),
      // new Prenda ("Vestidin rosa",40,"Prenda muy bonita", "Alicante", "Nuevo", "S", "Boda", "Mujer", "https://img.freepik.com/foto-gratis/chica-atractiva-traje-largo-festivo-lanzando-confeti-retrato-mujer-rubia-vestido-plateado-posando-felizmente-sobre-fondo-purpura_197531-29161.jpg?w=1800&t=st=1695588922~exp=1695589522~hmac=ef02c7a19022b2ec64641ad33a3b841382b082b8fd1c3eccc885c762f81cdc24",2),
      // new Prenda ("Vestidin rosa",40,"Prenda muy bonita", "Alicante", "Nuevo", "S", "Boda", "Mujer", "https://img.freepik.com/foto-gratis/chica-atractiva-traje-largo-festivo-lanzando-confeti-retrato-mujer-rubia-vestido-plateado-posando-felizmente-sobre-fondo-purpura_197531-29161.jpg?w=1800&t=st=1695588922~exp=1695589522~hmac=ef02c7a19022b2ec64641ad33a3b841382b082b8fd1c3eccc885c762f81cdc24",2)
    // ]
  }

  //Para que muestre los favoritos
  ngOnInit(){
    this.favoriteCards = this.favoritosService.getFavorites();
    console.log(this.favoriteCards);
  }

  ed_perfil(updateUser:User){
    this.user = updateUser;
  }

  mostrarMisPrendas(){
    this.isMisPrendasActive = true;
    this.isFavoritosActive = false;
  }

  mostrarFavoritos(){
    this.isFavoritosActive = true;
    this.isMisPrendasActive = false;
  }

  // toggleTab(tab: string) {
  //   if (tab === 'mis-prendas') {
  //     this.isMisPrendasActive = true;
  //     this.isFavoritosActive = false;
  //   } else if (tab === 'favoritos') {
  //     this.isMisPrendasActive = false;
  //     this.isFavoritosActive = true;
  //   }

  // }
  // ngOnInit(): void {
  //   this.verTodas();
  // }



  // public listdeVideos: Array<any> = []

  // ngOnInit(): void{
  //   if(this.isMisPrendasActive == false){
  //   this.favoritosService.disparadorDeFavs.subscribe(data => {
  //     console.log("Recibiendo data...", data);
  //     this.listdeVideos.push(data);
  //   })}
  // }
  //PARA FAVORITOS
  // Agregar la prenda a la lista de favoritas 
  // agregarAFavoritas(prenda: any) {
  //   if(this.isFavoritosActive === true){
  //     this.misFavoritas.push(prenda);
  //   }
  // }
}
