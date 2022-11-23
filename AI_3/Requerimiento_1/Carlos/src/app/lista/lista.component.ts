import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listaVJ = [
    {id: 1, titulo: "Call of Duty", compania: "Activision", idImagen: "GfbBLOtMGrw", vMedia: 4.5},
    {id: 2, titulo: "Super Mario Bros", compania: "Nintendo", idImagen: "JdSBxDTTJGQ", vMedia: 5},
    {id: 3, titulo: "Pacman", compania: "Namco", idImagen: "bS46IAXWAO4", vMedia: 4.6},
    {id: 4, titulo: "Sonic", compania: "Sega", idImagen: "sYVY_ZKwaxU", vMedia: 4.7},
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
