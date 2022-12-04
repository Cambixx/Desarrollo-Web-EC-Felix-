import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['../app.component.css','./about-us.component.css']
  // Tenemos la hoja de estilos principal y la propia del componente
})
export class AboutUsComponent implements OnInit {
  
  // Declaramos las imágenes que serán llamadas en el html
  imagen1= "/assets/img/ldiaz.png"
  imagen2= "/assets/img/foto-Carlos.jpg"
  imagen3= "/assets/img/smartinez.jpg"
  imagen4= "/assets/img/Fotocarnet_LuciaPerez.jpg"

  // Declaramos a los integrantes con su nombre que serán llamados en el html
  integrante1 :String= "Lidia Díaz"
  integrante2 :String= "Carlos Rábago"
  integrante3 :String= "Sergio Martínez"
  integrante4 :String= "Lucía Pérez"

  constructor() { }

  ngOnInit(): void {
  }

}
