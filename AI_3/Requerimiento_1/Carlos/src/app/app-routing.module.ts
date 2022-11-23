import { ListaComponent } from './lista/lista.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetalleComponent } from './detalle/detalle.component';

import { ListadoVideojuegosComponent } from './listado-videojuegos/listado-videojuegos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListadoVideojuegosComponent
  },
  {
    path: 'listaVideoJuegos',
    component: ListadoVideojuegosComponent
  },
  {
    path: 'detalle',
    component: DetalleComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'sobreNosotros',
    component: SobreNosotrosComponent
  },
  {
    path: 'lista',
    component: ListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
