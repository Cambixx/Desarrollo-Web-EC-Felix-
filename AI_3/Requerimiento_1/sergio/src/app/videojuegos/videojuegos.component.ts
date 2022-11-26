import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  estiloCaja="3"

  listaVideoJuegos=[
    {id: 1, titulo: "God Of War", compania: "Santa Monica", imagen:"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2022/10/god-war-ragnarok-2846657.jpg?itok=pkeYoRJf", valoracion: 10},
    {id: 2, titulo: "Cyberpunk", compania: "CD PROJECT RED", imagen:"https://images5.alphacoders.com/927/927025.png", valoracion:6},
    {id: 3, titulo:"The Last of Us", compania: "Naughty Dog", imagen:"https://i.pinimg.com/originals/17/61/49/17614910c4864cf51b72be6e60964f25.jpg", valoracion: 10},
    {id: 4, titulo:"GTA San Andreas", compania: "Rockstar games", imagen:"https://steamuserimages-a.akamaihd.net/ugc/753718226914330864/7811D268011F2718DC3F8A45FD2EA1A06E137AAB/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", valoracion: 9.5},
    {id: 5, titulo:"Dark Souls 2", compañia: "Fromtsoftware", imagen:"https://images7.alphacoders.com/528/thumb-1920-528418.jpg", valoracion: 8.5}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
