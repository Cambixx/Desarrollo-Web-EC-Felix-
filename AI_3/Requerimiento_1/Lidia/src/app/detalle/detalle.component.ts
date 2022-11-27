import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['../app.component.css','./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  imagen : string = ''
  id : string = ''
  titulo : string = ''
  compania : string = ''
  valoracion : string = ''

  constructor(route : ActivatedRoute) { 
    this.imagen = route.snapshot.queryParams["imagen"]
    this.id = route.snapshot.queryParams["id"]
    this.titulo = route.snapshot.queryParams["titulo"]
    this.compania = route.snapshot.queryParams["compania"]
    this.valoracion = route.snapshot.queryParams["valoracion"]
  }

  ngOnInit(): void {
  }

}
