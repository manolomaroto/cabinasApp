import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CabinasComponent,
    CabinaComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    CabinasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
