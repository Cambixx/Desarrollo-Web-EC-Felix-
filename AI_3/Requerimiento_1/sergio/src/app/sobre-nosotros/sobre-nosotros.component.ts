import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css']
})
export class SobreNosotrosComponent implements OnInit {

  imagen1= "https://img.freepik.com/vector-premium/perfil-avatar-mujer-icono-redondo_24640-14047.jpg"
  imagen2= "https://img.freepik.com/vector-premium/perfil-avatar-mujer-icono-redondo_24640-14042.jpg?w=2000"
  imagen3= "https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=2000"
  imagen4= "https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14046.jpg?w=2000"

  integrante1 :String= "Lidia Díaz"
  integrante2 :String= "Lucía Pérez"
  integrante3 :String= "Carlos Rábago"
  integrante4 :String= "Sergio Martínez"

  constructor() { }

  ngOnInit(): void {
  }

}
