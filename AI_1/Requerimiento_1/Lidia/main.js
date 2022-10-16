
let contenedor = document.querySelector('.contenedor');

let formulario = document.createElement('form')

function creaH1(e, titulo) {
  let h1 = document.createElement('h1')
  let clase = document.createAttribute('class')
  clase.value="titulo";
  h1.setAttributeNode(clase)
  h1.textContent = titulo
  e.appendChild(h1)
}

function creaTitulo(e, texto) {
  let titulo = document.createElement('label')
  let clase = document.createAttribute('class')
  clase.value="subtitulo";
  titulo.setAttributeNode(clase)
  titulo.textContent = texto
  e.appendChild(titulo)
}

function creaLabel(e, etiqueta) {
  let label = document.createElement('label')
  let clase = document.createAttribute('class')
  clase.value="label";
  label.setAttributeNode(clase)
  label.textContent = etiqueta
  e.appendChild(label)
}

function creaInput(e, titulo) {
  creaTitulo(formulario, titulo)
  let input = document.createElement('input')
  e.appendChild(input)
}

function creaSalto(e) {
  let salto = document.createElement('br')
  e.appendChild(salto)
}

function creaRadioButton(e, name, texto) {
  let radioB = document.createElement('input')
  radioB.type = 'radio'
  radioB.name = name
  e.appendChild(radioB)
  creaLabel(e, texto)
  creaSalto(e)
}

function creaCheck(e, texto) {
  let checkB = document.createElement('input')
  checkB.type = 'checkbox'
  e.appendChild(checkB)
  creaLabel(e, texto)
  creaSalto(e)
}

function agregaInputs() {
  creaInput(formulario, 'DNI')
  creaInput(formulario, 'Nombre')
  creaInput(formulario, 'Apellidos')
  creaInput(formulario, 'Dirección')
  creaInput(formulario, 'Teléfono')
}

function agregaRadio1() {
  creaTitulo(formulario, 'Cuantas veces te lavas las manos')
  creaRadioButton(formulario, 'lavar', '1 vez al día')
  creaRadioButton(formulario, 'lavar', '3 veces al día')
  creaRadioButton(formulario, 'lavar', '5 veces al día')
  creaRadioButton(formulario, 'lavar', 'Alguna vez me las lavo')
  creaRadioButton(formulario, 'lavar', 'Nunca me lavo las manos')
}

function agregaRadio2() {
  creaTitulo(formulario, 'Elige la mejor de las siguientes películas')
  creaRadioButton(formulario, 'peliculas', 'Chucky')
  creaRadioButton(formulario, 'peliculas', 'Titanic')
  creaRadioButton(formulario, 'peliculas', 'Ironman')
  creaRadioButton(formulario, 'peliculas', 'Batman')
  creaRadioButton(formulario, 'peliculas', 'El padrino')
}

function agregaCheck() {
  creaTitulo(formulario, 'De los siguientes deportes, elige tus favoritos')
  creaCheck(formulario, 'Golf')
  creaCheck(formulario, 'Alpinismo')
  creaCheck(formulario, 'Tiro con Arco')
  creaCheck(formulario, 'Natación')
  creaCheck(formulario, 'Ninguno')
}

function agregaImagen(e, titulo, url) {
  creaTitulo(e, titulo)
  let imagen = document.createElement('img')
  imagen.src = url
  e.appendChild(imagen)
}

function creaSelect(e, titulo, opciones) {
  creaTitulo(e, titulo)
  let select = document.createElement('select')
  for (let i = 0; i < opciones.length; i++) {
    let opcion = document.createElement('option')
    opcion.textContent = opciones[i]
    select.appendChild(opcion)
  }
  e.appendChild(select)
}

function creaTextArea(e, titulo, textoInterno) {
  creaTitulo(e, titulo)
  let textArea = document.createElement('textarea')
  textArea.placeholder = textoInterno
  textArea.cols = 30
  textArea.rows = 10
  e.appendChild(textArea)
}


contenedor.append(formulario)
creaH1(formulario, 'Requerimiento 1')
agregaInputs()
agregaRadio1()
agregaRadio2()
agregaCheck()
agregaImagen(formulario, 'Imagen Random', 'https://source.unsplash.com/300x300')
agregaImagen(formulario, 'Imagen Random', 'https://source.unsplash.com/301x301')
let opciones = ['Fruta de la pasión', 'Banana', 'Melón', 'Fresa']
creaSelect(formulario, 'Fruta preferida', opciones)
creaTextArea(formulario, 'Mensaje', 'Escribe tu mensaje')
