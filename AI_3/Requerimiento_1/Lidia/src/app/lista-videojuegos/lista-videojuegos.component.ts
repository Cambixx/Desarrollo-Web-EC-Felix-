import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-videojuegos',
  templateUrl: './lista-videojuegos.component.html',
  styleUrls: ['../app.component.css', './lista-videojuegos.component.css']
})
export class ListaVideojuegosComponent implements OnInit {

  listaVideoJuegos = [
    {id: 1, titulo: "Persona 5: Royal", compania: "ATLUS", imagen: "/assets/portadas/persona-5-royal.jpg", valoracion: 9.69},
    {id: 2, titulo: "The Legend of Zelda: Breath of the Wild", compania: "Nintendo", imagen: "/assets/portadas/zelda.jpg", valoracion: 9.53},
    {id: 3, titulo: "The Last of Us", compania: "Naughty Dog", imagen: "/assets/portadas/last-of-us-1.jpg", valoracion: 9.44},
    {id: 4, titulo: "God Of War", compania: "Santa Mónica", imagen: "/assets/portadas/god-of-war.jpg", valoracion: 9.4},
    {id: 5, titulo: "The Elder Scrolls V: Skyrim ", compania: "Bethesda", imagen:"/assets/portadas/skyrim.jpg", valoracion: 9.39},
    {id: 6, titulo: "BioShock", compania: "Irrational Games", imagen:"/assets/portadas/bioshock.jpg", valoracion: 9.37},
    {id: 7, titulo: "The Witcher 3: Wild Hunt", compania: "CD PROJECKT RED", imagen:"/assets/portadas/the-witcher-3.jpg", valoracion: 9.35},
    {id: 8, titulo: "Fire Emblem: Three Houses", compañia: "Nintendo", imagen:"/assets/portadas/fire-emblem.jpg", valoracion: 9.25},
    {id: 9, titulo: "Resident Evil 2 Remake", compania: "Capcom", imagen:"/assets/portadas/resident-evil-2-remake.jpg", valoracion: 9.17},
    {id: 10, titulo: "Fallout 3", compañia: "Bethesda Softworks", imagen:"/assets/portadas/fallout-3.jpg", valoracion: 9.16}

  ]

  username: string = ""
  password: string = ""
  mostrarLista: boolean = false
  mostrarLogin: boolean = true
  mostrarMensaje: boolean = false
  mostrarUsuario: boolean = false

  listaUsuarios = [
    {username: 'Lidia', password: "123"},
    {username: 'Carlos', password: "123"},
    {username: 'Sergio', password: "123"},
    {username: 'Lucía', password: "123"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public login(username: string, password: string) {
    for (let i = 0; i < this.listaUsuarios.length; i++) {
      if (username == this.listaUsuarios[i].username && password == this.listaUsuarios[i].password) {
        this.mostrarLista = !this.mostrarLista
        this.mostrarLogin = !this.mostrarLogin
        this.mostrarUsuario = !this.mostrarUsuario
      }else{
        this.mostrarMensaje = true
        setTimeout(() => {
          this.mostrarMensaje = false
        }, 2500);
      }
    }
  }
  public cerrarSesion() {
    this.mostrarLista = !this.mostrarLista
    this.mostrarLogin = !this.mostrarLogin
    this.mostrarUsuario = !this.mostrarUsuario
    this.username = ''
    this.password = ''
  }

}
