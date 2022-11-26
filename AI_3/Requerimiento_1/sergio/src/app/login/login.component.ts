import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre : String = ""
  contrasena :String =""

  usuarioIncorrecto : boolean = false
  
  texto : String =" "

  listaUsuarios=[
    {id: 1, nombre: "Sergio", contrasena: "123"},
    {id: 2, nombre: "Carlos", contrasena: "123"},
    {id: 3, nombre: "Lidia", contrasena: "123"},
    {id: 4, nombre: "Lucia", contrasena: "123"},
  ]

  public iniciarSesion(nombre :String , contrasena: String){
    for (let i = 0; i < this.listaUsuarios.length; i++) {
      if (nombre == this.listaUsuarios[i].nombre && contrasena == this.listaUsuarios[i].contrasena) {
        this.usuarioIncorrecto= !this.usuarioIncorrecto       
        this.texto="Hola de nuevo " + " " + this.nombre
      }else{
        this.usuarioIncorrecto= false
        this.texto="El usuario " + this.nombre + " no existe o la contraseña es incorrecta"
      }
    }
  }
  



  constructor() { }

  ngOnInit(): void {
  }

}
