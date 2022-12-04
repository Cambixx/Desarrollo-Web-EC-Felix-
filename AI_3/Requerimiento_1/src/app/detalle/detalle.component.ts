import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Importamos ActivateRoute para poder utilizar los parametros que estamos pasando por url en esta página

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['../app.component.css','./detalle.component.css']
})

export class DetalleComponent implements OnInit {
  // Aunque traigamos los parámetros desde la url, tenemos que crear igualmente las variables para almacenarlos
  // Para no perderlo al volver al listado, guardamos también el usuario
  imagen : string = ''
  id : string = ''
  titulo : string = ''
  compania : string = ''
  valoracion : string = ''
  username :  string = ''

  // Guardamos en esas variables los parámetros que hemos recibido
  constructor(route : ActivatedRoute) { 
    this.imagen = route.snapshot.queryParams["imagen"]
    this.id = route.snapshot.queryParams["id"]
    this.titulo = route.snapshot.queryParams["titulo"]
    this.compania = route.snapshot.queryParams["compania"]
    this.valoracion = route.snapshot.queryParams["valoracion"]
    this.username = route.snapshot.queryParams["username"]
  }

  ngOnInit(): void {
  }

}
