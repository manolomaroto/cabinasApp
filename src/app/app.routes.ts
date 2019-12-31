
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CabinasComponent } from './components/cabinas/cabinas.component';
import { CabinaComponent } from './components/cabina/cabina.component';
import { BuscadorComponent } from './components/buscador/buscador.component';





const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cabinas', component: CabinasComponent },
    { path: 'about', component: AboutComponent },
    { path: 'cabina/:id', component: CabinaComponent },
    { path: 'buscador/:termino', component: BuscadorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
