import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ListaVideojuegosComponent } from './lista-videojuegos/lista-videojuegos.component';
import { DetalleComponent } from './detalle/detalle.component';

// Aquí indicamos todas las rutas que tendrá nuestra aplicación web, para que se relacione con su componente
const routes: Routes = [
  {
    path: '',
    component: ListaVideojuegosComponent
  },
  {
    path: 'detalle',
    component: DetalleComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'lista-videojuegos',
    component: ListaVideojuegosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
