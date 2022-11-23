import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Hay que importar FormsModule de @angular/forms para poder haer two way binding
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListadoVideojuegosComponent } from './listado-videojuegos/listado-videojuegos.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ListaComponent } from './lista/lista.component';





@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListadoVideojuegosComponent,
    DetalleComponent,
    ContactoComponent,
    SobreNosotrosComponent,
    ListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Este modulo lo debemos importar para poder hacer el Two way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
