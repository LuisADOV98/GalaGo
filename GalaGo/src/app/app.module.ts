import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaChatComponent } from './component/tarjeta-chat/tarjeta-chat.component';
import { HeaderComponent } from './component/header/header.component';
import { CardComponent } from './component/card/card.component';
import { FooterComponent } from './component/footer/footer.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ConversacionChatComponent } from './pages/conversacion-chat/conversacion-chat.component';
import { DetallePrendaComponent } from './pages/detalle-prenda/detalle-prenda.component';
import { ContactaComponent } from './pages/contacta/contacta.component';
import { EditarPrendaComponent } from './pages/editar-prenda/editar-prenda.component';
import { PublicarPrendaComponent } from './pages/publicar-prenda/publicar-prenda.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalFavoritosComponent } from './component/modal-favoritos/modal-favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaChatComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    ChatComponent,
    ConversacionChatComponent,
    DetallePrendaComponent,
    ContactaComponent,
    EditarPrendaComponent,
    PublicarPrendaComponent,
    RegistroComponent,
    LoginComponent,
    PerfilComponent,
    QuienesSomosComponent,
    LandingPageComponent,
    HomeComponent,
    EditarPerfilComponent,
    ModalFavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
