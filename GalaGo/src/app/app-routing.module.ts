import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './component/card/card.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { TarjetaChatComponent } from './component/tarjeta-chat/tarjeta-chat.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ContactaComponent } from './pages/contacta/contacta.component';
import { ConversacionChatComponent } from './pages/conversacion-chat/conversacion-chat.component';
import { DetallePrendaComponent } from './pages/detalle-prenda/detalle-prenda.component';
import { EditarPrendaComponent } from './pages/editar-prenda/editar-prenda.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PublicarPrendaComponent } from './pages/publicar-prenda/publicar-prenda.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { Prenda } from './models/prenda';

const routes: Routes = [
  {path:"", component: HomeComponent},
  //{path:"", component: LandingPageComponent},
  {path:"card", component: CardComponent},
  {path:"footer", component: FooterComponent},
  {path:"header", component: HeaderComponent},
  {path:"tarjeta-chat", component: TarjetaChatComponent},
  {path:"chat", component: ChatComponent},
  {path:"contacta", component: ContactaComponent},
  {path:"conversacion-chat", component: ConversacionChatComponent},
  {path:"detalle-prenda", component: DetallePrendaComponent},
  {path:"editar-prenda", component: EditarPrendaComponent},
  {path:"home", component: HomeComponent},
  {path:"landing-page", component: LandingPageComponent},
  {path:"login", component: LoginComponent},
  {path:"perfil", component: PerfilComponent},
  {path:"publicar-prenda", component: PublicarPrendaComponent},
  {path:"quienes-somos", component: QuienesSomosComponent},
  {path:"registro", component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
