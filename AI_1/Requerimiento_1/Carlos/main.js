
let contenedor = document.querySelector('.contenedor');

let formulario = document.createElement('form')

function creaH1(e, titulo) {
  let h1 = document.createElement('h1')
  h1.textContent = titulo
  e.appendChild(h1)
}

function creaTitulo(e, texto) {
  let titulo = document.createElement('p')
  titulo.textContent = texto
  titulo.style.fontWeight = 'bold'
  titulo.style.fontSize = '18px'
  e.appendChild(titulo)
}

function creaSpan(e, etiqueta) {
  let span = document.createElement('span')
  span.textContent = etiqueta
  e.appendChild(span)
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
  creaSpan(e, texto)
  creaSalto(e)
}

function creaCheck(e, texto) {
  let checkB = document.createElement('input')
  checkB.type = 'checkbox'
  e.appendChild(checkB)
  creaSpan(e, texto)
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
creaH1(formulario, 'Título')
agregaInputs()
agregaRadio1()
agregaRadio2()
agregaCheck()
agregaImagen(formulario, 'Imagen Random', 'https://source.unsplash.com/300x300')
agregaImagen(formulario, 'Imagen Random', 'https://source.unsplash.com/301x301')
let opciones = ['Fruta de la pasión', 'Banana', 'Melón', 'Fresa']
creaSelect(formulario, 'Fruta preferida', opciones)
creaTextArea(formulario, 'Mensaje', 'Escribe tu mensaje')
