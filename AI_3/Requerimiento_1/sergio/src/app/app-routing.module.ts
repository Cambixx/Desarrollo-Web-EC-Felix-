import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetallesComponent } from './detalles/detalles.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';

const routes: Routes = [

  {path : 'contacto', component : ContactoComponent},
  {path : "sobreNosotros", component : SobreNosotrosComponent},
  {path: "videojuegos", component: VideojuegosComponent },
  {path: "detalles", component: DetallesComponent},
  {path: "inicio", component: AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
