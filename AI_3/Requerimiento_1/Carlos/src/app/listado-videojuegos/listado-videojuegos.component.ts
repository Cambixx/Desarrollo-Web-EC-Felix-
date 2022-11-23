import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-videojuegos',
  templateUrl: './listado-videojuegos.component.html',
  styleUrls: ['./listado-videojuegos.component.css']
})
export class ListadoVideojuegosComponent implements OnInit {

  usuario: string = ""
  contrasena: string = ""
  mostrarLista: boolean = false
  mostrarLogin: boolean = true
  mostrarMensaje: boolean = false
  mostrarUsuario: boolean = false
  // PROPIEDADES

  listaUsuarios = [
    {nUsuario: 'Carlos', contrasena: "123"},
    {nUsuario: 'Ana', contrasena: "123"},
    {nUsuario: 'Luis', contrasena: "123"},
    {nUsuario: 'Rebeca', contrasena: "123"},
    {nUsuario: 'Pedro', contrasena: "123"},
    {nUsuario: 'Lucia', contrasena: "123"},
  ]

  listaVJ = [
    {id: 1, titulo: "Call of Duty", compania: "Activision", idImagen: "GfbBLOtMGrw", vMedia: 4.5},
    {id: 2, titulo: "Super Mario Bros", compania: "Nintendo", idImagen: "JdSBxDTTJGQ", vMedia: 5},
    {id: 3, titulo: "Pacman", compania: "Namco", idImagen: "bS46IAXWAO4", vMedia: 4.6},
    {id: 4, titulo: "Sonic", compania: "Sega", idImagen: "sYVY_ZKwaxU", vMedia: 4.7},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  
  public login(usuario: string, contrasena: string) {
    for (let i = 0; i < this.listaUsuarios.length; i++) {
      if (usuario == this.listaUsuarios[i].nUsuario && contrasena == this.listaUsuarios[i].contrasena) {
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
    this.usuario = ''
    this.contrasena = ''
  }
  

}
