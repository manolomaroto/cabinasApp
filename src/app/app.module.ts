import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { CabinasService } from './services/cabinas.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CabinasComponent } from './components/cabinas/cabinas.component';
import { CabinaComponent } from './components/cabina/cabina.component';

// pipes
import { SafePipe } from './pipes/url-safe.pipe';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CabinaTarjetaComponent } from './components/cabina-tarjeta/cabina-tarjeta.component';
import { LoginComponent } from './components/login/login.component';
import { AccederComponent } from './components/acceder/acceder.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CabinasComponent,
    CabinaComponent,
    SafePipe,
    BuscadorComponent,
    CabinaTarjetaComponent,
    LoginComponent,
    AccederComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    CabinasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
