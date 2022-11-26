import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ele1 : String = "Sobre Nosotros"
  ele2 : String = "Contacto"
  ele3 : String = "Videojuegos"
  
  imagen : String ="https://img.freepik.com/vector-premium/logotipo-simple-controlador-videojuegos_102026-584.jpg?w=2000"


  constructor() { }

  ngOnInit(): void {
  }

}
