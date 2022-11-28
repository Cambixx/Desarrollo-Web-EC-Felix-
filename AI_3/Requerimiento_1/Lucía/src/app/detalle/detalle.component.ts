import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  parametro1 : string = ''
  parametro2 : string = ''
  parametro3 : string = ''
  parametro4 : string = ''
  parametro5 : string = ''

  constructor(route : ActivatedRoute) {
    this.parametro1 = route.snapshot.queryParams["id"]
    this.parametro2 = route.snapshot.queryParams["titulo"]
    this.parametro3 = route.snapshot.queryParams["compania"]
    this.parametro4 = route.snapshot.queryParams["idImagen"]
    this.parametro5 = route.snapshot.queryParams["vMedia"]
   }

  ngOnInit(): void {
  }

}
