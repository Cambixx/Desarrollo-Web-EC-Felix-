import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  p1: string= ""
  p2: string= ""
  p3: String= ""
  p4: String= ""
  p5: String= ""

  volver= "Volver a la lista de videojuegos";

  constructor(route: ActivatedRoute) { 

    this.p1= route.snapshot.queryParams["id"]
    this.p2= route.snapshot.queryParams["titulo"]
    this.p3= route.snapshot.queryParams["compania"]
    this.p4= route.snapshot.queryParams["imagen"]
    this.p5= route.snapshot.queryParams["valoracion"]
  }
  
  ngOnInit(): void {
  }

}
